import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo(data: {
  data: React.Dispatch<React.SetStateAction<"graph" | "pie">>;
}) {
  return (
    <div className=" flex-col gap-6">
      <Tabs
        onValueChange={(e) => {
          ("ASdasd");
          if (e == "graph") {
            data.data("graph");
          }
          if (e == "pie") {
            data.data("pie");
          }
        }}
        defaultValue="account"
      >
        <TabsList
          onChange={(e) => {
            e;
          }}
        >
          <TabsTrigger
            onChange={(e) => {
              e;
            }}
            value="graph"
          >
            Graph
          </TabsTrigger>
          <TabsTrigger
            onSelect={(e) => {
              e;
            }}
            value="pie"
          >
            Pie Chart
          </TabsTrigger>
        </TabsList>
        <TabsContent
          onSelect={(e) => {
            e;
          }}
          value="account"
        ></TabsContent>
        <TabsContent value="password"></TabsContent>
      </Tabs>
    </div>
  );
}
