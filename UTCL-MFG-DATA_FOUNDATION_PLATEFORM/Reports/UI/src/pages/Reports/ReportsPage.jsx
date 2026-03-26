// import axios from "axios";

// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import Select from "react-select";
// import "react-datepicker/dist/react-datepicker.css";
// import "../../css/ReportsPage.css";
// import Loader from "react-js-loader";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthenticatedTemplate } from "@azure/msal-react";
// import moment from "moment";
// import { Form } from "react-bootstrap";
// import { BASE_URL } from "../../base";
// // import "bootstrap/dist/css/bootstrap.min.css";
// export const ReportsPage = () => {
//   const loader = (
//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={50}
//     />
//   );

//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const [submitLoader, setSubmitLoader] = useState(false);
//   const [templateName, setTemplateName] = useState("");

//   const [startDate, setStartDate] = useState(
//     new Date(moment(new Date()).subtract("1", "hours"))
//   );
//   const [endDate, setEndDate] = useState(new Date());
//   const [mailDateTime, setMailDateTime] = useState();
//   const [startTime, setStartTime] = useState(
//     new Date(moment().startOf("day").format("YYYY-MM-DD HH:mm"))
//   );
//   const [endTime, setEndTime] = useState(
//     new Date(moment().endOf("day").format("YYYY-MM-DD HH:mm"))
//   );
//   const [MailTime, setMailTime] = useState();
//   const [selectedPlant, setSelectedPlant] = useState("");
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [selectedInterval, setSelectedInterval] = useState(1);
//   const [selectedIntervaltype, setSelectedIntervaltype] = useState("m");
//   const [selectedEmailFrequency, setSelectedEmailFrequency] =
//     useState("Yesterday");
//   const [isScheduler, setIsScheduler] = useState(false);
//   const [optionList, setOptionList] = useState({
//     PlantName: [],
//     Tags: [],
//     interval: [],
//   });

//   const [intervalOptionList, setIntervalOptionList] = useState({});
//   const [mailTimeOptionList, setMailTimeOptionList] = useState([]);
//   const [emailFrequencyOptions, setEmailFrequencyOptions] = useState([
//     { value: "Yesterday", label: "Yesterday" },
//     { value: "Daily", label: "Daily" },
//     { value: "Weekly", label: "Weekly" },
//     { value: "Monthly", label: "Monthly" },
//     { value: "Custom", label: "Custom" },
//   ]);
//   const [recipient, setRecipient] = useState([]);
//   const [recipientInput, setRecipientInput] = useState("");
//   const [recipientError, setRecipientError] = useState(null);
//   const [schedulerType, setSchedulerType] = useState("");
//   const [schedulerValue, setSchedulerValue] = useState("");
//   const [schedulerValueOption, setSchedulerValueOption] = useState({
//     1: [],
//     2: [],
//     3: [],
//   });
//   const schedulerTypeOption = [
//     {
//       value: 1,
//       label: "Current Time",
//     },
//     {
//       value: 2,
//       label: "Minutes",
//     },
//     {
//       value: 3,
//       label: "Hours",
//     },
//     {
//       value: 4,
//       label: "Yesterday",
//     },
//     {
//       value: 5,
//       label: "Today",
//     },
//     {
//       value: 6,
//       label: "Day",
//     },
//     {
//       value: 7,
//       label: "Month",
//     },
//   ];
//   const intervalTypeOptions = [
//     { value: "m", label: "minute" },
//     { value: "h", label: "hour" },
//     { value: "d", label: "day" },
//   ];
//   // const schedulerValueOption = {
//   //   1: [],
//   //   2: [],
//   //   3: [],
//   // };
//   useEffect(() => {
//     let tOption = { ...optionList };
//     if (localStorage.getItem("login")) {
//       let t = JSON.parse(localStorage.getItem("login"));
//       tOption.PlantName = t?.plants.map((val) => {
//         return {
//           value: val,
//           label: val,
//         };
//       });
//     }
//     setOptionList(tOption);

//     let tempInt = {
//       m: [],
//       h: [],
//       d: [],
//     };
//     for (let i = 1; i <= 59; i++) {
//       tempInt.m.push({
//         value: i,
//         label: i,
//       });
//     }
//     for (let i = 1; i <= 23; i++) {
//       tempInt.h.push({
//         value: i,
//         label: i,
//       });
//     }
//     for (let i = 1; i <= 31; i++) {
//       tempInt.d.push({
//         value: i,
//         label: i,
//       });
//     }

//     setIntervalOptionList(tempInt);

//     // val01=[10,20,30,40,50]
//     // val02=[5,10,15,20,25,30,35,40,45,50,55]
//     // val03=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
//     let tempSchedulerValueOption = { ...schedulerValueOption };
//     tempSchedulerValueOption[1] = [];
//     for (let i = 1; i <= 5; i++) {
//       tempSchedulerValueOption[1].push({
//         value: i * 10,
//         label: i * 10,
//       });
//     }
//     tempSchedulerValueOption[2] = [];
//     for (let i = 1; i <= 11; i++) {
//       tempSchedulerValueOption[2].push({
//         value: i * 5,
//         label: i * 5,
//       });
//     }
//     let tempMailTime = [];
//     tempSchedulerValueOption[3] = [];
//     for (let i = 0; i <= 23; i++) {
//       tempSchedulerValueOption[3].push({
//         value: i,
//         label: i,
//       });
//       tempMailTime.push({
//         value: i,
//         label: i,
//       });
//     }
//     setMailTimeOptionList(tempMailTime);
//     setSchedulerValueOption(tempSchedulerValueOption);

//     // console.log(schedulerValueOption[1]);
//   }, []);
//   useEffect(() => {
//     getTagList();
//   }, [selectedPlant]);
//   useEffect(() => {
//     if (
//       state?.rowdata === undefined &&
//       window.location.href.split("/").pop() === "editReportPage"
//     ) {
//       navigate("/ReportList");
//     }
//     if ((state?.rowdata || state?.copyData) && state.EditFlag) {
//       setTemplateData();
//       getTagList();
//     }
//   }, []);

