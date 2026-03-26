import { useColorStatus } from "../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, TransparentBoxWithGate, BlueContainerWithDynamicBorder, PipeWithCircles } from "../../../index";
export const CoalMillFeedingJafrabad = () => {
  return (
    <div className="CoalMillFeedingJafrabad w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div className="containerImage mt-1 pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PETCOKE HOPPER",
            }}
          />
          <div className="yellowline-Vr downArrow  line-1 line-2"></div>
        </div>
        <div className="containerImage mt-1 pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COAL HOPPER",
            }}
          />
          <div className="yellowline-Vr downArrow  line-1"></div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "F169" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "",
        }}
      />
      <div className="position-absolute single-text-3">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: "F171" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
        <div className="d-flex ml-5">
          <BlackContainer
            data={{
              label: "_F171_M01I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ml-5 ${useColorStatus("_F171_MACHINE_GUARD_SW")}`} label="_F171_MACHINE_GUARD_SW" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: "F173 NEW" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
        <div className="d-flex ml-5">
          <BlackContainer
            data={{
              label: "_F173_M01I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ml-5 ${useColorStatus("_F173_MACHINE_GUARD_SW")}`} label="_F173_MACHINE_GUARD_SW" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: "BC010" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />

        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ml-5 ${useColorStatus("_BC10_MACHINE_GUARD_SW")}`} label="_BC10_MACHINE_GUARD_SW" text="M" />
      </div>
      <div className="position-absolute single-text-6">
        <BlackContainer
          data={{
            label: "462BC015_M01I01",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: "BC015" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
            secondCircleLabel: "",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-7" text={{ useClass: "text-dark mx-auto", label: "F165_1" }} />
      <div className="containerImage position-absolute single-text-8 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "F171A1",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "M",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: "F171A" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
            secondCircleLabel: "",
          }}
        />
        <BlackContainer
          data={{
            label: "_F171A_M01I01",
            useClass: "greenTxt ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "_COAL_SHED_WIND_VEL",
            useClass: "greenTxt mt-2",
            unit: "KMPH",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "COAL SHED WIND VELOCITY",
          }}
        />
        <BlackContainer
          data={{
            label: "_F165_2_M01I01",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_F165_1_M01I01",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-4 ${useColorStatus("_F171A_MACHINE_GUARD_SW")}`} label="_F171A_MACHINE_GUARD_SW" text="M" />
        <BlackContainer
          data={{
            label: "_F171A1_M01I01",
            useClass: "greenTxt mt-2 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <MotorCircleDigitalTag className={`dot digital-tag mt-4 ${useColorStatus("_F169_MACHINE_GUARD_SW")}`} label="_F169_MACHINE_GUARD_SW" text="M" />
        <BlackContainer
          data={{
            label: "_F169_M01I01",
            useClass: "greenTxt mt-2 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2",
            label: "DG005",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "DG013",
          }}
        />

        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="containerImage mt-1 pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "F181A COAL BIN",
            }}
          />
        </div>
        <div className="containerImage mt-1 pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Rej.Matl. Bl025",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Atox Mill PLC room temp",
            }}
          />
          <BlackContainer
            data={{
              label: "ATOX_PLC_ROOM_TEMP",
              useClass: "greenTxt mt-1 ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Atox Mill VFD room temp",
            }}
          />
          <BlackContainer
            data={{
              label: "ATOX_MILL_VFD_ROOM_TEMP",
              useClass: "greenTxt mt-1 ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "462WF045_A01S01",
              useClass: "greenTxt mt-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF045_A01F01",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF045_N01I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF045_A01F01_CD_TPH",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "462LC055_A01W01",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF045_INC_DEC_PULSE",
              useClass: "greenTxt mt-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF045PID_SPA",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div className="containerImage mt-1 pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MOZ COAL BI030",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
        </div>
        <div className="containerImage mt-1 pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PETCOKE BI050",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "462LC035_A01W01",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF065_INC_DEC_PULSE",
              useClass: "greenTxt mt-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF065PID_SPA",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "462WF065_A01S01",
              useClass: "greenTxt mt-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF065_A01F01",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF065_N01I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF065_A01F01_CD_TPH",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "WF045" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "M",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "WF065" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-21"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "BC070" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-22" text={{ useClass: "text-dark mx-auto", label: "FN090" }} />
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "462BC070_M01I01",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-4 ml-3 ${useColorStatus("462SF090")}`} label="462SF090" text="M" />
      </div>
      <div className="position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "BF020",
          }}
        />
        <div className="squareplustri text-center pt-3"></div>
        <div className="d-flex mt-1 ml-1 text-center">
          <MotorCircleDigitalTag className={`circle-img mt-2 c-grey-img-2`} label="" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-2",
              label: "RF021",
            }}
          />
          <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr  position-absolute line-2"></div>
          <div className="yellowline-Vr upArrow position-absolute line-3"></div>
        </div>
      </div>
      <div className="position-absolute single-text-25 text-center">
        <div>
          <MotorCircleDigitalTag className={`line-circle grey-color`} />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FN022",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "462BF020_N01P01",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462FN022_M01I01",
            useClass: "greenTxt mt-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
    </div>
  );
};
