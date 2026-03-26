import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../index";
import { useColorStatus } from "../../../../utils";

export const RPMagdalla = () => {
  return (
    <div className="khd-roller-press position-relative w-100 h-100">
      <div className="single-text-1 position-absolute">
        <table>
          <thead>
            <tr className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 ",
                  label: "RP VIBRATION",
                }}
              />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row ">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "FR.Horizontal Vib.",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_INP_RP01_X31",
                    useClass: "greenTxt ",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm/sec",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "FR.Vertical Vib.",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_INP_RP01_X32",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm/sec",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "MR.Horizontal Vib.",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_INP_RP01_X33",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm/sec",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "FR.Vertical Vib.",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_INP_RP01_X34",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm/sec",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="single-text-2 position-absolute">
        <table>
          <thead>
            <tr className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 ",
                  label: "PARAMETERS",
                }}
              />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row ">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "Current Difference",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_STA_Current_Difference",
                    useClass: "greenTxt ",
                    unit: "Amps",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "A",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "Bearing Distance-Left",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_INP_RP1_G01",
                    useClass: "greenTxt",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "Bearing Distance-Right",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_INP_RP1_G02",
                    useClass: "greenTxt",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "Step BCON Starting Procedure",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "Stepoint Pressure Left+Right",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_STA_SP_Press_LR1",
                    useClass: "greenTxt",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "bar",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "Stepoint Pressure+Correction Fector-Left",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_STA_SP_Press_Corr_L1",
                    useClass: "greenTxt",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "bar",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "Stepoint Pressure+Correction Fector-Right",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "R_STA_SP_Press_Corr_R1",
                    useClass: "greenTxt",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "bar",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="single-text-3 position-absolute">
        <table>
          <thead>
            <tr className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 ",
                  label: "RP GEARBOX",
                }}
              />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row ">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "FR GB Vibration",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_561RP_FR_GB_VIB",
                    useClass: "greenTxt ",
                    unit: "mm/s",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm/sec",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row ">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "MR GB Vibration",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_561RP_MR_GB_VIB",
                    useClass: "greenTxt ",
                    unit: "mm/s",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "mm/sec",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "FR GB Torque",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_561RP_FR_GB_TRQ",
                    useClass: "greenTxt",
                    unit: "KNM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "KNm",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "MR GB Torque",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_561RP_MR_GB_TRQ",
                    useClass: "greenTxt",
                    unit: "KNM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "KNm",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="single-text-4 position-absolute">
        <div className="pipeHr pipe-1 text-center pt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2 ",
              label: "FIXED ROLLER",
            }}
          />
          <BlackContainer
            data={{
              label: "R_INP_RP1_S01_A",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-5 position-absolute">
        <div className="pipeHr pipe-1 text-center pt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2 ",
              label: "MOVABLE ROLLER",
            }}
          />
          <BlackContainer
            data={{
              label: "R_INP_RP1_S02_A",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute border">
        <BlackContainer
          data={{
            label: "CM_561BI1_WI",
            useClass: "greenTxt mb-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
  data={{
    label: "W1J01_YESTERDAY",
    useClass: "greenTxt",
    unit: "%",
    unitColor: "unitColor",
  }}
/> */}
      </div>
      <div className="single-text-7 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_STA_BearPlusDist_Right",
            useClass: "greenTxt ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_FR_MR_SKEW",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_STA_BearPlusDist_Left",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-8 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_INP_HD1_P02",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_HD1_P03",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-9 position-absolute ">
        {/* <div className="tringle-item mb-2">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div className="tringle-item mt-2">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div> */}
      </div>
      <div className="single-text-10 position-absolute d-flex">
        {/* <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div> */}
        {/* <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div> */}
      </div>
      <div className="single-text-11 position-absolute d-flex">
        {/* <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div> */}
      </div>
      <div className="single-text-12 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("CM_561HD1_M01")} `}
          label="CM_561HD1_M01"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("CM_561HD1_M02")} `}
          label="CM_561HD1_M02"
          text="M"
        />
      </div>
      <div className="single-text-13 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_OUP_PROPVALVE_LEFT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_OUP_PROPVALVE_RIGHT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-14 position-absolute ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pb-3",
            label: "V#8",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "V#7",
          }}
        />
      </div>
      <div className="single-text-15 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "V#11",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "V#9",
          }}
        />
      </div>
      <div className="single-text-16 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "V#10",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "V#12",
          }}
        />
      </div>
      <div className="single-text-17 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_INP_RP1_T21",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_RP1_T22",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-18 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_STA_Grease_Count_Right1",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_SG02_G01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-19 position-absolute d-flex flex-column">
        <div className="img-41 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto mt-3 digital-tag ${useColorStatus(
              "CM_561MD1"
            )} `}
            label="CM_561MD1"
          />
        </div>
        <div className="img-41">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto mt-3 digital-tag ${useColorStatus(
              "CM_561MD1"
            )} `}
            label="CM_561MD1"
          />
        </div>
      </div>
      <div className="single-text-20 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_INP_LQ1_T01",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_LQ1_T02",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-21 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_INP_LQ2_T01",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_LQ2_T02",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-22 position-absolute">
        <BlackContainer
          data={{
            label: "CM_561MD1_ITA",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561MD1_JTA",
            useClass: "greenTxt ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-2 mx-auto mt-2 digital-tag ${useColorStatus(
            "CM_561MD1_M02"
          )} `}
          label="CM_561MD1_M02"
        />
      </div>
      <div className="single-text-23 position-absolute">
        <BlackContainer
          data={{
            label: "CM_561MD2_ITA",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561MD2_JTA",
            useClass: "greenTxt ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-2 mx-auto mt-2 digital-tag ${useColorStatus(
            "CM_561MD2_M02"
          )} `}
          label="CM_561MD2_M02"
        />
      </div>
      <div className="single-text-24 position-absolute d-flex flex-column">
        <BlackContainer
          data={{
            label: "R_INP_RP1_T01",
            useClass: "greenTxt mb-5",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_RP1_T11",
            useClass: "greenTxt mt-5",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-25 position-absolute ">
        {/* <div className="tringle-item mb-2">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div> */}
      </div>
      <div className="single-text-26 position-absolute ">
        {/* <div className="tringle-item mb-2">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div> */}
      </div>
      <div className="single-text-27 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`dot p-2 mx-auto digital-tag ${useColorStatus(
            "CM_561LQ3_M01"
          )} `}
          label="CM_561LQ3_M01"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-2",
            label: "M01",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute d-flex ">
        <BlackContainer
          data={{
            label: "R_INP_RP1_T02",
            useClass: "greenTxt mb-5",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-29 position-absolute d-flex ">
        <BlackContainer
          data={{
            label: "R_INP_RP1_T12",
            useClass: "greenTxt mb-5",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot digital-tag grey-color`} label="NA" />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="single-text-31 position-absolute d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`dot p-2 mx-auto mb-1 digital-tag ${useColorStatus(
              "CM_561LQ1_M01"
            )} `}
            label="CM_561LQ1_M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-2",
              label: "M01",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot p-2 mx-auto mb-1 digital-tag ${useColorStatus(
              "CM_561LQ1_M02"
            )} `}
            label="CM_561LQ1_M02"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-2",
              label: "M02",
            }}
          />
        </div>
      </div>
      <div className="single-text-32 position-absolute d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`dot p-2 mx-auto mb-1 digital-tag ${useColorStatus(
              "CM_561LQ2_M01"
            )} `}
            label="CM_561LQ2_M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-2",
              label: "M01",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot p-2 mx-auto mb-1 digital-tag ${useColorStatus(
              "CM_561LQ2_M02"
            )} `}
            label="CM_561LQ2_M02"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-2",
              label: "M02",
            }}
          />
        </div>
      </div>
      <div className="single-text-33 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "R_STA_Grease_Count_Left1",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-34 position-absolute containerImage d-flex"></div>

      <div className="pipeHr pipe-2 text-center position-absolute pt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 ",
            label: "OIL TANK",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_HD1_T01",
            useClass: "greenTxt mt-3",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipeHr pipe-3 text-center position-absolute pt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ",
            label: "GREASE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ",
            label: "TANK",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561LQ3_WI",
            useClass: "greenTxt",
            unit: "Kg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipeHr pipe-4 position-absolute"></div>
      <div className="pipeHr pipe-5 position-absolute"></div>
      <div className="pipeHr pipe-6 position-absolute"></div>
      <div className="pipeHr pipe-7 position-absolute"></div>
      <div className="pipeHr pipe-8 position-absolute"></div>
      <div className="pipeHr pipe-9 position-absolute"></div>
      <div className="pipeHr pipe-10 position-absolute"></div>
      <div className="pipeHr pipe-11 position-absolute"></div>
      <div className="pipeHr pipe-12 position-absolute"></div>
      <div className="pipeHr pipe-13 position-absolute"></div>
      <div className="pipeVr pipe-14 position-absolute"></div>
      <div className="pipeVr pipe-15 position-absolute"></div>
      <div className="pipeVr pipe-16 position-absolute"></div>
      <div className="pipeVr pipe-17 position-absolute"></div>
      <div className="pipeVr pipe-18 position-absolute d-flex"></div>
      <div className="pipeVr pipe-19 position-absolute d-flex"></div>
      <div className="pipeVr pipe-20 position-absolute d-flex"></div>
      <div className="pipeVr pipe-21 position-absolute d-flex"></div>
      <div className="pipeVr pipe-22 position-absolute d-flex"></div>
      <div className="pipeVr pipe-23 position-absolute"></div>

      <div class="yellowline-Vr position-absolute line-1"></div>
      <div class="yellowline-Vr position-absolute line-2"></div>
      <div class="yellowline-Hr position-absolute line-3"></div>
      <div class="yellowline-Hr position-absolute line-4"></div>
      <div class="yellowline-Vr position-absolute line-5"></div>
      <div class="yellowline-Vr position-absolute line-6"></div>
      <div class="yellowline-Vr position-absolute line-7"></div>
      <div class="yellowline-Vr position-absolute line-8"></div>
      <div class="yellowline-Hr position-absolute line-9"></div>
      <div class="yellowline-Hr position-absolute line-10"></div>
      <div class="yellowline-Hr position-absolute line-11"></div>
      <div class="yellowline-Hr position-absolute line-12"></div>
      <div class="yellowline-Vr position-absolute line-13"></div>
      <div class="yellowline-Hr position-absolute line-14"></div>
      <div class="yellowline-Vr position-absolute line-15"></div>
      <div class="yellowline-Vr position-absolute line-16"></div>
      <div class="yellowline-Vr position-absolute line-17"></div>
      <div class="yellowline-Hr position-absolute line-18"></div>
      <div class="yellowline-Vr position-absolute line-19"></div>
      <div class="yellowline-Vr position-absolute line-20"></div>
      <div class="yellowline-Vr position-absolute line-21 d-flex"></div>
      <div class="yellowline-Vr position-absolute line-22 d-flex"></div>
      <div class="yellowline-Hr leftarrow rightarrow position-absolute line-23"></div>
      <div class="yellowline-Vr position-absolute line-24"></div>
      <div class="yellowline-Vr upArrow position-absolute line-25"></div>
      <div class="yellowline-Hr position-absolute line-26"></div>
      <div class="yellowline-Vr position-absolute line-27"></div>
      <div class="yellowline-Vr position-absolute line-28"></div>
      <div class="yellowline-Vr upArrow position-absolute line-29"></div>
      <div class="yellowline-Hr position-absolute line-30"></div>
      <div class="yellowline-Vr position-absolute line-31"></div>
      <div class="yellowline-Vr position-absolute line-32"></div>
    </div>
  );
};
