// import axios from "axios";
// import { config } from "../config";
// import { useState, useEffect } from "react";

// import Select from "react-select";

// import "../styles/TemplateFilter.css";
// import Loader from "react-js-loader";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthenticatedTemplate } from "@azure/msal-react";
// import { BiChevronLeft } from "react-icons/bi";
// import { BsQuestionCircle } from "react-icons/bs";
// import { Form,Modal,Button } from "react-bootstrap";
// import useToken from "../utils/useToken";
// import { accessLogApi } from "../utils/AccessLogApi";
// import { MdClose } from "react-icons/md";
// export const TemplateFilter = () => {
//   const loader = (
//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={50}
//     />
//   );

//   //chelckbox

//   const { state } = useLocation();
//   const { token, setToken } = useToken();
//   const navigate = useNavigate();
//   const [submitLoader, setSubmitLoader] = useState(false);
//   const [allData, setAllData] = useState([]);
//   const [TemplateOptions, setTemplateOptions] = useState([]);
//   const [smsRecepientsOptions, setSmsRecepientsOptions] = useState([]);
//   const [smsRecepients, setSmsRecepients] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editValue,setEditValue] = useState(false)
//   const [paramAddFlag,setParamAddFlag] = useState(false)
//   const [conditions, setConditions] = useState({
//     Min: "",
//     Max: "",
//     Duration: "",
//   });
//   let conditionDesc = [
//     "Lower bound of efficiency drop in percentage",
//     "Upper bound of efficiency drop in percentage",
//     "Time period till which the drop must sustain to trigger the alert",
//   ];
//   const [dropdownData, setDropdownData] = useState({});
//   const [templateName, setTemplateName] = useState("");
//   const [selectedValues, setSelectedValues] = useState({
//     PlantName: "",
//     FanName: "Other",
//     Parameters: "",
//     activeStatus: "Active",
//     UseCase: "",
//   });
//   const [optionList, setOptionList] = useState({
//     PlantName: [],
//     FanName: [],
//     Parameters: [],
//     Tags: [],
//     UseCase: [],
//     activeStatus: [
//       { label: "Active", value: "Active" },
//       { label: "Inactive", value: "Inactive" },
//     ],
//   });

//   const [openModal,setOpenModal] = useState(false);
//   const [cycloneSelectedStage, setCycloneSelectedStage] = useState({
//     "value": 0,
//     "label": ""
//   });

//   const AlertOptionsList =
//   selectedValues.UseCase==="Trend Violation"?[
//     { label: "Email", value: "Email" },
//     { label: "SMS", value: "SMS" },
//     { label: "Both", value: "Both" },
//   ] :
//   [
//     { label: "Email", value: "Email" },
//   ]
//   const RunnningStatusAlertOptionsList = [
//     { label: "On Change", value: "On Change" },
//     { label: "On Start", value: "On Start" },
//     { label: "On Stop", value: "On Stop" },
//   ];

//   const [parameterList, setParameterList] = useState({});
//   const [isInfoViewOpen, setIsInfoViewOpen] = useState(false);
//   const [errorData, setErrorData] = useState("");
//   const [dynamicparameterOptionList, setDynamicparameterOptionList] = useState(
//     []
//   );
//   const [dynamicParameterSelctList, setDynamicParameterSelctList] = useState(
//     []
//   );

//   let CycloneStageList = [
//     {
//       "value": 4,
//       "label": "Stage 4"
//     },
//     {
//       "value": 5,
//       "label": "Stage 5"
//     },
//     {
//       "value": 6,
//       "label": "Stage 6"
//     },

//   ]
//   const getAlldata = async() => {
//     await axios
//       .post(
//         config.BaseUrl + "/cbm/plant/getAllPalntData",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
//               }`,
//           },
//         }
//       )
//       .then((res) => {
//         // setAllData(res.data.result);
//         setAllData([...res.data.result]);
//         // res = res.data.result;
//         let tOption = { ...optionList };
//         res &&
//         res.data.result.map((val) => {
//             val.Parameters = val.Parameters.replace("/", "!");
//           });
//         // console.log(token.Role,"sssssssssssss")
//         if (token?.Role !== "" || token?.Role === "super_admin" || token?.Role === "admin") {
//           tOption.UseCase = [
//             "Fan Efficiency",
//             "Asset Details",
//             "Trend Violation",
//             "Custom Alerts",
//             "False Air",
//             "Cyclone Efficiency"
//           ].map((val) => {
//             return {
//               value: val,
//               label: val,
//             };
//           });
//         }
//         // } else {
//         //   tOption.UseCase = [
//         //     "Fan Efficiency",
//         //     "Asset Details",
//         //     "Trend Violation",
//         //     "Custom Alerts",
//         //     "False Air"
//         //   ].map((val) => {
//         //     return {
//         //       value: val,
//         //       label: val,
//         //     };
//         //   });
//         // }

//         tOption.FanName = ["Fan", "Drive", "Roller Press", "Other"].map((val) => {
//           return {
//             value: val,
//             label: val,
//           };
//         });
//         if (localStorage.getItem("login")) {
//           let t = JSON.parse(localStorage.getItem("login"));
//           tOption.PlantName = t?.plants.map((val) => {
//             return {
//               value: val,
//               label: val,
//             };
//           });
//         }

//         setOptionList(tOption);
//       })
//       .catch((err) => {
//         console.log(err.message);
//         toast.error(err.message);
//       });
//   };
//   let editParamList;
//   const setTemplateData = () => {
//     // debugger
//     let EditData = state?.rowdata;
//     if (state?.copyData) {
//       EditData = state?.copyData;

//       EditData.TemplateName = EditData.TemplateName.includes("- Copy") ? EditData.TemplateName : EditData.TemplateName + "- Copy";
//     }

//     setTemplateName(EditData.TemplateName);

//     let Temp = { ...selectedValues };

//     Temp.PlantName = EditData.PlantName;
//     Temp.UseCase = EditData.UseCase;
//     Temp.FanName = EditData.FanName;
//     Temp.activeStatus = EditData.Status;
//     // let tempOBJ = {};
//     let x = {};

//     let tempOBJ;
//     // debugger;
//     if(paramAddFlag  && Temp.UseCase === "Trend Violation"){
//        tempOBJ= {...parameterList};
//        EditData.Parameters = tempOBJ
//     }else{
//        tempOBJ = {};
//     }

//     if (EditData.UseCase === "Trend Violation" || EditData.UseCase === "Custom Alerts") {
//       if (EditData.Parameters.smsRecepients) {
//         setSmsRecepients([...EditData.Parameters.smsRecepients])
//         // console.log(EditData.Parameters.smsRecepients,"pppppp1111111pppppp")
//         delete EditData.Parameters.smsRecepients
//       }
//       setParameterList(EditData.Parameters);
//       // console.log(EditData.Parameters,"pppppppppppp")

//     }
//     if (
//       EditData.UseCase === "Trend Violation" ||
//       EditData.UseCase === "Custom Alerts" ||
//       EditData.UseCase === "Asset Details"
//     ) {
//       allData.map((val) => {
//         if (val.UseCase === Temp.UseCase) {
//           if (
//             Temp.UseCase === "Trend Violation" ||
//             Temp.UseCase === "Custom Alerts" ||
//             Temp.UseCase === "Asset Details"

//           ) {
//             x[val.Parameters] = {
//               label: val.Parameters,
//               value: val.Parameters,
//             };
//           } else {
//             tempOBJ[val.Parameters] = { constent: 0, variable: "" };
//           }
//         }
//       });
//       setParameterList(EditData.Parameters);
//       if (Temp.UseCase === "Asset Details") {
//         x["MTBS"] = { value: "MTBS", label: "MTBS" };
//         Object.keys(EditData.Parameters).map((val) => {
//           if (isNaN(EditData.Parameters[val])) {
//             tempOBJ[val] = { constent: 0, variable: EditData.Parameters[val] };
//           } else {
//             tempOBJ[val] = {
//               constent:
//                 EditData.Parameters[val] === null
//                   ? 0
//                   : EditData.Parameters[val],
//               variable: "",
//             };
//           }
//         });
//         setParameterList(tempOBJ);
//       }
//       setDynamicparameterOptionList(Object.values(x));
//       editParamList = Object.keys(EditData.Parameters).map((val) => {
//         return { label: val, value: val };
//       });
//       setDynamicParameterSelctList(editParamList);
//     } else
//       if (EditData.UseCase === "Cyclone Efficiency") {
//         setParameterList(EditData.Parameters)
//         setCycloneSelectedStage(CycloneStageList.filter(val => val.value === Object.keys(EditData.Parameters["Cyclone"]).length))
//       }else
//       if (EditData.UseCase === "Custom Alerts") {
//         setParameterList(EditData.Parameters)
//         }
//       else {
//         Object.keys(EditData.Parameters).map((val) => {
//           if (isNaN(EditData.Parameters[val])) {
//             tempOBJ[val] = { constent: 0, variable: EditData.Parameters[val] };
//           } else {
//             tempOBJ[val] = {
//               constent:
//                 EditData.Parameters[val] === null ? 0 : EditData.Parameters[val],
//               variable: "",
//             };
//           }
//         });
//         setParameterList(tempOBJ);
//       }
//     setConditions(EditData.Conditions);
//     // console.log(Temp,"tttttt")
//     setSelectedValues(Temp);

//     state.EditFlag = false;
//     setEditValue(true)
//   };

//   useEffect(() => {
//     // debugger
//     getAlldata();

//     // getTemplateData();
//     // getSmsRecepients();
//   }, []);
//   useEffect(() => {
//     accessLogCBM()
//     getTagList();
//   }, [selectedValues.PlantName]);
//   useEffect(() => {
//     if (selectedValues.UseCase === "Trend Violation") {
//       getSmsRecepients();
//     }
//     if (selectedValues.UseCase === "Asset Details") {
//       getTemplateData();
//     }

//   }, [selectedValues.UseCase]);
//   useEffect(() => {
//     let val={
//       value: 'Trend Violation', label: 'Trend Violation'
//     }

//     let event = {
//       action:"select-option",
//       name:"UseCase",
//       option:undefined
//     }

//     if (
//       state?.rowdata === undefined &&
//       window.location.href.split("/").pop() === "editTemplate"
//     ) {
//       navigate("/templates");
//     }
//     if (
//       allData.length > 0 &&
//       (state?.rowdata || state?.copyData) &&
//       state.EditFlag
//     ) {
//       setTemplateData();
//       getTagList();
//     }
//     if(Object.keys(allData).length>0 && selectedValues.UseCase==="Trend Violation" &&  state?.EditFlag === undefined){
//       handleChange(val,event)
//     }
//   }, [allData]);

//   const accessLogCBM=()=>{
//     let payload = {
//       userId: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//       ip: "",
//       module: "CBM",
//       plant: "-",
//       url: window.location.href,
//       options: "",
//       plant_or_section: "CBM",
//     };
//     accessLogApi(payload)
//   }

//   const getSmsRecepients = () => {
//     let payload = {
//       userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//     };
//     axios
//       .post(config.BaseUrl + "/cbm/template/getSmsRecepients", payload, {
//         headers: {
//           Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
//             }`,
//         },
//       })
//       .then((res) => {
//         res = res.data.result;
//         if (res === "No Records Found") {
//           setSmsRecepientsOptions([]);
//         } else {

//           // console.log(res, "rrrrrrrrrrrrr")
//           let temp = {}

//           res.map((val) => {
//             temp[val.UserID] = {
//               label: val.UserID + " - " + val.SMS_Limit,
//               value: val.UserID
//             }
//           })
//           setSmsRecepientsOptions(Object.values(temp));
//         }
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };
//   const getTemplateData = () => {
//     let payload = {
//       userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//     };
//     axios
//       .post(config.BaseUrl + "/cbm/template/getTemplateData", payload, {
//         headers: {
//           Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
//             }`,
//         },
//       })
//       .then((res) => {
//         res = res.data.result;
//         if (res === "No Records Found") {
//           setTemplateOptions([]);
//         } else {
//           let TempList = {};
//           res.map((val) => {
//             if (val.UseCase === "Fan Efficiency")
//               TempList[val.TemplateName + val.Timestamp] = {
//                 value: val.TemplateName,
//                 label: val.TemplateName,
//                 Timestamp: val.Timestamp,
//               };
//           });
//           TempList = Object.values(TempList);

//           setTemplateOptions(TempList);
//         }
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };

//   const getTagList = () => {
//     let payload = {
//       PlantName: selectedValues.PlantName,
//     };
//     if (state?.rowdata) {
//       payload.PlantName = state?.rowdata?.PlantName;
//     }
//     if (state?.copyData) {
//       payload.PlantName = state?.copyData?.PlantName;
//     }
//     let tOption = { ...optionList };
//     if (payload.PlantName !== "") {
//       axios
//         .post(config.BaseUrl + "/cbm/plant/getPlantAllTags", payload, {
//           headers: {
//             Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
//               }`,
//           },
//         })
//         .then((res) => {
//           res = res.data.result;
//           tOption.Tags = [];
//           if (res === "No Records Found") {
//             toast.warning("No Tags Found for Plant " + payload.PlantName);
//             tOption.Tags = []
//             setOptionList(tOption);
//           } else {
//             res.map((val) => {
//               tOption.Tags.push({
//                 value: val["Tag UID"],
//                 label: `${val["Tag UID"]} \n Desc: ${val["Description"]}`,
//                 vibrationType: val["Variable Type"] === "Vibration"
//               });
//             });
//             tOption.Tags.unshift({ value: "", label: "Select..." });
//             setOptionList(tOption);
//           }
//         })
//         .catch((err) => {
//           console.log(err.message);
//           toast.error(err.message);
//         });
//     }
//   };

//   const handleChange = (val, event) => {
//     // debugger;
//     let Temp = { ...selectedValues };
//     Temp[event.name] = val.value;

//     if (Temp[event.name] !== "" && event.name === "UseCase") {
//       let tempOBJ;
//       if(paramAddFlag  && Temp.UseCase === "Trend Violation"){
//          tempOBJ= {...parameterList};
//       }else{
//          tempOBJ = {};
//       }
//       let x = {};
//       allData.map((val) => {
//         if (val.UseCase === Temp.UseCase) {
//           if (
//             Temp.UseCase === "Trend Violation" ||
//             Temp.UseCase === "Custom Alerts" ||
//             Temp.UseCase === "Asset Details"
//           ) {
//             x[val.Parameters] = {
//               label: val.Parameters,
//               value: val.Parameters,
//             };
//           } else {
//             tempOBJ[val.Parameters] = { constent: 0, variable: "" };
//           }
//         }
//       });
//       if (Temp.UseCase === "Asset Details") {
//         x["MTBS"] = { value: "MTBS", label: "MTBS" };
//       }
//       if (Temp.UseCase !== "Cyclone Efficiency") {
//         setCycloneSelectedStage({
//           "value": 0,
//           "label": ""
//         })
//       }
//       setDynamicparameterOptionList(Object.values(x));
//       if (paramAddFlag  && Temp.UseCase === "Trend Violation"){
//         // setDynamicParameterSelctList([]);
//       }else{
//         setDynamicParameterSelctList([]);
//       }
//       setParameterList(tempOBJ);
//     }
//     if (Temp[event.name] !== "" && event.name === "PlantName") {
//       let tempParameterList = { ...parameterList }
//       if (Temp.UseCase === "Cyclone Efficiency") {
//         for (let type in tempParameterList) {
//           for (let stage in tempParameterList[type]) {
//             for (let tag in tempParameterList[type][stage]) {
//               tempParameterList[type][stage][tag] = ""

//             }
//           }
//         }
//       }
//       if (Temp.UseCase === "Custom Alerts") {
//         Object.keys(tempParameterList).map((val, index) => {
//           tempParameterList[val].TagType1 =  [
//             { "tag1": "",
//             "labeltag1":""
//             },
//             { "tag2": "",
//             "labeltag2":""
//             },
//             { "tag3": "",
//             "labeltag3":""
//             },
//             { "tag4": "",
//             "labeltag4":""
//             }
//             ]
//           tempParameterList[val].TagType2 = [
//             { "tag1": "",
//             "labeltag1":""
//             },
//             { "tag2": "",
//             "labeltag2":""
//             },
//             { "tag3": "",
//             "labeltag3":""
//             },
//             { "tag4": "",
//             "labeltag4":""
//             }
//             ]
//         })
//       }

//       else {
//         Object.keys(tempParameterList).map((val, index) => {
//           tempParameterList[val].variable = ""
//         })
//       }
//       setParameterList(tempParameterList)

//     }

//     setSelectedValues(Temp);
//     setParamAddFlag(false)
//   };

//   const handleChangeSelect = (val, event) => {
//     let Temp = { ...parameterList };
//     Temp[event.name].variable = val.value;
//     Temp[event.name].constent = 0;
//     Temp[event.name].vibrationType = val.vibrationType;

//     setParameterList(Temp);
//   };
//   const handleChangeSelectAFR = (val, event, tagParameter) => {
//     let Temp = { ...parameterList };
//     Temp[event.name][tagParameter] = val.value;
//     Temp[event.name].constent = 0;
//     Temp[event.name].vibrationType = val.vibrationType;
//     // console.log(val, Temp)
//     setParameterList(Temp);
//   };
//   const handleChangeSelectCustomAlerts = (val, event, tagType, index) => {
//     // console.log("val", val)
//     let Temp = { ...parameterList };
//     Temp[event.name][tagType][index]["tag"+(index+1)] = val.value;
//     Temp[event.name][tagType][index]["labeltag"+(index+1)] = "";
//     setParameterList(Temp);
//   };
//   const handleChangeLabelCustomAlerts = (event, tagType, index) => {
//     let Temp = { ...parameterList };
//     Temp[event.target.name][tagType][index]["labeltag"+(index+1)] = event.target.value;
//     // console.log(Temp)
//     setParameterList(Temp);
//   };

//   const handleChangeInputValue = (e) => {
//     let Temp = { ...parameterList };
//     Temp[e.target.name].constent = e.target.value;

//     setParameterList(Temp);
//   };

//   const handleChangeInputConditions = (e) => {
//     let Temp = { ...conditions };
//     Temp[e.target.name] = e.target.value;

//     setConditions(Temp);
//   };

//   const handleChangeParameterSelectAsset = (e) => {
//     let tempParameterList = { ...parameterList };
//     let tempParameterList1 = {};
//     e.map((val) => {
//       if (tempParameterList[val.value]) {
//         tempParameterList1[val.value] = tempParameterList[val.value];
//       } else {
//         tempParameterList1[val.value] = {
//           variable: "",
//         };
//       }
//     });
//     setParameterList(tempParameterList1);
//     setDynamicParameterSelctList(e);
//   };
//   const handleChangeSmsRecepient = (e) => {
//     // console.log(e)
//     setSmsRecepients(e)
//   };

//   const handleChangeParameterSelectTrend = (e) => {
//     let tempParameterList = { ...parameterList };
//     let tempParameterList1 = {};
//     e.map((val) => {
//       if (tempParameterList[val.value]) {
//         tempParameterList1[val.value] = tempParameterList[val.value];
//       } else {
//         tempParameterList1[val.value] = {
//           uidType: "Analog",
//           alertType: "Email",
//           variable: "",
//           vibrationType: "",
//           timeDelay: "",
//           snoozeTime: "",
//           alertFor: "Both",
//           Hi: "",
//           HiHi: "",
//           Low: "",
//           LowLow: "",
//           tag1: "",
//           tag2: "",
//           startValue: "",
//           stopValue: "",
//           runningStatusAlert: "On Change",
//         };
//         if (val.value.includes("Flyash %")) {
//           tempParameterList1[val.value].uidType = "Flyash %"
//         }
//       }
//     });
//     setParameterList(tempParameterList1);
//     setDynamicParameterSelctList(e);
//   };
//   const handleChangeParameterSelectCustomAlerts = (e) => {
//     let tempParameterList = { ...parameterList };
//     let tempParameterList1 = {};
//     e.map((val) => {
//       if (tempParameterList[val.value]) {
//         tempParameterList1[val.value] = tempParameterList[val.value];
//       } else {
//         tempParameterList1[val.value] = {
//           "alertType": "Email",
//           "timeDelay": "",
//           "snoozeTime": "",
//           "Low": "",
//           "Adjustment":"",
//           "TagType1": [
//             { "tag1": "",
//             "labeltag1":""
//             },
//             { "tag2": "",
//             "labeltag2":""
//             },
//             { "tag3": "",
//             "labeltag3":""
//             },
//             { "tag4": "",
//             "labeltag4":""
//             }
//             ],
//           "TagType2": [
//             { "tag1": "",
//             "labeltag1":""
//             },
//             { "tag2": "",
//             "labeltag2":""
//             },
//             { "tag3": "",
//             "labeltag3":""
//             },
//             { "tag4": "",
//             "labeltag4":""
//             }
//             ],

