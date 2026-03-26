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
// import { accessLogApi } from "../../utils/accessLogApi";

// const AlertForBlaine = () => {



//   //use Effects
//   useEffect(()=>{
//     accessLogDashboard()
//   },[])
//   useEffect(() => {
//     getDropDown();
//     getBlaineAlertValues();
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
//     grade: "",
//     mill: ""
//   })

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

//   const activeStatusOptions = [
//     { label: "Active", value: true },
//     { label: "Inactive", value: false },
//   ];
//   const InitialSelectValues = {
//     plant: {
//       "label": "",
//       "value": ""
//     },
//     grade: {
//       "label": "",
//       "value": ""
//     },
//     mill: {
//       "label": "",
//       "value": ""
//     }
//   }


//   // handellers

//   const handleChangeSelect = (val, name) => {
//     let tempSelectedValue = { ...selectedVlaues }
//     if (name === "plant") {
//       if (!val) {
//         tempSelectedValue.mill = ""
//         tempSelectedValue.plant = ""
//         setMillOptionList([])
//         setSelectedVlaues(tempSelectedValue)
//         return
//       }
//       if (val.value === tempSelectedValue.plant) {
//         return
//       }
//       let tempOpionList = {}
//       allFilterData.map((v) => {
//         if (v.plant_code === val.value) {
//           tempOpionList[v.Mill_No] = {
//             label: v.Mill_No,
//             value: v.Mill_No
//           }
//         }
//       })
//       if (Object.values(tempOpionList).length > 1) {
//         tempOpionList["All"] = {
//           value: "All",
//           label: "All"
//         }
//       }
//       setMillOptionList(Object.values(tempOpionList))
//       tempSelectedValue.mill = ""
//       // console.log(tempOpionList, "tempOpionList")
//     }

//     if (name === "mill") {
//       if (!val) {
//         tempSelectedValue.mill = ""
//         setSelectedVlaues(tempSelectedValue)
//         return
//       }
//       if (val.value === tempSelectedValue.mill) {
//         return
//       }
//     }
//     // console.log(tempSelectedValue, "tempSelectedValue")
//     tempSelectedValue[name] = val.value
//     setSelectedVlaues(tempSelectedValue)
//     setCardAddError("")
//   };

//   const handleAddCard = () => {
//     let tempCardValues = { ...cardValues }
//     let tempSelectedValue = { ...selectedVlaues }
//     if (selectedVlaues.plant === "" || selectedVlaues.mill === "") {
//       setCardAddError("emptyValueError")
//       // console.log("emptyValueError")
//       return
//     }

//     let cardKey = selectedVlaues.plant + "-" + selectedVlaues.mill

//     if (!tempCardValues[cardKey]) {
//       tempCardValues[cardKey] = {
//         plant: selectedVlaues.plant,
//         mill: selectedVlaues.mill,
//         timeInterval: "",
//         isActive: false,
//         isChanged: false,
//         submitLoader: false,
//         reciepients: [],
//         recipientInput: "",
//         recipientError: "",
//       }
//       tempSelectedValue.plant = ""
//       tempSelectedValue.mill = ""
//       setSelectedVlaues(tempSelectedValue)
//     }
//     else {
//       // console.log("card Already exists")
//       setCardAddError("card Already exists")
//     }

//     // console.log(tempCardValues)
//     setCardValues(tempCardValues)
//   }






//   // api calls
//   const getDropDown = async () => {
//     const data = {
//       adminid: token.UserID,
//       "Plant_Code": "",
//       "Mill": "",
//       "Grade": ""
//     };
//     let postUrl = process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/getDropDownFilter";
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
//           let tempPlatList = {}
//           res?.data?.result?.map((val) => {
//             tempPlatList[val.plant_code] = {
//               label: val.Generic_plant_code + "-" + val.plant_code,
//               value: val.plant_code
//             }
//           })
//           setAllFilterData(res?.data?.result)
//           setPlantOptionList(Object.values(tempPlatList))
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
//   const setBlaineAlertData = (data) => {
//     let tempCardValues = { ...cardValues };
//     // console.log(cardValues,"oldCard")
//     let newTempCardValues = {};
//     // console.log("data",data)
//     data.map((val) => {
//       let cardKey = val.plantname + "-" + val.mill +"-"+ new Date(val?.created_date).getTime()

