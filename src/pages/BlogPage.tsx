import axios from "axios";
import React, { useEffect, useState } from "react";
import { BlogPost } from "../types/Blog";
import BlogCard from "../components/BlogCard";
import { getAllBlogPosts } from "../api/blogApi";

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    getAllBlogPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts);

  return (
    <div>
      <h1 className="text-3xl">hello blog Page</h1>
      <div className="flex gap-3">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
