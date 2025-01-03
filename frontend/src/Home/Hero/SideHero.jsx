import { Blogdata } from "@/assets/Assets";
import React from "react";
import { useNavigate } from "react-router-dom";

const SideHero = () => {

    const navigate=useNavigate()

  const blogs = Blogdata;
  return (
    <div className="flex w-6/12 gap-6 flex-col">
      {blogs.slice(4, 7).map((data,index) => {
        return (
          <div key={index} className="flex gap-4 flex-row">
            <img onClick={()=>navigate(`/post/${data.id}`)}
              className="h-44 w-60 object-cover flex-shrink-0"
              src={data.image_url}
              alt={data.title}  
            />
            <div className="flex flex-col">
              <h1>Oct 2024</h1>
              <h2 onClick={()=>navigate(`/post/${data.id}`)} className="text-2xl">{data.title}</h2>
              <h1 className="text-ellipsis overflow-hidden">{data.summary.substring(0, 90)}...</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideHero;
