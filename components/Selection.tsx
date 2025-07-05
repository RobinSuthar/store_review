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

type b = "Wine" | "Beer" | "Liquore" | "Staff";

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
  const [fixedType, setFixedType] = React.useState<b>("Wine");
  const [selection, setSelection] = React.useState<
    "Wine" | "Beer" | "Liquore" | "Staff" | undefined
  >();

  React.useEffect(() => {
    console.log("Use Effect CAlled");
    if (selection) {
      async function fetchData() {
        console.log("Insided Async Function");
        try {
          const result = await sortData({
            data: data,
            Selection: selection,
          });
          setFinalData(result);
        } catch (error) {
          console.error("Error fetching sorted data: ", error);
        }
      }

      fetchData();
    }
    console.log("GLobal Fixed Data type : ", fixedType);
    console.log("Final Data INsided Asyn Function : ", finalData);
  }, [category]);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Selection</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.keys(category).map((x: string) => (
            <DropdownMenuCheckboxItem
              key={x}
              checked={category[x]}
              onCheckedChange={() => {
                setCategory(() =>
                  Object.fromEntries(
                    Object.keys(category).map((s) => [s, s === fixedType])
                  )
                );

                console.log("X: ", fixedType);
                if (x == "Wine") {
                  console.log(1);
                  setFixedType("Wine");
                }
                if (x == "Beer") {
                  console.log(2);
                  setFixedType("Beer");
                }
                if (x == "Liqour") {
                  console.log(3);
                  setFixedType("Liquore");
                }
                if (x == "Staff") {
                  console.log(4);
                  setFixedType("Staff");
                }
                console.log("Store: ", x);
                console.log("Fixed Data Type  ", fixedType);
                setSelection(x);
              }}
            >
              {x}
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
