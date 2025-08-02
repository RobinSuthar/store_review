"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import GetDataForPie from "@/lib/actions/getDataForPie";
import { number } from "motion/react";

export const description = "A pie chart with a label list";

const chartData = [
  { browser: "chrome", visitors: 500, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

type chartDataDemo = [
  { browser: "chrome"; visitors: number; fill: "var(--color-chrome)" },
  { browser: "safari"; visitors: number; fill: "var(--color-safari)" },
  { browser: "firefox"; visitors: number; fill: "var(--color-firefox)" },
  { browser: "edge"; visitors: number; fill: "var(--color-edge)" },
  { browser: "other"; visitors: number; fill: "var(--color-other)" }
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "5 Star",
    color: "var(--chart-1)",
  },
  safari: {
    label: "4 Star",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "3 Star",
    color: "var(--chart-3)",
  },
  edge: {
    label: "2 Star",
    color: "var(--chart-4)",
  },
  other: {
    label: "1 Star",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartPieLabelList({
  data,
}: {
  data: { store: string; filter: string };
}) {
  const [storeState, setstoreState] = React.useState("");
  const [filterState, setFilterState] = React.useState("");
  const [correctdata, setCorrectData] = React.useState([{}]);
  const [graphstate, setGraphstate] = React.useState<chartDataDemo>([
    { browser: "chrome", visitors: 0, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 0, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 0, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 0, fill: "var(--color-edge)" },
    { browser: "other", visitors: 0, fill: "var(--color-other)" },
  ]);

  React.useEffect(() => {
    setstoreState(data.store);
    setFilterState(data.filter);
  }, [data]);

  React.useEffect(() => {
    async function x() {
      const data = await GetDataForPie({
        Props: { store: storeState, filter: filterState },
      });

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
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
