import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
} from "../../../../index";

import {
  useColorStatus,
  useBorderTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";

export const U4RawMillOverviewVasavdatta = () => {
  return (
    <div className="U4-Raw-mill-Overview-Vasavdatta-L-3 w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute d-flex">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "LS-1",
            }}
          />
          <BlackContainer
            data={{
              label: "4E01HP_LT",
              useClass: "greenTxt mb-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "LS-2",
            }}
          />
          <BlackContainer
            data={{
              label: "4E02HP_LT",
              useClass: "greenTxt mb-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "LATERITE",
            }}
          />
          <BlackContainer
            data={{
              label: "4E03HP_LT",
              useClass: "greenTxt mb-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "BAUXITE",
            }}
          />
          <BlackContainer
            data={{
              label: "4E04HP_LT",
              useClass: "greenTxt mb-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-2 position-absolute d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("4E07WFM01")}`,
            secondCircleText: "M",
            secondCircleLabel: "4E07WFM01",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "4E07_1WFM01"
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "4E07_1WFM01",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("4E08WFM01")}`,
            secondCircleText: "M",
            secondCircleLabel: "4E08WFM01",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("4E09WFM01")}`,
            secondCircleText: "M",
            secondCircleLabel: "4E09WFM01",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-3 position-absolute"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "4E11BCM01_CAL"
          )}`,
          firstCircleText: "",
          firstCircleLabel: "4E11BCM01_CAL",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("4E11BCM01")}`,
          secondCircleText: "",
          secondCircleLabel: "4E11BCM01",
        }}
      />
      <div className="single-text-4 position-absolute d-flex border p-2">
        <div>
          <BlackContainer
            data={{
              label: "4E07WF_SI",
              useClass: "greenTxt mb-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E07WF_FI",
              useClass: "greenTxt mb-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E08WF_SI",
              useClass: "greenTxt mb-2 mt-3",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E08WF_FI",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4E07_1WF_SI",
              useClass: "greenTxt mb-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E07_1WF_FI",
              useClass: "greenTxt mb-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E09WF_SI",
              useClass: "greenTxt mb-2 mt-3",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E09WF_FI",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-5 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "4E15BE_JI1",
              useClass: "greenTxt mb-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E15BE_JI2",
              useClass: "greenTxt mb-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4E15BE_II1",
              useClass: "greenTxt mb-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E15BE_II2",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4E14BEM01")}`}
          label="4E14BEM01"
          text="M"
        />
      </div>
      <div className="single-text-7 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4E15BEM01")}`}
          label="4E15BEM01"
          text="M"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-8 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("4E14BCM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "4E14BCM01",
        }}
      />
      <div className="single-text-9 position-absolute">
        <BlackContainer
          data={{
            label: "4E14BE_JI",
            useClass: "greenTxt mb-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E14BE_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-10 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "CALIBRATION",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "VIBRATOR",
          }}
        />
      </div>
      <div className="single-text-11 position-absolute containerImage text-center">
        <BlackContainer
          data={{
            label: "4H52HP_LT",
            useClass: "greenTxt my-2",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "RAW MEAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SILO",
          }}
        />
      </div>
      <div className="single-text-12 position-absolute">
        <BlackContainer
          data={{
            label: "4H12BE_JI",
            useClass: "greenTxt mb-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4H12BE_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-13 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4H12BEM01")}`}
          label="4H12BEM01"
          text="M"
        />
      </div>
      <div className="single-text-14 position-absolute">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "REJECT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "HOPPER",
            }}
          />
          <BlackContainer
            data={{
              label: "4E23HP_WI",
              useClass: "greenTxt mb-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-15 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("4E23BCM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "4E23BCM01",
        }}
      />
      {/* <div className="gray-img position-absolute single-text-16"></div> */}
      <MotorCircleDigitalTag
        className={`ml-1 digital-tag position-absolute single-text-16 ${useImgColorStatus(
          "4E26DG"
        )}`}
        label="4E26DG"
      />
      <div className="single-text-17 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "4E14BE",
          }}
        />
      </div>
      <div className="single-text-18 position-absolute truck "></div>
      <div className="single-text-19 position-absolute d-flex flex-column">
        <MotorCircleDigitalTag
          className={`line-circle mb-2 digital-tag  ${useColorStatus(
            "4H13BLM01"
          )}`}
          label="4H13BLM01"
        />

        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus(
            "4H13_1BLM01"
          )}`}
          label="4H13_1BLM01"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-20 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("4E16BCM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "4E16BCM01",
        }}
      />
      {/* <div className="gray-img position-absolute single-text-21"></div> */}
      <MotorCircleDigitalTag
        className={`position-absolute single-text-21 digital-tag ${useImgColorStatus(
          "4E22DG"
        )}`}
        label="4E22DG"
      />
      <div className="single-text-22 position-absolute">
        <BlackContainer
          data={{
            label: "4E16BW_FI",
            useClass: "greenTxt mb-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E22DG_PT",
            useClass: "greenTxt mt-3",
            unit: "kg/CI",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute topImage"></div>
      <div className="single-text-24 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("4E37DRM01")}
          isClickable={true}
          tagLabel="4E37DRM01"
        />
      </div>
      <div className="single-text-25 position-absolute">
        <BlackContainer
          data={{
            label: "4E37DR_ZI",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E18SR_TI",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E18SR_PI",
            useClass: "greenTxt",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-26 position-absolute">
        <div className="containerImage text-center pt-2">
          <BlackContainer
            data={{
              label: "4E20HP_WI",
              useClass: "greenTxt mb-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-27 position-absolute box-1 bg-secondary text-center">
        <BlackContainer
          data={{
            label: "OFF_TRACK_ZI",
            useClass: "greenTxt mt-2",
            unit: "MM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "4E20M01_JI",
              useClass: "greenTxt mb-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20HS_PI_L",
              useClass: "greenTxt mb-2",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20PY_GAP_LFT",
              useClass: "greenTxt mb-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20PY_MV_VI",
              useClass: "greenTxt mb-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CALC_PI",
              useClass: "greenTxt mb-2",
              unit: "PAS",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20PY_WT_PT",
              useClass: "greenTxt mb-2",
              unit: "Kg/CI",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4E20M02_JI",
              useClass: "greenTxt mb-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20HS_PI_R",
              useClass: "greenTxt mb-2",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20PY_GAP_RHT",
              useClass: "greenTxt mb-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20PY_FX_VI",
              useClass: "greenTxt mb-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E20PY_MID_GAP",
              useClass: "greenTxt mb-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MEAN_PI",
              useClass: "greenTxt mb-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-29 position-absolute">
        <div className="img-41 mb-4 d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("4E20PYM01")}`}
            label="4E20PYM01"
            text=""
          />
        </div>
        <BlackContainer
          data={{
            label: "4E20M01_II",
            useClass: "greenTxt",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute">
        <div className="img-41 mb-1 d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("4E20PYM02")}`}
            label="4E20PYM02"
            text=""
          />
        </div>
        <BlackContainer
          data={{
            label: "4E20M02_II",
            useClass: "greenTxt",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-31 position-absolute">
        <BlackContainer
          data={{
            label: "4E18SR_SP",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E18SR_SI",
            useClass: "greenTxt mb-1",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E18SR_JI",
            useClass: "greenTxt mb-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E18SR_RPM",
            useClass: "greenTxt",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-32 position-absolute d-flex">
        <div className="text-center">
          <div className=" squareplustri pt-2">
            <BlackContainer
              data={{
                label: "4E19CY1_PI",
                useClass: "greenTxt mt-2",
                unit: "mmV",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <div className=" squareplustri pt-2">
            <BlackContainer
              data={{
                label: "4E19CY2_PI",
                useClass: "greenTxt mt-2",
                unit: "mmV",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-33 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "4E16BC_SI",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4E16BC_JI",
              useClass: "greenTxt mb-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4E18SRM01/UM",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-34 position-absolute">
        <BlackContainer
          data={{
            label: "4E18SR_RPM_DIFF",
            useClass: "greenTxt mb-1",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E18SR_V1_DE",
            useClass: "greenTxt mb-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E18SR_V2_NDE",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-35 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4E18SRM01")}`}
          label="4E18SRM01"
          text="M"
        />
      </div>
      <div className="single-text-36 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "4E19CY1_T1",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E19CY2_T1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute">
        <BlackContainer
          data={{
            label: "4E28FN_TI_DE",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E28FN_TI_NDE",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E28FN_V1_DE",
            useClass: "greenTxt mb-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E28FN_V2_NDE",
            useClass: "greenTxt mb-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute">
        <BlackContainer
          data={{
            label: "4E28DR_ZI",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E28FN_TI",
            useClass: "greenTxt mb-2 ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E28FN_PI",
            useClass: "greenTxt mb-2 ml-2",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-39 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "4E32DR",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("4E32DR")}
          isClickable={true}
          tagLabel="4E32DR"
        />
        <BlackContainer
          data={{
            label: "4E32DR_ZI",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-40 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "TO BH INLET",
          }}
        />
      </div>
      <div className="single-text-41 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "FROM PH FAN",
          }}
        />
      </div>
      <div className="single-text-42 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "TO CM",
          }}
        />
      </div>
      <div className="single-text-43 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("4S22SG")}
          isClickable={true}
          tagLabel="4S22SG"
        />
      </div>
      <div className="single-text-44 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("4E34SG")}
          isClickable={true}
          tagLabel="4E34SG"
        />
      </div>
      <div className="single-text-45 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("4E31DR")}
          isClickable={true}
          tagLabel="4E31DR"
        />
      </div>
      <div className="single-text-46 position-absolute">
        <BlackContainer
          data={{
            label: "4E31DR_ZI",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-47 position-absolute">
        <BlackContainer
          data={{
            label: "4E20SG1_ZI",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-48 position-absolute">
        <BlackContainer
          data={{
            label: "4E20SG2_ZI",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-49 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("4E35DRM01")}
          isClickable={true}
          tagLabel="4E35DRM01"
        />
      </div>
      <div className="single-text-50 position-absolute">
        <BlackContainer
          data={{
            label: "4E35DR_ZI",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-51 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4E20SGM01")}`}
          label="4E20SGM01"
          text="M"
        />
      </div>
      <div className="single-text-52 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4E20SGM02")}`}
          label="4E20SGM02"
          text="M"
        />
      </div>
      <div className="single-text-53 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("4E28DRM01")}
          isClickable={true}
          tagLabel="4E28DRM01"
        />
      </div>
      <div className="single-text-54 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4E28FNM01")}`}
          label="4E28FNM01"
          text="M"
        />
      </div>

      <div className="single-text-55 position-absolute">
        <BlackContainer
          data={{
            label: "4E28FN_SP",
            useClass: "greenTxt mb-1 ml-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E28FN_SI",
            useClass: "greenTxt mb-1",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4E28FN_JI",
            useClass: "greenTxt",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="single-text-56 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "4E35DR",
          }}
        />
      </div>

      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-3 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-4 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-5 position-absolute pipeVr"></div>
      <div className="pipe-6 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-7 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-8 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-9 position-absolute pipe dotted-pipe"></div>

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
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div class="yellowline-Vr position-absolute line-36 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-37 d-flex align-items-center justify-content-center pr-3">
        <i class="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>
      <div className="yellowline-Vr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Vr upArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr position-absolute line-51"></div>
      <div className="yellowline-Hr position-absolute line-52"></div>
      <div className="yellowline-Vr position-absolute line-53"></div>
      <div className="yellowline-Vr position-absolute line-54"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-55"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-56"></div>
      <div className="yellowline-Vr position-absolute line-57"></div>
      <div className="yellowline-Hr position-absolute line-58"></div>
      <div className="yellowline-Hr position-absolute line-59"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-60"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Hr position-absolute line-62"></div>
      <div className="yellowline-Vr position-absolute line-63"></div>
      <div className="yellowline-Hr position-absolute line-64"></div>
      <div className="yellowline-Vr downArrow position-absolute line-65"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-66"></div>
      <div className="yellowline-Vr position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Vr position-absolute line-69"></div>
      <div className="yellowline-Vr position-absolute line-70"></div>
      <div className="yellowline-Vr position-absolute line-71"></div>
      <div className="yellowline-Hr position-absolute line-72"></div>
      <div className="yellowline-Vr downArrow position-absolute line-73"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-74"></div>
      <div className="yellowline-Vr downArrow position-absolute line-75"></div>
    </div>
  );
};
