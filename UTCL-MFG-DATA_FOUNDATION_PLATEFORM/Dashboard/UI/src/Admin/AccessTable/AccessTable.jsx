// import moment from "moment/moment";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { utils, writeFile } from "xlsx";
// import { getuserLogs } from "../../utils/admin/getuserLogs";
// import Navbar from "../Navbar/navbar";

// export const AccessTable = () => {
//   const { adminProvider } = useSelector((state) => state);
//   const { adminAccessLogData } = adminProvider;
//   const [filteredData, setFilteredData] = useState(adminAccessLogData);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     getuserLogs(adminProvider, dispatch);
//   }, []);

//   // Filter function by username
//   const filterByUsername = (e) => {
//     const filterItems = e.target.innerHTML;
//     const data = adminAccessLogData.filter((ele) => {
//       return ele.UserID === filterItems;
//     });
//     setFilteredData(data);
//   };

//   // Filter function by timestamp
//   const filterByTimestamp = (e) => {
//     const filterItems = e.target.innerHTML;
//     const data = adminAccessLogData.filter((ele) => {
//       return ele.Login_Time === filterItems;
//     });
//     setFilteredData(data);
//   };

//   // Retrieving only users from data
//   const users = adminAccessLogData.filter((elem, index) => {
//     return (
//       adminAccessLogData.findIndex((obj) => obj.UserID === elem.UserID) ===
//       index
//     );
//   });

//   // Retrieving only timestamps from data
//   const timestamps = adminAccessLogData.filter(
//     (elem, index) =>
//       adminAccessLogData.findIndex(
//         (obj) => obj.Login_Time === elem.Login_Time
//       ) === index
//   );

//   const dropdownUsersList = users.map((user) => {
//     return (
//       <div key={user.id}>
//         <li>
//           <p className="dropdown-item" onClick={filterByUsername}>
//             {user.UserID}
//           </p>
//         </li>
//       </div>
//     );
//   });
//   // Function for rendering timestamps dropdown
//   const dropdownTimestamps = timestamps.map((time) => {
//     return (
//       <div key={time.id}>
//         <li className="dropdown-item" onClick={filterByTimestamp}>
//           {time.Login_Time}
//         </li>
//       </div>
//     );
//   });

//   // Function for rendering timestamps after filtering
//   const filteredDropdownTimestamps = filteredData.map((time) => {
//     return (
//       <div key={time.id}>
//         <li className="dropdown-item" onClick={filterByTimestamp}>
//           {time.Login_Time}
//         </li>
//       </div>
//     );
//   });

//   // Function for resetting filters
//   const handleReset = () => {
//     setFilteredData([]);
//   };

//   const handleFilteredExport = () => {
//     const wb = utils.book_new();
//     if (filteredData.length !== 0) {
//       let ws = utils.json_to_sheet(filteredData);
//       utils.book_append_sheet(wb, ws, "Acces Log Data");
//       writeFile(wb, "access logs.xlsx");
//     } else {
//       let ws = utils.json_to_sheet(adminAccessLogData);
//       utils.book_append_sheet(wb, ws, "Acces Log Data");
//       writeFile(wb, "access logs.xlsx");
//     }
//   };

