import { AppSidebar } from "@/components/app-sidebar";
import { InputWithButton } from "@/components/InputWithButton";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { TypographyTable } from "@/components/type-logic";
import { TypographyBlockquote } from "@/components/typography/blockquote";
import { TypographyLead } from "@/components/typography/lead";
import { TypographyP } from "@/components/typography/p";
import { ScrollArea } from "@/components/ui/scroll-area";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
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
                    <TypographyTable /> <TypographyTable /> <TypographyTable />{" "}
                    <TypographyTable />{" "}
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
