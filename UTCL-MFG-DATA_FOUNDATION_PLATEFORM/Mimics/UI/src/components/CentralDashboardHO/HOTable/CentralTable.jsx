import { CentralTableBody } from "./CentralTableBody";

export const CentralTable = () => {
  return (
    <table className="table cd_table">
      <thead>
        <tr>
          <th scope="col" colSpan="3"></th>
          <th scope="col" colSpan="4" className="th_bg">
            Kiln (TPH / day(s))
          </th>
          <th scope="col" colSpan="6" className="th_bg">
            Cement Mill (TPH / day(s))
          </th>
        </tr>
        <tr>
          <th className="th_bg">Zone</th>
          <th className="th_bg">Type</th>
          <th className="th_bg plant_name">Plant</th>
          <th className="th_bg">
            <div>Kiln 1</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Kiln 2</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Kiln 3</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Kiln 4</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Mill 1</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Mill 2</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Mill 3</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Mill 4</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Mill 5</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
          <th className="th_bg">
            <div>Mill 6</div>
            {/* <div>TPH / day(s)</div> */}
          </th>
        </tr>
      </thead>
      <CentralTableBody />
    </table>
  );
};
