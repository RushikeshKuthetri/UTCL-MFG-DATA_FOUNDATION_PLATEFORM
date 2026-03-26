import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
  ProgressBarMimic,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
  RedBoxWithGate,
} from "../../../../index";
import {
  useBorderTagsColorStatus,
  useBVTagsColorStatusForNewPlantScreens,
  useCaretColorStatus,
  useColorStatus,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

import * as tagsData from "../../../../../data/hirmi/Line-1/Kiln/hirmiKilnTextColumn";

export const CementMill2Line1 = () => {
  return (
    <div className="CementMill2Line1 w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr position-absolute pipe-31"></div>
      <div className="yellowline-Vr position-absolute pipe-32"></div>
      <div className="yellowline-Vr position-absolute pipe-33"></div>
      <div className="yellowline-Hr position-absolute pipe-34"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-35"></div>
      <div className="yellowline-Hr position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr position-absolute pipe-42"></div>
      <div className="yellowline-Hr position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-45"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr position-absolute pipe-47"></div>
      <div className="yellowline-Vr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr position-absolute pipe-51"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-53"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-54"></div>
      <div className="yellowline-Hr position-absolute pipe-55"></div>
      <div className="yellowline-Vr position-absolute pipe-56"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-57"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-58"></div>
      <div className="yellowline-Hr position-absolute pipe-59"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-60"></div>
      <div className="yellowline-Vr position-absolute pipe-61"></div>
      <div className="yellowline-Hr position-absolute pipe-62"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-63"></div>
      <div className="yellowline-Vr position-absolute pipe-64"></div>
      <div className="yellowline-Hr position-absolute pipe-65"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-66"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-67"></div>
      <div className="yellowline-Vr position-absolute pipe-68"></div>
      <div className="yellowline-Hr position-absolute pipe-69"></div>
      <div className="yellowline-Vr position-absolute pipe-70"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-71"></div>
      <div className="yellowline-Hr position-absolute pipe-72"></div>
      <div className="yellowline-Hr position-absolute pipe-73"></div>
      <div className="yellowline-Hr position-absolute pipe-74"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-75"></div>
      <div className="yellowline-Vr position-absolute pipe-76"></div>
      <div className="yellowline-Hr position-absolute pipe-77"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-78"></div>
      <div className="yellowline-Hr position-absolute pipe-79"></div>
      <div className="yellowline-Vr position-absolute pipe-80"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-81"></div>
      <div className="yellowline-Hr position-absolute pipe-82"></div>
      <div className="yellowline-Vr position-absolute pipe-83"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-84"></div>
      <div className="yellowline-Vr position-absolute pipe-85"></div>
      <div className="yellowline-Hr position-absolute pipe-86"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-87"></div>
      <div className="yellowline-Vr position-absolute pipe-88"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-89"></div>
      <div className="yellowline-Vr position-absolute pipe-90"></div>
      <div className="yellowline-Hr position-absolute pipe-91"></div>
      <div className="yellowline-Vr position-absolute pipe-92"></div>
      <div className="yellowline-Hr position-absolute pipe-93"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-94"></div>
      <div className="yellowline-Hr position-absolute pipe-95"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-96"></div>

      <div className="pipe position-absolute pipe-1"></div>
      <div className="pipe position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleLabel: "CM_512SX1",
        }}
        text={{ useClass: "text-dark", label: "A01" }}
        secondCircle={{
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleLabel: "CM_512SX1",
        }}
        text={{ useClass: "text-dark", label: "B01" }}
        secondCircle={{
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleLabel: "CM_512SX1",
        }}
        text={{ useClass: "text-dark", label: "C01" }}
        secondCircle={{
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <div className="position-absolute pipe-7 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2A03")}`}
          label="Z2A03"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2A03SEL01")}`}
          label="Z2A03SEL01"
          text="M"
        />
      </div>
      <div className="position-absolute pipe-8 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U02")}`}
          label="Z2U02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "U02",
          }}
        />
      </div>
      <div className="position-absolute pipe-9">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2S27")}`}
          label="Z2S27"
        />
      </div>
      <div className="position-absolute pipe-10 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2S29")}`}
          label="Z2S29"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "S29",
          }}
        />
      </div>
      <div className="position-absolute pipe-11">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2S33")}`}
          label="Z2S33"
        />
      </div>
      <div className="position-absolute pipe-12">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2S31")}`}
          label="Z2S31"
        />
      </div>
      <div className="position-absolute pipe-13 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2S34")}`}
          label="Z2S34"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "S34",
          }}
        />
      </div>
      <div className="position-absolute pipe-14 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2J80")}`}
          label="Z2J80"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "22J80",
          }}
        />
      </div>
      <div className="position-absolute pipe-15 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2P13")}`}
          label="Z2P13"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "P13",
          }}
        />
      </div>
      <div className="position-absolute pipe-16 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2S29")}`}
          label="Z2S29"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "S29",
          }}
        />
      </div>
      <div className="position-absolute pipe-17 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2S30")}`}
          label="Z2S30"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "S30",
          }}
        />
      </div>
      <div className="position-absolute pipe-18 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U11")}`}
          label="Z2U11"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "U11",
          }}
        />
      </div>

      <div className="single-text-1 asset-67 position-absolute d-flex align-items-center justify-content-center">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Cement Mill 2",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2M01_X1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-2"></div>
      <div className="img-87 position-absolute single-text-3 text-center">
      <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BAG HOUSE",
            }}
          />
           <BlackContainer
          data={{
            label: "CALCULATEDBH_DP",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "Z2BH_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S15",
            }}
          />
        </div>
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S13",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "P101",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <div className="squareplustri text-center">
          <BlackContainer
            data={{
              label: "Z2SLAG_W1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "P21",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("Z2P21_JPF")} mt-1`}
            label="Z2P21_JPF"
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="squareplustri text-center"></div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OPC",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CM2_OPC_SEL"
            )} mt-1`}
            label="CM2_OPC_SEL"
          />
        </div>
        <div className="text-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PPC",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CM2_PPC_SEL"
            )} mt-1`}
            label="CM2_PPC_SEL"
          />
        </div>
        <div className="text-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PCC",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CM2_PCC_SEL"
            )} mt-1`}
            label="CM2_PCC_SEL"
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex align-items-end">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "Z2L01_LI1",
              useClass: "greenTxt ",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center border p-1">
          <BlackContainer
            data={{
              label: "CM2TOTALFEED_SPSPM",
              useClass: "greenTxt ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2TOTAL_FEED",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("AUTOMANUAL_SEL")} `}
          label="AUTOMANUAL_SEL"
        />
        <div className="text-center border p-1">
          <BlackContainer
            data={{
              label: "Z2S02_Z1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S02_PIDSPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="p-1 border">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SP Ratio",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SP T/H",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Act PV",
            }}
          />
        </div>
        <div className="p-1 border">
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDA01Y1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDF11",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2A01_F1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="p-1 border">
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDB01Y1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDF12",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2B01_F1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="p-1 border">
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDC01Y1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDF13",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2C01_F1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="p-1 border">
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDD01Y1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2TOTALFEEDF14",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S64_F1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <BlackContainer
          data={{
            label: "Z2B11_F1",
            useClass: "greenTxt ",
            unit: "min",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z2B11_Y1SPM",
            useClass: "greenTxt mt-1",
            unit: "min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <BlackContainer
          data={{
            label: "Z2M03_X46AI01",
            useClass: "greenTxt ",
            unit: "t",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z2P51_P9",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U26_SEL")} `}
          label="Z2U26_SEL"
        />
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <BlackContainer
          data={{
            label: "Z2A01_S1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z2B01_S1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2C01_S1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "A03",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2A03")} ml-2`}
          label="Z2A03"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "U1U08_I1",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "CM2_SPEC_POWER",
              useClass: "greenTxt mt-3",
              unit: "KWH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Z2S34_F1",
              useClass: "greenTxt ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "Z2A03_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "B11 CHEMICAL",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2B11_M1")} mt-1`}
          label="Z2B11_M1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "Z2M10_P9",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z2M11_P9",
            useClass: "greenTxt mt-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22 d-flex flex-column">
        <BlackContainer
          data={{
            label: "Z2M01_T9_MILLSIDE",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M01_T9_MOTORSIDE",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K03_F1",
            useClass: "greenTxt",
            unit: "l/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K02_PIDSPA",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M01_T2",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K02_PIDSPM",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K02_PIDSPM",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M01_T2",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K02_Z1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TOTAL FEED PID MIN LOCK",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_TOTALFEED_PID_MIN",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "CM2TOTALFEED_SPSPM",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TOTAL FEED PID MAX LOCK",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_TOTALFEED_PID_MAX",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "Z2S03_GRR_Y1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S03_COUNT_STEP_ECS",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex align-items-end">
        <div className="">
          <BlackContainer
            data={{
              label: "Z2S01_S1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "Z2S01_Y1SPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "Z2S03_P5",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="">
          <BlackContainer
            data={{
              label: "Z2S04_Z1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "Z2S04_PIDSPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26">
        <div className="">
          <BlackContainer
            data={{
              label: "Z2P105_S1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "Z2P105_Y1SPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="">
          <BlackContainer
            data={{
              label: "Z2P11_P2",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "Z2P11_T2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P15_I2",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "Z2P15_AX",
            useClass: "greenTxt ",
            unit: "mg/Nm3",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "Z2P105_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z2P105_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P105_DP",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2_GRP2",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <BlackContainer
          data={{
            label: "Z2S03_P6",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "Z2S03_X1",
              useClass: "greenTxt ",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S03_X2",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "Z2S01_T6",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S01_T9_TOP",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S01_T9_BOTTOM",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "Z2S01_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S01_X1",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Z2S01_P5",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S01_T4",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S15_P2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "Z2S01AI01",
            useClass: "greenTxt ",
            unit: "m",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z2S01AI02",
            useClass: "greenTxt mt-2",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 d-flex flex-column">
        <BlackContainer
          data={{
            label: "Z2S03_J1",
            useClass: "greenTxt",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "Z2S03AI01",
              useClass: "greenTxt ",
              unit: "t",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "Z2S03AI02",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex flex-column">
        <BlackContainer
          data={{
            label: "Z2S01_P6",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z2S01_CONE_DFT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex flex-column">
        <BlackContainer
          data={{
            label: "Z2P13_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "Z2BHCOMP_DIS_AIR_PRE",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2BHCOMP_OIL_PRESS",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2BHCOMP_DIS_AIR_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "Z2P15_X1",
              useClass: "greenTxt ",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P15_Y1SPA",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Z2P15_Y1AI01",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P15_Y1SPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P15_S1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P15_I2",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "Z2P11_P2",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "Z2U53_J1_D",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2U53_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO SILO",
          }}
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "OPC TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_OPC_TPH_D",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "EPC TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_PPC_TPH_D",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "PCC TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_PCC_TPH_D",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "Z2LUBPL_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M01_T8_MILLSIDE",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M01_T8_MOTORSIDE",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K04_PIDSPA",
            useClass: "greenTxt mt-3",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M01_T3_NEW",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K04_PIDSPM",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <BlackContainer
          data={{
            label: "Z2M01_T3_NEW",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K04_Z1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "Z2K05_F1_TODAY",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K05_F1",
            useClass: "greenTxt mt-1",
            unit: "L/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "Z2M01_P2",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2M12_P9",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "Z2M13_P9",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "Z1BUSC_FREQ",
            useClass: "greenTxt ",
            unit: "Hz",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "Z2LUBPR_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "Z2M20",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M03AI01",
            useClass: "greenTxt mt-1",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-46 d-flex align-items-end">
        <BlackContainer
          data={{
            label: "Z2AP_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "FLY ash bin pr.",
            }}
          />

          <BlackContainer
            data={{
              label: "Z2S01_P5",
              useClass: "greenTxt ml-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Z2L53_W1",
              useClass: "greenTxt ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2J51_I1",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 text-center p-1 border">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "MILL FEED PID",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2TOTALFEED_SPSPA",
            useClass: "greenTxt mt-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2J03_J1",
            useClass: "greenTxt mt-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2TOTALFEED_SPSPM",
            useClass: "greenTxt mt-1",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-48 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "Z2M03_J1",
              useClass: "greenTxt ",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2M03_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Z2M06_J1",
              useClass: "greenTxt ",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2M06_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <BlackContainer
          data={{
            label: "Z2M02_P9_PR",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M06_X2",
            useClass: "greenTxt mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-50 d-flex flex-column">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("Z2M03")} `}
            label="Z2M03"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "M03",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("Z2M03")} `}
            label="Z2M03"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "M06",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2M08")} `}
          label="Z2M08"
          text="M"
        />{" "}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2M09")} `}
          label="Z2M09"
          text="M"
        />{" "}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2M04")} `}
          label="Z2M04"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-52 d-flex">
        {/* <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_511FY1_LHH")} `}
          label="CM_511FY1_LHH"
          text="M1"
        />{" "} */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2M21")} `}
          label="Z2M21"
          text="M"
        />{" "}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2M07")} `}
          label="Z2M07"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-53">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2J03")} `}
          label="Z2J03"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2J03M1")} mt-2`}
          label="Z2J03M1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-54">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2U53")} `}
          label="Z2U53"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("Z2U53_M1")} mt-2`}
          label="Z2U53_M1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-55 d-flex flex-column">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("Z2M14M2")} `}
            label="Z2M14M2"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "M2",
            }}
          />
        </div>
        <div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("Z2M14M3")} `}
              label="Z2M14M3"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "M3",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("Z2M14M1")} `}
              label="Z2M14M1"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "M1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <BlackContainer
          data={{
            label: "Z2M01_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-57 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2K03")}`}
            label="Z2K03"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "K03",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2K05M1")}`}
            label="Z2K05M1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "K05-M1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "NA"
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "K05",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <div className="text-center d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S31")}`}
            label="Z2S31"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "S31",
            }}
          />
        </div>
        <div className="text-center d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S37")}`}
            label="Z2S37"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "S37",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <div className="text-center d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S33")}`}
            label="Z2S33"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "S33",
            }}
          />
        </div>
        <div className="text-center d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S33A")}`}
            label="Z2S33A"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "S33A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-60">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2P55")}`}
            label="Z2P55"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P55",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2P25")}`}
            label="Z2P25"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P25",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-62">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2P15")}`}
            label="Z2P15"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P15",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "Z2P15STNBY_VFD"
            )}`}
            label="Z2P15STNBY_VFD"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-63">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2P105")}`}
            label="Z2P105"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P105",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S35")}`}
            label="Z2S35"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S35",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-65">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S29A")}`}
            label="Z2S29A"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S29A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "S16",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "Z2S16"
            )} ml-1`}
            label="Z2S16"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "Z2S14"
            )}`}
            label="Z2S14"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "S14",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-67 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "P104A",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "Z2P104A"
            )} ml-1`}
            label="Z2P104A"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "Z2P104B"
            )}`}
            label="Z2P104B"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "P1048",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-68 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "Z2P26"
            )}`}
            label="Z2P26"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "Z2P26",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-69 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "Z2P54"
            )}`}
            label="Z2P54"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "P54",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-70 d-flex align-items-end">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S27")}`}
            label="Z2S27"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S27",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("Z2S26")}`}
            label="Z2S26"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S26",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "Z2J03_J1",
            useClass: "greenTxt ",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "Z2P14"
            )}`}
            label="Z2P14"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "P14",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-72 ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "Z2S32A"
            )}`}
            label="Z2S32A"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S32A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-73 ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "Z2S32"
            )}`}
            label="Z2S32"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S32",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-74 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "Z2S32A_SEL"
            )}`}
            label="Z2S32A_SEL"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "Z2U53_SEL"
            )}`}
            label="Z2U53_SEL"
          />
        </div>
      </div>
      <div className="position-absolute single-text-75 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
             "Z2S28"
            )}`}
            label="Z2S28"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "S28",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-76">
        <BlackContainer
          data={{
            label: "Z2U02_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-77 d-flex">
        <div className="d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "Z2K02"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "Z2K02"
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "KO2",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "KO4",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "Z2K04"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "Z2K04"
            )}`}
            label="Z2K04"
          />
        </div>
      </div>
      <div className="position-absolute single-text-78 d-flex justify-content-center align-items-center yellowpolygon">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
           "Z2S34_F1"
          )}`}
          label="Z2S34_F1"
        />
      </div>
      <div className="position-absolute single-text-79 d-flex justify-content-center align-items-center yellowpolygon">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "Z2BHCOMP"
          )}`}
          label="Z2BHCOMP"
        />
      </div>
      <div className="position-absolute single-text-80 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SO4",
          }}
        />
        <div>
          <BlueContainerWithDynamicBorder
            useClass={`mt-2 ${useBorderTagsColorStatus("Z2S04")}`}
            isClickable={true}
            tagLabel="Z2S04"
          />
        </div>
      </div>
      <div className="position-absolute single-text-81 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SO2",
          }}
        />
        <div>
          <BlueContainerWithDynamicBorder
            useClass={` ml-2 ${useBorderTagsColorStatus("Z2S02")}`}
            isClickable={true}
            tagLabel="Z2S02"
          />
        </div>
      </div>
      <div className="position-absolute single-text-82 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NIB_GATE_OPEN")}`}
          label="NIB_GATE_OPEN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "NIB GATE",
          }}
        />
      </div>
    
    </div>
  );
};
