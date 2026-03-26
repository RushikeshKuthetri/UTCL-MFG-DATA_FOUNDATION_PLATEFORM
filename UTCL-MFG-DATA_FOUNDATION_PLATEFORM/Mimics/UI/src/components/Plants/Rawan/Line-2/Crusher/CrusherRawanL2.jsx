import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  Connector,
} from "../../../../index";

export const CrusherRawanL2 = () => {
  return (
    <div className="CrusherRawanL2 w-100 h-100 position-relative">
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
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Hr position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>

      <div className="position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "DUMP-HOPPER/LVL",
            useClass: "greenTxt",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center containerImage mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RCC LIMESTON DUMP HOPPER",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "222HP1",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-3"> </div>
      <div className="containerImage text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212.VS1",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-5"> </div>
      <div className="squareplustri text-center pt-2 position-absolute single-text-6">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("212BF1/M02")}`}
          label="212BF1/M02"
        />
      </div>
      <div className="chimni-red position-absolute single-text-7"></div>
      <div className="d-flex position-absolute single-text-8">
        <div className="loadingtruck"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "RADAR BYPASS SELECTION",
          }}
        />
      </div>
      <div className="asset-71 position-absolute single-text-9"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212AF1/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212AF1/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212SX1/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212SX1/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("212BC1/M01")}`,
          firstCircleLabel: "212BC1/M01",
        }}
        text={{ useClass: "text-dark", label: "212.BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("212BC1/M02")}`,
          secondCircleLabel: "212BC1/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC2/M02"
          )}`,
          firstCircleLabel: "212BC2/M02",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "212.BC2" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC4/M02"
          )}`,
          firstCircleLabel: "212BC4/M02",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "212.BC4" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC9/M02"
          )}`,
          firstCircleLabel: "212BC9/M02",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "212.BC9" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.BC3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC3/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212BC3/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.BC5" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC5/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212BC5/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.BCA" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BCA/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212BCA/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.BCB" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BCB/M03"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212BCB/M03",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.BC6" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC6/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212BC6/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-21"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.BC7" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC7/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212BC7/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-22"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.BC8" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212BC8/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212BC8/M02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-23"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "222.BC1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC1/222BC1_M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "222BC1/222BC1_M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-24"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "221BCF" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "221BCF/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "221BCF/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-25"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "222.BC2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC2/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "222BC2/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-26"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "222.BC3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC3/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "222BC3/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-27"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "222.BC3A" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC3A/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "222BC3A/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-28"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "222.BC4" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC4/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "222BC4/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-29"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "221BCG" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "221BCG/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "221BCG/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-30"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "222BC6" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC6/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "222BC6/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-31"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "222AF1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222AF1/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "222AF1/M01",
        }}
      />
      <div className="text-center position-absolute single-text-32">
        <Connector
          parentClass="connector-icon"
          childClass={`dot digital-tag ${useColorStatus("212FN1/M02")}`}
          childLabel="212FN1/M02"
          childText="F"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "212.FN1",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "212AF1/KW",
            useClass: "greenTxt",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212SX1/CURRENT",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "212WQ1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212WQ1/M02")}`}
          label="212WQ1/M02"
          text="M"
        />
      </div>
      <div className="border p-2 position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "APRON FEEDER",
          }}
        />
        <BlackContainer
          data={{
            label: "212AF1/SA",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212AF1/IA",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-2 position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "WOBBLER",
          }}
        />
        <BlackContainer
          data={{
            label: "212WQ1/IA",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212WQ1/SA",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "212CR1/ITA",
            useClass: "greenTxt",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212BC1/CURRENT",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "M01",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212VS1/M01")}`}
          label="212VS1/M01"
          text="M"
        />
        <BlackContainer
          data={{
            label: "212VS1/M02-II",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "M02",
            text: "M",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212VS1/M02")}`}
          label="212VS1/M02"
          text="M"
        />
        <BlackContainer
          data={{
            label: "212BC3/CURRENT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "M04",
            text: "M",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212VS1/M04")}`}
          label="212VS1/M04"
          text="M"
        />
        <BlackContainer
          data={{
            label: "212VS1/M04_II",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "M03",
            text: "M",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212VS1/M03")}`}
          label="212VS1/M03"
          text="M"
        />
        <BlackContainer
          data={{
            label: "212VS1/M03_II",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border text-center px-1 position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 p-1 bg-secondary",
            label: "REJECT BELT WEIGHER",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "212BCABW",
            }}
          />
          <BlackContainer
            data={{
              label: "212BCABW/FRA",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 p-1 bg-secondary",
            label: "MAIN BELT WEIGHER",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "212BW1",
            }}
          />
          <BlackContainer
            data={{
              label: "212BW1/FRA",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 p-1 bg-secondary",
            label: "COMPRESSER",
          }}
        />
        <BlackContainer
          data={{
            label: "212CP1/AIR_PRESSURE",
            useClass: "greenTxt mt-1",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "212CP1/II",
              useClass: "greenTxt mr-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "212CP2/II",
              useClass: "greenTxt ml-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "212CP1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "212CP2",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 p-1 bg-secondary",
            label: "WATER PUMP",
          }}
        />
        <div className="grid-container-2 mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "2BC5WATER SPRAY PUMP/M01"
            )}`}
            label="2BC5WATER SPRAY PUMP/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("212WP3/M02")}`}
            label="212WP3/M02"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BC5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WP3",
            }}
          />
        </div>
      </div>
      <div className="border text-center p-2 position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212MT1",
          }}
        />
        <BlackContainer
          data={{
            label: "212MT1/212MT1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1 mt-2 bg-secondary",
            label: "LUBRICATION PUMP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "APRON & CRUSHER",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212LQ1",
            }}
          />
          <MotorCircleDigitalTag
            className={`digital-tag line-circle ml-2 ${useColorStatus(
              "212LQ1/M02"
            )}`}
            label={"212LQ1/M02"}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WOBBLER",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212LQ2",
            }}
          />
          <BlackContainer
            data={{
              label: "212LQ12/AMP",
              useClass: "greenTxt ml-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`ml-2 digital-tag line-circle ${useColorStatus(
              "212LQ2/M02"
            )}`}
            label={"212LQ2/M02"}
          />
        </div>
      </div>
      <div className="border text-center p-2 position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "WATER SPRAY SYSTEM",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "212DSS1",
          }}
        />

        <div className="grid-container-2 mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("212DSS1/M01")}`}
            label="212DSS1/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("212DSS1/M02")}`}
            label="212DSS1/M02"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212WP1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212WP2",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WATER PUMP",
          }}
        />

        <div className="grid-container-2 mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("222BC1WP/M01")}`}
            label="222BC1WP/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("212BWP4/M02")}`}
            label="212BWP4/M02"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "222BC1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212BC5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-46">
        <BlackContainer
          data={{
            label: "212MS1/RTD$ TEMP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212MS1/II",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-1",
            label: "212.MS1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("212MS1/II")}`}
          label="212MS1/II"
        />
      </div>
      <div className="position-absolute single-text-47">
        <BlackContainer
          data={{
            label: "212HP1/LTA",
            useClass: "greenTxt",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212BW1/FRA",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "222AF1/SA",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-48">
        <BlackContainer
          data={{
            label: "222BC3AFI/FI",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC3/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO 221BC9(LINE 1)",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC_6/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "LS STACKER",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("222ST1/M01")}`}
          label="222ST1/M01"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-51">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "222.MS1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("222MS1/M01")}`}
          label="222MS1/M01"
        />
      </div>
      <div className="border text-center p-2 position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "222BC1",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC1/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "222BC2",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC2/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "222BC3",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC3/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "222BC3A",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC4/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "222BC4",
          }}
        />
        <BlackContainer
          data={{
            label: "222ST1/SA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border text-center p-2 position-absolute single-text-53">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TG RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "222ST1/SA",
              useClass: "greenTxt ml-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "Stacker",
            }}
          />
          <BlackContainer
            data={{
              label: "AS01_AS_AS/STACKER_DISTANCE",
              useClass: "greenTxt ml-1",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "222BC3A",
            }}
          />
          <BlackContainer
            data={{
              label: "222BC3AFI/FI",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "Reclaimer",
            }}
          />
          <BlackContainer
            data={{
              label: "AS01_AS_AS/RECLAIMER_DISTANCE",
              useClass: "greenTxt ml-1",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Boom Belt",
            }}
          />
          <BlackContainer
            data={{
              label: "222ST1/II",
              useClass: "greenTxt ml-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "Boom Angle",
            }}
          />
          <BlackContainer
            data={{
              label: "222ST1/ANGLE_POSITION",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-54">
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "212RA1/M02"
            )}`}
            label="212RA1/M02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "212.RA1",
            }}
          />
        </div>

        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "212RA9/M02"
            )}`}
            label="212RA9/M02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "212.RA9",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-55">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "TEST_123(1)M0001"
          )}`}
          label="TEST_123(1)M0001"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212WPD/M01")}`}
          label="212WPD/M01"
          text="M"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-56"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212SC1/M01"
          )}`,
          firstCircleText: "M",
          firstCircleLabel: "212SC1/M01",
        }}
        text={{ useClass: "text-dark", label: "212.SC1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-57"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "212.SC2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "212SC2/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "212SC2/M02",
        }}
      />
      <div className="position-absolute single-text-58">
        <BlackContainer
          data={{
            label: "212CR2/ITA",
            useClass: "greenTxt",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212CR2/JTA",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-59">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212CR1/M03")}`}
          label="212CR1/M03"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("212CR2/M04")}`}
          label="212CR2/M04"
          text="M"
        />
      </div>
      <div className="d-flex position-absolute single-text-60">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag  ${useImgColorStatus(
            "212DG1M02"
          )}`}
          label="212DG1M02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "212.DG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-61">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "222DG_1/M01"
          )}`}
          label="222DG_1/M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "222DG1",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "212BC3/CURRENT",
          useClass: "greenTxt position-absolute single-text-62",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212BC2/CURRENT",
          useClass: "greenTxt position-absolute single-text-63",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212BC5/CURRENT",
          useClass: "greenTxt position-absolute single-text-64",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212BC6/CURRENT",
          useClass: "greenTxt position-absolute single-text-65",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212BC7/CURRENT",
          useClass: "greenTxt position-absolute single-text-66",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212BC8/CURRENT",
          useClass: "greenTxt position-absolute single-text-67",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212DG1/ZTA",
          useClass: "greenTxt position-absolute single-text-68",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "212BC9/FI",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FROM LINE 1",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "212BC9/CURRENT",
          useClass: "greenTxt position-absolute single-text-70",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "222BC1BW/FI",
          useClass: "greenTxt position-absolute single-text-71",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "222DG_1/ZTA",
          useClass: "greenTxt position-absolute single-text-72",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212BW1/212BC5_TPH",
          useClass: "greenTxt position-absolute single-text-73",
          unit: "T",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212BC4/CURRENT",
          useClass: "greenTxt position-absolute single-text-74",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-75">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212DA1",
          }}
        />
        <BlackContainer
          data={{
            label: "212BF1/PT",
            useClass: "greenTxt mt-2 ml-2",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "212BF1/DPTP",
          useClass: "greenTxt position-absolute single-text-76",
          unit: "MMWC",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-77">
        <BlackContainer
          data={{
            label: "212FN1/SA",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212FN1/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-78",
          label: "REJECT STOCKPLE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-79",
          label: "LINE 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-80",
          label: "APRON CONV",
        }}
      />
      <div className="position-absolute single-text-81">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SCARPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "212SX1",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag position-absolute single-text-82 ${useColorStatus(
          "222BRU/M01"
        )}`}
        label="222BRU/M01"
        text="M"
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-83",
          label: "212BC5",
        }}
      />
    </div>
  );
};