//       if (!tempCardValues[cardKey]) {
//         newTempCardValues[cardKey] = {
//           plant: val.plantname,
//           mill: val.mill,
//           timeInterval: val.interval.split("m")[0],
//           isActive: val.isalert,
//           isChanged: false,
//           submitLoader: false,
//           reciepients: val.recipient === ""
//           ? []
//           : val.recipient.replaceAll("'", "").split(","),
//           recipientInput: "",
//           recipientError: "",
//           id:val?.id,
//           dateTime:val?.created_date
//         }

//         }else{
//          newTempCardValues[cardKey] = tempCardValues[cardKey]
//          newTempCardValues[cardKey].isChanged= false
//          newTempCardValues[cardKey].id= val?.id
//          newTempCardValues[cardKey].dateTime=val?.created_date
//       }

//     });
//     // console.log(newTempCardValues, "newCardValues");
//     setCardValues(newTempCardValues)
//     // setPlantCardValues(newTempCardValues);
//     // setSelectedPlantVlaues(Object.values(tempPlantValues).sort());
//   };
//   const getBlaineAlertValues = async () => {
//     // return
//     const data = {
//       superAdminid: token.UserID,
//     };
//     try {
//       await axios
//         .post(
//           process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/getBlaineAlerts",
//           data,
//           {
//             headers: { Authorization: `Bearer ${token.token}` },
//           }
//         )
//         .then((res) => {
//           // console.log(res?.data?.result, "ress");
//           if(res?.data?.result[0]?.result !== "No Record Found"){
//               // console.log("getting Data")
//               setBlaineAlertData(res?.data?.result);
//           }else{
//             setCardValues({})
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

//   const submitBlaineAlert = (val) => {
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
//     let toastText = val
//     let payload = {
//       "Plant_Code": cardValues[val].plant,
//       "Mill": cardValues[val].mill,
//       "userId": token.UserID,
//       "isAlert": cardValues[val].isActive,
//       "recipient": cardValues[val].reciepients.join(","),
//       "interval": cardValues[val].timeInterval + "m",
//     }
//     // console.log(payload, "pay");

//     let postUrl = process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/insertBlaineAlert"
//     if(cardValues[val].id){
//        postUrl = process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/updateBlaineAlert"
//       payload = {
//         "alertId":cardValues[val].id,
//         "userId": token.UserID,
//         "recipient": cardValues[val].reciepients.join(","),
//         "isAlert": cardValues[val].isActive,
//         "interval":cardValues[val].timeInterval + "m",
//       }

//       toastText = val.split("-")
//       toastText.pop()
//       toastText = toastText.join("-")

//     }


//     axios
//       .post(postUrl, payload, {
//         headers: { Authorization: `Bearer ${token.token}` },
//       })
//       .then((res) => {
//         // console.log(res, "ressspooms")
//         if (res.status === 200) {
//           toast.success(
//             "Alert Updated Successfully for " + toastText
//           );
//           getBlaineAlertValues();
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
//   const deleteBlaineAlert = (val) => {

//     setApiError("");
// let toastText= val
//     const payload ={
//       "alertId":cardValues[val]?.id,
//       "Plant_Code": cardValues[val]?.plant,
//       "Mill": cardValues[val]?.mill,
//       "created_date": cardValues[val]?.dateTime
//   }
//   toastText = val.split("-")
//   toastText.pop()
//   toastText = toastText.join("-")

//     axios
//       .post(
//         process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/deleteBlaineAlert",
//         payload,
//         {
//           headers: { Authorization: `Bearer ${token.token}` },
//         }
//       )
//       .then((res) => {
//         if (res.status === 200) {
//           toast.success(
//             "Alert Deleted Successfully for " + toastText
//           );
//           getBlaineAlertValues();
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
//         setSubmitLoader(false);
//       });
//   };


//   // rendercomponet parts

