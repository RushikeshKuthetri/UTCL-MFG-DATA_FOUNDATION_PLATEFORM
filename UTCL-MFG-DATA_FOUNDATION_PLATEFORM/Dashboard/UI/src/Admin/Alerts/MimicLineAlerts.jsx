// import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/navbar";
// import { useNavigate } from "react-router-dom";
// import useToken from "../UseToken/useToken";
// import axios from "axios";
// import InvalidToken from "../InvalidToken";
// import { Form } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";
// // import Navbar from '../Navbar/navbar';
// import Loader from "react-js-loader";
// import Select, { components } from "react-select";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import { accessLogApi } from "../../utils/accessLogApi";

// const MimicLineAlerts = () => {
//   //use Effects
//   useEffect(() => {
//     accessLogDashboard();
//   }, []);
//   useEffect(() => {
//     getDropDown();
//     getMimiclineAlerts();
//   }, []);

//   // states and hooks
//   const { token, setToken } = useToken();
//   const navigate = useNavigate();
//   const [apiError, setApiError] = useState("");
//   const [cardAddError, setCardAddError] = useState("");
//   const [submitLoader, setSubmitLoader] = useState(false);
//   const [allFilterData, setAllFilterData] = useState(false);
//   const [plantOptionList, setPlantOptionList] = useState([]);
//   const [millOptionList, setMillOptionList] = useState([]);
//   const [gradeOptionList, setGradeOptionList] = useState([]);
//   const [selectedVlaues, setSelectedVlaues] = useState({
//     plant: "",
//     line: "",
//     section: "",
//   });

//   const [cardValues, setCardValues] = useState({});

//   // useEffect(() => {
//   //   if (!sessionStorage.getItem("token")) {
//   //     window.location.reload(true);
//   //     navigate("/");
//   //   }
//   // }, []);

//   // consts
//   const loader = (
//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={50}
//     />
//   );

//   const accessLogDashboard = () => {
//     let payload = {
//       userId: token.UserID,
//       ip: "",
//       module: "-",
//       plant: "-",
//       url: window.location.href,
//       options: "",
//       plant_or_section: "Admin",
//     };
//     accessLogApi(payload, token.token);
//   };

//   const activeStatusOptions = [
//     { label: "Active", value: true },
//     { label: "Inactive", value: false },
//   ];
//   const InitialSelectValues = {
//     plant: {
//       label: "",
//       value: "",
//     },
//     grade: {
//       label: "",
//       value: "",
//     },
//     mill: {
//       label: "",
//       value: "",
//     },
//   };

//   // handellers

//   const handleChangeSelect = (val, name) => {
//     let tempSelectedValue = { ...selectedVlaues };
//     if (name === "plant") {
//       if (!val) {
//         tempSelectedValue.line = "";
//         tempSelectedValue.plant = "";
//         tempSelectedValue.section = "";
//         setMillOptionList([]);
//         setGradeOptionList([]);
//         setSelectedVlaues(tempSelectedValue);
//         return;
//       }
//       if (val.value === tempSelectedValue.plant) {
//         return;
//       }
//       let tempOpionList = {};
//       allFilterData.map((v) => {
//         if (v.Plant === val.value) {
//           tempOpionList[v.Line] = {
//             label: v.Line,
//             value: v.Line,
//           };
//         }
//       });
//       if (Object.values(tempOpionList).length > 1) {
//         tempOpionList["All"] = {
//           value: "All",
//           label: "All",
//         };
//       }
//       setMillOptionList(Object.values(tempOpionList));
//       tempSelectedValue.line = "";
//       // console.log(tempOpionList, "tempOpionList")
//     }

//     if (name === "line") {
//       if (!val) {
//         tempSelectedValue.line = "";
//         tempSelectedValue.section = "";
//         setGradeOptionList([]);
//         setSelectedVlaues(tempSelectedValue);
//         return;
//       }
//       if (val.value === tempSelectedValue.line) {
//         return;
//       }
//       let tempOpionList = {};
//       allFilterData.map((v) => {
//         if (
//           (v.Line === val.value && v.Plant === selectedVlaues.plant) ||
//           (v.Plant === selectedVlaues.plant && val.value === "All")
//         ) {
//           tempOpionList[v.Section] = {
//             label: v.Section,
//             value: v.Section,
//           };
//         }
//       });
//       if (Object.values(tempOpionList).length > 1) {
//         tempOpionList["All"] = {
//           value: "All",
//           label: "All",
//         };
//       }
//       setGradeOptionList(Object.values(tempOpionList));
//       tempSelectedValue.section = "";
//     }

//     if (name === "section") {
//       if (!val) {
//         tempSelectedValue.section = "";
//         setSelectedVlaues(tempSelectedValue);
//         return;
//       }
//       if (val.value === tempSelectedValue.section) {
//         return;
//       }
//     }
//     // console.log(tempSelectedValue, "tempSelectedValue")
//     tempSelectedValue[name] = val.value;
//     setSelectedVlaues(tempSelectedValue);
//     setCardAddError("");
//   };

//   const handleAddCard = () => {
//     let tempCardValues = { ...cardValues };
//     let tempSelectedValue = { ...selectedVlaues };
//     if (
//       selectedVlaues.plant === "" ||
//       selectedVlaues.line === "" ||
//       selectedVlaues.section === ""
//     ) {
//       setCardAddError("emptyValueError");
//       // console.log("emptyValueError")
//       return;
//     }

//     let cardKey =
//       selectedVlaues.plant +
//       "-" +
//       selectedVlaues.line +
//       "-" +
//       selectedVlaues.section;

