import axios from "axios";
import { BlogPost } from "../types/Blog";

const URL = "http://localhost:3000/posts";

function delayedPromise() {
  const delay = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await axios.get<BlogPost[]>(URL);
      resolve(response);
    }, 3000);
  });
  return delay as Promise<{ data: BlogPost[] }>;
}

export async function getAllBlogPosts() {
  return await delayedPromise();
}

export async function createBlogPost(blogPostData: Omit<BlogPost, "id">) {
  return await axios.post<BlogPost>(URL, blogPostData);
}

export async function getSingleBlogPost(id: string) {
  return (await axios.get<BlogPost>(`${URL}/${id}`)).data;
}
