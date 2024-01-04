import BlogCard from "../components/BlogCard";
import { useGetPosts } from "../hooks/useGetPosts";

function HomePage() {
	const { data: posts, isLoading } = useGetPosts();

	return (
		<div>
			<h1 className="text-3xl">Hello Home page</h1>
			<h3 className="text-2xl">The last recent BlogPosts</h3>
			{isLoading && <h1 className="text-4xl">Loading...</h1>}
			<div className="flex gap-3">
				{posts?.data.splice(-3).map((post) => (
					<BlogCard key={post.id} {...post} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
