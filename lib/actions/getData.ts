"use server";
import database from "@/database/db";

export default async function getData() {
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
