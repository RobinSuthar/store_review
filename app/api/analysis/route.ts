
import { NextResponse } from "next/server";
import db from "@/lib/db";

export const GET = async () => {
  const data = await db.store.findMany();
  console.log(data);
  return NextResponse.json({
    message: data,
  });
};
