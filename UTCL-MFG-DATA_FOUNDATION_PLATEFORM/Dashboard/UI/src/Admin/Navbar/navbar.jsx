// import React, { useState, useEffect } from "react";
// import styles from "./navbar.module.scss";
// import DataTable from "../Data-Table/dataTable";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
// import { BiLogOutCircle } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";
// import { useNavigate } from "react-router-dom";
// import useToken from "../UseToken/useToken";
// import LOGO from "../../img/logo.png";
// import { useIsAuthenticated, useMsal } from "@azure/msal-react";
// import { useDispatch, useSelector } from "react-redux";
// import { AiFillDatabase, AiFillSetting, AiOutlineCode } from "react-icons/ai";
// import { MdMarkEmailRead } from "react-icons/md";
// import { HiOutlineBell, HiTemplate,HiOutlineClipboardList,HiChartPie } from "react-icons/hi";
// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { instance } = useMsal();
//   const isAuth = useIsAuthenticated();
//   const [sidebar, setSideBar] = useState(true);
//   const { token, setToken } = useToken();
//   const showSidebar = () => setSideBar(!sidebar);
//   const navigate = useNavigate();
//   // useEffect(()=>{
//   //     if(!sessionStorage.getItem('token')){
//   //     navigate('/admin')
//   //     }
//   // },[])
//   const logout = () => {
//     sessionStorage.removeItem("token");
//     if (isAuth) {
//       instance.logoutRedirect().catch((e) => {
//         console.error(e);
//       });
//     }
//     dispatch({ type: "LOGOUT" });
//     dispatch({ type: "ERROR_FALSE" });
//     navigate("/admin");
//   };

//   const SidebarData =
//     token.Role === "super_admin"
//       ? [
//           {
//             title: "User List",
//             path: "/admin/Dashboard/DataTable",
//             icon: <AiFillDatabase />,
//           },
//           {
//             title: "Access Logs",
//             path: "/admin/Dashboard/logs",
//             icon: <AiOutlineCode />,
//           },
//           {
//             title: "Sent Email Logs",
//             path: "/admin/Dashboard/emailLogs",
//             icon: <MdMarkEmailRead />,
//           },
//           // {
//           //   title: "Alerts",
//           //   path: "/admin/Dashboard/alerts",
//           //   icon: <HiOutlineBell />,
//           // },
//           {
//             title: "Alerts",
//             path: "/admin/Dashboard/mimicLineAlerts",
//             icon: <HiOutlineBell />,
//           },
//           {
//             title: "Alert For Blaine",
//             path: "/admin/Dashboard/blainealerts",
//             icon: <HiOutlineBell />,
//           },
//           {
//             title: "Alert For Kiln",
//             path: "/admin/Dashboard/kilnalerts",
//             icon: <HiOutlineBell />,
//           },
//           {
//             title: "KilnMaster",
//             path: "/admin/Dashboard/kilnmaster",
//             icon: <HiOutlineClipboardList />,
//           },
//           {
//             title:"Utilization",
//             path:"/admin/Dashboard/utilization",
//             icon:<HiChartPie/>
//           },

//           {
//             title: "CBM Templates",
//             path: "/admin/Dashboard/alltemplates",
//             icon: <HiTemplate />,
//           },

//           {
//             title: "Settings",
//             path: "/admin/Dashboard/Settings",
//             icon: <AiFillSetting />,
//           },
//         ]
//       : [
//           {
//             title: "User List",
//             path: "/admin/Dashboard/DataTable",
//             icon: <AiFillDatabase />,
//           },
//           {
//             title: "Access Logs",
//             path: "/admin/Dashboard/logs",
//             icon: <AiOutlineCode />,
//           },
//           {
//             title: "Sent Email Logs",
//             path: "/admin/Dashboard/emailLogs",
//             icon: <MdMarkEmailRead />,
//           },

//           {
//             title: "Settings",
//             path: "/admin/Dashboard/Settings",
//             icon: <AiFillSetting />,
//           },
//         ];

