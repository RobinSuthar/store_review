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

export function AnalyticsSelectStore() {
  const [value, setValue] = React.useState("");
  console.log(value);
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Store" />
      </SelectTrigger>
      <SelectContent
        onChange={(e) => {
          setValue("dasdasd");
        }}
      >
        <SelectGroup
          onClick={() => {
            console.log("SADasdasda");
          }}
        >
          <SelectLabel
            onSelect={() => {
              console.log("ASdasdsa");
            }}
          >
            Stores
          </SelectLabel>
          <SelectItem
            onClick={() => {
              console.log("as");
            }}
            value="North Hill"
          >
            North Hill
          </SelectItem>
          <SelectItem
            value="Aspen"
            onSelect={() => {
              console.log("asdknajsbd,as");
            }}
          >
            Aspen
          </SelectItem>
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