//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="admin-top">
//         <div className="text-right">
//           <button className="btn btn btnfrst mt-3 mx-2" onClick={handleReset}>
//             Reset
//           </button>
//           <button
//             className="btn btn btnfrst mt-3 mx-2"
//             onClick={() => handleFilteredExport()}
//           >
//             Export
//           </button>
//         </div>
//         <div className="mt-4 access-table table-responsive">
//           <table className="table w-100 mb-0 ml-auto">
//             <thead className="thead-dark">
//               <tr>
//                 <th>
//                   <div className="d-flex align-items-center">
//                     User Id
//                     <div className="dropdown ml-3">
//                       <button
//                         type="button"
//                         className="btn btn-secondary dropdown-toggle"
//                         aria-hidden="true"
//                         id="dropdownMenuButton1"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       ></button>
//                       <ul
//                         className="dropdown-menu"
//                         aria-labelledby="dropdownMenuButton1"
//                       >
//                         {dropdownUsersList}
//                       </ul>
//                     </div>
//                   </div>
//                 </th>
//                 <th className="w-25">Plants</th>
//                 <th>IP address</th>
//                 <th>
//                   <div className="d-flex align-items-center">
//                     Login Time
//                     <div className="dropdown ml-3">
//                       <button
//                         type="button"
//                         className="btn btn-secondary dropdown-toggle"
//                         aria-hidden="true"
//                         id="dropdownMenuButton1"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       ></button>
//                       <ul
//                         className="dropdown-menu"
//                         aria-labelledby="dropdownMenuButton1"
//                       >
//                         {filteredData.length === 0
//                           ? dropdownTimestamps
//                           : filteredDropdownTimestamps}
//                       </ul>
//                     </div>
//                   </div>
//                 </th>
//                 <th>Logout Time</th>
//                 <th>Login Status</th>
//                 <th>Created Time stamp</th>
//               </tr>
//             </thead>
//             {/* {console.log(filteredData)} */}
//             {filteredData.length === 0
//               ? adminAccessLogData?.map(
//                   (
//                     {
//                       UserID,
//                       Timestamp,
//                       Login_Time,
//                       Ip,
//                       Logout_Time,
//                       Login_Status,
//                       Plants,
//                     },
//                     index
//                   ) => {
//                     return (
//                       <tr key={index}>
//                         <td>{UserID}</td>
//                         <td>
//                           {Plants.length === 0 ? (
//                             <div className="plantBox">No Plant Assigned</div>
//                           ) : (
//                             Plants?.map((val, index) => {
//                               return (
//                                 <div key={index} className="plantBox">
//                                   {val}
//                                 </div>
//                               );
//                             })
//                           )}
//                         </td>
//                         <td>{Ip}</td>
//                         <td>
//                           {moment(Login_Time).format("DD-MM-YYYY HH:mm:ss")}
//                         </td>
//                         <td>
//                           {Logout_Time
//                             ? moment(Logout_Time).format("DD-MM-YYYY HH:mm:ss")
//                             : null}
//                         </td>
//                         <td>
//                           {Login_Status !== null
//                             ? Login_Status
//                               ? "success"
//                               : "failure"
//                             : ""}
//                         </td>
//                         <td>
//                           {moment(Timestamp).format("DD-MM-YYYY HH:mm:ss")}
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )
//               : filteredData?.map(
//                   (
//                     {
//                       UserID,
//                       Timestamp,
//                       Login_Time,
//                       Ip,
//                       Plants,
//                       Logout_Time,
//                       Login_Status,
//                     },
//                     index
//                   ) => {
//                     return (
//                       <tr key={index}>
//                         <td>{UserID}</td>
//                         <td>
//                           {Plants.length === 0 ? (
//                             <div className="plantBox">No Plant Assigned</div>
//                           ) : (
//                             Plants?.map((val, index) => {
//                               return (
//                                 <div key={index} className="plantBox">
//                                   {val}
//                                 </div>
//                               );
//                             })
//                           )}
//                         </td>
//                         <td>{Ip}</td>
//                         <td>
//                           {moment(Login_Time).format("DD-MM-YYYY HH:mm:ss")}
//                         </td>
//                         <td>
//                           {Logout_Time
//                             ? moment(Logout_Time).format("DD-MM-YYYY HH:mm:ss")
//                             : null}
//                         </td>
//                         <td>
//                           {Login_Status !== null
//                             ? Login_Status
//                               ? "success"
//                               : "failure"
//                             : ""}
//                         </td>
//                         <td>
//                           {moment(Timestamp).format("DD-MM-YYYY HH:mm:ss")}
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )}
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };
