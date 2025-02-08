import Success from "@/app/components/Success/Success";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  searchParams: {
    session_id: string | null;
  };
}

const SuccessPage =  ({ searchParams }: Props) => {
  const id = searchParams?.session_id;
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
