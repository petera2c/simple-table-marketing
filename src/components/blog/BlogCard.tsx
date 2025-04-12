import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  console.log(post);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{format(new Date(post.createdAt), "MMMM d, yyyy")}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
