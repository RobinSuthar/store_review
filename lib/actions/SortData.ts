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

type data = {
  data: Pros;
  Selection: "Wine" | "Beer" | "Liquore" | "Staff";
};

export default async function SortData(params: data) {
  const { data, Selection } = params;

  console.log(data, Selection);
  // Sort the data based on dynamic Selection
  const selectedRatings = data.map((e) => ({
    id: e.id,
    [Selection]: e[Selection],
  }));
  return selectedRatings;
}
