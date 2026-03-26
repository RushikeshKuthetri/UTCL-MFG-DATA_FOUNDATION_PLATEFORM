// import { ModulesList } from "../../data/main dashboard/modules-list";
// import { openWindow } from "../../utils/main-dashboard/openWindows";

// export const DashboardCard = ({ module }) => {
//   const { heading, url, description, isGrafana } = ModulesList.find(
//     (modules) => modules.moduleName === module
//   );

//   return (
//     <div
//       className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3 cursor-pointer"
//       onClick={() => {
//         openWindow(url, isGrafana);
//       }}
//     >
//       <div className="card justify-content-center p-5">
//         <p className="head">{heading}</p>
//         <p className="mt-3 pt-3">{description}</p>
//         <div className="go-corner"></div>
//       </div>
//     </div>
//   );
// };



import { ModulesList } from "../../data/main dashboard/modules-list";
import { openWindow } from "../../utils/main-dashboard/openWindows";

export const DashboardCard = ({ module }) => {
  const selectedModule = ModulesList.find(
    (item) => item.moduleName === module
  );

  if (!selectedModule) return null;

  const { heading, url, description, isGrafana } = selectedModule;

  return (
    <div
      onClick={() => openWindow(url, isGrafana)}
      className="
        group
        relative
        h-[300px]
        rounded-xl
        overflow-hidden
        cursor-pointer
        bg-[var(--card-bg)]
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        border border-transparent
        hover:border-gray-300
        flex
        flex-col
        justify-center
        px-8
      "
    >
      {/* GO CORNER EXPAND BACKGROUND */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[70px]
          h-[70px]
          bg-[var(--bg-header)]
          rounded-bl-[110px]
          transition-all
          duration-500
          ease-out
          group-hover:w-full
          group-hover:h-full
          group-hover:rounded-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className=" text-[26px] font-bold text-[var(--text-color)] transition-colors
            duration-300
            group-hover:text-black
          "
        >
          {heading}
        </h2>

        <p className="mt-6 pt-6 text-base  font-medium  tracking-wider  border-t border-gray-200 text-[var(--card-subtle)]transition-all duration-300 group-hover:text-black group-hover:border-black">
          {description}
        </p>
      </div>
    </div>
  );
};
