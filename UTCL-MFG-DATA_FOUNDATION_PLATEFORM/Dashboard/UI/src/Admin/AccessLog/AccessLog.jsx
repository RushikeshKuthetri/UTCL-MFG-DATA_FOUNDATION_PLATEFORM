// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import "./AccessLog.scss";
// import useToken from "../UseToken/useToken";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import { config } from "../config";
// import { AuthenticatedTemplate } from "@azure/msal-react";
// import Navbar from "../Navbar/navbar";
// import moment from "moment";
// import Loader from "react-js-loader";
// import { HiSortAscending, HiSortDescending } from "react-icons/hi";
// import { end, start } from "@popperjs/core";
// import { toast } from "react-toastify";
// import { accessLogApi } from "../../utils/accessLogApi";
// function AccessLog() {
//   const today = new Date();
//   const previousDate = new Date(today);
//   previousDate.setDate(today.getDate() - 1);

//   const [plants, setPlants] = useState([]);
//   const [module, setModule] = useState([]);
//   const [data, setData] = useState([]);
//   const [startDate, setStartDate] = useState(previousDate);
//   const [endDate, setEndDate] = useState(new Date());
//   const [maxEndDate, setMaxEndDate] = useState(new Date())
//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(50);
//   const [submitLoader, setSubmitLoader] = useState(false);
//   const [totalPage, setTotalPage] = useState(1);
//   const { token, setToken } = useToken();
//   const [formData, setFormData] = useState({
//     module: "",
//     plant: "",
//   });
//   const [plantsList, setPlantsList] = useState([])
//   const header = [
//     "User ID",
//     "Datetime",
//     // "ip",
//     "Module",
//     // "options",
//     "Plant",
//     "Section",
//     "URL",
//   ];
//   const DataKeys = [
//     "UserID",
//     "datetime",
//     // "ip",
//     "module",
//     // "options",
//     "plant",
//     "plant_or_section",
//     "url",
//   ];

//   useEffect(() => {
//     accessLogDashboard();
//   }, []);
//   useEffect(() => {
//     getAllModuleList();
//     getAllPlantList();
//     // console.log(data)
//   }, []);

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
//     accessLogApi(payload, token.token)
//   };

//   const loader = (
//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       formInitialValues
//       color={"#FFFFFF"}
//       size={50}
//     />
//   );

//   const getAllModuleList = () => {
//     const payload = {
//       adminid: token.UserID,
//     };
//     try {
//       axios
//         .post(process.env.REACT_APP_BASE_URL + "admin/moduleDetails", payload, {
//           headers: { Authorization: `Bearer ${token.token}` },
//         })
//         .then((res) => {
//           // console.log(res.data.data);
//           setModule(res.data.data);

//           // setData(res.data.data)
//         })
//         .catch((err) => {
//           toast.error(err?.message);
//         });
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.message);
//     }
//   };

//   const getAllPlantList = () => {
//     const payload = {
//       adminid: token.UserID,
//     };
//     try {
//       axios
//         .post(process.env.REACT_APP_BASE_URL + "admin/plantDetails", payload, {
//           headers: { Authorization: `Bearer ${token.token}` },
//         })
//         .then((res) => {

//           setPlants(res.data.data);
//         })
//         .catch((err) => {
//           toast.error(err?.message);
//         });
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.message);
//     }
//   };

//   const handleModule = (e, id) => {
//     // console.log(id);
//     const { name } = e.target;
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [name]: id,
//       };
//     });
//   };

//   const handlePlant = (e, id) => {
//     const { name } = e.target;
//     // console.log(id)
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [name]: id,
//       };
//     });
//   };

//   const isSubmitDisabled = formData.module === "" || formData.plant === "";

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target["plant"].value);

//     // console.log(formData);
//     let payload = {
//       adminid: token.UserID,
//       startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
//       endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
//       modules: (formData.module === 'All') ? [] : [formData.module],
//       plants: (formData.plant === 'All') ? [] : [formData.plant],
//       page: 1,
//       offset: 50,
//     };
//     setItemsPerPage(50)
//     setCurrentPage(1)
//     // console.log(payload);

