import { useSelector } from "react-redux";
import "./MinMaxTable.scss";

export const MinMaxTable = () => {
  const { showPopup } = useSelector((state) => state);
  return (
    
    <div className="table-responsive min-max-table border-right">
      <table className="table border-bottom  mb-0">
        <tbody>
          {showPopup.trendsMinMaxData.map(({ name, dataArray }, index) => {
            return (
              <tr key={index}>
                <th className="pl-2 py-1 pr-1 border-left">{name}</th>
                {dataArray.map((value, index) => {
                  return (
                    <td className="p-1" key={index}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    
  );
};
