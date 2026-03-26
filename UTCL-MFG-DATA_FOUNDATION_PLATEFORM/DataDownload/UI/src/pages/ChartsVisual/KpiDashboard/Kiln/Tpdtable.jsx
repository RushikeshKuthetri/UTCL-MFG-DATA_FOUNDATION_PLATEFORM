import { Table } from "react-bootstrap";
import styles from "../KpiDasboard.module.css";
import useFetch from "../useFetch";
function TpdTable({
  isDiffColor,
  labelCol = false,
  todayTag,
  mtdTag,
  type,
  title,
}) {
  const { email, token } = JSON.parse(localStorage.getItem("login"));

  const { data } = useFetch(
    "https://i4.utclconnect.com/uat/trendadxForKpi",
    {
      userId: email,
      kpiTags: [
        {
          type: type,
          tags: [todayTag],
        },
        {
          type: type,
          tags: [mtdTag],
        },
      ],
    },
    token
  );

  console.log("tpd table", data);

  const todayObject = data?.result.find((item) => item.KPI_Tag === todayTag);
  const mtdObject = data?.result.find((item) => item.KPI_Tag === mtdTag);

  if (!data) {
    return <p style={{ color: "white" }}>loading</p>;
  }

  if (data?.status === "failed") {
    return <p style={{ color: "white" }}>error</p>;
  }

  return (
    <Table
      responsive="sm"
      className={`${styles.table_row1} ${
        !isDiffColor ? styles.primary_color : styles.secondary_color
      }`}
    >
      <thead>
        <tr>
          {/* <th></th> */}
          {title ? <th>{title}</th> : <th>NA</th>}
        </tr>
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

export default TpdTable;
