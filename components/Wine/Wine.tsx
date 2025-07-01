"use client";
import { useState } from "react";
import { Select } from "../Select";
import { TextInput } from "../TextInput";
import SubmitResponse from "../SubmitResponse";
import { redirect } from "next/navigation";

const SUPPORTED_OPTIONS = [
  { selection: 1, result: "Bad" },
  { selection: 2, result: "Okay" },
  { selection: 3, result: "Average" },
  { selection: 4, result: "Good" },
  { selection: 5, result: "Great" },
];

export default function Wine() {
  const [wineReview, setWineReview] = useState(1);
  const [beerReview, setBeerReview] = useState(1);
  const [staffReview, setStaffReview] = useState(1);
  const [liqourReview, setLiqourReview] = useState(1);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  return (
    <div className="text-black p-4 text-xl">
      <div>Wine Selection </div>
      <Select
        onSelect={(value) => {
          SUPPORTED_OPTIONS.find((x) => x.selection === Number(value));
          setWineReview(Number(value));
          console.log(wineReview);
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
            SUPPORTED_OPTIONS.find((x) => x.selection === Number(value));
            setBeerReview(Number(value));
            console.log(beerReview);
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
            SUPPORTED_OPTIONS.find((x) => x.selection === Number(value));
            setLiqourReview(Number(value));
            console.log(liqourReview);
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
            SUPPORTED_OPTIONS.find((x) => x.selection === Number(value));
            setStaffReview(Number(value));
            console.log(staffReview);
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
        <button
          onClick={async () => {
            const reviewData = {
              wine: Number(wineReview),
              beer: Number(beerReview),
              liqour: Number(liqourReview),
              staff: Number(staffReview),
              question1: question1,
              question2: question2,
            };
            await SubmitResponse(reviewData);

            redirect("/reviewed");
          }}
          className="text-white bg-gray-800 mt-6 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
