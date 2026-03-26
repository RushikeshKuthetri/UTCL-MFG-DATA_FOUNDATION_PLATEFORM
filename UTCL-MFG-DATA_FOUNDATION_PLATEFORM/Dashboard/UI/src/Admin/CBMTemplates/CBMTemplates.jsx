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
// import MaterialTable from "material-table";
// import { accessLogApi } from "../../utils/accessLogApi";

// const CBMTemplates = () => {
//   const { token, setToken } = useToken();

//   const loader = (
//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={50}
//     />
//   );

//   const [submitLoader, setSubmitLoader] = useState(false);
//   const [apiError, setApiError] = useState("");

//   const [TotalPage, setTotalPage] = useState(1);
//   const [activePage, setActivePage] = useState(1);
//   const [templateData, setTemplateData] = useState([]);
//   const navigate = useNavigate();
//   // useEffect(() => {
//   //   if (!sessionStorage.getItem("token")) {
//   //     window.location.reload(true);
//   //     navigate("/");
//   //   }
//   // }, []);

//   // const setAlertData = (data) => {
//   //   let tempPlantValues = {};
//   //   let tempCardValues = { ...plantCardValues };
//   //   let newTempCardValues = {};
//   //   data.map((val) => {
//   //     tempPlantValues[val.Plant_Name] = {
//   //       label: val.Plant_Name,
//   //       value: val.Plant_Name,
//   //     };
//   //     if (!tempPlantValues[val.Plant_Name]) {
//   //       newTempCardValues[val.Plant_Name] = {
//   //         plantName: val.Plant_Name,
//   //         timeInterval: 0,
//   //         isActive: false,
//   //         reciepients: [],
//   //         recipientInput: "",
//   //         recipientError: "",
//   //         submitLoader: false,
//   //         isChanged: false,
//   //       };
//   //     } else {
//   //       newTempCardValues[val.Plant_Name] = {
//   //         plantName: val.Plant_Name,
//   //         timeInterval: val.Interval.split("m")[0],
//   //         isActive: val.IsActive,
//   //         reciepients:
//   //           val.Recipient === ""
//   //             ? []
//   //             : val.Recipient.replaceAll("'", "").split(";"),
//   //         recipientInput: "",
//   //         recipientError: "",
//   //         submitLoader: false,
//   //         isChanged: false,
//   //       };
//   //     }
//   //   });
//   //   // console.log(newTempCardValues);
//   //   setPlantCardValues(newTempCardValues);
//   //   setSelectedPlantVlaues(Object.values(tempPlantValues).sort());
//   // };
//   const getAllTemplates = async () => {
//     const data = {
//       superAdminid: token.UserID,
//     };
//     try {
//       await axios
//         .post(
//           process.env.REACT_APP_BASE_URL + "adminSuper/templateDetails",
//           data,
//           {
//             headers: { Authorization: `Bearer ${token.token}` },
//           }
//         )
//         .then((res) => {
//           // console.log(res?.data?.data, "ress");
//           res = res?.data?.data;
//           if (res === "No Records Found") {
//             // console.log(res, "resssssssssssssssss");
//             setTemplateData([]);
//           } else {
//             // let TotalCount = Math.ceil(res.shift().Count / 100);
//             // setTotalPage(TotalCount);
//             // res.map((val, index) => {
//             //   val.ToRecipients = val.ToRecipients.split(",");
//             // });
//             res = res.sort((a, b) => {
//               return new Date(b.Timestamp) - new Date(a.Timestamp);
//             });
//             setTemplateData(res);
//           }
//           // setAlertData(res?.data?.data);
//         })
//         .catch((err) => {
//           // console.log(err, "err");
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
//   const upadteTemplateData = async (newData, oldData) => {
//     const data = {
//       superAdminid: token.UserID,
//       TempletName: oldData.TemplateName,
//       UseCase: oldData.UseCase,
//       UserId: oldData.UserId,
//       PlantName: oldData.PlantName,
//       newUserID: newData.UserId,
//       newSatus: newData.Status,
//     };
//     try {
//       await axios
//         .post(
//           process.env.REACT_APP_BASE_URL + "adminSuper/templateUpdate",
//           data,
//           {
//             headers: { Authorization: `Bearer ${token.token}` },
//           }
//         )
//         .then((res) => {
//           // console.log(res, "ress");
//           // res = res?.data?.data;
//           if (res?.data?.status === "success") {
//             toast.success("Template Updated Successfully");
//             const dataUpdate = [...templateData];
//             const index = oldData.tableData.id;
//             dataUpdate[index] = newData;
//             setTemplateData([...dataUpdate]);
//           }
//           //  else {
//           //   // let TotalCount = Math.ceil(res.shift().Count / 100);
//           //   // setTotalPage(TotalCount);
//           //   // res.map((val, index) => {
//           //   //   val.ToRecipients = val.ToRecipients.split(",");
//           //   // });
//           //   res = res.sort((a, b) => {
//           //     return new Date(b.Timestamp) - new Date(a.Timestamp);
//           //   });
//           //   setTemplateData(res);
//           // }
//           // setAlertData(res?.data?.data);
//         })
//         .catch((err) => {
//           // console.log(err, "err");
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
//   const deleteTemplateData = async (oldData) => {
//     const data = {
//       superAdminid: token.UserID,
//       TempletName: oldData.TemplateName,
//       UseCase: oldData.UseCase,
//       UserId: oldData.UserId,
//       PlantName: oldData.PlantName,
//     };
//     try {
//       await axios
//         .post(
//           process.env.REACT_APP_BASE_URL + "adminSuper/templateDelete",
//           data,
//           {
//             headers: { Authorization: `Bearer ${token.token}` },
//           }
//         )
//         .then((res) => {
//           // console.log(res, "ress");
//           // res = res?.data?.data;
//           if (res?.data?.status === "success") {
//             toast.success("Template Deleted Successfully");
//             const dataDelete = [...templateData];
//             const index = oldData.tableData.id;
//             dataDelete.splice(index, 1);
//             setTemplateData([...dataDelete]);
//           }
//           //  else {
//           //   // let TotalCount = Math.ceil(res.shift().Count / 100);
//           //   // setTotalPage(TotalCount);
//           //   // res.map((val, index) => {
//           //   //   val.ToRecipients = val.ToRecipients.split(",");
//           //   // });
//           //   res = res.sort((a, b) => {
//           //     return new Date(b.Timestamp) - new Date(a.Timestamp);
//           //   });
//           //   setTemplateData(res);
//           // }
//           // setAlertData(res?.data?.data);
//         })
//         .catch((err) => {
//           // console.log(err, "err");
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

