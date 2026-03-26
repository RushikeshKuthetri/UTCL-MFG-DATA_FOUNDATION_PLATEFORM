import { coolerparameterspopup13 } from "../../../../../../data/hirmi/Line-1/Cooler/popupLists/coolerparameterspopup1";
import { BlackContainer } from "../../../../../BlackContainer/BlackContainer";

export const CoolerPopup1bHirmiLine1 = () => {
  return (
    // <div className="mdTemp-popup">
    <div className="CGRnBox">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>W1K06</th>
            <th>W1K07</th>
            <th>W1K09</th>
            <th>W1K10</th>
            <th>W1K11</th>
            <th>W1K12</th>
            <th>W1K13</th>
            <th>W1K14</th>
            <th>W1K15</th>
            <th>W1K16</th>
            <th>W1K18</th>
            <th>W1K19</th>
          </tr>
          <tr>
            <th>ROW</th>
            <th>FAN PARAMETER</th>
            <th>KIDS#1</th>
            <th>KIDS#2</th>
            <th>KIDS#3</th>
            <th>FAN#4</th>
            <th>FAN#5</th>
            <th>FAN#6</th>
            <th>FAN#7</th>
            <th>FAN#8</th>
            <th>FAN#9</th>
            <th>FAN#10</th>
            <th>FAN#11</th>
            <th>FAN#12</th>
          </tr>
        </thead>
        <tbody>
          {coolerparameterspopup13.map((obj) => {
            return (
              <tr key={obj.row}>
                <td className={obj.textClass}>{obj.row}</td>
                <td className={obj.textClass}>{obj.cgrnTxt}</td>
                {obj.blackConatiner.map((obj) => {
                  return (
                    <td key={obj.blackTextLabel}>
                      <BlackContainer
                        data={{
                          label: obj.blackTextLabel,
                          useClass: obj.blackTextClass,
                          unit: obj.unit,
                          unitColor: "unitColor",
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    // </div>
  );
};
