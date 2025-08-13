"use server";

import database from "@/database/db";

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

interface RecivingData {
  store: string;
  filter: string;
}

export default async function GetDataForPie({
  Props,
}: {
  Props: RecivingData;
}) {
  if (!Props.store || !Props.filter) {
    const result = await database.review.findMany({
      where: {
        StoreId: 1,
      },
      select: {
        Wine: true,
      },
      orderBy: {
        Wine: "asc",
      },
    });

    result.sort((a, b) => a.Wine - b.Wine);

    ("asda");
    return result;
  }

  if (Props.filter == "Wine") {
    const result = await database.review.findMany({
      where: {
        StoreId: Number(Props.store),
      },
      select: {
        Wine: true,
      },
      orderBy: {
        Wine: "asc",
      },
    });

    result.map((x) => {
      if (x.Wine == 5) {
        5;
      }
    });
    return result;
  }
  if (Props.filter == "Beer") {
    const result = await database.review.findMany({
      where: {
        StoreId: Number(Props.store),
      },
      select: {
        Beer: true,
      },
      orderBy: {
        Beer: "asc",
      },
    });

    ("www");
    return result;
  }
  if (Props.filter == "Liquore") {
    const result = await database.review.findMany({
      where: {
        StoreId: Number(Props.store),
      },
      select: {
        Liquore: true,
      },
      orderBy: {
        Liquore: "asc",
      },
    });

    ("saqqqq");
    return result;
  }

  if (Props.filter == "Staff") {
    const result = await database.review.findMany({
      where: {
        StoreId: Number(Props.store),
      },
      select: {
        Staff: true,
      },
      orderBy: {
        Staff: "asc",
      },
    });

    ("kllll");
    return result;
  }
}
