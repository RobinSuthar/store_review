import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkelton() {
  return (
    <div className="p-32  grid grid-cols-3 gap-12">
      <div className="flex flex-col col-span-1">
        <Skeleton count={5} /> <Skeleton count={5} />{" "}
      </div>
      <div className="col-span-2">
        <Skeleton count={5} /> <Skeleton count={5} />{" "}
      </div>
    </div>
  );
}
