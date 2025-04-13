import Link from "next/link";
import { BlogPost } from "../../types/blog";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100"
    >
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-gray-400" />
          <span>{format(new Date(post.createdAt), "MMMM d, yyyy")}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors duration-200"
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
