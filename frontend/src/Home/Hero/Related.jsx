import React, { useEffect } from "react";
import { Blogdata } from "@/assets/Assets";
import { useNavigate } from "react-router-dom";

const Related = ({ currentPostId }) => {
  const navigate = useNavigate();
  const relatedPosts = Blogdata.filter((post) => post.id !== currentPostId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [relatedPosts]);

  return (
    <div className="grid grid-cols-3  gap-2">
      {relatedPosts.map((post) => (
        <div key={post.id} className="flex flex-col gap-3 items-center">
          <img
            onClick={() => navigate(`/post/${post.id}`)}
            className="h-[200px] w-[320px] cursor-pointer object-cover"
            src={post.image_url || "https://via.placeholder.com/500"}
            alt={post.title}
          />
          <div className="flex flex-col">
            <h2
              onClick={() => navigate(`/post/${post.id}`)}
              className="text-lg cursor-pointer font-medium"
            >
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">
              {post.summary.substring(0, 90)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Related;
