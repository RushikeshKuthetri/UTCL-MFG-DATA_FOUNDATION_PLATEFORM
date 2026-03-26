import moment from "moment";
import { useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../../index";

export const L1DashboardVikram = () => {
  return (
    <div className="row mx-1">
      <div className="offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 px-1 pt-3">
        <div className="cdate mb-1">
          {moment(new Date()).format("DD-MM-YYYYTHH:mm:ss")}
        </div>
        <table className="table">
          <tr>
            <td rowspan="4">Line-1</td>
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
                  "rm1run"
                )}`}
                label="rm1run"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`dot digital-tag mx-auto ${useColorStatus(
                  "coal1run"
                )}`}
                label="coal1run"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`dot digital-tag mx-auto ${useColorStatus(
                  "kiln1run"
                )}`}
                label="kiln1run"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`dot digital-tag mx-auto ${useColorStatus(
                  "CM1RUN"
                )}`}
                label="CM1RUN"
              />
            </td>
          </tr>
          <tr>
            <td>RUNNING HOURS</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1RM1_E38_RUN_T",
                  useClass: "greenTxt mx-auto",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CO1_E96_RUN_T",
                  useClass: "greenTxt mt-1",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1KL1_E30_RUN_T",
                  useClass: "greenTxt mt-1",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_E11_RUN_T_0",
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
                  label: "VC1RM1_TOTAL_FEED",
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
                  label: "VC1KL1_KILNFEED",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_TOTAL_FEED",
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
            <td>LINE-1 SILO-1</td>
            <td>30 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1RM1_SILO1_RDR_LVL",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1RM1_SILO1_MT",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>LINE-1 SILO-2</td>
            <td>30 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1RM1_SILO2_RDR_LVL",
                  useClass: "greenTxt ml-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1RM1_SILO2_MT",
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
            <td>L-1 SILO-1 (PPC)</td>
            <td>19 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_SILO1_RDR_LVL",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_SILO1_MT",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>L-1 SILO-2 (OPC)</td>
            <td>19 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_SILO2_RDR_LVL",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_SILO2_MT",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>L-1 SILO-3 (W +)</td>
            <td>10 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_WP_SILO_RADAR",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_WP_MT",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>CLINKER SILO</td>
            <td>15 MTR.</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_BTDA_LVL",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_BTDA_MT",
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
              <td>LINE-1 CLINKER</td>
              <td>
                <BlackContainer
                  data={{
                    label: "VC1KL1_CLK_T",
                    useClass: "greenTxt ml-1",
                    unit: "t",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>LINE-1 CEMENT</td>
              <td>
                <BlackContainer
                  data={{
                    label: "VC1CM1_TOTAL_FEED_T_0",
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
            <td>Line-1</td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1RM1_LSF",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1KF1_LSF",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CL1_LSF",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1KL1_C3S",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CL1_FCAO",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1KL1_SO3",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1KL1_CL",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1KL1_AL_SL_RATIO",
                  useClass: "greenTxt mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
        <table className="table">
          <tr>
            <td rowSpan="2"> TPP </td>
            <td>TG-1</td>
            <td>TG-2</td>
            <td>TG TOTAL</td>
            <td>GRID IMPORT</td>
            <td>TOTAL LOAD</td>
            <td>WIND SPEED</td>
          </tr>
          <tr>
            <td>
              <BlackContainer
                data={{
                  label: "VC3_TPP1_LOAD",
                  useClass: "greenTxt mt-1",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC3_TPP2_LOAD",
                  useClass: "greenTxt mt-1",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "TPP_TOTAL_MW",
                  useClass: "greenTxt mt-1",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC3_GRID_LOAD",
                  useClass: "greenTxt mt-1",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC3_TOTAL_POWER",
                  useClass: "greenTxt mt-1",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VC1CM1_WIND_SPEED",
                  useClass: "greenTxt mt-1",
                  unit: "KM/H",
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
