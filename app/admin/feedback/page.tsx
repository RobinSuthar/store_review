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
import { PaginationMenu } from "@/components/ui/paginationmenu";
import { ChartPieLabelList } from "@/components/charts/piechart";
import React, { useState } from "react";
import QuestionData from "@/lib/actions/questionData";
import { Button } from "@/button";
import FullQuestionData from "@/lib/actions/fullQuestionData";

type QuestionDataType = {
  id: number;
  Name: string;
  Question1: string;
}[];

export default function Page() {
  const [QuestionDataComing, setQestionDataComing] =
    React.useState<QuestionDataType>();
  React.useEffect(() => {
    console.log("Asdbadks");
    async function x() {
      const datafetched: {
        id: number;
        Name: string;
        Question1: string;
      }[] = await FullQuestionData();
      console.log("Random Data . ", datafetched);
      if (datafetched) {
        setQestionDataComing(datafetched);
      }
    }
    x();
  }, []);
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
        <div className="">
          <div className="grid grid-cols-2 gap-6 p-12 mt-2 ml-20 ">
            {QuestionDataComing?.map((x, index) => {
              {
                console.log(index);
              }
              return (
                <div key={x.id}>
                  <Card className="w-10/12 min-h-36">
                    <CardHeader>
                      <CardDescription className="font-bold text-xl">
                        {x.Name}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 flex gap-2 font-medium">
                        {x.Question1}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
