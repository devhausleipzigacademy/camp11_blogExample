import React, { useState } from "react";
import Input from "../components/forms/Input";
import Textarea from "../components/forms/Textarea";
import Button from "../components/forms/Button";
import axios from "axios";
import { type BlogPost } from "../types/Blog";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createBlogPost } from "../api/blogApi";

// when I hit submit btn I want to console log the current value of Input and also of my Textarea

function DashboardPage() {
  const navigate = useNavigate();

  const [inputVal, setInputVal] = useState({
    title: "",
    content: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const { data } = await createBlogPost(inputVal);
      console.log(data);
      toast.success("Post created successfully!");
      navigate("/blog");
    } catch (e) {
      toast.error("Something went wrong, please try again later.");
    }
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
          onChange={(e) => setInputVal({ ...inputVal, title: e.target.value })}
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
