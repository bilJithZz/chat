import React from "react";
import SideHero from "./Hero/SideHero";
import SlidHero from "./Hero/SlidHero";
import Related from "./Hero/Related";

const Hero = () => {
  return (
    <div>
      <h1 className="text-3xl mb-5 mt-5">Popular Artciles</h1>
      <div>
        <div className="flex flex-row  gap-5">
          <SlidHero />
          <SideHero />
        </div>
        <h1 className="mt-5 text-3xl mb-4">Latest Article</h1>
        <Related />
      </div>
    </div>
  );
};

export default Hero;
