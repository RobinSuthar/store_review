"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterSelect({
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Select
      onValueChange={(e) => {
        setFilter(e);
      }}
    >
      <SelectTrigger className="md:w-[180px] w-[100px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>

          <SelectItem className="hover:cursor-pointer" value="Wine">
            Wine
          </SelectItem>
          <SelectItem className="hover:cursor-pointer" value="Beer">
            Beer
          </SelectItem>
          <SelectItem className="hover:cursor-pointer" value="Liquore">
            Liqour
          </SelectItem>
          <SelectItem className="hover:cursor-pointer" value="Staff">
            Staff
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