//   useEffect(()=>{
//     accessLogDashboard()
//   },[])
//   useEffect(() => {
//     getAllTemplates();
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



//   const columns = [
//     {
//       title: "User ID",
//       field: "UserId",
//       key: "1",
//     },
//     {
//       title: "Template Name",
//       field: "TemplateName",
//       key: "2",
//       editable: "never",
//     },
//     {
//       title: "Plant",
//       field: "PlantName",
//       key: "3",
//       editable: "never",
//     },
//     {
//       title: "Use Case",
//       field: "UseCase",
//       key: "4",
//       editable: "never",
//     },
//     {
//       title: "Status",
//       field: "Status",
//       key: "5",

//       lookup: { Active: "Active", Inactive: "Inactive" },
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <div className="dash-top">
//         <MaterialTable
//           editable={{
//             onRowUpdate: (newData, oldData) =>
//               upadteTemplateData(newData, oldData),

//             onRowDelete: (oldData) => deleteTemplateData(oldData),

//           }}

//           localization={{
//             body: {
//               editRow: {
//                 deleteText: "Are You Sure You Want to delete This Template",
//               },
//             },
//           }}
//           columns={columns}
//           data={templateData}
//           title="Template List"

//           options={{
//             sorting: true,
//             searchAutoFocus: true,
//             pageSize: 10,
//             pageSizeOptions: [],

//             actionsColumnIndex: -1,

//             headerStyle: {