//   return (
//     <>
//       <header className="tonav">
//         <IconContext.Provider value={{ color: "black" }}>
//           <div className="navbar w-100">
//             <Link to="#" className="menu_bar">
//               <FaBars className="bar" onClick={showSidebar} />
//             </Link>
//             <div className="celebal__logo mr-auto">
//               <Link to="/admin/Dashboard">
//                 <img src={LOGO} className="logo" />
//               </Link>
//             </div>
//             <div className="navbar-content-right ml-auto username">
//               {isAuth && (
//                 <button
//                   className="btn btnsecond"
//                   onClick={() => navigate("/dashboard")}
//                 >
//                   Go To dashboard
//                 </button>
//               )}
//               <div className="d-flex align-items-center ml-auto">
//                 <span className="ml-3 mr-3">{`Welcome ${token?.UserName}`}</span>
//                 <button className="logout" onClick={logout}>
//                   <BiLogOutCircle className="logout_btn" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <nav className={sidebar ? "nav_menu_active" : "nav_menu"}>
//             <ul className="nav_menu_items">
//               <li className="navbar_toggle">
//                 <Link to="#" className="menu_bar">
//                   <AiOutlineClose onClick={showSidebar} />
//                 </Link>
//               </li>
//               {SidebarData.map((item, index) => {
//                 return (
//                   <li key={index} className="nav_text">
//                     <Link to={item.path}>
//                       {item.icon}
//                       <span>{item.title}</span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </IconContext.Provider>
//       </header>
//       {/* <DataTable /> */}
//     </>
//   );
// };

// export default Navbar;









import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import useToken from "../UseToken/useToken";
import LOGO from "../../img/adityabirlalogo.png";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const { instance } = useMsal();
  const isAuth = useIsAuthenticated();
  const [sidebar, setSideBar] = useState(true);
  const { token, setToken } = useToken();
  const showSidebar = () => setSideBar(!sidebar);
  const navigate = useNavigate();
  // useEffect(()=>{
  //     if(!sessionStorage.getItem('token')){
  //     navigate('/admin')
  //     }
  // },[])
  const logout = () => {
    sessionStorage.removeItem("token");
    if (isAuth) {
      instance.logoutRedirect().catch((e) => {
        console.error(e);
      });
    }
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "ERROR_FALSE" });
    navigate("/admin");
  };


  return (
    <>
      <header className="w-full h-14 bg-[var(--bg-header)] px-6 flex items-center justify-between shadow-[var(--header-shadow)] sticky top-0 z-50">
        <IconContext.Provider value={{ color: "black" }}>
          <div className="flex items-center justify-between w-full">
            {/* <Link to="#" className="menu_bar">
              <FaBars className="bar" onClick={showSidebar} />
            </Link> */}
            <div className="flex items-center gap-3">
              <Link to="/admin/Dashboard">
                <img
                  src={LOGO}
                  alt="Logo"
                  className="logo h-[50px] w-[50px]"
                />
              </Link>
              <h1 className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl text-[var(--text-color)] font-[600] tracking-tight text-center">
                Prakriti: UltraTech's Unified OT Data Foundation
              </h1>
            </div>
            <div className="navbar-content-right ml-auto username">
              <div className="d-flex align-items-center ml-auto">
                <span className="ml-3 mr-3">{`Welcome ${token?.UserName}`}</span>
                <button className="
      flex items-center justify-center
      p-2 rounded-lg
      transition-all duration-200
      text-[var(--text-color)]
      hover:bg-[var(--left-drawer-active-tab)]
      hover:text-[#111111]
    "
                  onClick={logout}>
                  <BiLogOutCircle className="logout_btn rotate-90" />
                </button>
              </div>
            </div>
          </div>

          <nav className={sidebar ? "nav_menu_active" : "nav_menu"}>
            <ul className="nav_menu_items">
              <li className="navbar_toggle">
                <Link to="#" className="menu_bar">
                  <AiOutlineClose onClick={showSidebar} />
                </Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </header>
      {/* <DataTable /> */}
    </>
  );
};

export default Navbar;
