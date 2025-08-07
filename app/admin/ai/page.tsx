"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { InputWithButton } from "@/components/InputWithButton";
import { SiteHeader } from "@/components/site-header";
import { TypographyTable } from "@/components/type-logic";
import { TypographyBlockquote } from "@/components/typography/blockquote";
import { TypographyLead } from "@/components/typography/lead";
import { TypographyP } from "@/components/typography/p";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AIAnlysis from "@/lib/actions/ai/aimodel";
import AIAnlysisForPromt from "@/lib/actions/ai/promtaimodet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

type ContetntType = {
  Wine: string;
  Beer: string;
  Liquore: string;
  Staff: string;
};

type foramt = {
  heading: string | undefined;
  Problem: string | undefined;
  Solution: string | undefined;
} | null;

export default function Page() {
  const [content, setContent] = useState<ContetntType>();

  const [promtContent, setPromtContent] = useState<foramt>();
  const [inputchange, setInputChange] = useState<string>(
    "Give an High Level Ovwer on the Provided Data, and insights"
  );

  const [userPromt, setUserPromt] = useState<string>(
    "Give an High Level Ovwer on the Provided Data, and insights , in h1,h2,h3,h4,h5,p,l"
  );

  useEffect(() => {
    async function x() {
      const resultFromAiFetch = await AIAnlysis();
      if (resultFromAiFetch) {
        const parsedResult = JSON.parse(resultFromAiFetch);
        console.log(typeof parsedResult);
        console.log(parsedResult);
        setContent(parsedResult);
      }
    }
    x();
  }, []);

  useEffect(() => {
    async function x() {
      console.log("ASdasds");
      const resultFromAiFetch = await AIAnlysisForPromt(`${userPromt}`);
      if (resultFromAiFetch) {
        console.log(resultFromAiFetch);
        const resultPares: foramt = JSON.parse(resultFromAiFetch);
        console.log(resultPares);
        setPromtContent(resultPares);
      }
    }
    x();
  }, [userPromt]);

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
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-2">
                <div>
                  <ScrollArea className="h-[520px]  rounded-md border p-4">
                    <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      {promtContent?.heading}
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      {promtContent?.Problem}
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      {promtContent?.Solution}
                    </p>
                  </ScrollArea>
                  <div className="flex mt-6 w-full max-w-xlg items-center gap-2">
                    <Input
                      type="email"
                      onChange={(e) => {
                        setInputChange(e.target.value);
                      }}
                      placeholder="Enter Your Promt...."
                    />
                    <Button
                      onClick={(e) => {
                        if (inputchange) {
                          setUserPromt(inputchange);
                        }
                      }}
                      type="submit"
                      variant="outline"
                    >
                      AI Anlysis
                    </Button>
                  </div>
                </div>
                <div>
                  <ScrollArea className="h-[600px]  rounded-md border p-4">
                    <TypographyTable
                      title="Wine Analysis"
                      content={content?.Wine}
                    />{" "}
                    <TypographyTable
                      title="Beer Analysis"
                      content={content?.Beer}
                    />{" "}
                    <TypographyTable
                      title="Liqoure Analysis"
                      content={content?.Liquore}
                    />{" "}
                    <TypographyTable
                      title="Staff Analysis"
                      content={content?.Staff}
                    />{" "}
                  </ScrollArea>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
