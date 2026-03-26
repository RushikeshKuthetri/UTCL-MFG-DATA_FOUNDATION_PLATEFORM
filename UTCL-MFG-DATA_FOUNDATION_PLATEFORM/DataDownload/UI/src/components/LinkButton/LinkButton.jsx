import { Link } from "react-router-dom";

export const LinkButton = ({ buttonClassname, link, text }) => {
  return (
    <Link className={buttonClassname} target={"_blank"} to={link}>
      {text}
    </Link>
  );
};
