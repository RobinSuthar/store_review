"use server";
import database from "@/database/db";

// const chartData = [
//   { date: "2024-04-01", desktop: 222 },
//   { date: "2024-04-02", desktop: 97 },

export default async function getData() {
  console.log("ASdkas dlas d asmd asm dmas ds");
  const data = await database.review.findMany();

  const updatedData = data.map((x) => {
    return {
      date: x.createdAt,
      desktop: {
        wine: x.Wine,
        beer: x.Beer,
        liqour: x.Liquore,
        staff: x.Staff,
      },
    };
  });

  const averageData = updatedData.map((x) => {
    return {
      date: x.date.toISOString().split("T")[0],
      desktop:
        (x.desktop.wine + x.desktop.beer + x.desktop.liqour + x.desktop.staff) /
        5,
    };
  });

  return averageData;
}
