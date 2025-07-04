"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChartLineInteractive } from "./interactove";
import sortData from "@/lib/actions/SortData";

type IncomingData = {
  Beer: number;
  Liquore: number;
  Name: string;
  Question1: string;
  Question2: string;
  Staff: number;
  StoreId: number;
  Wine: number;
  id: number;
};

type Props = {
  data: IncomingData[];
};

type MyGroupSortedDataType =
  | {
      [Selection: string]: number;
      id: number;
    }[]
  | undefined;

type Pros = {
  id: number;
  StoreId: number | null;
  Name: string;
  Wine: number;
  Beer: number;
  Liquore: number;
  Staff: number;
  Question1: string;
  Question2: string;
}[];

type x = {
  data: Pros;
  Selection: "Wine" | "Beer" | "Liquore" | "Staff";
};

export default function SelectionCheckBox({ data }: Props) {
  console.log("Data ah Gya! ", data);

  const [finalData, setFinalData] = React.useState<
    MyGroupSortedDataType | undefined
  >();
  const [category, setCategory] = React.useState<Record<string, boolean>>({
    Wine: false,
    Beer: false,
    Staff: false,
    Liquor: false,
  });
  const [z, setZ] = React.useState<string>("");
  const [selection, setSelection] = React.useState<
    "Wine" | "Beer" | "Liquore" | "Staff" | undefined
  >();

  React.useEffect(() => {
    if (selection) {
      async function fetchData() {
        try {
          const result = await sortData({
            data: data,
            Selection: selection,
          });
          console.log("Sorted Result : ", result);
          setFinalData(result);
          console.log("Finald Data State Set : ", finalData);
        } catch (error) {
          console.error("Error fetching sorted data: ", error);
        }
      }

      console.log(selection);

      fetchData();
    }
  }, [z]);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Selection</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.keys(category).map((store: string) => (
            <DropdownMenuCheckboxItem
              key={store}
              checked={category[store]}
              onCheckedChange={() => {
                setCategory(() =>
                  Object.fromEntries(
                    Object.keys(category).map((s) => [s, s === store])
                  )
                );
                setZ(store);
              }}
            >
              {store}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div>
        <ChartLineInteractive userTestData={finalData} />
      </div>
    </div>
  );
}
