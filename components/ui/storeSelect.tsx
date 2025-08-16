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
      <SelectTrigger className="md:w-[180px] w-[100px]">
        <SelectValue placeholder=" Store" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Stores</SelectLabel>
          <SelectItem value="1" className="hover:cursor-pointer ">
            North Hill
          </SelectItem>
          <SelectItem value="2" className="text-red-600 line-through">
            Aspen
          </SelectItem>
          <SelectItem value="3" className="text-red-600 line-through">
            Marda Loop
          </SelectItem>
          <SelectItem value="4" className="text-red-600 line-through">
            Richmond
          </SelectItem>
          <SelectItem value="5" className="text-red-600 line-through">
            8th Ave
          </SelectItem>
          <SelectItem value="6" className="text-red-600 line-through">
            Coopers
          </SelectItem>
          <SelectItem value="7" className="text-red-600 line-through">
            Okatoks
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
