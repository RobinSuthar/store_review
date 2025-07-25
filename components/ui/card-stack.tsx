"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Progress } from "./progress";
import { TextareaWithText } from "../text-area";
import { ConfettiFireworks } from "../confetti-fireworks";
import { Textarea } from "./textarea";
import UpdateDB from "@/lib/actions/updatedb";
import ReviewdorNot from "@/lib/actions/Reviewedornot";

import cookies from "js-cookie";
import { redirect } from "next/navigation";

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
  const CARD_OFFSET = offset || 6;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [rating, setRating] = React.useState(0); // Initial value
  const [wineRating, setWineRating] = React.useState(0);
  const [beerRating, setBeerRating] = React.useState(0);
  const [LiqourRating, setLiqourRating] = React.useState(0);
  const [staffRating, setStaffRating] = React.useState(0);
  const [member, setMember] = React.useState(false);
  const [question, setQuestion] = React.useState("");

  useEffect(() => {
    const a = cookies.get("review");
    if (a) {
      redirect("/reviewed");
      return;
    }

    console.log("Rating: ", rating);
    console.log("Wine Rating : ", wineRating);
    console.log("Beer Rating : ", beerRating);
    console.log("Liqour Rating : ", LiqourRating);
    console.log("Staffv Rating : ", staffRating);
    console.log("Member : ", member);
    console.log("Question Answer: ", question);
    if (rating == 0) {
      return;
    }
    startFlipping();

    return () => clearInterval(interval);
  }, [rating, wineRating, beerRating, staffRating, LiqourRating]);

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
        if (rating == 6) {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black  bg-white  min-h-96 min-w-96 md:h-60 md:w-96  p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] rounded-3xl  shadow-black/[0.1] dark:shadow-white/[0.05]  "
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              <div className="font-normal text-neutral-700 text-center text-2xl dark:text-neutral-200">
                <div>Thank You for your Review</div>
                <div>We appericate your feedback</div>
                <Progress value={100} className="mt-72" />
              </div>
            </motion.div>
          );
        }
        if (card.id < 4) {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black  bg-white  min-h-96 min-w-96 md:h-60 md:w-96 -3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] rounded-3xl  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-row  "
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
                      className="flex min-w-[140px]  min-h-[45px] cursor-pointer rounded-md items-center justify-center gap-2  bg-gray-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-red-500 dark:ring-offset-black"
                      onClick={() => {
                        if (card.id == 0) {
                          setWineRating(1);
                        }
                        if (card.id == 1) {
                          setBeerRating(1);
                        }
                        if (card.id == 2) {
                          setLiqourRating(1);
                        }
                        if (card.id == 3) {
                          setStaffRating(1);
                        }
                        setRating(rating + 1);
                        console.log("Red");
                      }}
                    >
                      Awful
                    </button>
                  </div>

                  <button
                    className="flex min-w-[140px] min-h-[45px]  cursor-pointer items-center rounded-md justify-center gap-2  bg-gray-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-red-400 dark:ring-offset-black"
                    onClick={() => {
                      if (card.id == 0) {
                        setWineRating(2);
                      }
                      if (card.id == 1) {
                        setBeerRating(2);
                      }
                      if (card.id == 2) {
                        setLiqourRating(2);
                      }
                      if (card.id == 3) {
                        setStaffRating(2);
                      }
                      setRating(rating + 1);
                    }}
                  >
                    Bad
                  </button>
                  <button
                    className="flex min-w-[140px] min-h-[45px]  cursor-pointer items-center justify-center gap-2 rounded-md  bg-gray-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-yellow-500 dark:ring-offset-black"
                    onClick={() => {
                      if (card.id == 0) {
                        setWineRating(3);
                      }
                      if (card.id == 1) {
                        setBeerRating(3);
                      }
                      if (card.id == 2) {
                        setLiqourRating(3);
                      }
                      if (card.id == 3) {
                        setStaffRating(3);
                      }
                      setRating(rating + 1);
                    }}
                  >
                    Okay
                  </button>
                  <button
                    className="flex min-w-[140px] min-h-[45px] bg-gray-500  cursor-pointer items-center justify-center gap-2  rounded-md  px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-orange-500 dark:ring-offset-black"
                    onClick={() => {
                      if (card.id == 0) {
                        setWineRating(4);
                      }
                      if (card.id == 1) {
                        setBeerRating(4);
                      }
                      if (card.id == 2) {
                        setLiqourRating(4);
                      }
                      if (card.id == 3) {
                        setStaffRating(4);
                      }
                      setRating(rating + 1);
                    }}
                  >
                    Good
                  </button>
                  <button
                    className="flex min-w-[140px] min-h-[45px] cursor-pointer items-center justify-center gap-2 rounded-md  bg-gray-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                    onClick={() => {
                      if (card.id == 0) {
                        setWineRating(5);
                      }
                      if (card.id == 1) {
                        setBeerRating(5);
                      }
                      if (card.id == 2) {
                        setLiqourRating(5);
                      }
                      if (card.id == 3) {
                        setStaffRating(5);
                      }
                      setRating(rating + 1);
                    }}
                  >
                    Great
                  </button>
                </div>

                <Progress value={rating * 21} className="mt-8" />
              </div>
            </motion.div>
          );
        }
        if (card.id == 4) {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black  bg-white  min-h-96 min-w-96 md:h-60 md:w-96 -3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] rounded-3xl  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-row  "
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
                      className="flex min-w-[140px]  min-h-[45px] cursor-pointer rounded-md items-center justify-center gap-2  bg-gray-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-red-500 dark:ring-offset-black"
                      onClick={() => {
                        setMember(false);
                        setRating(rating + 1);
                        console.log("Red");
                      }}
                    >
                      No
                    </button>
                  </div>

                  <button
                    className="flex min-w-[140px] min-h-[45px] cursor-pointer items-center justify-center gap-2 rounded-md  bg-gray-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                    onClick={() => {
                      setMember(true);
                      setRating(rating + 1);
                    }}
                  >
                    Yes
                  </button>
                </div>
                <Progress value={rating * 21} className="mt-48" />
              </div>
            </motion.div>
          );
        }
        if (card.id == 5) {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black  bg-white  min-h-96 min-w-96 md:h-60 md:w-96 -3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] rounded-3xl  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-row  "
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
                <div className="grid grid-cols-2 mt-2 p-2 gap-8 ">
                  <div className="grid min-w-80 min-h-32 gap-3">
                    <Textarea
                      onChange={(e) => {
                        setQuestion(e.target.value);
                      }}
                      placeholder="Type your message here."
                      id="message-2"
                    />
                  </div>
                </div>
                <button
                  className="flex mt-2 min-w-[140px] min-h-[45px] cursor-pointer items-center justify-center gap-2 rounded-md  bg-gray-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                  onClick={async () => {
                    setRating(rating + 1);
                    ConfettiFireworks();
                    console.log("adsdsa");
                    setRating(rating + 1);
                    UpdateDB({
                      wineReview: wineRating,
                      beerReview: beerRating,
                      staffReview: staffRating,
                      liqourReview: LiqourRating,
                      question: question,
                      member: member,
                    });
                  }}
                >
                  Submit
                </button>

                <Progress value={rating * 21} className="mt-20" />
              </div>
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black  bg-white  min-h-96 min-w-96 md:h-60 md:w-96 -3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] rounded-3xl  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-row  "
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
                <div className="grid grid-cols-2 mt-2 p-2 gap-8 ">
                  <div>
                    {" "}
                    <TextareaWithText />
                  </div>
                </div>
                <button
                  className="flex mt-2 min-w-[140px] min-h-[45px] cursor-pointer items-center justify-center gap-2 rounded-md  bg-green-500 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500 dark:ring-offset-black"
                  onClick={async (e) => {
                    console.log("adsdsa");
                    setRating(rating + 1);
                    console.log("asdkjbksadjvsahdvasndvnasv");
                    const result = await UpdateDB({
                      wineReview: wineRating,
                      beerReview: beerRating,
                      staffReview: staffRating,
                      liqourReview: LiqourRating,
                      question: question,
                      member: member,
                    });
                    console.log("ASdasds");
                    console.log(result);
                  }}
                >
                  Submit
                </button>
                <div>
                  <Progress value={rating * 21} className="mt-8  " />
                </div>
              </div>
            </motion.div>
          );
        }
      })}
    </div>
  );
};
