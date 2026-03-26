import axios from "axios";
import { useState, useEffect } from "react";
import "../../css/Reports.css";
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
import DatePicker from "react-datepicker";
import Select from "react-select";
// import "bootstrap/dist/css/bootstrap.min.css";

export const Reports = () => {
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={25}
    />
  );

  const [reportData, setReportData] = useState({});
  const [nodataFlag, setNodataFlag] = useState(false);
  const [reportTableData, setReportTableData] = useState([]);
  const [TotalPage, setTotalPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [reportTableLoader, setReportTableLoader] = useState(false);
  const [exportLoader, setExportLoader] = useState(false);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(
    new Date(moment(new Date()).subtract("1", "hours"))
  );

  const [endDate, setEndDate] = useState(new Date());
  const [intervalOptionList, setIntervalOptionList] = useState({});
  const [selectedInterval, setSelectedInterval] = useState(1);
  const [selectedIntervaltype, setSelectedIntervaltype] = useState("m");
  const intervalTypeOptions = [
    { value: "m", label: "minute" },
    { value: "h", label: "hour" },
    { value: "d", label: "day" },
  ];
  useEffect(() => {
    let tempInt = {
      m: [],
      h: [],
      d: [],
    };
    for (let i = 1; i <= 59; i++) {
      tempInt.m.push({
        value: i,
        label: i,
      });
    }
    for (let i = 1; i <= 23; i++) {
      tempInt.h.push({
        value: i,
        label: i,
      });
    }
    for (let i = 1; i <= 31; i++) {
      tempInt.d.push({
        value: i,
        label: i,
      });
    }

    setIntervalOptionList(tempInt);
    if (!!!sessionStorage.getItem("reportDisplayData")) {
      return;
    }
    // console.log(JSON.parse(sessionStorage.getItem("reportDisplayData")));
    setReportData(JSON.parse(sessionStorage.getItem("reportDisplayData")));
  }, []);
  useEffect(() => {
    if (!!!sessionStorage.getItem("reportDisplayData")) {
      return;
    }
    if (Object.keys(reportData).length > 0) {
      setData();
    }
  }, [reportData]);
  useEffect(() => {
    reportValuesTable();
  }, [activePage]);

  const setData = () => {
    console.log(reportData, "r");
    let intervalminutes = moment.duration(reportData.Interval).asMinutes();
    if (intervalminutes >= 1440) {
      setSelectedInterval(moment.duration(reportData.Interval).asDays());
      setSelectedIntervaltype("d");
      // console.log(moment.duration(reportData.Interval).asDays());
    } else if (intervalminutes >= 60) {
      setSelectedInterval(moment.duration(reportData.Interval).asHours());
      setSelectedIntervaltype("h");
      // console.log(moment.duration(reportData.Interval).asHours());
    } else {
      setSelectedInterval(moment.duration(reportData.Interval).asMinutes());
      setSelectedIntervaltype("m");
      // console.log(moment.duration(reportData.Interval).asMinutes());
    }

    if (reportData?.EmailFrequency === "Yesterday") {
      let date = new Date(moment().subtract(1, "day"));

      setStartDate(
        new Date(moment(reportData.StartDate, "YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
      setEndDate(
        new Date(moment(reportData.EndDate, "YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
    }

    if (reportData?.EmailFrequency === "Daily") {
      let date = new Date();
      setStartDate(
        new Date(moment(reportData.StartDate, "YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
      setEndDate(
        new Date(moment(reportData.EndDate, "YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
    }
    if (reportData?.EmailFrequency === "Monthly") {
      console.log("herrrrrrr1rf1");
      let date = new Date(moment().subtract(1, "month"));
      setStartDate(
        new Date(moment(reportData.StartDate, "YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
      setEndDate(
        new Date(moment().endOf("day").format("YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
    }
    if (reportData?.EmailFrequency === "Weekly") {
      let date = new Date(moment().subtract(1, "week"));
      setStartDate(
        new Date(moment(reportData.StartDate, "YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
      setEndDate(
        new Date(moment(reportData.EndDate, "YYYY-MM-DDTHH:mm")).setDate(
          date.getDate()
        )
      );
    }
    if (reportData?.EmailFrequency === "Custom") {
      setStartDate(new Date(moment(reportData.StartDate, "YYYY-MM-DDTHH:mm")));
      setEndDate(new Date(moment(reportData.EndDate, "YYYY-MM-DDTHH:mm")));
    }

    // else {
    //   if (reportData?.SchedulerType === "3") {
    //     setStartDate(
    //       new Date(
    //         moment(new Date()).subtract(reportData?.SchedulerValue, "hours")
    //       )
    //     );
    //     setEndDate(new Date());
    //   }
    // }
    // } else {
    // }
    // setSelectedInterval(moment.duration(reportData.Interval).asMinutes());
    reportValuesTable();
  };
  const handleChangeInterval = (val) => {
    setSelectedInterval(val.value);
  };

  const reportValuesTable = () => {
    if (Object.keys(reportData).length === 0) {
      return;
    }
    console.log(selectedIntervaltype, "asds");
    let payload = {
      Tags: reportData.Tags.replaceAll("@@@", ","),
      startDate: moment(startDate).format("YYYY-MM-DDTHH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DDTHH:mm"),
      interval: selectedInterval + selectedIntervaltype,
      plantName: reportData.Plant,
      pageNo: activePage,
    };
    // console.log(payload);

    // setSubmitLoader(deleteModalData.Timestamp);
    setReportTableData([]);
    setReportTableLoader(true);
    axios
      .post(BASE_URL + "cbm/template/reportData", payload)
      .then((res) => {
        // console.log("ress", res);
        if (res.data.result === "No Records Found") {
          toast.warning("No Records Found");
          setReportTableLoader(false);
        } else {
          let TotalCount = Math.ceil(res.data.result.shift().Count / 100);
          console.log(TotalCount);
          setTotalPage(TotalCount);
          setReportTableData(res.data.result);
          setReportTableLoader(false);
        }

        // setSubmitLoader("");
        // handleDeleteModalClose();
        // getReportData();
      })
      .catch((err) => {
        setReportTableLoader(false);
        toast.error(err.message);
      });
  };
  const { token } = JSON.parse(localStorage.getItem("login"));
  const exportReportData = () => {
    if (Object.keys(reportData).length === 0) {
      return;
    }
    let payload = {
      Tags: reportData.Tags.replaceAll("@@@", ","),
      startDate: moment(startDate).format("YYYY-MM-DDTHH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DDTHH:mm"),
      interval: selectedInterval + selectedIntervaltype,
      plantName: reportData.Plant,
      ReportTemplateName: reportData.ReportTemplateName,
    };
    // console.log(payload);

    // setSubmitLoader(deleteModalData.Timestamp);
    // setReportTableData([]);
    setExportLoader(true);
    axios
      .post(BASE_URL + "cbm/template/exportReportData", payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("ress", res);
        if (res.data.result === "No Records Found") {
          toast.warning("No Records Found");
        } else {
          setExportLoader(false);
          window.open(res.data.result, "_blank");
          // setTotalPage(TotalCount);
          // setReportTableData(res.data.result);
          // setReportTableLoader(false);
        }

        // setSubmitLoader("");
        // handleDeleteModalClose();
        // getReportData();
      })
      .catch((err) => {
        setExportLoader(false);
        toast.error(err.message);
      });
  };

  const HeaderRender = (columns) => {
    return (
      <thead>
        <tr>
          {columns.map((val, index) => {
            if (val === "Row_Number") {
              return;
            }
            if (val === "TimeStamp") {
              return <th key={index}>{val}</th>;
            }
            val = val.split("Desc-");
            let x1 = val.shift();
            val = val[0].split("UoM");
            let x2 = val[0];
            let x3 = val[1];
            return (
              <th style={{ whiteSpace: "pre" }} key={index}>
                {x1 + "\nDesc -" + x2 + "\nUoM -" + x3}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };
  const viewTable = (data) => {
    return (
      <tbody>
        {data.map((val, index) => {
          return (
            <tr key={index}>
              {Object.keys(reportTableData[0]).map((v1, i1) => {
                if (v1 === "Row_Number") {
                  return;
                }
                if (i1 === 0) {
                  return (
                    <th key={i1}>
                      {new Date(
                        moment(val[v1], "YYYY-MM-DDTHH:mm")
                      ).toLocaleString()}
                    </th>
                  );
                } else {
                  if (v1?.renderer) {
                    return v1.renderer(val, i1);
                  } else {
                    return <td key={i1}>{val[v1]}</td>;
                  }
                }
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  if (!!!sessionStorage.getItem("reportDisplayData")) {
    return (
      <AuthenticatedTemplate>
        <div className="mt-2 h-50" style={{ borderRadius: "0px" }}>
          <h5>No Report Selected or Found to show</h5>
        </div>
      </AuthenticatedTemplate>
    );
  }

  return (
    <AuthenticatedTemplate>
      <div className="dash-top" style={{ borderRadius: "0px" }}>
        {/* <h4 style={{ marginLeft: "10px", marginTop: "10px" }}>Report Values</h4> */}
        <div className="mt-2 mycard editorContainer">
          <div className="col-md-2 col-sm-4 col-12 pl-2 pr-2">
            <label className="mb-2">Report Name</label>
            <label className="d-block">{reportData?.ReportTemplateName}</label>
          </div>

          <div className="col-md-2 col-sm-4 col-12 pl-2 pr-2">
            <label className="mb-2">
              Start Date <span className="text-danger">*</span>
            </label>
            <DatePicker
              selected={startDate}
              className={"form-control"}
              popperClassName="zclass"
              placeholderText="Click to select a date"
              onChange={(date) => {
                setStartDate(date);
              }}
              showTimeSelect
              dateFormat="d/MM/yyyy h:mm aa"
              timeIntervals={1}
              calendarClassName="rasta-stripes"
            />
          </div>
          <div className="col-md-2 col-sm-4 col-12 pl-2 pr-2">
            <label className="mb-2">
              End Date <span className="text-danger">*</span>
            </label>
            <DatePicker
              selected={endDate}
              popperClassName="zclass"
              placeholderText="Click to select a date"
              className={"form-control"}
              onChange={(date) => {
                setEndDate(date);
              }}
              showTimeSelect
              dateFormat="d/MM/yyyy h:mm aa"
              timeIntervals={1}
              calendarClassName="rasta-stripes"
            />
          </div>
          <div className="col-md-2 col-sm-4 col-12 pl-2 pr-2">
            <label className="mb-2">
              {"Interval"}
              <span className="text-danger">*</span>
            </label>

            <div className="d-flex">
              <Select
                value={
                  selectedIntervaltype !== "" &&
                  intervalTypeOptions.filter(
                    (val) => val.value === selectedIntervaltype
                  )
                }
                placeholder="Select Interval Type"
                name="Interval"
                onChange={(e) => setSelectedIntervaltype(e.value)}
                options={intervalTypeOptions}
                // isDisabled={
                //   window.location.href.split("/").pop() === "editReportPage"
                // }
                className="basic-multi-select"
                classNamePrefix="select"
              />
              <Select
                value={
                  selectedInterval !== "" && {
                    value: selectedInterval,
                    label: selectedInterval,
                  }
                }
                placeholder="Select Interval"
                name="Interval"
                onChange={(e) => handleChangeInterval(e)}
                options={intervalOptionList[selectedIntervaltype]}
                // isDisabled={
                //   window.location.href.split("/").pop() === "editReportPage"
                // }
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
          <div
            className="col-md-3 col-sm-4 col-12 d-flex pl-2 pr-2"
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <button className="btn btnfrst" onClick={() => reportValuesTable()}>
              Go
            </button>
            <button
              className="btn btnfrst d-flex"
              onClick={() => exportReportData()}
              disabled={exportLoader}
            >
              Download {exportLoader && loader}
            </button>
          </div>
        </div>

        {/* <div style={{ height: "230px", overflowY: "scroll" }}>
          <Table responsive="sm">
            {HeaderRender(columns)}
            {templateData.length > 0 && viewTable(templateData)}
          </Table>
        </div>
        {nodataFlag && (
          <div style={{ display: "flex", justifyContent: " center" }}>
            No Record Found
          </div>
        )} */}

        <div className="mycard mt-4 reportvalue">
          {reportTableLoader && (
            <Loader
              type="spinner-circle"
              bgColor={"#000000"}
              title={"bubble-scale"}
              color={"#FFFFFF"}
              size={50}
            />
          )}
          {reportTableData.length > 0 && (
            <div>
              {/* <div className="tableTitle">
              <h5>Report Values</h5>
            </div> */}

              <div className="tableContainer">
                <table>
                  {HeaderRender(Object.keys(reportTableData[0]))}

                  {reportTableData.length > 0 && viewTable(reportTableData)}
                </table>
              </div>
            </div>
          )}

          {reportTableData.length > 0 && (
            <div className="d-flex justify-content-end align-items-center">
              <Pagination>
                <Pagination.First
                  onClick={() => {
                    setActivePage(1);
                  }}
                />
                <Pagination.Prev
                  onClick={() => {
                    if (activePage > 1) {
                      setActivePage(activePage - 1);
                    }
                  }}
                />

                <Pagination.Item>{activePage}</Pagination.Item>
                <Pagination.Next
                  onClick={() => {
                    if (activePage < TotalPage) setActivePage(activePage + 1);
                  }}
                />
                <Pagination.Last
                  onClick={() => {
                    setActivePage(TotalPage);
                  }}
                />
              </Pagination>{" "}
              <label className="ml-2 my-0 outof"> out of {TotalPage} </label>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedTemplate>
  );
};
