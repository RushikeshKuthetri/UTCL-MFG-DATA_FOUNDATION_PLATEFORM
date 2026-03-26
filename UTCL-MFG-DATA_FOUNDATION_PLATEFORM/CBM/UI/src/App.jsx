import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { PageLayout } from "./components/PageLayout";
import { Home } from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Login } from "./pages/Login";
import { TemplateFilter } from "./components/TemplateFilter";
import { TemplateList } from "./components/TemplateList";
import { EmailTemplate } from "./components/EmailTemplate";
import { EmailTemplateList } from "./components/EmailTemplateList";
import "./styles/App.scss";
import "./styles/App.css";
import { CycloneViewList } from "./components/CycloneViewList";
import { CycloneView } from "./components/CycloneView";
import { loginRequest } from "./authConfig"; 
import axios from "axios";
import { config } from "./config";
import useToken from "./utils/useToken";


export const App = ({ instance }) => {
  const activeAccount = instance.getActiveAccount();
  const navigate = useNavigate();
  const state = useLocation();
  const { accounts } = useMsal();
  const {token, setToken} = useToken()
//new api
const logout = () => {

  // navigate("/");
  // window.location.reload();
};
const callADX = async (token) => {
  const adResponse = await axios
    .post(
      `${config.BaseUrl}/users/adLoginBasic`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .catch((error) => {
      // console.log("eeeeeeeeeeeee")
      // toast.error(error?.response?.data?.error);
      logout();
    });


  if (adResponse === undefined) {
   
    
    let userToken = {
      token: "",
      UserName: "",
      UserID: "",
      Role: "",
      plants: "",
      modules: "",
    };
    
  } else {
    if (adResponse.data.data.Modules === undefined) {
      adResponse.data.data.Modules = [];
    }
    let modules = adResponse.data.data.Modules.map(({ Module }) => Module);

   let localSt =  {
      "isLogggedin": true,
      "token": adResponse.data.data.token,
      "username": adResponse.data.data.UserName,
      "email": adResponse.data.data.UserID,
      "plants":adResponse.data.data.Plants.map(({ Plant }) => Plant).sort(),
      "modules": modules,
      "Role": adResponse.data.data.Role,
  }
  setToken(localSt)
  if(!localStorage.getItem("login")){
    let loc1 = {...localSt}
    delete loc1.Role
    // console.log(loc1,"llllllllll")
    localStorage.setItem("login",JSON.stringify(loc1))
  }
    }
  // }
 

  // if (JSON.parse(getFromLocalStorage("login"))?.plants?.length === 0) {
  //   if (adResponse?.data?.data?.Role === "admin") {
  //     let userToken = {
  //       token: adResponse.data.data.token,
  //       UserName: adResponse.data.data.UserName,
  //       UserID: adResponse.data.data.UserID,
  //     };

  //     if (!adminToken) {
  //       setToken(userToken);
  //     }
  //   }
  //   navigate("/dashboard");
  //   return;
  // } else {
  //   navigate(state?.pathname);
  // }
};
const RequestAccessToken = () => {
  const request = {
    ...loginRequest,
    account: accounts[0],
  };
  instance
    .acquireTokenSilent(request)
    .then((response) => {
  
      // setAccessToken(response.accessToken);
      callADX(response.accessToken);
    })
    .catch((e) => {
      console.log("eeeeeeeeeeeee", e)

      // toast.error("Login Failed Please Try Again !!");
      
      logout();
    });
};
///end new api













  useEffect(() => {
    setTimeout(() => {
      if (!!!activeAccount) {
        navigate("/login");
      } else {
        RequestAccessToken()
        navigate(state?.pathname);
      }
    }, 200);
  }, []);
  return (
    <MsalProvider instance={instance}>
      <div className="font-sans">
      <PageLayout>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createTemplate" element={<TemplateFilter />} />
          <Route exact path="/editTemplate" element={<TemplateFilter />} />
          <Route exact path="/templates" element={<TemplateList />} />
          <Route exact path="/EmailTemplate" element={<EmailTemplate />} />
          <Route exact path="/editEmailTemplate" element={<EmailTemplate />} />
          <Route path="/EmailTemplateList" element={<EmailTemplateList />} />
          <Route path="/cyclonelist" element={<CycloneViewList />} />
          <Route path="/cycloneview" element={<CycloneView />} />
        </Routes>
      </PageLayout>
      <ToastContainer />
        </div>
    </MsalProvider>
  );
};
