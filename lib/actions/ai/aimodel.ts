"use server";
import OpenAI from "openai";
import DataCollection from "./datacollection";

const apiKey = process.env.OPENAI_API_KEY;

const client = new OpenAI({
  apiKey: apiKey,
});

export default async function AIAnlysis() {
  const data = await DataCollection();

  const jsonData = JSON.stringify(data);

  const prompt = `Analyze the following array of objects and provide insights, trends, Postive reviews and negative rivies of each category(wine,beer,staff, liqoure) analysis prostive and negative feedback from people or notable observations can give a generalised feedback based on All calregory, Also mentioned steps to improve the area and keep your response very short and simple to the points, response should only
be in such formart as an objects (not at array) loooking like this and It should be if format so in can use JSON object { Wine: Conculation , Beer:Conculsion ,Liqooure:Conclusion, Staff: Conclusion }: \n\n${jsonData}`;

  const input = [
    {
      role: "user",
      content: "give me insight full thoughts based on the data provided",
    },
  ];

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.Provie a JSON Object as response",
      },
      { role: "user", content: prompt },
    ],
    response_format: {
      type: "json_object",
    },
  });
  const jsonString = response.choices[0].message.content;

  return jsonString;
}
