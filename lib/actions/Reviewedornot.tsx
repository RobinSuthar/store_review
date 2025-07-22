"use server";
import database from "@/database/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ReviewdorNot() {
  const cookieStore = await cookies();
  const result = cookieStore.get("review");
  if (result) {
    redirect("/reviewed");
  } else {
    return;
  }
}
