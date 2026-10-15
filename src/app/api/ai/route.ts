import { NextRequest, NextResponse } from "next/server";

/*
 * /api/ai — Proxy server-side para a IA do orçamento (NVIDIA NIM).
 *
 * Por que existe: o integrate.api.nvidia.com NÃO envia access-control-allow-origin,
 * então o browser não consegue chamar o NIM direto (CORS). E a key nunca deve
 * vazar pro client. Este route faz a chamada server-side, mesma-origin com o site.
 *
 * Modelo: z-ai/glm-5.3-flash (escolhido pelo dono — substitui o gemini-2.5-flash).
 * Key: NVIDIA_NIM_API_KEY no .env (a mesma do nvidia-nim-proxy-for-claude-code).
 *
 * Body: { systemPrompt: string, userPrompt: string, maxTokens?: number, temperature?: number }
 * Resp:  { text: string } | { error: string }
 */

/* Mesmo padrão das outras rotas (/api/budget, /api/contact): "force-static"
 * deixa o build estático (output: export, GitHub Pages) passar sem reclamar
 * de rota dinâmica; em server mode o POST executa normal em runtime. */
export const dynamic = "force-static";

const NIM_BASE = "https://integrate.api.nvidia.com/v1/chat/completions";
const NIM_MODEL = "z-ai/glm-5.3-flash";

export async function POST(req: NextRequest) {
  const apiKey = process.env.NVIDIA_NIM_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI_NOT_CONFIGURED" },
      { status: 503 }
    );
  }

  let systemPrompt = "";
  let userPrompt = "";
  let maxTokens = 4096;
  let temperature = 0.7;

  try {
    const body = await req.json();
    systemPrompt = String(body.systemPrompt || "");
    userPrompt = String(body.userPrompt || "");
    if (body.maxTokens) maxTokens = Math.min(Number(body.maxTokens) || 4096, 8192);
    if (typeof body.temperature === "number") temperature = Math.min(Math.max(body.temperature, 0), 1);
  } catch {
    return NextResponse.json({ error: "INVALID_BODY" }, { status: 400 });
  }

  if (!userPrompt) {
    return NextResponse.json({ error: "userPrompt obrigatório." }, { status: 400 });
  }

  // GLM-5.3-flash é reasoning-heavy: sem thinking, ele responde direto e cabe no budget.
  // (nos testes on-device, com thinking ligado ele gastava 16k+ tokens raciocinando)
  const messages: { role: string; content: string }[] = [];
  if (systemPrompt) messages.push({ role: "system", content: systemPrompt });
  messages.push({ role: "user", content: userPrompt });

  try {
    const res = await fetch(NIM_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: NIM_MODEL,
        messages,
        max_tokens: maxTokens,
        temperature,
      }),
    });

    if (!res.ok) {
      console.error("[API /ai] NIM status", res.status, (await res.text()).slice(0, 300));
      return NextResponse.json(
        { error: `NIM_${res.status}` },
        { status: 502 }
      );
    }

    const data = await res.json();
    const text: string =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.message?.reasoning_content ||
      "";

    if (!text) {
      return NextResponse.json({ error: "EMPTY_RESPONSE" }, { status: 502 });
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[API /ai]", error);
    return NextResponse.json({ error: "AI_UNREACHABLE" }, { status: 502 });
  }
}
