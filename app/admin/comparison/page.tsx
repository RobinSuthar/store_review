import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
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
          <div className="flex mt-72 text-center justify-center text-7xl">
            {" "}
            Coming Soon!
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Suspense>
  );
}
