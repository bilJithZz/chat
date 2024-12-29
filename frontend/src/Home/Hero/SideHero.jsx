import { Blogdata } from "@/assets/Assets";
import React from "react";

const SideHero = () => {

  const blogs = Blogdata
  return (
    <div className="flex w-6/12 gap-6 flex-col">
      {blogs.slice(0,3).map((data, index)=>{
        return (
          <div key={index} className="flex gap-4 flex-row">
            <img
              className="h-44 w-60 object-cover"
              src={data.image_url}
              alt="Oranges in a basket"
            />
            <div className="flex flex-col">
              <h1>Oct 2024</h1>
              <h2 className="text-2xl">{data.title}</h2>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default SideHero;
