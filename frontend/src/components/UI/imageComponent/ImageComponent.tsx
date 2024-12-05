// -_-

interface ImageProps {
  url: string;
  alt: string;
  onClick?: () => void;
}

const ImageComponent = ({ url, alt, onClick }: ImageProps) => {
  return (
    <img
      src={url}
      alt={alt}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    />
  );
};

export default ImageComponent;
