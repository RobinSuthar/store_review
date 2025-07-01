import { ChartBarHorizontal } from "@/components/BarChart";
import QuestionDisplay from "@/components/question";
import { BeerSort } from "@/lib/beerSort";
import { LiqourSort } from "@/lib/liqoureSort";
import { StaffSort } from "@/lib/staffSort";
import { wineSort } from "@/lib/wineSort";

type Params = {
  //asdassad
  params: {
    id: string;
  };
};

export default async function CommentsPage({ params }: Params) {
  const { id } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/storereviews/${id}`);
  const data = await res.json();
  const arrayData = data["reviews"];

  return (
    <div>
      <div className="grid  md:grid-cols-4 gap-7 mt-8">
        {arrayData.map(
          (e: {
            id: string;
            Name: string;
            Question1: string;
            Question2: string;
          }) => {
            return (
              <div key={e.id}>
                <div>{e.Name}</div>
                <div>{e.Question1}</div>
                <div>{e.Question2}</div>
              </div>
            );
          }
        )}{" "}
      </div>
    </div>
  );
}
