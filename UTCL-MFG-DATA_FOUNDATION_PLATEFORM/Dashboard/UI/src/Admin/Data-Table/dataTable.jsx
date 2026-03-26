
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";

import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import * as xlsx from "xlsx";
import axios from "axios";
import Select, { components } from "react-select";
import Loader from "react-js-loader";
import { ToastContainer, toast } from "react-toastify";
import { FiDownload, FiX } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import InvalidToken from "../InvalidToken";
import useToken from "../UseToken/useToken";
import { accessLogApi } from "../../utils/accessLogApi";

const DataTable = () => {
  const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    if (isFocused) bg = "#eee";
    if (isActive) bg = "#B2D4FF";

    const style = {
      alignItems: "center",
      backgroundColor: bg,
      color: "inherit",
      display: "flex ",
      justifyContent: "flex-start",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };
    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        <input style={{ width: "10% " }} type="checkbox" checked={isSelected} />
        {children}
      </components.Option>
    );
  };

  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { token } = useToken();
  const [plantsValue, setPlantsValues] = useState([]);
  const [moduleValues, setModuleValues] = useState([]);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [bulkSubmitLoader, setBulkSubmitLoader] = useState(false);
  const [bulkUploadData, setBulkUploadData] = useState([]);

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
  const formInitialValues = {
    userId: "",
    username: "",
    plantsValue: [],
    moduleValues: [],
    Contact_No: "",
    SMS_Limit: "",
    isActive: "",
    isAlert: "",
    updateUserID: "",
    updateUserName: "",
    updateIsAlert: "",
    updateIsActive: "",
    userRole: "",
  };

  const [formvalues, setFormValues] = useState(formInitialValues);
  const [formError, setFormError] = useState({});
  const [apiError, setApiError] = useState("");
  const [dataTableLoader, setDataTableLoader] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);

  const [dataTableList, setDataTableList] = useState([]);
  const [bulkUploadModalOpen, setbulkUploadModalOpen] = useState(false);
  const [plantsCode, setPlantsCode] = useState([]);
  const [moduleCode, setModuleCode] = useState([]);

  const validate = (values) => {
    const error = {};
    // eslint-disable-next-line no-useless-escape
    const regExForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    const regExForContact =
      /^\s*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (!values.username) {
      error.username = "User Name is required";
    }
    if (!values.userId) {
      error.userId = "email is required";
    } else if (!regExForEmail.test(values.userId)) {
      error.userId = "Invalid Email";
    }
    // if (token.Role === "super_admin" && (values.Contact_No === "") ) {
    //   error.Contact_No = "Contact No is required";
    // } else if ( token.Role === "super_admin" && !regExForContact.test(values.Contact_No)) {
    //   error.Contact_No = "Invalid Contact";
    // }
    if (token.Role === "super_admin" && values.Contact_No !== "") {
      if (!regExForContact.test(values.Contact_No)) {
        error.Contact_No = "Invalid Contact";
      }
    }
    // if (token.Role === "super_admin" && (values?.SMS_Limit === "") ) {
    //   error.SMS_Limit = "SMS Limit is required";
    // }
    if (values.isActive.toString() === "") {
      error.isActive = "Status is Required";
    }

    if (values.isAlert.toString() === "") {
      error.isAlert = "Status is Required";
    }
    if (token.Role === "super_admin" && values.userRole.toString() === "") {
      error.userRole = "Role is Required";
    }
    return error;
  };

  const handleChangePlants = (e) => {
    setPlantsValues(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangeModules = (e) => {
    setModuleValues(Array.isArray(e) ? e.map((x) => x.value) : []);
    // console.log(moduleValues ,Array.isArray(e) ? e.map((x) => x.value) : [],"modddd")
    // let difference = []
    // if(moduleValues.length < e.length) {
    //   difference = e.filter(x => !moduleValues.includes(x.value));

    // }
    // if(moduleValues.length > e.length) {
    //   let eArray = e.map((x) => x.value)
    //  difference =  moduleValues.filter(x => !eArray.includes(x));

    // }
  };

  const getUserList = async () => {
    const data = {
      adminid: token.UserID,
    };
    let postUrl = process.env.REACT_APP_BASE_URL + "admin/userDetails";
    if (token.Role === "super_admin") {
      data.superAdminid = token.UserID;
      delete data.adminid;
      postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/userDetails";
    }
    try {
      setDataTableLoader(true);
      await axios
        .post(postUrl, data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          let tepdata = res?.data?.data;
          tepdata.map((val) => {
            if (val.Plants.length === 1 && val.Plants[0] === "") {
              val.Plants = [];
            }
            if (val.Modules.length === 1 && val.Modules[0] === "") {
              val.Modules = [];
            }
          });

          setDataTableLoader(false);
          setDataTableList(tepdata);
        });
    } catch (error) {
      // console.log(error.response);
      setDataTableLoader(false);
      if (InvalidToken(error)) {
        navigate("/admin");
      }
    }
  };

  const getPlantCode = async () => {
    const data = {
      adminid: token.UserID,
    };
    let postUrl = process.env.REACT_APP_BASE_URL + "admin/plantDetails";

    try {
      await axios
        .post(postUrl, data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          setPlantsCode(res?.data?.data);
        });
    } catch (error) {
      // console.log(error.response);
      if (InvalidToken(error)) {
        navigate("/admin");
      }
    }
  };
  const getModuleCode = async () => {
    const data = {
      adminid: token.UserID,
    };
    let postUrl = process.env.REACT_APP_BASE_URL + "admin/moduleDetails";
    // if (token.Role === "super_admin") {
    //   data.superAdminid = token.UserID;
    //   delete data.adminid;
    //   postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/moduleDetails";
    // }
    try {
      await axios
        .post(postUrl, data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          setModuleCode(res?.data?.data);
          // console.log(res?.data?.data, "dddd");
        });
    } catch (error) {
      // console.log(error.response);
      if (InvalidToken(error)) {
        navigate("/admin");
      }
    }
  };

  let plant = plantsCode.map((p) => {
    return { value: p.Plant, label: p.Plant };
  });
  let module = moduleCode.map((p) => {
    return { value: p.Module, label: p.Module };
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // console.log("handleChangeInput", name, value);
    setFormValues({ ...formvalues, [name]: value });
    let tempError = formError;
    delete tempError[name];
    setFormError(tempError);
  };
  const handleChangeSelect = (value, name) => {
    // console.log("handleChangeselect", value, name);
    setFormValues({ ...formvalues, [name]: value });
    let tempError = formError;
    delete tempError[name];
    setFormError(tempError);
  };

  // const hanldeChangeAlert = (e) => {
  //   const { name } = e.target;
  //   setFormValues({ ...formvalues, [name]: formvalues.isAlert });
  // };

  const submitForm = (e) => {
    e.preventDefault();
    setApiError("");
    setFormError(validate(formvalues));

    if (Object.keys(validate(formvalues)).length !== 0) {
      console.log("error", formError, formvalues);
      return;
    }
    const { userId, username, isActive, isAlert, Contact_No, SMS_Limit } =
      formvalues;
    const data = {
      adminid: token.UserID,
      userid: userId,
      username: username,
      plants: plantsValue,
      modules: moduleValues,
      isActive: isActive === "true" ? true : isActive === "false" && false,
      isAlert: isAlert === "true" ? true : isAlert === "false" && false,
    };
    setSubmitLoader(true);

    let postUrl = process.env.REACT_APP_BASE_URL + "admin/addUser";
    if (token.Role === "super_admin") {
      data.superAdminid = token.UserID;
      data.role = formvalues.userRole;
      data.contact = Contact_No === 0 ? "" : Contact_No;
      data.smsLimit = SMS_Limit;
      delete data.adminid;
      postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/addUser";
    }
    if (updateFlag) {
      postUrl = process.env.REACT_APP_BASE_URL + "admin/updateUser";
      if (token.Role === "super_admin") {
        postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/updateUser";
      }
    }

    // console.log(data, updateFlag, postUrl, "payyyy");
    try {
      axios
        .post(postUrl, data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks

          if (res.data.code === 200) {
            getUserList();
            setSubmitLoader(false);
            setModal(false);
            setFormValues(formInitialValues);
            setFormError({});
            setPlantsValues([]);
            setModuleValues([]);
            if (updateFlag) {
              toast.success("User Updated Successfully.");
              setUpdateFlag(!updateFlag);
            } else {
              toast.success("New User Added Successfully.");
            }
          }
        })
        .catch((error) => {
          setSubmitLoader(false);
          setApiError(error?.response?.data?.error);
          // console.log(error.message);
        });
    } catch (error) {
      getUserList();
      setSubmitLoader(false);
      setModal(false);
      // console.log(error.response);
      if (InvalidToken(error)) {
        navigate("/admin");
      }
    }
  };
  const AddUserTable = () => {
    let headers = Object.keys(bulkUploadData[0]);
    return (
      <>
        <tr>
          {headers.map((val) => {
            return <th className="w-full bg-[var(--bg-header)]">{val}</th>;
          })}
        </tr>

        {bulkUploadData.map((v1) => {
          return (
            <tr className="w-full text-[var(--text-color)]">
              {headers.map((val) => {
                if (typeof v1[val] === "object") {
                  return (
                    <td style={{ maxWidth: "100px" }}>{v1[val].join(", ")}</td>
                  );
                }
                if (typeof v1[val] === "boolean") {
                  return (
                    <td style={{ maxWidth: "100px" }}>
                      {v1[val] ? "Yes" : "No"}
                    </td>
                  );
                }
                return <td>{v1[val]}</td>;
              })}
            </tr>
          );
        })}
      </>
    );
  };

  const sampleFileDownload = async () => {
    try {
      let postUrl = process.env.REACT_APP_BASE_URL + "admin/downloadSampleFile";
      await axios.post(postUrl, {}, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
        .then((res) => {
          console.log("SAMPLERESPONSE", res);
          if (res?.data?.url) {
            window.open(res.data.url);
          }
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  const bulkUploadModal = () => {
    const closeModal = () => {
      setbulkUploadModalOpen(!bulkUploadModalOpen);
      setBulkUploadData([]);
      setApiError("");
    };

    return (
      <Modal
        centered
        size="xl"
        isOpen={bulkUploadModalOpen}
        toggle={closeModal}
        returnFocusAfterClose
        backdrop="static"
        contentClassName="!w-[1200px] !max-w-[95vw] !p-8 !max-h-[85vh] !overflow-y-auto !bg-[var(--card-bg)] !rounded-xl !shadow-xl !border !border-[var(--form-border)]"
      >
        {/* Header */}
        <ModalHeader toggle={closeModal} className="!p-0 !border-none">
          <div className="flex justify-between items-center w-[400px]">
            <span className="text-[18px] font-semibold text-[var(--text-color)]">
              Bulk Upload Users
            </span>

            <button
              type="button"
              onClick={() => {
                setbulkUploadModalOpen(!bulkUploadModalOpen);
                setBulkUploadData([]);
                setApiError("");
              }}
              className="cursor-pointer bg-none border-none text-[24px] p-0 text-[var(--text-color)] opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              <FiX />
            </button>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className="flex flex-col items-center gap-[20px] w-full">

            <div
              className="border-2 border-dashed border-[var(--input-enable-border)] rounded-[12px] 
            px-[30px] py-[50px] mb-[25px] bg-[var(--bg-main-container)] cursor-pointer
            flex flex-col items-center justify-center text-center gap-[6px]"
            >
              <div className="text-[48px] mb-[10px] text-[var(--text-color)]">☁️</div>

              <p className="m-0 mb-[10px] text-[16px] font-medium text-[var(--text-color)]">
                Drag & drop files or{" "}
                <label className="text-[var(--picker-accent)] underline cursor-pointer">
                  Browse
                </label>
              </p>

              <p className="m-0 text-[12px] text-[var(--search-placeholder)]">
                Supported formats: .xls, .xlsx
              </p>

              <div className="flex justify-center items-center w-full mt-[10px]">
                <input
                  className="btnfrst border border-[var(--input-enable-border)] px-[6px] py-[6px] rounded-[6px] 
                bg-[var(--input-enable-bg)] text-[var(--text-color)] cursor-pointer"
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    if (e.target.files) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        const data = e.target.result;
                        const workbook = xlsx.read(data, { type: "array" });
                        const sheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[sheetName];
                        const json = xlsx.utils.sheet_to_json(worksheet);

                        json.map((val) => {
                          val.plants = val.plants
                            ? val?.plants.replaceAll(" ", "").split(",")
                            : [];
                          val.modules = val?.modules.replaceAll(" ", "").split(",");
                        });

                        setBulkUploadData(json);
                      };

                      reader.readAsArrayBuffer(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div
            onClick={sampleFileDownload}
            className="flex items-center justify-center gap-[8px] cursor-pointer text-[var(--picker-accent)] text-[14px] mb-4"
          >
            <FiDownload size={20} />
            <label className="text-[var(--text-color)]">
              Sample File Download
            </label>
          </div>

          <div
            className="w-full max-h-[300px] overflow-y-auto border border-[var(--form-border)] rounded-[8px]"
          >
            <table>
              {bulkUploadData.length > 0 && AddUserTable()}
            </table>
          </div>

          {bulkSubmitLoader && loader}

          {bulkUploadData.length > 0 && (
            <div className="flex justify-center w-full">
              <button
                className="w-[120px] mt-3 py-2 px-2 rounded text-white text-base font-bold mb-2 
              transition-opacity duration-200 bg-[var(--picker-accent)] cursor-pointer"
                onClick={() => bulkUplodaUser()}
                disabled={bulkSubmitLoader}
              >
                Submit
              </button>
            </div>
          )}

          {apiError !== "" && (
            <div className="text-[#dc3545] text-[14px] text-center w-full">
              {apiError}
            </div>
          )}
        </ModalBody>
      </Modal>
    );
  };
  const bulkUplodaUser = () => {
    let data = {
      superAdminid: token.UserID,
      body: bulkUploadData,
    };
    setBulkSubmitLoader(true);
    try {
      axios
        .post(process.env.REACT_APP_BASE_URL + "adminSuper/bulkAddUser", data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks

          if (res.data.code === 200) {
            // setTimeout(() => {
            getUserList();
            setBulkSubmitLoader(false);
            setbulkUploadModalOpen(false);
            setBulkUploadData([]);
            toast.success("All User Added Successfully.");
            // }, 2000);
          }
        })
        .catch((error) => {
          setBulkSubmitLoader(false);
          setApiError(error?.response?.data?.error);
          // console.log(error.message);
        });
    } catch (error) {
      getUserList();
      setBulkSubmitLoader(false);

      // console.log(error.response);
      if (InvalidToken(error)) {
        navigate("/admin");
      }
    }
  };
  const updateUser = (rowData) => {
    setModal(true);
    if (token.Role === "super_admin") {
      setFormValues({
        userId: rowData.UserID,
        username: rowData.UserName,
        isAlert: rowData.IsAlert.toString(),
        isActive: rowData.IsActive.toString(),
        userRole: rowData.Role,
        Contact_No: rowData.Contact_No ? rowData.Contact_No : "",
        SMS_Limit: rowData.SMS_Limit ? rowData.SMS_Limit : "",
      });
    } else {
      setFormValues({
        userId: rowData.UserID,
        username: rowData.UserName,
        isAlert: rowData.IsAlert.toString(),
        isActive: rowData.IsActive.toString(),
      });
    }
    setPlantsValues(rowData.Plants);
    setModuleValues(rowData.Modules);
    setUpdateFlag(true);
    // setUpdatePlants(rowData.Plants);
    // setUpdateModule(rowData.Modules);
  };

  const deleteUser = (id) => {
    const deletedUser = async () => {
      const data = {
        adminid: token.UserID,
        userid: id,
      };
      let postUrl = process.env.REACT_APP_BASE_URL + "admin/deleteUser";
      if (token.Role === "super_admin") {
        data.superAdminid = token.UserID;
        delete data.adminid;
        postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/deleteUser";
      }
      try {
        setDataTableLoader(true);
        await axios
          .post(postUrl, data, {
            headers: { Authorization: `Bearer ${token.token}` },
          })
          .then((res) => {
            if (res.data.code === 200) {
              getUserList();
              toast.success("User Deleted Successfully.");
            }
          });
      } catch (error) {
        // console.log(error.response);
        setDataTableLoader(false);
        if (InvalidToken(error)) {
          navigate("/admin");
        }
      }
    };
    confirmAlert({
      title: "Confirm to Delete User",
      message: "Are you sure, you want to delete this user.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deletedUser(),
        },
        {
          label: "No",
          onClick: () => { },
        },
      ],
    });
  };

  useEffect(() => {
    accessLogDashboard();
  }, []);

  useEffect(() => {
    getUserList();
    getPlantCode();
    getModuleCode();
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
    accessLogApi(payload, token.token);
  };
  const optionlist = [
    { value: "", label: "Select Status" },
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ];
  const RoleOptionList = [
    { value: "", label: "Select Role" },
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "super_admin", label: "Super Admin" },
  ];

  const columns =
    token.Role === "super_admin"
      ? [
        {
          title: "UserName",
          field: "UserName",
          emptyValue: () => <em>null</em>,
          key: "1",
          searchable: true,
          headerStyle: { color: "black", minWidth: "140px", maxWidth: "180px" },
          cellStyle: { minWidth: "140px", maxWidth: "180px" },
        },
        {
          title: "UserID",
          field: "UserID",
          searchable: true,
          key: "2",
          headerStyle: { color: "black", minWidth: "200px", maxWidth: "240px" },
          cellStyle: { minWidth: "200px", maxWidth: "240px" },
        },
        {
          title: "Role",
          field: "Role",
          searchable: false,
          key: "7",
          headerStyle: { color: "black", minWidth: "100px", maxWidth: "120px" },
          cellStyle: { minWidth: "100px", maxWidth: "120px" },
        },
        {
          title: "Contact No",
          field: "Contact_No",
          searchable: true,
          key: "8",
          headerStyle: { color: "black", minWidth: "110px", maxWidth: "130px" },
          cellStyle: { minWidth: "110px", maxWidth: "130px", textAlign: "center" },
          render: (rowData) => (
            <div style={{ textAlign: "center" }}>
              {rowData.Contact_No ? rowData.Contact_No : "-"}
            </div>
          ),
        },
        {
          title: "SMS Limit",
          field: "SMS_Limit",
          searchable: false,
          key: "9",
          headerStyle: { color: "black", minWidth: "90px", maxWidth: "110px" },
          cellStyle: { minWidth: "90px", maxWidth: "110px", textAlign: "center" },
          render: (rowData) => (
            <div style={{ textAlign: "center" }}>
              {rowData.SMS_Limit ? rowData.SMS_Limit : "-"}
            </div>
          ),
        },
        {
          title: "IsActive",
          field: "IsActive",
          key: "3",
          headerStyle: { color: "black", minWidth: "80px", maxWidth: "90px" },
          cellStyle: { minWidth: "80px", maxWidth: "90px", textAlign: "center" },
          render: (rowData) => (
            <div style={{ textAlign: "center" }}>
              {rowData.IsActive ? "YES" : "NO"}
            </div>
          ),
        },
        {
          title: "IsAlert",
          field: "IsAlert",
          key: "4",
          headerStyle: { color: "black", minWidth: "80px", maxWidth: "90px" },
          cellStyle: { minWidth: "80px", maxWidth: "90px", textAlign: "center" },
          render: (rowData) => (
            <div style={{ textAlign: "center" }}>
              {rowData.IsAlert ? "YES" : "NO"}
            </div>
          ),
        },
        {
          title: "Plants",
          field: "Plants",
          key: "5",
          headerStyle: { color: "black", minWidth: "140px", maxWidth: "180px" },
          cellStyle: { minWidth: "140px", maxWidth: "180px" },
          render: (rowData) => (
            <div style={{ maxHeight: "82px", overflowY: "scroll" }}>
              {rowData?.Plants?.length === 0 ? (
                <div>No Plant Assigned</div>
              ) : (
                rowData.Plants?.map((val, index) => (
                  <div key={index} className="plantBox">{val}</div>
                ))
              )}
            </div>
          ),
        },
        {
          title: "Modules",
          field: "Modules",
          key: "6",
          headerStyle: { color: "black", minWidth: "140px", maxWidth: "180px" },
          cellStyle: { minWidth: "140px", maxWidth: "180px" },
          render: (rowData) => (
            <div style={{ maxHeight: "82px", overflowY: "scroll" }}>
              {rowData?.Modules?.length === 0 ? (
                <div className="plantBox">No Module Assigned</div>
              ) : (
                rowData.Modules?.map((val, index) => (
                  <div key={index} className="plantBox">{val}</div>
                ))
              )}
            </div>
          ),
        },
      ]
      : [
        {
          title: "UserName",
          field: "UserName",
          emptyValue: () => <em>null</em>,
          key: "1",
          searchable: true,
          headerStyle: { color: "black", minWidth: "180px", maxWidth: "220px" },
          cellStyle: { minWidth: "180px", maxWidth: "220px" },
        },
        {
          title: "UserID",
          field: "UserID",
          searchable: true,
          key: "2",
          headerStyle: { color: "black", minWidth: "220px", maxWidth: "280px" },
          cellStyle: { minWidth: "220px", maxWidth: "280px" },
        },
        {
          title: "IsActive",
          field: "IsActive",
          key: "3",
          headerStyle: { color: "black", minWidth: "100px", maxWidth: "120px" },
          cellStyle: { minWidth: "100px", maxWidth: "120px", textAlign: "center" },
          render: (rowData) => (
            <div style={{ textAlign: "center" }}>
              {rowData.IsActive ? "YES" : "NO"}
            </div>
          ),
        },
        {
          title: "IsAlert",
          field: "IsAlert",
          key: "4",
          headerStyle: { color: "black", minWidth: "100px", maxWidth: "120px" },
          cellStyle: { minWidth: "100px", maxWidth: "120px", textAlign: "center" },
          render: (rowData) => (
            <div style={{ textAlign: "center" }}>
              {rowData.IsAlert ? "YES" : "NO"}
            </div>
          ),
        },
        {
          title: "Plants",
          field: "Plants",
          key: "5",
          headerStyle: { color: "black", minWidth: "180px", maxWidth: "240px" },
          cellStyle: { minWidth: "180px", maxWidth: "240px" },
          render: (rowData) => (
            <div style={{ maxHeight: "82px", overflowY: "scroll" }}>
              {rowData?.Plants?.length === 0 ? (
                <div>No Plant Assigned</div>
              ) : (
                rowData.Plants?.map((val, index) => (
                  <div key={index} className="plantBox">{val}</div>
                ))
              )}
            </div>
          ),
        },
        {
          title: "Modules",
          field: "Modules",
          key: "6",
          headerStyle: { color: "black", minWidth: "180px", maxWidth: "240px" },
          cellStyle: { minWidth: "180px", maxWidth: "240px" },
          render: (rowData) => (
            <div style={{ maxHeight: "82px", overflowY: "scroll" }}>
              {rowData?.Modules?.length === 0 ? (
                <div className="plantBox">No Module Assigned</div>
              ) : (
                rowData.Modules?.map((val, index) => (
                  <div key={index} className="plantBox">{val}</div>
                ))
              )}
            </div>
          ),
        },
      ];

  const addUserModal = () => {
    const closeModal = () => {
      setFormValues(formInitialValues);
      setFormError({});
      setModal(!modal);
      setApiError("");
      setPlantsValues([]);
      setModuleValues([]);
      if (updateFlag) {
        setUpdateFlag(false);
      }
    };

    return (
      <Modal
        centered
        size="xl"
        isOpen={modal}
        toggle={closeModal}
        backdrop="static"
        returnFocusAfterClose
        contentClassName="!w-[800px] !max-w-[95vw] !p-9 !max-h-[85vh] !overflow-y-auto !bg-[var(--card-bg)] !rounded-xl !shadow-xl !border !border-[var(--form-border)]"
      >
        <ModalHeader toggle={closeModal} className="!p-0 !border-none">
          <div className="flex justify-between items-center w-[400px] mb-5">

            <span className="text-[18px] font-semibold text-[var(--text-color)]">
              {updateFlag ? "Update User Information" : "User Information"}
            </span>

            <button
              type="button"
              onClick={closeModal}
              className="cursor-pointer bg-transparent border-none text-[24px] p-0 text-[var(--text-color)] opacity-60"
            >
              <FiX />
            </button>

          </div>
        </ModalHeader>

        <ModalBody>
          <form>
            <div style={{ padding: "0 0" }}>

              {/* Row 1 */}
              <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "35px", margin: "0 -10px" }}>
                <div style={{ width: "50%", padding: "0 10px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                    User Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="username"
                    value={formvalues.username}
                    className={`w-full p-1 rounded-lg border border-[var(--input-enable-border)] text-[var(--picker-text)] focus:outline-none focus:ring-[0.2px] focus:ring-[#767575] placeholder:text-sm placeholder:text-[var(--search-placeholder)] pl-2 bg-[var(--input-enable-bg)] transition-all duration-200`}
                    placeholder="Enter User Name"
                    onChange={handleChangeInput}
                  />
                  {formError.username && (
                    <span className="error">{formError.username}</span>
                  )}
                </div>

                <div style={{ width: "50%", padding: "0 10px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                    User ID <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="userId"
                    value={formvalues.userId}
                    disabled={updateFlag}
                    className={`w-full p-1 rounded-lg border border-[var(--input-enable-border)] text-[var(--picker-text)] focus:outline-none focus:ring-[0.2px] focus:ring-[#767575] placeholder:text-sm placeholder:text-[var(--search-placeholder)] pl-2 bg-[var(--input-enable-bg)] transition-all duration-200`}
                    placeholder="Enter User ID"
                    onChange={handleChangeInput}
                  />
                  {formError.userId && (
                    <span className="error">{formError.userId}</span>
                  )}
                </div>
              </div>

              {/* Row 2 (SUPER ADMIN) */}
              {token.Role === "super_admin" && (
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "35px", margin: "0 -10px" }}>
                  <div style={{ width: "50%", padding: "0 10px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                      Contact No</label>
                    <input
                      type="number"
                      name="Contact_No"
                      value={formvalues.Contact_No === 0 ? "" : formvalues.Contact_No}
                      className={`w-full p-1 rounded-lg border border-[var(--input-enable-border)] text-[var(--picker-text)] focus:outline-none focus:ring-[0.2px] focus:ring-[#767575] placeholder:text-sm placeholder:text-[var(--search-placeholder)] pl-2 bg-[var(--input-enable-bg)] transition-all duration-200`}
                      placeholder="Enter Contact No"
                      onChange={handleChangeInput}
                    />
                    {formError.Contact_No && (
                      <span className="error">{formError.Contact_No}</span>
                    )}
                  </div>

                  <div style={{ width: "50%", padding: "0 10px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                      SMS Limit</label>
                    <input
                      type="number"
                      name="SMS_Limit"
                      value={formvalues.SMS_Limit}
                      className={`w-full p-1 rounded-lg border border-[var(--input-enable-border)] text-[var(--picker-text)] focus:outline-none focus:ring-[0.2px] focus:ring-[#767575] placeholder:text-sm placeholder:text-[var(--search-placeholder)] pl-2 bg-[var(--input-enable-bg)] transition-all duration-200`}
                      placeholder="Enter SMS Limit"
                      onChange={handleChangeInput}
                    />
                    {formError.SMS_Limit && (
                      <span className="error">{formError.SMS_Limit}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Row 3 */}
              <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "35px", margin: "0 -10px" }}>

                {token.Role === "super_admin" && (
                  <div style={{ width: "50%", padding: "0 10px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                      User Role <span className="text-red-500">*</span></label>
                    <Select
                      name="userRole"
                      value={RoleOptionList.filter(
                        (val) => val.value === formvalues.userRole
                      )}
                      options={RoleOptionList}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      onChange={(e) =>
                        handleChangeSelect(e.value, "userRole")
                      }
                    />
                    {formError.userRole && (
                      <span className="error">{formError.userRole}</span>
                    )}
                  </div>
                )}

                <div style={{ width: "50%", padding: "0 10px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                    IsActive Status <span className="text-red-500">*</span></label>
                  <Select
                    name="isActive"
                    value={optionlist.filter(
                      (val) => val.value === formvalues.isActive
                    )}
                    options={optionlist}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(e) =>
                      handleChangeSelect(e.value, "isActive")
                    }
                  />
                  {formError.isActive && (
                    <span className="error">{formError.isActive}</span>
                  )}
                </div>
              </div>

              {/* Row 4 */}
              <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "35px", margin: "0 -10px" }}>
                <div style={{ width: "50%", padding: "0 10px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                    IsAlert Status</label>
                  <Select
                    name="isAlert"
                    value={optionlist.filter(
                      (val) => val.value === formvalues.isAlert
                    )}
                    options={optionlist}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(e) =>
                      handleChangeSelect(e.value, "isAlert")
                    }
                  />
                  {formError.isAlert && (
                    <span className="error">{formError.isAlert}</span>
                  )}
                </div>

                <div style={{ width: "50%", padding: "0 10px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                    Module Name</label>
                  <Select
                    isMulti
                    name="modules"
                    value={module.filter((obj) =>
                      moduleValues.includes(obj.value)
                    )}
                    options={module}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={handleChangeModules}
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option: InputOption }}
                  />
                </div>
              </div>

              {/* Row 5 */}
              <div style={{ marginBottom: "35px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "14px", color: "var(--text-color)" }}>
                  Plant Name</label>
                <Select
                  isMulti
                  name="plants"
                  value={plant.filter((obj) =>
                    plantsValue.includes(obj.value)
                  )}
                  options={plant}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  onChange={handleChangePlants}
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  components={{ Option: InputOption }}
                />
              </div>

              {submitLoader && loader}

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  disabled={submitLoader}
                  onClick={(e) => submitForm(e)}
                  className="px-4 py-1 mt-2 rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed active:scale-95"                >
                  {submitLoader ? "Submitting..." : updateFlag ? "Update" : "Add"}
                </button>
              </div>

              {apiError && (
                <div className="mt-3 p-2 rounded-md border border-red-300 bg-red-50 text-red-600 text-sm">
                  {apiError}
                </div>
              )}
            </div>
          </form>
        </ModalBody>
      </Modal>
    );
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="  flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-1 -ml-0.5">
            <span>User List</span>
          </div>
          <div className="flex gap-2">
            {token.Role === "super_admin" && (
              <button
                className={`
  border border-[var(--button-border)]
  bg-[var(--button-bg)]
  text-[14px]
  font-medium
  px-2 py-1
  text-[var(--text-color)]
  rounded-lg
  transition cursor-pointer
  hover:bg-[var(--button-hover-bg)]
`}
                onClick={() => {
                  setbulkUploadModalOpen(true);
                }}
              >
                Add Bulk Users
              </button>
            )}
            <button
              className={`
  border border-[var(--button-border)]
  
  text-[14px]
  font-medium
  bg-orange-400
  px-2 py-1
  rounded-lg
  transition cursor-pointer
  hover:bg-[var(--button-hover-bg)]
`}
              onClick={() => {
                setSubmitLoader(false);
                setModal(true);
                // setUpdateModal(false);
                setFormValues(formInitialValues);
              }}
            >
              Add New User
            </button>
          </div>
        </div>
        {/* Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-xl border border-[var(--form-border)] mt-2" style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
          <div className="flex-1 min-h-0 min-w-0 w-full">
            <MaterialTable

              actions={[
                {
                  icon: "edit",
                  tooltip: "Edit User",
                  // onClick: (rowData) => updateUser(rowData.UserID),
                  onClick: (event, rowData) => updateUser(rowData),

                },
                {
                  color: "red",
                  icon: "delete",
                  tooltip: "Delete User",
                  onClick: (event, rowData) => deleteUser(rowData.UserID),
                },
              ]}
              columns={columns}
              data={dataTableList}
              title=""
              onSelectionChange={(selectedRows) => selectedRows}
              isLoading={dataTableLoader}
              options={{
                sorting: true,
                searchAutoFocus: true,
                pageSize: 10,
                pageSizeOptions: [],
                actionsColumnIndex: -1,
                showTextRowsSelected: false,
                padding: "dense",
                maxBodyHeight: "calc(100vh - 200px)",
                stickyHeader: true,
                cellStyle: {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  padding: "1px 2px"
                },
                /* HEADER */
                headerStyle: {
                  background: "var(--table-header-bg)",
                  color: "black",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "2px",   // reduced padding
                  borderBottom: "1px solid var(--form-border)",
                  borderTop: "1px solid var(--form-border)",
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
                  transition: "background-color 0.2s ease",
                  padding: "2px",
                },


                /* SEARCH */
                searchFieldStyle: {
                  backgroundColor: "var(--search-bg)",
                  border: "1px solid var(--search-border)",
                  color: "var(--text-color)",
                  borderRadius: "6px",
                  padding: "1px 1px",
                  fontSize: "13px",
                },

                searchFieldVariant: "standard",
              }}
            />
          </div>
        </div>
        {addUserModal()}
        <ToastContainer />

      </div>
      {bulkUploadModal()}
    </>
  );
};

export default DataTable;
