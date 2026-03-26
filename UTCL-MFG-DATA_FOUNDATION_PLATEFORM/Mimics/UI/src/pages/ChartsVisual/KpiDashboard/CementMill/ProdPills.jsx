import React from "react";
import Col from "react-bootstrap/Col";

import useFetch from "../useFetch";
import styles from "../KpiDasboard.module.css";
function ProdPills({ today, mtd }) {
  const { email, token } = JSON.parse(localStorage.getItem("login"));
  const {
    data: prodData,
    ok: prodOk,
    status,
    error,
  } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi",
    {
      userId: email,
      kpiTags: [
        ...today,
        ...mtd,
        // {
        //   type: "t3",
        //   tags: ["S-RC4-CM1-Run Hours-Today"],
        // },
        // {
        //   type: "t3",
        //   tags: ["S-RC4-CM2-Run Hours-Today"],
        // },

        // {
        //   type: "t4",
        //   tags: ["S-RC4-CM1-Run Hours-MTD"],
        // },
        // {
        //   type: "t4",
        //   tags: ["S-RC4-CM2-Run Hours-MTD"],
        // },
      ],
    },
    token
  );

  ////////////

  const todayTag = today.map((obj) => obj.tags[0]);
  const todayObjects =
    prodData?.result?.filter((item) => todayTag.includes(item.KPI_Tag)) || [];
  const avgToday = Math.round(
    todayObjects.reduce((sum, item) => sum + item.Value, 0) /
      todayObjects.length
  );

  ////////////

  const mtdTag = mtd.map((obj) => obj.tags[0]);
  const mtdObjects =
    prodData?.result?.filter((item) => mtdTag.includes(item.KPI_Tag)) || [];
  const avgMtd = Math.round(
    mtdObjects.reduce((sum, item) => sum + item.Value, 0) / mtdObjects.length
  );
  ////////////////////
  if (prodOk === false || status === 502 || error) {
    return (
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <p style={{ color: "white" }}>Connection Timed Out!</p>
      </Col>
    );
  }

  if (prodData === null) {
    return (
      <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
        <p style={{ color: "white" }}>loading</p>
      </Col>
    );
  }

  return (
    <Col className={`${styles.production_pills} p-0`} lg={4} md={4} sm={4}>
      <div>
        <p className={styles.heading}>Today</p>

        <>
          <div className={styles.pill_data}>
            {avgToday ? (
              <>
                {avgToday}
                <div>Mt</div>
              </>
            ) : (
              <>NA</>
            )}
          </div>
        </>
      </div>

      <div>
        <p className={styles.heading}>MTD</p>

        <>
          <div className={styles.pill_data}>
            {avgMtd ? (
              <>
                {avgMtd}
                <div>Mt</div>
              </>
            ) : (
              <>NA</>
            )}
          </div>
        </>
      </div>
    </Col>
  );
}

export default ProdPills;
