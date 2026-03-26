import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
//
export const RawMillGrindingKotputli = () => {
  return (
    <div className="RawMillGrindingKotputli w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1 ">
        <div className="d-flex mb-3">
          <div className="d-flex">
            <div>
              <span className={`dot green-color mr-2`}></span>
              <div className="yellowline-Vr downArrow  position-absolute line-39a ml-2"></div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-auto mt-2 mr-2",
                  label: "WF1",
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <span className={`dot green-color mr-2`}></span>
              <div className="yellowline-Vr downArrow  position-absolute line-39a ml-2"></div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-auto mt-2 mr-2",
                  label: "WF2",
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <span className={`dot green-color mr-2`}></span>
              <div className="yellowline-Vr downArrow  position-absolute line-39a ml-2"></div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-auto mt-2 mr-2",
                  label: "WF3",
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <span className={`dot green-color mr-2`}></span>
              <div className="yellowline-Vr downArrow  position-absolute line-39a ml-2"></div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-auto mt-2 mr-2",
                  label: "WF4",
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <span className={`dot green-color mr-2`}></span>
              <div className="yellowline-Vr downArrow  position-absolute line-39a ml-2"></div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-auto mt-2 mr-2",
                  label: "WF5",
                }}
              />
            </div>
          </div>
        </div>
        <div className="hpipecircle">
          <span className={`dot grayDot `}></span>
          <MotorCircleDigitalTag
            className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RMH_332BC1_RUN", healthyLabel: "RMH_332BC1_PH" })} ml-2`}
            text="M"
            label="RMH_332BC1_RUN"
          />
          {/* <span className={`dot ${useColorStatus("RMH_332BC1")} `}>M</span> */}
        </div>
        <div className="d-flex justify-content-center">
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RMH_332BC1_DE_MG")}`} label="RMH_332BC1_DE_MG" />

          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RMH_332BC1_NDE_MG")}`} label="RMH_332BC1_NDE_MG" />

          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RMH_332BC1_ZSS")}`} label="RMH_332BC1_ZSS" />
          <span className={`dot mr-2 ${useColorStatus("RMH_332BC2")}`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "322BC1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-2">
        <div className="hpipecircle">
          <span className={`dot greenDot `}>M</span>
          <span className={`dot grayDot `}></span>
        </div>
        <div className="d-flex justify-content-end">
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RMH_332BC2_VGTU1")}`} label="RMH_332BC2_VGTU1" />
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RMH_332BC2_VGTU2")}`} label="RMH_332BC2_VGTU2" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362AD1_RUN", healthyLabel: "RM_362AD1_PH" })} ml-auto mr-1 mt-2`}
            text="M"
            label="RM_362AD1_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 mr-1",
              label: "362AD1",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ",
              label: "362BE1",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362BE1_II",
              useClass: "greenTxt ml-1 mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-4">
        <div className="hpipecircle">
          <span className={`dot grayDot `}></span>
          <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_332BC3_RUN", healthyLabel: "RM_332BC3_PH" })}`} label="RM_332BC3_RUN" />
          <div className="yellowline-Vr downArrow arrow ml-auto"></div>
        </div>
        <div className="d-flex  ml-auto">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-2 mr-2",
              label: "332DG1",
            }}
          />
          <div className="gray-green-red-img red-img"></div>
        </div>
      </div>
      <div className=" position-absolute  single-text-5">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens("RM_362BE1")} digital-tag`,
            firstCircleText: "M",
            firstCircleLabel: "RM_362BE1_RUN",
          }}
        />

        <div className="mt-5 ml-3">
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("RM_362BE1_TS")}`} label="RM_362BE1_TS" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("RM_362BE1_ZS1")}`} label="RM_362BE1_ZS1" />
        </div>
      </div>

      <div className="containerImage text-center position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "REJECT BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "362Bl1",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362BI1_WI",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "REJECT BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "362Bl2",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362BI2_WI",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-8">
        <div className="hpipecircle">
          <span className={`dot ${"RM_362BC2"} `}></span>
          <MotorCircleDigitalTag
            className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362BC2_RUN", healthyLabel: "RM_362BC2_PH" })} ml-2`}
            text="M"
            label="RM_362BC2_RUN"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-4 ml-2",
              label: "362-BC2",
            }}
          />
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_362BC2_NDE_MG")}`} label="RM_362BC2_NDE_MG" />
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_362BC2_DE_MG")}`} label="RM_362BC2_DE_MG" />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-3",
            label: "362DG1",
          }}
        />
        <div className="gray-green-red-img red-img"></div>
      </div>
      <div className="bigContainer text-center pt-3 position-absolute single-text-10"></div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="triangle-with-squares text-center"></div>
        <div className="triangle-with-squares text-center"></div>
        <div className="triangle-with-squares text-center"></div>
        <div className="triangle-with-squares text-center"></div>
      </div>
      <div className="chimni-red position-absolute single-text-12"></div>

      <div className="dashedHr-Pipe position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ",
            label: "392AS1",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-auto",
            label: "392AS2",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="d-flex mb-2 ">
          <div className="d-flex  mr-2">
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA1_OLS")}`} label="RM_392GA1_OLS" />
          </div>
          <div className="d-flex  mr-2">
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA1_CLS")}`} label="RM_392GA1_CLS" />
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA2_OLS")}`} label="RM_392GA2_OLS" />
          </div>
          <div className="d-flex  mr-2">
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA2_CLS")}`} label="RM_392GA2_CLS" />
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA3_OLS")}`} label="RM_392GA3_OLS" />
          </div>
          <div className="d-flex  mr-2">
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA3_CLS")}`} label="RM_392GA3_CLS" />
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA4_OLS")}`} label="RM_392GA4_OLS" />
          </div>
          <div className="d-flex  ml-3">
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_392GA4_CLS")}`} label="RM_392GA4_CLS" />
          </div>
        </div>
        <div className="d-flex ">
          <div className="d-flex gap text-center mr-1">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA1")}`} label="RM_392RA1_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 ",
                label: "392RA1",
              }}
            />
          </div>
          <div className="d-flex gap text-center mr-1">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA2")}`} label="RM_392RA2_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 ",
                label: "392RA2",
              }}
            />
          </div>
          <div className="d-flex gap text-center mr-1">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA3")}`} label="RM_392RA3_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 ",
                label: "392RA3",
              }}
            />
          </div>
          <div className="d-flex gap text-center mr-1">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA4")}`} label="RM_392RA4_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 ",
                label: "392RA4",
              }}
            />
          </div>
        </div>
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 ml-2",
            label: "REJECTS",
          }}
        />
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20">
        <dev className="d-flex">
          <MotorCircleDigitalTag
            className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_332RF1_RUN", healthyLabel: "RM_332RF1_PH" })} mr-2`}
            text="M"
            label="RM_332RF1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "332-RF1",
            }}
          />
        </dev>
      </div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-34"></div>
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Vr upArrow position-absolute line-38"></div>

      <div className="position-absolute text-center single-text-16 d-flex">
        <div>
          <div className="yellowline-Vr position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN1")}`} label="RM_392FN1_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN1",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN1A")}`} label="RM_392FN1A_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN1A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-17 d-flex">
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN2")}`} label="RM_392FN2_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN2",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN2A")}`} label="RM_392FN2A_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN2A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "392AS3",
            }}
          />
          <div className="dashedHr-Pipe "></div>
        </div>
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="position-absolute text-center single-text-19 d-flex">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN3")}`} label="RM_392FN3_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN3",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN3A")}`} label="RM_392FN3A_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN3A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-20 d-flex">
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <span>
            <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN4")}`} label="RM_392FN4_RUN" />
          </span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-22 d-flex">
        <div>
          <div className="yellowline-Vr upArrow  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN5")}`} label="RM_392FN5_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN5",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN5A")}`} label="RM_392FN5A_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN5A",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN6")}`} label="RM_392FN6_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN6",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN6A")}`} label="RM_392FN6A_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN6A",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN7")}`} label="RM_392FN7_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN7",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FN8")}`} label="RM_392FN8_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FN8",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-23">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens("CR_212BC2")} digital-tag`,
            firstCircleText: "M",
            firstCircleLabel: "CR_212BC2_RUN",
          }}
        />
        <div className="mt-5 ml-3">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("RM_392BE1_ZS1")}`} label="RM_392BE1_ZS1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("RM_392BE1_ZS2")}`} label="RM_392BE1_ZS2" />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto",
            label: "392AS5",
          }}
        />
      </div>

      <div className="position-absolute text-center single-text-25 d-flex">
        <div>
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FNC")}`} label="RM_392FNC_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNC",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FND")}`} label="RM_392FND_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FND",
            }}
          />
        </div>

        <div className="ml-4">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FNE")}`} label="RM_392FNE_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNE",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-26"></div>
      <div className="position-absolute text-center single-text-27 d-flex">
        <div>
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNF_RUN", healthyLabel: "RM_392FNF_PH" })}`}
            label="RM_392FNF_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNF",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNG_RUN", healthyLabel: "RM_392FNG_PH" })}`}
            label="RM_392FNG_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNG",
            }}
          />
        </div>

        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNH_RUN", healthyLabel: "RM_392FNH_PH" })}`}
            label="RM_392FNH_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNH",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-28 d-flex">
        <div>
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNJ_RUN", healthyLabel: "RM_392FNJ_PH" })}`}
            label="RM_392FNJ_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNJ",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNK_RUN", healthyLabel: "RM_392FNK_PH" })}`}
            label="RM_392FNK_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNK",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 ml-1",
            label: "RAW MILL BH",
          }}
        />
        <div className="squareplustri text-center "></div>
      </div>

      <div className="position-absolute single-text-30 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "362BF1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-info text-dark",
              label: "BF1 BYP",
            }}
          />
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
            <div className="d-flex align-items-end justify-content-center ml-5 mt-3">
              <MotorCircleDigitalTag className={`circle-img p-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_362RA1")}`} label="RM_362RA1_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "362RA1",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-4",
              label: "332BC3",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RM_362BF1_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362BF1_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362FN3_RUN", healthyLabel: "RM_362FN3_PH" })}`} label="RM_362FN3_RUN" />
              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>{" "}
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_362FN3_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362FN3_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362FN3",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ",
              label: "362FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "362BF2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-info text-dark",
              label: "BF2 BYP",
            }}
          />
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
            <div className="d-flex align-items-end justify-content-center ml-5 mt-3">
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_362RA2")}`} label="RM_362RA2_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "362RA2",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-4",
              label: "332BC3",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RM_362BF2_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362BF2_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362FN4_RUN", healthyLabel: "RM_362FN4_PH" })}`} label="RM_362FN4_RUN" />

              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_362FN4_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362FN4_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362FN4",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ",
              label: "362FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "392BF1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-info text-dark",
              label: "BF1 BYP",
            }}
          />
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
            <div className="d-flex align-items-end justify-content-center ml-5 mt-3">
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA5A")}`} label="RM_392RA5A_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "392RA5",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RM_392BF1_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_392BF1_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_392FNA")}`} label="RM_392FNA_RUN" />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362FNA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "392BF2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-info text-dark",
              label: "BF2 BYP",
            }}
          />
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
            <div className="d-flex align-items-end justify-content-center ml-5 mt-3">
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA6")}`} label="RM_392RA6_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "392RA6",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RM_392BF2_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_392BF2_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FN9_RUN", healthyLabel: "RM_392FN9_PH" })}`}
                text="M"
                label="RM_392FN9_RUN"
              />
              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_392FN9_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_392FN9_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_392FN9",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "392FN9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "392BF1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-info text-dark",
              label: "BF5 BYP",
            }}
          />
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
            <div className="d-flex align-items-end justify-content-center ml-5 mt-3">
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA5")}`} label="RM_392RA5_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "392RA5",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4 ",
              label: "TO SILO",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RM_392BF5_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_392BF5_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_332BC3_RUN", healthyLabel: "RM_332BC3_PH" })}`} label="RM_332BC3_RUN" />
              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_392FNL_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_392FNL_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_392FNL",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "392FNL",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-35">
        <div className="d-flex position-absolute single-text-37">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-danger p-1",
              label: "RM HYDRAULICS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light p-1 ml-2",
              label: "SOV",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="mr-4">
            <BlackContainer
              data={{
                label: "571BE_II",
                useClass: "greenTxt ml-2 mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "571BE_II",
                useClass: "greenTxt ml-2 mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "571BE_II",
                useClass: "greenTxt ml-2 mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "362PU1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU1_RUN", healthyLabel: "RM_362PU1_PH" })} ml-2`}
                text="M"
                label="RM_362PU1_RUN"
              />
            </div>
            <BlackContainer
              data={{
                label: "RM_362HT1_LT01",
                useClass: "greenTxt ml-2 mt-2",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362HT1_PT5",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362HT1_PT6",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "RM_362HT1_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362HT1_PT2",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362HT1_PT3",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362HT1_PT4",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 mr-1",
                  label: "R1",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362HT1_RP1",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 mr-1",
                  label: "R2",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362HT1_RP2",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 mr-1",
                  label: "R3",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362HT1_RP3",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 mr-1",
                  label: "R4",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_362HT1_RP4",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-36">
        <div className="d-flex position-absolute single-text-37">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-danger p-1",
              label: "RM_GEARBOX",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mb-2",
                label: "FP",
              }}
            />

            {/* <MotorCircleDigitalTag
            className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens(
              "W2_STG_MT_250"
            )} ml-2`}
            text="M1"
            label="W2_STG_MT_250_RUN"
          /> */}
            <MotorCircleDigitalTag
              className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU3_RUN", healthyLabel: "RM_362PU3_PH" })}`}
              text="M"
              label="RM_362PU3_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-2",
                label: "362PU3",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mb-2",
                label: "LP",
              }}
            />
            {/* <span className={`dot mt-2 p-1 ${useColorStatus("RM_362PU4")}`}>
              M
            </span> */}
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU4_RUN", healthyLabel: "RM_362PU4_PH" })}`}
              text="M"
              label="RM_362PU4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-2",
                label: "362PU4",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mb-2",
                label: "HP1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU5_RUN", healthyLabel: "RM_362PU5_PH" })}`}
              text="M"
              label="RM_362PU5_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-2",
                label: "362PU5",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mb-2",
                label: "HP2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU6_RUN", healthyLabel: "RM_362PU6_PH" })}`}
              text="M"
              label="RM_362PU6_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-2",
                label: "362PU6",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mb-2",
                label: "HP3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU7_RUN", healthyLabel: "RM_362PU7_PH" })}`}
              text="M"
              label="RM_362PU7_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-2",
                label: "362PU7",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mb-2",
                label: "HP4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU8_RUN", healthyLabel: "RM_362PU8_PH" })}`}
              text="M"
              label="RM_362PU8_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-2",
                label: "362PU8",
              }}
            />
          </div>
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-38">
        <div className="d-flex position-absolute single-text-37 ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-danger p-1",
              label: "ROLLER LUB",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 bg-light p-1",
              label: "ROLLER",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <div className="mr-2">
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_TT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ",
                  label: "362PUB",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PUB_RUN", healthyLabel: "RM_362PUB_PH" })}`}
                text="M"
                label="RM_362PUB_RUN"
              />
            </div>
          </div>
          <div className="mr-2">
            <BlackContainer
              data={{
                label: "RM_362LQ12_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ12_TT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ",
                  label: "362PUC",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PUC_RUN", healthyLabel: "RM_362PUC_PH" })} ml-2`}
                text="M"
                label="RM_362PUC_RUN"
              />
            </div>
          </div>
          <div className="mr-2">
            <BlackContainer
              data={{
                label: "RM_362LQ13_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ13_TT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ",
                  label: "362PUD",
                }}
              />

              <MotorCircleDigitalTag
                className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PUD_RUN", healthyLabel: "RM_362PUD_PH" })} ml-2`}
                text="M"
                label="RM_362PUD_RUN"
              />
            </div>
          </div>
          <div className="mr-2">
            <BlackContainer
              data={{
                label: "RM_362LQ14_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ14_TT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ",
                  label: "362PUE",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PUE_RUN", healthyLabel: "RM_362PUE_PH" })} ml-2`}
                text="M"
                label="RM_362PUE_RUN"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-39">
        <div className="d-flex position-absolute single-text-37 ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-danger p-1",
              label: "CLASSIFIER LUB.",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <div className="mr-1">
            <BlackContainer
              data={{
                label: "RM_362GB2_TT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />

            <MotorCircleDigitalTag
              className={`dot line-circle mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362CNF_RUN", healthyLabel: "RM_362CNF_PH" })} ml-2`}
              label="RM_362CNF_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "362CNF",
              }}
            />
          </div>
          <div className="mr-1">
            <MotorCircleDigitalTag className={`dot motor-dot mt-2 p-1 ${useColorStatus("RM_362GB2_LS")} ml-2`} text="L" label="RM_362GB2_LS" />
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PU9_RUN", healthyLabel: "RM_362PU9_PH" })} ml-2`}
              text="M"
              label="RM_362PU9_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "362PU9",
              }}
            />
          </div>
          <div className="mr-1">
            <MotorCircleDigitalTag className={`dot motor-dot mt-2 p-1 ${useColorStatus("RM_362LQ2_DPS1")} ml-2`} text="P" label="RM_362LQ2_DPS1" />
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362PUA_RUN", healthyLabel: "RM_362PUA_PH" })} ml-2`}
              text="M"
              label="RM_362PUA_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "362PUA",
              }}
            />
          </div>
          <div className="">
            <MotorCircleDigitalTag className={`dot motor-dot mt-2 p-1 ${useColorStatus("RM_362LQ2_DPS1")} ml-2`} text="P" label="RM_362LQ2_DPS1" />
          </div>
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-40">
        <div className="d-flex position-absolute">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SHAFT LUBRICATION SYSTEM",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <div className="mr-2">
            <div className="d-flex">
              <MotorCircleDigitalTag className={`dot motor-dot mt-2 p-1 ${useColorStatus("RM_362LQ3_FS01")} ml-2`} text="F" label="RM_362LQ3_FS01" />
              <MotorCircleDigitalTag className={`dot motor-dot mt-2 p-1 ${useColorStatus("RM_362LQ3_LS01")} ml-2`} text="L" label="RM_362LQ3_LS01" />
            </div>

            <MotorCircleDigitalTag
              className={`dot motor-dot mt-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362LQ3_RUN", healthyLabel: "RM_362LQ3_PH" })} ml-2`}
              text="M"
              label="RM_362LQ3_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "362LQ3",
              }}
            />
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "TOP",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "MID",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "BOT",
              }}
            />
          </div>
          <div className="mr-2">
            <div className="d-flex">
              <BlackContainer
                data={{
                  label: "RM_362SR1_TT1",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "PL1",
                }}
              />
            </div>
            <div className="d-flex">
              <BlackContainer
                data={{
                  label: "RM_362SR1_TT2",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "PL1",
                }}
              />
            </div>
            <div className="d-flex">
              <BlackContainer
                data={{
                  label: "RM_362SR1_TT3",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "PL1",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-41 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RMH_332WF1_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF1_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF1_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RMH_332WF2_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF2_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF2_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RMH_332WF3_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF3_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF3_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RMH_332WF4_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF4_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF4_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RMH_332WF5_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF5_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF5_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "332BF1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-info text-dark",
              label: "BF1 BYP",
            }}
          />
          <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
            <div className="d-flex align-items-end justify-content-center ml-5 mt-3">
              {/* <div className={`dot green-color p-2`}></div> */}
              <MotorCircleDigitalTag className={`dot circle-img p-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_332RA1")}`} label="RM_332RA1_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "332RA1",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4 ",
              label: "332BC1",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RMH_332BF1_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332BF1_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <span className={`dot green-color p-2`}>
                {" "}
                <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
              </span>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RMH_332FN1_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RMH_332FN1_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_332FN1",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "332FN1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "RM_362RM1_TT2",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362RM1_PT3",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362RM1_PT2",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362SR1_II",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362SR1_JI",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "RM_362SR1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362RM1_PT1",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM_362SR1",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362WI1_FT1",
            useClass: "greenTxt mt-5",
            unit: "m3/hr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <div>
          {/* <span className={`dot ml-4 mb-2 ${useColorStatus("")}`}>M</span> */}
          <MotorCircleDigitalTag className={`dot motor-dot mb-4 ${useColorStatus("RM_362MD1")} ml-2`} text="M" label="RM_362MD1" />
        </div>
        <div className="d-flex mb-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "362SR1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362SR1_RUN", healthyLabel: "RM_362SR1_TRIP" })}`}
            text="M"
            label="RM_362SR1_RUN"
          />
          <div className="yellowline-Vr downArrow arrow ml-auto"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger",
            label: "362SR1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "RAW MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362RM1_DPT",
            useClass: "greenTxt ml-2 mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "362RM1",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362HT1_BH",
            useClass: "greenTxt ml-2 mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362MD1_XT01",
            useClass: "greenTxt ml-2 mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <span className={`dot ml-3 mt-3 ${useColorStatus("RM_362MD1")}`}>M</span>
        <BlackContainer
          data={{
            label: "RM_362MD1_ITA",
            useClass: "greenTxt ml-2 mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362MD1_JTA",
            useClass: "greenTxt ml-2 mt-2",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div className="mr-3">
          <MotorCircleDigitalTag className={`line-circle mt-2 ml-2 p-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_362FN2")}`} label="RM_362FN2_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362FN2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "362FN2A",
            }}
          />

          <MotorCircleDigitalTag className={`line-circle mt-2 ml-2 p-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens("RM_362FN2A")}`} label="RM_362FN2A_RUN" />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "571BE_II",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362FN2_PT01",
              useClass: "greenTxt  mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362FN2_PT02",
              useClass: "greenTxt  mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362FN2_PT03",
              useClass: "greenTxt  mt-3",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362FN2_PT04",
              useClass: "greenTxt  mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <span className={`square mt-1 ml-3 ${useColorStatus("")}`}></span>
          <BlackContainer
            data={{
              label: "RM_362BW1_FR",
              useClass: "greenTxt  mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <div className="hpipecircle mt-2">
            <span className={`dot grayDot `}></span>
            <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362BC1_RUN", healthyLabel: "RM_362BC1_PH" })} ml-2`} label="RM_362BC1_RUN" />
          </div>
          <div className="d-flex justify-content-center">
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_362SG1_CLS")}`} label="RM_362SG1_CLS" />
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("CM_573GA1_CLS")}`} label="CM_573GA1_CLS" />

            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_362BC1_NDE_MG")}`} label="RM_362BC1_NDE_MG" />
            <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_362BC1_DE_MG")}`} label="RM_362BC1_DE_MG" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-46">
        <BlackContainer
          data={{
            label: "RM_362WP1_SI",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362WP1_ST",
            useClass: "greenTxt ml-2 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362WP1",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "RM_362WP1A_SI",
            useClass: "greenTxt ml-2 mt-4",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362WP1A_ST",
            useClass: "greenTxt ml-2 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362WP1A",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "RM_362RM1_PT4",
              useClass: "greenTxt mr-3 mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362CN2_PT02",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362CN4_PT04",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex ml-5 mt-2">
          <BlackContainer
            data={{
              label: "RM_362CN1_PT01",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362CN3_PT03",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362FN1_RUN", healthyLabel: "RM_362FN1_PH" })}`} label="RM_362FN1_RUN" />
        <div className="yellowline-Vr downArrow arrow ml-auto"></div>
      </div>

      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "362FN1",
          }}
        />

        <BlackContainer
          data={{
            label: "RM_362FN1_JI01",
            useClass: "greenTxt ml-2 mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362FN1_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362FN1_SI",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362FN1",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mt-2",
            label: "FAN TRIP TIME",
          }}
        />
        <BlackContainer
          data={{
            label: "571BE_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "PH_422FN1_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_422FN1_JI",
            useClass: "greenTxt ml-2 mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_422FN1_SI",
            useClass: "greenTxt ml-2 mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <span>
            <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_422FN1_RUN", healthyLabel: "PH_422FN1_PH" })} ml-2`} label="PH_422FN1_RUN" />
          </span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422FN1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_422FN1",
            useClass: "greenTxt ml-2 mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <div></div>
        <div>
          <BlackContainer
            data={{
              label: "RM_332BC3_II",
              useClass: "greenTxt ml-2 mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_332BC3_SI",
              useClass: "greenTxt ml-2 mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_332BC3",
              useClass: "greenTxt ml-2 mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <BlackContainer
          data={{
            label: "RM_362RM1_PT5",
            useClass: "greenTxt  ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362RM1_TT3",
            useClass: "greenTxt  mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "RM_362RM1_TT4",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "RM_362RM1_PT6",
              useClass: "greenTxt   mt-4",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <BlackContainer
          data={{
            label: "RM_362RM1_PT1",
            useClass: "greenTxt  ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362RM1_TT1",
            useClass: "greenTxt ml-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-55 d-flex">
        <BlackContainer
          data={{
            label: "RM_362RM1_TT5",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362RM1_PT7",
            useClass: "greenTxt  ml-3",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-56 ">
        <BlackContainer
          data={{
            label: "RM_392BE1_M01_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_392BE1_M02_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "392AD1",
            }}
          />

          <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392AD1_RUN", healthyLabel: "RM_392AD1_PH" })} p-2 ml-2`} label="RM_392AD1_RUN" />
          <span className={`dot p-2 ml-2 ${useColorStatus("RM_392BE1")}`}>M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "392BE1",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "RM_362RM1_TT6",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362RM1_PT8",
            useClass: "greenTxt ml-4 mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_332RF1_PTC")}`} label="RM_332RF1_PTC" />
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_332RF1_PTC")}`} label="RM_332RF1_PTC" />
        </div>
        <BlackContainer
          data={{
            label: "RM_332RF1_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362BE1_BMS_SI",
            useClass: "greenTxt mt-5",
            unit: "b/m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <BlackContainer
          data={{
            label: "RM_392BE1_BMS_SI",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV7_OLS", closeLabel: "RM_392BV7_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV7_OLS", closeLabel: "RM_392BV7_CLS" })}`}
          label="RM_392BV7_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "BV7",
          }}
        />
      </div>
      <div className="position-absolute single-text-61 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BV8",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV8_OLS", closeLabel: "RM_392BV8_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV8_OLS", closeLabel: "RM_392BV8_CLS" })}`}
          label="RM_392BV8_OLS"
        />
      </div>
      <div className="position-absolute single-text-62 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV5_OLS", closeLabel: "RM_392BV5_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV5_OLS", closeLabel: "RM_392BV5_CLS" })}`}
          label="RM_392BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV6_OLS", closeLabel: "RM_392BV6_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV6_OLS", closeLabel: "RM_392BV6_CLS" })}`}
          label="RM_392BV6_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BV6",
          }}
        />
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV1_OLS", closeLabel: "RM_392BV1_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV1_OLS", closeLabel: "RM_392BV1_CLS" })}`}
          label="RM_392BV1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-65 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BV2",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV2_OLS", closeLabel: "RM_392BV2_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV2_OLS", closeLabel: "RM_392BV2_CLS" })}`}
          label="RM_392BV2_OLS"
        />
      </div>
      <div className="position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-4",
            label: "BV9",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block gdigital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV9_OLS", closeLabel: "RM_392BV9_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV9_OLS", closeLabel: "RM_392BV9_CLS" })}`}
          label="RM_392BV9_OLS"
        />
      </div>
      <div className="position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-4",
            label: "BVA",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block gdigital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BVA_OLS", closeLabel: "RM_392BVA_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BVA_OLS", closeLabel: "RM_392BVA_CLS" })}`}
          label="RM_392BVA_OLS"
        />
      </div>
      <div className="position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "BV3",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV3_OLS", closeLabel: "RM_392BV3_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV3_OLS", closeLabel: "RM_392BV3_CLS" })}`}
          label="RM_392BV3_OLS"
        />
      </div>
      <div className="position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "BV4",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV4_OLS", closeLabel: "RM_392BV4_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV4_OLS", closeLabel: "RM_392BV4_CLS" })}`}
          label="RM_392BV4_OLS"
        />
      </div>
      <div className="box-1 p-2 position-absolute single-text-70">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2 mr-2",
              label: "Total Feed Sp",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_TOTAL_FEED_SP",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2 mr-2",
              label: "Total Feed Rate",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_TOTAL_FEED_RATE",
              useClass: "greenTxt",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mt-2",
            label: "RECIPE",
          }}
        />
      </div>
      <div className="position-absolute single-text-71">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "362SD2",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>

          <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_SD2_OLS", closeLabel: "RM_362_SD2_CLS" })}`}></div>
        </div>
        <BlackContainer
          data={{
            label: "RM_362_SD2",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362_SD2",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-72">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "362LD2",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_LD2_OLS", closeLabel: "RM_362_LD2_CLS" })}`}></span>
        </div>
        <BlackContainer
          data={{
            label: "RM_362_LD2",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362_LD2",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-73">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "362SD3",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_SD3_OLS", closeLabel: "RM_362_SD3_CLS" })}`}></span>
        </div>
        <BlackContainer
          data={{
            label: "RM_362_SD3",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362_SD3",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "362LD3",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>

          <div className={`dot mr-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_LD3_OLS", closeLabel: "RM_362_LD3_CLS" })}`}></div>
        </div>
        <BlackContainer
          data={{
            label: "RM_362_LD3",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_362_LD3",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-75 d-flex ">
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "RM_362_LD4",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362_LD4",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_LD4_OLS", closeLabel: "RM_362_LD4_CLS" })}`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362LD4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-76 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute ml-5",
            label: "FRESH AIR",
          }}
        />
        <div className="d-flex ">
          <div className="mr-2">
            <BlackContainer
              data={{
                label: "RM_362_LD5",
                useClass: "greenTxt mt-4",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362_LD5",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-3">
            <div className="squre"></div>
            <div className="yellowline-Hr  hr-left"></div>
            <div className={`dot go mr-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_LD5_OLS", closeLabel: "RM_362_LD5_CLS" })}`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "362LD5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-77 d-flex ">
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "RM_362SG2",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362SG2",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`dot go mr-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362SG2_OLS", closeLabel: "RM_362SG2_CLS" })}`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362SG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-78 d-flex ">
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "RM_362SG3",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_362SG3",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`dot go mr-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362SG3_OLS", closeLabel: "RM_362SG3_CLS" })}`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362SG3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-79 d-flex ">
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <div className={`dot go mr-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_SD1_OLS", closeLabel: "RM_362_SD1_CLS" })}`}></div>

          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TO COAL MILL",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362_SD1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362_SD1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-80 d-flex ">
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>

          <div className={`dot go mr-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "RM_362_LD1_OLS", closeLabel: "RM_362_LD1_CLS" })}`}></div>

          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "362SD1",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362_LD1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362_LD1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="position-absolute single-text-1111">
     <MimicCaret
        parentClass="tringle-item"
        firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${useCaretColorStatus("RM_392BV3")}`}
        secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${useCaretColorStatus("RM_392BV3")}`}
      />
      </div> */}
      <div className="containerImage text-center position-absolute single-text-81">
        <BlackContainer
          data={{
            label: "RM_362WI1_LT1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-82">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "362WP1",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362WP1_RUN", healthyLabel: "RM_362WP1_PH" })} mr-2`} label="RM_362WP1_RUN" />
        </div>

        <div className="d-flex mt-3">
          <MotorCircleDigitalTag className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_362WP1A_RUN", healthyLabel: "RM_362WP1A_PH" })} mr-2`} label="RM_362WP1A_RUN" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "362WP1A",
          }}
        />
      </div>
      <div className="position-absolute single-text-83">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_362AD1_ZS")}`} label="RM_362AD1_ZS" />
          <span className={`dot mr-2 ${useColorStatus("RM_362_MD_AD1")}`}>M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2",
            label: "362MD-AD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-84">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "362-FV1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger mt-2 ml-2",
            label: "362MD1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "362BC1",
          }}
        />
      </div>
      <div className="position-absolute single-text-85">
        <div className="d-flex ml-2">
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RMH_332BC2_DE_MG")}`} label="RMH_332BC2_DE_MG" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-2",
              label: "332BC2",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "571BE_II",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "T-DAY",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "RM_332MT1_LASTDAY",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "Y-DAY",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_332MT1_MD")}`} label="RM_332MT1_MD" />
          <MotorCircleDigitalTag className={`square mr-2 digital-tag ${useColorStatus("RM_332MT1_PH")}`} label="RM_332MT1_PH" />
        </div>
      </div>
      <div className="position-absolute single-text-86">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SV2",
          }}
        />
        <MimicCaret
          parentclass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_362WI1_SV1", closeLabel: "RM_362WI1_SV1" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_362WI1_SV1", closeLabel: "RM_362WI1_SV1" })}`}
        />
      </div>
      <div className="position-absolute single-text-86A d-flex">
        <MimicCaret
          parentclass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_362WT1_SV1", closeLabel: "RM_362WT1_SV1" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_362WT1_SV1", closeLabel: "RM_362WT1_SV1" })}`}
          label="RM_362WT1_SV1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-87 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SV1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_362WI1_SV2", closeLabel: "RM_362WI1_SV2" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_362WI1_SV2", closeLabel: "RM_362WI1_SV2" })}`}
          label="RM_362WI1_SV2"
        />
      </div>
      <div className="position-absolute single-text-88 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-89 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-up d-block grey-color-caret ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-90 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-up d-block grey-color-caret ${"541SG1"}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM PREHEATER FAN",
          }}
        />
      </div>
      <div className="position-absolute single-text-91">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "392SG5",
          }}
        />
        <span className={`square go mr-2 ${useColorStatus("RM_392SG5_OLS")}`}></span>
        <span className={`square go mr-2 mt-3 ${useColorStatus("RM_392SG5_CLS")}`}></span>
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`square go mr-2 ${useColorStatus("RM_392BE1_ZSS")}`}></span>
        </div>
      </div>
      <div className="position-absolute single-text-92">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "362SG1",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`graySqure go mr-2 ${"_541LQ3"}`}></span>
        </div>

        <MotorCircleDigitalTag className={`square go mr-2 digital-tag ${useColorStatus("RM_362MD1_XT01_HH")}`} label="RM_362MD1_XT01_HH" />
      </div>

      {/* <div className="position-absolute single-text-83">
     <div className="d-flex">
        <span className={`greenSqure mr-2 ${("_541LQ3")}`}></span>
     <span className={`greenDot mr-2 ${("_541LQ3")}`}>M</span>
        </div>
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 ml-2",
          label: "362MD-AD1",
        }}
      />
      
  </div> */}
      <div className="position-absolute single-text-93">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot motor-dot ${useColorStatus("RM_362MT1_MD")} ml-2`} label="RM_362MT1_MD" />
          <MotorCircleDigitalTag className={`square ml-3 digital-tag ${useColorStatus("RM_362MT1_PH")}`} label="RM_362MT1_PH" />
        </div>
      </div>
      <div className=" position-absolute single-text-94">
        <div className="d-flex">
          <div className="hpipecircle">
            <MotorCircleDigitalTag
              className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392SM1_RUN", healthyLabel: "RM_392SM1_PH" })} ml-2`}
              text="M"
              label="RM_392SM1_RUN"
            />
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "SM1",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("RM_392SM1_ZS")}`} label="RM_392SM1_ZS" />
      </div>
      <div className=" position-absolute single-text-95 d-flex">
        <div className="hpipecircle">
          <MotorCircleDigitalTag
            className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392SM2_RUN", healthyLabel: "RM_392SM2_PH" })} ml-2`}
            text="M"
            label="RM_392SM2_RUN"
          />
          <span className={`dot ${"RM_362BC2"} `}></span>
        </div>
      </div>
      <div className=" position-absolute single-text-96">
        <span className={`square mr-5 mt-auto ${useColorStatus("RM_362BE1_ZSS")}`}></span>
      </div>
      <div className=" position-absolute single-text-97 ">
        <MotorCircleDigitalTag className={`square mr-5 mt-auto digital-tag ${useColorStatus("CM_573GA1_CLS")}`} label="CM_573GA1_CLS" />
      </div>
      {/* add */}
      <div className=" position-absolute single-text-98 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_422BF1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_TT1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_422BF1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-99">
        <BlackContainer
          data={{
            label: "RM_362BC2_VFD_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="yellowline-Hr  position-absolute line-42"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-43"></div>
      <div className="yellowline-Vr   position-absolute line-44"></div>
      <div className="yellowline-Vr   position-absolute line-45"></div>
      <div className="yellowline-Vr   position-absolute line-46"></div>
      <div className="yellowline-Hr   position-absolute line-47"></div>
      <div className="yellowline-Vr   position-absolute line-48"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-49"></div>
      <div className="yellowline-Hr   position-absolute line-50"></div>
      <div className="yellowline-Hr   position-absolute line-51"></div>
      <div className="yellowline-Vr   position-absolute line-52"></div>
      <div className="yellowline-Vr   position-absolute line-53"></div>
      <div className="yellowline-Vr   position-absolute line-54"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-55"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-56"></div>
      <div className="yellowline-Hr   position-absolute line-57"></div>
      <div className="yellowline-Vr   position-absolute line-58"></div>
      <div className="yellowline-Hr   position-absolute line-59"></div>
      <div className="yellowline-Hr   position-absolute line-60"></div>
      <div className="yellowline-Vr   position-absolute line-61"></div>
      <div className="yellowline-Vr   position-absolute line-62"></div>
      <div className="yellowline-Vr   position-absolute line-63"></div>
      <div className="yellowline-Hr   position-absolute line-64"></div>
      <div className="yellowline-Hr   position-absolute line-65"></div>
      <div className="yellowline-Vr   position-absolute line-66"></div>
      <div className="yellowline-Hr   position-absolute line-67"></div>
      <div className="yellowline-Hr   position-absolute line-68"></div>
      <div className="yellowline-Vr   position-absolute line-69"></div>
      <div className="yellowline-Hr   position-absolute line-70"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-71"></div>

      <div className="position-absolute single-text-21">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "392AS4",
            }}
          />

          <div className="dashedHr-Pipe "></div>
        </div>
      </div>

      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
    </div>
  );
};
