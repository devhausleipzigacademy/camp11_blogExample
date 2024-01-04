import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getURL } from "../api/blogApi";
import axios from "axios";
import { BlogPost, Comment } from "../types/data";
import Textarea from "../components/forms/Textarea";
import Button from "../components/forms/Button";
import { Comments } from "../components/Comments";
import { useState } from "react";

function SingleBlogPage() {
	const { postId } = useParams();

	const { data: getPostResult } = useQuery({
		queryKey: ["post", postId],
		queryFn: async () =>
			await axios.get<BlogPost>(getURL(`/posts/${postId}`))
	});

	const { data: getCommentsResult, refetch: refetchComments } = useQuery({
		queryKey: ["comments", postId],
		queryFn: async () =>
			await axios.get<Comment[]>(getURL(`/comments`), {
				params: {
					postId: postId
				}
			})
	});

	const { mutate: postComment } = useMutation({
		mutationKey: ["comments", postId],
		mutationFn: async (comment: Omit<Comment, "id">) => {
			await axios.post(getURL(`/comments`), comment);
		},
		onSuccess: () => {
			setNewComment({ ...emptyComment });
			refetchComments();
		}
	});

	const emptyComment = {
		content: "",
		postId: Number(postId) || -1,
		author: "Franz",
		replyId: null
	};

	const [newComment, setNewComment] = useState<Omit<Comment, "id">>({
		...emptyComment
	});

	if (!postId) {
		return <div>Post not found</div>;
	}

	const post = getPostResult?.data;
	const comments = getCommentsResult?.data;

	return (
		<div>
			<h1 className="text-4xl font-bold">{post?.title}</h1>
			<p>{post?.content}</p>
			<div>
				<h2 className="text-2xl font-bold">Comments</h2>
				<form
					onSubmit={async (event) => {
						event.preventDefault();

						// const form = event.target as HTMLFormElement;
						// const formDataInstance = new FormData(form);
						// const formData = Object.fromEntries(
						// 	formDataInstance
						// ) as Record<string, string>;

						postComment(newComment);
					}}
				>
					<Textarea
						name="content"
						label="Create a new comment"
						value={newComment.content}
						onChange={(event) => {
							setNewComment((comment) => {
								return {
									...comment,
									content: event.target.value
								};
							});
						}}
					/>
					<Button type="submit">Submit</Button>
				</form>
				<Comments
					comments={comments || []}
					setNewComment={setNewComment}
					newComment={newComment}
				/>
			</div>
		</div>
	);
}

export default SingleBlogPage;
