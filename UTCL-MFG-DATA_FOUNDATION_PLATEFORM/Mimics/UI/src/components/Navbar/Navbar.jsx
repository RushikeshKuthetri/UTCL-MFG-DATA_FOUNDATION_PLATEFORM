// import "./Navbar.css";
// import ultraLogo from "../../img/logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { BiLogOutCircle } from "react-icons/bi";
// import { useMsal, useIsAuthenticated } from "@azure/msal-react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { deleteFromLocalStorage } from "../../utils/storageFunctions/localStorage";
// import { BASE_URL } from "../../base";
// import { sendLogoutDetails } from "../../utils/sendLogoutDetails";
// import { FaBars } from "react-icons/fa";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { AiOutlineClose, AiOutlinePlusCircle } from "react-icons/ai";
// import { toast } from "react-toastify";
// import { SidebarData } from "../../data/nav/sidebar";

// export function Navbar() {
//   const { authProvider } = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const { instance } = useMsal();
//   const isAuth = useIsAuthenticated();
//   const navigate = useNavigate();
//   const plantName = sessionStorage.getItem("plantName");
//   const millName = sessionStorage.getItem("millName");

//   // -------- sidebar --------------
//   const [reportPlusButton, setReportPlusButton] = useState(true);
//   const [reportData, setReportData] = useState([]);
//   const [sidebar, setSideBar] = useState(true);
//   const showSidebar = () => setSideBar(!sidebar);
//   //sidebar end

//   const signOutHandler = (instance) => {
//     sessionStorage.removeItem("token");
//     instance.logoutRedirect().catch((e) => {
//       console.error(e);
//     });
//     // useLogout()
//     dispatch({ type: "LOGOUT" });
//     dispatch({ type: "ERROR_FALSE" });
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       sessionStorage.removeItem("SLOG");
//     }, 1000);
//   }, []);
//   // const { logout } = useLogout('10.10.10.10')//TODO: authProvider.userIp
//   // console.log('--authProvider.userIp--',authProvider.userIp)

//   // useEffect(() => {
//   //   if (reportPlusButton) {
//   //     getReportData();
//   //   }
//   // }, [reportPlusButton]);

//   // const getReportData = () => {
//   //   if (!JSON.parse(localStorage.getItem("login"))) {
//   //     return;
//   //   }
//   //   const { token, email } = JSON.parse(localStorage.getItem("login"));
//   //   let payload = {
//   //     userid: email,
//   //   };
//   //   // console.log(token?.token);
//   //   // setNodataFlag(false);

//   //   axios
//   //     .post(BASE_URL + "cbm/template/getReportData", payload, {
//   //       headers: {
//   //         authorization: `Bearer ${token}`,
//   //       },
//   //     })
//   //     .then((res) => {
//   //       res = res.data.result;
//   //       // console.log("data", res);
//   //       if (res === "No Records Found") {
//   //         // setNodataFlag(true);
//   //         setReportData([]);
//   //       } else {
//   //         res = res.sort((a, b) => {
//   //           return new Date(b.Timestamp) - new Date(a.Timestamp);
//   //         });
//   //         setReportData(res);
//   //         // sessionStorage.setItem("reportDisplayData", JSON.stringify(res[0]));
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       toast.error(err.message);
//   //     });
//   // };

//   const onLogoutClick = async (instance) => {
//     const { token, email } = JSON.parse(localStorage.getItem("login"));

//     // await useLogout('10.10.10.10')
//     const response = await axios.post(
//       `${BASE_URL}logAccessLogout`,
//       {
//         userId: email,
//         ip: authProvider.userIp,
//       },
//       {
//         headers: {
//           authorization: `Bearer ${token}`,
//           "Accept-Encoding": "*/*",
//         },
//       }
//     );
//     // console.log(response?.data);
//     signOutHandler(instance);
//   };
//   const plantLink = plantName
//     ?.replace(/[^a-zA-Z ]/g, "")
//     ?.split(" ")
//     ?.join("")
//     ?.toLowerCase();

//   return (
//     <nav className="navbar navbar-expand-md">
//       {/* Navbar Brand */}
//       <div to="#" className="menu_bar">
//         <FaBars className="bar" size={35} onClick={showSidebar} />
//       </div>
//       <Link
//         className="navbar-brand"
//         to="/dashboard"
//         onClick={() => {
//           sessionStorage.removeItem("plantName");
//           sessionStorage.removeItem("millName");
//           deleteFromLocalStorage("plant_data_coming_status");
//           dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
//           dispatch({ type: "HIDE_POPUP" });
//           dispatch({ type: "CLEAN_TAGNAMES" });
//           dispatch({ type: "LOADING_FALSE" });
//           dispatch({ type: "ERROR_FALSE" });
//           dispatch({ type: "REMOVE_SELECTED_TAGNAMES" });
//         }}
//       >
//         <img src={ultraLogo} className="logo" alt="logo" />
//       </Link>

//       {/* Links  */}

