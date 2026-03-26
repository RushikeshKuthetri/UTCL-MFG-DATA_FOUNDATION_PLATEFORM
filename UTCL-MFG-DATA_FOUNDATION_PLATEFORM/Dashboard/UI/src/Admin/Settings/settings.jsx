// import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/navbar";
// import { useNavigate } from "react-router-dom";
// import useToken from "../UseToken/useToken";
// import axios from "axios";
// import InvalidToken from "../InvalidToken";
// import { toast, ToastContainer } from "react-toastify";
// // import Navbar from '../Navbar/navbar';
// import Loader from "react-js-loader";
// import { accessLogApi } from "../../utils/accessLogApi";

// const Settings = () => {
//   const { token, setToken } = useToken();
//   const initialValue = {
//     DateDifference: 0,
//     DefaultInterval: 0,
//     MinDefaultExportSize: 0,
//   };
//   const loader = (
//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={50}
//     />
//   );

//   const [formValues, setFormValues] = useState(initialValue);
//   const [formError, setFormError] = useState({});
//   const [submitLoader, setSubmitLoader] = useState(false);
//   const [apiError, setApiError] = useState("");
//   const navigate = useNavigate();
//   // useEffect(() => {
//   //   if (!sessionStorage.getItem("token")) {
//   //     window.location.reload(true);
//   //     navigate("/");
//   //   }
//   // }, []);
//   const validate = () => {
//     let error = {};
//     if (formValues.DateDifference === "") {
//       error.DateDifference = "Please Enter Date Difference";
//     } else if (
//       formValues.DateDifference <= 0 ||
//       formValues.DateDifference > 24
//     ) {
//       error.DateDifference = "Please Enter value between 1 to 23";
//     }
//     if (formValues.DefaultInterval === "") {
//       error.DefaultInterval = "Please Enter Default Interval";
//     } else if (
//       formValues.DefaultInterval <= 0 ||
//       formValues.DefaultInterval > 60
//     ) {
//       error.DefaultInterval = "Please Enter value between 1 to 59";
//     }
//     if (formValues.MinDefaultExportSize === "") {
//       error.MinDefaultExportSize = "Please Enter  Min Default Export Size";
//     } else if (
//       formValues.MinDefaultExportSize <= 0 ||
//       formValues.MinDefaultExportSize > 31
//     ) {
//       error.MinDefaultExportSize = "Please Enter value between 1 to 30";
//     }
//     return error;
//   };
//   const getDefaultvalues = async () => {
//     const data = {
//       adminid: token.UserID,
//     };
//     try {
//       await axios
//         .post(process.env.REACT_APP_BASE_URL + "admin/uiDetails", data, {
//           headers: { Authorization: `Bearer ${token.token}` },
//         })
//         .then((res) => {
//           // console.log(res?.data?.data, "ress");
//           setFormValues(res?.data?.data);
//         })
//         .catch((err) => {
//           // console.log(err, "err");
//         });
//     } catch (error) {
//       // console.log(error.response);
//       if (InvalidToken(error)) {
//         navigate("/admin");
//       }
//     }
//   };
//   useEffect(() => {
//     accessLogDashboard();
//   }, []);
//   useEffect(() => {
//     getDefaultvalues();
//   }, []);

//   const accessLogDashboard=()=>{
//     let payload = {
//       userId: token.UserID,
//       ip: "",
//       module: "-",
//       plant: "-",
//       url: window.location.href,
//       options: "",
//       plant_or_section: "Admin",
//     };
//     accessLogApi(payload,token.token)
//   }

//   const dateObj = (e) => {};

//   const handleChange = (e) => {
//     // console.log(e.target.value, e.target.name);
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     let tempError = formError;
//     delete tempError[name];
//     setFormError(tempError);
//     setApiError("");
//     // console.log(formValues, "cal");
//   };

//   const submitSetting = () => {
//     setApiError("");
//     setFormError(validate());
//     if (Object.keys(validate()).length !== 0) {
//       return;
//     }
//     const data = {
//       adminid: token.UserID,
//       ...formValues,
//     };
//     // console.log(data);
//     setSubmitLoader(true);
//     axios
//       .post(process.env.REACT_APP_BASE_URL + "admin/updateUiDetails", data, {
//         headers: { Authorization: `Bearer ${token.token}` },
//       })
//       .then((res) => {
//         // eslint-disable-next-line react-hooks/rules-of-hooks

