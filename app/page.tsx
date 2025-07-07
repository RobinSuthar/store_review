import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Home() {
  const cookieStore = await cookies();
  const reviewSubmitted = cookieStore.get("review");
  console.log("Check For Review Submitted :  ", reviewSubmitted);
  if (!cookieStore.get("review")) {
    redirect("pages/review");
  } else {
    redirect("/reviewed");
  }
}
