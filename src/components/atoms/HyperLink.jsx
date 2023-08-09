import { Link } from "react-router-dom";

export default function HyperLink({
    link,
    href,
    text,
    styledClass = "font-medium text-primary-600 hover:underline dark:text-primary-500"
}) {

  if (link === "true") {
    return (
        <Link to={href}>
          <span className={styledClass}>
            {text}
          </span>
        </Link>
    );
  }else {
    return (
        <a href={href} className={styledClass} >
          {text}
        </a>
    );
  }
};