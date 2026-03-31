// import axios from "axios";
// import { useState, useEffect } from "react";
// import "../../css/ReportList.css";
// import { Button, Pagination, Table } from "react-bootstrap";
// import Loader from "react-js-loader";
// import { toast } from "react-toastify";
// import { BsEyeFill } from "react-icons/bs";
// import { MdDeleteForever, MdModeEdit } from "react-icons/md";
// import { FiCopy } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";
// import { BASE_URL } from "../../base";
// import { AuthenticatedTemplate } from "@azure/msal-react";
// import moment from "moment/moment";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import useToken from "../utils/useToken";
// import { FaEye } from "react-icons/fa";
// export const ReportList = () => {
//   const loader = (
//     // <div style={{width:"20px"}}>

//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={15}
//     />
//     // </div>
//   );

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteModalData, setDeleteModalData] = useState();
//   const [nodataFlag, setNodataFlag] = useState(false);
//   const [reportTableData, setReportTableData] = useState([]);
//   const [templateData, setTemplateData] = useState([]);
//   const [submitLoader, setSubmitLoader] = useState("");
//   const [submitCopyLoader, setSubmitCopyLoader] = useState("");
//   const [TotalPage, setTotalPage] = useState(1);
//   const [activePage, setActivePage] = useState(1);
//   const [payloadData, setPayloadData] = useState({});
//   const [reportTableLoader, setReportTableLoader] = useState(false);
//   // const { token, setToken } = useToken();
//   const navigate = useNavigate();
//   useEffect(() => {
//     getReportData();
//   }, []);
//   // useEffect(() => {
//   //   if (templateData.length > 0) {
//   //     // reportValuesTable();
//   //   }
//   // }, [activePage, payloadData]);

//   const handleDeleteModalClose = () => {
//     setShowDeleteModal(false);
//   };
//   const handleDeleteModalShow = (data) => {
//     setDeleteModalData(data);
//     setShowDeleteModal(true);
//   };

//   const getReportData = () => {
//     if (!JSON.parse(localStorage.getItem("login"))) {
//       return;
//     }
//     const { token, email } = JSON.parse(localStorage.getItem("login"));
//     let payload = {
//       userid: email,
//     };
//     // console.log(token?.token);
//     setNodataFlag(false);
//     axios
//       .post(BASE_URL + "cbm/template/getReportData", payload, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         res = res.data.result;
//         // console.log(res, "ressssssss");
//         if (res === "No Records Found") {
//           setNodataFlag(true);
//           setTemplateData([]);
//         } else {
//           res = res.sort((a, b) => {
//             return new Date(b.Timestamp) - new Date(a.Timestamp);
//           });
//           setPayloadData(res[0]);
//           setTemplateData(res);
//         }
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };
//   const DeleteTemplate = () => {
//     const { token, email } = JSON.parse(localStorage.getItem("login"));
//     let payload = {
//       userid: email,
//       TimeStamp: moment.utc(deleteModalData.Timestamp).format("YYYY-MM-DD HH:mm:ss"),
//     };
//     handleDeleteModalClose();
//     setSubmitLoader(deleteModalData.Timestamp);
//     axios
//       .post(BASE_URL + "cbm/template/deleteReportData", payload, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         setSubmitLoader("");
//         handleDeleteModalClose();
//         getReportData();
//       })
//       .catch((err) => {
//         setSubmitLoader("");
//         toast.error(err.message);
//       });
//   };

//   const columns = [
//     {
//       title: "Template Name",
//       field: "ReportTemplateName",
//       key: "1",
//     },
//     { title: "PlantName", field: "Plant", searchable: false, key: "2" },
//     {
//       title: "Period",
//       field: "EmailFrequency",
//       key: "4",
//       // renderer: (val, index) => {
//       //   return (
//       //     <td key={index}>
//       //       { val.EmailFrequency}
//       //     </td>
//       //   );
//       // },
//     },
//     {
//       title: "Mail Scheduled",
//       field: "IsScheduler",
//       key: "3",
//       renderer: (val, index) => {
//         return (
//           <td key={index}>
//             {val.IsScheduler
//               ? "Yes"
//               : val.EmailFrequency === "Custom"
//                 ? "-"
//                 : "No"}
//           </td>
//         );
//       },
//     },

//     {
//       title: "Actions",
//       field: "",
//       key: "5",
//       renderer: (val, index) => {
//         return (
//           <td key={index}>
//             <div
//               style={{
//                 display: " flex",
//                 justifyContent: "space-evenly",
//               }}
//             >
//               {/* <FaEye
//                 onClick={() => {
//                   navigate("/Reports", {
//                     state: { rowdata: val, EditFlag: true },
//                   });
//                 }}
//               /> */}
//               <MdModeEdit
//                 onClick={() => {
//                   navigate("/editreportspage", {
//                     state: { rowdata: val, EditFlag: true },
//                   });
//                 }}
//               />

