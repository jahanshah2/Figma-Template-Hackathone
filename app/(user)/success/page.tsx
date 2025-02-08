import Success from "@/app/components/Success/Success";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: Promise<{ session_id?: string | null }>;
};

const SuccessPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const id = params?.session_id ?? "";
  if (!id) {
    redirect("/");
  }
  return (
    <div>
      <Success id={id} />
    </div>
  );
};

export default SuccessPage;