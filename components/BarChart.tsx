"use client";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
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

export const description = "A horizontal bar chart";

const chartConfig = {
  desktop: {
    label: "Rating",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

type Props = {
  category: string;
  Ratings: {
    oneStar: number;
    twoStar: number;
    threeStar: number;
    fourStar: number;
    fiveStar: number;
  };
};

type Average = {
  category: string;
  Ratings: {
    oneStar: number;
    twoStar: number;
    threeStar: number;
    fourStar: number;
    fiveStar: number;
  };
};

export function ChartBarHorizontal(data: Props) {
  let totalNumber = 0;
  let averageRating = 0;
  if (data.category == "Wine") {
    totalNumber =
      data.Ratings.fiveStar +
      data.Ratings.fourStar +
      data.Ratings.threeStar +
      data.Ratings.twoStar +
      data.Ratings.oneStar;

    const weightSum =
      5 * data.Ratings.fiveStar +
      4 * data.Ratings.fourStar +
      data.Ratings.threeStar +
      data.Ratings.twoStar +
      data.Ratings.oneStar;

    averageRating = weightSum / totalNumber;
  }

  if (data.category == "Staff") {
    totalNumber =
      data.Ratings.fiveStar +
      data.Ratings.fourStar +
      data.Ratings.threeStar +
      data.Ratings.twoStar +
      data.Ratings.oneStar;
    const weightSum =
      5 * data.Ratings.fiveStar +
      4 * data.Ratings.fourStar +
      data.Ratings.threeStar +
      data.Ratings.twoStar +
      data.Ratings.oneStar;

    averageRating = weightSum / totalNumber;
  }
  if (data.category == "Beer") {
    totalNumber =
      data.Ratings.fiveStar +
      data.Ratings.fourStar +
      data.Ratings.threeStar +
      data.Ratings.twoStar +
      data.Ratings.oneStar;
    const weightSum =
      5 * data.Ratings.fiveStar +
      4 * data.Ratings.fourStar +
      data.Ratings.threeStar +
      data.Ratings.twoStar +
      data.Ratings.oneStar;

    averageRating = weightSum / totalNumber;
  }
  if (data.category == "Liquor") {
    totalNumber =
      data.Ratings.fiveStar +
      data.Ratings.fourStar +
      data.Ratings.threeStar +
      data.Ratings.twoStar +
      data.Ratings.oneStar;
    const weightSum =
      5 * data.Ratings.fiveStar +
      4 * data.Ratings.fourStar +
      3 * data.Ratings.threeStar +
      2 * data.Ratings.twoStar +
      1 * data.Ratings.oneStar;

    averageRating = weightSum / totalNumber;
  }
  const chartData = [
    { month: "5 Star", desktop: data.Ratings.fiveStar },
    { month: "4 Star", desktop: data.Ratings.fourStar },
    { month: "3 Star", desktop: data.Ratings.threeStar },
    { month: "2 Star", desktop: data.Ratings.twoStar },
    { month: "1 Star", desktop: data.Ratings.oneStar },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.category}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -5,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing Average (out of 5) for {totalNumber} Reviews
        </div>
        <div className="flex ">
          <div>5/{averageRating.toFixed(2)}</div>
        </div>
      </CardFooter>
    </Card>
  );
}
