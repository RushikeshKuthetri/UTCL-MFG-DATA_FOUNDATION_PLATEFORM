import "./NotFound.scss";
import notfound from "../../img/404.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export const NotFound = ({ heading, message }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="notfound-card">
      <img src={notfound} className="img-fluid mx-auto" alt="404" />
      <h1 className="mt-5">{heading}</h1>
      <p className="txt mt-5">{message}</p>
      <button
        className="btn goback-btn mt-5"
        onClick={() => {
          dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
          navigate("/dashboard");
        }}
      >
        Go Back
      </button>
    </div>
  );
};
