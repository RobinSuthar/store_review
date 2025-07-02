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

function Sort(Selection: string) {
  return null;
}

export default async function GetData(data: Pros) {
  const storeId = getId(data.Name);
  const a = await db.review.findMany({
    where: {
      StoreId: storeId,
    },
  });
  return a;
}
