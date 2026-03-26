import { TextContainerWithWrapWord, BlackContainer, PipeWithCircles, MimicCaret, TransparentBoxWithGate, MotorCircleDigitalTag } from "../../../../index";

import { useColorStatus, useBVTagsColorStatusForNewPlantScreens, useFanImgTagsColorStatus, useCaretColorStatus, useMotorTagsColorStatusForNewPlantScreens } from "../../../../../utils";

export const OldCoalMillChilamkurL1 = () => {
  return (
    <div className="OldCoalMillChilamkurL1 w-100 h-100 position-relative">
    <div className="bigContainer position-absolute  single-text-1 text-center">
      <div className="text-1">
    <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt ",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-4 ml-2">
          <div className="d-flex">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
        <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
        </div>
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt ml-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="d-flex mt-2">
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-3 ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        />
        <div>
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "Z1M011",
        }}
      />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        />
        </div>
        
        <div className="ml-2">
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "Z1M109",
        }}
      />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        />
        </div>
        </div>
        </div>
    </div>
    <div className="containerImage position-absolute single-text-2 text-center">
    <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2",
          label: "RAW COAL HOPPER",
        }}
      />
  <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
    </div>
    <div className="position-absolute single-text-4">
    <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "",
    }}
    secondCircle={{
      secondCircleClass: `dot grey-color digital-tag`,
      secondCircleLabel: "492PC1/M01",
      secondCircleText: "M",
    }}
  />
  <div className="mr-3">
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-3 ml-auto",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-3 ml-auto",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
          <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-5 ml-auto",
            unit: "LPH",
            unitColor: "unitColor",
          }}
        />
        </div>
  </div>
  <div className="position-absolute single-text-5 d-flex">
    <div>
  <div className="pipeVr position-absolute pipe-1"></div>
  <div className="containerImage text-center pt-2">
  <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
            <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
    </div>
    </div>
    <div className="text-center">
    <MotorCircleDigitalTag
          className={`dot digital-tag mt-3 ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        />
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
    </div>
    <div>
  <div className="pipeVr position-absolute pipe-1"></div>
  <div className="containerImage text-center pt-2">
  <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
            <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
    </div>
    </div>
  </div>
  <div className="position-absolute single-text-6">
  <div className="pipeVr position-absolute pipe-1"></div>
  <div className="containerImage text-center pt-2">
  <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2",
          label: "Z1M308",
        }}
      />
  <MotorCircleDigitalTag
          className={`dot digital-tag mt-3 ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        />
    </div>
    </div>
    <div className="position-absolute single-text-7">
          <div className="d-flex">
      <div className="connector-icon p-1 ml-2 mt-1">
        <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("E3_05_M01")}`} label="E3_05_M01" text="M" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ml-3",
          label: "460",
        }}
      />
      </div>
      <div className="d-flex">
      <div className="connector-icon p-1 ml-2 mt-1">
        <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("E3_05_M01")}`} label="E3_05_M01" text="M" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ml-3",
          label: "466",
        }}
      />
      </div>
      </div>
      <div className="position-absolute single-text-8 text-center">
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-1 mt-2">
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "COAL MILL I/L AIRBLASTER",
        }}
      />
      <MimicCaret
        parentClass="d-flex mt-1 tringle-item justify-content-center"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("NA")}`}
        secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("NA")}`}
        label="NA"
      />
        </div>
      </div>
      <div className="position-absolute single-text-9 text-center">
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2 mr-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-4 gap-1">
        <div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "Z1M110",
        }}
      />
      <div className="connector-icon p-1 ml-2 mt-1">
        <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("E3_05_M01")}`} label="E3_05_M01" text="M" />
      </div>
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div>
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div>
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt   mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
      </div>
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex">
          <div>
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="box-1 p-1 mt-5 bg-info">
          <div className="d-flex">
          <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "CO-",
        }}
      />
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
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
          label: "O2",
        }}
      />
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
          </div>
        </div>
      </div>
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt position-absolute single-text-11",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <div className=" position-absolute single-text-12">
           <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt ml-5",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-4",
            unit: "",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-4",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="position-absolute single-text-13">
          <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ml-3",
          label: "Z1M312",
        }}
      />
      <div className="connector-icon p-1 mt-1">
      <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1K01")}`} label="R1K01" />
      </div>
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
<TransparentBoxWithGate
                    isClickable={true}
                    parentClass="mx-auto mt-2"
                    squareProps={{
                      tagLabel: "",
                      squareClass: `${("")}`,
                    }}
                  />
                  <div className="d-flex">
                    <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        </div>
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
      <div className="connector-icon p-1 mt-1">
      <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1K01")}`} label="R1K01" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ml-2",
          label: "Z1M012",
        }}
      />
      </div>
      <div className="position-absolute single-text-15 d-flex">
      <MotorCircleDigitalTag className={`square digital-tag mt-3  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />

      <div className="connector-icon p-1 mt-1">
      <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        /> 
        </div>
      </div>
      <div className="position-absolute single-text-16 text-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "Z1Y285",
        }}
      />
      <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
     <div className="square-1 mt-4">
      <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2",
          label: "Z1Y284",
        }}
      />
      </div>
  
</div>
<div className="position-absolute single-text-17 text-center">
      <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2",
          label: "Z1Y286",
        }}
      />
      </div>
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt position-absolute single-text-18",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <div className="position-absolute single-text-19">
          <div className="d-flex gap-1">
          <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
         <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />

         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
          </div>
          <div className="d-flex gap-1 mt-4">
          <div className="connector-icon p-1 mt-1">
      <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        /> 
        </div>
        <div className="connector-icon p-1 mt-1">
      <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        /> 
        </div>
          </div>
        </div>
        <div className="position-absolute single-text-20 box-1 p-2 bg-info">
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ",
          label: "GB OIL FILTER DP &",
        }}
      />
            <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "LEVEL SWITCHES",
        }}
      />
      <div className="d-flex gap-1">
      <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
      <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
      <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
      <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />

      </div>
        </div>
        <div className="position-absolute single-text-21 d-flex">
    <div>
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
            <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "Z1P04_SET",
        }}
      />
       <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        
        <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-5",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div>
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        </div>
        </div>
        <div className="position-absolute single-text-22 d-flex">
        <TransparentBoxWithGate
                    isClickable={true}
                    parentClass="mx-auto mt-2"
                    squareProps={{
                      tagLabel: "",
                      squareClass: `${("")}`,
                    }}
                  />
                    <MotorCircleDigitalTag
          className={`circle-img   digital-tag ${useFanImgTagsColorStatus(
            "512RA7/M01"
          )}`}
          label="512RA7/M01"
        />
                <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />

                <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" />
                <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt ml-3",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="position-absolute single-text-23 d-flex">
          <div>
        <div className="connector-icon p-1 mt-1">
      <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("492FN2/M01")}`}
          label="492FN2/M01"
          text="M"
        /> 
        </div>
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "Z1M013",
        }}
      />
      </div>
        <TransparentBoxWithGate
                    isClickable={true}
                    parentClass="mx-auto mt-2"
                    squareProps={{
                      tagLabel: "",
                      squareClass: `${("")}`,
                    }}
                  />
                    <TransparentBoxWithGate
                    isClickable={true}
                    parentClass="mx-auto mt-2"
                    squareProps={{
                      tagLabel: "",
                      squareClass: `${("")}`,
                    }}
                  />
        </div>
        <div className="position-absolute single-text-24 d-flex">
        <TransparentBoxWithGate
                    isClickable={true}
                    parentClass="mx-auto mt-2"
                    squareProps={{
                      tagLabel: "",
                      squareClass: `${("")}`,
                    }}
                  />
                     <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
         <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="position-absolute single-text-25 text-center">
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "FROM OLD",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "PREHEATER",
        }}
      />
        </div>
        <div className="position-absolute single-text-26 text-center">
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "FROM NEW",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "PREHEATER",
        }}
      />
        </div>
        <div className="position-absolute single-text-27 d-flex">
          <div>
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div>
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        </div>
        <div className="position-absolute single-text-28 d-flex">
          <div>
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div>
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        </div>
        <div className="position-absolute single-text-29">
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="position-absolute single-text-30">
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="position-absolute single-text-31">
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
      <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div className="position-absolute single-text-32">
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
  />
   <MimicCaret
        parentClass="d-flex mt-2 mx-auto tringle-item justify-content-center"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("NA")}`}
        secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("NA")}`}
        label="NA"
      />
  </div>
  <div className="position-absolute single-text-33">
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
    text={{ useClass: "text-dark mx-auto", label: "Z2M743" }}
  />
  </div>
  <div className="position-absolute single-text-34">
        <PipeWithCircles
    parentDivClass="hpipecircle "
    firstCircle={{
      firstCircleClass: "dot grey-color",
      firstCircleText: "M",
    }}
    text={{ useClass: "text-dark mx-auto", label: "Z2M744" }}
  />
  </div>
  <div className="containerImage position-absolute single-text-35 pt-2">
  <BlackContainer
          data={{
            label: "R1K03SB_PID_SPM",
            useClass: "greenTxt  mx-auto",
            unit: "MT",
            unitColor: "unitColor",
          }}
        />
  </div>
  <div className="containerImage text-center position-absolute single-text-36 pt-4">
  <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "FINE COAL SILO",
        }}
      />
  </div>
  <div className="position-absolute single-text-37">
  <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ",
            label: "Z1A209A",
          }}
        />
      <div className="d-flex">
        <div className="yellowline-Vr upArrow  line-212 ml-auto"></div>
        <div className="squareplustri text-center pt-2">
        </div>
        <div className="yellowline-Vr  line-1"></div>
        <div className="yellowline-Hr line-2"></div>
      </div>
    <div className="line-circle-1 position-absolute">
    <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1K01")}`} label="R1K01" />     
         <TextContainerWithWrapWord
      data={{
        useClass: "text-dark mt-1",
        label: "Z1M126A",
      }}
    />
    </div>
        </div>
        <div className="position-absolute single-text-38">
  <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ",
            label: "Z1A209",
          }}
        />
      <div className="d-flex">
        <div className="yellowline-Vr upArrow  line-212 ml-auto"></div>
        <div className="squareplustri text-center pt-2">
        </div>
        <div className="yellowline-Vr  line-1"></div>
        <div className="yellowline-Hr line-2"></div>
      </div>
    <div className="line-circle-1 position-absolute">
    <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1K01")}`} label="R1K01" />     
         <TextContainerWithWrapWord
      data={{
        useClass: "text-dark mt-1",
        label: "Z1M126",
      }}
    />
    </div>
        </div>
        <div className="position-absolute single-text-39 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img   digital-tag ${useFanImgTagsColorStatus(
            "512RA7/M01"
          )}`}
          label="512RA7/M01"
        />
             <MotorCircleDigitalTag
          className={`circle-img   digital-tag ${useFanImgTagsColorStatus(
            "512RA7/M01"
          )}`}
          label="512RA7/M01"
        />
        </div>
        <div className="position-absolute single-text-40">
        <MotorCircleDigitalTag
          className={`circle-img   digital-tag ${useFanImgTagsColorStatus(
            "512RA7/M01"
          )}`}
          label="512RA7/M01"
        />
        </div>
        <div className="containerImage position-absolute single-text-41 text-center">
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "OIL TANK",
        }}
      />
        </div>
        <div class="position-absolute single-text-42 d-flex flex-column">
          <i class="fa-solid fa-caret-right d-block digital-tag grey-color-caret"></i>
          <i class="fa-solid fa-caret-right d-block digital-tag grey-color-caret"></i>
          </div>
          <div class="position-absolute single-text-43 d-flex">
          <i class="fa-solid fa-caret-up d-block digital-tag grey-color-caret"></i>
          <i class="fa-solid fa-caret-down d-block digital-tag grey-color-caret"></i>
          </div>
          <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-44",
          label: "TO NEWCOALMILL SILO",
        }}
      />
          <div className=" position-absolute single-text-45 d-flex">
            <div className="chimni-red"></div>
          <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-5",
          label: "TO MILL",
        }}
      />
          </div>
          <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "TO COALFEED BINS",
        }}
      />
  <div className="pipeHr position-absolute pipe-1">
  <div className="d-flex justify-content-end mr-3">
  <i className="fas fa-long-arrow-alt-left"></i>
</div>
  </div>
  <div className="pipeHr position-absolute pipe-2"></div>
  <div className="pipeHr position-absolute pipe-3"></div>
  <div className="pipeVr position-absolute pipe-4"></div>
  <div className="pipeHr position-absolute pipe-5">
  <div className="d-flex justify-content-around">
    <i className="fas fa-long-arrow-alt-right"></i></div>
  </div>
  <div className="pipeVr position-absolute d-flex justify-content-center align-items-center pipe-6">
    <i className="fas fa-long-arrow-alt-up"></i>
  </div>
  <div className="pipeHr position-absolute pipe-7">
  <div className="d-flex justify-content-around">
    <i className="fas fa-long-arrow-alt-right"></i></div>
  </div>
  <div className="pipeHr position-absolute pipe-8"></div>
  <div className="pipeVr position-absolute pipe-9"></div>
  <div className="pipeHr position-absolute pipe-10"></div>
  <div className="pipeHr position-absolute pipe-11"></div>
  <div className="pipeVr position-absolute d-flex justify-content-center align-items-center pipe-12">
  <i className="fas fa-long-arrow-alt-up"></i>
  </div>
  <div className="pipeHr position-absolute pipe-13">
  <div className="d-flex justify-content-around">
    <i className="fas fa-long-arrow-alt-right"></i>
    <i className="fas fa-long-arrow-alt-right"></i>
    </div>
  </div>
  <div className="pipeVr position-absolute pipe-14 d-flex justify-content-center align-items-center">
  <i className="fas fa-long-arrow-alt-down"></i>
  </div>

  <div className="pipeHr position-absolute pipe-15"></div>
  <div className="pipeHr position-absolute pipe-16"></div>
  <div className="pipeVr position-absolute pipe-17"></div>
  <div className="pipeVr position-absolute pipe-18"></div>

  <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
  <div className="yellowline-Vr   position-absolute line-2"></div>
  <div className="yellowline-Hr rightarrow  position-absolute line-3"></div>
  <div className="yellowline-Hr   position-absolute line-4"></div>
  <div className="yellowline-Hr   position-absolute line-5"></div>
  <div className="yellowline-Vr   position-absolute line-6"></div>
  <div className="yellowline-Vr   position-absolute line-7"></div>
  <div className="yellowline-Hr   position-absolute line-8"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-10"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-11"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-12"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-13"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-14"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-15"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-16"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
  <div className="yellowline-Vr downArrow  position-absolute line-18"></div>
  <div className="yellowline-Hr position-absolute line-19"></div>
  <div className="yellowline-Vr downArrow position-absolute line-20"></div>
  <div className="yellowline-Hr position-absolute line-21"></div>
  <div className="yellowline-Vr downArrow position-absolute line-22"></div>
  <div className="yellowline-Vr position-absolute line-23"></div>
  <div className="yellowline-Vr position-absolute line-24"></div>
  <div className="yellowline-Vr downArrow position-absolute line-25"></div>
  <div className="yellowline-Vr downArrow position-absolute line-26"></div>
  <div className="yellowline-Hr rightarrow position-absolute line-27"></div>

  </div> 
  );
};
