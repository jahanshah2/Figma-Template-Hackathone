import React from "react";

const capitalCity = [
  {
    slug: "pakistan-capital",
    capital: "Islamabad",
  },
  {
    slug: "india-capital",
    capital: "Mumbai",
  },
];

export default function Blogs({ params }: { params: { slug: string } }) {
  const capitalData = capitalCity.find((capital) => capital.slug === params.slug);



  return (
    <div>
      <h1>{capitalData?.capital}</h1>
    </div>
  );
}