//               {submitLoader === val.Timestamp ? (
//                 loader
//               ) : (
//                 <MdDeleteForever onClick={() => handleDeleteModalShow(val)} />
//               )}
//               <FiCopy
//                 onClick={() => {
//                   navigate("/reportspage", {
//                     state: { copyData: val, EditFlag: true },
//                   });
//                 }}
//               />
//             </div>
//           </td>
//         );
//       },
//     },
//   ];
//   const reportTableColumns = [
//     {
//       title: "S. No",
//       field: "Row_Number",
//       key: "1",
//     },
//     { title: "TimeStamp", field: "TimeStamp", key: "2" },
//     {
//       title: "Tag Description",
//       field: "Id",
//       key: "3",
//       renderer: (value, index) => {
//         return <td key={index}>{value.replaceAll("@@@", ",")}</td>;
//       },
//     },
//     {
//       title: "Value",
//       field: "Value",
//       key: "4",
//     },
//   ];
//   const HeaderRender = (columns) => {
//     return (
//       <thead>
//         <tr>
//           {columns.map((val, index) => {
//             if (val.title === "Actions") {
//               return (
//                 <th style={{ textAlign: "center" }} key={index}>
//                   {val.title}
//                 </th>
//               );
//             }
//             return <th key={index}>{val.title}</th>;
//           })}
//         </tr>
//       </thead>
//     );
//   };
//   const viewTable = (data) => {
//     return (
//       <tbody>
//         {data.map((val, index) => {
//           return (
//             <tr key={index}>
//               {columns.map((v1, i1) => {
//                 if (v1?.renderer) {
//                   return v1.renderer(val, i1);
//                 } else {
//                   return <td key={i1}>{val[v1.field]}</td>;
//                 }
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     );
//   };

//   const DeleteModal = () => {
//     return (
//       <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete Template</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are You Sure Want to delete {deleteModalData?.ReportTemplateName}?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleDeleteModalClose}>
//             Close
//           </Button>
//           <Button variant="danger" onClick={() => DeleteTemplate()}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   };

//   return (
//     <AuthenticatedTemplate>
//       <div className="dash-top" style={{ borderRadius: "0px" }}>
//         <div className="mycard mt-2">


//           <div className="tableTitle">
//             <h3>Report Template List</h3>
//             <button className="btn btnfrst"
//               onClick={() => {
//                 navigate("/reportspage");
//               }}
//             >
//               {" "}
//               Create Template
//             </button>
//           </div>
//           <div style={{ height: "40em", overflowY: "scroll" }}>
//             <Table responsive="sm">
//               {HeaderRender(columns)}
//               {templateData.length > 0 && viewTable(templateData)}
//               {DeleteModal()}
//             </Table>
//           </div>
//           {nodataFlag && (
//             <div style={{ display: "flex", justifyContent: " center" }}>
//               No Record Found
//             </div>
//           )}
//         </div>
//       </div>
//       {/* <div className="tableTitle">
//         <h5>Report Values</h5>
//       </div>
//       <div className="tableContainer">
//         <Table responsive="sm">
//           {HeaderRender(reportTableColumns)}
//           {reportTableLoader && (
//             <Loader
//               type="spinner-circle"
//               bgColor={"#000000"}
//               title={"bubble-scale"}
//               color={"#FFFFFF"}
//               size={50}
//             />
//           )}
//           {reportTableData.length > 0 && viewReportTable(reportTableData)}
//         </Table>
//         {reportTableData.length === 0 && !reportTableLoader && (
//           <div style={{ display: "flex", justifyContent: " center" }}>
//             No Record Found
//           </div>
//         )}
//       </div>
//       <div
//         className="d-flex"
//         style={{ alignItems: "center", marginBottom: "0px" }}
//       >
//         <Pagination>
//           <Pagination.First
//             onClick={() => {
//               setActivePage(1);
//             }}
//           />
//           <Pagination.Prev
//             onClick={() => {
//               if (activePage > 1) {
//                 setActivePage(activePage - 1);
//               }
//             }}
//           />

//           <Pagination.Item>{activePage}</Pagination.Item>
//           <Pagination.Next
//             onClick={() => {
//               if (activePage < TotalPage) setActivePage(activePage + 1);
//             }}
//           />
//           <Pagination.Last
//             onClick={() => {
//               setActivePage(TotalPage);
//             }}
//           />
//         </Pagination>{" "}
//         <label style={{ marginLeft: "10px", alignItems: "center" }}>
//           out of {TotalPage}
//         </label> */}
//       {/* </div> */}
//     </AuthenticatedTemplate>
//   );
// };













