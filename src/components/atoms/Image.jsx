export default function Image({
    src,
    alt,
    styledClass="w-8 h-8 mr-2"
}) {
  return (
    <img
        className={styledClass}
        src={src}
        alt={alt}
    />
  );
};