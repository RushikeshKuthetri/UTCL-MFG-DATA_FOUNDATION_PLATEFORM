// import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";

// import { NavigationBar } from "./NavigationBar";
// import React from "react";
// export const PageLayout = (props) => {
//   const { instance } = useMsal();
//   const activeAccount = instance.getActiveAccount();

//   return (
//     <>
//       {activeAccount && <NavigationBar />}

//       {props.children}

//       <AuthenticatedTemplate>
//         {/* <footer>
//           <center>
//             How did we do?
//             <a
//               href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu"
//               target="_blank"
//             >
//               {" "}
//               Share your experience!
//             </a>
//           </center>
//         </footer> */}
//       </AuthenticatedTemplate>
//     </>
//   );
// };



import { useMsal } from "@azure/msal-react";
import React, { useState, useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import LeftDrawer from "./LeftDrawer";
import Footer from "./Footer/Footer";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import { Search } from "lucide-react";

export const PageLayout = (props) => {
  const { instance } = useMsal();
  // const activeAccount = instance.getActiveAccount();

  const [drawerOpen, setDrawerOpen] = useState(false); // mobile
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("collapsed") === "true"
  );

  const { accounts } = useMsal();
const activeAccount = accounts[0];

useEffect(() => {
  if (activeAccount) {
    sessionStorage.setItem(
      "accountDetails",
      JSON.stringify(activeAccount)
    );
  }
}, [activeAccount]);

  // Persist collapse state
  useEffect(() => {
    localStorage.setItem("collapsed", collapsed);
  }, [collapsed]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--bg-color)]">

      {/* HEADER */}
      {activeAccount && (
        <header className="shrink-0">
          <NavigationBar />
        </header>
      )}

      {/* BODY */}
      <div className="flex flex-1 min-h-0 overflow-hidden mt-1">

        {/* SIDEBAR */}
        {activeAccount && (
          <LeftDrawer
            open={drawerOpen}
            setOpen={setDrawerOpen}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        )}

        {/* CONTENT AREA */}
        <div
          className={`
    flex-1 min-h-0 min-w-0 flex flex-col overflow-hidden
    transition-all duration-300 
    ${collapsed ? "lg:ml-20" : "lg:ml-60"}
    px-3
  `}
        >
          
         <div className=" flex items-center justify-between">
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
          <main className=" h-[80vh] w-full custom-scrollbar flex flex-col bg-[var(--bg-main-container)] rounded-2xl shadow-left-drawer-light dark:shadow-left-drawer-dark mt-1">
            {/* SCROLLABLE CONTAINER */}
            <div
              className={`
              flex-1 min-h-0 overflow-y-auto scroll-smooth
              mt-2 sm:mt-3 md:mt-4
              px-3 sm:px-4 md:px-5 lg:px-4 lg:pt-2 lg:pb-4
              pt-2 sm:pt-3
              pb-3 sm:pb-4 md:pb-5
              rounded-xl sm:rounded-2xl
              bg-[var(--bg-main-container)]
              shadow-[var(--left-drawer-shadow)]
              transition-all duration-300
              w-full mx-auto
            `}
            >
              {props.children}
            </div>

          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};