//   const setTemplateData = () => {
//     let EditData = state?.rowdata;
//     if (state?.copyData) {
//       EditData = state?.copyData;
//       EditData.ReportTemplateName = EditData.ReportTemplateName + "- Copy";
//     }
//     console.log(EditData, "eeeeeeee");
//     setSelectedPlant(EditData.Plant);
//     setTemplateName(EditData.ReportTemplateName);
//     let intervalminutes = moment.duration(EditData.Interval).asMinutes();
//     if (intervalminutes >= 1440) {
//       setSelectedInterval(moment.duration(EditData.Interval).asDays());
//       setSelectedIntervaltype("d");
//       // console.log(moment.duration(EditData.Interval).asDays());
//     } else if (intervalminutes >= 60) {
//       setSelectedInterval(moment.duration(EditData.Interval).asHours());
//       setSelectedIntervaltype("h");
//       // console.log(moment.duration(EditData.Interval).asHours());
//     } else {
//       setSelectedInterval(moment.duration(EditData.Interval).asMinutes());
//       setSelectedIntervaltype("m");
//       // console.log(moment.duration(EditData.Interval).asMinutes());
//     }
//     setIsScheduler(EditData.IsScheduler);
//     setSelectedEmailFrequency(EditData.EmailFrequency);
//     if (
//       EditData.EmailFrequency === "Monthly" ||
//       EditData.EmailFrequency === "Weekly"
//     ) {
//       setStartDate(new Date(moment(EditData.StartDate, "YYYY-MM-DD HH:mm")));
//     } else {
//       setStartTime(new Date(moment(EditData.StartDate, "YYYY-MM-DD HH:mm")));
//       setEndTime(new Date(moment(EditData.EndDate, "YYYY-MM-DD HH:mm")));
//     }
//     if (EditData.IsScheduler && EditData.EmailFrequency !== "Custom") {
//       // console.log("h11111111", EditData.MailTime);
//       setMailTime(new Date(moment(EditData.MailTime, "YYYY-MM-DD HH:mm")));
//       setRecipient(EditData.Recipients.split("@@@"));
//     }
//   };

//   const getTagList = () => {
//     // console.log("hereee", state.copyData);
//     let payload = {
//       PlantName: selectedPlant,
//     };
//     if (state?.rowdata) {
//       payload.PlantName = state?.rowdata?.Plant;
//     }
//     if (state?.copyData) {
//       payload.PlantName = state?.copyData?.Plant;
//     }
//     let tOption = { ...optionList };
//     if (payload.PlantName !== "") {
//       axios
//         .post(BASE_URL + "cbm/plant/getPlantAllTags", payload)
//         .then((res) => {
//           res = res.data.result;
//           tOption.Tags = [];
//           if (res === "No Records Found") {
//             toast.warning("No Tags Found for Plant " + payload.PlantName);
//           } else {
//             let tempSelectedtags = [];
//             if (state?.rowdata) {
//               // console.log("here");
//               tempSelectedtags = state?.rowdata.Tags.split("@@@");
//             }
//             if (state?.copyData) {
//               console.log("1");
//               tempSelectedtags = state?.copyData.Tags.split("@@@");
//             }
//             let TempT = [];
//             res.map((val) => {
//               if (state?.rowdata || state?.copyData) {
//                 if (tempSelectedtags.includes(val["Tag UID"])) {
//                   TempT.push({
//                     value: val["Tag UID"],
//                     label: `${val["Tag UID"]} \n Desc: ${val["Description"]}`,
//                   });
//                 }
//               }
//               tOption.Tags.push({
//                 value: val["Tag UID"],
//                 label: `${val["Tag UID"]} \n Desc: ${val["Description"]}`,
//               });
//             });
//             tOption.Tags.unshift({ value: "", label: "Select..." });
//             setSelectedTags(TempT);
//             setOptionList(tOption);
//           }
//         })
//         .catch((err) => {
//           console.log(err.message);
//           toast.error(err.message);
//         });
//     }
//   };
//   const handleChangePlant = (val) => {
//     setSelectedPlant(val.value);
//   };
//   const handleChangeInterval = (val) => {
//     setSelectedInterval(val.value);
//   };
//   const handleChangeEmailFrequency = (val) => {
//     setSelectedEmailFrequency(val.value);
//     if (val.value === "Yesterday") {
//       setStartTime(
//         new Date(moment().startOf("day").format("YYYY-MM-DD HH:mm"))
//       );
//       setEndTime(new Date(moment().endOf("day").format("YYYY-MM-DD HH:mm")));
//     }
//     if (val.value === "Daily") {
//       setEndTime(new Date(moment().format("YYYY-MM-DD HH:mm")));
//     }
//   };
//   const handleChangeSelect = (val) => {
//     setSelectedTags(val);
//   };

//   const handleDeleteEmail = (item) => {
//     let tempRecipient = [...recipient];
//     tempRecipient = tempRecipient.filter((i) => i !== item);

//     setRecipient(tempRecipient);
//   };
//   const handleKeyDownRecipient = (event) => {
//     if (["Enter", "Tab", ","].includes(event.key)) {
//       event.preventDefault();

//       var value = recipientInput.trim();
//       if (!/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(value)) {
//         setRecipientError("Invalid Email");
//       } else {
//         if (recipient.includes(value)) {
//           setRecipientError("Already in List");
//         } else {
//           let trec = [...recipient];
//           trec.push(value);
//           setRecipient(trec);
//           setRecipientInput("");
//         }
//       }
//     }
//   };
//   const handleChangeRecipientInput = (event) => {
//     setRecipientInput(event.target.value);
//     setRecipientError("");
//   };
//   const SendData = () => {
//     if (!JSON.parse(localStorage.getItem("login"))) {
//       return;
//     }
//     const { token, email } = JSON.parse(localStorage.getItem("login"));
//     if (selectedPlant === "") {
//       toast.error("Please Select Plant");
//       return;
//     }

