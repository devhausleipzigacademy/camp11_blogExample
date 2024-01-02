import axios from "axios";
import { BlogPost } from "../types/Blog";

const URL = "http://localhost:3000/posts";

export async function getAllBlogPosts() {
  return await axios.get<BlogPost[]>(URL);
}

export async function createBlogPost(blogPostData: Omit<BlogPost, "id">) {
  return await axios.post<BlogPost>(URL, blogPostData);
}
