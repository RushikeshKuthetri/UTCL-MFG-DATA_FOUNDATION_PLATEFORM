// /* eslint-disable react-hooks/exhaustive-deps */
// import {
//   Navbar,
//   PrivateRoute,
//   ScreenLoader,
// } from "./components";
// import "./css/admin.scss";
// import { Login } from "./pages";
// import {
//   Navigate,
//   Route,
//   Routes,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect } from "react";
// import { useIsAuthenticated, useMsal } from "@azure/msal-react";
// import { loginRequest } from "./data/auth/Config";
// import { getFromLocalStorage } from "./utils/storageFunctions/localStorage";
// import { ToastContainer } from "react-toastify";
// import { routes } from "./data/routes/routes";
// import { requestAccessToken } from "./utils/apicalls/authapi";
// import "./css/loader.scss";
// import "./css/main.scss";

// function App() {
//   const { showPopup, authProvider, filterData } = useSelector((state) => state);
//   const isAuth = useIsAuthenticated();
//   const navigate = useNavigate();
//   const state = useLocation();
//   const { instance, accounts } = useMsal();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // console.log(
//     //   "localStorage.getItem(trendIntervalID) App --",
//     //   localStorage.getItem("trendIntervalID")
//     // );
//     if (localStorage.getItem("trendIntervalID")) {
//       clearInterval(localStorage.getItem("trendIntervalID"));
//     }
//     if (isAuth) {
//       if (
//         JSON.parse(getFromLocalStorage("login"))?.plants?.length === 0 &&
//         JSON.parse(getFromLocalStorage("login"))?.isLogggedin
//       ) {
//         requestAccessToken(
//           loginRequest,
//           accounts,
//           instance,
//           dispatch,
//           navigate,
//           state
//         );
//         navigate("/dashboard");
//         return;
//       } else {
//         navigate(state?.pathname);
//       }
//       requestAccessToken(
//         loginRequest,
//         accounts,
//         instance,
//         dispatch,
//         navigate,
//         state
//       );
//       navigate(state?.pathname);
//     } else {
//       setTimeout(() => {
//         !isAuth && navigate("login");
//       }, 200);
//     }
//   }, []);

//   return (
//     <>
//       {filterData.isLoading && (
//         <div className="loader-bg">
//           <span className="loader"> </span>
//         </div>
//       )}
//       <ToastContainer />
//       <header className="tonav">{isAuth && <Navbar />}</header>
//       <main className="container-fluid">
//         <React.Suspense fallback={<ScreenLoader />}>
//           <Routes>
//             {routes.map(({ path, component }, index) => {
//               return (
//                 <Route
//                   key={index}
//                   path={path}
//                   element={<PrivateRoute component={component} path={path} />}
//                 />
//               );
//             })}
//             {!sessionStorage.getItem("SLOG") && (
//               <Route
//                 path="/"
//                 exact
//                 element={<Navigate replace to={"/dashboard"} />}
//               />
//             )}
//             {!authProvider.isLogin && (
//               <Route path="/login" element={<Login />} />
//             )}
//           </Routes>
//         </React.Suspense>
//       </main>
//     </>
//   );
// }

// export default App;





/* eslint-disable react-hooks/exhaustive-deps */
import {
  Navbar,
  PrivateRoute,
  ScreenLoader,
} from "./components";
// import "./css/admin.scss";
import { Login } from "./pages";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "./data/auth/Config";
import { getFromLocalStorage } from "./utils/storageFunctions/localStorage";
import { ToastContainer } from "react-toastify";
import { routes } from "./data/routes/routes";
import { requestAccessToken } from "./utils/apicalls/authapi";
// import "./css/loader.scss";
// import "./css/main.scss";
import LeftDrawer from "./components/LeftDrawer/LeftDrawer";
import Footer from "./components/Footer/Footer";
import { Search } from "lucide-react";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);   // mobile
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("collapsed") === "true"
  );
  const { showPopup, authProvider, filterData } = useSelector((state) => state);
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const state = useLocation();
  const { instance, accounts } = useMsal();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("collapsed", collapsed);
  }, [collapsed]);
  useEffect(() => {
    // console.log(
    //   "localStorage.getItem(trendIntervalID) App --",
    //   localStorage.getItem("trendIntervalID")
    // );
    if (localStorage.getItem("trendIntervalID")) {
      clearInterval(localStorage.getItem("trendIntervalID"));
    }
    if (isAuth) {
      if (
        JSON.parse(getFromLocalStorage("login"))?.plants?.length === 0 &&
        JSON.parse(getFromLocalStorage("login"))?.isLogggedin
      ) {
        requestAccessToken(
          loginRequest,
          accounts,
          instance,
          dispatch,
          navigate,
          state
        );
        navigate("/dashboard");
        return;
      } else {
        navigate(state?.pathname);
      }
      requestAccessToken(
        loginRequest,
        accounts,
        instance,
        dispatch,
        navigate,
        state
      );
      navigate(state?.pathname);
    } else {
      setTimeout(() => {
        !isAuth && navigate("login");
      }, 200);
    }
  }, []);

  return (
    <div className="font-sans h-screen flex flex-col overflow-hidden bg-[var(--bg-color)]">
      {filterData.isLoading && (
        <div className="loader-bg">
          <span className="loader"> </span>
        </div>
      )}
      <ToastContainer />
      <header className="tonav">{isAuth && <Navbar />}</header>
      <main className="flex-1 min-h-0 flex overflow-hidden text-[var(--text-color)] mt-1">
        <LeftDrawer
          open={drawerOpen}
          setOpen={setDrawerOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <div
          className={`
    flex-1 min-h-0  transition-all duration-300
    ${collapsed ? "lg:ml-20" : "lg:ml-60"}
  `} >

         <div className="mx-3 flex items-center justify-between">
            <BreadCrumb  />
            <div className="flex items-center bg-[var(--card-bg)] border border-[var(--input-enable-border)] rounded-md px-3  shadow-sm">
              <Search size={16} className="text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-[180px] text-sm text-[var(--text-color)] placeholder-gray-400"
              />
            </div>
          </div>
           <div className="h-[80vh] custom-scrollbar px-2.5 py-2 flex flex-col bg-[var(--bg-main-container)] mx-3 rounded-2xl shadow-left-drawer-light dark:shadow-left-drawer-dark mt-1">
            <div className="flex-1 min-h-0 overflow-y-auto">
              <React.Suspense fallback={<ScreenLoader />}>
                <Routes>
                  {routes.map(({ path, component }, index) => {
                    return (
                      <Route
                        key={index}
                        path={path}
                        element={<PrivateRoute component={component} path={path} />}
                      />
                    );
                  })}
                  {!sessionStorage.getItem("SLOG") && (
                    <Route
                      path="/"
                      exact
                      element={<Navigate replace to={"/dashboard"} />}
                    />
                  )}
                  {!authProvider.isLogin && (
                    <Route path="/login" element={<Login />} />
                  )}
                </Routes>
              </React.Suspense>
            </div>
          </div>
        </div>
      </main>
      {isAuth && <Footer />}
    </div>
  );
}

export default App;