//     if (!isScheduler) {
//       if (!moment(startDate).isSameOrBefore(endDate)) {
//         toast.error("start date should be less then end date");
//         return;
//       }
//       if (!moment(endDate).isSameOrBefore(mailDateTime)) {
//         toast.error("Mail date should be less then end date");
//         return;
//       }
//     }
//     if (
//       selectedEmailFrequency !== "Custom" &&
//       isScheduler &&
//       recipient.length === 0
//     ) {
//       toast.error("please enter recipient");
//       return;
//     }
//     if (selectedTags.length === 0) {
//       toast.error("please Select Tags");
//       return;
//     }
//     let postUrl = BASE_URL + "cbm/template/sendReportData";
//     console.log({ selectedIntervaltype, selectedInterval });
//     const findReportInteval = (selectedIntervaltype, selectedInterval) => {
//       switch (selectedIntervaltype) {
//         case "m":
//           return `00:${selectedInterval}:00`;
//         case "h":
//           return `${selectedInterval}:00:00`;
//         case "d":
//           var dayIntoHours = selectedInterval * 24;
//           return `${dayIntoHours}:00:00`;
//         default:
//           break;
//       }
//     };
//     console.log({
//       data: findReportInteval(selectedIntervaltype, selectedInterval),
//     });
//     let payload = {
//       userid: email,
//       ReportTemplateName: templateName,
//       Plant: selectedPlant,
//       Tags: selectedTags.map((val) => val.value),
//       // Interval: selectedInterval + selectedIntervaltype,
//       Interval: findReportInteval(selectedIntervaltype, selectedInterval),
//       isScheduler: selectedEmailFrequency === "Custom" ? false : isScheduler,
//       EmailFrequency: selectedEmailFrequency,
//       StartDate:
//         selectedEmailFrequency === "Monthly" ||
//           selectedEmailFrequency === "Weekly"
//           ? moment(startDate).format("YYYY-MM-DD")
//           : selectedEmailFrequency === "Custom"
//             ? moment(startDate).format("YYYY-MM-DD HH:mm")
//             : moment(startTime).format("YYYY-MM-DD HH:mm"),
//       EndDate:
//         selectedEmailFrequency === "Monthly" ||
//           selectedEmailFrequency === "Weekly"
//           ? ""
//           : selectedEmailFrequency === "Custom"
//             ? moment(endDate).format("YYYY-MM-DD HH:mm")
//             : moment(endTime).format("YYYY-MM-DD HH:mm"),
//       MailTime:
//         isScheduler && selectedEmailFrequency !== "Custom"
//           ? moment(MailTime).format("YYYY-MM-DD HH:mm")
//           : "",
//       Recipients:
//         isScheduler && selectedEmailFrequency !== "Custom" ? recipient : [],
//     };
//     if (state?.rowdata) {
//       postUrl = BASE_URL + "cbm/template/editReportData";
//       payload.TimeStamp = state.rowdata.Timestamp;
//     }

//     // console.log(payload, "payyyyy");
//     setSubmitLoader(true);
//     axios
//       .post(postUrl, payload, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         res = res.data.result;
//         if (state?.rowdata) {
//           toast.success("Template Updated Successfully.");
//         } else {
//           toast.success("Template Added Successfully.");
//         }
//         setSubmitLoader(false);
//         navigate("/ReportList");
//       })
//       .catch((err) => {
//         setSubmitLoader(false);
//         console.log(err.message);
//         toast.error(err.message);
//       });
//   };

//   return (
//     <AuthenticatedTemplate>
//       <div className="dash-top" style={{ borderRadius: "0px" }}>
//         <div className="mycard mt-2">
//           <div
//             style={{
//               display: "flex",
//               marginLeft: "20px",
//               marginTop: "20px",
//               marginBottom: "10px",
//             }}
//           >
//             {/* <BiArrowBack
//             size={20}

//           /> */}
//             <button
//               className="btn btnfrst"
//               onClick={() => {
//                 navigate("/reportList");
//               }}
//             >
//               Back
//             </button>
//             <h4 style={{ marginLeft: "20px", marginTop: "10px" }}>
//               Report Template Configuration
//             </h4>
//           </div>
//           <div className="outerContainer">
//             <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2 ">
//               <label className="mb-2">
//                 Template Name <span className="text-danger">*</span>
//               </label>
//               <input
//                 name="TemplateName"
//                 placeholder="Enter Template Name"
//                 onChange={(e) => setTemplateName(e.target.value)}
//                 value={templateName}
//                 disabled={
//                   state?.rowdata ||
//                   window.location.href.split("/").pop() === "editReportPage"
//                 }
//                 style={{ minWidth: "100% " }}
//                 className="form-control"
//               />
//             </div>

//             <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2 ">
//               <label className="mb-2">
//                 PlantName <span className="text-danger">*</span>
//               </label>

//               {
//                 <Select
//                   value={
//                     selectedPlant !== "" && {
//                       value: selectedPlant,
//                       label: selectedPlant,
//                     }
//                   }
//                   placeholder="Select Plant"
//                   name="PlantName"
//                   onChange={(e) => handleChangePlant(e)}
//                   options={optionList.PlantName}
//                   isDisabled={
//                     window.location.href.split("/").pop() === "editReportPage"
//                   }
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//               }
//               <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
//                 {selectedPlant !== "" &&
//                   !!!window.location.href.split("/").pop() ===
//                   "editReportPage" && (
//                     <button
//                       onClick={() => setSelectedPlant("")}
//                       className="p-2 btn btnfrst"
//                     >
//                       X
//                     </button>
//                   )}
//               </div>
//             </div>

//             <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2 ">
//               <label className="mb-2">
//                 Tags <span className="text-danger">*</span>
//               </label>

//               <Select
//                 isMulti
//                 value={selectedTags}
//                 placeholder={"Select Tags"}
//                 name={"Tags"}
//                 onChange={(e) => handleChangeSelect(e)}
//                 options={optionList.Tags}
//                 className="basic-multi-select w-100"
//                 classNamePrefix="select"
//               />

//               <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
//                 {selectedTags !== [] &&
//                   !!!window.location.href.split("/").pop() ===
//                   "editReportPage" && (
//                     <button
//                       onClick={() => setSelectedTags([])}
//                       className="p-2 btn btnfrst"
//                     >
//                       X
//                     </button>
//                   )}
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//               <label className="mb-2">
//                 {"Interval "}
//                 <span className="text-danger">*</span>
//               </label>
//               <div className="d-flex">
//                 <Select
//                   value={
//                     selectedIntervaltype !== "" &&
//                     intervalTypeOptions.filter(
//                       (val) => val.value === selectedIntervaltype
//                     )
//                   }
//                   placeholder="Select Interval Type"
//                   name="Interval"
//                   onChange={(e) => setSelectedIntervaltype(e.value)}
//                   options={intervalTypeOptions}
//                   // isDisabled={
//                   //   window.location.href.split("/").pop() === "editReportPage"
//                   // }
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//                 <Select
//                   value={
//                     selectedInterval !== "" && {
//                       value: selectedInterval,
//                       label: selectedInterval,
//                     }
//                   }
//                   placeholder="Select Interval"
//                   name="Interval"
//                   onChange={(e) => handleChangeInterval(e)}
//                   options={intervalOptionList[selectedIntervaltype]}
//                   // isDisabled={
//                   //   window.location.href.split("/").pop() === "editReportPage"
//                   // }
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="scheduleContainer">
//             <>
//               <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//                 <label className="mb-2">
//                   Period <span className="text-danger">*</span>
//                 </label>