//     latestFilterData(payload);
//   };

//   // const latestFilterData=async(payload)=>{
//   //   setSubmitLoader(true)
//   //   try {
//   //     const {data}= await axios
//   //         .post(process.env.REACT_APP_BASE_URL + "adminSuper/logfilter", payload, {
//   //           headers: { Authorization: `Bearer ${token.token}` },
//   //         });
//   //         console.log(data)
//   //         setTotalPage(data.data.total);
//   //       setData(data.data.data);
//   //       setSubmitLoader(false);

//   //   } catch (err) {
//   //     setSubmitLoader(false);
//   //       toast.error(err?.message);
//   //   }
//   // }

//   const latestFilterData = (payload) => {
//     setSubmitLoader(true);
//     try {
//       axios
//         .post(process.env.REACT_APP_BASE_URL + "admin/logfilter", payload, {
//           headers: { Authorization: `Bearer ${token.token}` },
//         })
//         .then((res) => {
//           setTotalPage(res.data.total);
//           setData(res.data.data);
//           setSubmitLoader(false);
//         })
//         .catch((err) => {
//           setSubmitLoader(false);
//           toast.error(err?.message);
//         });
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.message);
//     }
//   };

//   const downlaodData = () => {
//     // console.log("click");
//     let payload = {
//       adminid: token.UserID,
//       startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
//       endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
//       modules: (formData.module === 'All') ? [] : [formData.module],
//       plants: (formData.plant === 'All') ? [] : [formData.plant],
//     };

//     axios
//       .post(process.env.REACT_APP_BASE_URL + "admin/logFilterExport", payload, {
//         headers: { Authorization: `Bearer ${token.token}` },
//       })
//       .then((res) => {
//         // console.log(res.data.link);
//         window.open(res.data.link);
//       });
//   };

//   let handleColor = (time) => {
//     return time.getHours() > 12 ? "text-success" : "text-error";
//   };