//               color: "#FFF",
//               textAlign: "center",
//             },
//           }}
//         />
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default CBMTemplates;




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
import MaterialTable from "material-table";
import { accessLogApi } from "../../utils/accessLogApi";

const CBMTemplates = () => {
  const { token, setToken } = useToken();

  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={50}
    />
  );

  const [submitLoader, setSubmitLoader] = useState(false);
  const [apiError, setApiError] = useState("");

  const [TotalPage, setTotalPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [templateData, setTemplateData] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!sessionStorage.getItem("token")) {
  //     window.location.reload(true);
  //     navigate("/");
  //   }
  // }, []);

  // const setAlertData = (data) => {
  //   let tempPlantValues = {};
  //   let tempCardValues = { ...plantCardValues };
  //   let newTempCardValues = {};
  //   data.map((val) => {
  //     tempPlantValues[val.Plant_Name] = {
  //       label: val.Plant_Name,
  //       value: val.Plant_Name,
  //     };
  //     if (!tempPlantValues[val.Plant_Name]) {
  //       newTempCardValues[val.Plant_Name] = {
  //         plantName: val.Plant_Name,
  //         timeInterval: 0,
  //         isActive: false,
  //         reciepients: [],
  //         recipientInput: "",
  //         recipientError: "",
  //         submitLoader: false,
  //         isChanged: false,
  //       };
  //     } else {
  //       newTempCardValues[val.Plant_Name] = {
  //         plantName: val.Plant_Name,
  //         timeInterval: val.Interval.split("m")[0],
  //         isActive: val.IsActive,
  //         reciepients:
  //           val.Recipient === ""
  //             ? []
  //             : val.Recipient.replaceAll("'", "").split(";"),
  //         recipientInput: "",
  //         recipientError: "",
  //         submitLoader: false,
  //         isChanged: false,
  //       };
  //     }
  //   });
  //   // console.log(newTempCardValues);
  //   setPlantCardValues(newTempCardValues);
  //   setSelectedPlantVlaues(Object.values(tempPlantValues).sort());
  // };
  const getAllTemplates = async () => {
    const data = {
      superAdminid: token.UserID,
    };
    try {
      await axios
        .post(
          process.env.REACT_APP_BASE_URL + "adminSuper/templateDetails",
          data,
          {
            headers: { Authorization: `Bearer ${token.token}` },
          }
        )
        .then((res) => {
          // console.log(res?.data?.data, "ress");
          res = res?.data?.data;
          if (res === "No Records Found") {
            // console.log(res, "resssssssssssssssss");
            setTemplateData([]);
          } else {
            // let TotalCount = Math.ceil(res.shift().Count / 100);
            // setTotalPage(TotalCount);
            // res.map((val, index) => {
            //   val.ToRecipients = val.ToRecipients.split(",");
            // });
            res = res.sort((a, b) => {
              return new Date(b.Timestamp) - new Date(a.Timestamp);
            });
            setTemplateData(res);
          }
          // setAlertData(res?.data?.data);
        })
        .catch((err) => {
          // console.log(err, "err");
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
  const upadteTemplateData = async (newData, oldData) => {
    const data = {
      superAdminid: token.UserID,
      TempletName: oldData.TemplateName,
      UseCase: oldData.UseCase,
      UserId: oldData.UserId,
      PlantName: oldData.PlantName,
      newUserID: newData.UserId,
      newSatus: newData.Status,
    };
    try {
      await axios
        .post(
          process.env.REACT_APP_BASE_URL + "adminSuper/templateUpdate",
          data,
          {
            headers: { Authorization: `Bearer ${token.token}` },
          }
        )
        .then((res) => {
          // console.log(res, "ress");
          // res = res?.data?.data;
          if (res?.data?.status === "success") {
            toast.success("Template Updated Successfully");
            const dataUpdate = [...templateData];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setTemplateData([...dataUpdate]);
          }
          //  else {
          //   // let TotalCount = Math.ceil(res.shift().Count / 100);
          //   // setTotalPage(TotalCount);
          //   // res.map((val, index) => {
          //   //   val.ToRecipients = val.ToRecipients.split(",");
          //   // });
          //   res = res.sort((a, b) => {
          //     return new Date(b.Timestamp) - new Date(a.Timestamp);
          //   });
          //   setTemplateData(res);
          // }
          // setAlertData(res?.data?.data);
        })
        .catch((err) => {
          // console.log(err, "err");
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
  const deleteTemplateData = async (oldData) => {
    const data = {
      superAdminid: token.UserID,
      TempletName: oldData.TemplateName,
      UseCase: oldData.UseCase,
      UserId: oldData.UserId,
      PlantName: oldData.PlantName,
    };
    try {
      await axios
        .post(
          process.env.REACT_APP_BASE_URL + "adminSuper/templateDelete",
          data,
          {
            headers: { Authorization: `Bearer ${token.token}` },
          }
        )
        .then((res) => {
          // console.log(res, "ress");
          // res = res?.data?.data;
          if (res?.data?.status === "success") {
            toast.success("Template Deleted Successfully");
            const dataDelete = [...templateData];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setTemplateData([...dataDelete]);
          }
          //  else {
          //   // let TotalCount = Math.ceil(res.shift().Count / 100);
          //   // setTotalPage(TotalCount);
          //   // res.map((val, index) => {
          //   //   val.ToRecipients = val.ToRecipients.split(",");
          //   // });
          //   res = res.sort((a, b) => {
          //     return new Date(b.Timestamp) - new Date(a.Timestamp);
          //   });
          //   setTemplateData(res);
          // }
          // setAlertData(res?.data?.data);
        })
        .catch((err) => {
          // console.log(err, "err");
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

  useEffect(() => {
    accessLogDashboard()
  }, [])
  useEffect(() => {
    getAllTemplates();
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



  const columns = [
    {
      title: "User ID",
      field: "UserId",
      key: "1",
    },
    {
      title: "Template Name",
      field: "TemplateName",
      key: "2",
      editable: "never",
    },
    {
      title: "Plant",
      field: "PlantName",
      key: "3",
      editable: "never",
    },
    {
      title: "Use Case",
      field: "UseCase",
      key: "4",
      editable: "never",
    },
    {
      title: "Status",
      field: "Status",
      key: "5",

      lookup: { Active: "Active", Inactive: "Inactive" },
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

      {/* <div className="dash-top"> */}

      <div className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 -ml-0.5">
        <span> CBM Template List</span>
      </div>

      <div className="w-full overflow-x-auto mt-2 rounded-xl border border-[var(--input-enable-border)]">
        <MaterialTable

          editable={{
            onRowUpdate: (newData, oldData) =>
              upadteTemplateData(newData, oldData),

            onRowDelete: (oldData) => deleteTemplateData(oldData),

          }}

          localization={{
            body: {
              editRow: {
                deleteText: "Are You Sure You Want to delete This Template",
              },
            },
          }}
          columns={columns}
          data={templateData}
          title=""

          options={{
            sorting: true,
            searchAutoFocus: true,
            pageSize: 10,
            pageSizeOptions: [],

            actionsColumnIndex: -1,
            maxBodyHeight: "calc(100vh - 200px)",
            stickyHeader: true,

            cellStyle: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 120,
            },
            /* HEADER */
            headerStyle: {
              background: "var(--table-header-bg)",
              // orange-400 → orange-300
              color: "black", // theme text
              fontWeight: 600,
              fontSize: "14px",
              borderBottom: "1px solid var(--form-border)",
              borderTop: "1px solid var(--form-border)",
              textAlign: "left",
              position: "sticky",
              top: 0,
              zIndex: 1,
            },
            /* ROW */
            rowStyle: {
              fontSize: "13px",
              borderBottom: "1px solid var(--form-border)",
              backgroundColor: "var(--bg-main-container)",
              color: "var(--text-color)",
            },

            /* SEARCH */
            searchFieldStyle: {
              backgroundColor: "var(--search-bg)",
              border: "1px solid var(--search-border)",
              color: "var(--text-color)",
            },

            searchFieldVariant: "standard",
          }}

        />
      </div>
      {/* </div> */}
      <ToastContainer />
    </>
  );
};

export default CBMTemplates;