//         };
//         if (val.value.includes("Flyash %")) {
//           tempParameterList1[val.value].uidType = "Flyash %"
//         }
//       }
//     });
//     setParameterList(tempParameterList1);
//     setDynamicParameterSelctList(e);
//   };

//   const SendData = () => {
//     if (selectedValues.UseCase === "Fan Efficiency") {
//       if (
//         conditions.Duration === "" ||
//         conditions.Min === "" ||
//         conditions.Max === ""
//       ) {
//         toast.error("Please Fill Alert Conditions");
//         return;
//       }
//       if (parseInt(conditions.Min) >= parseInt(conditions.Max)) {
//         toast.error("Min value can not be greater then max");
//         return;
//       }
//     }
//     let f = 0;
//     if (selectedValues.UseCase === "Trend Violation") {
//       Object.keys(parameterList).forEach((val) => {
//         if (f === 1) {
//           return;
//         }
//         if (parameterList[val].uidType === "Flyash %" && parameterList[val].tag1 === "") {
//           toast.error("Please Select Tag 1 Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].uidType === "Flyash %" && parameterList[val].tag2 === "") {
//           toast.error("Please Select Tag 2 Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].uidType !== "Flyash %" && parameterList[val].variable === "") {
//           toast.error("Please Select Variable Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].timeDelay === "") {
//           toast.error("Please Enter Time Delay Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].snoozeTime === "") {
//           toast.error("Please Enter Snooze Time Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].uidType === "Analog") {
//           if (parameterList[val].alertFor === "Both" || parameterList[val].alertFor === "Hi-HiHi") {
//             if (parameterList[val].Hi === "") {
//               toast.error("Please Enter Hi Value for " + val);
//               f = 1;
//               return;
//             }
//             if (parameterList[val].HiHi === "") {
//               toast.error("Please Enter HiHi Value for " + val);
//               f = 1;
//               return;
//             }
//           }
//           if (parameterList[val].alertFor === "Both" || parameterList[val].alertFor === "Low-LowLow") {
//             if (parameterList[val].Low === "") {
//               toast.error("Please Enter Low Value for " + val);
//               f = 1;
//               return;
//             }
//             if (parameterList[val].LowLow === "") {
//               toast.error("Please Enter LowLow Value for " + val);
//               f = 1;
//               return;
//             }
//           }
//         }
//         if (parameterList[val].uidType === "Digital") {
//           if (parameterList[val].startValue === "") {
//             toast.error("Please Enter Start Value for " + val);
//             f = 1;
//             // console.log("hiuiii", f);
//             return;
//           }
//           if (parameterList[val].stopValue === "") {
//             toast.error("Please Enter Stop Value for " + val);
//             f = 1;
//             return;
//           }
//         }
//       });
//     }
//     if (selectedValues.UseCase === "Custom Alerts") {
//       Object.keys(parameterList).forEach((val) => {
//         if (f === 1) {
//           return;
//         }

//         let type1hastag = 0
//         parameterList[val].TagType1.forEach ((v1,index)=>{
//           if (v1["tag"+(index+1)] !== "")
//           {type1hastag = 1
//             if (v1["labeltag"+(index+1)] === ""){

//               toast.error("Please Enter label for tagType1 tag " +(index +1)+" in  " + val);
//               f=1
//               return
//             }
//           }
//         })
//         if(!type1hastag){
//           toast.error("Please select least one tag for tagType1 in " + val);
//           f=1
//           return
//         }

//         if (f === 1) {
//           return;
//         }

//         let type2hastag = 0
//         parameterList[val].TagType2.forEach ((v1,index)=>{
//           if (v1["tag"+(index+1)] !== "")
//           {type2hastag = 1
//             if (v1["labeltag"+(index+1)] === ""){

//               toast.error("Please Enter label for tagType2 tag " +(index +1)+" in  " + val);
//               f=1
//               return
//             }
//           }
//         })
//         if(!type2hastag){
//           toast.error("Please select least one tag for tagType2 in " + val);
//           f=1
//           return
//         }
//         if (f === 1) {
//           return;
//         }
//         if (parameterList[val].Adjustment === "") {
//           toast.error("Please Enter Adjustment Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].Low === "") {
//           toast.error("Please Enter Low Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].timeDelay === "") {
//           toast.error("Please Enter Time Delay Value for " + val);
//           f = 1;
//           return;
//         }
//         if (parameterList[val].snoozeTime === "") {
//           toast.error("Please Enter Snooze Time Value for " + val);
//           f = 1;
//           return;
//         }

//       });
//     }
//     // if (selectedValues.UseCase === "Cyclone Efficiency") {
//     //   for (let type in parameterList){
//     //     for(let stage in parameterList[type]){
//     //       for (let tag in parameterList[type][stage]){
//     //         if (parameterList[type][stage][tag] === ""){
//     //           toast.error("Please Select " + (tag === "T1" ? "Tgo": "Tmo")+ "  Value for " + stage+ " in " + type);
//     //           f = 1;
//     //           return;
//     //         }
//     //         }
//     //     }
//     //   }
//     // }
//     if (f === 1) {
//       return;
//     }

//     // returnz;
//     let postUrl = config.BaseUrl + "/cbm/template/sendTemplateData";
//     let payload = {
//       userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//       templateName: templateName,
//       PlantName: selectedValues.PlantName,
//       UseCase: selectedValues.UseCase,
//       FanName: selectedValues.FanName,
//       activeStatus: selectedValues.activeStatus,
//       Parameters: {},
//       conditions: conditions,
//     };
//     if (state?.rowdata) {
//       postUrl = config.BaseUrl + "/cbm/template/editTemplate";
//       payload.TimeStamp = state.rowdata.Timestamp;
//     }
//     if (selectedValues.UseCase === "Trend Violation") {
//       let Pjson = {};
//       Object.keys(parameterList).map((val) => {
//         Pjson[val] = parameterList[val];
//         if (parameterList[val].uidType === "Digital") {
//           parameterList[val].vibrationType = "";
//           parameterList[val].Hi = "";
//           parameterList[val].HiHi = "";
//         } else {
//           parameterList[val].startValue = "";
//           parameterList[val].stopValue = "";
//           parameterList[val].runningStatusAlert = "";
//         }
//       });
//       payload.Parameters = Pjson;
//       payload.Parameters.smsRecepients = smsRecepients
//     }
//     else if (selectedValues.UseCase === "Cyclone Efficiency") {
//       payload.Parameters = { ...parameterList }
//     }
//     else if (selectedValues.UseCase === "Custom Alerts") {
//       payload.Parameters = { ...parameterList }

//     }
//     else {
//       Object.keys(parameterList).map((val) => {
//         payload.Parameters[val] =
//           parameterList[val].constent === 0 &&
//             parameterList[val].variable !== ""
//             ? parameterList[val].variable
//             : parameterList[val].constent == 0
//               ? null
//               : parameterList[val].constent;
//       });
//     }

//     // console.log(Pjson);
//     // console.log(payload, "aa");
//     setSubmitLoader(true);
//     axios
//       .post(postUrl, payload, {
//         headers: {
//           Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
//             }`,
//         },
//       })
//       .then((res) => {
//         res = res.data.result;
//         setSelectedValues({
//           PlantName: "",
//           FanName: "",
//           Parameters: "",
//           Tags: "",
//           activeStatus: "Active",
//           UseCase: "",
//         });
//         setParameterList({});
//         setTemplateName("");
//         setConditions({
//           Min: "",
//           Max: "",
//           Duration: "",
//         });
//         if (state?.rowdata) {
//           toast.success("Template Updated Successfully.");
//         } else {
//           toast.success("Template Added Successfully.");
//         }
//         setSubmitLoader(false);
//         navigate("/templates");
//       })
//       .catch((err) => {
//         if (err?.response?.data?.result) {
//           toast.error(err?.response?.data?.result);
//         } else {
//           toast.error(err.message);
//         }
//         setSubmitLoader(false);
//         // console.log(err.response.data.result);
//       });
//   };

//   const FanEfficiencyView = () => {
//     return (
//       <div className="mt-4">
//         {Object.keys(parameterList).length > 0 && (
//           <div className="d-flex justify-content-between align-items-center">
//             <h6>Parameters</h6>
//             <div className="perameterContainer">
//               <h6> Constant Values</h6>
//               <h6> Variable Values </h6>{" "}
//             </div>
//           </div>
//         )}
//         {Object.keys(parameterList).length > 0 &&
//           Object.keys(parameterList).map((val, index) => {
//             return (
//               <div
//                 className="d-flex justify-content-between align-items-center"
//                 key={index}
//               >
//                 <label>{val}</label>
//                 <div className="perameterContainer">
//                   <input
//                     name={val}
//                     placeholder={"Enter " + val}
//                     type="number"
//                     min={0}
//                     onChange={(e) => handleChangeInputValue(e)}
//                     value={parameterList[val].constent}
//                     disabled={parameterList[val].variable !== ""}
//                     className="form-control"
//                   />

//                   {!val.includes("Designed") && (
//                     <Select
//                       value={
//                         parameterList[val].variable !== "" && {
//                           value: parameterList[val].variable,
//                           label: parameterList[val].variable,
//                         }
//                       }
//                       placeholder={"Select " + val + " Tag"}
//                       name={val}
//                       onChange={(e, name) => handleChangeSelect(e, name)}
//                       options={optionList.Tags}
//                       isDisabled={selectedValues.PlantName === ""}
//                       className="basic-multi-select parameterSelect"
//                       classNamePrefix="select"
//                     />
//                   )}
//                   <div className="colcustom-2 pl-2 pr-2 cutomremoveindi ">
//                     {parameterList[val].variable !== "" && (
//                       <button
//                         onClick={() => {
//                           let temp = { ...parameterList };
//                           temp[val].variable = "";
//                           setParameterList(temp);
//                         }}
//                         className="p-2 btn btnfrst parameterCross"
//                       >
//                         X
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         {Object.keys(parameterList).length > 0 && (
//           <div className="conditionContainer">
//             <label style={{ fontWeight: "bold", padding: "10px 10px" }}>
//               Alert Conditions
//             </label>
//             {Object.keys(conditions).map((val, i) => {
//               return (
//                 <>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <label>
//                       {val} {i !== 2 ? "Value (%)" : "(min)"}
//                     </label>
//                     <div className="perameterContainer">
//                       <input
//                         name={val}
//                         placeholder={
//                           "Enter " + (i !== 2 ? "Value (%)" : "(min)")
//                         }
//                         onChange={(e) => handleChangeInputConditions(e)}
//                         value={conditions[val]}
//                         type="number"
//                         className="form-control"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       marginLeft: "10px",
//                       fontSize: "14px",
//                       color: "gray",
//                     }}
//                   >
//                     {conditionDesc[i]}
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         )}
//         {ActiveStatusView()}
//         {submitButtonView()}
//       </div>
//     );
//   };

//   const FalseAirView = () => {
//     return (
//       <div className="settingContainer">
//         {Object.keys(parameterList).length > 0 && (
//           <div className="d-flex justify-content-between align-items-center">
//             <h6>Parameters</h6>
//             <div className="perameterContainer">
//               <h6> Variable Values</h6>
//             </div>
//           </div>
//         )}
//         {Object.keys(parameterList).length > 0 &&
//           Object.keys(parameterList).map((val, index) => {
//             return (
//               <div
//                 className="d-flex justify-content-between align-items-center"
//                 key={index}
//               >
//                 <label>{val}</label>
//                 <div className="perameterContainer">
//                   <Select
//                     value={
//                       parameterList[val].variable !== "" && {
//                         value: parameterList[val].variable,
//                         label: parameterList[val].variable,
//                       }
//                     }
//                     placeholder={"Select " + val + " Tag"}
//                     name={val}
//                     onChange={(e, name) => handleChangeSelect(e, name)}
//                     options={optionList.Tags}
//                     isDisabled={selectedValues.PlantName === ""}
//                     className="basic-multi-select w-100"
//                     classNamePrefix="select"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         {ActiveStatusView()}
//         {submitButtonView()}
//       </div>
//     );
//   };

//   const CycloneEfficiencyView = () => {

//     const handleChangeSelectCycloneTags = (val, event) => {

//       let Temp = { ...parameterList };
//       let cp = event.name.split(" ")
//       Temp[cp[0]][cp[1]][cp[2]] = val.value;

//       // console.log(Temp[cp[0]][cp[1]][cp[2]],val.value)
//       setParameterList(Temp);
//     };

//     const handleChangeParameterSelectCycloneStage = (e) => {
//       let tempParameterList = { ...parameterList }
//       tempParameterList.Cyclone = {}
//       tempParameterList.Klin = {}
//       for (let c = 1; c <= e.value; c++) {
//         tempParameterList.Cyclone["C" + c] = {
//           T1: "",
//           T2: "",
//         }
//         tempParameterList.Klin["K" + c] = {
//           T1: "",
//           T2: "",
//         }
//       }
//       // console.log(tempParameterList)
//       setParameterList(tempParameterList)
//       setCycloneSelectedStage(e)

//     }

//     return (
//       <div className="settingContainer">
//         <div>
//           <label> Select No of Stages</label>
//           <Select
//             // isMulti
//             value={cycloneSelectedStage.value !== 0 && cycloneSelectedStage}
//             placeholder={"Select Stages"}
//             name={"Parameter Select"}
//             onChange={(e) => handleChangeParameterSelectCycloneStage(e)}
//             options={CycloneStageList}
//             className="basic-multi-select "
//             classNamePrefix="select"
//           />
//         </div>
//         {Object.keys(parameterList).length > 0 && (
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex justify-content-between w-50 align-items-center">
//               <h6>Cyclone</h6>
//               <div className="perameterContainer">
//                 {/* <h6> Tag UID</h6> */}
//               </div>
//             </div>
//             <div className="d-flex justify-content-between w-50 align-items-center">
//               <h6>Klin</h6>
//               <div className="perameterContainer">
//                 {/* <h6> Tag UID</h6> */}
//               </div>
//             </div>
//           </div>
//         )}
//         {Object.keys(parameterList).length > 0 &&
//           Object.keys(parameterList.Cyclone).map((val, index) => {
//             let KlinKeys = Object.keys(parameterList.Klin)
//             return (
//               <div className="d-flex justify-content-between align-items-center " key={index}>
//                 <div className="d-flex justify-content-between w-50 align-items-center p-1">
//                   <label>{val}</label>
//                   <div className="perameterContainer w-75 ">
//                     <Select
//                       value={
//                         parameterList.Cyclone[val].T1 !== "" && {
//                           value: parameterList.Cyclone[val].T1,
//                           label: parameterList.Cyclone[val].T1,
//                         }
//                       }
//                       placeholder={"Select  " + val + " Tgo Tag"}
//                       name={"Cyclone " + val + " T1"}
//                       onChange={(e, name) => handleChangeSelectCycloneTags(e, name)}
//                       options={optionList.Tags}
//                       isDisabled={selectedValues.PlantName === ""}
//                       className="basic-multi-select w-100 p-1"
//                       classNamePrefix="select"
//                     />
//                     <Select
//                       value={
//                         parameterList.Cyclone[val].T2 !== "" && {
//                           value: parameterList.Cyclone[val].T2,
//                           label: parameterList.Cyclone[val].T2,
//                         }
//                       }
//                       placeholder={"Select  " + val + " Tmo Tag"}
//                       name={"Cyclone " + val + " T2"}
//                       onChange={(e, name) => handleChangeSelectCycloneTags(e, name)}
//                       options={optionList.Tags}
//                       isDisabled={selectedValues.PlantName === ""}
//                       className="basic-multi-select w-100 p-1"
//                       classNamePrefix="select"
//                     />
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-between w-50 align-items-center p-1">
//                   <label>{KlinKeys[index]}</label>
//                   <div className="perameterContainer w-75 ">
//                     <Select
//                       value={
//                         parameterList.Klin[KlinKeys[index]].T1 !== "" && {
//                           value: parameterList.Klin[KlinKeys[index]].T1,
//                           label: parameterList.Klin[KlinKeys[index]].T1,
//                         }
//                       }
//                       placeholder={"Select " + KlinKeys[index] + " Tgo Tag"}
//                       name={"Klin " + KlinKeys[index] + " T1"}
//                       onChange={(e, name) => handleChangeSelectCycloneTags(e, name)}
//                       options={optionList.Tags}
//                       isDisabled={selectedValues.PlantName === ""}
//                       className="basic-multi-select w-100 p-1"
//                       classNamePrefix="select"
//                     />
//                     <Select
//                       value={
//                         parameterList.Klin[KlinKeys[index]].T2 !== "" && {
//                           value: parameterList.Klin[KlinKeys[index]].T2,
//                           label: parameterList.Klin[KlinKeys[index]].T2,
//                         }
//                       }
//                       placeholder={"Select " + KlinKeys[index] + " Tmo Tag"}
//                       name={"Klin " + KlinKeys[index] + " T2"}
//                       onChange={(e, name) => handleChangeSelectCycloneTags(e, name)}
//                       options={optionList.Tags}
//                       isDisabled={selectedValues.PlantName === ""}
//                       className="basic-multi-select w-100 p-1"
//                       classNamePrefix="select"
//                     />
//                   </div>
//                 </div>

//               </div>

//             );
//           })}
//         {ActiveStatusView()}
//         {submitButtonView()}
//       </div>
//     );
//   };
//   const AssetDetailsView = () => {
//     return (
//       <div className="settingContainer">
//         <div>
//           <label> Parameter Select</label>
//           <Select
//             isMulti
//             value={dynamicParameterSelctList}
//             // value={Object.keys(parameterList).map((val) => {
//             //   return { value: val, label: val };
//             // })}
//             placeholder={"Select Parameters"}
//             name={"Parameter Select"}
//             onChange={(e) => handleChangeParameterSelectAsset(e)}
//             options={dynamicparameterOptionList}
//             className="basic-multi-select "
//             classNamePrefix="select"
//           />
//         </div>
//         {Object.keys(parameterList).length > 0 && (
//           <div className="d-flex justify-content-between align-items-center">
//             <h6>Parameters</h6>
//             <div className="perameterContainer">
//               <h6> Tag UID</h6>
//             </div>
//           </div>
//         )}
//         {Object.keys(parameterList).length > 0 &&
//           Object.keys(parameterList).map((val, index) => {
//             return (
//               <div
//                 className="d-flex justify-content-between align-items-center"
//                 key={index}
//               >
//                 <label>{val}</label>
//                 <div className="perameterContainer">
//                   {val === "Fan Efficiency" ? (
//                     <Select
//                       value={
//                         parameterList[val].variable !== "" && {
//                           value: parameterList[val].variable,
//                           label: parameterList[val].variable,
//                         }
//                       }
//                       placeholder={"Select " + val}
//                       name={val}
//                       onChange={(e, name) => handleChangeSelect(e, name)}
//                       options={TemplateOptions}

//                       className="basic-multi-select w-100"
//                       classNamePrefix="select"
//                     />
//                   ) : (
//                     <Select
//                       value={
//                         parameterList[val].variable !== "" && {
//                           value: parameterList[val].variable,
//                           label: parameterList[val].variable,
//                         }
//                       }
//                       placeholder={"Select " + val + " Tag"}
//                       name={val}
//                       onChange={(e, name) => handleChangeSelect(e, name)}
//                       options={optionList.Tags}
//                       isDisabled={selectedValues.PlantName === ""}
//                       className="basic-multi-select w-100"
//                       classNamePrefix="select"
//                     />
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         {ActiveStatusView()}
//         {submitButtonView()}
//       </div>
//     );
//   };

//   const smsRecepienView = () => {

//     return (
//       <div className="settingContainer">
//         <div>
//           <label> Select SMS Recepients</label>
//           <Select
//             isMulti
//             value={smsRecepients}
//             placeholder={"Select SMS Recepients"}
//             name={"SMS Recepients"}
//             onChange={(e) => handleChangeSmsRecepient(e)}
//             options={smsRecepientsOptions}
//             className="basic-multi-select "
//             classNamePrefix="select"
//           />
//         </div>
//       </div>
//     );
//   };

//   const ActiveStatusView = () => {
//     if (Object.keys(parameterList).length > 0)
//       return (
//         <div className="d-flex justify-content-between align-items-center">
//           <label>Active Status</label>
//           <div className="perameterContainer">
//             <Select
//               value={
//                 selectedValues.activeStatus !== "" && {
//                   value: selectedValues.activeStatus,
//                   label: selectedValues.activeStatus,
//                 }
//               }
//               placeholder={"Select Active Status"}
//               name="activeStatus"
//               onChange={(e, name) => handleChange(e, name)}
//               options={optionList.activeStatus}
//               className="basic-multi-select ActiveSelect w-100"
//               classNamePrefix="select"
//             />
//           </div>
//         </div>
//       );
//   };

