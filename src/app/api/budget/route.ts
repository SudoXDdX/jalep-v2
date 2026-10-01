import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-static";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, model, symptoms, phone, email } = body;

    if (!name || !model || !symptoms) {
      return NextResponse.json(
        { error: "Nome, modelo e sintomas são obrigatórios." },
        { status: 400 }
      );
    }

    const budget = await prisma.budgetRequest.create({
      data: {
        name: String(name),
        model: String(model),
        symptoms: String(symptoms),
        phone: phone ? String(phone) : null,
        email: email ? String(email) : null,
      },
    });

    return NextResponse.json({ success: true, id: budget.id }, { status: 201 });
  } catch (error) {
    console.error("[API /budget]", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const budgets = await prisma.budgetRequest.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json(budgets);
  } catch (error) {
    console.error("[API /budget GET]", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
