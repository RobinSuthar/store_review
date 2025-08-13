"use server";

import database from "@/database/db";

export async function AverageReview({
  data,
}: {
  data: { store: string; filter: string };
}) {
  const Totaldata = await database.review.findMany();
  if (data.filter == "Wine") {
    const wineData = Totaldata.map((x) => {
      return x.Wine;
    });

    const averageWineReview =
      wineData.reduce((acc, grades) => {
        return acc + grades;
      }, 0) / wineData.length;
    return averageWineReview.toFixed(1);
  }

  if (data.filter == "Beer") {
    const beerData = Totaldata.map((x) => {
      return x.Beer;
    });

    const averageBeerReview =
      beerData.reduce((acc, grades) => {
        return acc + grades;
      }, 0) / beerData.length;

    return averageBeerReview.toFixed(1);
  }

  if (data.filter == "Liquore") {
    const liqourData = Totaldata.map((x) => {
      return x.Liquore;
    });

    const averageLiqourReview =
      liqourData.reduce((acc, grades) => {
        return acc + grades;
      }, 0) / liqourData.length;

    return averageLiqourReview.toFixed(1);
  }

  if (data.filter == "Staff") {
    const staffData = Totaldata.map((x) => {
      return x.Staff;
    });
    const averageStaffReview =
      staffData.reduce((acc, grades) => {
        return acc + grades;
      }, 0) / staffData.length;

    return averageStaffReview.toFixed(1);
  }

  const wineData = Totaldata.map((x) => {
    return x.Wine;
  });

  const averageWineReview =
    wineData.reduce((acc, grades) => {
      return acc + grades;
    }, 0) / wineData.length;
  return averageWineReview.toFixed(1);
}