//   const submitButtonView = () => {
//     if (Object.keys(parameterList).length > 0)
//       return (
//         <div className="mt-3 text-right">
//           {submitLoader && loader}
//           <button
//             className="btn btnfrst mr-1"
//             disabled={
//               templateName === "" ||
//               Object.keys(parameterList).length === 0 ||
//               submitLoader
//             }
//             onClick={() => SendData()}
//           >
//             {window.location.href.split("/").pop() === "editTemplate"
//               ? "Update"
//               : "Submit"}
//           </button>
//         </div>
//       );
//   };

//   const TrendParameterCard = (val) => {
//     // console.log(val,"cCC")
//     // debugger
//     return (
//       <div className="d-flex flex-wrap para-card mt-3">
//         <div className="d-flex justify-content-between w-100">
//           <label> Parameter Name - {val}</label>
//           <div className="d-flex ">

//             <Form.Check
//               className="mr-2"
//               type="radio"
//               id="uidType"
//               label={"Analog"}
//               disabled={val.includes("Flyash %")}
//               checked={parameterList[val].uidType === "Analog"}
//               onChange={(e) => {
//                 let tpar = { ...parameterList };
//                 if (e.target.checked) {
//                   tpar[val].uidType = "Analog";
//                 }
//                 setParameterList(tpar);
//               }}
//             />
//             <Form.Check
//               className="mr-2"
//               type="radio"
//               id="uidType"
//               label={"Digital"}
//               disabled={val.includes("Flyash %")}
//               checked={parameterList[val].uidType === "Digital"}
//               onChange={(e) => {
//                 let tpar = { ...parameterList };
//                 if (e.target.checked) {
//                   tpar[val].uidType = "Digital";
//                 }
//                 setParameterList(tpar);
//               }}
//             />
//             {val.includes("Flyash %") &&
//               <Form.Check
//                 type="radio"
//                 id="uidType"
//                 label={"Flyash %"}
//                 checked={parameterList[val].uidType === "Flyash %"}
//                 onChange={(e) => {
//                   let tpar = { ...parameterList };
//                   if (e.target.checked) {
//                     tpar[val].uidType = "Flyash %";
//                   }
//                   setParameterList(tpar);
//                 }}
//               />}
//           </div>
//           <div style={{ display: "inline-flex", alignItems: "center" }}>
//             <label style={{ marginRight: "10px" }}>Alert Type</label>

//             <Select
//               value={
//                 parameterList[val].alertType !== "" && {
//                   value: parameterList[val].alertType,
//                   label: parameterList[val].alertType,
//                 }
//               }
//               placeholder="Select Alert Type"
//               name="alertType"
//               onChange={(e, name) => {
//                 let Temp = { ...parameterList };
//                 Temp[val].alertType = e.value;
//                 setParameterList(Temp);
//               }}
//               options={AlertOptionsList}
//               className="basic-multi-select "
//               classNamePrefix="select"
//             />
//           </div>
//         </div>

//         {parameterList[val].uidType === "Analog" && (

//           <div className="d-flex justify-content-between w-100">
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Variable Value <span className="text-red-500">*</span>
//               </label>
//               <Select
//                 value={
//                   parameterList[val].variable !== "" && {
//                     value: parameterList[val].variable,
//                     label: parameterList[val].variable,
//                   }
//                 }
//                 placeholder={"Select " + val + " Tag"}
//                 name={val}
//                 onChange={(e, name) => handleChangeSelect(e, name)}
//                 options={optionList.Tags}
//                 isDisabled={selectedValues.PlantName === ""}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-50">
//               <label className="mb-2">
//                 Alert For <span className="text-red-500">*</span>
//               </label>
//               <div>
//                 <Form.Check
//                   type="radio"
//                   id="alertFor"
//                   label={"Hi-HiHi"}
//                   checked={parameterList[val].alertFor == "Hi-HiHi"}
//                   onChange={(e) => {
//                     let tpar = { ...parameterList };
//                     if (e.target.checked) {
//                       tpar[val].alertFor = "Hi-HiHi";
//                     }
//                     setParameterList(tpar);
//                   }}
//                 />
//                 <Form.Check
//                   type="radio"
//                   id="alertFor"
//                   label={"Low-LowLow"}
//                   checked={parameterList[val].alertFor == "Low-LowLow"}
//                   onChange={(e) => {
//                     let tpar = { ...parameterList };
//                     if (e.target.checked) {
//                       tpar[val].alertFor = "Low-LowLow";
//                     }
//                     setParameterList(tpar);
//                   }}
//                 />
//                 <Form.Check
//                   type="radio"
//                   id="alertFor"
//                   label={"Both"}
//                   checked={parameterList[val].alertFor == "Both"}
//                   onChange={(e) => {
//                     let tpar = { ...parameterList };
//                     if (e.target.checked) {
//                       tpar[val].alertFor = "Both";
//                     }
//                     setParameterList(tpar);
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="d-flex  justify-content-center align-items-center w-100">
//               {(parameterList[val].alertFor === "Both" || parameterList[val].alertFor === "Low-LowLow") &&
//                 <>
//                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
//                     <label className="mb-2">
//                       LowLow Value <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name={val}
//                       placeholder={"Enter " + "LowLow Value"}
//                       type="number"
//                       min={0}
//                       onChange={(e) => {
//                         let Temp = { ...parameterList };
//                         Temp[e.target.name].LowLow = e.target.value;

//                         setParameterList(Temp);
//                       }}
//                       value={parameterList[val].LowLow}
//                       style={{ width: "100% !important" }}
//                       className="form-control"
//                     />
//                   </div>
//                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
//                     <label className="mb-2">
//                       Low Value <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name={val}
//                       placeholder={"Enter " + "Low Value"}
//                       type="number"
//                       min={0}
//                       onChange={(e) => {
//                         let Temp = { ...parameterList };
//                         Temp[e.target.name].Low = e.target.value;

//                         setParameterList(Temp);
//                       }}
//                       value={parameterList[val].Low}
//                       style={{ width: "100% !important" }}
//                       className="form-control"
//                     />
//                   </div>

//                 </>}
//               {(parameterList[val].alertFor === "Both" || parameterList[val].alertFor === "Hi-HiHi") &&
//                 <>
//                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
//                     <label className="mb-2">
//                       Hi Value <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name={val}
//                       placeholder={"Enter " + "Hi Value"}
//                       type="number"
//                       min={0}
//                       onChange={(e) => {
//                         let Temp = { ...parameterList };
//                         Temp[e.target.name].Hi = e.target.value;

//                         setParameterList(Temp);
//                       }}
//                       value={parameterList[val].Hi}
//                       style={{ width: "100% !important" }}
//                       className="form-control"
//                     />
//                   </div>
//                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
//                     <label className="mb-2">
//                       HiHi Value <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name={val}
//                       placeholder={"Enter " + "HiHi Value"}
//                       type="number"
//                       min={0}
//                       onChange={(e) => {
//                         let Temp = { ...parameterList };
//                         Temp[e.target.name].HiHi = e.target.value;

//                         setParameterList(Temp);
//                       }}
//                       value={parameterList[val].HiHi}
//                       style={{ width: "100% !important" }}
//                       className="form-control"
//                     />
//                   </div>
//                 </>}
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Time Delay (in Minutes) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Time Delay"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].timeDelay = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].timeDelay}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Snooze Time (in Minutes) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Snooze Time"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].snoozeTime = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].snoozeTime}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         )}
//         {parameterList[val].uidType === "Digital" && (
//           <div className="d-flex justify-content-between w-100">
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Variable Value <span className="text-red-500">*</span>
//               </label>
//               <Select
//                 value={
//                   parameterList[val].variable !== "" && {
//                     value: parameterList[val].variable,
//                     label: parameterList[val].variable,
//                   }
//                 }
//                 placeholder={"Select " + val + " Tag"}
//                 name={val}
//                 onChange={(e, name) => handleChangeSelect(e, name)}
//                 options={optionList.Tags}
//                 isDisabled={selectedValues.PlantName === ""}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />
//             </div>

//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Alert on Running Status <span className="text-red-500">*</span>
//               </label>
//               <Select
//                 value={
//                   parameterList[val].runningStatusAlert !== "" && {
//                     value: parameterList[val].runningStatusAlert,
//                     label: parameterList[val].runningStatusAlert,
//                   }
//                 }
//                 placeholder={"Select " + "Running Status Alert"}
//                 name={val}
//                 onChange={(e, name) => {
//                   let Temp = { ...parameterList };
//                   Temp[val].runningStatusAlert = e.value;
//                   setParameterList(Temp);
//                 }}
//                 options={RunnningStatusAlertOptionsList}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />
//             </div>

//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Start Value <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Start Value"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].startValue = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].startValue}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Stop Value <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Stop Value"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].stopValue = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].stopValue}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Time Delay (in Seconds) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Time Delay"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].timeDelay = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].timeDelay}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Snooze Time (in Minutes) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Snooze Time"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].snoozeTime = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].snoozeTime}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         )}
//         {parameterList[val].uidType === "Flyash %" && (

//           <div className="d-flex justify-content-between w-100">
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Variable Value - Tag 1 <span className="text-red-500">*</span>
//               </label>
//               <Select
//                 value={
//                   parameterList[val].tag1 !== "" && {
//                     value: parameterList[val].tag1,
//                     label: parameterList[val].tag1,
//                   }
//                 }
//                 placeholder={"Select " + val + " Tag 1"}
//                 name={val}
//                 onChange={(e, name) => handleChangeSelectAFR(e, name, "tag1")}
//                 options={optionList.Tags}
//                 isDisabled={selectedValues.PlantName === ""}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Variable Value - Tag 2 <span className="text-red-500">*</span>
//               </label>
//               <Select
//                 value={
//                   parameterList[val].tag2 !== "" && {
//                     value: parameterList[val].tag2,
//                     label: parameterList[val].tag2,
//                   }
//                 }
//                 placeholder={"Select " + val + " Tag 2"}
//                 name={val}
//                 onChange={(e, name) => handleChangeSelectAFR(e, name, "tag2")}
//                 options={optionList.Tags}
//                 isDisabled={selectedValues.PlantName === ""}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />
//             </div>
//             {/* <div className="d-flex flex-column justify-content-center align-items-center w-50">
//     <label className="mb-2">
//       Alert For <span className="text-red-500">*</span>
//     </label>
//     <div>
//       <Form.Check
//         type="radio"
//         id="alertFor"
//         label={"Hi-HiHi"}
//         checked={parameterList[val].alertFor == "Hi-HiHi"}
//         onChange={(e) => {
//           let tpar = { ...parameterList };
//           if (e.target.checked) {
//             tpar[val].alertFor = "Hi-HiHi";
//           }
//           setParameterList(tpar);
//         }}
//       />
//       <Form.Check
//         type="radio"
//         id="alertFor"
//         label={"Low-LowLow"}
//         checked={parameterList[val].alertFor == "Low-LowLow"}
//         onChange={(e) => {
//           let tpar = { ...parameterList };
//           if (e.target.checked) {
//             tpar[val].alertFor = "Low-LowLow";
//           }
//           setParameterList(tpar);
//         }}
//       />
//       <Form.Check
//         type="radio"
//         id="alertFor"
//         label={"Both"}
//         checked={parameterList[val].alertFor == "Both"}
//         onChange={(e) => {
//           let tpar = { ...parameterList };
//           if (e.target.checked) {
//             tpar[val].alertFor = "Both";
//           }
//           setParameterList(tpar);
//         }}
//       />
//     </div>
//   </div> */}
//             <div className="d-flex  justify-content-center align-items-center w-100">

//               <div className="d-flex flex-column justify-content-center align-items-center w-100">
//                 <label className="mb-2">
//                   Low Value <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   name={val}
//                   placeholder={"Enter " + "Low Value"}
//                   type="number"
//                   min={0}
//                   onChange={(e) => {
//                     let Temp = { ...parameterList };
//                     Temp[e.target.name].Low = e.target.value;

//                     setParameterList(Temp);
//                   }}
//                   value={parameterList[val].Low}
//                   style={{ width: "100% !important" }}
//                   className="form-control"
//                 />
//               </div>

//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Time Delay (in Minutes) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Time Delay"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].timeDelay = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].timeDelay}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <label className="mb-2">
//                 Snooze Time (in Minutes) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Snooze Time"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].snoozeTime = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].snoozeTime}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const filterFunction =(dynamicParameterSelctList,inputValue)=>{
//     if (!inputValue) {
//       return true; // Show all options when input is empty
//     }
//     return dynamicParameterSelctList.label.toLowerCase().includes(inputValue.toLowerCase());
//   }

//   const ParameterModal = ({ openModal, handleClose }) => {

//     const [formData,setFormData] = useState({
//       useCase:"Trend Violation",
//       parameterName:""
//     })
//     const [parameterLengthError,setParameterLengthError] = useState("")

//     const handleParameterNameChange = (e) => {

//       const { name, value } = e.target;

//       let errorMessage = "";
//       if (value.length >= 15) {
//         errorMessage = "Length should be a maximum of 15 characters";
//       } else if (dynamicparameterOptionList.some(item => item.value === value)) {
//         errorMessage = "Duplicate Tag, Tag Already Exists";
//       }

//       setParameterLengthError(errorMessage);

//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));

//     };

//     const handleParameterSubmit = async (e) => {
//       e.preventDefault();
//       setSubmitLoader(true); // Start loading
//       let payload = {
//         created_by: token?.email,
//         parameter_name: formData.parameterName,
//         usecase: formData.useCase,
//       };

//       let val={
//         value: 'Trend Violation', label: 'Trend Violation'
//       }

//       let event = {
//         action:"select-option",
//         name:"UseCase",
//         option:undefined
//       }

//       let postUrl = config.BaseUrl + "/cbm/plant/insertParamter";
//       try {
//         const response = await axios.post(postUrl, payload, {
//           headers: {
//             Authorization: `Bearer ${
//               JSON.parse(localStorage.getItem("login"))?.token
//             }`,
//           },
//         });
//         if (!response.data?.error) {
//           toast.success(response.data.result);
//           setOpenModal(false);
//           setFormData({
//             parameterName: "",
//             useCase: "",
//           });
//           await getAlldata();
//           if(editValue){
//             state.EditFlag=true
//           }
//           // handleChange(val,event)
//         }
//       } catch (err) {
//         console.error("Error submitting parameter:", err);

//         if (err.response?.data?.result) {
//           toast.error(err.response.data.result);
//         } else {
//           toast.error("Failed to submit parameter. Please try again.");
//         }
//       } finally {
//         setSubmitLoader(false); // Stop loading
//       }
//     };

//     return (
//       <Modal show={openModal} onHide={handleClose} centered contentClassName="parameter-modal-content">
//         <Modal.Header>
//           <Modal.Title>Add New Parameter</Modal.Title>
//           <button
//           onClick={handleClose}
//           style={{border:"none",background:"transparent",fontSize:"20px"}}
//           >
//             <MdClose />
//           </button>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleParameterSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Parameter Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="parameterName"
//                 value={formData?.parameterName}
//                 onChange={handleParameterNameChange}
//                 maxLength={15}
//                 isInvalid={!!parameterLengthError}
//                 required
//               />
//               {parameterLengthError  && <Form.Text className="text-danger">{parameterLengthError}</Form.Text>}
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Use Case</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="useCase"
//                 value={formData.useCase}
//                 disabled
//                 required
//               />
//             </Form.Group>

//             <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button type="submit" className="btnfrst text-dark ml-2" disabled={formData.parameterName==="" || parameterLengthError}>
//                 Submit
//               </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     );
//   };

//   const TrendViolationView = () => {
//     return (
//       <div className="settingContainer">
//         <div>
//           <div className="d-flex align-items-center justify-content-between">

//             <label> Parameter Select</label>
//             <div>

//               <label style={{ marginRight: 10 }}>Help</label>
//               <BsQuestionCircle

//                 onClick={() => {
//                   setIsInfoViewOpen(!isInfoViewOpen)
//                 }}
//               />
//               {/* <span> Back</span> */}
//             </div>
//           </div>

//           <Select
//             isMulti
//             value={dynamicParameterSelctList}
//             placeholder={"Select Parameters"}
//             name={"Parameter Select"}
//             onChange={(e) => handleChangeParameterSelectTrend(e)}
//             options={dynamicparameterOptionList}
//             filterOption={filterFunction}
//             onInputChange={(input) => setInputValue(input)}
//             noOptionsMessage={()=>(
//               <>
//               {token?.Role === "super_admin" || token?.Role === "admin" ?
//               <>
//                 <span style={{paddingRight:"10px"}}>No Option Found, You can add Parameter by Clicking this button</span>
//                 <button
//                 onClick={()=> {
//                   setOpenModal(true)
//                   setParamAddFlag(true)}}
//                 className="btn btnfrst"
//                 >Add Paramter
//                 </button>
//               </>
//               :
//               <>
//                 <span>No Option Found. Contact Admin and Super Admin to add Parameter</span>
//               </>
//               }
//               </>
//             )}
//             className="basic-multi-select "
//             classNamePrefix="select"
//           />
//            <ParameterModal
//             openModal={openModal}
//             handleClose={() => setOpenModal(false)}
//             // formData={formData}
//             // handleChange={handleParameterNameChange}
//             // handleSubmit={handleParameterSubmit}
//             />
//         </div>
//         {isInfoViewOpen && infoHelperView()}
//         {Object.keys(parameterList).length > 0 && smsRecepienView()}
//         <div>
//           {Object.keys(parameterList).length > 0 &&
//             Object.keys(parameterList).map((val) => TrendParameterCard(val))}
//         </div>
//         {ActiveStatusView()}
//         {submitButtonView()}
//       </div>
//     );
//   };

//   const CustomParameterCard = (val) => {
//     // console.log(parameterList[val],"cCC")
//     // debugger
//     return (
//       <div className="d-flex flex-wrap para-card mt-3">
//         <div className="d-flex justify-content-between w-100">
//           <label> Parameter Name - {val}</label>

//           <div style={{ display: "inline-flex", alignItems: "center" }}>
//             <label style={{ marginRight: "10px" }}>Alert Type</label>

//             <Select
//               value={
//                 parameterList[val].alertType !== "" && {
//                   value: parameterList[val].alertType,
//                   label: parameterList[val].alertType,
//                 }
//               }
//               placeholder="Select Alert Type"
//               name="alertType"
//               onChange={(e, name) => {
//                 let Temp = { ...parameterList };
//                 Temp[val].alertType = e.value;
//                 setParameterList(Temp);
//               }}
//               options={AlertOptionsList}
//               className="basic-multi-select "
//               classNamePrefix="select"
//             />
//           </div>
//         </div>

//           <div className="d-flex justify-content-between w-100">
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <div className="d-flex justify-content-around w-100">
//               <label className="mb-2">
//                 Variable TagType1 <span className="text-red-500">*</span>
//               </label>
//               <label className="mb-2">
//                 Lable TagType1 <span className="text-red-500">*</span>
//               </label>
//               </div>
//               {parameterList[val]?.TagType1.map((v1,index)=>{

//              return (
//               <div className="d-flex justify-content-center align-items-center w-100">
//               <Select
//                 value={
//                   parameterList[val]?.TagType1[index]["tag"+(index+1)] !== "" && {
//                     value: parameterList[val].TagType1[index]["tag"+(index+1)],
//                     label: parameterList[val].TagType1[index]["tag"+(index+1)]
//                   }
//                 }
//                 placeholder={"Select Tag " + (index+1)}
//                 name={ val}
//                 onChange={(e, name) => handleChangeSelectCustomAlerts(e, name, "TagType1", index)}
//                 options={optionList.Tags}
//                 isDisabled={selectedValues.PlantName === ""}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />
//               <input
//                name={val}
//                 placeholder={"Enter Tag" +(index+1)+ " Label"}
//                 type="text"
//                 disabled={parameterList[val]?.TagType1[index]["tag"+(index+1)] === "" || selectedValues.PlantName === ""  }
//                 onChange={(e) => handleChangeLabelCustomAlerts(e,"TagType1", index)}
//                 value={parameterList[val]?.TagType1[index]["labeltag"+(index+1)]}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//               </div>
//                 )
//               })}

//             </div>
//             <div className="d-flex flex-column justify-content-center align-items-center w-100">
//               <div className="d-flex justify-content-around w-100">
//               <label className="mb-2">
//                 Variable TagType2 <span className="text-red-500">*</span>
//               </label>
//               <label className="mb-2">
//                 Lable TagType2 <span className="text-red-500">*</span>
//               </label>
//               </div>
//               {parameterList[val]?.TagType2.map((v1,index)=>{

