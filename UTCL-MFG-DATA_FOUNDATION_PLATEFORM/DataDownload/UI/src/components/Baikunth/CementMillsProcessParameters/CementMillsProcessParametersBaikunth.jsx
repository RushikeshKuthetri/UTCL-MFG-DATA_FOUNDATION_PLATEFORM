import { cmProcessParameterTextColumn1 } from "../../../data/baikunth/cementMills/CementMillsProcessParameters/cmProcessParameterTextColumn";
import { TextContainerWithWrapWord, BlackContainer, TextColumn, SingleText, TopLeftBox } from "../../index";
export const CementMillsProcessParametersBaikunth = () => {
  return (
    <div className="CementMillsPPB cd_table_bg px-2">
      <div className="table-responsive border border-secondary text-nowrap h-100 scrollbar">
        <table className="table cd_table">
          <thead>
            <tr className="tab-border">
              <th className="yellowTxt th_bg tdtofix1" rowspan="2">
                Equip.
              </th>
              <th className="yellowTxt th_bg tdtofix2" rowspan="2">
                Description
              </th>
              <th className="yellowTxt cm-1 th_bg" colspan="2">
                CM-1
              </th>
              <th className="yellowTxt cm-1 th_bg" colspan="2">
                CM-2
              </th>
              <th className="yellowTxt cm-1 th_bg" colspan="2">
                CM-3
              </th>
              <th className="yellowTxt cm-1 th_bg" colspan="2">
                CM-4
              </th>
              <th className="yellowTxt cm-1 th_bg" colspan="2">
                CM-5
              </th>
              <th className="yellowTxt cm-1 th_bg" colspan="2">
                PG
              </th>
            </tr>
            <tr>
              {/* <th scope="col" colspan="2" className="th_bg tdtofix3"></th> */}
              <th className="yellowTxt th_bg">Temp</th>
              <th className="yellowTxt th_bg">Vib.</th>
              <th className="yellowTxt th_bg">Temp</th>
              <th className="yellowTxt th_bg">Vib.</th>
              <th className="yellowTxt th_bg">Temp</th>
              <th className="yellowTxt th_bg">Vib.</th>
              <th className="yellowTxt th_bg">Temp</th>
              <th className="yellowTxt th_bg">Vib.</th>
              <th className="yellowTxt th_bg">Temp</th>
              <th className="yellowTxt th_bg">Vib.</th>
              <th className="yellowTxt th_bg">Temp</th>
              <th className="yellowTxt th_bg">Vib.</th>
            </tr>
          </thead>
          <tbody>
            {/* Table body */}
            {cmProcessParameterTextColumn1.map((item, index) => (
              <tr key={index}>
                {/* Render each row dynamically */}
                {item.heading && (
                  <th rowspan={item.rowspan} className={item.headingClass}>
                    {item.heading}
                  </th>
                )}
                <td className="tdtofix">
                  <TextContainerWithWrapWord data={{ useClass: "text-white mr-2", label: item.label1 }} />
                </td>
                {/* Render BlackContainer dynamically */}
                {item.values.map((value, idx) => (
                  <td key={idx} rowSpan={value.rowspan}>
                    {value.split == 1 && (
                      <div className="d-flex flex-column">
                        {value.subvalues?.map((subvalue, subidx) => (
                          <div key={subidx}>
                            <BlackContainer
                              data={{
                                label: subvalue.label,
                                useClass: "greenTxt",
                                unit: subvalue.unit,
                                unitColor: "unitColor",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {value.split !== 1 && value.label && (
                      <BlackContainer
                        data={{
                          label: value.label,
                          useClass: "greenTxt",
                          unit: value.unit,
                          unitColor: "unitColor",
                        }}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
