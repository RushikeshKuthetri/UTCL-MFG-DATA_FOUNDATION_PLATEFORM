import { BlackContainer } from "../../../../index";
import * as tagsData from "../../../../../data/Kotputli/line-1/CBA/cbaKothpuliLlineTextColumn"

export const CBAKotputliLine1 = () => {
  return (
    <div className="AwarpurCBAMines CBA_kukurdih">
      <table className="table text-center">
        <thead>
          <tr>
            <th className="th_bg text-center">Compound</th>
            <th className="th_bg text-center">Current</th>
            <th className="th_bg text-center">Rolling</th>
            <th className="th_bg text-center">Mound</th>
          </tr>
        </thead>
        <tbody>
          {tagsData.cbaKothpuliLlineTextColumn.map(
            ({ element, tags }, index) => {
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
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
