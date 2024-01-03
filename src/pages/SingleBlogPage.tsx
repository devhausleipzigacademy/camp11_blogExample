import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getSingleBlogPost } from "../api/blogApi";

function SingleBlogPage() {
  const { blogId } = useParams();

  const { data: blogPost } = useQuery({
    queryKey: ["singleBlog", blogId],
    queryFn: async () => await getSingleBlogPost(blogId!),
  });

  return (
    <div>
      <h1 className="text-4xl font-bold">{blogPost?.title}</h1>
      <p>{blogPost?.content}</p>
    </div>
  );
}

export default SingleBlogPage;
