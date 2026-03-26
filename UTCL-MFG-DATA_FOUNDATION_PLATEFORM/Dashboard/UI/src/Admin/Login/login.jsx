import React from "react";
import { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import useToken from "../UseToken/useToken";
import Header from "../Header/header";
import LOGIN from "../../img/login-page-image.jpg";
import axios from "axios";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(true);
  const inputRef = useRef(null);
  const { token, setToken } = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setShow(false);
      return;
    }
    setPasswordType("password");
  };

  const handleLogin = async () => {
    // e.preventDefault();
    const data = {
      userid,
      password,
    };
    try {
      await axios
        .post(process.env.REACT_APP_BASE_URL + "users/loginAdmin", data, {
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          setToken(res.data.data);
          navigate("/admin/Dashboard");
          dispatch({
            type: "ADMIN_LOGIN_SUCCESS",
            payload: {
              adminEmail: res.data.data.UserID,
              adminToken: res.data.data.token,
            },
          });
          console.debug(res, { UserID: "admin@ultratech.com" }, "token");
        });
    } catch (error) {
      // console.log(error.response);
      setErrorMessage("Invalid Credential ! Login Failed !");
    }
  };

  return (
    <>
      {token?.token !== undefined && <Navigate to="/admin/dashboard" />}
      <Header />
      <div className="main">
        <div className="login__container">
          <div className="login__image">
            <img src={LOGIN} alt="login page image" />
          </div>
          <div className="login__content">
            <div className="login_form">
              {errorMessage !== "" && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "600",
                    textAlign: "center",
                    marginBottom: "20px",
                    border: "1px solid red",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  {errorMessage}
                </div>
              )}
              <h3>Login to Admin Account</h3>
              <div className="form-group mt-4">
                <label className="mb-3">Email</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your email ID"
                  value={userid}
                  onChange={(e) => {
                    setUserid(e.target.value);
                    setErrorMessage("");
                  }}
                  ref={inputRef}
                />
              </div>
              <div className="form-group mt-4">
                <label className="mb-3">Password</label>
                <input
                  placeholder="Enter your password"
                  type={passwordType}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMessage("");
                  }}
                  value={password}
                  className="form-control"
                />
                <span onClick={() => setShow(!show)}>
                  {show ? (
                    <BsFillEyeSlashFill
                      className="password__eye"
                      onClick={togglePassword}
                    />
                  ) : (
                    <BsFillEyeFill
                      className="password__eye"
                      onClick={togglePassword}
                    />
                  )}
                </span>
              </div>

              <button className="login__button" onClick={handleLogin}>
                Login
              </button>

              {/* <div className="mt-5 d-flex">
                {" "}
                <a href="" className="forget__password mx-auto">
                  Forget Password?
                </a>
              </div> */}
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
