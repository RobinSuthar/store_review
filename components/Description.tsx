import { Concert_One } from "next/font/google";

const concertOne = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Description() {
  return (
    <div className="flex flex-col p-5 align-middle text-center justify-center mt-2">
      <div className={`${concertOne.className} text-4xl text-black `}>
        REVIEW US
      </div>
      <div className={`${concertOne.className} text-ms text-black mt-4 `}>
        Your questions and feedback mean the world to us. Use the anonymous form
        below to share your thoughts, suggestions, or experiences. We value your
        input and are always looking for ways to improve and provide you with
        the best service possible. Your identity will remain completely
        anonymous.
      </div>
    </div>
  );
}
