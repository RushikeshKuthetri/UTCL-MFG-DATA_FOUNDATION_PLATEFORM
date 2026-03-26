import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";

import ColumnChart from "../ColumnChart";
import styles from "../KpiDasboard.module.css";
import useFetch from "../useFetch";
import RunHourGauges from "./RunHourGauges";
import ProdPills from "./ProdPills";
import PowerGauges from "./PowerGauges";
import Table1 from "./Table";
import TpdTable from "./Tpdtable";

function Kiln() {
  const { email, token } = JSON.parse(localStorage.getItem("login"));
  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD hh:mm");

  const {
    data: prodData,
    ok: okProd,
    error: prodError,
  } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi",
    {
      userId: email,
      kpiTags: [
        {
          type: "t11",
          tags: ["S-RC4-KL1-Production-Today"],
        },
        {
          type: "t11",
          tags: ["S-RC4-KL1-Production-MTD"],
        },
      ],
    },
    token
  );

  const {
    data: graphData,
    ok: serisOk,
    error: seriesError,
  } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi2",

    {
      userId: email,
      kpiTags: [
        "S-RC4-KL1-Run Hours-C-MTD",
        "S-RC4-KL1-Production-C-MTD",
        "S-RC4-KL1-Total Power-C-MTD",
      ],
      startDate: startOfMonth,
      endDate: moment().format("YYYY-MM-DD hh:mm"),
    },
    token
  );
  console.log(graphData, startOfMonth);

  const runHoursSeries = graphData?.seriesData[0]?.data
    ?.map((i) => i[1])
    .filter((i) => i);

  const productionSeries = graphData?.seriesData[1]?.data
    ?.map((i) => i[1])
    .filter((i) => i);

  const powerSeries = graphData?.seriesData[2]?.data
    ?.map((i) => i[1])
    .filter((i) => i);

  const {
    data: runData,
    ok: okRun,
    error: runError,
  } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi",

    {
      userId: email,
      kpiTags: [
        {
          type: "t3",
          tags: ["S-RC4-KL1-Run Hours-Today"],
        },
        {
          type: "t4",
          tags: ["S-RC4-KL1-Run Hours-MTD"],
        },
      ],
    },
    token
  );

  const {
    data: powerData,
    ok: okPower,
    error: powerError,
  } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi",
    {
      userId: email,
      kpiTags: [
        {
          type: "t6",
          tags: ["S-RC4-KL1-Total Power-Today"],
        },
        {
          type: "t8",
          tags: ["S-RC4-KL1-Total Power-MTD"],
        },
      ],
    },
    token
  );

  if (!prodData || !runData || !powerData || !graphData) {
    return <p style={{ color: "white" }}>loading</p>;
  }

  if (
    prodData?.status === "failed" ||
    runData?.status === "failed" ||
    powerData?.status === "failed" ||
    graphData?.status === "failed" ||
    runError ||
    prodError ||
    powerError ||
    seriesError
  ) {
    return <p style={{ color: "white" }}>error</p>;
  }

  if (
    okProd === false ||
    okRun === false ||
    okPower === false ||
    serisOk === false
  ) {
    return <p style={{ color: "white" }}>error</p>;
  }

  return (
    <>
      <Row type="gauges" className={`${styles.gauge_row} pt-1`}>
        <RunHourGauges runData={runData} />
        <ProdPills prodData={prodData} />
        <PowerGauges powerData={powerData} />
      </Row>

      <Row type="TableRow1" className={styles.table_row}>
        <Col lg={4} md={4} sm={4}>
          <Table1
            labelCol={true}
            isDiffColor={false}
            data={runData}
            todayTag={"S-RC4-KL1-Run Hours-Today"}
            mtdTag={"S-RC4-KL1-Run Hours-MTD"}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <Table1
            isDiffColor={true}
            data={prodData}
            todayTag={"S-RC4-KL1-Production-Today"}
            mtdTag={"S-RC4-KL1-Production-MTD"}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <Table1
            isDiffColor={false}
            data={powerData}
            todayTag={"S-RC4-KL1-Total Power-Today"}
            mtdTag={"S-RC4-KL1-Total Power-MTD"}
          />
        </Col>
      </Row>

      <Row type="ColChart" className={styles.column_chart_row}>
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={runHoursSeries} color="#06f1f5"></ColumnChart>
        </Col>

        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={productionSeries} color="#ff6712"></ColumnChart>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={powerSeries} color="#06f1f5"></ColumnChart>
        </Col>
      </Row>

      {/* <Row
        style={{ height: "20vh" }}
        type="TableRow2"
        className={styles.table_row}
      >
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={runHoursSeries} color="#06f1f5" />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={productionSeries} color="#06f1f5" />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={powerSeries} color="#06f1f5" />
        </Col>
      </Row> */}

      <Row type="TableRow2" className={styles.table_row}>
        <Col lg={4} md={4} sm={4}>
          <TpdTable
            title={"Clinker Stock"}
            labelCol={true}
            todayTag={"S-RC4-KL1-TPH-Today"}
            mtdTag={"S-RC4-KL1-TPH-MTD"}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <TpdTable
            isDiffColor={true}
            title={"Kiln TPH"}
            todayTag={"S-RC4-KL1-TPH-Today"}
            mtdTag={"S-RC4-KL1-TPH-MTD"}
            type="t5"
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <TpdTable
            title={"Kiln TPD"}
            todayTag={"S-RC4-KL1-TPH-Today"}
            mtdTag={"S-RC4-KL1-TPH-MTD"}
          />
        </Col>
      </Row>
    </>
  );
}

export default React.memo(Kiln);
