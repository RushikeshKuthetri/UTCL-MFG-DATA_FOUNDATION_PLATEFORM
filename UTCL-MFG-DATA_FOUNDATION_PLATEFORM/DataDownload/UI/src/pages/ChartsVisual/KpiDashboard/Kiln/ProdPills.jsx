import React from "react";
import Col from "react-bootstrap/Col";

import styles from "../KpiDasboard.module.css";

function ProdPills({ prodData }) {
  console.log(prodData);

  const todayTag = "S-RC4-KL1-Production-Today";
  const todayObject = prodData?.result.find(
    (item) => item.KPI_Tag === todayTag
  );

  const mtdTag = "S-RC4-KL1-Production-MTD";
  const mtdObject = prodData?.result.find((item) => item.KPI_Tag === mtdTag);

  return (
    <Col className={`${styles.production_pills} p-0`} lg={4} md={4} sm={4}>
      <div>
        <p className={styles.heading}>Today</p>

        <>
          <div className={styles.pill_data}>
            {todayObject?.Value ? (
              <>
                {Math.round(todayObject?.Value)}
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
            {mtdObject?.Value ? (
              <>
                {Math.round(mtdObject?.Value)}
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

export default React.memo(ProdPills);
