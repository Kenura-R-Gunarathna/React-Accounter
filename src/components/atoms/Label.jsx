export default function Label({
  htmlFor,
  text,
  styledClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
}) {
  return (
    <label 
        htmlFor={htmlFor}
        className={styledClass}
      >
         {text} 
    </label>
  );
};