//     if (!tempCardValues[cardKey]) {
//       tempCardValues[cardKey] = {
//         plant: selectedVlaues.plant,
//         line: selectedVlaues.line,
//         section: selectedVlaues.section,
//         timeInterval: "",
//         isActive: false,
//         isChanged: false,
//         submitLoader: false,
//         reciepients: [],
//         recipientInput: "",
//         recipientError: "",
//       };
//       tempSelectedValue.plant = "";
//       tempSelectedValue.line = "";
//       tempSelectedValue.section = "";
//       setSelectedVlaues(tempSelectedValue);
//     } else {
//       // console.log("card Already exists")
//       setCardAddError("card Already exists");
//     }

//     setCardValues(tempCardValues);
//   };

//   // api calls
//   const getDropDown = async () => {
//     const data = {
//       plant: "",
//     };
//     let postUrl =
//       process.env.REACT_APP_BASE_URL + "adminSuper/getMimicLineMasterDropDown";
//     // if (token.Role === "super_admin") {
//     //   data.superAdminid = token.UserID;
//     //   delete data.adminid;
//     //   postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/plantDetails";
//     // }
//     try {
//       await axios
//         .post(postUrl, data, {
//           headers: { Authorization: `Bearer ${token.token}` },
//         })
//         .then((res) => {
//           // console.log(res?.data?.result);
//           let tempPlatList = {};
//           res?.data?.result?.map((val) => {
//             tempPlatList[val.Plant] = {
//               label: val.Plant,
//               value: val.Plant,
//             };
//           });
//           setAllFilterData(res?.data?.result);
//           setPlantOptionList(Object.values(tempPlatList));
//         });
//     } catch (error) {
//       // console.log(error.response);
//       if (InvalidToken(error)) {
//         toast.error("token Expired login Again.");
//         navigate("/admin");
//       } else {
//         setApiError(error?.response?.data?.error);
//         toast.error(error.message);
//         console.log(error.message);
//       }
//     }
//   };
//   const setMimicLineAlertData = (data) => {
//     let tempCardValues = { ...cardValues };
//     // console.log(cardValues,"oldCard")
//     let newTempCardValues = {};
//     // console.log("data",data)
//     data.map((val) => {
//       let cardKey = val.Plant_Name + "-" + val.Line + "-" + val.Section;

//       if (!tempCardValues[cardKey]) {
//         newTempCardValues[cardKey] = {
//           plant: val.Plant_Name,
//           line: val.Line,
//           section: val.Section,
//           timeInterval: val.Interval.split("m")[0],
//           isActive: val.IsActive,
//           isChanged: false,
//           submitLoader: false,
//           reciepients:
//             val.Recipient === ""
//               ? []
//               : val.Recipient.replaceAll("'", "").split(";"),

//           recipientInput: "",
//           recipientError: "",
//           Id: val?.Id,
//         };
//       } else {
//         newTempCardValues[cardKey] = tempCardValues[cardKey];
//         newTempCardValues[cardKey].isChanged = false;
//         newTempCardValues[cardKey].Id = val?.Id;
//         //  newTempCardValues[cardKey].dateTime=val?.created_date
//       }
//     });
//     // console.log(newTempCardValues, "newCardValues");
//     setCardValues(newTempCardValues);
//     // setPlantCardValues(newTempCardValues);
//     // setSelectedPlantVlaues(Object.values(tempPlantValues).sort());
//   };
//   const getMimiclineAlerts = async () => {
//     // return
//     const data = {
//       superAdminid: token.UserID,
//     };
//     try {
//       await axios
//         .post(
//           process.env.REACT_APP_BASE_URL + "adminSuper/getMimicLineAlert",
//           data,
//           {
//             headers: { Authorization: `Bearer ${token.token}` },
//           }
//         )
//         .then((res) => {
//           // console.log(res?.data?.result, "ress");
//           if (res?.data?.result[0]?.result !== "No Record Found") {
//             // console.log("getting Data")
//             setMimicLineAlertData(res?.data?.result);
//           } else {
//             setCardValues({});
//           }
//         })
//         .catch((err) => {
//           console.log(err, "err");
//         });
//     } catch (error) {
//       // console.log(error.response);
//       if (InvalidToken(error)) {
//         toast.error("token Expired login Again.");
//         navigate("/admin");
//       } else {
//         setApiError(error?.response?.data?.error);
//         toast.error(error.message);
//         console.log(error.message);
//       }
//     }
//   };

//   const submitMimicLineAlert = (val) => {
//     // console.log(cardValues[val])
//     setApiError("");
//     // setFormError(validate());
//     // if (Object.keys(validate()).length !== 0) {
//     //   return;
//     // }
//     if (
//       cardValues[val].timeInterval === "" ||
//       cardValues[val].timeInterval <= 0
//     ) {
//       toast.error("Time Interval invalid for " + val + " Plant");
//       return;
//     }
//     let toastText = val;
//     let payload = {
//       plant: cardValues[val].plant,
//       line: cardValues[val].line,
//       section: cardValues[val].section,
//       superAdminid: token.UserID,
//       isActive: cardValues[val].isActive,
//       recipient: cardValues[val].reciepients.join(";"),
//       interval: cardValues[val].timeInterval + "m",
//     };
//     // console.log(payload, "pay");

