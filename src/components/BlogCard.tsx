import { type BlogPost } from "../types/Blog";
import Button from "./forms/Button";

function BlogCard({ content, id, title }: BlogPost) {
  return (
    <div className="flex flex-col gap-4 max-w-sm border border-neutral-50 shadow-md px-4 py-6 rounded-md">
      <h3 className="text-2xl font-bold text-neutral-700">{title}</h3>
      <p className="text-md text-neutral-500">{content.slice(0, 150)}...</p>

      <Button size="lg">Read More</Button>
    </div>
  );
}

export default BlogCard;
