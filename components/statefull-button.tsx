"use client";

import React from "react";
import { Button } from "@/components/ui/stateful-button";

export function StatefulButtonDemo() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <Button className="bg-red-500" onClick={handleClick}>
        Great
      </Button>
    </div>
  );
}
