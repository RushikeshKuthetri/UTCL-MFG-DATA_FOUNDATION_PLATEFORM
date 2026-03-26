import "./Login.css";
import logo from "../../img/logo.png";
import { useSelector } from "react-redux";
import { Alert, SignInButton, SignOutButton } from "../../components";
import { useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { Home } from "../index";
export const Login = () => {
  const { userStatus } = useSelector((state) => state);
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }, [isAuthenticated]);
  return (
    <>
      {sessionStorage.getItem("SLOG") !== "SLOG" ? (
        <div className="main-content mt-0 login">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-0">
                <div className="left">
                  <img src={logo} alt="logo_at_login" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 card">
                {userStatus.error && <Alert errMsg={userStatus.error} />}
                <div className="right">
                  {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="div-timeout">
            {setTimeout(() => {
              return <Home />;
            }, 50)}
          </div>
        </>
      )}
    </>
  );
};
