import { Blogdata } from "@/assets/Assets";
import React from "react";

const Related = () => {
  
  const blog=Blogdata
  console.log(blog)
  return (
    <div className=" w-full">
      <div className="grid w-full grid-cols-3 gap-5">
       
       {blog.slice(0,6).map((data,index)=>{
        return(
          <div key={index} className="flex flex-col">
          <img className="h-52 w-80 object-cover"
            src={data.image_url}
            alt=""
          />
          <h1>October 2023</h1>
          <h1>{data.title}</h1>
          <h1>
          { data.summary.substring(0,100)}
          </h1>
        </div>
        )
       })}
        
      </div>
    </div>
  );
};

export default Related;
