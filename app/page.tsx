import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Home() {
  const cookieStore = await cookies();
  const reviewSubmitted = cookieStore.get("review");
  if (!cookieStore.get("review")) {
    redirect("/review");
  } else {
    redirect("/reviewed");
  }
}
