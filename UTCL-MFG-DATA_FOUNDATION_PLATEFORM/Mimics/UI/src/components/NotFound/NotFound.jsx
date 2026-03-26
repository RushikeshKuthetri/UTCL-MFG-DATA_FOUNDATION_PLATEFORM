// import "./NotFound.scss";
// import notfound from "../../img/404.png";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// export const NotFound = ({ heading, message }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   return (
//     <div className="notfound-card">
//       <img src={notfound} className="img-fluid mx-auto" alt="404" />
//       <h1 className="mt-5">{heading}</h1>
//       <p className="txt mt-5">{message}</p>
//       <button
//         className="btn goback-btn mt-5"
//         onClick={() => {
//           dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
//           navigate("/dashboard");
//         }}
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };



import notfound from "../../img/404.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const NotFound = ({ heading, message }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center w-full py-8 px-4">
      <div
        className="
          w-full
          max-w-md
          bg-[var(--card-bg)]
          rounded-2xl
          shadow-[var(--left-drawer-shadow)]
          p-6
          text-center
          transition-all
        "
      >
        {/* IMAGE */}
        <img
          src={notfound}
          alt="404"
          className="w-32 h-auto mx-auto"
        />

        {/* HEADING */}
        <h1 className="mt-4 text-2xl font-bold text-[var(--title)]">
          {heading}
        </h1>

        {/* MESSAGE */}
        <p className="mt-3 text-sm text-[var(--card-subtle)] leading-relaxed">
          {message}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
            navigate("/dashboard");
          }}
          className="
            mt-5
            px-5
            py-2
            rounded-lg
            bg-[var(--bg-header)]
            text-white
            font-medium
            text-sm
            transition-all
            duration-300
            hover:opacity-90
            hover:scale-105
          "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
