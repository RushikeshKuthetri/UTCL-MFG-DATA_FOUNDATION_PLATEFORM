import {
  TextContainerWithWrapWord,
  PipeWithCircles,
  BlackContainer,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";

import {
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";
import { useDispatch } from "react-redux";

export const Kiln2VCMVishnupuramL2 = () => {
  const dispatch = useDispatch();
  return (
    <div className="Kiln2VCMVishnupuramL2 w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M18_01")}`}
          label="VCM_M18_01"
        />
      </div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr pl-2 position-absolute pipe-3">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M20_02")}`}
          label="VCM_M20_02"
        />
      </div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-5"></div>
      <div className="pipeHr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="pipeVr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeVr position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>

      <div className="bigContainer text-center position-absolute single-text-1">
        <MotorCircleDigitalTag
          className={`circle-img p-3 digital-tag ${useFanImgTagsColorStatus(
            "VCM_M03_02"
          )}`}
          label="VCM_M03_02"
        />
        <BlackContainer
          data={{
            label: "VCM_M03_02_SY",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_02_SI",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_02_II",
            useClass: "greenTxt mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "VCM",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_DP",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark p-1 mt-1 digital-tag ${useColorStatus(
            "VCM_M03_DS"
          )}`}
          label="VCM_M03_DS"
          text="DOOR INT"
        />
      </div>
      <div className="img-107 position-absolute single-text-2"></div>
      <div className="img-87 position-absolute single-text-3"></div>
      <div className="d-flex position-absolute single-text-4">
        <div className="text-center containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CY 1",
            }}
          />
        </div>
        <div className="text-center containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CY 2",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-5">
        <div className="text-center containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AB 2",
            }}
          />
        </div>
        <div className="text-center containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AB 3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <div className="containerImage">
          <div className="dot-square-line-Hr d-flex align-items-center mt-01 ml-3">
            <div className={`square grey-color`}></div>
            <div className="yellowline-Hr position-relative"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("K2_PTC_GSV")}`}
              label="K2_PTC_GSV"
            />
          </div>
          <BlackContainer
            data={{
              label: "K2_PT_COK_BIN_LI",
              useClass: "greenTxt mt-01 ml-1",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center mt-01">
          <div className="pipeHr position-relative"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2_PT_COK_PF"
            )}`}
            label="K2_PT_COK_PF"
          />
          <div className="pipeHr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K2_PT_COK_WF")}`}
            label="K2_PT_COK_WF"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K2_PTC_SC")}`}
            label="K2_PTC_SC"
          />
          <div className="pipeHr position-relative"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2_PTC_FKP_RAL"
            )}`}
            label="K2_PTC_FKP_RAL"
          />
          <div className="pipeHr position-relative"></div>
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "4A",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "4B",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "2A",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_2AM_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_2A_BOT_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "2B",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_2BM_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_2B_BOT_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3rd",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_3M_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_3BOT_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_3FP_PI",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "1st",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_1BOT_PI",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_1M1_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_1F_1_PI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "K2_SC_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RSP",
          }}
        />
      </div>
      <div className="d-flex text-center position-absolute single-text-14">
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HA",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CY1",
            }}
          />
        </div>
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HA",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CY2",
            }}
          />
        </div>
      </div>
      <div className="d-flex text-center position-absolute single-text-15">
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CSP",
            }}
          />
        </div>
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SIDE",
            }}
          />
        </div>
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "VF",
            }}
          />
        </div>
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "7",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SIDE",
            }}
          />
        </div>
      </div>
      <div className="d-flex text-center position-absolute single-text-16">
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K1",
            }}
          />
        </div>
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PH",
            }}
          />
        </div>
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K2",
            }}
          />
        </div>
        <div className="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "8",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CSP",
            }}
          />
        </div>
      </div>
      <div className="squareplustri text-center position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "VCM_SH_LI",
            useClass: "greenTxt mt-1",
            unit: "M",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "VCM_RH_LI",
            useClass: "greenTxt mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PC BIN",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M14_02_L",
            useClass: "greenTxt mt-1",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KC BIN",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M14_01_L",
            useClass: "greenTxt mt-1",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KF BIN",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_KF_BIN_WI",
            useClass: "greenTxt mt-1",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="img-66 text-center ml-3">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M15_02")}`}
              label="VCM_M15_02"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`square w-100 digital-tag ${useColorStatus(
            "VCM_M15_TIMER"
          )}`}
          label="VCM_M15_TIMER"
        />
        <div className="squareplustri text-center">
          <BlackContainer
            data={{
              label: "VCM_WF_DC_DP",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="pipeHr position-relative"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M15_01"
            )}`}
            label="VCM_M15_01"
          />
          <div className="pipeHr position-relative"></div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-23"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "VCM_M17_06_N" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("VCM_M17_05")}`,
          secondCircleLabel: "VCM_M17_05",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-72"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "VCM_M22_03_N" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("VCM_M22_03")}`,
          secondCircleLabel: "VCM_M22_03",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-88"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "VCM_M22_02_N" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("VCM_M02_02")}`,
        }}
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M02_01"
        )} position-absolute single-text-24`}
        label="VCM_M02_01"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M13_01"
        )} position-absolute single-text-25`}
        label="VCM_M13_01"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M13_02"
        )} position-absolute single-text-26`}
        label="VCM_M13_02"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M26_01"
        )} position-absolute single-text-27`}
        label="VCM_M26_01"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M14_02"
        )} position-absolute single-text-28`}
        label="VCM_M14_02"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M14_01"
        )} position-absolute single-text-29`}
        label="VCM_M14_01"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M11_15"
        )} position-absolute single-text-30`}
        label="VCM_M11_15"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M11_01"
        )} position-absolute single-text-31`}
        label="VCM_M11_01"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "VCM_M11_04"
        )} position-absolute single-text-32`}
        label="VCM_M11_04"
      />
      <MotorCircleDigitalTag
        className={`gray-green-red-img gray-img position-absolute single-text-33`}
        label="VC1KL1_P5_LVL"
      />
      <div className="d-flex position-absolute single-text-60">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_06")}`}
          label="VCM_M11_06"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_05")}`}
          label="VCM_M11_05"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_10")}`}
          label="VCM_M11_10"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_09")}`}
          label="VCM_M11_09"
        />
      </div>
      <div className="d-flex position-absolute single-text-61">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_03")}`}
          label="VCM_M11_03"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_02")}`}
          label="VCM_M11_02"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_08")}`}
          label="VCM_M11_08"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M11_07")}`}
          label="VCM_M11_07"
        />
      </div>
      <div className="chimni-red position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "VCM_STACK_AI",
            useClass: "greenTxt ml-1",
            unit: "mg/Nm3",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer position-absolute single-text-35">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "EX. F",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M10_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M10_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "VIB",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M10_1_XI",
              useClass: "greenTxt ml-1",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M10_5_XI",
              useClass: "greenTxt ml-1",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M10_3_XI",
              useClass: "greenTxt ml-1",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M10_2_XI",
              useClass: "greenTxt ml-1",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "EX. M",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M10_3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "VCM_M10_4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_EX_FAN_W1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_EX_FAN_W2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_EX_FAN_W3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "VENT F",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M20_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "VCM_M20_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M24_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M24_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M24_3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M24_4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M24_1_XI",
              useClass: "greenTxt ml-1",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M24_2_XI",
              useClass: "greenTxt ml-1",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MAIN M.",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M03_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "VCM_M03_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_MM_W1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_MM_W2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_GB_XI",
              useClass: "greenTxt ml-1",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_NGB_DE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_NGB_NDE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_NGB_THRPD1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_NGB_THRPD2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_NGB_THRPD3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_NGB_THRPD4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BH TMP",
            }}
          />

          <BlackContainer
            data={{
              label: "VCM_M11_6_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M11_5_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M11_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M11_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark grey-color",
              label: "KC BIN TEMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark grey-color ml-1",
              label: "PC BIN TEMP",
            }}
          />
        </div>
        <div className="d-flex ml-5 justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "VCM_M11_3_TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "VCM_M11_4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M11_7_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M11_8_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M14_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M14_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M14_9_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M14_11_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KILN 2 ROLLERS BRG. TEMP.",
          }}
        />
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "K2_TY1_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY1_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY1_3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY1_4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "T1",
            }}
          />
        </div>
        <div className="d-flex mt-01">
          <BlackContainer
            data={{
              label: "K2_TY2_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY2_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY2_3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY2_4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "T2",
            }}
          />
        </div>
        <div className="d-flex mt-01">
          <BlackContainer
            data={{
              label: "K2_TY3_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY3_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY3_3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TY3_4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "T3",
            }}
          />
        </div>
        <div className="d-flex mt-01">
          <BlackContainer
            data={{
              label: "K2_PB1_DE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PB1_NDE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PB2_DE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PB2_NDE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "PI",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-37">
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MASTER MOT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SLAVE MOT",
            }}
          />
        </div>
        <div className="d-flex mt-01">
          <BlackContainer
            data={{
              label: "K2_MD_M1_DE_TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_M1_NDE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_M_NDE_XI",
              useClass: "greenTxt ml-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_GB1_DE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_GB1_NDE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_M2_DE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_M2_NDE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_S_NDE_XI",
              useClass: "greenTxt ml-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_GB2_DE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MD_GB2_NDE_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01 ml-3">
          <BlackContainer
            data={{
              label: "K2_SPH2_TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH3_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH4_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH5_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH6_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH7_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH8_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH9_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH10_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH11_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPH12_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-01 ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "7",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "8",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "9",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "10",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "11",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "12",
            }}
          />
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01 mx-auto",
            label: "SPILLAGE HOPPER TEMPERATURES",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Line Freq.",
          }}
        />
        <BlackContainer
          data={{
            label: "LINE_FREQ",
            useClass: "greenTxt mt-01",
            unit: "Hz",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "3 FLR WTR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "TNK LEVEL",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_3FLR_WT_LI",
            useClass: "greenTxt mt-01",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <div className="img-66 text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M12_01")}`}
              label="VCM_M12_01"
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "VCM_M12_II",
            useClass: "greenTxt mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M20_01")}`}
          label="VCM_M20_01"
        />
        <BlackContainer
          data={{
            label: "VCM_M20_01_ZI",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FAD",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_FAD_ZI",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CF VFD",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ROOM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CF_VFD_RM_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "ESP CH",
          }}
        />
        <MotorCircleDigitalTag
          className={`square px-3 mt-01 digital-tag ${useColorStatus(
            "K2_200_ESPCH"
          )}`}
          label="K2_200_ESPCH"
        />
        <BlackContainer
          data={{
            label: "K2_200_ESPC_KV",
            useClass: "greenTxt mt-01",
            unit: "KV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K2 CCR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ROOM",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CCR_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "BH ATLAS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "COMP",
          }}
        />
        <div className="d-flex ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1",
            }}
          />
          <div className="img-66 text-center ml-1">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_BH_COMP1")}`}
                label="K2_BH_COMP1"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-01 ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "2",
            }}
          />
          <div className="img-66 text-center ml-1">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_BH_COMP2")}`}
                label="K2_BH_COMP2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "STACK EMISSION",
          }}
        />
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BH ESP",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_MESP_STACK_AI",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "C ESP",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CESP_EMISSION",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-45">
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_1TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K2 BAG HOUSE",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "HYB_BH_TIMER_ON_FB"
            )}`}
            label="HYB_BH_TIMER_ON_FB"
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_2TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESP_BH_IL_PI",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESP_BH_AIR_PI",
              useClass: "greenTxt ml-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_BH_DP",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESP_BH_DP",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_3TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESP_BH_OL_PI",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BAG_HOUSE_DP",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square px-2 digital-tag g${useColorStatus(
              "K2_BH_FA_GATE"
            )}`}
            label="K2_BH_FA_GATE"
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute single-text-46">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ESPF",
            }}
          />
          <div className="img-66 text-center mt-01">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_ESP_FAN")}`}
                label="K2_ESP_FAN"
              />
            </div>
          </div>
          <MotorCircleDigitalTag
            className={`square mt-01 digital-tag ${useColorStatus(
              "K2_ESPF_DMP"
            )}`}
            label="K2_ESPF_DMP"
          />
          <BlackContainer
            data={{
              label: "K2_ESPF_ZI",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESPF_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "K2_ESPF_STEPS",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WGF1  WP",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K2_ESPF_BLWR_3_FB")}`}
            label="K2_ESPF_BLWR_3_FB"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "K2_ESPF_BLWR_4_FB"
            )}`}
            label="K2_ESPF_BLWR_4_FB"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "K2_ESPF_BLWR_1_FB"
            )}`}
            label="K2_ESPF_BLWR_1_FB"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "K2_ESPF_BLWR_2_FB"
            )}`}
            label="K2_ESPF_BLWR_2_FB"
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CESPF",
            }}
          />
          <div className="img-66 text-center mt-01">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "CLR_ESP_FAN_DOL"
                )}`}
                label="CLR_ESP_FAN_DOL"
              />
            </div>
          </div>
          <MotorCircleDigitalTag
            className={`square mt-01 digital-tag ${useColorStatus(
              "K2_CESPF_DMP_PID"
            )}`}
            label="K2_CESPF_DMP_PID"
          />
          <BlackContainer
            data={{
              label: "K2_CESPF_ZI",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CESPF_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-01">
            <BlackContainer
              data={{
                label: "CESP_FAN_STEP",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CESPF_SPD",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "K2_WGF1_BRGW_PI",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K2_CESPF_GRR_CB1_FB"
            )}`}
            label="K2_CESPF_GRR_CB1_FB"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "K2_CESPF_GRR_CB2_FB"
            )}`}
            label="K2_CESPF_GRR_CB2_FB"
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WGF-1",
            }}
          />
          <div className="img-66 text-center mt-01">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_WGF1")}`}
                label="K2_WGF1"
              />
            </div>
          </div>
          <div className="d-flex mt-01">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "K2_WGF1_GRR_BLRS_ON"
              )}`}
              label="K2_WGF1_GRR_BLRS_ON"
            />
            <MotorCircleDigitalTag
              className={`square ml-2 digital-tag ${useColorStatus(
                "K2_WGF1_DAMP"
              )}`}
              label="K2_WGF1_DAMP"
            />
          </div>
          <BlackContainer
            data={{
              label: "K2_WGF1_ZI",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "E0_K2_WGF1_JI",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "WGF1_STEP",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WGF2 WP",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K2_WGF1CBLR1")}`}
            label="K2_WGF1CBLR1"
            text="A"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus(
              "K2_WGF1CBLR2"
            )}`}
            label="K2_WGF1CBLR2"
            text="A"
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WGF-2",
            }}
          />
          <div className="img-66 text-center mt-01">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_WGF2")}`}
                label="K2_WGF2"
              />
            </div>
          </div>
          <div className="d-flex mt-01">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "K2_WGF2_GRR_BLRS_ON"
              )}`}
              label="K2_WGF2_GRR_BLRS_ON"
            />
            <MotorCircleDigitalTag
              className={`square ml-2 digital-tag ${useColorStatus(
                "K2_WGF2_DAMP"
              )}`}
              label="K2_WGF2_DAMP"
            />
          </div>
          <BlackContainer
            data={{
              label: "K2_WGF2_ZI",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "E0_K2_WGF2_JI",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "WGF2_STEP",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_WGF2_BRGW_PI",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K2_WGF2CBLR1")}`}
            label="K2_WGF2CBLR1"
            text="A"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus(
              "K2_WGF2CBLR2"
            )}`}
            label="K2_WGF2CBLR2"
            text="A"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GND WT WTR FLOW",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_GWT_FT",
            useClass: "greenTxt mt-01",
            unit: "m³/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PRV_DAY_K2_GND_WT_FT_TOT",
            useClass: "greenTxt mt-01",
            unit: "Lt",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "PRV DAY CNT",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_GND_WT_FLOW_TOT",
            useClass: "greenTxt mt-01",
            unit: "Lt",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-01",
                label: "LP CYC WP-2",
              }}
            />
            <div className="img-86 text-center mt-01 pt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_LP_CYC_WP2")}`}
                label="K2_LP_CYC_WP2"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-01",
                label: "CM2 DC",
              }}
            />
            <div className="img-66 text-center mt-01">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("C2_61_M01")}`}
                  label="C2_61_M01"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PA FAN",
          }}
        />
        <div className="img-66 text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("K06_M01")}`}
              label="K06_M01"
            />
          </div>
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute single-text-49">
        <div>
          <div className="img-66 text-center">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "K2_PCF_PAF_VFD"
                )}`}
                label="K2_PCF_PAF_VFD"
              />
            </div>
          </div>
          <MotorCircleDigitalTag
            className={`square mt-01 px-2 digital-tag ${useColorStatus(
              "K2_PCF_PAFSV"
            )}`}
            label="K2_PCF_PAFSV"
          />
          <BlackContainer
            data={{
              label: "PCF_PAF_VFD_REF",
              useClass: "greenTxt mt-01",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M12_VFD_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "VCM_M12_VFD_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PCB_AXIL_PI",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`square mt-01 digital-tag ${useColorStatus(
              "K2_PCF_PAF_DAMP"
            )}`}
            label="K2_PCF_PAF_DAMP"
          />
          <BlackContainer
            data={{
              label: "K2_PC_PAF_PI",
              useClass: "greenTxt mt-01",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PC_PAF_FI",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "K2_PC_PAF_DE_TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PC_PAF_NDE_TI",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PCB_SWIRL_PI",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <BlackContainer
            data={{
              label: "K2_PCF_PAF_DAMP_ZI",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PT_COK_BIN_LI",
              useClass: "greenTxt mt-01",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CBP",
            }}
          />
          <MotorCircleDigitalTag
            className={`square mt-1 px-2 digital-tag ${useColorStatus(
              "C2_CBP_SV"
            )}`}
            label="C2_CBP_SV"
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute single-text-50">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "7 FLR WTR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TNK LVL",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_7FLR_WT_LI",
              useClass: "greenTxt mt-01",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex  mt-01">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "K2_PH_3RD_FLOOR_PMP1"
              )}`}
              label="K2_PH_3RD_FLOOR_PMP1"
            />
            <MotorCircleDigitalTag
              className={`dot ml-1 digital-tag ${useColorStatus(
                "K2_PH_3RD_FLOOR_PMP2"
              )}`}
              label="K2_PH_3RD_FLOOR_PMP2"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "3rd FLR WP",
            }}
          />
          <div className="d-flex mt-01">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PMP 1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "PMP 2",
              }}
            />
          </div>
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K2_PH_OL_TMP_PID"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "K2_PH_OL_TMP_PID"
            )}`}
            label="K2_PH_OL_TMP_PID"
          />
          <BlackContainer
            data={{
              label: "K2_CY_WTPMP_SI",
              useClass: "greenTxt mt-01",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_7FLR_WT_FI",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute single-text-51">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CSP DPC",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CSP_DPC_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BRK AMPS",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLK_BRK_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DBC-1",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_ZI",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP.D.CHAIN",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPDC1_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CLK TI.ON BLT",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLK_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DBC-2",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_DBC2_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AMPS",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_SPDC2_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CLK TI",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_DBC1_CLK_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute single-text-52">
        <div>
          <div className="d-flex">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "K2_CD1_PID_1"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "K2_CD1_PID_1"
              )}`}
              label="K2_CD1_PID_1"
            />
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center ml-2"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "K2_CD1_PID_2"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "K2_CD1_PID_2"
              )}`}
              label="K2_CD1_PID_2"
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot mt-01 digital-tag ${useColorStatus("K2_CD1")}`}
            label="K2_CD1"
          />
          <BlackContainer
            data={{
              label: "K2_CD1_SY",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD1_SI",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD1_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD1_DE_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD1_NDE_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1 mt-01">
          <MotorCircleDigitalTag
            className={`dot mt-2 digital-tag ${useColorStatus("K2_CD2")}`}
            label="K2_CD2"
          />
          <BlackContainer
            data={{
              label: "K2_CD2_SY",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD2_SI",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD2_II",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD2_DE_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD2_NDE_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DBC - 2",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center mt-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K2_DBC_2_II_PID"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "K2_DBC_2_II_PID"
            )}`}
            label="K2_DBC_2_II_PID"
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "K2_CLK_BRK_DE_TI",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CLK_BRK_NDE_TI",
                useClass: "greenTxt ml-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <div className="img-86 text-center mt-01 pt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_CLR_WP1")}`}
                label="K2_CLR_WP1"
              />
            </div>
            <div className="img-86 text-center mt-01 pt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-1 ${useColorStatus(
                  "K2_CLR_WP2"
                )}`}
                label="K2_CLR_WP2"
              />
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "WP-1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "WP-2",
              }}
            />
          </div>

          <BlackContainer
            data={{
              label: "K2_CLR_WT_LI",
              useClass: "greenTxt mt-01",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-53">
        <div className="d-flex">
          <div>
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "K2_CF3_PID"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "K2_CF3_PID"
              )}`}
              label="K2_CF3_PID"
            />
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("K2_CF3_VFD")}`}
                  label="K2_CF3_VFD"
                />
              </div>
            </div>
            <BlackContainer
              data={{
                label: "K2_CF3_SI",
                useClass: "greenTxt mt-01",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF3_II",
                useClass: "greenTxt mt-01",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "K2_CF_3_PID"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "K2_CF_3_PID"
              )}`}
              label="K2_CF_3_PID"
            />
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("K2_CF_3")}`}
                  label="K2_CF_3"
                />
              </div>
            </div>
            <BlackContainer
              data={{
                label: "K2_CF_3_SI",
                useClass: "greenTxt mt-01",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF_3_II",
                useClass: "greenTxt mt-01",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "K2_CF4_PID"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "K2_CF4_PID"
              )}`}
              label="K2_CF4_PID"
            />
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("K2_CF4_VFD")}`}
                  label="K2_CF4_VFD"
                />
              </div>
            </div>
            <BlackContainer
              data={{
                label: "K2_CF4_SI",
                useClass: "greenTxt mt-01",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF4_II",
                useClass: "greenTxt mt-01",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "PidCascadeLoop_1"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "PidCascadeLoop_1"
              )}`}
              label="PidCascadeLoop_1"
            />
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "K2_PC_BLWR1_VFD"
                  )}`}
                  label="K2_PC_BLWR1_VFD"
                />
              </div>
            </div>
            <BlackContainer
              data={{
                label: "K2_PC_BLWR1_VFD_RPM",
                useClass: "greenTxt mt-01",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_PC_BLWR1_VFD_II",
                useClass: "greenTxt mt-01",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AXIAL PR",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_PA_AX_PI",
                useClass: "greenTxt mt-01",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-01",
                label: "SWIRL PR",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_PA_SW_PI",
                useClass: "greenTxt mt-01",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CAB ON",
              }}
            />
            <MotorCircleDigitalTag
              className={`square px-2 mt-01 digital-tag ${useColorStatus(
                "COOLER_AB_ON"
              )}`}
              label="COOLER_AB_ON"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-01",
                label: "CAB AIR",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CLR_AB_PI",
                useClass: "greenTxt mt-01",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CF1",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF2_FI",
                useClass: "greenTxt mt-01",
                unit: "m³/min",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF1_DE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF1_NDE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CF2",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF2A_II",
                useClass: "greenTxt mt-01",
                unit: "A",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF2_II",
                useClass: "greenTxt mt-01",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF2_DE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF2_NDE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF2_ZI",
                useClass: "greenTxt mt-01",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF2A_ZI",
                useClass: "greenTxt ml-1 mt-01",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CF3",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF3_FI",
                useClass: "greenTxt mt-01",
                unit: "m³/min",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF3_DE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF3_NDE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CF4",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF4_FI",
                useClass: "greenTxt mt-01",
                unit: "m³/min",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF4_DE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF4_NDE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF4_ZI",
                useClass: "greenTxt mt-01",
                unit: "%",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF4_JI",
                useClass: "greenTxt mt-01 ml-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CF5",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF5_FI",
                useClass: "greenTxt mt-01",
                unit: "m³/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF5_DE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF5_NDE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF5_ZI",
                useClass: "greenTxt mt-01",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CF6",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF6_FI",
                useClass: "greenTxt mt-01",
                unit: "m³/min",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF6_DE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF6_NDE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CF7",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF7_FLOW",
                useClass: "greenTxt mt-01",
                unit: "m³/min",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K2_CF7_DE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CF7_NDE_TI",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-54">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "NEDO POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "NEDO_JI_MW",
              useClass: "greenTxt ml-1",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NEDO_TRB_IL_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQC IL TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_AQC_IL_TI_2",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_AQC_IL_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AQC_BY_DAMP_ZI",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQC IL DRA",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_AQC_IL_PI",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PH_BOIL_OL_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PH BOIL IL TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PH_BOIL_IL_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PH_BOIL_IL_PI",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PH  BOIL DP",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PH_BOI_DP",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PH_BOIL_OL_PI",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute single-text-55">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GCT WATER TANK LVL",
            }}
          />
          <div className="d-flex justify-between">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "K2_GCT_WT_LSH"
              )}`}
              label="K2_GCT_WT_LSH"
              text="HIGH"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "K2_GCT_WT_LSL"
              )} ml-1`}
              label="K2_GCT_WT_LSL"
              text="LOW"
            />
          </div>
          <div className="d-flex justify-between">
            <div className="dot-square-line-Hr d-flex align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Hr position-relative"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_GCTV130")}`}
                label="K2_GCTV130"
              />
            </div>
            <div className="dot-square-line-Hr d-flex align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Hr position-relative"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_GCTV100_1")}`}
                label="K2_GCTV100_1"
              />
            </div>
          </div>
          <div className="d-flex justify-between">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-sucess",
                  label: "GCT",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-sucess",
                  label: "1",
                }}
              />
              <div className="img-66 text-center mt-01">
                <div className="connector-icon">
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus(
                      "K2_GCT_WP_1"
                    )}`}
                    label="K2_GCT_WP_1"
                  />
                </div>
              </div>
            </div>
            <div className="ml-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-sucess",
                  label: "WTR",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-sucess",
                  label: "2",
                }}
              />
              <div className="img-66 text-center mt-01">
                <div className="connector-icon">
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus(
                      "K2_GCT_WP_2"
                    )}`}
                    label="K2_GCT_WP_2"
                  />
                </div>
              </div>
            </div>
            <div className="ml-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-sucess",
                  label: "PMPS",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-sucess",
                  label: "3",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus(
                  "K2_GCT_WP3_FB"
                )}`}
                label="K2_GCT_WP3_FB"
              />
            </div>
          </div>
        </div>
        <div className="ml-1 align-self-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P1 PRESS",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_GCT_PT129_PI",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P2 PRESS",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_GCT_PT128_PI",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K2_GCT_PID"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "K2_GCT_PID"
            )}`}
            label="K2_GCT_PID"
          />
          <BlackContainer
            data={{
              label: "K2_GCT_MVP_FB",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "K2_GCT_PI",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_GCT_OL_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "K2_GCT_MAT_TI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LINE 1 COMPRESSORS",
          }}
        />
        <div className="d-flex mt-1">
          <div>
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("E0_55_M01")}`}
                  label="E0_55_M01"
                />
              </div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-01",
                label: "1",
              }}
            />
          </div>
          <div>
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("E0_56_M01")}`}
                  label="E0_56_M01"
                />
              </div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-01",
                label: "2",
              }}
            />
          </div>
          <div>
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("E0_57_M01")}`}
                  label="E0_57_M01"
                />
              </div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-01",
                label: "3",
              }}
            />
          </div>
          <div>
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("E0_62_M01")}`}
                  label="E0_62_M01"
                />
              </div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-01",
                label: "4",
              }}
            />
          </div>
          <div>
            <div className="img-66 text-center">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("E0_63_M01")}`}
                  label="E0_63_M01"
                />
              </div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-01",
                label: "ATS",
              }}
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ELGI COMP.",
          }}
        />
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COMP-1(ELGI1)",
            }}
          />
          <div className="img-66 text-center ml-1">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("E0_64_M01")}`}
                label="E0_64_M01"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COMP-2(ATLAS)",
            }}
          />
          <div className="img-66 text-center ml-1">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("E0_66_M01")}`}
                label="E0_66_M01"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COMP-3(ELGI2)",
            }}
          />
          <div className="img-66 text-center ml-1">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("E0_65_M01")}`}
                label="E0_65_M01"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "R. LUB.PUMPS",
          }}
        />
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1",
            }}
          />
          <div className="img-86 text-center pt-1 ml-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M05_01")}`}
              label="VCM_M05_01"
            />
          </div>

          <div className="img-86 text-center pt-1 ml-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M05_02")}`}
              label="VCM_M05_02"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "2",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "VCM_M05_PI",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M05_1_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "VCM_LUB_OT_LI",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M05_2_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "R.TENSION PUMPS",
          }}
        />
        <div className="d-flex justify-content-start align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1",
            }}
          />
          <div className="img-86 text-center pt-1 ml-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M07_01")}`}
              label="VCM_M07_01"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "VCM_RT_PMP_PI",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M07_PI",
              useClass: "greenTxt ml-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SV_PRESS_SET",
              useClass: "greenTxt ml-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "VCM_HYD_OT_LI",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_RT_OT_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute single-text-59">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LP",
            }}
          />
          <div className="img-86 text-center pt-1 mt-01">
            <MotorCircleDigitalTag
              className={`dot digital-tag g${useColorStatus("VCM_M06_02")}`}
              label="VCM_M06_02"
            />
          </div>
          <BlackContainer
            data={{
              label: "VCM_M06_LP_PI",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_GB_OT_LI",
              useClass: "greenTxt mt-01",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HP",
            }}
          />
          <div className="img-86 text-center pt-1 mt-01">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M06_04")}`}
              label="VCM_M06_04"
            />
          </div>
          <BlackContainer
            data={{
              label: "VCM_M06_HP_PI",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_GB_OTNK_LI",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-62">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M11_11"
          )}`}
          label="VCM_M11_11"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-63">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M11_12"
          )}`}
          label="VCM_M11_12"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-64">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M11_13"
          )}`}
          label="VCM_M11_13"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-65">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M11_14"
          )}`}
          label="VCM_M11_14"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-66">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K2_PC_PF"
          )}`}
          label="K2_PC_PF"
        />
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K2_PC_WF")}`}
          label="K2_PC_WF"
        />
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K2_PC_RAL"
          )}`}
          label="K2_PC_RAL
"
        />
        <div className="pipeHr position-relative"></div>
        <div className="triangle-with-squares"></div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-67">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K2_KC_PF"
          )}`}
          label="K2_KC_PF"
        />
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K2_KC_WF")}`}
          label="K2_KC_WF"
        />
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K2_KC_RAL"
          )}`}
          label="K2_KC_RAL"
        />
        <div className="pipeHr position-relative"></div>
        <div className="triangle-with-squares"></div>
      </div>
      <div className="position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KC.P.RAL",
          }}
        />
        <div className="dot-square-line-Hr d-flex align-items-center mt-1">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_M14_04_SV")}`}
            label="VCM_M14_04_SV"
          />
        </div>
        <div className="d-flex flex-column align-items-center ">
          <div className="pipeHr position-relative"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M14_03"
            )}`}
            label="VCM_M14_03"
          />
          <div className="pipeHr position-relative"></div>
        </div>
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center mt-01"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "VCM_M14_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "VCM_M14_PID"
          )}`}
          label="VCM_M14_PID"
        />
        <BlackContainer
          data={{
            label: "VCM_M14_03_SY",
            useClass: "greenTxt mt-01",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M14_03_SI",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M14_03_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-69">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K2_PTC_DC_TIMER")}`}
          label="K2_PTC_DC_TIMER"
        />
        <div className="img-66 text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("K2_PTC_DCF")}`}
              label="K2_PTC_DCF"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K2_PTC_DC_RAL"
          )}`}
          label="K2_PTC_DC_RAL"
        />
        <div className="pipeHr position-relative"></div>
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center mt-01"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "K2_PT_COK_PF_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "K2_PT_COK_PF_PID"
          )}`}
          label="K2_PT_COK_PF_PID"
        />
        <BlackContainer
          data={{
            label: "SC_15_M01_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-70">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TF-2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("C1_53_M01")}`}
          label="C1_53_M01"
        />
      </div>
      <div className="position-absolute single-text-71">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "TF-3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("VCM_M23_01")}`}
            label="VCM_M23_01"
          />
        </div>

        <div className="dot-square-line-Hr d-flex align-items-center mt-01">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_TF_SV")}`}
            label="VCM_TF_SV"
          />
        </div>
      </div>
      <div className="position-absolute single-text-73">
        <BlackContainer
          data={{
            label: "C1_53_M01_SI",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "C1_53_M01_II",
            useClass: "greenTxt mt-01",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "VCM SELECTION",
          }}
        />
        <div className="dot-square-line-Hr d-flex align-items-center mt-01">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_47_BELT_WS_SV")}`}
            label="VCM_47_BELT_WS_SV"
          />
        </div>
      </div>
      <div className="position-absolute single-text-75">
        <BlackContainer
          data={{
            label: "VCM_M22_03_SY",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M22_03_SI",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M22_03_II",
            useClass: "greenTxt mt-01",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M02_SY",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M02_SI",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M02_II",
            useClass: "greenTxt mt-01",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MimicCaret
        parentClass="d-flex tringle-item justify-content-center position-absolute single-text-76"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
          "VCM_M22_03_PID"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
          "VCM_M22_03_PID"
        )}`}
        label="VCM_M22_03_PID"
      />
      <div className="d-flex position-absolute single-text-77">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_INT_WS_CV")}`}
          label="VCM_INT_WS_CV"
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center ml-1"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "MILL_INT_WTR_SPRAY_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "MILL_INT_WTR_SPRAY_PID"
          )}`}
          label="MILL_INT_WTR_SPRAY_PID"
        />
        <BlackContainer
          data={{
            label: "VCM_INT_WCV2_ZI",
            useClass: "greenTxt ml-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-78">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_HA_RAL1"
          )}`}
          label="VCM_HA_RAL1"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-151">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_HA_RAL2"
          )}`}
          label="VCM_HA_RAL2"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="text-center position-absolute single-text-79">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "MILL PID",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "2",
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "VCM_M03_DP_PID"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "VCM_M03_DP_PID"
            )}`}
            label="VCM_M03_DP_PID"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-4"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "VCM_M03_DP_PID2"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "VCM_M03_DP_PID2"
            )}`}
            label="VCM_M03_DP_PID2"
          />
        </div>
        <BlackContainer
          data={{
            label: "MILL_DP_SET",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "DP SET",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-80">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FA PID",
          }}
        />
        <div className="d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "CYC_OUTLET_TEMP_VS_FRESHDA"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "CYC_OUTLET_TEMP_VS_FRESHDA"
            )}`}
            label="CYC_OUTLET_TEMP_VS_FRESHDA"
          />
          <BlackContainer
            data={{
              label: "VCM_M18_01_ZI",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-81">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "VCM_M03_PI_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "VCM_M03_PI_PID"
          )}`}
          label="VCM_M03_PI_PID"
        />
        <BlackContainer
          data={{
            label: "VCM_M24_02_ZI",
            useClass: "greenTxt ml-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M17_01_ZI",
            useClass: "greenTxt ml-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-82">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M24_02")}`}
          label="VCM_M24_02"
        />
        <div className="img-66 text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M24")}`}
              label="VCM_M24"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M17_01")}`}
          label="VCM_M17_01"
        />
        <BlackContainer
          data={{
            label: "VCM_M03_TI",
            useClass: "greenTxt ml-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-83">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "VCM_M24_LRS_OPEN"
            )}`}
            label="VCM_M24_LRS_OPEN"
            text="O"
          />

          <MotorCircleDigitalTag
            className={`square ml-3 digital-tag ${useColorStatus(
              "VCM_M24_LRS_CLOSE"
            )}`}
            label="VCM_M24_LRS_CLOSE"
            text="C"
          />
        </div>

        <BlackContainer
          data={{
            label: "VCM_M24_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-84">
        <BlackContainer
          data={{
            label: "VCM_BF_DD_PI",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M16_01")}`}
          label="VCM_M16_01"
        />

        <BlackContainer
          data={{
            label: "VCM_M16_01_ZI",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-85">
        <MotorCircleDigitalTag
          className={`square px-3 digital-tag ${useColorStatus(
            "VCM_M14_03_SV_COM"
          )}`}
          label="VCM_M14_03_SV_COM"
          text="SV1"
        />
        <MotorCircleDigitalTag
          className={`square px-3 mt-1 digital-tag ${useColorStatus(
            "VCM_M14_03_SV2_COM"
          )}`}
          label="VCM_M14_03_SV2_COM"
          text="SV2"
        />
      </div>
      <div className="position-absolute single-text-86">
        <BlackContainer
          data={{
            label: "VCM_R_CHUTE_1_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_R_CHUTE_2_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="dot-square-line-Hr d-flex align-items-center position-absolute single-text-87">
        <div className={`square grey-color`}></div>
        <div className="yellowline-Hr position-relative"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("VCM_RB_SV")}`}
          label="VCM_RB_SV"
        />
      </div>
      <div className="position-absolute single-text-89">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "VCM TF BYPASS",
          }}
        />
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "VCM_TF_REF",
                useClass: "greenTxt",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VCM_TF_SI",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VCM_M23_01_II",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MS",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("VCM_M22_01")}`}
              label="VCM_M22_01"
            />
          </div>
          <div className="ml-1 d-flex flex-column justify-content-between">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "VCM_M02_02_PID"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "VCM_M02_02_PID"
              )}`}
              label="VCM_M02_02_PID"
            />
            <MotorCircleDigitalTag
              className={`text-dark px-1  mt-3 digital-tag ${useColorStatus(
                "VCM_M22_02_EH"
              )}`}
              label="VCM_M22_02_EH"
              text="M.D."
            />
          </div>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "K2_PTC_DC_DP",
          useClass: "greenTxt position-absolute single-text-90",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "VCM_M09_3_TI",
          useClass: "greenTxt position-absolute single-text-91",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-92">
        <BlackContainer
          data={{
            label: "VCM_M10_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EX FAN PAR",
          }}
        />
      </div>
      <div className="position-absolute single-text-93">
        <BlackContainer
          data={{
            label: "VCM_M10_PI",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M19_01_ZI",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-94">
        <BlackContainer
          data={{
            label: "VCM_M11_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M11_2_PI",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-95">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M19_01")}`}
          label="VCM_M19_01"
        />
        <div className="img-66 text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M10")}`}
              label="VCM_M10"
            />
          </div>
        </div>
      </div>
      <MimicCaret
        parentClass="d-flex tringle-item justify-content-center position-absolute single-text-96"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
          "VCM_M11_2_PI_PID"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
          "VCM_M11_2_PI_PID"
        )}`}
        label="VCM_M11_2_PI_PID"
      />
      <div className="boxContainer position-absolute single-text-97">
        <MotorCircleDigitalTag
          className={`square w-100 digital-tag ${useColorStatus(
            "BH_TIMER_ON"
          )}`}
          label="BH_TIMER_ON"
        />
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "VCM_M11_1_PI",
              useClass: "greenTxt",
              unit: "Kg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_BH_AIR_PI",
              useClass: "greenTxt ml-1",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M11_DP",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-98">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "VCM_M10_GRR_RES_MAX"
            )}`}
            label="VCM_M10_GRR_RES_MAX"
            text="O"
          />

          <MotorCircleDigitalTag
            className={`square ml-3 digital-tag ${useColorStatus(
              "VCM_M10_GRR_RES_MIN"
            )}`}
            label="VCM_M10_GRR_RES_MIN"
            text="C"
          />
        </div>
        <BlackContainer
          data={{
            label: "VCM_M10_01_II",
            useClass: "greenTxt mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus(
            "VCM_M10_GRR_INC"
          )}`}
          label="VCM_M10_GRR_INC"
          text="INC"
        />
        <BlackContainer
          data={{
            label: "EX_FAN_STEP",
            useClass: "greenTxt mt-01",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus(
            "VCM_M10_GRR_DEC"
          )}`}
          label="VCM_M10_GRR_DEC"
          text="DEC"
        />
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-99">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M09_1"
          )}`}
          label="VCM_M09_1"
        />
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M09_2"
          )}`}
          label="VCM_M09_2"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-100">
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M09_3"
          )}`}
          label="VCM_M09_3"
        />
        <div className="pipeHr position-relative"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M09_4"
          )}`}
          label="VCM_M09_4"
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="position-absolute single-text-101">
        <BlackContainer
          data={{
            label: "VCM_M09_2_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PH SIDE",
          }}
        />
      </div>
      <div className="position-absolute single-text-102">
        <BlackContainer
          data={{
            label: "VCM_M09_1_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CLNY SIDE",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "VCM_M13_01_II",
          useClass: "greenTxt position-absolute single-text-103",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-104">
        <div className="dot-square-line-Hr d-flex align-items-center">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_M02_WS_SV")}`}
            label="VCM_M02_WS_SV"
          />
        </div>
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center ml-1"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "VCM_INT_WS_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "VCM_INT_WS_PID"
          )}`}
          label="VCM_INT_WS_PID"
        />
        <BlackContainer
          data={{
            label: "VCM_INT_WCV_ZI",
            useClass: "greenTxt ml-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_INT_WATER_FI",
            useClass: "greenTxt ml-1",
            unit: "lpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "VCM_M03_3_TI",
          useClass: "greenTxt position-absolute single-text-105",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-106">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PC_HI_LVL",
            }}
          />
          <BlackContainer
            data={{
              label: "PC_HI_LVL",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PC_LO_LVL",
            }}
          />
          <BlackContainer
            data={{
              label: "PC_LOW_LVL",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-107">
        <BlackContainer
          data={{
            label: "VCM_M03_XI",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_1_XI",
            useClass: "greenTxt mt-01",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-108">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white p-1",
            label: "COAL BIN TEMP'S",
          }}
        />
        <div className="img-86 text-center mt-2 pt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_IL_ES_PUMP")}`}
            label="VCM_IL_ES_PUMP"
          />
        </div>
      </div>
      <div className="position-absolute single-text-109">
        <BlackContainer
          data={{
            label: "VCM_M14_02_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot mt-01 digital-tag ${useColorStatus("VCM_PC_BIN_LS")}`}
          label="VCM_PC_BIN_LS"
        />
      </div>
      <div className="position-absolute single-text-110">
        <BlackContainer
          data={{
            label: "VCM_M14_01_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot mt-01 digital-tag ${useColorStatus("VCM_KC_BIN_LS")}`}
          label="VCM_KC_BIN_LS"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-111">
        <BlackContainer
          data={{
            label: "PC_KC_TOT_BIN_TON",
            useClass: "greenTxt ml-3",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PC_PID_INTR.SpManValue",
            useClass: "greenTxt mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PC_PERCENTAGE",
            useClass: "greenTxt ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-112">
        <div className="d-flex">
          <div className="img-41 text-center pt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_M03")}`}
              label="VCM_M03"
            />
          </div>
          <BlackContainer
            data={{
              label: "VCM_M03_01_II",
              useClass: "greenTxt ml-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01">
          <MotorCircleDigitalTag
            className={`text-dark p-1 digital-tag ${useColorStatus(
              "VCM_M03_SAL"
            )}`}
            label="VCM_M03_SAL"
            text="ZSS"
          />
          <MotorCircleDigitalTag
            className={`square ml-1 digital-tag ${useColorStatus(
              "VCM_M03_LRS_OPEN"
            )}`}
            label="VCM_M03_LRS_OPEN"
            text="O"
          />
          <MotorCircleDigitalTag
            className={`square ml-1 digital-tag ${useColorStatus(
              "VCM_M03_LRS_CLOSE"
            )}`}
            label="VCM_M03_LRS_CLOSE"
            text="C"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "GB OIL PUMPS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-113">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("VCM_RGL_PS_N")}`}
          label="VCM_RGL_PS_N"
          text="N"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 ml-1 digital-tag ${useColorStatus(
            "VCM_RGL_PS_L"
          )}`}
          label="VCM_RGL_PS_L"
          text="L"
        />
        <BlackContainer
          data={{
            label: "K2_PC_BLR_1_II",
            useClass: "greenTxt ml-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-114">
        <BlackContainer
          data={{
            label: "K2_PC_FKS_PI",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          secondCircle={{
            secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
              "K2_PC_FKP"
            )}`,
            secondCircleLabel: "K2_PC_FKP",
          }}
        />
        <div className="d-flex">
          <div className="img-66 text-center">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_PC_BLR_1")}`}
                label="K2_PC_BLR_1"
              />
            </div>
          </div>
          <div className="img-66 text-center ml-2">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_PC_BLR_2")}`}
                label="K2_PC_BLR_2"
              />
            </div>
          </div>
        </div>
        <BlackContainer
          data={{
            label: "K2_PC_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-115">
        <BlackContainer
          data={{
            label: "K2_KC_FKS_PI",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          secondCircle={{
            secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
              "K2_KC_FKP"
            )}`,
            secondCircleLabel: "K2_KC_FKP",
          }}
        />
        <div className="d-flex">
          <div className="img-66 text-center">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K2_KC_BLR_1")}`}
                label="K2_KC_BLR_1"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "K2_KC_BLR_1_II",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-116">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "K2_PC_WF_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "K2_PC_WF_PID"
          )}`}
          label="K2_PC_WF_PID"
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center mt-1"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "K2_PC_WF_PID2"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "K2_PC_WF_PID2"
          )}`}
          label="K2_PC_WF_PID2"
        />
        <BlackContainer
          data={{
            label: "K2_PC_RAL_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-117">
        <div className="d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K2_PC_PID1"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "K2_PC_PID1"
            )}`}
            label="K2_PC_PID1"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-1"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K2_PC_PID2"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "K2_PC_PID2"
            )}`}
            label="K2_PC_PID2"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-1"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K2_PC_PID3"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "K2_PC_PID3"
            )}`}
            label="K2_PC_PID3"
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_PC_WF_FY",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_PC_WF_SI",
              useClass: "greenTxt ml-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_PC_WF_FI",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_KC_RAL_II",
              useClass: "greenTxt ml-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K2_PC_WF_BB",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PC_FKP_II",
            useClass: "greenTxt mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PC_BLR_2_II",
            useClass: "greenTxt mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-118">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "K2_KC_WF_PID2"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "K2_KC_WF_PID2"
          )}`}
          label="K2_KC_WF_PID2"
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_KC_WF_FY",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_KC_PERCENTAGE",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_KC_WF_FI",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_KC_WF_BB",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_KF_PF_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_KC_WF_SI",
              useClass: "greenTxt ml-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K2_KC_FKP_II",
            useClass: "greenTxt mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_KC_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-119">
        <div className="dot-square-line-Hr d-flex align-items-center">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "VCM_KCPC_BIN_DVG_SV"
            )}`}
            label="VCM_KCPC_BIN_DVG_SV"
          />
        </div>
        <BlackContainer
          data={{
            label: "VCM_M26_01_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "VCM_M13_02_II",
          useClass: "greenTxt position-absolute single-text-120",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-121">
        <BlackContainer
          data={{
            label: "VCM_M20_3_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M20_02_ZI",
            useClass: "greenTxt ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-122">
        <BlackContainer
          data={{
            label: "K2_PH_OL_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PH_OL_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-123">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CHIMNEY_O2",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SO2",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CHIMNEY_SOX",
              useClass: "greenTxt mt-01",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "NO",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CHIMNEY_NOX",
              useClass: "greenTxt mt-01",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-124">
        <BlackContainer
          data={{
            label: "K2_PH_OL_CO",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PH_OL_O2",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-125">
        <BlackContainer
          data={{
            label: "K2_4AG_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_4AG_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-126">
        <BlackContainer
          data={{
            label: "K2_4BG_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_4BG_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-127">
        <BlackContainer
          data={{
            label: "K2_4AM_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_4A_BOT_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-128">
        <BlackContainer
          data={{
            label: "K2_3G_PI",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_3G_TI",
            useClass: "greenTxt ml-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-129">
        <BlackContainer
          data={{
            label: "K2_4BM_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_4B_BOT_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_2AB_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_2AB_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-130">
        <BlackContainer
          data={{
            label: "K2_2AG_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_2AG_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-131">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_1CY_CO",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_1CY_O2",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_1G_TI_2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_1G_TI",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "K2_1G_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-132">
        <BlackContainer
          data={{
            label: "K2_1BOT_TI_NEW1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_MIX_CH_TI",
            useClass: "greenTxt ml-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-133">
        <BlackContainer
          data={{
            label: "K2_1BOT_PI_NEW1",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_1BOT_PI_NEW2",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_1BOT_PI_NEW3",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-134">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BE-1",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_BE1_II",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BE-2",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_BE2_II",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-135">
        <BlackContainer
          data={{
            label: "K2_IL_PI",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_IL_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_IL_CO",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_IL_O2",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "K2_IL_PI2",
          useClass: "greenTxt position-absolute single-text-136",
          unit: "mmWG",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-137">
        <BlackContainer
          data={{
            label: "K2_PC_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PC_TI_1",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PC_TI_2",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PC_PI_2",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-138">
        <BlackContainer
          data={{
            label: "K2_100_M13_ZI",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_RCA_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_RCA_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-139">
        <BlackContainer
          data={{
            label: "K2_TAD_TI_2",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_TAD_HOP1_PI",
            useClass: "greenTxt ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_TAD_HOP2_PI",
            useClass: "greenTxt ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_TAD_TI",
            useClass: "greenTxt ml-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-140">
        <BlackContainer
          data={{
            label: "K2_TAD_HOP1_TI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_TAD_HOP2_TI",
            useClass: "greenTxt ml-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-141">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "K2_HOOD_PI_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "K2_HOOD_PI_PID"
          )}`}
          label="K2_HOOD_PI_PID"
        />
        <BlackContainer
          data={{
            label: "K2_SA_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_HOOD_PI",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_BZ_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_BZ_PM_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-142">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K2 FILLING RATIO",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_FILLING_RATIO",
            useClass: "greenTxt mt-01",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_MD_GB1_OIL_PI",
            useClass: "greenTxt mt-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "K2_MD_GB2_OIL_PI",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-143">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Ref Set RPM",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_MD_SY",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_MD_SI",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_MD_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "K2_MD_SLAVE_II",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-41 text-center position-absolute single-text-144">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2_MD")}`}
          label="K2_MD"
        />
      </div>
      <div className="img-86 text-center position-absolute single-text-145">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2_GGS")}`}
          label="K2_GGS"
        />
      </div>
      <div className="position-absolute single-text-146">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K2_KF_WF")}`}
          label="K2_KF_WF"
        />
        <BlackContainer
          data={{
            label: "K2_KF_WF_FY",
            useClass: "greenTxt mt-01",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_KF_WF_FI",
            useClass: "greenTxt mt-01",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_KF_WF_DV_ZI",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="dot-square-line-Hr d-flex align-items-center mt-1">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K2_KF_WF_SG")}`}
            label="K2_KF_WF_SG"
          />
        </div>
        <BlackContainer
          data={{
            label: "K2_KF_WF_RPM",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center mr-1"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K2_KF_DV_PID"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "K2_KF_DV_PID"
            )}`}
            label="K2_KF_DV_PID"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "K2_KF_DV_PID_DAMPER"
            )}`}
            label="K2_KF_DV_PID_DAMPER"
          />
        </div>
      </div>
      <div className="position-absolute single-text-147">
        <BlackContainer
          data={{
            label: "K2_KF_SFF_PI",
            useClass: "greenTxt mb-1 ml-3",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K2_KF_SFF")}`}
          label="K2_KF_SFF"
        />
        <BlackContainer
          data={{
            label: "K2_KF_SFF_FY",
            useClass: "greenTxt mt-01",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_KF_SFF_FI",
            useClass: "greenTxt mt-01",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_KF_SFF_DV_ZI",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="dot-square-line-Hr d-flex align-items-center mt-1">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K2_KF_SFF_SG")}`}
            label="K2_KF_SFF_SG"
          />
        </div>
        <BlackContainer
          data={{
            label: "K2_VPP_TPH",
            useClass: "greenTxt mt-01",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_VPP_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-148">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CF'S VOLUME",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "Nm3/kg CLK",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_TOTAL_CF_VOLUME",
            useClass: "greenTxt mt-01",
            unit: "Nm3/Kg",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "SR LUB PMP",
          }}
        />
        <div className="img-86 text-center mt-01 pt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K2_SR_LUB_PMP_2")}`}
            label="K2_SR_LUB_PMP_2"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-149">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "VPP VENT",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_VPP_VENT_PI",
            useClass: "greenTxt ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KF DC DP",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_DF_DC_DP",
            useClass: "greenTxt ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "K2_4A4B_ED_TI",
          useClass: "greenTxt position-absolute single-text-150",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-152",
          label: "TO KF BE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark p-1 bg-white position-absolute single-text-153",
          label: "BOOSTER FAN PAR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-154",
          label: "FROM V.F.O/L",
        }}
      />
      <div className="position-absolute single-text-155">
        <BlackContainer
          data={{
            label: "K2_PTC_BIN_CO",
            useClass: "greenTxt",
            unit: "PPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PT_COK_WF_FY",
            useClass: "greenTxt mt-01",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PT_COK_WF_TPH",
            useClass: "greenTxt mt-01",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PT_COK_WF_BB",
            useClass: "greenTxt mt-01",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_PT_COK_PF_RPM",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-156">
        <BlackContainer
          data={{
            label: "VCM_HA_CY_PI",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_HA_CY2_PI",
            useClass: "greenTxt ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-157">
        <MotorCircleDigitalTag
          className={`square px-3 digital-tag ${useColorStatus(
            "VCM_PR1_ON_FB"
          )}`}
          label="VCM_PR1_ON_FB"
          text="BH"
        />
        <MotorCircleDigitalTag
          className={`square px-3 mt-01 digital-tag ${useColorStatus(
            "VCM_PR2_ON_FB"
          )}`}
          label="VCM_PR2_ON_FB"
          text="PC"
        />
        <MotorCircleDigitalTag
          className={`square px-3 mt-01 digital-tag ${useColorStatus(
            "VCM_PR3_ON_FB"
          )}`}
          label="VCM_PR3_ON_FB"
          text="KC"
        />
        <BlackContainer
          data={{
            label: "VCM_COAL_BIN_O2",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_COAL_BIN_CO",
            useClass: "greenTxt mt-01",
            unit: "PPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-158">
        <BlackContainer
          data={{
            label: "K2_CLR_COMP1_PI",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLR_COMP2_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLR_COMP3_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLR_COMP4_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLR_COMP5_PI",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLR_STG_1_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLR_STG_2_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLRUG_1_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLRUG_2_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CLRUG_3_TI",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DIESEL",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_DT_LI",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_KCF_OIL_PI",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "VCM_M09_1_DP",
          useClass: "greenTxt position-absolute single-text-159",
          unit: "mmWG",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-160">
        {/* WG FAN 1 POPUP */}
        <button
          className="btn greenbtn Btn-1 d-block"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2wgfan1popup2",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2wgfan1popup2",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
        >
          WG_FAN1
        </button>
        {/* WG FAN 2 POPUP */}
        <button
          className="btn greenbtn Btn-1  d-block"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2wgfan2popup3",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2wgfan2popup3",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
        >
          WG_FAN2
        </button>
        {/* ESP FAN POPUP */}
        <button
          className="btn greenbtn Btn-1 d-block"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2espfanpopup1",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2espfanpopup1",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
        >
          ESP_FAN
        </button>
        {/* CESP FAN POPUP */}
        <button
          className="btn greenbtn Btn-1  d-block"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2cespfanpopup4",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "vishnupuramline2cespfanpopup4",
                plant: "vishnupuram",
                plantcode: "VSCW",
              },
            });
          }}
        >
          CESP_FAN
        </button>
      </div>
    </div>
  );
};
