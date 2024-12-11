import React from "react";
import Hero from "./components/Hero-Section/Hero";
import BestAirMax from "./components/Best-of-Air-Max/Best-of-Air-Max";
import Featured from "./components/Featured/Featured";
import GearUp from "./components/Gear-Up/Gear-Up";
import DontMiss from "./components/Dont-Miss/Dont-Miss";
import TheEssentials from "./components/The-Essentials/The-Essentials";
import ShoesTypes from "./components/Shoes-Types/Shoes-Types";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main>
        <Hero />
      </main>
      {/* HERO SECTION */}

      {/* BEST OF AIR MAX SECTION */}
      <section>
        <BestAirMax />
      </section>
      {/* BEST OF AIR MAX SECTION */}

      {/* FEATURED SECTION */}
      <section>
        <Featured />
      </section>
      {/* FEATURED SECTION */}

      {/* GEAR-UP SECTION */}
      <section>
        <GearUp />
      </section>
      {/* GEAR-UP SECTION */}

      {/* Don't Miss SECTION */}
      <section>
        <DontMiss />
      </section>
      {/* Don't Miss  SECTION */}

      {/* The Essentials  SECTION */}
      <section>
        <TheEssentials />
      </section>
      {/* The Essentials  SECTION */}

      {/* SHEOS TYPES  SECTION */}
      <section>
        <ShoesTypes />
      </section>
      {/* SHEOS TYPES  SECTION */}
    </>
  );
}
