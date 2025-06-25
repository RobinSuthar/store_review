"use client";
import { useState } from "react";
import { Select } from "../Select";
import { TextInput } from "../TextInput";

const SUPPORTED_OPTIONS = [
  { selection: 1, result: "Bad" },
  { selection: 2, result: "Okay" },
  { selection: 3, result: "Average" },
  { selection: 4, result: "Good" },
  { selection: 5, result: "Great" },
];

export default function Wine() {
  const [wineReview, setWineReview] = useState(SUPPORTED_OPTIONS[0].result);
  const [beerReview, setBeerReview] = useState(SUPPORTED_OPTIONS[0].result);
  const [staffReview, setStaffReview] = useState(SUPPORTED_OPTIONS[0].result);
  const [liqour, setLiqourReview] = useState(SUPPORTED_OPTIONS[0].result);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
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
      <div className="mt-7">
        <div>Beer Selection </div>
        <Select
          onSelect={(value) => {
            const selected = SUPPORTED_OPTIONS.find(
              (x) => x.selection === Number(value)
            );
            setBeerReview(selected?.result || "");
          }}
          options={SUPPORTED_OPTIONS.map((x) => ({
            key: x.selection.toString(),
            value: x.result,
          }))}
        />
      </div>

      <div className="mt-7">
        <div>Liqour Selection </div>
        <Select
          onSelect={(value) => {
            const selected = SUPPORTED_OPTIONS.find(
              (x) => x.selection === Number(value)
            );
            setLiqourReview(selected?.result || "");
          }}
          options={SUPPORTED_OPTIONS.map((x) => ({
            key: x.selection.toString(),
            value: x.result,
          }))}
        />
      </div>
      <div className="mt-7">
        <div>Staff Behaviour </div>
        <Select
          onSelect={(value) => {
            const selected = SUPPORTED_OPTIONS.find(
              (x) => x.selection === Number(value)
            );
            setStaffReview(selected?.result || "");
          }}
          options={SUPPORTED_OPTIONS.map((x) => ({
            key: x.selection.toString(),
            value: x.result,
          }))}
        />
      </div>
      <TextInput
        label={"Something you would like to be improved in the store ?"}
        placeholder={"Type here..."}
        onChange={(value) => {
          setQuestion1(value);
        }}
      />
      <TextInput
        label={"Your Shopping experience ?"}
        placeholder={"Type here..."}
        onChange={(value) => {
          setQuestion2(value);
        }}
      />
      <div className="flex justify-center">
        <button className="text-white bg-gray-800 mt-6 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Submit
        </button>
      </div>
    </div>
  );
}
