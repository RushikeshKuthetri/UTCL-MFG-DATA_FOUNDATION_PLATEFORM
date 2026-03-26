
import axios from "axios";
import { useState, useEffect } from "react";
// import "./emailLogs.css";
import { Button, Pagination, Table } from "react-bootstrap";
import Loader from "react-js-loader";
import { toast } from "react-toastify";
import { BsEyeFill } from "react-icons/bs";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import useToken from "../UseToken/useToken";
// import { config } from "../config";
import { AuthenticatedTemplate } from "@azure/msal-react";
import Navbar from "../Navbar/navbar";
import { accessLogApi } from "../../utils/accessLogApi";

const EmailLogs = () => {
  const loader = (
    <Loader
      type="spinner-circle"
      bgColor={"#000000"}
      title={"bubble-scale"}
      color={"#FFFFFF"}
      size={15}
    />
  );

  const [nodataFlag, setNodataFlag] = useState(false);
  const [TotalPage, setTotalPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [templateData, setTemplateData] = useState([]);
  const { token, setToken } = useToken();
  const navigate = useNavigate();
  useEffect(() => {
    accessLogDashboard();
  }, []);
  useEffect(() => {
    getTemplateData();
  }, [activePage]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
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

  const getTemplateData = () => {
    let payload = {
      userid: JSON.parse(sessionStorage.getItem("accountDetails"))?.username,
      pageNo: activePage,
    };
    setNodataFlag(false);

    axios
      .post(
        process.env.REACT_APP_BASE_URL + "cbm/template/EmailLogs",
        payload,
        {
          headers: { Authorization: `Bearer ${token.token}` },
        }
      )
      .then((res) => {
        res = res.data.result;
        if (res === "No Records Found") {
          setNodataFlag(true);
          // console.log(res, "resssssssssssssssss");
          setTemplateData([]);
        } else {
          let TotalCount = Math.ceil(res.shift().Count / 100);
          setTotalPage(TotalCount);
          res.map((val, index) => {
            val.ToRecipients = val.ToRecipients.split(",");
          });
          res = res.sort((a, b) => {
            return new Date(b.Timestamp) - new Date(a.Timestamp);
          });
          setTemplateData(res);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const columns = [
    {
      title: "Template Name",
      field: "TemplateName",
      key: "1",
      width: "15%",
    },
    {
      title: "Recipients",
      field: "ToRecipients",
      searchable: false,
      key: "2",
      width: "35%",
      renderer: (value) => {
        return (
          <td className="px-4 text-sm py-2 align-top" style={{ color: "var(--text-color)" }}>
            {value !== 0 &&
              value.map((v2, index) => (
                <div key={index} className="plantBox">
                  {v2}
                </div>
              ))}
          </td>
        );
      },
    },
    {
      title: "Use Case",
      field: "UseCase",
      key: "3",
      width: "15%",
    },
    {
      title: "Function Name",
      field: "FromFunctionName",
      key: "4",
      width: "15%",
    },
    {
      title: "Subject",
      field: "Subject",
      key: "5",
      width: "20%",
    },
    {
      title: "Timestamp",
      field: "Timestamp",
      key: "6",
      width: "10%",
    },
    // {
    //   title: "Actions",
    //   field: "",
    //   key: "6",
    // },
  ];
  const HeaderRender = () => {
    return (
      <thead className="sticky top-0 z-20 bg-gradient-to-r from-orange-400 to-orange-300 text-black">
        {" "}
        <tr>
          {columns.map((val, index) => {
            if (val.title === "Actions") {
              return (
                <th
                  key={index}
                  style={{ width: val.width }}
                  className="text-left text-[14px]  px-2 py-2 font-semibold whitespace-nowrap border-b border-[var(--form-border)]"
                >
                  {val.title}
                </th>
              );
            }
            return (
              <th
                key={index}
                style={{ width: val.width }}
                className="text-left text-[14px] px-3 py-2 font-semibold border-b border-[var(--form-border)]"
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
      <tbody className="border-b border-[var(--form-border)]">
        {templateData.map((val, index) => {
          return (
            <tr
              key={index}
              className="text-left border-b border-[var(--form-border)] hover:bg-[var(--table-row-hover)] transition"
            >
              {columns.map((v1, i1) => {
                if (v1?.renderer) {
                  return v1.renderer(val[v1.field], v1, i1);
                } else {
                  return (
                    <td
                      key={i1}
                      style={{ width: v1.width, color: "var(--text-color)" }}
                      className="text-left text-[13px] px-3 py-2 align-top break-words"
                    >
                      {val[v1.field]}
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

  return (
    <AuthenticatedTemplate>
      <div className="flex flex-col overflow-hidden">
        <div className="flex text-[18px] font-medium font-poppins text-[var(--title)] -mt-0.5 ">
          <span>Sent Email Logs</span>
        </div>
        <div className="flex flex-col flex-1 min-h-0 w-full mt-1">
          <div
            className="w-full overflow-x-auto overflow-y-auto rounded-xl border border-[var(--form-border)] mb-1"
            style={{ maxHeight: "calc(100vh - 208px)" }}
          >
            <table className="w-full min-w-[1100px] border-collapse">
              {HeaderRender()}
              {templateData.length > 0 && viewTable()}
              {/* {DeleteModal()}
            {CopyModal()} */}
            </table>
          </div>
          {/* {paginationBar()} */}
          {nodataFlag && (
            <div
              className="empty-state flex flex-row items-center justify-center mt-5 mb-1.5 p-4
  rounded-lg border border-dashed border-[var(--success-border)]
  bg-[var(--success-bg)] text-[var(--success-text)]
  shadow-sm transition-all duration-300
  hover:shadow-md hover:border-orange-300 gap-4"
            >
              <div
                className="icon w-10 h-10 flex items-center justify-center rounded-full
    bg-orange-100 text-orange-500 text-xl shadow-inner"
              >
                🔍
              </div>

              <p className="text-xl font-semibold tracking-wide text-center">
                No records found
              </p>
            </div>
          )}
          {templateData.length > 0 && (
            <div className="flex items-center justify-between mt-1 pt-1 shrink-0 px-2">
              {" "}
              {/* Pagination Buttons */}
              <div className="flex items-center gap-2">
                {/* First */}
                <button
                  onClick={() => {
                    setActivePage(1);
                  }}
                  disabled={activePage === 1}
                  className="px-2 py-1 rounded-md border border-[var(--form-border)]
                   bg-[var(--input-enable-bg)] text-sm
                   text-[var(--text-color)]
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-[var(--button-hover-bg)]
                   transition-all"
                >
                  First
                </button>

                {/* Prev */}
                <button
                  onClick={() => {
                    if (activePage > 1) {
                      setActivePage(activePage - 1);
                    }
                  }}
                  disabled={activePage === 1}
                  className="px-2 py-1 rounded-md border border-[var(--form-border)]
                   bg-[var(--input-enable-bg)] text-sm
                   text-[var(--text-color)]
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-[var(--button-hover-bg)]
                   transition-all"
                >
                  Prev
                </button>

                {/* Current Page */}
                <span className="px-3 py-1 text-sm font-semibold text-[var(--title)]">
                  {activePage}
                </span>

                {/* Next */}
                <button
                  onClick={() => {
                    if (activePage < TotalPage) {
                      setActivePage(activePage + 1);
                    }
                  }}
                  disabled={activePage === TotalPage}
                  className="px-2 py-1 rounded-md border border-[var(--form-border)]
                   bg-[var(--input-enable-bg)] text-sm
                   text-[var(--text-color)]
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-[var(--button-hover-bg)]
                   transition-all"
                >
                  Next
                </button>

                {/* Last */}
                <button
                  onClick={() => {
                    setActivePage(TotalPage);
                  }}
                  disabled={activePage === TotalPage}
                  className="px-2 py-1 rounded-md border border-[var(--form-border)]
                   bg-[var(--input-enable-bg)]
                   text-[var(--text-color)] text-sm
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-[var(--button-hover-bg)]
                   transition-all"
                >
                  Last
                </button>
              </div>
              {/* Page Info */}
              <span className="text-sm text-[var(--text-color)]">
                {activePage}  Out of  {TotalPage}
              </span>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedTemplate>
  );

};
export default EmailLogs;
