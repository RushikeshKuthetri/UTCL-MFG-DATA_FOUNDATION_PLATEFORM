import "./PopHeader.scss";
import { useDispatch, useSelector } from "react-redux";

export const PopHeader = ({ heading, dispatchType }) => {
  const dispatch = useDispatch();
  const { showPopup } = useSelector((state) => state);

  const minimiseHandler = () => {
    dispatch({ type: "TOGGLE_MAXIMISE_POPUP" });
  };
  return (
    <div className="header">
      <h5>{heading}</h5>
      <div className="header_buttons">
        {heading === "Trends" && (
          <button
            onClick={() => minimiseHandler()}
            className="outline-none-button"
          >
            {showPopup.minimise ? (
              <i
                className="fa-regular fa-window-maximize"
                style={{ color: "#ffffff" }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-window-minimize"
                style={{ color: "#ffffff" }}
              ></i>
            )}
          </button>
        )}

        <button
          onClick={() => {
            dispatch({ type: dispatchType });
            dispatch({ type: "CLEAN_TAGNAMES" });
            dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "ERROR_FALSE" });
            dispatch({ type: "REMOVE_SELECTED_TAGNAMES" });
            clearInterval(localStorage.getItem("trendIntervalID"));
            localStorage.removeItem("trendIntervalID");
          }}
          className="ml-3 outline-none-button"
        >
          <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
        </button>
      </div>
    </div>
  );
};
