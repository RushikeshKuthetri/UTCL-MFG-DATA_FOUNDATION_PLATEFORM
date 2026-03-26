import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../index";
import { useColorStatus } from "../../../../utils";

export const Packer3Magdalla = () => {
  return (
    <div className="Packer3Magdalla w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("H172_RBC_Run")} digital-tag`,
          firstCircleLabel: "H172_RBC_Run",
        }}
        text={{ useClass: "text-dark", label: "H180" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus("H180_BC_Run")} digital-tag`,
          secondCircleLabel: "H180_BC_Run",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus(
            "H176_1_BD_Run"
          )} digital-tag`,
          firstCircleLabel: "H176_1_BD_Run",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "H176.1" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "H178.2" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus(
            "H178_2_F_Run"
          )} digital-tag`,
          secondCircleLabel: "H178_2_F_Run",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "H178.1" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus(
            "H178_1_F_Run"
          )} digital-tag`,
          secondCircleLabel: "H178_1_F_Run",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus("H182_BC_Run")} digital-tag`,
          secondCircleLabel: "H182_BC_Run",
          secondCircleText: "",
        }}
      />
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="pipeVr position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr position-absolute pipe-25"></div>
      <div className="yellowline-Vr position-absolute pipe-26"></div>
      <div className="yellowline-Hr position-absolute pipe-27"></div>
      <div className="yellowline-Vr position-absolute pipe-28"></div>
      <div className="yellowline-Hr position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Hr position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Hr position-absolute pipe-33"></div>
      <div className="yellowline-Vr  position-absolute pipe-34"></div>
      <div className="yellowline-Vr  position-absolute pipe-35"></div>
      <div className="yellowline-Vr  position-absolute pipe-36"></div>
      <div className="yellowline-Hr  position-absolute pipe-37"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr  position-absolute pipe-39"></div>
      <div className="yellowline-Hr  position-absolute pipe-40"></div>

      <div className="position-absolute single-text-1 containerImage text-center p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CEMENT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SILO NO-3",
          }}
        />
      </div>
      <div className="position-absolute single-text-2 containerImage text-center"></div>
      <div className="position-absolute single-text-3 img-110"></div>
      <div className=" position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "ROTO PACKER",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 containerImage text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H172",
          }}
        />
        <BlackContainer
          data={{
            label: "H172_RBC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-6 roller-jcb"></div>
      <div className="position-absolute single-text-7 d-flex flex-column">
        <div className="truck ml-3"></div>
        <div className="truck"></div>
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-8"></div>
      <div className="position-absolute single-text-9 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("H46_5_BL_Run")} mt-1`}
            label="H46_5_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H46.5",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "H46_3_BL_S3_Run"
            )} mt-1`}
            label="H46_3_BL_S3_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H46.3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "H146_AS_BL_Run"
            )} mt-1`}
            label="H146_AS_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H146",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "H147_AS_BL_Run"
            )} mt-1`}
            label="H147_AS_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H147",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <BlackContainer
          data={{
            label: "H46_5_BL_AMP",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "H46_3_BL_S3_AMP",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "H146_AS_BL_AMP",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "H147_AS_BL_AMP",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H150_BE_Run")}`}
          label="H150_BE_Run"
        />
      </div>
      <div className="position-absolute single-text-12">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H150_AUX_BE_Run")} `}
          label="H150_AUX_BE_Run"
        />
      </div>
      <div className="position-absolute single-text-13">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H152_RS_Run")}`}
          label="H152_RS_Run"
        />
      </div>
      <div className="position-absolute single-text-14 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H14_3_BL_Run")}`}
          label="H14_3_BL_Run"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H14.3",
          }}
        />
        <BlackContainer
          data={{
            label: "H14_3_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H172_1_BCF_Run")}`}
          label="H172_1_BCF_Run"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H172A",
          }}
        />
        <BlackContainer
          data={{
            label: "H172_1_BCF_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H150",
          }}
        />
        <BlackContainer
          data={{
            label: "H150_BE_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H150AUX",
          }}
        />
        <BlackContainer
          data={{
            label: "H150_AUX_BE_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H152",
          }}
        />
        <BlackContainer
          data={{
            label: "H152_RS_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H162",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_p3_pr_tx",
            useClass: "greenTxt mt-1",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("P3_LEVEL_SW_Run")}`}
          label="P3_LEVEL_SW_Run"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-21 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H164_AS_BL_Run")}`}
          label="H164_AS_BL_Run"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H164",
          }}
        />
        <BlackContainer
          data={{
            label: "H164_AS_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H176_2_BD_Run")}`}
          label="H176_2_BD_Run"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H176.2",
          }}
        />
        <BlackContainer
          data={{
            label: "H176_2_BD_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 text-center">
        <BlackContainer
          data={{
            label: "H176_1_BD_AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H182",
          }}
        />
        <BlackContainer
          data={{
            label: "H182_BC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 text-center">
        <BlackContainer
          data={{
            label: "AI_h170_dp1",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-1">
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("H170_DCF_Run")}`}
                label="H170_DCF_Run"
                text="M"
              />
            </div>
          </div>
          <div className="squareplustri d-flex align-items-end justify-content-center  "></div>
        </div>
      </div>
      <div className="position-absolute single-text-26 text-center">
        <BlackContainer
          data={{
            label: "H170_DCF_AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H180",
          }}
        />
        <BlackContainer
          data={{
            label: "H180_BC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO PACKER 1",
          }}
        />
      </div>
    </div>
  );
};
