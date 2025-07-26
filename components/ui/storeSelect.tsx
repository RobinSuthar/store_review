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

type T = {
  setStore: string;
};

export function AnalyticsSelectStore({
  setStore,
}: {
  setStore: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Select onValueChange={(e) => setStore(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Store" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Stores</SelectLabel>
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
