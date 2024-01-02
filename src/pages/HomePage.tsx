import React from "react";
import { type BlogPost } from "../types/Blog";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getAllBlogPosts } from "../api/blogApi";

function HomePage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    getAllBlogPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Hello Home page</h1>
      <h3 className="text-2xl">The last recent BlogPosts</h3>
      <div className="flex gap-3">
        {posts.splice(-3).map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
