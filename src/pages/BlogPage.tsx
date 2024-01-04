import { useState } from "react";

import BlogCard from "../components/BlogCard";

import Input from "../components/forms/Input";
import { useGetPosts } from "../hooks/useGetPosts";

function BlogPage() {
	const [searchInput, setSearchInput] = useState("");
	const { data: posts, isLoading } = useGetPosts();

	return (
		<div>
			<h1 className="text-3xl">hello blog Page</h1>
			<Input
				id="search"
				label="search"
				onChange={(e) => setSearchInput(e.target.value)}
				value={searchInput}
			/>
			{isLoading && <h1 className="text-4xl">LOADING!!!!!</h1>}
			<div className="flex gap-3 container flex-wrap">
				{posts?.data.map((post) => (
					<BlogCard key={post.id} {...post} />
				))}
			</div>
		</div>
	);
}

export default BlogPage;
