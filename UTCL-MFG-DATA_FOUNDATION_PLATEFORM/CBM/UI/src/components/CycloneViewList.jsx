// import axios from "axios";
// import { useState, useEffect } from "react";
// import "../styles/templateList.css";
// import { Button, Table } from "react-bootstrap";
// import Loader from "react-js-loader";
// import { toast } from "react-toastify";
// import { BsEyeFill } from "react-icons/bs";
// import { MdDeleteForever, MdModeEdit } from "react-icons/md";
// import { FiCopy } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";
// import { config } from "../config";
// import { AuthenticatedTemplate } from "@azure/msal-react";
// import moment from "moment";
// import { accessLogApi } from "../utils/AccessLogApi";
// export const CycloneViewList = () => {
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
//   const [showCopyModal, setShowCopyModal] = useState(false);
//   const [CopyModalData, setCopyModalData] = useState();
//   const [nodataFlag, setNodataFlag] = useState(false);

//   const [templateData, setTemplateData] = useState([]);
//   const [submitLoader, setSubmitLoader] = useState("");
//   const [tableLoader, setTableLoader] = useState(false);
//   const [submitCopyLoader, setSubmitCopyLoader] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     accessLogCBM()
//     getTemplateData();
//   }, []);

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

//   const getTemplateData = () => {
//     let payload = {
//       userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
//       plants : JSON.parse(localStorage.getItem("login"))?.plants
//     };

//     // console.log(token);
//     setTableLoader(true)
//     setNodataFlag(false);
//     axios
//     .post(config.BaseUrl + "/cbm/template/getCycloneData", payload, {
//       headers: {
//         Authorization: `Bearer ${
//           JSON.parse(localStorage.getItem("login"))?.token
//         }`,
//       },
//     })
//     .then((res) => {
//         setTableLoader(false)
//         res = res.data.result;
//         console.log(res,":rrrrrrrrrrrr")
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

//   //   let Data = {
//   //     "result": [
//   //         // {
//   //         //     "Timestamp": "2023-07-04T15:01:03.000Z",
//   //         //     "TemplateName": "Cyclone 4",
//   //         //     "PlantName": "BJCW",
//   //         //     "Parameters": {
//   //         //       "C1": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"95"
//   //         //       },
//   //         //       "C2": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"92"
//   //         //       },
//   //         //       "C3": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"87"
//   //         //       },
//   //         //       "C4": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"86"
//   //         //       },
//   //         //   },
//   //         //     "UserId": "utcl-mum.brm5@adityabirla.com"
//   //         // },
//   //         // {
//   //         //     "Timestamp": "2023-07-04T15:01:03.000Z",
//   //         //     "TemplateName": "Cyclone 5",
//   //         //     "PlantName": "BJCW",
//   //         //     "Parameters": {
//   //         //       "C1": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"95"
//   //         //       },
//   //         //       "C2": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"92"
//   //         //       },
//   //         //       "C3": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"87"
//   //         //       },
//   //         //       "C4": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"86"
//   //         //       },
//   //         //       "C5": {
//   //         //           "T1": "T1",
//   //         //           "T2": "T2",
//   //         //           "Efficiency":"86"
//   //         //       },
//   //         //   },
//   //         //     "UserId": "utcl-mum.brm5@adityabirla.com"
//   //         // },
//   //         {
//   //             "Timestamp": "2023-07-04T15:01:03.000Z",
//   //             "TemplateName": "Stage 6",
//   //             "PlantName": "BLCW",
//   //             "Parameters": {
//   //           Cyclone :   {
//   //             "C1": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"95"
//   //               },
//   //               "C2": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"92"
//   //               },
//   //               "C3": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"87"
//   //               },
//   //               "C4": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"86"
//   //               },
//   //               "C5": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"84"
//   //               },
//   //               "C6": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"82"
//   //               },},
//   //           Klin :   { "K1": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"95"
//   //               },
//   //               "K2": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"92"
//   //               },
//   //               "K3": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"87"
//   //               },
//   //               "K4": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"86"
//   //               },
//   //               "K5": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"84"
//   //               },
//   //               "K6": {
//   //                   "T1": "T1",
//   //                   "T2": "T2",
//   //                   "Efficiency":"82"
//   //               },}
//   //           },
//   //             "UserId": "utcl-mum.brm5@adityabirla.com"
//   //         },


//   //     ],
//   //     "error": false,
//   //     "status": "Success",
//   //     "statusCode": 200,
//   //     "statusName": "OK"
//   // }
//   // setTemplateData(Data.result)
//   };


//   const columns = [
//     {
//       title: "Cyclone View Name",
//       field: "TemplateName",
//       key: "1",
//     },
//     { title: "PlantName", field: "PlantName", searchable: false, key: "2" },
//     {
//       title: "No of Stage",
//       field: "StageCount",
//       key: "3",
//     },
//     // {
//     //   title: "Equipment Name",
//     //   field: "FanName",
//     //   key: "4",
//     // },
//     // {
//     //   title: "Active Status",
//     //   field: "Status",
//     //   key: "5",
//     // },
//     {
//       title: "Actions",
//       field: "",
//       key: "6",
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
//                 if (v1.field !== "" && v1.field !== "StageCount") {
//                   return <td key={i1}>{val[v1.field]}</td>;
//                 } else if(v1.field === "StageCount"){
//                   return  val?.Parameters && val?.Parameters?.Cyclone  && <td key={i1}>{Object.keys(val?.Parameters?.Cyclone)?.length}</td>;
//                 }
//                 else {
//                   return (
//                     <td key={i1}>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-evenly",
//                         }}
//                       >
//                         {console.log(val,"c")}
//                         <BsEyeFill
//                           onClick={() => {
//                             sessionStorage.setItem("CycloneView", JSON.stringify(val))
//                             navigate("/cycloneview" );
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

