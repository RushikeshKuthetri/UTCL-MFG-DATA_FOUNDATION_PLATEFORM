import {
  TextContainerWithWrapWord,
  TransparentBoxWithGate,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
} from "../../../index";

import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../utils";

export const FlyashSiloPanipat = () => {
  return (
    <div className="PanipatFlyAsh w-100 h-100 position-relative">
      <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
        <div className="trapezoid"></div>
      </div>
      <div className="d-flex single-text-1 position-absolute">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
      </div>
      <div className=" single-text-2 position-absolute">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K21PV1-7",
            }}
          />

          <div className="ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K11FS1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FLY ASH SILO",
              }}
            />
          </div>
        </div>
        <div className="d-flex single-text-1">
          <div className="gap-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K21SG1-3",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "K21DV1-3",
              }}
            />
          </div>
          <div className="gap-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K21SG4-6",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "K21DV4-6",
              }}
            />
          </div>
        </div>
      </div>
      <div className="containerImage single-text-3 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3  mx-auto",
            label: "K21CB1",
          }}
        />
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      </div>
      <div className="single-text-4 position-absolute d-flex">
        <div className="single-text-1">
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            text={{ useClass: "text-dark mx-auto", label: "" }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            text={{ useClass: "text-dark mx-auto", label: "" }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            text={{ useClass: "text-dark mx-auto", label: "" }}
          />
        </div>
        <div className="single-text-2">
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            text={{ useClass: "text-dark mx-auto", label: "" }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            text={{ useClass: "text-dark mx-auto", label: "" }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            text={{ useClass: "text-dark mx-auto", label: "" }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <div className="d-flex">
            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid fa-caret-right digital-tag ${useCaretColorStatus(
                "CM_K21SG1"
              )} d-block`}
              secondCaretClass={`fa-solid fa-caret-left digital-tag ${useCaretColorStatus(
                "CM_K21SG1"
              )} d-block`}
              label="CM_K21SG1"
            />
            <BlueContainerWithDynamicBorder
              useClass={` ml-3 ${useBorderTagsColorStatus("CM_K21DV1")}`}
              isClickable={true}
              tagLabel="CM_K21DV1"
            />
          </div>
          <div className="d-flex mt-2">
            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid fa-caret-right digital-tag ${useCaretColorStatus(
                "CM_K21SG2"
              )} d-block`}
              secondCaretClass={`fa-solid fa-caret-left digital-tag ${useCaretColorStatus(
                "CM_K21SG2"
              )} d-block`}
              label="CM_K21SG2"
            />
            <BlueContainerWithDynamicBorder
              useClass={` ml-3 ${useBorderTagsColorStatus("CM_K21DV2")}`}
              isClickable={true}
              tagLabel="CM_K21DV2"
            />
          </div>

          <div className="d-flex mt-2">
            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid grey-color-caret fa-caret-right digital-tag ${useCaretColorStatus(
                "CM_K21SG3"
              )} d-block`}
              secondCaretClass={`fa-solid grey-color-caret fa-caret-left digital-tag ${useCaretColorStatus(
                "CM_K21SG3"
              )} d-block`}
              label="CM_K21SG3"
            />
            <BlueContainerWithDynamicBorder
              useClass={` ml-3 ${useBorderTagsColorStatus("CM_K21DV3")}`}
              isClickable={true}
              tagLabel="CM_K21DV3"
            />
          </div>
        </div>
        <div className="single-text-1">
          <div className="d-flex">
            <BlueContainerWithDynamicBorder
              useClass={` ml-3 ${useBorderTagsColorStatus("CM_K21DV4")}`}
              isClickable={true}
              tagLabel="CM_K21DV4"
            />

            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid grey-color-caret fa-caret-right digital-tag ${useCaretColorStatus(
                "CM_K21SG4"
              )} d-block`}
              secondCaretClass={`fa-solid grey-color-caret fa-caret-left digital-tag ${useCaretColorStatus(
                "CM_K21SG4"
              )} d-block`}
              label="CM_K21SG4"
            />
          </div>
          <div className="d-flex mt-2">
            <BlueContainerWithDynamicBorder
              useClass={` ml-3 ${useBorderTagsColorStatus("CM_K21DV5")}`}
              isClickable={true}
              tagLabel="CM_K21DV5"
            />

            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid grey-color-caret fa-caret-right digital-tag ${useCaretColorStatus(
                "CM_K21SG5"
              )} d-block`}
              secondCaretClass={`fa-solid grey-color-caret fa-caret-left digital-tag ${useCaretColorStatus(
                "CM_K21SG5"
              )} d-block`}
              label="CM_K21SG5"
            />
          </div>

          <div className="d-flex mt-2">
            <BlueContainerWithDynamicBorder
              useClass={` ml-3 ${useBorderTagsColorStatus("CM_K21DV6")}`}
              isClickable={true}
              tagLabel="CM_K21DV6"
            />

            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid grey-color-caret fa-caret-right digital-tag ${useCaretColorStatus(
                "CM_K21SG6"
              )} d-block`}
              secondCaretClass={`fa-solid grey-color-caret fa-caret-left digital-tag ${useCaretColorStatus(
                "CM_K21SG6"
              )} d-block`}
              label="CM_K21SG6"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <div className="containerImage text-center pt-3">
          <MotorCircleDigitalTag
            className={`square digital-tag mx-auto ${useColorStatus(
              "CM_K21BF3"
            )}`}
            label="CM_K21BF3"
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="d-flex ml-3">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "CM_K21RA3"
            )}`}
            label="CM_K21RA3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "K21RA3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <div className="connector-icon  justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CM_K21FN3")}`}
            label="CM_K21FN3"
          />
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "K21BF3",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <div className="connector-icon  justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-2  digital-tag ${useColorStatus("CM_K21FN2")}`}
            label="CM_K21FN2"
            text="M"
          />
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "K21FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-2  digital-tag ${useColorStatus("CM_K21BL2")}`}
              label="CM_K21BL2"
              text="M"
            />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "K21BL2",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K21BL2_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-2  digital-tag ${useColorStatus("CM_K21BL6")}`}
              label="CM_K21BL6"
              text="M"
            />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "K21BL6",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K21BL6_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-2  digital-tag ${useColorStatus("CM_K11CP1")}`}
              label="CM_K11CP1"
              text="M"
            />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "K11CP1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K11CP1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-2  digital-tag ${useColorStatus("CM_K11CP3")}`}
              label="CM_K11CP3"
              text="M"
            />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "K11CP3",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K11CP3_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-2  digital-tag ${useColorStatus("CM_K21RB1")}`}
              label="CM_K21RB1"
              text="M"
            />
            <div className="yellowline-Vr position-absolute line-2"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "K21RB1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K21RB1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`dot p-2  digital-tag ${useColorStatus("CM_K21RB2")}`}
              label="CM_K21RB2"
              text="M"
            />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "K21RB2",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K21RB2_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-12"
        text={{ useClass: "text-dark mx-auto", label: "K21AS7" }}
      />
      <div className="position-absolute single-text-13">
        <div className="connector-icon  justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-2  digital-tag ${useColorStatus("CM_K21BL1")}`}
            label="CM_K21BL1"
            text="M"
          />
          <div className="yellowline-Vr upArrow position-absolute line-2"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "K21BL1",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K21BL1_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex ">
        <div className="d-flex">
          <div className="truck"></div>
          <MimicCaret
            parentClass="tringle-item ml-2 mt-2"
            firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
            secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
          />
        </div>
        <div className="d-flex mt-4">
          <div className="truck"></div>
          <MimicCaret
            parentClass="tringle-item ml-2 mt-2"
            firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
            secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
          />
        </div>
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-15"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-16"
        text={{ useClass: "text-dark mx-auto", label: "K21AS9" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-17"
        text={{ useClass: "text-dark mx-auto", label: "K21AS8" }}
      />
      <div className=" position-absolute single-text-18 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-3 ${useColorStatus(
            "CM_K21BE1_BSS1"
          )}`}
          label="CM_K21BE1_BSS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-3 ${useColorStatus(
            "CM_K21BE1_BSS4"
          )}`}
          label="CM_K21BE1_BSS4"
        />
      </div>
      <div className=" position-absolute single-text-19 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-3 ${useColorStatus(
            "CM_K21BE1_BSS3"
          )}`}
          label="CM_K21BE1_BSS3"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-3 ${useColorStatus(
            "CM_K21BE1_BSS2"
          )}`}
          label="CM_K21BE1_BSS2"
        />
      </div>
      <div className=" position-absolute single-text-20 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "K21JB1",
          }}
        />
        <div className={`square mt-2 grey-color`}></div>
      </div>
      <div className="containerImage position-absolute single-text-21 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FLY ASH SILO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "241FB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-2",
            label: "241BF1",
          }}
        />
        <div className="containerImage text-center pt-1 mt-1">
          <MotorCircleDigitalTag
            className={`square digital-tag mx-auto ${useColorStatus(
              "CM_241BF1"
            )}`}
            label="CM_241BF1"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 mx-auto ${useColorStatus(
              "CM_241BF1_LH"
            )}`}
            label="CM_241BF1_LH"
          />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="d-flex ml-3">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "CM_241RA1"
            )}`}
            label="CM_241RA1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "241RA1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_241FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="connector-icon mt-4 justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_241FN1"
              )}`}
              label="CM_241FN1"
            />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "241DA1",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "241FN1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_241BF1_DPT",
              useClass: "greenTxt mt-2 ml-3",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex ">
        <div className="d-flex mt-5">
          <div className="truck ml-4"></div>
        </div>
        <div className="d-flex">
          <div className="truck ml-4"></div>
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <BlackContainer
          data={{
            label: "CM_241FB1_LI",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon ml-2  justify-content-start pl-1">
          <div className="circle-img c-grey-img-2"></div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "K21CP1",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-26"
        text={{ useClass: "text-dark ml-auto", label: "241AS1" }}
      />
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex ml-2 mt-1"
            firstCaretClass={`fa-solid grey-color-caret fa-caret-right d-block`}
            secondCaretClass={`fa-solid grey-color-caret fa-caret-left d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "241GA1",
            }}
          />
        </div>
        <div className="dot p-2 grey-color"></div>
        <div>
          <div className="dot p-2 ml-2 grey-color"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "241DV1",
            }}
          />
          <BlackContainer
            data={{
              label: "241DV1_ZT",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "241SG1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex ml-2 mt-1"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-right d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-left d-block`}
        />
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "CM_241HTR1_TE01",
            useClass: "greenTxt ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex ml-3 mt-4">
          <div className={`square mt-2 grey-color`}></div>
          <div className={`square mt-2 ml-3 grey-color`}></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "MOTERISED GATE",
          }}
        />
        <div className="d-flex mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "MOT_241DV1_150T_OLS"
              )}`}
              label="MOT_241DV1_150T_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OPEN LIM",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-3 ${useColorStatus(
                "MOT_241DV1_150T_CLS"
              )}`}
              label="MOT_241DV1_150T_CLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "CLOSE LIM",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-2",
            label: "241BF2",
          }}
        />
        <div className="containerImage text-center pt-1 mt-1">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 mx-auto ${useColorStatus(
              "CM_241BF2"
            )}`}
            label="CM_241BF2"
          />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="d-flex ml-3">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "CM_241RF2"
            )}`}
            label="CM_241RF2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "241RF2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <div className="connector-icon mt-4 justify-content-start pl-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_241FN2"
              )}`}
              label="CM_241FN2"
            />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>
          <BlackContainer
            data={{
              label: "CM_241BF2_DPT",
              useClass: "greenTxt mt-3",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "241FN2",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_241FN2_II",
              useClass: "greenTxt  mt-2 ml-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage position-absolute single-text-32 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "DRY FLY ASH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "241FB2",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-33"
        text={{ useClass: "text-dark ml-auto", label: "241AS2" }}
      />
      <div className="position-absolute single-text-34 d-flex">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex ml-2 mt-1"
            firstCaretClass={`fa-solid grey-color-caret fa-caret-right d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "241GA2",
            }}
          />
        </div>
        <div className="dot p-2 grey-color"></div>
        <div>
          <div className="dot p-2 ml-2 grey-color"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "241DV2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "241SG2",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex ml-2 mt-1"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-right d-block`}
          secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "241BL1",
            }}
          />
          <div className="connector-both-side  mt-1 justify-content-start">
            <MotorCircleDigitalTag
              className={`dot p-2 mx-auto  digital-tag ${useColorStatus(
                "CM_241BL1_M01"
              )}`}
              label="CM_241BL1_M01"
              text="M"
            />
          </div>
        </div>
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <BlueContainerWithDynamicBorder
          useClass={` ml-3 mt-3`}
          isClickable={false}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "241BL2",
            }}
          />
          <div className="connector-both-side  mt-1 justify-content-start">
            <MotorCircleDigitalTag
              className={`dot p-2 mx-auto  digital-tag ${useColorStatus(
                "CM_241BL2_M01"
              )}`}
              label="CM_241BL2_M01"
              text="M"
            />
          </div>
        </div>
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <BlueContainerWithDynamicBorder
          useClass={` ml-3 mt-3`}
          isClickable={false}
        />
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "241BL3",
            }}
          />
          <div className="connector-both-side  mt-1 justify-content-start">
            <div className="dot p-2 mx-auto grey-color">M</div>
          </div>
        </div>
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <BlueContainerWithDynamicBorder
          useClass={` ml-3 mt-3`}
          isClickable={false}
        />
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "241BL4",
            }}
          />
          <div className="connector-both-side  mt-1 justify-content-start">
            <div className="dot p-2 mx-auto grey-color">M</div>
          </div>
        </div>
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solidgrey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <BlueContainerWithDynamicBorder
          useClass={` ml-3 mt-3`}
          isClickable={false}
        />
      </div>
      <div className="position-absolute single-text-40">
        <BlackContainer
          data={{
            label: "CM_241BL1M01_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_241BL2M01_II",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      {/* <div className="position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "CM_551FN2_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_551FN2_II",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-42">
        <div className="d-flex mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "CM_150T_NUM_OLS"
              )}`}
              label="CM_150T_NUM_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OPEN LIM",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-3 ${useColorStatus(
                "CM_150T_NUM_CLS"
              )}`}
              label="CM_150T_NUM_CLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "CLOSE LIM",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OPEN LIM",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "CM_241SG2_OLS"
              )}`}
              label="CM_241SG2_OLS"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "CLOSE LIM",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-3 ${useColorStatus(
                "CM_241SG2_CLS"
              )}`}
              label="CM_241SG2_CLS"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_561LQ1_M04",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_241FM1_PT01",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className={`square mt-2 grey-color`}></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "SFM DRAFT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "NOT IN LIMIT",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-45"
        text={{ useClass: "text-dark ", label: "241AS3" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-46"
        text={{ useClass: "text-dark ", label: "241AS4" }}
      />
      <div className="position-absolute single-text-47 d-flex">
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "MOT_241DV1_30T_OLS"
            )}`}
            label="MOT_241DV1_30T_OLS"
          />
          <BlackContainer
            data={{
              label: "CM_241FN3_II",
              useClass: "greenTxt mt-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "241FM1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "MOT_241DV1_30T_CLS"
            )}`}
            label="MOT_241DV1_30T_CLS"
          />
          <div className={`square mt-3 grey-color`}></div>
        </div>
        <div className="dot p-2 grey-color">M</div>
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "241FN3",
          }}
        />
        <div className="connector-icon ml-2  justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-2  digital-tag ${useColorStatus("CM_241FM1")}`}
            label="CM_241FM1"
            text="M"
          />
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "TO CM INLET",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-50",
          label: "TO CM OL",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_241BF2_PT",
          useClass: "greenTxt  position-absolute single-text-51",
          unit: "Bar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-52 d-flex">
        <MotorCircleDigitalTag
          className={`dot p-2 mt-4  digital-tag ${useColorStatus(
            "CM_K21BE1AX1"
          )}`}
          label="CM_K21BE1AX1"
          text="M"
        />

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-1",
              label: "K21BE1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2  digital-tag ${useColorStatus("CM_K21BE1")}`}
            label="CM_K21BE1"
            text="M"
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_K21BE1_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53 d-flex">
        <BlackContainer
          data={{
            label: "CM_241FB2_WI",
            useClass: "greenTxt mt-2",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`dot p-2  digital-tag ${useColorStatus(
              "CM_241FB2_LHH"
            )}`}
            label="CM_241FB2_LHH"
            text="X"
          />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <BlackContainer
          data={{
            label: "CM_FART_PT",
            useClass: "greenTxt mt-5",
            unit: "kg",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "CM_K21RBH1_HEATER01",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square mt-3 digital-tag mx-auto ${useColorStatus(
              "CM_K21RBH1_FB"
            )}`}
            label="CM_K21RBH1_FB"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-1",
              label: "K21RBH1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "K21FN3",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K21FN3_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K21BF3_DPT",
            useClass: "greenTxt mt-5",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_241FB1_WI",
          useClass: "greenTxt mt-1 position-absolute single-text-56",
          unit: "T",
          unitColor: "unitColor",
        }}
      />
      <MotorCircleDigitalTag
        className={`square mt-3 digital-tag mx-auto position-absolute single-text-57 ${useColorStatus(
          "CM_K21BE1_LH"
        )}`}
        label="CM_K21BE1_LH"
      />
      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "241DG",
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto mt-1"
          squareProps={{
            tagLabel: "CM_241DG2V01",
            squareClass: `${useColorStatus("CM_241DG2V01")}`,
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-59">
        <MimicCaret
          parentClass="tringle-item ml-2 mt-2"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
        <MimicCaret
          parentClass="tringle-item ml-2 mt-4"
          firstCaretClass={`fa-solid grey-color-caret fa-caret-down d-block`}
          secondCaretClass={`fa-solid grey-color-caret fa-caret-up d-block`}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_K11FS1_LI",
          useClass: "greenTxt mt-1 position-absolute single-text-60",
          unit: "M",
          unitColor: "unitColor",
        }}
      />
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>

      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Hr  position-absolute line-6"></div>
      <div className="yellowline-Vr upArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr upArrow position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Vr upArrow position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Hr  position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>
      <div className="yellowline-Vr upArrow position-absolute line-30"></div>
      <div className="yellowline-Hr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr  position-absolute line-34"></div>
      <div className="yellowline-Hr  position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Hr  position-absolute line-37"></div>
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Hr  position-absolute line-44"></div>
      <div className="yellowline-Hr  position-absolute line-45"></div>
      <div className="yellowline-Hr  position-absolute line-46"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-47"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-50"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-52"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-53"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-54"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-55"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-56"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-57"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-58"></div>
      <div className="yellowline-Hr   position-absolute line-59"></div>
      <div className="yellowline-Hr   position-absolute line-60"></div>
    </div>
  );
};
