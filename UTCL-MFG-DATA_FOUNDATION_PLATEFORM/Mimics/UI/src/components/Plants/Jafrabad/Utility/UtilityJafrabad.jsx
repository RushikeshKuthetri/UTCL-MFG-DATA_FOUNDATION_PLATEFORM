import {
  useBorderTagsColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
  PipeWithCircles,
} from "../../../index";
export const UtilityJafrabad = () => {
  return (
    <div className="UtilityJafrabad w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RIPIK KILN COAL SELECTION",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLAME  FEEDBACK",
            }}
          />
          <BlackContainer
            data={{
              label: "RIPIK_KILN_FLAME_FEEDBACK",
              useClass: "greenTxt ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COAL CORRECTION",
            }}
          />
          <BlackContainer
            data={{
              label: "RIPIK_KILN_COAL_CORR_VAL",
              useClass: "greenTxt ml-3",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COAL DAY TOTALISER",
            }}
          />
          <BlackContainer
            data={{
              label: "RIPIK_COAL _CORR_TOT",
              useClass: "greenTxt ml-3",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COAL CORR COUNTS",
            }}
          />
          <BlackContainer
            data={{
              label: "RIPIK_ACT_COUNT",
              useClass: "greenTxt ml-3",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-2 d-flex">
        <BlackContainer
          data={{
            label: "CEMS_ROOM_TEMP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FIRE HYD LINE PRESS",
            }}
          />
          <BlackContainer
            data={{
              label: "A_PT375",
              useClass: "greenTxt mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "FIRE_HYD_LINE_PRESSURE",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A_PT374",
              useClass: "greenTxt mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus(
              "A102_1"
            )}`}
            label="A102_1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A102.1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus(
              "A102_2"
            )}`}
            label="A102_2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A102.2",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus(
              "A102_3"
            )}`}
            label="A102_3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A102.3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus(
              "A103_1"
            )}`}
            label="A103_1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A103.1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus(
              "A103_2"
            )}`}
            label="A103_2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A103.2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "COOLING TOWER TANK LEVEL",
            }}
          />
          <BlackContainer
            data={{
              label: "CT_WATER_LEVEL",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage mt-1 pt-2 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "COOLING TOWER WATER TANK (KILN SIDE)",
              }}
            />
          </div>
        </div>
        <div className="mt-5">
          <BlackContainer
            data={{
              label: "GRL1_MW",
              useClass: "greenTxt mt-2",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GRL2_MW",
              useClass: "greenTxt mt-2",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A100.1 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_1_LOAD_RUNHOUR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A100.5 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_5_LOAD_RUNHOUR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A100.6 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_6_LOAD_RUNHOUR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "J8002 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "J8002_LOAD_HOUR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "J8003 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "J8003_LOAD_HOUR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A100.7 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_7_LOAD_RUNHOUR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A100.8 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_8_LOAD_RUNHOUR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A100.9 LOAD HR",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_9_LOAD_RUNHR",
              useClass: "greenTxt ml-3",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 p-1">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "UPS ROOM TEMPERATURE",
            }}
          />
          <BlackContainer
            data={{
              label: "UPS_ROOM_TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PLC ROOM TEMPERATURE",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC_ROOM_TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "IT SERVER ROOM TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "IT_SERVER_ROOM_TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "UPS BATTERY ROOM TEMPERAT",
            }}
          />
          <BlackContainer
            data={{
              label: "UPS_BATTERY_ROOM_TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COAL MILL HYD ROOM TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "_CO_HYD_ROOM_TMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN MAIN DRIVE ROOM TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "KILN_MAIN_DRIVE_ROOM_TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "D33 SPRS ROOM TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "D33_SPRS_ROOM_TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "F49 ESP ROOM TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "F49 ROOM TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RAFAN DRIVE ROOM TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "RAFAN_DRIVE_ROOM_TEMP",
              useClass: "greenTxt ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 p-1">
        <div className=" mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MAIN AIR RECEIVER TANK",
            }}
          />
          <BlackContainer
            data={{
              label: "SX8_PRESSURE_VALUE",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CT Water Pump 1 Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "CT_FLOW_MTR1",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Coal Water Spray Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "462WI130_N01F02",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Coal WS Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "462WI130_N01F02_TOT",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM Water Spray Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "NJ1074_FI",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM WS Flow Totaliser",
            }}
          />
          <BlackContainer
            data={{
              label: "NJ1074_FI_TOT",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PP Air Flow Meter",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_AIR_FLOW_METER",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PP Air Flow Totaliser",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_AIR_FLOW_TOT",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Jetty Air Flow Meter",
            }}
          />
          <BlackContainer
            data={{
              label: "JETTY_AIR_FLOW_METER",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Jetty Air Flow Totaliser",
            }}
          />
          <BlackContainer
            data={{
              label: "JETTY_TOTAL_AIR_FLOW",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Water Flow QC",
            }}
          />
          <BlackContainer
            data={{
              label: "WATERFLOW_QC",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Water Flow QC",
            }}
          />
          <BlackContainer
            data={{
              label: "WATERFLOW_QC1",
              useClass: "greenTxt ml-2 ml-auto",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="box-1 p-1  text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "VITAL",
            }}
          />
          <BlackContainer
            data={{
              label: "A_PT370",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A_FT370",
              useClass: "greenTxt mt-2",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VITAL_TOTAL",
              useClass: "greenTxt mt-2",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "STANDBY",
            }}
          />
        </div>
        <div className="box-1 p-1 text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DE-DUST",
            }}
          />
          <BlackContainer
            data={{
              label: "A_PT371",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A_FT371",
              useClass: "greenTxt mt-2",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DEDUST_TOTAL",
              useClass: "greenTxt mt-2",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GRINDING",
            }}
          />
          <BlackContainer
            data={{
              label: "A_PT373",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A_FT372",
              useClass: "greenTxt mt-2",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GUNIT_TOTAL",
              useClass: "greenTxt mt-2",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "POCKING",
            }}
          />
          <BlackContainer
            data={{
              label: "A_PT372",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A_FT373",
              useClass: "greenTxt mt-2",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "POCKING_TOTAL",
              useClass: "greenTxt mt-2",
              unit: "m³",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <div className="yellowline-Vr line-1"></div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A100.5",
            }}
          />
        </div>
        <div className="text-center">
          <div className="yellowline-Vr line-1"></div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A100.6",
            }}
          />
        </div>
        <div className="text-center">
          <div className="yellowline-Vr line-1"></div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "J8003",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="text-center">
          <div className="yellowline-Vr line-1"></div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A100.1",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_1_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="yellowline-Vr line-1"></div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A100.8",
            }}
          />
          <BlackContainer
            data={{
              label: "A100_8_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-4 text-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A100.8B",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus(
              "A100_8B"
            )}`}
            label="A100_8B"
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <div className="text-center">
          <div className="yellowline-Vr line-1"></div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A100.7",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <div className="yellowline-Vr line-1"></div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "J8002",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "A100.9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "A100_7_CURRENT",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "J8002_N_CURRENT",
            useClass: "greenTxt mt-4 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A100_9_CURRENT",
            useClass: "greenTxt mt-4 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "D62 SPRS ROOM TEMP  ",
          }}
        />
        <BlackContainer
          data={{
            label: "D62_SPRS_ROOM_TEMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "D29_ROLL1_VIB",
          useClass: "greenTxt position-absolute single-text-14",
          unit: "mm/s",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-15 d-flex">
        <BlackContainer
          data={{
            label: "A100_5_CURRENT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A100_6_CURRENT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "J8003_N_CURRENT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <BlackContainer
          data={{
            label: "A102_3_CURRENT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A103_1_CURRENT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "A103_2_CURRENT",
          useClass: "greenTxt position-absolute single-text-17",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-18 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COOLING TOWER FAN-1",
            }}
          />
          <BlackContainer
            data={{
              label: "A_TT374",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "A102",
              }}
            />
            <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COOLING TOWER FAN-2",
            }}
          />
          <BlackContainer
            data={{
              label: "A_TT375",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "A101",
              }}
            />
            <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          </div>
        </div>
      </div>

      <div className="yellowline-Vr  position-absolute line-1"></div>
      <div className="yellowline-Vr  position-absolute line-2"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-3"></div>
      <div className="yellowline-Hr  position-absolute line-4"></div>
      <div className="yellowline-Vr  position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-10"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-11"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-12"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-13"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-14"></div>
    </div>
  );
};
