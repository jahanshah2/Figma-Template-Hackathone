import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function BestAirMaxMobileSkeleton() {
  return (
    <>
      <div className="flex gap-5">
        <div className="flex flex-col gap-y-4">
          <Skeleton className="h-[300px] w-[300px] rounded" />
          <Skeleton className="h-[20px] w-[300px] rounded-full" />
          <Skeleton className="h-[20px] w-[150px] rounded-full" />
        </div>
        <div className="flex flex-col gap-y-4">
          <Skeleton className="h-[300px] w-[300px] rounded" />
          <Skeleton className="h-[20px] w-[300px] rounded-full" />
          <Skeleton className="h-[20px] w-[150px] rounded-full" />
        </div>
      </div>
    </>
  );
}
