"use server";

import { cookies } from "next/headers";

type Review = {
  wine: number;
  beer: number;
  liqour: number;
  staff: number;
  question1: string;
  question2: string;
};

export default async function SubmitResponse(data: Review) {
  console.log("DATA: ", data);
  const cookieStore = await cookies();

  try {
    const response = await fetch("api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Success: ", result);
    cookieStore.set("review", "true");
  } catch (e) {
    console.log("Error posting data: ", e);
  }
}
