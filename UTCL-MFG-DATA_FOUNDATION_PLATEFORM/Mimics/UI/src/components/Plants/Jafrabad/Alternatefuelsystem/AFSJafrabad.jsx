import { useColorStatus } from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  TransparentBoxWithGate,
  MotorCircleDigitalTag,
} from "../../../index";
export const AFSJafrabad = () => {
  return (
    <div className="AFSjafrabad w-100 h-100 position-relative">
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
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-1"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "261WF150" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "261BC610" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-3"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "261DPC700" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
          secondCircleText: "M",
        }}
      />

      <div className="squareplustri text-center pt-2 position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER 261FY110",
          }}
        />
      </div>
      <div className="squareplustri text-center pt-2 position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Calciner 6th Floor",
          }}
        />
      </div>
      <div className="position-absolute single-text-6">
        <div className="loadingtruck"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "261TI100",
          }}
        />
      </div>

      <div className="position-absolute single-text-7">
        <TransparentBoxWithGate
          isClickable={false}
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-8">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("261WF150")}`}
          label="261WF150"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useColorStatus(
            "_261BC700_DISH_CHUTE_BLK"
          )}`}
          label="_261BC700_DISH_CHUTE_BLK"
          text="G"
        />
      </div>
      <div className="border d-flex position-absolute single-text-9">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark border-bottom ml-1",
              label: "DRIVE-3 (2,3,4)",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D3_U01I01",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D3_U01S01",
              useClass: "greenTxt mt-1 ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D3_U01S11_SPM",
              useClass: "greenTxt mt-1 ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border-left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark border-bottom ml-1",
              label: "DRIVE-2 (1,5)",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D2_U01I01",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D2_U01S01",
              useClass: "greenTxt mt-1 ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D2_U01S11_SPM",
              useClass: "greenTxt mt-1 ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border-left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark border-bottom ml-1",
              label: "DRIVE-1 (6,7)",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D1_U01I01",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D1_U01S01",
              useClass: "greenTxt mt-1 ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "261FY110D1_U01S11_SPM",
              useClass: "greenTxt mt-1 ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-10">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SC-1 DRIVE READY",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "_261WF150_NEW_SC_IND"
            )}`}
            label="_261WF150_NEW_SC_IND"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SC-1 RUN FB",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "_261WF150_NEW_SC_RUN _IND"
            )}`}
            label="_261WF150_NEW_SC_RUN _IND"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "Screw-1 SP",
            }}
          />
          <BlackContainer
            data={{
              label: "SODA_ASH_SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "Screw-1 Amp",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_SC_1_A01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AFR CO TRIP COUNT",
            }}
          />
          <BlackContainer
            data={{
              label: "AFR_CO_TRIP_COUNT",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AFR WF OVERLOAD",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "261WF150_M01C44_ALARM"
            )}`}
            label="261WF150_M01C44_ALARM"
            text="X"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SYSTEM IDLE TRIP",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("AFGRP01INT01")}`}
            label="AFGRP01INT01"
          />
        </div>
        <MotorCircleDigitalTag
          className={`square mt-4 ml-auto digital-tag ${useColorStatus(
            "AFR PID IND"
          )}`}
          label="AFR PID IND"
        />
      </div>
      <div className="text-center position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "D-2 SPD CTRL PID",
          }}
        />
        <BlackContainer
          data={{
            label: "261FY110D2_U01S11_SPA",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "D-3 SPD CTRL PID",
          }}
        />
        <BlackContainer
          data={{
            label: "261FY110D3_U01S11_SPA",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AFR NCV",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_NCV",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PC COAL NCV",
          }}
        />
        <BlackContainer
          data={{
            label: "PC_COAL_NCV",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WF SP",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_A01F11_SPA",
              useClass: "greenTxt ml-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WF TPH FB",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_A01F01",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WF Amp FB",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_A01I01",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WF SPD FB",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_A01S01",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WF Run Hrs",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_RUNHRS",
              useClass: "greenTxt ml-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "261WF150_SC_A01I01",
            useClass: "greenTxt ml-auto mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COLLECTING SCREW MAUAL SP",
            }}
          />
          <BlackContainer
            data={{
              label: "COLLECTING SCREW_SP",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COLLECTING SCREW ACTUAL SP",
            }}
          />
          <BlackContainer
            data={{
              label: "COLLECTING_SCREW_ACTUAL_SP",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "261BC700_M01I01",
            useClass: "greenTxt ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "261RF710",
            }}
          />
          <BlackContainer
            data={{
              label: "261RF710_M01I01",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AFR CHUTE TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_CHUTE_6FL_TEMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "D2_SPD_CNTRL_MIN_OUT",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D2_SPD_CNTRL_MAX_OUT",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D3_SPD_CNTRL_MIN_OUT",
            useClass: "greenTxt mt-4",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D3_SPD_CNTRL_MAX_OUT",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_WF_TPH",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "261BC610_U01S01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "261BC610_U01I01",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "261BC610_U01S11_SPM",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "AFR_DPC_TMP1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_DPC_TMP2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_DPC_TMP3",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_DPC_TMP4",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_DPC_TMP5",
            useClass: "greenTxt mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Chute draft-1",
          }}
        />
        <BlackContainer
          data={{
            label: "261XA910_N02P01",
            useClass: "greenTxt ml-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Chute draft-2",
          }}
        />
        <BlackContainer
          data={{
            label: "RF710_CHUTE_DRAUGHT",
            useClass: "greenTxt ml-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Chute Temp",
          }}
        />
        <BlackContainer
          data={{
            label: "261XA910_N01T01",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "_261RF711_CURRENT",
          useClass: "greenTxt position-absolute single-text-26",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};
