import { createContext, useEffect, useState } from "react";
import { BlogPost } from "../types/data";

type Props = {
	children: React.ReactNode;
};

type BlogPostContextType = {
	posts: BlogPost[];
	isLoading: boolean;
};

export const BlogPostContext = createContext<BlogPostContextType>({
	posts: [],
	isLoading: true
});

// function BlogPostProvider({ children }: Props) {
// 	const [posts, setPosts] = useState<BlogPost[]>([]);
// 	const [isLoading, setIsLoading] = useState(true);
// 	useEffect(() => {
// 		getAllBlogPosts()
// 			.then((res) => {
// 				setPosts(res.data);
// 			})
// 			.finally(() => setIsLoading(false));
// 	}, []);

// 	return (
// 		<BlogPostContext.Provider
// 			value={{
// 				posts,
// 				isLoading
// 			}}
// 		>
// 			{children}
// 		</BlogPostContext.Provider>
// 	);
// }

// export default BlogPostProvider;
