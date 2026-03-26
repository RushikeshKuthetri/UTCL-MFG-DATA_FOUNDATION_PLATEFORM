import { Navbar, PrivateRoute, ScreenLoader } from "./components";
import "./css/maincss.css";
import "./css/admin.scss";
import { Login, MainDasboard, OptDasboard } from "./pages";
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
//admin import
import AdminLogin from "./Admin/Login/login";
import DataTable from "./Admin/Data-Table/dataTable";
import Settings from "./Admin/Settings/settings";
import useToken from "./Admin/UseToken/useToken";
import ProtectedRoute from "./Admin/Protected-Route/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";

import { getFromLocalStorage } from "./utils/storageFunctions/localStorage";
import EmailLogs from "./Admin/EmailLogs/EmailLogs";
import Alerts from "./Admin/Alerts/Alerts";
import CBMTemplates from "./Admin/CBMTemplates/CBMTemplates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlertForBlaine from "./Admin/Alerts/AlertForBlaine";
import AccessLog from "./Admin/AccessLog/AccessLog";
import KilnMaster from "./Admin/KilnMaster/KilnMaster";
import AlertForKiln from "./Admin/Alerts/AlertForKiln";
import MimicLineAlerts from "./Admin/Alerts/MimicLineAlerts";
import Utilization from "./Admin/Utilization/Utilization";
import { requestAccessToken } from "./utils/auth api/loginAPI";
import LeftDrawer from "./components/LeftDrawer/LeftDrawer";
import Footer from "./components/Footer/Footer";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import { Search } from "lucide-react";
// import { KpiDashboard } from "./pages/KpiDashboard/KpiDashboard";
///////admin import end

// const DashboardRedirect = () => {
//   useEffect(() => {
//     window.location.replace(
//       `${window.location.origin}/mimics/dashboard`
//     );
//   }, []);

