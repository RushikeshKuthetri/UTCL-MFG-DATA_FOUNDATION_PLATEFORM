import axios from "axios";
import { useState, useEffect } from "react";
// import "../styles/templateList.css";
// import { button, Table } from "react-bootstrap";
import { FiTrash2, FiCopy } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";
import { config } from "../config";
import { AuthenticatedTemplate } from "@azure/msal-react";
import moment from "moment";
import { accessLogApi } from "../utils/AccessLogApi";
export const TemplateList = () => {
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
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [CopyModalData, setCopyModalData] = useState();
  const [nodataFlag, setNodataFlag] = useState(false);

  const [templateData, setTemplateData] = useState([]);
  const [submitLoader, setSubmitLoader] = useState("");
  const [tableLoader, setTableLoader] = useState(false);
  const [submitCopyLoader, setSubmitCopyLoader] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    accessLogCBM();
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
    accessLogApi(payload);
  };
  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteModalShow = (data) => {
    setDeleteModalData(data);
    setShowDeleteModal(true);
  };
  const handleCopyModalClose = () => {
    setShowCopyModal(false);
  };
  const handleCopyModalShow = (data) => {
    let tempdata = { ...data };
    tempdata.TempletName = tempdata.TempletName + " - copy";
    setCopyModalData(tempdata);
    // console.log(data);
    setShowCopyModal(true);
  };
  const SendCopyData = () => {
    let postUrl = config.BaseUrl + "/cbm/template/sendTemplateData";
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
      templateName: CopyModalData.TempletName,
      PlantName: CopyModalData.PlantName,
      UseCase: CopyModalData.UseCase,
      FanName: CopyModalData.FanName,
      activeStatus: CopyModalData.Status,
      Parameters: CopyModalData.Parameters,
      conditions: CopyModalData.Conditions,
    };
    handleCopyModalClose();
    setSubmitCopyLoader(CopyModalData.Timestamp);
    axios
      .post(postUrl, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        res = res.data.result;
        toast.success("Template Cpoied Successfully.");
        handleCopyModalClose();
        setSubmitCopyLoader("");
        getTemplateData();
      })
      .catch((err) => {
        setSubmitCopyLoader("");
        toast.error(err.message);
      });
  };
  const getTemplateData = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
    };

    // console.log(token);
    setTableLoader(true);
    setNodataFlag(false);
    axios
      .post(config.BaseUrl + "/cbm/template/getTemplateData", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        setTableLoader(false);
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
        setTableLoader(false);
        setNodataFlag(true);
        toast.error(
          err?.response?.data?.message
            ? err?.response?.data?.message
            : err.message,
        );
      });
  };
  const DeleteTemplate = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
      TimeStamp: deleteModalData.Timestamp,
      templateName: deleteModalData.TemplateName,
      PlantName: deleteModalData.PlantName,
      UseCase: deleteModalData.UseCase,
    };
    // console.log(payload, deleteModalData, "fghjkl;");
    handleDeleteModalClose();
    setSubmitLoader(deleteModalData.Timestamp);
    axios
      .post(config.BaseUrl + "/cbm/template/deleteTemplate", payload, {
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
        setSubmitLoader("");
        toast.error(err.message);
      });
  };

  const columns = [
    {
      title: "Template Name",
      field: "TemplateName",
      key: "1",
    },
    { title: "PlantName", field: "PlantName", searchable: false, key: "2" },
    {
      title: "Use Case",
      field: "UseCase",
      key: "3",
    },
    {
      title: "Equipment Name",
      field: "FanName",
      key: "4",
    },
    {
      title: "Active Status",
      field: "Status",
      key: "5",
    },
    {
      title: "Actions",
      field: "",
      key: "6",
    },
  ];
  const HeaderRender = () => {
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
                  border-[color:var(--form-border)]
                "
                >
                  {val.title}
                </th>
              );
            }

            return (
              <th
                key={index}
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
              >
                {val.title}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };

  const viewTable = () => {
    return (
      <tbody className="border-b border-[color:var(--form-border)]">
        {templateData.map((val, index) => (
          <tr
            key={index}
            className="
               border-b
            border-[var(--form-border)]
            hover:bg-[var(--table-hover-bg,rgba(0,0,0,0.03))]
            transition-colors
          "
          >
            {columns.map((v1, i1) => {
              if (v1.field !== "") {
                return (
                  <td
                    key={i1}
                    className="
         px-6
                    py-2
                    text-sm
                    text-[var(--text-color)]
                    whitespace-nowrap
                  "
                  >
                    {v1.field === "Status" ? (
                      <span
                        className={`
            px-2 py-0.5
            rounded-full
            text-[12px]
            font-medium
            ${val.Status === "Active"
                            ? "bg-[var(--status-active-bg)] text-[var(--status-active-text)]"
                            : "bg-[var(--status-inactive-bg)] text-[var(--status-inactive-text)]"
                          }
          `}
                      >
                        {val.Status}
                      </span>
                    ) : (
                      val[v1.field]
                    )}
                  </td>
                );
              } else {
                return (
                  <td key={i1} className="px-6 py-2">
                    <div className="flex justify-center gap-4 text-lg">
                      <TbEdit
                        color="#8A38F5"
                        className="
                        cursor-pointer
                        text-[color:var(--icon-edit)]
                        hover:scale-110
                        transition
                      "
                        onClick={() =>
                          navigate("/editTemplate", {
                            state: { rowdata: val, EditFlag: true },
                          })
                        }
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
                        transition
                      "
                        onClick={() =>
                          navigate("/createTemplate", {
                            state: { copyData: val, EditFlag: true },
                          })
                        }
                      />
                    </div>
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  // const DeleteModal = () => {
  //   return (
  //     <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Delete Template</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         Are You Sure Want to delete {deleteModalData?.TempletName}?
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <button variant="secondary" onClick={handleDeleteModalClose}>
  //           Close
  //         </button>
  //         <button variant="danger" onClick={() => DeleteTemplate()}>
  //           Delete
  //         </button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // };

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
              {deleteModalData?.TemplateName}
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
          {/* HEADER */}
          <div className="flex justify-between -mt-2 -ml-2">
            <h2 className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 ml-1">
              Equipment Template List
            </h2>
            <div>
              <button
                onClick={() => navigate("/createTemplate")}
                className={`
    border border-[var(--button-border)]
    bg-[var(--button-bg)]
    text-[14px]
    font-medium
    px-2 py-1
    rounded-lg
    transition
    cursor-pointer
    hover:bg-[var(--button-hover-bg)]
    text-[var(--text-color)]
  `}
              >
                Create Template
              </button>
            </div>
          </div>
 
          {/* TABLE */}
          <div
            className="
          -mt-1
           w-full
  overflow-x-auto
  rounded-xl
  border
  border-[color:var(--form-border)]
  bg-[color:var(--card-bg)]
"
          >
            <table className="w-full !mb-0">
              {HeaderRender()}
              {templateData.length > 0 && viewTable()}
            </table>
          </div>
 
          {/* LOADER */}
          {tableLoader && (
            <div className="flex justify-center items-center py-6">
              <Loader
                type="spinner-circle"
                bgColor="transparent"
                color="var(--picker-accent)"
                size={40}
              />
            </div>
          )}
 
          {/* EMPTY STATE */}
          {nodataFlag && (
            <div class="m-3 gap-3 flex flex-row items-center justify-center py-3 px-6 text-center transition-all duration-300 animate-fadeIn">
              {/* <!-- Title --> */}
              <h2 class="text-md text-[var(--leftdrawer-text)] mb-2">
                No Records Found
              </h2>
            </div>
          )}
 
          {DeleteModal()}
        </div>
      </div>
    </AuthenticatedTemplate>
  );
 
};
