import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
  TransparentBoxWithGate,
} from "../../../index";
import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const FlyashHandlingMagdalla = () => {
  return (
    <div className="Magdalla-flyash-handling w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute d-flex flex-column">
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("CM_K23BL1")}`}
              label="CM_K23BL1"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K23BL2",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("CM_K23BL2")}`}
              label="CM_K23BL2"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K23BL1",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("CM_K23BL3")}`}
              label="CM_K23BL3"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K23BL3",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("CM_K23BL4")}`}
              label="CM_K23BL4"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K23BL4",
            }}
          />
        </div>
      </div>
      <div className="single-text-2 position-absolute containerImage text-center">
        <BlackContainer
          data={{
            label: "CM_K23SI1_LT",
            useClass: "greenTxt mt-3",
            unit: "M",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-3",
            label: "K23SI1",
          }}
        />
      </div>
      <div className="single-text-3 position-absolute ">
        <div className="truck mb-4"></div>
        <div className="truck"></div>
      </div>
      <div className="single-text-4 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_K23BL2_II",
            useClass: "greenTxt mr-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K23BL2_PT",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-5 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_K23BL1_II",
            useClass: "greenTxt mr-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K23BL1_PT1",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-6 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_K23BL3_II",
            useClass: "greenTxt mr-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K23BL3_PT",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-7 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_K23BL4_II",
            useClass: "greenTxt mr-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K23BL4_PT",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-8 position-absolute ">
        <BlackContainer
          data={{
            label: "CM_K33BF1_PTA",
            useClass: "greenTxt mb-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K33BF1_DPTA",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-9 position-absolute ">
        <BlackContainer
          data={{
            label: "CM_K33BF2_PTA",
            useClass: "greenTxt mb-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K33BF2_DPTA",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag mb-3 ${useColorStatus(
                "CM_K33BF1"
              )}`}
              label="CM_K33BF1"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pl-2",
                label: "K33BF1",
              }}
            />
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle grey-color`}
                label=""
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "K33FN1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-11 position-absolute ">
        <BlackContainer
          data={{
            label: "K33FN1_SI",
            useClass: "greenTxt mb-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K33FN1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-12 position-absolute d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K23CG4",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CM_K23CG4")}`}
            label="CM_K23CG4"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
          <BlackContainer
            data={{
              label: "CM_K23CG4_ZT",
              useClass: "greenTxt mb-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "R_INP_HD1_T01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>

        <div className="dot-square-line d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K33CG1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CM_K33_CG1")}`}
            label="CM_K33_CG1"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
          <BlackContainer
            data={{
              label: "CM_K33CG1_ZT",
              useClass: "greenTxt mb-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "R_INP_HD1_T01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
      </div>
      <div className="single-text-13 position-absolute text-center">
        <div className="containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  pt-2",
              label: "MILL FLYASH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pb-1",
              label: "BIN",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K33BI1_WI",
              useClass: "greenTxt ",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" single-text-14 position-absolute d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag mb-3 ${useColorStatus(
                "CM_K33BF2"
              )}`}
              label="CM_K33BF2"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pl-2",
                label: "K33BF2",
              }}
            />
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag  ${useColorStatus(
                  "CM_K33FN6"
                )}`}
                label="CM_K33FN6"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "K33FN6",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag mb-3 ${useColorStatus(
                "CM_K33BF3"
              )}`}
              label="CM_K33BF3"
            />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag  ${useColorStatus(
                  "CM_K33FN7"
                )}`}
                label="CM_K33FN7"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "K33FN7",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" single-text-15 position-absolute truck"></div>
      <div className="single-text-16 position-absolute ">
        <BlackContainer
          data={{
            label: "CM_K33BF3_PTA",
            useClass: "greenTxt mb-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K33BF3_DPTA",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-17 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CM_K23FN4")}`}
            label="CM_K23FN4"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CM_K23FN5")}`}
            label="CM_K23FN5"
          />
        </div>
      </div>
      <div className="single-text-18 position-absolute text-center">
        <div className="containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pb-2 pt-2",
              label: "K23BI1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K23BI1_WTA",
              useClass: "greenTxt mt-2",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-19 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CM_K23FN1")}`}
            label="CM_K23FN1"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CM_K23FN2")}`}
            label="CM_K23FN2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K23BF1",
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square mb-3 digital-tag  ${useColorStatus(
                "CM_K23BF1"
              )}`}
              label="CM_K23BF1"
            />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle grey-color`}
                label=""
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "K23FN3",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-21 position-absolute ">
        <BlackContainer
          data={{
            label: "CM_K23BF1_PTA",
            useClass: "greenTxt mb-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K23BF1_DPTA",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-22 position-absolute d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <BlackContainer
            data={{
              label: "CM_K23CG3_ZT",
              useClass: "greenTxt mb-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CM_K23CG3")}`}
            label="CM_K23CG3"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K23CG3",
            }}
          />
        </div>
      </div>
      <div className="single-text-23 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "CM_K33FN2"
            )}`}
            label="CM_K33FN2"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "CM_K33FN3"
            )}`}
            label="CM_K33FN3"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "CM_K33FN4"
            )}`}
            label="CM_K33FN4"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "CM_K33FN5"
            )}`}
            label="CM_K33FN5"
          />
        </div>
      </div>
      <div className="single-text-24 position-absolute text-center">
        <BlackContainer
          data={{
            label: "CM_K23BE1_MO1_II",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("CM_K23BE1_M2")}`}
          label="CM_K23BE1_M2"
          text="M"
        />
      </div>
      <div className="single-text-25 position-absolute d-flex flex-column">
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("CM_K33BL1")}`}
              label="CM_K33BL1"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K33BL1",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("CM_K33BL1A")}`}
              label="CM_K33BL1A"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ",
              label: "K33BL1A",
            }}
          />
        </div>
      </div>
      <div className="single-text-26 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_K33BL1_PT",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K33BL1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-27 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_K33BL1A_PT",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K33BL1A_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute border">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "TO MILL INLET",
          }}
        />
      </div>
      <div className="single-text-29 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CM_K33FNA")}`}
            label="CM_K33FNA"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CM_K33FNB")}`}
            label="CM_K33FNB"
          />
        </div>
      </div>
      <div className="single-text-30 position-absolute border">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "TO MILL OUTLET",
          }}
        />
      </div>
      <div className="single-text-31 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`dot p-2 mb-2 digital-tag ${useColorStatus(
            "CM_K33FM1.RUN"
          )}`}
          label="CM_K33FM1.RUN"
          text=""
        />
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="single-text-32 position-absolute">
        <BlackContainer
          data={{
            label: "CM_K33SFF1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-33 position-absolute">
        <BlackContainer
          data={{
            label: "CM_K33SFF1_FR",
            useClass: "greenTxt mb-4",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K33SFF1_PT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-34 position-absolute">
        <BlackContainer
          data={{
            label: "CM_K23CG2_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex single-text-35 position-absolute">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "K31CP1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_K31CP1")}`}
          label="CM_K31CP1"
          text=""
        />
      </div>
      <div className="single-text-36 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "To Atmosphere",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "To Atmosphere",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute">
        <BlackContainer
          data={{
            label: "CM_K23CG1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-39 position-absolute">
        <BlackContainer
          data={{
            label: "CM_K23AH2_RTD",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-40 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K23FN4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K23FN5",
          }}
        />
      </div>
      <div className="single-text-41 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K23FN1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K23FN2",
          }}
        />
      </div>
      <div className="single-text-42 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K33FNA",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K33FNB",
          }}
        />
      </div>
      <div className="single-text-43 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K33FN2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K33FN3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K33FN4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "K33FN5",
          }}
        />
      </div>
      <div className="single-text-44 position-absolute">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CM_K33RA1"
          )}`}
          label="CM_K33RA1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K33RA1",
          }}
        />
      </div>
      <div className="single-text-45 position-absolute">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CM_K33RA2"
          )}`}
          label="CM_K33RA2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K33RA2",
          }}
        />
      </div>
      <div className="single-text-63 position-absolute">
      <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CM_K33RA3"
          )}`}
          label="CM_K33RA3"
        />
               <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K33RA3",
          }}
        />
   
      </div>
      <div className="single-text-46 position-absolute">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CM_K23RA1"
          )}`}
          label="CM_K23RA1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K23RA1",
          }}
        />
      </div>
    
      <div className="single-text-62 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("CM_K23BE1_M01")}`}
          label="CM_K23BE1_M01"
          text=""
        />
      </div>
      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 position-absolute pipeVr"></div>
      <div className="pipe-3 position-absolute pipeVr"></div>
      <div className="pipe-4 position-absolute pipe dotted-pipe d-flex"></div>
      <div className="pipe-5 position-absolute pipeVr"></div>
      <div className="pipe-6 position-absolute pipe dotted-pipe d-flex"></div>
      <div className="pipe-7 position-absolute pipe dotted-pipe "></div>
      <div className="pipe-8 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-9 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-10 position-absolute pipe dotted-pipe"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot digital-tag ${useColorStatus("CM_K23SM1")}`,
          firstCircleLabel: "CM_K23SM1",
        }}
        text={{ label: "K23SM1", useClass: "text-dark" }}
      />
      <div class="yellowline-Hr position-absolute line-1 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-2 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-3"></div>
      <div class="yellowline-Vr position-absolute line-4"></div>
      <div class="yellowline-Vr position-absolute line-5"></div>
      <div class="yellowline-Vr position-absolute line-6 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-7"></div>
      <div class="yellowline-Hr position-absolute line-8"></div>
      <div class="yellowline-Vr position-absolute line-9 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Vr downArrow position-absolute line-10"></div>
      <div class="yellowline-Hr position-acbsolute line-11"></div>
      <div class="yellowline-Vr position-absolute line-12 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-13 d-flex align-items-center justify-content-center pt-3">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-14 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-15"></div>
      <div class="yellowline-Vr position-absolute line-16"></div>
      <div class="yellowline-Vr position-absolute line-17"></div>
      <div class="yellowline-Vr downArrow position-absolute line-18"></div>
      <div class="yellowline-Vr upArrow position-absolute line-19"></div>
      <div class="yellowline-Vr upArrow position-absolute line-20"></div>
      <div class="yellowline-Vr downArrow position-absolute line-21"></div>
      <div class="yellowline-Vr position-absolute line-22 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Hr position-acbsolute line-23"></div>
      <div class="yellowline-Vr downArrow position-absolute line-24"></div>
      <div class="yellowline-Hr position-acbsolute line-25"></div>
      <div class="yellowline-Vr position-absolute line-26 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-27 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-28"></div>
      <div class="yellowline-Hr position-acbsolute line-29"></div>
      <div class="yellowline-Hr position-acbsolute line-30"></div>
      <div class="yellowline-Hr position-acbsolute line-31"></div>
      <div class="yellowline-Vr position-absolute line-32"></div>
      <div class="yellowline-Vr upArrow position-absolute line-33"></div>
      <div class="yellowline-Hr position-acbsolute line-34"></div>
      <div class="yellowline-Hr position-acbsolute line-35"></div>
      <div class="yellowline-Hr position-acbsolute line-36 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Hr position-acbsolute line-37 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-38"></div>
      <div class="yellowline-Vr position-absolute line-39 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Hr position-acbsolute line-40"></div>
      <div class="yellowline-Hr position-acbsolute line-41 d-flex align-items-center pl-3">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Hr position-acbsolute line-42 d-flex align-items-center pl-3">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-43 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-44 d-flex"></div>
      <div class="yellowline-Vr position-absolute line-45"></div>
      <div class="yellowline-Vr position-absolute line-46"></div>
      <div class="yellowline-Vr position-absolute downArrow line-47"></div>
      <div class="yellowline-Vr position-absolute downArrow line-48"></div>
      <div class="yellowline-Vr position-absolute downArrow line-49"></div>
      <div class="yellowline-Vr position-absolute downArrow line-50"></div>
      <div class="yellowline-Vr position-absolute line-51 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <div class="yellowline-Hr position-acbsolute line-52"></div>
      <div class="yellowline-Hr position-acbsolute line-53"></div>
      <div class="yellowline-Vr position-absolute line-54 d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-55"></div>
      <div class="yellowline-Hr position-acbsolute line-56"></div>
      <div class="yellowline-Vr position-absolute line-57"></div>
      <div class="yellowline-Vr position-absolute line-58"></div>
      <div class="yellowline-Hr rightarrow position-acbsolute line-59"></div>
      <div class="yellowline-Hr rightarrow position-acbsolute line-60"></div>
      <div class="yellowline-Vr upArrow position-absolute line-61"></div>
      <div class="yellowline-Vr upArrow position-absolute line-62"></div>
      <div class="yellowline-Hr position-acbsolute line-63"></div>
      <div class="yellowline-Vr position-acbsolute line-64"></div>
    </div>
  );
};
