import { ChartBarHorizontal } from "@/components/BarChart";
import QuestionDisplay from "@/components/question";
import RedirectButtonComments from "@/components/RedirectButtonComments";
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

type Props = {
  id?: string;
  text: string;
  link: string;
};

export default async function AnalyticsPage({ params }: Params) {
  const { id } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/storereviews/${id}`);
  const data = await res.json();
  const arrayData = data["reviews"];

  const wineData = wineSort(arrayData);

  const beerData = BeerSort(arrayData);

  const staffData = StaffSort(arrayData);

  const liqoureData = LiqourSort(arrayData);

  return (
    <div>
      <div className="grid  md:grid-cols-4 gap-7 mt-8">
        <ChartBarHorizontal category="Wine" Ratings={wineData} />
        <ChartBarHorizontal category="Beer" Ratings={beerData} />
        <ChartBarHorizontal category="Liquor" Ratings={liqoureData} />
        <ChartBarHorizontal category="Staff" Ratings={staffData} />
      </div>
      <div>
        <RedirectButtonComments id={id} />
        <QuestionDisplay data={arrayData} />
      </div>
    </div>
  );
}
