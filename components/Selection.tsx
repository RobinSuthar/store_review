"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

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
import { sortData } from "@/lib/clientActions";
import SortData from "@/lib/actions/SortData";

type Checked = DropdownMenuCheckboxItemProps["checked"];

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

type IncomingData2 = {
  Name: string;
  Data: {
    id: number;
    StoreId: number | null;
    Name: string;
    Wine: number;
    Beer: number;
    Liquore: number;
    Staff: number;
    Question1: string;
    Question2: string;
  };
};

export default function SelectionCheckBox({ data }: Props) {
  console.log("Data ah Gya! ", data);

  const [finalData, setFinalData] = React.useState<Props[]>([]);
  const [category, setCategory] = React.useState<Record<string, boolean>>({
    Wine: false,
    Beer: false,
    Staff: false,
    Liquor: false,
  });

  const [selection, setSelection] = React.useState("");

  React.useEffect(() => {
    if (selection) {
      async function fetchData() {
        try {
          const result = await sortData({
            data: data,
            Selection: selection,
          });
          console.log("Sorted Result : ", result);
        } catch (error) {
          console.error("Error fetching sorted data: ", error);
        }
      }

      console.log(selection);

      fetchData();
    }
  }, [selection]);

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Selection</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.keys(category).map((store) => (
            <DropdownMenuCheckboxItem
              key={store}
              checked={category[store]}
              onCheckedChange={() => {
                // Set only the selected store to true, others false
                setCategory(() =>
                  Object.fromEntries(
                    Object.keys(category).map((s) => [s, s === store])
                  )
                );

                // Update selection to the selected store name
                setSelection(store);
              }}
            >
              {store}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div>
        <ChartLineInteractive />
      </div>
    </div>
  );
}
