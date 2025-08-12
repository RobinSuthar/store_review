"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import GetDataForPie from "@/lib/actions/getDataForPie";
import { TotalNumberOfReviews } from "@/lib/actions/numberofreviews";
import { AverageReview } from "@/lib/actions/getAllData";
import { PulseLoader } from "react-spinners";

export const description = "A mixed bar chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome) " },
  { browser: "safari", visitors: 200, fill: "var(--color-safari) " },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "5",
    color: "var(--chart-1)",
  },
  safari: {
    label: "4",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "3",
    color: "var(--chart-3)",
  },
  edge: {
    label: "2",
    color: "var(--chart-4)",
  },
  other: {
    label: "1",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

type chartDataDemo = [
  { browser: "chrome"; visitors: number; fill: "var(--color-chrome)" },
  { browser: "safari"; visitors: number; fill: "var(--color-safari)" },
  { browser: "firefox"; visitors: number; fill: "var(--color-firefox)" },
  { browser: "edge"; visitors: number; fill: "var(--color-edge)" },
  { browser: "other"; visitors: number; fill: "var(--color-other)" }
];

export function ChartBarMixed({
  data,
}: {
  data: { store: string; filter: string };
}) {
  const [storeState, setstoreState] = React.useState("");
  const [filterState, setFilterState] = React.useState("");
  const [correctdata, setCorrectData] = React.useState([{}]);
  const [totalNumberOfRevies, setTotalNumberOfReviews] =
    React.useState<number>();
  const [averageReviewRating, setAverageReviewRating] =
    React.useState<number>();

  const [graphstate, setGraphstate] = React.useState<chartDataDemo>([
    { browser: "chrome", visitors: 0, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 0, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 0, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 0, fill: "var(--color-edge)" },
    { browser: "other", visitors: 0, fill: "var(--color-other)" },
  ]);

  React.useEffect(() => {
    console.log("Asdasdasdasdasdasdasdasdasdas");
    async function x() {
      const AverageCalucationdata: number = await TotalNumberOfReviews();
      if (AverageCalucationdata) {
        setTotalNumberOfReviews(AverageCalucationdata);
      }
    }
    x();
  }, []);

  React.useEffect(() => {
    setstoreState(data.store);
    setFilterState(data.filter);
  }, [data]);

  React.useEffect(() => {
    async function x() {
      const averageRating = await AverageReview({
        data: { store: storeState, filter: filterState },
      });
      const data = await GetDataForPie({
        Props: { store: storeState, filter: filterState },
      });

      if (averageRating) {
        setAverageReviewRating(Number(averageRating));
      }
      if (data) {
        setCorrectData(data);
        console.log(data);
      }
    }

    x();
  }, [storeState, filterState]);

  React.useEffect(() => {
    let oneStart = 0;

    let TwoStart = 0;
    let ThreeStart = 0;
    let FourStart = 0;
    let FiveStart = 0;
    console.log(graphstate);
    correctdata.map((x) => {
      if ("Wine" in x) {
        if (x.Wine == 1) {
          console.log("One Star");
          oneStart = oneStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: graphstate[1].visitors,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Wine == 2) {
          console.log("2 Star");
          TwoStart = TwoStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Wine == 3) {
          console.log("3 Star");
          ThreeStart = ThreeStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Wine == 4) {
          console.log("4 Star");
          FourStart = FourStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Wine == 5) {
          console.log("5 Star");
          FiveStart = FiveStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: FiveStart,
              fill: "var(--color-other)",
            },
          ]);
        }
      }
      if ("Beer" in x) {
        if (x.Beer == 1) {
          console.log("1 Star");
          oneStart = oneStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: graphstate[1].visitors,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Beer == 2) {
          console.log("2 Star");
          TwoStart = TwoStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Beer == 3) {
          console.log("3 Star");
          ThreeStart = ThreeStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Beer == 4) {
          console.log("4 Star");
          FourStart = FourStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Beer == 5) {
          console.log("5 Star");
          FiveStart = FiveStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: FiveStart,
              fill: "var(--color-other)",
            },
          ]);
        }
      }
      if ("Liquore" in x) {
        if (x.Liquore == 1) {
          console.log("1 Star");
          oneStart = oneStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: graphstate[1].visitors,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Liquore == 2) {
          console.log("2 Star");
          TwoStart = TwoStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Liquore == 3) {
          console.log("3 Star");
          ThreeStart = ThreeStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Liquore == 4) {
          console.log("4 Star");
          FourStart = FourStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Liquore == 5) {
          console.log("5 Star");
          FiveStart = FiveStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: FiveStart,
              fill: "var(--color-other)",
            },
          ]);
        }
      }
      if ("Staff" in x) {
        if (x.Staff == 1) {
          console.log("1 Star");
          oneStart = oneStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: graphstate[1].visitors,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Staff == 2) {
          console.log("2 Star");
          TwoStart = TwoStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: graphstate[2].visitors,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Staff == 3) {
          console.log("3 Star");
          ThreeStart = ThreeStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: graphstate[3].visitors,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Staff == 4) {
          console.log("4 Star");
          FourStart = FourStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: graphstate[4].visitors,
              fill: "var(--color-other)",
            },
          ]);
        }

        if (x.Staff == 5) {
          console.log("5 Star");
          FiveStart = FiveStart + 1;
          setGraphstate([
            {
              browser: "chrome",
              visitors: oneStart,
              fill: "var(--color-chrome)",
            },
            {
              browser: "safari",
              visitors: TwoStart,
              fill: "var(--color-safari)",
            },
            {
              browser: "firefox",
              visitors: ThreeStart,
              fill: "var(--color-firefox)",
            },
            {
              browser: "edge",
              visitors: FourStart,
              fill: "var(--color-edge)",
            },
            {
              browser: "other",
              visitors: FiveStart,
              fill: "var(--color-other)",
            },
          ]);
        }
      }
    });
  }, [correctdata]);

  React.useEffect(() => {
    console.log("New Graph State :", graphstate);
  }, [graphstate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-8 min-h-[250px]">
        <div className="col-span-2 align-middle items-center mt-12">
          <ChartContainer className="" config={chartConfig}>
            <BarChart
              maxBarSize={18}
              accessibilityLayer
              data={graphstate}
              layout="vertical"
              margin={{
                left: 0,
              }}
            >
              <YAxis
                dataKey="browser"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <XAxis dataKey="visitors" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="visitors" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className=" flex flex-col gap-2 items-center mt-12 ">
          <div className="text-6xl ">
            {averageReviewRating ? <>{averageReviewRating}</> : <PulseLoader />}
          </div>
          <div>
            {" "}
            {totalNumberOfRevies ? (
              <>{totalNumberOfRevies} Reviews</>
            ) : (
              <>
                <PulseLoader />
              </>
            )}{" "}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
