import { coolerparameterspopup12 } from "../../../../../../data/hirmi/Line-1/Cooler/popupLists/coolerparameterspopup1";
import { BlackContainer } from "../../../../../BlackContainer/BlackContainer";

export const CoolerPopup1aHirmiLine1 = () => {
  return (
    // <div className="mdTemp-popup">
    <div className="CGRnBox">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>ROW</th>
            <th>FAN PARAMETER</th>
            <th>W13P21</th>
            <th>W1P31</th>
          </tr>
        </thead>
        <tbody>
          {coolerparameterspopup12.map((obj) => {
            return (
              <tr key={obj.row}>
                <td className={obj.textClass}>{obj.row}</td>
                <td className={obj.textClass}>{obj.cgrnTxt}</td>
                <td>
                  <BlackContainer
                    data={{
                      label: obj.blackTextLabel,
                      useClass: obj.blackTextClass,
                      unit: obj.unit,
                      unitColor: "unitColor",
                    }}
                  />
                </td>
                <td>
                  <BlackContainer
                    data={{
                      label: obj.blackTextLabel1,
                      useClass: obj.blackTextClass,
                      unit: obj.unit,
                      unitColor: "unitColor",
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    // </div>
  );
};
