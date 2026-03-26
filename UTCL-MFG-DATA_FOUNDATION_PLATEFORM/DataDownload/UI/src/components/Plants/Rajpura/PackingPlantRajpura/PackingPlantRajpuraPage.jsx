import {
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
} from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
} from "../../../index";
import { MotorCircleDigitalTag } from "../../../index";

export const PackingPlantRajpuraPage = () => {
  return (
    <div className="PackingPlantRajpuraPage w-100 h-100 position-relative">
      <div className="packer-3">
        <div className=" position-absolute  single-text-1 d-flex">
          {/* d2 */}
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe"
            firstCircle={{
              firstCircleClass: `dot digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE3_RUN", healthyLabel: "PP_641BE3_PH" }
              )} `,
              firstCircleText: "M",
              firstCircleLabel: "PP_641BE3_RUN",
            }}
          />

          {/* a3 */}
          <BlackContainer
            data={{
              label: "PP_641BE3_II",
              useClass: "greenTxt  mt-2 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-text-2">
          <div>
            {/* d3 */}
            {/* <TextContainerWithWrapWord
              data={{
                useClass: `text-dark mt-2 mx-auto bg-light`,
                label: "BMS",
              }}
            /> */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_BMS"
              )}`}
              label="PP_641BE3_BMS"
              text="BMS"
            />
          </div>
          <div className="d-flex mt-2">
            {/* d1 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "PP_641BE3_AD_RUN",
                  healthyLabel: "PP_641BE3_AD_PH",
                }
              )} `}
              text={"M"}
              label="PP_641BE3_AD_RUN"
            />

            {/* d4 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_ZS"
              )}`}
              label={"PP_641BE3_ZS"}
            />
          </div>

          <div className="d-flex mt-5">
            {/* d6 */}

            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_BSS3_ALM"
              )}`}
              label="PP_641BE3_BSS3_ALM"
              text="BSS3A"
            />

            {/* d7 */}

            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 mt-1 ${useColorStatus(
                "PP_641BE3_BSS4_ALM"
              )}`}
              label="PP_641BE3_BSS4_ALM"
              text="BSS4A"
            />
          </div>
          <div className="d-flex">
            {/* d8 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_BSS3"
              )}`}
              label="PP_641BE3_BSS3"
              text="BSS3T"
            />
            {/*d9  */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 mt-1 ${useColorStatus(
                "PP_641BE3_BSS4"
              )}`}
              label="PP_641BE3_BSS4"
              text="BSS4T"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 mb-4",
              label: "641BE3",
            }}
          />

          <div className="d-flex mt-5">
            {/* d21 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_BSS1_ALM"
              )}`}
              label="PP_641BE3_BSS1_ALM"
              text="BSS1A"
            />
            {/* d23 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 mt-1 ${useColorStatus(
                "PP_641BE3_BSS2_ALM"
              )}`}
              label="PP_641BE3_BSS2_ALM"
              text="BSS2A"
            />
          </div>

          <div className="d-flex">
            {/* d22 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_BSS1"
              )}`}
              label="PP_641BE3_BSS1"
              text="BSS1T"
            />
            {/* d24 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 mt-1 ${useColorStatus(
                "PP_641BE3_BSS2"
              )}`}
              label="PP_641BE3_BSS2"
              text="BSS2T"
            />
          </div>
          <div className="mt-5 ">
            {/* d26 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_LS1"
              )}`}
              label="PP_641BE3_LS1"
              text="LSO1"
            />
            {/* d27 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 mt-1 ${useColorStatus(
                "PP_641BE3_LS2"
              )}`}
              label="PP_641BE3_LS2"
              text="LSO2"
            />
          </div>
        </div>

        <div className="position-absolute single-text-3 d-flex">
          <div className="img-109">
            <div className="d-flex">
              {/* d10 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 pt-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641VS3_RUN", healthyLabel: "PP_641VS3_PH" }
                )} `}
                label={"PP_641VS3_RUN"}
                text="M"
              />

              {/* d11 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-4  mt-4 ${useColorStatus(
                  "PP_641VS3_ZSS"
                )}`}
                label={"PP_641VS3_ZSS"}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5",
              label: "641VS3",
            }}
          />
        </div>

        <div className="position-absolute single-text-4 d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mx-auto",
                  label: "41BF7_BYP",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center  mt-3">
                  {/* d19 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_641RA7"
                    )}`}
                    label="PP_641RA7_RUN"
                  />
                  {/* <div className={`dot greenDot p-2 ${"RM_362RA1"}`}></div> */}
                </div>
              </div>
              <div className="d-flex">
                <div className="yellowline-Vr  downArrow  line-39 ml-3"></div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: " text-dark ml-auto",
                    label: "641RA7",
                  }}
                />
              </div>
            </div>
            <div className="mt-1">
              <div>
                {/* a1,2 */}
                <BlackContainer
                  data={{
                    label: "PP_641BF7_DPT",
                    useClass: "greenTxt ml-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_641BF7_PT",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex">
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* <span className={`dot greenDot ${"RM_362FN3"}`}></span> */}
                  {/* <div className="yellowline-Vr  downArrow  line-39 ml-1"></div> */}
                  {/* d20 */}
                  <MotorCircleDigitalTag
                    className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PP_641FN7 _RUN",
                        healthyLabel: "PP_641FN7 _PH",
                      }
                    )}`}
                    label="CR_212CR1P_M01_RUN"
                  />
                </div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark mt-2",
                  label: "641FN7",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-5 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-4",
              label: "641L16",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "641LC3",
              }}
            />

            <div className="containerImage text-center ml-2 ">
              <div>
                <div className="d-flex">
                  {/* a29 */}
                  <BlackContainer
                    data={{
                      label: "PP_641BI3_WI",
                      useClass: "greenTxt mt-2",
                      unit: "TONS",
                      unitColor: "unitColor",
                    }}
                  />
                  {/* d12 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                      "PP_641BI3_LS1"
                    )}`}
                    label="PP_641BI3_LS1"
                  />
                </div>

                <div className="d-flex mt-2">
                  {/* d13 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag mt-2 ${useColorStatus(
                      "PP_641BI3_PH"
                    )}`}
                    label="PP_641BI3_PH"
                  />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark mt-2 ml-2",
                      label: "641FB3",
                    }}
                  />
                  {/* d14 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag mt-2 ${useColorStatus(
                      "PP_641BI3_LS2"
                    )}`}
                    label={"PP_641BI3_LS2"}
                  />
                </div>
              </div>
            </div>
            <div>
              {/* a28 */}
              <BlackContainer
                data={{
                  label: "PP_641BI1_TT",
                  useClass: "greenTxt ml-4 mt-3",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-3",
                  label: "641AE3",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-6">
          <div className="img-110">
            {/* d17 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag p-2  ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "PP_641PM3_RUN",
                  healthyLabel: "PP_641PM3_PH",
                }
              )}`}
              text={"M"}
              label="PP_641PM3_RUN"
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4 ml-2",
                label: "641PM3",
              }}
            />
          </div>
        </div>

        <div className="position-absolute single-text-7">
          <div className="img-109"></div>
        </div>

        <div className="position-absolute single-text-8 d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mx-auto",
                  label: "641BF4_BYP",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center  mt-3">
                  {/* <div className={`dot greenDot p-2 ${"RM_362RA1"}`}></div> */}
                  {/* d43 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_641RA4"
                    )}`}
                    label="PP_641RA4_RUN"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="yellowline-Vr  downArrow  line-39 ml-3"></div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: " text-dark ml-auto",
                    label: "641FN4",
                  }}
                />
              </div>
            </div>
            <div className="mt-1">
              <div>
                {/* a4,5 */}
                <BlackContainer
                  data={{
                    label: "PP_641BF4_DPT",
                    useClass: "greenTxt ml-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_641BF4_PT",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex">
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* d45 */}
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PP_641FN4_RUN",
                        healthyLabel: "PP_641FN4_PH",
                      }
                    )}`}
                    label={"PP_641FN4_RUN"}
                  />
                  <div className="yellowline-Vr  downArrow  line-39 ml-1"></div>
                </div>
              </div>
              {/* a6 */}
              <BlackContainer
                data={{
                  label: "PP_641FN4",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_641FN4",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-9 d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mx-auto",
                  label: "641BF3_BYP",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center  mt-3">
                  {/* <div className={`dot greenDot p-2 ${"RM_362RA1"}`}></div> */}
                  {/* d40 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_641RA3"
                    )}`}
                    label="PP_641RA3_RUN"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="yellowline-Vr  downArrow  line-39 ml-3"></div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: " text-dark ml-auto",
                    label: "641RA3",
                  }}
                />
              </div>
            </div>
            <div className="mt-1">
              <div>
                {/* a7,8 */}
                <BlackContainer
                  data={{
                    label: "PP_641BF3_DPT",
                    useClass: "greenTxt ml-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_641BF3_PT",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex">
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* d42 */}
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PP_641FN3_RUN",
                        healthyLabel: "PP_641FN3_PH",
                      }
                    )}`}
                    label={"PP_641FN3_RUN"}
                    text=""
                  />
                  <div className="yellowline-Vr  downArrow  line-39 ml-1"></div>
                </div>
              </div>
              {/* a9,10,11 */}
              <BlackContainer
                data={{
                  label: "PP_641FN3_II",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_641FN3",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_641FN3",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark ml-auto",
                  label: "641FN3",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-10 d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mx-auto",
                  label: "641BF6_BYP",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center  mt-3">
                  {/* <div className={`dot greenDot p-2 ${"RM_362RA1"}`}></div> */}
                  {/* d61 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_641RA6"
                    )}`}
                    label="PP_641RA6_RUN"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="yellowline-Vr  downArrow  line-39 ml-3"></div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: " text-dark ml-auto",
                    label: "641RA6",
                  }}
                />
              </div>
            </div>

            <div className="mt-1">
              <div>
                {/* a11,12 */}
                <BlackContainer
                  data={{
                    label: "PP_641BF6_DPT",
                    useClass: "greenTxt ml-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_641BF6_PT",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex">
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* <span className={`dot greenDot ${"RM_362FN3"}`}></span>
                  <div className="yellowline-Vr  downArrow  line-39 ml-1"></div> */}
                  {/* d62 */}
                  <MotorCircleDigitalTag
                    className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PP_641FN6_RUN",
                        healthyLabel: "PP_641FN6_PH",
                      }
                    )}`}
                    label="PP_641FN6_RUN"
                  />
                </div>
              </div>

              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark ml-auto",
                  label: "641FN6",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-11">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mb-4",
              label: "641FV9-C",
            }}
          />
          <div class="dashedHr-Pipe position-absolute mb-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-5",
              label: "641AS3",
            }}
          />
        </div>

        <div class="position-absolute single-text-12 d-flex">
          <div className="mr-2">
            {/* <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              <span className={`dot grayDot mt-1 p-2 ${""} `}>M</span>
            </div> */}
            {/* d30 */}
            <div class="img-66 ml-3 d-flex justify-content-center align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641FNG_RUN", healthyLabel: "PP_641FNG_PH" }
                )}`}
                label="PP_641FNG_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FNG(W)",
              }}
            />
          </div>
          <div>
            {/* d31 */}
            <div class="img-66 ml-3 d-flex justify-content-center align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641FNH_RUN", healthyLabel: "PP_641FNH_PH" }
                )}`}
                label="PP_641FNH_RUN"
              />{" "}
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FNH(S)",
              }}
            />
          </div>
        </div>

        <div className="pipe-1 position-absolute">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mb-2",
              label: "AIR RECEIVER",
            }}
          />
          <div className="d-flex">
            <div className="d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-4 mr-2",
                    label: "641AR5-PS",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 mr-2",
                    label: "641AR5-DV",
                  }}
                />
              </div>
              <div>
                <div className="img-108 d-flex align-items-center">
                  {/* d28 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-2 ${useColorStatus(
                      "PP_641AR5_PS"
                    )}`}
                    label="PP_641AR5_PS"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "641AR5",
                  }}
                />
              </div>
            </div>
            <div className="d-flex">
              <div>
                <div className="img-108 d-flex align-items-center">
                  {/* d29 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-2 ${useColorStatus(
                      "PP_641AR6_PS"
                    )}`}
                    label="PP_641AR6_PS"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "641AR6",
                  }}
                />
              </div>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-4 mr-2",
                    label: "641AR6-PS",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 mr-2",
                    label: "641AR6-DV",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-13 d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FROM",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1",
                label: "CEMENT SILO",
              }}
            />
          </div>
          {/* d25 */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-3 ${useColorStatus(
              "PP_641BE3_ZSS"
            )}`}
            label="PP_641BE3_ZSS"
          />
        </div>

        <div className="position-absolute single-text-14">
          <div className="d-flex ml-3">
            {/* d15 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_641GA3_OLS"
              )}`}
              label={"PP_641GA3_OLS"}
            />
            {/* d16 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-4 ${useColorStatus(
                "PP_641GA3_CLS"
              )}`}
              label="PP_641GA3_CLS"
            />
          </div>
        </div>
        <div className="position-absolute single-text-15">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "641SR3",
            }}
          />
        </div>

        <div className="yellowline-Vr   position-absolute line-1"></div>
        <div className="yellowline-Hr   position-absolute line-2"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
        <div className="yellowline-Vr upArrow  position-absolute line-9"></div>
        <div className="yellowline-Hr  position-absolute line-10"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-11"></div>
        <div className="yellowline-Hr  position-absolute line-12"></div>
        <div className="yellowline-Vr upArrow  position-absolute line-13"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-14"></div>
        <div className="yellowline-Hr   position-absolute line-15"></div>
        <div className="yellowline-Hr   position-absolute line-16"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
      </div>

      <div className="packer-2">
        <div className=" position-absolute  single-text-1 d-flex">
          {/* d47 */}
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE2_RUN", healthyLabel: "PP_641BE2_PH" }
              )} `,
              firstCircleText: "M",
              firstCircleLabel: "PP_641BE2_RUN",
            }}
          />
          {/* a13 */}
          <BlackContainer
            data={{
              label: "PP_641BE2_II",
              useClass: "greenTxt  mt-2 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-text-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mx-auto bg-light",
                label: "BMS",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            {/* d46 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "PP_641BE2_AD_RUN",
                  healthyLabel: "PP_641BE2_AD_PH",
                }
              )} `}
              label="PP_641BE2_AD_RUN"
              text="M"
            />
            <div className={`square grey-color ml-2 mt-1`}></div>
          </div>

          <div className="d-flex mt-5">
            {/* d49 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "PP_641BE2_BSS3_ALM"
              )}`}
              label="PP_641BE2_BSS3_ALM"
              text="BSS3A"
            />
            {/* d50 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE2_BSS4_ALM"
              )}`}
              label="PP_641BE2_BSS4_ALM"
              text="BSS4A"
            />
          </div>
          <div className="d-flex">
            {/* d51 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "PP_641BE2_BSS3"
              )}`}
              label="PP_641BE2_BSS3"
              text="BSS3T"
            />
            {/* d52 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE2_BSS4"
              )}`}
              label="PP_641BE2_BSS4"
              text="BSS4T"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 mb-4",
              label: "641BE2",
            }}
          />

          <div className="d-flex mt-5">
            {/* d93 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2  ${useColorStatus(
                "PP_641BE2_BSS1_ALM"
              )}`}
              label="PP_641BE2_BSS1_ALM"
              text="BSS1A"
            />
            {/* d95 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE2_BSS2_ALM"
              )}`}
              label="PP_641BE2_BSS2_ALM"
              text="BSS2A"
            />
          </div>
          <div className="d-flex">
            {/* d94 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2  ${useColorStatus(
                "PP_641BE2_BSS1"
              )}`}
              label="PP_641BE2_BSS1"
              text="BSS1T"
            />
            {/* d96 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE2_BSS2"
              )}`}
              label="PP_641BE2_BSS2"
              text="BSS2T"
            />
          </div>
          <div className="mt-5 ">
            {/* d89*/}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2  ${useColorStatus(
                "PP_641BE2_LS1"
              )}`}
              label="PP_641BE2_LS1"
              text="LSO1"
            />
            {/* d90 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2  ${useColorStatus(
                "PP_641BE2_LS2"
              )}`}
              label="PP_641BE2_LS2"
              text="LSO2"
            />
          </div>
        </div>

        <div className="position-absolute single-text-3 d-flex">
          <div className="img-109">
            <div className="d-flex">
              {/* d48 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 pt-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641VS2_RUN", healthyLabel: "PP_641VS2_PH" }
                )} `}
                label={"PP_641VS2_RUN"}
                text={"M"}
              />

              {/* d53 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-4  mt-4 ${useColorStatus(
                  "PP_641VS2_ZSS"
                )}`}
                label={"PP_641VS2_ZSS"}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5",
              label: "641VS2",
            }}
          />
        </div>

        <div className="position-absolute single-text-5 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-4",
              label: "641L13",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "641LC2",
              }}
            />

            <div className="containerImage text-center ml-2 ">
              <div>
                <div className="d-flex">
                  {/* a30 */}
                  <BlackContainer
                    data={{
                      label: "PP_641BI2_WI",
                      useClass: "greenTxt mt-2",
                      unit: "TONS",
                      unitColor: "unitColor",
                    }}
                  />
                  {/* d54 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                      "PP_641BI2_LS1"
                    )}`}
                    label={"PP_641BI2_LS1"}
                  />
                </div>

                <div className="d-flex mt-2">
                  {/* d55 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag mt-2 ${useColorStatus(
                      "PP_641BI2_PH"
                    )}`}
                    label="PP_641BI2_PH"
                  />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark mt-2 ml-2",
                      label: "641L14",
                    }}
                  />
                  {/* d56 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag mt-2 ${useColorStatus(
                      "PP_641BI2_LS2"
                    )}`}
                    label="PP_641BI2_LS2"
                  />
                </div>
              </div>
            </div>
            <div>
              {/* a14 */}
              <BlackContainer
                data={{
                  label: "PP_641BI2_TT",
                  useClass: "greenTxt ml-4 mt-3",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-3",
                  label: "641AE2",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-6">
          <div className="img-110">
            {/* d59 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag p-2  ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641PM2_RUN", healthyLabel: "PP_641PM2_PH" }
              )}`}
              label={"PP_641PM2_RUN"}
              text={"M"}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4 ml-2",
                label: "641PM2",
              }}
            />
          </div>
        </div>

        <div className="position-absolute single-text-7">
          <div className="img-109"></div>
        </div>

        <div className="position-absolute single-text-8 d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mx-auto",
                  label: "641BF2_BYP",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center  mt-3">
                  {/* d109 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_641RA2"
                    )}`}
                    label="PP_641RA2_RUN"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="yellowline-Vr  downArrow  line-39 ml-3"></div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: " text-dark ml-auto",
                    label: "641FN2",
                  }}
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark ml-auto mt-1",
                  label: "641RA2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark ml-auto mt-1",
                  label: "641BF2_PI",
                }}
              />
            </div>
            <div className="mt-1">
              <div>
                {/* a15,16 */}
                <BlackContainer
                  data={{
                    label: "PP_641BF2_DPT",
                    useClass: "greenTxt ml-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_641BF2_PT",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex">
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* d110 */}
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PP_641FN2_RUN",
                        healthyLabel: "PP_641FN2_PH",
                      }
                    )}`}
                    label="PP_641FN2_RUN"
                  />
                  <div className="yellowline-Vr  downArrow  line-39 ml-1"></div>
                </div>
              </div>
              {/* a17,18 */}
              <BlackContainer
                data={{
                  label: "PP_641FN2_II",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_641FN2",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_641FN2",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-9 d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mx-auto",
                  label: "641BF5_BYP",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center  mt-3">
                  {/* d129 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_641RA5"
                    )}`}
                    label="PP_641RA5_RUN"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="yellowline-Vr  downArrow  line-39 ml-3"></div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: " text-dark ml-auto",
                    label: "641RA5",
                  }}
                />
              </div>
            </div>

            <div className="mt-1">
              <div>
                {/* a19,20 */}
                <BlackContainer
                  data={{
                    label: "PP_641BF5_DPT",
                    useClass: "greenTxt ml-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_641BF5_PT",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex">
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* d128 */}
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PP_641FN5_RUN",
                        healthyLabel: "PP_641FN5_PH",
                      }
                    )}`}
                    label="PP_641FN5_RUN"
                  />
                </div>
              </div>

              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark ml-auto",
                  label: "641FN5",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-11">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mb-4",
              label: "641FV5-C",
            }}
          />
          <div class="dashedHr-Pipe position-absolute mb-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-5",
              label: "641AS2",
            }}
          />
        </div>

        <div class="position-absolute single-text-12 d-flex">
          <div className="mr-2">
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* d97 */}
              <MotorCircleDigitalTag
                className={`line-circle digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641FNC_RUN", healthyLabel: "PP_641FNC_PH" }
                )}`}
                label="PP_641FNC_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FNC(W)",
              }}
            />
          </div>
          <div>
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* d98 */}
              <MotorCircleDigitalTag
                className={`line-circle digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641FND_RUN", healthyLabel: "PP_641FND_PH" }
                )}`}
                label="PP_641FND_RUN"
              />{" "}
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FND(S)",
              }}
            />
          </div>
        </div>

        <div className="pipe-1 position-absolute">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mb-2",
              label: "AIR RECEIVER",
            }}
          />
          <div className="d-flex">
            <div className="d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-4 mr-2",
                    label: "641AR3-PS",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 mr-2",
                    label: "641AR3-DV",
                  }}
                />
              </div>
              <div>
                <div className="img-108 d-flex align-items-center">
                  {/* d91 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-2 ${useColorStatus(
                      "PP_641AR3_PS"
                    )}`}
                    label="PP_641AR3_PS"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "641AR3",
                  }}
                />
              </div>
            </div>
            <div className="d-flex">
              <div>
                <div className="img-108 d-flex align-items-center">
                  {/* d92 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-2 ${useColorStatus(
                      "PP_641AR4_PS"
                    )}`}
                    label="PP_641AR4_PS"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "641AR4",
                  }}
                />
              </div>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-4 mr-2",
                    label: "641AR4-PS",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 mr-2",
                    label: "641AR4-DV",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-13 d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FROM",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1",
                label: "CEMENT SILO",
              }}
            />
          </div>
          {/* d88 */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-3 ${useColorStatus(
              "PP_641BE2_ZSS"
            )}`}
            label="PP_641BE2_ZSS"
          />
        </div>

        <div className="position-absolute single-text-14">
          <div className="d-flex ml-3">
            {/* d57 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_641GA2_OLS"
              )}`}
              label="PP_641GA2_OLS"
            />
            {/* d58 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-4 ${useColorStatus(
                "PP_641GA2_CLS"
              )}`}
              label="PP_641GA2_CLS"
            />
          </div>
        </div>
        <div className="position-absolute single-text-15">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "641SR2",
            }}
          />
        </div>

        <div className="yellowline-Vr   position-absolute line-1"></div>
        <div className="yellowline-Hr   position-absolute line-2"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
        <div className="yellowline-Vr upArrow  position-absolute line-9"></div>
        <div className="yellowline-Hr  position-absolute line-10"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-11"></div>
        <div className="yellowline-Hr  position-absolute line-12"></div>
        <div className="yellowline-Vr upArrow  position-absolute line-13"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-14"></div>
        <div className="yellowline-Hr   position-absolute line-15"></div>
        <div className="yellowline-Hr   position-absolute line-16"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
      </div>

      <div className="packer-1">
        <div className=" position-absolute  single-text-1 d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "M",
            }}
          />
          {/* a21 */}
          <BlackContainer
            data={{
              label: "PP_641BE1_II",
              useClass: "greenTxt  mt-2 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-text-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mx-auto bg-light",
                label: "BMS",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            {/* d112 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "PP_641BE1_AD_RUN",
                  healthyLabel: "PP_641BE1_AD_PH",
                }
              )}`}
              text="M"
              label="PP_641BE1_AD_RUN"
            />
            {/* d114 */}
            <MotorCircleDigitalTag
              className={`square digital-tag  ml-2 mt-1 ${useColorStatus(
                "PP_641BE1_ZS"
              )}`}
              label="PP_641BE1_ZS"
            />
          </div>

          <div className="d-flex mt-5">
            {/* d111 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "PP_641BE1_BSS3_ALM"
              )}`}
              label="PP_641BE1_BSS3_ALM"
              text="BSS3A"
            />
            {/* d116 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE1_BSS4_ALM"
              )}`}
              label="PP_641BE1_BSS4_ALM"
              text="BSS4A"
            />
          </div>
          <div className="d-flex">
            {/* d113 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "PP_641BE1_BSS3"
              )}`}
              label="PP_641BE1_BSS3"
              text="BSS3T"
            />
            {/* d117 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE1_BSS4"
              )}`}
              label="PP_641BE1_BSS4"
              text="BSS4T"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 mb-4",
              label: "641BE1",
            }}
          />

          <div className="d-flex mt-5">
            {/* d131 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "PP_641BE1_BSS1_ALM"
              )}`}
              label="PP_641BE1_BSS1_ALM"
              text="BSS1A"
            />
            {/* d133 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE1_BSS2_ALM"
              )}`}
              label="PP_641BE1_BSS2_ALM"
              text="BSS2A"
            />
          </div>

          <div className="d-flex">
            {/* d132 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ${useColorStatus(
                "PP_641BE1_BSS1_ALM"
              )}`}
              label="PP_641BE1_BSS1_ALM"
              text="BSS1T"
            />

            {/* d134 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2 ml-5 ${useColorStatus(
                "PP_641BE1_BSS2"
              )}`}
              label="PP_641BE1_BSS2"
              text="BSS2T"
            />
          </div>
          <div className="mt-5 ">
            {/* d135 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2  ${useColorStatus(
                "PP_641BE1_LS1"
              )}`}
              label="PP_641BE1_LS1"
              text="LSO1"
            />
            {/* d136 */}{" "}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-2  ${useColorStatus(
                "PP_641BE1_LS2"
              )}`}
              label="PP_641BE1_LS2"
              text="LSO2"
            />
          </div>
        </div>

        <div className="position-absolute single-text-3 d-flex">
          <div className="img-109">
            <div className="d-flex">
              {/* d118 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 pt-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_641VS1_RUN",
                    healthyLabel: "PP_641VS1_PH",
                  }
                )} `}
                text="M"
                label="PP_641VS1_RUN"
              />
              {/* d119 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-4  mt-4 ${useColorStatus(
                  "PP_641VS1_ZSS"
                )}`}
                label={"PP_641VS1_ZSS"}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5",
              label: "641VS1",
            }}
          />
        </div>

        <div className="position-absolute single-text-5 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-4",
              label: "641L12",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "641LC1",
              }}
            />

            <div className="containerImage text-center ml-2 ">
              <div>
                <div className="d-flex">
                  {/* a26 */}
                  <BlackContainer
                    data={{
                      label: "PP_641BI1_WI",
                      useClass: "greenTxt mt-2",
                      unit: "TONS",
                      unitColor: "unitColor",
                    }}
                  />
                  {/* d121 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                      "PP_641BI1_LS1"
                    )}`}
                    label="PP_641BI1_LS1"
                  />
                </div>

                <div className="d-flex mt-2">
                  {/* d120 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                      "PP_641BI1_PH"
                    )}`}
                    label="PP_641BI1_PH"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark mt-2 ml-2",
                      label: "641L11",
                    }}
                  />
                  {/* d122 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                      "PP_641BI1_LS2"
                    )}`}
                    label="PP_641BI1_LS2"
                  />{" "}
                </div>
              </div>
            </div>
            <div>
              {/* a27 */}
              <BlackContainer
                data={{
                  label: "PP_641BI3_TT",
                  useClass: "greenTxt ml-4 mt-3",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              {/* <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-3",
                  label: "641AE1",
                }}
              /> */}
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-6">
          <div className="img-110">
            <div className="d-flex">
              {/* d127 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag p-2  ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641PM1_RUN", healthyLabel: "PP_641PM1_PH" }
                )}`}
                text="M"
                label="PP_641PM1_RUN"
              />
              {/* d125 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                  "PP_641PM1_FCG_OLS"
                )}`}
                label="PP_641PM1_FCG_OLS"
              />
              {/* d126 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                  "PP_641PM1_FCG_CLS"
                )}`}
                label="PP_641PM1_FCG_CLS"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4 ml-2",
                label: "641PM1",
              }}
            />
          </div>
        </div>
        <div className="position-absolute single-text-7">
          <div className="img-109"></div>
        </div>

        <div className="position-absolute single-text-8 d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mx-auto",
                  label: "641BF1_BYP",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center  mt-3">
                  {/* d162 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag p-2 ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_641RA1"
                    )}`}
                    label="PP_641RA1_RUN"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="yellowline-Vr  downArrow  line-39 ml-3"></div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: " text-dark ml-auto",
                    label: "641FN1",
                  }}
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark ml-auto mt-1",
                  label: "641RA1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: " text-dark ml-auto mt-1",
                  label: "641BF1_PI",
                }}
              />
            </div>
            <div className="mt-1">
              <div>
                {/* a22,23 */}
                <BlackContainer
                  data={{
                    label: "PP_641BF1_DPT",
                    useClass: "greenTxt ml-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_641BF1_PT",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex">
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* d164 */}
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PP_641FN1_RUN",
                        healthyLabel: "PP_641FN1_PH",
                      }
                    )}`}
                    label="PP_641FN1_RUN"
                  />
                  <div className="yellowline-Vr  downArrow  line-39 ml-1"></div>
                </div>
              </div>
              {/* a24,25 */}
              <BlackContainer
                data={{
                  label: "PP_641FN1_II",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_641FN1",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_641FN1",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-11">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mb-4",
              label: "641FV1-4",
            }}
          />
          <div class="dashedHr-Pipe position-absolute mb-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-5",
              label: "641AS1",
            }}
          />
        </div>

        <div class="position-absolute single-text-12 d-flex">
          <div className="mr-2">
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* d150 */}
              <MotorCircleDigitalTag
                className={`line-circle digital-tag mt-1 p-2 ${useColorStatus(
                  "PP_651LM6_RDY"
                )} `}
                label="PP_651LM6_RDY"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FN9(W)",
              }}
            />
          </div>
          <div>
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* d151 */}
              <MotorCircleDigitalTag
                className={`line-circle digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_641FNA_RUN",
                    healthyLabel: "PP_641FNA_PH",
                  }
                )} `}
                label="PP_641FNA_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FNA(S)",
              }}
            />
          </div>
        </div>

        <div className="pipe-1 position-absolute">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mb-2",
              label: "AIR RECEIVER",
            }}
          />
          <div className="d-flex">
            <div className="d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-4 mr-2",
                    label: "641AR1-PS",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 mr-2",
                    label: "641AR1-DV",
                  }}
                />
              </div>
              <div>
                <div className="img-108 d-flex align-items-center">
                  {/* d156 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-2 ${useColorStatus(
                      "PP_641AR1_PS"
                    )}`}
                    label="PP_641AR1_PS"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "641AR1",
                  }}
                />
              </div>
            </div>
            <div className="d-flex">
              <div>
                <div className="img-108 d-flex align-items-center">
                  {/* d157 */}
                  <MotorCircleDigitalTag
                    className={`square digital-tag ml-2 ${useColorStatus(
                      "PP_641AR2_PS"
                    )}`}
                    label="PP_641AR2_PS"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "641AR2",
                  }}
                />
              </div>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-4 mr-2",
                    label: "641AR2-PS",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 mr-2",
                    label: "641AR2-DV",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute single-text-13 d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FROM",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1",
                label: "CEMENT SILO",
              }}
            />
          </div>
          {/* d130 */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-3 ${useColorStatus(
              "PP_641BE1_ZSS"
            )}`}
            label="PP_641BE1_ZSS"
          />
        </div>

        <div className="position-absolute single-text-14">
          <div className="d-flex ml-3">
            {/* d123 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                "PP_641GA1_OLS"
              )}`}
              label="PP_641GA1_OLS"
            />{" "}
            {/* d124 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-2 ${useColorStatus(
                "PP_641GA1_CLS"
              )}`}
              label="PP_641GA1_CLS"
            />{" "}
          </div>
        </div>
        <div className="position-absolute single-text-15">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "641SR1",
            }}
          />
        </div>

        <div className="yellowline-Vr   position-absolute line-1"></div>
        <div className="yellowline-Hr   position-absolute line-2"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
        <div className="yellowline-Vr upArrow  position-absolute line-9"></div>
        <div className="yellowline-Hr  position-absolute line-10"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-11"></div>
        <div className="yellowline-Hr  position-absolute line-12"></div>
        <div className="yellowline-Vr upArrow  position-absolute line-13"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-14"></div>
        <div className="yellowline-Hr   position-absolute line-15"></div>
        <div className="yellowline-Hr   position-absolute line-16"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
      </div>

      <div className=" position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mr-1 bg-info",
            label: "OFF",
          }}
        />
        <div className="d-flex align-items-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mb-1 mr-1",
              label: "641RC3",
            }}
          />
          {/* d38 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag mx-auto mb-2 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641BCD3_RUN", healthyLabel: "PP_641BCD3_PH" }
            )} `}
            label="PP_641BCD3_RUN"
            text="M"
          />

          <div className="mb-2">
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* d39 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_641FNE_RUN",
                    healthyLabel: "PP_641FNE_PH",
                  }
                )}`}
                label="PP_643FNE_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "643FNE",
              }}
            />
          </div>
        </div>

        <div className="hpipecircle">
          {/* d37 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641RC4_RUN", healthyLabel: "PP_641RC4_PH" }
            )} `}
            text="M"
            label="PP_641RC4_RUN"
          />

          <span className={`dot grayDot `}></span>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1 mx-auto",
            label: "641BCD3",
          }}
        />
      </div>

      <div className=" position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mr-1 bg-info",
            label: "OFF",
          }}
        />
        <div className="d-flex align-items-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mb-1 mr-1",
              label: "641RC2",
            }}
          />
          {/* d100 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641BCD2_RUN", healthyLabel: "PP_641BCD2_PH" }
            )}`}
            label="PP_641BCD2_RUN"
            text="M"
          />
          <div className="mb-2">
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* d101 */}
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641FNB_RUN", healthyLabel: "PP_641FNB_PH" }
                )}`}
                label="PP_641FNB_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FNB",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mb-1 ml-4",
              label: "641BC2",
            }}
          />
        </div>
        <div className="hpipecircle">
          {/* d99 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641RC2_RUN", healthyLabel: "PP_641RC2_PH" }
            )}`}
            label="PP_641RC2"
            text="M"
          />
          <span className={`dot grayDot `}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1 mx-auto",
            label: "641BCD2",
          }}
        />
      </div>

      <div className=" position-absolute single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mr-1 bg-info",
            label: "OFF",
          }}
        />
        <div className="d-flex align-items-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mb-1 mr-1",
              label: "641RC1",
            }}
          />
          {/* d160*/}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641BCD1_RUN", healthyLabel: "PP_641BCD1_PH" }
            )} `}
            label="PP_641BCD1_RUN"
            text="M"
          />
          <div className="mb-2">
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* d161 */}
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_641FN8_RUN", healthyLabel: "PP_641FN8_PH" }
                )} `}
                label="PP_641FN8_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "641FN8",
              }}
            />
          </div>
        </div>
        <div className="hpipecircle">
          {/* d158 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641RC1_RUN", healthyLabel: "PP_641RC1_PH" }
            )} `}
            label="PP_641RC1_RUN"
            text="M"
          />
          <span className={`dot grayDot `}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1 mx-auto",
            label: "641BCD1",
          }}
        />
      </div>

      <div className=" position-absolute single-text-19">
        <div className="d-flex align-items-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mb-1 mr-1",
              label: "641RC1",
            }}
          />
        </div>

        <div className="hpipecircle">
          {/* d33 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PP_641RC4_RUN",
                healthyLabel: "PP_641RC4_PH",
              }
            )}`}
            text="M"
            label="PP_641RC4_RUN"
          />
          <span className={`dot grey-color `}>M</span>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1 mx-auto",
            label: "641BCD4",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mr-1 bg-info",
              label: "OFF",
            }}
          />
          <div className="mb-2">
            <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
              {/* <span className={`dot grayDot mt-1 p-2 ${"RM_362BC2"} `}>M</span> */}
              {/* d32 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_641FNF_RUN",
                    healthyLabel: "PP_641FNF_PH",
                  }
                )}`}
                label="PP_641FNF_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "643FNF",
              }}
            />
          </div>
        </div>
      </div>

      <div className=" position-absolute single-text-20">
        <div className="hpipecircle">
          <span className={`dot grey-color`}></span>
          {/* d35 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PP_641RB1_RUN",
                healthyLabel: "PP_641RB1_PH",
              }
            )}`}
            text="M"
            label="PP_641RB1_RUN"
          />
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "641RB1",
          }}
        />
      </div>

      <div className=" position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-4",
            label: "651BC4",
          }}
        />
        <div className="hpipecircle">
          {/* d36 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PP_651BC4_RUN",
                healthyLabel: "PP_651BC4_PH",
              }
            )}`}
            text="M"
            label="PP_651BC4_RUN"
          />
          <span className={`dot grey-color `}></span>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-4",
            label: "651BP4",
          }}
        />
      </div>

      <div className=" position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-4",
            label: "651BC3",
          }}
        />
        <div className="hpipecircle">
          <span className={`dot  grey-color `}>M</span>
          <span className={`dot grey-color `}></span>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-4",
            label: "651BP3",
          }}
        />
      </div>

      <div className=" position-absolute single-text-23">
        <div className="hpipecircle">
          {/* d78 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_651BC8_RUN", healthyLabel: "PP_651BC8_PH" }
            )} `}
            label="PP_651BC8_RUN"
            text="M"
          />
          <span className={`dot grayDot `}></span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex ml-5">
            {/* d82 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useColorStatus(
                "PP_651BC8_DE_MG"
              )}`}
              label="PP_651BC8_DE_MG"
              text="DE_MG"
            />
            {/* d83 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_651BC8_NDE_MG"
              )}`}
              label="PP_651BC8_NDE_MG"
              text="NDE_MG"
            />
          </div>
          <div className="d-flex ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-4",
                label: "651BCB",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-4",
                label: "651COB",
              }}
            />
            {/* d145 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-4 ${useColorStatus(
                "PP_651LM4_BG1"
              )}`}
              label="PP_651LM4_BG1"
            />
          </div>
        </div>
      </div>

      <div className=" position-absolute single-text-24">
        <div className="hpipecircle">
          <span className={`dot grey-color `}>M</span>
          <span className={`dot grey-color `}></span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex ml-5">
            {/* d84 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useColorStatus(
                "PP_651BC9_DE_MG"
              )}`}
              label="PP_651BC9_DE_MG"
              text="DE_MG"
            />
            {/* d85 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_651BC9_NDE_MG"
              )}`}
              label="PP_651BC9_NDE_MG"
              text="NDE_MG"
            />
          </div>
          <div className="d-flex ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-4",
                label: "651BC9",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-4",
                label: "651CO9",
              }}
            />
            {/* d147 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-1 ${useColorStatus(
                "PP_651LM5_BG1"
              )}`}
              label="PP_651LM5_BG1"
            />
          </div>
        </div>
      </div>

      <div className=" position-absolute single-text-25">
        <div className="hpipecircle">
          {/* d174 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_651BCA_RUN", healthyLabel: "PP_651BCA_PH" }
            )} `}
            label="PP_651BCA_RUN"
            text="M"
          />
          <span className={`dot grayDot `}></span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex ml-5">
            {/* d86 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useColorStatus(
                "PP_651BCA_DE_MG"
              )}`}
              label="PP_651BCA_DE_MG"
              text="DE_MG"
            />
            {/* d87 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_651BCA_NDE_MG"
              )}`}
              label="PP_651BCA_NDE_MG"
              text="NDE_MG"
            />
          </div>
          <div className="d-flex ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-4",
                label: "651BCA",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-4",
                label: "651COA",
              }}
            />
            {/* d148 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-1 ${useColorStatus(
                "PP_651LM6_BG1"
              )}`}
              label={"PP_651LM6_BG1"}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-26">
        <div className="d-flex">
          <div className="mb-2 mr-3">
            <div class=" d-flex justify-content-center align-items-center">
              {/* d73 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag  mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD6_M0_RUN",
                    healthyLabel: "PP_651BD6_M0_PH",
                  }
                )}`}
                label={"PP_651BD6_M0_RUN"}
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD6",
              }}
            />
          </div>
          <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
            {/* d74 */}
            <MotorCircleDigitalTag
              className={`dot  digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_651BD6_OLS", closeLabel: "PP_651BD6_CLS" }
              )}`}
              label="PP_651BD6_OLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mb-2 mr-3">
            <div class=" d-flex justify-content-center align-items-center">
              {/* d77 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD8_M0_RUN",
                    healthyLabel: "PP_651BD8_M0_PH",
                  }
                )} `}
                label={"PP_651BD8_M0_RUN"}
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD8",
              }}
            />
          </div>
          <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
            {/* d80 */}
            <MotorCircleDigitalTag
              className={`dot  digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_651BD8_OLS", closeLabel: "PP_651BD8_CLS" }
              )}`}
              label="PP_651BD8_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-27">
        <div className="d-flex">
          <div className="mb-2 mr-3">
            <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
              {/* d75 */}
              <MotorCircleDigitalTag
                className={`dot  digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PP_651BD5_OLS", closeLabel: "PP_651BD5_CLS" }
                )}`}
                label="PP_651BD5 _OLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="ml-3">
            {/* d76 */}
            <div class=" d-flex justify-content-center align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD5_RUN",
                    healthyLabel: "PP_651BD5_PH",
                  }
                )}`}
                label={"PP_651BD5_RUN"}
                text={`M`}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD5",
              }}
            />
          </div>
        </div>

        <div className="d-flex mt-1">
          <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
            {/* d81 */}
            <MotorCircleDigitalTag
              className={`dot  digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_651BD7_OLS", closeLabel: "PP_651BD7_CLS" }
              )}`}
              label="PP_651BD7_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <div className="mb-2 ml-4 mr-3">
            <div class=" d-flex justify-content-center align-items-center">
              {/* d79 */}
              <MotorCircleDigitalTag
                className={`dot mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD7_M0_RUN",
                    healthyLabel: "PP_651BD7_M0_PH",
                  }
                )} `}
                label="PP_651BD7_M0_RUN"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD7",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-28">
        {/* d65 */}
        <MotorCircleDigitalTag
          className={`square digital-tag ml-2 ${useColorStatus(
            "PP_651PM3_BG1"
          )}`}
          label={"PP_651PM3_BG1"}
        />

        {/* d70 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-0 ${useColorStatus(
            "PP_651BC4_DE_MG"
          )}`}
          label="PP_651BC4_DE_MG"
          text="DE_MG"
        />

        {/* d71 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-0 ${useColorStatus(
            "PP_651BC4_NDE_MG"
          )}`}
          label="PP_651BC4_NDE_MG"
          text="NDE_MG"
        />
      </div>

      <div className="position-absolute single-text-29">
        {/* d63 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-5 ${useColorStatus(
            "PP_651BC3_DE_MG"
          )}`}
          label="PP_651BC3_DE_MG"
          text="DE_MG"
        />

        {/* d66 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-5 ${useColorStatus(
            "PP_651BC3_NDE_MG"
          )}`}
          label="PP_651BC3_NDE_MG"
          text="NDE_MG"
        />
      </div>

      <div className="position-absolute single-text-30 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "651CO4",
          }}
        />
        {/* d69 */}
        <MotorCircleDigitalTag
          className={`square digital-tag ml-2 ${useColorStatus(
            "PP_651PM3_BG2"
          )}`}
          label={"PP_651PM3_BG2"}
        />
      </div>
      <div className=" position-absolute single-text-31">
        <div className="hpipecircle">
          <span className={`dot  grey-color`}>M</span>
          <span className={`dot grey-color`}></span>
        </div>
      </div>

      <div className="position-absolute single-text-32">
        <div className="d-flex">
          <div className="mb-2 mr-3">
            <div class=" d-flex justify-content-center align-items-center">
              {/* d102 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD3_M0_RUN",
                    healthyLabel: "PP_651BD3_M0_PH",
                  }
                )} `}
                label="PP_651BD3_M0_RUN"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD3",
              }}
            />
          </div>
          <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
            {/* d105 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PP_651BD3_OLS",
                  closeLabel: "PP_651BD3_CLS",
                }
              )}`}
              label="PP_651BD3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mb-2 mr-3">
            <div class=" d-flex justify-content-center align-items-center">
              {/* d104 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD4_M0_RUN",
                    healthyLabel: "PP_651BD4_M0_PH",
                  }
                )} `}
                label="PP_651BD4_M0_RUN"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD4",
              }}
            />
          </div>
          <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
            <div
              className={`dot grey-color digital-tag ${{
                openLabel: "",
                closeLabel: "",
              }}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-33 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "651CO2",
          }}
        />
        <div className={`square grey-color ml-2`}></div>
      </div>

      <div className=" position-absolute single-text-34">
        <div className="hpipecircle">
          <span className={`dot grey-color `}>M</span>
          <span className={`dot grey-color `}></span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex ml-5">
            {/* d139 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useColorStatus(
                "PP_651BC5_DE_MG"
              )}`}
              label="PP_651BC5_DE_MG"
              text="DE_MG"
            />

            {/* d140 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_651BC5_NDE_MG"
              )}`}
              label="PP_651BC5_NDE_MG"
              text="NDE_MG"
            />
          </div>
          <div className="d-flex ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-4",
                label: "651BC6",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-4",
                label: "651CO6",
              }}
            />
            {/* d177 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ml-3 ${useColorStatus(
                "PP_651LM2_BG2"
              )}`}
              label="PP_651LM2_BG2"
            />
          </div>
        </div>
      </div>

      <div className=" position-absolute single-text-35">
        <div className="hpipecircle">
          <span className={`dot grey-color `}>M</span>
          <span className={`dot grey-color `}></span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex ml-5">
            {/* d141 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useColorStatus(
                "PP_651BC6_DE_MG"
              )}`}
              label="PP_651BC6_DE_MG"
              text="DE_MG"
            />
            {/* d142 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_651BC6_NDE_MG"
              )}`}
              label="PP_651BC6_NDE_MG"
              text="NDE_MG"
            />
          </div>
          <div className="d-flex ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-4",
                label: "651BC7",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-4",
                label: "651CO7",
              }}
            />
            {/* d179 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-1 ${useColorStatus(
                "PP_651LM3_BG1"
              )}`}
              label="PP_651LM3_BG1"
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-36">
        <div className="hpipecircle">
          <span className={`dot grey-color `}>M</span>
          <span className={`dot grey-color `}></span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex ml-5">
            {/* d143 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useColorStatus(
                "PP_651BC7_DE_MG"
              )}`}
              label="PP_651BC7_DE_MG"
              text="DE_MG"
            />
            {/* d144 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-5 ${useColorStatus(
                "PP_651BC7_NDE_MG"
              )}`}
              label="PP_651BC7_NDE_MG"
              text="NDE_MG"
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "651LM4",
              }}
            />
            {/* d181 */}
            <div className={`square grey-color ml-1 mt-1`}></div>
          </div>
        </div>
      </div>

      <div className=" position-absolute single-text-37">
        <div className="hpipecircle">
          {/* d159 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_651BC1_RUN", healthyLabel: "PP_651BC1_PH" }
            )} `}
            label="PP_651BC1_RUN"
            text="M"
          />{" "}
          <span className={`dot grayDot `}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-4",
            label: "65BF1",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <div className="d-flex">
          <div className="mb-2 mr-3">
            <div class=" d-flex justify-content-center align-items-center">
              {/* d152 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD1_M0_RUN",
                    healthyLabel: "PP_651BD1_M0_PH",
                  }
                )} `}
                text="M"
                label="PP_651BD1_M0_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD1",
              }}
            />
          </div>
          <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
            {/* d153 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-1 p-2 ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PP_651BD1_OLS",
                  closeLabel: "PP_651BD1_CLS",
                }
              )} `}
              label="PP_651BD1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mb-2 mr-3">
            <div class=" d-flex justify-content-center align-items-center">
              {/* d181 */}
              <div className={`dot grey-color  mt-1 p-2`}>M</div>
              {/* <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PP_651BD2_M0_RUN",
                    healthyLabel: "PP_651BD2_M0_PH",
                  }
                )} `}
                text="M"
                label="PP_651BD2_M0_RUN"
              /> */}
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ",
                label: "651BD2",
              }}
            />
          </div>
          <div className="dot-square-line ml-3 d-flex flex-column align-items-center">
            {/* d154*/}
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-1 p-2 ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PP_651BD2_OLS",
                  closeLabel: "PP_651BD2_CLS",
                }
              )} `}
              label="PP_651BD2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-39 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "651CO4",
          }}
        />
        {/* d182 */}
        <MotorCircleDigitalTag
          className={`square digital-tag ml-2 ${useColorStatus(
            "PP_651PM1_BG1"
          )}`}
          label="PP_651PM1_BG1"
        />
      </div>

      <div className="position-absolute single-text-40 d-flex">
        <div>
          <div className="truck"></div>
          <div className="d-flex">
            {/* d146 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-4 ${useColorStatus(
                "PP_651LM5_RDY"
              )}`}
              label="PP_651LM5_RDY"
            />{" "}
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "651LM5",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info",
              label: "LM4_BD5_SEL",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info ml-2",
              label: "LM4_BD6_SEL",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-41 d-flex">
        <div>
          <div className="truck"></div>
          <div className="d-flex">
            {/* d149 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-1 ${useColorStatus(
                "PP_651LM6_RDY"
              )}`}
              label="PP_651LM6_RDY"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "651LM6",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info",
              label: "LM5_BD7_SEL",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info ml-2",
              label: "LM5_BD8_SEL",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-42 d-flex">
        <div>
          <div className="truck"></div>
          <div className="d-flex"></div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3 bg-info",
              label: "LM4_BD5_SEL",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info ml-2",
              label: "LM4_BD6_SEL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <div>
          <div className="truck"></div>
          <div className="d-flex">
            {/* d178 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-1 ${useColorStatus(
                "PP_651LM2_FLT"
              )}`}
              label="PP_651LM2_FLT"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "651LM2",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3 bg-info",
              label: "LM1_BD3_SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info ml-2",
              label: "LM1_BD1_SEL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <div>
          <div className="truck"></div>
          <div className="d-flex">
            {/* d180 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 mt-1 ${useColorStatus(
                "PP_651LM3_RUN_FB"
              )}`}
              label="PP_651LM3_RUN_FB"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "651LM3",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3 bg-info",
              label: "LM2_BD2_SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info ml-2",
              label: "LM2_BD4_SEL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div>
          <div className="truck"></div>
          <div className="d-flex"></div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3 bg-info",
              label: "LM3_L1_SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info ml-2",
              label: "LM3_L2_SEL",
            }}
          />
        </div>
      </div>

      {/* d5 */}
      <MotorCircleDigitalTag
        className={`position-absolute digital-tag single-text-46 square  ml-1 mt-1 ${useColorStatus(
          "PP_641BE3_TS"
        )}`}
        label="PP_641BE3_TS"
      />

      {/* d115 */}
      <MotorCircleDigitalTag
        className={`position-absolute digital-tag single-text-47 square  ml-1 mt-1 ${useColorStatus(
          "PP_641BE1_TS "
        )}`}
        label="PP_641BE1_TS "
      />

      <div className="position-absolute single-text-48">
        {/* d137 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-5 ${useColorStatus(
            "PP_651BC2_DE_MG"
          )}`}
          label="PP_651BC2_DE_MG"
          text="DE_MG"
        />

        {/* d138 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-5 ${useColorStatus(
            "PP_651BC2_NDE_MG"
          )}`}
          label="PP_651BC2_NDE_MG"
          text="NDE_MG"
        />
      </div>
      <div className="position-absolute single-text-49 d-flex">
        {/* d175 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-2 ${useColorStatus(
            "PP_651LM1_BG1"
          )}`}
          label="PP_651LM1_BG1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "651CO5",
          }}
        />

        {/* d176 */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-3 ${useColorStatus(
            "PP_651LM1_FLT"
          )}`}
          label="PP_651LM1_FLT"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "651LM1",
          }}
        />
      </div>

      {/* d171 */}
      <div className="position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`dot digital-tag p-2 ml-1 mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_641BCD4_RUN", healthyLabel: "PP_641BCD4_PH" }
          )}`}
          label="PP_641BCD4_RUN"
        />
      </div>
      <div className="position-absolute single-text-51">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "651BC5",
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "651BP2",
          }}
        />
      </div>

      <div className="yellowline-Hr   position-absolute line-18"></div>
      <div className="yellowline-Hr   position-absolute line-19"></div>
      <div className="yellowline-Hr   position-absolute line-20"></div>
      <div className="yellowline-Hr   position-absolute line-21"></div>
      <div className="yellowline-Vr   position-absolute line-22"></div>
      <div className="yellowline-Vr   position-absolute line-23"></div>
    </div>
  );
};
