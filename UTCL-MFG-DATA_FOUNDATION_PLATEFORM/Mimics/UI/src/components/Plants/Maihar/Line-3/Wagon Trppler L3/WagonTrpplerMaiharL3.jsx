import {
  BlackContainer,
  TextContainerWithWrapWord,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../../index";
import { useColorStatus } from "../../../../../utils";

export const WagonTrpplerMaiharL3 = () => {
  return (
    <div className="WagonTrpplerMaiharL3 w-100 h-100 position-relative">
      <div className="pipeVr border border-dark position-absolute pipe-1"></div>
      <div className="pipeVr border border-dark position-absolute pipe-2"></div>
      <div className="pipeVr border border-dark position-absolute pipe-3"></div>
      <div className="pipeHr border border-dark position-absolute pipe-4"></div>
      <div className="pipeHr border border-dark position-absolute pipe-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-5"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="fa-solid fa-tower-observation position-absolute single-text-1"></div>
      <div className=" d-flex justify-content-around align-items-end middle-sqr-container position-absolute single-text-2">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CHFB")}`}
          label="CHFB"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-3">
        <div className="d-flex justify-content-around align-items-center middle-sqr-container">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("CHRC1")}`}
            label="CHRC1"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("CHRC2")}`}
            label="CHRC2"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 mx-auto",
            label: "ROLLER CRUSHER",
          }}
        />
      </div>

      <div className="containerImage text-center position-absolute single-text-4"></div>
      <div className="containerImage text-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CARBON BLACK",
          }}
        />
      </div>
      <div className="squareplustri text-center pt-3 position-absolute single-text-6">
        <BlackContainer
          data={{
            label: "WT3005",
            useClass: "greenTxt",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PET COKE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "HP 2",
          }}
        />
      </div>
      <div className="squareplustri text-center pt-3 position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "LT3001",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "RAW COAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "HP 1",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-8"></div>
      <div className="containerImage position-absolute single-text-9"></div>
      <div className="squareplustri position-absolute single-text-10"></div>
      <div className="img-98 pt-3 text-center position-absolute single-text-11">
        <div className="squareplustri"></div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: "dot p-3 grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot p-3 grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("CHBC21")}`,
          secondCircleLabel: "CHBC21",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-19" />
      <div className="d-flex justify-content-center img-66 position-absolute single-text-20">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("DEP")}`}
            label="DEP"
            text="M"
          />
        </div>
      </div>
      <div className="img-41 text-center position-absolute single-text-21">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("DEP")}`}
          label="DEP"
          text="M"
        />
      </div>
      <div className="img-41 text-center position-absolute single-text-22">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CHCV")}`}
          label="CHCV"
          text="M"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-23"
        firstCircle={{
          firstCircleClass: `dot mx-auto digital-tag p-3 ${useColorStatus(
            "MSEP78"
          )}`,
          firstCircleLabel: "MSEP78",
          firstCircleText: "M",
        }}
      />
      <div className="text-center position-absolute single-text-24">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("DEP")}`}
          label="DEP"
          text="M"
        />
        <div className="yellowline-Vr downArrow position-relative"></div>
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CHBC20")}`}
          label="CHBC20"
          text="M"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-25"
        firstCircle={{
          firstCircleClass: `dot mx-auto digital-tag p-3 ${useColorStatus(
            "L20MS1"
          )}`,
          firstCircleLabel: "L20MS1",
          firstCircleText: "M",
        }}
      />
      <div className="text-center position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CA23")}`}
          label="CA23"
          text="M"
        />
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>

      <div className="d-flex position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "AS3002",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "WT6004",
            useClass: "greenTxt ml-4 mt-4",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "WT3004",
          useClass: "greenTxt position-absolute single-text-30",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-31",
          label: "FEEDER BREAKER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-32",
          label: "COAL RECLAIMER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-33",
          label: "COAL STACKER",
        }}
      />

      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-34" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-35" />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-36 dot p-3 digital-tag ${useColorStatus(
          "CA22"
        )}`}
        label="CA22"
        text="M"
      />
      <PipeWithCircles parentDivClass="hpipecircle bg-dark position-absolute single-text-37" />
      <div className="d-flex text-center position-absolute single-text-38">
        <BlackContainer
          data={{
            label: "LT3001",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "COAL HPR LVL OK TO COAL RECLAIMER",
          }}
        />
      </div>
    </div>
  );
};
