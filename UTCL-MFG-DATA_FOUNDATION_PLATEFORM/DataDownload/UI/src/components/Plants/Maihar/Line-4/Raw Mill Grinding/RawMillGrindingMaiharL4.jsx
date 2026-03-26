import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useImgColorStatusForNewPlantScreen,
  useGateTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const RawMillGrindingMaiharL4 = () => {
  return (
    <div className="RawMillGrindingKotputli RawMillGrindingMaiharL4 w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1">
        <div className="d-flex mb-3">
          <div className="d-flex">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-2 ${useColorStatus(
                  "RM_334WF1"
                )}`}
                label="RM_334WF1"
              />

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
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-2 ${useColorStatus(
                  "RM_334WF2"
                )}`}
                label="RM_334WF2"
              />

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
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-2 ${useColorStatus(
                  "RM_334WF3"
                )}`}
                label="RM_334WF3"
              />

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
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-2 ${useColorStatus(
                  "RM_334WF4"
                )}`}
                label="RM_334WF4"
              />

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
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-2 ${useColorStatus(
                  "RM_334WF5"
                )}`}
                label="RM_334WF5"
              />

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
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark mx-auto", label: "" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RMH_334BC1_RUN", healthyLabel: "RMH_334BC1_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "RMH_334BC1_RUN",
            }}
          />
          <MotorCircleDigitalTag
            className={`square ml-2 digital-tag ${useColorStatus(
              "RMH_334BC1_DE_MG"
            )}`}
            label="RMH_334BC1_DE_MG"
          />
        </div>
        <div className="d-flex justify-content-around mr-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "RMH_334BC1_NDE_MG"
            )}`}
            label="RMH_334BC1_NDE_MG"
          />

          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
          <MotorCircleDigitalTag
            className={`dot  digital-tag ${useColorStatus("RM_334MS1")}`}
            label="RM_334MS1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "334BC1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-2">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_334BC2_DE_MG"
            )}`}
            label="RM_334BC2_DE_MG"
          />
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RMH_334BC2_RUN", healthyLabel: "RMH_334BC2_PH" }
              )}`,
              firstCircleText: "M",
              firstCircleLabel: "RMH_334BC2_RUN",
            }}
            text={{ useClass: "text-dark mx-auto", label: "" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "",
            }}
          />
        </div>
        <div className="d-flex justify-content-end">
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_334BC2_VGTU1"
            )}`}
            label="RM_334BC2_VGTU1"
          />
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_334BC2_VGTU2"
            )}`}
            label="RM_334BC2_VGTU2"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} ml-auto mr-1 mt-2`}
            text="M"
            label="NA"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 mr-1",
              label: "364AD1",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ",
              label: "364BE1",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364BE1_II",
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
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_334BC3_RUN", healthyLabel: "RM_334BC3_PH" }
            )}`}
            label="RM_334BC3_RUN"
          />
          <div className="yellowline-Vr downArrow arrow ml-auto"></div>
        </div>
        <div className="d-flex  ml-auto">
          <MotorCircleDigitalTag
            className={`square ml-auto mr-2 digital-tag ${useColorStatus(
              "RM_334BC3_NDE_MG"
            )}`}
            label="RM_334BC3_NDE_MG"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-2 mr-2",
              label: "334DG1",
            }}
          />
          <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
              {
                openLabel: "RM_334DG1_OLS",
                closeLabel: "RM_334DG1_CLS",
              }
            )}`}
            label="RM_334DG1_OLS"
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-5">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("RM_364BE1_BMS")}`}
          label="RM_364BE1_BMS"
          text="BMS"
        />

        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_364BE1_RUN", healthyLabel: "RM_364BE1_PH" }
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "RM_364BE1_RUN",
          }}
        />

        <div className="mt-5 ml-3">
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus(
              "RM_364BE1_TS"
            )}`}
            label="RM_364BE1_TS"
          />
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus(
              "RM_364BE1_ZS1"
            )}`}
            label="RM_364BE1_ZS1"
          />
        </div>
      </div>

      <div className="containerImage text-center position-absolute single-text-6">
        <div className="d-flex justify-content-between mt-2 ml-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM_364BI1_LS")}`}
            label="RM_364BI1_LS"
            text="LS"
          />

          <MotorCircleDigitalTag
            className={`text-dark  digital-tag ${useColorStatus("NA")}`}
            label="NA"
            text="BLMS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "REJECT BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "364BI1",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364BI1_WI",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-7">
        <div className="d-flex justify-content-between mt-2 ml-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM_364BI2_LS")}`}
            label="RM_364BI2_LS"
            text="LS"
          />

          <MotorCircleDigitalTag
            className={`text-dark  digital-tag ${useColorStatus("NA")}`}
            label="NA"
            text="BLMS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "REJECT BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "364BI2",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364BI2_WI",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-8">
        <div className="hpipecircle">
          <span className={`dot`}></span>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_364BC2_RUN", healthyLabel: "RM_364BC2_PH" }
            )} ml-2`}
            text=""
            label="RM_364BC2_RUN"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-4 ml-2",
              label: "364BC2",
            }}
          />
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_364BC2_NDE_MG"
            )}`}
            label="RM_364BC2_NDE_MG"
          />
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_364BC2_DE_MG"
            )}`}
            label="RM_364BC2_DE_MG"
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-3",
            label: "364DG1",
          }}
        />
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
            {
              openLabel: "RM_364DG1_OLS",
              closeLabel: "RM_364DG1_CLS",
            }
          )}`}
          label="RM_364DG1_OLS"
        />
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
            label: "394AS1",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-auto",
            label: "394AS2",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="d-flex mb-2 ">
          <div className="d-flex gap-1">
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA1_OLS"
              )}`}
              label="RM_394GA1_OLS"
            />
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA1_OLS"
              )}`}
              label="RM_394GA1_OLS"
            />
          </div>
          <div className="d-flex gap-1 ml-3">
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA1_CLS"
              )}`}
              label="RM_394GA1_CLS"
            />
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA2_OLS"
              )}`}
              label="RM_394GA2_OLS"
            />
          </div>
          <div className="d-flex gap-1 ml-3">
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA2_CLS"
              )}`}
              label="RM_394GA2_CLS"
            />
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA3_OLS"
              )}`}
              label="RM_394GA3_OLS"
            />
          </div>
          <div className="d-flex gap-1 ml-3">
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA3_CLS"
              )}`}
              label="RM_394GA3_CLS"
            />
            <MotorCircleDigitalTag
              className={`square  digital-tag ${useColorStatus(
                "RM_394GA4_OLS"
              )}`}
              label="RM_394GA4_OLS"
            />
          </div>
        </div>
        <div className="d-flex single-text-15a">
          <div className="d-flex gap-2 text-center mr-1">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "NA"
              )}`}
              label="NA"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ",
                label: "394RA1",
              }}
            />
          </div>
          <div className="d-flex gap-2 text-center mr-1">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "NA"
              )}`}
              label="NA"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-3 ",
                label: "394RA2",
              }}
            />
          </div>
          <div className="d-flex gap-2 text-center mr-1">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "NA"
              )}`}
              label="NA"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "394RA3",
              }}
            />
          </div>
          <div className="d-flex gap-2 text-center mr-1">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "NA"
              )}`}
              label="NA"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-3",
                label: "394RA4",
              }}
            />
          </div>
        </div>
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-5"></div>
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
      <div className="yellowline-Vr  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr  position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Vr  position-absolute line-13"></div>
      <div className="yellowline-Vr  position-absolute line-14"></div>
      <div className="yellowline-Vr  position-absolute line-15"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Hr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20">
        <dvi className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} mr-2 `}
            text="M"
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "334-RF1",
            }}
          />
        </dvi>
      </div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Vr  position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Hr  position-absolute line-24"></div>
      <div className="yellowline-Vr  position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Hr  position-absolute line-27"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-32"></div>
      <div className="yellowline-Hr  position-absolute line-34"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-36"></div>
      <div className="yellowline-Hr  position-absolute line-37"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-38"></div>

      <div className="position-absolute text-center single-text-16 d-flex">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN1",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN1A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-17 d-flex">
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "394AS3",
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
          <MotorCircleDigitalTag
            className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN3",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN3A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-20 d-flex">
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <span>
            <MotorCircleDigitalTag
              className={`line-circle mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "NA", healthyLabel: "NA" }
              )}`}
              label="NA"
            />
          </span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-22 d-flex">
        <div>
          <div className="yellowline-Vr upArrow  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN5",
            }}
          />
        </div>
        <div className="ml-2 mt-2">
          <div className="yellowline-Vr upArrow  position-absolute line-391 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN6A",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN6",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN7A",
            }}
          />
        </div>
        <div className="ml-2 mt-2">
          <div className="yellowline-Vr upArrow position-absolute line-391 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN7",
            }}
          />
        </div>
        <div className="ml-2 mt-2">
          <div className="yellowline-Vr upArrow position-absolute line-391 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN8",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FN8A",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-23">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("RM_394BE1_BMS")}`}
          label="RM_394BE1_BMS"
          text="BMS"
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_394BE1_RUN", healthyLabel: "RM_394BE1_PH" }
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "RM_394BE1_RUN",
          }}
        />
        <div className="mt-5 ml-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM_394BE1_ZS1")}`}
            label="RM_394BE1_ZS1"
            text="ZS1"
          />
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus(
              "RM_394BE1_ZS2"
            )}`}
            label="RM_394BE1_ZS2"
            text="ZS2"
          />
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus(
              "RM_394BE1_TS1"
            )}`}
            label="RM_394BE1_TS1"
            text="TS1"
          />
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus(
              "RM_394BE1_TS2"
            )}`}
            label="RM_394BE1_TS2"
            text="TS2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto",
            label: "394AS5",
          }}
        />
      </div>

      <div className="position-absolute text-center single-text-25 d-flex">
        <div>
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FNC",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FND",
            }}
          />
        </div>

        <div className="ml-4">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FNE",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-26"></div>
      <div className="position-absolute text-center single-text-27 d-flex">
        <div>
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FNF",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FNG",
            }}
          />
        </div>

        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FNH",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-28 d-flex">
        <div>
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FNJ",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr   position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "394FNK",
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
              label: "364BF1",
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
              <MotorCircleDigitalTag
                className={`circle-img p-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                  "NA"
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "364RA1",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-4",
              label: "334BC3",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RM_364BF1_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364BF1_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "RM_364FN3_RUN", healthyLabel: "RM_364FN3_PH" }
                )}`}
                label="RM_364FN3_RUN"
              />
              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_364FN3",
                  useClass: "greenTxt ml-2",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364FN3_II",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364FN3_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ",
              label: "364FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "364BF2",
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
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                  "NA"
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "364RA2",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-4",
              label: "334BC2",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RM_364BF2_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364BF2_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "RM_364FN4_RUN", healthyLabel: "RM_364FN4_PH" }
                )}`}
                label="RM_364FN4_RUN"
              />

              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_364FN4_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364FN4_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364FN4_SP",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ",
              label: "364FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "394BF1",
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
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                  "NA"
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "394RA7",
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
                label: "RM_394BF1_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_394BF1_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                label="NA"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "394FNA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "394BF2",
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
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                  "NA"
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "394RA6",
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
                label: "RM_394BF2_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_394BF2_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "RM_394FN9_RUN", healthyLabel: "RM_394FN9_PH" }
                )} `}
                text=""
                label="RM_394FN9_RUN"
              />
              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_394FN9_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_394FN9_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_394BE1_BMS_SI",
                  useClass: "greenTxt ml-2 mt-1",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "394FN9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "394BF5",
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
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                  "NA"
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "394RA5",
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
                label: "RM_394BF5_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "RM_394FNL_RUN", healthyLabel: "RM_394FNL_PH" }
                )}`}
                label="RM_394FNL_RUN"
              />
              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RM_394FNL_II",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_394FNL_SI",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "394FNL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className="box-1 p-1">
          <div className="d-flex position-absolute single-text-37">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-danger p-1",
                label: "RM HYD.",
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
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "Roller Lowering",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "Grinding Pressure",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "SP to Hyd(bar)",
                }}
              />
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "364PU1",
                  }}
                />

                <MotorCircleDigitalTag
                  className={`dot digital-tag mt-2 ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                    { runLabel: "NA", healthyLabel: "NA" }
                  )}`}
                  text="M"
                  label="NA"
                />
              </div>
            </div>
            <div className="ml-2">
              <BlackContainer
                data={{
                  label: "RM_364HT1_GrndPrSP",
                  useClass: "greenTxt  mt-4",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364HT1_LT01",
                  useClass: "greenTxt mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="ml-2">
              <BlackContainer
                data={{
                  label: "RM_364HT1_PT7",
                  useClass: "greenTxt mt-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364HT1_PT8",
                  useClass: "greenTxt mt-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364HT1_PT9",
                  useClass: "greenTxt mt-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="ml-2">
              <BlackContainer
                data={{
                  label: "RM_364HT1_RP1",
                  useClass: "greenTxt mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364HT1_RP2",
                  useClass: "greenTxt mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364HT1_RP3",
                  useClass: "greenTxt mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="ml-2">
              <BlackContainer
                data={{
                  label: "RM_364HT1_RP4",
                  useClass: "greenTxt mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364HT1_RP5",
                  useClass: "greenTxt mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_364HT1_RP6",
                  useClass: "greenTxt mt-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="box-1 p-1 d-flex">
          <div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "364PU3",
                }}
              />
            </div>
            <div className="mt-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "364PU4",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "364PU5",
                }}
              />
            </div>
            <div className="mt-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "364PU6",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "364PU7",
                }}
              />
            </div>
            <div className="mt-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "364PU8",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "RM_364GB1_TT1",
                useClass: "greenTxt  mt-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="mt-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "364PU6",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "RM_364LQ1_TT1",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LQ1_PT1",
                useClass: "greenTxt  mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364GB1_FT1",
                useClass: "greenTxt  mt-2",
                unit: "l/m",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1 d-flex">
          <div>
            <BlackContainer
              data={{
                label: "RM_364LQ11_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LQ11_TT",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "364PUC",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
            </div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "RM_364LQ12_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LQ12_TT",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "364PUD",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
            </div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "RM_364LQ13_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LQ13_TT",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "364PUE",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
            </div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "RM_364LQ14_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LQ14_TT",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "364PUF",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
            </div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "RM_364LQ15_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LQ15_TT",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "364PUG",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
            </div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "RM_364LQ16_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LQ16_TT",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "364PUH",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
            </div>
          </div>
        </div>
        <div className="box-1 p-1">
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "RM_364GB2_TT1",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className=" ml-3">
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "364PUA",
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-3 ${useColorStatus(
                "RM_364GB2_LS"
              )}`}
              text="M"
              label="RM_364GB2_LS"
            />
            <div className=" mt-2">
              <MotorCircleDigitalTag
                className={`line-circle mt-2 ml-2 p-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "364CNF",
                }}
              />
            </div>

            <div className=" mt-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                text="M"
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "364PUB",
                }}
              />
            </div>
          </div>
        </div>
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "SR Grease Lub.",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RM_364LQ3_FS01")}`}
              text="F"
              label="RM_364LQ3_FS01"
            />
            <BlackContainer
              data={{
                label: "RM_364SR1_TT1",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RM_364LQ3_LS01")}`}
              text="L"
              label="RM_364LQ3_LS01"
            />
            <BlackContainer
              data={{
                label: "RM_364SR1_TT2",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "RM_364LQ3_RUN"
              )}`}
              label="RM_364LQ3_RUN"
            />
            <BlackContainer
              data={{
                label: "RM_364SR1_TT3",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-41 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RMH_334WF1_WI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_334WF1_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_334WF1_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "RMH_334WF2_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_334WF2_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "RMH_334WF3_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_334WF3_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "RMH_334WF4_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_334WF4_SI",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "RMH_334WF5_FR",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_334WF5_SI",
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
              label: "334BF1",
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
              <MotorCircleDigitalTag
                className={`circle-img p-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                  "NA"
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ",
                  label: "334RA1",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4 ",
              label: "334BC1",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "RMH_334BF1_DPT",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334BF1_PT1",
                useClass: "greenTxt ml-2 mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("RM_334FN1")}`}
                label="RM_334FN1"
              />
              <div className="yellowline-Vr downArrow arrow1 ml-auto"></div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "RMH_334FN1_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "RMH_334FN1_SI",
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
              label: "334FN1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "RM_364RM1_TT2",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364RM1_PT3",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364SR1_II",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364SR1_JI",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364SR1_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364SR1",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364WI1_FT1",
            useClass: "greenTxt mt-5",
            unit: "m3/hr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <div>
          {/* <span className={`dot ml-4 mb-2 ${useColorStatus("")}`}>M</span> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag mb-2 ml-3 ${useColorStatus("NA")} ml-2`}
            text="M"
            label="NA"
          />
        </div>
        <div className=" mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-3 ${useColorStatus("RM_364SR1")}`}
            text=""
            label="RM_364SR1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "364SR1",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger",
            label: "364SR1",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364RM1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
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
            label: "RM_364RM1_DPT",
            useClass: "greenTxt ml-2 mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "364RM1",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364HT1_BH",
            useClass: "greenTxt ml-2 mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364MD1_XT01",
            useClass: "greenTxt ml-2 mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div className="mr-3">
          <MotorCircleDigitalTag
            className={`line-circle mt-2 ml-2 p-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "364FN2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "364FN2A",
            }}
          />

          <MotorCircleDigitalTag
            className={`line-circle mt-2 ml-2 p-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RM_364MD1_STS_TM",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364FN2_PT01",
              useClass: "greenTxt  mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364FN2_PT02",
              useClass: "greenTxt  mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364FN2_PT03",
              useClass: "greenTxt  mt-3",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364FN2_PT04",
              useClass: "greenTxt  mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364FN2_PT05",
              useClass: "greenTxt  mt-3",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364FN2_PT06",
              useClass: "greenTxt  mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "RM_364BW1_FR",
              useClass: "greenTxt  mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />

          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: ``,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark mx-auto", label: "364BC1" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM_364BC1_RUN", healthyLabel: "RM_364BC1_PH" }
              )}`,
              secondCircleText: "",
              secondCircleLabel: "RM_364BC1_RUN",
            }}
          />
          <div className="d-flex justify-content-center">
            <MotorCircleDigitalTag
              className={`square mr-2 mt-1 digital-tag ${useColorStatus(
                "RM_364BW1_PH"
              )}`}
              label="RM_364BW1_PH"
            />
            <MotorCircleDigitalTag
              className={`square mr-2 mt-1 digital-tag ${useColorStatus(
                "RM_364BW1_TOT"
              )}`}
              label="RM_364BW1_TOT"
            />

            <MotorCircleDigitalTag
              className={`square mr-2 mt-1 digital-tag ${useColorStatus(
                "RM_364BC1_NDE_MG"
              )}`}
              label="RM_364BC1_NDE_MG"
            />
            <MotorCircleDigitalTag
              className={`square mr-2 mt-1 digital-tag ${useColorStatus(
                "RM_364BC1_DE_MG"
              )}`}
              label="RM_364BC1_DE_MG"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-46">
        <BlackContainer
          data={{
            label: "RM_364WP1_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364WP1_ST",
            useClass: "greenTxt ml-2 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364WP1_SI",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "RM_364WP1A_ST",
            useClass: "greenTxt ml-2 mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364WP1A_SI",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364WP1A_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <div className="d-flex ml-5">
          <BlackContainer
            data={{
              label: "RM_364CN2_PT02",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364CN4_PT04",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex ml-4  mt-2">
          <BlackContainer
            data={{
              label: "RM_364CN1_PT01",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364CN3_PT03",
              useClass: "greenTxt mr-2 mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM_364FN1")}`}
          label="RM_364FN1"
        />
      </div>

      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "364FN1",
          }}
        />

        <BlackContainer
          data={{
            label: "RM_364FN1_JI01",
            useClass: "greenTxt ml-2 mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364FN1_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364FN1",
            useClass: "greenTxt ml-2 mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364FN1",
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
            label: "RM_364FN1_STS_TM",
            useClass: "greenTxt ml-2 mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PH_424FN1")} ml-2`}
          label="PH_424FN1"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "424FN1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424FN1",
            useClass: "greenTxt ml-2 mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424FN1",
            useClass: "greenTxt ml-2 mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424FN1_JI",
            useClass: "greenTxt ml-2 mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424FN1_II",
            useClass: "greenTxt ml-2 mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <div></div>
        <div>
          <BlackContainer
            data={{
              label: "RM_334BC3_II",
              useClass: "greenTxt ml-2 mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_334BC3_SI",
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
            label: "RM_364RM1_PT5",
            useClass: "greenTxt  ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364RM1_TT3",
            useClass: "greenTxt  mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "RM_364RM1_TT4",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "RM_364RM1_PT6",
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
            label: "RM_364RM1_PT1",
            useClass: "greenTxt  ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364RM1_TT1",
            useClass: "greenTxt ml-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-56 ">
        <BlackContainer
          data={{
            label: "RM_394BE1_M01_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_394BE1_M02_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "394AD1",
            }}
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} p-2 ml-2`}
            label="NA"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_394BE1_RUN", healthyLabel: "RM_394BE1_PH" }
            )} p-2 ml-2`}
            label="RM_394BE1_RUN"
            text="M"
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "394BE1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} p-2 ml-2`}
            label="NA"
          />
        </div>
      </div>
      <div className="position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "RM_364RM1_TT6",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364RM1_PT8",
            useClass: "greenTxt ml-4 mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_364BE1_BMS"
            )}`}
            label="RM_364BE1_BMS"
          />
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_334RF1_PTC"
            )}`}
            label="RM_334RF1_PTC"
          />
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "RM_334RF1_ZSS"
            )}`}
            label="RM_334RF1_ZSS"
          />
        </div>
        <BlackContainer
          data={{
            label: "RM_334RF1_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364BE1_BMS_SI",
            useClass: "greenTxt mt-5",
            unit: "b/m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <BlackContainer
          data={{
            label: "RM_394BE1_BMS_SI",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV7_OLS", closeLabel: "RM_394BV7_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV7_OLS", closeLabel: "RM_394BV7_CLS" }
          )}`}
          label="RM_394BV7_OLS"
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
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV8_OLS", closeLabel: "RM_394BV8_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV8_OLS", closeLabel: "RM_394BV8_CLS" }
          )}`}
          label="RM_394BV8_OLS"
        />
      </div>
      <div className="position-absolute single-text-62 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV5_OLS", closeLabel: "RM_394BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV5_OLS", closeLabel: "RM_394BV5_CLS" }
          )}`}
          label="RM_394BV5_OLS"
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
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV6_OLS", closeLabel: "RM_394BV6_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV6_OLS", closeLabel: "RM_394BV6_CLS" }
          )}`}
          label="RM_394BV6_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV6",
          }}
        />
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV1_OLS", closeLabel: "RM_394BV1_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV1_OLS", closeLabel: "RM_394BV1_CLS" }
          )}`}
          label="RM_394BV1_OLS"
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
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV2_OLS", closeLabel: "RM_394BV2_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV2_OLS", closeLabel: "RM_394BV2_CLS" }
          )}`}
          label="RM_394BV2_OLS"
        />
      </div>
      <div className="position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BV9",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block gdigital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV9_OLS", closeLabel: "RM_394BV9_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV9_OLS", closeLabel: "RM_394BV9_CLS" }
          )}`}
          label="RM_394BV9_OLS"
        />
      </div>
      <div className="position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BVA",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block gdigital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BVA_OLS", closeLabel: "RM_394BVA_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BVA_OLS", closeLabel: "RM_394BVA_CLS" }
          )}`}
          label="RM_394BVA_OLS"
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
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV3_OLS", closeLabel: "RM_394BV3_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV3_OLS", closeLabel: "RM_394BV3_CLS" }
          )}`}
          label="RM_394BV3_OLS"
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
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV4_OLS", closeLabel: "RM_394BV4_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "RM_394BV4_OLS", closeLabel: "RM_394BV4_CLS" }
          )}`}
          label="RM_394BV4_OLS"
        />
      </div>
      <div className="box-1 p-2 position-absolute single-text-70">
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
              unit: "TPH",
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
            label: "364SD2",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364SD2_EOLS",
                closeLabel: "RM_364SD2_ECLS",
                healthyLabel: "RM_364SD2_PH",
              }
            )}`}
            label="RM_364SD2_EOLS"
          />
        </div>
        <BlackContainer
          data={{
            label: "RM_364SD2",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364SD2",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364SD2_ZT",
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
            label: "364LD2",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364LD2_EOLS",
                closeLabel: "RM_364LD2_ECLS",
                healthyLabel: "RM_364LD2_PH",
              }
            )}`}
            label="RM_364LD2_EOLS"
          />
        </div>
        <BlackContainer
          data={{
            label: "RM_364LD2",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364LD2",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364LD2_ZT",
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
            label: "364SD3",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364SD3_EOLS",
                closeLabel: "RM_364SD3_ECLS",
                healthyLabel: "RM_364SD3_PH",
              }
            )}`}
            label="RM_364SD3_EOLS"
          />
        </div>
        <BlackContainer
          data={{
            label: "RM_364SD3",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364SD3",
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
            label: "364LD3",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364LD3_EOLS",
                closeLabel: "RM_364LD3_ECLS",
                healthyLabel: "RM_364LD3_PH",
              }
            )}`}
            label="RM_364LD3_EOLS"
          />
        </div>
        <BlackContainer
          data={{
            label: "RM_364LD3",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364LD3",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364LD3_ZT",
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
              label: "RM_364LD4",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364LD4_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364LD4_EOLS",
                closeLabel: "RM_364LD4_ECLS",
                healthyLabel: "RM_364LD4_PH",
              }
            )}`}
            label="RM_364LD4_EOLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "364LD4",
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
                label: "RM_364LD5_ZT",
                useClass: "greenTxt mt-4",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LD5",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LD5",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-3">
            <div className="squre"></div>
            <div className="yellowline-Hr  hr-left"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag mr-2 ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM_364LD5_EOLS",
                  closeLabel: "RM_364LD5_ECLS",
                  healthyLabel: "RM_364LD5_PH",
                }
              )}`}
              label="RM_364LD5_EOLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "364LD5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-77 d-flex ">
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "RM_364SG2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364SG2",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useColorStatus("RM_364SG2")}`}
            label="RM_364SG2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "364SG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-78 d-flex ">
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "RM_364SG3",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364SG3",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useColorStatus("RM_364SG3")}`}
            label="RM_364SG3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "364SG3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-79 d-flex ">
        <div className="d-flex align-items-center mt-3">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364SD1_EOLS",
                closeLabel: "RM_364SD1_ECLS",
                healthyLabel: "RM_364SD1_PH",
              }
            )}`}
            label="RM_364SD1_EOLS"
          />
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TO COAL MILL",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364SD1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364SD1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364SD1_ZT",
                useClass: "greenTxt mt-1",
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

          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364LD1_EOLS",
                closeLabel: "RM_364LD1_ECLS",
                healthyLabel: "RM_364LD1_PH",
              }
            )}`}
            label="RM_364LD1_EOLS"
          />
          <div className="mr-2">
            <BlackContainer
              data={{
                label: "RM_364LD1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_364LD1",
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
        firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${useCaretColorStatus("RM_394BV3")}`}
        secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${useCaretColorStatus("RM_394BV3")}`}
      />
      </div> */}
      <div className="containerImage text-center position-absolute single-text-81">
        <BlackContainer
          data={{
            label: "RM_364WI1_LT1",
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
            label: "364WP1",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_364WP1_RUN", healthyLabel: "RM_364WP1_PH" }
            )} mr-2`}
            label="RM_364WP1_RUN"
          />
        </div>

        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_364WP1A_RUN", healthyLabel: "RM_364WP1A_PH" }
            )} mr-2`}
            label="RM_364WP1A_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "364WP1A",
          }}
        />
      </div>
      <div className="position-absolute single-text-84">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "364-FV1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger mt-2 ml-2",
            label: "364MD1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "364BC1",
          }}
        />
      </div>
      <div className="position-absolute single-text-85">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "RM_334MT1_TD",
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
              label: "RM_334MT1_YD",
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
        <div className="d-flex mt-1 ml-4">
          <MotorCircleDigitalTag
            className={`text-dark mr-2 digital-tag ${useColorStatus(
              "RM_334MT1_MD"
            )}`}
            label="RM_334MT1_MD"
            text="MD"
          />
          <MotorCircleDigitalTag
            className={`text-dark mr-2 digital-tag ${useColorStatus(
              "RM_334MT1_PH"
            )}`}
            label="RM_334MT1_PH"
            text="PH"
          />
          <MotorCircleDigitalTag
            className={`text-dark mr-2 digital-tag ${useColorStatus(
              "RM_334MT1_FB"
            )}`}
            label="RM_334MT1_FB"
            text="FB"
          />
        </div>
      </div>
      <div className="position-absolute single-text-86">
        <MimicCaret
          parentclass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-87 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SV1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-88 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-89 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-90 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM PREHEATER FAN",
          }}
        />
      </div>
      <div className="position-absolute single-text-91">
        <div className="d-flex align-items-center mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "394SG5",
            }}
          />
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364LD5_EOLS",
                closeLabel: "RM_364LD5_ECLS",
                healthyLabel: "RM_364LD5_PH",
              }
            )}`}
            label="RM_364LD5_EOLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-92">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "364SG1",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364SG1_OLS",
                closeLabel: "RM_364SG1_CLS",
              }
            )}`}
            label="RM_364SG1_OLS"
          />
        </div>
      </div>

      <div className="position-absolute single-text-83">
        <div className="d-flex gap-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("RM_364MD1")} ml-2`}
            text="M"
            label="RM_364MD1"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM_364AD1_PTC")}`}
            label="RM_364AD1_PTC"
          />
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("RM_364AD1_ZS")}`}
            label="RM_364AD1_ZS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} ml-2`}
            text="M"
            label="NA"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto",
            label: "364MD-AD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-93">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark ml-3 digital-tag ${useColorStatus(
              "RM_364MT1_FB"
            )}`}
            label="RM_364MT1_FB"
            text="FB"
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 digital-tag ${useColorStatus(
              "RM_364MT1_MD"
            )}`}
            label="RM_364MT1_MD"
            text="MD"
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 digital-tag ${useColorStatus(
              "RM_364MT1_PH"
            )}`}
            label="RM_364MT1_PH"
            text="PH"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-94">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("NA")}`,
              firstCircleText: "M",
              firstCircleLabel: "NA",
            }}
            text={{ useClass: "text-dark mx-auto", label: "" }}
            secondCircle={{
              secondCircleClass: ` `,
              secondCircleText: "",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "SM1",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
      </div>
      <div className=" position-absolute single-text-95 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("RM_394SM2")}`,
            firstCircleText: "M",
            firstCircleLabel: "RM_394SM2",
          }}
          text={{ useClass: "text-dark mx-auto", label: "" }}
          secondCircle={{
            secondCircleClass: ` `,
            secondCircleText: "",
          }}
        />
      </div>
      <div className=" position-absolute single-text-96">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("RM_364BE1_LS1")}`}
          label="RM_364BE1_LS1"
          text="LS01"
        />
        <MotorCircleDigitalTag
          className={`square mr-5 mt-4 digital-tag ${useColorStatus(
            "RM_364BE1_ZSS"
          )}`}
          label="RM_364BE1_ZSS"
          text="ZSS"
        />
      </div>
      <div className=" position-absolute single-text-97 ">
        <MotorCircleDigitalTag
          className={`square mr-5 mt-auto digital-tag ${useColorStatus(
            "RM_394BE1_ZSS"
          )}`}
          label="RM_394BE1_ZSS"
          text="ZSS"
        />
      </div>
      {/* add */}
      <div className=" position-absolute single-text-98 d-flex">
        <BlackContainer
          data={{
            label: "RM_364SD3_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "PH_424BF1_TT1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_424BF1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_424BF1_DPT",
              useClass: "greenTxt mt-1 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_424BF1_TT4",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_424BF1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM_394SB1_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square mr-3 mt-auto digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="LS"
        />
      </div>
      <div className="position-absolute single-text-100 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM_334DG1_CLS")} mr-2`}
          text="P"
          label="RM_334DG1_CLS"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM_334DG1_OLS")} mr-2`}
          text="P"
          label="RM_334DG1_OLS"
        />
      </div>
      <div className="position-absolute single-text-101 d-flex">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("RM_334BC3_DE_MG")}`}
          label="RM_334BC3_DE_MG"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "334BC3",
            }}
          />

          <BlackContainer
            data={{
              label: "RM_364BE1_BMS_SI",
              useClass: "greenTxt mt-1",
              unit: "b/m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-102 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364LD2_ECLS")}`}
          label="RM_364LD2_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364LD2_EOLS")}`}
          label="RM_364LD2_EOLS"
        />
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("RM_364SD3_ECLS")}`}
          label="RM_364SD3_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364SD3_EOLS")}`}
          label="RM_364SD3_EOLS"
        />
      </div>
      <div className="position-absolute single-text-103">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("RM_364LD5_ECLS")}`}
          label="RM_364LD5_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square mt-4 digital-tag ${useColorStatus(
            "RM_364LD5_EOLS"
          )}`}
          label="RM_364LD5_EOLS"
        />
      </div>
      <div className="position-absolute single-text-104 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "RM_394BE1_BSS1_ALM"
            )}`}
            label="RM_394BE1_BSS1_ALM"
            text="BSS1A"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "RM_394BE1_BSS1"
            )}`}
            label="RM_394BE1_BSS1"
            text="BSS1T"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "RM_394BE1_BSS2_ALM"
            )}`}
            label="RM_394BE1_BSS2_ALM"
            text="BSS2A"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "RM_394BE1_BSS2"
            )}`}
            label="RM_394BE1_BSS2"
            text="BSS2T"
          />
        </div>
      </div>
      <div className="position-absolute single-text-105">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("RM_364LD4_ECLS")}`}
          label="RM_364LD4_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square mt-4 digital-tag ${useColorStatus(
            "RM_364LD4_EOLS"
          )}`}
          label="RM_364LD4_EOLS"
        />
      </div>
      <div className="position-absolute single-text-106 d-flex">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("RM_364LD3_ECLS")}`}
          label="RM_364LD3_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364LD3_EOLS")}`}
          label="RM_364LD3_EOLS"
        />
      </div>
      <div className="position-absolute single-text-107">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "424SD1",
          }}
        />
        <div className="d-flex align-items-center mt-3 rotate">
          <div className="squre"></div>
          <div className="yellowline-Hr  hr-left"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PH_424SD1_OLS",
                closeLabel: "PH_424SD1_CLS",
                healthyLabel: "PH_424SD1_PH",
              }
            )}`}
            label="PH_424SD1_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-108">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO LEVEL",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_394SB1_LT",
              useClass: "greenTxt mt-1 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SILO LIMT",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: " SWITCH",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square ml-3 digital-tag ${useColorStatus("NA")} `}
            label="NA"
          />
        </div>
      </div>
      <div className="position-absolute single-text-109 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark  digital-tag ${useColorStatus(
              "RM_394BE1_BSS3_ALM"
            )}`}
            label="RM_394BE1_BSS3_ALM"
            text="BSS3A"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "RM_394BE1_BSS3"
            )}`}
            label="RM_394BE1_BSS3"
            text="BSS3T"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "RM_394BE1_BSS4_ALM"
            )}`}
            label="RM_394BE1_BSS4_ALM"
            text="BSS4A"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "RM_394BE1_BSS4"
            )}`}
            label="RM_394BE1_BSS4"
            text="BSS4T"
          />
        </div>
      </div>
      <div className="position-absolute single-text-110">
        <MotorCircleDigitalTag
          className={`square mt-3 digital-tag ${useColorStatus(
            "RM_364SD1_ECLS"
          )}`}
          label="RM_364SD1_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square mt-3 digital-tag ${useColorStatus(
            "RM_364SD1_EOLS"
          )}`}
          label="RM_364SD1_EOLS"
        />
        <MotorCircleDigitalTag
          className={`square mt-3 digital-tag ${useColorStatus(
            "RM_364LD1_ECLS"
          )}`}
          label="RM_364LD1_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square mt-3 digital-tag ${useColorStatus(
            "RM_364LD1_EOLS"
          )}`}
          label="RM_364LD1_EOLS"
        />
      </div>
      <div className="position-absolute single-text-111 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364SG1_CLS")}`}
          label="RM_364SG1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364SG1_OLS")}`}
          label="RM_364SG1_OLS"
        />
      </div>
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-112 digital-tag ${useColorStatus(
          "RM_364WIT1_PS01"
        )}`}
        label="RM_364WIT1_PS01"
      />
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-113 digital-tag ${useColorStatus(
          "RM_364BF1"
        )}`}
        label="RM_364BF1"
      />
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-114 digital-tag ${useColorStatus(
          "RM_364BF2"
        )}`}
        label="RM_364BF2"
      />
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-115 digital-tag ${useColorStatus(
          "RM_334BF1"
        )}`}
        label="RM_334BF1"
      />
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-116 digital-tag ${useColorStatus(
          "RM_394BF1"
        )}`}
        label="RM_394BF1"
      />
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-117 digital-tag ${useColorStatus(
          "RM_394BF2"
        )}`}
        label="RM_394BF2"
      />
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-118 digital-tag ${useColorStatus(
          "RM_394BF5"
        )}`}
        label="RM_394BF5"
      />

      <BlackContainer
        data={{
          label: "RMH_UPS2_E_1",
          useClass: "greenTxt mt-1  position-absolute single-text-119",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-120">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "T-DAY",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364MT1_TD",
              useClass: "greenTxt mt-1 ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "Y-DAY",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_364MT1_YD",
              useClass: "greenTxt mt-1 ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-121 digital-tag ${useColorStatus(
          "NA"
        )}`}
        label="NA"
      />
      <div className="position-absolute single-text-122 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364WT1_CLS")}`}
          label="RM_364WT1_CLS"
        />

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "SV1",
            }}
          />
          <MimicCaret
            parentclass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364WT1_OLS")}`}
          label="RM_364WT1_OLS"
        />
      </div>
      <div className="position-absolute single-text-123 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_394SG5_OLS")}`}
          label="RM_394SG5_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_394SG5_CLS")}`}
          label="RM_394SG5_CLS"
        />
      </div>
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-124 digital-tag ${useColorStatus(
          "RM_364WIT1_PS01"
        )}`}
        label="RM_364WIT1_PS01"
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-125"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "RM_364MD1_XT01_HH"
          )}`,
          firstCircleText: "",
          firstCircleLabel: "RM_364MD1_XT01_HH",
        }}
        text={{ useClass: "text-dark mx-auto", label: "MILL TRIP TIME" }}
      />

      <BlackContainer
        data={{
          label: "RM_364LD1_ZT",
          useClass: "greenTxt mt-1 position-absolute single-text-126",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-127 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "364SD1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "364LD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-128 d-flex">
        <BlackContainer
          data={{
            label: "RM_364RM1_TT5",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364RM1_PT7",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RM_364RM1_PT4",
          useClass: "greenTxt position-absolute single-text-129",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RM_394BF5_PT1",
          useClass: "greenTxt ml-2 mt-1 position-absolute single-text-130",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-131 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark  digital-tag ${useColorStatus(
            "RM_394BE1_LS02"
          )}`}
          label="RM_394BE1_LS02"
          text="LS02"
        />
        <MotorCircleDigitalTag
          className={`text-dark ml-3 digital-tag ${useColorStatus(
            "RM_394BE1_LS01"
          )}`}
          label="RM_394BE1_LS01"
          text="LS01"
        />
      </div>
      <div className="d-flex position-absolute single-text-132">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364SD2_ECLS")}`}
          label="RM_364SD2_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM_364SD2_EOLS")}`}
          label="RM_364SD2_EOLS"
        />
      </div>

      <MotorCircleDigitalTag
        className={`square position-absolute single-text-133 digital-tag ${useColorStatus(
          "NA"
        )}`}
        label="NA"
        text="BW"
      />
      <MotorCircleDigitalTag
        className={`square position-absolute single-text-134 digital-tag ${useColorStatus(
          "RM_364WI1_PS01"
        )}`}
        label="RM_364WI1_PS01"
        text=""
      />

      <div className="position-absolute single-text-135">
        <BlackContainer
          data={{
            label: "RM_364MD1_ITA",
            useClass: "greenTxt ml-2 mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_364MD1_JTA",
            useClass: "greenTxt ml-2 mt-2",
            unit: "Kw",
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
      <div className="yellowline-Vr downArrow position-absolute line-72"></div>
      <div className="yellowline-Vr downArrow position-absolute line-73"></div>
      <div className="yellowline-Hr  position-absolute line-74"></div>
      <div className="yellowline-Hr  position-absolute line-75"></div>

      <div className="position-absolute single-text-21">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "394AS4",
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
