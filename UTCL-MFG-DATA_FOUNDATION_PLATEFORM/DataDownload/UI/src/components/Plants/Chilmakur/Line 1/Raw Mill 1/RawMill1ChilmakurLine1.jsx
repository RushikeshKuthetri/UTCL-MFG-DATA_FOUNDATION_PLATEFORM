import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useMotorTagsColorStatusForNewPlantScreens,
  useImgGateColorStatusForNewPlantScreen,
  useColorStatus,
  useCaretColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";

export const RawMill1ChilmakurLine1 = () => {
  return (
    <div className="Chilmakur-L1-Raw-Mill1  w-100 h-100 position-relative">
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
              label: "E1F01",
              useClass: "greenTxt ml-2",
              unit: "TPH",
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
                label: "E1F02",
                useClass: "greenTxt mb-1",
                unit: "T/H",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E1F04",
                useClass: "greenTxt mb-1",
                unit: "T/H",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E1F06",
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
              label: "E1I01",
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
              label: "E1I02",
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
              className={`square ml-2 digital-tag ${useColorStatus(
                "E1M253SPD-FLT"
              )}`}
              label="E1M253SPD-FLT"
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "ALUMINIUM HOPPER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 drumContainer d-flex align-items-center justify-content-between px-5 pt-2">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ESP1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K1A932")} mt-1`}
            label="K1A932"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1A932",
            }}
          />
        </div>
        <div>
          <div className="text-center">
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "K1Y912"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
                "K1Y912"
              )}`}
              label="K1Y912"
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K1M904")} mt-1`}
            label="K1M904"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1M904",
            }}
          />
        </div>
        <div>
          <div className="mt-3 text-center"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K1M905")} mt-1`}
            label="K1M905"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1M905",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-4 d-flex">
        <div className="triangle-with-squares text-center d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L06_S174")}`}
            label="K1L06_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L05_S174")}`}
            label="K1L05_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L04_S174")}`}
            label="K1L04_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L03_S174")}`}
            label="K1L03_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L02_S174")}`}
            label="K1L02_S174"
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("K1L01_S174")}`}
            label="K1L01_S174"
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
            label: "E1P01",
            useClass: "greenTxt mt-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P02",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P03",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1S01",
            useClass: "greenTxt mt-1",
            unit: "MM/SEC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M256"
          )}`}
          label="K1M256"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M255"
          )}`}
          label="K1M255"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M254"
          )}`}
          label="K1M254"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M253"
          )}`}
          label="K1M253"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M252"
          )}`}
          label="K1M252"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K1M251"
          )}`}
          label="K1M251"
        />
      </div>
      <div className="single-text-7 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("K1M257")}`,
            firstCircleText: "M",
            firstCircleLabel: "K1M257",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleLabel: "NA",
            secondCircleText: "",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M257_II1",
            useClass: "greenTxt mt-1 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-8 position-absolute d-flex">
        <div className="">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("E1M251")}`,
              firstCircleText: "M",
              firstCircleLabel: "E1M251",
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
              label: "E1M251",
            }}
          />
        </div>
        <div className="">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("E1M252")}`,
              firstCircleText: "M",
              firstCircleLabel: "E1M252",
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
              label: "E1M252",
            }}
          />
        </div>
        <div className="">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("E1M253")}`,
              firstCircleText: "M",
              firstCircleLabel: "E1M253",
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
              label: "E1M253",
            }}
          />
        </div>
        <div className="">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: "dot grey-color",
              firstCircleText: "M",
              firstCircleLabel: "NA",
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
              label: "E1M653",
            }}
          />
        </div>
      </div>
      <div className="single-text-9 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ml-auto",
            label: "E1M125",
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
            secondCircleClass: `dot digital-tag ${useColorStatus("E1M125")}`,
            secondCircleLabel: "E1M125",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M106")}`}
            label="E1M106"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M107")}`}
            label="E1M107"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M108")}`}
            label="E1M108"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M109")}`}
            label="E1M109"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M110")}`}
            label="E1M110"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-11 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M106",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "107",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "108",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "109",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "110",
          }}
        />
      </div>
      <div className=" position-absolute single-text-12 chimni-red"></div>
      <div className=" position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "K1T83",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T84",
            useClass: "greenTxt mb-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T85",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "K1T80",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T81",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T82",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "E1T80",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1T70",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1T72",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-16 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K1M259")}`}
          label="K1M259"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K1M261")} `}
          label="K1M261"
          text="M"
        />
        <BlackContainer
          data={{
            label: "K1P54",
            useClass: "greenTxt",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P55",
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
            label: "RM1-WATER",
          }}
        />
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACT",
            }}
          />
          <BlackContainer
            data={{
              label: "E1F08_ACT",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LPH",
            }}
          />
          <BlackContainer
            data={{
              label: "E1F08",
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
              label: "E1A147",
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
            firstCircleClass: "dot grey-color",
            firstCircleText: "M",
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
            firstCircleClass: `dot digital-tag ${useColorStatus("K1M258")}`,
            firstCircleText: "M",
            firstCircleLabel: "K1M258",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleLabel: "NA",
            secondCircleText: "",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M258_II1",
            useClass: "greenTxt mt-1 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "K1P01A",
            useClass: "greenTxt mb-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon ml-3">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M666")}`}
            label="K1M666"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-25 position-absolute d-flex">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y133"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y133"
            )}`}
            label="E1Y133"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y134"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y134"
            )}`}
            label="E1Y134"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y135"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y135"
            )}`}
            label="E1Y135"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y136"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y136"
            )}`}
            label="E1Y136"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y137"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y137"
            )}`}
            label="E1Y137"
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y138"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y138"
            )}`}
            label="E1Y138"
          />
        </div>
      </div>
      <div className="single-text-26 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M117")} mt-1`}
          label="E1M117"
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
            className={`dot p-2 digital-tag ${useColorStatus("E1M102")}`}
            label="E1M102"
            text="M"
          />
        </div>
        <div className="connector-icon mt-3">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M103")}`}
            label="E1M103"
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
      <div className="single-text-31 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M118")} mt-1`}
          label="E1M118"
          text="M"
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
      <div className="position-absolute single-text-36 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M902")}`}
            label="K1M902"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M903")}`}
            label="K1M903"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-37 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("E1M120_PSW1")}`}
          label="E1M120_PSW1"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("E1M120_PSW2")}`}
          label="E1M120_PSW2"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("E1M120_DPSW")}`}
          label="E1M120_DPSW"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 ml-5 digital-tag ${useColorStatus(
            "E1M120_TSW"
          )}`}
          label="E1M120_TSW"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 ml-5 digital-tag ${useColorStatus(
            "E1M120_FSW"
          )}`}
          label="E1M120_FSW"
        />
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
            secondCircleClass: `dot digital-tag ${useColorStatus("K1M265")}`,
            secondCircleLabel: "K1M265",
            secondCircleText: "M",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K1M267")} ml-auto mt-2`}
          label="K1M267"
          text="M"
        />
      </div>
      <div className="single-text-39 position-absolute ">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "E1Y01_PON1"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y01_PON1"
            )}`}
            label="E1Y01_PON1"
          />
        </div>
      </div>
      <div className="single-text-40 position-absolute ">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "K1Y911"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "K1Y911"
            )}`}
            label="K1Y911"
          />
        </div>
      </div>
      <div className="single-text-41 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M144")} `}
          label="E1M144"
          text="M"
        />
      </div>
      <div className="single-text-42 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M254")} `}
          label="E1M254"
          text=""
        />
      </div>
      <div className="single-text-43 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M101")} `}
          label="E1M101"
          text="M"
        />
        <BlackContainer
          data={{
            label: "E1M101_II1",
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
              label: "E1M011",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("E1M011")} mb-1`}
            label="E1M011"
            text="M"
          />
          {/* <BlackContainer
              data={{
                label: "PH_411BI1_WI",
                useClass: "greenTxt ",
                unit: "A",
                unitColor: "unitColor",
              }}
            /> */}
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "116",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("E1M116")} mb-1`}
            label="E1M116"
            text="M"
          />
          {/* <BlackContainer
              data={{
                label: "PH_411BI1_WI",
                useClass: "greenTxt ",
                unit: "A",
                unitColor: "unitColor",
              }}
            /> */}
        </div>
      </div>
      <div className="single-text-45 position-absolute box-1"></div>
      <BlackContainer
        data={{
          label: "E1I13",
          useClass: "greenTxt single-text-46 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "E1M120_I01",
          useClass: "greenTxt single-text-47 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-48 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M801")} `}
          label="E1M801"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("E1M802")} mt-2`}
          label="E1M802"
          text=""
        />
      </div>
      <BlackContainer
        data={{
          label: "K1P01",
          useClass: "greenTxt single-text-49 position-absolute",
          unit: "MMWC",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-50 position-absolute ">
        {/* <BlackContainer
            data={{
              label: "PH_411BI1_WI",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          /> */}
        <BlackContainer
          data={{
            label: "E1S01_BED",
            useClass: "greenTxt ml-3 mt-3",
            unit: "MM/SEC",
            unitColor: "unitColor",
          }}
        />
      </div>
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
            className={`dot p-2 digital-tag ${useColorStatus("E1M134")}`}
            label="E1M134"
            text="M"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "E1M252_S01",
          useClass: "greenTxt single-text-53 position-absolute",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "E1M130_POS",
          useClass: "greenTxt single-text-54 position-absolute",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-55 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("E1M125_LEMO")}`}
          label="E1M125_LEMO"
        />
        <BlackContainer
          data={{
            label: "E1I09",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-56 d-flex">
        <BlackContainer
          data={{
            label: "E1L04",
            useClass: "greenTxt",
            unit: "MM/SEC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P06",
            useClass: "greenTxt ml-2",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-57 ${useColorStatus(
          "E1M130"
        )}`}
        label="E1M130"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-58 ${useColorStatus(
          "E1M133"
        )}`}
        label="E1M133"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-59 ${useColorStatus(
          "K1M344"
        )}`}
        label="K1M344"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-60 ${useColorStatus(
          "E1M132"
        )}`}
        label="E1M132"
      />
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-61 ${useColorStatus(
          "E1M131"
        )}`}
        label="E1M131"
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
            className={`dot p-2 digital-tag ${useColorStatus("E1M114")}`}
            label="E1M114"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-66">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M120")}`}
            label="E1M120"
            text="M"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "K1I03",
          useClass: "greenTxt single-text-67 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-70 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PV",
          }}
        />
        <BlackContainer
          data={{
            label: "E1M120_S01",
            useClass: "greenTxt ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 d-flex">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt ",
            unit: "DEGC",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon ml-3">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K1M261")}`}
            label="K1M261"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-72 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-4",
            label: "E1M102",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M103",
          }}
        />
      </div>
      {/* <div className="bars position-absolute single-text-74"></div> */}
      <MotorCircleDigitalTag
        className={`bar digital-tag position-absolute single-text-74 ${useColorStatus(
          "K1M908"
        )}`}
        label="K1M908"
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
              "E1Y126"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y126"
            )}`}
            label="E1Y126"
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
              "E1Y127"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y127"
            )}`}
            label="E1Y127"
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
              "E1Y128"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "E1Y128"
            )}`}
            label="E1Y128"
          />
        </div>
      </div>
      <div className="position-absolute single-text-76 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M104")}`}
            label="E1M104"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("E1M105")}`}
            label="E1M105"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-77 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M104",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "E1M105",
          }}
        />
      </div>
      <div className=" position-absolute single-text-78 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("E1M125_JAM")}`}
          label="E1M125_JAM"
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
            unit: "Meters",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipe-13 pipeVr position-absolute"></div>

      <div class="yellowline-Vr downArrow position-absolute line-1"></div>
      <div class="yellowline-Vr downArrow position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow position-absolute line-3"></div>
      <div class="yellowline-Vr downArrow position-absolute line-4"></div>
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
    </div>
  );
};
