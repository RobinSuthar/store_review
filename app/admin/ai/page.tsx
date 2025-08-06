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

import { useEffect, useState } from "react";

export default function Page() {
  const [content, setContent] = useState();

  useEffect(() => {
    async function x() {
      const resultFromAiFetch = await AIAnlysis();
      if (resultFromAiFetch) {
        const ParsedResult = JSON.parse(resultFromAiFetch);

        console.log(ParsedResult);
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
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-2">
                <div>
                  <ScrollArea className="h-[520px]  rounded-md border p-4">
                    <TypographyLead></TypographyLead>
                    <TypographyP></TypographyP>
                    <TypographyBlockquote></TypographyBlockquote>
                  </ScrollArea>

                  <InputWithButton />
                </div>
                <div>
                  <ScrollArea className="h-[600px]  rounded-md border p-4">
                    <TypographyTable title="Wine Analysis" content="Modest" />{" "}
                    <TypographyTable title="Beer Analysis" content="Modest" />{" "}
                    <TypographyTable
                      title="Liqoure Analysis"
                      content="Modest"
                    />{" "}
                    <TypographyTable title="Staff Analysis" content="Modest" />{" "}
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