//              return (
//               <div className="d-flex justify-content-center align-items-center w-100">
//               <Select
//                 value={
//                   parameterList[val]?.TagType2[index]["tag"+(index+1)] !== "" && {
//                     value: parameterList[val].TagType2[index]["tag"+(index+1)],
//                     label: parameterList[val].TagType2[index]["tag"+(index+1)]
//                   }
//                 }
//                 placeholder={"Select Tag " + (index+1)}
//                 name={ val}
//                 onChange={(e, name) => handleChangeSelectCustomAlerts(e, name, "TagType2", index)}
//                 options={optionList.Tags}
//                 on
//                 isDisabled={selectedValues.PlantName === ""}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />
//               <input
//                name={val}
//                 placeholder={"Enter Tag" +(index+1)+ " Label"}
//                 type="text"
//                 disabled={parameterList[val]?.TagType2[index]["tag"+(index+1)] === "" || selectedValues.PlantName === ""  }
//                 onChange={(e) => handleChangeLabelCustomAlerts(e,"TagType2", index)}
//                 value={parameterList[val]?.TagType2[index]["labeltag"+(index+1)]}
//                 style={{ width: "100% !important" }}
//                 className="form-control"
//               />
//               </div>
//                 )
//               })}

//             </div>

//             <div className="d-flex flex-column justify-content-center align-items-center w-100">

//               <div className="d-flex  justify-content-around align-items-center w-75 ">
//                 <label className="w-100 mb-0">
//                   Adjustment (in Percentage) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   name={val}
//                   placeholder={"Enter " + "Adjustment Value"}
//                   type="number"

//                   onChange={(e) => {
//                     let Temp = { ...parameterList };
//                     Temp[e.target.name].Adjustment = e.target.value;

//                     setParameterList(Temp);
//                   }}
//                   value={parameterList[val].Adjustment}
//                   // style={{ width: "30% !important" }}
//                   className="form-control"
//                 />
//               </div>
//               <div className="d-flex  justify-content-around align-items-center w-75 ">
//                 <label className="w-100 mb-0">
//                   Low Value (in Percentage)<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   name={val}
//                   placeholder={"Enter " + "Low Value"}
//                   type="number"
//                   min={0}
//                   onChange={(e) => {
//                     let Temp = { ...parameterList };
//                     Temp[e.target.name].Low = e.target.value;

//                     setParameterList(Temp);
//                   }}
//                   value={parameterList[val].Low}
//                   // style={{ width: "30% !important" }}
//                   className="form-control"
//                 />
//               </div>

//             <div className="d-flex  justify-content-around align-items-center w-75 ">
//               <label className="w-100 mb-0">
//                 Time Delay (in Minutes) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Time Delay"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].timeDelay = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].timeDelay}
//                 // style={{ width: "30% !important" }}
//                 className="form-control"
//               />
//             </div>
//             <div className="d-flex  justify-content-around align-items-center w-75 ">
//               <label className="w-100 mb-0">
//                 Snooze Time (in Minutes) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name={val}
//                 placeholder={"Enter " + "Snooze Time"}
//                 type="number"
//                 min={0}
//                 onChange={(e) => {
//                   let Temp = { ...parameterList };
//                   Temp[e.target.name].snoozeTime = e.target.value;

//                   setParameterList(Temp);
//                 }}
//                 value={parameterList[val].snoozeTime}
//                 // style={{ width: "30% !important" }}
//                 className="form-control"
//               />
//             </div>
//           </div>
//             </div>

//       </div>
//     );
//   };

//   const CustomAlertView = () => {
//     return (
//       <div className="settingContainer">
//         <div>
//           <div className="d-flex align-items-center justify-content-between">

//             <label> Parameter Select</label>
//             {/* <div>
//               <label style={{ marginRight: 10 }}>Help</label>
//               <BsQuestionCircle

//                 onClick={() => {
//                   setIsInfoViewOpen(!isInfoViewOpen)
//                 }}
//               />
//             </div> */}
//           </div>

//           <Select
//             isMulti
//             value={dynamicParameterSelctList}
//             placeholder={"Select Parameters"}
//             name={"Parameter Select"}
//             onChange={(e) => handleChangeParameterSelectCustomAlerts(e)}
//             options={dynamicparameterOptionList}
//             className="basic-multi-select "
//             classNamePrefix="select"
//           />
//         </div>

//         {/* {token?.Role === "super_admin" && Object.keys(parameterList).length > 0 && smsRecepienView()} */}
//         <div>
//           {Object.keys(parameterList).length > 0 &&
//             Object.keys(parameterList).map((val) => CustomParameterCard(val))}
//         </div>
//         {ActiveStatusView()}
//         {submitButtonView()}
//       </div>
//     );
//   };

//   let TrendViolationInfo = {
//     Time_Delay: "The period for which IoT data would be monitored at every minute.For example if it is set for 30, then every minute 30s iot data will be fetched and checked for trend violation.",
//     Start_Value: "For digital tag, the value that is considered as True. Usually it is 1.",
//     Stop_Value: "For digital tag, the value that is considered as False. Usually it is 0.",
//     Snooze_Time: " The time period till you do not want to receive an alert after receiving the first alert. It is in minutes.",
//     Hi_Value: "The Upper boundary of a tag. If the value of a tag crosses this, one will receive major alert",
//     HiHi_Value: "The Upper boundary of a tag. If the value of a tag crosses this, one will receive critical alert",
//     Low_Value: "The lower boundary of a tag. If the value of a tag crosses this, one will receive major alert",
//     LowLow_Value: "The lower boundary of a tag. If the value of a tag crosses this, one will receive critical alert",
//     "On Stop": "when the value of the tag observed as stop value, one will receive alert",
//     "On Start": "when the value of the tag observed as start value, one will receive  alert",
//     "On Change": "when the value will change from start to stop or stop to start, one will receive  alert"
//   }

//   const infoHelperView = () => {
//     return (
//       <div className="mt-2">
//         {Object.keys(TrendViolationInfo).map((item) => {
//           return <div>
//             <div className="d-flex ">
//               <label> {item} </label>
//               <div style={{
//                 marginLeft: "10px",
//                 fontSize: "14px",
//                 color: "gray",
//               }}>
//                 {TrendViolationInfo[item]}
//               </div>
//             </div>

//           </div>
//         }
//         )
//         }

//       </div>)
//   }

//   return (
//     <AuthenticatedTemplate>
//       <div className="dash-top pb-2">
//         <div className="mycard mt-2">
//           <div className="d-flex align-items-center mb-4">
//             <div className="d-flex back">
//               <BiChevronLeft
//                 size={30}
//                 onClick={() => {
//                   navigate("/templates");
//                 }}
//               />
//             </div>
//             <h4 className="ml-5 mb-0"> Equipment Template Configuration </h4>
//           </div>

//           <div className="row">
//             <div className="col-md-3 col-sm-6 col-12">
//               <label className="mb-2">
//                 Template Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name="TemplateName"
//                 placeholder="Enter Template Name"
//                 onChange={(e) => setTemplateName(e.target.value)}
//                 value={templateName}
//                 disabled={state?.rowdata}
//                 style={{ minWidth: "100% " }}
//                 className="form-control"
//               />
//             </div>
//             <div className="col-md-3 col-sm-6 col-12">
//               <label className="mb-2">
//                 PlantName <span className="text-red-500">*</span>
//               </label>

//               {
//                 <Select
//                   value={
//                     selectedValues.PlantName !== "" && {
//                       value: selectedValues.PlantName,
//                       label: selectedValues.PlantName,
//                     }
//                   }
//                   placeholder="Select Plant"
//                   name="PlantName"
//                   onChange={(e, name) => handleChange(e, name)}
//                   options={optionList.PlantName}
//                   isDisabled={
//                     window.location.href.split("/").pop() === "editTemplate"
//                   }
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//               }
//               <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
//                 {selectedValues.PlantName !== "" &&
//                   window.location.href.split("/").pop() !== "editTemplate" && (
//                     <button
//                       onClick={() => {
//                         let temp = { ...selectedValues };
//                         temp.PlantName = "";
//                         setSelectedValues(temp);
//                         let tempParameterList = { ...parameterList }
//                         Object.keys(tempParameterList).map((val, index) => {
//                           tempParameterList[val].variable = ""
//                         })
//                         setParameterList(tempParameterList)
//                         let tOption = { ...optionList }
//                         tOption.Tags = []
//                         setOptionList(tOption)
//                       }}
//                       className="p-2 btn btnfrst"
//                     >
//                       X
//                     </button>
//                   )}
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 col-12">
//               <label className="mb-2">
//                 Usecase <span className="text-red-500">*</span>
//               </label>

//               {
//                 <Select
//                   value={
//                     selectedValues.UseCase !== "" && {
//                       value: selectedValues.UseCase,
//                       label: selectedValues.UseCase,
//                     }
//                   }
//                   placeholder="Select UseCase"
//                   name="UseCase"
//                   onChange={(e, name) => handleChange(e, name)}
//                   options={optionList.UseCase}
//                   isDisabled={
//                     window.location.href.split("/").pop() === "editTemplate"
//                   }
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//               }
//               <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
//                 {selectedValues.UseCase !== "" &&
//                   window.location.href.split("/").pop() !== "editTemplate" && (
//                     <button
//                       onClick={() => {
//                         let temp = { ...selectedValues };
//                         temp.UseCase = "";
//                         setSelectedValues(temp);
//                       }}
//                       className="p-2 btn btnfrst"
//                     >
//                       X
//                     </button>
//                   )}
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 col-12">
//               <label className="mb-2">
//                 Equipment Name
//                 {/* {selectedValues.UseCase === "Asset Details" ||
//                 selectedValues.UseCase === "Trend Violation" ? (
//                   ""
//                 ) : (
//                   <span className="text-red-500">*</span>
//                 )} */}
//               </label>
//               {
//                 <Select
//                   value={
//                     selectedValues.FanName !== "" && {
//                       value: selectedValues.FanName,
//                       label: selectedValues.FanName,
//                     }
//                   }
//                   placeholder="Select Equipment"
//                   name="FanName"
//                   onChange={(e, name) => handleChange(e, name)}
//                   isDisabled={
//                     window.location.href.split("/").pop() === "editTemplate"
//                   }
//                   options={optionList.FanName}
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//               }
//               <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
//                 {selectedValues.FanName !== "" &&
//                   window.location.href.split("/").pop() !== "editTemplate" && (
//                     <button
//                       onClick={() => {
//                         let temp = { ...selectedValues };
//                         temp.FanName = "";
//                         setSelectedValues(temp);
//                         // setParameterList({});
//                       }}
//                       className="p-2 btn btnfrst"
//                     >
//                       X
//                     </button>
//                   )}
//               </div>
//             </div>
//           </div>

//           {selectedValues.UseCase === "Fan Efficiency" && FanEfficiencyView()}
//           {selectedValues.UseCase === "Asset Details" && AssetDetailsView()}
//           {selectedValues.UseCase === "Trend Violation" && TrendViolationView()}
//           {selectedValues.UseCase === "Custom Alerts" && CustomAlertView()}
//           {selectedValues.UseCase === "False Air" && FalseAirView()}
//           {selectedValues.UseCase === "Cyclone Efficiency" && CycloneEfficiencyView()}

//         </div>
//       </div>
//     </AuthenticatedTemplate>
//   );
// };

import axios from "axios";
import { config } from "../config";
import { useState, useEffect } from "react";

import Select from "react-select";

