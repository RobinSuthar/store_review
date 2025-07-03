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
import GetData from "@/lib/actions/getData";
import SelectionCheckBox from "./Selection";

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

export function DropdownMenuCheckboxes() {
  const [selection, setSelection] = React.useState("");
  const [finalData, setFinalData] = React.useState<IncomingData[]>([]);
  const data = {
    Name: "Aspen",
    Selection: "Wine",
  };

  React.useEffect(() => {
    if (selection) {
      async function fetchData() {
        const result: IncomingData[] = await GetData({
          Name: selection,
          Selection: "Wine", // or dynamic
        });
        setFinalData(result);
      }

      fetchData();
    }
  }, [selection]);

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [checkedStores, setCheckedStores] = React.useState<
    Record<string, boolean>
  >({
    "North Hill": false,
    Aspen: false,
    "8th Ave": false,
    "Marda Loop": false,
    Ricmond: false,
    Seton: false,
    Okotoks: false,
  });
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Stores</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.keys(checkedStores).map((store) => (
            <DropdownMenuCheckboxItem
              key={store}
              checked={checkedStores[store]}
              onCheckedChange={() => {
                // Set only the selected store to true, others false
                setCheckedStores(() =>
                  Object.fromEntries(
                    Object.keys(checkedStores).map((s) => [s, s === store])
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
      <SelectionCheckBox data={finalData} />
    </div>
  );
}
