// pages/api/profiles/[domain].js
import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const domain = params.domain;
  const profile = await prisma.profile.findUnique({
    where: { domain },
  });

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }
  return NextResponse.json(profile, { status: 200 });
}
