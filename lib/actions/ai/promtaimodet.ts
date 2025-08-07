"use server";
import OpenAI from "openai";
import DataCollection from "./datacollection";

const apiKey = process.env.OPENAI_API_KEY;

const client = new OpenAI({
  apiKey: apiKey,
});

export default async function AIAnlysisForPromt(userPromt: string) {
  const data = await DataCollection();

  const jsonData = JSON.stringify(data);

  const WritenPromt = `Analyze the following array of objects and provide insights, trends, notable observations can give a generalised feedback based on All category,based on the promt provided by user user here (if the promt is not realted to data give response stating promt should be realted todata) : ${userPromt} \n\n${jsonData} , Make Sure You Response is of different and looks excalty like this  = 
  {
  heading:,
  Problem:,
  Solution:
  } With No Sub points in it,  Nothing eslse based on there titele and importance and Make Sure to return data in JSON fromat as weel`;

  const input = [
    {
      role: "user",
      content: "give me insight full thoughts based on the data provided",
    },
  ];

  const response = await client.chat.completions.create({
    model: "chatgpt-4o-latest",

    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. ",
      },
      { role: "user", content: WritenPromt },
    ],
    response_format: {
      type: "text",
    },
  });
  const jsonString = response.choices[0].message.content;

  return jsonString;
}