//   const sortData = (index) => {
//     // console.log("sort click", DataKeys[index]);
//     let sortedData = [...data];
//     // console.log(sortedData);
//     sortedData.sort((a, b) => {
//       if (sortOrder === "asc") {
//         // console.log("if");
//         return a[DataKeys[index]] < b[DataKeys[index]] ? -1 : 1;
//       } else {
//         // console.log("else");
//         return a[DataKeys[index]] > b[DataKeys[index]] ? -1 : 1;
//       }
//     });
//     // setFilteredData(sortedData);
//     setData(sortedData);
//     // setCurrentPage(1)
//     setSortColumn(index);
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const buttonPrevious = (ele) => {
//     // console.log(ele);
//     setCurrentPage(ele - 1);
//     let payload = {
//       adminid: token.UserID,
//       startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
//       endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
//       modules: (formData.module === 'All') ? [] : [formData.module],
//       plants: (formData.plant === 'All') ? [] : [formData.plant],
//       page: currentPage - 1,
//       offset: itemsPerPage,
//     };
//     setSubmitLoader(true);
//     latestFilterData(payload);
//   };
//   const buttonNext = (ele) => {
//     setCurrentPage(ele + 1);
//     let payload = {
//       adminid: token.UserID,
//       startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
//       endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
//       modules: (formData.module === 'All') ? [] : [formData.module],
//       plants: (formData.plant === 'All') ? [] : [formData.plant],
//       page: currentPage + 1,
//       offset: itemsPerPage,
//     };
//     setSubmitLoader(true);
//     latestFilterData(payload);
//   };

//   const handleItemsPerPageChange = (value) => {
//     // console.log(currentPage)
//     setItemsPerPage(value);
//     setCurrentPage(1);

//     let payload = {
//       adminid: token.UserID,
//       startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
//       endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
//       modules: (formData.module === 'All') ? [] : [formData.module],
//       plants: (formData.plant === 'All') ? [] : [formData.plant],
//       page: 1,
//       offset: value,
//     };
//     setSubmitLoader(true);
//     latestFilterData(payload);

//     // console.log(payload);
//   };

//   // const totalPages = Math.ceil(data.length / itemsPerPage);
//   const totalPages = totalPage;
//   // console.log(data.length);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   // const currentData = data.slice(startIndex, endIndex);
//   // const currentData = data;
//   // console.log(data);
//   // console.log(currentData);

//   const paginationOptions = [25, 50, 100];
//   return (
//     <>
//       <Navbar />
//       <div className="admin-top">
//         {/* <div className="text-right">
//           <button className="btn btn btnfrst mt-3 mx-2">
//             Reset
//           </button>
//           <button
//             className="btn btn btnfrst mt-3 mx-2"
//             onClick={() => downlaodData()}
//           >
//             Export
//           </button>
//         </div> */}
//       </div>
//       <div className="container-fluid dashboard">
//         <div className="card mt-3">
//           <div className="row align-items-center gap">
//             <form
//               className="d-flex flex-wrap"
//               onSubmit={(e) => handleSubmit(e)}
//             >
//               <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 px-2">
//                 <div className="d-flex flex-column h-100">
//                   <label htmlFor="" className="mb-2">
//                     Module
//                   </label>
//                   <select
//                     className="form-select"
//                     name="module"
//                     defaultValue="select module"
//                     onChange={(e) => handleModule(e, e.target.value)}
//                   >
//                     <option value="select module" disabled={true}>Select Module</option>
//                     {module && module !== undefined && module.length !== 0 ? (
//                       <>
//                         <option value="All">All</option>
//                         {module.map((data, index) => {
//                           return (
//                             <option key={index} value={data.Module}>
//                               {data.Module}
//                             </option>
//                           );
//                         })}
//                       </>
//                     ) : (
//                       <option value="No Module Found" disabled={true}>No Module Found</option>
//                     )}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 px-2">
//                 <div className="d-flex flex-column h-100">
//                   <label htmlFor="" className="mb-2">
//                     Plants
//                   </label>
//                   <select
//                     className="form-select"
//                     name="plant"
//                     defaultValue="select plant"
//                     onChange={(e) => handlePlant(e, e.target.value)}
//                   >
//                     <option value="select plant" disabled={true}>Select Plant</option>

//                     {plants && plants !== undefined && plants.length !== 0 ? (
//                       <>
//                         <option value="All">All</option>

//                         {plants.map((data, index) => {
//                           return (
//                             <option key={index} value={data.Plant}>
//                               {data.Plant}
//                             </option>
//                           );
//                         })}
//                       </>
//                     ) : (
//                       <option value="No Plants Found" disabled={true}>No Plants Found</option>
//                     )}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 px-2">
//                 <div className="d-flex flex-column h-100">
//                   <label htmlFor="" className="mb-2">
//                     Start Date
//                   </label>

//                   <DatePicker
//                     showTimeSelect
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     maxDate={maxEndDate}
//                     timeClassName={handleColor}
//                     dateFormat="d/MM/yyyy h:mm aa"
//                   />
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 px-2">
//                 <div className="d-flex flex-column h-100">
//                   <label htmlFor="" className="mb-2">
//                     End Date
//                   </label>
//                   <DatePicker
//                     showTimeSelect
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     minDate={startDate}
//                     maxDate={maxEndDate}
//                     timeClassName={handleColor}
//                     dateFormat="d/MM/yyyy h:mm aa"
//                   />
//                 </div>
//               </div>

//               <div className="col-xl-1 col-lg-1 col-md-3 col-sm-12 col-12 px-2 mt-md-2">
//                 <button
//                   className="btn btn-warning text-dark"
//                   style={{
//                     backgroundColor: "#fff500",
//                     border: "none",
//                     marginTop: "10px",
//                     height: "40px",
//                   }}
//                   type="submit"
//                   disabled={isSubmitDisabled}
//                 >
//                   Submit
//                 </button>
//               </div>
//               {data.length !== 0 ? (
//                 <div className="col-xl-1 col-lg-1 col-md-3 col-sm-12 col-12 px-2 mt-md-2">
//                   <button
//                     className="btn btn-warning text-dark"
//                     style={{
//                       backgroundColor: "#fff500",
//                       border: "none",
//                       marginTop: "10px",
//                       height: "40px",
//                     }}
//                     type="submit"
//                     onClick={() => downlaodData()}
//                   >
//                     Export
//                   </button>
//                 </div>
//               ) : (
//                 ""
//               )}
//             </form>
//           </div>
//         </div>

//         {data?.length === 0 ? (
//           <div className="no-data">
//             <p className="text-center">No Record Found</p>
//           </div>
//         ) : (
//           <>
//             {submitLoader && (
//               <div
//                 className="Loader-Container loader-show"
//               // style={{ position: "fixed", left: "48%", top: "50%" }}
//               >
//                 <Loader
//                   type="spinner-circle"
//                   bgColor={"#000000"}
//                   title={"bubble-scale"}
//                   formInitialValues
//                   color={"#FFFFFF"}
//                   size={100}
//                 />
//               </div>
//             )}
//             <>
//               {!submitLoader && (
//                 <div className="log-Parent">
//                   <div className="log-container p-2">
//                     <div
//                       className="row"
//                       style={{ maxHeight: "82vh", overflow: "scroll" }}
//                     >
//                       <div className="col-md-12">
//                         {/* {console.log(submitLoader)} */}

//                         {/* {console.log(submitLoader)} */}
//                         {data.length !== 0 ? (
//                           <table className="table table-hover">
//                             <thead className="table-header">
//                               <tr
//                                 style={{
//                                   color: "white",
//                                   backgroundColor: "black",
//                                 }}
//                               >
//                                 {header.map((head, index) => (
//                                   <th
//                                     style={{
//                                       width: "20%",
//                                       textAlign: "center",
//                                     }}
//                                     key={index}
//                                     onClick={() => sortData(index)}
//                                   >
//                                     {head}{" "}
//                                     {sortColumn === index &&
//                                       (sortOrder === "asc" ? (
//                                         <HiSortAscending />
//                                       ) : (
//                                         <HiSortDescending />
//                                       ))}{" "}
//                                   </th>
//                                 ))}
//                               </tr>
//                             </thead>

//                             <tbody>
//                               {data.map((item, index) => (
//                                 <tr key={index}>
//                                   <td>{item.UserID}</td>
//                                   <td>
//                                     {moment
//                                       .utc(item.datetime)
//                                       .format("YYYY-MM-DD HH:mm")
//                                       .toString()}
//                                   </td>
//                                   {/* <td style={{textAlign:"center"}}>{item.ip==='Ip not found' ? '-': item.ip}</td> */}
//                                   <td>{item.module}</td>
//                                   {/* <td>{item.options}</td> */}
//                                   <td>{item.plant}</td>
//                                   <td>
//                                     {item.plant_or_section.length <= 0
//                                       ? "-"
//                                       : item.plant_or_section}
//                                   </td>
//                                   <td>{item.url}</td>
//                                 </tr
//                               ))}
//                             </tbody>
//                           </table>
//                         ) : (
//                           <p
//                             className="text-center"
//                             style={{ marginTop: "82px", fontSize: "50px" }}
//                           >
//                             No Record Found
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pagination-div">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="pagination-dropdown-block">
//                           <select
//                             value={itemsPerPage}
//                             className="form-select pagination-select"
//                             onChange={(e) =>
//                               handleItemsPerPageChange(Number(e.target.value))
//                             }
//                           >
//                             {paginationOptions.map((option) => (
//                               <option key={option} value={option}>
//                                 {option}
//                               </option>
//                             ))}
//                           </select>
//                           <p className="records-page">records per page</p>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="paginatin-button">
//                           <button
//                             className="btn btn-primary me-2"
//                             // onClick={() => setCurrentPage(currentPage - 1)}
//                             onClick={() => {
//                               buttonPrevious(currentPage);
//                             }}
//                             disabled={currentPage === 1}
//                           >
//                             Previous
//                           </button>
//                           <span>
//                             Page {currentPage} of {totalPages}
//                           </span>
//                           <button
//                             className="btn btn-primary ms-2"
//                             // onClick={() => setCurrentPage(currentPage + 1)}
//                             onClick={() => {
//                               buttonNext(currentPage);
//                             }}
//                             disabled={currentPage === totalPages}
//                           >
//                             Next
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default AccessLog;




import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./AccessLog.scss";
import useToken from "../UseToken/useToken";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { config } from "../config";
import { AuthenticatedTemplate } from "@azure/msal-react";
import Navbar from "../Navbar/navbar";
import moment from "moment";
import Loader from "react-js-loader";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { end, start } from "@popperjs/core";
import { toast } from "react-toastify";
import { accessLogApi } from "../../utils/accessLogApi";
function AccessLog() {
  const today = new Date();
  const previousDate = new Date(today);
  previousDate.setDate(today.getDate() - 1);

  const [plants, setPlants] = useState([]);
  const [module, setModule] = useState([]);
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(previousDate);
  const [endDate, setEndDate] = useState(new Date());
  const [maxEndDate, setMaxEndDate] = useState(new Date())
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const { token, setToken } = useToken();
  const [formData, setFormData] = useState({
    module: "",
    plant: "",
  });
  const [plantsList, setPlantsList] = useState([])
  const header = [
    "User ID",
    "Datetime",
    // "ip",
    "Module",
    // "options",
    "Plant",
    "Section",
    "URL",
  ];
  const DataKeys = [
    "UserID",
    "datetime",
    // "ip",
    "module",
    // "options",
    "plant",
    "plant_or_section",
    "url",
  ];

  useEffect(() => {
    accessLogDashboard();
  }, []);
  useEffect(() => {
    getAllModuleList();
    getAllPlantList();
    // console.log(data)
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
  };

  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      formInitialValues
      color={"#FFFFFF"}
      size={50}
    />
  );

  const getAllModuleList = () => {
    const payload = {
      adminid: token.UserID,
    };
    try {
      axios
        .post(process.env.REACT_APP_BASE_URL + "admin/moduleDetails", payload, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // console.log(res.data.data);
          setModule(res.data.data);

          // setData(res.data.data)
        })
        .catch((err) => {
          toast.error(err?.message);
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const getAllPlantList = () => {
    const payload = {
      adminid: token.UserID,
    };
    try {
      axios
        .post(process.env.REACT_APP_BASE_URL + "admin/plantDetails", payload, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {

          setPlants(res.data.data);
        })
        .catch((err) => {
          toast.error(err?.message);
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handleModule = (e, id) => {
    // console.log(id);
    const { name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: id,
      };
    });
  };

  const handlePlant = (e, id) => {
    const { name } = e.target;
    // console.log(id)
    setFormData((prev) => {
      return {
        ...prev,
        [name]: id,
      };
    });
  };

  const isSubmitDisabled = formData.module === "" || formData.plant === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target["plant"].value);

    // console.log(formData);
    let payload = {
      adminid: token.UserID,
      startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
      modules: (formData.module === 'All') ? [] : [formData.module],
      plants: (formData.plant === 'All') ? [] : [formData.plant],
      page: 1,
      offset: 50,
    };
    setItemsPerPage(50)
    setCurrentPage(1)
    // console.log(payload);

    latestFilterData(payload);
  };

  // const latestFilterData=async(payload)=>{
  //   setSubmitLoader(true)
  //   try {
  //     const {data}= await axios
  //         .post(process.env.REACT_APP_BASE_URL + "adminSuper/logfilter", payload, {
  //           headers: { Authorization: `Bearer ${token.token}` },
  //         });
  //         console.log(data)
  //         setTotalPage(data.data.total);
  //       setData(data.data.data);
  //       setSubmitLoader(false);

  //   } catch (err) {
  //     setSubmitLoader(false);
  //       toast.error(err?.message);
  //   }
  // }

  const latestFilterData = (payload) => {
    setSubmitLoader(true);
    try {
      axios
        .post(process.env.REACT_APP_BASE_URL + "admin/logfilter", payload, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          setTotalPage(res.data.total);
          setData(res.data.data);
          setSubmitLoader(false);
        })
        .catch((err) => {
          setSubmitLoader(false);
          toast.error(err?.message);
        });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const downlaodData = () => {
    // console.log("click");
    let payload = {
      adminid: token.UserID,
      startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
      modules: (formData.module === 'All') ? [] : [formData.module],
      plants: (formData.plant === 'All') ? [] : [formData.plant],
    };

    axios
      .post(process.env.REACT_APP_BASE_URL + "admin/logFilterExport", payload, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        // console.log(res.data.link);
        window.open(res.data.link);
      });
  };

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const sortData = (index) => {
    // console.log("sort click", DataKeys[index]);
    let sortedData = [...data];
    // console.log(sortedData);
    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        // console.log("if");
        return a[DataKeys[index]] < b[DataKeys[index]] ? -1 : 1;
      } else {
        // console.log("else");
        return a[DataKeys[index]] > b[DataKeys[index]] ? -1 : 1;
      }
    });
    // setFilteredData(sortedData);
    setData(sortedData);
    // setCurrentPage(1)
    setSortColumn(index);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const buttonPrevious = (ele) => {
    // console.log(ele);
    setCurrentPage(ele - 1);
    let payload = {
      adminid: token.UserID,
      startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
      modules: (formData.module === 'All') ? [] : [formData.module],
      plants: (formData.plant === 'All') ? [] : [formData.plant],
      page: currentPage - 1,
      offset: itemsPerPage,
    };
    setSubmitLoader(true);
    latestFilterData(payload);
  };
  const buttonNext = (ele) => {
    setCurrentPage(ele + 1);
    let payload = {
      adminid: token.UserID,
      startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
      modules: (formData.module === 'All') ? [] : [formData.module],
      plants: (formData.plant === 'All') ? [] : [formData.plant],
      page: currentPage + 1,
      offset: itemsPerPage,
    };
    setSubmitLoader(true);
    latestFilterData(payload);
  };

  const handleItemsPerPageChange = (value) => {
    // console.log(currentPage)
    setItemsPerPage(value);
    setCurrentPage(1);

    let payload = {
      adminid: token.UserID,
      startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
      modules: (formData.module === 'All') ? [] : [formData.module],
      plants: (formData.plant === 'All') ? [] : [formData.plant],
      page: 1,
      offset: value,
    };
    setSubmitLoader(true);
    latestFilterData(payload);
  };

  const totalPages = totalPage;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const paginationOptions = [25, 50, 100];
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-1 -ml-0.5">
        <span>Access Logs</span>
      </div>
      <div className="w-full border border-[var(--form-border)] rounded-xl  px-2">
        {/* <div className="card mt-3"> */}
        <div className="w-full rounded-xl   py-2 mt-1">
          <form
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-end">
              <div className="flex flex-col">
                <label className="block text-sm font-medium  mb-1 text-[var(--text-color)]">
                  Module    <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  // className="form-select"
                  name="module"
                  defaultValue="select module"
                  onChange={(e) => handleModule(e, e.target.value)}
                  className="
    w-full px-2 pr-7 h-[32px] text-[13px]
    rounded-lg border
    bg-[var(--input-enable-bg)]
    text-[var(--select-input-value)]
    border-[var(--input-enable-border)]
    focus:outline-none focus:ring-1 focus:ring-[#888888]
    focus:border-[#888888]
    hover:border-[var(--input-enable-border)]
    cursor-pointer
    disabled:opacity-60 disabled:cursor-not-allowed
  " >
                  <option value="select module" disabled={true}>Select Module</option>
                  {module && module !== undefined && module.length !== 0 ? (
                    <>
                      <option value="All">All</option>
                      {module.map((data, index) => {
                        return (
                          <option key={index} value={data.Module}>
                            {data.Module}
                          </option>
                        );
                      })}
                    </>
                  ) : (
                    <option value="No Module Found" disabled={true}>No Module Found</option>
                  )}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-medium  mb-1 text-[var(--text-color)]">
                  Plants    <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  className="
    w-full px-2 pr-7 h-[32px] text-[13px]
    rounded-lg border
    bg-[var(--input-enable-bg)]
    text-[var(--select-input-value)]
    border-[var(--input-enable-border)]
    focus:outline-none focus:ring-1 focus:ring-[#888888]
    focus:border-[#888888]
    hover:border-[var(--input-enable-border)]
    cursor-pointer
    disabled:opacity-60 disabled:cursor-not-allowed
  "
                  name="plant"
                  defaultValue="select plant"
                  onChange={(e) => handlePlant(e, e.target.value)}
                >
                  <option value="select plant" disabled={true}>Select Plant</option>

                  {plants && plants !== undefined && plants.length !== 0 ? (
                    <>
                      <option value="All">All</option>

                      {plants.map((data, index) => {
                        return (
                          <option key={index} value={data.Plant}>
                            {data.Plant}
                          </option>
                        );
                      })}
                    </>
                  ) : (
                    <option value="No Plants Found" disabled={true}>No Plants Found</option>
                  )}
                </select>
              </div>
              <div className="flex flex-col ">
                <label className="block text-sm font-medium  mb-1 text-[var(--text-color)]">
                  Start Date
                </label>

                <div className="relative w-full">
                  <DatePicker
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    maxDate={maxEndDate}
                    timeClassName={handleColor}
                    dateFormat="d/MM/yyyy h:mm aa"
                    className="
w-full px-2 pr-7  leading-[30px] text-[13px] h-[10px]
rounded-lg border box-border
bg-[var(--input-enable-bg)]
text-[var(--select-input-value)]
border-[var(--input-enable-border)]
focus:outline-none focus:ring-1 focus:ring-[#888888]
focus:border-[#888888]
"
                    calendarClassName="custom-calendar"
                    wrapperClassName="w-full"
                    popperPlacement="bottom-start"
                    popperClassName="z-[9999]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium  mb-1 text-[var(--text-color)]">
                  End Date
                </label>
                <div className="relative w-full">
                  <DatePicker
                    showTimeSelect
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    minDate={startDate}
                    maxDate={maxEndDate}
                    timeClassName={handleColor}
                    dateFormat="d/MM/yyyy h:mm aa"
                    className="
      w-full px-2 h-[32px] text-[13px]
      rounded-lg border
      bg-[var(--input-enable-bg)]
      text-[var(--select-input-value)]
      border-[var(--input-enable-border)]
      focus:outline-none focus:ring-1 focus:ring-[#888888]
      focus:border-[#888888]
    "
                    calendarClassName="custom-calendar"
                    wrapperClassName="w-full"
                    popperPlacement="auto"
                    popperClassName="z-[9999]"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className="px-4 py-1 rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed active:scale-95"
                >
                  Submit
                </button>
              </div>
            </div>

          </form>
        </div>
        {/* </div> */}

        {data?.length === 0 ? (
          <div className="no-data">
            <p className="m-3 flex flex-col items-center justify-center py-3 px-6 text-center rounded-xl transition-all duration-300 animate-fadeIn">

              <div class="text-3xl mb-3 zoom-animation">🔍</div>

              {/* <!-- Title --> */}
              <h2 class="text-lg font-semibold text-[var(--leftdrawer-text)] mb-2">
                No Data Found
              </h2>

              {/* <!-- Description --> */}
              <p class="text-sm text-[var(--card-subtle)] mb-1">
                Try changing the filters or refresh the data
              </p>

            </p>
          </div>
        ) : (
          <>
            {submitLoader && (
              <div
              // className="Loader-Container loader-show"
              // style={{ position: "fixed", left: "48%", top: "50%" }}
              >
                <div className="flex justify-center items-center py-20">
                  <Loader
                    type="spinner-circle"
                    bgColor={"var(--card-border)"}
                    color={"var(--title)"}
                    size={80}
                  />
                </div>
              </div>
            )}
            <>
              {!submitLoader && (
                <div className="w-full">
                  <div className="w-full rounded-xl  py-1">
                    <div className="w-full overflow-x-auto">
                      {data.length !== 0 ? (
                        <div className="flex justify-end">
                          <button
                            className=" border border-[var(--button-border)] bg-[var(--button-bg)]  text-[var(--text-color)] text-[14px] font-medium px-2 py-1  mb-2 rounded-lg transition cursor-pointer hover:bg-[var(--button-hover-bg)]"
                            type="submit"
                            onClick={() => downlaodData()}
                          >
                            Export
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      {data.length !== 0 ? (
                        <div
                          className="w-full overflow-x-auto rounded-xl border border-[var(--form-border)]"
                          style={{
                            maxHeight: "calc(100vh - 280px)",
                            overflowY: "auto",
                          }}
                        >
                          <table className="w-full min-w-[900px] border-collapse">
                            {/* HEADER */}
                            <thead className="bg-gradient-to-r from-orange-400 to-orange-300 text-black sticky top-0 z-10 text-right">
                              <tr>
                                {header.map((head, index) => (
                                  <th
                                    key={index}
                                    onClick={() => sortData(index)}
                                    className="
              text-[14px] font-semibold text-left
              px-4 py-2 whitespace-nowrap
              border-b border-[var(--form-border)]
              cursor-pointer
              select-none
            "
                                  >
                                    <div className="flex items-center gap-1">
                                      {head}
                                      {sortColumn === index &&
                                        (sortOrder === "asc" ? (
                                          <HiSortAscending />
                                        ) : (
                                          <HiSortDescending />
                                        ))}
                                    </div>
                                  </th>
                                ))}
                              </tr>
                            </thead>

                            {/* BODY */}
                            <tbody className="bg-[var(--bg-main-container)] text-[var(--text-color)] ">
                              {data.map((item, index) => (
                                <tr
                                  key={index}
                                  className="
            border-b border-[var(--form-border)]
            text-[13px]
            hover:bg-[var(--table-row-hover)]
            transition-colors
          "
                                >
                                  <td className="px-4 py-2 whitespace-nowrap">{item.UserID}</td>

                                  <td className="px-4 py-2 whitespace-nowrap">
                                    {moment.utc(item.datetime).format("YYYY-MM-DD HH:mm")}
                                  </td>

                                  <td className="px-4 py-2 whitespace-nowrap">{item.module}</td>

                                  <td className="px-4 py-2 whitespace-nowrap">{item.plant}</td>

                                  <td className="px-4 py-2 whitespace-nowrap">
                                    {item.plant_or_section.length <= 0 ? "-" : item.plant_or_section}
                                  </td>

                                  <td className="px-4 py-2 whitespace-nowrap">
                                    {item.url}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-center text-[var(--text-color)] py-2 text-md">
                          No Record Found
                        </p>
                      )}
                    </div>
                  </div>
                  {/* pagination */}
                  <div className="flex items-center justify-between mt-2 mb-2 w-full flex-wrap px-1">

                    {/* Rows per page */}
                    <div className="text-sm flex items-center gap-2 text-[12px] text-[var(--text-color)]">
                      <span>Rows per page :</span>

                      <select
                        value={itemsPerPage}
                        onChange={(e) =>
                          handleItemsPerPageChange(Number(e.target.value))
                        }
                        className=" rounded-md px-4 text-[12px] border border-[#FD6E41] bg-[var(--card-border)] text-[var(--text-color)] outline-none cursor-pointer "
                      >
                        {paginationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Page navigation */}
                    <div className="flex items-center gap-3 ml-auto text-[12px] text-[var(--text-color)]">

                      <button
                        className="p-1 rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        onClick={() => buttonPrevious(currentPage)}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <span className="text-sm font-medium whitespace-nowrap">
                        Page {currentPage} of {totalPages}
                      </span>

                      <button
                        className="p-1 rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        onClick={() => buttonNext(currentPage)}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight size={20} />
                      </button>

                    </div>

                  </div>
                </div>
              )}
            </>
          </>
        )}
      </div>
    </>
  );
}

export default AccessLog;
