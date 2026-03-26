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
} from "../../../../index";

export const LimestonecrusherMalkapurL1 = () => {
  return (
    <div className="LscrusherMalkapurL1 w-100 h-100 position-relative">
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
      <div className="yellowline-Vr upArrow position-absolute line-19"></div>
      <div className="yellowline-Vr upArrow position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-34"></div>

      <div className="position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BM 109",
          }}
        />
        <div className="containerImage text-center pt-3"></div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BM113",
          }}
        />
        <div className="containerImage text-center pt-3"></div>
      </div>
      <div className="roller-jcb position-absolute single-text-3"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM102" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "BM102/M01"
          )}`,
          secondCircleLabel: `BM102/M01`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM103" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM103/M")}`,
          secondCircleLabel: `BM103/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        secondCircle={{
          secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
            "BM115/M"
          )}`,
          secondCircleLabel: `BM115/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "BM115(BC-3)" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM116/M")}`,
          secondCircleLabel: `BM116/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM118A (BC-2A)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "BM118A/M"
          )}`,
          secondCircleLabel: `BM118A/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM118 (BC-2)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM118/M")}`,
          secondCircleLabel: `BM118/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM108 (BC-1)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM108/M")}`,
          secondCircleLabel: `BM108/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "EM206 (BC-5)" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        secondCircle={{
          secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
            "EM206/M"
          )}`,
          secondCircleLabel: `EM206/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{
          firstCircleClass: `dot  grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "EM207 (BC-6)" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        secondCircle={{
          secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
            "EM207/M"
          )}`,
          secondCircleLabel: `EM207/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: `dot p-3 grey-color`,
        }}
        text={{ useClass: "text-dark", label: "EM113 (BC-7)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("EM113/M")}`,
          secondCircleLabel: `EM113/M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("BM119/M")}`,
          firstCircleLabel: "BM119/M",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "BM119 (BC-4)" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "EM211 (BC-27)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "EM211/ M"
          )}`,
          secondCircleLabel: `EM211/ M`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-19" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-20" />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-21"
        text={{ useClass: "text-dark mx-auto", label: "STACKER" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-22"
        text={{ useClass: "text-dark mx-auto", label: "RECLAMER" }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-23"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />

      <div className="asset-72 text-center position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "ADDITIVE",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "VRM_HOP_LVL1/UM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MIXED LS HOPPER",
            }}
          />
        </div>
        <div className="containerImage text-center ml-2">
          <BlackContainer
            data={{
              label: "VRM_HOP_LVL2/UM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LS HOPPER",
            }}
          />
        </div>
        <div className="containerImage text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ADDITIVE HOPPER",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EMG LATERITE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOPPER",
          }}
        />
      </div>
      <div className="trapezoid position-absolute single-text-27"> </div>
      <div className="trapezoid position-absolute single-text-28"> </div>
      <div className="bg-dark position-absolute single-text-29"></div>
      <div className="bg-dark position-absolute single-text-30"></div>
      <div className="fiveside-shape d-flex align-items-center justify-content-center position-absolute single-text-31">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("BM010/M")}`}
          label="BM010/M"
          text="M"
        />
      </div>
      <div className="text-center pipeHr pt-1 position-absolute single-text-32">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("BM112/CP")}`}
          label="BM112/CP"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BM 112",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-1",
            label: "BM010",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mx-auto bb-1",
            label: "WINDING TEMPERATURE",
          }}
        />
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TZ1",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ1",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TZ2",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ2",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TZ3",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ3",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TZ4",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ4",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TZ5",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ5",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TZ6",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ6",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mx-auto bb-1",
            label: "BEARING TEMPERATURE",
          }}
        />

        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOT BRG DE",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ7",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOT BRG NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ8",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ROT BRG DE",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ9",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ROT BRG NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ10",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "JCK SFT BRG DE",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ11",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "JCK SFT BRG NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/BM010_TZ12",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-1",
            label: "BM102",
          }}
        />
        <BlackContainer
          data={{
            label: "BM102/RPM_SP",
            useClass: "greenTxt mt-1",
            unit: "Set rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "BM102/RPM_FB",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "BM102/KW",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CRUSHER 1 HOPPER LEVEL",
          }}
        />
        <BlackContainer
          data={{
            label: "CRS1LVL/UM",
            useClass: "greenTxt ml-1",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border position-absolute p-1 single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BM102 COOLING FAN",
          }}
        />
        <div className="d-flex justify-content-between mt-2 mx-2">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("BM102/M02")}`}
            label="BM102/M02"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("BM102/M03")}`}
            label="BM102/M03"
            text="M"
          />
        </div>
      </div>
      <div className="border position-absolute p-1 single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BM010",
          }}
        />
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LOAD",
            }}
          />
          <BlackContainer
            data={{
              label: "BM010/KW",
              useClass: "greenTxt ml-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-38">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "BA111/M"
          )}`}
          label="BA111/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "BA111",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-39">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "BA114/M"
          )}`}
          label="BA114/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "BA114",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <div className="containerImage text-center pt-3"></div>
      </div>
      <div className="text-center position-absolute single-text-41">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("EM112/M")}`}
          label="EM112/M"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "EM112",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BM108/PCS")}`}
          label="BM108/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-43">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BM115/PCS")}`}
          label="BM115/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("EM206/PCS")}`}
          label="EM206/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-45">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BM118A/PCS")}`}
          label="BM118A/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-46">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BM119/PCS")}`}
          label="BM119/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("EM211/PCS")}`}
          label="EM211/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BM118/PCS")}`}
          label="BM118/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("EM113/PCS")}`}
          label="EM113/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CRS01_G01/CRD_FLT")}`}
            label="CRS01_G01/CRD_FLT"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "CRD_FLT",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CRS01_G01/LUFF_FLT"
            )}`}
            label="CRS01_G01/LUFF_FLT"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LUFF_FLT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("EM207/PCS")}`}
            label="EM207/PCS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "PCS",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("EM207/BSS")}`}
            label="EM207/BSS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BSS",
            }}
          />
        </div>
      </div>
      <div className="border d-flex p-1 position-absolute single-text-53">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "EM 205",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RECLAIMER",
            }}
          />
          <div className="d-flex mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("EM205/EM20505")}`}
              label="EM205/EM20505"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "PILE EMPTY",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("EM205/EM20502")}`}
              label="EM205/EM20502"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "FAULT",
              }}
            />
          </div>
        </div>
        <div className="ml-2">
          <BlackContainer
            data={{
              label: "REC1_AMPS/UM",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM205/SP",
              useClass: "greenTxt mt-1",
              unit: "Set rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM205/REC1PV",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-54">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "BM120/V"
          )}`}
          label="BM120/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BM 120",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "CURRENT",
          }}
        />
        <BlackContainer
          data={{
            label: "BM119/BM11951",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-56">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CRUSHER-1 MCC-1 POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "MCCJ151/UM",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LABOUR COLONY POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "LABCOLP/UM",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "BM109/M"
        )} position-absolute single-text-57`}
        label="BM109/M"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "BM113/M"
        )} position-absolute single-text-58`}
        label="BM113/M"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "CRS01_G01/EME_STOP"
        )} position-absolute single-text-59`}
        label="CRS01_G01/EME_STOP"
      />

      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "EM205/M"
        )} position-absolute single-text-60`}
        label="EM205/M"
      />
      <BlackContainer
        data={{
          label: "BM103/CURRENT_FB",
          useClass: "greenTxt position-absolute single-text-61",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "EM206/EM20651",
          useClass: "greenTxt position-absolute single-text-62",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "EM207/EM20751",
          useClass: "greenTxt position-absolute single-text-63",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LIME STONE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "LIME STONE",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BM215",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "L-2 STACKER SELECTION",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("BM010/LRSIN")}`}
            label="BM010/LRSIN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LRS IN",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("BM010/LRSOUT")}`}
            label="BM010/LRSOUT"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LRS OUT",
            }}
          />
        </div>
      </div>
      <div className="trapezoid position-absolute single-text-67"></div>
    </div>
  );
};
