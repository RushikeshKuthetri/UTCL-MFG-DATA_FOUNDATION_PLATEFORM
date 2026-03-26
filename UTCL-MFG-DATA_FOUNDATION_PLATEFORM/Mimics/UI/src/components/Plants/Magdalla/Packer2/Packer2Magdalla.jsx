import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../index";
import { useColorStatus } from "../../../../utils";

export const Packer2Magdalla = () => {
  return (
    <div className="Packer2Magdalla position-relative w-100 h-100">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="containerImage p-2 position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SILO NO. 1 CAPACITY 4000MT",
          }}
        />
      </div>
      <div className="containerImage p-2 position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SILO NO. 4 CAPACITY 4000MT",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-3">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H124_P2_RD_Run")}`}
          text="M"
          label="H124_P2_RD_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-124",
          }}
        />
        <BlackContainer
          data={{
            label: "H124_P2_RD_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="pipe dotted-pipe position-absolute single-text-4" />
      <div className="text-center position-absolute single-text-5">
        <div className="pipeVr pl-2 position-relative pipe-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("H112_1_Run")}`}
            text="M"
            label="H112_1_Run"
          />
        </div>
        <div className="pipeVr position-relative pipe-2"></div>
        <div className="pipeVr text-center position-relative pipe-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ROTO PACKER",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-6">
        <div className="pipeHr position-relative">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("H102_TR_SC_Run")}`}
            text="M"
            label="H102_TR_SC_Run"
          />
        </div>
        <div className="triangle-with-squares"></div>
      </div>
      <div className="roller-jcb position-absolute single-text-7"></div>
      <div className="roller-jcb position-absolute single-text-8"></div>
      <div className="position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-128.1",
          }}
        />
        <div className="truck mt-3 ml-4"></div>
      </div>
      <div className="position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "H-128.2",
          }}
        />
        <div className="truck mt-3"></div>
      </div>
      <div className="loadingtruck position-absolute single-text-11"></div>
      <div className="d-flex position-absolute single-text-12">
        <div className="pt-1">
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("H121_DCF_Run")}`}
              label="H121_DCF_Run"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-121",
            }}
          />
          <BlackContainer
            data={{
              label: "H121_DCF_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "AI_h121_dp1",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex justify-content-center pb-1 align-items-end squareplustri">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("H119_DC_SC_Run")}`}
              label="H119_DC_SC_Run"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-13">
        <div className="pt-1">
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("H122_DCF_Run")}`}
              label="H122_DCF_Run"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-122",
            }}
          />
          <BlackContainer
            data={{
              label: "H122_DCF _AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-center align-items-end pb-1 squareplustri">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("H122_1_DC_Run")}`}
            label="H122_1_DC_Run"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("H126_3_Run")}`,
          secondCircleLabel: "H126_3_Run",
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
          firstCircleClass: "dot  grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("H131_BC_Run")}`,
          secondCircleLabel: "H131_BC_Run",
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
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        secondCircle={{
          secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
            "ISC15_MCC6_Run"
          )}`,
          secondCircleLabel: "ISC15_MCC6_Run",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-21">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("H14_1_BL_Run")}`}
            text="M"
            label="H14_1_BL_Run"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-14.1",
          }}
        />
        <BlackContainer
          data={{
            label: "H14_1_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("H14_4_BL_Run")}`}
            text="M"
            label="H14_4_BL_Run"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-14.4",
          }}
        />
        <BlackContainer
          data={{
            label: "H14_4_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("H96_AS_BL_Run")}`}
            text="M"
            label="H96_AS_BL_Run"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-96",
          }}
        />
        <BlackContainer
          data={{
            label: "H96_AS_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "H96_1_AS_BL_Run"
            )}`}
            text="M"
            label="H96_1_AS_BL_Run"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-96.1",
          }}
        />
        <BlackContainer
          data={{
            label: "H96_1_AS_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "H96_2_AS_BL_Run"
            )}`}
            text="M"
            label="H96_2_AS_BL_Run"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-96.2",
          }}
        />
        <BlackContainer
          data={{
            label: "H96_2_AS_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("H100_BE_Run")}`}
          text="M"
          label="H100_BE_Run"
        />
        <div className={`square px-3 mt-1 grey-color`} />
      </div>
      <div className="text-center position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-100",
          }}
        />
        <BlackContainer
          data={{
            label: "H100_BE _AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-102",
          }}
        />
        <BlackContainer
          data={{
            label: "H102_TR_SC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-29">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("H120_DC_Run")}`}
          label="H120_DC_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-120",
          }}
        />
        <BlackContainer
          data={{
            label: "H120_DC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("H14_6_BL_Run")}`}
            text="M"
            label="H14_6_BL_Run"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-14.6",
          }}
        />
        <BlackContainer
          data={{
            label: "H14_6_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-31">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("H120_1_DC_Run")}`}
          label="H120_1_DC_Run"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-120.1",
          }}
        />
        <BlackContainer
          data={{
            label: "H120_1_DC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-32">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("H124A_BCD_Run")}`}
          label="H124A_BCD_Run"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-124A",
          }}
        />
        <BlackContainer
          data={{
            label: "H124A_BCD_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-33">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("H130_MLB_Run")}`}
          label="H130_MLB_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-130",
          }}
        />
        <BlackContainer
          data={{
            label: "H130_MLB_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-34">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("H122_2_DC_Run")}`}
          label="H122_2_DC_Run"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-122.2",
          }}
        />
        <BlackContainer
          data={{
            label: "H122_2_DC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-122.1",
          }}
        />
        <BlackContainer
          data={{
            label: "H122_1_DC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-119",
          }}
        />
        <BlackContainer
          data={{
            label: "H119_DC_SC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-112.1",
          }}
        />
        <BlackContainer
          data={{
            label: "H112_1_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-112",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_p2_pr_tx",
            useClass: "greenTxt mt-1",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-126.3",
          }}
        />
        <BlackContainer
          data={{
            label: "H126_3_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H-131",
          }}
        />
        <BlackContainer
          data={{
            label: "H131_BC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ISC-15",
          }}
        />
        <BlackContainer
          data={{
            label: "ISC15_MCC6_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-42",
          label: "H-19",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-43",
          label: "H-87.1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-44",
          label: "H-127",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "H-93.1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "H-128.4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-47",
          label: "H-128.3",
        }}
      />
    </div>
  );
};