//     let postUrl =
//       process.env.REACT_APP_BASE_URL + "adminSuper/insertMimicLineAlert";
//     if (cardValues[val].Id) {
//       postUrl =
//         process.env.REACT_APP_BASE_URL + "adminSuper/updateMimicLineAlert";
//       payload = {
//         alertId: cardValues[val].Id,
//         plant: cardValues[val].plant,
//         line: cardValues[val].line,
//         section: cardValues[val].section,
//         superAdminid: token.UserID,
//         isActive: cardValues[val].isActive,
//         recipient: cardValues[val].reciepients.join(";"),
//         interval: cardValues[val].timeInterval + "m",
//       };

//       toastText = val.split("-");
//       toastText.pop();
//       toastText = toastText.join("-");
//     }

//     axios
//       .post(postUrl, payload, {
//         headers: { Authorization: `Bearer ${token.token}` },
//       })
//       .then((res) => {
//         // console.log(res, "ressspooms")
//         if (res.status === 200) {
//           toast.success("Alert Updated Successfully for " + toastText);
//           getMimiclineAlerts();
//         }
//       })
//       .catch((error) => {
//         if (InvalidToken(error)) {
//           toast.error("token Expired login Again.");
//           navigate("/admin");
//         } else {
//           setApiError(error?.response?.data?.error);
//           toast.error(error.message);
//           console.log(error.message);
//         }
//         // setSubmitLoader(false);
//       });
//   };
//   const deleteMimicLineAlert = (val) => {
//     const deleteAlert=async()=>{
//       setApiError("");
//       let toastText = val;
//       const payload = {
//         alertId: cardValues[val]?.Id,
//       };
//       toastText = val.split("-");
//       toastText.pop();
//       toastText = toastText.join("-");

//       await axios
//         .post(
//           process.env.REACT_APP_BASE_URL + "adminSuper/deleteMimicLineAlert",
//           payload,
//           {
//             headers: { Authorization: `Bearer ${token.token}` },
//           }
//         )
//         .then((res) => {
//           if (res.status === 200) {
//             toast.success("Alert Deleted Successfully for " + toastText);
//             getMimiclineAlerts();
//           }
//         })
//         .catch((error) => {
//           if (InvalidToken(error)) {
//             toast.error("token Expired login Again.");
//             navigate("/admin");
//           } else {
//             setApiError(error?.response?.data?.error);
//             toast.error(error.message);
//             console.log(error.message);
//           }
//           setSubmitLoader(false);
//         });
//     }
//       confirmAlert({
//         title: "Confirm to Delete Alert",
//         message: "Are you sure, you want to delete this alert.",
//         buttons: [
//           {
//             label: "Yes",
//             onClick: () => deleteAlert(),
//           },
//           {
//             label: "No",
//             onClick: () => {},
//           },
//         ],
//       });
//   };

//   // rendercomponet parts

//   const recepientCard = (val) => {
//     // console.log(val, cardValues[val])
//     return (
//       <div
//         className="recepientContainer "
//         style={{ flex: "0 0 40%", padding: "5px" }}
//       >
//         <label className="mb-2">
//           Recipients <span className="text-danger"></span> :
//         </label>
//         <div
//           className="d-felx felx-direction-row "
//           style={{ maxHeight: "60px", overflowY: "scroll" }}
//         >
//           {cardValues[val].reciepients.map((item) => (
//             <div className="tag-item" key={item}>
//               {item}
//               <button
//                 type="button"
//                 className="button"
//                 onClick={() => {
//                   let tempCardValues = { ...cardValues };
//                   tempCardValues[val].reciepients = tempCardValues[
//                     val
//                   ].reciepients.filter((i) => i !== item);
//                   tempCardValues[val].isChanged = true;
//                   setCardValues(tempCardValues);
//                 }}
//               >
//                 &times;
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="d-flex justify-content-between align-items-center">
//           <input
//             className={
//               "form-control " +
//               (cardValues[val].recipientInput !== "" &&
//               cardValues[val].recipientError !== ""
//                 ? "error"
//                 : "")
//             }
//             value={cardValues[val].recipientInput}
//             placeholder="Type email addresses and press `Enter`"
//             onKeyDown={(event) => {
//               let tempCardValues = { ...cardValues };

//               if (["Enter", "Tab", ","].includes(event.key)) {
//                 event.preventDefault();

//                 var value = cardValues[val].recipientInput.trim();
//                 if (!/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(value)) {
//                   tempCardValues[val].recipientError = "Invalid Email";
//                 } else {
//                   if (tempCardValues[val].reciepients.includes(value)) {
//                     tempCardValues[val].recipientError = "Already in List";
//                   } else {
//                     tempCardValues[val].reciepients.push(value);
//                     tempCardValues[val].recipientInput = "";
//                   }
//                 }
//               }
//               tempCardValues[val].isChanged = true;
//               setCardValues(tempCardValues);
//             }}
//             onChange={(event) => {
//               let tempCardValues = { ...cardValues };
//               // console.log(event.target.value)
//               tempCardValues[val].recipientInput = event.target.value;
//               tempCardValues[val].recipientError = "";
//               setCardValues(tempCardValues);
//             }}
//           />
//           {cardValues[val].recipientError !== "" &&
//             cardValues[val].recipientInput !== "" && (
//               <span className="text-danger">
//                 {" "}
//                 {cardValues[val].recipientError}
//               </span>
//             )}
//         </div>
//       </div>
//     );
//   };

