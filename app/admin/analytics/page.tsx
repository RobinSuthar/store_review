"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { AnalyticsSelectStore } from "@/components/ui/storeSelect";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FilterSelect } from "@/components/ui/filterSelect";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChartPieLabelList } from "@/components/charts/piechart";
import React, { useState } from "react";
import QuestionData from "@/lib/actions/questionData";
import { Button } from "@/button";
import { SkeletonCard } from "@/components/SkeletionCard";
import { ClipLoader } from "react-spinners";
import { TabsDemo } from "@/components/tabsdemo";
import { SkeletonDemo } from "@/components/Skeltondemo";
import { ChartBarMixed } from "@/components/charts/chart-bar";

type QuestionDataType = {
  Name: string;
  Question1: string;
}[];

export default function Page() {
  const [filter, setfilter] = React.useState("");
  const [store, setStore] = React.useState("");
  const [buttonClick, setButtonCkick] = React.useState(0);
  const [QuestionDataComing, setQestionDataComing] =
    React.useState<QuestionDataType>();
  console.log("Store: ", store);
  console.log("Filter : ", filter);
  const [graphType, setGraphType] = useState<"graph" | "pie">("graph");

  React.useEffect(() => {
    console.log(graphType);
    async function x() {
      const datafetched: {
        Name: string;
        Question1: string;
      }[] = await QuestionData();
      console.log("Random Data . ", datafetched);
      if (datafetched) {
        setQestionDataComing(datafetched);
      }
    }
    x();
  }, [buttonClick]);
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
          <div>
            <div className="flex gap-2 justify-center">
              <AnalyticsSelectStore setStore={setStore} />
              <FilterSelect setFilter={setfilter} />
              <TabsDemo data={setGraphType} />
            </div>
            <div className="md:p-24 p-6 sm:mt-20 md:mt-20">
              <div>
                {graphType == "pie" ? (
                  <ChartPieLabelList data={{ store: store, filter: filter }} />
                ) : (
                  <>
                    <ChartBarMixed data={{ store: store, filter: filter }} />{" "}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-9 md:ml-20 md:p-0 p-6 md:mt-0 mt-3 ">
            {QuestionDataComing ? (
              <Card className="md:w-10/12 w-12/12 min-h-32">
                <CardHeader>
                  <CardDescription>
                    <div>
                      <SkeletonDemo />
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 text-xl flex gap-2 font-medium">
                    {QuestionDataComing?.map((x, index) => {
                      if (index == 0) {
                        return x.Question1;
                      }
                    })}
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <>
                <SkeletonCard />
              </>
            )}

            {QuestionDataComing ? (
              <Card className="md:w-10/12 w-12/12 min-h-36">
                <CardHeader>
                  <CardDescription>
                    <div>
                      <SkeletonDemo />
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1   text-xl flex gap-2 font-medium">
                    {QuestionDataComing?.map((x, index) => {
                      if (index == 1) {
                        return x.Question1;
                      }
                    })}
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <>
                <SkeletonCard />
              </>
            )}
            {QuestionDataComing ? (
              <Card className="md:w-10/12 w-12/12 min-h-36">
                <CardHeader>
                  <CardDescription>
                    <div>
                      <SkeletonDemo />
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1  text-xl flex gap-2 font-medium">
                    {QuestionDataComing?.map((x, index) => {
                      if (index == 2) {
                        return x.Question1;
                      }
                    })}
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <>
                <SkeletonCard />
              </>
            )}

            <Button
              onClick={() => {
                setButtonCkick(buttonClick + 1);
              }}
              className="max-w-2xs ml-24 mr-42"
            >
              {QuestionDataComing ? (
                <>Refresh</>
              ) : (
                <>
                  <ClipLoader
                    color={"#ffffff"}
                    loading={true}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </>
              )}
            </Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
