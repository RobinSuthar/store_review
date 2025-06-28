import GraphChart from "@/components/GraphChart";
import RedirectButton from "@/components/RedirectButton";
import { redirect } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default async function StorePage({ params }: Params) {
  const { id } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/storereviews/${id}`);
  const data = await res.json();
  const arrayData = data["reviews"];
  const totalReviews = arrayData.length;

  return (
    <div className="text-3xl text-center mt-3 text-black">
      Store Page for ID: {id}
      <GraphChart totalNumberOfReviews={totalReviews} />
      <RedirectButton id={id} />
      <div className="grid justify-center grid-cols-3 gap-3 mt-3">
        {arrayData.map(
          (value: {
            id: number;
            StoreId: number;
            Name: string;
            Wine: number;
            Beer: number;
            Liquore: number;
            Staff: number;
            Question1: string;
            Question2: string;
          }) => {
            return (
              <div key={value.id} className="text-sm border-2  p-3 ">
                <div>Name : {value.Name}</div>

                <ol>Wine : {value.Wine}</ol>
                <ol> Staff : {value.Staff}</ol>
                <ol> Beer: {value.Beer}</ol>
                <ol> Liqoure{value.Liquore}</ol>
                <ol>Question1: {value.Question1}</ol>

                <ol> Question2: {value.Question2}</ol>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