//       <span className="nav-item">{millName}</span>
//       {plantName && (
//         <h1
//           className="navbar-plant-heading"
//           onClick={() => {
//             sessionStorage.removeItem("millName");
//             navigate(`/${plantLink}`);
//             dispatch({ type: "HIDE_POPUP" });
//             dispatch({ type: "CLEAN_TAGNAMES" });
//             dispatch({ type: "LOADING_FALSE" });
//             dispatch({ type: "ERROR_FALSE" });
//             dispatch({ type: "REMOVE_SELECTED_TAGNAMES" });
//           }}
//         >
//           {plantName} Plant
//         </h1>
//       )}
//       {/* Links  */}
//       {isAuth && (
//         <div
//           className={
//             plantName
//               ? `navbar-nav ml-auto align-items-center username`
//               : "navbar-nav ml-auto align-items-center username"
//           }
//         >
//           <button
//               className="btnsecond"
//               onClick={() => {
//                 if (localStorage.getItem("ParentClosed")) {
//                   window.location.href = "/";
//                   return;
//                 }
//                 window.close();
//               }}
//             >
//               Go To Dashboard
//             </button>
//           <div className="d-flex">
//             <span className="ml-3 mr-3">Welcome {authProvider?.username}</span>
//             <button
//               onClick={() => {
//                 onLogoutClick(instance);
//               }}
//             >
//               <BiLogOutCircle className="logout_btn" />
//             </button>
//           </div>
//         </div>
//       )}

//       <nav className={sidebar ? "nav_menu_active" : "nav_menu"}>
//         <ul className="nav_menu_items">
//           <li className="navbar_toggle">
//             <div className="menu_bar_open">
//               <AiOutlineClose onClick={showSidebar} />
//             </div>
//           </li>
//           {SidebarData.map((item, index) => {
//             return (
//               <li
//                 key={index}
//                 className={
//                   window.location.href.split("/").pop() ===
//                   item.path.split("/").pop()
//                     ? "nav_text nav_text_active"
//                     : "nav_text"
//                 }
//               >
//                 <Link
//                   onClick={() => {
//                     showSidebar();
//                     sessionStorage.removeItem("plantName");
//                     sessionStorage.removeItem("millName");
//                   }}
//                   to={item.path}
//                 >
//                   {item.icon}
//                   <span style={{ marginLeft: "10px" }}>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//           <li
//             key={100}
//             className={
//               window.location.href.split("/").pop() === "reports"
//                 ? "nav_text nav_text_active"
//                 : "nav_text"
//             }
//           >
//             <Link
//               to={"#"}
//               onClick={() => {
//                 setReportPlusButton(!reportPlusButton);
//               }}
//             >
//               <HiOutlineDocumentReport />
//               <span style={{ marginLeft: "10px" }}>{"Reports"}</span>

//               <AiOutlinePlusCircle size={25} style={{ marginLeft: "20px" }} />
//             </Link>
//           </li>
//           <div
//             className={
//               "dropdownContainer" +
//               (reportPlusButton ? "dropdown-collepsed" : "")
//             }
//           >
//             {reportData.length === 0 ? (
//               <div className={reportPlusButton ? "d-none" : ""}>
//                 No Reports Found
//               </div>
//             ) : (
//               reportData.map((val, index) => {
//                 return (
//                   <li
//                     key={index}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => {
//                       sessionStorage.setItem(
//                         "reportDisplayData",
//                         JSON.stringify(val)
//                       );
//                       showSidebar();
//                       window.location.href = "/mimics/reports";
//                       // navigate(`/reports`);
//                       sessionStorage.removeItem("plantName");
//                       sessionStorage.removeItem("millName");
//                     }}
//                     className={
//                       reportPlusButton
//                         ? "d-none"
//                         : val?.ReportTemplateName ===
//                             JSON.parse(
//                               sessionStorage.getItem("reportDisplayData")
//                             )?.ReportTemplateName &&
//                           window.location.href.split("/").pop() === "reports"
//                         ? "nav_text nav_text_active_list"
//                         : "nav_text"
//                     }
//                   >
//                     {val.ReportTemplateName}
//                   </li>
//                 );
//               })
//             )}
//           </div>
//         </ul>
//       </nav>
//     </nav>
//   );
// }





// import "./Navbar.css";
import ultraLogo from "../../img/adityabirlalogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { deleteFromLocalStorage } from "../../utils/storageFunctions/localStorage";
import { BASE_URL } from "../../base";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineClose, AiOutlinePlusCircle } from "react-icons/ai";
import { SidebarData } from "../../data/nav/sidebar";

