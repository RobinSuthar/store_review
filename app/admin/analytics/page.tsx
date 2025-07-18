import { AppSidebar } from "@/components/app-sidebar";
import { AnalyticsSelectStore } from "@/components/ui/storeSelect";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FilterSelect } from "@/components/ui/filterSelect";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "lucide-react";
import { IconTrendingUp } from "@tabler/icons-react";

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
        <div className="grid grid-cols-2 mt-10">
          <div>
            <div className="flex gap-20 justify-center">
              <AnalyticsSelectStore />
              <FilterSelect />
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
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
