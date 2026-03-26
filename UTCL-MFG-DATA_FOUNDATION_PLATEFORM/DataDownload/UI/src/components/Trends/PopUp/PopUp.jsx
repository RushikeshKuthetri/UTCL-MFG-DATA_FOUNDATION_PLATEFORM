import "./PopUp.scss";
import { PopHeader } from "../../../components";
import { useSelector } from "react-redux";
import { getPopupClassName } from "../../../utils";

export function PopUp({ children, heading, dispatchType }) {
  const { showPopup } = useSelector((state) => state);
  return (
    <div
      className={
        heading === "Trends"
          ? showPopup.minimise
            ? "minimise-trend-popup-box"
            : "trend-popup-box"
          : "popup-box"
      }
    >
      <div
        className={
          heading === "Trends"
            ? showPopup.minimise
              ? "minimise"
              : "box"
            : getPopupClassName(showPopup.popupName)
        }
      >
        <PopHeader heading={heading} dispatchType={dispatchType} />
        {children}
      </div>
    </div>
  );
}
