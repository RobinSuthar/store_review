"use server";
import database from "@/database/db";

export default async function FullQuestionData() {
  const data = await database.review.findMany({
    select: {
      id: true,
      Name: true,
      Question1: true,
    },
  });

  return data;
}
