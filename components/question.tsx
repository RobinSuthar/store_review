import { redirect } from "next/navigation";
import { Button } from "./ui/button";

type Props = [
  {
    id: number;
    StoreId: number;
    Name: string;
    Wine: number;
    Beer: number;
    Liquore: number;
    Staff: number;
    Question1: string;
    Question2: string;
  }
];

type data = {
  data: Props;
};
export default function QuestionDisplay({ data }: data) {
  let count = 0;
  console.log("Data: ", data);
  return (
    <div>
      {data.map((e) => {
        count++;
        if (count > 4) {
          return;
        }
        return (
          <div
            className="grid mt-2  m-2 p-3 grid-cols-3 border-2 rounded-xl items-center"
            key={e.id}
          >
            <div> {e.Name}</div>
            <div>{e.Question1}</div>

            <div>{e.Question2}</div>
          </div>
        );
      })}
    </div>
  );
}
