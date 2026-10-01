import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: "2.0.0",
    backend: true,
    database: process.env.DATABASE_URL ? "configured" : "not_configured",
  });
}
