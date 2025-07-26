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

export default function Page() {
  const [filter, setfilter] = React.useState("");
  const [store, setStore] = React.useState("");
  console.log("Store: ", store);
  console.log("Filter : ", filter);
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
        <div className="grid grid-cols-2 mt-10">
          <div>
            <div className="flex gap-20 justify-center">
              <AnalyticsSelectStore setStore={setStore} />
              <FilterSelect setFilter={setfilter} />
            </div>
            <div className="md:p-24 sm:mt-20 md:mt-2">
              <ChartPieLabelList />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-9 ml-20 ">
            <Card className="w-10/12">
              <CardHeader>
                <CardDescription>Anonums</CardDescription>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum
                  Lopem Ispum Lopem Ispum Lopem Ispum{" "}
                </div>
              </CardFooter>
            </Card>

            <Card className="w-10/12">
              <CardHeader>
                <CardDescription>Anonums</CardDescription>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum
                  Lopem Ispum Lopem Ispum Lopem Ispum{" "}
                </div>
              </CardFooter>
            </Card>
            <Card className="w-10/12">
              <CardHeader>
                <CardDescription>Anonums</CardDescription>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum Lopem Ispum
                  Lopem Ispum Lopem Ispum Lopem Ispum{" "}
                </div>
              </CardFooter>
            </Card>
            <PaginationMenu />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
