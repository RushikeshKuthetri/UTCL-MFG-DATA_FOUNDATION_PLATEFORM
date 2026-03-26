export const MillRunningStatusTable = ({ section, data }) => {
  const { running, stopped, unreachable, total } = data;
  return (
    <div className="table-responsive col-6">
      <table className="table cd_table fix-table">
        <thead>
          <tr>
            <th></th>
            <th className="th_bg">Running</th>
            <th className="th_bg">Stopped</th>
            <th className="th_bg">Not Reachable</th>
            <th className="th_bg">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{section}</td>
            <td>{running}</td>
            <td>{stopped}</td>
            <td>{unreachable}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
