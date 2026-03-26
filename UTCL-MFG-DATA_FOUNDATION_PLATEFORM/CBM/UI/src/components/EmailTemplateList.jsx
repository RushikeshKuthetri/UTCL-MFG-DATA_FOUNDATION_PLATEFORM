// import axios from "axios";
// import { AuthenticatedTemplate } from "@azure/msal-react";
// import { useState, useEffect } from "react";
// import "../styles/templateList.css";
// import { config } from "../config";
// import { Button, Table } from "react-bootstrap";
// import Loader from "react-js-loader";
// import { toast } from "react-toastify";
// import { BsEyeFill } from "react-icons/bs";
// import { MdDeleteForever, MdModeEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";
// import { FiCopy } from "react-icons/fi";
// import {accessLogApi} from "../utils/AccessLogApi"

// export const EmailTemplateList = () => {
//   const loader = (
//     <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={15}
//     />
//   );

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteModalData, setDeleteModalData] = useState();
//   const [nodataFlag, setNodataFlag] = useState(false);
//   const [tableLoader, setTableLoader] = useState(false);
//   const [templateData, setTemplateData] = useState({});
//   const [submitLoader, setSubmitLoader] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     accessLogCBM()
//     getTemplateData();
//   }, []);
//   const accessLogCBM=()=> {
//   let payload = {
//     userId: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//     ip: "",
//     module: "CBM",
//     plant: "-",
//     url: window.location.href,
//     options: "",
//     plant_or_section: "CBM",
//   };
//   accessLogApi(payload)
// }
//   const handleDeleteModalClose = () => {
//     setShowDeleteModal(false);
//   };
//   const handleDeleteModalShow = (data) => {
//     setDeleteModalData(data);
//     setShowDeleteModal(true);
//   };
//   const getTemplateData = () => {
//     let payload = {
//       userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//     };
//     setTableLoader(true)
//     setNodataFlag(false);
//     axios
//       .post(config.BaseUrl + "/cbm/template/getEmailTemplateData", payload, {
//         headers: {
//           Authorization: `Bearer ${
//             JSON.parse(localStorage.getItem("login"))?.token
//           }`,
//         },
//       })
//       .then((res) => {
//         setTableLoader(false)
//         res = res.data.result;
//         if (res === "No Records Found") {
//           setNodataFlag(true);
//           setTemplateData([]);
//         } else {
//           res = res.sort((a, b) => {
//             return new Date(b.Timestamp) - new Date(a.Timestamp);
//           });
//           setTemplateData(res);
//         }
//       })
//       .catch((err) => {
//         setTableLoader(false)
//         setNodataFlag(true);
//         toast.error(err?.response?.data?.message  ? err?.response?.data?.message : err.message);
//       });
//   };
//   const DeleteTemplate = () => {
//     let payload = {
//       userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//       TimeStamp: deleteModalData.Timestamp,
//     };
//     handleDeleteModalClose();
//     setSubmitLoader(deleteModalData.Timestamp);
//     axios
//       .post(config.BaseUrl + "/cbm/template/deleteEmailTemplate", payload, {
//         headers: {
//           Authorization: `Bearer ${
//             JSON.parse(localStorage.getItem("login"))?.token
//           }`,
//         },
//       })
//       .then((res) => {
//         setSubmitLoader("");
//         handleDeleteModalClose();
//         getTemplateData();
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };

//   const columns = [
//     {
//       title: "Email Template Name",
//       field: "EmailTemplateName",
//       key: "1",
//     },
//     // { title: "PlantName", field: "PlantName", searchable: false, key: "2" },
//     {
//       title: "Use Case",
//       field: "UseCaseTemplate",
//       key: "2",
//     },
//     {
//       title: "Subject",
//       field: "Subject",
//       key: "3",
//     },
//     // {
//     //   title: "Recipients",
//     //   field: "Recipients",
//     //   key: "5",
//     // },
//     {
//       title: "Actions",
//       field: "",
//       key: "5",
//     },
//   ];
//   const HeaderRender = () => {
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
//   const viewTable = () => {
//     return (
//       <tbody>
//         {templateData.map((val, index) => {
//           return (
//             <tr key={index}>
//               {columns.map((v1, i1) => {
//                 if (v1.field !== "") {
//                   return <td key={i1}>{val[v1.field]}</td>;
//                 } else {
//                   return (
//                     <td key={i1}>
//                       <div
//                         style={{
//                           display: " flex",
//                           justifyContent: "space-evenly",
//                         }}
//                       >
//                         {/* <BsEyeFill /> */}
//                         <MdModeEdit
//                           onClick={() => {
//                             // sessionStorage.setItem(
//                             //   "editEmailTemplate",
//                             //   JSON.stringify(val)
//                             // );
//                             // navigate("/editEmailTemplate");
//                             navigate("/editEmailTemplate", {
//                               state: { rowdata: val, EditFlag: true },
//                             });
//                           }}
//                         />

