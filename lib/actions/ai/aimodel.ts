import OpenAI from "openai";
import DataCollection from "./datacollection";
const client = new OpenAI();

const data = await DataCollection();

const jsonData = JSON.stringify(data);

const prompt = `Analyze the following array of objects and provide insights, trends, Postive reviews and negative rivies of each category(wine,beer,staff, liqoure) and read the Question1 and analysis prostive and negative feedback from people or notable observations can give a generalised feedback based on All calregory, Also mentioned steps to improve the area:\n\n${jsonData}`;

const input = [
  {
    role: "user",
    content: "give me insight full thoughts based on the data provided",
  },
];

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: prompt },
  ],
});

console.log(response.choices[0].message.content);
