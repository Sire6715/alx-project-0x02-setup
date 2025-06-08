import React, { useState } from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

const Home = () => {
  const [posts, setPosts] = useState<UserProps[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (newPost: UserProps) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setShowModal(false); 
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Welcome</h1>

        <div className="mb-6">
          <button
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setShowModal(true)}
          >
            Add Content
          </button>
        </div>

        {showModal && (
          <PostModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddPost}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
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
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
