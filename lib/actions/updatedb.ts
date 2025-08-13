"use server";
import database from "@/database/db";
import { cookies } from "next/headers";

const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const randomName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals],
}); // big_red_donkey

const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
  length: 2,
});

type props = {
  wineReview: number;
  staffReview: number;
  beerReview: number;
  liqourReview: number;
  question: string;
  member: boolean;
};

export default async function UpdateDB({
  wineReview,
  staffReview,
  beerReview,
  liqourReview,
  question,
  member,
}: props) {
  const result = await database.review.create({
    data: {
      Wine: wineReview,
      Beer: beerReview,
      Liquore: liqourReview,
      Staff: staffReview,
      Question1: question,
      Name: shortName,
      Member: member,
      StoreId: 1,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set("review", "true");
  return result;
}
