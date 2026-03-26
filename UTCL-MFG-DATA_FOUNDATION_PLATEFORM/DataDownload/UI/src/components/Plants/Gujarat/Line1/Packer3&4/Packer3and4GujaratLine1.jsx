import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
} from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useBorderTagsColorStatus,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
} from "../../../../../utils";

export const Packer3and4GujaratLine1 = () => {
  return (
    <div className="Packer3and4GujaratLine1 w-100 h-100 position-relative">
      {/* <MotorCircleDigitalTag
        className={`position-absolute pipe-1 square digital-tag ${useColorStatus(
          "R1J03"
        )}`}
        label="R1J03"
      /> */}
      {/* <MotorCircleDigitalTag
        className={`position-absolute pipe-2 square digital-tag ${useColorStatus(
          "R1J03"
        )}`}
        label="R1J03"
      /> */}
      <div className="position-absolute text-center pipe-2">
      <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("S4U01")}`}  label="S4U01"/>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P1U03M2",
          }}
        />
      </div>
      <div className="position-absolute text-center pipe-3">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P1U43")}`} label="P1U43"/>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FROM T.L-5",
          }}
        />
      </div>

      {/* <MotorCircleDigitalTag
        className={`position-absolute pipe-4 square digital-tag ${useColorStatus(
          "R1J03"
        )}`}
        label="R1J03"
      /> */}
      <div className="position-absolute text-center pipe-4">
      <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("S4U02")}`} label="S4U02"/>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P1U04M2",
          }}
        />
      </div>
      <div className="position-absolute text-center pipe-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HPF31",
          }}
        />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P1HPF31")} mt-1`} label="P1HPF31"/>
      </div>
      <div className="position-absolute text-center pipe-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HPF41",
          }}
        />
        <div className={`square digital-tag ${useColorStatus("R1B03")} mt-1`} />
      </div>
      <div className="position-absolute text-center pipe-7">
      <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P1U03M1")}`} label="P1U03M1"/>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "P1UO3M1",
          }}
        />
      </div>
      <div className="position-absolute text-center pipe-8">
      <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P1U04M1")}`} label="P1U04M1"/>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "P1UO4M1",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U30" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U30_RUN_IND")}`,
          secondCircleLabel: "P1U30_RUN_IND",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U32" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U32")}`,
          secondCircleLabel: "P1U32",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U50" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U50")}`,
          secondCircleLabel: "P1U50",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U53" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U53")}`,
          secondCircleLabel: "P1U53",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U52" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U52")}`,
          secondCircleLabel: "P1U52",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13a"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U51" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U51")}`,
          secondCircleLabel: "P1U51",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U40" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U40_RUN_IND")}`,
          secondCircleLabel: "P1U40_RUN_IND",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U42" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U42")}`,
          secondCircleLabel: "P1U42",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-16"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U50" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U50")}`,
          secondCircleLabel: "P1U50",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-17"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U53" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U53")}`,
          secondCircleLabel: "P1U53",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-18"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U52" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U52")}`,
          secondCircleLabel: "P1U52",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-18a"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U51" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U51")}`,
          secondCircleLabel: "P1U51",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-19"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />
      {/* <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-20"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      /> */}
      
      <MotorCircleDigitalTag className={`square position-absolute pipe-20 digital-tag ${useColorStatus("P1U41")}`} label="P1U41"/>
      
      
      <div className="pipe  position-absolute pipe-21"></div>
      <div className="pipe  position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-48"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-49"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-49a"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-51"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-52a"></div>
      <div className="yellowline-Vr position-absolute pipe-53"></div>
      <div className="yellowline-Hr position-absolute pipe-54"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-55"></div>
      <div className="yellowline-Hr position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Hr position-absolute pipe-58"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-59"></div>
      <div className="yellowline-Hr position-absolute pipe-60"></div>
      <div className="yellowline-Hr position-absolute pipe-61"></div>
      <div className="yellowline-Hr position-absolute pipe-62"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-63"></div>
      <div className="yellowline-Hr position-absolute pipe-64"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr position-absolute pipe-66"></div>
      <div className="yellowline-Hr position-absolute pipe-67"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-68"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div className="yellowline-Vr position-absolute pipe-70"></div>
      <div className="yellowline-Hr position-absolute pipe-71"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-72"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-73"></div>
      <div className="yellowline-Vr position-absolute pipe-74"></div>
      <div className="yellowline-Hr position-absolute pipe-75"></div>
      <div className="yellowline-Vr position-absolute pipe-76"></div>
      <div className="yellowline-Hr position-absolute pipe-77"></div>
      <div className="yellowline-Hr position-absolute pipe-78"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-79"></div>
      <div className="yellowline-Hr position-absolute pipe-80"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-81"></div>
      <div className="yellowline-Hr position-absolute pipe-82"></div>
      <div className="yellowline-Hr position-absolute pipe-82a"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-83"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-83a"></div>
      <div className="yellowline-Hr position-absolute pipe-84"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-85"></div>
      <div className="yellowline-Hr position-absolute pipe-86"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-87"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-88"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-89"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-90"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-91"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "ECS4245SVR01::Z2L04_L3",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EGC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 4",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "ECS4245SVR01::Z2L05_L2",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HSR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 5",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "ECS4245SVR01::Z2L06_L2",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PPC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="containerImage text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EGC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 4",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HSR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 5",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PPC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-5 d-flex flex-column">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex flex-column">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VS31",
            }}
          />
          <BlackContainer
            data={{
              label: "P1L31_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VS41",
            }}
          />
          <BlackContainer
            data={{
              label: "P1L41_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex flex-column">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1N31_RUN_IND")}`}
            label="P1N31_RUN_IND"
            text="M"
          />
        </div>
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1N41_RUN_IND")}`}
            label="P1N41_RUN_IND"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PACKER-3 RECY EMERGENCY STOP",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PACKER-4 RECY EMERGENCY STOP",
          }}
        />
      </div>
      {/* <div className="position-absolute single-text-11 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "R1M01_T2_PID_SPA",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COMP 5 PR",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "R1M01_T2_PID_SPA",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COMP 6 PR",
            }}
          />
        </div>
      </div> */}
      <div className="position-absolute single-text-12 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-7 & 8",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-3 & 4",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-1 & 2",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-5 & 6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-7 & 8",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-3 & 4",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-1 & 2",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-5 & 6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "P1FN41_DP",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15  d-flex flex-column">
        <BlackContainer
          data={{
            label: "P1N31_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "P1N41_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-16">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("P1J15")}`}
          label="P1J15"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "J15",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-17 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1P35")}`}
            label="P1P35"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P35",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1FN31")}`}
            label="P1FN31"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FN31",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-18 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1P45")}`}
            label="P1P45"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P45",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1FN41")}`}
            label="P1FN41"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FN41",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-19 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1RB31")}`}
            label="P1RB31"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RB31",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1RB41")}`}
            label="P1RB41"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RB41",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-20 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1HPF31")}`}
            label="P1HPF31"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1HPF41")}`}
            label="P1HPF41"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-21 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1U31")}`}
            label="P1U31"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "U31",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1U41")}`}
            label="P1U41"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "U41",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-22 d-flex flex-column">
        <div className="text-center d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1BN31")}`}
            label="P1BN31"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BN31",
            }}
          />
        </div>
        <div className="text-center d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1BN41")}`}
            label="P1BN41"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BN41",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-23 d-flex flex-column">
        <div className="text-center d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "P1J36",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1J36")} ml-2`}
            label="P1J36"
            text="M"
          />
        </div>
        <div className="text-center d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "P1J46",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")} ml-2`}
            label="NA"
            text="M"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-24 d-flex flex-column">
        <div className="">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1VS31")} ml-2`}
            label="P1VS31"
            text="M"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1VS41")} ml-2`}
            label="P1VS41"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "P44",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "P1P44"
            )}`}
            label="P1P44"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA41",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "P1RA41"
            )}`}
            label="P1RA41"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-26 ">
        <div className="text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1U43")}`}
            label="P1U43"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "U43",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "P34",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "P1P34"
            )}`}
            label="P1P34"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA31",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "P1RA31"
            )}`}
            label="P1RA31"
          />
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-28"></div>
      <div className="text-center position-absolute single-text-29">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("P1P65")}`}
          label="P1P65"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P65",
          }}
        />
      </div>
    </div>
  );
};
