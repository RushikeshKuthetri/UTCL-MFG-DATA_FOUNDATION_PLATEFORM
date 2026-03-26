import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";
import {
  useMotorTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const FlyAshSiloRajpuraPage = () => {
  return (
    <div className="FlyAshSiloRajpuraPage w-100 h-100 position-relative">
      <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr   position-absolute line-16"></div>
      <div className="yellowline-Vr   position-absolute line-17"></div>
      <div className="yellowline-Hr   position-absolute line-18"></div>
      <div className="yellowline-Hr   position-absolute line-19"></div>
      <div className="yellowline-Vr   position-absolute line-20"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-21"></div>
      <div className="yellowline-Hr   position-absolute line-22"></div>
      <div className="yellowline-Hr   position-absolute line-23"></div>
      <div className="yellowline-Vr   position-absolute line-24"></div>
      <div className="yellowline-Vr   position-absolute line-25"></div>
      <div className="yellowline-Vr   position-absolute line-26"></div>
      <div className="yellowline-Vr   position-absolute line-27"></div>
      <div className="yellowline-Vr   position-absolute line-28"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr   position-absolute line-30"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr   position-absolute line-36"></div>
      <div className="yellowline-Hr   leftarrow position-absolute line-37"></div>
      <div className="yellowline-Hr   leftarrow position-absolute line-38"></div>
      <div className="yellowline-Hr   position-absolute line-40"></div>
      <div className="yellowline-Hr   leftarrow position-absolute line-41"></div>
      <div className="yellowline-Hr   leftarrow position-absolute line-42"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-44"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-45"></div>
      <div className="yellowline-Hr  position-absolute line-46"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-47"></div>
      <div className="yellowline-Hr   position-absolute line-48"></div>
      <div className="yellowline-Vr   position-absolute line-49"></div>
      <div className="yellowline-Hr   position-absolute line-50"></div>
      <div className="yellowline-Vr   position-absolute line-51"></div>
      <div className="yellowline-Vr   position-absolute line-52"></div>
      <div className="yellowline-Hr   position-absolute line-53"></div>
      <div className="yellowline-Hr   position-absolute line-54"></div>
      <div className="yellowline-Hr   position-absolute line-55"></div>
      <div className="yellowline-Hr   position-absolute line-56"></div>
      <div className="yellowline-Vr   position-absolute line-57"></div>
      <div className="yellowline-Vr   position-absolute line-58"></div>
      <div className="yellowline-Vr   position-absolute line-59"></div>

      <div className=" position-absolute  single-text-1">
        <BlackContainer
          data={{
            label: "CMH_K21BE1_II",
            useClass: "greenTxt  mt-2 mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mb-2">
          <span>
            <MotorCircleDigitalTag
              className={`dot  digital-tag mr-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CMH_K21BE1_M02_RUN",
                  healthyLabel: "CMH_K21BE1_M02_PH",
                }
              )}`}
              label="CMH_K21BE1_M02_RUN"
            />
          </span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K21BE1_MO2",
            }}
          />
        </div>
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          // unclickable
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CMH_K21BE1_RUN", healthyLabel: "CMH_K21BE1_PH" }
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "CMH_K21BE1_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-2">
        <div className="ml-5">
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 bg-light",
          label: "BS2",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_BMS"
            )} ml-2`}
            text="BS2"
            label="CMH_K21BE1_BMS"
          />
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2  bg-light",
          label: "ZS",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_ZS"
            )} ml-2`}
            text="ZS"
            label="CMH_K21BE1_ZS"
          />
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 bg-light",
          label: "TS",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_TS"
            )} ml-2`}
            text="TS"
            label="CMH_K21BE1_TS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 ml-auto",
            label: "K21BE1",
          }}
        />
        <div className="d-flex mt-5">
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_BSS_1"
            )}`}
            text="BSS1"
            label="CMH_K21BE1_BSS_1"
          />

          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_BSS_2"
            )} ml-5`}
            text="BSS2"
            label="CMH_K21BE1_BSS_2"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_B_1_ALM"
            )}`}
            text="BSS1A"
            label="CMH_K21BE1_B_1_ALM"
          />

          <MotorCircleDigitalTag
            className={`square  mt-2 ml-5 digital-tag ${useColorStatus(
              "CMH_K21BE1_B_2_ALM"
            )}`}
            text="BSS2A"
            label="CMH_K21BE1_B_2_ALM"
          />
        </div>

        <div className="d-flex mt-5">
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "RCMH_K21BE1_BSS_3"
            )}`}
            text="BSS3"
            label="RCMH_K21BE1_BSS_3"
          />
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 ml-4 bg-light",
          label: "BS S3A",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square  mt-2 ml-5 digital-tag ${useColorStatus(
              "CMH_K21BE1_BSS_4"
            )}`}
            text="BSS4"
            label="CMH_K21BE1_BSS_4"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_B_3_ALM"
            )}`}
            text="BSS3A"
            label="CMH_K21BE1_B_3_ALM"
          />
          <MotorCircleDigitalTag
            className={`square  mt-2 ml-5 digital-tag ${useColorStatus(
              "CMH_K21BE1_B_4_ALM"
            )}`}
            text="BSS4A"
            label="CMH_K21BE1_B_4_ALM"
          />
        </div>
        <div className="mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 bg-light",
              label: "ZSS",
            }}
          />
          <MotorCircleDigitalTag
            className={`square  mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_LS1"
            )}`}
            text="LS1"
            label="CMH_K21BE1_LS1"
          />
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus(
              "CMH_K21BE1_LS2"
            )}`}
            text="LS2"
            label="CMH_K21BE1_LS2"
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-3"></div>
      <div class="position-absolute single-text-4 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K31FN2_RUN", healthyLabel: "CMH_K31FN2_PH" }
              )}`}
              text="M"
              label="CMH_K31FN2_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K31FN2",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot  digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K31FN3_RUN", healthyLabel: "CMH_K31FN3_PH" }
              )}`}
              text="M"
              label="CMH_K31FN3_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K31FN3",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot  digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K31FN3A_RUN", healthyLabel: "CMH_K31FN3A_PH" }
              )}`}
              text="M"
              label="CMH_K31FN3A_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K31FN3A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <BlackContainer
              data={{
                label: "CMH_K31BF1_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "CMH_K31BF1_DPT ",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark",
                label: "BF1 SEL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "K31BF1",
              }}
            />

            <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
              <div className="d-flex align-items-end justify-content-center  mt-3">
                <MotorCircleDigitalTag
                  className={`circle-img digital-tag p-2 ${useFanImgsTagsColorStatusForNewPlantScreens(
                    "CMH_K31RA1"
                  )}`}
                  label="CMH_K31RA1_RUN"
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
            </div>
          </div>
          <div className="mt-5">
            <div className="d-flex">
              <div className="img-97 d-flex justify-content-center  align-items-end">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "CMH_K31FN1_RUN",
                      healthyLabel: "CMH_K31FN1_PH",
                    }
                  )}`}
                  label="CMH_K31FN1_RUN"
                />
              </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "CMH_K31FN1_II",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K31FN1_SI",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex ml-2">
          <div>
            <BlackContainer
              data={{
                label: "CMH_K31BF2_DPT",
                useClass: "greenTxt",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K31BF2",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
              <div className="d-flex align-items-end justify-content-center  mt-3">
                <MotorCircleDigitalTag
                  className={`circle-img digital-tag p-2 ${useFanImgsTagsColorStatusForNewPlantScreens(
                    "CMH_K31RA2"
                  )}`}
                  label="CMH_K31RA2_RUN"
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
            </div>
          </div>
          <div className="mt-5">
            <div className="d-flex">
              <div className="img-97 d-flex justify-content-center  align-items-end">
                <MotorCircleDigitalTag
                  className={`dot digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "CMH_K31FN6_RUN",
                      healthyLabel: "CMH_K31FN6_PH",
                    }
                  )}`}
                  label="CMH_K31FN6_RUN"
                />
                <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
              </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "CMH_K31BF2_PT1",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K31FN6_II",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K31FN6_SI",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K31FN6",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex ml-2">
          <div>
            <BlackContainer
              data={{
                label: "CMH_K21BF4_DPT",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CMH_K21BF4_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark mt-1",
                label: "BF1 SEL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K21BF4",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
              <div className="d-flex align-items-end justify-content-center  mt-3">
                <MotorCircleDigitalTag
                  className={`circle-img digital-tag p-2 ${useFanImgsTagsColorStatusForNewPlantScreens(
                    "CMH_K21RA4"
                  )}`}
                  label="CMH_K21RA4_RUN"
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
            </div>
          </div>
          <div className="mt-5">
            <div className="d-flex">
              <div className="img-97 mt-4 d-flex justify-content-center  align-items-end">
                <MotorCircleDigitalTag
                  className={`dot digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "CMH_K21FN4_RUN",
                      healthyLabel: "CMH_K21FN4_PH",
                    }
                  )}`}
                  label="CMH_K21FN4_RUN"
                />
              </div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21FN4",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21RA4",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex ml-2">
          <div>
            <BlackContainer
              data={{
                label: "CMH_K21BF5_DPT",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark mt-1",
                label: "BF1 SEL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K21BF5",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
              <div className="d-flex align-items-end justify-content-center  mt-3">
                <MotorCircleDigitalTag
                  className={`circle-img digital-tag p-2 ${useFanImgsTagsColorStatusForNewPlantScreens(
                    "CMH_K21RA5"
                  )}`}
                  label="CMH_K21RA5_RUN"
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
            </div>
          </div>
          <div className="mt-5">
            <div className="d-flex">
              <div className="img-97 mt-4 d-flex justify-content-center  align-items-end">
                <MotorCircleDigitalTag
                  className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                    "CMH_K21FN5"
                  )}`}
                  label="CMH_K21FN5_RUN"
                />
              </div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21FN5",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21RA5",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K21BF5_PT",
                  useClass: "greenTxt",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex ml-2">
          <div>
            <BlackContainer
              data={{
                label: "CMH_K21BF6_DPT",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark mt-1",
                label: "BYP SEL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1",
                label: "K21BF6",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
              <div className="d-flex align-items-end justify-content-center  mt-3">
                <MotorCircleDigitalTag
                  className={`circle-img digital-tag p-2 ${useFanImgsTagsColorStatusForNewPlantScreens(
                    "CMH_K21RA6"
                  )}`}
                  label="CMH_K21RA6_RUN"
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
            </div>
          </div>
          <div className="mt-5">
            <div className="d-flex">
              <div className="img-97 mt-4 d-flex justify-content-center  align-items-end">
                <MotorCircleDigitalTag
                  className={`dot digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "CMH_K21FN6_RUN",
                      healthyLabel: "CMH_K21FN6_PH",
                    }
                  )}`}
                  label="CMH_K21FN6_RUN"
                />
              </div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21FN6",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21RA6",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K21BF6_PT",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex ml-2">
          <div>
            <BlackContainer
              data={{
                label: "CMH_K21BF7_DPT",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CMH_K21BF7_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark mt-1",
                label: "BYP SEL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K21BF7",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
              <div className="d-flex align-items-end justify-content-center  mt-3">
                <MotorCircleDigitalTag
                  className={`circle-img digital-tag p-2 ${useFanImgsTagsColorStatusForNewPlantScreens(
                    "CMH_K21RA7"
                  )}`}
                  label="CMH_K21RA7_RUN"
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
            </div>
          </div>
          <div className="mt-5">
            <div className="d-flex">
              <div className="img-97 mt-4 d-flex justify-content-center  align-items-end">
                <MotorCircleDigitalTag
                  className={`dot digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "CMH_K21FN7_RUN",
                      healthyLabel: "CMH_K21FN7_PH",
                    }
                  )}`}
                  label="CMH_K21FN7_RUN"
                />

                <div className="yellowline-Vr  downArrow  line-39 ml-4"></div>
              </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "CMH_K21FN7_SI",
                  useClass: "greenTxt mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K21FN7_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CMH_K21FN7",
                  useClass: "greenTxt mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-6">
        <div className="d-flex justify-content-center pipeVr position-absolute pipe-8">
          <div className="trapezoid"></div>

          <div className="single-text-7 position-absolute d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-5",
                  label: "K21AS1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-5",
                  label: "K21AS3",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-5",
                  label: "K21AS6",
                }}
              />
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div className="pipeHr  position-absolute pipe-9"></div>
                <div className="d-flex">
                  <div>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BV3",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV3_OLS",
                          closeLabel: "CMH_K21BV3_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV3_OLS",
                          closeLabel: "CMH_K21BV3_CLS",
                        }
                      )}`}
                      label="CMH_K21BV3_OLS"
                    />
                  </div>
                  <div className="ml-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BV4",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV4_OLS",
                          closeLabel: "CMH_K21BV4_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV4_OLS",
                          closeLabel: "CMH_K21BV4_CLS",
                        }
                      )}`}
                      label="CMH_K21BV4_OLS"
                    />
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21SG1_OLS",
                              closeLabel: "CMH_K21SG1_CLS",
                            }
                          )}`}
                          label="CMH_K21SG1_OLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21CG1_EOLS",
                              closeLabel: "CMH_K21CG1_ECLS",
                            }
                          )}`}
                          label="CMH_K21CG1_EOLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                      <TextContainerWithWrapWord
                        data={{
                          useClass: "text-dark mt-1 ml-3",
                          label: "K21SG1",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG1",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG1_ZT",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="pipeHr  position-absolute pipe-10 mt-3"></div>
                <div className="d-flex">
                  <div>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BV7",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV7_OLS",
                          closeLabel: "CMH_K21BV7_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV7_OLS",
                          closeLabel: "CMH_K21BV7_CLS",
                        }
                      )}`}
                      label="CMH_K21BV7_OLS"
                    />
                  </div>
                  <div className="ml-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BV8",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV8_OLS",
                          closeLabel: "CMH_K21BV8_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV8_OLS",
                          closeLabel: "CMH_K21BV8_CLS",
                        }
                      )}`}
                      label="CMH_K21BV8_OLS"
                    />
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21SG3_OLS",
                              closeLabel: "CMH_K21SG3_CLS",
                            }
                          )}`}
                          label="CMH_K21SG3_OLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`dot  digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21CG3_OLS",
                              closeLabel: "CMH_K21CG3_CLS",
                            }
                          )}`}
                          label="CMH_K21CG3_OLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                      <TextContainerWithWrapWord
                        data={{
                          useClass: "text-dark mt-1 ml-3",
                          label: "K21SG3",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG3",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG3_ZT",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="pipeHr  position-absolute pipe-11 mt-3"></div>
                <div className="d-flex">
                  <div>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BVB",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVB_OLS",
                          closeLabel: "CMH_K21BVB_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVB_OLS",
                          closeLabel: "CMH_K21BVB_CLS",
                        }
                      )}`}
                      label="CMH_K21BVB_OLS"
                    />
                  </div>
                  <div className="ml-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BVC",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVC_OLS",
                          closeLabel: "CMH_K21BVC_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVC_OLS",
                          closeLabel: "CMH_K21BVC_CLS",
                        }
                      )}`}
                      label="CMH_K21BVC_OLS"
                    />
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21SG5_OLS",
                              closeLabel: "CMH_K21SG5_CLS",
                            }
                          )}`}
                          label="CMH_K21SG5_OLS"
                        />
                        {/* <div
                          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21SG5_OLS",
                              closeLabel: "CMH_K21SG5_CLS",
                            }
                          )}`}
                        ></div> */}
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21CG5_EOLS",
                              closeLabel: "CMH_K21CG5_ECLS",
                            }
                          )}`}
                          label="CMH_K21CG5_EOLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                      <TextContainerWithWrapWord
                        data={{
                          useClass: "text-dark mt-1 ml-3",
                          label: "K21SG5",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG5",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG5_ZT",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-text-8 position-absolute d-flex">
            <div>
              <div className="d-flex align-items-center">
                <div className="pipeHr  position-absolute pipe-9"></div>
                <div className="d-flex">
                  <div>
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG2",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG2_ZT",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21CG2_EOLS",
                              closeLabel: "CMH_K21CG2_ECLS",
                            }
                          )}`}
                          label="CMH_K21CG2_EOLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21SG2_OLS",
                              closeLabel: "CMH_K21SG2_CLS",
                            }
                          )}`}
                          label="CMH_K21SG2_OLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                      <TextContainerWithWrapWord
                        data={{
                          useClass: "text-dark mt-1 ml-3",
                          label: "K21SG2",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BV6",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV5_OLS",
                          closeLabel: "CMH_K21BV5_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV5_OLS",
                          closeLabel: "CMH_K21BV5_CLS",
                        }
                      )}`}
                      label="CMH_K21BV5_OLS"
                    />
                  </div>
                  <div className="ml-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BV8",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV6_OLS",
                          closeLabel: "CMH_K21BV6_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV6_OLS",
                          closeLabel: "CMH_K21BV6_CLS",
                        }
                      )}`}
                      label="CMH_K21BV6_OLS"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="pipeHr  position-absolute pipe-10 mt-3"></div>
                <div className="d-flex">
                  <div>
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG4",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG4_ZT",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21CG4_EOLS",
                              closeLabel: "CMH_K21CG4_ECLS",
                            }
                          )}`}
                          label="CMH_K21CG4_EOLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21SG4_OLS",
                              closeLabel: "CMH_K21SG4_CLS",
                            }
                          )}`}
                          label="CMH_K21SG4_OLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                      <TextContainerWithWrapWord
                        data={{
                          useClass: "text-dark mt-1 ml-3",
                          label: "K21SG4",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BV9",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV9_OLS",
                          closeLabel: "CMH_K21BV9_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BV9_OLS",
                          closeLabel: "CMH_K21BV9_CLS",
                        }
                      )}`}
                      label="CMH_K21BV9_OLS"
                    />
                  </div>
                  <div className="ml-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BVA",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVA_OLS",
                          closeLabel: "CMH_K21BVA_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVA_OLS",
                          closeLabel: "CMH_K21BVA_CLS",
                        }
                      )}`}
                      label="CMH_K21BVA_OLS"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="pipeHr  position-absolute pipe-10 mt-3"></div>
                <div className="d-flex">
                  <div>
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG6",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                    <BlackContainer
                      data={{
                        label: "CMH_K21CG6_ZT",
                        useClass: "greenTxt mt-1",
                        unit: "%",
                        unitColor: "unitColor",
                      }}
                    />
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21CG6_EOLS",
                              closeLabel: "CMH_K21CG6_ECLS",
                            }
                          )}`}
                          label="CMH_K21CG6_EOLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                        <MotorCircleDigitalTag
                          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                            {
                              openLabel: "CMH_K21SG6_EOLS",
                              closeLabel: "CMH_K21SG6_ECLS",
                            }
                          )}`}
                          label="CMH_K21SG6_EOLS"
                        />
                        <div className="yellowline-Vr position-relative"></div>
                        <div className={`square grey-color`}></div>
                      </div>
                      <TextContainerWithWrapWord
                        data={{
                          useClass: "text-dark mt-1 ml-3",
                          label: "K21SG8",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BVD",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVD_OLS",
                          closeLabel: "CMH_K21BVD_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVD_OLS",
                          closeLabel: "CMH_K21BVD_CLS",
                        }
                      )}`}
                      label="CMH_K21BVD_OLS"
                    />
                  </div>
                  <div className="ml-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mb-3",
                        label: "K21BVE",
                      }}
                    />
                    <MimicCaret
                      parentClass="tringle-item d-flex"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVE_OLS",
                          closeLabel: "CMH_K21BVE_CLS",
                        }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        {
                          openLabel: "CMH_K21BVE_OLS",
                          closeLabel: "CMH_K21BVE_CLS",
                        }
                      )}`}
                      label="CMH_K21BVE_OLS"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-5",
                  label: "K21AS2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-5",
                  label: "K21AS4",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-5",
                  label: "K21AS8",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info",
            label: "SEQ START",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "K21LI2",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K21MH1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "K21AB1",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K21MH5",
          }}
        />
        <div className="ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "K21SI1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLYASH SILO",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CAP -5000T",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21MH6",
          }}
        />
        <div className="ml-5">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "RUN SEQ",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362BF1_DPT",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SEQ TIM",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362BF1_DPT",
                useClass: "greenTxt ml-2 mt-1",
                unit: "Sec",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MSP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362BF1_DPT",
                useClass: "greenTxt ml-2 mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K21C06",
          }}
        />
        <div className="containerImage text-center ml-2 ">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-3",
                  label: "K21BI1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "K21AE2",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-2 p-1 ${useColorStatus(
                  "CMH_K21BI1_LS"
                )} ml-2`}
                text="L"
                label="CMH_K21BI1_LS"
              />
              <MotorCircleDigitalTag
                className={`square digital-tag mt-2 p-1 ${useColorStatus(
                  "CMH_K21BI1_PH"
                )} ml-2`}
                label="CMH_K21BI1_PH"
              />
            </div>
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K21C08",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21BI1_WI",
              useClass: "greenTxt ml-4",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-11">
        <div className="hpipecircle">
          <div className="d-flex">
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21CG7_EOLS",
                      closeLabel: "CMH_K21CG7_ECLS",
                    }
                  )}`}
                  label="CMH_K21CG7_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21CQ7",
                }}
              />
            </div>
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21SG7_OLS",
                      closeLabel: "CMH_K21SG7_CLS",
                    }
                  )}`}
                  label="CMH_K21SG7_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21SQ7",
                }}
              />
            </div>
            <div className="small-square mt-3">
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <div className="square grey-color"></div>
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21QA7",
                }}
              />
            </div>
          </div>
          <div className="d-flex ml-3">
            <div className="small-square mt-3">
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <div className="square grey-color"></div>
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21QA8",
                }}
              />
            </div>
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21SG8_OLS",
                      closeLabel: "CMH_K21SG8_CLS",
                    }
                  )}`}
                  label="CMH_K21SG8_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21SQ8",
                }}
              />
            </div>
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21CG8_EOLS",
                      closeLabel: "CMH_K21CG8_ECLS",
                    }
                  )}`}
                  label="CMH_K21CG8_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21CQ8",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-12 ">
        <div className="d-flex ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center ml-5",
              label: "K21A88",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21CG7",
              useClass: "greenTxt ml-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="hpipecircle mt-2"></div>
      </div>
      <div className=" position-absolute single-text-13 ">
        <div className="d-flex ">
          <BlackContainer
            data={{
              label: "CMH_K21CG8",
              useClass: "greenTxt ml-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center ml-auto",
              label: "K21AS8",
            }}
          />
        </div>
        <div className="hpipecircle mt-2"></div>
      </div>
      <div className="position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21RB1-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-4",
            label: "K21-QC1-2",
          }}
        />
        <div className=" truck"></div>
      </div>
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21RB3-4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-4",
            label: "K21-QC3-4",
          }}
        />
        <div className="truck"></div>
      </div>

      <div class="position-absolute single-text-16 d-flex">
        <div className="mt-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FNA_RUN", healthyLabel: "CMH_K21FNA_PH" }
              )}`}
              text="M"
              label="CMH_K21FNA_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FMA",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FN8_RUN", healthyLabel: "CMH_K21FN8_PH" }
              )}`}
              text="M"
              label="CMH_K21FN8_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FM8",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FN9_RUN", healthyLabel: "CMH_K21FN9_PH" }
              )}`}
              text="M"
              label="CMH_K21FN9_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FM9",
            }}
          />
        </div>
      </div>
      <div class="position-absolute single-text-17 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FNE_RUN", healthyLabel: "CMH_K21FNE_PH" }
              )}`}
              text="M"
              label="CMH_K21FNE_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FM8",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FND_RUN", healthyLabel: "CMH_K21FND_PH" }
              )}`}
              text="M"
              label="CMH_K21FND_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FM9",
            }}
          />
        </div>
      </div>
      <div class="position-absolute single-text-18">
        <div className="mr-2 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "K21BL4",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21BL4_RUN", healthyLabel: "CMH_K21BL4_PH" }
              )}`}
              text="M"
              label="CMH_K21BL4_RUN"
            />
          </div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "K21BL3",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21BL3_RUN", healthyLabel: "CMH_K21BL3_PH" }
              )}`}
              text="M"
              label="CMH_K21BL3_RUN"
            />
          </div>
        </div>
      </div>
      <div class="position-absolute single-text-19 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FNC_RUN", healthyLabel: "CMH_K21FNC_PH" }
              )}`}
              text="M"
              label="CMH_K21FNC_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FNC",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FNB_RUN", healthyLabel: "CMH_K21FNB_PH" }
              )}`}
              text="M"
              label="CMH_K21FNB_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FNB",
            }}
          />
        </div>
      </div>
      <div class="position-absolute single-text-20">
        <div className="mr-2 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "K21B2",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21BL2_RUN", healthyLabel: "CMH_K21BL2_PH" }
              )}`}
              text="M"
              label="CMH_K21BL2_RUN"
            />
          </div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "K21BL1",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21BL1_RUN", healthyLabel: "CMH_K21BL1_PH" }
              )}`}
              text="M"
              label="CMH_K21BL1_RUN"
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-21 d-flex">
        <div className="dot-square-line  ml-1 d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CMH_K21SG9_OLS",
                closeLabel: "CMH_K21SG9_CLS",
              }
            )}`}
            label="CMH_K21SG9_OLS"
          ></MotorCircleDigitalTag>
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "K21809",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-22">
        <BlackContainer
          data={{
            label: "CMH_K21BE2_II",
            useClass: "greenTxt  mt-2 mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mb-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag  mr-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CMH_K21BE2_M02_RUN",
                healthyLabel: "CMH_K21BE2_M02_PH",
              }
            )}`}
            label="CMH_K21BE2_M02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K21BE2_MO2",
            }}
          />
        </div>
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CMH_K21BE2_RUN", healthyLabel: "CMH_K21BE2_PH" }
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "CMH_K21BE2_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div>
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 bg-light",
          label: "BS2",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_BMS"
            )} ml-2`}
            text="BS2"
            label="CMH_K21BE2_BMS"
          />
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2  bg-light",
          label: "ZS",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_ZS"
            )} ml-2`}
            text="ZS"
            label="CMH_K21BE2_ZS"
          />
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 bg-light",
          label: "TS",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_TS"
            )} ml-2`}
            text="TS"
            label="CMH_K21BE2_TS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 ml-auto",
            label: "K21BE2",
          }}
        />
        <div className="d-flex mt-5">
          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 bg-light",
          label: "BS S1",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_BSS_1"
            )} ml-2`}
            text="BSS1"
            label="CMH_K21BE2_BSS_1"
          />

          {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 ml-4 bg-light",
          label: "BS S2",
        }}
      /> */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_BSS_2"
            )} ml-5`}
            text="BSS2"
            label="CMH_K21BE2_BSS_2"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_B_1_ALM"
            )} ml-2`}
            text="BSS1A"
            label="CMH_K21BE2_B_1_ALM"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_B_2_ALM"
            )} ml-5`}
            text="BSS2A"
            label="CMH_K21BE2_B_2_ALM"
          />
        </div>

        <div className="d-flex mt-5">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_BSS_3"
            )} ml-2`}
            text="BSS3"
            label="CMH_K21BE2_BSS_3"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_BSS_4"
            )} ml-5`}
            text="BSS4"
            label="CMH_K21BE2_BSS_4"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_B_3_ALM"
            )} ml-2`}
            text="BSS3A"
            label="CMH_K21BE2_B_3_ALM"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_B_4_ALM"
            )} ml-5`}
            text="BSS4A"
            label="CMH_K21BE2_B_4_ALM"
          />
        </div>
        <div className="mt-5 ml-5">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_ZSS"
            )} ml-3`}
            text="ZSS"
            label="CMH_K21BE2_ZSS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_LS1"
            )} ml-3`}
            text="LS1"
            label="CMH_K21BE2_LS1"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-2 ${useColorStatus(
              "CMH_K21BE2_LS2"
            )} ml-3`}
            text="LS1"
            label="CMH_K21BE2_LS2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ml-5",
            label: "K21AS9",
          }}
        />
        <div class="dashedHr-Pipe position-absolute"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-5",
            label: "K21BVQ",
          }}
        />
      </div>
      <div class="position-absolute single-text-25 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FNF_RUN", healthyLabel: "CMH_K21FNF_PH" }
              )}`}
              text="M"
              label="CMH_K21FNF_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "621FNF",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FNG_RUN", healthyLabel: "CMH_K21FNG_PH" }
              )}`}
              text="M"
              label="CMH_K21FNG_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "621FNG",
            }}
          />
        </div>
      </div>
      <div class="position-absolute single-text-26">
        <div className="img-109"></div>
      </div>
      <div class="containerImage position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "K21DB1",
          }}
        />
      </div>
      <div class="containerImage position-absolute single-text-28 d-flex">
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2 bg-info",
              label: "K21B12_SEL",
            }}
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag mt-1 p-1 ${useColorStatus(
              "CMH_K21BI2_PH"
            )} ml-4`}
            text="P"
            label="CMH_K21BI2_PH"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-1 p-1 ${useColorStatus(
              "CMH_K21BI2_LSH"
            )} ml-1`}
            text="L"
            label="CMH_K21BI2_LSH"
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 p-1 ${useColorStatus(
              "CMH_K21BI2_LS"
            )} ml-1`}
            text="L"
            label="CMH_K21BI2_LS"
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 p-1 ${useColorStatus(
              "CMH_K21BI2_LSL"
            )} ml-1`}
            text="L"
            label="CMH_K21BI2_LSL"
          />
        </div>
      </div>
      <div class="containerImage position-absolute single-text-29 d-flex">
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2 bg-info",
              label: "K21B12_SEL",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-1 p-1 ${useColorStatus(
              "CMH_K21BI3_LSL"
            )} ml-4`}
            text="L"
            label="CMH_K21BI3_LSL"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag p-1 ${useColorStatus(
              "CMH_K21BI3_LSH"
            )} ml-1`}
            text="L"
            label="CMH_K21BI3_LSH"
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag p-1 mt-2 ${useColorStatus(
              "CMH_K21BI3_LS"
            )} ml-1`}
            text="L"
            label="CMH_K21BI3_LS"
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag p-1 mt-2 ${useColorStatus(
              "CMH_K21BI3_PH"
            )} ml-1`}
            text="P"
            label="CMH_K21BI3_PH"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-30">
        <div className="hpipecircle">
          <div className="d-flex">
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21CGA_EOLS",
                      closeLabel: "CMH_K21CGA_ECLS",
                    }
                  )}`}
                  label="CMH_K21CGA_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21CQA",
                }}
              />
            </div>
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21SGE_OLS",
                      closeLabel: "CMH_K21SGE_CLS",
                    }
                  )}`}
                  label="CMH_K21SGE_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21SQE",
                }}
              />
            </div>
            <div className="small-square mt-3">
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <div className="square grey-color"></div>
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21QAC",
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21SGF_OLS",
                      closeLabel: "CMH_K21SGF_CLS",
                    }
                  )}`}
                  label="CMH_K21SGF_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21SOF",
                }}
              />
            </div>
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21CGB_EOLS",
                      closeLabel: "CMH_K21CGB_ECLS",
                    }
                  )}`}
                  label="CMH_K21CGB_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21COB",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-31">
        <div className="hpipecircle">
          <div className="d-flex">
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21CG9_EOLS",
                      closeLabel: "CMH_K21CG9_ECLS",
                    }
                  )}`}
                  label="CHM_K21CG9_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "K21C01",
                }}
              />
            </div>
            <div>
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "CMH_K21SGD_OLS",
                      closeLabel: "CMH_K21SGD_CLS",
                    }
                  )}`}
                  label="CHM_K21SGD_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21SEO",
                }}
              />
            </div>
            <div className="small-square mt-3">
              <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
                <div className="square grey-color"></div>
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "K21QAC",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-32"></div>
      <div class="dashedHr-Pipe position-absolute single-text-33"></div>
      <div className="position-absolute single-text-34 ">
        <BlackContainer
          data={{
            label: "CMH_K21CGA",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage  text-center ml-2 mt-3 "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-5",
            label: "K2MA81",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 ">
        <BlackContainer
          data={{
            label: "CMH_K21CGB",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage  text-center ml-2 mt-3 "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-5",
            label: "K2MA81",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 ">
        <BlackContainer
          data={{
            label: "CMH_K21CG9",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage  text-center ml-2 mt-3 "></div>
      </div>
      <div className="position-absolute single-text-37">
        <div className="  truck"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info",
            label: "K21BK1",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <div className=" truck"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "OPEN TRUCK",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K21WB2",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <div className=" truck"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "OPEN TRUCK",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K21WB3",
          }}
        />
      </div>

      <div className="position-absolute single-text-40">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVM_OLS", closeLabel: "CMH_K21BVM_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVM_OLS", closeLabel: "CMH_K21BVM_CLS" }
            )}`}
            label="CMH_K21BVM_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "K21BVM",
            }}
          />
        </div>
        <div className="mt-5">
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVP_OLS", closeLabel: "CMH_K21BVP_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVP_OLS", closeLabel: "CMH_K21BVP_CLS" }
            )}`}
            label="CMH_K21BVP_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "K21BVP",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVL_OLS", closeLabel: "CMH_K21BVL_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVL_OLS", closeLabel: "CMH_K21BVL_CLS" }
            )}`}
            label="CMH_K21BVL_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "K21BVL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVN_OLS", closeLabel: "CMH_K21BVN_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVN_OLS", closeLabel: "CMH_K21BVN_CLS" }
            )}`}
            label="CMH_K21BVN_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "K21BVN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "K21BVJ",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
            )}`}
            label="CMH_K21BVJ_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-44">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "K21BVK",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVK_OLS", closeLabel: "CMH_K21BVK_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVK_OLS", closeLabel: "CMH_K21BVK_CLS" }
            )}`}
            label="CMH_K21BVK_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "K21BV2",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BV2_OLS", closeLabel: "CMH_K21BV2_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BV2_OLS", closeLabel: "CMH_K21BV2_CLS" }
            )}`}
            label="CMH_K21BV2_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-46">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "K21BV2",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BV1_OLS", closeLabel: "CMH_K21BV1_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BV1_OLS", closeLabel: "CMH_K21BV1_CLS" }
            )}`}
            label="CMH_K21BV1_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-47">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "K21BVG",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVG_OLS", closeLabel: "CMH_K21BVG_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVG_OLS", closeLabel: "CMH_K21BVG_CLS" }
            )}`}
            label="CMH_K21BVG_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-48">
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVF_OLS", closeLabel: "CMH_K21BVF_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVF_OLS", closeLabel: "CMH_K21BVF_CLS" }
            )}`}
            label="CMH_K21BVF_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "K21BV0",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVH_OLS", closeLabel: "CMH_K21BVH_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVH_OLS", closeLabel: "CMH_K21BVH_CLS" }
            )}`}
            label="CMH_K21BVH_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "K21BVH",
            }}
          />
        </div>
      </div>
      <div class="position-absolute single-text-50">
        <div className="mr-2 d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21BL5_RUN", healthyLabel: "CMH_K21BL5_PH" }
              )}`}
              text="M"
              label="CMH_K21BL5_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "K21BL6",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21BL6_RUN", healthyLabel: "CMH_K21BL6_PH" }
              )}`}
              text="M"
              label="CMH_K21BL6_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "K21BL8",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21BL7_RUN", healthyLabel: "CMH_K21BL7_PH" }
              )}`}
              text="M"
              label="CMH_K21BL7_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "K21BL7",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-51 ">
        <div>
          <BlackContainer
            data={{
              label: "CMH_K21HR3_TE",
              useClass: "greenTxt mt-2 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 ml-2",
              label: "K21HR3",
            }}
          />
          <div className="containerImage  text-center  mt-2 ">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ml-2 mt-1 p-1 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21HR3_RUN", healthyLabel: "CMH_K21HR3_PH" }
              )}`}
              text="M"
              label="CMH_K21HR3_RUN"
            />
          </div>
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "CMH_K21HR4_TE",
              useClass: "greenTxt mt-2 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 ml-2",
              label: "K21HR4",
            }}
          />
          <div className="containerImage  text-center  mt-2 ">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ml-2 mt-1 p-1 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21HR4_RUN", healthyLabel: "CMH_K21HR4_PH" }
              )}`}
              text="M"
              label="CMH_K21HR4_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-52 ">
        <div className="d-flex">
          <div className="containerImage  text-center  mt-2 ">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ml-2 mt-1 p-1 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21HR2_RUN", healthyLabel: "CMH_K21HR2_PH" }
              )}`}
              label="CMH_K21HR2_RUN"
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "CMH_K21HR2_TE",
                useClass: "greenTxt mt-2 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 ml-2",
                label: "K21HR2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-53 ">
        <div className="d-flex">
          <div className="containerImage  text-center  mt-2 ">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ml-2 mt-1 p-1 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21HR1_RUN", healthyLabel: "CMH_K21HR1_PH" }
              )}`}
              label="CMH_K21HR1_RUN"
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "CMH_K21HR1_TE",
                useClass: "greenTxt mt-2 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 ml-2",
                label: "K21HR1",
              }}
            />
          </div>
        </div>
      </div>
      <div class="position-absolute single-text-54 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span className={`dot grayDot mt-1 p-2 ${"RM_362BC2"} `}></span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FNK",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span className={`dot grayDot mt-1 p-2 ${"RM_362BC2"} `}></span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FNL",
            }}
          />
        </div>
      </div>
      <div class="position-absolute single-text-55 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FNH_RUN", healthyLabel: "CMH_K21FNH_PH" }
              )}`}
              text="M"
              label="CMH_K21FNH_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21FM8",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-56 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "K21SGA",
          }}
        />
        <div className="dot-square-line  ml-1 d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21SGA_OLS", closeLabel: "CMH_K21SGA_CLS" }
            )}`}
            label="CMH_K21SGA_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div class="position-absolute single-text-57 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21SM2_RUN", healthyLabel: "CMH_K21SM2_PH" }
              )}`}
              text="M"
              label="CMH_K21SM2_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21SM2",
            }}
          />
        </div>
      </div>
      <div class="position-absolute single-text-58 d-flex">
        <div className="mr-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21SM1_RUN", healthyLabel: "CMH_K21SM1_PH" }
              )}`}
              text="M"
              label="CMH_K21SM1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K21SM1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-59 d-flex">
        <BlackContainer
          data={{
            label: "CMH_K21BI2_WI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "SGC",
          }}
        />
        <div className="dot-square-line  ml-1 d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21SGC_OLS", closeLabel: "CMH_K21SGC_CLS" }
            )}`}
            label="CMH_K21SGC_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-60">
        <div className="dot-square-line  ml-1 d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21SGB_OLS", closeLabel: "CMH_K21SGB_CLS" }
            )}`}
            label="CMH_K21SGB_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-5",
            label: "K21ASA",
          }}
        />
      </div>
      <div className=" position-absolute single-text-61">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FLYASH BIN AT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CEMENT MILL BUILDING",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-2 p-1 ${useColorStatus(
            "CMH_K31BI1_LS"
          )} ml-2`}
          text="L"
          label="CMH_K31BI1_LS"
        />
      </div>

      <BlackContainer
        data={{
          label: "CMH_K21BI3_WI",
          useClass: "greenTxt mt-2  position-absolute single-text-62",
          unit: "TON",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-63">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PNEUMATICALY FLYASH SILO FEEDING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-auto",
            label: "K21MH2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "REJECT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21SR1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-65">
        <MotorCircleDigitalTag
          className={`dot digital-tag  ml-2 mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21VS1_RUN", healthyLabel: "CMH_K21VS1_PH" }
          )}`}
          text="M"
          label="CMH_K21VS1_RUN"
        />
      </div>
      <div className="position-absolute single-text-66">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVQ_OLS", closeLabel: "CMH_K21BVQ_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "CMH_K21BVQ_OLS", closeLabel: "CMH_K21BVQ_CLS" }
            )}`}
            label="CMH_K21BVQ_OLS"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21AS7",
          }}
        />
      </div>
      <div className=" position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21AS8",
          }}
        />
      </div>
      <div className=" position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21DB1",
          }}
        />
      </div>

      <div className="pipe-1 position-absolute mt-3">
        <div className="d-flex">
          <div className="img-108 mt-3"></div>
          <div className="ml-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "OPERATING",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "K21CP1",
                }}
              />
              <span className={`dot grey-color ml-2 mt-1  p-1`}>M</span>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "STANDBY",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ",
                  label: "K21CP2",
                }}
              />
              <span className={`dot grey-color ml-2 mt-1  p-1 `}>M</span>
            </div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "TO BULK TANKER",
          }}
        />
      </div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipe-14 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-2",
            label: "K21AR1",
          }}
        />
        <div className="img-108"></div>
      </div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
    </div>
  );
};
