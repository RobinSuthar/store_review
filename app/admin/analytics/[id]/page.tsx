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

  return <div>sadasd</div>;
}
