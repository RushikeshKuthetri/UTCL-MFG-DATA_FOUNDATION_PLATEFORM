import moment from "moment";
import { useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../../index";

export const L2DashboardVikram = () => {
  return (
    <div className="row mx-1">
      <div className="offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 px-1 pt-3">
        <div className="cdate mb-1">
          {moment(new Date()).format("DD-MM-YYYYTHH:mm:ss")}
        </div>
        <table className="table">
          <tr>
            <td rowspan="4">Line-2</td>
            <td>PARAMETERS</td>
            <td>RAW MILL</td>
            <td>COAL MILL</td>
            <td>KILN</td>
            <td>CEMENT MILL</td>
          </tr>
          <tr>
            <td>RUNNING STATUS</td>
            <td>
              <MotorCircleDigitalTag
                className={`dot digital-tag mx-auto ${useColorStatus(
                  "rm2run"
                )}`}
                label="rm2run"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`dot digital-tag mx-auto ${useColorStatus(
                  "KL2RUN"
                )}`}
                label="KL2RUN"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`dot digital-tag mx-auto ${useColorStatus(
                  "KILN2RUN"
                )}`}
                label="KILN2RUN"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`dot digital-tag mx-auto ${useColorStatus(
                  "CM2RUN"
                )}`}
                label="CM2RUN"
              />
            </td>
          </tr>
          <tr>
            <td>RUNNING HOURS</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2RM2_E29_RUN_T",
                  useClass: "greenTxt mx-auto",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CO2_E3_RUN_T",
                  useClass: "greenTxt mt-1",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2KL2_E14_RUN_T",
                  useClass: "greenTxt mt-1",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CM2_E73_RUN_T",
                  useClass: "greenTxt mt-1",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>FEEDRATE</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2RM2_TOTAL_FEED",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2KL2_KILNFEED",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CM2_TOTAL_FEED",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
        <table className="table">
          <tr>
            <td colSpan="4"> RAW MILL SILO LEVEL </td>
          </tr>
          <tr>
            <td>RAW MILL SILO</td>
            <td>DESIGN HEIGHT</td>
            <td>ACTUAL HEIGHT</td>
            <td>TON</td>
          </tr>
          <tr>
            <td>LINE-2 SILO-1</td>
            <td>30 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2RM2_SILO1_RDR_LVL",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2RM2_SILO1_MT",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>LINE-2 SILO-2</td>
            <td>30 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2RM2_SILO1_RDR_LVL",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2RM2_SILO2_MT",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
        <table className="table mt-2">
          <tr>
            <td colSpan="4"> CEMENT SILO LEVEL </td>
          </tr>
          <tr>
            <td>CEMENT SILO</td>
            <td>DESIGN HEIGHT</td>
            <td>ACTUAL HEIGHT</td>
            <td>TON</td>
          </tr>
          <tr>
            <td>L-2 SILO-1 (OPC)</td>
            <td>19 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CM2_SILO1_RDR_LVL",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CM2_SILO1_MT",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>L-2 SILO-2 (PPC)</td>
            <td>19 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CM2_SILO2_RDR_LVL",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CM2_SILO2_MT",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>

        <div className="d-flex">
          <table className="table w-50">
            <tr>
              <td colSpan="2"> CLINKER & CEMENT PRODUCTION(TODAY) </td>
            </tr>
            <tr>
              <td>LINE-2 CLINKER</td>
              <td>
                <BlackContainer
                  data={{
                    label: "VC2KL2_CLK_T",
                    useClass: "greenTxt ml-1",
                    unit: "t",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>LINE-2 CEMENT</td>
              <td>
                <BlackContainer
                  data={{
                    label: "VC2CM2_TOTAL_FEED_T_0",
                    useClass: "greenTxt ml-1",
                    unit: "t",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </table>
          <div className="w-50 px-4 text-center">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "OPC STOCK",
                }}
              />
              <BlackContainer
                data={{
                  label: "TOTAL_OPC",
                  useClass: "greenTxt ml-1",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PPC STOCK",
                }}
              />
              <BlackContainer
                data={{
                  label: "TOTAL_PPC",
                  useClass: "greenTxt ml-1",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TOTAL CLNK PROD.",
                }}
              />
              <BlackContainer
                data={{
                  label: "CLINKER_TOTAL",
                  useClass: "greenTxt ml-1",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TOTAL CEMENT PROD.",
                }}
              />
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <table className="table">
          <tr>
            <td colSpan="9"> QUALITY PARAMETERS</td>
          </tr>
          <tr>
            <td> </td>
            <td>RM LSF</td>
            <td>KF LSF</td>
            <td>CLK LSF</td>
            <td>C3S</td>
            <td>FCO</td>
            <td>SO3</td>
            <td>CL</td>
            <td>AS</td>
          </tr>
          <tr>
            <td>Line-2</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2RM2_LSF",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2KF2_LSF",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CL2_LSF",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2KL2_C3S",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2CL2_FCAO",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2KL2_SO3",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2KL2_CL",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC2KL2_AL_SL_RATIO",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
