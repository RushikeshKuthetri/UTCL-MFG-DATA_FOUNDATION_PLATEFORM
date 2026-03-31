// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { viewCardClickHandler } from "../../utils";

// export const Card = ({ data, view, plantId }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-4">
//       <div className="data-card">
//         <h6>{data?.name}</h6>
//         <p>{data?.category}</p>
//         <Link
//           // to={`${data?.path}`}
//           className="link-text"
//           onClick={() => viewCardClickHandler(plantId, data, dispatch)}
//         >
//           {view} <i className="fa-solid fa-arrow-right-long"></i>
//         </Link>
//       </div>
//     </div>
//   );
// };


// Added by TRIDAI to open the PRAKRITI link in new tab

// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { viewCardClickHandler } from "../../utils";

// export const Card = ({ data, view, plantId }) => {
//   const dispatch = useDispatch();

//   const handleClick = (e) => {
//     viewCardClickHandler(plantId, data, dispatch);

//     if (data?.openInNewTab) {
//       e.preventDefault(); // prevent SPA navigation
//       window.open(data?.path, "_blank", "noopener,noreferrer");
//     }
//   };

//   return (
//     <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-4">
//       <div className="data-card">
//         <h6>{data?.name}</h6>
//         <p>{data?.category}</p>

//         <Link
//           to={data?.path}
//           className="link-text"
//           onClick={handleClick}
//         >
//           {view} <i className="fa-solid fa-arrow-right-long"></i>
//         </Link>
//       </div>
//     </div>
//   );
// };




import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { viewCardClickHandler } from "../../utils";

export const Card = ({ data, view, plantId, stats }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    viewCardClickHandler(plantId, data, dispatch);

    if (data?.openInNewTab) {
      e.preventDefault(); // prevent SPA navigation
      window.open(data?.path, "_blank", "noopener,noreferrer");
    }
  };

  const toTitleCase = (text = "") =>
    text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());


  return (
    <div className="col-12 col-sm-6 mt-2 px-1"
      style={{ flex: "0 0 calc(20% )", maxWidth: "calc(20% )" }}>
      <div className="border border-[var(--card-border-main)] rounded-xl">
        <Link
          to={data?.path}
          onClick={handleClick}
          className="
block
rounded-xl
no-underline hover:no-underline
bg-[var(--card-bg)]
cursor-pointer
px-3 pt-2 pb-3
shadow-card-shadow
border-t-4 border-t-transparent
transition-all duration-300 ease-out
hover:shadow-[var(--card-shadow-onhover)]
hover:border-t-[var(--card-border)]
transform-gpu
hover:scale-[1.02]
relative z-10 hover:z-20
"
        >
          {/* Title */}
          <h3 className="text-[14px] font-medium mb-3 text-[var(--text-color)]">
            {toTitleCase(data?.name)}
          </h3>

          {/* Bottom Section */}
          <div className="flex justify-between items-center text-[var(--card-subtle)] text-[12px]">
            {data?.category === "Plant" ? (
              <>
                <p>Tags: {stats?.tags ?? 0}</p>
                <p>Lines: {stats?.lines ?? 0}</p>
              </>
            ) : (
              <p>{data?.category}</p>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};
