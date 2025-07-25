import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import database from "@/database/db";

export async function SectionCards() {
  const data = await database.review.findMany();
  const wineData = data.map((x) => {
    return x.Wine;
  });
  const beerData = data.map((x) => {
    return x.Beer;
  });
  const liqourData = data.map((x) => {
    return x.Liquore;
  });
  const staffData = data.map((x) => {
    return x.Staff;
  });
  const averageWineReview =
    wineData.reduce((acc, grades) => {
      return acc + grades;
    }, 0) / wineData.length;

  console.log("Average Wine : ", averageWineReview.toFixed(2));

  const averageBeerReview =
    beerData.reduce((acc, grades) => {
      return acc + grades;
    }, 0) / beerData.length;

  console.log("Average Beer : ", averageBeerReview.toFixed(2));

  const averageLiqourReview =
    liqourData.reduce((acc, grades) => {
      return acc + grades;
    }, 0) / liqourData.length;

  console.log("Average Liqour : ", averageLiqourReview.toFixed(2));

  const averageStaffReview =
    staffData.reduce((acc, grades) => {
      return acc + grades;
    }, 0) / staffData.length;

  console.log("Staff Averagew :", averageStaffReview.toFixed(2));
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Average Wine Rating</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {averageWineReview.toFixed(2)} / 5
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Average Beer Rating</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {averageBeerReview.toFixed(2)} / 5
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Average Staff Rating</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {averageStaffReview.toFixed(2)} / 5
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>AI Review</CardDescription>

          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum Lopem
            Ispum Lopem Ispum Lopem Ispum <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  );
}