//                         {submitLoader === val.Timestamp ? (
//                           loader
//                         ) : (
//                           <MdDeleteForever
//                             onClick={() => handleDeleteModalShow(val)}
//                           />
//                         )}
//                         <FiCopy
//                           onClick={() => {
//                             navigate("/EmailTemplate", {
//                               state: { copyData: val, EditFlag: true },
//                             });
//                           }}
//                         />
//                       </div>
//                     </td>
//                   );
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
//           Are You Sure Want to delete {deleteModalData?.EmailTemplateName}?
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
//       <div className="dash-top pb-2">
//         <div className="mycard mt-2">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h4 className="mb-0">Email Template List</h4>
//             <button
//               className="btn btnfrst mr-1"
//               onClick={() => {
//                 navigate("/EmailTemplate");
//               }}
//             >
//               Create Email Template
//             </button>
//           </div>
//           {/* <div className="TabelContainer"></div> */}
//           <Table responsive className="table-design">
//             {HeaderRender()}
//             {templateData.length > 0 && viewTable()}
//             {DeleteModal()}
//           </Table>
//           {tableLoader &&   <Loader
//       type="spinner-circle"
//       bgColor={"#000000"}
//       title={"bubble-scale"}
//       color={"#FFFFFF"}
//       size={50}
//     />}
//           {nodataFlag && (
//             <div style={{ display: "flex", justifyContent: " center" }}>
//               No Record Found
//             </div>
//           )}
//         </div>
//       </div>
//     </AuthenticatedTemplate>
//   );
// };





import axios from "axios";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { useState, useEffect } from "react";
import "../styles/templateList.css";
import { config } from "../config";
import { Button, Table } from "react-bootstrap";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { FiTrash2, FiCopy } from "react-icons/fi";
import { TbEdit } from "react-icons/tb"
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { accessLogApi } from "../utils/AccessLogApi"

