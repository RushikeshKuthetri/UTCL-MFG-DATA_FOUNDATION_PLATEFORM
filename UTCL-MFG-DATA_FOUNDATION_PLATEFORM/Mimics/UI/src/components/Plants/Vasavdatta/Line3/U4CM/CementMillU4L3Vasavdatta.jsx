import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
} from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const CementMillU4L3Vasavdatta = () => {
  return (
    <div className="u4-cement-mill-vasavdatta-l3 w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute d-flex">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "GYP SUM",
            }}
          />
          <BlackContainer
            data={{
              label: "4N02HP_LT",
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
              label: "POZZOLANA",
            }}
          />
          <BlackContainer
            data={{
              label: "4N03HP_LT",
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
              label: "CLINKER",
            }}
          />
          <BlackContainer
            data={{
              label: "4N01HP_LT",
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
            secondCircleClass: `dot digital-tag ${useColorStatus("4N05WF")}`,
            secondCircleText: "M",
            secondCircleLabel: "4N05WF",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("4N06WF")}`,
            secondCircleText: "M",
            secondCircleLabel: "4N06WF",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("4N04WF")}`,
            firstCircleText: "M",
            firstCircleLabel: "4N04WF",
          }}
          secondCircle={{ secondCircleClass: "dot grey-color" }}
        />
      </div>
      <div className="single-text-3 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "4N05WF_SI",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4NO5WF_FI",
              useClass: "greenTxt mb-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4N06WF_SI",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N06WF_FI",
              useClass: "greenTxt mb-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4N04WF_SI",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N04WF_FI",
              useClass: "greenTxt mb-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-4 position-absolute">
        <BlackContainer
          data={{
            label: "4N39SPRS_II",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N39FN_JI",
            useClass: "greenTxt mb-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N39FN_VI_DE",
            useClass: "greenTxt mb-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N39FN_VI_NDE",
            useClass: "greenTxt mb-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N39FN/OP_SP",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-5 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("4N08BC")}`,
          secondCircleText: "M",
          secondCircleLabel: "4N08BC",
        }}
      />
      <div className="single-text-6 position-absolute containerImage text-center">
        <BlackContainer
          data={{
            label: "4N37SR_SP",
            useClass: "greenTxt mt-1 mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N37SR_SI",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N37SR_JI",
            useClass: "greenTxt mb-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N38CY5_PT",
            useClass: "greenTxt mb-1",
            unit: "mmv",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N38CY5_T1",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-7 position-absolute d-flex">
        <div className="text-center">
          <div className=" squareplustri pt-2">
            <BlackContainer
              data={{
                label: "4N38CY1_PT",
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
                label: "4N38CY2_PT",
                useClass: "greenTxt mt-2",
                unit: "mmV",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-8 position-absolute d-flex">
        <div className="text-center">
          <div className=" squareplustri pt-2">
            <BlackContainer
              data={{
                label: "4N38CY3_PT",
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
                label: "4N38CY4_PT",
                useClass: "greenTxt mt-2",
                unit: "mmV",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-9 position-absolute d-flex">
        <div className="containerImage"></div>
        <div className="containerImage text-center">
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("K2P37")}`}
            label="K2P37"
          />{" "}
        </div>
        <div className="containerImage"></div>
      </div>
      <div className="single-text-10 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "4N47RA1"
          )}`}
          label="4N47RA1"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "4N47RA2"
          )}`}
          label="4N47RA2"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "4N47RA3"
          )}`}
          label="4N47RA3"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-11 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("4N47MFC")}`,
          secondCircleText: "M",
          secondCircleLabel: "4N47MFC",
        }}
      />
      <div className="single-text-12 position-absolute d-flex">
        <div>
          {" "}
          <BlackContainer
            data={{
              label: "4N47BF_TI",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N47BF_P1",
              useClass: "greenTxt mb-2",
              unit: "mmV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4N47BF_P3",
              useClass: "greenTxt mb-2",
              unit: "kg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N47BF_DP",
              useClass: "greenTxt mb-2",
              unit: "mmV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          {" "}
          <BlackContainer
            data={{
              label: "4N47BF_T2",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N47BF_P2",
              useClass: "greenTxt mb-2",
              unit: "mmV",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-13 position-absolute drumContainer text-center">
        <BlackContainer
          data={{
            label: "4N32M01_JI",
            useClass: "greenTxt mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N32GB_VI",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-14 position-absolute">
        <BlackContainer
          data={{
            label: "4N54BEM01_JI",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N54BEM01_II",
            useClass: "greenTxt mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-15 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "4N48FN_SI",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N48FN_JI",
              useClass: "greenTxt mb-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N48FN_TI_NDE",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4N48FN_TI_DE",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N48FN_VI_NDE",
              useClass: "greenTxt mb-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4N48FN_VI_DE",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-16 position-absolute d-flex border p-2">
        <div>
          <MotorCircleDigitalTag
            className={`dot p-2 mb-1 digital-tag ${useColorStatus("4N68FN")}`}
            label="4N68FN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-2 mb-1 digital-tag ${useColorStatus("4N69FN")}`}
            label="4N69FN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("4N70FN")}`}
            label="4N70FN"
            text="M"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "4P01_LT",
              useClass: "greenTxt mb-2",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4P02_LT",
              useClass: "greenTxt mb-2",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "4P03_LT",
              useClass: "greenTxt",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-17 position-absolute">
        <BlackContainer
          data={{
            label: "4N32BM_PI",
            useClass: "greenTxt",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TOTAL_TPH",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N32BM_MTR_DE_VI",
            useClass: "greenTxt mt-3",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N32BM_MTR_NDE_VI",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-18 position-absolute">
        <BlackContainer
          data={{
            label: "4N35BEM01_JI",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N35BEM01_II",
            useClass: "greenTxt mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-19 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4N54BE")}`}
          label="4N54BE"
          text="M"
        />
      </div>
      <div className="single-text-20 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("4N48FN")}`}
            label="4N48FN"
            text="M"
          />
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-21"></div>
      <div className="single-text-22 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4N35BE")}`}
          label="4N35BE"
          text="M"
        />
      </div>
      <div className="single-text-23 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "FLY ASH SILO",
          }}
        />
        <BlackContainer
          data={{
            label: "4N2SILO",
            useClass: "greenTxt my-2",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "4N2BEM01_JI",
          }}
        />
        <BlackContainer
          data={{
            label: "4N2BEM01",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-24 position-absolute img-41 d-flex align-items-center justify-content-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag p-2 ${useColorStatus("4N32M01")}`}
          label="4N32M01"
        />
      </div>
      <div className="single-text-25  position-absolute d-flex align-items-center">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "4N43SFM",
            squareClass: `${useColorStatus("4N43SFM")}`,
          }}
        />
        <BlackContainer
          data={{
            label: "4N43SFM_FI",
            useClass: "greenTxt ml-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-26 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N36STB_BL")}`}
          label="4N36STB_BL"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N36BL")}`}
          label="4N36BL"
        />
      </div>
      <div className="single-text-27 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N34BL")}`}
          label="4N34BL"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N34BL_1")}`}
          label="4N34BL_1"
        />
      </div>
      <div className="single-text-28 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N57STB_BL")}`}
          label="4N57STB_BL"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N57BL")}`}
          label="4N57BL"
        />
      </div>
      <div className="single-text-29 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N104BL")}`}
          label="4N104BL"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N107BL")}`}
          label="4N107BL"
        />
      </div>
      <div className="single-text-30 position-absolute ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N44BL")}`}
          label="4N44BL"
        />
      </div>
      <div className="single-text-31 position-absolute ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N44_1BL")}`}
          label="4N44_1BL"
        />
      </div>
      <div className="single-text-32 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N105BL")}`}
          label="4N105BL"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N106BL")}`}
          label="4N106BL"
        />
      </div>
      <div className="single-text-33 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N45BLM01")}`}
          label="4N45BLM01"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N57_1BL")}`}
          label="4N57_1BL"
        />
      </div>
      <div className="single-text-34 position-absolute ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N108BL")}`}
          label="4N108BL"
        />
      </div>
      <div className="single-text-35 position-absolute ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N42BL")}`}
          label="4N42BL"
        />
      </div>
      <div className="single-text-36 position-absolute ">
        <BlackContainer
          data={{
            label: "4N32BM_T2",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "4N32BM_T1",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N32BM_P2",
            useClass: "greenTxt mb-1 ml-2",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "SILO 2",
          }}
        />
      </div>
      <div className="single-text-39 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "SILO 1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "SILO 3",
          }}
        />
      </div>
      <div className="single-text-40 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("4N39FN")}`}
            label="4N39FN"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-41 position-absolute">
        <div className="d-flex mb-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "4N45BLM02"
            )}`}
            label="4N45BLM02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "4N45BLM02",
            }}
          />
        </div>
        <div className="d-flex mb-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "4N45BLM02_STDBY"
            )}`}
            label="4N45BLM02_STDBY"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "4N45BLM02_STDBY",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "4N45BLM03"
            )}`}
            label="4N45BLM03"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "4N45BLM03",
            }}
          />
        </div>
      </div>
      <div className="single-text-42 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TO 4N44AS",
          }}
        />
      </div>
      <div className="single-text-43 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TO N26BH",
          }}
        />
      </div>
      <div className="single-text-44 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "FROM 4N16AS",
          }}
        />
      </div>
      <div className="single-text-45 position-absolute ">
        <BlackContainer
          data={{
            label: "4N08BC_II",
            useClass: "greenTxt mb-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-46 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`square mt-2 digital-tag ${useColorStatus("4N40DR")}`}
          label="4N40DR"
        />
        <BlackContainer
          data={{
            label: "4N40DR_ZI",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-47 position-absolute ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus(
            "4N42_44STB_BL"
          )}`}
          label="4N42_44STB_BL"
        />
      </div>
      <div className="single-text-48 position-absolute d-flex">
        <div className="containerImage"></div>
        <BlackContainer
          data={{
            label: "4N113HP_WI",
            useClass: "greenTxt ml-2",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-49 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4N118ROS")}`}
          label="4N118ROS"
          text="M"
        />
      </div>
      <div className="single-text-50 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus(
            "4N45BLM02_STDBY"
          )}`}
          label="4N45BLM02_STDBY"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("4N118SFM")}`}
          label="4N118SFM"
        />
      </div>
      <div className="single-text-51 position-absolute">
        <BlackContainer
          data={{
            label: "4N111HP_LT",
            useClass: "greenTxt ml-2",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-52 position-absolute">
        <BlackContainer
          data={{
            label: "4N118ROS",
            useClass: "greenTxt ml-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-53 position-absolute">
        <BlackContainer
          data={{
            label: "4N117DV",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "4N118SFM",
            useClass: "greenTxt mb-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-54 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("4N116BL")}`}
          label="4N116BL"
        />
      </div>
      <div className="single-text-55 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TO 4N35BE",
          }}
        />
      </div>
      <div className="single-text-56 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TO 4N35BE",
          }}
        />
      </div>
      <div className="single-text-57 position-absolute">
        <BlackContainer
          data={{
            label: "4N48FN_SP",
            useClass: "greenTxt ml-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-58 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("4N37SR")}`}
          label="4N37SR"
          text="M"
        />
      </div>

      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-3 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-4 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-5 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-6 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-7 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-8 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-9 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-10 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-11 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-12 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-13 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-14 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-15 position-absolute pipe dotted-pipe"></div>

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
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-29"></div>
      <div className="yellowline-Vr position-absolute line-30"></div>
      <div className="yellowline-Vr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr upArrow position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Vr upArrow position-absolute line-45"></div>
      <div className="yellowline-Vr upArrow position-absolute line-46"></div>
      <div className="yellowline-Vr upArrow position-absolute line-47"></div>
      <div className="yellowline-Vr upArrow position-absolute line-48"></div>
      <div className="yellowline-Vr upArrow position-absolute line-49"></div>
      <div className="yellowline-Vr upArrow position-absolute line-50"></div>
      <div className="yellowline-Vr upArrow position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow position-absolute line-52"></div>
      <div className="yellowline-Vr upArrow position-absolute line-53"></div>
      <div className="yellowline-Vr upArrow position-absolute line-54"></div>
      <div className="yellowline-Vr upArrow position-absolute line-55"></div>
      <div className="yellowline-Vr upArrow position-absolute line-56"></div>
      <div className="yellowline-Vr upArrow position-absolute line-57"></div>
      <div className="yellowline-Vr upArrow position-absolute line-58"></div>
      <div className="yellowline-Vr downArrow position-absolute line-59"></div>
      <div className="yellowline-Vr downArrow position-absolute line-60"></div>
      <div className="yellowline-Vr downArrow position-absolute line-61"></div>
      <div className="yellowline-Hr position-absolute line-62"></div>
      <div className="yellowline-Vr downArrow position-absolute line-63"></div>
      <div className="yellowline-Vr downArrow position-absolute line-64"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-65"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-66"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-67"></div>
      <div className="yellowline-Vr upArrow position-absolute line-68"></div>
      <div className="yellowline-Vr downArrow position-absolute line-69"></div>
      <div className="yellowline-Vr upArrow position-absolute line-70"></div>
      <div className="yellowline-Vr upArrow position-absolute line-71"></div>
      <div className="yellowline-Vr upArrow position-absolute line-72"></div>
      <div className="yellowline-Vr upArrow position-absolute line-73"></div>
      <div className="yellowline-Hr position-absolute line-74"></div>
      <div className="yellowline-Hr position-absolute line-75"></div>
      <div className="yellowline-Vr position-absolute line-76"></div>
      <div className="yellowline-Vr position-absolute line-77"></div>
      <div className="yellowline-Vr position-absolute line-78"></div>
      <div className="yellowline-Vr position-absolute line-79"></div>
      <div className="yellowline-Vr position-absolute line-80"></div>
      <div className="yellowline-Vr position-absolute line-81"></div>
      <div className="yellowline-Hr position-absolute line-82"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-83"></div>
      <div className="yellowline-Vr position-absolute line-84"></div>
      <div className="yellowline-Vr downArrow position-absolute line-85"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-86"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-87"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-88"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-89"></div>
      <div className="yellowline-Vr downArrow position-absolute line-90"></div>
      <div className="yellowline-Vr downArrow position-absolute line-91"></div>
      <div className="yellowline-Vr downArrow position-absolute line-92"></div>
      <div className="yellowline-Vr downArrow position-absolute line-93"></div>
      <div className="yellowline-Vr downArrow position-absolute line-94"></div>
      <div className="yellowline-Vr upArrow position-absolute line-95"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-96"></div>
    </div>
  );
};
