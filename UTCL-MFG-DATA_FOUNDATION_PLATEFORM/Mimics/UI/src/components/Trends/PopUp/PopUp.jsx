// import "./PopUp.scss";
// import { PopHeader } from "../../../components";
// import { useSelector } from "react-redux";
// import { getPopupClassName } from "../../../utils";

// export function PopUp({ children, heading, dispatchType }) {
//   const { showPopup } = useSelector((state) => state);
//   return (
//     <div
//       className={
//         heading === "Trends"
//           ? showPopup.minimise
//             ? "minimise-trend-popup-box"
//             : "trend-popup-box"
//           : "popup-box"
//       }
//     >
//       <div
//         className={
//           heading === "Trends"
//             ? showPopup.minimise
//               ? "minimise"
//               : "box"
//             : getPopupClassName(showPopup.popupName)
//         }
//       >
//         <PopHeader heading={heading} dispatchType={dispatchType} />
//         {children}
//       </div>
//     </div>
//   );
// }




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
            ? `
          fixed
          bottom-2
          left-1/2
          -translate-x-1/2
          h-[40px]
          w-[180px]
          z-[1000]
          transition-all duration-300 ease-in-out
        `
            : "trend-popup-box"
          : "popup-box"
      }
    >
      <div
        className={
          heading === "Trends"
            ? showPopup.minimise
              ? "minimise"
              // : "box"  // removed to show bg based on theme
               : "bg-[var(--bg-main-container)] w-full"
            : getPopupClassName(showPopup.popupName)
        }
      >
        <PopHeader heading={heading} dispatchType={dispatchType} />
        {children}
      </div>
    </div>
  );
}
