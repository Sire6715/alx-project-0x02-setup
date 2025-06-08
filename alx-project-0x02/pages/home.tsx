import React, { useState } from "react";
import Card from "@/components/common/Card";
import { UserProps } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

const Home = () => {
  const [posts, setPosts] = useState<UserProps[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (newPost: UserProps) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div className="flex items-end">
        <button>
          <button
            className="py-4 px-2 bg-white text-black rounded-md"
            onClick={() => setShowModal(true)}
          >
            Add Content
          </button>
          <div>
            {showModal && (
              <PostModal
                onClose={() => setShowModal(false)}
                onSubmit={handleAddPost}
              />
            )}
          </div>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <Card
          title={"Escape the Ordinary"}
          content={
            "Discover hidden places and unique experiences that turn your journey into an adventure."
          }
        />
        <Card
          title={"Live Where You Love"}
          content={
            "Find cozy apartments, scenic villas, or affordable stays in the places you adore most."
          }
        />
        <Card
          title={"Smart Living Starts Here"}
          content={
            "Browse modern homes with intelligent design, built for comfort and efficiency."
          }
        />
        {posts.map((posts, index) => (
          <Card
            key={index}
            title={posts.title}
            content={posts.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
