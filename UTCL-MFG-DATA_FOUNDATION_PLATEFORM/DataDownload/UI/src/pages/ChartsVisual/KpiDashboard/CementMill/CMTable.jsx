import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import styles from "../KpiDasboard.module.css";
import useFetch from "../useFetch";

function Table1({
  isDiffColor,
  labelCol = false,
  today,
  mtd,
  headers,
  title,
  data: propData,
}) {
  const { email, token } = JSON.parse(localStorage.getItem("login"));

  const { data, ok, status, error } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi",
    {
      userId: email,
      kpiTags: [...today, ...mtd],
    },
    token
  );

  ////////////

  const todayTag = today.map((obj) => obj.tags[0]);
  const todayObjects =
    data?.result?.filter((item) => todayTag.includes(item.KPI_Tag)) || [];
  ////////////

  const mtdTag = mtd.map((obj) => obj.tags[0]);
  const mtdObjects =
    data?.result?.filter((item) => mtdTag.includes(item.KPI_Tag)) || [];
  ////////////////////
  if (ok === false || status === 502 || error) {
    return (
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <p style={{ color: "white" }}>Connection Timed Out!</p>
      </Col>
    );
  }

  if (data === null) {
    return (
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <p style={{ color: "white" }}>loading</p>
      </Col>
    );
  }
  ///////
  return (
    <Table
      responsive="sm"
      className={`${styles.table_row1} ${
        !isDiffColor ? styles.primary_color : styles.secondary_color
      }`}
    >
      <thead>
        <tr>{title ? <th>{title}</th> : null}</tr>
        <tr>
          {labelCol && <th></th>}
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {labelCol && <td>today</td>}

          {todayObjects.map((obj) => (
            <td key={obj}>{Math.round(obj.Value) || "NA"}</td>
          ))}
        </tr>
        <tr>
          {labelCol && <td>mtd</td>}
          {mtdObjects.map((obj) => (
            <td key={obj}>{Math.round(obj.Value) || "NA"}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default Table1;
