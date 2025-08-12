"use client";
import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import FullQuestionData from "@/lib/actions/fullQuestionData";
import { SkeletonDemo } from "@/components/Skeltondemo";
import { ScaleLoader } from "react-spinners";

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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-12 mt md:ml-20 ">
            {QuestionDataComing?.map((x, index) => {
              {
                console.log(index);
              }
              return (
                <div key={x.id}>
                  <Card className="md:w-10/12 w-12/12 min-h-36">
                    <CardHeader>
                      <CardDescription className="font-bold text-xl">
                        <SkeletonDemo />
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 text-2xl flex gap-2 font-medium">
                        {x.Question1 ? (
                          <>{x.Question1}</>
                        ) : (
                          <>
                            <ScaleLoader />
                          </>
                        )}
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