//                 <Select
//                   value={
//                     selectedEmailFrequency !== "" && {
//                       value: selectedEmailFrequency,
//                       label: selectedEmailFrequency,
//                     }
//                   }
//                   placeholder="Select Email Frequency"
//                   name="Interval"
//                   onChange={(e) => handleChangeEmailFrequency(e)}
//                   options={emailFrequencyOptions}
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//               </div>
//               {(selectedEmailFrequency === "Monthly" ||
//                 selectedEmailFrequency === "Weekly") && (
//                   <>
//                     <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//                       <label className="mb-2">
//                         Start Date <span className="text-danger">*</span>
//                       </label>
//                       <DatePicker
//                         selected={startDate}
//                         className={"form-control"}
//                         placeholderText="Click to select a date"
//                         onChange={(date) => {
//                           setStartDate(date);
//                         }}
//                         // showTimeSelect
//                         dateFormat="d/MM/yyyy"
//                         timeIntervals={1}
//                         calendarClassName="rasta-stripes"
//                       />
//                     </div>
//                   </>
//                 )}
//               {selectedEmailFrequency === "Custom" && (
//                 <>
//                   <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//                     <label className="mb-2">
//                       Start Date <span className="text-danger">*</span>
//                     </label>
//                     <DatePicker
//                       selected={startDate}
//                       className={"form-control"}
//                       placeholderText="Click to select a date"
//                       onChange={(date) => {
//                         setStartDate(date);
//                       }}
//                       showTimeSelect
//                       dateFormat="d/MM/yyyy h:mm aa"
//                       timeIntervals={1}
//                       calendarClassName="rasta-stripes"
//                     />
//                   </div>
//                   <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//                     <label className="mb-2">
//                       End Date <span className="text-danger">*</span>
//                     </label>
//                     <DatePicker
//                       selected={endDate}
//                       placeholderText="Click to select a date"
//                       className={"form-control"}
//                       onChange={(date) => {
//                         setEndDate(date);
//                       }}
//                       minDate={startDate}
//                       filterTime={(time) => {
//                         let currentDate = new Date(startDate);
//                         let selectedDate = new Date(time);
//                         return currentDate.getTime() < selectedDate.getTime();
//                       }}
//                       showTimeSelect
//                       dateFormat="d/MM/yyyy h:mm aa"
//                       timeIntervals={1}
//                       calendarClassName="rasta-stripes"
//                     />
//                   </div>
//                 </>
//               )}
//               {(selectedEmailFrequency === "Yesterday" ||
//                 selectedEmailFrequency === "Daily") && (
//                   <>
//                     <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//                       <label className="mb-2">
//                         Start Time <span className="text-danger">*</span>
//                       </label>
//                       <DatePicker
//                         selected={startTime}
//                         placeholderText="Click to select a date"
//                         className={"form-control"}
//                         onChange={(date) => {
//                           setStartTime(date);
//                         }}
//                         showTimeSelect
//                         showTimeSelectOnly
//                         dateFormat="h:mm aa"
//                         timeIntervals={1}
//                         calendarClassName="rasta-stripes"
//                       />
//                     </div>
//                     <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//                       <label className="mb-2">
//                         End Time <span className="text-danger">*</span>
//                       </label>
//                       <DatePicker
//                         selected={endTime}
//                         placeholderText="Click to select a date"
//                         className={"form-control"}
//                         onChange={(date) => {
//                           setEndTime(date);
//                         }}
//                         filterTime={(time) => {
//                           let currentDate = new Date(startTime);
//                           let selectedDate = new Date(time);
//                           return currentDate.getTime() < selectedDate.getTime();
//                         }}
//                         showTimeSelect
//                         showTimeSelectOnly
//                         dateFormat="h:mm aa"
//                         timeIntervals={1}
//                         calendarClassName="rasta-stripes"
//                       />
//                     </div>
//                   </>
//                 )}
//             </>
//           </div>

//           {selectedEmailFrequency !== "Custom" && (
//             <div style={{ padding: "10px" }}>
//               <Form.Check
//                 type="switch"
//                 id="IsScheduler"
//                 label={"Mail Report"}
//                 checked={isScheduler}
//                 onChange={(e) => {
//                   setIsScheduler(e.target.checked);
//                 }}
//               />
//             </div>
//           )}
//           {isScheduler && selectedEmailFrequency !== "Custom" && (
//             <div>
//               <div className="col-md-3 col-sm-4 col-12 pl-2 pr-2">
//                 <label className="mb-3 ">
//                   Mail Time (in hour) <span className="text-danger">*</span>
//                 </label>

//                 <DatePicker
//                   selected={MailTime}
//                   placeholderText="Click to select a date"
//                   className={"form-control"}
//                   onChange={(date) => {
//                     // console.log(date);
//                     setMailTime(date);
//                   }}
//                   filterTime={(time) => {
//                     let currentDate = new Date(endTime);
//                     let selectedDate = new Date(time);
//                     if (selectedEmailFrequency === "Daily") {
//                       return currentDate.getTime() < selectedDate.getTime();
//                     }
//                     return true;
//                   }}
//                   showTimeSelect
//                   showTimeSelectOnly
//                   dateFormat="h:mm aa"
//                   timeIntervals={60}
//                   calendarClassName="rasta-stripes"
//                 />
//               </div>
//               <div className="col-md-6 col-sm-6 col-12 pl-2 pr-2">
//                 <label className="mt-3">
//                   Recipients <span className="text-danger">*</span> :
//                   <span className="ml-2">
//                     {recipient.map((item) => (
//                       <div className="tag-item" key={item}>
//                         {item}
//                         <button
//                           type="button"
//                           className="button cross ml-3"
//                           onClick={() => handleDeleteEmail(item)}
//                         >
//                           &times;
//                         </button>
//                       </div>
//                     ))}
//                   </span>
//                 </label>
//                 <input
//                   className={
//                     "form-control " +
//                     (recipientError !== "" && recipientInput !== ""
//                       ? "error"
//                       : "")
//                   }
//                   value={recipientInput}
//                   placeholder="Type email addresses and press `Enter`"
//                   onKeyDown={(e) => handleKeyDownRecipient(e)}
//                   onChange={(e) => handleChangeRecipientInput(e)}
//                 // onPaste={(e) => handlePasteRecipient()}
//                 />

//                 {recipientError !== "" && recipientInput !== "" && (
//                   <span className="text-danger"> {recipientError}</span>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* <div className="tagSelector"></div> */}
//           <div style={{ paddingLeft: "10px" }}>
//             {submitLoader && loader}
//             <button
//               className="btn btnfrst mt-2"
//               disabled={templateName === "" || submitLoader}
//               onClick={() => SendData()}
//             >
//               {window.location.href.split("/").pop() === "editReportPage"
//                 ? "Update"
//                 : "Submit"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </AuthenticatedTemplate>
//   );
// };

