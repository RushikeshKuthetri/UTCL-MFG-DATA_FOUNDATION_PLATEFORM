import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../index";

import {
  useImgHexaLColorStatus,
  useImgHexaRColorStatus,
} from "../../../../utils";

export const GypsumWetFlyAshHandlingPanipat = () => {
  return (
    <div className="Gypsum_FlyAshPanipat w-100 h-100 position-relative">
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
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-19"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>      
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
   

      <div className="position-absolute arrow-1">
        <i className="fa-solid fa-turn-down"></i>
      </div>
      <div className="containerImage d-flex justify-content-center align-items-center position-absolute single-text-1">
        <MotorCircleDigitalTag
          className={`square digital-tag grey-color`}
          label="CM_521FN4VFD"
        />
      </div>
      <div className="containerImage position-absolute single-text-2"> </div>
      <div className="containerImage position-absolute single-text-3"> </div>
      <div className="containerImage px-3 text-center position-absolute single-text-4">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "WET FLY ASH GYPSUM HOPPER",
        }}
      /> </div>
      <div className="squareplustri d-flex justify-content-center align-items-center position-absolute single-text-5">
        <MotorCircleDigitalTag
          className={`dot digital-tag grey-color`}
          label="CM_521FN4VFD"
        />
      </div>
      <div className="fiveside-shape position-absolute single-text-6"></div>
      <div className="d-flex position-absolute single-text-7">
        <MotorCircleDigitalTag
          className={`hexa-gray-green-red-img digital-tag ${useImgHexaLColorStatus(
            "CM1_531DG2:IO.Out.PosOpn"
          )}`}
          label="CM1_531DG2:IO.Out.PosOpn"
        />
        <MotorCircleDigitalTag
          className={`hexa-gray-green-red-img digital-tag ${useImgHexaRColorStatus(
            "CM1_531DG2:IO.Out.PosCls"
          )}`}
          label="CM1_531DG2:IO.Out.PosCls"
        />
      </div>

      <div className="img-98 position-absolute single-text-8"></div>
      <div className="roller-jcb position-absolute single-text-9"></div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag gray-img position-absolute single-text-10`}
        label="NA"
      />
      <div className="loadingtruck position-absolute single-text-11"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "K11MS1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "K11BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "K11BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "K11BC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "K11BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark mx-auto", label: "K11BC5" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        text={{ useClass: "text-dark mx-auto", label: "k11BW1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark mx-auto", label: "K11ZX2" }}
      />
      <div className="connector-both-side-2 position-absolute single-text-21">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag grey-color`}
          label="CM_521FN4VFD"
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-22",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-23",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-24">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag grey-color`}
          label="CM_521FN4VFD"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K11CP1",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag grey-color`}
          label="CM_521FN4VFD"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K11CP2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Share ST 22",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag grey-color`}
          label="CM_521FN4VFD"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K11CP3",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FLY ASH TANL PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-29",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-30",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K11CR1",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K11CR1",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-33",
          label: "K11BF1",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-34",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-35",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-36",
          label: "K11BN1",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-37",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-38">
        <MotorCircleDigitalTag
          className={`fa-solid fa-caret-up d-block digital-tag grey-color-caret`}
          label="CM_521FN4VFD"
        />
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt ml-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`fa-solid fa-caret-up d-block digital-tag position-absolute single-text-39 grey-color-caret`}
        label="CM_521FN4VFD"
      />
      <MotorCircleDigitalTag
        className={`fa-solid fa-caret-up d-block digital-tag position-absolute single-text-40 grey-color-caret`}
        label="CM_521FN4VFD"
      />
      <MotorCircleDigitalTag
        className={`fa-solid fa-caret-up d-block digital-tag position-absolute single-text-41 grey-color-caret`}
        label="CM_521FN4VFD"
      />
      <MotorCircleDigitalTag
        className={`fa-solid fa-caret-up d-block digital-tag position-absolute single-text-42 grey-color-caret`}
        label="CM_521FN4VFD"
      />
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_591BF1A_DPT",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white p-1 ml-1",
            label: "TO GYPSUM HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white p-1 ml-2",
            label: "TO FLY ASH SIDE",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt ml-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K11TL1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "K11HP1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GYPSUM HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4 mt-2",
            label: "K11HP1",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-48",
          label: "ARROW FEEDER",
        }}
      />
      <div className="position-absolute single-text-49">
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591BF1A_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K11SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: " FOR FUTURE SCOPE",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-51",
          label: "K11DV1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-52",
          label: "K11HP2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-53",
          label: "K11TC1",
        }}
      />
    </div>
  );
};
