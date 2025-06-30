// components/ClientHeader.tsx
"use client";

import { ModeToggle } from "@/components/mode-toggle";

export function ClientHeader() {
  return (
    <div className="p-4">
      <ModeToggle />
    </div>
  );
}
