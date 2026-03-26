import { BlackContainer } from "../../../index";
import * as tagsData from "../../../../data/Kukurdih/UnitMainDashboard/unitMainDashboardKukurdihTextColumn";
import { DigitalTagRunningStatus } from "./DigitalTagRunningStatus";
export const UnitMainDashboardKukurdih = () => {
  return (
    <div className="AwarpurCBAMines CBA_kukurdih">
      <table className="table text-center">
        <thead>
          <tr>
            <th className="text-center"></th>
            <th className="text-center" colSpan="2">
              Raw Mill
            </th>
            <th className="text-center">Coal Mill</th>
            <th className="text-center m-with">Kiln</th>
            <th className="text-center m-with">IKN Cooler</th>
            <th className="text-center m-with">Cement Mill</th>
            <th className="text-center" colSpan="4">
              Packing Plant
            </th>
            <th className="text-center">Crusher</th>
            <th className="text-center">Stack Data</th>
          </tr>
          <tr>
            <th className="text-center"></th>
            <th className="text-center">Raw Mill-1</th>
            <th className="text-center">Raw Mill-2</th>
            <th className="text-center"></th>
            <th className="text-center"></th>
            <th className="text-center"></th>
            <th className="text-center"></th>
            <th className="text-center">Packer-1</th>
            <th className="text-center">Packer-2</th>
            <th className="text-center">Packer-3</th>
            <th className="text-center">Packer-4</th>
            <th className="text-center">Crusher motor running</th>
            <th className="text-center m-with">
              <span>RABH Sox </span>
              <BlackContainer
                data={{
                  label: "PH_421AM1_SOX",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tagsData.unitMainDashboardKukurdihTextColumn2.element}</td>
            {tagsData.unitMainDashboardKukurdihTextColumn2.tags.map(
              (tagDetails, index) => {
                return (
                  <>
                    <td key={index}>
                      {tagDetails.dotLabel ? (
                        <DigitalTagRunningStatus tagDetails={tagDetails} />
                      ) : (
                        ""
                      )}
                      {tagDetails.moreTags?.map((tagDetails) => {
                        return (
                          <DigitalTagRunningStatus tagDetails={tagDetails} />
                        );
                      })}
                      {tagDetails.blackTextLabel && (
                        <>
                          {tagDetails.text && <span>{tagDetails.text}: </span>}
                          <BlackContainer
                            data={{
                              label: tagDetails.blackTextLabel,
                              useClass: tagDetails.blackTextClass,
                              unit: "",
                              unitColor: "unitColor",
                            }}
                          />
                        </>
                      )}
                    </td>
                  </>
                );
              }
            )}
          </tr>
          {tagsData.unitMainDashboardKukurdihTextColumn1.map(
            ({ element, tags }, index) => {
              return (
                <tr key={index}>
                  <td>{element}</td>
                  {tags.map(
                    (
                      { blackTextClass, blackTextLabel, unit, text, moreTags },
                      index
                    ) => {
                      return (
                        <>
                          <td key={index}>
                            {blackTextLabel ? (
                              <>
                                {text && <span>{text}: </span>}
                                <BlackContainer
                                  data={{
                                    label: blackTextLabel,
                                    useClass: blackTextClass,
                                    unit: unit ? unit : "",
                                    unitColor: "unitColor",
                                  }}
                                />
                              </>
                            ) : (
                              ""
                            )}
                            {moreTags
                              ? moreTags.map(
                                  ({
                                    text1,
                                    blackTextClass1,
                                    blackTextLabel1,
                                    unit,
                                  }) => {
                                    return (
                                      <div>
                                        {text1 && <span> {text1}: </span>}
                                        <BlackContainer
                                          data={{
                                            label: blackTextLabel1,
                                            useClass: blackTextClass1,
                                            unit: unit ? unit : "",
                                            unitColor: "unitColor",
                                          }}
                                        />
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </td>
                        </>
                      );
                    }
                  )}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
