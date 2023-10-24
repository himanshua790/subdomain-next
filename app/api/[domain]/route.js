// pages/api/profiles/[domain].js
import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const domain = params.domain;
  const profile = await prisma.profile.findUnique({
    where: { domain },
  });

  if (!profile) {
    return NextResponse.status(404).json({ error: "Profile not found" });
  }
  return NextResponse.json(profile, { status: 200 });
}
