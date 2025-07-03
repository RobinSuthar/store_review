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

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [selection, setSelection] = React.useState("");
  const data = {
    Name: "Aspen",
    Selection: "Wine",
  };

  React.useEffect(() => {
    console.log("ASdasdasdadsadasdasndkabdkabsdkbakmbds ");
    async function x() {
      const result = await GetData(data);
      console.log(result);
    }
    x();
    console.log(selection);
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
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
  );
}
