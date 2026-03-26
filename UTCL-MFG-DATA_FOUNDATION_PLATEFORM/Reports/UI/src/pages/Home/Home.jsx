import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";

import { accesslogshistory } from "../../utils";
import { ScreenLoader } from "../../components";
import { DashboardCard } from "../MainDashboard/DashboardCard";

const reportTiles = [

  {
    heading: "Create Report",
    description: "Create or edit reports",
    url: "/reportspage",
    isGrafana: false,
  },
  {
    heading: "Report List",
    description: "View and manage all reports",
    url: "/reportlist",
    isGrafana: false,
  }
];

export const Home = () => {
  const { authProvider } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
    accesslogshistory({});
  }, [dispatch]);

  return (
    <div className="dash-top">
      {authProvider.isLogin ? (
        <>
          {/* 🔹 Two report tiles */}
          <div className="row mt-4">
            {reportTiles.map((tile) => (
              <DashboardCard
                key={tile.url}
                heading={tile.heading}
                description={tile.description}
                url={tile.url}
                isGrafana={tile.isGrafana}
              />
            ))}
          </div>
        </>
      ) : (
        <ScreenLoader />
      )}
    </div>
  );
};
