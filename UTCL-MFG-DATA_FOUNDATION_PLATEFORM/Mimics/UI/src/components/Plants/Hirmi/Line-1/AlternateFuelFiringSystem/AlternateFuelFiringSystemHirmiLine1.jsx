import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import { useColorStatus } from "../../../../../utils";

export const AlternateFuelFiringSystemHirmiLine1 = () => {
  return (
    <div className="alternate-fuel-firing-system-hirmi-line-1 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex justify-content-center align-items-center">
        <div className="middle-sqr-container d-flex flex-column justify-content-center align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "AD01 BELT DRIFT",
            }}
          />
          <BlackContainer
            data={{
              label: "AFR_AD01_TPH_IND",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TPH",
            }}
          />
        </div>
      </div>
      <div className="roller-jcb single-text-2 position-absolute"></div>
      <div className="single-text-3 position-absolute  d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "AFR FLOWRATE SETPOINT",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_AD01_FLOW_Y1_1_PID_SPM",
            useClass: "greenTxt mb-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_AD01_TPH",
            useClass: "greenTxt mb-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-4 position-absolute  d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "VFD SETPOINT",
          }}
        />
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "J1U34_OPSP",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1U34_S",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1U34_I",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-5 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "SHREDDER RUNNING HRS",
          }}
        />
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "TODAY",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "YESTERDAY",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "SHREDDER_RUNNING_HOURES",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SHREDDER_RUNNING_HOURES_YESTERDAY",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "COUNTER FOR DOSING BELT",
          }}
        />
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "TODAY",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "YESTERDAY",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "AFR_DB_TODAY_COUNTER",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AFR_DB_YESTERDAY_COUNTER",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-7 position-absolute  d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "NaOH_Feed_VFD"
          )} mb-2`}
          label="NaOH_Feed_VFD"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "NaOH VFD",
          }}
        />
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "NaOH_Feed_VFD_Y1",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NaOH_Feed_VFD_S1",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NaOH_Feed_VFD_I1",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="single-text-8 position-absolute pipe dotted-pipe"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("J1U34")}`,
          firstCircleLabel: "J1U34",
          firstCircleText: "M",
        }}
      />
      <div className=""></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("J1DB1BC1")}`,
          secondCircleText: "M",
          secondCircleLabel: "J1DB1BC1",
        }}
      />
      <div className="squareplustri position-absolute single-text-10"></div>
      <div className="single-text-11 position-absolute hpipecircle">
        <span className="grayDot"></span> <span className="grayDot"></span>
      </div>
      <PipeWithCircles
        parentDivClass="single-text-12 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("J1J25")}`,
          secondCircleText: "M",
          secondCircleLabel: "J1J25",
        }}
      />
      <div className="single-text-13 position-absolute">
        <div className="box-1 bg-secondary"></div>
      </div>
      <div className="single-text-14 position-absolute gray-green-red-img gray-img"></div>
      <div className="single-text-15 position-absolute  d-flex">
        <div className="d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("J1P30")}`}
            label="J1P30"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "J1P30",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("J1P42")}`}
            label="J1P42"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "J1P42",
            }}
          />
        </div>
      </div>
      <div className="single-text-16 position-absolute d-flex ">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="single-text-17 position-absolute d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TO KILN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TO CALC",
          }}
        />
      </div>
      <div className="single-text-18 position-absolute d-flex">
        <div className="d-flex flex-column">
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useColorStatus("J1K40_P9")}`}
            label="J1K40_P9"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "J1K41",
            }}
          />
          <div className="d-flex justify-content-between align-items-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CMD",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ml-1 ${useColorStatus(
                "J1K41_CMD1_IND"
              )}`}
              label="J1K41_CMD1_IND"
              text="X"
            />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "J1K43",
            }}
          />
          <div className="d-flex justify-content-between align-items-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CMD",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ml-1 ${useColorStatus(
                "J1K43_CMD1_IND"
              )}`}
              label="J1K43_CMD1_IND"
              text="X"
            />
          </div>
        </div>
      </div>
      <div className="single-text-19 position-absolute d-flex flex-column align-items-center">
        <BlackContainer
          data={{
            label: "J1K39_T1",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
            "J1K39_SEL"
          )}`}
          label="J1K39_SEL"
          text="S"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1K39",
          }}
        />
      </div>
      <div className="single-text-20 position-absolute d-flex flex-column align-items-center">
        <BlackContainer
          data={{
            label: "J1DB1BC1_I1",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RBC CURRENT",
          }}
        />
      </div>
      <div className="single-text-21 position-absolute d-flex flex-column align-items-center">
        <BlackContainer
          data={{
            label: "AFR_J1DB1BC1_W1",
            useClass: "greenTxt mb-1",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "AFR FEED BELT TPH",
          }}
        />
      </div>
      <div className="single-text-22 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1J25",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("J1L01_L1")}`}
          label="J1L01_L1"
          text="L"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1L01_L1",
          }}
        />
      </div>
      <div className="single-text-24 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1U34",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
    </div>
  );
};
