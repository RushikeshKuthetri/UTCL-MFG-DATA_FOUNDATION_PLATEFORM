// import { useState } from "react";
// import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
// import { FaBars, FaChartArea } from "react-icons/fa";
// import { clearStorage } from "../utils/storageUtils";
// import { useNavigate } from "react-router-dom";
// import LOGO from "./assets/logo.png";
// import { Link, useLocation } from "react-router-dom";
// import { BiLogOutCircle } from "react-icons/bi";

// import { AiOutlineClose, AiFillDatabase, AiOutlineMail } from "react-icons/ai";

// export const NavigationBar = () => {
//   const state = useLocation();
//   const [showProfilePicker, setShowProfilePicker] = useState(false);
//   const { instance } = useMsal();
//   const [reportPlusButton, setReportPlusButton] = useState(true);
//   const [reportData, setReportData] = useState([]);
//   const [sidebar, setSideBar] = useState(true);
//   const showSidebar = () => setSideBar(!sidebar);
//   const navigate = useNavigate();
//   let SidebarData = [
//     {
//       title: "Equipment Template",
//       path: "/templates",
//       icon: <AiFillDatabase />,
//     },
//     {
//       title: "Email Template",
//       path: "/EmailTemplateList",
//       icon: <AiOutlineMail />,
//     },
//     {
//       title: "Cyclone View List",
//       path: "/cyclonelist",
//       icon: <FaChartArea />,
//     },
//   ];

//   let activeAccount;

//   if (instance) {
//     activeAccount = instance.getActiveAccount();
//   }

//   const handleLogoutRedirect = () => {
//     let account = instance.getActiveAccount();
//     clearStorage(account);

//     instance.logoutRedirect({
//       account: instance.getActiveAccount(),
//     });
//   };

//   const handleLogoutPopup = () => {
//     let account = instance.getActiveAccount();
//     clearStorage(account);

//     instance.logoutPopup({
//       mainWindowRedirectUri: "/", // redirects the top level app after logout
//       account: instance.getActiveAccount(),
//     });
//   };

//   const handleSwitchAccount = () => {
//     setShowProfilePicker(!showProfilePicker);
//   };
//   // useEffect(() => {
//   //   if (reportPlusButton) {
//   //     getReportData();
//   //   }
//   // }, [reportPlusButton]);

//   // const getReportData = () => {
//   //   let payload = {
//   //     userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//   //   };
//   //   axios
//   //     .post(config.BaseUrl + "/cbm/template/getReportData", payload)
//   //     .then((res) => {
//   //       res = res.data.result;
//   //       if (res === "No Records Found") {
//   //         setNodataFlag(true);
//   //         setReportData([]);
//   //       } else {
//   //         res = res.sort((a, b) => {
//   //           return new Date(b.Timestamp) - new Date(a.Timestamp);
//   //         });
//   //         setReportData(res);
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       toast.error(err.message);
//   //     });
//   // };

//   const RouteHeadings = {
//     "/createTemplate": "Create Equipment Template",
//     "/editTemplate": "Edit Equipment Template",
//     "/templates": "Equipment Templates",
//     "/EmailTemplate": "Create Email Template",
//     "/editEmailTemplate": "Edit Email Template",
//     "/EmailTemplateList": "Email Templates",
//     "/": "Equipment Templates",
//     "/cyclonelist": "Cyclone View List",
//   };

//   return (
//     <header className="tonav">
//       <navbar variant="light" className="navbar navbar-expand-md">
//         <div className="d-flex align-items-center">
//           <AuthenticatedTemplate>
//             <div to="#" className="menu_bar">
//               <FaBars size={35} onClick={showSidebar} />
//             </div>
//           </AuthenticatedTemplate>

//           <Link to="/templates" className="navbar-brand">
//             <img src={LOGO} className="ml-2 logo" />
//           </Link>
//         </div>
//         <div>
//           <h5 className="navhead">{RouteHeadings[state.pathname]}</h5>
//         </div>

//         <AuthenticatedTemplate>
//           <div className={"navbar-nav align-items-center"}>
//             <button
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
//             <div className="d-flex ">
//               <span className="ml-3 mr-3 username">
//                 Welcome {activeAccount ? activeAccount.name : ""}
//               </span>
//               <button className="logout" onClick={handleLogoutRedirect}>
//                 <BiLogOutCircle className="logout_btn" />
//               </button>
//             </div>
//           </div>

