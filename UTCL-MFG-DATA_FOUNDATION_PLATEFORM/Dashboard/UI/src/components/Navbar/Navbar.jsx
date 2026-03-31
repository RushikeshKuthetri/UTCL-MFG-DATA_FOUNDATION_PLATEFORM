// import "./Navbar.css";
// import ultraLogo from "../../img/logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { BiLogOutCircle } from "react-icons/bi";
// import { useMsal, useIsAuthenticated } from "@azure/msal-react";
// import { useEffect } from "react";
// import { sendLogoutDetails } from "../../utils/sendLogoutDetails";

// export function Navbar() {
//   const { authProvider } = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const { instance } = useMsal();
//   const navigate = useNavigate();
//   const isAuth = useIsAuthenticated();
//   // const { token } = JSON.parse(localStorage.getItem("login"));

//   const signOutHandler = (instance) => {
//     sessionStorage.removeItem("token");
//     instance.logoutRedirect().catch((e) => {
//       console.error(e);
//     });
//     // localStorage.removeItem("modules");
//     dispatch({ type: "LOGOUT" });
//     dispatch({ type: "ERROR_FALSE" });
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       sessionStorage.removeItem("SLOG");
//     }, 1000);
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-md">
//       {/* Navbar Brand */}

//       <Link className="navbar-brand" to="/dashboard">
//         <img src={ultraLogo} className="logo" alt="logo" />
//       </Link>
//       {isAuth && (
//         <div className={"navbar-nav ml-sm-auto align-items-center username"}>
//           {sessionStorage.getItem("token") && authProvider?.username && (
//             <button
//               className="btn btnsecond"
//               onClick={() => navigate("/admin")}
//             >
//               Go To Admin
//             </button>
//           )}
//           <div className="d-flex align-items-center ml-auto">
//             <span className="ml-3 mr-3">Welcome {authProvider?.username}</span>
//             <button
//               onClick={() => {
//                 sendLogoutDetails(authProvider.email, authProvider.token);
//                 signOutHandler(instance);
//               }}
//               className="logout_btn"
//             >
//               <BiLogOutCircle />
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



// import "./Navbar.css"
import adityabirlalogo from "../../img/adityabirlalogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { sendLogoutDetails } from "../../utils/sendLogoutDetails";

export function Navbar() {
  const { authProvider } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { instance } = useMsal();
  const navigate = useNavigate();
  const isAuth = useIsAuthenticated();
  // const { token } = JSON.parse(localStorage.getItem("login"));


  const signOutHandler = (instance) => {
    sessionStorage.removeItem("token");
    instance.logoutRedirect({
      postLogoutRedirectUri: "/", // 👈 this is the only change // added by TRIDAI to route the base url after logout
    }
    ).catch((e) => {
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

  return (
    <div className="w-full h-14 bg-[var(--bg-header)] px-6 flex items-center justify-between shadow-[var(--header-shadow)] scroll">
      <div className="flex items-center ">

        <button className="navbar-brand">
          <img src={adityabirlalogo} className="logo w-[50px] h-[50px]" alt="logo" />
        </button>

        <h1 className=" -ml-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl text-[var(--header-text-color)] font-medium font-poppins tracking-tight text-center">
          Prakriti: UltraTech's Unified OT Data Platform
        </h1>

      </div>
      {isAuth && (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[var(--header-text-color)]">
            Welcome {authProvider?.username}
          </span>

          <button
            onClick={() => {
              sendLogoutDetails(authProvider.email, authProvider.token);
              signOutHandler(instance);
            }}
            className="flex items-center justify-center w-9 h-9 rounded-full 
                 hover:bg-gray-200 dark:hover:bg-gray-700 
                 transition duration-200"
          >
            <BiLogOutCircle size={20} className="text-[var(--header-text-color)] rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
}
 