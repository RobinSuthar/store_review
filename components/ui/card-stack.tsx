"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Progress } from "./progress";

let interval: any;

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
  const [rating, setRating] = React.useState(0); // Initial value

  useEffect(() => {
    if (rating == 0) {
      return;
    }
    startFlipping();

    return () => clearInterval(interval);
  }, [rating]);

  const startFlipping = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  };
  return (
    <div className="relative  min-h-96 min-w-96 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white  min-h-96 min-w-96 md:h-60 md:w-96 -3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-row  "
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
              <div className="grid grid-cols-2 mt-6 p-2 gap-8 ">
                <div>
                  {" "}
                  <button
                    className="flex min-w-[120px]  cursor-pointer rounded-md items-center justify-center gap-2  bg-red-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                    onClick={() => {
                      setRating(1);
                      console.log("Red");
                    }}
                  >
                    Awful
                  </button>
                </div>

                <button
                  className="flex min-w-[120px]  cursor-pointer items-center rounded-md justify-center gap-2  bg-red-300 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                  onClick={() => {
                    setRating(2);
                  }}
                >
                  Bad
                </button>
                <button
                  className="flex min-w-[120px]  cursor-pointer items-center justify-center gap-2 rounded-md  bg-yellow-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                  onClick={() => {
                    setRating(3);
                  }}
                >
                  Okay
                </button>
                <button
                  className="flex min-w-[120px] bg-orange-300  cursor-pointer items-center justify-center gap-2  rounded-md  px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                  onClick={() => {
                    setRating(4);
                  }}
                >
                  Good
                </button>
                <button
                  className="flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-md  bg-green-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                  onClick={() => {
                    setRating(5);
                  }}
                >
                  Great
                </button>
              </div>

              <Progress value={10} className="mt-8" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
