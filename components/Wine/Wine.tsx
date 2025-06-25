"use client";
import { useState } from "react";
import { Select } from "../Select";

const SUPPORTED_OPTIONS = [
  { selection: 1, result: "Bad" },
  { selection: 2, result: "Okay" },
  { selection: 3, result: "Average" },
  { selection: 4, result: "Good" },
  { selection: 5, result: "Great" },
];

export default function Wine() {
  const [wineReview, setWineReview] = useState(SUPPORTED_OPTIONS[0].result);

  return (
    <div className="text-black p-4 text-xl">
      <div>Wine Selection </div>
      <Select
        onSelect={(value) => {
          const selected = SUPPORTED_OPTIONS.find(
            (x) => x.selection === Number(value)
          );
          setWineReview(selected?.result || "");
        }}
        options={SUPPORTED_OPTIONS.map((x) => ({
          key: x.selection.toString(),
          value: x.result,
        }))}
      />
      <div>Wine Selection </div>
      <Select
        onSelect={(value) => {
          const selected = SUPPORTED_OPTIONS.find(
            (x) => x.selection === Number(value)
          );
          setWineReview(selected?.result || "");
        }}
        options={SUPPORTED_OPTIONS.map((x) => ({
          key: x.selection.toString(),
          value: x.result,
        }))}
      />
      <div>Wine Selection </div>
      <Select
        onSelect={(value) => {
          const selected = SUPPORTED_OPTIONS.find(
            (x) => x.selection === Number(value)
          );
          setWineReview(selected?.result || "");
        }}
        options={SUPPORTED_OPTIONS.map((x) => ({
          key: x.selection.toString(),
          value: x.result,
        }))}
      />
      <div>Wine Selection </div>
      <Select
        onSelect={(value) => {
          const selected = SUPPORTED_OPTIONS.find(
            (x) => x.selection === Number(value)
          );
          setWineReview(selected?.result || "");
        }}
        options={SUPPORTED_OPTIONS.map((x) => ({
          key: x.selection.toString(),
          value: x.result,
        }))}
      />
      <div>Wine Selection </div>
      <Select
        onSelect={(value) => {
          const selected = SUPPORTED_OPTIONS.find(
            (x) => x.selection === Number(value)
          );
          setWineReview(selected?.result || "");
        }}
        options={SUPPORTED_OPTIONS.map((x) => ({
          key: x.selection.toString(),
          value: x.result,
        }))}
      />
    </div>
  );
}
