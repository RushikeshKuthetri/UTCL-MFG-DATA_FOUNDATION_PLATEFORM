import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
  MimicCaret,
} from "../../../index";

import {
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../utils";

export const WRCSiloPanipat = () => {
  return (
    <div className="WRCSiloPanipat w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr upArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr leftarrow rightarrow position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-24"></div>
      <div className="yellowline-Vr upArrow position-absolute line-25"></div>

      <div className="containerImage px-1 d-flex justify-content-center align-items-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WRC Steel Silo",
          }}
        />
      </div>
      <div className="containerImage px-1 d-flex justify-content-center align-items-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WRC 30 T Bin",
          }}
        />
      </div>
      <div className="containerImage d-flex flex-column justify-content-between align-items-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Bag Filter 1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_591BF14")}`}
          label="PP_591BF14"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "PP_591RA14"
          )}`}
          label="PP_591RA14"
        />
      </div>
      <div className="containerImage d-flex flex-column justify-content-between align-items-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Bag Filter 2",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_591BF15")}`}
          label="PP_591BF15"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("PP_591RA15")}`}
          label="PP_591RA15"
          text="M"
        />
      </div>
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe d-flex flex-column justify-content-between align-items-center position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "CM_591BE3"
          )}`,
          firstCircleLabel: "CM_591BE3",
          firstCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle pr-2 position-absolute single-text-6"
        text={{ useClass: "text-dark ml-auto", label: "591AS4" }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-7" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-8" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-9" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-10" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-11" />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-2 position-absolute single-text-12",
          label: "CMD-1",
        }}
      />
      <div className="position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "591FN14",
          }}
        />
        <div className="img-66 mt-1">
          <div className="connector-icon justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("PP_591FN14")}`}
              label="PP_591FN14"
              text="M"
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "PP_591FN14_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <div className="img-66">
          <div className="connector-icon justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("CM_591FN9")}`}
              label="CM_591FN9"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "591FN9",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591FN9_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="img-66">
          <div className="connector-icon justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`line-circle p-3 digital-tag ${useColorStatus(
                "PP_611BL7_A"
              )}`}
              label="PP_611BL7_A"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611BL7",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611BL7_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <div className="img-66">
          <div className="connector-icon justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`line-circle p-3 digital-tag ${useColorStatus(
                "PP_611BL8_A"
              )}`}
              label="PP_611BL8_A"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611BL8",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611BL8_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <div className="img-66">
          <div className="connector-icon justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("PP_591FN15")}`}
              label="PP_591FN15"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "591FN15",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_591FN15_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "CM_591BE3_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591BE3_BSS3")}`}
            label="CM_591BE3_BSS3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BSS 3",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591BE3_BSS4")}`}
            label="CM_591BE3_BSS4"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BSS 4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "GA_PMP_WRC_FLOW",
            useClass: "greenTxt",
            unit: "LPH",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-5">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591BE3_BSS1")}`}
            label="CM_591BE3_BSS1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BSS 1",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591BE3_BSS2")}`}
            label="CM_591BE3_BSS2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BSS 2",
            }}
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "STEEL_HOPPER_HIGH_LEVEL"
        )} position-absolute single-text-20`}
        label="STEEL_HOPPER_HIGH_LEVEL"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "CM_591BE3_CLS"
        )} position-absolute single-text-21`}
        label="CM_591BE3_CLS"
      />
      <div className="position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mb-4",
            label: "To Bag Filter 1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_591BE3_BLS")}`}
          label="CM_591BE3_BLS"
        />
      </div>

      <div className="d-flex position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "614DV1",
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          squareProps={{
            tagLabel: "CM_614DV1",
            squareClass: `${useColorStatus("CM_614DV1")}`,
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "614SG2",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "CM_614SG2"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "CM_614SG2"
          )}`}
          label="CM_614SG2"
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <TransparentBoxWithGate
          isClickable={true}
          squareProps={{
            tagLabel: "CM_614DV2",
            squareClass: `${useColorStatus("CM_614DV2")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "614DV2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-26">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "CM_614SG1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "CM_614SG1"
          )}`}
          label="CM_614SG1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "614SG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-27">
        <TransparentBoxWithGate
          isClickable={true}
          squareProps={{
            tagLabel: "CM_614DV3",
            squareClass: `${useColorStatus("CM_614DV3")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "614DV3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-28">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "CM_614SG3"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "CM_614SG3"
          )}`}
          label="CM_614SG3"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "614SG3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-29">
        <TransparentBoxWithGate
          isClickable={true}
          squareProps={{
            tagLabel: "PP_614DV4",
            squareClass: `${useColorStatus("PP_614DV4")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "614DV4",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-30">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "CM_614SG4"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "CM_614SG4"
          )}`}
          label="CM_614SG4"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "614SG4",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "614SG8",
          }}
        />
        <MimicCaret
          parentClass="tringle-item mt-3"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "CM_614SG8"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "CM_614SG8"
          )}`}
          label="CM_614SG8"
        />
      </div>
      <div className="d-flex position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "614SG9",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "CM_614SG9"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "CM_614SG9"
          )}`}
          label="CM_614SG9"
        />
      </div>
      <div className="position-absolute single-text-33">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "BIN HI LVL",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("WRC_BIN_HI_LVL")}`}
            label="WRC_BIN_HI_LVL"
          />
        </div>
        <BlackContainer
          data={{
            label: "PP_614FB1_WI",
            useClass: "greenTxt mt-4 ml-4",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-34",
          label: "591BE3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-35",
          label: "FROM 591AS3",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-36",
          label: "591RA14",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-37",
          label: "Steel Hopper",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-38",
          label: "591RA15",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-39",
          label: "TOWARDS 641BE1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-40",
          label: "Steel Bin",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "To 641BE2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-42",
          label: "To 591BE1",
        }}
      />
    </div>
  );
};
