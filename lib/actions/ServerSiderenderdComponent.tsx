import { getServerSession } from "next-auth";
import { NEXT_AUTh } from "../auth";

export default async function ServerSiderenderdComponent() {
  const data = await getServerSession(NEXT_AUTh);
  console.log("Server side data : ", data);
  return <div>{JSON.stringify(data)}</div>;
}