//   return null;
// };

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);   // mobile
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("collapsed") === "true"
  );

  const { authProvider } = useSelector((state) => state);
  const navigate = useNavigate();
  const isAuth = useIsAuthenticated();
  const state = useLocation();
  const { instance, accounts } = useMsal();
  const dispatch = useDispatch();
  const { token: adminToken, setToken } = useToken();


  useEffect(() => {
    if (localStorage.getItem("ParentClosed")) {
      localStorage.removeItem("ParentClosed");
    }
    if (isAuth) {
      if (
        JSON.parse(getFromLocalStorage("login"))?.plants?.length === 0 &&
        JSON.parse(getFromLocalStorage("login"))?.isLogggedin
      ) {
        dispatch({ type: "LOADING_TRUE" });
        requestAccessToken(
          loginRequest,
          accounts,
          instance,
          dispatch,
          adminToken,
          setToken
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
        adminToken,
        setToken
      );
      navigate(state?.pathname);
    }
    //   setTimeout(() => {
    //     if (state.pathname.indexOf("/admin") >= 0) {
    //     } else {
    //       !isAuth && navigate("login");
    //     }
    //   }, 200);
  }, [isAuth]);


  // useEffect(() => {
  //   if (!isAuth) return;
  //   if (
  //     JSON.parse(getFromLocalStorage("login"))?.plants?.length === 0 &&
  //     JSON.parse(getFromLocalStorage("login"))?.isLogggedin
  //   ) {
  //     dispatch({ type: "LOADING_TRUE" });

  //     requestAccessToken(
  //       loginRequest,
  //       accounts,
  //       instance,
  //       dispatch,
  //       adminToken,
  //       setToken
  //     );
  //   }
  // }, [isAuth]);

   useEffect(() => {
      localStorage.setItem("collapsed", collapsed);
    }, [collapsed]);

  return (
     <div className={`font-sans h-screen flex flex-col overflow-hidden ${isAuth ? "bg-[var(--bg-main-container)]" : ""}`}>
      <header className=" dark:shadow-left-drawer-dark  shadow-left-drawer-light">
        {/* {!(state.pathname.indexOf("/admin") >= 0) && isAuth && <Navbar />} */}
        {isAuth && <Navbar />}
      </header>

      {/* <main className="container-fluid"> */}
      <div className="flex flex-1 overflow-hidden mt-1"
          >
        {isAuth && <LeftDrawer
          open={drawerOpen}
          setOpen={setDrawerOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />}
        <div className={`flex flex-col flex-1 overflow-hidden ${isAuth ? (collapsed ? "lg:ml-20" : "lg:ml-60") : "ml-0"}`}>
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

        <main className="h-[80vh] flex flex-1 overflow-hidden   sm:pb-3">
          <div className="flex  flex-col flex-1 overflow-auto bg-[var(--bg-main-container)] rounded-2xl shadow-left-drawer-light dark:shadow-left-drawer-dark mx-3 pr-3 transition duration-300 sm:mt-3 md:mt-1 px-3 sm:px-4 md:px-5 lg:px-4 lg:pt-2 lg:pb-4 pt-2 sm:pt-3 pb-3 sm:pb-4 md:pb-5">

              <React.Suspense fallback={<ScreenLoader />}>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute component={MainDasboard} path="/dashboard" />
                    }
                  />
                  {/* <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute
                        component={DashboardRedirect}
                        path="/dashboard"
                      />
                    }
                  /> */}

                  {/* <Route
              path="/kpidashboard"
              element={
                <PrivateRoute component={KpiDashboard} path="/kpidashboard" />
              }
            /> */}
                  <Route
                    path="/processopt"
                    element={
                      <PrivateRoute component={OptDasboard} path="/processopt" />
                    }
                  />
                  <Route
                    exact
                    path="/admin/"
                    element={
                      <div className="admin">
                        <AdminLogin />
                      </div>
                    }
                  />
                  <Route
                    exact
                    path="/admin/Dashboard"
                    element={
                      <ProtectedRoute>
                        <div className="admin">
                          <DataTable />
                        </div>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/admin/Dashboard/DataTable"
                    element={
                      <ProtectedRoute>
                        <div className="admin">
                          <DataTable />
                        </div>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/admin/Dashboard/emailLogs"
                    element={
                      <ProtectedRoute>
                        <div className="admin">
                          <EmailLogs />
                        </div>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/admin/Dashboard/Settings"
                    element={
                      <ProtectedRoute>
                        <div className="admin">
                          <Settings />
                        </div>
                      </ProtectedRoute>
                    }
                  />
                  {adminToken?.Role === "super_admin" && (
                    <Route
                      exact
                      path="/admin/Dashboard/alerts"
                      element={
                        <ProtectedRoute>
                          <div className="admin">
                            <Alerts />
                          </div>
                        </ProtectedRoute>
                      }
                    />
                  )}
                  {adminToken?.Role === "super_admin" && (
                    <Route
                      exact
                      path="/admin/Dashboard/mimicLineAlerts"
                      element={
                        <ProtectedRoute>
                          <div className="admin">
                            <MimicLineAlerts />
                          </div>
                        </ProtectedRoute>
                      }
                    />
                  )}
                  {adminToken?.Role === "super_admin" && (
                    <Route
                      exact
                      path="/admin/Dashboard/blainealerts"
                      element={
                        <ProtectedRoute>
                          <div className="admin">
                            <AlertForBlaine />
                          </div>
                        </ProtectedRoute>
                      }
                    />
                  )}
                  {adminToken?.Role === "super_admin" && (
                    <Route
                      exact
                      path="/admin/Dashboard/kilnalerts"
                      element={
                        <ProtectedRoute>
                          <div className="admin">
                            <AlertForKiln />
                          </div>
                        </ProtectedRoute>
                      }
                    />
                  )}
                  {adminToken?.Role === "super_admin" && (
                    <Route
                      exact
                      path="/admin/Dashboard/alltemplates"
                      element={
                        <ProtectedRoute>
                          <div className="admin">
                            <CBMTemplates />
                          </div>
                        </ProtectedRoute>
                      }
                    />
                  )}
                  <Route
                    exact
                    path="/admin/Dashboard/logs"
                    element={
                      <ProtectedRoute>
                        <div className="admin">
                          <AccessLog />
                        </div>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/admin/Dashboard/kilnmaster"
                    element={
                      <ProtectedRoute>
                        <div className="admin">
                          <KilnMaster />
                        </div>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/admin/Dashboard/utilization"
                    element={
                      <ProtectedRoute>
                        <div className="admin">
                          <Utilization />
                        </div>
                      </ProtectedRoute>
                    }
                  />

                  {!sessionStorage.getItem("SLOG") && (
                    <Route
                      path="/"
                      exact
                      element={<Navigate replace to={"/dashboard"} />}
                    />
                  )}
                  {/* {!authProvider.isLogin && (
                    <Route path="/login" element={<Login />} />
                  )} */}
                </Routes>
              </React.Suspense>


          </div>
        </main>
        </div>

      </div>

      {isAuth && <Footer />}
      <React.Suspense fallback={<ScreenLoader />}>
        <Routes>
          {!authProvider.isLogin && (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </React.Suspense>
      <ToastContainer />
    </div>
  );
}

export default App; 