//   // const DeleteModal = () => {
//   //   return (
//   //     <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
//   //       <Modal.Header closeButton>
//   //         <Modal.Title>Delete Template</Modal.Title>
//   //       </Modal.Header>
//   //       <Modal.Body>
//   //         Are You Sure Want to delete {deleteModalData?.TempletName}?
//   //       </Modal.Body>
//   //       <Modal.Footer>
//   //         <Button variant="secondary" onClick={handleDeleteModalClose}>
//   //           Close
//   //         </Button>
//   //         <Button variant="danger" onClick={() => DeleteTemplate()}>
//   //           Delete
//   //         </Button>
//   //       </Modal.Footer>
//   //     </Modal>
//   //   );
//   // };

//   return (
//     <AuthenticatedTemplate>
//       <div className="dash-top pb-2">
//         <div className="mycard mt-2">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h4 className="mb-0"> Cyclone View List</h4>
//             {/* <button
//               className="btn btnfrst mr-1"
//               onClick={() => {
//                 navigate("/createTemplate");
//               }}
//             >
//               {" "}
//               Create Template
//             </button> */}
//           </div>
//           {/* <div className="TabelContainer"></div> */}
//           <Table responsive className="table-design">
//             {HeaderRender()}
//             {templateData.length > 0 && viewTable()}
//             {/* {DeleteModal()} */}
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
import { useState, useEffect } from "react";
import "../styles/templateList.css";
import { Button, Table } from "react-bootstrap";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { BsEyeFill } from "react-icons/bs";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { config } from "../config";
import { AuthenticatedTemplate } from "@azure/msal-react";
import moment from "moment";
import { accessLogApi } from "../utils/AccessLogApi";
export const CycloneViewList = () => {
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

  const getTemplateData = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
      plants: JSON.parse(localStorage.getItem("login"))?.plants
    };

    // console.log(token);
    setTableLoader(true)
    setNodataFlag(false);
    axios
      .post(config.BaseUrl + "/cbm/template/getCycloneData", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("login"))?.token
            }`,
        },
      })
      .then((res) => {
        setTableLoader(false)
        res = res.data.result;
        console.log(res, ":rrrrrrrrrrrr")
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


  const columns = [
    {
      title: "Cyclone View Name",
      field: "TemplateName",
      key: "1",
    },
    { title: "PlantName", field: "PlantName", searchable: false, key: "2" },
    {
      title: "No of Stage",
      field: "StageCount",
      key: "3",
    },
    // {
    //   title: "Equipment Name",
    //   field: "FanName",
    //   key: "4",
    // },
    // {
    //   title: "Active Status",
    //   field: "Status",
    //   key: "5",
    // },
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
      <tbody>
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

              /* NORMAL FIELDS */
              if (v1.field !== "" && v1.field !== "StageCount") {
                return (
                  <td
                    key={i1}
                    className="
                     px-4
                    py-2
                    text-sm
                    text-[var(--text-color)]
                    whitespace-nowrap
                  "
                  >
                    {val[v1.field]}
                  </td>
                );
              }

              /* STAGE COUNT FIELD */
              else if (v1.field === "StageCount") {
                return val?.Parameters?.Cyclone ? (
                  <td
                    key={i1}
                    className="
                    px-6
                    py-2
                    text-sm
                    text-[var(--text-color)]
                    text-left
                  "
                  >
                    {Object.keys(val?.Parameters?.Cyclone)?.length}
                  </td>
                ) : (
                  <td
                    key={i1}
                    className="px-6 py-2 text-sm text-[var(--text-color)] text-center"
                  >
                    0
                  </td>
                );
              }

              /* ACTION COLUMN */
              else {
                return (
                  <td
                    key={i1}
                    className="
                   px-6
                    py-2
                    text-center
                  "
                  >
                    <div className="flex justify-center gap-4 text-lg">

                      <BsEyeFill
                        className="
                         cursor-pointer
                        text-[var(--title)]
                        hover:text-orange-500
                        transition
                      "
                        onClick={() => {
                          sessionStorage.setItem(
                            "CycloneView",
                            JSON.stringify(val)
                          );
                          navigate("/cycloneview");
                        }}
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
  //         <Button variant="secondary" onClick={handleDeleteModalClose}>
  //           Close
  //         </Button>
  //         <Button variant="danger" onClick={() => DeleteTemplate()}>
  //           Delete
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // };

  return (
    <AuthenticatedTemplate>
      <div className="w-full flex flex-col gap-3 -mt-1">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-1 -ml-0.5">
            Cyclone View List
          </h2>
        </div>

        {/* TABLE CONTAINER */}
        <div className="rounded-2xl border border-[var(--form-border)] overflow-hidden">

          {tableLoader ? (
            <div className="flex justify-center py-12">
              <Loader
                type="spinner-circle"
                bgColor="#000000"
                title="bubble-scale"
                color="#FFFFFF"
                size={50}
              />
            </div>
          ) : templateData.length > 0 ? (

            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse">

                {HeaderRender()}

                {viewTable()}

              </table>
            </div>

          ) : nodataFlag ? (
            <div className="text-center py-12 text-sm text-[var(--text-color)]">
              No Record Found
            </div>
          ) : null}

        </div>

      </div>
    </AuthenticatedTemplate>
  );
};
