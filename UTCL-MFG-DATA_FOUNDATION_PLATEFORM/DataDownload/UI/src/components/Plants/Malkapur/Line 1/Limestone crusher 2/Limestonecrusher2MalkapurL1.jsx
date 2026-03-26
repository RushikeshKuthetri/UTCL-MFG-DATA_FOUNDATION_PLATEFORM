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

export const Limestonecrusher2MalkapurL1 = () => {
  return (
    <div className="LscrusherMalkapurL1 Lscrusher2MalkapurL1 w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BM 209",
          }}
        />
        <div className="containerImage text-center pt-3"></div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BM213",
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
        text={{ useClass: "text-dark", label: "BM202" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM202/M")}`,
          secondCircleLabel: `BM202/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM203" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM203/M")}`,
          secondCircleLabel: `BM203/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        secondCircle={{
          secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
            "BM215/M"
          )}`,
          secondCircleLabel: `BM215/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "BM215(LBC-9)" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM216" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM216/M")}`,
          secondCircleLabel: `BM216/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM218A (LBC-2)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BC218/M")}`,
          secondCircleLabel: `BC218/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM218A (LBC-3)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "BC218A/M"
          )}`,
          secondCircleLabel: `BC218A/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BM208 (LBC-1)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("BM208/M")}`,
          secondCircleLabel: `BM208/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "EM206 (LBC-10)" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        secondCircle={{
          secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
            "2EM206/M"
          )}`,
          secondCircleLabel: `2EM206/M`,
          secondCircleText: `M`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{
          firstCircleClass: `dot  grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "EM407 (LBC-4)" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        secondCircle={{
          secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
            "EM407/M"
          )}`,
          secondCircleLabel: `EM407/M`,
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
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "2EM113/MOTOR"
          )}`,
          secondCircleLabel: `2EM113/MOTOR`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("BM301/M")}`,
          firstCircleLabel: "BM301/M",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "BM301 (LBC-4A)" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "EM411 (BC-27)" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("EM411/M")}`,
          secondCircleLabel: `EM411/M`,
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
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MIXED LS HOPPER",
            }}
          />
        </div>
        <div className="containerImage text-center ml-2">
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
      <div className="trapezoid position-absolute single-text-27"> </div>
      <div className="trapezoid position-absolute single-text-28"> </div>
      <div className="bg-dark position-absolute single-text-29"></div>
      <div className="bg-dark position-absolute single-text-30"></div>
      <div className="fiveside-shape d-flex align-items-center justify-content-center position-absolute single-text-31">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("BM020/M")}`}
          label="BM020/M"
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
            label: "BM020",
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
              label: "BM020/BM020_TZ1",
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
              label: "BM020/BM020_TZ2",
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
              label: "BM020/BM020_TZ3",
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
              label: "BM020/BM020_TZ4",
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
              label: "BM020/BM020_TZ5",
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
              label: "BM020/BM020_TZ6",
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
              label: "BM020/BM020_TZ7",
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
              label: "BM020/BM020_TZ8",
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
              label: "BM020/BM020_TZ9",
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
              label: "BM020/BM020_TZ10",
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
              label: "BM020/BM020_TZ11",
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
              label: "BM020/BM020_TZ12",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mx-auto bb-1",
            label: "ROTOR VIBRATION",
          }}
        />
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DE VIB VRTCL",
            }}
          />
          <BlackContainer
            data={{
              label: "BM020VIB_DE/UM",
              useClass: "greenTxt ml-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "NDE VIB VRTCL",
            }}
          />
          <BlackContainer
            data={{
              label: "BM020_NDE/UM",
              useClass: "greenTxt ml-1",
              unit: "mm/s",
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
            label: "BM202/RPM_SP",
            useClass: "greenTxt mt-1",
            unit: "Set rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "BM202/RPM_FB",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "BM202/AMP",
            useClass: "greenTxt mt-1",
            unit: "amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CRS2_HOP/UM",
          useClass: "greenTxt ml-1 position-absolute single-text-35",
          unit: "mtr",
          unitColor: "unitColor",
        }}
      />
      <div className="border position-absolute p-1 single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BM020",
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
              label: "BM020/KW",
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
            "BM211/M"
          )}`}
          label="BM211/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "BA211",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-39">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "BA214/M"
          )}`}
          label="BA214/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "BA214",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BM208/PCS")}`}
          label="BM208/PCS"
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
          className={`dot digital-tag ${useColorStatus("BM215/PCS")}`}
          label="BM215/PCS"
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
          className={`dot digital-tag ${useColorStatus("2EM206/PCS")}`}
          label="2EM206/PCS"
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
          className={`dot digital-tag ${useColorStatus("BM218/PCS")}`}
          label="BM218/PCS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-55">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BM301/PCS")}`}
          label="BM301/PCS"
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
          className={`dot digital-tag ${useColorStatus("EM411/PCS")}`}
          label="EM411/PCS"
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
          className={`dot digital-tag ${useColorStatus("BC218A/PCS")}`}
          label="BC218A/PCS"
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
      <div className="position-absolute single-text-52">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("EM407/PCS")}`}
            label="EM407/PCS"
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
            className={`dot digital-tag ${useColorStatus("EM407/BSS")}`}
            label="EM407/BSS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BSS",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "EM407/2EM40751",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-54">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "BM220/V"
          )}`}
          label="BM220/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BM 220",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-56">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CRUSHER-2 MCC-1 POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "C2MCC1/UM",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CRUSHER-2 MCC-2 POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "C2MCC2/UM",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "L-2 RECLAIMER POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "L2RECKW/UM",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "MINES POWER(STACKER)",
            }}
          />
          <BlackContainer
            data={{
              label: "L2STAKW/UM",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CRUSHER 2 HOPPER LEVEL",
            }}
          />
          <BlackContainer
            data={{
              label: "CRS2_HOP/UM",
              useClass: "greenTxt",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "BM209/M"
        )} position-absolute single-text-57`}
        label="BM209/M"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "BM213/M"
        )} position-absolute single-text-58`}
        label="BM213/M"
        text="M"
      />
      <div className={`square grey-color position-absolute single-text-60`} />
      <BlackContainer
        data={{
          label: "BM103/CURRENT_FB",
          useClass: "greenTxt position-absolute single-text-61",
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
      <div className="position-absolute single-text-66">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("BM020/CB OPEN")}`}
            label="BM020/CB OPEN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "CB OPEN",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("BM020/LRSHLT")}`}
            label="BM020/LRSHLT"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LRS HEALTHY",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("BM020/LRSOUT")}`}
            label="BM020/LRSOUT"
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

      {/* //crusher 2 */}
      <div className="position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "EM208",
          }}
        />
        <div className="containerImage text-center pt-3"></div>
      </div>
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag ${useColorStatus(
          "EM208_2/M"
        )} position-absolute single-text-69`}
        label="EM208_2/M"
        text="M"
      />

      <MotorCircleDigitalTag
        className={`circle-img digital-tag ${useFanImgTagsColorStatus(
          "322_CC1/M1"
        )} position-absolute single-text-70`}
        label="322_CC1/M1"
      />

      <div className="position-absolute single-text-71">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EM205",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "RECLAIMER",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-72"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("BM115/M")}`,
          firstCircleLabel: "BM115/M",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L-1(BC-3) BM115" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <div className="d-flex position-absolute single-text-73">
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
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-74",
          label: "TO L-1 STACKER",
        }}
      />
    </div>
  );
};
