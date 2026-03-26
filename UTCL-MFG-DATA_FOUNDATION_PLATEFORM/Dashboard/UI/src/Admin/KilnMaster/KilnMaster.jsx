// import React from "react";
// import { useState, useEffect } from "react";
// import "./KilnMaster.scss";
// import useToken from "../UseToken/useToken";
// import { AuthenticatedTemplate } from "@azure/msal-react";
// import Navbar from "../Navbar/navbar";
// import Loader from "react-js-loader";
// import { toast } from "react-toastify";
// import { BsCheckLg, BsPenFill, BsXLg,BsSearch } from "react-icons/bs";
// import { accessLogApi } from "../../utils/accessLogApi";
// import {
//   KilnMasterApi,
//   getKilnLatestdata,
//   updateKilnMaster,
// } from "../../utils/KilnMasterApi";
// function KilnMaster() {
//   const [editableRow, setEditableRow] = useState(null);
//   const [bulkEdit, setBulkEdit] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editedData, setEditedData] = useState({});
//   const [plants, setPlants] = useState([]);
//   const [plantData, setPlantData] = useState([]);
//   const [mills, setMills] = useState([]);
//   const [plantSelected, setPlantSelected] = useState("Select Plant");
//   //   const [kilnNoSelected,setKilnNoSelected]=useState('Select KilnNo');
//   const [selectedKiln, setSelectedKiln] = useState("Select KilnNo");
//   const { token, setToken } = useToken();
//   const [submitLoader, setSubmitLoader] = useState(false);
//   const [formData, setFormData] = useState({
//     kilnNo: "",
//     plant: "",
//   });
//   //   const [data, setData] = useState([
//   //     { id: 1, name: "John Doe", age: 25, role: true },
//   //     { id: 2, name: "Jane Doe", age: 30, role: false },

//   //   ]);
//   const [data, setData] = useState([]);

//   const header = [
//     "Tag Id",
//     "Display Name",
//     // "ip",
//     "Generic Description",
//     // "options",
//     "Recommendation Flag",
//     "Action",
//     // "Section",
//     // "URL",
//   ];

//   useEffect(() => {
//     getDropDownData();
//     accessLogDashboard();
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

//   const getDropDownData = async () => {
//     const payload = {
//       Plant_Code: "",
//       Mill: "",
//       Grade: "",
//     };
//     const result = await KilnMasterApi(payload, token.token);
//     // console.log(result.result);
//     setPlantData(result.result);
//     const uniquePlantsSet = new Set(
//       result.result.map((item) => item.Plant_SAP_Code)
//     );
//     // console.log(uniquePlantsSet);
//     const uniquePlants = Array.from(uniquePlantsSet).map((plantCode) => {
//       const matchingPlants = result.result.filter(
//         (item) => item.Plant_SAP_Code === plantCode
//       );
//       // console.log(matchingPlants);
//       const matchingPlant = matchingPlants[0];
//       // console.log(matchingPlant);
//       return {
//         Plant_SAP_Code: plantCode,
//         Plant_Generic_Name: matchingPlant
//           ? matchingPlant.Plant_Generic_Name
//           : "",
//         // Kiln_No: matchingPlant ? matchingPlant.Kiln_No:''
//       };
//     });
//     // console.log(uniquePlants);
//     setPlants(uniquePlants);
//     // try {
//     //   axios
//     //     .post(
//     //       process.env.REACT_APP_BASE_URL + "opt/kiln/getDropDownFilter",
//     //       payload,
//     //       {
//     //         headers: { Authorization: `Bearer ${token.token}` },
//     //       }
//     //     )
//     //     .then((res) => {
//     //       // console.log(res.data.result);
//     //       setPlantData(res.data.result);
//     //       const uniquePlantsSet = new Set(
//     //         res.data.result.map((item) => item.Plant_SAP_Code)
//     //       );
//     //       // console.log(uniquePlantsSet);
//     //       const uniquePlants = Array.from(uniquePlantsSet).map((plantCode) => {
//     //         const matchingPlants = res.data.result.filter(
//     //           (item) => item.Plant_SAP_Code === plantCode
//     //         );
//     //         // console.log(matchingPlants);
//     //         const matchingPlant = matchingPlants[0];
//     //         // console.log(matchingPlant);
//     //         return {
//     //           Plant_SAP_Code: plantCode,
//     //           Plant_Generic_Name: matchingPlant
//     //             ? matchingPlant.Plant_Generic_Name
//     //             : "",
//     //           // Kiln_No: matchingPlant ? matchingPlant.Kiln_No:''
//     //         };
//     //       });
//     //       // console.log(uniquePlants);
//     //       setPlants(uniquePlants);
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
//     // } catch (error) {}
//   };

