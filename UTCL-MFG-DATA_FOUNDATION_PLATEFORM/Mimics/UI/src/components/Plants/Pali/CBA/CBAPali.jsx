import { BlackContainer } from "../../../index";
import * as tagsData from "../../../../data/pali/CBA/cbaPaliTextColumn";

export const CBAPali = () => {
  return (
    <div className="table-responsive border AwarpurCBAMines CBA_kukurdih CBA_pali">
      <table className="table text-center mb-0">
        <thead>
          <tr>
            <th className="th_bg text-center">Name</th>
            <th className="th_bg text-center">Current Value</th>
            <th className="th_bg text-center">10 Min. Avg. Value</th>
            <th className="th_bg text-center">60 Min. Avg. Value</th>
            <th className="th_bg text-center">Pile Value</th>
          </tr>
        </thead>
        <tbody>
          {tagsData.cbaPaliLlineTextColumn.map(({ element, tags }, index) => {
            return (
              <tr key={index}>
                <td>{element}</td>
                {tags.map(({ blackTextClass, blackTextLabel }, index) => {
                  return (
                    <td key={index}>
                      <BlackContainer
                        data={{
                          label: blackTextLabel,
                          useClass: blackTextClass,
                          unit: "",
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
  );
};
