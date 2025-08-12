import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="md:ml-16 h-[112px] w-[350px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 md:ml-16 w-[300px]" />
        <Skeleton className="h-4 md:ml-26 w-[300px]" />
      </div>
    </div>
  );
}
