"use server";
import database from "@/database/db";

const numberofItems = await database.review.count();

type QuestionDataType =
  | [
      {
        Name: string;
        Question1: string;
      }
    ]
  | undefined;

export default async function QuestionData(): Promise<QuestionDataType> {
  const skip = Math.floor(Math.random() * numberofItems);
  console.log("NOI : ", numberofItems);
  console.log("Skip ", skip);
  const data = await database.review.findMany({
    take: 3,
    skip: skip,
    select: {
      Name: true,
      Question1: true,
    },
  });
  console.log(data);

  return data;
}
