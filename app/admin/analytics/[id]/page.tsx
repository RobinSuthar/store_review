import { ChartBarHorizontal } from "@/components/BarChart";
import GraphChart from "@/components/GraphChart";
import { redirect } from "next/navigation";

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
    <div className="flex flex-row">
      <ChartBarHorizontal category="Wine" Ratings={reviewDataWine} />
      <ChartBarHorizontal category="Beer" Ratings={reviewDataBeer} />
      <ChartBarHorizontal category="Liquor" Ratings={reviewDataLiqour} />
      <ChartBarHorizontal category="Staff" Ratings={reviewDataStaff} />
    </div>
  );
}