//   const alertCard = (val, index) => {
//     return (
//       <div
//         key={index}
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           background: "white",
//           // minHeight: "50px",
//           marginTop: "10px",
//           boxShadow: "0 8px 24px hsl(210deg 8% 62% / 20%)",
//         }}
//       >
//         <div style={{ flex: "0 0 10%", padding: "5px" }}>
//           <label> Plant : {cardValues[val].plant} </label>
//           <label> Line : {cardValues[val].line} </label>
//           <label> Section: {cardValues[val].section} </label>
//         </div>
//         <div style={{ flex: "0 0 15%", padding: "5px" }}>
//           <label>Active Status</label>
//           <Form.Check
//             type="switch"
//             id="uidType"
//             label={cardValues[val]?.isActive ? "Active" : "Inactive"}
//             checked={cardValues[val]?.isActive}
//             onChange={(e) => {
//               let tempCardValues = { ...cardValues };
//               tempCardValues[val].isActive = e.target.checked;
//               tempCardValues[val].isChanged = true;
//               setCardValues(tempCardValues);
//             }}
//           />
//         </div>
//         <div style={{ flex: "0 0 15%", padding: "5px" }}>
//           <label>Time Interval (in Minutes)</label>
//           <input
//             name="TimeInterval"
//             placeholder="Enter Time Interval"
//             type="number"
//             // max={24}
//             min={1}
//             onChange={(e) => {
//               let tempCardValues = { ...cardValues };
//               tempCardValues[val].timeInterval = e.target.value;
//               tempCardValues[val].isChanged = true;
//               setCardValues(tempCardValues);
//             }}
//             value={cardValues[val].timeInterval}
//             className="form-control"
//           />
//         </div>
//         {recepientCard(val)}
//         <div style={{ flex: "0 0 10%", padding: "5px" }}>
//           {cardValues[val].submitLoader && loader}
//           <button
//             className="btn btn-primary mr-1"
//             disabled={!cardValues[val].isChanged}
//             onClick={() => submitMimicLineAlert(val)}
//           >
//             Apply
//           </button>
//           <button
//             className="btn btn-danger ml-1 "
//             disabled={!cardValues[val].Id}
//             onClick={() => {
//               // let tempPlantVlaues = [...selectedPlantVlaues];
//               // tempPlantVlaues = tempPlantVlaues.filter(
//               //   (v1) => v1.value !== val.value
//               // );
//               // // console.log(tempPlantVlaues);
//               // setSelectedPlantVlaues(tempPlantVlaues);

//               deleteMimicLineAlert(val);
//             }}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="dash-top">
//         <div className="tableTitle">
//           <h3>Alert For Data Not Coming</h3>
//         </div>
//         <div>
//           <div className="d-flex ">
//             <div className="ml-2" style={{ minWidth: "250px" }}>
//               <label>Select Plant</label>
//               <Select
//                 name="plant"
//                 value={
//                   selectedVlaues.plant !== "" &&
//                   plantOptionList.filter(
//                     (val) => val.value === selectedVlaues.plant
//                   )
//                 }
//                 options={plantOptionList}
//                 className="basic-multi-select l-2"
//                 classNamePrefix="select"
//                 onChange={(e) => handleChangeSelect(e, "plant")}
//                 isClearable={true}
//               />
//             </div>

//             <div className="ml-2" style={{ minWidth: "250px" }}>
//               <label>Select Line</label>
//               <Select
//                 name="line"
//                 value={
//                   selectedVlaues.line !== "" &&
//                   millOptionList.filter(
//                     (val) => val.value === selectedVlaues.line
//                   )
//                 }
//                 options={millOptionList}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 onChange={(e) => handleChangeSelect(e, "line")}
//                 isClearable={true}
//               />
//             </div>
//             <div className="ml-2" style={{ minWidth: "250px" }}>
//               <label>Select Section</label>
//               <Select
//                 name="section"
//                 value={
//                   selectedVlaues.section !== "" &&
//                   gradeOptionList.filter(
//                     (val) => val.value === selectedVlaues.section
//                   )
//                 }
//                 options={gradeOptionList}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 onChange={(e) => handleChangeSelect(e, "section")}
//                 isClearable={true}
//               />
//             </div>
//             <div className="d-flex align-items-end ml-4 mb-2">
//               <button
//                 className="btn btn-primary "
//                 disabled={
//                   selectedVlaues.plant === "" ||
//                   selectedVlaues.line === "" ||
//                   selectedVlaues.section === ""
//                 }
//                 onClick={handleAddCard}
//               >
//                 Add
//               </button>
//               {cardAddError !== "" && (
//                 <div className="error">{cardAddError}</div>
//               )}
//             </div>

//             {/* <div>
//             <label >Select Grade</label>
//             <Select
//               name="grade"
//               value={selectedVlaues.grade}
//               options={gradeOptionList}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={(e)=> handleChangeSelect(e, "grade")}

//               // closeMenuOnSelect={false}
//               // hideSelectedOptions={false}
//               // components={{
//                 //   Option: InputOption,
//                 // }}
//                 // isClearable={false}
//                 />
//           </div> */}
//           </div>
//           <div style={{ padding: "10px" }}>
//             {cardValues &&
//               Object.keys(cardValues)
//                 .sort()
//                 .map((val, index) => alertCard(val, index))}
//           </div>
//         </div>
//         {/* <div>
//           {submitLoader && loader}
//           <button
//             className="btn btn-primary mt-2"
//             disabled={submitLoader}
//             onClick={submitSetting}
//           >
//             Submit
//           </button>
//         </div> */}
//         {apiError !== "" && <div className="error">{apiError}</div>}
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default MimicLineAlerts;










