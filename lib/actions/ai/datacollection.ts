import database from "@/database/db";

export default async function DataCollection() {
  const result = await database.review.findMany();
  return result;
}
