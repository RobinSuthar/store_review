type Pros = {
  id: number;
  StoreId: number | null;
  Name: string;
  Wine: number;
  Beer: number;
  Liquore: number;
  Staff: number;
  Question1: string;
  Question2: string;
}[];

type x = {
  data: Pros;
  Selection: "Wine" | "Beer" | "Liquore" | "Staff" | undefined;
};

export default async function SortData(params: x) {
  const data = params?.data;
  const Selection = params?.Selection;
  if (Selection == undefined) {
    return;
  }

  if (data == undefined) {
    return;
  }
  console.log(data, Selection);
  const selectedRatings = data.map((e) => ({
    id: e.id,
    [Selection]: e[Selection],
  }));
  return selectedRatings;
}
