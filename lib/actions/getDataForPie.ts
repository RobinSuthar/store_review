"use server";

import database from "@/database/db";

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

export default async function GetDataForPie({
  Props,
}: {
  Props: { store: string; filter: string };
}) {
  if (Props.store || Props.filter) {
    const result = await database.review.findUnique({
      where: {
        id: 1,
      },
      select: {
        Wine: true,
      },
    });
    return result;
  }

  if (Props.filter == "Wine") {
    const result = await database.review.findUnique({
      where: {
        id: Number(Props.store),
      },
      select: {
        Wine: true,
      },
    });
    return result;
  }
  if (Props.filter == "Beer") {
    const result = await database.review.findUnique({
      where: {
        id: Number(Props.store),
      },
      select: {
        Beer: true,
      },
    });
    return result;
  }
  if (Props.filter == "Liqour") {
    const result = await database.review.findUnique({
      where: {
        id: Number(Props.store),
      },
      select: {
        Liquore: true,
      },
    });
    return result;
  }

  if (Props.filter == "Staff") {
    const result = await database.review.findUnique({
      where: {
        id: Number(Props.store),
      },
      select: {
        Staff: true,
      },
    });
    return result;
  }
}
