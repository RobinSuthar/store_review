"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";

let interval: any;

const myStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };
  const [rating, setRating] = React.useState(0); // Initial value

  return (
    <div className="relative  min-h-96 min-w-96 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white  min-h-96 min-w-96 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-row  "
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
              fiv adsadasdas
              <Rating
                style={{ maxWidth: 45 }}
                //             itemShapes: JSX.Element | JSX.Element[];
                // /** Stroke width of the SVG, expressed in viewBox user coordinate's unit size. */
                // itemStrokeWidth?: number;
                // /** Border width of the SVG bounding box, expressed with an integer representing the pixels. */
                // boxBorderWidth?: number;
                spaceInside={"large"}
                itemStyles={myStyles}
                value={rating}
                transition="zoom"
                onChange={setRating}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
