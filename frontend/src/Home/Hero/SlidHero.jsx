import { Blogdata } from "@/assets/Assets";
import React from "react";

const SlidHero = () => {



  return (
    <div className="flex flex-col gap-5 w-6/12 ">
      {Blogdata.slice(3,4 ).map((data, index) => {
        return (
          <div>
            <img className="h-[376px] w-screen object-cover"
              src={data.image_url}
              alt=""
            />
            <h1 className="text-xl">October 23,2023</h1>
            <h1 className="text-3xl">
              {data.title}
            </h1>
            <h1>
           { data.summary ? data.summary.substring(0, 400) + "..." : "No summary available."}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default SlidHero;
