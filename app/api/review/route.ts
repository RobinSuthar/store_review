import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
} from "unique-names-generator";

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
  try {
    const storeId = 1;

    const { wine, beer, liqour, staff, question1, question2 } =
      await req.json();
    const shortName: string = uniqueNamesGenerator(customConfig);

    console.log(storeId);
    console.log(wine, beer, liqour, staff, question1, question2);
    console.log(shortName);

    const cookieStore = await cookies();
    const data = await db.review.create({
      data: {
        StoreId: 1,
        Name: shortName,
        Wine: wine,
        Beer: beer,
        Liquore: liqour,
        Staff: staff,
        Question1: question1,
        Question2: question2,
      },
    });
    console.log("Final Step : ", data);
    cookieStore.set("review", "yes");

    return NextResponse.json({
      message: "Data Added Successfully into database!",
    });
  } catch (e) {
    console.log(e);
  }
};
