import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
  BlueContainerWithDynamicBorder,
  MimicCaret,
} from "../../../index";
import {
  useColorStatus,
  useCaretColorStatus,
  useBorderTagsColorStatus,
} from "../../../../utils";

export const FlyashCircuitMagdalla = () => {
  return (
    <div className="Flyashcircuit w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-1"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("292BE1/M1")}`,
          firstCircleText: "M",
          firstCircleLabel: "292BE1/M1",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        text={{ useClass: "text-dark mx-auto", label: "292-AS2" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-3"
        text={{ useClass: "text-dark mx-auto", label: "292-JB3" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        text={{ useClass: "text-dark mx-auto", label: "292-JB2" }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-5" />
      <div className="position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "292-FA2",
          }}
        />
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("292FA2/M01")}`}
            label="292FA2/M01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("562BL1/FAN")}`}
            label="562BL1/FAN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "292-FA3",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-8 d-flex">
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-FN1",
            }}
          />
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-2 digital-tag ${useColorStatus(
                "292BF1/HP_Fan"
              )}`}
              label="292BF1/HP_Fan"
              text="M"
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-BF1",
            }}
          />
          <div className="containerImage">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3 digital-tag ${useColorStatus(
                "292BF1/BF_Timer"
              )}`}
              label="292BF1/BF_Timer"
              text="M"
            />
          </div>
          <div className="pipeVr position-relative"></div>
          <div className="d-flex single-1">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("292BF1/RA")}`}
              label="292BF1/RA"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "292-RA1",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className="containerImage  text-center position-absolute single-text-9">
        <div className="d-flex ml-3 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-SB1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 ml-2 digital-tag ${useColorStatus(
              "292HOPPER/1"
            )}`}
            label="292HOPPER/1"
            text=""
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Dry",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Fly Ash Sllo",
          }}
        />
        <BlackContainer
          data={{
            label: "292SILO/1",
            useClass: "greenTxt mt-1",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <div className="pipeVr position-relative"></div>
      </div>
      <div className="position-absolute single-text-10">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 ml-2 mt-2 digital-tag ${useColorStatus(
              "292BL1/M01"
            )}`}
            label="292BL1/M01"
            text="M"
          />
        </div>
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-BL3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 ml-2 mt-2 digital-tag ${useColorStatus(
              "292BL3/M01"
            )}`}
            label="292BL3/M01"
            text="M"
          />
        </div>
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-BL2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 ml-2 mt-2 digital-tag ${useColorStatus(
              "292BL2/M01"
            )}`}
            label="292BL2/M01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex justify-content-center align-items-center">
        <div className="truck"></div>
        <div>
          <div className="img-108"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "292-AR2",
            }}
          />
        </div>
        <div className="single-1 text-center">
          <MotorCircleDigitalTag
            className={`dot  p-3 digital-tag ${useColorStatus("292CP2/CP2")}`}
            label="292CP2/CP2"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "292-CP2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex justify-content-center align-items-center">
        <div className="truck"></div>
        <div>
          <div className="img-108"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "292-AR1",
            }}
          />
        </div>
        <div className="single-1 text-center">
          <MotorCircleDigitalTag
            className={`dot  p-3 digital-tag ${useColorStatus("292CP1/CP1")}`}
            label="292CP1/CP1"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "292-CP1",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-13 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-BF2",
            }}
          />
          <div className="containerImage">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3 mt-2 digital-tag ${useColorStatus(
                "292BF2/BF_Timer"
              )}`}
              label="292BF2/BF_Timer"
              text="M"
            />
          </div>
          <div className="pipeVr position-relative"></div>
          <div className="d-flex single-1">
            <MotorCircleDigitalTag
              className={`dot  p-3 digital-tag ${useColorStatus("292BF2/RA")}`}
              label="292BF2/RA"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "292-RA2",
              }}
            />
          </div>
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="mt-3">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-2 digital-tag ${useColorStatus(
                "292BF2/HP_Fan"
              )}`}
              label="292BF2/HP_Fan"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "292-FN2",
            }}
          />
        </div>
      </div>
      <div className="containerImage  text-center position-absolute single-text-14">
        <div className="d-flex ml-3 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "292-FY1",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Fly Ash Bin",
          }}
        />
        <BlackContainer
          data={{
            label: "292SFF/BIN_WEIGHT",
            useClass: "greenTxt mt-1",
            unit: "ton",
            unitColor: "unitColor",
          }}
        />
        <div className="pipeVr position-relative"></div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-15" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-16" />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        text={{ useClass: "text-dark mx-auto", label: "292-AS1" }}
      />
      <div className="position-absolute single-text-18 d-flex">
        <div className="mt-3">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "292PG1/PG"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "292PG1/PG"
            )}`}
            label="292PG1/PG"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "292-PG1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "292DV1/Position",
              useClass: "greenTxt mb-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("292DV1/DV")}
            isClickable={true}
            tagLabel="292DV1/DV"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "292-DV1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <BlackContainer
          data={{
            label: "292SFF/VLV_POS",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot mt-1 p-3 digital-tag ${useColorStatus("292SFF/SFF")}`}
          label="292SFF/SFF"
          text="M"
        />
        <div className="d-flex ml-3 mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "292SFF/FEED_RATE",
              useClass: "greenTxt mt-1 ml-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "292SFF/SFF_TOTLZR",
            useClass: "greenTxt mt-4 ml-2",
            unit: "L",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("292FA1/M01")}`}
            label="292FA1/M01"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "292-FA1",
          }}
        />
      </div>
      <div className="containerImage  text-center position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "292SF2/BIN_WEIGHT",
            useClass: "greenTxt mt-1",
            unit: "ton",
            unitColor: "unitColor",
          }}
        />
        <div className="pipeVr position-relative"></div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <MotorCircleDigitalTag
          className={`dot mt-1 p-3 digital-tag ${useColorStatus("292SF2/SF2")}`}
          label="292SF2/SF2"
          text="M"
        />
        <div className="mt-2">
          <div className="position-relative dashedHr-Pipe"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3 text-center",
              label: "RAL RUNNING",
            }}
          />
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-23" />
      <div className="position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "292-FA2",
          }}
        />
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 mt-2 digital-tag ${useColorStatus(
              "292FA2/M01"
            )}`}
            label="292FA2/M01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 562BE1 BOOT",
          }}
        />
        <div className="mt-4 ml-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "292SF2",
          }}
        />
            <BlackContainer
          data={{
            label: "292SF2/FEEDRATE",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        </div>
    
      </div>
      <div className="position-absolute single-text-26 d-flex flex-column">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "FEEDING TO MILL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "INLET FEED CHUTE",
            }}
          />
        </div>

        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FEEDING TO MILL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "DISCHARGE AIRSLIDE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562 AS1",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "292BE1/JT",
          useClass: "greenTxt mt-1 position-absolute single-text-27",
          unit: "KW",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "292HBL/TE01",
          useClass: "greenTxt mt-1 position-absolute single-text-28",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
         <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-29",
            label: "SOLID FLOW FEEDER",
          }}
        />
    
        
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Hr  position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-13"></div>
      <div className="yellowline-Vr  position-absolute line-14"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-15"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-20"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Hr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr upArrow position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Vr downArrow position-absolute line-44"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
   
    </div>
  );
};
