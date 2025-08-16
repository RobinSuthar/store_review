"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { AnalyticsSelectStore } from "@/components/ui/storeSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FilterSelect } from "@/components/ui/filterSelect";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChartPieLabelList } from "@/components/charts/piechart";
import React, { Suspense, useState } from "react";
import QuestionData from "@/lib/actions/questionData";
import { Button } from "@/button";
import { SkeletonCard } from "@/components/SkeletionCard";
import { TabsDemo } from "@/components/tabsdemo";
import { ChartBarMixed } from "@/components/charts/chart-bar";
import { SiteHeader } from "@/components/site-header";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import LoadingSke from "@/components/loading";

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

  const [graphType, setGraphType] = useState<"graph" | "pie">("graph");

  React.useEffect(() => {
    graphType;
    async function x() {
      const datafetched: {
        Name: string;
        Question1: string;
      }[] = await QuestionData();
      if (datafetched) {
        setQestionDataComing(datafetched);
      }
    }
    x();
  }, [buttonClick]);
  return (
    <Suspense fallback={LoadingSke()}>
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
          <div className="grid md:grid-cols-2 grid-cols-1 mt-2">
            <div>
              <div className="flex gap-2 justify-center">
                <AnalyticsSelectStore setStore={setStore} />
                <FilterSelect setFilter={setfilter} />
                <TabsDemo data={setGraphType} />
              </div>
              <div className="md:p-24 p-6 sm:mt-16 md:mt-16">
                <div>
                  {graphType == "pie" ? (
                    <ChartPieLabelList
                      data={{ store: store, filter: filter }}
                    />
                  ) : (
                    <>
                      <ChartBarMixed data={{ store: store, filter: filter }} />{" "}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-9 md:ml-20 md:p-0 p-6 md:mt-0  ">
              {QuestionDataComing ? (
                <Card className="md:w-10/12 w-12/12 min-h-42 max-h-42">
                  <CardHeader>
                    <CardDescription>
                      <div>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>{" "}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 text-xl flex gap-2 font-medium">
                      <div>
                        {QuestionDataComing?.map((x, index) => {
                          if (index == 0) {
                            return (
                              <>
                                <ScrollArea className="md:max-w-[40px] md:min-w-[380px] max-w-[280px] max-h-16  md:text-xl text-lg">
                                  {x.Question1}
                                </ScrollArea>
                              </>
                            );
                          }
                        })}
                      </div>

                      {/* <QRCodeCanvas
                      size={500}
                      level="H"
                      title="North Hill"
                      value={"http://10.0.0.63:3000/try"}
                    /> */}
                    </div>
                  </CardFooter>
                </Card>
              ) : (
                <>
                  <SkeletonCard />
                </>
              )}
              {QuestionDataComing ? (
                <Card className="md:w-10/12 w-12/12 min-h-42 max-h-42">
                  <CardHeader>
                    <CardDescription>
                      <div>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>{" "}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1   text-xl flex gap-2 font-medium">
                      {QuestionDataComing?.map((x, index) => {
                        if (index == 1) {
                          return (
                            <>
                              <ScrollArea className="md:max-w-[40px] md:min-w-[380px] max-w-[280px] max-h-16  md:text-xl text-lg">
                                {x.Question1}
                              </ScrollArea>
                            </>
                          );
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
                <Card className="md:w-10/12 w-12/12 min-h-42 max-h-42">
                  <CardHeader>
                    <CardDescription>
                      <div>
                        <Avatar>
                          <div></div>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>{" "}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1  text-xl flex gap-2 font-medium">
                      {" "}
                      {QuestionDataComing?.map((x, index) => {
                        if (index == 2) {
                          return (
                            <div key={x.Name}>
                              {" "}
                              <ScrollArea className="md:max-w-[40px] md:min-w-[380px] max-w-[280px] max-h-16  md:text-xl text-lg">
                                {x.Question1}
                              </ScrollArea>
                            </div>
                          );
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
              <div className="flex justify-center  md:ml-24 md:mr-42">
                <Button
                  onClick={() => {
                    setButtonCkick(buttonClick + 1);
                  }}
                  className=" w-2xs hover:cursor-pointer"
                >
                  {QuestionDataComing ? (
                    <>Refresh</>
                  ) : (
                    <>
                      <>Refresh</>
                    </>
                  )}
                </Button>
              </div>{" "}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Suspense>
  );
}
