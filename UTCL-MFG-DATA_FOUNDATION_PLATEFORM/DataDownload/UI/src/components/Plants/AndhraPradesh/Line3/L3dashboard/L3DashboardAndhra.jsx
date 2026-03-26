import { useColorStatus } from "../../../../../utils";
import { BlackContainer, MotorCircleDigitalTag } from "../../../../index";

export const L3DashboardAndhra = () => {
  return (
    <div className="w-75 pl-md-3 mx-1 pt-md-3 pt-4 L3Dashboard">
      <table className="table">
        <thead>
          <tr>
            <th className="text-center border">Process Parameter Name</th>
            <th className="text-center border">Raw Mill-1</th>
            <th className="text-center border">Raw Mill-2</th>
            <th className="text-center border">Coal Mill-3</th>
            <th className="text-center border">Kiln Cooler</th>
            <th className="text-center border">Stack PM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Main Drive Run</td>
            <td>
              <MotorCircleDigitalTag
                className={`square digital-tag ml-4 ${useColorStatus(
                  "RM1_363MD1"
                )}`}
                label="RM1_363MD1"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square digital-tag ml-4 ${useColorStatus(
                  "RM2_363MD4"
                )}`}
                label="RM2_363MD4"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square digital-tag ml-4 ${useColorStatus(
                  "KM_L43MD1"
                )}`}
                label="KM_L43MD1"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square digital-tag ml-4 ${useColorStatus(
                  "KL_463MD_1_2"
                )}`}
                label="KL_463MD_1_2"
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Main Drive Motor Power</td>
            <td>
              <BlackContainer
                data={{
                  label: "RM1_363MD1_JI",
                  useClass: "greenTxt",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "RM2_363MD4_JI",
                  useClass: "greenTxt",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KM_L43MD1_JI",
                  useClass: "greenTxt",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Floating Roller Drive Power</td>
            <td>
              <BlackContainer
                data={{
                  label: "RM1_363MD2_JI",
                  useClass: "greenTxt",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "RM2_363MD5_JI",
                  useClass: "greenTxt",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Total Feed</td>
            <td>
              <BlackContainer
                data={{
                  label: "RM1_333WF_FEED_ACT",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "RM2_333WF_FEED_ACT",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KM_TOTAL_FEED_RATE",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KILN_TOTAL_FEED_RATE",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Total Run Hours</td>
            <td>
              <BlackContainer
                data={{
                  label: "RM1_363MD1_TD_RUNH",
                  useClass: "greenTxt",
                  unit: "hrs",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "RM2_363MD4_TD_RUNH",
                  useClass: "greenTxt",
                  unit: "hrs",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KM_L43MD1_TD_RUNH",
                  useClass: "greenTxt",
                  unit: "hrs",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_463MD1_1_2_TD_RUNH",
                  useClass: "greenTxt",
                  unit: "hrs",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Kiln Main Drive VFD Torque</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_463MD1_TORQUE",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Kiln Main Drive Follower VFD-Torque</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_463MD2_TORQUE",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>PH Fan Speed Indication</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_443FN1_SI",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Cooler ESP Fan Speed</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_473FNF_SI",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Kiln Main Drive PV</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_463MD1_1_PV",
                  useClass: "greenTxt",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>BH Fan Speed Indication</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_423FN1_SI",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Grate Speed-Actual Value</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW18",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Kiln Main Drive Master VFD-II</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_463MD1_II",
                  useClass: "greenTxt",
                  unit: "Amps",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Kiln Main Drive Follower VFD-II</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_463MD2_II",
                  useClass: "greenTxt",
                  unit: "Amps",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Gear Box Base Plate Vibration</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "KM_L43MD1_XT1",
                  useClass: "greenTxt",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Coal Mill Opacity Reading</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "KM_L43SK1_SK",
                  useClass: "greenTxt",
                  unit: "SPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>RABH Outlet Stack Opacity Reading SPM</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_423SK1_DT",
                  useClass: "greenTxt",
                  unit: "SPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>RABH Outlet Stack NOX</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_423AM1_NOX",
                  useClass: "greenTxt",
                  unit: "NOX",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>RABH Outlet Stack SOX</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_423AM1_SOX",
                  useClass: "greenTxt",
                  unit: "SOX",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Cooler Stack SPM</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_473SK1_DT",
                  useClass: "greenTxt",
                  unit: "SPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
