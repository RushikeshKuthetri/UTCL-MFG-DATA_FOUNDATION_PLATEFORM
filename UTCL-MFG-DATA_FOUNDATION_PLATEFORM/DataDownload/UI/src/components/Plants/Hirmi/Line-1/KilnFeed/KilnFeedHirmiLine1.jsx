import {
  TextContainerWithWrapWord,
  BlueContainerWithDynamicBorder,
  BlackContainer,
  TransparentBoxWithGate,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";

import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useBorderTagsColorStatus,
  useCaretColorStatus,
} from "../../../../../utils";

export const KilnFeedHirmiLine1 = () => {
  return (
    <div className="hirmi-kiln-feed w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "A21 A22 GATE FLT TIMER",
          }}
        />
        <BlackContainer
          data={{
            label: "A21_A22_GATE_FLT_TIMER",
            useClass: "greenTxt mb-3",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "B21 B22 GATE FLT TIMER",
          }}
        />
        <BlackContainer
          data={{
            label: "B21_B22_GATE_FLT_TIMER",
            useClass: "greenTxt mb-3",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-2 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "KW DIFF",
          }}
        />
        <BlackContainer
          data={{
            label: "FEED_BE_KW_DIFF",
            useClass: "greenTxt mb-3",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "KW DIFF COUNTER>14 KW ",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mb-3",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-3 position-absolute border p-1">
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "BBE KW DIFF.> 3KW",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 mb-2 ml-2 digital-tag ${useColorStatus(
              "W1U09M1&M2_KW_DIFFERENCE"
            )}`}
            label="W1U09M1&M2_KW_DIFFERENCE"
            text="K"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "BBE KW DIFF.> 16KW",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 mb-2 ml-2 digital-tag ${useColorStatus(
              "W1U09M1_M2KWALM"
            )}`}
            label="W1U09M1_M2KWALM"
            text="K"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "SEL BBE KW TO START",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus("NA")}`}
            label="NA"
            text="S"
          />
        </div>
      </div>
      <div className="single-text-4 position-absolute d-flex">
        <div className=" squareplustri"></div>
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-5 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "W1AU05_P3",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1BU05_P3",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-6 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1B15")}`}
          label="W1B15"
        />
        <BlackContainer
          data={{
            label: "W1B15_I1",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-7 position-absolute d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("W1U07")}`}
            label="W1U07"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "W1U07",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("W1U08")}`}
            label="W1U08"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "W1U08",
            }}
          />
        </div>
      </div>
      <div className="single-text-8 position-absolute d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1A21",
            squareClass: `${useBorderTagsColorStatus("W1A21")}`,
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1B21",
            squareClass: `${useBorderTagsColorStatus("W1B21")}`,
          }}
        />
      </div>
      <div className="single-text-9 position-absolute">
        <BlackContainer
          data={{
            label: "BINDROP_W1U01_W1",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-10 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ml-2",
            label: "J1U18",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("J1U18")}`}
          label="J1U18"
        />
      </div>
      <div className="single-text-11  position-absolute text-center">
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img my-2 digital-tag ${useFanImgTagsColorStatus(
            "R2P74"
          )}`}
          label="R2P74"
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "R2J12",
            squareClass: `${useBorderTagsColorStatus("R2J12")}`,
          }}
        />
      </div>
      <div className="single-text-12 position-absolute d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ml-2",
              label: "R1U04",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("R1U04")}`}
            label="R1U04"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ml-2",
              label: "R2U04",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("R2U04")}`}
            label="R2U04"
          />
        </div>
      </div>
      <div className="single-text-13 position-absolute d-flex">
        <div className=" squareplustri">
          <MotorCircleDigitalTag
            className={`dot m-1 digital-tag ${useColorStatus("R1U05_P2")}`}
            label="R1U05_P2"
            text="P"
          />
        </div>
        <div className=" squareplustri">
          <MotorCircleDigitalTag
            className={`dot m-1 digital-tag ${useColorStatus("R2U05_P2")}`}
            label="R2U05_P2"
            text="P"
          />
        </div>
      </div>

      <div className="single-text-14 position-absolute d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("R1U06")}`}
            label="R1U06"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "R1U06",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("R2U06")}`}
            label="R2U06"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "R2U06",
            }}
          />
        </div>
      </div>
      <div className="single-text-15 position-absolute">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "J1J11",
            squareClass: `${useBorderTagsColorStatus("J1J11")}`,
          }}
        />
      </div>
      <div className="single-text-16 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ml-2",
            label: "J1U17",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("J1U17")}`}
          label="J1U17"
        />
      </div>
      <div className="single-text-17 position-absolute d-flex">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1P30",
            squareClass: `${useBorderTagsColorStatus("W1P30")}`,
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("R2U16")}
          isClickable={true}
          tagLabel="R2U16"
        />
      </div>
      <div className="single-text-18 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "VITALPH_P1",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VITALGND_P1",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NONVITAL_P1",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1U09_X1",
              useClass: "greenTxt mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1U09_X2",
              useClass: "greenTxt mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W1U09M1_J1",
              useClass: "greenTxt mb-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1U09M2_J1",
              useClass: "greenTxt mb-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KFBE_AVG_KW",
              useClass: "greenTxt mb-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-19 position-absolute box-1 text-center ">
        <BlackContainer
          data={{
            label: "H1H01_L4",
            useClass: "greenTxt mt-3",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RAW MEALCF SILO",
          }}
        />
      </div>
      <div className="single-text-20 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("J1L01_L1")}`}
          label="J1L01_L1"
          text="M"
        />
      </div>
      <div className="single-text-21 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("J1L01_L1")}`}
          label="J1L01_L1"
          text="M"
        />
      </div>
      <div className="single-text-22 position-absolute d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "W1A04",
            }}
          />
          <BlackContainer
            data={{
              label: "W1A04_Y1_SPM",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1A04_F1",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1A02_Z1",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "W1B04",
            }}
          />
          <BlackContainer
            data={{
              label: "W1B04_Y1_SPM",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1B04_F1",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1B02_Z1",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-23 position-absolute d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CFSILO_SVD"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CFSILO_SVD"
          )}`}
          label="CFSILO_SVD"
        />

        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CFSILO_SVC"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CFSILO_SVC"
          )}`}
          label="CFSILO_SVC"
        />

        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CFSILO_SVB"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CFSILO_SVB"
          )}`}
          label="CFSILO_SVB"
        />

        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CFSILO_SVA"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CFSILO_SVA"
          )}`}
          label="CFSILO_SVA"
        />

        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CFSILO_SVE"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CFSILO_SVE"
          )}`}
          label="CFSILO_SVE"
        />

        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CFSILO_SVF"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CFSILO_SVF"
          )}`}
          label="CFSILO_SVF"
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CFSILO_SVG"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CFSILO_SVG"
          )}`}
          label="CFSILO_SVG"
        />
      </div>
      <div className="single-text-24 position-absolute containerImage text-center">
        <BlackContainer
          data={{
            label: "BINDROP_W1U01_W1",
            useClass: "greenTxt mb-1 mt-2",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1U01_P1",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "U01",
          }}
        />
      </div>
      <div className="single-text-25  position-absolute d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`text-dark p-1 mb-1 digital-tag ${useColorStatus(
              "H1P11_P8"
            )}`}
            label="H1P11_P8"
            text="S"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "H1P11",
            }}
          />
          <div className=" squareplustri"></div>
          <MotorCircleDigitalTag
            className={`circle-img my-2 digital-tag ${useFanImgTagsColorStatus(
              "H1P14"
            )}`}
            label="H1P14"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`text-dark p-1 mb-1 digital-tag ${useColorStatus(
              "H1P31_P8"
            )}`}
            label="H1P31_P8"
            text="S"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "H1P31",
            }}
          />
          <div className=" squareplustri"></div>
          <MotorCircleDigitalTag
            className={`circle-img my-2 digital-tag ${useFanImgTagsColorStatus(
              "H1P34"
            )}`}
            label="H1P34"
          />
        </div>
      </div>
      <div className="single-text-26  position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center">
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto"
            squareProps={{
              tagLabel: "W1A04",
              squareClass: `${useBorderTagsColorStatus("W1A04")}`,
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 ml-2 digital-tag ${useColorStatus("W1A04")}`}
            label="W1A04"
            text=""
          />
          <MotorCircleDigitalTag
            className={`square p-2 ml-2 digital-tag ${useColorStatus("W1A04")}`}
            label="W1A04"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square p-2 digital-tag ${useColorStatus("W1B04_GATE")}`}
            label="W1B04_GATE"
          />
          <MotorCircleDigitalTag
            className={`dot p-2 mx-2 digital-tag ${useColorStatus("W1B04")}`}
            label="W1B04"
            text=""
          />
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto"
            squareProps={{
              tagLabel: "W1B04",
              squareClass: `${useBorderTagsColorStatus("W1B04")}`,
            }}
          />
        </div>
      </div>
      <div className="single-text-27 position-absolute ">
        <div className="squareplustri text-center">CF-Silo</div>
      </div>
      <div className="single-text-28 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1U13")}`}
          label="W1U13"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "W1U13",
          }}
        />
      </div>
      <div className="single-text-29 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1U11")}`}
          label="W1U11"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "W1U11",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pr-2",
            label: "W1U10",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1U10")}`}
          label="W1U10"
        />
      </div>
      <div className="single-text-31 position-absolute">
        <BlackContainer
          data={{
            label: "W1J01_PID_SPM",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1J01_Z1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-32 position-absolute">
        <BlackContainer
          data={{
            label: "W1U10_T1",
            useClass: "greenTxt mb-1",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-33 position-absolute text-center">
        <BlackContainer
          data={{
            label: "KF_AUTO_SAMPLER_COUNTER",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "SAMPLER COUNT",
          }}
        />
      </div>
      <div className="single-text-34 position-absolute">
        <BlackContainer
          data={{
            label: "W1A04_P1",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1B04_P1",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1U01_P2",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-35 position-absolute d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-2",
              label: "W1U15",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus("W1U15")}`}
            label="W1U15"
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle  mr-2 digital-tag  ${useColorStatus(
              "W1U14"
            )}`}
            label="W1U14"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-2",
              label: "W1U14",
            }}
          />
        </div>
      </div>
      <div className="single-text-36 position-absolute d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1U16")}`}
          label="W1U16"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pl-2",
            label: "W1U16",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1AX1_VALVE",
            squareClass: `${useBorderTagsColorStatus("W1AX1_VALVE")}`,
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1BX1_VALVE",
            squareClass: `${useBorderTagsColorStatus("W1BX1_VALVE")}`,
          }}
        />
      </div>
      <div className="single-text-38 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1U12")}`}
          label="W1U12"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "W1U12",
          }}
        />
      </div>
      <div className="single-text-39 position-absolute text-center d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("H1H02SB")}`}
          label="H1H02SB"
        />
        <BlackContainer
          data={{
            label: "H1H02SB_I1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-40 position-absolute text-center d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("H1H02")}`}
          label="H1H02"
        />
        <BlackContainer
          data={{
            label: "H1H02_I1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-41 position-absolute text-center d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("H1H03")}`}
          label="H1H03"
        />
        <BlackContainer
          data={{
            label: "H1H03_I1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-42 position-absolute text-center d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("H1H04")}`}
          label="H1H04"
        />
        <BlackContainer
          data={{
            label: "H1H04_I1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-43 position-absolute text-center d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("H1H05")}`}
          label="H1H05"
        />
        <BlackContainer
          data={{
            label: "H1H05_I1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-44 position-absolute text-center d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H1H02_P7")}`}
          label="H1H02_P7"
          text=""
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H1H03_P7")}`}
          label="H1H03_P7"
          text=""
        />
        <MotorCircleDigitalTag
          className={`dot  digital-tag ${useColorStatus("H1H04_P7")}`}
          label="H1H04_P7"
          text=""
        />
      </div>
      <div className="single-text-45 position-absolute d-flex">
        <div className=" squareplustri"></div>
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-46  position-absolute d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "P81",
            }}
          />
          <div className=" squareplustri">
            <MimicCaret
              parentClass="tringle-item"
              firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
                "W1P81_P9"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
                "W1P81_P9"
              )}`}
              label="W1P81_P9"
            />
          </div>
          <MotorCircleDigitalTag
            className={`circle-img my-2 digital-tag ${useFanImgTagsColorStatus(
              "W1P84"
            )}`}
            label="W1P84"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "P91",
            }}
          />
          <div className=" squareplustri">
            <MimicCaret
              parentClass="tringle-item"
              firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
                "W1P91_P9"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
                "W1P91_P9"
              )}`}
              label="W1P91_P9"
            />
          </div>
          <MotorCircleDigitalTag
            className={`circle-img my-2 digital-tag ${useFanImgTagsColorStatus(
              "W1P94"
            )}`}
            label="W1P94"
          />
        </div>
      </div>
      <div className="single-text-47 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border p-1 ",
            label: "W1.1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border p-1",
            label: "W1.1",
          }}
        />
      </div>
      <div className="single-text-48 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1A65"
          )}`}
          label="W1A65"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1B65"
          )}`}
          label="W1B65"
        />
      </div>
      <div className="single-text-49 position-absolute d-flex">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("W1A13_VALVE")}
          isClickable={true}
          tagLabel="W1A13_VALVE"
        />
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("W1B13_VALVE")}
          isClickable={true}
          tagLabel="W1B13_VALVE"
        />
      </div>
      <div className="single-text-50 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "H1P31_P1",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1P91_P1",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-51 position-absolute">
        <BlackContainer
          data={{
            label: "W1U03_Y1_SPM",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1B04_F1",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1U03_VFD_I1",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-52  position-absolute text-center">
        <div className=" squareplustri">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
              "W1P21_P8"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
              "W1P21_P8"
            )}`}
            label="W1P21_P8"
          />
        </div>
        <MotorCircleDigitalTag
          className={`circle-img my-2 digital-tag ${useFanImgTagsColorStatus(
            "W1P24"
          )}`}
          label="W1P24"
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1P21_VALVE",
            squareClass: `${useBorderTagsColorStatus("W1P21_VALVE")}`,
          }}
        />
      </div>
      <div className="single-text-53 position-absolute d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-2",
              label: "P26",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "W1P26"
            )}`}
            label="W1P26"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-2",
              label: "P27",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "W1P27"
            )}`}
            label="W1P27"
          />
        </div>
      </div>
      <div className="single-text-54 position-absolute d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`line-circle mb-2 digital-tag  ${useColorStatus("W1P35")}`}
          label="W1P35"
        />
        <MotorCircleDigitalTag
          className={`line-circle mb-1 digital-tag  ${useColorStatus("W1P25")}`}
          label="W1P25"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P25",
          }}
        />
        <BlackContainer
          data={{
            label: "W1P21_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-55 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle mb-2 digital-tag  ${useColorStatus("R2P75")}`}
          label="R2P75"
        />
      </div>
      <div className="single-text-56 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle mb-2 digital-tag  ${useColorStatus("H1P15")}`}
          label="H1P15"
        />
      </div>
      <div className="single-text-57 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle mb-2 digital-tag  ${useColorStatus("W1P85")}`}
          label="W1P85"
        />
      </div>
      <div className="single-text-58 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle mb-2 digital-tag  ${useColorStatus("H1P35")}`}
          label="H1P35"
        />
      </div>
      <div className="single-text-59 position-absolute">
        <MotorCircleDigitalTag
          className={`line-circle mb-2 digital-tag  ${useColorStatus("W1P95")}`}
          label="W1P95"
        />
      </div>
      <div className="single-text-60 position-absolute">
        <BlackContainer
          data={{
            label: "W1A05_I1",
            useClass: "greenTxt mb-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-61 position-absolute">
        <BlackContainer
          data={{
            label: "H1P11_P1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-62 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "W1U02_I1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1B05",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-63 position-absolute">
        <BlackContainer
          data={{
            label: "W1A04_B04_TOTFEED",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-64 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1U02")}`}
          label="W1U02"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("W1U03")}`}
          label="W1U03"
        />
      </div>
      <div className="single-text-65 position-absolute text-center">
        <BlackContainer
          data={{
            label: "W1B05_I1",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1P64")}
          isClickable={false}
          tagLabel="J1P64"
        />
      </div>
      <div className="single-text-66 position-absolute text-center">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1P64")}
          isClickable={false}
          tagLabel="J1P64"
        />
      </div>
      <div className="single-text-67 position-absolute d-flex flex-column">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("H1H06")}`}
          label="H1H06"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("H1H07")}`}
          label="H1H07"
        />
      </div>
      <div className="single-text-68 position-absolute d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`dot p-2 mr-2 digital-tag ${useColorStatus("W1U09M1")}`}
          label="W1U09M1"
          text="M"
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "W1U09M2",
            squareClass: `${useBorderTagsColorStatus("W1U09M2")}`,
          }}
        />
      </div>
      <div className="single-text-69 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`dot p-2  digital-tag ${useColorStatus("W1U09M3M4")}`}
          label="W1U09M3M4"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "W1U09M3M4",
          }}
        />
      </div>
      <div className="single-text-70 position-absolute hpipecircle">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W1U06")}`}
          label="W1U06"
          text="M"
        />
      </div>
      <div className="single-text-71 position-absolute">
        <BlackContainer
          data={{
            label: "W1U13_T1",
            useClass: "greenTxt",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-72 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("W1J01")}
          isClickable={true}
          tagLabel="W1J01"
        />
      </div>
      <div className="single-text-73 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "W1AX1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "W1BX1",
          }}
        />
      </div>
      <div className="single-text-74 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P85",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P95",
          }}
        />
      </div>
      <div className="single-text-75 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "W1J01",
          }}
        />
      </div>
      <div className="single-text-76 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "R1U16",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "R2U16",
          }}
        />
      </div>
      <div className="single-text-77 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "R1U05",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "R2U05",
          }}
        />
      </div>
      <div className="single-text-78 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "A07",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "B07",
          }}
        />
      </div>
      <div className="single-text-79 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "A21",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "B21",
          }}
        />
      </div>
      <div className="single-text-80 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "A13",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "B13",
          }}
        />
      </div>
      <div className="single-text-81 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "A65",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "B65",
          }}
        />
      </div>
      <div className="single-text-82 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P84",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P94",
          }}
        />
      </div>
      <div className="single-text-83 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "H1P14",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "H1P34",
          }}
        />
      </div>
      <div className="single-text-84 position-absolute d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "W1B12Z1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "W1A12Z1",
          }}
        />
      </div>
      <div className="single-text-85 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "A04",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "B04",
          }}
        />
      </div>
      <div className="single-text-86 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P24",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "P21",
          }}
        />
      </div>

      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 position-absolute pipeHr"></div>
      <div className="pipe-3 position-absolute pipeHr"></div>
      <div className="pipe-4 position-absolute pipeHr"></div>
      <div className="pipe-5 position-absolute pipeHr"></div>
      <div className="pipe-6 position-absolute pipeHr"></div>
      <div className="pipe-7 position-absolute pipeHr"></div>
      <div className="pipe-8 position-absolute pipeHr"></div>
      <div className="pipe-9 position-absolute pipeHr"></div>
      <div className="pipe-10 position-absolute pipeHr"></div>
      <div className="pipe-11 position-absolute pipeHr"></div>
      <div className="pipe-12 position-absolute pipeHr"></div>

      <div class="yellowline-Vr upArrow position-absolute line-1"></div>
      <div class="yellowline-Vr upArrow position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow position-absolute line-3"></div>
      <div class="yellowline-Vr upArrow position-absolute line-4"></div>
      <div class="yellowline-Vr upArrow position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow position-absolute line-6"></div>
      <div class="yellowline-Vr downArrow position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow position-absolute line-8"></div>
      <div class="yellowline-Vr position-absolute line-9"></div>
      <div class="yellowline-Hr position-absolute line-10"></div>
      <div class="yellowline-Vr downArrow position-absolute line-11"></div>
      <div class="yellowline-Vr position-absolute line-12"></div>
      <div class="yellowline-Hr position-absolute line-13"></div>
      <div class="yellowline-Vr position-absolute line-14"></div>
      <div class="yellowline-Vr position-absolute line-15"></div>
      <div class="yellowline-Hr position-absolute line-16"></div>
      <div class="yellowline-Vr position-absolute line-17"></div>
      <div class="yellowline-Vr downArrow position-absolute line-18"></div>
      <div class="yellowline-Vr upArrow position-absolute line-19"></div>
      <div class="yellowline-Vr upArrow position-absolute line-20"></div>
      <div class="yellowline-Vr downArrow position-absolute line-21"></div>
      <div class="yellowline-Vr downArrow position-absolute line-22"></div>
      <div class="yellowline-Vr downArrow position-absolute line-23"></div>
      <div class="yellowline-Vr downArrow position-absolute line-24"></div>
      <div class="yellowline-Vr downArrow position-absolute line-25"></div>
      <div class="yellowline-Vr downArrow position-absolute line-26"></div>
      <div class="yellowline-Vr downArrow position-absolute line-27"></div>
      <div class="yellowline-Vr downArrow position-absolute line-28"></div>
      <div class="yellowline-Vr downArrow position-absolute line-29"></div>
      <div class="yellowline-Vr downArrow position-absolute line-30"></div>
      <div class="yellowline-Vr downArrow position-absolute line-31"></div>
      <div class="yellowline-Vr downArrow position-absolute line-32"></div>
      <div class="yellowline-Vr downArrow position-absolute line-33"></div>
      <div class="yellowline-Vr  position-absolute line-34"></div>
      <div class="yellowline-Hr position-absolute line-35"></div>
      <div class="yellowline-Vr  position-absolute line-36"></div>
      <div class="yellowline-Hr position-absolute line-37"></div>
      <div class="yellowline-Vr  position-absolute line-38"></div>
      <div class="yellowline-Hr position-absolute line-39"></div>
      <div class="yellowline-Vr downArrow position-absolute line-40"></div>
      <div class="yellowline-Vr downArrow position-absolute line-41"></div>
      <div class="yellowline-Vr downArrow position-absolute line-42 "></div>
      <div class="yellowline-Vr downArrow position-absolute line-43 "></div>
      <div class="yellowline-Vr downArrow position-absolute line-44"></div>
      <div class="yellowline-Vr downArrow position-absolute line-45"></div>
      <div class="yellowline-Hr position-absolute line-46"></div>
      <div class="yellowline-Hr position-absolute line-47"></div>
      <div class="yellowline-Vr position-absolute line-48"></div>
      <div class="yellowline-Vr position-absolute line-49"></div>
      <div class="yellowline-Vr downArrow position-absolute line-50"></div>
      <div class="yellowline-Vr downArrow position-absolute line-51"></div>
      <div class="yellowline-Vr position-absolute line-52"></div>
      <div class="yellowline-Hr position-absolute line-53"></div>
      <div class="yellowline-Vr downArrow position-absolute line-54"></div>
      <div class="yellowline-Vr downArrow position-absolute line-55"></div>
      <div class="yellowline-Vr downArrow position-absolute line-56"></div>
      <div class="yellowline-Vr downArrow position-absolute line-57"></div>
      <div class="yellowline-Vr downArrow position-absolute line-58"></div>
      <div class="yellowline-Vr downArrow position-absolute line-59"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-60"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-61"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-62"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-63"></div>
      <div class="yellowline-Hr position-absolute line-64"></div>
      <div class="yellowline-Vr position-absolute line-65"></div>
      <div class="yellowline-Vr downArrow position-absolute line-66"></div>
      <div class="yellowline-Vr downArrow position-absolute line-67"></div>
      <div class="yellowline-Vr position-absolute line-68"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-69"></div>
      <div class="yellowline-Vr position-absolute line-70"></div>
      <div class="yellowline-Hr position-absolute line-71"></div>
      <div class="yellowline-Vr position-absolute line-72"></div>
      <div class="yellowline-Hr position-absolute line-73"></div>
      <div class="yellowline-Vr downArrow position-absolute line-74"></div>
      <div class="yellowline-Vr downArrow position-absolute line-75"></div>
      <div class="yellowline-Vr position-absolute line-76"></div>
      <div class="yellowline-Hr position-absolute line-77"></div>
      <div class="yellowline-Hr position-absolute line-78 d-flex align-items-center justify-content-center">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("W1A12Z1_VALVE")}
          isClickable={true}
          tagLabel="W1A12Z1_VALVE"
        />
      </div>
      <div class="yellowline-Vr downArrow position-absolute line-79"></div>
      <div class="yellowline-Vr position-absolute line-80"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-81"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-82"></div>
      <div class="yellowline-Hr position-absolute line-83 d-flex align-items-center pl-4">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("W1B12Z1_VALVE")}
          isClickable={true}
          tagLabel="W1B12Z1_VALVE"
        />
      </div>
      <div class="yellowline-Vr position-absolute line-84"></div>
      <div class="yellowline-Vr downArrow position-absolute line-85"></div>
      <div class="yellowline-Vr position-absolute line-86"></div>
      <div class="yellowline-Vr position-absolute line-87"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-88"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-89"></div>
      <div class="yellowline-Vr downArrow position-absolute line-90"></div>
      <div class="yellowline-Vr downArrow position-absolute line-91"></div>
      <div class="yellowline-Vr downArrow position-absolute line-92"></div>
      <div class="yellowline-Hr position-absolute line-93"></div>
      <div class="yellowline-Hr position-absolute line-94"></div>
      <div class="yellowline-Hr position-absolute line-95"></div>
      <div class="yellowline-Hr position-absolute line-96"></div>
      <div class="yellowline-Hr position-absolute line-97"></div>
      <div class="yellowline-Hr position-absolute line-98"></div>
      <div class="yellowline-Hr position-absolute line-99"></div>
      <div class="yellowline-Hr position-absolute line-100"></div>
      <div class="yellowline-Vr upArrow position-absolute line-101"></div>
      <div class="yellowline-Vr upArrow position-absolute line-102"></div>
      <div class="yellowline-Vr upArrow position-absolute line-103"></div>
      <div class="yellowline-Vr upArrow position-absolute line-104"></div>
      <div class="yellowline-Vr upArrow position-absolute line-105"></div>
      <div class="yellowline-Vr upArrow position-absolute line-106"></div>
      <div class="yellowline-Vr upArrow position-absolute line-107"></div>
      <div class="yellowline-Vr position-absolute line-108"></div>
      <div class="yellowline-Vr upArrow position-absolute line-109"></div>
      <div class="yellowline-Vr upArrow position-absolute line-110"></div>
      <div class="yellowline-Vr downArrow position-absolute line-111"></div>
      <div class="yellowline-Vr downArrow position-absolute line-112"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-113"></div>
      <div class="yellowline-Hr position-absolute line-114"></div>
      <div class="yellowline-Vr position-absolute line-115"></div>
      <div class="yellowline-Vr position-absolute line-116"></div>
      <div class="yellowline-Hr position-absolute line-117"></div>
      <div class="yellowline-Hr position-absolute line-118"></div>
      <div class="yellowline-Hr position-absolute line-119"></div>
      <div class="yellowline-Vr position-absolute line-120"></div>
      <div class="yellowline-Vr position-absolute line-121"></div>
    </div>
  );
};
