import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export const GET = async (req: NextRequest) => {
  const data = await db.store.findMany();
  console.log(data);
  return NextResponse.json({
    message: data,
  });
};
