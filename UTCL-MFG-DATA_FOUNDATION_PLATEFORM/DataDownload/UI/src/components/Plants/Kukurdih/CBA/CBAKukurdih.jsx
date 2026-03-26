import { BlackContainer } from "../../../BlackContainer/BlackContainer";
import * as tagsData from "../../../../data/Kukurdih/CBA/cbaKukurdihTextColumn";
export const CBAKukurdih = () => {
  return (
    <div className="AwarpurCBAMines CBA_kukurdih">
      <table className="table text-center">
        <thead>
          <tr>
            <th className="th_bg text-center">Elements</th>
            <th className="th_bg text-center">1 minute</th>
            <th className="th_bg text-center">10 min</th>
            <th className="th_bg text-center">60 min</th>
            <th className="th_bg text-center">Pile</th>
          </tr>
        </thead>
        <tbody>
          {tagsData.cbaKukurdihTextColumn1.map(({ element, tags }, index) => {
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
