import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const db = new PrismaClient();

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
  const { Wine, Beer, Liquore, Staff , Question1, Question2} = await req.json();
const shortName: string = uniqueNamesGenerator(customConfig);

console.log(Wine, Beer, Liquore, Staff , Question1, Question2)    console.log(shortName);
  return NextResponse.json({
    message: "YEllow",
  });
};
