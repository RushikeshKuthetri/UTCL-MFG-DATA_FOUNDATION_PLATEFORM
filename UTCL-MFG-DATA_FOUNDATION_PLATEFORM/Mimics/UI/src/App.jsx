/* eslint-disable react-hooks/exhaustive-deps */
import {
  FilterCard4,
  Graph,
  MimicPopupChild,
  Navbar,
  PopUp,
  PopupChild,
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
import { FilterCardTrends, TrendFilterCard } from "./components/ShowGraphAndTable/FilterCard/TrendFilterCard";
import LeftDrawer from "./components/LeftDrawer/LeftDrawer";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Footer from "./components/Footer/Footer";
import { Search } from "lucide-react";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);   // mobile
  // const [collapsed, setCollapsed] = useState(
  //   localStorage.getItem("collapsed") === "true"
  // );
  const [toggle, setToggle] = useState(false)
  const { collapsed } = useSelector((state) => state.filterData);

  const { showPopup, authProvider, filterData } = useSelector((state) => state);
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const state = useLocation();
  const { instance, accounts } = useMsal();
  const dispatch = useDispatch();
  const location = useLocation();

  const [plantName, setPlantName] = useState(null);
  const [millName, setMillName] = useState(null);

  useEffect(() => {
    setPlantName(sessionStorage.getItem("plantName"));
    setMillName(sessionStorage.getItem("millName"));
  }, [location.pathname]);

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
      <header className="shrink-0">{isAuth && <Navbar />}</header>
      <main className="flex-1 min-h-0 flex overflow-hidden text-[var(--text-color)] mt-1 ">
        {isAuth && (
          <LeftDrawer
            open={drawerOpen}
            setOpen={setDrawerOpen}
            collapsed={collapsed}
            setCollapsed={() => dispatch({ type: "TOGGLE_DRAWER" })} />
        )}
        <div
          className={`flex-1 min-h-0 transition-all duration-300 ${isAuth ? (collapsed ? "lg:ml-20" : "lg:ml-60") : "ml-0"
            }`}
        >
         {isAuth && (
    <div className="mx-3  flex items-center justify-between mb-1">
        <BreadCrumb plantName={plantName} millName={millName} />
        
        {/* Search Bar */}
        <div className="flex items-center bg-[var(--card-bg)] border border-[var(--input-enable-border)] rounded-md px-3  shadow-sm">
            <Search size={16} className="text-gray-400 mr-2 shrink-0" />
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-[180px] text-sm text-[var(--text-color)] placeholder-gray-400"
            />
        </div>
    </div>
)}
          
          <div className="h-[80vh] custom-scrollbar px-2.5 py-2 flex flex-col bg-[var(--bg-main-container)] mx-3 rounded-2xl shadow-left-drawer-light dark:shadow-left-drawer-dark">
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
                {showPopup.showPopUp && (
                  <PopUp
                    heading="Trends"
                    dispatchType="HIDE_POPUP"
                    children={
                      <div
                        style={{
                          display: showPopup.minimise ? "none" : "block",
                          maxHeight: "98vh",
                          overflowY: "auto",
                          overflowX: "hidden",
                          paddingBottom: "15px"
                        }}
                      >
                        {/* <FilterCard4 */}
                        <TrendFilterCard    // changed to TrendFilterCard for the layout and ui change wrt to plotly development by TRIDAI on 30-01-2026
                          showingInTrend={true}
                          data={{
                            label: showPopup.label,
                            plant: filterData.plant,
                            section: filterData.section,
                            tagname: filterData.selectedTagnames,
                            // interval: "1m",    
                            interval: "auto",      // TRIDAI (05-02) Chnaged to set auto as by default interval selection
                          }}
                        />
                        <Graph />
                      </div>
                    }
                  />
                )}

                {showPopup.showBalajiPopup && (
                  <PopUp
                    heading=""
                    dispatchType="HIDE_BALAJI_POPUP"
                    children={
                      <PopupChild
                        plantData={{ plant: "balaji", plantCode: "BJCW" }}
                      />
                    }
                  />
                )}
                {showPopup.showBaikunthPopup && (
                  <PopUp
                    heading=""
                    dispatchType="HIDE_BAIKUNTH_POPUP"
                    children={
                      <PopupChild
                        plantData={{ plant: "baikunth", plantCode: "BKCW" }}
                      />
                    }
                  />
                )}
                {showPopup.showMimicPopup && (
                  <PopUp
                    heading=""
                    dispatchType="HIDE_MIMIC_POPUP"
                    children={<MimicPopupChild />}
                  />
                )}
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
