// import "./PopHeader.scss";
// import { useDispatch, useSelector } from "react-redux";

// export const PopHeader = ({ heading, dispatchType }) => {
//   const dispatch = useDispatch();
//   const { showPopup } = useSelector((state) => state);

//   const minimiseHandler = () => {
//     dispatch({ type: "TOGGLE_MAXIMISE_POPUP" });
//   };
//   return (
//     <div className="header">
//       <h5>{heading}</h5>
//       <div className="header_buttons">
//         {heading === "Trends" && (
//           <button
//             onClick={() => minimiseHandler()}
//             className="outline-none-button"
//           >
//             {showPopup.minimise ? (
//               <i
//                 className="fa-regular fa-window-maximize"
//                 style={{ color: "#ffffff" }}
//               ></i>
//             ) : (
//               <i
//                 className="fa-solid fa-window-minimize"
//                 style={{ color: "#ffffff" }}
//               ></i>
//             )}
//           </button>
//         )}

//         <button
//           onClick={() => {
//             dispatch({ type: dispatchType });
//             dispatch({ type: "CLEAN_TAGNAMES" });
//             dispatch({ type: "LOADING_FALSE" });
//             dispatch({ type: "ERROR_FALSE" });
//             dispatch({ type: "REMOVE_SELECTED_TAGNAMES" });
//             clearInterval(localStorage.getItem("trendIntervalID"));
//             localStorage.removeItem("trendIntervalID");
//           }}
//           className="ml-3 outline-none-button"
//         >
//           <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
//         </button>
//       </div>
//     </div>
//   );
// };




import { useDispatch, useSelector } from "react-redux";
import { X, Minimize2, Maximize2 } from "lucide-react";

export const PopHeader = ({ heading, dispatchType }) => {
  const dispatch = useDispatch();
  const { showPopup } = useSelector((state) => state);

  const minimiseHandler = () => {
    dispatch({ type: "TOGGLE_MAXIMISE_POPUP" });
  };

  return (
    <div
      className="
        flex items-center justify-between
        px-4 py-3
        rounded-t-xl
        bg-[var(--bg-header)]
        text-[var(--text-color)]
        border-b
        border-[color:var(--card-border)]
      "
    >
      {/* Heading */}
      <h5 className="text-sm font-semibold tracking-wide">
        {heading}
      </h5>

      {/* Buttons */}
      <div className="flex items-center gap-3">

        {/* Minimize / Expand */}
        {heading === "Trends" && (
          <button
            onClick={minimiseHandler}
            className="
              p-1.5 rounded-md
              hover:bg-[var(--left-drawer-active-tab)]
              transition-all duration-200
            "
          >
            {showPopup.minimise ? (
              <Maximize2
                size={18}
                className="text-[var(--text-color)]"
              />
            ) : (
              <Minimize2
                size={18}
                className="text-[var(--text-color)]"
              />
            )}
          </button>
        )}

        {/* Close Button */}
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
          className="
            p-1.5 rounded-md
            hover:bg-red-500/20
            transition-all duration-200
          "
        >
          <X size={18} className="text-[var(--text-color)]" />
        </button>

      </div>
    </div>
  );
};