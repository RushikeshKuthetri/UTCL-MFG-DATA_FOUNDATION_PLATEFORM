import { useCaretColorStatus, useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";

export const UtilityRawanL2 = () => {
  return (
    <div className="UtilityRawanL2 w-100 h-100 position-relative">
      <div className="text-center box-1 p-1 position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 bg-secondary",
            label: "WATER MCC",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "WP1 (M32WP7)",
            }}
          />
          <BlackContainer
            data={{
              label: "M32WP7/IA",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP7/M01")}`}
            label="M32WP7/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "WP2 (M32WP8)",
            }}
          />
          <BlackContainer
            data={{
              label: "M32WP8/IA",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP8/M01")}`}
            label="M32WP8/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "WP3 (M32WP9)",
            }}
          />
          <BlackContainer
            data={{
              label: "M32WP9/IA",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP9/M01")}`}
            label="M32WP9/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "Cooling Tower Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "M32FN1_M01/WATER_TEMP",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "COOLING FAN 1(M32FN1)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "M32FN1_M01/M01"
            )}`}
            label="M32FN1_M01/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M32FN1_M01/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "COOLING FAN 2(M32FN2)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "M32FN2_M01/M01"
            )}`}
            label="M32FN2_M01/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M32FN2_M01/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "COOLING FAN 3(M32FN3)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "M32FN3_M01/M01"
            )}`}
            label="M32FN3_M01/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M32FN3_M01/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "Dew Point Monitor",
            }}
          />
          <BlackContainer
            data={{
              label: "WATER_INJECTION/DEW_POINT_TX",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center box-1 p-1 position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 bg-secondary",
            label: "COMPRESSOR",
          }}
        />
        <div className="d-flex mt-2">
          <div>
            <BlackContainer
              data={{
                label: "UREAL04/PT",
                useClass: "greenTxt",
                unit: "BAT",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "442CP1/IA",
                useClass: "greenTxt mt-1",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "442CP1/RPM",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "442CP1",
            }}
          />
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("442CP1/M01")}`}
              label="442CP1/M01"
              text="M"
            />
          </div>
          <div className="yellowline-Hr mt-3 position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442AD1/442AD1")}`}
            label="442AD1/442AD1"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "442AD1",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "442CP2/IA",
              useClass: "greenTxt mr-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "442CP2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442CP2/M02")}`}
            label="442CP2/M02"
            text="M"
          />
          <div className="yellowline-Hr mt-3 position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442AD2/442AD2")}`}
            label="442AD2/442AD2"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "442AD2",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "442CP3/IA",
              useClass: "greenTxt mr-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "442CP3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442CP3/M01")}`}
            label="442CP3/M01"
            text="M"
          />
          <div className="yellowline-Hr mt-3 position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442AD3/442AD3")}`}
            label="442AD3/442AD3"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "442AD3",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <div>
            <BlackContainer
              data={{
                label: "UREAL04/PT4",
                useClass: "greenTxt mr-1",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "442CP4/IA",
                useClass: "greenTxt mt-1",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "442CP4/RPM",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "442CP4",
            }}
          />
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("442CP4/M01")}`}
              label="442CP4/M01"
              text="M"
            />
          </div>
          <div className="yellowline-Hr mt-3 position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442AD4/442AD4")}`}
            label="442AD4/442AD4"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "442AD4",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "442CP5/IA",
              useClass: "greenTxt mr-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "442CP5",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442CP5/M02")}`}
            label="442CP5/M02"
            text="M"
          />
          <div className="yellowline-Hr mt-3 position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("442AD5/442AD5")}`}
            label="442AD5/442AD5"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "442AD5",
            }}
          />
        </div>
        <MimicCaret
          parentClass="d-flex tringle-item mt-3"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "L93CV1/V01"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "L93CV1/V01"
          )}`}
          label="L93CV1/V01"
        />
        <MimicCaret
          parentClass="d-flex tringle-item mt-1"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "512CV1/V01"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "512CV1/V01"
          )}`}
          label="512CV1/V01"
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "COMPRESSOR AIR PRESSURE",
            }}
          />
          <BlackContainer
            data={{
              label: "442CP5/AIR_PRESSURE",
              useClass: "greenTxt mr-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "ANEMOMETER AT LINE 2 CCR",
            }}
          />
          <BlackContainer
            data={{
              label: "ANEMOMETER $CCR2/WIND_SPED",
              useClass: "greenTxt mr-2",
              unit: "Km/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center box-1 p-1 position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 bg-secondary",
            label: "CPU PANEL TEMP",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PLC02 Panel Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC02/TTP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PLC03 Panel Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC03/TTP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PLC04 Panel Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC04/TTP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PLC05 Panel Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC05/TTP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PLC06 Panel Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC06/TTP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CCR SUBSTATION",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC07/TTP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PLC08 Panel Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC08/TTP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "COAL MILL SUBSTATION",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC08/TTP1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CBA ROOM TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC03/CBA",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "KILN MAIN DRIVE PANEL",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC06/TTP1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RABH VFD SIDE TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC03/TTP1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "DCS SERVER ROOM TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_CCR/SCR_TEMP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center box-1 p-1 position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 bg-secondary",
            label: "AIR CONDITIONER CCR",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER 1",
            }}
          />
          <BlackContainer
            data={{
              label: "UREAL06/CHILLAR-1",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER 2",
            }}
          />
          <BlackContainer
            data={{
              label: "UREAL06/CHILLAR-2",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER 3",
            }}
          />
          <BlackContainer
            data={{
              label: "UREAL06/CHILLAR-3",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER WATER PUMP 1",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_CCR/WP1-II",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_CCR/WP1")}`}
            label="AC_CCR/WP1"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER WATER PUMP 2",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_CCR/WP2-II",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_CCR/WP2")}`}
            label="AC_CCR/WP2"
            text="M"
          />
        </div>

        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER WATER PUMP 3",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_CCR/WP3-II",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_CCR/WP3")}`}
            label="AC_CCR/WP3"
            text="M"
          />
        </div>

        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AHU 1",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_CCR/AHU1-AMP",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_CCR/AHU1")}`}
            label="AC_CCR/AHU1"
            text="M"
          />
        </div>

        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AHU 2",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_CCR/AHU2-AMP",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_CCR/AHU2")}`}
            label="AC_CCR/AHU2"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 mt-1 bg-secondary",
            label: "AIR CONDITIONER CCR 2nd FLOOR",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AHU CCR 2-HALL 2nd FLOOR",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_CCR/AHU_CCR1_AMP",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "AC_CCR/AHU_CCR1"
            )}`}
            label="AC_CCR/AHU_CCR1"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AHU CCR 2-CCR 2nd FLOOR",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "AC_CCR/AHU_CCR2"
            )}`}
            label="AC_CCR/AHU_CCR2"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 mt-1 bg-secondary",
            label: "VAM STATUS",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "VAM CW PUMP-1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("VAM_CHLR2/M01")}`}
            label="VAM_CHLR2/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "VAM_CHLR2/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "VAM CW PUMP-2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("VAM_CHLR1/M01")}`}
            label="VAM_CHLR1/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "VAM_CHLR1/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "VAM CEP PUMP-1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("VAM_CEP1/M01")}`}
            label="VAM_CEP1/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "VAM_CEP1/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "VAM CEP PUMP-2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("VAM_CEP2/M02")}`}
            label="VAM_CEP2/M02"
            text="M"
          />
          <BlackContainer
            data={{
              label: "VAM_CEP2/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center box-1 p-1 position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 bg-secondary",
            label: "AIR CONDITIONER RABH",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER 1",
            }}
          />
          <BlackContainer
            data={{
              label: "UREAL06/RABH_CHILLER1",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER 2",
            }}
          />
          <BlackContainer
            data={{
              label: "UREAL06/RABH_CHILLER2",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER 3",
            }}
          />
          <BlackContainer
            data={{
              label: "UREAL06/RABH_CHILLER3",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER WATER PUMP 1",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_RABH/IA",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_RABH1/WP1")}`}
            label="AC_RABH1/WP1"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CHILLER WATER PUMP 2",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_RABH1/AMP",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_RABH1/WP2")}`}
            label="AC_RABH1/WP2"
            text="M"
          />
        </div>

        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AHU 1",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_RABH/AMP",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_RABH/AHU1")}`}
            label="AC_RABH/AHU1"
            text="M"
          />
        </div>

        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AHU 2",
            }}
          />
          <BlackContainer
            data={{
              label: "AC_RABH1/IA",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("AC_RABH/AHU2")}`}
            label="AC_RABH/AHU2"
            text="M"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark w-100 mx-auto p-1 bg-secondary",
            label: "WATER PUMP & LEVEL  FOR PH GAS ANALYSERS",
          }}
        />
        <div className="box-1 p-1 mt-1">
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PUMP1 422WP1",
              }}
            />

            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("422WP1/M01")}`}
              label="422WP1/M01"
              text="M"
            />
          </div>

          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PUMP2 422WP2",
              }}
            />

            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("422WP2/M01")}`}
              label="422WP2/M01"
              text="M"
            />
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark w-75 p-1 text-center bg-secondary position-absolute single-text-7",
          label: "WATER MCC 2",
        }}
      />
      <div className="position-absolute box-1 p-1 single-text-8">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "FILTER FEED PUMP DRINKING 2 (M22WP1)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M22WP1/M01")}`}
            label="M22WP1/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M22WP1/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "FILTER FEED PUMP DRINKING 3 (M22WP2)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M22WP2/M01")}`}
            label="M22WP2/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M22WP2/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "DRINKING WATER 1 (M22WP3)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M22WP3/M01")}`}
            label="M22WP3/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M22WP3/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "DRINKING WATER 2 (M22WP4)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M22WP4/M01")}`}
            label="M22WP4/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M22WP4/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PROCESS WATER PUMP MAKEUP P1(M22WP5)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M22WP5/M01")}`}
            label="M22WP5/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M22WP5/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "PROCESS WATER PUMP MAKEUP P2(M22WP6)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M22WP6/M01")}`}
            label="M22WP6/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M22WP6/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "POWER PLANT RAW WATER MAKEUP 1(M32WP1)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP1/M01")}`}
            label="M32WP1/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M32WP1/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "POWER PLANT RAW WATER MAKEUP 2(M32WP2)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP2/M01")}`}
            label="M32WP2/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M32WP2/AMP",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "FILTER FEED PUMP PLANT FFP1 (M32WP3)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP3/M01")}`}
            label="M32WP3/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "FILTER FEED PUMP PLANT FFP2 (M32WP4)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP4/M01")}`}
            label="M32WP4/M01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute box-1 p-1 single-text-9">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L-2 RAW MILL Cooling TWR LVL 1",
            }}
          />

          <BlackContainer
            data={{
              label: "M32FN1_M01/COOLING_TWR_LVL-1",
              useClass: "greenTxt ml-5",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L-2 RAW MILL Cooling TWR LVL 2",
            }}
          />

          <BlackContainer
            data={{
              label: "M32FN1_M01/COOLING_TWR_LVL-2",
              useClass: "greenTxt ml-5",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "BOOSTER PUMP IN L-2 PH 3RD FLOOR NEW (WP2)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M42WP2/M01")}`}
            label="M42WP2/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "BOOSTER PUMP IN L-2 PH 3RD FLOOR",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M42WP1/M01")}`}
            label="M42WP1/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M32WP5/M01",
              useClass: "greenTxt ml-3",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SOFT WATER PUMP MAKEUP PYRO P3 (M32WP5)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32WP6/M01")}`}
            label="M32WP6/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SOFT WATER PUMP MAKEUP PYRO P4 (M32WP6)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M52WP1/M01")}`}
            label="M52WP1/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "FIRE FIGHTING PUMP FF02 (MAIN PUMP) (M52WP1)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M52WP3/M01")}`}
            label="M52WP3/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "M52WP1PTX",
              useClass: "greenTxt ml-3",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "FIRE FIGHTING PUMP FF03 (JOCKEY PUMP) (M52WP3)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "AHU_FAN_VFD_/M01"
            )}`}
            label="AHU_FAN_VFD_/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SLUDGE PUMP 1 (M32FN2)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32FN_2/M01")}`}
            label="M32FN_2/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SLUDGE PUMP 2 (M32FN3)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("M32FN_3/M01")}`}
            label="M32FN_3/M01"
            text="M"
          />
        </div>
      </div>
    </div>
  );
};
