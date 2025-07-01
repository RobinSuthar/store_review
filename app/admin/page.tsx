import RedirectButtonComparison from "@/components/RedirectButtonComparison";
import RedirectButtonInsights from "@/components/RedirectInsights";
import Link from "next/link";

export default async function Dashboard() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/analysis`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const stores = await res.json();
  return (
    <div>
      <div className="text-4xl text-center flex justify-center">Dashboard</div>
      <RedirectButtonInsights />
      <RedirectButtonComparison />
      {stores["message"].map((x: { id: number; Name: string }) => {
        return (
          <Link key={x.id} href={`/admin/store/${x.id}`}>
            <div key={x.id} className="text-2xl  mt-5 f">
              <div>{x.id}</div>
              <div>{x.Name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
