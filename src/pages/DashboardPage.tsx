import React, { useState } from "react";
import Input from "../components/forms/Input";
import Textarea from "../components/forms/Textarea";
import Button from "../components/forms/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getURL } from "../api/blogApi";

// when I hit submit btn I want to console log the current value of Input and also of my Textarea

function DashboardPage() {
	const queryClient = new QueryClient();
	const navigate = useNavigate();

	const { mutate } = useMutation({
		mutationFn: async () => await axios.post(getURL("/post"), inputVal),
		onSuccess: () => {
			toast.success("Blog post created successfully");
			navigate("/blog");
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ["blogPosts"] });
		},
		onError: () => {
			toast.error("Error creating blog post");
		}
	});

	const [inputVal, setInputVal] = useState({
		title: "",
		content: ""
	});

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		mutate();
	}

	return (
		<div>
			<h1 className="text-3xl">hello Dashboard page</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Input
					type="text"
					placeholder="title"
					id="title"
					label="Title:"
					onChange={(e) =>
						setInputVal({ ...inputVal, title: e.target.value })
					}
					value={inputVal.title}
				/>
				<Textarea
					onChange={(e) =>
						setInputVal({ ...inputVal, content: e.target.value })
					}
					value={inputVal.content}
					id="content"
					label="Content:"
					cols={30}
					rows={5}
					placeholder="here some content text..."
				/>
				<Button variant="secondary" size="md" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default DashboardPage;
