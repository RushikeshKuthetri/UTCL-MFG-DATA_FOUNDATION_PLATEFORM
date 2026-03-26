import {
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  ProgressBarMimic,
  TransparentBoxWithGate,
} from "../../../../index";
import {
  useColorStatus,
  useBorderTagsColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";
import { useDispatch } from "react-redux";

export const CoolerHirmiL1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="CoolerHirmi w-100 h-100 position-relative">
      <div className="single-text-1 d-flex position-absolute">
        <div className="box-1 d-flex flex-column justify-content-end">
          <div className="text-dark mb-1">FAN CURRENT</div>
          <div className="text-dark  mb-1">Speed(%)</div>
          <div className="text-dark  mb-1">Set Point(%)</div>
          <div className="text-dark  mb-1">Fan Flow(m3/min)</div>
          <div className="text-dark  mb-1">VIBRATION</div>
          <div className="text-dark mb-1">
            FLOW SP <br /> (m3/min)
          </div>
        </div>

        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">KIDS FAN 1</div>
          <BlackContainer
            data={{
              label: "W1K06_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K06_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K06_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K06_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K06_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>

        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">KIDS FAN 2</div>
          <BlackContainer
            data={{
              label: "W1K07_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K07_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K07_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K07_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K07_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>

        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">KIDS FAN 3</div>
          <BlackContainer
            data={{
              label: "W1K09_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K09_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K09_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K09_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K09_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 4</div>
          <BlackContainer
            data={{
              label: "W1K10_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K10_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K10_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K10_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K10_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>

        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 5</div>
          <BlackContainer
            data={{
              label: "W1K11_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K11_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K11_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K11_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K11_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 6</div>
          <BlackContainer
            data={{
              label: "W1K12_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K12_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K12_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K12_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K12_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 7</div>
          <BlackContainer
            data={{
              label: "W1K13_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K13_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K13_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K13_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K13_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 8</div>
          <BlackContainer
            data={{
              label: "W1K14_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K14_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K14_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K14_F2",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K14_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 9</div>
          <BlackContainer
            data={{
              label: "W1K15_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K15_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K15_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K15_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K15_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>

        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 10</div>
          <BlackContainer
            data={{
              label: "W1K16_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K16_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K16_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K16_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K16_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 11</div>
          <BlackContainer
            data={{
              label: "W1K18_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K18_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K18_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K18_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K18_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="box-1 px-1 text-center">
          <div className="text-dark mb-1 ">CLR FAN 12</div>
          <BlackContainer
            data={{
              label: "W1K19_I1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K19_S1",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K19_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K19_F1",
              useClass: "greenTxt  mb-1",
              unit: "m3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K19_X1",
              useClass: "greenTxt  mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ml-auto ${useColorStatus(
            "W1K08"
          )}`,
          secondCircleLabel: "W1K08",
          secondCircleText: "M",
        }}
      />

      <div className="single-text-2 d-flex text-center position-absolute">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K06")}`}
            label="W1K06"
          />
          <div className="text-dark"> W1K06</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K07")}`}
            label="W1K07"
          />
          <div className="text-dark"> W1K07</div>
        </div>

        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K09")}`}
            label="W1K09"
          />
          <div className="text-dark"> W1K09</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K10")}`}
            label="W1K10"
          />
          <div className="text-dark"> W1K10</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K11")}`}
            label="W1K11"
          />
          <div className="text-dark"> W1K011</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K12")}`}
            label="W1K12"
          />
          <div className="text-dark"> W1K12</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K13")}`}
            label="W1K13"
          />
          <div className="text-dark"> W1K13</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K14")}`}
            label="W1K14"
          />
          <div className="text-dark"> W1K14</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K15")}`}
            label="W1K15"
          />
          <div className="text-dark"> W1K15</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K16")}`}
            label="W1K16"
          />
          <div className="text-dark"> W1K16</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K18")}`}
            label="W1K18"
          />
          <div className="text-dark"> W1K18</div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("W1K19")}`}
            label="W1K19"
          />
          <div className="text-dark"> W1K19</div>
        </div>
      </div>

      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3 d-flex flex-column justify-content-center align-items-center">
        <div className="text-dark mb-2">ROLLER CRUSHERS</div>
        <div className="d-flex mb-2">
          <div className="mr-1">
            <BlackContainer
              data={{
                label: "W1M01_I1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark">RL-1</div>
          </div>

          <div className="mr-1">
            <BlackContainer
              data={{
                label: "W1M02_I1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark">RL-2</div>
          </div>

          <div className="mr-1">
            <BlackContainer
              data={{
                label: "W1M03_I1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark">RL-3</div>
          </div>

          <div className="mr-1">
            <BlackContainer
              data={{
                label: "W1M04_I1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark">RL-4</div>
          </div>

          <div>
            <BlackContainer
              data={{
                label: "W1M05_I1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark">RL-5</div>
          </div>
        </div>

        <div className="d-flex">
          <div className="mr-1 text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("W1M01")}`}
              label="W1M01"
              text="M"
            />
            <div className="text-dark">W1M01</div>
          </div>

          <div className="mr-1 text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("W1M02")}`}
              label="W1M02"
              text="M"
            />
            <div className="text-dark">W1M02</div>
          </div>

          <div className="mr-1 text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag mb-1 ${useColorStatus("W1M03")}`}
              label="W1M03"
              text="M"
            />
            <div className="text-dark">W1M03</div>
          </div>

          <div className="mr-1 text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag mb-1 ${useColorStatus("W1M04")}`}
              label="W1M04"
              text="M"
            />
            <div className="text-dark">W1M04</div>
          </div>

          <div className="mr-1 text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag mb-1 ${useColorStatus("W1M05")}`}
              label="W1M05"
              text="M"
            />
            <div className="text-dark">W1M05</div>
          </div>
        </div>
      </div>

      <div className="pipeHr position-absolute pipe-4"></div>

      <div className="pipeHr position-absolute single-text-3">
        {/* <BlackContainer
          data={{
            label: "PH_421SK1_FT1",
            useClass: "greenTxt  mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_421SK1_FT1",
            useClass: "greenTxt  mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "W1KO1_T2",
            useClass: "greenTxt  mb-1",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute d-flex  single-text-4">
        <div>
          <BlackContainer
            data={{
              label: "DBW32_HYD_PUMP1_PRESS",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW36_VFD1_CURRENT_ACTL",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW40_HYD_PUMP2_PRESS",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW44_VFD2_CURRENT_ACTL",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW48_HYD_PUMP3_PRESS",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW52_VFD3_CURRENT_ACTL",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW30_CURRENT_OCP",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="text-dark mb-1 ">CYLINDER-1 PS SIDE PR</div>
          <div className="text-dark mb-1 ">CYLINDER-1 RD SIDE PR</div>
          <div className="text-dark mb-1 ">CYLINDER-2 PS SIDE PR</div>
          <div className="text-dark mb-1 ">CYLINDER-2 RD SIDE PR</div>
          <div className="text-dark mb-1 ">HYD WORKING PRESS PROFI</div>
          <div className="text-dark mb-1 ">MIN CYLINDER PRESS</div>
          <div className="text-dark mb-1 ">WORKING PRESSURE SET VAL</div>
        </div>

        <div>
          <BlackContainer
            data={{
              label: "DBW0_PISTON1_PA",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW2_PISTON1_PB",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW4_PISTON2_PA",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW6_PISTON2_PB",
              useClass: "greenTxt  mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW22_WP_ACTUAL",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW8_CYD_PRES",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW20_WP_SET",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-6">
        <div className="text-center ">
          <div>W1P20</div>
          <BlackContainer
            data={{
              label: "W1P20_PID_SPA",
              useClass: "greenTxt  mb-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P20_PID_SPM",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P20_Z1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center ">
          <div>W1P21 SPEED</div>
          <BlackContainer
            data={{
              label: "W13P21_Y1_SPA",
              useClass: "greenTxt  mb-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W13P21_Y1_SPM",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W13P21_S1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center ">
          <div>W1P30 SPEED</div>

          <BlackContainer
            data={{
              label: "W1P30_PID_SPA",
              useClass: "greenTxt  mb-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P30_PID_SPM",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P30_Z1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center ">
          <div>W1P31 MV</div>

          <BlackContainer
            data={{
              label: "W1P31_Y1_SPA",
              useClass: "greenTxt  mb-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P31_Y1_SPM",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P31_MV_DRV_S1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-7">
        <div className="text-center mb-1">
          <BlackContainer
            data={{
              label: "W13P21_HT_J1",
              useClass: "greenTxt  mb-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P31_J1",
              useClass: "greenTxt  mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="box-1 p-1 text-center mb-1">
          <BlackContainer
            data={{
              label: "W1K33_PID_SPM",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W1K33_Z1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="box-1 p-1 text-center mb-1">
          <BlackContainer
            data={{
              label: "W1K34_PID_SPM",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W1K34_Z1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="box-1 p-1 text-center mb-1">
          <BlackContainer
            data={{
              label: "W1K21_PID_SPA",
              useClass: "greenTxt  mb-1",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W1K21_PID_SPM",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W1K21_Z1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="box-1 p-1 text-center mb-1">
          <div>W1P31 GRR</div>
          <BlackContainer
            data={{
              label: "W1P31GRR_Y1",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W1P31_COUNT_STEP_ECS",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>

        {/* <div className="box-1 p-1 text-center mb-1">
          <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%3",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt  mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div> */}
        <BlackContainer
          data={{
            label: "W1P31_MV_DRV_CUR",
            useClass: "greenTxt  mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="pipeHr position-absolute single-text-8 d-flex justify-content-center">
        <div className="text-dark mt-2">COOLER ESP W1P11</div>
      </div>
      <div className="position-absolute d-flex single-text-9">
        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>

        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>
        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>
        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>
        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>
        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>
        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>
        <div className="triangle-with-squares d-flex justify-content-center align-items-center"></div>
      </div>

      <div className="d-flex justify-content-center align-items-center position-absolute single-text-10">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1P11_T1",
              useClass: "greenTxt  mb-1",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1P11_E1",
              useClass: "greenTxt  mb-1",
              unit: "kV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11A1_I1_SPM",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11_I1",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1P11_E2",
              useClass: "greenTxt  mb-1",
              unit: "kV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11A2_I1_SPM",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11_I2",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1P11_E3",
              useClass: "greenTxt  mb-1",
              unit: "kV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11A3_I1_SPM",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11_I3",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1P11_E4",
              useClass: "greenTxt  mb-1",
              unit: "kV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11A4_I1_SPM",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1P11_I4",
              useClass: "greenTxt  mb-1",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center">
          <div className="text-dark mb-1">P21 GRR</div>
          <BlackContainer
            data={{
              label: "W13P21_P1",
              useClass: "greenTxt  mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W13P21_T1",
              useClass: "greenTxt  mb-1",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="d-flex flex-column  position-absolute single-text-11 justify-content-center align-items-center">
        <BlackContainer
          data={{
            label: "W1P11_T2",
            useClass: "greenTxt  mb-1 ",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1P11_T3",
            useClass: "greenTxt  mb-1",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />

        <div className="text-center">
          WHRS MAIN <br /> BYPASS DAMPER
        </div>

        <div className="box-1 text-center p-1">
          <BlackContainer
            data={{
              label: "WHRS_AQC_DMPR_003_OPSP",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "WHRS_AQC_FLG_DMPR_002",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center ">
          AQC BYPASS <br /> DAMPER
        </div>

        <div className="box-1 text-center p-1">
          <BlackContainer
            data={{
              label: "AQC_DAMPER_PID_SPM",
              useClass: "greenTxt  mb-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "WHRS_AQC_FLG_DMPR_003",
              useClass: "greenTxt  ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-12 align-items-end">
        <div>
          <div className="text-dark mb-1">Hyd Oil Temp.</div>
          <div className="text-dark ">GRT DRIVE RUNNING</div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1K06_P1",
              useClass: "greenTxt  mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW26_OIL_TEMP",
              useClass: "greenTxt  mb-1",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_421SK1_FT1",
              useClass: "greenTxt",
              unit: "%3",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
      </div>

      <div className="position-absolute single-text-13 d-flex">
        <BlackContainer
          data={{
            label: "W1K07_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K09_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "W1K10_P1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1K10_P1_2",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "W1K11_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K12_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K13_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K14_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K15_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K16_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K18_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K19_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-14">
        <div className="d-flex">
          <div className="mr-2">
            <div>WHRS GENERATION</div>
            <div>PER TON CLINKER</div>
            <div>PROFIBUS COMM</div>
          </div>
          <div className="mr-2 mt-1">
            <BlackContainer
              data={{
                label: "WHRS_GEN_PER_TON_CLINKER",
                useClass: "greenTxt  mb-1",
                unit: "kW",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W1K02_T2",
                useClass: "greenTxt mt-4 mb-1",
                unit: "degC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W_PH1_FLG_TT_007",
                useClass: "greenTxt mb-1",
                unit: "degC",
                unitColor: "unitColor",
              }}
            />
            <div>KM CYC DUCT TEMP</div>
          </div>

          <div className="mr-2 mt-2">
            <BlackContainer
              data={{
                label: "W13W01_P3",
                useClass: "greenTxt  mb-1",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W13W01_T20",
                useClass: "greenTxt mb-1",
                unit: "degC",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div className="mt-2">
            <BlackContainer
              data={{
                label: "W1K40M1_F1",
                useClass: "greenTxt mb-1",
                unit: "m2/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute box-1 d-flex single-text-15 p-1">
        <div>
          <div>M.SILO LEVEL</div>
          <div>P.SILO LEVEL</div>
          <div>R.SILO LEVEL</div>
          <div>M.SILO JPF DP</div>
        </div>

        <div>
          <BlackContainer
            data={{
              label: "U1U01_L1",
              useClass: "greenTxt  mb-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W13U3U01_L1",
              useClass: "greenTxt  mb-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "U2U01_L1",
              useClass: "greenTxt  mb-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-16">
        {/* <BlackContainer
          data={{
            label: "PH_421SK1_FT1",
            useClass: "greenTxt  mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_421SK1_FT1",
            useClass: "greenTxt  mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_421SK1_FT1",
            useClass: "greenTxt  mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        /> */}
      </div>

      <div className="position-absolute single-text-17 ">
        <table className="">
          <tr>
            <th>GRATE PLATE TEMP</th>
            <th></th>
            <th>LL</th>
            <th>L</th>
            <th>C</th>
            <th>R</th>
            <th>RR</th>
          </tr>

          <tr>
            <td>FAN-1</td>
            <td>ROW 2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ROW 3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>FAN-2</td>
            <td>ROW 4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>FAN-3</td>
            <td>ROW 5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ROW 7</td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "DBW72_CNT_R7L",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "DBW74_CNT_R7R",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>FAN-4</td>
            <td>ROW 10</td>
            <td>
              <BlackContainer
                data={{
                  label: "KIDS_10LL_TEMP",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "DBW82_CNT_10L",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td>
              <BlackContainer
                data={{
                  label: "DBW84_CNT_10C",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "KIDS_10RR_TEMP",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>ROW 11</td>
            <td>
              <BlackContainer
                data={{
                  label: "DBW90_CNT_11L",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>

            <td>
              <BlackContainer
                data={{
                  label: "KIDS_11R_TEMP",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ROW 14</td>
            <td></td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "DBW94_CNT_14L",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td>
              <BlackContainer
                data={{
                  label: "KIDS_14C_TEMP",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KIDS_14R_TEMP",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {/* {" "}
              <BlackContainer
                data={{
                  label: "DB16_DBW98",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
          </tr>

          <tr>
            <td>FAN-5</td>
            <td>ROW 15</td>
            <td></td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "DBW100_CNT_15L",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td></td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "DBW102_CNT_15R",
                  useClass: "greenTxt ",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td> </td>
          </tr>
        </table>
      </div>

      <div className="position-absolute single-text-18 d-flex">
        <BlackContainer
          data={{
            label: "W1K08_T1",
            useClass: "greenTxt",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FAN_6_INLET_T1",
            useClass: "greenTxt",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FAN_8_INLET_T1",
            useClass: "greenTxt",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-19 d-flex">
        <BlackContainer
          data={{
            label: "W1K08_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1K08_X1",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-20 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("DBX136_1")}`}
          label="DBX136_1"
        />

        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("DBX139_1")}`}
          label="DBX139_1"
        />

        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("DBX142_1")}`}
          label="DBX142_1"
        />

        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("OCP")}`}
          label="OCP"
        />
      </div>

      <div className="position-absolute single-text-21">
        <ProgressBarMimic label="W1W07" />
      </div>

      <div className="position-absolute single-text-22">
        <ProgressBarMimic label="DBW10_CYD1_POS" />
      </div>

      <div className="position-absolute single-text-23">
        <ProgressBarMimic label="DBW12_CYD2_POS" />
      </div>

      <div className="position-absolute d-flex single-text-24">
        <div>
          <BlackContainer
            data={{
              label: "DBW10_CY1_POSITION",
              useClass: "greenTxt  mb-4",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DBW12_CY2_POSITION",
              useClass: "greenTxt  mb-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>POS DIFF</div>
      </div>

      <div className="position-absolute d-flex align-items-end single-text-25">
        <div>
          <BlackContainer
            data={{
              label: "DBW14_POS_DIFF",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-dark"> GRT SPEED SETPOINT</div>
          <BlackContainer
            data={{
              label: "GRATE_SPEED_SP",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <div className="text-dark"> GRT SPEED ACT PROFI</div>
          <BlackContainer
            data={{
              label: "DBW18_GS_ACTUAL",
              useClass: "greenTxt  mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <div className="text-dark"> GRT DRIVE RUNNING</div>
        </div>
      </div>

      <div className="position-absolute single-text-26 d-flex">
        <div>WHRS GENERATION</div>
        <BlackContainer
          data={{
            label: "WHRS_GENERATION",
            useClass: "greenTxt  mb-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="yellowline-Hr  position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Vr  position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-8"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-9"></div>

      <div className="box-1 single-text-27 position-absolute"></div>

      <div className="position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "W1P31_P1",
            useClass: "greenTxt ml-3 mb-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W13P21_P2",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-29"></div>

      <div className="position-absolute single-text-30">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1P20",
            squareClass: `${useBorderTagsColorStatus("W1P20")}`,
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1K33",
            squareClass: `${useBorderTagsColorStatus("W1K33")}`,
          }}
        />
      </div>

      <div className="position-absolute single-text-31">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1P30",
            squareClass: `${useBorderTagsColorStatus("W1P30")}`,
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1K34",
            squareClass: `${useBorderTagsColorStatus("W1K34")}`,
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-32">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1K31_DAMPER",
            squareClass: `${useBorderTagsColorStatus("W1K31_DAMPER")}`,
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1K21",
            squareClass: `${useBorderTagsColorStatus("W1K21")}`,
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-33">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1K32_DAMPER",
            squareClass: `${useBorderTagsColorStatus("W1K32_DAMPER")}`,
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1K22",
            squareClass: `${useBorderTagsColorStatus("W1K22")}`,
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-34">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("W13P21_HT")}`}
          label="W13P21_HT"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("W1P31")}`}
          label="W1P31"
        />
      </div>

      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Vr upArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr upArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr upArrow position-absolute line-19"></div>
      <div className="yellowline-Vr upArrow position-absolute line-20"></div>
      <div className="yellowline-Vr upArrow position-absolute line-21"></div>

      <div className="yellowline-Hr rightarrow  position-absolute line-22"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-23"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-24"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-25"></div>

      <div className="position-absolute single-text-35 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W13P24"
          )}`}
          label="W13P24"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W13P25"
          )}`}
          label="W13P25"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1P14"
          )}`}
          label="W1P14"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1P15"
          )}`}
          label="W1P15"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1P22"
          )}`}
          label="W1P22"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1P23"
          )}`}
          label="W1P23"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1P12"
          )}`}
          label="W1P12"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1P13"
          )}`}
          label="W1P13"
        />
      </div>

      <MotorCircleDigitalTag
        className={`square position-absolute digital-tag  single-text-36 ${useColorStatus(
          "W1P43"
        )}`}
        label="W1P43"
      />

      <MotorCircleDigitalTag
        className={`square position-absolute digital-tag single-text-37 ${useColorStatus(
          "W1P41"
        )}`}
        label="W1P41"
      />

      <MotorCircleDigitalTag
        className={`square position-absolute digital-tag single-text-38 ${useColorStatus(
          "W1P42"
        )}`}
        label="W1P42"
      />

      <MotorCircleDigitalTag
        className={`square position-absolute digital-tag single-text-39 ${useColorStatus(
          "W1P40"
        )}`}
        label="W1P40"
      />

      <div className="position-absolute d-flex single-text-40">
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
      </div>

      <div className="d-flex position-absolute single-text-41">
        <i class="fa-solid downA fa-caret-right d-block"></i>
        <i class="fa-solid downA fa-caret-right d-block"></i>
        <i class="fa-solid downA fa-caret-right d-block"></i>
        <i class="fa-solid downA fa-caret-right d-block"></i>
        <i class="fa-solid downA fa-caret-right d-block"></i>
        <i class="fa-solid downA fa-caret-right d-block"></i>
        <i class="fa-solid downA fa-caret-right d-block"></i>
        <i class="fa-solid downA fa-caret-right d-block"></i>
      </div>
      <button
        className="d-block btn greenbtn position-absolute single-text-42"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "hirmil1coolerparameterspopup1",
              plant: "hirmi",
              plantcode: "HCW",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "hirmil1coolerparameterspopup1",
              plant: "hirmi",
              plantcode: "HCW",
            },
          });
        }}
      >
        Cooler Parameters-1
      </button>
    </div>
  );
};
