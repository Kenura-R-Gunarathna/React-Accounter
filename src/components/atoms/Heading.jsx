export default function Heading({
  text,
  styledClass = "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
}) {
  return (
    <h1 className={styledClass}>
        {text}
    </h1>
  );
};