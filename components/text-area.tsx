"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function TextareaWithText() {
  return (
    <div className="grid min-w-80 min-h-32 gap-3">
      <Textarea placeholder="Type your message here." id="message-2" />
    </div>
  );
}
