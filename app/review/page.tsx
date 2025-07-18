"use client";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
export default function Page() {
  const [rating, setRating] = React.useState(0); // Initial value

  return (
    <div>
      <div className="grid grid-cols-1 p-4 mt-16">
        <div className="bg-card text-card-foreground min-h-dvw text-4xl text-center  flex-col justify-center  gap-6 rounded-xl border py-6 shadow-md ">
          Wine Collection ?
          <div className="flex justify-center mt-24">
            <Rating
              style={{ maxWidth: 370 }}
              //             itemShapes: JSX.Element | JSX.Element[];
              // /** Stroke width of the SVG, expressed in viewBox user coordinate's unit size. */
              // itemStrokeWidth?: number;
              // /** Border width of the SVG bounding box, expressed with an integer representing the pixels. */
              // boxBorderWidth?: number;
              spaceInside={"small"}
              itemStyles={myStyles}
              value={rating}
              transition="zoom"
              onChange={setRating}
            />
          </div>
          <div className="flex text-sm flex-row justify-around gap-56 mt-3">
            <div>Bad</div>
            <div>Great</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="w-24">Next</Button>
      </div>
    </div>
  );
}
