import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="bg-white flex flex-col p-4 rounded-2xl justify-between align-middle items-center">
      <h1 className="text-start text-black text-xl">
        {title}
      </h1>
      <p className="text-blue-400">{content}</p>
    </div>
  );
};
export default PostCard;
