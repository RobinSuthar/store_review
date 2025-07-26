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

export function FilterSelect() {
  return (
    <Select open>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel
            onClick={() => {
              console.log("9");
            }}
          >
            Filters
          </SelectLabel>

          <SelectItem
            onClick={(e) => {
              console.log("8");
            }}
            value="Wine"
          >
            Wine
          </SelectItem>
          <SelectItem
            value="Beer"
            onClick={() => {
              console.log("x");
            }}
          >
            Beer
          </SelectItem>
          <SelectItem
            onClick={() => {
              console.log("a");
            }}
            value="Liquor"
          >
            Liqour
          </SelectItem>
          <SelectItem
            onClick={() => {
              console.log("f");
            }}
            value="Staff"
          >
            Staff
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