import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import useToken from "../UseToken/useToken";
import axios from "axios";
import InvalidToken from "../InvalidToken";
// import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
// import Navbar from '../Navbar/navbar';
import Loader from "react-js-loader";
import Select, { components } from "react-select";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { accessLogApi } from "../../utils/accessLogApi";
import Highlighter from "react-highlight-words";

const MimicLineAlerts = () => {
  //use Effects
  useEffect(() => {
    accessLogDashboard();
  }, []);
  useEffect(() => {
    getDropDown();
    getMimiclineAlerts();
  }, []);

  // states and hooks
  const { token, setToken } = useToken();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const [cardAddError, setCardAddError] = useState("");
  const [submitLoader, setSubmitLoader] = useState(false);
  const [allFilterData, setAllFilterData] = useState(false);
  const [plantOptionList, setPlantOptionList] = useState([]);
  const [millOptionList, setMillOptionList] = useState([]);
  const [gradeOptionList, setGradeOptionList] = useState([]);
  const [selectedVlaues, setSelectedVlaues] = useState({
    plant: "",
    line: "",
    section: "",
  });

  const [cardValues, setCardValues] = useState({});
  const [deleteKey, setDeleteKey] = useState(null);
  const [deleteCallback, setDeleteCallback] = useState(null);

  // useEffect(() => {
  //   if (!sessionStorage.getItem("token")) {
  //     window.location.reload(true);
  //     navigate("/");
  //   }
  // }, []);

  // consts
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={50}
    />
  );

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
    accessLogApi(payload, token.token);
  };

  const activeStatusOptions = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];
  const InitialSelectValues = {
    plant: {
      label: "",
      value: "",
    },
    grade: {
      label: "",
      value: "",
    },
    mill: {
      label: "",
      value: "",
    },
  };

  // handellers

  const handleChangeSelect = (val, name) => {
    let tempSelectedValue = { ...selectedVlaues };
    if (name === "plant") {
      if (!val) {
        tempSelectedValue.line = "";
        tempSelectedValue.plant = "";
        tempSelectedValue.section = "";
        setMillOptionList([]);
        setGradeOptionList([]);
        setSelectedVlaues(tempSelectedValue);
        return;
      }
      if (val.value === tempSelectedValue.plant) {
        return;
      }
      let tempOpionList = {};
      allFilterData.map((v) => {
        if (v.Plant === val.value) {
          tempOpionList[v.Line] = {
            label: v.Line,
            value: v.Line,
          };
        }
      });
      if (Object.values(tempOpionList).length > 1) {
        tempOpionList["All"] = {
          value: "All",
          label: "All",
        };
      }
      setMillOptionList(Object.values(tempOpionList));
      tempSelectedValue.line = "";
      // console.log(tempOpionList, "tempOpionList")
    }

    if (name === "line") {
      if (!val) {
        tempSelectedValue.line = "";
        tempSelectedValue.section = "";
        setGradeOptionList([]);
        setSelectedVlaues(tempSelectedValue);
        return;
      }
      if (val.value === tempSelectedValue.line) {
        return;
      }
      let tempOpionList = {};
      allFilterData.map((v) => {
        if (
          (v.Line === val.value && v.Plant === selectedVlaues.plant) ||
          (v.Plant === selectedVlaues.plant && val.value === "All")
        ) {
          tempOpionList[v.Section] = {
            label: v.Section,
            value: v.Section,
          };
        }
      });
      if (Object.values(tempOpionList).length > 1) {
        tempOpionList["All"] = {
          value: "All",
          label: "All",
        };
      }
      setGradeOptionList(Object.values(tempOpionList));
      tempSelectedValue.section = "";
    }

    if (name === "section") {
      if (!val) {
        tempSelectedValue.section = "";
        setSelectedVlaues(tempSelectedValue);
        return;
      }
      if (val.value === tempSelectedValue.section) {
        return;
      }
    }
    // console.log(tempSelectedValue, "tempSelectedValue")
    tempSelectedValue[name] = val.value;
    setSelectedVlaues(tempSelectedValue);
    setCardAddError("");
  };

  const handleAddCard = () => {
    let tempCardValues = { ...cardValues };
    let tempSelectedValue = { ...selectedVlaues };
    if (
      selectedVlaues.plant === "" ||
      selectedVlaues.line === "" ||
      selectedVlaues.section === ""
    ) {
      setCardAddError("emptyValueError");
      // console.log("emptyValueError")
      return;
    }

    let cardKey =
      selectedVlaues.plant +
      "-" +
      selectedVlaues.line +
      "-" +
      selectedVlaues.section;

    if (!tempCardValues[cardKey]) {
      tempCardValues[cardKey] = {
        plant: selectedVlaues.plant,
        line: selectedVlaues.line,
        section: selectedVlaues.section,
        timeInterval: "",
        isActive: false,
        isChanged: false,
        submitLoader: false,
        reciepients: [],
        recipientInput: "",
        recipientError: "",
      };
      tempSelectedValue.plant = "";
      tempSelectedValue.line = "";
      tempSelectedValue.section = "";
      setSelectedVlaues(tempSelectedValue);
    } else {
      // console.log("card Already exists")
      setCardAddError("card Already exists");
    }

    setCardValues(tempCardValues);
  };

  // api calls
  const getDropDown = async () => {
    const data = {
      plant: "",
    };
    let postUrl =
      process.env.REACT_APP_BASE_URL + "adminSuper/getMimicLineMasterDropDown";
    // if (token.Role === "super_admin") {
    //   data.superAdminid = token.UserID;
    //   delete data.adminid;
    //   postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/plantDetails";
    // }
    try {
      await axios
        .post(postUrl, data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // console.log(res?.data?.result);
          let tempPlatList = {};
          res?.data?.result?.map((val) => {
            tempPlatList[val.Plant] = {
              label: val.Plant,
              value: val.Plant,
            };
          });
          setAllFilterData(res?.data?.result);
          setPlantOptionList(Object.values(tempPlatList));
        });
    } catch (error) {
      // console.log(error.response);
      if (InvalidToken(error)) {
        toast.error("token Expired login Again.");
        navigate("/admin");
      } else {
        setApiError(error?.response?.data?.error);
        toast.error(error.message);
        console.log(error.message);
      }
    }
  };
  const setMimicLineAlertData = (data) => {
    let tempCardValues = { ...cardValues };
    // console.log(cardValues,"oldCard")
    let newTempCardValues = {};
    // console.log("data",data)
    data.map((val) => {
      let cardKey = val.Plant_Name + "-" + val.Line + "-" + val.Section;

      if (!tempCardValues[cardKey]) {
        newTempCardValues[cardKey] = {
          plant: val.Plant_Name,
          line: val.Line,
          section: val.Section,
          timeInterval: val.Interval.split("m")[0],
          isActive: val.IsActive,
          isChanged: false,
          submitLoader: false,
          reciepients:
            val.Recipient === ""
              ? []
              : val.Recipient.replaceAll("'", "").split(";"),

          recipientInput: "",
          recipientError: "",
          Id: val?.Id,
        };
      } else {
        newTempCardValues[cardKey] = tempCardValues[cardKey];
        newTempCardValues[cardKey].isChanged = false;
        newTempCardValues[cardKey].Id = val?.Id;
        //  newTempCardValues[cardKey].dateTime=val?.created_date
      }
    });
    // console.log(newTempCardValues, "newCardValues");
    setCardValues(newTempCardValues);
    // setPlantCardValues(newTempCardValues);
    // setSelectedPlantVlaues(Object.values(tempPlantValues).sort());
  };
  const getMimiclineAlerts = async () => {
    // return
    const data = {
      superAdminid: token.UserID,
    };
    try {
      await axios
        .post(
          process.env.REACT_APP_BASE_URL + "adminSuper/getMimicLineAlert",
          data,
          {
            headers: { Authorization: `Bearer ${token.token}` },
          }
        )
        .then((res) => {
          // console.log(res?.data?.result, "ress");
          if (res?.data?.result[0]?.result !== "No Record Found") {
            // console.log("getting Data")
            setMimicLineAlertData(res?.data?.result);
          } else {
            setCardValues({});
          }
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (error) {
      // console.log(error.response);
      if (InvalidToken(error)) {
        toast.error("token Expired login Again.");
        navigate("/admin");
      } else {
        setApiError(error?.response?.data?.error);
        toast.error(error.message);
        console.log(error.message);
      }
    }
  };

  const submitMimicLineAlert = (val) => {
    // console.log(cardValues[val])
    setApiError("");
    // setFormError(validate());
    // if (Object.keys(validate()).length !== 0) {
    //   return;
    // }
    if (
      cardValues[val].timeInterval === "" ||
      cardValues[val].timeInterval <= 0
    ) {
      toast.error("Time Interval invalid for " + val + " Plant");
      return;
    }
    let toastText = val;
    let payload = {
      plant: cardValues[val].plant,
      line: cardValues[val].line,
      section: cardValues[val].section,
      superAdminid: token.UserID,
      isActive: cardValues[val].isActive,
      recipient: cardValues[val].reciepients.join(";"),
      interval: cardValues[val].timeInterval + "m",
    };
    // console.log(payload, "pay");

    let postUrl =
      process.env.REACT_APP_BASE_URL + "adminSuper/insertMimicLineAlert";
    if (cardValues[val].Id) {
      postUrl =
        process.env.REACT_APP_BASE_URL + "adminSuper/updateMimicLineAlert";
      payload = {
        alertId: cardValues[val].Id,
        plant: cardValues[val].plant,
        line: cardValues[val].line,
        section: cardValues[val].section,
        superAdminid: token.UserID,
        isActive: cardValues[val].isActive,
        recipient: cardValues[val].reciepients.join(";"),
        interval: cardValues[val].timeInterval + "m",
      };

      toastText = val.split("-");
      toastText.pop();
      toastText = toastText.join("-");
    }

    axios
      .post(postUrl, payload, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        // console.log(res, "ressspooms")
        if (res.status === 200) {
          toast.success("Alert Updated Successfully for " + toastText);
          getMimiclineAlerts();
        }
      })
      .catch((error) => {
        if (InvalidToken(error)) {
          toast.error("token Expired login Again.");
          navigate("/admin");
        } else {
          setApiError(error?.response?.data?.error);
          toast.error(error.message);
          console.log(error.message);
        }
        // setSubmitLoader(false);
      });
  };
  const deleteMimicLineAlert = (val) => {
    const deleteAlert = async () => {
      setApiError("");
      let toastText = val;
      const payload = {
        alertId: cardValues[val]?.Id,
      };
      toastText = val.split("-");
      toastText.pop();
      toastText = toastText.join("-");

      await axios
        .post(
          process.env.REACT_APP_BASE_URL + "adminSuper/deleteMimicLineAlert",
          payload,
          {
            headers: { Authorization: `Bearer ${token.token}` },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Alert Deleted Successfully for " + toastText);
            getMimiclineAlerts();
          }
        })
        .catch((error) => {
          if (InvalidToken(error)) {
            toast.error("token Expired login Again.");
            navigate("/admin");
          } else {
            setApiError(error?.response?.data?.error);
            toast.error(error.message);
            console.log(error.message);
          }
          setSubmitLoader(false);
        });
    }
    // confirmAlert({
    //   title: "Confirm to Delete Alert",
    //   message: "Are you sure, you want to delete this alert.",
    //   buttons: [
    //     {
    //       label: "Yes",
    //       onClick: () => deleteAlert(),
    //     },
    //     {
    //       label: "No",
    //       onClick: () => { },
    //     },
    //   ],
    // });
    // 👇 Replace confirmAlert with this
    setDeleteKey(val);
    setDeleteCallback(() => deleteAlert);
  };

  // rendercomponet parts

  const recepientCard = (val) => {
    // console.log(val, cardValues[val])
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm text-[var(--text-color)]">
          Recipients <span className="text-danger"></span> :
        </label>
        <div className="flex flex-wrap gap-2 max-h-[80px] overflow-y-auto pr-1">
          {cardValues[val].reciepients.map((item) => (
            <div className="flex items-center gap-2 px-2 py-1 text-xs rounded-md bg-[var(--submit-button-bg)] text-[#111111]" key={item}>
              {item}
              <button
                type="button"
                className="cursor-pointer font-bold"
                onClick={() => {
                  let tempCardValues = { ...cardValues };
                  tempCardValues[val].reciepients = tempCardValues[
                    val
                  ].reciepients.filter((i) => i !== item);
                  tempCardValues[val].isChanged = true;
                  setCardValues(tempCardValues);
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <input
            className={`w-full border rounded-md px-3 py-1.5 text-sm bg-[var(--input-enable-bg)] text-[var(--text-color)] focus:outline-none focus:border-[var(--submit-button-bg)]
          ${cardValues[val].recipientInput !== "" && cardValues[val].recipientError !== ""
                ? "border-red-500"
                : "border-[var(--search-border)]"
              }`}
            value={cardValues[val].recipientInput}
            placeholder="Type email addresses and press `Enter`"
            onKeyDown={(event) => {
              let tempCardValues = { ...cardValues };

              if (["Enter", "Tab", ","].includes(event.key)) {
                event.preventDefault();

                var value = cardValues[val].recipientInput.trim();
                if (!/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(value)) {
                  tempCardValues[val].recipientError = "Invalid Email";
                } else {
                  if (tempCardValues[val].reciepients.includes(value)) {
                    tempCardValues[val].recipientError = "Already in List";
                  } else {
                    tempCardValues[val].reciepients.push(value);
                    tempCardValues[val].recipientInput = "";
                  }
                }
              }
              tempCardValues[val].isChanged = true;
              setCardValues(tempCardValues);
            }}
            onChange={(event) => {
              let tempCardValues = { ...cardValues };
              // console.log(event.target.value)
              tempCardValues[val].recipientInput = event.target.value;
              tempCardValues[val].recipientError = "";
              setCardValues(tempCardValues);
            }}
          />
          {cardValues[val].recipientError !== "" &&
            cardValues[val].recipientInput !== "" && (
              <span className="text-red-500 text-xs">
                {" "}
                {cardValues[val].recipientError}
              </span>
            )}
        </div>
      </div>
    );
  };

  const alertCard = (val, index) => {
    return (
      <div
        key={index}
        className="bg-[var(--card-bg)] border border-[var(--search-border)] rounded-2xl px-2 py-2 w-full flex flex-col gap-4 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-onhover)] transition-all duration-200"
      >
        <div className="flex flex-row gap-6 text-sm text-[var(--text-color)] font-medium">
          <div> Plant : {cardValues[val].plant} </div>
          <div> Line : {cardValues[val].line} </div>
          <div> Section: {cardValues[val].section} </div>
        </div>
        <div className="flex items-center justify-between flex-nowrap w-full">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-sm text-[var(--text-color)]">Active Status:</span>
            <span
              className={`text-md font-semibold transition-colors duration-300 ${cardValues[val].isActive
                ? "text-green-500"
                : "text-red-500"
                }`}
            >
              {cardValues[val].isActive ? "Active" : "Inactive"}
            </span>
          </div>
          <label className="relative mt-1 inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={cardValues[val].isActive}
              onChange={(e) => {
                let tempCardValues = { ...cardValues };
                tempCardValues[val].isActive = e.target.checked;
                tempCardValues[val].isChanged = true;
                setCardValues(tempCardValues);
              }}
              className="sr-only peer"
            />
            <div className="
        w-10 h-5 bg-gray-300 rounded-full
        peer-checked:bg-[var(--submit-button-bg)]
        transition-colors duration-300
    "/>

            {/* Circle — also a direct sibling of input */}
            <div className="
        absolute left-0.4 top-0.5
        w-4 h-4 bg-white rounded-full shadow
        transition-transform duration-300
        peer-checked:translate-x-5
    "/>
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-[var(--text-color)]">
            Time Interval (in minutes)
          </label>

          <input
            type="number"
            min={1}
            value={cardValues[val].timeInterval}
            onChange={(e) => {
              let tempCardValues = { ...cardValues };
              tempCardValues[val].timeInterval = e.target.value;
              tempCardValues[val].isChanged = true;
              setCardValues(tempCardValues);
            }}
            placeholder="Enter Time Interval"
            className="h-9 w-full border border-[var(--search-border)] rounded-md px-3 text-sm bg-[var(--input-enable-bg)] text-[var(--text-color)] focus:outline-none focus:border-[var(--submit-button-bg)]"
          />
        </div>
        {recepientCard(val)}
        <div className="flex justify-center gap-4 mt-2">
          {cardValues[val].submitLoader && loader}
          <button
            className="px-4 py-1.5 rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition disabled:opacity-50"
            disabled={!cardValues[val].isChanged}
            onClick={() => submitMimicLineAlert(val)}
          >
            Apply
          </button>
          <button
            className="px-4 text-red-500 py-1.5 rounded-md border border-[var(--button-border)] bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] font-medium transition disabled:opacity-50"
            disabled={!cardValues[val].Id}
            onClick={() => {


              deleteMimicLineAlert(val);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };



  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "var(--input-enable-bg)",
      border: "1px solid var(--input-enable-border)",
      borderRadius: "6px",
      boxShadow: "none",
      minHeight: "29px",
      height: "29px",
      "&:hover": { border: "1px solid var(--input-enable-border)" },
    }),
    valueContainer: (base) => ({
      ...base,
      height: "29px",
      padding: "0 8px",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: "29px",
    }),
    singleValue: (base) => ({
      ...base,
      color: "var(--text-color)",
      fontSize: "13px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--text-color)",
      fontSize: "14px",
      opacity: 0.5,
    }),
    input: (base) => ({
      ...base,
      color: "var(--text-color)",
      fontSize: "12px",
      margin: 0,
      padding: 0,
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--input-enable-bg)",
      border: "1px solid var(--input-enable-border)",
      borderRadius: "6px",
      zIndex: 999,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "var(--button-hover-bg)" : "transparent",
      color: "var(--text-color)",
      fontSize: "13px",
      cursor: "pointer",
      borderRadius: "6px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  function formatOptionLabel({ label }, { inputValue }) {
    let labelvalue = typeof label === "object" ? label[0] : label;
    return (
      <Highlighter
        highlightClassName="highlighter"
        highlightStyle={{ backgroundColor: "orange" }}
        searchWords={[inputValue]}
        textToHighlight={labelvalue}
      />
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="h-full flex flex-col bg-[var(--bg-main-container)] rounded-2xl  ">
        <div className="flex text-[18px] font-semibold text-[var(--title)]">
          <h3 className="font-poppins font-medium flex text-[18px] text-[var(--title)]">Alert For Data Not Coming</h3>
        </div>
        <div className="w-full rounded-xl border border-[var(--form-border)] px-2 py-1 mt-1" style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className=" ">
              <label className="text-[14px] text-[var(--text-color)]">Select Plant</label>
              <Select
                formatOptionLabel={formatOptionLabel}

                styles={selectStyles}
                name="plant"
                value={
                  selectedVlaues.plant !== "" &&
                  plantOptionList.filter((val) => val.value === selectedVlaues.plant)
                }
                options={plantOptionList}
                className="basic-multi-select l-2"
                classNamePrefix="select"
                onChange={(e) => handleChangeSelect(e, "plant")}
                isClearable={true}
              />
            </div>

            <div className=" ">
              <label className="text-[14px] text-[var(--text-color)]">Select Line</label>
              <Select
                formatOptionLabel={formatOptionLabel}
                styles={selectStyles}
                name="line"
                value={
                  selectedVlaues.line !== "" &&
                  millOptionList.filter((val) => val.value === selectedVlaues.line)
                }
                options={millOptionList}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => handleChangeSelect(e, "line")}
                isClearable={true}
              />
            </div>

            <div className="">
              <label className="text-[14px] text-[var(--text-color)]">Select Section</label>
              <Select
                formatOptionLabel={formatOptionLabel}

                styles={selectStyles}
                name="section"
                value={
                  selectedVlaues.section !== "" &&
                  gradeOptionList.filter((val) => val.value === selectedVlaues.section)
                }
                options={gradeOptionList}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => handleChangeSelect(e, "section")}
                isClearable={true}
              />
            </div>
            <div className="flex justify-center items-center gap-1">
              <button
                className="px-4 py-1  rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200"
                disabled={
                  selectedVlaues.plant === "" ||
                  selectedVlaues.line === "" ||
                  selectedVlaues.section === ""
                }
                onClick={handleAddCard}
              >
                Add
              </button>
              {cardAddError !== "" && (
                <div className="text-red-500 text-sm font-semibold">{cardAddError}</div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            {cardValues &&
              Object.keys(cardValues)
                .sort()
                .map((val, index) => alertCard(val, index))}
          </div>
        </div>

        {apiError !== "" && <div className="text-red-500 text-sm mt-3">{apiError}</div>}
      </div>
      {/* Additional Modal for Delete Alert Confirmation */}
      {deleteKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--bg-color)] rounded-2xl shadow-xl w-[90%] max-w-[420px] p-6 relative"
          >
            <button
              onClick={() => setDeleteKey(null)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            <div className="text-4xl text-center mb-2">⚠️</div>

            <h3 className="text-center text-lg font-semibold text-[var(--text-color)]">
              Delete This Alert?
            </h3>

            <p className="text-center text-sm text-[var(--card-subtle)] mt-1">
              This action cannot be undone.
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button
                onClick={() => setDeleteKey(null)}
                className="border border-[var(--button-border)] bg-[var(--button-bg)] text-sm font-medium px-3 py-1 rounded-lg hover:bg-[var(--button-hover-bg)]"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (deleteCallback) deleteCallback(); // 🔥 original logic runs
                  setDeleteKey(null);
                }}
                className="px-4 py-1 rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-red-500 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default MimicLineAlerts;
