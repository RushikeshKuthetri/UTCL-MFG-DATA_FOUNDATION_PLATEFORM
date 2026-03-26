import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import LOGO from "../components/assets/logo.png";
import "../styles/login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLoginPopup = () => {
    instance
      .loginPopup({
        ...loginRequest,
        redirectUri: "/",
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setTimeout(() => {
      if (!!activeAccount) {
        sessionStorage.setItem("accountDetails", JSON.stringify(activeAccount));
        navigate("/");
      }
    }, 300);
  }, [activeAccount]);
  return (
    <>
      {!!!activeAccount && (
        <div className="main-content mt-0 login">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6 p-0">
                <div className="left">
                  <img src={LOGO} alt="logo_at_login" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6 card">
                <button
                  className="btn btn-1 w-100 my-4 mb-2"
                  onClick={handleLoginRedirect}
                >
                  Sign in using Microsoft
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
