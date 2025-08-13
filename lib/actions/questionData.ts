"use server";
import database from "@/database/db";

const numberofItems = await database.review.count();

export default async function QuestionData() {
  const skip = Math.floor(Math.random() * numberofItems);

  const data = await database.review.findMany({
    take: 3,
    skip: skip,
    select: {
      Name: true,
      Question1: true,
    },
  });

  return data;
}
