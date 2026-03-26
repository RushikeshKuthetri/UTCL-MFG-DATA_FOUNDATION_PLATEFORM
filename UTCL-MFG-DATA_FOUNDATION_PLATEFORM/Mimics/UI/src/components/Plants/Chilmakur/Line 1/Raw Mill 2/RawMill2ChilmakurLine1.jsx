import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useImgGateColorStatusForNewPlantScreen,
  useCaretColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";
import { useCol } from "react-bootstrap/esm/Col";

export const RawMill2ChilmakurLine1 = () => {
  return (
    <div className="Chilmakur-L1-Raw-Mill1 Chilmakur-L1-Raw-Mill2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 border p-1 text-center">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOTAL FEED",
            }}
          />
          <BlackContainer
            data={{
              label: "E1F51",
              useClass: "greenTxt ml-2",
              unit: "TONS",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1 ">
          <div className="mr-2 mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "LS",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "BAUX",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "IRON",
              }}
            />
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FEED",
              }}
            />
            <BlackContainer
              data={{
                label: "E1F52A",
                useClass: "greenTxt mb-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E1F52",
                useClass: "greenTxt mb-1",
                unit: "T/H",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E1F56A",
                useClass: "greenTxt ",
                unit: "T/H",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "LIME STONE",
            }}
          />
          <BlackContainer
            data={{
              label: "E1I51",
              useClass: "greenTxt mt-1",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "BAUXITE",
            }}
          />
          <BlackContainer
            data={{
              label: "E1I03",
              useClass: "greenTxt mt-1",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "IRON ORE",
            }}
          />
          <div className="d-flex mt-2 align-items-center justify-content-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("E1M453")}`}
              label="E1M453"
            />
            <MotorCircleDigitalTag
              className={`square ml-2 digital-tag ${useColorStatus(
                "E1M453_SPD_FLT"
              )}`}
              label="E1M453_SPD_FLT"
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-3 drumContainer d-flex align-items-center justify-content-between px-5 pt-2">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ESP2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K1A935")} mt-1`}
            label="K1A935"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "935",
            }}
          />
        </div>
        <div>
          <div className="text-center">
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "K1Y913"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
                "K1Y913"
              )}`}
              label="K1Y913"
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K1M907")} mt-1`}
            label="K1M907"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1M906",
            }}
          />
        </div>
        <div>
          <div className="mt-3 text-center">
            {/* <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_433BI1PBV5_OLS",
                  closeLabel: "PH_433BI1PBV5_CLS",
                }
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_433BI1PBV5_OLS",
                  closeLabel: "PH_433BI1PBV5_CLS",
                }
              )}`}
              label="PH_433BI1PBV5_OLS"
            /> */}
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K1M906")} mt-1`}
            label="K1M906"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1M907",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-4 d-flex">
        <div className="triangle-with-squares text-center d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L56_S174")}`}
            label="K1L56_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L55_S174")}`}
            label="K1L55_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L54_S174")}`}
            label="K1L54_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L53_S174")}`}
            label="K1L53_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L52_S174")}`}
            label="K1L52_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L51_S174")}`}
            label="K1L51_S174"
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 bigContainer text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "RM-I",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DP PID",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P58",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P51",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P52",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P53",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1S51",
            useClass: "greenTxt mt-1",
            unit: "MM/SEC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M276"
          )}`}
          label="K1M276"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M275"
          )}`}
          label="K1M275"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M274"
          )}`}
          label="K1M274"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M273"
          )}`}
          label="K1M273"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M272"
          )}`}
          label="K1M272"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M271"
          )}`}
          label="K1M271"
        />
      </div>
      <div className="single-text-7 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color ${useColorStatus("K1M277")}`,
            firstCircleText: "M",
            secondCircleLabel: "K1M277",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleLabel: "NA",
            secondCircleText: "",
          }}
        />
      </div>
      <div className="single-text-8 position-absolute d-flex">
        <div className="">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("E1M451")}`,
              firstCircleText: "M",
              firstCircleLabel: "E1M451",
            }}
            text={{ useClass: "text-dark", label: "" }}
            secondCircle={{
              secondCircleClass: "dot grey-color",
              secondCircleLabel: "NA",
              secondCircleText: "",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "E1M451",
            }}
          />
        </div>
        <div className="">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("E1M452")}`,
              firstCircleText: "M",
              firstCircleLabel: "E1M452",
            }}
            text={{ useClass: "text-dark", label: "" }}
            secondCircle={{
              secondCircleClass: "dot grey-color",
              secondCircleLabel: "NA",
              secondCircleText: "",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "452",
            }}
          />
        </div>
        <div className="">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("E1M453")}`,
              firstCircleText: "M",
              firstCircleLabel: "E1M453",
            }}
            text={{ useClass: "text-dark", label: "" }}
            secondCircle={{
              secondCircleClass: "dot grey-color",
              secondCircleLabel: "NA",
              secondCircleText: "",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "453",
            }}
          />
        </div>
      </div>
      <div className="single-text-9 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ml-auto",
            label: "E1M323",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E1M323")}`,
            secondCircleLabel: "E1M323",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M306")}`}
            label="E1M306"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M307")}`}
            label="E1M307"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M308")}`}
            label="E1M308"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M309")}`}
            label="E1M309"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M310")}`}
            label="E1M310"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-11 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M306",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "307",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "308",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "309",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "310",
          }}
        />
      </div>
      <div className=" position-absolute single-text-12 chimni-red"></div>
      <div className=" position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "K1T89",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T90",
            useClass: "greenTxt mb-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T91",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "K1T87",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T88",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T86",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "E1T74",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1T71",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1T73",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-16 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K1M279")} `}
          label="K1M279"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K1M281")} `}
          label="K1M281"
          text="M"
        />
        <BlackContainer
          data={{
            label: "K1P56",
            useClass: "greenTxt",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P57",
            useClass: "greenTxt",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 border p-1 text-center ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RM2-WATER",
          }}
        />
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LPH",
            }}
          />
          <BlackContainer
            data={{
              label: "E1F58",
              useClass: "greenTxt ml-2",
              unit: "LPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 ">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M146")}`}
            label="E1M146"
            text="M"
          />
        </div>
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M148")}`}
            label="E1M148"
            text="M"
          />
        </div>
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M150")}`}
            label="E1M150"
            text="M"
          />
        </div>
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M153")}`}
            label="E1M153"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex flex-column">
        <BlackContainer
          data={{
            label: "E1I05",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1I06",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1I07",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1I08",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex align-items-center ">
        <div className="squareplustri d-flex align-items-center justify-content-center  ">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("E1A157")}`}
              label="E1A157"
            />{" "}
          </div>
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("E1M145")}`}
            label="E1M145"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "E1A145",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M146",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M148",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M150",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M153",
          }}
        />
      </div>
      <div className="single-text-22 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M144",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("E1M144")}`,
            firstCircleText: "M",
            firstCircleLabel: "E1M144",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleLabel: "NA",
            secondCircleText: "",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("K1M278")}`,
            firstCircleText: "M",
            firstCircleLabel: "K1M278",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleLabel: "NA",
            secondCircleText: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "K1P51A",
            useClass: "greenTxt mb-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon ml-3">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M671")}`}
            label="K1M671"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-25 position-absolute d-flex">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y333"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y333"
            )}`}
            label="E1Y333"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y334"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y334"
            )}`}
            label="E1Y334"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y335"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y335"
            )}`}
            label="E1Y335"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y336"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y336"
            )}`}
            label="E1Y336"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y337"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y337"
            )}`}
            label="E1Y337"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y338"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y338"
            )}`}
            label="E1Y338"
          />
        </div>
      </div>
      <div className="single-text-26 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M317")} mt-1`}
          label="E1M317"
          text="M"
        />
      </div>
      <div className="single-text-27 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E1M503")}`,
            secondCircleLabel: "E1M503",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 ">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M302")}`}
            label="E1M302"
            text="M"
          />
        </div>
        <div className="connector-icon mt-3">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M303")}`}
            label="E1M303"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("E1M324")}`}
            label="E1M324"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("E1M340")}`}
            label="E1M340"
          />
        </div>
      </div>
      <div className="single-text-30 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y6",
          }}
        />
      </div>

      <div className=" position-absolute single-text-32">
        <div>
          <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen(
              {
                openLabel: "PH_431DG1_EX_OLS",
                closeLabel: "PH_431DG1_EX_CLS",
                healthyLabel: "PH_431DG1_PH",
              }
            )}`}
            label="PH_431DG1_EX_OLS"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-33">
        <div>
          <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen(
              {
                openLabel: "PH_431DG1_EX_OLS",
                closeLabel: "PH_431DG1_EX_CLS",
                healthyLabel: "PH_431DG1_PH",
              }
            )}`}
            label="PH_431DG1_EX_OLS"
          />
        </div>
      </div>
      <div className="single-text-34 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "E1M501",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E1M501")}`,
            secondCircleLabel: "E1M501",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="single-text-35 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleText: "",
          }}
        />
      </div>

      <div className="single-text-37 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("E1M320_PSW1")}`}
          label="E1M320_PSW1"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("E1M320_PSW2")}`}
          label="E1M320_PSW2"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("E1M320_DPSW")}`}
          label="E1M320_DPSW"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square mt-1 ml-5 digital-tag ${useColorStatus(
              "E1M320_FSW"
            )}`}
            label="E1M320_FSW"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 ml-1 digital-tag ${useColorStatus(
              "E1M320_TSW"
            )}`}
            label="E1M320_TSW"
          />
        </div>
      </div>
      <div className="single-text-38 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K1M285")}`,
            secondCircleLabel: "K1M285",
            secondCircleText: "M",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K1M287")} ml-auto mt-2`}
          label="K1M287"
          text="M"
        />
      </div>

      <BlackContainer
        data={{
          label: "PH_411BI1_WI",
          useClass: "greenTxt single-text-40 position-absolute mr-5",
          unit: "MMWC",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-42 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M454")} `}
          label="E1M454"
          text=""
        />
      </div>
      <div className="single-text-43 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M301")} `}
          label="E1M301"
          text="M"
        />
        <BlackContainer
          data={{
            label: "E1M301_II1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-44 position-absolute d-flex align-items-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "E1M012",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(" E1M012")} mb-1`}
            label=" E1M012"
            text="M"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "E1M316",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("E1M316")} mb-1`}
            label="E1M316"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-45 position-absolute box-1"></div>
      <BlackContainer
        data={{
          label: "E1I14",
          useClass: "greenTxt single-text-46 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <div className="single-text-48 position-absolute ml-4">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M803")} `}
          label="E1M803"
          text=""
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M804")} mt-2`}
          label="E1M804"
          text="M"
        />
      </div>
      <BlackContainer
        data={{
          label: "K1P51",
          useClass: "greenTxt single-text-49 position-absolute",
          unit: "MMWC",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-51">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M152")}`}
            label="E1M152"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M334")}`}
            label="E1M334"
            text="M"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "E1M452_S01",
          useClass: "greenTxt single-text-53 position-absolute ml-3",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />

      <div className=" position-absolute single-text-55 text-center">
        <BlackContainer
          data={{
            label: "E1I10",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "E1M317",
          }}
        />
      </div>

      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-57 ${useColorStatus(
          "E1M320"
        )}`}
        label="E1M320"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-58 ${useColorStatus(
          "E1M333"
        )}`}
        label="E1M333"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-59 ${useColorStatus(
          "K1M347"
        )}`}
        label="K1M347"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-60 ${useColorStatus(
          "E1M332"
        )}`}
        label="E1M332"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-61 ${useColorStatus(
          "E1M331"
        )}`}
        label="E1M331"
      />
      <BlackContainer
        data={{
          label: "E1S02",
          useClass: "greenTxt single-text-62 position-absolute",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-63 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M324",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M340",
          }}
        />
      </div>
      <div className="single-text-64 position-absolute ">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y142"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y142"
            )}`}
            label="E1Y142"
          />
        </div>
      </div>
      <div className="position-absolute single-text-65">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M314")}`}
            label="E1M314"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-66">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M320")}`}
            label="E1M320"
            text="M"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "L1I18",
          useClass: "greenTxt single-text-67 position-absolute ml-4",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <div className="single-text-70 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ACT",
          }}
        />
        <BlackContainer
          data={{
            label: "E1M320_I01",
            useClass: "greenTxt ml-3",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 d-flex">
        <div className="connector-icon ml-3">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M656")}`}
            label="K1M656"
            text="M"
          />
        </div>
      </div>

      <BlackContainer
        data={{
          label: "E1M330_POS",
          useClass: "greenTxt single-text-73 position-absolute ml-4",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-74 ${useColorStatus(
          "K1M909"
        )}`}
        label="K1M909"
      />

      <div className="single-text-75 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y7",
          }}
        />
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y326"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y326"
            )}`}
            label="E1Y326"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y8",
          }}
        />
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y327"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y327"
            )}`}
            label="E1Y327"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Y9",
          }}
        />
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y328"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y328"
            )}`}
            label="E1Y328"
          />
        </div>
      </div>
      <div className="position-absolute single-text-76 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M304")}`}
            label="E1M304"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M305")}`}
            label="E1M305"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-77 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M304",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M305",
          }}
        />
      </div>
      <div className=" position-absolute single-text-78 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("E1M323_JAM_LVL")}`}
          label="E1M323_JAM_LVL"
        />
      </div>

      <div className=" position-absolute single-text-81">
        <BlackContainer
          data={{
            label: "E1T68",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P57",
            useClass: "greenTxt mb-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P10",
            useClass: "greenTxt",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-82 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M902")}`}
            label="K1M902"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M901")}`}
            label="K1M901"
            text="M"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-83">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M254")} `}
          label="E1M254"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "254",
          }}
        />
      </div>
      <div className="position-absolute single-text-84 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("E1M315_OPOS")}`}
            label="E1M315_OPOS"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus(
              "E1M315_EPOS"
            )}`}
            label="E1M315_EPOS"
          />
        </div>
        <BlackContainer
          data={{
            label: "E1P55",
            useClass: "greenTxt ml-3 mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-85">
        <BlackContainer
          data={{
            label: "K1M277_II1",
            useClass: "greenTxt mb-1 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M278_II1",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-86 d-flex align-items-center ">
        <div className="squareplustri d-flex align-items-center justify-content-center  ">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("E1A158")} `}
              label="E1A158"
              text="M"
            />
          </div>
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("E1M111")}`}
            label="E1M111"
          />
        </div>
      </div>
      <div className="single-text-87 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("E1M323_LEMO")}`}
          label="E1M323_LEMO"
        />
      </div>
      <div className="single-text-88 position-absolute">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y02_PON1"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y02_PON1"
            )}`}
            label="E1Y02_PON1"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-89">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M143")} `}
          label="E1M143"
          text=""
        />
      </div>
      <div className=" position-absolute single-text-90 d-flex">
        <BlackContainer
          data={{
            label: "E1P54",
            useClass: "greenTxt",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M331",
          }}
        />
      </div>

      <div className="pipe-1 pipeHr position-absolute"></div>
      <div className="pipe-2 pipeVr position-absolute"></div>
      <div className="pipe-3 pipeHr position-absolute"></div>
      <div className="pipe-4 pipeVr position-absolute"></div>
      <div className="pipe-5 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-6 pipeVr position-absolute"></div>
      <div className="pipe-7 pipeHr position-absolute"></div>
      <div className="pipe-8 pipeVr position-absolute"></div>
      <div className="pipe-9 pipeHr position-absolute"></div>
      <div className="pipe-10 pipeVr position-absolute"></div>
      <div className="pipe-11 pipeVr position-absolute"></div>
      <div className="pipe-12 pipeVr position-absolute text-center pt-3">
        RAW MILL SILO
        <BlackContainer
          data={{
            label: "K1L01A",
            useClass: "greenTxt mt-2",
            unit: "Meter",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipe-13 pipeVr position-absolute"></div>

      <div class="yellowline-Vr downArrow position-absolute line-1"></div>
      <div class="yellowline-Vr downArrow position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow position-absolute line-3"></div>

      <div class="yellowline-Vr downArrow position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow position-absolute line-6"></div>
      <div class="yellowline-Vr downArrow position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow position-absolute line-8"></div>
      <div class="yellowline-Vr downArrow position-absolute line-9"></div>
      <div class="yellowline-Vr downArrow position-absolute line-10"></div>
      <div class="yellowline-Vr downArrow position-absolute line-11"></div>
      <div class="yellowline-Vr downArrow position-absolute line-12"></div>
      <div class="yellowline-Vr downArrow position-absolute line-13"></div>
      <div class="yellowline-Vr downArrow position-absolute line-14"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-15"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-16"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-17"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-18"></div>
      <div class="yellowline-Vr position-absolute line-19"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-20"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-21"></div>
      <div class="yellowline-Vr downArrow position-absolute line-22"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-23"></div>
      <div class="yellowline-Vr downArrow position-absolute line-24"></div>
      <div class="yellowline-Vr downArrow position-absolute line-25"></div>
      <div class="yellowline-Vr downArrow position-absolute line-26"></div>
      <div class="yellowline-Vr upArrow position-absolute line-27"></div>
      <div class="yellowline-Hr position-absolute line-28"></div>
      <div class="yellowline-Vr position-absolute line-29"></div>
      <div class="yellowline-Vr downArrow position-absolute line-30"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-31"></div>
      <div class="yellowline-Hr leftarrow position-absolute line-32"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-33"></div>
      <div class="yellowline-Vr position-absolute line-34"></div>
      <div class="yellowline-Vr position-absolute line-35"></div>

      <div class="yellowline-Hr position-absolute line-36"></div>
      <div class="yellowline-Vr upArrow position-absolute line-37"></div>
    </div>
  );
};
