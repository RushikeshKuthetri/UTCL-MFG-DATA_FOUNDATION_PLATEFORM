import React from "react";
import Col from "react-bootstrap/Col";

import styles from "../KpiDasboard.module.css";
import GaugeChart from "../Gauge";
function PowerGauges({ powerData }) {
  console.log(powerData);

  const todayTag = "S-RC4-KL1-Total Power-Today";
  const todayObject = powerData?.result.find(
    (item) => item.KPI_Tag === todayTag
  );

  const mtdTag = "S-RC4-KL1-Total Power-MTD";
  const mtdObject = powerData?.result.find((item) => item.KPI_Tag === mtdTag);

  return (
    <>
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <div>
          <p>Today</p>

          <GaugeChart
            maxValue={30}
            value={Math.round(todayObject?.Value) || 0}
          />
        </div>
        <div>
          <p>MTD</p>

          <GaugeChart maxValue={30} value={Math.round(mtdObject?.Value) || 0} />
        </div>
      </Col>
    </>
  );
}

export default React.memo(PowerGauges);
