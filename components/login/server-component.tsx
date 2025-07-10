"use server";
import { NEXT_AUTH } from "@/lib/actions/Credentials";
import { getServerSession } from "next-auth";

export default async function ServerComponent() {
  const Serversession = await getServerSession(NEXT_AUTH);
  return <div>Server Side Rendered : {JSON.stringify(Serversession)}</div>;
}
