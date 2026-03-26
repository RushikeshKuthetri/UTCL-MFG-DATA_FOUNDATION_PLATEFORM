import { Table } from "react-bootstrap";
import styles from "./KpiDasboard.module.css";

export const TableRow2 = ({ isDiffColor, data, title }) => {
  const columns = [
    {
      title: "Total",
      field: "total",
      key: "1",
    },
    {
      title: "Slot 1",
      field: "slot",
      key: "2",
    },
    {
      title: "SLot 2",
      field: "slot2",
      key: "3",
    },
    {
      title: "Slot 3",
      field: "slot3",
      key: "4",
    },
  ];

  return (
    <>
      <h1
        className={`text-center py-2 ${
          !isDiffColor ? styles.primary_color : styles.secondary_color
        }`}
      >
        {title}
      </h1>
      <Table
        responsive="sm"
        className={`${styles.table_row1} ${
          !isDiffColor ? styles.primary_color : styles.secondary_color
        }`}
      >
        <thead>
          <tr>
            {columns.map((val, index) => {
              return <th key={index}>{val.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.total}</td>
            <td>{data.slot1}</td>
            <td>{data.slot2}</td>
            <td>{data.slot3}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
