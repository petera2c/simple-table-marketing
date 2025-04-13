import { OpenPeepsImageConfig } from "../../types/blog";

interface OpenPeepsImageProps extends OpenPeepsImageConfig {
  alt: string;
  className?: string;
  slug: string;
}

const OpenPeepsImage = ({
  name,
  skinColor,
  hairColor,
  shirtColor,
  pantsColor,
  width,
  height,
  alt,
  className,
  slug,
}: OpenPeepsImageProps) => {
  // Use local image from public folder
  const imageUrl = `/blog-images/${slug}.png`;

  return <img src={imageUrl} alt={alt} className={className} width={width} height={height} />;
};

export default OpenPeepsImage;
