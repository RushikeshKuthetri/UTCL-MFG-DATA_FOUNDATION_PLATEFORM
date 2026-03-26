import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../index";
import { useColorStatus } from "../../../../utils";

export const Packer1Magdalla = () => {
  return (
    <div className="MagdallaPacker w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SILO NO .2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CAPACITY",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "4000MT",
            }}
          />
        </div>
        <div class="pipeVr pipe-1"></div>
        <div class="pipeVr pipe-2"></div>
        <div class="pipeVr pipe-3"></div>
        <div className="yellowline-Hr  position-absolute line-1"></div>
        <div className="yellowline-Vr  position-absolute line-2"></div>
      </div>
      <div className=" position-absolute single-text-2">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SILO NO .3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CAPACITY",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "4000MT",
            }}
          />
        </div>
        <div class="pipeVr pipe-2"></div>
        <div className="yellowline-Hr  position-absolute line-1"></div>
        <div className="yellowline-Vr  position-absolute line-2"></div>
      </div>
      <div className=" position-absolute single-text-3">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SILO NO .4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CAPACITY",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "4000MT",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-4 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H14_2_BL_Run")} `}
            label="H14_2_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-14.2",
            }}
          />
          <BlackContainer
            data={{
              label: "H14_2_BL_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H14_3_BL_Run")} `}
            label="H14_3_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-14.3",
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
      </div>
      <div className=" position-absolute single-text-5 d-flex">
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H46_4_BL_S2_Run")} `}
            label="H46_4_BL_S2_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-46.4",
            }}
          />
          <BlackContainer
            data={{
              label: "H46_4_BL_S2_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H46_AS_BL_Run")} `}
            label="H46_AS_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-46",
            }}
          />
          <BlackContainer
            data={{
              label: "H46_AS_BL_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H46_1_AS_BL_Run")} `}
            label="H46_1_AS_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-46.1",
            }}
          />
          <BlackContainer
            data={{
              label: "H46_1_AS_BL_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H46_2_AS_BL_Run")} `}
            label="H46_2_AS_BL_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-46.2",
            }}
          />
          <BlackContainer
            data={{
              label: "H46_2_AS_BL_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H46_6_BL_S2_Run")} `}
            label="H46_6_BL_S2_Run"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-46.6",
            }}
          />
          <BlackContainer
            data={{
              label: "H46_6_BL_S2_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipe  position-absolute single-text-6"></div>
      <div className=" position-absolute single-text-7 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-50",
            }}
          />
          <BlackContainer
            data={{
              label: "H50_BE_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag  ${useColorStatus("H50_BE_Run")} `}
          label="H50_BE_Run"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-8">
        <PipeWithCircles parentDivClass="hpipecircle" />
      </div>
      <div className=" position-absolute single-text-9">
        <PipeWithCircles parentDivClass="hpipecircle" />
      </div>
      <div className=" position-absolute single-text-10">
        <PipeWithCircles parentDivClass="hpipecircle" />
      </div>
      <div className="triangle-with-squares position-absolute single-text-11 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag  ${useColorStatus("H52_TR_SC_Run")} `}
          label="H52_TR_SC_Run"
          text="M"
        />
      </div>
      <div className="img-110 position-absolute single-text-12"></div>
      <div className="position-absolute single-text-13">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
          text={{ useClass: "text-dark mx-auto", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "H80_MLB_Run"
            )}`,
            secondCircleLabel: "H80_MLB_Run",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
          text={{ useClass: "text-dark mx-auto", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "H81_BC_Run"
            )}`,
            secondCircleLabel: "H81_BC_Run",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "H-178.1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "H178_1_F_Run"
            )}`,
            secondCircleLabel: "H178_1_F_Run",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "H78_1_FF_Run"
            )}`,
            firstCircleText: "E",
            firstCircleLabel: "H78_1_FF_Run",
          }}
          text={{ useClass: "text-dark mx-auto", label: "H-78.1" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
          text={{ useClass: "text-dark mx-auto", label: "H-78.2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "H78_2_FF_Run"
            )}`,
            secondCircleText: "E",
            secondCircleLabel: "H78_2_FF_Run",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <div className="hpipecircle">
          <span className="dot grey-color"></span>
          <span className="dot grey-color"></span>
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <div className="hpipecircle">
          <span className="dot grey-color"></span>
          <span className="dot grey-color"></span>
        </div>
      </div>

      <div className="truck position-absolute single-text-21"></div>
      <div className="truck position-absolute single-text-22"></div>
      <div className="truck position-absolute single-text-23"></div>
      <div className="truck position-absolute single-text-24"></div>
      <div className=" position-absolute single-text-25 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-80",
            }}
          />
          <BlackContainer
            data={{
              label: "H80_MLB _AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-81",
            }}
          />
          <BlackContainer
            data={{
              label: "H81_BC _AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div>
          <div className="img-97 mt-3 align-items-end justify-content-center d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ${useColorStatus("H70_DCF_Run")} `}
              label="H70_DCF_Run"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-70",
            }}
          />
          <BlackContainer
            data={{
              label: "H70_DCF",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1"></div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-27 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H68_DC_SC _Run")} `}
            label="H68_DC_SC _Run"
            text="M"
          />
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "H-68",
              }}
            />
            <BlackContainer
              data={{
                label: "H68_DC_SC _AMP",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H69_DCS_Run")} `}
            label="H69_DCS_Run"
            text="M"
          />
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "H-69",
              }}
            />
            <BlackContainer
              data={{
                label: "H69_DCS_AMP",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H69_1_DCS_Run")} `}
            label="H69_1_DCS_Run"
            text="M"
          />
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "H-69.1",
              }}
            />
            <BlackContainer
              data={{
                label: "H69_1_DCS _AMP",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div>
          <div className="img-97 mt-3 align-items-end justify-content-center d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ${useColorStatus("H71_DCF_Run")} `}
              label="H71_DCF_Run"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H-71",
            }}
          />
          <BlackContainer
            data={{
              label: "H71_DCF _AMP ",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1"></div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-29 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H71_1_DCS_Run")} `}
            label="H71_1_DCS_Run"
            text="M"
          />
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "H-71.1",
              }}
            />
            <BlackContainer
              data={{
                label: "H71_1_DCS_AMP",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H71_2_DCR_Run")} `}
            label="H71_2_DCR_Run"
            text="M"
          />
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "H-71.2",
              }}
            />
            <BlackContainer
              data={{
                label: "H71_2_DCR_AMP",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-52",
          }}
        />
        <BlackContainer
          data={{
            label: "H52_TR_SC _AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-57",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <MotorCircleDigitalTag
          className={`dot digital-tag  ${useColorStatus("H14_5_BL_Run")} `}
          label="H14_5_BL_Run"
          text="M"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-14.5",
          }}
        />
        <BlackContainer
          data={{
            label: "H14_5_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <PipeWithCircles parentDivClass="hpipecircle" />
      </div>
      <div className="position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-72",
          }}
        />
        <BlackContainer
          data={{
            label: "H72_P1_RD_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag  ${useColorStatus("H72_P1_RD_Run")} `}
            label="H72_P1_RD_Run"
            text="M"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "NA",
          useClass: "greenTxt mt-1 position-absolute single-text-34",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-35">
        <PipeWithCircles parentDivClass="hpipecircle" />
      </div>
      <div className="position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-76.1",
          }}
        />
        <div className="hpipecircle">
          <span className="dot grey-color"></span>
          <span className="dot grey-color"></span>
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H-76.2",
          }}
        />
        <div className="hpipecircle">
          <span className="dot grey-color"></span>
          <span className="dot grey-color"></span>
        </div>
      </div>

      <div className="pipeVr pipe-4 position-absolute"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
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
    </div>
  );
};
