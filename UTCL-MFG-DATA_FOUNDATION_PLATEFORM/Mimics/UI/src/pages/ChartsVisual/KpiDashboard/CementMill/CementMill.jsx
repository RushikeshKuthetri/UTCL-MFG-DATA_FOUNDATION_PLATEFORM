import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "../useFetch";
import RunHourGauges from "./RunHourGauges";
import styles from "../KpiDasboard.module.css";
import ProdPills from "./ProdPills";
import CMTable from "./CMTable";

function CementMill() {
  return (
    <>
      <Row type="gauges" className={`${styles.gauge_row} pt-1`}>
        <RunHourGauges
          today={[
            {
              type: "t3",
              tags: ["S-RC4-CM1-Run Hours-Today"],
            },
            {
              type: "t3",
              tags: ["S-RC4-CM2-Run Hours-Today"],
            },
          ]}
          mtd={[
            {
              type: "t4",
              tags: ["S-RC4-CM1-Run Hours-MTD"],
            },
            {
              type: "t4",
              tags: ["S-RC4-CM2-Run Hours-MTD"],
            },
          ]}
        />
        <ProdPills
          today={[
            {
              type: "t11",
              tags: ["S-RC4-CM1-Production-Today"],
            },
            {
              type: "t11",
              tags: ["S-RC4-CM2-Production-Today"],
            },
          ]}
          mtd={[
            {
              type: "t11",
              tags: ["S-RC4-CM1-Production-MTD"],
            },
            {
              type: "t11",
              tags: ["S-RC4-CM2-Production-MTD"],
            },
          ]}
        />
        <RunHourGauges
          today={[
            {
              type: "t6",
              tags: ["S-RC4-CM1-Total Power-Today"],
            },
            {
              type: "t6",
              tags: ["S-RC4-CM2-Total Power-Today"],
            },
          ]}
          mtd={[
            {
              type: "t8",
              tags: ["S-RC4-CM1-Total Power-MTD"],
            },
            {
              type: "t8",
              tags: ["S-RC4-CM2-Today Power-MTD"],
            },
          ]}
        />
      </Row>

      <Row type="TableRow1" className={styles.table_row}>
        <Col lg={4} md={4} sm={4}>
          <CMTable
            labelCol={true}
            isDiffColor={false}
            headers={["CM1", "CM2"]}
            today={[
              {
                type: "t3",
                tags: ["S-RC4-CM1-Run Hours-Today"],
              },
              {
                type: "t3",
                tags: ["S-RC4-CM2-Run Hours-Today"],
              },
            ]}
            mtd={[
              {
                type: "t4",
                tags: ["S-RC4-CM1-Run Hours-MTD"],
              },
              {
                type: "t4",
                tags: ["S-RC4-CM2-Run Hours-MTD"],
              },
            ]}
          />
        </Col>

        <Col lg={4} md={4} sm={4}>
          {" "}
          <CMTable
            isDiffColor={true}
            headers={["CM1", "CM2"]}
            today={[
              {
                type: "t11",
                tags: ["S-RC4-CM1-Production-Today"],
              },
              {
                type: "t11",
                tags: ["S-RC4-CM2-Production-Today"],
              },
            ]}
            mtd={[
              {
                type: "t11",
                tags: ["S-RC4-CM1-Production-MTD"],
              },
              {
                type: "t11",
                tags: ["S-RC4-CM2-Production-MTD"],
              },
            ]}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <CMTable
            isDiffColor={false}
            headers={["CM1", "CM2"]}
            today={[
              {
                type: "t6",
                tags: ["S-RC4-CM1-Total Power-Today"],
              },
              {
                type: "t6",
                tags: ["S-RC4-CM2-Total Power-Today"],
              },
            ]}
            mtd={[
              {
                type: "t8",
                tags: ["S-RC4-CM1-Total Power-MTD"],
              },
              {
                type: "t8",
                tags: ["S-RC4-CM2-Today Power-MTD"],
              },
            ]}
          />
        </Col>
      </Row>

      <Row type="TableRow1" className={styles.table_row}>
        <Col lg={4} md={4} sm={4}>
          <CMTable
            title={"Clinker Stock"}
            labelCol={true}
            isDiffColor={false}
            headers={["CM1", "CM2"]}
            today={[
              {
                // type: "t6",
                tags: ["S-RC4-CM1-TPH-Today"],
              },
              {
                // type: "t6",
                tags: ["S-RC4-CM2-TPH-Today"],
              },
            ]}
            mtd={[
              {
                // type: "t8",
                tags: ["S-RC4-CM1-TPH-MTD"],
              },
              {
                // type: "t8",
                tags: ["S-RC4-CM2-TPH-MTD"],
              },
            ]}
          />
        </Col>

        <Col lg={4} md={4} sm={4}>
          <CMTable
            title={"CM TPH"}
            isDiffColor={false}
            headers={["CM1", "CM2"]}
            today={[
              {
                type: "t6",
                tags: ["S-RC4-CM1-TPH-Today"],
              },
              {
                type: "t6",
                tags: ["S-RC4-CM2-TPH-Today"],
              },
            ]}
            mtd={[
              {
                type: "t8",
                tags: ["S-RC4-CM1-TPH-MTD"],
              },
              {
                type: "t8",
                tags: ["S-RC4-CM2-TPH-MTD"],
              },
            ]}
          />
        </Col>

        <Col lg={4} md={4} sm={4}>
          <CMTable
            title={"CM TPD"}
            isDiffColor={false}
            headers={["CM1", "CM2"]}
            today={[
              {
                // type: "t6",
                tags: ["S-RC4-CM1-TPH-Today"],
              },
              {
                // type: "t6",
                tags: ["S-RC4-CM2-TPH-Today"],
              },
            ]}
            mtd={[
              {
                // type: "t8",
                tags: ["S-RC4-CM1-TPH-MTD"],
              },
              {
                // type: "t8",
                tags: ["S-RC4-CM2-TPH-MTD"],
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
}

export default CementMill;