import axios from "axios";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/ReportsPage.css";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import moment from "moment";
// import { Form } from "react-bootstrap";
import { BASE_URL } from "../../base";
import Highlighter from "react-highlight-words";
// import "bootstrap/dist/css/bootstrap.min.css";
export const ReportsPage = () => {
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={50}
    />
  );

  const { state } = useLocation();
  const navigate = useNavigate();
  const [submitLoader, setSubmitLoader] = useState(false);
  const [templateName, setTemplateName] = useState("");

  const [startDate, setStartDate] = useState(
    new Date(moment(new Date()).subtract("1", "hours")),
  );
  const [endDate, setEndDate] = useState(new Date());
  const [mailDateTime, setMailDateTime] = useState();
  const [startTime, setStartTime] = useState(
    new Date(moment().startOf("day").format("YYYY-MM-DD HH:mm")),
  );
  const [endTime, setEndTime] = useState(
    new Date(moment().endOf("day").format("YYYY-MM-DD HH:mm")),
  );
  const [MailTime, setMailTime] = useState();
  const [selectedPlant, setSelectedPlant] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(1);
  const [selectedIntervaltype, setSelectedIntervaltype] = useState("m");
  const [selectedEmailFrequency, setSelectedEmailFrequency] =
    useState("Yesterday");
  const [isScheduler, setIsScheduler] = useState(false);
  const [optionList, setOptionList] = useState({
    PlantName: [],
    Tags: [],
    interval: [],
  });

  const [intervalOptionList, setIntervalOptionList] = useState({});
  const [mailTimeOptionList, setMailTimeOptionList] = useState([]);
  const [emailFrequencyOptions, setEmailFrequencyOptions] = useState([
    { value: "Yesterday", label: "Yesterday" },
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Custom", label: "Custom" },
  ]);
  const [recipient, setRecipient] = useState([]);
  const [recipientInput, setRecipientInput] = useState("");
  const [recipientError, setRecipientError] = useState(null);
  const [schedulerType, setSchedulerType] = useState("");
  const [schedulerValue, setSchedulerValue] = useState("");
  const [schedulerValueOption, setSchedulerValueOption] = useState({
    1: [],
    2: [],
    3: [],
  });
  const schedulerTypeOption = [
    {
      value: 1,
      label: "Current Time",
    },
    {
      value: 2,
      label: "Minutes",
    },
    {
      value: 3,
      label: "Hours",
    },
    {
      value: 4,
      label: "Yesterday",
    },
    {
      value: 5,
      label: "Today",
    },
    {
      value: 6,
      label: "Day",
    },
    {
      value: 7,
      label: "Month",
    },
  ];
  const intervalTypeOptions = [
    { value: "m", label: "minute" },
    { value: "h", label: "hour" },
    { value: "d", label: "day" },
  ];
  // const schedulerValueOption = {
  //   1: [],
  //   2: [],
  //   3: [],
  // };
  useEffect(() => {
    let tOption = { ...optionList };
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

    let tempInt = {
      m: [],
      h: [],
      d: [],
    };
    for (let i = 1; i <= 59; i++) {
      tempInt.m.push({
        value: i,
        label: i,
      });
    }
    for (let i = 1; i <= 23; i++) {
      tempInt.h.push({
        value: i,
        label: i,
      });
    }
    for (let i = 1; i <= 31; i++) {
      tempInt.d.push({
        value: i,
        label: i,
      });
    }

    setIntervalOptionList(tempInt);

    // val01=[10,20,30,40,50]
    // val02=[5,10,15,20,25,30,35,40,45,50,55]
    // val03=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    let tempSchedulerValueOption = { ...schedulerValueOption };
    tempSchedulerValueOption[1] = [];
    for (let i = 1; i <= 5; i++) {
      tempSchedulerValueOption[1].push({
        value: i * 10,
        label: i * 10,
      });
    }
    tempSchedulerValueOption[2] = [];
    for (let i = 1; i <= 11; i++) {
      tempSchedulerValueOption[2].push({
        value: i * 5,
        label: i * 5,
      });
    }
    let tempMailTime = [];
    tempSchedulerValueOption[3] = [];
    for (let i = 0; i <= 23; i++) {
      tempSchedulerValueOption[3].push({
        value: i,
        label: i,
      });
      tempMailTime.push({
        value: i,
        label: i,
      });
    }
    setMailTimeOptionList(tempMailTime);
    setSchedulerValueOption(tempSchedulerValueOption);

    // console.log(schedulerValueOption[1]);
  }, []);
  useEffect(() => {
    getTagList();
  }, [selectedPlant]);
  useEffect(() => {
    if (
      state?.rowdata === undefined &&
      window.location.href.split("/").pop() === "editReportPage"
    ) {
      navigate("/ReportList");
    }
    if ((state?.rowdata || state?.copyData) && state.EditFlag) {
      setTemplateData();
      getTagList();
    }
  }, []);

  const setTemplateData = () => {
    let EditData = state?.rowdata;
    if (state?.copyData) {
      EditData = state?.copyData;
      EditData.ReportTemplateName = EditData.ReportTemplateName + "- Copy";
    }
    console.log(EditData, "eeeeeeee");
    setSelectedPlant(EditData.Plant);
    setTemplateName(EditData.ReportTemplateName);
    let intervalminutes = moment.duration(EditData.Interval).asMinutes();
    if (intervalminutes >= 1440) {
      setSelectedInterval(moment.duration(EditData.Interval).asDays());
      setSelectedIntervaltype("d");
      // console.log(moment.duration(EditData.Interval).asDays());
    } else if (intervalminutes >= 60) {
      setSelectedInterval(moment.duration(EditData.Interval).asHours());
      setSelectedIntervaltype("h");
      // console.log(moment.duration(EditData.Interval).asHours());
    } else {
      setSelectedInterval(moment.duration(EditData.Interval).asMinutes());
      setSelectedIntervaltype("m");
      // console.log(moment.duration(EditData.Interval).asMinutes());
    }
    setIsScheduler(EditData.IsScheduler);
    setSelectedEmailFrequency(EditData.EmailFrequency);
    if (
      EditData.EmailFrequency === "Monthly" ||
      EditData.EmailFrequency === "Weekly"
    ) {
      setStartDate(new Date(moment(EditData.StartDate, "YYYY-MM-DD HH:mm")));
    } else {
      setStartTime(new Date(moment(EditData.StartDate, "YYYY-MM-DD HH:mm")));
      setEndTime(new Date(moment(EditData.EndDate, "YYYY-MM-DD HH:mm")));
    }
    if (EditData.IsScheduler && EditData.EmailFrequency !== "Custom") {
      // console.log("h11111111", EditData.MailTime);
      setMailTime(new Date(moment(EditData.MailTime, "YYYY-MM-DD HH:mm")));
      setRecipient(EditData.Recipients.split("@@@"));
    }
  };

  const getTagList = () => {
    // console.log("hereee", state.copyData);
    let payload = {
      PlantName: selectedPlant,
    };
    if (state?.rowdata) {
      payload.PlantName = state?.rowdata?.Plant;
    }
    if (state?.copyData) {
      payload.PlantName = state?.copyData?.Plant;
    }
    let tOption = { ...optionList };
    if (payload.PlantName !== "") {
      axios
        .post(BASE_URL + "cbm/plant/getPlantAllTags", payload)
        .then((res) => {
          res = res.data.result;
          tOption.Tags = [];
          if (res === "No Records Found") {
            toast.warning("No Tags Found for Plant " + payload.PlantName);
          } else {
            let tempSelectedtags = [];
            if (state?.rowdata) {
              // console.log("here");
              tempSelectedtags = state?.rowdata.Tags.split("@@@");
            }
            if (state?.copyData) {
              console.log("1");
              tempSelectedtags = state?.copyData.Tags.split("@@@");
            }
            let TempT = [];
            res.map((val) => {
              if (state?.rowdata || state?.copyData) {
                if (tempSelectedtags.includes(val["Tag UID"])) {
                  TempT.push({
                    value: val["Tag UID"],
                    label: `${val["Tag UID"]} \n Desc: ${val["Description"]}`,
                  });
                }
              }
              tOption.Tags.push({
                value: val["Tag UID"],
                label: `${val["Tag UID"]} \n Desc: ${val["Description"]}`,
              });
            });
            tOption.Tags.unshift({ value: "", label: "Select..." });
            setSelectedTags(TempT);
            setOptionList(tOption);
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.message);
        });
    }
  };
  const handleChangePlant = (val) => {
    setSelectedPlant(val.value);
  };
  const handleChangeInterval = (val) => {
    setSelectedInterval(val.value);
  };
  const handleChangeEmailFrequency = (val) => {
    setSelectedEmailFrequency(val.value);
    if (val.value === "Yesterday") {
      setStartTime(
        new Date(moment().startOf("day").format("YYYY-MM-DD HH:mm")),
      );
      setEndTime(new Date(moment().endOf("day").format("YYYY-MM-DD HH:mm")));
    }
    if (val.value === "Daily") {
      setEndTime(new Date(moment().format("YYYY-MM-DD HH:mm")));
    }
  };
  const handleChangeSelect = (val) => {
    setSelectedTags(val);
  };

  const handleDeleteEmail = (item) => {
    let tempRecipient = [...recipient];
    tempRecipient = tempRecipient.filter((i) => i !== item);

    setRecipient(tempRecipient);
  };
  const handleKeyDownRecipient = (event) => {
    if (["Enter", "Tab", ","].includes(event.key)) {
      event.preventDefault();

      var value = recipientInput.trim();
      if (!/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(value)) {
        setRecipientError("Invalid Email");
      } else {
        if (recipient.includes(value)) {
          setRecipientError("Already in List");
        } else {
          let trec = [...recipient];
          trec.push(value);
          setRecipient(trec);
          setRecipientInput("");
        }
      }
    }
  };
  const handleChangeRecipientInput = (event) => {
    setRecipientInput(event.target.value);
    setRecipientError("");
  };
  const SendData = () => {
    if (!JSON.parse(localStorage.getItem("login"))) {
      return;
    }
    const { token, email } = JSON.parse(localStorage.getItem("login"));
    if (selectedPlant === "") {
      toast.error("Please Select Plant");
      return;
    }

    if (!isScheduler) {
      if (!moment(startDate).isSameOrBefore(endDate)) {
        toast.error("start date should be less then end date");
        return;
      }
      if (!moment(endDate).isSameOrBefore(mailDateTime)) {
        toast.error("Mail date should be less then end date");
        return;
      }
    }
    if (
      selectedEmailFrequency !== "Custom" &&
      isScheduler &&
      recipient.length === 0
    ) {
      toast.error("please enter recipient");
      return;
    }
    if (selectedTags.length === 0) {
      toast.error("please Select Tags");
      return;
    }
    let postUrl = BASE_URL + "cbm/template/sendReportData";
    console.log({ selectedIntervaltype, selectedInterval });
    const findReportInteval = (selectedIntervaltype, selectedInterval) => {
      switch (selectedIntervaltype) {
        case "m":
          return `00:${selectedInterval}:00`;
        case "h":
          return `${selectedInterval}:00:00`;
        case "d":
          var dayIntoHours = selectedInterval * 24;
          return `${dayIntoHours}:00:00`;
        default:
          break;
      }
    };
    console.log({
      data: findReportInteval(selectedIntervaltype, selectedInterval),
    });
    let payload = {
      userid: email,
      ReportTemplateName: templateName,
      Plant: selectedPlant,
      Tags: selectedTags.map((val) => val.value),
      // Interval: selectedInterval + selectedIntervaltype,
      Interval: findReportInteval(selectedIntervaltype, selectedInterval),
      isScheduler: selectedEmailFrequency === "Custom" ? false : isScheduler,
      EmailFrequency: selectedEmailFrequency,
      StartDate:
        selectedEmailFrequency === "Monthly" ||
          selectedEmailFrequency === "Weekly"
          ? moment(startDate).format("YYYY-MM-DD")
          : selectedEmailFrequency === "Custom"
            ? moment(startDate).format("YYYY-MM-DD HH:mm")
            : moment(startTime).format("YYYY-MM-DD HH:mm"),
      EndDate:
        selectedEmailFrequency === "Monthly" ||
          selectedEmailFrequency === "Weekly"
          ? ""
          : selectedEmailFrequency === "Custom"
            ? moment(endDate).format("YYYY-MM-DD HH:mm")
            : moment(endTime).format("YYYY-MM-DD HH:mm"),
      MailTime:
        isScheduler && selectedEmailFrequency !== "Custom"
          ? moment(MailTime).format("YYYY-MM-DD HH:mm")
          : "",
      Recipients:
        isScheduler && selectedEmailFrequency !== "Custom" ? recipient : [],
    };
    if (state?.rowdata) {
      postUrl = BASE_URL + "cbm/template/editReportData";
      payload.TimeStamp = state.rowdata.Timestamp;
    }

    // console.log(payload, "payyyyy");
    setSubmitLoader(true);
    axios
      .post(postUrl, payload, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res = res.data.result;
        if (state?.rowdata) {
          toast.success("Template Updated Successfully.");
        } else {
          toast.success("Template Added Successfully.");
        }
        setSubmitLoader(false);
        navigate("/ReportList");
      })
      .catch((err) => {
        setSubmitLoader(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "35px",
      height: "35px",
      border: `1px solid ${state.isFocused
        ? "var(--input-onhover-border)"
        : "var(--input-enable-border)"
        }`,
      borderRadius: "8px",
      backgroundColor: state.isDisabled
        ? "var(--input-disable-bg)"
        : "var(--input-enable-bg)",
      fontSize: "13px",
      boxShadow: state.isFocused
        ? "0 0 0 1px var(--input-onhover-border)"
        : "none",
      "&:hover": {
        borderColor: "var(--input-onhover-border)",
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
          ? "var(--select-option-hover)"
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
      color: "var(--search-placeholder)",
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
      <div className="w-full bg-[var(--bg-main-container)]">
        <div className="flex">
          <h2 className="flex text-[18px] font-medium font-poppins text-[var(--title)] ml-1">
            Report Template Configuration
          </h2>
          <button
            className="text-[14px] px-3 py-1 mr-1 rounded-lg border border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--text-color)] hover:bg-[var(--button-hover-bg)] transition ml-auto"
            onClick={() => {
              navigate("/reportList");
            }}
          >
            Back
          </button>
        </div>
        <div className="w-full rounded-2xl border border-[var(--form-border)]  shadow-[var(--card-shadow)] p-2 mt-1">
          <div className="flex items-center justify-end"></div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end">
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                Template Name <span className="text-red-500">*</span>
              </label>
              <input
                name="TemplateName"
                placeholder="Enter Template Name"
                onChange={(e) => setTemplateName(e.target.value)}
                value={templateName}
                disabled={
                  state?.rowdata ||
                  window.location.href.split("/").pop() === "editReportPage"
                }
                style={{ minWidth: "100% " }}
                className="w-full px-2  h-[35px] rounded-lg  text-[13px] bg-[var(--input-enable-bg)] border border-[var(--input-enable-border)] text-[var(--text-color)] focus:outline-none focus:border-[var(--picker-accent)] disabled:bg-[var(--input-disable-bg)] disabled:cursor-not-allowed"
              />
            </div>
 
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                PlantName <span className="text-red-500">*</span>
              </label>
 
              {
                <Select
                  value={
                    selectedPlant !== "" && {
                      value: selectedPlant,
                      label: selectedPlant,
                    }
                  }
                  styles={customStyles}
                  placeholder="Select Plant"
                  name="PlantName"
                  onChange={(e) => handleChangePlant(e)}
                  options={optionList.PlantName}
                  isDisabled={
                    window.location.href.split("/").pop() === "editReportPage"
                  }
                  formatOptionLabel={formatOptionLabel}
                />
              }
              <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
                {selectedPlant !== "" &&
                  !!!window.location.href.split("/").pop() ===
                    "editReportPage" && (
                    <button
                      onClick={() => setSelectedPlant("")}
                      className="p-2 btn btnfrst"
                    >
                      X
                    </button>
                  )}
              </div>
            </div>
 
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                Tags <span className="text-red-500">*</span>
              </label>
 
              <Select
                isMulti
                value={selectedTags}
                placeholder="Select Tags"
                name="Tags"
                onChange={handleChangeSelect}
                options={optionList.Tags}
                className="w-full"
                styles={customStyles}
                formatOptionLabel={formatOptionLabel}
              />
 
              <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
                {selectedTags !== [] &&
                  !!!window.location.href.split("/").pop() ===
                    "editReportPage" && (
                    <button
                      onClick={() => setSelectedTags([])}
                      className="p-2 btn btnfrst"
                    >
                      X
                    </button>
                  )}
              </div>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                {"Interval "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <Select
                  value={
                    selectedIntervaltype !== "" &&
                    intervalTypeOptions.filter(
                      (val) => val.value === selectedIntervaltype,
                    )
                  }
                  placeholder="Select Interval Type"
                  name="Interval"
                  onChange={(e) => setSelectedIntervaltype(e.value)}
                  options={intervalTypeOptions}
                  // isDisabled={
                  //   window.location.href.split("/").pop() === "editReportPage"
                  // }
                  className="basic-multi-select"
                  styles={customStyles}
                />
                <Select
                  value={
                    selectedInterval !== "" && {
                      value: selectedInterval,
                      label: selectedInterval,
                    }
                  }
                  placeholder="Select Interval"
                  name="Interval"
                  onChange={(e) => handleChangeInterval(e)}
                  options={intervalOptionList[selectedIntervaltype]}
                  // isDisabled={
                  //   window.location.href.split("/").pop() === "editReportPage"
                  // }
                  className="basic-multi-select"
                  styles={customStyles}
                />
              </div>
            </div>
          </div>
 
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end">
            {" "}
            <>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                  Period <span className="text-red-500">*</span>
                </label>
 
                <Select
                  value={
                    selectedEmailFrequency !== "" && {
                      value: selectedEmailFrequency,
                      label: selectedEmailFrequency,
                    }
                  }
                  placeholder="Select Email Frequency"
                  name="Interval"
                  onChange={(e) => handleChangeEmailFrequency(e)}
                  options={emailFrequencyOptions}
                  className="basic-multi-select"
                  styles={customStyles}
                />
              </div>
              {(selectedEmailFrequency === "Monthly" ||
                selectedEmailFrequency === "Weekly") && (
                <>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-[var(--text-color)] placeholder-[var(--search-placeholder)]">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <DatePicker
                      selected={startDate}
                      className="w-full px-3 py-[6px] text-[13px]  rounded-lg outline-none bg-[var(--report-field-bg-color)] border border-[#cccaca] focus:border-[#FD9F35] focus:ring-2 focus:ring-[#FD9F3530] transition-all"
                      wrapperClassName="w-full"
                      placeholderText="Click to select a date"
                      onChange={(date) => {
                        setStartDate(date);
                      }}
                      // showTimeSelect
                      dateFormat="d/MM/yyyy"
                      timeIntervals={1}
                      calendarClassName="rasta-stripes"
                    />
                  </div>
                </>
              )}
              {selectedEmailFrequency === "Custom" && (
                <>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={startDate}
                        className="w-full px-3
                         py-[6px] text-[13px] placeholder-[var(--search-placeholder)] border border-[#cccaca] rounded-lg outline-none bg-[var(--report-field-bg-color)] focus:border-[#FD9F35] focus:ring-2 focus:ring-[#FD9F3530] transition-all"
                        wrapperClassName="w-full"
                        placeholderText="Click to select a date"
                        onChange={(date) => {
                          setStartDate(date);
                        }}
                        showTimeSelect
                        dateFormat="d/MM/yyyy h:mm aa"
                        timeIntervals={1}
                        calendarClassName="rasta-stripes"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={endDate}
                        placeholderText="Click to select a date"
                        className="w-full px-3 py-[6px]
                       
                        text-[13px] border  border-[#cccaca] rounded-lg outline-none bg-[var(--report-field-bg-color)] focus:border-[#FD9F35] focus:ring-2 focus:ring-[#FD9F3530] transition-all"
                        wrapperClassName="w-full"
                        onChange={(date) => {
                          setEndDate(date);
                        }}
                        minDate={startDate}
                        filterTime={(time) => {
                          let currentDate = new Date(startDate);
                          let selectedDate = new Date(time);
                          return currentDate.getTime() < selectedDate.getTime();
                        }}
                        showTimeSelect
                        dateFormat="d/MM/yyyy h:mm aa"
                        timeIntervals={1}
                        calendarClassName="rasta-stripes"
                      />
                    </div>
                  </div>
                </>
              )}
              {(selectedEmailFrequency === "Yesterday" ||
                selectedEmailFrequency === "Daily") && (
                <>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                      Start Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={endTime}
                        placeholderText="Click to select a date"
                        className="w-full h-[35px] px-2 text-[13px] border border-[var(--input-enable-border)] rounded-lg outline-none bg-[var(--input-enable-bg)] text-[var(--text-color)] focus:border-[var(--picker-accent)] transition-all"
                        wrapperClassName="w-full"
                        onChange={(date) => {
                          setEndTime(date);
                        }}
                        filterTime={(time) => {
                          let currentDate = new Date(startTime);
                          let selectedDate = new Date(time);
                          return currentDate.getTime() < selectedDate.getTime();
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        dateFormat="h:mm aa"
                        timeIntervals={1}
                        calendarClassName="rasta-stripes"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-[var(--text-color)]">
                      End Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={startTime}
                        placeholderText="Click to select a date"
                        className="w-full h-[35px] px-2 text-[13px] border border-[var(--input-enable-border)] rounded-lg outline-none bg-[var(--input-enable-bg)] text-[var(--text-color)] focus:border-[var(--picker-accent)] transition-all"
                        wrapperClassName="w-full"
                        onChange={(date) => {
                          setStartTime(date);
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        dateFormat="h:mm aa"
                        timeIntervals={1}
                        calendarClassName="rasta-stripes"
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
 
          {selectedEmailFrequency !== "Custom" && (
            <div className="mt-6 flex items-center gap-3">
              <input
                type="checkbox"
                checked={isScheduler}
                onChange={(e) => setIsScheduler(e.target.checked)}
                className="h-4 w-4 accent-[var(--card-border)]"
              />
              <span className="text-sm text-[var(--text-color)]">
                Mail Report
              </span>
            </div>
          )}
          {isScheduler && selectedEmailFrequency !== "Custom" && (
            <div>
              <div className="w-full">
                <label className="mb-1 mt-3 text-sm ">
                  Mail Time (in hour) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DatePicker
                    selected={MailTime}
                    placeholderText="Click to select a date"
                    onChange={(date) => {
                      setMailTime(date);
                    }}
                    filterTime={(time) => {
                      let currentDate = new Date(endTime);
                      let selectedDate = new Date(time);
                      if (selectedEmailFrequency === "Daily") {
                        return currentDate.getTime() < selectedDate.getTime();
                      }
                      return true;
                    }}
                    showTimeSelect
                    showTimeSelectOnly
                    dateFormat="h:mm aa"
                    timeIntervals={60}
                    calendarClassName="rasta-stripes"
                    wrapperClassName="w-full"
                    className="w-full h-[35px] px-2 text-[13px] rounded-lg outline-none bg-[var(--input-enable-bg)] border border-[var(--input-enable-border)] text-[var(--text-color)] focus:border-[var(--input-onhover-border)] focus:ring-1 focus:ring-[var(--input-onhover-border)] transition-all"
                  />
                </div>
              </div>
              <div className="w-full lg:col-span-2">
                <label className="mb-1 mt-3 text-sm ">
                  Recipients <span className="text-red-500">*</span> :
                </label>
                <div className="ml-2 flex flex-wrap  text-[var-tex]">
                  {recipient.map((item) => (
                    <div
                      className="flex items-center gap-2 px-2 py-1 rounded-full bg-[var(--submit-button-bg)] text-[#111111] text-[var(--status-active-text)] text-sm  m-2"
                      key={item}
                    >
                      {item}
                      <button
                        type="button"
                        className="button cross ml-1"
                        onClick={(e) => {
                          e.stopPropagation(); // ✅ Prevent parent click
                          handleDeleteEmail(item);
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
 
                <input
                  className={`
  w-full
  rounded-lg
  px-3 h-[35px] py-2
  border
  ${
    recipientError !== "" && recipientInput !== ""
      ? "border-red-500 focus:ring-red-500"
      : "border-[var(--form-border)] focus:ring-[var(--card-border)]"
  }
  !bg-[var(--report-field-bg-color)]
  text-[var(--text-color)]
  placeholder-[var(--search-placeholder)]
  focus:outline-none
  focus:ring-1
  transition
`}
                  value={recipientInput}
                  placeholder="Type email addresses and press `Enter`"
                  onKeyDown={(e) => handleKeyDownRecipient(e)}
                  onChange={(e) => handleChangeRecipientInput(e)}
                  // onPaste={(e) => handlePasteRecipient()}
                />
 
                {recipientError !== "" && recipientInput !== "" && (
                  <span className="text-red-500"> {recipientError}</span>
                )}
              </div>
            </div>
          )}
 
          {/* <div className="tagSelector"></div> */}
          <div className="mt-2 mb-2 flex justify-center">
            {submitLoader && loader}
            <button
              className="h-[32px] w-[75px] text-[14px] shrink-0 cursor-pointer px-2 rounded-md bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] text-sm font-medium"
              disabled={templateName === "" || submitLoader}
              onClick={() => SendData()}
            >
              {window.location.href.split("/").pop() === "editReportPage"
                ? "Update"
                : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </AuthenticatedTemplate>
  );
 
};