//   const recepientCard = (val) => {
//     // console.log(val, cardValues[val])
//     return (
//       <div
//         className="recepientContainer"
//         style={{ flex: "0 0 40%", padding: "5px" }}
//       >
//         <label className="mb-2">
//           Recipients <span className="text-danger"></span> :
//         </label>
//         {cardValues[val].reciepients.map((item) => (
//           <div className="tag-item" key={item}>
//             {item}
//             <button
//               type="button"
//               className="button"
//               onClick={() => {
//                 let tempCardValues = { ...cardValues };
//                 tempCardValues[val].reciepients = tempCardValues[
//                   val
//                 ].reciepients.filter((i) => i !== item);
//                 tempCardValues[val].isChanged = true;
//                 setCardValues(tempCardValues);
//               }}
//             >
//               &times;
//             </button>
//           </div>
//         ))}
//         <div className="d-flex justify-content-between align-items-center">
//           <input
//             className={
//               "form-control " +
//               (cardValues[val].recipientInput !== "" &&
//                 cardValues[val].recipientError !== ""
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
//                     tempCardValues[val].recipientError =
//                       "Already in List";
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
//     )
//   }

//   const alertCard = (val, index) => {
//     // console.log(val, cardValues)
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
//           <label> Mill : {cardValues[val].mill} </label>
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
//             onClick={() => submitBlaineAlert(val)}
//           >
//             Apply
//           </button>
//           <button
//             className="btn btn-danger ml-1 "
//             disabled={!cardValues[val].id     }
//           onClick={() => {
//             // let tempPlantVlaues = [...selectedPlantVlaues];
//             // tempPlantVlaues = tempPlantVlaues.filter(
//             //   (v1) => v1.value !== val.value
//             // );
//             // // console.log(tempPlantVlaues);
//             // setSelectedPlantVlaues(tempPlantVlaues);

//             deleteBlaineAlert(val);
//           }}
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
//           <h3>Alert For Blaine Prediction</h3>
//         </div>
//         <div>
//           <div className="d-flex " >

//             <div className="ml-2" style={{minWidth:"250px"}}>
//               <label >Select Plant</label>
//               <Select
//                 name="plant"
//                 value={selectedVlaues.plant !== "" && plantOptionList.filter((val) => val.value === selectedVlaues.plant)}
//                 options={plantOptionList}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 onChange={(e) => handleChangeSelect(e, "plant")}
//                 isClearable={true}
//               />
//             </div>

//             <div className="ml-2" style={{minWidth:"250px"}}>
//               <label >Select Mill</label>
//               <Select
//                 name="mill"
//                 value={selectedVlaues.mill !== "" && millOptionList.filter((val) => val.value === selectedVlaues.mill)}
//                 options={millOptionList}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 onChange={(e) => handleChangeSelect(e, "mill")}
//                 isClearable={true}
//               />
//             </div>
//             <div className="d-flex align-items-end ml-4 mb-2">
//               <button
//                 className="btn btn-primary "
//                 disabled={selectedVlaues.plant === "" || selectedVlaues.mill === ""}
//                 onClick={handleAddCard}
//               >
//                 Add
//               </button>
//               {cardAddError !== "" && <div className="error">{cardAddError}</div>}

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
//             {Object.keys(cardValues)
//               .sort()
//               .map((val, index) => alertCard(val, index))}
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

// export default AlertForBlaine;









import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import useToken from "../UseToken/useToken";
import axios from "axios";
import InvalidToken from "../InvalidToken";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
// import Navbar from '../Navbar/navbar';
import Loader from "react-js-loader";
import Select, { components } from "react-select";
import { accessLogApi } from "../../utils/accessLogApi";
import Highlighter from "react-highlight-words";

