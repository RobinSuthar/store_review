"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardFooter } from "@/components/ui/card";
import React, { Suspense } from "react";
import FullQuestionData from "@/lib/actions/fullQuestionData";
import { SkeletonDemo } from "@/components/Skeltondemo";
import { ScaleLoader } from "react-spinners";
import { SiteHeader } from "@/components/site-header";
import Loading from "@/app/loading";

type QuestionDataType = {
  id: number;
  Name: string;
  Question1: string;
}[];

export default function Page() {
  const [QuestionDataComing, setQestionDataComing] =
    React.useState<QuestionDataType>();
  React.useEffect(() => {
    async function x() {
      const datafetched: {
        id: number;
        Name: string;
        Question1: string;
      }[] = await FullQuestionData();
      if (datafetched) {
        setQestionDataComing(datafetched);
      }
    }
    x();
  }, []);
  return (
    <Suspense fallback={<p>Loading</p>}>
      {" "}
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
          <SiteHeader />
          <div className="">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-12 mt md:ml-20 ">
              {QuestionDataComing?.map((x, index) => {
                {
                }
                return (
                  <div key={x.id}>
                    <Card className="md:w-10/12 w-12/12 min-h-36">
                      <div className="ml-6">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>{" "}
                      </div>
                      <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className="line-clamp-1 text-2xl flex gap-2 font-medium max">
                          {x.Question1 ? (
                            <ScrollArea className="md:max-w-[420px] md:min-w-[400px] max-w-[280px] max-h-16">
                              <>{x.Question1}</>
                            </ScrollArea>
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
    </Suspense>
  );
}
