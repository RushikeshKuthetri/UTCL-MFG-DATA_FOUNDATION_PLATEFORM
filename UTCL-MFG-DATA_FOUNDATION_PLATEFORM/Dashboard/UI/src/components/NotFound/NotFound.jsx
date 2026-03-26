import "./NotFound.scss";
import notfound from "../../img/404.png";
import { useNavigate } from "react-router-dom";
export const NotFound = ({ heading, message }) => {
  const navigate = useNavigate();
  return (
    <div className="notfound-card">
      <img src={notfound} className="img-fluid mx-auto" alt="404" />
      <h1 className="mt-5">{heading}</h1>
      <p className="txt mt-5">
        {/* In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. */}
        {message}
      </p>
      <button
        className="btn goback-btn mt-5"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go Back
      </button>
    </div>
  );
};
