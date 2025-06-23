import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export const GET = async () => {
  return NextResponse.json({
    message: "Hello",
  });
};

export const POST = async (req: NextRequest) => {
  const { a, b, c } = await req.json();
  console.log(a);
  console.log(b);

  console.log(c);

  //   const data = db.review.create({
  //     data:{

  //     }
  //   })
  return NextResponse.json({
    message: "YEllow",
  });
};
