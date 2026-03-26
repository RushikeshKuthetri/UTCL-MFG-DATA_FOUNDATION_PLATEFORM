import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../../index";
import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const CementMill2GujaratLine2 = () => {
  return (
    <div className="Gujarat-Line2-Cement-Mill-2 w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute border p-2">
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "V-SEP.INLET:",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2VS1_P1",
              useClass: "greenTxt mb-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "SKS INLET:",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S01_P2",
              useClass: "greenTxt mb-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "SKS OUTLET:",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S01_P3",
              useClass: "greenTxt mb-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "FAN OUTLET:",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2S03_P1",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RP VIBRATION",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2R01_X1",
            useClass: "greenTxt mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2R01_X3",
            useClass: "greenTxt mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M21_S1",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M21_I1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M21_J1",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M22_S1",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M22_I1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M22_J1",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2RP_M25_CUR_DIFF",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_OP_Pressure_SP",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M25_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M25_P2",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M25_Z1",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M25_Z2",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M25_Z3",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2A01_TE",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P95_DP",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A01A",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2RATIOCTRL_F11",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2A01A_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A02B",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2RATIOCTRL_F12",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2A01B_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A02",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2RATIOCTRL_F13",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2A02_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A03",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2RATIOCTRL_F14",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2A03_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L5SF2",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2RATIOCTRL_F15",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L5SF2_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-4 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "J19",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useColorStatus("Z2J19M1")}`}
            label="Z2J19M1"
            text="M"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "J20",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useColorStatus("Z2J20M1")}`}
            label="Z2J20M1"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-5  position-absolute text-center">
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img my-1 digital-tag ${useFanImgTagsColorStatus(
            "Z2P44"
          )}`}
          label="Z2P44"
        />
      </div>
      <div className="single-text-6 img-83 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "P31",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P35_P1",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P35_DP1",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-7 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P34A"
          )}`}
          label="Z2P34A"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P34C"
          )}`}
          label="Z2P34C"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P34E"
          )}`}
          label="Z2P34E"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P34B"
          )}`}
          label="Z2P34B"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P34D"
          )}`}
          label="Z2P34D"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P34F"
          )}`}
          label="Z2P34F"
        />
      </div>
      <div className="single-text-8 position-absolute d-flex">
        <div className=" justify-content-between align-items-center">
          <BlackContainer
            data={{
              label: "OPEN _TIMER _GATE",
              useClass: "greenTxt mb-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CLOSE_TIMER_GATE",
              useClass: "greenTxt mb-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <BlackContainer
            data={{
              label: "Z2J19_I1",
              useClass: "greenTxt mb-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-9  position-absolute text-center">
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img my-1 ${useFanImgTagsColorStatus("NA")}`}
          label="NA"
        />
      </div>
      <div className="single-text-10  position-absolute">
        <BlackContainer
          data={{
            label: "Z2P45_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P45_DP",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2J20_CRNT_DIFF",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2J20_I1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2J20_I2",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-11  position-absolute"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("Z2J01B")}`,
          firstCircleText: "M",
          firstCircleLabel: "Z2J01B",
        }}
        secondCircle={{ secondCircleClass: "dot grey-color" }}
      />
      <div className="single-text-12  position-absolute">
        <BlackContainer
          data={{
            label: "Z2AIR_F1",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "G1J02_I1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-13 position-absolute border p-2">
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2 mr-2",
              label: "SP POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "EMS_CM2_SPC",
              useClass: "greenTxt mb-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DAY",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2 TPH DAY",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-14 position-absolute border p-1">
        <BlackContainer
          data={{
            label: "Z2LD1_SP",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S03_SP",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-15 position-absolute border p-1">
        <BlackContainer
          data={{
            label: "Z2S03_SP",
            useClass: "greenTxt mb-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S03_S1",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-16 position-absolute border p-1">
        <BlackContainer
          data={{
            label: "Z2S03_J1SP_SPA",
            useClass: "greenTxt mb-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S03_J1",
            useClass: "greenTxt",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-17 position-absolute">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "CM2TOTAL_FEED_SPA",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2L05_W1",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 mt-1">
          <BlackContainer
            data={{
              label: "Z2_TOTALFEED_MAX",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2_TOTALFEED_MIN",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 mt-1">
          <BlackContainer
            data={{
              label: "CM2TOTAL_FEED_SPM",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2TOTALFEED_F1",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-18 position-absolute text-center">
        <BlackContainer
          data={{
            label: "L1J01M1_I1",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("L1U04")}`}
          label="L1U04"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TO IBAU SILOS",
          }}
        />
      </div>
      <div className="single-text-19 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U11")}`}
          label="Z2U11"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TO FLS SILO 4",
          }}
        />
      </div>
      <div className="single-text-20 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U15M2")}`}
          label="Z2U15M2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 pl-4",
            label: "TO FLS SILOS",
          }}
        />
      </div>

      <div className="squareplustri position-absolute single-text-21 ">
        <BlackContainer
          data={{
            label: "Z2L06_W1",
            useClass: "greenTxt mt-2",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "Z2P35_S1SP_SPA",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2VS1_P1",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P45_PT",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M25_T1",
            useClass: "greenTxt mt-2",
            unit: "deg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2SG1_Z1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "Z2VS1_T1",
            useClass: "greenTxt mt-2",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-24 text-center">
        <BlackContainer
          data={{
            label: "Z2L05_W1",
            useClass: "greenTxt mt-2",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
          data={{
            label: "F2J01A_I1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className="d-flex position-absolute single-text-25">
        <div>
          <div className="pole-shape">
            <MotorCircleDigitalTag
              className={`dot digital-tag position-absolute ${useColorStatus(
                "Z2M21M1"
              )} mt-2`}
              label="Z2M21M1"
            />
          </div>
          <BlackContainer
            data={{
              label: "Z2M23_GB_P2",
              useClass: "greenTxt mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <div className="pole-shape">
            <MotorCircleDigitalTag
              className={`dot digital-tag position-absolute ${useColorStatus(
                "Z2M21M1"
              )} mt-2`}
              label="Z2M21M1"
            />
          </div>
          <BlackContainer
            data={{
              label: "Z2M24_GB_P1",
              useClass: "greenTxt mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-26  position-absolute text-center">
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img my-1 digital-tag ${useFanImgTagsColorStatus(
            "Z2P74"
          )}`}
          label="Z2P74"
        />
      </div>
      <div className="single-text-27 asset-67 position-absolute d-flex align-items-center pl-4">
        <BlackContainer
          data={{
            label: "Z2M01_P1",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CEMENT MILL-2",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "Z2G01_SP_SPM",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2G01_S1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 mt-1">
          <BlackContainer
            data={{
              label: "Z2G01_SP_SPA",
              useClass: "greenTxt mb-1",
              unit: "lit/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2G01_F1",
              useClass: "greenTxt",
              unit: "lit/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-29 position-absolute border p-1">
        <BlackContainer
          data={{
            label: "Z2M14_P2",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M14_P3",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M14_P4",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2P95")}`}
          label="Z2P95"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P95",
          }}
        />
      </div>
      <div className="single-text-31 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2P45")}`}
          label="Z2P45"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P45",
          }}
        />
      </div>
      <div className="single-text-32 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2P75")}`}
          label="Z2P75"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P75",
          }}
        />
      </div>
      <div className="single-text-33 position-absolute d-flex">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "Z2SF1_SP_SPA",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2V01_F1",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 mt-1">
          <BlackContainer
            data={{
              label: "Z2M01T3_SP_SPA",
              useClass: "greenTxt mb-1",
              unit: "deg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2M01_T3",
              useClass: "greenTxt",
              unit: "deg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 mt-1">
          <BlackContainer
            data={{
              label: "Z2M01T3_SP_SPM",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2K04_Z1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-34 position-absolute">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "Z2K03_F1SP_SPA",
              useClass: "greenTxt mb-1",
              unit: "m/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2K03_F1",
              useClass: "greenTxt",
              unit: "m/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <BlackContainer
            data={{
              label: "Z2K03_SPM",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2K03_S1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-35 position-absolute">
        <BlackContainer
          data={{
            label: "Z2M11_P2",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-36 position-absolute">
        <BlackContainer
          data={{
            label: "Z2M12_P2",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute">
        <BlackContainer
          data={{
            label: "Z2_GA_PER_SP_MAN",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute border p-2">
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2 mr-2",
              label: "DAY",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2 TPH DAY",
              useClass: "greenTxt mb-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SHIFT",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2 TPH SHIFT",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-39  position-absolute">
        <BlackContainer
          data={{
            label: "CM2 POWER",
            useClass: "greenTxt mt-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2 TOTAL KW",
            useClass: "greenTxt mt-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-40 position-absolute d-flex">
        <div className="border p-2">
          <div className="d-flex justify-content-between align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "U6U03 I1",
              }}
            />
            <BlackContainer
              data={{
                label: "U6U03_I1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "U2U04 BW",
              }}
            />
            <BlackContainer
              data={{
                label: "U2U04_F1",
                useClass: "greenTxt mb-1",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "U6U02 BW",
              }}
            />
            <BlackContainer
              data={{
                label: "U6U02_F1",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-2">
          <div className="d-flex justify-content-between align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "G2J04I1",
              }}
            />
            <BlackContainer
              data={{
                label: "G2J04_I1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "G1J02I1",
              }}
            />
            <BlackContainer
              data={{
                label: "G1J02_I1",
                useClass: "greenTxt mb-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "U2U04I1",
              }}
            />
            <BlackContainer
              data={{
                label: "U2U04I1X",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <div>
          <div className="yellowline-Vr upArrow line-1"></div>
          <div className="squareplustri text-center pt-3"> </div>
          <div className="d-flex mt-1 ml-1 text-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
                "Z2S14"
              )}`}
              label="Z2S14"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "S14",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow  line-2"></div>
        </div>
        <div className="ml-3">
          <div className="yellowline-Vr  upArrow line-1"></div>
          <div className="squareplustri text-center pt-3"> </div>
          <div className="d-flex mt-1 ml-1 text-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
                "Z2S16"
              )}`}
              label="Z2S16"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "S16",
              }}
            />
          </div>
          <div className="yellowline-Vr  downArrow  line-2"></div>
        </div>
        <div className="ml-5">
          <div className="yellowline-Vr upArrow line-1"></div>
          <div className="squareplustri text-center pt-3"> </div>
          <div className="d-flex mt-1 ml-1 text-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
                "Z2S18"
              )}`}
              label="Z2S18"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "S18",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow  line-2"></div>
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow line-1"></div>
          <div className="squareplustri text-center pt-3"> </div>
          <div className="d-flex mt-1 ml-1 text-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
                "Z2S20"
              )}`}
              label="Z2S20"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "S20",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow line-2"></div>
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-42"></div>
      <div className="single-text-43 position-absolute d-flex">
        <div className="">
          <BlackContainer
            data={{
              label: "Z2P11E1_KV",
              useClass: "greenTxt mb-1",
              unit: "kV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P11E1_MA",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <BlackContainer
            data={{
              label: "Z2P11E2_KV",
              useClass: "greenTxt mb-1",
              unit: "kV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P11E2_MA",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <BlackContainer
            data={{
              label: "Z2P11E3_KV",
              useClass: "greenTxt mb-1",
              unit: "kV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P11E3_MA",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mb-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mb-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P15_S1SP",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2P15_S1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-44 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus(
            "CM2_STACK_BLOWER"
          )}`}
          label="CM2_STACK_BLOWER"
        />
      </div>
      <div className="single-text-45 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2P15")}`}
          label="Z2P15"
        />
        <BlackContainer
          data={{
            label: "Z2P15_I1",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2J02_I1",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-46  position-absolute">
        <BlackContainer
          data={{
            label: "Z2P11_T2",
            useClass: "greenTxt mt-1",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P11_P2",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-47 d-flex flex-column position-absolute">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "M04",
            }}
          />
          <div className="pole-shape">
            <MotorCircleDigitalTag
              className={`dot digital-tag position-absolute ${useColorStatus(
                "Z2M03"
              )} mt-2`}
              label="Z2M03"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "M03",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "M07",
            }}
          />
          <div className="pole-shape">
            <MotorCircleDigitalTag
              className={`dot digital-tag position-absolute ${useColorStatus(
                "4N14PYM01"
              )} mt-2`}
              label="4N14PYM01"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "M06",
            }}
          />
        </div>
      </div>
      <div className="single-text-48  position-absolute">
        <BlackContainer
          data={{
            label: "Z2M02_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2K04_F1",
            useClass: "greenTxt mt-1",
            unit: "m/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2_OL_AIRSOV_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-49  position-absolute">
        <BlackContainer
          data={{
            label: "Z2M02_X1",
            useClass: "greenTxt mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2M01_P2",
            useClass: "greenTxt ml-4 mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-50 position-absolute d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2M08")}`}
            label="Z2M08"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "M08",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2M09")}`}
            label="Z2M09"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "M09",
            }}
          />
        </div>
      </div>
      <div className="single-text-51 position-absolute text-center">
        <BlackContainer
          data={{
            label: "Z2M05_P1",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U13")}`}
          label="Z2U13"
        />
        <BlackContainer
          data={{
            label: "Z2U13_I1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-52 position-absolute polygon-shape pt-2">
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("Z2S01")}`}
            label="Z2S01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("Z2S01M3")}`}
            label="Z2S01M3"
            text="M"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("Z2S01M2")}`}
            label="Z2S01M2"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("Z2S01M1")}`}
            label="Z2S01M1"
            text="M"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("Z2S01M4")}`}
            label="Z2S01M4"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-53 position-absolute d-flex">
        <div className="hpipecircle"></div>
        <div className="hpipecircle"></div>
      </div>
      <div className="single-text-54  position-absolute">
        <BlackContainer
          data={{
            label: "Z2S01_P2",
            useClass: "greenTxt mb-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
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
            label: "Z2S01_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S01_SP",
            useClass: "greenTxt mt-1 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S01_S1",
            useClass: "greenTxt mt-1 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-55  position-absolute">
        <BlackContainer
          data={{
            label: "CM2_sp_fd_regulat_gate",
            useClass: "greenTxt mt-1 ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2SG2_Z1",
            useClass: "greenTxt mt-1 ml-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P75_P1",
            useClass: "greenTxt mt-1 ml-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P75_DP",
            useClass: "greenTxt mt-1 ml-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-56  position-absolute">
        <BlackContainer
          data={{
            label: "Z2S03_T1",
            useClass: "greenTxt mt-1",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2S03_P1",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-57  position-absolute">
        <BlackContainer
          data={{
            label: "Z2P52_SP",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P52_Z1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-58 position-absolute d-flex">
        <div className="hpipecircle"></div>
        <div className="hpipecircle"></div>
      </div>
      <div className="single-text-59 position-absolute">
        <div className="hpipecircle"></div>
      </div>
      <div className="single-text-60 position-absolute">
        <div className="hpipecircle"></div>
      </div>
      <div className="single-text-61 position-absolute">
        <div className="hpipecircle"></div>
      </div>
      <div className="single-text-62  position-absolute text-center">
        <BlackContainer
          data={{
            label: "Z2P85_P1",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P85_DP",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P84"
          )}`}
          label="Z2P84"
        />
      </div>
      <div className="single-text-63  position-absolute text-center">
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img my-1 digital-tag ${useFanImgTagsColorStatus(
            "Z2P54"
          )}`}
          label="Z2P54"
        />
      </div>
      <div className="single-text-64 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U08M1")}`}
          label="Z2U08M1"
        />
      </div>
      <div className="single-text-65 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("Z2U09")}`}
          label="Z2U09"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U09",
          }}
        />
      </div>
      <div className="single-text-66 position-absolute d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U08M1")}`}
            label="Z2U08M1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U08M1",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U08M2")}`}
            label="Z2U08M2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U08M2",
            }}
          />
        </div>
      </div>
      <div className="single-text-67 position-absolute d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2B02")}`}
            label="Z2B02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "B02",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2B01")}`}
            label="Z2B01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "B01",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-68 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("Z2P13")}`,
          secondCircleText: "M",
          secondCircleLabel: "Z2P13",
        }}
      />
      <div className="single-text-69 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2P85")}`}
          label="Z2P85"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P85",
          }}
        />
      </div>
      <div className="single-text-70 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2P55")}`}
          label="Z2P55"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P55",
          }}
        />
      </div>
      <div className="single-text-71 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U11A",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2U11A")}`}
          label="Z2U11A"
        />
      </div>
      <div className="single-text-72 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U12A",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2U12")}`}
          label="Z2U12"
        />
      </div>
      <div className="single-text-73 position-absolute d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U10")}`}
            label="Z2U10"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U10",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U18")}`}
            label="Z2U18"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U18",
            }}
          />
        </div>
      </div>
      <div className="single-text-74 position-absolute d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U03")}`}
            label="Z2U03"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U03",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U02")}`}
            label="Z2U02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U02",
            }}
          />
        </div>
      </div>
      <div className="single-text-75  position-absolute">
        <BlackContainer
          data={{
            label: "Z2SF1_SP_SPM",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2DG2_Z1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-76  position-absolute">
        <BlackContainer
          data={{
            label: "Z2M03_J1",
            useClass: "greenTxt mt-1",
            unit: "kW",
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
      <div className="single-text-77  position-absolute">
        <BlackContainer
          data={{
            label: "Z2M06_J1",
            useClass: "greenTxt mt-1",
            unit: "kW",
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
      <div className="single-text-78 position-absolute d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U05")}`}
            label="Z2U05"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U05",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U05M2")}`}
            label="Z2U05M2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U05M2",
            }}
          />
        </div>
      </div>
      <div className="single-text-79 position-absolute">
        <div className="hpipecircle"></div>
      </div>
      <div className="single-text-80 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U04",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2U04")}`}
          label="Z2U04"
        />
      </div>
      <div className="single-text-81 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2U45S")}`}
          label="Z2U45S"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U045S",
          }}
        />
      </div>
      <div className="single-text-82 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("Z2J01M1")}`}
          label="Z2J01M1"
          text="M"
        />
      </div>
      <div className="single-text-83 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("Z2J02M1")}`}
          label="Z2J02M1"
          text="M"
        />
      </div>
      <div className="single-text-84 border p-1  position-absolute">
        <BlackContainer
          data={{
            label: "Z2SF1_SP_SPM",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2DG2_Z1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-85 position-absolute d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U06")}`}
            label="Z2U06"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U06",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("Z2U01")}`}
            label="Z2U01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "U01",
            }}
          />
        </div>
      </div>
      <div className="single-text-86 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "34A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "34C",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "34E",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "34B",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "34D",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "34F",
          }}
        />
      </div>
      <div className="single-text-87 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2P35")}`}
          label="Z2P35"
        />
      </div>
      <div className="single-text-88 border position-absolute">
        <BlackContainer
          data={{
            label: "Z2P35_S1SP_SPM",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2P35_S1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-89 position-absolute">
        <BlackContainer
          data={{
            label: "Z2P35_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P35",
          }}
        />
      </div>
      <div className="single-text-90 position-absolute">
        <BlackContainer
          data={{
            label: "Z2S03_J2",
            useClass: "greenTxt",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-91 position-absolute">
        <BlackContainer
          data={{
            label: "Z2J01_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-92 position-absolute">
        <BlackContainer
          data={{
            label: "Z2P55_DP",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-93 position-absolute">
        <BlackContainer
          data={{
            label: "Z12U13_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-94 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "Z2P14"
          )}`}
          label="Z2P14"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mt-1",
            label: "P14",
          }}
        />
      </div>
      <div className="single-text-95 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2K03")}`}
          label="Z2K03"
        />
      </div>
      <div className="single-text-96 position-absolute">
        <BlackContainer
          data={{
            label: "Z2LD2_SP",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2LD2_Z1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-97 position-absolute">
        <BlackContainer
          data={{
            label: "CM_DEDUST_PR",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-98 position-absolute">
        <BlackContainer
          data={{
            label: "Z2S01_P3",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-99 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle mb-1  digital-tag  ${useColorStatus(
            "Z2S03"
          )}`}
          label="Z2S03"
        />
        <BlackContainer
          data={{
            label: "Z2S03_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-100 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("Z2U15M2")}`}
          label="Z2U15M2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "U15",
          }}
        />
        <BlackContainer
          data={{
            label: "Z2J05_P1",
            useClass: "greenTxt ml-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="pipe  position-absolute pipe-1"></div>
      <div className="pipe  position-absolute pipe-2"></div>
      <div className="pipe  position-absolute pipe-3"></div>
      <div className="pipe  position-absolute pipe-4"></div>
      <div className="pipe-5 position-absolute text-center">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot ${useColorStatus("NA")}`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("4N11BC")}`,
            secondCircleLabel: "4N11BC",
            secondCircleText: "M",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "DG1",
          }}
        />
      </div>
      <div className="pipe-6 position-absolute text-center">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z2J17")}`,
            firstCircleLabel: "Z2J17",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "J17" }}
          secondCircle={{
            secondCircleClass: `dot  ${useColorStatus("NA")}`,
            secondCircleLabel: "NA",
            secondCircleText: "G",
          }}
        />
      </div>
      <div className="  pipe-7 hpipecircle  position-absolute"></div>

      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Vr upArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr upArrow position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow position-absolute line-33"></div>
      <div className="yellowline-Vr upArrow position-absolute line-34"></div>
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Vr upArrow position-absolute line-37"></div>
      <div className="yellowline-Vr upArrow position-absolute line-38"></div>
      <div className="yellowline-Vr upArrow position-absolute line-39"></div>
      <div className="yellowline-Vr upArrow position-absolute line-40"></div>
      <div className="yellowline-Vr upArrow position-absolute line-41"></div>
      <div className="yellowline-Vr upArrow position-absolute line-42"></div>
      <div className="yellowline-Vr upArrow position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Hr position-absolute line-48"></div>
      <div className="yellowline-Vr upArrow position-absolute line-49"></div>
      <div className="yellowline-Vr upArrow position-absolute line-50"></div>
      <div className="yellowline-Vr upArrow position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow position-absolute line-52"></div>
      <div className="yellowline-Vr position-absolute line-53"></div>
      <div className="yellowline-Vr upArrow position-absolute line-54"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-55"></div>
      <div className="yellowline-Vr downArrow position-absolute line-56"></div>
      <div className="yellowline-Vr position-absolute line-57"></div>
      <div className="yellowline-Hr position-absolute line-58"></div>
      <div className="yellowline-Vr downArrow position-absolute line-59"></div>
      <div className="yellowline-Hr position-absolute line-60"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Vr downArrow position-absolute line-62"></div>
      <div className="yellowline-Vr downArrow position-absolute line-63"></div>
      <div className="yellowline-Vr position-absolute line-64"></div>
      <div className="yellowline-Hr position-absolute line-65"></div>
      <div className="yellowline-Vr downArrow position-absolute line-66"></div>
      <div className="yellowline-Vr downArrow position-absolute line-67"></div>
      <div className="yellowline-Vr upArrow position-absolute line-68"></div>
      <div className="yellowline-Vr upArrow position-absolute line-69"></div>
      <div className="yellowline-Vr downArrow position-absolute line-70"></div>
      <div className="yellowline-Vr downArrow position-absolute line-71"></div>
      <div className="yellowline-Vr downArrow position-absolute line-72"></div>
      <div className="yellowline-Vr downArrow position-absolute line-73"></div>
      <div className="yellowline-Vr downArrow position-absolute line-74"></div>
      <div className="yellowline-Vr downArrow position-absolute line-75"></div>
      <div className="yellowline-Hr position-absolute line-76"></div>
      <div className="yellowline-Vr upArrow position-absolute line-77"></div>
      <div className="yellowline-Vr downArrow position-absolute line-78"></div>
      <div className="yellowline-Vr downArrow position-absolute line-79"></div>
      <div className="yellowline-Hr position-absolute line-80"></div>
      <div className="yellowline-Vr upArrow position-absolute line-81"></div>
      <div className="yellowline-Hr rightarrow leftarrow position-absolute line-82"></div>
      <div className="yellowline-Hr position-absolute line-83"></div>
      <div className="yellowline-Vr position-absolute line-84"></div>
      <div className="yellowline-Vr position-absolute line-85"></div>
    </div>
  );
};
