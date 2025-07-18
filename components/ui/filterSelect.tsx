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

export function FilterSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>

          <SelectItem value="Wine">Wine</SelectItem>
          <SelectItem value="Beer">Beer</SelectItem>
          <SelectItem value="Liquor">Liqour</SelectItem>
          <SelectItem value="Staff">Staff</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
