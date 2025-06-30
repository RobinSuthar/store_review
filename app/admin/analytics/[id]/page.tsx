import { ChartBarHorizontal } from "@/components/BarChart";
import { BeerSort } from "@/lib/beerSort";
import { LiqourSort } from "@/lib/liqoureSort";
import { StaffSort } from "@/lib/staffSort";
import { wineSort } from "@/lib/wineSort";

type Params = {
  params: {
    id: string;
  };
};

export default async function AnalyticsPage({ params }: Params) {
  const { id } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/storereviews/${id}`);
  const data = await res.json();
  const arrayData = data["reviews"];
  console.log("array Data : ", arrayData);
  //   option1 = "Wine",
  //   option2 = "Beer",
  //   option3 = "Staff",
  //   option4 = "Liquore",

  const wineData = wineSort(arrayData);

  const beerData = BeerSort(arrayData);

  const staffData = StaffSort(arrayData);

  const liqoureData = LiqourSort(arrayData);

  console.log("Wine : ", wineData);

  console.log("Beer : ", beerData);

  console.log("Staff : ", staffData);

  console.log("Liqour : ", liqoureData);
  const totalReviews = arrayData.length;
  const reviewDataWine = {
    oneStar: 2,
    twoStar: 8,
    threeStar: 4,
    fourStar: 1,
    fiveStar: 5,
  };

  const reviewDataBeer = {
    oneStar: 2,
    twoStar: 7,
    threeStar: 4,
    fourStar: 4,
    fiveStar: 7,
  };

  const reviewDataLiqour = {
    oneStar: 3,
    twoStar: 14,
    threeStar: 4,
    fourStar: 5,
    fiveStar: 1,
  };

  const reviewDataStaff = {
    oneStar: 2,
    twoStar: 4,
    threeStar: 4,
    fourStar: 1,
    fiveStar: 2,
  };
  return (
    <div className="grid  md:grid-cols-4 gap-7 mt-8">
      <ChartBarHorizontal category="Wine" Ratings={reviewDataWine} />
      <ChartBarHorizontal category="Beer" Ratings={reviewDataBeer} />
      <ChartBarHorizontal category="Liquor" Ratings={reviewDataLiqour} />
      <ChartBarHorizontal category="Staff" Ratings={reviewDataStaff} />
    </div>
  );
}
