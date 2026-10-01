import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    team: site.team,
    total: site.team.length,
  });
}
