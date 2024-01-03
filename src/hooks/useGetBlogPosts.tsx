import { useQuery } from "@tanstack/react-query";
import { getAllBlogPosts } from "../api/blogApi";

export function useGetBlogPosts() {
  const { data: posts, ...rest } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: getAllBlogPosts,
    //refetchInterval: 1000,
    //staleTime: 1000 * 60 * 60,
  });

  return { posts, ...rest };
}
