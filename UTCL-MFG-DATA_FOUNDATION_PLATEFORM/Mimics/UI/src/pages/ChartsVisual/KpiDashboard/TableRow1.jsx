import { Table } from "react-bootstrap";
import styles from "./KpiDasboard.module.css";
import { useEffect, useState } from "react";

export const TableRow1 = ({ label, isDiffColor, dataMtd, dataToday }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (!dataMtd || !dataToday) return;
    let columnName;
    if (dataMtd.length > dataToday.length) {
      columnName = dataMtd;
    } else {
      columnName = dataToday;
    }
    let tempCols = [];
    for (let i = 1; i < columnName.length; i++) {
      tempCols.push({
        title: `${columnName[i].Section} ${columnName[i].Line_No}`,
        field: `${columnName[i].Section}${columnName[i].Line_No}`,
        key: i,
      });
    }
    setColumns(tempCols);
  }, [dataMtd, dataToday]);

  return (
    <Table
      responsive="sm"
      className={`${styles.table_row1} ${
        !isDiffColor ? styles.primary_color : styles.secondary_color
      }`}
    >
      <thead>
        <tr>
          {label && <th></th>}
          {columns.map((val, index) => {
            return <th key={index}>{val.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {label && dataMtd.length && dataToday.length && <td>Today</td>}
          {dataToday.map((val, index) => {
            if (index === 0) return;
            return <td key={index}>{(val.Value / 60).toFixed(0)}</td>;
          })}
        </tr>
        <tr>
          {label && dataMtd.length && dataToday.length && <td>MTD</td>}
          {dataMtd.map((val, index) => {
            if (index === 0) return;
            return <td key={index}>{(val.Value / 60).toFixed(0)}</td>;
          })}
        </tr>
      </tbody>
    </Table>
  );
};
