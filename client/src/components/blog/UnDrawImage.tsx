import Image from "next/image";
import { getUnDrawImageUrl } from "../../utils/blog-images";

interface UnDrawImageProps {
  name: string;
  primaryColor?: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

const UnDrawImage = ({
  name,
  primaryColor,
  width = 1200,
  height = 630,
  alt,
  className = "",
}: UnDrawImageProps) => {
  const imageUrl = getUnDrawImageUrl({
    name,
    primaryColor,
    width,
    height,
  });

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg object-cover"
        priority
      />
    </div>
  );
};