//         if (res.data.code === 200) {
//           // setTimeout(() => {
//           setSubmitLoader(false);
//           getDefaultvalues();
//           setFormValues(initialValue);
//           setFormError({});
//           toast.success("Settings Updated Successfully.");
//           // }, 2000);
//         }
//       })
//       .catch((error) => {
//         if (InvalidToken(error)) {
//           toast.error("token Expired login Again.");
//           navigate("/admin");
//         }
//         setSubmitLoader(false);
//         setApiError(error?.response?.data?.error);
//         console.log(error.message);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="dash-top">
//         <div className="settingContainer">
//           <div className="labelContainer">
//             <label>Date Difference in Hours</label>
//             <div>
//               <input
//                 name="DateDifference"
//                 placeholder="Enter Date Difference"
//                 type="number"
//                 max={24}
//                 min={1}
//                 onChange={(e) => handleChange(e)}
//                 value={formValues.DateDifference}
//                 className="form-control"
//               />
//               {formError.DateDifference && (
//                 <div className="error">{formError.DateDifference}</div>
//               )}
//             </div>
//           </div>
//           <div className="labelContainer">
//             <label>Default Interval in Minutes</label>
//             <div>
//               <input
//                 name="DefaultInterval"
//                 placeholder="Enter Default Interval"
//                 type="number"
//                 onChange={(e) => handleChange(e)}
//                 value={formValues.DefaultInterval}
//                 className="form-control"
//               />
//               {formError.DefaultInterval && (
//                 <div className="error">{formError.DefaultInterval}</div>
//               )}
//             </div>
//           </div>
//           <div className="labelContainer">
//             <label>Min Default Export Size</label>
//             <div>
//               <input
//                 name="MinDefaultExportSize"
//                 placeholder="Enter Min Default Export Size"
//                 type="number"
//                 onChange={(e) => handleChange(e)}
//                 value={formValues.MinDefaultExportSize}
//                 className={false ? "form-control inputError" : "form-control"}
//               />
//               {formError.MinDefaultExportSize && (
//                 <div className="error">{formError.MinDefaultExportSize}</div>
//               )}
//             </div>
//           </div>
//           <ToastContainer />
//           <div>
//             {submitLoader && loader}
//             <button
//               className="btn btn-primary mt-2"
//               disabled={submitLoader}
//               onClick={submitSetting}
//             >
//               Submit
//             </button>
//           </div>
//           {apiError !== "" && <div className="error">{apiError}</div>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Settings;







import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import useToken from "../UseToken/useToken";
import axios from "axios";
import InvalidToken from "../InvalidToken";
import { toast, ToastContainer } from "react-toastify";
// import Navbar from '../Navbar/navbar';
import Loader from "react-js-loader";
import { accessLogApi } from "../../utils/accessLogApi";