const AlertForBlaine = () => {



  //use Effects
  useEffect(() => {
    accessLogDashboard()
  }, [])
  useEffect(() => {
    getDropDown();
    getBlaineAlertValues();
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
    grade: "",
    mill: ""
  })

  const [cardValues, setCardValues] = useState({});

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
    accessLogApi(payload, token.token)
  }

  const activeStatusOptions = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];
  const InitialSelectValues = {
    plant: {
      "label": "",
      "value": ""
    },
    grade: {
      "label": "",
      "value": ""
    },
    mill: {
      "label": "",
      "value": ""
    }
  }


  // handellers 

  const handleChangeSelect = (val, name) => {
    let tempSelectedValue = { ...selectedVlaues }
    if (name === "plant") {
      if (!val) {
        tempSelectedValue.mill = ""
        tempSelectedValue.plant = ""
        setMillOptionList([])
        setSelectedVlaues(tempSelectedValue)
        return
      }
      if (val.value === tempSelectedValue.plant) {
        return
      }
      let tempOpionList = {}
      allFilterData.map((v) => {
        if (v.plant_code === val.value) {
          tempOpionList[v.Mill_No] = {
            label: v.Mill_No,
            value: v.Mill_No
          }
        }
      })
      if (Object.values(tempOpionList).length > 1) {
        tempOpionList["All"] = {
          value: "All",
          label: "All"
        }
      }
      setMillOptionList(Object.values(tempOpionList))
      tempSelectedValue.mill = ""
      // console.log(tempOpionList, "tempOpionList")
    }

    if (name === "mill") {
      if (!val) {
        tempSelectedValue.mill = ""
        setSelectedVlaues(tempSelectedValue)
        return
      }
      if (val.value === tempSelectedValue.mill) {
        return
      }
    }
    // console.log(tempSelectedValue, "tempSelectedValue")
    tempSelectedValue[name] = val.value
    setSelectedVlaues(tempSelectedValue)
    setCardAddError("")
  };

  const handleAddCard = () => {
    let tempCardValues = { ...cardValues }
    let tempSelectedValue = { ...selectedVlaues }
    if (selectedVlaues.plant === "" || selectedVlaues.mill === "") {
      setCardAddError("emptyValueError")
      // console.log("emptyValueError")
      return
    }

    let cardKey = selectedVlaues.plant + "-" + selectedVlaues.mill

    if (!tempCardValues[cardKey]) {
      tempCardValues[cardKey] = {
        plant: selectedVlaues.plant,
        mill: selectedVlaues.mill,
        timeInterval: "",
        isActive: false,
        isChanged: false,
        submitLoader: false,
        reciepients: [],
        recipientInput: "",
        recipientError: "",
      }
      tempSelectedValue.plant = ""
      tempSelectedValue.mill = ""
      setSelectedVlaues(tempSelectedValue)
    }
    else {
      // console.log("card Already exists")
      setCardAddError("card Already exists")
    }

    // console.log(tempCardValues)
    setCardValues(tempCardValues)
  }






  // api calls
  const getDropDown = async () => {
    const data = {
      adminid: token.UserID,
      "Plant_Code": "",
      "Mill": "",
      "Grade": ""
    };
    let postUrl = process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/getDropDownFilter";
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
          let tempPlatList = {}
          res?.data?.result?.map((val) => {
            tempPlatList[val.plant_code] = {
              label: val.Generic_plant_code + "-" + val.plant_code,
              value: val.plant_code
            }
          })
          setAllFilterData(res?.data?.result)
          setPlantOptionList(Object.values(tempPlatList))
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
  const setBlaineAlertData = (data) => {
    let tempCardValues = { ...cardValues };
    // console.log(cardValues,"oldCard")
    let newTempCardValues = {};
    // console.log("data",data)
    data.map((val) => {
      let cardKey = val.plantname + "-" + val.mill + "-" + new Date(val?.created_date).getTime()

      if (!tempCardValues[cardKey]) {
        newTempCardValues[cardKey] = {
          plant: val.plantname,
          mill: val.mill,
          timeInterval: val.interval.split("m")[0],
          isActive: val.isalert,
          isChanged: false,
          submitLoader: false,
          reciepients: val.recipient === ""
            ? []
            : val.recipient.replaceAll("'", "").split(","),
          recipientInput: "",
          recipientError: "",
          id: val?.id,
          dateTime: val?.created_date
        }

      } else {
        newTempCardValues[cardKey] = tempCardValues[cardKey]
        newTempCardValues[cardKey].isChanged = false
        newTempCardValues[cardKey].id = val?.id
        newTempCardValues[cardKey].dateTime = val?.created_date
      }

    });
    // console.log(newTempCardValues, "newCardValues");
    setCardValues(newTempCardValues)
    // setPlantCardValues(newTempCardValues);
    // setSelectedPlantVlaues(Object.values(tempPlantValues).sort());
  };
  const getBlaineAlertValues = async () => {
    // return
    const data = {
      superAdminid: token.UserID,
    };
    try {
      await axios
        .post(
          process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/getBlaineAlerts",
          data,
          {
            headers: { Authorization: `Bearer ${token.token}` },
          }
        )
        .then((res) => {
          // console.log(res?.data?.result, "ress");
          if (res?.data?.result[0]?.result !== "No Record Found") {
            // console.log("getting Data")
            setBlaineAlertData(res?.data?.result);
          } else {
            setCardValues({})
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

  const submitBlaineAlert = (val) => {
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
    let toastText = val
    let payload = {
      "Plant_Code": cardValues[val].plant,
      "Mill": cardValues[val].mill,
      "userId": token.UserID,
      "isAlert": cardValues[val].isActive,
      "recipient": cardValues[val].reciepients.join(","),
      "interval": cardValues[val].timeInterval + "m",
    }
    // console.log(payload, "pay");

    let postUrl = process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/insertBlaineAlert"
    if (cardValues[val].id) {
      postUrl = process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/updateBlaineAlert"
      payload = {
        "alertId": cardValues[val].id,
        "userId": token.UserID,
        "recipient": cardValues[val].reciepients.join(","),
        "isAlert": cardValues[val].isActive,
        "interval": cardValues[val].timeInterval + "m",
      }

      toastText = val.split("-")
      toastText.pop()
      toastText = toastText.join("-")

    }


    axios
      .post(postUrl, payload, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        // console.log(res, "ressspooms")
        if (res.status === 200) {
          toast.success(
            "Alert Updated Successfully for " + toastText
          );
          getBlaineAlertValues();
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
  const deleteBlaineAlert = (val) => {

    setApiError("");
    let toastText = val
    const payload = {
      "alertId": cardValues[val]?.id,
      "Plant_Code": cardValues[val]?.plant,
      "Mill": cardValues[val]?.mill,
      "created_date": cardValues[val]?.dateTime
    }
    toastText = val.split("-")
    toastText.pop()
    toastText = toastText.join("-")

    axios
      .post(
        process.env.REACT_APP_BASE_URL + "opt/blaineAdmin/deleteBlaineAlert",
        payload,
        {
          headers: { Authorization: `Bearer ${token.token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            "Alert Deleted Successfully for " + toastText
          );
          getBlaineAlertValues();
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
                    tempCardValues[val].recipientError =
                      "Already in List";
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
    )
  }

  const alertCard = (val, index) => {
    // console.log(val, cardValues)
    return (
      <div
        key={index}
        className="bg-[var(--card-bg)] border border-[var(--search-border)] rounded-2xl px-2 py-2 w-full flex flex-col gap-4 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-onhover)] transition-all duration-200"
      >
        <div className="flex flex-row gap-6 text-sm text-[var(--text-color)] font-medium">
          <div> Plant : {cardValues[val].plant} </div>
          <div> Mill : {cardValues[val].mill} </div>
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
              label={cardValues[val]?.isActive ? "Active" : "Inactive"}
              checked={cardValues[val]?.isActive}
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
            Time Interval (in Minutes)
          </label>
          <input
            name="TimeInterval"
            placeholder="Enter Time Interval"
            type="number"
            // max={24}
            min={1}
            onChange={(e) => {
              let tempCardValues = { ...cardValues };
              tempCardValues[val].timeInterval = e.target.value;
              tempCardValues[val].isChanged = true;
              setCardValues(tempCardValues);
            }}
            value={cardValues[val].timeInterval}
            className="h-9 w-full border border-[var(--search-border)] rounded-md px-3 text-sm bg-[var(--input-enable-bg)] text-[var(--text-color)] focus:outline-none focus:border-[var(--submit-button-bg)]"
          />
        </div>
        {recepientCard(val)}
        <div className="flex justify-center gap-4 mt-2">
          {cardValues[val].submitLoader && loader}
          <button
            className="px-4 py-1.5 rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition disabled:opacity-50"
            disabled={!cardValues[val].isChanged}
            onClick={() => submitBlaineAlert(val)}
          >
            Apply
          </button>
          <button
            className="px-4 py-1.5 rounded-md text-red-500 border border-[var(--button-border)] bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] font-medium transition disabled:opacity-50"
            disabled={!cardValues[val].id}
            onClick={() => {
              // let tempPlantVlaues = [...selectedPlantVlaues];
              // tempPlantVlaues = tempPlantVlaues.filter(
              //   (v1) => v1.value !== val.value
              // );
              // // console.log(tempPlantVlaues);
              // setSelectedPlantVlaues(tempPlantVlaues);

              deleteBlaineAlert(val);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  const getCompactSelectStyles = (hasError, isDisabled) => ({
    control: (base, state) => ({
      ...base,
      minHeight: 29,
      height: 29,
      fontSize: "13px",
      borderRadius: "8px",
      backgroundColor: isDisabled
        ? "#f3f4f6"
        : "var(--input-enable-bg)",
      borderColor: hasError
        ? "red"
        : state.isFocused
          ? "var(--input-enable-border)"
          : "var(--input-enable-border)",
      boxShadow: "none",
      "&:hover": {
        borderColor: "var(--input-enable-border)",
      },
    }),

    valueContainer: (base) => ({
      ...base,
      height: 29,
      padding: "0 8px",
    }),

    indicatorsContainer: (base) => ({
      ...base,
      height: 29,
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--text-color)",
      "&:hover": {
        color: "var(--text-color)",
      },
    }),

    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
      fontSize: "14px",
    }),

    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      fontSize: "12px",
      color: "var(--text-color)",
    }),

    singleValue: (base) => ({
      ...base,
      color: "var(--text-color)",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "var(--input-enable-bg)",
      border: "1px solid var(--input-enable-border)",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
      zIndex: 9999,
    }),

    menuList: (base) => ({
      ...base,
      padding: "4px",
      backgroundColor: "var(--input-enable-bg)",
      borderRadius: "8px",
    }),

    option: (base, state) => ({
      ...base,
      fontSize: "13px",
      borderRadius: "6px",
      backgroundColor: state.isSelected
        ? "var(--submit-button-bg)"
        : state.isFocused
          ? "rgba(255,255,255,0.08)"
          : "transparent",
      color: state.isSelected
        ? "#fff"
        : "var(--text-color)",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "var(--submit-button-bg)",
      },
    }),

    noOptionsMessage: (base) => ({
      ...base,
      color: "var(--text-color)",
      fontSize: "13px",
      backgroundColor: "var(--input-enable-bg)",
    }),
  });

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
      <div className="h-full flex flex-col bg-[var(--bg-main-container)] mt-1 rounded-2xl">
        <div className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 -ml-0.5">
          <h3>Alert For Blaine Prediction</h3>
        </div>
        <div>
          <div className="w-full rounded-xl border border-[var(--form-border)] px-2 py-1 mt-1 " style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div >
                <label className="text-[14px] text-[var(--text-color)]">Select Plant</label>
                <Select
                  formatOptionLabel={formatOptionLabel}
                  styles={getCompactSelectStyles(false, false)}
                  name="plant"
                  value={selectedVlaues.plant !== "" && plantOptionList.filter((val) => val.value === selectedVlaues.plant)}
                  options={plantOptionList}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => handleChangeSelect(e, "plant")}
                  isClearable={true}
                />
              </div>

              <div >
                <label className="text-[14px] text-[var(--text-color)]">Select Mill</label>
                <Select
                  formatOptionLabel={formatOptionLabel}
                  styles={getCompactSelectStyles(false, false)}
                  name="mill"
                  value={selectedVlaues.mill !== "" && millOptionList.filter((val) => val.value === selectedVlaues.mill)}
                  options={millOptionList}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => handleChangeSelect(e, "mill")}
                  isClearable={true}
                />
              </div>
              <div className="flex justify-center items-center gap-1">
                <button
                  className="px-4 py-1  rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200"
                  disabled={selectedVlaues.plant === "" || selectedVlaues.mill === ""}
                  onClick={handleAddCard}
                >
                  Add
                </button>
                {cardAddError !== "" && <div className="text-red-500 text-sm font-semibold">{cardAddError}</div>}

              </div>

              {/* <div>
            <label >Select Grade</label>
            <Select
              name="grade"
              value={selectedVlaues.grade}
              options={gradeOptionList}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e)=> handleChangeSelect(e, "grade")}
              
              // closeMenuOnSelect={false}
              // hideSelectedOptions={false}
              // components={{
                //   Option: InputOption,
                // }}
                // isClearable={false}
                />
          </div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
              {Object.keys(cardValues)
                .sort()
                .map((val, index) => alertCard(val, index))}
            </div>
          </div></div>
        {/* <div>
          {submitLoader && loader}
          <button
            className="btn btn-primary mt-2"
            disabled={submitLoader}
            onClick={submitSetting}
          >
            Submit
          </button>
        </div> */}
        {apiError !== "" && <div className="text-red-500 text-sm mt-3">{apiError}</div>}
      </div>
      <ToastContainer />
    </>
  );
};

export default AlertForBlaine;