import "../styles/TemplateFilter.css";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { BiChevronLeft } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { Form, Modal, Button } from "react-bootstrap";
import useToken from "../utils/useToken";
import { accessLogApi } from "../utils/AccessLogApi";
import { MdClose } from "react-icons/md";
import Highlighter from "react-highlight-words";
export const TemplateFilter = () => {
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={50}
    />
  );

  //chelckbox

  const { state } = useLocation();
  const { token, setToken } = useToken();
  const navigate = useNavigate();
  const [submitLoader, setSubmitLoader] = useState(false);
  const [allData, setAllData] = useState([]);
  const [TemplateOptions, setTemplateOptions] = useState([]);
  const [smsRecepientsOptions, setSmsRecepientsOptions] = useState([]);
  const [smsRecepients, setSmsRecepients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState(false);
  const [paramAddFlag, setParamAddFlag] = useState(false);
  const [conditions, setConditions] = useState({
    Min: "",
    Max: "",
    Duration: "",
  });
  let conditionDesc = [
    "Lower bound of efficiency drop in percentage",
    "Upper bound of efficiency drop in percentage",
    "Time period till which the drop must sustain to trigger the alert",
  ];
  const [dropdownData, setDropdownData] = useState({});
  const [templateName, setTemplateName] = useState("");
  const [selectedValues, setSelectedValues] = useState({
    PlantName: "",
    FanName: "Other",
    Parameters: "",
    activeStatus: "Active",
    UseCase: "",
  });
  const [optionList, setOptionList] = useState({
    PlantName: [],
    FanName: [],
    Parameters: [],
    Tags: [],
    UseCase: [],
    activeStatus: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
    ],
  });

  const [openModal, setOpenModal] = useState(false);
  const [cycloneSelectedStage, setCycloneSelectedStage] = useState({
    value: 0,
    label: "",
  });

  const AlertOptionsList =
    selectedValues.UseCase === "Trend Violation"
      ? [
        { label: "Email", value: "Email" },
        { label: "SMS", value: "SMS" },
        { label: "Both", value: "Both" },
      ]
      : [{ label: "Email", value: "Email" }];
  const RunnningStatusAlertOptionsList = [
    { label: "On Change", value: "On Change" },
    { label: "On Start", value: "On Start" },
    { label: "On Stop", value: "On Stop" },
  ];

  const [parameterList, setParameterList] = useState({});
  const [isInfoViewOpen, setIsInfoViewOpen] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [dynamicparameterOptionList, setDynamicparameterOptionList] = useState(
    [],
  );
  const [dynamicParameterSelctList, setDynamicParameterSelctList] = useState(
    [],
  );

  let CycloneStageList = [
    {
      value: 4,
      label: "Stage 4",
    },
    {
      value: 5,
      label: "Stage 5",
    },
    {
      value: 6,
      label: "Stage 6",
    },
  ];
  const getAlldata = async () => {
    await axios
      .post(
        config.BaseUrl + "/cbm/plant/getAllPalntData",
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
              }`,
          },
        },
      )
      .then((res) => {
        // setAllData(res.data.result);
        setAllData([...res.data.result]);
        // res = res.data.result;
        let tOption = { ...optionList };
        res &&
          res.data.result.map((val) => {
            val.Parameters = val.Parameters.replace("/", "!");
          });
        // console.log(token.Role,"sssssssssssss")
        if (
          token?.Role !== "" ||
          token?.Role === "super_admin" ||
          token?.Role === "admin"
        ) {
          tOption.UseCase = [
            "Fan Efficiency",
            "Asset Details",
            "Trend Violation",
            "Custom Alerts",
            "False Air",
            "Cyclone Efficiency",
          ].map((val) => {
            return {
              value: val,
              label: val,
            };
          });
        }
        // } else {
        //   tOption.UseCase = [
        //     "Fan Efficiency",
        //     "Asset Details",
        //     "Trend Violation",
        //     "Custom Alerts",
        //     "False Air"
        //   ].map((val) => {
        //     return {
        //       value: val,
        //       label: val,
        //     };
        //   });
        // }

        tOption.FanName = ["Fan", "Drive", "Roller Press", "Other"].map(
          (val) => {
            return {
              value: val,
              label: val,
            };
          },
        );
        if (localStorage.getItem("login")) {
          let t = JSON.parse(localStorage.getItem("login"));
          tOption.PlantName = t?.plants.map((val) => {
            return {
              value: val,
              label: val,
            };
          });
        }

        setOptionList(tOption);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  let editParamList;
  const setTemplateData = () => {
    // debugger
    let EditData = state?.rowdata;
    if (state?.copyData) {
      EditData = state?.copyData;

      EditData.TemplateName = EditData.TemplateName.includes("- Copy")
        ? EditData.TemplateName
        : EditData.TemplateName + "- Copy";
    }

    setTemplateName(EditData.TemplateName);

    let Temp = { ...selectedValues };

    Temp.PlantName = EditData.PlantName;
    Temp.UseCase = EditData.UseCase;
    Temp.FanName = EditData.FanName;
    Temp.activeStatus = EditData.Status;
    // let tempOBJ = {};
    let x = {};

    let tempOBJ;
    // debugger;
    if (paramAddFlag && Temp.UseCase === "Trend Violation") {
      tempOBJ = { ...parameterList };
      EditData.Parameters = tempOBJ;
    } else {
      tempOBJ = {};
    }

    if (
      EditData.UseCase === "Trend Violation" ||
      EditData.UseCase === "Custom Alerts"
    ) {
      if (EditData.Parameters.smsRecepients) {
        setSmsRecepients([...EditData.Parameters.smsRecepients]);
        // console.log(EditData.Parameters.smsRecepients,"pppppp1111111pppppp")
        delete EditData.Parameters.smsRecepients;
      }
      setParameterList(EditData.Parameters);
      // console.log(EditData.Parameters,"pppppppppppp")
    }
    if (
      EditData.UseCase === "Trend Violation" ||
      EditData.UseCase === "Custom Alerts" ||
      EditData.UseCase === "Asset Details"
    ) {
      allData.map((val) => {
        if (val.UseCase === Temp.UseCase) {
          if (
            Temp.UseCase === "Trend Violation" ||
            Temp.UseCase === "Custom Alerts" ||
            Temp.UseCase === "Asset Details"
          ) {
            x[val.Parameters] = {
              label: val.Parameters,
              value: val.Parameters,
            };
          } else {
            tempOBJ[val.Parameters] = { constent: 0, variable: "" };
          }
        }
      });
      setParameterList(EditData.Parameters);
      if (Temp.UseCase === "Asset Details") {
        x["MTBS"] = { value: "MTBS", label: "MTBS" };
        Object.keys(EditData.Parameters).map((val) => {
          if (isNaN(EditData.Parameters[val])) {
            tempOBJ[val] = { constent: 0, variable: EditData.Parameters[val] };
          } else {
            tempOBJ[val] = {
              constent:
                EditData.Parameters[val] === null
                  ? 0
                  : EditData.Parameters[val],
              variable: "",
            };
          }
        });
        setParameterList(tempOBJ);
      }
      setDynamicparameterOptionList(Object.values(x));
      editParamList = Object.keys(EditData.Parameters).map((val) => {
        return { label: val, value: val };
      });
      setDynamicParameterSelctList(editParamList);
    } else if (EditData.UseCase === "Cyclone Efficiency") {
      setParameterList(EditData.Parameters);
      setCycloneSelectedStage(
        CycloneStageList.filter(
          (val) =>
            val.value === Object.keys(EditData.Parameters["Cyclone"]).length,
        ),
      );
    } else if (EditData.UseCase === "Custom Alerts") {
      setParameterList(EditData.Parameters);
    } else {
      Object.keys(EditData.Parameters).map((val) => {
        if (isNaN(EditData.Parameters[val])) {
          tempOBJ[val] = { constent: 0, variable: EditData.Parameters[val] };
        } else {
          tempOBJ[val] = {
            constent:
              EditData.Parameters[val] === null ? 0 : EditData.Parameters[val],
            variable: "",
          };
        }
      });
      setParameterList(tempOBJ);
    }
    setConditions(EditData.Conditions);
    // console.log(Temp,"tttttt")
    setSelectedValues(Temp);

    state.EditFlag = false;
    setEditValue(true);
  };

  useEffect(() => {
    // debugger
    getAlldata();

    // getTemplateData();
    // getSmsRecepients();
  }, []);
  useEffect(() => {
    accessLogCBM();
    getTagList();
  }, [selectedValues.PlantName]);
  useEffect(() => {
    if (selectedValues.UseCase === "Trend Violation") {
      getSmsRecepients();
    }
    if (selectedValues.UseCase === "Asset Details") {
      getTemplateData();
    }
  }, [selectedValues.UseCase]);
  useEffect(() => {
    let val = {
      value: "Trend Violation",
      label: "Trend Violation",
    };

    let event = {
      action: "select-option",
      name: "UseCase",
      option: undefined,
    };

    if (
      state?.rowdata === undefined &&
      window.location.href.split("/").pop() === "editTemplate"
    ) {
      navigate("/templates");
    }
    if (
      allData.length > 0 &&
      (state?.rowdata || state?.copyData) &&
      state.EditFlag
    ) {
      setTemplateData();
      getTagList();
    }
    if (
      Object.keys(allData).length > 0 &&
      selectedValues.UseCase === "Trend Violation" &&
      state?.EditFlag === undefined
    ) {
      handleChange(val, event);
    }
  }, [allData]);

  const accessLogCBM = () => {
    let payload = {
      userId: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
      ip: "",
      module: "CBM",
      plant: "-",
      url: window.location.href,
      options: "",
      plant_or_section: "CBM",
    };
    accessLogApi(payload);
  };

  const getSmsRecepients = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
    };
    axios
      .post(config.BaseUrl + "/cbm/template/getSmsRecepients", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        res = res.data.result;
        if (res === "No Records Found") {
          setSmsRecepientsOptions([]);
        } else {
          // console.log(res, "rrrrrrrrrrrrr")
          let temp = {};

          res.map((val) => {
            temp[val.UserID] = {
              label: val.UserID + " - " + val.SMS_Limit,
              value: val.UserID,
            };
          });
          setSmsRecepientsOptions(Object.values(temp));
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const getTemplateData = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
    };
    axios
      .post(config.BaseUrl + "/cbm/template/getTemplateData", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        res = res.data.result;
        if (res === "No Records Found") {
          setTemplateOptions([]);
        } else {
          let TempList = {};
          res.map((val) => {
            if (val.UseCase === "Fan Efficiency")
              TempList[val.TemplateName + val.Timestamp] = {
                value: val.TemplateName,
                label: val.TemplateName,
                Timestamp: val.Timestamp,
              };
          });
          TempList = Object.values(TempList);

          setTemplateOptions(TempList);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const getTagList = () => {
    let payload = {
      PlantName: selectedValues.PlantName,
    };
    if (state?.rowdata) {
      payload.PlantName = state?.rowdata?.PlantName;
    }
    if (state?.copyData) {
      payload.PlantName = state?.copyData?.PlantName;
    }
    let tOption = { ...optionList };
    if (payload.PlantName !== "") {
      axios
        .post(config.BaseUrl + "/cbm/plant/getPlantAllTags", payload, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
              }`,
          },
        })
        .then((res) => {
          res = res.data.result;
          tOption.Tags = [];
          if (res === "No Records Found") {
            toast.warning("No Tags Found for Plant " + payload.PlantName);
            tOption.Tags = [];
            setOptionList(tOption);
          } else {
            res.map((val) => {
              tOption.Tags.push({
                value: val["Tag UID"],
                label: `${val["Tag UID"]} \n Desc: ${val["Description"]}`,
                vibrationType: val["Variable Type"] === "Vibration",
              });
            });
            tOption.Tags.unshift({ value: "", label: "Select..." });
            setOptionList(tOption);
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.message);
        });
    }
  };


  const handleChange = (val, event) => {
    // debugger;
    let Temp = { ...selectedValues };
    Temp[event.name] = val.value;

    if (Temp[event.name] !== "" && event.name === "UseCase") {
      let tempOBJ;
      if (paramAddFlag && Temp.UseCase === "Trend Violation") {
        tempOBJ = { ...parameterList };
      } else {
        tempOBJ = {};
      }
      let x = {};
      allData.map((val) => {
        if (val.UseCase === Temp.UseCase) {
          if (
            Temp.UseCase === "Trend Violation" ||
            Temp.UseCase === "Custom Alerts" ||
            Temp.UseCase === "Asset Details"
          ) {
            x[val.Parameters] = {
              label: val.Parameters,
              value: val.Parameters,
            };
          } else {
            tempOBJ[val.Parameters] = { constent: 0, variable: "" };
          }
        }
      });
      if (Temp.UseCase === "Asset Details") {
        x["MTBS"] = { value: "MTBS", label: "MTBS" };
      }
      if (Temp.UseCase !== "Cyclone Efficiency") {
        setCycloneSelectedStage({
          value: 0,
          label: "",
        });
      }
      setDynamicparameterOptionList(Object.values(x));
      if (paramAddFlag && Temp.UseCase === "Trend Violation") {
        // setDynamicParameterSelctList([]);
      } else {
        setDynamicParameterSelctList([]);
      }
      setParameterList(tempOBJ);
    }
    if (Temp[event.name] !== "" && event.name === "PlantName") {
      let tempParameterList = { ...parameterList };
      if (Temp.UseCase === "Cyclone Efficiency") {
        for (let type in tempParameterList) {
          for (let stage in tempParameterList[type]) {
            for (let tag in tempParameterList[type][stage]) {
              tempParameterList[type][stage][tag] = "";
            }
          }
        }
      }
      if (Temp.UseCase === "Custom Alerts") {
        Object.keys(tempParameterList).map((val, index) => {
          tempParameterList[val].TagType1 = [
            {
              tag1: "",
              labeltag1: "",
            },
            {
              tag2: "",
              labeltag2: "",
            },
            {
              tag3: "",
              labeltag3: "",
            },
            {
              tag4: "",
              labeltag4: "",
            },
          ];
          tempParameterList[val].TagType2 = [
            {
              tag1: "",
              labeltag1: "",
            },
            {
              tag2: "",
              labeltag2: "",
            },
            {
              tag3: "",
              labeltag3: "",
            },
            {
              tag4: "",
              labeltag4: "",
            },
          ];
        });
      } else {
        Object.keys(tempParameterList).map((val, index) => {
          tempParameterList[val].variable = "";
        });
      }
      setParameterList(tempParameterList);
    }

    setSelectedValues(Temp);
    setParamAddFlag(false);
  };

  const handleChangeSelect = (val, event) => {
    let Temp = { ...parameterList };
    Temp[event.name].variable = val.value;
    Temp[event.name].constent = 0;
    Temp[event.name].vibrationType = val.vibrationType;

    setParameterList(Temp);
  };
  const handleChangeSelectAFR = (val, event, tagParameter) => {
    let Temp = { ...parameterList };
    Temp[event.name][tagParameter] = val.value;
    Temp[event.name].constent = 0;
    Temp[event.name].vibrationType = val.vibrationType;
    // console.log(val, Temp)
    setParameterList(Temp);
  };
  const handleChangeSelectCustomAlerts = (val, event, tagType, index) => {
    // console.log("val", val)
    let Temp = { ...parameterList };
    Temp[event.name][tagType][index]["tag" + (index + 1)] = val.value;
    Temp[event.name][tagType][index]["labeltag" + (index + 1)] = "";
    setParameterList(Temp);
  };
  const handleChangeLabelCustomAlerts = (event, tagType, index) => {
    let Temp = { ...parameterList };
    Temp[event.target.name][tagType][index]["labeltag" + (index + 1)] =
      event.target.value;
    // console.log(Temp)
    setParameterList(Temp);
  };

  const handleChangeInputValue = (e) => {
    let Temp = { ...parameterList };
    Temp[e.target.name].constent = e.target.value;

    setParameterList(Temp);
  };

  const handleChangeInputConditions = (e) => {
    let Temp = { ...conditions };
    Temp[e.target.name] = e.target.value;

    setConditions(Temp);
  };

  const handleChangeParameterSelectAsset = (e) => {
    let tempParameterList = { ...parameterList };
    let tempParameterList1 = {};
    e.map((val) => {
      if (tempParameterList[val.value]) {
        tempParameterList1[val.value] = tempParameterList[val.value];
      } else {
        tempParameterList1[val.value] = {
          variable: "",
        };
      }
    });
    setParameterList(tempParameterList1);
    setDynamicParameterSelctList(e);
  };
  const handleChangeSmsRecepient = (e) => {
    // console.log(e)
    setSmsRecepients(e);
  };

  const handleChangeParameterSelectTrend = (e) => {
    let tempParameterList = { ...parameterList };
    let tempParameterList1 = {};
    e.map((val) => {
      if (tempParameterList[val.value]) {
        tempParameterList1[val.value] = tempParameterList[val.value];
      } else {
        tempParameterList1[val.value] = {
          uidType: "Analog",
          alertType: "Email",
          variable: "",
          vibrationType: "",
          timeDelay: "",
          snoozeTime: "",
          alertFor: "Both",
          Hi: "",
          HiHi: "",
          Low: "",
          LowLow: "",
          tag1: "",
          tag2: "",
          startValue: "",
          stopValue: "",
          runningStatusAlert: "On Change",
        };
        if (val.value.includes("Flyash %")) {
          tempParameterList1[val.value].uidType = "Flyash %";
        }
      }
    });
    setParameterList(tempParameterList1);
    setDynamicParameterSelctList(e);
  };
  const handleChangeParameterSelectCustomAlerts = (e) => {
    let tempParameterList = { ...parameterList };
    let tempParameterList1 = {};
    e.map((val) => {
      if (tempParameterList[val.value]) {
        tempParameterList1[val.value] = tempParameterList[val.value];
      } else {
        tempParameterList1[val.value] = {
          alertType: "Email",
          timeDelay: "",
          snoozeTime: "",
          Low: "",
          Adjustment: "",
          TagType1: [
            {
              tag1: "",
              labeltag1: "",
            },
            {
              tag2: "",
              labeltag2: "",
            },
            {
              tag3: "",
              labeltag3: "",
            },
            {
              tag4: "",
              labeltag4: "",
            },
          ],
          TagType2: [
            {
              tag1: "",
              labeltag1: "",
            },
            {
              tag2: "",
              labeltag2: "",
            },
            {
              tag3: "",
              labeltag3: "",
            },
            {
              tag4: "",
              labeltag4: "",
            },
          ],
        };
        if (val.value.includes("Flyash %")) {
          tempParameterList1[val.value].uidType = "Flyash %";
        }
      }
    });
    setParameterList(tempParameterList1);
    setDynamicParameterSelctList(e);
  };

  const SendData = () => {
    if (selectedValues.UseCase === "Fan Efficiency") {
      if (
        conditions.Duration === "" ||
        conditions.Min === "" ||
        conditions.Max === ""
      ) {
        toast.error("Please Fill Alert Conditions");
        return;
      }
      if (parseInt(conditions.Min) >= parseInt(conditions.Max)) {
        toast.error("Min value can not be greater then max");
        return;
      }
    }
    let f = 0;
    if (selectedValues.UseCase === "Trend Violation") {
      Object.keys(parameterList).forEach((val) => {
        if (f === 1) {
          return;
        }
        if (
          parameterList[val].uidType === "Flyash %" &&
          parameterList[val].tag1 === ""
        ) {
          toast.error("Please Select Tag 1 Value for " + val);
          f = 1;
          return;
        }
        if (
          parameterList[val].uidType === "Flyash %" &&
          parameterList[val].tag2 === ""
        ) {
          toast.error("Please Select Tag 2 Value for " + val);
          f = 1;
          return;
        }
        if (
          parameterList[val].uidType !== "Flyash %" &&
          parameterList[val].variable === ""
        ) {
          toast.error("Please Select Variable Value for " + val);
          f = 1;
          return;
        }
        if (parameterList[val].timeDelay === "") {
          toast.error("Please Enter Time Delay Value for " + val);
          f = 1;
          return;
        }
        if (parameterList[val].snoozeTime === "") {
          toast.error("Please Enter Snooze Time Value for " + val);
          f = 1;
          return;
        }
        if (parameterList[val].uidType === "Analog") {
          if (
            parameterList[val].alertFor === "Both" ||
            parameterList[val].alertFor === "Hi-HiHi"
          ) {
            if (parameterList[val].Hi === "") {
              toast.error("Please Enter Hi Value for " + val);
              f = 1;
              return;
            }
            if (parameterList[val].HiHi === "") {
              toast.error("Please Enter HiHi Value for " + val);
              f = 1;
              return;
            }
          }
          if (
            parameterList[val].alertFor === "Both" ||
            parameterList[val].alertFor === "Low-LowLow"
          ) {
            if (parameterList[val].Low === "") {
              toast.error("Please Enter Low Value for " + val);
              f = 1;
              return;
            }
            if (parameterList[val].LowLow === "") {
              toast.error("Please Enter LowLow Value for " + val);
              f = 1;
              return;
            }
          }
        }
        if (parameterList[val].uidType === "Digital") {
          if (parameterList[val].startValue === "") {
            toast.error("Please Enter Start Value for " + val);
            f = 1;
            // console.log("hiuiii", f);
            return;
          }
          if (parameterList[val].stopValue === "") {
            toast.error("Please Enter Stop Value for " + val);
            f = 1;
            return;
          }
        }
      });
    }
    if (selectedValues.UseCase === "Custom Alerts") {
      Object.keys(parameterList).forEach((val) => {
        if (f === 1) {
          return;
        }

        let type1hastag = 0;
        parameterList[val].TagType1.forEach((v1, index) => {
          if (v1["tag" + (index + 1)] !== "") {
            type1hastag = 1;
            if (v1["labeltag" + (index + 1)] === "") {
              toast.error(
                "Please Enter label for tagType1 tag " +
                (index + 1) +
                " in  " +
                val,
              );
              f = 1;
              return;
            }
          }
        });
        if (!type1hastag) {
          toast.error("Please select least one tag for tagType1 in " + val);
          f = 1;
          return;
        }

        if (f === 1) {
          return;
        }

        let type2hastag = 0;
        parameterList[val].TagType2.forEach((v1, index) => {
          if (v1["tag" + (index + 1)] !== "") {
            type2hastag = 1;
            if (v1["labeltag" + (index + 1)] === "") {
              toast.error(
                "Please Enter label for tagType2 tag " +
                (index + 1) +
                " in  " +
                val,
              );
              f = 1;
              return;
            }
          }
        });
        if (!type2hastag) {
          toast.error("Please select least one tag for tagType2 in " + val);
          f = 1;
          return;
        }
        if (f === 1) {
          return;
        }
        if (parameterList[val].Adjustment === "") {
          toast.error("Please Enter Adjustment Value for " + val);
          f = 1;
          return;
        }
        if (parameterList[val].Low === "") {
          toast.error("Please Enter Low Value for " + val);
          f = 1;
          return;
        }
        if (parameterList[val].timeDelay === "") {
          toast.error("Please Enter Time Delay Value for " + val);
          f = 1;
          return;
        }
        if (parameterList[val].snoozeTime === "") {
          toast.error("Please Enter Snooze Time Value for " + val);
          f = 1;
          return;
        }
      });
    }
    // if (selectedValues.UseCase === "Cyclone Efficiency") {
    //   for (let type in parameterList){
    //     for(let stage in parameterList[type]){
    //       for (let tag in parameterList[type][stage]){
    //         if (parameterList[type][stage][tag] === ""){
    //           toast.error("Please Select " + (tag === "T1" ? "Tgo": "Tmo")+ "  Value for " + stage+ " in " + type);
    //           f = 1;
    //           return;
    //         }
    //         }
    //     }
    //   }
    // }
    if (f === 1) {
      return;
    }

    // returnz;
    let postUrl = config.BaseUrl + "/cbm/template/sendTemplateData";
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
      templateName: templateName,
      PlantName: selectedValues.PlantName,
      UseCase: selectedValues.UseCase,
      FanName: selectedValues.FanName,
      activeStatus: selectedValues.activeStatus,
      Parameters: {},
      conditions: conditions,
    };
    if (state?.rowdata) {
      postUrl = config.BaseUrl + "/cbm/template/editTemplate";
      payload.TimeStamp = state.rowdata.Timestamp;
    }
    if (selectedValues.UseCase === "Trend Violation") {
      let Pjson = {};
      Object.keys(parameterList).map((val) => {
        Pjson[val] = parameterList[val];
        if (parameterList[val].uidType === "Digital") {
          parameterList[val].vibrationType = "";
          parameterList[val].Hi = "";
          parameterList[val].HiHi = "";
        } else {
          parameterList[val].startValue = "";
          parameterList[val].stopValue = "";
          parameterList[val].runningStatusAlert = "";
        }
      });
      payload.Parameters = Pjson;
      payload.Parameters.smsRecepients = smsRecepients;
    } else if (selectedValues.UseCase === "Cyclone Efficiency") {
      payload.Parameters = { ...parameterList };
    } else if (selectedValues.UseCase === "Custom Alerts") {
      payload.Parameters = { ...parameterList };
    } else {
      Object.keys(parameterList).map((val) => {
        payload.Parameters[val] =
          parameterList[val].constent === 0 &&
            parameterList[val].variable !== ""
            ? parameterList[val].variable
            : parameterList[val].constent == 0
              ? null
              : parameterList[val].constent;
      });
    }

    // console.log(Pjson);
    // console.log(payload, "aa");
    setSubmitLoader(true);
    axios
      .post(postUrl, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        res = res.data.result;
        setSelectedValues({
          PlantName: "",
          FanName: "",
          Parameters: "",
          Tags: "",
          activeStatus: "Active",
          UseCase: "",
        });
        setParameterList({});
        setTemplateName("");
        setConditions({
          Min: "",
          Max: "",
          Duration: "",
        });
        if (state?.rowdata) {
          toast.success("Template Updated Successfully.");
        } else {
          toast.success("Template Added Successfully.");
        }
        setSubmitLoader(false);
        navigate("/templates");
      })
      .catch((err) => {
        if (err?.response?.data?.result) {
          toast.error(err?.response?.data?.result);
        } else {
          toast.error(err.message);
        }
        setSubmitLoader(false);
        // console.log(err.response.data.result);
      });
  };

  const FanEfficiencyView = () => {
    return (
      <div className="mt-6">
        {Object.keys(parameterList).length > 0 && (
          <>
            {/* COLUMN HEADINGS */}
            <div className="grid grid-cols-3 gap-4 mb-3 font-semibold text-sm text-[var(--text-color)]">
              <div className="text-[var(--text-color)]">Parameters</div>
              <div className="text-[var(--text-color)]">Constant Values</div>
              <div className="text-[var(--text-color)]">Variable Values</div>
            </div>

            {/* PARAMETER ROWS */}
            {Object.keys(parameterList).map((val, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 mb-4 items-center"
              >
                <div className="text-sm font-medium text-[var(--text-color)]">
                  {val}
                </div>

                {/* Constant Input */}
                <input
                  name={val}
                  placeholder={"Enter " + val}
                  type="number"
                  min={0}
                  onChange={(e) => handleChangeInputValue(e)}
                  value={parameterList[val].constent}
                  disabled={parameterList[val].variable !== ""}
                  className="w-full h-[35px] rounded-lg px-3 text-[13px] border border-[var(--input-enable-border)] bg-[var(--input-enable-bg)] text-[var(--text-color)] placeholder:text-[var(--search-placeholder)] focus:outline-none focus:border-[var(--picker-accent)] disabled:bg-[var(--input-disable-bg)] disabled:cursor-not-allowed transition"
                />

                {/* Variable Select */}
                {!val.includes("Designed") ? (
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <Select
                        formatOptionLabel={formatOptionLabel}
                        value={
                          parameterList[val].variable !== "" && {
                            value: parameterList[val].variable,
                            label: parameterList[val].variable,
                          }
                        }
                        placeholder={"Select " + val + " Tag"}
                        name={val}
                        onChange={(e, name) => handleChangeSelect(e, name)}
                        options={optionList.Tags}
                        isDisabled={selectedValues.PlantName === ""}
                        styles={customStyles}

                      />
                    </div>

                    {parameterList[val].variable !== "" && (
                      <button
                        onClick={() => {
                          let temp = { ...parameterList };
                          temp[val].variable = "";
                          setParameterList(temp);
                        }}
                        className="px-2 py-1 rounded-md text-sm bg-[var(--button-bg)] border border-[var(--form-border)] hover:bg-[var(--button-hover-bg)]"
                      >
                        X
                      </button>
                    )}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ))}

            {/* ALERT CONDITIONS */}
            <h3 className="font-semibold my-4 text-[var(--title)]">
              Alert Conditions
            </h3>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-w-3xl mb-2">
              {Object.keys(conditions).map((val, i) => (
                <div key={val} className="contents">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-color)]">
                      {val} {i !== 2 ? "Value (%)" : "(min)"}
                    </p>
                    <p className="text-xs text-gray-500">{conditionDesc[i]}</p>
                  </div>

                  <input
                    name={val}
                    placeholder={"Enter " + (i !== 2 ? "Value (%)" : "(min)")}
                    onChange={(e) => handleChangeInputConditions(e)}
                    value={conditions[val]}
                    type="number"
                    className="w-full h-[35px] rounded-lg px-3 text-[13px] border border-[var(--input-enable-border)] bg-[var(--input-enable-bg)] text-[var(--text-color)] placeholder:text-[var(--search-placeholder)] focus:outline-none focus:border-[var(--picker-accent)] disabled:bg-[var(--input-disable-bg)] disabled:cursor-not-allowed transition"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {ActiveStatusView()}
        {submitButtonView()}
      </div>
    );
  };

  const FalseAirView = () => {
    return (
      <div className="space-y-6">
        {/* HEADER */}
        {Object.keys(parameterList).length > 0 && (
          <div className="border-b border-[var(--form-border)] pb-3">
            <div className="grid grid-cols-2 font-semibold text-[14px]">
              <div className="px-4 text-[var(--text-color)]">Parameters</div>
              <div className="hidden md:block px-4 text-[var(--text-color)]">
                Variable Values
              </div>
            </div>
          </div>
        )}

        {/* PARAMETER LIST */}
        {Object.keys(parameterList).length > 0 && (
          <div className="rounded-xl overflow-hidden">
            {Object.keys(parameterList).map((val) => (
              <div
                key={val}
                className="grid grid-cols-1 md:grid-cols-2 items-center border-b border-[var(--form-border)] last:border-none"
              >
                {/* PARAMETER NAME */}
                <div className="px-4 py-3 text-sm font-medium text-[var(--text-color)]">
                  {val}
                </div>

                {/* SELECT FIELD */}
                <div className="px-4 py-2 bg-[var(--input-bg)]">
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      parameterList[val].variable !== "" && {
                        value: parameterList[val].variable,
                        label: parameterList[val].variable,
                      }
                    }
                    placeholder={`Select ${val} Tag`}
                    name={val}
                    onChange={(e, name) => handleChangeSelect(e, name)}
                    options={optionList.Tags}
                    isDisabled={selectedValues.PlantName === ""}
                    classNamePrefix="select"
                  />
                </div>
              </div>
            ))}

            {/* ACTIVE STATUS */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center border-t border-[var(--form-border)]">

              <div className="px-4 py-2">{ActiveStatusView()}</div>
            </div>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        {submitButtonView()}
      </div>
    );
  };

  const CycloneEfficiencyView = () => {
    const handleChangeSelectCycloneTags = (val, event) => {
      let Temp = { ...parameterList };
      let cp = event.name.split(" ");
      Temp[cp[0]][cp[1]][cp[2]] = val.value;
      setParameterList(Temp);
    };

    const handleChangeParameterSelectCycloneStage = (e) => {
      let tempParameterList = { ...parameterList };
      tempParameterList.Cyclone = {};
      tempParameterList.Klin = {};

      for (let c = 1; c <= e.value; c++) {
        tempParameterList.Cyclone["C" + c] = { T1: "", T2: "" };
        tempParameterList.Klin["K" + c] = { T1: "", T2: "" };
      }

      setParameterList(tempParameterList);
      setCycloneSelectedStage(e);
    };

    return (
      <div className="space-y-6">
        {/* STAGE SELECTOR */}
        <div>
          <label className="text-sm font-medium text-[var(--text-color)]">
            Select No of Stages
          </label>

          <Select
            formatOptionLabel={formatOptionLabel}
            value={cycloneSelectedStage.value !== 0 && cycloneSelectedStage}
            placeholder="Select Stages"
            name="Parameter Select"
            onChange={(e) => handleChangeParameterSelectCycloneStage(e)}
            options={CycloneStageList}
            classNamePrefix="select"
          />
        </div>

        {/* HEADERS */}
        {Object.keys(parameterList).length > 0 && (
          <div className="border-b border-[var(--form-border)] pb-3">
            <div className="grid grid-cols-2 font-semibold text-[15px] text-[var(--text-color)]">
              <div>Cyclone</div>
              <div>Kiln</div>
            </div>
          </div>
        )}

        {/* DATA ROWS */}
        {Object.keys(parameterList).length > 0 &&
          Object.keys(parameterList.Cyclone).map((val, index) => {
            const klinKeys = Object.keys(parameterList.Klin);
            const klinKey = klinKeys[index];

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
              >
                {/* CYCLONE SIDE */}
                <div className="space-y-3">
                  <div className="grid grid-cols-[60px_1fr_1fr] gap-4 items-center">
                    <div className="font-medium text-[var(--text-color)]">
                      {val}
                    </div>

                    <Select
                      formatOptionLabel={formatOptionLabel}
                      value={
                        parameterList.Cyclone[val].T1 !== "" && {
                          value: parameterList.Cyclone[val].T1,
                          label: parameterList.Cyclone[val].T1,
                        }
                      }
                      placeholder={`Select ${val} Tgo Tag`}
                      name={`Cyclone ${val} T1`}
                      onChange={(e, name) =>
                        handleChangeSelectCycloneTags(e, name)
                      }
                      options={optionList.Tags}
                      isDisabled={selectedValues.PlantName === ""}
                      classNamePrefix="select"
                    />

                    <Select
                      formatOptionLabel={formatOptionLabel}
                      value={
                        parameterList.Cyclone[val].T2 !== "" && {
                          value: parameterList.Cyclone[val].T2,
                          label: parameterList.Cyclone[val].T2,
                        }
                      }
                      placeholder={`Select ${val} Tmo Tag`}
                      name={`Cyclone ${val} T2`}
                      onChange={(e, name) =>
                        handleChangeSelectCycloneTags(e, name)
                      }
                      options={optionList.Tags}
                      isDisabled={selectedValues.PlantName === ""}
                      classNamePrefix="select"
                    />
                  </div>
                </div>

                {/* KILN SIDE */}
                <div className="space-y-3">
                  <div className="grid grid-cols-[60px_1fr_1fr] gap-4 items-center">
                    <div className="font-medium text-[var(--text-color)]">
                      {klinKey}
                    </div>

                    <Select
                      formatOptionLabel={formatOptionLabel}
                      value={
                        parameterList.Klin[klinKey].T1 !== "" && {
                          value: parameterList.Klin[klinKey].T1,
                          label: parameterList.Klin[klinKey].T1,
                        }
                      }
                      placeholder={`Select ${klinKey} Tgo Tag`}
                      name={`Klin ${klinKey} T1`}
                      onChange={(e, name) =>
                        handleChangeSelectCycloneTags(e, name)
                      }
                      options={optionList.Tags}
                      isDisabled={selectedValues.PlantName === ""}
                      classNamePrefix="select"
                    />

                    <Select
                      formatOptionLabel={formatOptionLabel}
                      value={
                        parameterList.Klin[klinKey].T2 !== "" && {
                          value: parameterList.Klin[klinKey].T2,
                          label: parameterList.Klin[klinKey].T2,
                        }
                      }
                      placeholder={`Select ${klinKey} Tmo Tag`}
                      name={`Klin ${klinKey} T2`}
                      onChange={(e, name) =>
                        handleChangeSelectCycloneTags(e, name)
                      }
                      options={optionList.Tags}
                      isDisabled={selectedValues.PlantName === ""}
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>
            );
          })}

        {/* ACTIVE STATUS */}
        {Object.keys(parameterList).length > 0 && (
          <div className="pt-4 border-t border-[var(--form-border)]">
            {ActiveStatusView()}
          </div>
        )}

        {/* SUBMIT */}
        {submitButtonView()}
      </div>
    );
  };
  const AssetDetailsView = () => {
    return (
      <div className="space-y-6">
        {/* PARAMETER SELECT */}
        <div>
          <label className="text-sm font-medium text-[var(--text-color)]">
            Parameter Select
          </label>

          <Select
            formatOptionLabel={formatOptionLabel}
            isMulti
            value={dynamicParameterSelctList}
            placeholder="Select Parameters"
            name="Parameter Select"
            onChange={(e) => handleChangeParameterSelectAsset(e)}
            options={dynamicparameterOptionList}
            styles={customStyles}
          />
        </div>

        {/* HEADINGS */}
        {Object.keys(parameterList).length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 font-semibold text-[15px] pt-2">
            <div className="text-[var(--text-color)]">Parameters</div>
            <div className="hidden lg:block text-[var(--text-color)]">Tag UID</div>
          </div>
        )}

        {/* PARAMETER ROWS */}
        {Object.keys(parameterList).length > 0 && (
          <div className="space-y-4">
            {Object.keys(parameterList).map((val, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center"
              >
                {/* PARAMETER NAME */}
                <div className="font-medium text-[var(--text-color)]">
                  {val}
                </div>

                {/* TAG SELECT */}
                {val === "Fan Efficiency" ? (
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      parameterList[val].variable !== "" && {
                        value: parameterList[val].variable,
                        label: parameterList[val].variable,
                      }
                    }
                    placeholder={"Select " + val}
                    name={val}
                    onChange={(e, name) => handleChangeSelect(e, name)}
                    options={TemplateOptions}
                    styles={customStyles}
                  />
                ) : (
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      parameterList[val].variable !== "" && {
                        value: parameterList[val].variable,
                        label: parameterList[val].variable,
                      }
                    }
                    placeholder={"Select " + val + " Tag"}
                    name={val}
                    onChange={(e, name) => handleChangeSelect(e, name)}
                    options={optionList.Tags}
                    isDisabled={selectedValues.PlantName === ""}
                    styles={customStyles}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* ACTIVE STATUS + SUBMIT */}
        {ActiveStatusView()}
        {submitButtonView()}
      </div>
    );
  };

  const smsRecepienView = () => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-[var(--text-color)]">
          Select SMS Recipients
        </label>

        <Select
          formatOptionLabel={formatOptionLabel}
          isMulti
          value={smsRecepients}
          placeholder="Select SMS Recipients"
          name="SMS Recipients"
          onChange={(e) => handleChangeSmsRecepient(e)}
          options={smsRecepientsOptions}
          styles={customStyles}
        />
      </div>
    );
  };

  const ActiveStatusView = () => {
    if (Object.keys(parameterList).length > 0)
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 pt-4 border-t border-[var(--form-border)]">
          {/* LABEL */}
          <div className="font-medium text-sm text-[var(--text-color)]">
            Active Status
          </div>

          {/* SELECT */}
          <div className="w-[200px]">
            <Select
              formatOptionLabel={formatOptionLabel}
              value={
                selectedValues.activeStatus !== "" && {
                  value: selectedValues.activeStatus,
                  label: selectedValues.activeStatus,
                }
              }
              placeholder="Select Active Status"
              name="activeStatus"
              onChange={(e, name) => handleChange(e, name)}
              options={optionList.activeStatus}
              styles={customStyles}
            />
          </div>
        </div>
      );
  };

  const submitButtonView = () => {
    if (Object.keys(parameterList).length > 0)
      return (
        <div className="mt-6 flex justify-center items-center gap-3">
          {submitLoader && loader}

          <button
            disabled={
              templateName === "" ||
              Object.keys(parameterList).length === 0 ||
              submitLoader
            }
            onClick={() => SendData()}
            className="
            px-4 py-1
            rounded-md
            border border-[var(--button-border)]
            bg-[var(--submit-button-bg)]
            hover:bg-[var(--submit-button-hover-bg)]
            text-[#111111]
            font-medium
            transition-all duration-200
            disabled:opacity-50
            disabled:cursor-not-allowed
            cursor-pointer
            active:scale-95
          "
          >
            {submitLoader
              ? "Submitting..."
              : window.location.href.split("/").pop() === "editTemplate"
                ? "Update"
                : "Submit"}
          </button>
        </div>
      );
  };

  // const TrendParameterCard = (val) => {
  //   // console.log(val,"cCC")
  //   // debugger
  //   return (
  //     <div className="d-flex flex-wrap para-card mt-3">
  //       <div className="d-flex justify-content-between w-100">
  //         <label> Parameter Name - {val}</label>
  //         <div className="d-flex ">
  //           <Form.Check
  //             className="mr-2"
  //             type="radio"
  //             id="uidType"
  //             label={"Analog"}
  //             disabled={val.includes("Flyash %")}
  //             checked={parameterList[val].uidType === "Analog"}
  //             onChange={(e) => {
  //               let tpar = { ...parameterList };
  //               if (e.target.checked) {
  //                 tpar[val].uidType = "Analog";
  //               }
  //               setParameterList(tpar);
  //             }}
  //           />
  //           <Form.Check
  //             className="mr-2"
  //             type="radio"
  //             id="uidType"
  //             label={"Digital"}
  //             disabled={val.includes("Flyash %")}
  //             checked={parameterList[val].uidType === "Digital"}
  //             onChange={(e) => {
  //               let tpar = { ...parameterList };
  //               if (e.target.checked) {
  //                 tpar[val].uidType = "Digital";
  //               }
  //               setParameterList(tpar);
  //             }}
  //           />
  //           {val.includes("Flyash %") && (
  //             <Form.Check
  //               type="radio"
  //               id="uidType"
  //               label={"Flyash %"}
  //               checked={parameterList[val].uidType === "Flyash %"}
  //               onChange={(e) => {
  //                 let tpar = { ...parameterList };
  //                 if (e.target.checked) {
  //                   tpar[val].uidType = "Flyash %";
  //                 }
  //                 setParameterList(tpar);
  //               }}
  //             />
  //           )}
  //         </div>
  //         <div style={{ display: "inline-flex", alignItems: "center" }}>
  //           <label style={{ marginRight: "10px" }}>Alert Type</label>

  //           <Select
  //             value={
  //               parameterList[val].alertType !== "" && {
  //                 value: parameterList[val].alertType,
  //                 label: parameterList[val].alertType,
  //               }
  //             }
  //             placeholder="Select Alert Type"
  //             name="alertType"
  //             onChange={(e, name) => {
  //               let Temp = { ...parameterList };
  //               Temp[val].alertType = e.value;
  //               setParameterList(Temp);
  //             }}
  //             options={AlertOptionsList}
  //             className="basic-multi-select "
  //             classNamePrefix="select"
  //           />
  //         </div>
  //       </div>

  //       {parameterList[val].uidType === "Analog" && (
  //         <div className="d-flex justify-content-between w-100">
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Variable Value <span className="text-red-500">*</span>
  //             </label>
  //             <Select
  //               value={
  //                 parameterList[val].variable !== "" && {
  //                   value: parameterList[val].variable,
  //                   label: parameterList[val].variable,
  //                 }
  //               }
  //               placeholder={"Select " + val + " Tag"}
  //               name={val}
  //               onChange={(e, name) => handleChangeSelect(e, name)}
  //               options={optionList.Tags}
  //               isDisabled={selectedValues.PlantName === ""}
  //               className="basic-multi-select w-100"
  //               classNamePrefix="select"
  //             />
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-50">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Alert For <span className="text-red-500">*</span>
  //             </label>
  //             <div>
  //               <Form.Check
  //                 type="radio"
  //                 id="alertFor"
  //                 label={"Hi-HiHi"}
  //                 checked={parameterList[val].alertFor == "Hi-HiHi"}
  //                 onChange={(e) => {
  //                   let tpar = { ...parameterList };
  //                   if (e.target.checked) {
  //                     tpar[val].alertFor = "Hi-HiHi";
  //                   }
  //                   setParameterList(tpar);
  //                 }}
  //               />
  //               <Form.Check
  //                 type="radio"
  //                 id="alertFor"
  //                 label={"Low-LowLow"}
  //                 checked={parameterList[val].alertFor == "Low-LowLow"}
  //                 onChange={(e) => {
  //                   let tpar = { ...parameterList };
  //                   if (e.target.checked) {
  //                     tpar[val].alertFor = "Low-LowLow";
  //                   }
  //                   setParameterList(tpar);
  //                 }}
  //               />
  //               <Form.Check
  //                 type="radio"
  //                 id="alertFor"
  //                 label={"Both"}
  //                 checked={parameterList[val].alertFor == "Both"}
  //                 onChange={(e) => {
  //                   let tpar = { ...parameterList };
  //                   if (e.target.checked) {
  //                     tpar[val].alertFor = "Both";
  //                   }
  //                   setParameterList(tpar);
  //                 }}
  //               />
  //             </div>
  //           </div>
  //           <div className="d-flex  justify-content-center align-items-center w-100">
  //             {(parameterList[val].alertFor === "Both" ||
  //               parameterList[val].alertFor === "Low-LowLow") && (
  //                 <>
  //                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //                     <label className="text-sm font-medium text-[var(--text-color)]">
  //                       LowLow Value <span className="text-red-500">*</span>
  //                     </label>
  //                     <input
  //                       name={val}
  //                       placeholder={"Enter " + "LowLow Value"}
  //                       type="number"
  //                       min={0}
  //                       onChange={(e) => {
  //                         let Temp = { ...parameterList };
  //                         Temp[e.target.name].LowLow = e.target.value;

  //                         setParameterList(Temp);
  //                       }}
  //                       value={parameterList[val].LowLow}
  //                       style={{ width: "100% !important" }}
  //                       className="form-control"
  //                     />
  //                   </div>
  //                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //                     <label className="text-sm font-medium text-[var(--text-color)]">
  //                       Low Value <span className="text-red-500">*</span>
  //                     </label>
  //                     <input
  //                       name={val}
  //                       placeholder={"Enter " + "Low Value"}
  //                       type="number"
  //                       min={0}
  //                       onChange={(e) => {
  //                         let Temp = { ...parameterList };
  //                         Temp[e.target.name].Low = e.target.value;

  //                         setParameterList(Temp);
  //                       }}
  //                       value={parameterList[val].Low}
  //                       style={{ width: "100% !important" }}
  //                       className="form-control"
  //                     />
  //                   </div>
  //                 </>
  //               )}
  //             {(parameterList[val].alertFor === "Both" ||
  //               parameterList[val].alertFor === "Hi-HiHi") && (
  //                 <>
  //                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //                     <label className="text-sm font-medium text-[var(--text-color)]">
  //                       Hi Value <span className="text-red-500">*</span>
  //                     </label>
  //                     <input
  //                       name={val}
  //                       placeholder={"Enter " + "Hi Value"}
  //                       type="number"
  //                       min={0}
  //                       onChange={(e) => {
  //                         let Temp = { ...parameterList };
  //                         Temp[e.target.name].Hi = e.target.value;

  //                         setParameterList(Temp);
  //                       }}
  //                       value={parameterList[val].Hi}
  //                       style={{ width: "100% !important" }}
  //                       className="form-control"
  //                     />
  //                   </div>
  //                   <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //                     <label className="text-sm font-medium text-[var(--text-color)]">
  //                       HiHi Value <span className="text-red-500">*</span>
  //                     </label>
  //                     <input
  //                       name={val}
  //                       placeholder={"Enter " + "HiHi Value"}
  //                       type="number"
  //                       min={0}
  //                       onChange={(e) => {
  //                         let Temp = { ...parameterList };
  //                         Temp[e.target.name].HiHi = e.target.value;

  //                         setParameterList(Temp);
  //                       }}
  //                       value={parameterList[val].HiHi}
  //                       style={{ width: "100% !important" }}
  //                       className="form-control"
  //                     />
  //                   </div>
  //                 </>
  //               )}
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Time Delay (in Minutes) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Time Delay"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].timeDelay = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].timeDelay}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Snooze Time (in Minutes) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Snooze Time"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].snoozeTime = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].snoozeTime}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //         </div>
  //       )}
  //       {parameterList[val].uidType === "Digital" && (
  //         <div className="d-flex justify-content-between w-100">
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Variable Value <span className="text-red-500">*</span>
  //             </label>
  //             <Select
  //               value={
  //                 parameterList[val].variable !== "" && {
  //                   value: parameterList[val].variable,
  //                   label: parameterList[val].variable,
  //                 }
  //               }
  //               placeholder={"Select " + val + " Tag"}
  //               name={val}
  //               onChange={(e, name) => handleChangeSelect(e, name)}
  //               options={optionList.Tags}
  //               isDisabled={selectedValues.PlantName === ""}
  //               className="basic-multi-select w-100"
  //               classNamePrefix="select"
  //             />
  //           </div>

  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Alert on Running Status <span className="text-red-500">*</span>
  //             </label>
  //             <Select
  //               value={
  //                 parameterList[val].runningStatusAlert !== "" && {
  //                   value: parameterList[val].runningStatusAlert,
  //                   label: parameterList[val].runningStatusAlert,
  //                 }
  //               }
  //               placeholder={"Select " + "Running Status Alert"}
  //               name={val}
  //               onChange={(e, name) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[val].runningStatusAlert = e.value;
  //                 setParameterList(Temp);
  //               }}
  //               options={RunnningStatusAlertOptionsList}
  //               className="basic-multi-select w-100"
  //               classNamePrefix="select"
  //             />
  //           </div>

  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Start Value <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Start Value"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].startValue = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].startValue}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Stop Value <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Stop Value"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].stopValue = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].stopValue}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Time Delay (in Seconds) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Time Delay"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].timeDelay = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].timeDelay}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Snooze Time (in Minutes) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Snooze Time"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].snoozeTime = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].snoozeTime}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //         </div>
  //       )}
  //       {parameterList[val].uidType === "Flyash %" && (
  //         <div className="d-flex justify-content-between w-100">
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Variable Value - Tag 1 <span className="text-red-500">*</span>
  //             </label>
  //             <Select
  //               value={
  //                 parameterList[val].tag1 !== "" && {
  //                   value: parameterList[val].tag1,
  //                   label: parameterList[val].tag1,
  //                 }
  //               }
  //               placeholder={"Select " + val + " Tag 1"}
  //               name={val}
  //               onChange={(e, name) => handleChangeSelectAFR(e, name, "tag1")}
  //               options={optionList.Tags}
  //               isDisabled={selectedValues.PlantName === ""}
  //               className="basic-multi-select w-100"
  //               classNamePrefix="select"
  //             />
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Variable Value - Tag 2 <span className="text-red-500">*</span>
  //             </label>
  //             <Select
  //               value={
  //                 parameterList[val].tag2 !== "" && {
  //                   value: parameterList[val].tag2,
  //                   label: parameterList[val].tag2,
  //                 }
  //               }
  //               placeholder={"Select " + val + " Tag 2"}
  //               name={val}
  //               onChange={(e, name) => handleChangeSelectAFR(e, name, "tag2")}
  //               options={optionList.Tags}
  //               isDisabled={selectedValues.PlantName === ""}
  //               className="basic-multi-select w-100"
  //               classNamePrefix="select"
  //             />
  //           </div>
  //           {/* <div className="d-flex flex-column justify-content-center align-items-center w-50">
  //   <label className="mb-2">
  //     Alert For <span className="text-red-500">*</span>
  //   </label>
  //   <div>
  //     <Form.Check
  //       type="radio"
  //       id="alertFor"
  //       label={"Hi-HiHi"}
  //       checked={parameterList[val].alertFor == "Hi-HiHi"}
  //       onChange={(e) => {
  //         let tpar = { ...parameterList };
  //         if (e.target.checked) {
  //           tpar[val].alertFor = "Hi-HiHi";
  //         }
  //         setParameterList(tpar);
  //       }}
  //     />
  //     <Form.Check
  //       type="radio"
  //       id="alertFor"
  //       label={"Low-LowLow"}
  //       checked={parameterList[val].alertFor == "Low-LowLow"}
  //       onChange={(e) => {
  //         let tpar = { ...parameterList };
  //         if (e.target.checked) {
  //           tpar[val].alertFor = "Low-LowLow";
  //         }
  //         setParameterList(tpar);
  //       }}
  //     />
  //     <Form.Check
  //       type="radio"
  //       id="alertFor"
  //       label={"Both"}
  //       checked={parameterList[val].alertFor == "Both"}
  //       onChange={(e) => {
  //         let tpar = { ...parameterList };
  //         if (e.target.checked) {
  //           tpar[val].alertFor = "Both";
  //         }
  //         setParameterList(tpar);
  //       }}
  //     />
  //   </div>
  // </div> */}
  //           <div className="d-flex  justify-content-center align-items-center w-100">
  //             <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //               <label className="text-sm font-medium text-[var(--text-color)]">
  //                 Low Value <span className="text-red-500">*</span>
  //               </label>
  //               <input
  //                 name={val}
  //                 placeholder={"Enter " + "Low Value"}
  //                 type="number"
  //                 min={0}
  //                 onChange={(e) => {
  //                   let Temp = { ...parameterList };
  //                   Temp[e.target.name].Low = e.target.value;

  //                   setParameterList(Temp);
  //                 }}
  //                 value={parameterList[val].Low}
  //                 style={{ width: "100% !important" }}
  //                 className="form-control"
  //               />
  //             </div>
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Time Delay (in Minutes) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Time Delay"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].timeDelay = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].timeDelay}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //           <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Snooze Time (in Minutes) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Snooze Time"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].snoozeTime = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].snoozeTime}
  //               style={{ width: "100% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };


  // TrendParameterCard.jsx
  // Drop-in replacement — uses Tailwind only, no Bootstrap d-flex classes.
  // CSS variables from globals.css are preserved via Tailwind's arbitrary-value syntax.

  /* ─────────────────────────────────────────────
     Helper: labelled field wrapper
  ───────────────────────────────────────────── */
  function Field({ label, required, children }) {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-[var(--text-color)] whitespace-nowrap">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {children}
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Helper: numeric input with consistent styling
  ───────────────────────────────────────────── */
  function NumInput({ name, placeholder, value, onChange }) {
    return (
      <input
        name={name}
        placeholder={placeholder}
        type="number"
        min={0}
        value={value}
        onChange={onChange}
        className="
        w-full rounded-lg px-3 py-1.5 text-sm
        bg-[var(--input-enable-bg)]
        border border-[var(--input-enable-border)]
        text-[var(--text-color)]
        placeholder:text-[var(--search-placeholder)]
        focus:outline-none focus:border-[var(--picker-accent)]
        focus:ring-1 focus:ring-[var(--picker-accent)]
        transition-colors
      "
      />
    );
  }

  const TrendParameterCard = (val) => {
    return (
      <div className="flex flex-col gap-4 p-4 mt-3 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)]">

        {/* ── Row 1: Parameter name · Analog/Digital radios · Alert Type ── */}
        <div className="flex flex-wrap items-center justify-between gap-3">

          {/* Parameter name */}
          <span className="text-sm font-semibold text-[var(--text-color)] min-w-[160px]">
            Parameter Name — {val}
          </span>

          {/* Signal-type radios */}
          <div className="flex items-center gap-4">
            {["Analog", "Digital"].map((type) => (
              <label key={type} className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="radio"
                  name={`uidType-${val}`}
                  disabled={val.includes("Flyash %")}
                  checked={parameterList[val].uidType === type}
                  onChange={(e) => {
                    if (e.target.checked) {
                      const tpar = { ...parameterList };
                      tpar[val].uidType = type;
                      setParameterList(tpar);
                    }
                  }}
                  className="accent-[var(--picker-accent)]"
                />
                <span className="text-sm text-[var(--text-color)]">{type}</span>
              </label>
            ))}

            {val.includes("Flyash %") && (
              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="radio"
                  name={`uidType-${val}`}
                  checked={parameterList[val].uidType === "Flyash %"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      const tpar = { ...parameterList };
                      tpar[val].uidType = "Flyash %";
                      setParameterList(tpar);
                    }
                  }}
                  className="accent-[var(--picker-accent)]"
                />
                <span className="text-sm text-[var(--text-color)]">Flyash %</span>
              </label>
            )}
          </div>

          {/* Alert Type select */}
          <div className="flex items-center gap-2 min-w-[240px]">
            <span className="text-sm font-medium text-[var(--text-color)] whitespace-nowrap">
              Alert Type
            </span>
            <div className="flex-1">
              <Select
                formatOptionLabel={formatOptionLabel}
                value={
                  parameterList[val].alertType !== "" && {
                    value: parameterList[val].alertType,
                    label: parameterList[val].alertType,
                  }
                }
                placeholder="Select Alert Type"
                name="alertType"
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[val].alertType = e.value;
                  setParameterList(Temp);
                }}
                options={AlertOptionsList}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
          ANALOG section
      ══════════════════════════════════════════════════ */}
        {parameterList[val].uidType === "Analog" && (
          <div className="flex flex-col gap-3">

            {/* Row A: Variable Value | Alert For radios | threshold inputs */}
            <div className="grid grid-cols-[1.5fr_auto_2fr] gap-4 items-start">

              {/* Variable tag select */}
              <Field label="Variable Value" required>
                <Select
                  formatOptionLabel={formatOptionLabel}
                  value={
                    parameterList[val].variable !== "" && {
                      value: parameterList[val].variable,
                      label: parameterList[val].variable,
                    }
                  }
                  placeholder={`Select ${val} Tag`}
                  name={val}
                  onChange={(e, name) => handleChangeSelect(e, name)}
                  options={optionList.Tags}
                  isDisabled={selectedValues.PlantName === ""}
                  className="basic-multi-select w-full"
                  classNamePrefix="select"
                />
              </Field>

              {/* Alert For radios — vertically stacked */}
              <Field label="Alert For" required>
                <div className="flex flex-col gap-1.5 pt-0.5">
                  {["Hi-HiHi", "Low-LowLow", "Both"].map((opt) => (
                    <label key={opt} className="flex items-center gap-1.5 cursor-pointer select-none">
                      <input
                        type="radio"
                        name={`alertFor-${val}`}
                        checked={parameterList[val].alertFor === opt}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const tpar = { ...parameterList };
                            tpar[val].alertFor = opt;
                            setParameterList(tpar);
                          }
                        }}
                        className="accent-[var(--picker-accent)]"
                      />
                      <span className="text-sm text-[var(--text-color)]">{opt}</span>
                    </label>
                  ))}
                </div>
              </Field>

              {/* Threshold inputs — 2-column mini-grid */}
              <div className="grid grid-cols-2 gap-3">
                {(parameterList[val].alertFor === "Both" ||
                  parameterList[val].alertFor === "Low-LowLow") && (
                    <>
                      <Field label="LowLow Value" required>
                        <NumInput
                          name={val}
                          placeholder="Enter LowLow Value"
                          value={parameterList[val].LowLow}
                          onChange={(e) => {
                            const Temp = { ...parameterList };
                            Temp[e.target.name].LowLow = e.target.value;
                            setParameterList(Temp);
                          }}
                        />
                      </Field>
                      <Field label="Low Value" required>
                        <NumInput
                          name={val}
                          placeholder="Enter Low Value"
                          value={parameterList[val].Low}
                          onChange={(e) => {
                            const Temp = { ...parameterList };
                            Temp[e.target.name].Low = e.target.value;
                            setParameterList(Temp);
                          }}
                        />
                      </Field>
                    </>
                  )}
                {(parameterList[val].alertFor === "Both" ||
                  parameterList[val].alertFor === "Hi-HiHi") && (
                    <>
                      <Field label="Hi Value" required>
                        <NumInput
                          name={val}
                          placeholder="Enter Hi Value"
                          value={parameterList[val].Hi}
                          onChange={(e) => {
                            const Temp = { ...parameterList };
                            Temp[e.target.name].Hi = e.target.value;
                            setParameterList(Temp);
                          }}
                        />
                      </Field>
                      <Field label="HiHi Value" required>
                        <NumInput
                          name={val}
                          placeholder="Enter HiHi Value"
                          value={parameterList[val].HiHi}
                          onChange={(e) => {
                            const Temp = { ...parameterList };
                            Temp[e.target.name].HiHi = e.target.value;
                            setParameterList(Temp);
                          }}
                        />
                      </Field>
                    </>
                  )}
              </div>
            </div>

            {/* Row B: Time Delay + Snooze Time */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Time Delay (in Minutes)" required>
                <NumInput
                  name={val}
                  placeholder="Enter Time Delay"
                  value={parameterList[val].timeDelay}
                  onChange={(e) => {
                    const Temp = { ...parameterList };
                    Temp[e.target.name].timeDelay = e.target.value;
                    setParameterList(Temp);
                  }}
                />
              </Field>
              <Field label="Snooze Time (in Minutes)" required>
                <NumInput
                  name={val}
                  placeholder="Enter Snooze Time"
                  value={parameterList[val].snoozeTime}
                  onChange={(e) => {
                    const Temp = { ...parameterList };
                    Temp[e.target.name].snoozeTime = e.target.value;
                    setParameterList(Temp);
                  }}
                />
              </Field>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════
          DIGITAL section
      ══════════════════════════════════════════════════ */}
        {parameterList[val].uidType === "Digital" && (
          <div className="grid grid-cols-2 gap-3">

            <Field label="Variable Value" required>
              <Select
                formatOptionLabel={formatOptionLabel}
                value={
                  parameterList[val].variable !== "" && {
                    value: parameterList[val].variable,
                    label: parameterList[val].variable,
                  }
                }
                placeholder={`Select ${val} Tag`}
                name={val}
                onChange={(e, name) => handleChangeSelect(e, name)}
                options={optionList.Tags}
                isDisabled={selectedValues.PlantName === ""}
                className="basic-multi-select w-full"
                classNamePrefix="select"
              />
            </Field>

            <Field label="Alert on Running Status" required>
              <Select
                formatOptionLabel={formatOptionLabel}
                value={
                  parameterList[val].runningStatusAlert !== "" && {
                    value: parameterList[val].runningStatusAlert,
                    label: parameterList[val].runningStatusAlert,
                  }
                }
                placeholder="Select Running Status Alert"
                name={val}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[val].runningStatusAlert = e.value;
                  setParameterList(Temp);
                }}
                options={RunnningStatusAlertOptionsList}
                className="basic-multi-select w-full"
                classNamePrefix="select"
              />
            </Field>

            <Field label="Start Value" required>
              <NumInput
                name={val}
                placeholder="Enter Start Value"
                value={parameterList[val].startValue}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].startValue = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Stop Value" required>
              <NumInput
                name={val}
                placeholder="Enter Stop Value"
                value={parameterList[val].stopValue}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].stopValue = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Time Delay (in Seconds)" required>
              <NumInput
                name={val}
                placeholder="Enter Time Delay"
                value={parameterList[val].timeDelay}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].timeDelay = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Snooze Time (in Minutes)" required>
              <NumInput
                name={val}
                placeholder="Enter Snooze Time"
                value={parameterList[val].snoozeTime}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].snoozeTime = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>
          </div>
        )}

        {/* ══════════════════════════════════════════════════
          FLYASH % section
      ══════════════════════════════════════════════════ */}
        {parameterList[val].uidType === "Flyash %" && (
          <div className="grid grid-cols-2 gap-3">

            <Field label="Variable Value — Tag 1" required>
              <Select
                formatOptionLabel={formatOptionLabel}
                value={
                  parameterList[val].tag1 !== "" && {
                    value: parameterList[val].tag1,
                    label: parameterList[val].tag1,
                  }
                }
                placeholder={`Select ${val} Tag 1`}
                name={val}
                onChange={(e, name) => handleChangeSelectAFR(e, name, "tag1")}
                options={optionList.Tags}
                isDisabled={selectedValues.PlantName === ""}
                className="basic-multi-select w-full"
                classNamePrefix="select"
              />
            </Field>

            <Field label="Variable Value — Tag 2" required>
              <Select
                formatOptionLabel={formatOptionLabel}
                value={
                  parameterList[val].tag2 !== "" && {
                    value: parameterList[val].tag2,
                    label: parameterList[val].tag2,
                  }
                }
                placeholder={`Select ${val} Tag 2`}
                name={val}
                onChange={(e, name) => handleChangeSelectAFR(e, name, "tag2")}
                options={optionList.Tags}
                isDisabled={selectedValues.PlantName === ""}
                className="basic-multi-select w-full"
                classNamePrefix="select"
              />
            </Field>

            <Field label="Low Value" required>
              <NumInput
                name={val}
                placeholder="Enter Low Value"
                value={parameterList[val].Low}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].Low = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Time Delay (in Minutes)" required>
              <NumInput
                name={val}
                placeholder="Enter Time Delay"
                value={parameterList[val].timeDelay}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].timeDelay = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Snooze Time (in Minutes)" required>
              <NumInput
                name={val}
                placeholder="Enter Snooze Time"
                value={parameterList[val].snoozeTime}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].snoozeTime = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>
          </div>
        )}
      </div>
    );
  };



  const filterFunction = (dynamicParameterSelctList, inputValue) => {
    if (!inputValue) {
      return true; // Show all options when input is empty
    }
    return dynamicParameterSelctList.label
      .toLowerCase()
      .includes(inputValue.toLowerCase());
  };

  const ParameterModal = ({ openModal, handleClose }) => {
    const [formData, setFormData] = useState({
      useCase: "Trend Violation",
      parameterName: "",
    });
    const [parameterLengthError, setParameterLengthError] = useState("");

    const handleParameterNameChange = (e) => {
      const { name, value } = e.target;

      let errorMessage = "";
      if (value.length >= 15) {
        errorMessage = "Length should be a maximum of 15 characters";
      } else if (
        dynamicparameterOptionList.some((item) => item.value === value)
      ) {
        errorMessage = "Duplicate Tag, Tag Already Exists";
      }

      setParameterLengthError(errorMessage);

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleParameterSubmit = async (e) => {
      e.preventDefault();
      setSubmitLoader(true); // Start loading
      let payload = {
        created_by: token?.email,
        parameter_name: formData.parameterName,
        usecase: formData.useCase,
      };

      let val = {
        value: "Trend Violation",
        label: "Trend Violation",
      };

      let event = {
        action: "select-option",
        name: "UseCase",
        option: undefined,
      };

      let postUrl = config.BaseUrl + "/cbm/plant/insertParamter";
      try {
        const response = await axios.post(postUrl, payload, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
              }`,
          },
        });
        if (!response.data?.error) {
          toast.success(response.data.result);
          setOpenModal(false);
          setFormData({
            parameterName: "",
            useCase: "",
          });
          await getAlldata();
          if (editValue) {
            state.EditFlag = true;
          }
          // handleChange(val,event)
        }
      } catch (err) {
        console.error("Error submitting parameter:", err);

        if (err.response?.data?.result) {
          toast.error(err.response.data.result);
        } else {
          toast.error("Failed to submit parameter. Please try again.");
        }
      } finally {
        setSubmitLoader(false); // Stop loading
      }
    };

    return (
      <Modal
        show={openModal}
        onHide={handleClose}
        centered
        contentClassName="parameter-modal-content"
      >
        <Modal.Header>
          <Modal.Title>Add New Parameter</Modal.Title>
          <button
            onClick={handleClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "20px",
            }}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleParameterSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Parameter Name</Form.Label>
              <Form.Control
                type="text"
                name="parameterName"
                value={formData?.parameterName}
                onChange={handleParameterNameChange}
                maxLength={15}
                isInvalid={!!parameterLengthError}
                required
              />
              {parameterLengthError && (
                <Form.Text className="text-danger">
                  {parameterLengthError}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Use Case</Form.Label>
              <Form.Control
                type="text"
                name="useCase"
                value={formData.useCase}
                disabled
                required
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="submit"
              className="btnfrst text-dark ml-2"
              disabled={formData.parameterName === "" || parameterLengthError}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  const TrendViolationView = () => {
    return (
      <div className="space-y-6">
        {/* PARAMETER SELECT + HELP */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[var(--text-color)]">
              Parameter Select
            </label>

            <button
              type="button"
              onClick={() => setIsInfoViewOpen(!isInfoViewOpen)}
              className="flex items-center gap-1 text-[13px] cursor-pointer text-[var(--text-color)]"
            >
              Help
              <BsQuestionCircle size={16} />
            </button>
          </div>

          <Select
            formatOptionLabel={formatOptionLabel}
            isMulti
            value={dynamicParameterSelctList}
            placeholder="Select Parameters"
            name="Parameter Select"
            onChange={(e) => handleChangeParameterSelectTrend(e)}
            options={dynamicparameterOptionList}
            filterOption={filterFunction}
            onInputChange={(input) => setInputValue(input)}
            styles={customStyles}
            noOptionsMessage={() => (
              <div className="text-sm p-2">
                {token?.Role === "super_admin" || token?.Role === "admin" ? (
                  <div className="flex flex-col gap-2">
                    <span>No Option Found. You can add a Parameter:</span>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenModal(true);
                        setParamAddFlag(true);
                      }}
                      className="self-start px-3 py-1 rounded-md bg-[var(--button-bg)] border border-[var(--form-border)] hover:bg-[var(--button-hover-bg)]"
                    >
                      Add Parameter
                    </button>
                  </div>
                ) : (
                  <span>No Option Found. Contact Admin or Super Admin.</span>
                )}
              </div>
            )}
          />
        </div>

        {/* MODAL */}
        <ParameterModal
          openModal={openModal}
          handleClose={() => setOpenModal(false)}
        />

        {/* HELP SECTION */}
        {isInfoViewOpen && (
          <div className="border rounded-lg p-4 text-sm space-y-3 bg-[var(--card-bg)]">
            {infoHelperView()}
          </div>
        )}

        {/* SMS RECIPIENT VIEW */}
        {Object.keys(parameterList).length > 0 && smsRecepienView()}

        {/* PARAMETER CARDS */}
        {Object.keys(parameterList).length > 0 && (
          <div className="space-y-6">
            {Object.keys(parameterList).map((val) => TrendParameterCard(val))}
          </div>
        )}

        {/* ACTIVE STATUS + SUBMIT */}
        {ActiveStatusView()}
        {submitButtonView()}
      </div>
    );
  };

  // const CustomParameterCard = (val) => {
  //   // console.log(parameterList[val],"cCC")
  //   // debugger
  //   return (
  //     <div className="d-flex flex-wrap para-card mt-3">
  //       <div className="d-flex justify-content-between w-100">
  //         <label> Parameter Name - {val}</label>

  //         <div style={{ display: "inline-flex", alignItems: "center" }}>
  //           <label style={{ marginRight: "10px" }}>Alert Type</label>

  //           <Select
  //             value={
  //               parameterList[val].alertType !== "" && {
  //                 value: parameterList[val].alertType,
  //                 label: parameterList[val].alertType,
  //               }
  //             }
  //             placeholder="Select Alert Type"
  //             name="alertType"
  //             onChange={(e, name) => {
  //               let Temp = { ...parameterList };
  //               Temp[val].alertType = e.value;
  //               setParameterList(Temp);
  //             }}
  //             options={AlertOptionsList}
  //             className="basic-multi-select "
  //              styles={customStyles}
  //           />
  //         </div>
  //       </div>

  //       <div className="d-flex justify-content-between w-100">
  //         <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //           <div className="d-flex justify-content-around w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Variable TagType1 <span className="text-red-500">*</span>
  //             </label>
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Lable TagType1 <span className="text-red-500">*</span>
  //             </label>
  //           </div>
  //           {parameterList[val]?.TagType1.map((v1, index) => {
  //             return (
  //               <div className="d-flex justify-content-center align-items-center w-100">
  //                 <Select
  //                   value={
  //                     parameterList[val]?.TagType1[index][
  //                     "tag" + (index + 1)
  //                     ] !== "" && {
  //                       value:
  //                         parameterList[val].TagType1[index][
  //                         "tag" + (index + 1)
  //                         ],
  //                       label:
  //                         parameterList[val].TagType1[index][
  //                         "tag" + (index + 1)
  //                         ],
  //                     }
  //                   }
  //                   placeholder={"Select Tag " + (index + 1)}
  //                   name={val}
  //                   onChange={(e, name) =>
  //                     handleChangeSelectCustomAlerts(e, name, "TagType1", index)
  //                   }
  //                   options={optionList.Tags}
  //                   isDisabled={selectedValues.PlantName === ""}
  //                   className="basic-multi-select w-100"
  //                    styles={customStyles}
  //                 />
  //                 <input
  //                   name={val}
  //                   placeholder={"Enter Tag" + (index + 1) + " Label"}
  //                   type="text"
  //                   disabled={
  //                     parameterList[val]?.TagType1[index][
  //                     "tag" + (index + 1)
  //                     ] === "" || selectedValues.PlantName === ""
  //                   }
  //                   onChange={(e) =>
  //                     handleChangeLabelCustomAlerts(e, "TagType1", index)
  //                   }
  //                   value={
  //                     parameterList[val]?.TagType1[index][
  //                     "labeltag" + (index + 1)
  //                     ]
  //                   }
  //                   style={{ width: "100% !important" }}
  //                   className="form-control"
  //                 />
  //               </div>
  //             );
  //           })}
  //         </div>
  //         <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //           <div className="d-flex justify-content-around w-100">
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Variable TagType2 <span className="text-red-500">*</span>
  //             </label>
  //             <label className="text-sm font-medium text-[var(--text-color)]">
  //               Lable TagType2 <span className="text-red-500">*</span>
  //             </label>
  //           </div>
  //           {parameterList[val]?.TagType2.map((v1, index) => {
  //             return (
  //               <div className="d-flex justify-content-center align-items-center w-100">
  //                 <Select
  //                   value={
  //                     parameterList[val]?.TagType2[index][
  //                     "tag" + (index + 1)
  //                     ] !== "" && {
  //                       value:
  //                         parameterList[val].TagType2[index][
  //                         "tag" + (index + 1)
  //                         ],
  //                       label:
  //                         parameterList[val].TagType2[index][
  //                         "tag" + (index + 1)
  //                         ],
  //                     }
  //                   }
  //                   placeholder={"Select Tag " + (index + 1)}
  //                   name={val}
  //                   onChange={(e, name) =>
  //                     handleChangeSelectCustomAlerts(e, name, "TagType2", index)
  //                   }
  //                   options={optionList.Tags}
  //                   on
  //                   isDisabled={selectedValues.PlantName === ""}
  //                   className="basic-multi-select w-100"
  //                    styles={customStyles}
  //                 />
  //                 <input
  //                   name={val}
  //                   placeholder={"Enter Tag" + (index + 1) + " Label"}
  //                   type="text"
  //                   disabled={
  //                     parameterList[val]?.TagType2[index][
  //                     "tag" + (index + 1)
  //                     ] === "" || selectedValues.PlantName === ""
  //                   }
  //                   onChange={(e) =>
  //                     handleChangeLabelCustomAlerts(e, "TagType2", index)
  //                   }
  //                   value={
  //                     parameterList[val]?.TagType2[index][
  //                     "labeltag" + (index + 1)
  //                     ]
  //                   }
  //                   style={{ width: "100% !important" }}
  //                   className="form-control"
  //                 />
  //               </div>
  //             );
  //           })}
  //         </div>

  //         <div className="d-flex flex-column justify-content-center align-items-center w-100">
  //           <div className="d-flex  justify-content-around align-items-center w-75 ">
  //             <label className="w-100 mb-0">
  //               Adjustment (in Percentage){" "}
  //               <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Adjustment Value"}
  //               type="number"
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].Adjustment = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].Adjustment}
  //               // style={{ width: "30% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //           <div className="d-flex  justify-content-around align-items-center w-75 ">
  //             <label className="w-100 mb-0">
  //               Low Value (in Percentage)<span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Low Value"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].Low = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].Low}
  //               // style={{ width: "30% !important" }}
  //               className="form-control"
  //             />
  //           </div>

  //           <div className="d-flex  justify-content-around align-items-center w-75 ">
  //             <label className="w-100 mb-0">
  //               Time Delay (in Minutes) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Time Delay"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].timeDelay = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].timeDelay}
  //               // style={{ width: "30% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //           <div className="d-flex  justify-content-around align-items-center w-75 ">
  //             <label className="w-100 mb-0">
  //               Snooze Time (in Minutes) <span className="text-red-500">*</span>
  //             </label>
  //             <input
  //               name={val}
  //               placeholder={"Enter " + "Snooze Time"}
  //               type="number"
  //               min={0}
  //               onChange={(e) => {
  //                 let Temp = { ...parameterList };
  //                 Temp[e.target.name].snoozeTime = e.target.value;

  //                 setParameterList(Temp);
  //               }}
  //               value={parameterList[val].snoozeTime}
  //               // style={{ width: "30% !important" }}
  //               className="form-control"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };


  // CustomParameterCard.jsx
  // Tailwind-only, no Bootstrap. CSS variables from globals.css are used via arbitrary values.

  /* ─── Shared helpers ─────────────────────────────────────────── */

  /** Wraps a label + input in a flex-col */
  function Field({ label, required, children, className = "" }) {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <label className="text-xs font-semibold text-[var(--text-color)] whitespace-nowrap">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {children}
      </div>
    );
  }

  /** Styled text input */
  function TextInput({ name, placeholder, value, onChange }) {
    return (
      <input
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        className="
        w-full rounded-lg px-3 py-1.5 text-sm
        bg-[var(--input-enable-bg)] border border-[var(--input-enable-border)]
        text-[var(--text-color)] placeholder:text-[var(--search-placeholder)]
        focus:outline-none focus:border-[var(--picker-accent)]
        focus:ring-1 focus:ring-[var(--picker-accent)] transition-colors
      "
      />
    );
  }

  /** Styled number input */
  function NumInput({ name, placeholder, value, onChange }) {
    return (
      <input
        name={name}
        placeholder={placeholder}
        type="number"
        min={0}
        value={value}
        onChange={onChange}
        className="
        w-full rounded-lg px-3 py-1.5 text-sm
        bg-[var(--input-enable-bg)] border border-[var(--input-enable-border)]
        text-[var(--text-color)] placeholder:text-[var(--search-placeholder)]
        focus:outline-none focus:border-[var(--picker-accent)]
        focus:ring-1 focus:ring-[var(--picker-accent)] transition-colors
      "
      />
    );
  }

  /* ─── Main card ──────────────────────────────────────────────── */

  const CustomParameterCard = (val) => {
    const param = parameterList[val];
    const tags = [1, 2, 3, 4]; // Tag rows

    return (
      <div className="flex flex-col gap-4 p-4 mt-3 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)]">

        {/* ── Header row: Parameter name + Alert Type ── */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold text-[var(--text-color)]">
            Parameter Name — {val}
          </span>

          <div className="flex items-center gap-2 min-w-[240px]">
            <span className="text-sm font-medium text-[var(--text-color)] whitespace-nowrap">
              Alert Type
            </span>
            <div className="flex-1">
              <Select
                value={
                  param.alertType !== "" && {
                    value: param.alertType,
                    label: param.alertType,
                  }
                }
                placeholder="Select Alert Type"
                name="alertType"
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[val].alertType = e.value;
                  setParameterList(Temp);
                }}
                options={AlertOptionsList}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
        </div>

        {/* ── Body: tag table + side fields ── */}
        <div className="flex gap-4 items-start">

          {/* LEFT: Tag table — 4 columns × 4 rows */}
          <div className="flex-1 min-w-0">
            {/* Column headers */}
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[
                "Variable TagType1",
                "Label TagType1",
                "Variable TagType2",
                "Label TagType2",
              ].map((h) => (
                <span
                  key={h}
                  className="text-xs font-semibold text-[var(--text-color)] whitespace-nowrap"
                >
                  {h} <span className="text-red-500">*</span>
                </span>
              ))}
            </div>

            {/* Tag rows */}
            <div className="flex flex-col gap-2">
              {tags.map((i) => (
                <div key={i} className="grid grid-cols-4 gap-2 items-center">

                  {/* Variable Tag Type 1 */}
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      param[`variableTag1_${i}`] !== "" && {
                        value: param[`variableTag1_${i}`],
                        label: param[`variableTag1_${i}`],
                      }
                    }
                    placeholder={`Select Tag ${i}`}
                    name={`variableTag1_${i}-${val}`}
                    onChange={(e) => {
                      const Temp = { ...parameterList };
                      Temp[val][`variableTag1_${i}`] = e.value;
                      setParameterList(Temp);
                    }}
                    options={optionList.Tags}
                    isDisabled={selectedValues.PlantName === ""}
                    className="basic-multi-select w-full"
                    classNamePrefix="select"
                  />

                  {/* Label Tag Type 1 */}
                  <TextInput
                    name={`labelTag1_${i}-${val}`}
                    placeholder={`Enter Tag${i} Label`}
                    value={param[`labelTag1_${i}`]}
                    onChange={(e) => {
                      const Temp = { ...parameterList };
                      Temp[val][`labelTag1_${i}`] = e.target.value;
                      setParameterList(Temp);
                    }}
                  />

                  {/* Variable Tag Type 2 */}
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      param[`variableTag2_${i}`] !== "" && {
                        value: param[`variableTag2_${i}`],
                        label: param[`variableTag2_${i}`],
                      }
                    }
                    placeholder={`Select Tag ${i}`}
                    name={`variableTag2_${i}-${val}`}
                    onChange={(e) => {
                      const Temp = { ...parameterList };
                      Temp[val][`variableTag2_${i}`] = e.value;
                      setParameterList(Temp);
                    }}
                    options={optionList.Tags}
                    isDisabled={selectedValues.PlantName === ""}
                    className="basic-multi-select w-full"
                    classNamePrefix="select"
                  />

                  {/* Label Tag Type 2 */}
                  <TextInput
                    name={`labelTag2_${i}-${val}`}
                    placeholder={`Enter Tag${i} Label`}
                    value={param[`labelTag2_${i}`]}
                    onChange={(e) => {
                      const Temp = { ...parameterList };
                      Temp[val][`labelTag2_${i}`] = e.target.value;
                      setParameterList(Temp);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: single-value fields stacked */}
          <div className="flex flex-col gap-2 w-52 shrink-0">

            {/* Spacer to align with column headers */}
            <div className="h-5" />

            <Field label="Adjustment (in Percentage)" required>
              <NumInput
                name={val}
                placeholder="Enter Adjustment"
                value={param.adjustment}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].adjustment = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Low Value (in Percentage)" required>
              <NumInput
                name={val}
                placeholder="Enter Low Value"
                value={param.Low}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].Low = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Time Delay (in Minutes)" required>
              <NumInput
                name={val}
                placeholder="Enter Time Delay"
                value={param.timeDelay}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].timeDelay = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>

            <Field label="Snooze Time (in Minutes)" required>
              <NumInput
                name={val}
                placeholder="Enter Snooze Time"
                value={param.snoozeTime}
                onChange={(e) => {
                  const Temp = { ...parameterList };
                  Temp[e.target.name].snoozeTime = e.target.value;
                  setParameterList(Temp);
                }}
              />
            </Field>
          </div>
        </div>
      </div>
    );
  };



  const CustomAlertView = () => {
    return (
      <div className="space-y-6">
        {/* PARAMETER SELECT */}
        <div>
          <label className="text-sm font-medium text-[var(--text-color)]">
            Parameter Select
          </label>

          <Select
            formatOptionLabel={formatOptionLabel}
            isMulti
            value={dynamicParameterSelctList}
            placeholder="Select Parameters"
            name="Parameter Select"
            onChange={(e) => handleChangeParameterSelectCustomAlerts(e)}
            options={dynamicparameterOptionList}
            styles={customStyles}

          />
        </div>

        {/* PARAMETER CARDS */}
        {Object.keys(parameterList).length > 0 && (
          <div className="space-y-6">
            {Object.keys(parameterList).map((val) => (
              <div
                key={val}
                className="border border-[var(--form-border)] rounded-xl p-5"
              >
                {CustomParameterCard(val)}
              </div>
            ))}
          </div>
        )}

        {/* ACTIVE STATUS + SUBMIT */}
        {Object.keys(parameterList).length > 0 && (
          <div className="pt-4 border-t border-[var(--form-border)] space-y-6">
            {ActiveStatusView()}
            {submitButtonView()}
          </div>
        )}
      </div>
    );
  };

  let TrendViolationInfo = {
    Time_Delay:
      "The period for which IoT data would be monitored at every minute.For example if it is set for 30, then every minute 30s iot data will be fetched and checked for trend violation.",
    Start_Value:
      "For digital tag, the value that is considered as True. Usually it is 1.",
    Stop_Value:
      "For digital tag, the value that is considered as False. Usually it is 0.",
    Snooze_Time:
      " The time period till you do not want to receive an alert after receiving the first alert. It is in minutes.",
    Hi_Value:
      "The Upper boundary of a tag. If the value of a tag crosses this, one will receive major alert",
    HiHi_Value:
      "The Upper boundary of a tag. If the value of a tag crosses this, one will receive critical alert",
    Low_Value:
      "The lower boundary of a tag. If the value of a tag crosses this, one will receive major alert",
    LowLow_Value:
      "The lower boundary of a tag. If the value of a tag crosses this, one will receive critical alert",
    "On Stop":
      "when the value of the tag observed as stop value, one will receive alert",
    "On Start":
      "when the value of the tag observed as start value, one will receive  alert",
    "On Change":
      "when the value will change from start to stop or stop to start, one will receive  alert",
  };

  const infoHelperView = () => {
    return (
      <div className="mt-2">
        {Object.keys(TrendViolationInfo).map((item) => {
          return (
            <div>
              <div className="d-flex  text-[var(--text-color)]">
                <label > {item} </label>
                <div
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  {TrendViolationInfo[item]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };


  const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "35px",
      height: "35px",
      border: `1px solid ${state.isFocused
        ? "var(--picker-accent)"
        : "var(--input-enable-border)"
        }`,
      borderRadius: "8px",
      backgroundColor: state.isDisabled
        ? "var(--input-disable-bg)"
        : "var(--input-enable-bg)",
      fontSize: "13px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "var(--picker-accent)",
      },
    }),

    valueContainer: (base) => ({
      ...base,
      padding: "0 6px",
      height: "35px",
    }),

    indicatorsContainer: (base) => ({
      ...base,
      height: "35px",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "var(--input-enable-bg)",
      borderRadius: "8px",
      zIndex: 9999,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--picker-accent)"
        : state.isFocused
          ? "var(--picker-hover)"
          : "transparent",
      color: state.isSelected
        ? "#fff"
        : "var(--text-color)",
      cursor: "pointer",
      fontSize: "13px",
    }),

    multiValue: (base) => ({
      ...base,
      backgroundColor: "var(--picker-hover)",
      borderRadius: "6px",
    }),

    multiValueLabel: (base) => ({
      ...base,
      color: "var(--text-color)",
      fontSize: "12px",
    }),

    multiValueRemove: (base) => ({
      ...base,
      color: "var(--text-color)",
      ":hover": {
        backgroundColor: "var(--picker-accent)",
        color: "#fff",
      },
    }),

    singleValue: (base) => ({
      ...base,
      color: "var(--text-color)",
    }),

    input: (base) => ({
      ...base,
      color: "var(--text-color)",
    }),

    placeholder: (base) => ({
      ...base,
      color: "var(--card-subtle)",
      fontSize: "12px",
    }),
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
    <AuthenticatedTemplate>
      <div className="w-full h-full ">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-2 -mt-2">
          <h2 className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-2">
            Equipment Template Configuration
          </h2>
          <button
            onClick={() => navigate("/templates")}
            className="    border border-[var(--button-border)] mr-0.5
    bg-[var(--button-bg)]
    text-[14px]
    font-medium
    px-2 py-1
    rounded-lg
    transition
    cursor-pointer
    hover:bg-[var(--button-hover-bg)]
    text-[var(--text-color)]"
          >
            {/* <BiChevronLeft size={22} /> */}
            Back
          </button>
        </div>

        {/* CARD CONTAINER */}
        <div className="w-full rounded-2xl border border-[var(--search-border)] shadow-[var(--card-shadow)] p-2 ">
          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TEMPLATE NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-color)]">
                Template Name <span className="text-red-500">*</span>
              </label>

              <input
                name="TemplateName"
                placeholder="Enter Template Name"
                onChange={(e) => setTemplateName(e.target.value)}
                value={templateName}
                disabled={state?.rowdata}
                className="w-full h-[35px] rounded-lg px-3 text-[13px] border border-[var(--input-enable-border)] bg-[var(--input-enable-bg)] text-[var(--text-color)] placeholder:text-[var(--search-placeholder)] focus:outline-none focus:border-[var(--picker-accent)] disabled:bg-[var(--input-disable-bg)] disabled:cursor-not-allowed transition"
              />
            </div>

            {/* PLANT NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-color)]">
                Plant Name <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      selectedValues.PlantName !== "" && {
                        value: selectedValues.PlantName,
                        label: selectedValues.PlantName,
                      }
                    }
                    placeholder="Select Plant"
                    name="PlantName"
                    onChange={(e, name) => handleChange(e, name)}
                    options={optionList.PlantName}
                    isDisabled={
                      window.location.href.split("/").pop() === "editTemplate"
                    }
                    styles={customStyles}
                  />
                </div>

                {selectedValues.PlantName !== "" &&
                  window.location.href.split("/").pop() !== "editTemplate" && (
                    <button
                      onClick={() => {
                        let temp = { ...selectedValues };
                        temp.PlantName = "";
                        setSelectedValues(temp);

                        let tempParameterList = { ...parameterList };
                        Object.keys(tempParameterList).forEach((val) => {
                          tempParameterList[val].variable = "";
                        });
                        setParameterList(tempParameterList);

                        let tOption = { ...optionList };
                        tOption.Tags = [];
                        setOptionList(tOption);
                      }}
                      className="text-[var(--text-color)] px-2 py-1 rounded-md text-sm bg-[var(--report-field-bg-color)] border border-[var(--form-border)] hover:bg-[var(--button-hover-bg)]"
                    >
                      X
                    </button>
                  )}
              </div>
            </div>

            {/* USECASE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-color)]">
                Use Case <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      selectedValues.UseCase !== "" && {
                        value: selectedValues.UseCase,
                        label: selectedValues.UseCase,
                      }
                    }
                    placeholder="Select UseCase"
                    name="UseCase"
                    onChange={(e, name) => handleChange(e, name)}
                    options={optionList.UseCase}
                    isDisabled={
                      window.location.href.split("/").pop() === "editTemplate"
                    }
                    styles={customStyles}
                  />
                </div>

                {selectedValues.UseCase !== "" &&
                  window.location.href.split("/").pop() !== "editTemplate" && (
                    <button
                      onClick={() => {
                        let temp = { ...selectedValues };
                        temp.UseCase = "";
                        setSelectedValues(temp);
                      }}
                      className="text-[var(--text-color)] px-2 py-1 rounded-md text-sm bg-[var(--report-field-bg-color)] border border-[var(--form-border)] hover:bg-[var(--button-hover-bg)]"
                    >
                      X
                    </button>
                  )}
              </div>
            </div>

            {/* EQUIPMENT */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--text-color)]">
                Equipment Name
              </label>

              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Select
                    formatOptionLabel={formatOptionLabel}
                    value={
                      selectedValues.FanName !== "" && {
                        value: selectedValues.FanName,
                        label: selectedValues.FanName,
                      }
                    }
                    placeholder="Select Equipment"
                    name="FanName"
                    onChange={(e, name) => handleChange(e, name)}
                    isDisabled={
                      window.location.href.split("/").pop() === "editTemplate"
                    }
                    options={optionList.FanName}
                    styles={customStyles}
                  />
                </div>

                {selectedValues.FanName !== "" &&
                  window.location.href.split("/").pop() !== "editTemplate" && (
                    <button
                      onClick={() => {
                        let temp = { ...selectedValues };
                        temp.FanName = "";
                        setSelectedValues(temp);
                      }}
                      className="text-[var(--text-color)] px-2 py-1 rounded-md text-sm bg-[var(--report-field-bg-color)] border border-[var(--form-border)] hover:bg-[var(--button-hover-bg)]"
                    >
                      X
                    </button>
                  )}
              </div>
            </div>
          </div>

          {/* DYNAMIC SECTION */}
          <div className="mt-8">
            {selectedValues.UseCase === "Fan Efficiency" && FanEfficiencyView()}
            {selectedValues.UseCase === "Asset Details" && AssetDetailsView()}
            {selectedValues.UseCase === "Trend Violation" &&
              TrendViolationView()}
            {selectedValues.UseCase === "Custom Alerts" && CustomAlertView()}
            {selectedValues.UseCase === "False Air" && FalseAirView()}
            {selectedValues.UseCase === "Cyclone Efficiency" &&
              CycloneEfficiencyView()}
          </div>
        </div>
      </div>
    </AuthenticatedTemplate>
  );
};
