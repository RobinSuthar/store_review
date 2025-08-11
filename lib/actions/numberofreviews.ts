"use server";
import database from "@/database/db";

export async function TotalNumberOfReviews() {
  const AverageCalucationdata = await database.review.findMany();

  return AverageCalucationdata.length;
}
