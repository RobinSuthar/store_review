"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        What do you think of our <Highlight>Wine</Highlight> Collection ?
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        What do you think of our
        <Highlight>Beer</Highlight> Collection
      </p>
    ),
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        Any suggestion for
        <Highlight>improvement </Highlight> ?
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        What do you think of our
        <Highlight>Liqour</Highlight> Collection ?
      </p>
    ),
  },
  {
    id: 3,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        What do you think of our Staff
        <Highlight>Behvaiour </Highlight> ?
      </p>
    ),
  },
  {
    id: 4,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        Have you signed up our
        <Highlight>member ship </Highlight> ?
      </p>
    ),
  },
];
