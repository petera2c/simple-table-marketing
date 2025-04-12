import Image from "next/image";
import { getBlushImageUrl } from "../../utils/blog-images";

interface BlushImageProps {
  style: string;
  seed: string;
  width: number;
  height: number;
  bgColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  alt: string;
  className?: string;
}

const BlushImage = ({
  style,
  seed,
  width,
  height,
  bgColor,
  primaryColor,
  secondaryColor,
  alt,
  className = "",
}: BlushImageProps) => {
  const imageUrl = getBlushImageUrl({
    style,
    seed,
    width,
    height,
    bgColor,
    primaryColor,
    secondaryColor,
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

export default BlushImage;
