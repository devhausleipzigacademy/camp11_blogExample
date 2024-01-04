import { useQuery } from "@tanstack/react-query";
import { getURL } from "../api/blogApi";
import { BlogPost } from "../types/data";
import axios from "axios";

export function useGetPosts() {
	const result = useQuery({
		queryKey: ["posts"],
		queryFn: async () => await axios.get<BlogPost[]>(getURL("/posts"))
	});

	return result;
}
