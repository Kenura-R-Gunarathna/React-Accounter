export default function Logo({
  src="https://krag.lk/img/favicon/favicon.png",
  alt="logo",
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