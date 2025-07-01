import Header from "@/components/Header";
import Wine from "@/components/Wine/Wine";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  if (cookieStore.get("review")) {
    redirect("/reviewed");
  }
  return (
    <div>
      <Header />
      <Wine />
    </div>
  );
}
