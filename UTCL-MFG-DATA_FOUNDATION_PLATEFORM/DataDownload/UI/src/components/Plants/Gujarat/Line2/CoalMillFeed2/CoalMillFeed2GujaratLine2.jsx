import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
  PipeWithCircles,
} from "../../../../index";
export const CoalMillFeed2GujaratLine2 = () => {
  return (
    <div className="kmfeed2-gcw-l2 w-100 h-100 position-relative">
      <div className="single-text-1 containerImage d-flex align-items-center justify-content-center position-absolute ">
        GROUND HOPPER
      </div>
      <PipeWithCircles
        parentDivClass="single-text-2 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J01A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J01A")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J01A",
        }}
      />
      <div className="single-text-3 position-absolute border">
        <BlackContainer
          data={{
            label: "F2J01A_I1",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J01A_SP_SPM",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J01A_S1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-4 position-absolute border p-2">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "F2J01A YESTERDAY",
            }}
          />
          <BlackContainer
            data={{
              label: "F2J01A YESTERDAY",
              useClass: "greenTxt mb-1 ml-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "F2J01A TODAY",
            }}
          />
          <BlackContainer
            data={{
              label: "F2J01A TODAY",
              useClass: "greenTxt  ml-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-5 position-absolute border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ",
            label: "WASTE FIRING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ",
            label: "APRON SELECTION",
          }}
        />
        <BlackContainer
          data={{
            label: "W1LO1_W1_R",
            useClass: "greenTxt mb-1 ml-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-6  position-absolute border text-center p-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "VACCUM BLOWER",
          }}
        />
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img my-2 digital-tag ${useFanImgTagsColorStatus(
            "K2R03A"
          )}`}
          label="K2R03A"
        />
      </div>
      <div className="single-text-7 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("K2VB01")}`}
          label="K2VB01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "K2VB01",
          }}
        />
      </div>
      <div className="single-text-8 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "K2R03A",
          }}
        />
      </div>
      <div className="single-text-9 position-absolute hpipecircle">
        <span className="grayDot"></span>
        <div className="text-dark">F2J01B</div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J01B_TUP_MG")}`}
          label="F2J01B_TUP_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J01B")}`}
          label="F2J01B"
          text="M"
        />
      </div>
      <div className="single-text-10 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J01_MG")}`}
          label="F2J01_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J01_BSS")}`}
          label="F2J01_BSS"
          text="B"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J01_TUP_MG")}`}
          label="F2J01_TUP_MG"
          text="G"
        />
        <div className="text-dark">F2J01</div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J01_SAL1")}`}
          label="F2J01_SAL1"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J01")}`}
          label="F2J01"
          text="M"
        />
      </div>
      <div className="single-text-11 position-absolute hpipecircle">
        <span className="grayDot"></span>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J02_SAL1")}`}
          label="F2J02_SAL1"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J02_SAL2")}`}
          label="F2J02_SAL2"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J02_TUP_MG")}`}
          label="F2J02_TUP_MG"
          text="G"
        />
        <div className="text-dark">F2J02</div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J02")}`}
          label="F2J02"
          text="M"
        />
      </div>
      <div className="single-text-12 position-absolute border p-2">
        <BlackContainer
          data={{
            label: "METAL_COUNT",
            useClass: "greenTxt mb-1 ",
            unit: "Nos",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "F2S11",
          }}
        />
      </div>
      <div className="single-text-13 position-absolute border p-2 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "F2J02 FEED",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J02 YESTERDAY",
            useClass: "greenTxt",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J02 TODAY",
            useClass: "greenTxt ",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-14 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03_MG")}`}
          label="F2J03_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03_SAL1")}`}
          label="F2J03_SAL1"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03_SAL2")}`}
          label="F2J03_SAL2"
          text="S"
        />
        <div className="text-dark">F2J03</div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03_TUP_MG")}`}
          label="F2J03_TUP_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03_TUP1_MG")}`}
          label="F2J03_TUP1_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03_BSS")}`}
          label="F2J03_BSS"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03")}`}
          label="F2J03"
          text="M"
        />
      </div>
      <div className="single-text-15 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J04")}`}
          label="F2J04"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J04_NDE_MG")}`}
          label="F2J04_NDE_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J04_BSS")}`}
          label="F2J04_BSS"
          text="S"
        />
        <div className="text-dark">F2J04</div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J04_TUP_MG")}`}
          label="F2J04_TUP_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J04_TUP1_MG")}`}
          label="F2J04_TUP1_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J04_DE_MG")}`}
          label="F2J04_DE_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J04")}`}
          label="F2J04"
          text="M"
        />
      </div>
      <div className="single-text-16 position-absolute d-flex flex-column">
        <BlackContainer
          data={{
            label: "F2J03A_T1",
            useClass: "greenTxt",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J02A_T1",
            useClass: "greenTxt",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-17  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P01",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-18 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("F2P05")}`}
          label="F2P05"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P05",
          }}
        />
      </div>
      <div className="single-text-19  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P06",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-20 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("F2P10")}`}
          label="F2P10"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P10",
          }}
        />
      </div>
      <div className="single-text-21  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P11",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-22 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("F2P15")}`}
          label="F2P15"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P15",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F3J04_RUN_IND")}`}
          label="F3J04_RUN_IND"
          text="B"
        />
        <div className="text-dark">F3J04</div>
        <span className="grayDot"></span>
      </div>
      {/* <div className="single-text-24 position-absolute hpipecircle">
 <MotorCircleDigitalTag
className={`dot digital-tag ${useColorStatus("J1L01_L1")}`}
label="J1L01_L1"
text="B"
/>
 <div className="text-dark">F3J01</div>
 <span className="grayDot"></span>
 </div> */}
      <PipeWithCircles
        parentDivClass="single-text-24 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "F3J01_RUN_IND"
          )}`,
          firstCircleText: "B",
          firstCircleLabel: "F3J01_RUN_IND",
        }}
        text={{ useClass: "text-dark", label: "F3J01" }}
        secondCircle={{
          secondCircleClass: "grayDot",
        }}
      />
      <div className="single-text-25 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03A")}`}
          label="F2J03A"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03A_BSS")}`}
          label="F2J03A_BSS"
          text="S"
        />
        <div className="text-dark">F2J03A</div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03A_TUP_MG")}`}
          label="F2J03A_TUP_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J03A")}`}
          label="F2J03A"
          text="M"
        />
      </div>
      <div className="single-text-26  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P16",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-27 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("F2P20")}`}
          label="F2P20"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P20",
          }}
        />
      </div>
      <div className="single-text-28  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P21",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-29 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus(
            "WFJ02_BELT_TEAR"
          )}`}
          label="WFJ02_BELT_TEAR"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P25",
          }}
        />
      </div>
      <div className="single-text-30  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P31",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-31 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("F2P35")}`}
          label="F2P35"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P35",
          }}
        />
      </div>
      <div className="single-text-32 position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="single-text-33 position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="single-text-34 position-absolute hpipecircle">
        <span className="grayDot"></span>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("WFJ02_BELT_TEAR")}`}
          label="WFJ02_BELT_TEAR"
          text="B"
        />
        <div className="text-dark">WFJ02</div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("WFJ02_RBC")}`}
          label="WFJ02_RBC"
          text="M"
        />
      </div>
      <div className="single-text-35 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TO WASTE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FIRING PH-1",
          }}
        />
      </div>
      <div className="single-text-36 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TO PHASE-1",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute hpipecircle">
        {" "}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J05_MG")}`}
          label="F2J05_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J05_BSS")}`}
          label="F2J05_BSS"
          text="S"
        />
        <div className="text-dark mr-5">F2J05</div>
      </div>
      <div className="single-text-38 position-absolute hpipecircle">
        {" "}
        <MotorCircleDigitalTag
          className={`dot ml-5 digital-tag ${useColorStatus("F2J05_TUP_MG")}`}
          label="F2J05_TUP_MG"
          text="G"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J05")}`}
          label="F2J05"
          text="M"
        />
      </div>
      <div className="single-text-39  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P26",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-40 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("F2P30")}`}
          label="F2P30"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P30",
          }}
        />
      </div>
      <div className="single-text-41  position-absolute text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P51",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-42 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("F2P55")}`}
          label="F2P55"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P55",
          }}
        />
      </div>
      <div className="single-text-43 position-absolute border p-2 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "F2J05 YESTERDAY",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J05 YESTERDAY",
            useClass: "greenTxt",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-44 position-absolute">
        <BlackContainer
          data={{
            label: "K2_RAWCOAL_TIME",
            useClass: "greenTxt",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-45 position-absolute">
        <BlackContainer
          data={{
            label: "F2J05_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-46 position-absolute">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "F2T12",
            squareClass: `${useColorStatus("F2T12")}`,
          }}
        />
      </div>
      <div className="single-text-47 position-absolute d-flex">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "RAW COAL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "L01",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L01_W1",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L01T9",
              useClass: "greenTxt mb-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "INDO",
            }}
          />
        </div>
        <div className="containerImage  text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "RAW COAL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "L02",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L02_W1",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L02T9",
              useClass: "greenTxt mb-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "U.S. PC",
            }}
          />
        </div>
      </div>
      <div className="single-text-48 position-absolute d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "grayDot",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K2A01")}`,
            secondCircleText: "M",
            secondCircleLabel: "K2A01",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "grayDot",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K2A02")}`,
            secondCircleText: "M",
            secondCircleLabel: "K2A02",
          }}
        />
      </div>
      <div className="single-text-49 position-absolute d-flex">
        <div>
          {" "}
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "A01",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01_F1",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01_I1",
              useClass: "greenTxt mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01_S1",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          {" "}
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "A02",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A02_F1",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A02_I1",
              useClass: "greenTxt mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A02_S1",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-50 position-absolute hpipecircle">
        <span className="grayDot"></span>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2J01_BSS")}`}
          label="K2J01_BSS"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2J01")}`}
          label="K2J01"
          text="M"
        />
      </div>
      <div className="single-text-51 position-absolute d-flex">
        <div className="border">
          <BlackContainer
            data={{
              label: "K2A01SP",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01_SP_SPA",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border">
          <BlackContainer
            data={{
              label: "K2A02SP",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A02_SP_SPA",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-52 position-absolute">
        <BlackContainer
          data={{
            label: "K2A02_YESTERDAY",
            useClass: "greenTxt mb-1",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2A02_TODAY",
            useClass: "greenTxt mb-1",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-53 position-absolute">
        {" "}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TO COAL MILL",
          }}
        />
      </div>
      <div className="single-text-54 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus("K2A01_SEL")}`}
          label="K2A01_SEL"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus("K2A02_SEL")}`}
          label="K2A02_SEL"
          text="S"
        />
      </div>
      <div className="single-text-55 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus(
            "L01BIN_SEL"
          )}`}
          label="L01BIN_SEL"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus(
            "L02BIN_SEL"
          )}`}
          label="L02BIN_SEL"
          text="S"
        />
      </div>
      <div className="single-text-56 position-absolute">
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus(
            "F2J01A_SELECT"
          )}`}
          label="F2J01A_SELECT"
          text="S"
        />
      </div>
      <div className="single-text-57 position-absolute">
        <BlackContainer
          data={{
            label: "F2J05_T1",
            useClass: "greenTxt mb-1",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-58 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PHASE-1",
          }}
        />
      </div>
      <div className="single-text-59 position-absolute">
        <BlackContainer
          data={{
            label: "F2J02_I1",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-60 position-absolute">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2L01_L1")}`}
          label="K2L01_L1"
          text="L"
        />
      </div>
      <div class="pipeVr position-absolute pipe-1"></div>

      <div class="yellowline-Vr downArrow  position-absolute line-1 d-flex"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div class="yellowline-Hr position-absolute line-3 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-4"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div class="yellowline-Hr position-absolute line-10 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-11"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-12"></div>
      <div class="yellowline-Hr position-absolute line-13 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-14"></div>
      <div class="yellowline-Hr position-absolute line-15 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-16"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-17"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-18"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-19"></div>
      <div class="yellowline-Hr position-absolute line-20 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-21"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-22"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-23"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-24"></div>
      <div class="yellowline-Hr position-absolute line-25 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-26"></div>
      <div class="yellowline-Vr downArrow position-absolute line-27"></div>
      <div class="yellowline-Hr position-absolute line-28"></div>
      <div class="yellowline-Vr downArrow position-absolute line-29"></div>
      <div class="yellowline-Vr downArrow position-absolute line-30"></div>
      <div class="yellowline-Vr downArrow position-absolute line-31"></div>
      <div class="yellowline-Hr position-absolute line-32"></div>
      <div class="yellowline-Hr position-absolute line-33 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-34"></div>
      <div class="yellowline-Vr downArrow position-absolute line-35"></div>
      <div class="yellowline-Vr downArrow position-absolute line-36"></div>
      <div class="yellowline-Vr downArrow position-absolute line-37"></div>
      <div class="yellowline-Vr downArrow position-absolute line-38"></div>
      <div class="yellowline-Hr position-absolute line-39 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-40"></div>
      <div class="yellowline-Vr downArrow position-absolute line-41"></div>
      <div class="yellowline-Vr downArrow position-absolute line-42"></div>
      <div class="yellowline-Hr position-absolute line-43 d-flex"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-44"></div>
      <div class="yellowline-Vr downArrow position-absolute line-45"></div>
      <div class="yellowline-Hr position-absolute line-46"></div>
      <div class="yellowline-Vr downArrow position-absolute line-47"></div>
      <div class="yellowline-Vr downArrow position-absolute line-48"></div>
      <div class="yellowline-Vr downArrow position-absolute line-49"></div>
      <div class="yellowline-Vr downArrow position-absolute line-50"></div>
      <div class="yellowline-Vr downArrow position-absolute line-51"></div>
      <div class="yellowline-Vr downArrow position-absolute line-52"></div>
      <div class="yellowline-Vr downArrow position-absolute line-53"></div>
      <div class="yellowline-Vr downArrow position-absolute line-54"></div>
    </div>
  );
};
