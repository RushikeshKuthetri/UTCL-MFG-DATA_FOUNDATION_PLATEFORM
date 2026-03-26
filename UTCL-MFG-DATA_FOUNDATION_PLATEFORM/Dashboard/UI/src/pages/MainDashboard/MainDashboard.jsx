// import "../../css/main.scss";
// import { useSelector } from "react-redux";
// import { NotFound } from "../../components/NotFound/NotFound";
// import { DashboardCard } from "../../components/Main Dashboard/DashboardCard";
// import { ScreenLoader } from "../../components";
// import useToken from "../../Admin/UseToken/useToken";

// export const MainDasboard = () => {
//   const { authProvider, userStatus } = useSelector((state) => state);
//   const { modules } = authProvider;

//   const { token } = useToken();

//   // Conditions for the tiles to be shown in order
//   const mimicCondition = modules && modules.includes("Mimics");
//   const cbmCondition = modules && modules.includes("CBM");
//   const optCondition = modules && modules.includes("OPT");

//   return (
//     <div className="row mx-0 new-dash align-items-center">
//       {userStatus.loading && <ScreenLoader />}
//       {mimicCondition && <DashboardCard module="Mimics" />}
//       {cbmCondition && <DashboardCard module="CBM" />}
//       {optCondition && <DashboardCard module="OPT" />}
//       {mimicCondition && <DashboardCard module="Data Download" />}
//       {mimicCondition && <DashboardCard module="Tag Utility" />}
//       {mimicCondition && <DashboardCard module="Reports" />}
//       {mimicCondition && <DashboardCard module="Trends" />}
//       {/* {(token?.Role === "super_admin" || token?.Role === "admin") && <DashboardCard module="Old Trends" />} */}
//       {userStatus.error && (
//         <NotFound
//           heading="OOPs! No permission"
//           message="You don't have permission to access the page. Please contact the admin."
//         />
//       )}
//     </div>
//   );
// };

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ScreenLoader } from "../../components";
import { DashboardCard } from "../../components/Main Dashboard/DashboardCard";

export const MainDasboard = () => {
  const { authProvider, userStatus } = useSelector((state) => state);
  const { modules } = authProvider;

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("collapsed") === "true"
  );

  useEffect(() => {
    localStorage.setItem("collapsed", collapsed);
  }, [collapsed]);

  // Redirect once modules are available
 useEffect(() => {
  if (!modules) return;

  if (modules.includes("Mimics")) {
    window.location.href = "/mimics/dashboard";
  }
}, [modules]);

  if (userStatus.loading || !modules) {
    return <ScreenLoader />;
  }

  return (
    <div className="flex flex-1 min-h-0 overflow-hidden">
      <div
        className={`flex-1 min-h-0 flex flex-col overflow-y-auto mt-1
        transition-all duration-300
        ${collapsed ? "lg:ml-20" : "lg:ml-60"}`}
      >
        <div className="flex items-center justify-between pr-6 pl-3 pt-3 shrink-0">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};