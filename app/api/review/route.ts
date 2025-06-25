import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
} from "unique-names-generator";

// const db = new PrismaClient();

const customConfig: Config = {
  dictionaries: [adjectives, colors],
  separator: "-",
  length: 2,
};

export const GET = async () => {
  return NextResponse.json({
    message: "Hello",
  });
};

export const POST = async (req: NextRequest) => {
  const storeId = 1;

  const { wine, beer, liquor, staff, question1, question2 } = await req.json();
  const shortName: string = uniqueNamesGenerator(customConfig);

  console.log(storeId);
  console.log(wine, beer, liquor, staff, question1, question2);
  console.log(shortName);

  const cookieStore = await cookies();
  cookieStore.set("review", "yes");
  return NextResponse.json({
    message: "YEllow",
  });
};
