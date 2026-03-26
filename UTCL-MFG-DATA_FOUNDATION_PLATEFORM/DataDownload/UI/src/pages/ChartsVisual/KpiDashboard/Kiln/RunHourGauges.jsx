import React from "react";
import Col from "react-bootstrap/Col";

import styles from "../KpiDasboard.module.css";
import GaugeChart from "../Gauge";
function RunHourGauges({ runData }) {
  console.log(runData);

  const todayTag = "S-RC4-KL1-Run Hours-Today";
  const todayObject = runData?.result.find((item) => item.KPI_Tag === todayTag);

  const mtdTag = "S-RC4-KL1-Run Hours-MTD";
  const mtdObject = runData?.result.find((item) => item.KPI_Tag === mtdTag);

  return (
    <>
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <div>
          <p>Today</p>

          <GaugeChart
            maxValue={24}
            value={Math.round(todayObject?.Value) || 0}
          />
        </div>
        <div>
          <p>MTD</p>

          <GaugeChart
            maxValue={720}
            value={Math.round(mtdObject?.Value) || 0}
          />
        </div>
      </Col>
      {/* <br />
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
        lg={4}
        md={4}
        sm={4}
      >
        helloo
      </Col> */}
    </>
  );
}

export default React.memo(RunHourGauges);