//   const handlePlants = (e, plantName) => {
//     const { name } = e.target;
//     // console.log(plantName, e.target);
//     const selectedPlant = plantName;
//     // console.log(e.target.value);
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [name]: plantName,
//       };
//     });
//     setPlantSelected(selectedPlant);
//     // setKilnNoSelected('Select KilnNo')
//     setSelectedKiln("Select KilnNo");
//     setFormData({
//       kilnNo: "",
//     });

//     // console.log(formData)
//     // console.log(plants);
//     const kilnArray = plantData
//       .filter((item) => item.Plant_SAP_Code === plantName)
//       .map((item) => item.Kiln_No);
//     console.log(kilnArray);
//     setMills(kilnArray);
//     // setMills(plantsArray)
//   };
//   const handleKiln = (e, id) => {
//     const { name } = e.target;
//     const selectKiln = id;
//     // console.log(name);
//     // console.log(id);
//     // setKilnNoSelected(selectKiln)
//     setSelectedKiln(selectKiln);
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [name]: id,
//       };
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(plantSelected, selectedKiln);
//     setSubmitLoader(true);
//     formData.plant = plantSelected;
//     formData.kilnNo = selectedKiln;
//     console.log(formData);
//     const result = await getKilnLatestdata(formData, token.token);
//     console.log(result.result);
//     setData(result.result);
//     setSubmitLoader(false);
//     // console.log(formData);
//   };
//   const isSubmitDisabled = formData.plant === "" || formData.kilnNo === "";

//   const handleEdit = (id) => {
//     setEditableRow(id);
//     // console.log(id);
//     const rowToEdit = data.find((row) => row.id === id);
//     // console.log(rowToEdit);
//     setEditedData({ ...editedData, [id]: { ...rowToEdit } });
//   };

//   //   const handleDelete = (id) => {
//   //     const updatedData = data.filter((row) => row.id !== id);
//   //     setData(updatedData);
//   //   };
//   const handleSave = (id) => {
//     setEditableRow(null);
//     setBulkEdit(false);
//     // console.log(id);
//     const saveData = editedData[id];

//     console.log("save", saveData, id);
//     const updatedData = data.map((row) =>
//       row.id === id ? { ...row, ...saveData } : row
//     );
//     // setData(updatedData);

//     saveKilnDataChange(saveData, id);
//     setEditedData({});
//   };

//   const saveKilnDataChange = async (flag, tagId) => {
//     // console.log("update", item);
//     // console.log(data);
//     if (flag.Recommendation_Flag) {
//       const paylaod = {
//         Plant_Code: formData.plant,
//         Kiln: formData.kilnNo,
//         tagId: tagId,
//         recommendationFlag: flag.Recommendation_Flag,
//       };
//       setSubmitLoader(true);
//       const res = await updateKilnMaster(paylaod, token.token);
//       //   console.log(res);
//       if (res.status === "Success") {
//         toast.success("Record Updated Successfully");
//       } else {
//         toast.error("Something went wrong. Please try again");
//       }
//       const result = await getKilnLatestdata(formData, token.token);
//       //   console.log(result.result);
//       setData(result.result);
//       setSubmitLoader(false);
//     } else {
//       toast.warning("Please select Recommendation flag");
//     }
//   };

//   const handleCancel = () => {
//     setEditableRow(null);
//     setBulkEdit(false);
//     setEditedData({});
//   };

//   //   const handleBulkSave = () => {
//   //     setEditableRow(null);
//   //     setBulkEdit(false);
//   //     console.log('Edited Data:', editedData);
//   //     setEditedData({});
//   //   };

//   const handleBulkEdit = () => {
//     setBulkEdit(true);
//     setEditedData(Object.fromEntries(data.map((row) => [row.id, { ...row }])));
//   };

//   const handleRoleToggle = (id) => {
//     const updatedData = data.map((row) =>
//       row.id === id ? { ...row, role: row.role === 1 ? 0 : 1 } : row
//     );
//     setData(updatedData);
//   };

//   const handleInputChange = (id, field, value) => {
//     console.log(id, field, value);

