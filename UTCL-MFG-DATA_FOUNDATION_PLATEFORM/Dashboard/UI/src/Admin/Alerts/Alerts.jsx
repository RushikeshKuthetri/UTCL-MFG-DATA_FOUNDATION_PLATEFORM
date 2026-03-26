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
import { accessLogApi } from "../../utils/accessLogApi";
import Highlighter from "react-highlight-words";

const Alerts = () => {
  const { token, setToken } = useToken();
  const initialValue = {
    DateDifference: 0,
    DefaultInterval: 0,
    MinDefaultExportSize: 0,
  };
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={50}
    />
  );

  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [submitLoader, setSubmitLoader] = useState(false);
  const [apiError, setApiError] = useState("");
  const [plantOptionList, setPlantOptionList] = useState([]);
  const [selectedPlantVlaues, setSelectedPlantVlaues] = useState([]);
  const [plantCardValues, setPlantCardValues] = useState({});
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!sessionStorage.getItem("token")) {
  //     window.location.reload(true);
  //     navigate("/");
  //   }
  // }, []);

  const activeStatusOptions = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];

  const setAlertData = (data) => {
    let tempPlantValues = {};
    let tempCardValues = { ...plantCardValues };
    let newTempCardValues = {};
    data.map((val) => {
      tempPlantValues[val.Plant_Name] = {
        label: val.Plant_Name,
        value: val.Plant_Name,
      };
      if (!tempPlantValues[val.Plant_Name]) {
        newTempCardValues[val.Plant_Name] = {
          plantName: val.Plant_Name,
          timeInterval: 0,
          isActive: false,
          reciepients: [],
          recipientInput: "",
          recipientError: "",
          submitLoader: false,
          isChanged: false,
        };
      } else {
        newTempCardValues[val.Plant_Name] = {
          plantName: val.Plant_Name,
          timeInterval: val.Interval.split("m")[0],
          isActive: val.IsActive,
          reciepients:
            val.Recipient === ""
              ? []
              : val.Recipient.replaceAll("'", "").split(";"),
          recipientInput: "",
          recipientError: "",
          submitLoader: false,
          isChanged: false,
        };
      }
    });
    // console.log(newTempCardValues);
    setPlantCardValues(newTempCardValues);
    setSelectedPlantVlaues(Object.values(tempPlantValues).sort());
  };
  const getAlertValues = async () => {
    const data = {
      superAdminid: token.UserID,
    };
    try {
      await axios
        .post(
          process.env.REACT_APP_BASE_URL + "adminSuper/alertDetails",
          data,
          {
            headers: { Authorization: `Bearer ${token.token}` },
          }
        )
        .then((res) => {
          // console.log(res?.data?.data, "ress");
          setAlertData(res?.data?.data);
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
  const getPlantDetails = async () => {
    const data = {
      adminid: token.UserID,
    };
    let postUrl = process.env.REACT_APP_BASE_URL + "admin/plantDetails";
    // if (token.Role === "super_admin") {
    //   data.superAdminid = token.UserID;
    //   delete data.adminid;
    //   postUrl = process.env.REACT_APP_BASE_URL + "adminSuper/plantDetails";
    // }
    try {
      await axios
        .post(postUrl, data, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          // console.log(res?.data?.data);
          let plantscode = {};
          res?.data?.data.map((val) => {
            plantscode[val.Plant] = { label: val.Plant, value: val.Plant };
          });
          setPlantOptionList(Object.values(plantscode));
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
  useEffect(()=>{
    accessLogDashboard();
  },[])
  useEffect(() => {
    getPlantDetails();
    getAlertValues();
  }, []);

  const accessLogDashboard=()=>{
    let payload = {
      userId: token.UserID,
      ip: "",
      module: "-",
      plant: "-",
      url: window.location.href,
      options: "",
      plant_or_section: "Admin",
    };
    accessLogApi(payload,token.token);
  }

  // const handleChange = (e) => {
  //   // console.log(e.target.value, e.target.name);
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   let tempError = formError;
  //   delete tempError[name];
  //   setFormError(tempError);
  //   setApiError("");
  //   // console.log(formValues, "cal");
  // };

  const submitPlantAlert = (plantName) => {
    setApiError("");
    // setFormError(validate());
    // if (Object.keys(validate()).length !== 0) {
    //   return;
    // }
    if (
      plantCardValues[plantName].timeInterval === "" ||
      plantCardValues[plantName].timeInterval <= 0
    ) {
      toast.error("Time Interval invalid for " + plantName + " Plant");
      return;
    }
    const payload = {
      superAdminid: token.UserID,
      recipient: plantCardValues[plantName].reciepients.join(";"),
      plant: plantName,
      isActive: plantCardValues[plantName].isActive,
      interval: plantCardValues[plantName].timeInterval + "m",
    };
    // console.log(payload);
    // let tempCardValues = { ...plantCardValues };
    // tempCardValues[plantName].submitLoader = true;
    // setPlantCardValues(tempCardValues);
    axios
      .post(process.env.REACT_APP_BASE_URL + "adminSuper/alertAdd", payload, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((res) => {
        if (res.data.code === 200) {
          toast.success(
            "Alert Updated Successfully for " + plantName + " Plant"
          );
          getAlertValues();
        }
      })
      .catch((error) => {
        if (InvalidToken(error)) {
          toast.error("token Expired login Again.");
          navigate("/admin");
        } else {
          setApiError(error?.response?.data?.error);
          toast.error(error.message);
          console.log(error.message);
        }
        // setSubmitLoader(false);
      });
  };
  const deletePlantAlert = (plantName) => {
    setApiError("");

    const payload = {
      superAdminid: token.UserID,

      plant: plantName,
    };

    axios
      .post(
        process.env.REACT_APP_BASE_URL + "adminSuper/alertDelete",
        payload,
        {
          headers: { Authorization: `Bearer ${token.token}` },
        }
      )
      .then((res) => {
        if (res.data.code === 200) {
          toast.success(
            "Alert Deleted Successfully for " + plantName + " Plant"
          );
          getAlertValues();
        }
      })
      .catch((error) => {
        if (InvalidToken(error)) {
          toast.error("token Expired login Again.");
          navigate("/admin");
        } else {
          setApiError(error?.response?.data?.error);
          toast.error(error.message);
          console.log(error.message);
        }
        setSubmitLoader(false);
      });
  };
  const handleChangeSelect = (val) => {
    let tempCardValues = { ...plantCardValues };
    let newTempCardValues = {};
    val.map((v1) => {
      if (!tempCardValues[v1.value]) {
        newTempCardValues[v1.value] = {
          plantName: v1.value,
          timeInterval: 0,
          isActive: false,
          reciepients: [],
          recipientInput: "",
          recipientError: "",
          submitLoader: false,
          isChanged: false,
        };
      } else {
        newTempCardValues[v1.value] = {
          plantName: v1.value,
          timeInterval: tempCardValues[v1.value].timeInterval,
          isActive: tempCardValues[v1.value].isActive,
          reciepients: tempCardValues[v1.value].reciepients,
          recipientInput: "",
          recipientError: "",
          submitLoader: false,
          isChanged: false,
        };
        delete tempCardValues[v1.value];
      }
    });
    // console.log(tempCardValues, "tttttttt");
    Object.keys(tempCardValues).map((val) => deletePlantAlert(val));
    setPlantCardValues(newTempCardValues);
    setSelectedPlantVlaues(val);
  };

  const PlantCard = (val) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          // minHeight: "50px",
          marginTop: "10px",
          boxShadow: "0 8px 24px hsl(210deg 8% 62% / 20%)",
        }}
      >
        <div style={{ flex: "0 0 10%", padding: "5px" }}>
          <label> Plant Name : {val.value} </label>
        </div>
        <div style={{ flex: "0 0 15%", padding: "5px" }}>
          <label>Active Status</label>
          <Form.Check
            type="switch"
            id="uidType"
            label={plantCardValues[val.value]?.isActive ? "Active" : "Inactive"}
            checked={plantCardValues[val.value]?.isActive}
            onChange={(e) => {
              let tempCardValues = { ...plantCardValues };
              tempCardValues[val.value].isActive = e.target.checked;
              tempCardValues[val.value].isChanged = true;
              setPlantCardValues(tempCardValues);
            }}
          />
          {/* <div>
            <Select
              value={activeStatusOptions.filter((v1) => {
                return v1.value === plantCardValues[val.value].isActive;
              })}
              placeholder={"Select Active Status"}
              name="activeStatus"
              onChange={(e) => {
                let tempCardValues = { ...plantCardValues };
                tempCardValues[val.value].isActive = e.value;
                setPlantCardValues(tempCardValues);
              }}
              options={activeStatusOptions}
              className="basic-multi-select ActiveSelect w-100"
              classNamePrefix="select"
            />
          </div> */}
        </div>
        <div style={{ flex: "0 0 15%", padding: "5px" }}>
          <label>Time Interval (in Minutes)</label>
          <input
            name="TimeInterval"
            placeholder="Enter Time Interval"
            type="number"
            // max={24}
            min={1}
            onChange={(e) => {
              let tempCardValues = { ...plantCardValues };
              tempCardValues[val.value].timeInterval = e.target.value;
              tempCardValues[val.value].isChanged = true;
              setPlantCardValues(tempCardValues);
            }}
            value={plantCardValues[val.value].timeInterval}
            className="form-control"
          />
        </div>
        <div
          className="recepientContainer"
          style={{ flex: "0 0 40%", padding: "5px" }}
        >
          <label className="mb-2">
            Recipients <span className="text-danger"></span> :
          </label>
          {plantCardValues[val.value].reciepients.map((item) => (
            <div className="tag-item" key={item}>
              {item}
              <button
                type="button"
                className="button"
                onClick={() => {
                  let tempCardValues = { ...plantCardValues };
                  tempCardValues[val.value].reciepients = tempCardValues[
                    val.value
                  ].reciepients.filter((i) => i !== item);
                  tempCardValues[val.value].isChanged = true;
                  setPlantCardValues(tempCardValues);
                }}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center">
            <input
              className={
                "form-control " +
                (plantCardValues[val.value].recipientInput !== "" &&
                plantCardValues[val.value].recipientError !== ""
                  ? "error"
                  : "")
              }
              value={plantCardValues[val.value].recipientInput}
              placeholder="Type email addresses and press `Enter`"
              onKeyDown={(event) => {
                let tempCardValues = { ...plantCardValues };

                if (["Enter", "Tab", ","].includes(event.key)) {
                  event.preventDefault();

                  var value = plantCardValues[val.value].recipientInput.trim();
                  if (!/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(value)) {
                    tempCardValues[val.value].recipientError = "Invalid Email";
                  } else {
                    if (tempCardValues[val.value].reciepients.includes(value)) {
                      tempCardValues[val.value].recipientError =
                        "Already in List";
                    } else {
                      tempCardValues[val.value].reciepients.push(value);
                      tempCardValues[val.value].recipientInput = "";
                    }
                  }
                }
                tempCardValues[val.value].isChanged = true;
                setPlantCardValues(tempCardValues);
              }}
              onChange={(event) => {
                let tempCardValues = { ...plantCardValues };
                tempCardValues[val.value].recipientInput = event.target.value;
                tempCardValues[val.value].recipientError = "";
                setPlantCardValues(tempCardValues);
              }}
            />
            {plantCardValues[val.value].recipientError !== "" &&
              plantCardValues[val.value].recipientInput !== "" && (
                <span className="text-danger">
                  {" "}
                  {plantCardValues[val.value].recipientError}
                </span>
              )}
          </div>
        </div>
        <div style={{ flex: "0 0 10%", padding: "5px" }}>
          {plantCardValues[val.value].submitLoader && loader}
          <button
            className="btn btn-primary mr-1"
            disabled={!plantCardValues[val.value].isChanged}
            onClick={() => submitPlantAlert(val.value)}
          >
            Apply
          </button>
          <button
            className="btn btn-danger ml-1 "
            // disabled={!plantCardValues[val.value].isChanged}
            onClick={() => {
              let tempPlantVlaues = [...selectedPlantVlaues];
              tempPlantVlaues = tempPlantVlaues.filter(
                (v1) => v1.value !== val.value
              );
              // console.log(tempPlantVlaues);
              setSelectedPlantVlaues(tempPlantVlaues);

              deletePlantAlert(val.value);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
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
    <>
      <Navbar />
      <div className="">
        <div className="">
          <h3 className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5">Alert For Data Not Coming</h3>
        </div>
        <div>
          <div>
            <label htmlFor="email">Select Plants</label>
            <Select
            formatOptionLabel={formatOptionLabel}
              isMulti
              name="plants"
              value={selectedPlantVlaues}
              options={plantOptionList}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleChangeSelect}

              // closeMenuOnSelect={false}
              // hideSelectedOptions={false}
              // components={{
              //   Option: InputOption,
              // }}
              // isClearable={false}
            />
          </div>
          <div style={{ padding: "10px" }}>
            {Object.keys(plantCardValues)
              .sort()
              .map((val) => PlantCard({ value: val }))}
          </div>
        </div>
        {/* <div>
          {submitLoader && loader}
          <button
            className="btn btn-primary mt-2"
            disabled={submitLoader}
            onClick={submitSetting}
          >
            Submit
          </button>
        </div> */}
        {apiError !== "" && <div className="error">{apiError}</div>}
      </div>
      <ToastContainer />
    </>
  );
};

export default Alerts;
