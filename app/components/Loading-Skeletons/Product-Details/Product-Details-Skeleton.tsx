import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductDetailsSkeleton() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 md:gap-y-4 md:flex-row md:gap-28">
        <div>
          <Skeleton className="h-[470px] w-full md:h-[450px] md:w-[450px] rounded" />
        </div>
        <div className="space-y-6 md:space-y-6">
          <Skeleton className="h-[50px] w-[350px] rounded-full" />
          <div className="space-y-1 md:space-y-2">
            <Skeleton className="h-[20px] w-[320px] rounded-full" />
            <Skeleton className="h-[20px] w-[350px] rounded-full" />
            <Skeleton className="h-[20px] w-[330px] rounded-full" />
            <Skeleton className="h-[20px] w-[340px] rounded-full" />
            <Skeleton className="h-[20px] w-[70px] rounded-full" />
          </div>
          <Skeleton className="h-[30px] w-[100px] rounded-full" />
          <Skeleton className="h-[40px] w-[200px] rounded-full" />
        </div>
      </div>
    </div>
  );
}
