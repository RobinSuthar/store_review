"use server";
import OpenAI from "openai";
import DataCollection from "./datacollection";

const apiKey = process.env.OPENAI_API_KEY;

const client = new OpenAI({
  apiKey: apiKey,
});

export default async function DashboardAiAnlasysi() {
  const data = await DataCollection();

  const jsonData = JSON.stringify(data);

  const prompt = `Analyze the following array of objects and  give small high level overall feeback around  based on everything very short and simple arpund 16 words   \n\n${jsonData}`;

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      { role: "user", content: prompt },
    ],
  });
  const jsonString = response.choices[0].message.content;

  return jsonString;
}
