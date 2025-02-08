"use client";
import Image from "next/image";
import React, { useState } from "react";

function SearchInput() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="hidden sm:block md:relative">
      <input
        type="search"
        placeholder="Search"
        className=" md:focus-visible:outline-none md:bg-gray-100 md:p-[10px] md:pl-[50px] md:rounded-[25px]"
      />
      <Image
        src={"/VectorSearch.svg"}
        alt="logo"
        height={10000}
        width={1000}
        className="md:absolute md:top-3 md:h-[21px] md:w-[59px]"
      />
    </div>
  );
}

export default SearchInput;
