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

export function AnalyticsSelectStore() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Store" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="North Hill">North Hill</SelectItem>
          <SelectItem value="Aspen">Aspen</SelectItem>
          <SelectItem value="Marda Loop">Marda Loop</SelectItem>
          <SelectItem value="Richmond">Richmond</SelectItem>
          <SelectItem value="8th Ave">8th Ave</SelectItem>
          <SelectItem value="Coopers">Coopers</SelectItem>
          <SelectItem value="Okatoks">Okatoks</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
