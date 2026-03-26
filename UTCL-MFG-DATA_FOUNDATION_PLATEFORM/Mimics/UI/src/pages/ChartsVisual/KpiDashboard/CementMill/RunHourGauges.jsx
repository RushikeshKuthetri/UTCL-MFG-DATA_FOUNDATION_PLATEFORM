import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import useFetch from "../useFetch";
import styles from "../KpiDasboard.module.css";
import GaugeChart from "../Gauge";

function RunHourGauges({ kpiTags, today, mtd }) {
  const { email, token } = JSON.parse(localStorage.getItem("login"));

  const {
    data: runData,
    ok: runOk,
    status,
    error,
  } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi",
    {
      userId: email,
      kpiTags: [...today, ...mtd],
    },
    token
  );

  const todayTag = today.map((obj) => obj.tags[0]);
  const todayObjects =
    runData?.result?.filter((item) => todayTag.includes(item.KPI_Tag)) || [];
  const avgToday = Math.round(
    todayObjects.reduce((sum, item) => sum + item.Value, 0) /
      todayObjects.length
  );

  const mtdTag = mtd.map((obj) => obj.tags[0]);
  const mtdObjects =
    runData?.result?.filter((item) => mtdTag.includes(item.KPI_Tag)) || [];
  const avgMtd = Math.round(
    mtdObjects.reduce((sum, item) => sum + item.Value, 0) / mtdObjects.length
  );

  if (runOk === false || status === 502 || error) {
    return (
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <p style={{ color: "white" }}>connection timed out</p>
      </Col>
    );
  }

  if (runData === null) {
    return (
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <p style={{ color: "white" }}>loading</p>
      </Col>
    );
  }

  return (
    <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
      <div>
        <p>Today</p>
        <GaugeChart maxValue={24} value={avgToday || 0} />
      </div>
      <div>
        <p>MTD</p>
        <GaugeChart maxValue={720} value={avgMtd || 0} />
      </div>
    </Col>
  );
}

export default React.memo(RunHourGauges);
