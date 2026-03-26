import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import "./Utilization.scss";
import Navbar from "../Navbar/navbar";
import ModuleUtlize from "./ModuleUtlize";
import { useEffect } from "react";
import useToken from "../UseToken/useToken";
import { accessLogApi } from "../../utils/accessLogApi";
const Utilization = () => {
  const [key, setKey] = useState("All");
  const { token, setToken } = useToken();
  useEffect(() => {
    accessLogDashboard();
  }, []);
  const accessLogDashboard = () => {
    let payload = {
      userId: token.UserID,
      ip: "",
      module: "-",
      plant: "-",
      url: window.location.href,
      options: "",
      plant_or_section: "Admin",
    };
    accessLogApi(payload, token.token);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full flex items-center flex-col">
        <div className="w-full flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 -ml-1">
          <span>Utilization for {key} Module</span>
        </div>
        <div className="grid grid-cols-5 items-center text-[var(--title)] w-fit border border-[var(--form-border)] bg-[var(--bg-main-container)] gap-20 px-1 rounded-lg">
          <button
            onClick={() => setKey("All")}
            className={
              key === "All"
                ? "text-[var(--title)] border-b-4 border-orange-400 px-6 py-1.5 text-[18px] font-medium cursor-pointer focus:outline-none focus:ring-0 outline-none"
                : "px-6 py-1.5 text-[18px]  ] hover:text-orange-400 transition-colors cursor-pointer focus:outline-none focus:ring-0 outline-none "
            }
          >
            All
          </button>

          <button
            onClick={() => setKey("Mimics")}
            className={
              key === "Mimics"
                ? "text-[var(--title)] border-b-4 border-orange-400 px-6 py-1.5 text-[18px] font-medium cursor-pointer focus:outline-none focus:ring-0 outline-none"
                : "px-6 py-1.5 text-[18px]  ] hover:text-orange-400 transition-colors cursor-pointer focus:outline-none focus:ring-0 outline-none"
            }
          >
            Mimics
          </button>

          <button
            onClick={() => setKey("CBM")}
            className={
              key === "CBM"
                ? "text-[var(--title)] border-b-4 border-orange-400 px-6 py-1.5 text-[18px] font-medium cursor-pointer focus:outline-none focus:ring-0 outline-none"
                : "px-6 py-1.5 text-[18px]  ] hover:text-orange-400 transition-colors cursor-pointer focus:outline-none focus:ring-0 outline-none"
            }
          >
            CBM
          </button>

          <button
            onClick={() => setKey("OPT")}
            className={
              key === "OPT"
                ? "text-[var(--title)] border-b-4 border-orange-400 px-6 py-1.5 text-[18px] font-medium cursor-pointer focus:outline-none focus:ring-0 outline-none"
                : "px-6 py-1.5 text-[18px]  ] hover:text-orange-400 transition-colors cursor-pointer focus:outline-none focus:ring-0 outline-none"
            }
          >
            OPT
          </button >
          <button
            onClick={() => setKey("Trends")}
            className={
              key === "Trends"
                ? "text-[var(--title)] border-b-4 border-orange-400 px-6 py-1.5 text-[18px] font-medium cursor-pointer focus:outline-none focus:ring-0 outline-none"
                : "px-6 py-1.5 text-[18px]  ] hover:text-orange-400 transition-colors cursor-pointer focus:outline-none focus-visible:outline-none"
            }
          >
            Trends
          </button>
        </div >

        {/* Tab Content */}
        <div className="w-full">
          <ModuleUtlize name={key} />
        </ div>
      </div >
    </>
  );
};

export default Utilization;