export const EmailTemplateList = () => {
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={15}
    />
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState();
  const [nodataFlag, setNodataFlag] = useState(false);
  const [tableLoader, setTableLoader] = useState(false);
  const [templateData, setTemplateData] = useState({});
  const [submitLoader, setSubmitLoader] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    accessLogCBM()
    getTemplateData();
  }, []);
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
    accessLogApi(payload)
  }
  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteModalShow = (data) => {
    setDeleteModalData(data);
    setShowDeleteModal(true);
  };
  const getTemplateData = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
    };
    setTableLoader(true)
    setNodataFlag(false);
    axios
      .post(config.BaseUrl + "/cbm/template/getEmailTemplateData", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        setTableLoader(false)
        res = res.data.result;
        if (res === "No Records Found") {
          setNodataFlag(true);
          setTemplateData([]);
        } else {
          res = res.sort((a, b) => {
            return new Date(b.Timestamp) - new Date(a.Timestamp);
          });
          setTemplateData(res);
        }
      })
      .catch((err) => {
        setTableLoader(false)
        setNodataFlag(true);
        toast.error(err?.response?.data?.message ? err?.response?.data?.message : err.message);
      });
  };
  const DeleteTemplate = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
      TimeStamp: deleteModalData.Timestamp,
    };
    handleDeleteModalClose();
    setSubmitLoader(deleteModalData.Timestamp);
    axios
      .post(config.BaseUrl + "/cbm/template/deleteEmailTemplate", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        setSubmitLoader("");
        handleDeleteModalClose();
        getTemplateData();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const columns = [
    {
      title: "Email Template Name",
      field: "EmailTemplateName",
      key: "1",
    },
    // { title: "PlantName", field: "PlantName", searchable: false, key: "2" },
    {
      title: "Use Case",
      field: "UseCaseTemplate",
      key: "2",
    },
    {
      title: "Subject",
      field: "Subject",
      key: "3",
    },
    // {
    //   title: "Recipients",
    //   field: "Recipients",
    //   key: "5",
    // },
    {
      title: "Actions",
      field: "",
      key: "5",
    },
  ];
  const HeaderRender = () => {
    return (
      <thead className="bg-gradient-to-r from-orange-400 to-orange-300 text-black">
        <tr>
          {columns.map((val, index) => {
            if (val.title === "Actions") {
              return (
                <th className="
                  text-[14px]
                  text-center
                  px-6
                  py-2
                  font-semibold
                  whitespace-nowrap
                  border-b
                  border-[color:var(--form-border)]
                " key={index}>
                  {val.title}
                </th>
              );
            }
            return <th key={index}
              className="
                text-[14px]
                text-left
                px-6
                py-2
                font-semibold
                whitespace-nowrap
                border-b
                border-[color:var(--form-border)]
              "
            >{val.title}</th>;
          })}
        </tr>
      </thead>
    );
  };
  const viewTable = () => {
    return (
      <tbody className="border-b border-[color:var(--form-border)]">
        {templateData.map((val, index) => {
          return (
            <tr key={index} className="
             border-b
            border-[var(--form-border)]
            hover:bg-[var(--table-hover-bg,rgba(0,0,0,0.03))]
            transition-colors
          "
            >
              {columns.map((v1, i1) => {
                if (v1.field !== "") {
                  return <td key={i1} className="
                    px-6
                    py-2
                    text-sm
                    text-[var(--text-color)]
                    whitespace-nowrap
                  ">{val[v1.field]}</td>;
                } else {
                  return (
                    <td key={i1} className="px-6 py-2">
                      <div className="flex justify-center gap-4 text-lg">
                        {/* <BsEyeFill /> */}
                        <TbEdit color="#8A38F5"
                          className="
                        cursor-pointer
                        text-[color:var(--icon-edit)]
                        hover:scale-110
                        transition
                      "
                          onClick={() => {
                            // sessionStorage.setItem(
                            //   "editEmailTemplate",
                            //   JSON.stringify(val)
                            // );
                            // navigate("/editEmailTemplate");
                            navigate("/editEmailTemplate", {
                              state: { rowdata: val, EditFlag: true },
                            });
                          }}
                        />

                        {submitLoader === val.Timestamp ? (
                          loader
                        ) : (
                          <FiTrash2
                            color=" #FF2222"
                            className="
                          cursor-pointer
                          text-[color:var(--icon-delete)]
                          hover:scale-110
                          transition
                        "
                            onClick={() => handleDeleteModalShow(val)}
                          />
                        )}
                        <FiCopy
                          color="var(--text-color)"
                          className="
                        cursor-pointer
                        text-[color:var(--icon-copy)]
                        hover:scale-110
                        transitio
                      "
                          onClick={() => {
                            navigate("/EmailTemplate", {
                              state: { copyData: val, EditFlag: true },
                            });
                          }}
                        />
                      </div>
                    </td>
                  );
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
              {deleteModalData?.EmailTemplateName}
            </span>
            ?
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-3">

            {/* Cancel Button */}
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
              duration-200
              hover:bg-[var(--button-hover-bg)]
            "
            >
              Cancel
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
              duration-200
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
      <div className="w-full h-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between -mt-1">
           <h2 className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-1 -ml-0.5">
              Email Template List</h2>
            <button
              className="
    border
    !border-[var(--button-border)]
    bg-[var(--button-bg)]
    text-[14px]
    font-medium
    px-2 py-1
    rounded-lg
    transition
    cursor-pointer
    hover:bg-[var(--button-hover-bg)]
    text-[var(--text-color)]
  "
              onClick={() => {
                navigate("/EmailTemplate");
              }}
            >
              Create Email Template
            </button>
          </div>
          <div className="
           w-full
  overflow-x-auto
  rounded-xl
  border
  border-[color:var(--form-border)]
  bg-[color:var(--card-bg)]
">

            <table className="w-full !mb-0">
              {HeaderRender()}
              {templateData.length > 0 && viewTable()}
              {DeleteModal()}
            </table>
          </div>
          {tableLoader &&
            <div className="flex justify-center items-center py-6">
              <Loader
                type="spinner-circle"
                bgColor={"#000000"}
                title={"bubble-scale"}
                color={"#FFFFFF"}
                size={50}
              />
            </div>
          }
          {nodataFlag && (
            <div style={{ display: "flex", justifyContent: " center" }}>
              No Record Found
            </div>
          )}
        </div>
      </div>
    </AuthenticatedTemplate>
  );
};
