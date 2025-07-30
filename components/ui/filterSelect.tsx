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
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>

          <SelectItem value="Wine">Wine</SelectItem>
          <SelectItem value="Beer">Beer</SelectItem>
          <SelectItem value="Liquore">Liqour</SelectItem>
          <SelectItem value="Staff">Staff</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