const Settings = () => {
  const { token, setToken } = useToken();
  const initialValue = {
    DateDifference: 0,
    DefaultInterval: 0,
    MinDefaultExportSize: 0,
  };
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={50}
    />
  );

  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [submitLoader, setSubmitLoader] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!sessionStorage.getItem("token")) {
  //     window.location.reload(true);
  //     navigate("/");
  //   }
  // }, []);
  const validate = () => {
    let error = {};
    if (formValues.DateDifference === "") {
      error.DateDifference = "Please Enter Date Difference";
    } else if (
      formValues.DateDifference <= 0 ||
      formValues.DateDifference > 24
    ) {
      error.DateDifference = "Please Enter value between 1 to 23";
    }
    if (formValues.DefaultInterval === "") {
      error.DefaultInterval = "Please Enter Default Interval";
    } else if (
      formValues.DefaultInterval <= 0 ||
      formValues.DefaultInterval > 60
    ) {
      error.DefaultInterval = "Please Enter value between 1 to 59";
    }
    if (formValues.MinDefaultExportSize === "") {
      error.MinDefaultExportSize = "Please Enter  Min Default Export Size";
    } else if (
      formValues.MinDefaultExportSize <= 0 ||
      formValues.MinDefaultExportSize > 31
    ) {
      error.MinDefaultExportSize = "Please Enter value between 1 to 30";
    }
    return error;
  };
  const getDefaultvalues = async () => {
    const data = {
      adminid: token.UserID,
    };
    try {
      await axios
        .post(process.env.REACT_APP_BASE_URL + "admin/uiDetails", data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // console.log(res?.data?.data, "ress");
          setFormValues(res?.data?.data);
        })
        .catch((err) => {
          // console.log(err, "err");
        });
    } catch (error) {
      // console.log(error.response);
      if (InvalidToken(error)) {
        navigate("/admin");
      }
    }
  };
  useEffect(() => {
    accessLogDashboard();
  }, []);
  useEffect(() => {
    getDefaultvalues();
  }, []);

  const accessLogDashboard = () => {
    let payload = {
      userId: token.UserID,
      ip: "",
      module: "-",
      plant: "-",
      url: window.location.href,
      options: "",
      plant_or_section: "Admin",
    };
    accessLogApi(payload, token.token)
  }

  const dateObj = (e) => { };

  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    let tempError = formError;
    delete tempError[name];
    setFormError(tempError);
    setApiError("");
    // console.log(formValues, "cal");
  };

  const submitSetting = () => {
    setApiError("");
    setFormError(validate());
    if (Object.keys(validate()).length !== 0) {
      return;
    }
    const data = {
      adminid: token.UserID,
      ...formValues,
    };
    // console.log(data);
    setSubmitLoader(true);
    axios
      .post(process.env.REACT_APP_BASE_URL + "admin/updateUiDetails", data, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks

        if (res.data.code === 200) {
          // setTimeout(() => {
          setSubmitLoader(false);
          getDefaultvalues();
          setFormValues(initialValue);
          setFormError({});
          toast.success("Settings Updated Successfully.");
          // }, 2000);
        }
      })
      .catch((error) => {
        if (InvalidToken(error)) {
          toast.error("token Expired login Again.");
          navigate("/admin");
        }
        setSubmitLoader(false);
        setApiError(error?.response?.data?.error);
        console.log(error.message);
      });
  };

  return (
    <>
       <div className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 -ml-0.5">
        <span>Settings</span>
      </div>

      <div className="w-full flex flex-col gap-2 rounded-xl border border-[var(--form-border)] py-1 px-2 mt-1">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

    {/* Date Difference */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-[var(--text-color)]">Date Difference in Hours</label>
      <input
        name="DateDifference"
        placeholder="Enter Date Difference"
        type="number"
        max={24}
        min={1}
        onChange={handleChange}
        value={formValues.DateDifference}
        className={`w-full px-3 py-1 rounded-md border bg-[var(--input-enable-bg)] text-[var(--text-color)]
        focus:outline-none focus:ring-2 focus:ring-[#767575] placeholder:text-sm
        ${formError?.DateDifference ? "border-red-500" : "border-[var(--input-enable-border)]"}`}
      />
      {formError.DateDifference && <div className="text-red-500 text-sm">{formError.DateDifference}</div>}
    </div>

    {/* Default Interval */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-[var(--text-color)]">Default Interval in Minutes</label>
      <input
        name="DefaultInterval"
        placeholder="Enter Default Interval"
        type="number"
        onChange={handleChange}
        value={formValues.DefaultInterval}
        className={`w-full px-3 py-1 rounded-md border bg-[var(--input-enable-bg)] text-[var(--text-color)]
        focus:outline-none focus:ring-2 focus:ring-[#767575] placeholder:text-sm
        ${formError?.DefaultInterval ? "border-red-500" : "border-[var(--input-enable-border)]"}`}
      />
      {formError.DefaultInterval && <div className="text-red-500 text-sm">{formError.DefaultInterval}</div>}
    </div>

    {/* Min Default Export Size */}
    <div className="flex flex-col gap-1">
      <label className="text-sm text-[var(--text-color)]">Min Default Export Size</label>
      <input
        name="MinDefaultExportSize"
        placeholder="Enter Min Default Export Size"
        type="number"
        onChange={handleChange}
        value={formValues.MinDefaultExportSize}
        className={`w-full px-3 py-1 rounded-md border bg-[var(--input-enable-bg)] text-[var(--text-color)]
        focus:outline-none focus:ring-2 focus:ring-[#767575] placeholder:text-sm
        ${formError?.MinDefaultExportSize ? "border-red-500" : "border-[var(--input-enable-border)]"}`}
      />
      {formError.MinDefaultExportSize && <div className="text-red-500 text-sm">{formError.MinDefaultExportSize}</div>}
    </div>

  </div>

  <ToastContainer />

  {/* Submit Button */}
  <div className="flex w-full justify-center mb-2">
    {submitLoader && loader}
    <button
      className="px-6 py-1 rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)]
      hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200
      disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed active:scale-95"
      disabled={submitLoader}
      onClick={submitSetting}
    >
      Submit
    </button>
  </div>

  {apiError && <div className="text-red-500 text-sm text-center mt-2">{apiError}</div>}

</div>
    </>
  );
};

export default Settings;
