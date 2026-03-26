import { Table } from "react-bootstrap";
import styles from "../KpiDasboard.module.css";

function Table1({ isDiffColor, data, labelCol = false, todayTag, mtdTag }) {
  const todayObject = data?.result.find((item) => item.KPI_Tag === todayTag);
  const mtdObject = data?.result.find((item) => item.KPI_Tag === mtdTag);

  return (
    <Table
      responsive="sm"
      className={`${styles.table_row1} ${
        !isDiffColor ? styles.primary_color : styles.secondary_color
      }`}
    >
      <thead>
        <tr>
          {labelCol && <th></th>}
          <th>kl1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {labelCol && <td>today</td>}
          <td>{Math.round(todayObject?.Value) || "NA"}</td>
        </tr>
        <tr>
          {labelCol && <td>mtd</td>}
          <td>{Math.round(mtdObject?.Value) || "NA"}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Table1;
