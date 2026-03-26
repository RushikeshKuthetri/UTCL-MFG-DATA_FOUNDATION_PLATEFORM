// import "./Login.css";
// import logo from "../../img/logo.png";
// import { useSelector } from "react-redux";
// import { Alert, SignInButton, SignOutButton } from "../../components";
// import { useIsAuthenticated } from "@azure/msal-react";
// import { useEffect } from "react";
// import { MainDasboard } from "../index";
// export const Login = () => {
//   const { userStatus } = useSelector((state) => state);
//   const isAuthenticated = useIsAuthenticated();
//   useEffect(() => {
//     if (isAuthenticated) {
//       window.location.href = "/dashboard";
//     }
//   }, [isAuthenticated]);
//   return (
//     <>
//       {sessionStorage.getItem("SLOG") !== "SLOG" ? (
//         <div className="main-content mt-0 login">
//           <div className="container my-auto">
//             <div className="row">
//               <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-0">
//                 <div className="left">
//                   <img src={logo} alt="logo_at_login" />
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-0 card">
//                 <div className="right">
//                   {userStatus.error && <Alert errMsg={userStatus.error} />}
//                   <div>
//                     {isAuthenticated ? <SignOutButton /> : <SignInButton />}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };




// import "./Login.css";
import logo from "../../img/utclicon.png";
import bgImage from "../../img/bgImage.png";
import { useSelector } from "react-redux";
import { Alert, SignInButton, SignOutButton } from "../../components";
import { useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { MainDasboard } from "../index";
export const Login = () => {
  const { userStatus } = useSelector((state) => state);
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    if (isAuthenticated) {
      // window.location.href = "mimics/dashboard"; // Change this to the desired route after login to directs to mimics dashboard TRIDAI (22-02)
      window.location.href = "/dashboard"; // Change this to the desired route after login to directs to mimics dashboard TRIDAI (22-02)
    }
  }, [isAuthenticated]);
  return (
    <>
      {sessionStorage.getItem("SLOG") !== "SLOG" ? (
          <div
  className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center p-8">
                <img src={logo} alt="logo_at_login" className="max-w-[160px]" />
              </div>
              <div className="flex items-center justify-center p-10">
                <div className="w-full max-w-sm text-center">
                  {userStatus.error && <Alert errMsg={userStatus.error} />}
                  <div>
                    {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
