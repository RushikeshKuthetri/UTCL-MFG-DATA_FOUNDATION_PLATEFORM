import {
  BlackContainer,
  TextContainerWithWrapWord,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../../index";
import { useColorStatus, useImgColorStatus } from "../../../../../utils";

export const LSStackerReclaimerMaiharL3 = () => {
  return (
    <div className="LSStackerReclaimerMaiharL3 w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr upArrow position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-29"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-30"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Hr position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Vr upArrow position-absolute line-38"></div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-1"
        text={{ useClass: "text-dark text-center mx-auto", label: "BC 4B" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        text={{ useClass: "text-dark text-center mx-auto", label: "OLBC 9" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-3"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "SB2-AC" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 grey-color`,
          secondCircleLabel: "SB2_AC",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC10A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 grey-color`,
          secondCircleLabel: "BC10A",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC10B" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 grey-color`,
          secondCircleLabel: "BC10B",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC 11" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 ${useColorStatus("BC_11")}`,
          secondCircleLabel: "BC_11",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC 12" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 ${useColorStatus("BC12")}`,
          secondCircleLabel: "BC12",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC LR3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 ${useColorStatus("BC_LR3")}`,
          secondCircleLabel: "BC_LR3",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag p-3 ${useColorStatus("BC_LR2")}`,
          firstCircleLabel: "BC_LR2",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC LR2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC LS1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 ${useColorStatus("BC_LS1")}`,
          secondCircleLabel: "BC_LS1",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: `dot digital-tag p-3 ${useColorStatus("BC_LR1")}`,
          firstCircleLabel: "52BC9",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC LR1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark text-center mx-auto", label: "BC10" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 ${useColorStatus("BC10")}`,
          secondCircleLabel: "BC10",
          secondCircleText: "M",
        }}
      />
      <div className="text-center containerImage position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "LV2001",
            useClass: "greenTxt",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "DE 2",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "DE 3",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "TH7",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "LV2003A",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOPPER 3",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "LV2001A",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOPPER 1",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "LV2002A",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOPPER 2",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "LV2004A",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOPPER 4",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-21"></div>
      <div className="text-center containerImage position-absolute single-text-22"></div>
      <div className="text-center containerImage position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RED MUD",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "LSHT FG",
          }}
        />
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "LSHT_FG"
          )}`}
          label="LSHT_FG"
        />
      </div>

      <div className="squareplustri position-absolute single-text-25"></div>
      <div className="squareplustri position-absolute single-text-26"></div>
      <div className="img-99 position-absolute single-text-27"></div>
      <div className="img-98 position-absolute single-text-28"></div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-29",
          label: "LIMESTONE STACKER",
        }}
      />
      <div className="img-66 position-absolute single-text-30">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("240CP1")}`}
            label="240CP1"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-31">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("240CP1")}`}
            label="240CP1"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-32">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SB2_FAN")}`}
            label="SB2_FAN"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-33">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("240CP1")}`}
            label="240CP1"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-34">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("TH7_FAN")}`}
            label="TH7_FAN"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-35">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("DE3_CP")}`}
            label="DE3_CP"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-36">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("DE3_FAN")}`}
            label="DE3_FAN"
            text="M"
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "SB2_RAL"
        )} position-absolute single-text-37`}
        label="SB2_RAL"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "TH7_RAL"
        )} position-absolute single-text-38`}
        label="TH7_RAL"
        text="M"
      />
      <div className="position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BC10MS1",
          }}
        />
        <div className="text-center pipeVr mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("BC10MS1")}`}
            label="BC10MS1"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "240 MS1",
          }}
        />
        <div className="text-center pipeVr mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("240MS1")}`}
            label="240MS1"
            text="M"
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "LIMESTONE RECLAIMER",
        }}
      />
      <div className="d-flex position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "HARROW CURRENT",
          }}
        />
        <BlackContainer
          data={{
            label: "_307RE_HR_CURR",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "CHAIN CURRENT",
          }}
        />
        <BlackContainer
          data={{
            label: "307RE_SC_CURR",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pr-3 hpipecircle position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`ml-auto dot p-3 digital-tag ${useColorStatus(
            "LS_RECLAIMER"
          )}`}
          label="LS_RECLAIMER"
          text="M"
        />
      </div>
      <div className="pr-3 hpipecircle position-absolute single-text-45">
        <MotorCircleDigitalTag
          className={`ml-auto dot p-3 digital-tag ${useColorStatus(
            "LS_STACKER"
          )}`}
          label="LS_STACKER"
          text="M"
        />
      </div>

      <BlackContainer
        data={{
          label: "AS2008",
          useClass: "greenTxt position-absolute single-text-46",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "WT2001",
          useClass: "greenTxt position-absolute single-text-47",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BC10ACTSPD",
          }}
        />
        <BlackContainer
          data={{
            label: "KT2013",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>

      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "DE3_RAL"
        )} position-absolute single-text-49`}
        label="DE3_RAL"
        text="M"
      />
    </div>
  );
};
