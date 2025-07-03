"use server";
import db from "@/lib/db";
type Pros = {
  Name: string;
  Selection: string;
};

function getId(Store: string) {
  if (Store == "North Hill") {
    return 1;
  }
  if (Store == "Aspen") {
    return 2;
  }
}

export default async function GetData(data: Pros) {
  console.log(data);
  const storeId = getId(data.Name);
  console.log("SADasdaskndkjasbdkbaksjbdkasbdksbdkjbaskjsbdnx");
  const a = await db.review.findMany({
    where: {
      StoreId: storeId,
    },
  });
  return a;
}
