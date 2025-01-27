import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function BestAirMaxSkeleton() {
  return (
    <>
      <div className="flex gap-12">
        <div className="flex flex-col gap-y-4">
          <Skeleton className="md:h-[300px] md:w-[300px] rounded" />
          <Skeleton className="md:h-[20px] md:w-[300px] rounded-full" />
          <Skeleton className="md:h-[20px] md:w-[150px] rounded-full" />
        </div>
        <div className="flex flex-col gap-y-4">
          <Skeleton className="md:h-[300px] md:w-[300px] rounded" />
          <Skeleton className="md:h-[20px] md:w-[300px] rounded-full" />
          <Skeleton className="md:h-[20px] md:w-[150px] rounded-full" />
        </div>
        <div className="flex flex-col gap-y-4">
          <Skeleton className="md:h-[300px] md:w-[300px] rounded" />
          <Skeleton className="md:h-[20px] md:w-[300px] rounded-full" />
          <Skeleton className="md:h-[20px] md:w-[150px] rounded-full" />
        </div>
        <div className="flex flex-col gap-y-4">
          <Skeleton className="md:h-[300px] md:w-[300px] rounded" />
          <Skeleton className="md:h-[20px] md:w-[300px] rounded-full" />
          <Skeleton className="md:h-[20px] md:w-[150px] rounded-full" />
        </div>
      </div>
    </>
  );
}