//           <nav className={sidebar ? "nav_menu_active" : "nav_menu"}>
//             <ul className="nav_menu_items">
//               <li className="navbar_toggle">
//                 <div className="menu_bar_open">
//                   <AiOutlineClose onClick={showSidebar} />
//                 </div>
//               </li>
//               {SidebarData.map((item, index) => {
//                 return (
//                   <li
//                     key={index}
//                     className={
//                       window.location.href.split("/").pop() ===
//                       item.path.split("/").pop()
//                         ? "nav_text nav_text_active"
//                         : "nav_text"
//                     }
//                   >
//                     {/* <li key={index} className="nav_text"> */}
//                     <Link onClick={showSidebar} to={item.path}>
//                       {item.icon}
//                       <span style={{ marginLeft: "10px" }}>{item.title}</span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </AuthenticatedTemplate>
//       </navbar>
//     </header>
//   );
// };






import { useState } from "react";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import { FaBars, FaChartArea } from "react-icons/fa";
import { clearStorage } from "../utils/storageUtils";
import { useNavigate } from "react-router-dom";
import LOGO from "./assets/adityabirlalogo.png";
import { Link, useLocation } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";

import { AiOutlineClose, AiFillDatabase, AiOutlineMail } from "react-icons/ai";

export const NavigationBar = () => {
  const state = useLocation();
  const [showProfilePicker, setShowProfilePicker] = useState(false);
  const { instance } = useMsal();
  const [reportPlusButton, setReportPlusButton] = useState(true);
  const [reportData, setReportData] = useState([]);
  const [sidebar, setSideBar] = useState(true);
  const showSidebar = () => setSideBar(!sidebar);
  const navigate = useNavigate();
  let SidebarData = [
    {
      title: "Equipment Template",
      path: "/templates",
      icon: <AiFillDatabase />,
    },
    {
      title: "Email Template",
      path: "/EmailTemplateList",
      icon: <AiOutlineMail />,
    },
    {
      title: "Cyclone View List",
      path: "/cyclonelist",
      icon: <FaChartArea />,
    },
  ];

  let activeAccount;

  if (instance) {
    activeAccount = instance.getActiveAccount();
  }

  const handleLogoutRedirect = () => {
    const account = instance.getActiveAccount();

    clearStorage(account); // clear before redirect

    instance.logoutRedirect({
      account: account,
      postLogoutRedirectUri: "/", // redirect after logout
    });
  };

  const handleLogoutPopup = () => {
    let account = instance.getActiveAccount();
    clearStorage(account);

    instance.logoutPopup({
      mainWindowRedirectUri: "/", // redirects the top level app after logout
      account: instance.getActiveAccount(),
    });
  };


  const RouteHeadings = {
    "/createTemplate": "Create Equipment Template",
    "/editTemplate": "Edit Equipment Template",
    "/templates": "Equipment Templates",
    "/EmailTemplate": "Create Email Template",
    "/editEmailTemplate": "Edit Email Template",
    "/EmailTemplateList": "Email Templates",
    "/": "Equipment Templates",
    "/cyclonelist": "Cyclone View List",
  };

   return (
     <div
      className="w-full h-14 shadow-left-drawer-light dark:shadow-left-drawer-dark bg-[var(--bg-header)] px-6 flex items-center justify-between relative z-50"
    >

      {/* Left Section */}
      <div className="flex items-center gap-4 ">
        <Link to="/templates">
           <img src={LOGO} className="h-[50px] w-[50px]" alt="logo" />
        </Link>

        {/* <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[var(--header-text-color)] tracking-tight">
          {RouteHeadings[state.pathname]}
        </h1> */}
         <h1 className=" -ml-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl text-[var(--header-text-color)] font-medium font-poppins tracking-tight text-center">
          Prakriti: UltraTech's Unified OT Data Platform
        </h1>
      </div>

      {/* Right Section */}
      <AuthenticatedTemplate>
        <div className="flex items-center gap-4">

          <span className="text-sm font-medium text-[var(--header-text-color)]">
            Welcome{" "}
            <span className="font-semibold">
              {activeAccount ? activeAccount.name : ""}
            </span>
          </span>

          <button
            onClick={handleLogoutRedirect}
            className="
            flex items-center justify-center
            p-2 rounded-lg
            transition-all duration-200
            text-[var(--header-text-color)]
            hover:bg-[var(--left-drawer-active-tab)]
            hover:text-[#111111]
          "
          >
            <BiLogOutCircle size={20} className="rotate-90"/>
          </button>

        </div>
      </AuthenticatedTemplate>

    </div>
  );
};