//     const updatedData = data.map((row) =>
//       row.Tag_Id === id ? { ...row, [field]: value } : row
//     );
//     console.log(updatedData);
//     setData(updatedData);

//     if (bulkEdit && editedData.hasOwnProperty(id)) {
//       setEditedData((prevEditedData) => ({
//         ...prevEditedData,
//         [id]: { ...prevEditedData[id], [field]: value },
//       }));
//     } else {
//       const rowToUpdate = data.find((row) => row.id === id);
//       setEditedData((prevEditedData) => ({
//         ...prevEditedData,
//         [id]: { ...rowToUpdate, [field]: value },
//       }));
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredData = data.filter((row) => {
//     const roleString = row.Recommendation_Flag === true ? "Active" : "Inactive";

//     return (
//       row.Tag_Id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       row.Generic_Description.toLowerCase().includes(
//         searchQuery.toLowerCase()
//       ) ||
//       row.UI_Display_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       roleString.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });
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
//                     Plant
//                   </label>
//                   <select
//                     className="form-select"
//                     name="plant"
//                     value={plantSelected}
//                     onChange={(e) => handlePlants(e, e.target.value)}
//                   >
//                     <option value="Select Plant" disabled={true}>
//                       Select Plant
//                     </option>
//                     {plants && plants !== undefined && plants.length !== 0 ? (
//                       <>
//                         {/* <option value="All">All</option> */}
//                         {/* <option value="select module" disabled={true}>Select Plant</option> */}
//                         {plants.map((data, index) => {
//                           return (
//                             <option key={index} value={data.Plant_SAP_Code}>
//                               {data.Plant_SAP_Code}
//                             </option>
//                           );
//                         })}
//                       </>
//                     ) : (
//                       <option value="No Plant Found" disabled={true}>
//                         No Plant Found
//                       </option>
//                     )}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 px-2">
//                 <div className="d-flex flex-column h-100">
//                   <label htmlFor="" className="mb-2">
//                     Kiln No
//                   </label>
//                   <select
//                     className="form-select"
//                     name="kilnNo"
//                     value={selectedKiln}
//                     onChange={(e) => handleKiln(e, e.target.value)}
//                   >
//                     <option value="Select KilnNo" disabled={true}>
//                       Select KilnNo
//                     </option>

//                     {mills && mills !== undefined && mills.length !== 0 ? (
//                       <>
//                         {/* <option value="All">All</option> */}
//                         {/* <option value="select kilnNo" disabled={true}>Select KilnNo</option> */}
//                         {mills.map((data, index) => {
//                           return (
//                             <option key={index} value={data}>
//                               {data}
//                             </option>
//                           );
//                         })}
//                       </>
//                     ) : (
//                       <option value="No kilnNo Found" disabled={true}>
//                         No KilnNo Found
//                       </option>
//                     )}
//                   </select>
//                 </div>
//               </div>

//               <div className="col-xl-1 col-lg-1 col-md-3 col-sm-12 col-12 px-2 mt-md-2">
//                 <button
//                   className="btn btn-warning text-dark"
//                   style={{
//                     backgroundColor: "#fff500",
//                     border: "none",
//                     marginTop: "17px",
//                     height: "40px",
//                   }}
//                   type="submit"
//                   disabled={isSubmitDisabled}
//                 >
//                   Submit
//                 </button>
//               </div>
//               {/* {data.length !== 0 ? (
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
//               )} */}
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
//               <div className="Loader-Container loader-show">
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
//                     <div className="row">
//                       <div className="col-md-12">
//                         {data.length !== 0 ? (
//                           <>
//                             <div className="search">
//                             <BsSearch className="fa fa-search" />
//                               <input
//                                 type="text"
//                                 className="form-control mb-2"
//                                 placeholder="Search here"
//                                 value={searchQuery}
//                                 onChange={handleSearch}
//                               />
//                             </div>
//                             <div className="tableFixHead">
//                               <table className="table table-hover">
//                                 <thead>
//                                   <tr
//                                     style={{
//                                       color: "white",
//                                       backgroundColor: "black",
//                                     }}
//                                   >
//                                     {header.map((head, index) => (
//                                       <th
//                                         style={{
//                                           width: "20%",
//                                           textAlign: "center",
//                                         }}
//                                         key={index}
//                                       >
//                                         {head}
//                                       </th>
//                                     ))}
//                                   </tr>
//                                 </thead>
//                                 {filteredData.length === 0 ? (
//                                   <p>No Matching Records</p>
//                                 ) : (
//                                   <tbody>
//                                     {filteredData.map((row, index) => (
//                                       <tr key={index}>
//                                         <td>{row.Tag_Id}</td>
//                                         <td>
//                                           {/* {bulkEdit || editableRow === row.id ? (
//                                         <input
//                                           type="text"
//                                           value={row.name}
//                                           className="form-control"
//                                           onChange={(e) =>
//                                             handleInputChange(
//                                               row.id,
//                                               "name",
//                                               e.target.value
//                                             )
//                                           }
//                                         />
//                                       ) : (
//                                         row.name
//                                       )} */}
//                                           {row.UI_Display_Name}
//                                         </td>
//                                         <td>
//                                           {/* {bulkEdit || editableRow === row.id ? (
//                                         <input
//                                           type="text"
//                                           className="form-control"
//                                           value={row.age}
//                                           onChange={(e) =>
//                                             handleInputChange(
//                                               row.id,
//                                               "age",
//                                               e.target.value
//                                             )
//                                           }
//                                         />
//                                       ) : (
//                                         row.age
//                                       )} */}
//                                           {row.Generic_Description}
//                                         </td>
//                                         <td>
//                                           {bulkEdit ||
//                                           editableRow === row.Tag_Id ? (
//                                             <select
//                                               value={row.Recommendation_Flag}
//                                               className="form-select"
//                                               onChange={(e) =>
//                                                 handleInputChange(
//                                                   row.Tag_Id,
//                                                   "Recommendation_Flag",
//                                                   e.target.value
//                                                 )
//                                               }
//                                             >
//                                               <option value={true}>
//                                                 Active
//                                               </option>
//                                               <option value={false}>
//                                                 Inactive
//                                               </option>
//                                             </select>
//                                           ) : (
//                                             // <label className="toggle-switch">
//                                             //   <input
//                                             //     className="form-check-input"
//                                             //     type="checkbox"
//                                             //     checked={row.role === 1}
//                                             //     disabled
//                                             //   />
//                                             //   <div className="check-box">
//                                             //     <input type="checkbox" data-bs-toggle="tooltip" data-bs-placement="top" title={row.role===1 ? "Active" :"Inactice"} checked={row.role===1} disabled/>
//                                             //   </div>
//                                             //   {row.role === 1
//                                             //     ? "Active"
//                                             //     : "Inactive"}
//                                             // </label>
//                                             <>
//                                               {row.Recommendation_Flag === true
//                                                 ? "Active"
//                                                 : "Inactive"}
//                                             </>
//                                           )}
//                                         </td>
//                                         {!bulkEdit && (
//                                           <td>
//                                             {editableRow === row.Tag_Id ? (
//                                               <>
//                                                 {/* <i
//                                                 className="bi bi-check-circle me-3 save-edit-icon"
//                                                 onClick={() =>
//                                                   handleSave(row.Tag_Id)
//                                                 }
//                                               ></i> */}
//                                                 {/* <i
//                                                 className="bi bi-x-lg save-edit-icon"
//                                                 onClick={handleCancel}
//                                               ></i> */}
//                                                 <BsCheckLg
//                                                   className="save-edit-icon me-3"
//                                                   onClick={() =>
//                                                     handleSave(row.Tag_Id)
//                                                   }
//                                                 />
//                                                 <BsXLg
//                                                   className="save-edit-icon"
//                                                   onClick={handleCancel}
//                                                 />
//                                               </>
//                                             ) : (
//                                               <>
//                                                 {/* <i
//                                                 className="bi bi-pencil-fill me-3 icon-size"
//                                                 onClick={() =>
//                                                   handleEdit(row.Tag_Id)
//                                                 }
//                                               ></i> */}
//                                                 <BsPenFill
//                                                   className="icon-size me-3"
//                                                   onClick={() => {
//                                                     handleEdit(row.Tag_Id);
//                                                   }}
//                                                 />
//                                                 {/* <i
//                                               className="bi bi-trash3-fill"
//                                               style={{ cursor: "pointer", fontSize:"16px" }}
//                                               onClick={() =>
//                                                 handleDelete(row.id)
//                                               }
//                                             ></i> */}
//                                               </>
//                                             )}
//                                           </td>
//                                         )}
//                                       </tr>
//                                     ))}
//                                   </tbody>
//                                 )}
//                               </table>
//                             </div>
//                           </>
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
//                 </div>
//               )}
//             </>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default KilnMaster;













import React from "react";
import { useState, useEffect } from "react";
import "./KilnMaster.scss";
import useToken from "../UseToken/useToken";
import { AuthenticatedTemplate } from "@azure/msal-react";
import Navbar from "../Navbar/navbar";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { BsCheckLg, BsPenFill, BsXLg, BsSearch } from "react-icons/bs";
import { accessLogApi } from "../../utils/accessLogApi";
import {
  KilnMasterApi,
  getKilnLatestdata,
  updateKilnMaster,
} from "../../utils/KilnMasterApi";
function KilnMaster() {
  const [editableRow, setEditableRow] = useState(null);
  const [bulkEdit, setBulkEdit] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editedData, setEditedData] = useState({});
  const [plants, setPlants] = useState([]);
  const [plantData, setPlantData] = useState([]);
  const [mills, setMills] = useState([]);
  const [plantSelected, setPlantSelected] = useState("Select Plant");
  //   const [kilnNoSelected,setKilnNoSelected]=useState('Select KilnNo');
  const [selectedKiln, setSelectedKiln] = useState("Select KilnNo");
  const { token, setToken } = useToken();
  const [submitLoader, setSubmitLoader] = useState(false);
  const [formData, setFormData] = useState({
    kilnNo: "",
    plant: "",
  });
  //   const [data, setData] = useState([
  //     { id: 1, name: "John Doe", age: 25, role: true },
  //     { id: 2, name: "Jane Doe", age: 30, role: false },

  //   ]);
  const [data, setData] = useState([]);

  const header = [
    "Tag Id",
    "Display Name",
    // "ip",
    "Generic Description",
    // "options",
    "Recommendation Flag",
    "Action",
    // "Section",
    // "URL",
  ];

  useEffect(() => {
    getDropDownData();
    accessLogDashboard();
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

  const getDropDownData = async () => {
    const payload = {
      Plant_Code: "",
      Mill: "",
      Grade: "",
    };
    const result = await KilnMasterApi(payload, token.token);
    // console.log(result.result);
    setPlantData(result.result);
    const uniquePlantsSet = new Set(
      result.result.map((item) => item.Plant_SAP_Code)
    );
    // console.log(uniquePlantsSet);
    const uniquePlants = Array.from(uniquePlantsSet).map((plantCode) => {
      const matchingPlants = result.result.filter(
        (item) => item.Plant_SAP_Code === plantCode
      );
      // console.log(matchingPlants);
      const matchingPlant = matchingPlants[0];
      // console.log(matchingPlant);
      return {
        Plant_SAP_Code: plantCode,
        Plant_Generic_Name: matchingPlant
          ? matchingPlant.Plant_Generic_Name
          : "",
        // Kiln_No: matchingPlant ? matchingPlant.Kiln_No:''
      };
    });
    // console.log(uniquePlants);
    setPlants(uniquePlants);
    // try {
    //   axios
    //     .post(
    //       process.env.REACT_APP_BASE_URL + "opt/kiln/getDropDownFilter",
    //       payload,
    //       {
    //         headers: { Authorization: `Bearer ${token.token}` },
    //       }
    //     )
    //     .then((res) => {
    //       // console.log(res.data.result);
    //       setPlantData(res.data.result);
    //       const uniquePlantsSet = new Set(
    //         res.data.result.map((item) => item.Plant_SAP_Code)
    //       );
    //       // console.log(uniquePlantsSet);
    //       const uniquePlants = Array.from(uniquePlantsSet).map((plantCode) => {
    //         const matchingPlants = res.data.result.filter(
    //           (item) => item.Plant_SAP_Code === plantCode
    //         );
    //         // console.log(matchingPlants);
    //         const matchingPlant = matchingPlants[0];
    //         // console.log(matchingPlant);
    //         return {
    //           Plant_SAP_Code: plantCode,
    //           Plant_Generic_Name: matchingPlant
    //             ? matchingPlant.Plant_Generic_Name
    //             : "",
    //           // Kiln_No: matchingPlant ? matchingPlant.Kiln_No:''
    //         };
    //       });
    //       // console.log(uniquePlants);
    //       setPlants(uniquePlants);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // } catch (error) {}
  };

  const handlePlants = (e, plantName) => {
    const { name } = e.target;
    // console.log(plantName, e.target);
    const selectedPlant = plantName;
    // console.log(e.target.value);
    setFormData((prev) => {
      return {
        ...prev,
        [name]: plantName,
      };
    });
    setPlantSelected(selectedPlant);
    // setKilnNoSelected('Select KilnNo')
    setSelectedKiln("Select KilnNo");
    setFormData({
      kilnNo: "",
    });

    // console.log(formData)
    // console.log(plants);
    const kilnArray = plantData
      .filter((item) => item.Plant_SAP_Code === plantName)
      .map((item) => item.Kiln_No);
    console.log(kilnArray);
    setMills(kilnArray);
    // setMills(plantsArray)
  };
  const handleKiln = (e, id) => {
    const { name } = e.target;
    const selectKiln = id;
    // console.log(name);
    // console.log(id);
    // setKilnNoSelected(selectKiln)
    setSelectedKiln(selectKiln);
    setFormData((prev) => {
      return {
        ...prev,
        [name]: id,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(plantSelected, selectedKiln);
    setSubmitLoader(true);
    formData.plant = plantSelected;
    formData.kilnNo = selectedKiln;
    console.log(formData);
    const result = await getKilnLatestdata(formData, token.token);
    console.log(result.result);
    setData(result.result);
    setSubmitLoader(false);
    // console.log(formData);
  };
  const isSubmitDisabled = formData.plant === "" || formData.kilnNo === "";

  const handleEdit = (id) => {
    setEditableRow(id);
    // console.log(id);
    const rowToEdit = data.find((row) => row.id === id);
    // console.log(rowToEdit);
    setEditedData({ ...editedData, [id]: { ...rowToEdit } });
  };

  //   const handleDelete = (id) => {
  //     const updatedData = data.filter((row) => row.id !== id);
  //     setData(updatedData);
  //   };
  const handleSave = (id) => {
    setEditableRow(null);
    setBulkEdit(false);
    // console.log(id);
    const saveData = editedData[id];

    console.log("save", saveData, id);
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, ...saveData } : row
    );
    // setData(updatedData);

    saveKilnDataChange(saveData, id);
    setEditedData({});
  };

  const saveKilnDataChange = async (flag, tagId) => {
    // console.log("update", item);
    // console.log(data);
    if (flag.Recommendation_Flag) {
      const paylaod = {
        Plant_Code: formData.plant,
        Kiln: formData.kilnNo,
        tagId: tagId,
        recommendationFlag: flag.Recommendation_Flag,
      };
      setSubmitLoader(true);
      const res = await updateKilnMaster(paylaod, token.token);
      //   console.log(res);
      if (res.status === "Success") {
        toast.success("Record Updated Successfully");
      } else {
        toast.error("Something went wrong. Please try again");
      }
      const result = await getKilnLatestdata(formData, token.token);
      //   console.log(result.result);
      setData(result.result);
      setSubmitLoader(false);
    } else {
      toast.warning("Please select Recommendation flag");
    }
  };

  const handleCancel = () => {
    setEditableRow(null);
    setBulkEdit(false);
    setEditedData({});
  };

  //   const handleBulkSave = () => {
  //     setEditableRow(null);
  //     setBulkEdit(false);
  //     console.log('Edited Data:', editedData);
  //     setEditedData({});
  //   };

  const handleBulkEdit = () => {
    setBulkEdit(true);
    setEditedData(Object.fromEntries(data.map((row) => [row.id, { ...row }])));
  };

  const handleRoleToggle = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, role: row.role === 1 ? 0 : 1 } : row
    );
    setData(updatedData);
  };

  const handleInputChange = (id, field, value) => {
    console.log(id, field, value);

    const updatedData = data.map((row) =>
      row.Tag_Id === id ? { ...row, [field]: value } : row
    );
    console.log(updatedData);
    setData(updatedData);

    if (bulkEdit && editedData.hasOwnProperty(id)) {
      setEditedData((prevEditedData) => ({
        ...prevEditedData,
        [id]: { ...prevEditedData[id], [field]: value },
      }));
    } else {
      const rowToUpdate = data.find((row) => row.id === id);
      setEditedData((prevEditedData) => ({
        ...prevEditedData,
        [id]: { ...rowToUpdate, [field]: value },
      }));
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((row) => {
    const roleString = row.Recommendation_Flag === true ? "Active" : "Inactive";

    return (
      row.Tag_Id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.Generic_Description.toLowerCase().includes(
        searchQuery.toLowerCase()
      ) ||
      row.UI_Display_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roleString.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full">
        <div className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5">
          <span>Kiln Master</span>
        </div>
      </div>
      <div className=" rounded-xl border border-[var(--form-border)] px-2 mt-1">
        <div className=" w-full align-items-center gap mt-2">
          <form
            className="w-full flex flex-col gap-4 "
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="grid grid-cols-12 gap-6 items-end">
              {/* Plant */}
              <div className="col-span-12 md:col-span-3">
                <label className="text-sm mb-2 block text-[var(--text-color)] -ml-1">
                  Plant Name <span className="text-red-400">*</span>
                </label>

                <select
                  className="w-full rounded-md px-3 py-1 text-sm
        bg-[var(--input-enable-bg)]
        border border-[var(--input-enable-border)]
        outline-none text-[var(--text-color)]"
                  name="plant"
                  value={plantSelected}
                  onChange={(e) => handlePlants(e, e.target.value)}
                >
                  <option value="Select Plant" disabled>
                    Select Plant
                  </option>

                  {plants?.length ? (
                    plants.map((data, index) => (
                      <option key={index} value={data.Plant_SAP_Code}>
                        {data.Plant_SAP_Code}
                      </option>
                    ))
                  ) : (
                    <option disabled>No Plant Found</option>
                  )}
                </select>
              </div>

              {/* Kiln */}
              <div className="col-span-12 md:col-span-3">
                <label className="text-sm mb-2 block text-[var(--text-color)]">
                  Kiln No <span className="text-red-400">*</span>
                </label>

                <select
                  className="w-full rounded-md px-3 py-1 text-sm
        bg-[var(--input-enable-bg)]
        border border-[var(--input-enable-border)]
        outline-none text-[var(--text-color)]"
                  name="kilnNo"
                  value={selectedKiln}
                  onChange={(e) => handleKiln(e, e.target.value)}
                >
                  <option value="Select KilnNo" disabled>
                    Select KilnNo
                  </option>

                  {mills?.length ? (
                    mills.map((data, index) => (
                      <option key={index} value={data}>
                        {data}
                      </option>
                    ))
                  ) : (
                    <option disabled>No KilnNo Found</option>
                  )}
                </select>
              </div>

              {/* Submit */}
              <div className="col-span-12 md:col-span-2 flex items-end">
                <button
                  className={` h-[32px] w-[75px] text-[14px] shrink-0 cursor-pointer px-2 rounded-md bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] text-sm font-medium duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed active:scale-95 `}
                  type="submit"
                  disabled={isSubmitDisabled}
                >
                  Submit
                </button>
              </div>

            </div>
          </form>
        </div>

        {data?.length === 0 ? (
          <div>
            <p className="flex flex-col items-center justify-center h-40  rounded-lg"><div class="text-3xl mb-3 zoom-animation">🔍</div>

              {/* <!-- Title --> */}
              <h2 class="text-lg font-semibold text-[var(--leftdrawer-text)] mb-2">
                No Data Found
              </h2>

              {/* <!-- Description --> */}
              <p class="text-sm text-[var(--card-subtle)] mb-1">
                Try changing the filters or refresh the data
              </p></p>
          </div>

        ) : (
          <>
            {submitLoader && (
              <div className="Loader-Container loader-show">
                <Loader
                  type="spinner-circle"
                  bgColor={"#000000"}
                  title={"bubble-scale"}
                  formInitialValues
                  color={"#FFFFFF"}
                  size={100}
                />
              </div>
            )}
            <>
              {!submitLoader && (
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="">
                        {data.length !== 0 ? (
                          <>
                            <div className="flex items-center justify-end mb-2 gap-6">
                              {/* <BsSearch className="fa fa-search" /> */}
                              <input
                                type="text"
                                className="
                                 rounded-md px-3 py-1 text-sm
                                 bg-[var(--search-bg)]
                                 border border-[var(--search-border)] text-[var(--text-color)]
                                   outline-none"
                                placeholder="Search here"
                                value={searchQuery}
                                onChange={handleSearch}
                              />
                            </div>
                            <div className="w-full overflow-x-auto rounded-lg border border-[var(--form-border)] overflow-hidden" style={{ maxHeight: "calc(100vh - 280px)", overflowY: "auto" }}>
                              <table className="w-full border-collapse">
                                <thead className="bg-gradient-to-r from-orange-400 to-orange-300 text-black sticky top-0 z-10">
                                  <tr>
                                    {header.map((head, index) => (
                                      <th
                                        className="text-[14px] text-left px-3 py-2 font-semibold whitespace-nowrap border-b border-[var(--form-border)]"
                                        key={index}
                                      >
                                        {head}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                {filteredData.length === 0 ? (
                                  <tbody className="text-[var(--text-color)]">
                                    <tr >
                                      <td
                                        colSpan={header.length}
                                        className="text-right py-6 text-sm text-gray-400"
                                      >
                                        No Matching Records
                                      </td>
                                    </tr>
                                  </tbody>
                                ) : (
                                  <tbody className="text-[var(--text-color)]">
                                    {filteredData.map((row, index) => (
                                      <tr key={index} className="border-b border-[var(--form-border)] hover:bg-black/5 transition">
                                        <td className="text-[13px] text-left px-3 py-2 whitespace-nowrap">{row.Tag_Id}</td>
                                        <td className="text-[13px] text-left px-3 py-2 whitespace-nowrap">

                                          {row.UI_Display_Name}
                                        </td>
                                        <td className="text-[13px] text-left px-3 py-2 whitespace-nowrap">

                                          {row.Generic_Description}
                                        </td>
                                        <td className="text-[13px] text-left px-3 py-2 whitespace-nowrap">
                                          {bulkEdit ||
                                            editableRow === row.Tag_Id ? (
                                            <select
                                              value={row.Recommendation_Flag}
                                              className="rounded-md px-2 py-1 text-sm
                                                    bg-[var(--input-enable-bg)]
                                                 border border-[var(--input-enable-border)] outline-none"
                                              onChange={(e) =>
                                                handleInputChange(
                                                  row.Tag_Id,
                                                  "Recommendation_Flag",
                                                  e.target.value
                                                )
                                              }
                                            >
                                              <option value={true}>
                                                Active
                                              </option>
                                              <option value={false}>
                                                Inactive
                                              </option>
                                            </select>
                                          ) : (
                                            // <label className="toggle-switch">
                                            //   <input
                                            //     className="form-check-input"
                                            //     type="checkbox"
                                            //     checked={row.role === 1}
                                            //     disabled
                                            //   />
                                            //   <div className="check-box">
                                            //     <input type="checkbox" data-bs-toggle="tooltip" data-bs-placement="top" title={row.role===1 ? "Active" :"Inactice"} checked={row.role===1} disabled/>
                                            //   </div>
                                            //   {row.role === 1
                                            //     ? "Active"
                                            //     : "Inactive"}
                                            // </label>
                                            <>
                                              {row.Recommendation_Flag === true
                                                ? "Active"
                                                : "Inactive"}
                                            </>
                                          )}
                                        </td>
                                        {!bulkEdit && (
                                          <td className="text-[13px]  pl-3 py-2 whitespace-nowrap">
                                            {editableRow === row.Tag_Id ? (
                                              <>
                                                {/* <i
                                                className="bi bi-check-circle me-3 save-edit-icon"
                                                onClick={() =>
                                                  handleSave(row.Tag_Id)
                                                }
                                              ></i> */}
                                                {/* <i
                                                className="bi bi-x-lg save-edit-icon"
                                                onClick={handleCancel}
                                              ></i> */}
                                                <BsCheckLg
                                                  className="cursor-pointer hover:text-green-500"
                                                  onClick={() =>
                                                    handleSave(row.Tag_Id)
                                                  }
                                                />
                                                <BsXLg
                                                  className="cursor-pointer hover:text-red-500"
                                                  onClick={handleCancel}
                                                />
                                              </>
                                            ) : (
                                              <>
                                                {/* <i
                                                className="bi bi-pencil-fill me-3 icon-size"
                                                onClick={() =>
                                                  handleEdit(row.Tag_Id)
                                                }
                                              ></i> */}
                                                <BsPenFill
                                                  className="cursor-pointer text-[#8A38F5]"
                                                  onClick={() => {
                                                    handleEdit(row.Tag_Id);
                                                  }}
                                                />
                                                {/* <i
                                              className="bi bi-trash3-fill"
                                              style={{ cursor: "pointer", fontSize:"16px" }}
                                              onClick={() =>
                                                handleDelete(row.id)
                                              }
                                            ></i> */}
                                              </>
                                            )}
                                          </td>
                                        )}
                                      </tr>
                                    ))}
                                  </tbody>
                                )}
                              </table>
                            </div>
                          </>
                        ) : (
                          <p
                            className="flex flex-col items-center justify-center h-40 rounded-lg"
                          >
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
                        )}
                      </div>
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

export default KilnMaster;