import axios from "axios";
import { useState, useEffect } from "react";
import "../../css/ReportList.css";
import { Button, Pagination, Table } from "react-bootstrap";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { BsEyeFill } from "react-icons/bs";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { BASE_URL } from "../../base";
import { AuthenticatedTemplate } from "@azure/msal-react";
import moment from "moment/moment";
// import "bootstrap/dist/css/bootstrap.min.css";
// import useToken from "../utils/useToken";
import { FaEye } from "react-icons/fa";
export const ReportList = () => {
  const loader = (
    // <div style={{width:"20px"}}>

    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={15}
    />
    // </div>
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState();
  const [nodataFlag, setNodataFlag] = useState(false);
  const [reportTableData, setReportTableData] = useState([]);
  const [templateData, setTemplateData] = useState([]);
  const [submitLoader, setSubmitLoader] = useState("");
  const [submitCopyLoader, setSubmitCopyLoader] = useState("");
  const [TotalPage, setTotalPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [payloadData, setPayloadData] = useState({});
  const [reportTableLoader, setReportTableLoader] = useState(false);
  // const { token, setToken } = useToken();
  const navigate = useNavigate();
  useEffect(() => {
    getReportData();
  }, []);
  // useEffect(() => {
  //   if (templateData.length > 0) {
  //     // reportValuesTable();
  //   }
  // }, [activePage, payloadData]);

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteModalShow = (data) => {
    setDeleteModalData(data);
    setShowDeleteModal(true);
  };

  const getReportData = () => {
    if (!JSON.parse(localStorage.getItem("login"))) {
      return;
    }
    const { token, email } = JSON.parse(localStorage.getItem("login"));
    let payload = {
      userid: email,
    };
    // console.log(token?.token);
    setNodataFlag(false);
    axios
      .post(BASE_URL + "cbm/template/getReportData", payload, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res = res.data.result;
        // console.log(res, "ressssssss");
        if (res === "No Records Found") {
          setNodataFlag(true);
          setTemplateData([]);
        } else {
          res = res.sort((a, b) => {
            return new Date(b.Timestamp) - new Date(a.Timestamp);
          });
          setPayloadData(res[0]);
          setTemplateData(res);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const DeleteTemplate = () => {
    const { token, email } = JSON.parse(localStorage.getItem("login"));
    let payload = {
      userid: email,
      TimeStamp: moment.utc(deleteModalData.Timestamp).format("YYYY-MM-DD HH:mm:ss"),
    };
    handleDeleteModalClose();
    setSubmitLoader(deleteModalData.Timestamp);
    axios
      .post(BASE_URL + "cbm/template/deleteReportData", payload, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSubmitLoader("");
        handleDeleteModalClose();
        getReportData();
      })
      .catch((err) => {
        setSubmitLoader("");
        toast.error(err.message);
      });
  };

  const columns = [
    {
      title: "Template Name",
      field: "ReportTemplateName",
      key: "1",
    },
    { title: "PlantName", field: "Plant", searchable: false, key: "2" },
    {
      title: "Period",
      field: "EmailFrequency",
      key: "4",
      // renderer: (val, index) => {
      //   return (
      //     <td key={index}>
      //       { val.EmailFrequency}
      //     </td>
      //   );
      // },
    },
    {
      title: "Mail Scheduled",
      field: "IsScheduler",
      key: "3",
      renderer: (val, index) => {
        return (
          <td key={index} className="
          px-6
          py-2
          text-left
      ">

            {val.IsScheduler
              ? "Yes"
              : val.EmailFrequency === "Custom"
                ? "-"
                : "No"}
          </td>
        );
      },
    },

    {
      title: "Actions",
      field: "",
      key: "5",
      renderer: (val, index) => {
        return (
          <td key={index}>
            <div
              style={{
                display: " flex",
                justifyContent: "space-evenly",
              }}
            >
              {/* <FaEye
                onClick={() => {
                  navigate("/Reports", {
                    state: { rowdata: val, EditFlag: true },
                  });
                }}
              /> */}
              <MdModeEdit
                className="text-[#8A38F5] cursor-pointer"
                onClick={() => {
                  navigate("/editreportspage", {
                    state: { rowdata: val, EditFlag: true },
                  });
                }}
              />

              {submitLoader === val.Timestamp ? (
                loader
              ) : (
                <MdDeleteForever className="text-[#FF2222] cursor-pointer" onClick={() => handleDeleteModalShow(val)} />
              )}
              <FiCopy
                className="text-[var(--text-color)] cursor-pointer"
                onClick={() => {
                  navigate("/reportspage", {
                    state: { copyData: val, EditFlag: true },
                  });
                }}
              />
            </div>
          </td>
        );
      },
    },
  ];
  const reportTableColumns = [
    {
      title: "S. No",
      field: "Row_Number",
      key: "1",
    },
    { title: "TimeStamp", field: "TimeStamp", key: "2" },
    {
      title: "Tag Description",
      field: "Id",
      key: "3",
      renderer: (value, index) => {
        return <td key={index}>{value.replaceAll("@@@", ",")}</td>;
      },
    },
    {
      title: "Value",
      field: "Value",
      key: "4",
    },
  ];
  const HeaderRender = (columns) => {
    return (
      <thead className="bg-gradient-to-r from-orange-400 to-orange-300 text-black">
        <tr>
          {columns.map((val, index) => {
            if (val.title === "Actions") {
              return (
                <th
                  key={index}
                  className="
                  text-[14px]
                  text-center
                  px-6
                  py-2
                  font-semibold
                  whitespace-nowrap
                  border-b
                  border-[var(--form-border)]
                "
                >
                  {val.title}
                </th>
              );
            }
            return <th
              key={index}
              className="
                text-[14px]
                text-left
                px-6
                py-2
                font-semibold
                whitespace-nowrap
                border-b
                border-[var(--form-border)]
              "
            >{val.title}</th>;
          })}
        </tr>
      </thead>
    );
  };
  const viewTable = (data) => {
    return (
      <tbody className="border-b border-[var(--form-border)]">
        {data.map((val, index) => {
          return (
            <tr
              key={index}
              className="
              border-b
              border-[var(--form-border)]
              transition
              hover:bg-[var(--table-row-hover)]
              text-left
            "
            >
              {columns.map((v1, i1) => {
                if (v1?.renderer) {
                  return v1.renderer(val, i1);
                } else {
                  return <td
                    key={i1}
                    className="
                      text-[13px]
                      px-6
                      py-2
                      whitespace-nowrap
                      text-[var(--table-text)]
                      text-left
                    "
                  >{val[v1.field]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };


  const DeleteModal = () => {
    if (!showDeleteModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">

        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={handleDeleteModalClose}
        />

        {/* MODAL CONTAINER */}
        <div
          className="
          relative
          w-full max-w-md
          mx-4
          rounded-2xl
          bg-[var(--card-bg)]
          border
          border-[var(--form-border)]
          shadow-[var(--card-shadow-onhover)]
          p-6
          transition-all
          duration-200
        "
        >

          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[var(--title)]">
              Delete Template
            </h3>

            <button
              onClick={handleDeleteModalClose}
              className="
              text-[var(--text-color)]
              hover:opacity-70
              transition
              text-xl
            "
            >
              ✕
            </button>
          </div>

          {/* BODY */}
          <div className="text-sm text-[var(--text-color)] mb-6 leading-relaxed">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-[var(--title)]">
              {deleteModalData?.ReportTemplateName}
            </span>
            ?
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-3">

            {/* Close Button */}
            <button
              onClick={handleDeleteModalClose}
              className="
              px-4 py-2
              rounded-lg
              border
              border-[var(--form-border)]
              bg-[var(--button-bg)]
              text-[var(--text-color)]
              transition-all
              hover:bg-[var(--button-hover-bg)]
            "
            >
              Close
            </button>

            {/* Delete Button */}
            <button
              onClick={DeleteTemplate}
              className="
              px-4 py-2
              rounded-lg
              border
              border-orange-800
              bg-orange-500
              text-white
              transition-all
              hover:bg-orange-600
            "
            >
              Delete
            </button>

          </div>
        </div>
      </div>
    );
  };

  return (
    <AuthenticatedTemplate>
      <div className="w-full flex flex-col gap-4">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-2 ml-1">
            Report Template List
          </h2>

          <button
            onClick={() => navigate("/reportspage")}
            className="
            px-3 py-1
            text-[14px]
            rounded-lg
           !border !border-[var(--button-border)]
           bg-[var(--submit-button-bg)]
            text-black
            transition-all focus:outline-none focus:ring-0 outline-none">
            Create Template
          </button>
        </div>

        {/* TABLE CONTAINER */}
        <div
          className="
          -mt-2
          w-full
          overflow-x-auto
          rounded-xl
          border
          border-[var(--form-border)]
          bg-[var( --bg-leftdrawer)]
        "
        >
          <table className="w-full min-w-[900px] border-collapse bg-[var( --bg-leftdrawer)]
 ">

            {/* Header */}
            {HeaderRender(columns)}

            {/* Body */}
            {templateData.length > 0 && viewTable(templateData)}

          </table>

          {DeleteModal()}
        </div>

        {/* No Data */}
        {nodataFlag && (
          <div className="flex justify-center py-6 text-[var(--text-color)]">
            No Record Found
          </div>
        )}

      </div>
    </AuthenticatedTemplate>
  );

};
