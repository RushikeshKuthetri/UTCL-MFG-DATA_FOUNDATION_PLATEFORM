import Loader from "react-js-loader";
import "./Loader.scss";

export const ScreenLoader = () => {
  return (
    <div className="popup-box">
      <span className="loader-div">
        <Loader
          type="spinner-circle"
          bgColor={"#000000"}
          title={"bubble-scale"}
          color={"#FFFFFF"}
          size={80}
        />
      </span>
    </div>
  );
};
