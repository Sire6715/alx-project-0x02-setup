import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 space-x-4 space-y-2">
        {posts?.map(({ userId, title, content }: PostProps) => (
          <PostCard
            title={title}
            content={content}
            userId={userId}
            key={userId}
          />
        ))}
        {}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body, // map 'body' to 'content'
  }));

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