export function Navbar() {
  const { authProvider } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { instance } = useMsal();
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const plantName = sessionStorage.getItem("plantName");
  const millName = sessionStorage.getItem("millName");

  // -------- sidebar --------------
  const [reportPlusButton, setReportPlusButton] = useState(true);
  const [reportData, setReportData] = useState([]);
  const [sidebar, setSideBar] = useState(true);
  const showSidebar = () => setSideBar(!sidebar);
  //sidebar end

  const signOutHandler = (instance) => {
    sessionStorage.removeItem("token");
    instance
      .logoutRedirect({
        postLogoutRedirectUri: "/", // 👈 this is the only change // added by TRIDAI to route the base url after logout
      })
      .catch((e) => {
        console.error(e);
      });
    // useLogout()
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "ERROR_FALSE" });
    // window.location.href = "/";
  };

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.removeItem("SLOG");
    }, 1000);
  }, []);

  const onLogoutClick = async (instance) => {
    const { token, email } = JSON.parse(localStorage.getItem("login"));

    // await useLogout('10.10.10.10')
    const response = await axios.post(
      `${BASE_URL}logAccessLogout`,
      {
        userId: email,
        ip: authProvider.userIp,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Accept-Encoding": "*/*",
        },
      },
    );
    // console.log(response?.data);
    signOutHandler(instance);
  };
  const plantLink = plantName
    ?.replace(/[^a-zA-Z ]/g, "")
    ?.split(" ")
    ?.join("")
    ?.toLowerCase();

  return (
    <div
      className="w-full h-14 shadow-left-drawer-light dark:shadow-left-drawer-dark bg-[var(--bg-header)] px-6 flex items-center justify-between relative z-50"
    >
      {/* <div to="#" className="menu_bar">
        <FaBars className="bar" size={35} onClick={showSidebar} />
      </div> */}
      <div className="flex items-center ">
        <Link
          className="navbar-brand"
          to="/dashboard"
          onClick={() => {
            sessionStorage.removeItem("plantName");
            sessionStorage.removeItem("millName");
            deleteFromLocalStorage("plant_data_coming_status");
            dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
            dispatch({ type: "HIDE_POPUP" });
            dispatch({ type: "CLEAN_TAGNAMES" });
            dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "ERROR_FALSE" });
            dispatch({ type: "REMOVE_SELECTED_TAGNAMES" });
          }}
        >
          <img src={ultraLogo} className="h-[50px] w-[50px]" alt="logo" />
        </Link>
        <h1 className=" -ml-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl text-[var(--header-text-color)] font-medium font-poppins tracking-tight text-center">
          Prakriti: UltraTech's Unified OT Data Platform
        </h1>
      </div>
      {/* Links  */}

      {/* <span className="nav-item">{millName}</span> */}
      {/* {plantName && (
        <h1
          className="navbar-plant-heading"
          onClick={() => {
            sessionStorage.removeItem("millName");
            navigate(`/${plantLink}`);
            dispatch({ type: "HIDE_POPUP" });
            dispatch({ type: "CLEAN_TAGNAMES" });
            dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "ERROR_FALSE" });
            dispatch({ type: "REMOVE_SELECTED_TAGNAMES" });
          }}
        >
          {plantName} Plant
        </h1>
      )} */}
      {/* Links  */}
      {isAuth && (
        <div
          className={
            plantName
              ? `navbar-nav ml-auto align-items-center username`
              : "navbar-nav ml-auto align-items-center username"
          }
        >
          {/* <button
            className="btnsecond"
            onClick={() => {
              if (localStorage.getItem("ParentClosed")) {
                window.location.href = "/";
                return;
              }
              window.close();
            }}
          >
            Go To Dashboard
          </button> */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[var(--header-text-color)]">
              Welcome{" "}
              <span className="font-semibold">{authProvider?.username}</span>
            </span>

            <button
              onClick={() => onLogoutClick(instance)}
              className="
      flex items-center justify-center
      p-2 rounded-lg
      transition-all duration-200
      text-[var(--header-text-color)]
      hover:bg-[var(--left-drawer-active-tab)]
      hover:text-[#111111]
    "
            >
              <BiLogOutCircle size={20} className="rotate-90" />
            </button>
          </div>
        </div>
      )}

      <nav className={sidebar ? "nav_menu_active" : "nav_menu"}>
        <ul className="nav_menu_items">
          <li className="navbar_toggle">
            <div className="menu_bar_open">
              <AiOutlineClose onClick={showSidebar} />
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  window.location.href.split("/").pop() ===
                    item.path.split("/").pop()
                    ? "nav_text nav_text_active"
                    : "nav_text"
                }
              >
                <Link
                  onClick={() => {
                    showSidebar();
                    sessionStorage.removeItem("plantName");
                    sessionStorage.removeItem("millName");
                  }}
                  to={item.path}
                >
                  {item.icon}
                  <span style={{ marginLeft: "10px" }}>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li
            key={100}
            className={
              window.location.href.split("/").pop() === "reports"
                ? "nav_text nav_text_active"
                : "nav_text"
            }
          >
            <Link
              to={"#"}
              onClick={() => {
                setReportPlusButton(!reportPlusButton);
              }}
            >
              <HiOutlineDocumentReport />
              <span style={{ marginLeft: "10px" }}>{"Reports"}</span>

              <AiOutlinePlusCircle size={25} style={{ marginLeft: "20px" }} />
            </Link>
          </li>
          <div
            className={
              "dropdownContainer" +
              (reportPlusButton ? "dropdown-collepsed" : "")
            }
          >
          </div>
        </ul>
      </nav>
    </div>
  );
}
