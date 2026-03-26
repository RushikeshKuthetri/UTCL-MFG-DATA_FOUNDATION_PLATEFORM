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
} from "../../../../../utils";
export const CementSiloKotputliPage = () => {
  return (
    <div className="CementSiloKotputli w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div className="d-flex">
          <div className="mt-5">
            <BlackContainer
              data={{
                label: "CM_593BF8_DPT",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_593BF8",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "593BF8",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  {/* <span className={`greenDot ${"51RF2_MR"}`}></span> */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "CM_593RAF"
                    )}`}
                    label="CM_593RAF_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "593RAF",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-4 ",
                  label: "TO CEMENT",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "SELO 3",
                }}
              />
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* <span className={`greenDot ${"51RF2_MR"}`}></span> */}

                  <MotorCircleDigitalTag
                    className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "CM_593FNK_RUN",
                        healthyLabel: "CM_593FNK_PH",
                      }
                    )}`}
                    label="CM_593FNK_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "593FNK",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex ml-5">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "593BF7",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  {/* <span className={`greenDot ${"51RF2_MR"}`}>b</span> */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "CM_593RAE"
                    )}`}
                    label="CM_593RAE_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "593RAE",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-4 ",
                  label: "TO 593ASA",
                }}
              />
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* <span className={`greenDot ${"51RF2_MR"}`}>n</span> */}
                  <MotorCircleDigitalTag
                    className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "CM_593FNJ_RUN",
                        healthyLabel: "CM_593FNJ_PH",
                      }
                    )}`}
                    label="CM_593FNJ_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "593FNJ",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 ml-4">
            <BlackContainer
              data={{
                label: "CM_593BF7_DPT",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_593BF7_PT",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-2">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CM_593BE1_M02",
              healthyLabel: "CM_593BE1_M02",
            })} digital-tag`,

            firstCircleLabel: "CM_593BE1_M02",
          }}
        />
        <div className="mt-1 ml-2">
          {/* <span className={`dot greenDot ml-3 mt-2 ${"_541LQ3"}`}>b</span> */}
          <MotorCircleDigitalTag
            className={`dot motor-dot ml-3 mt-2 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_593BE1_M01", healthyLabel: "CM_593BE1_M01" }
            )}`}
            label="CM_593BE1_M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-5",
            label: "593ASD",
          }}
        />
      </div>
      <div className="position-absolute single-text-4">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "593ASA",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "593ASC",
          }}
        />
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="containerImage text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "593DB3",
            }}
          />
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-7A",
          label: "593ASJ",
        }}
      />

      <div className="position-absolute single-text-7">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto mr-4",
            label: "593ASH",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto mr-4",
            label: "593ASk",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div className="containerImage text-center ml-2">
          <div className="d-flex justify-content-around mt-4">
            {/* <span className={`greenDot mt-3 ml-2 ${"51RF2_MR"}`}>L</span> */}
            <MotorCircleDigitalTag
              className={`dot motor-dot mt-3 ml-2 ${useColorStatus(
                "CM_621SB1_LS"
              )} ml-2`}
              text="L"
              label="CM_621SB1_LS"
            />
            <BlackContainer
              data={{
                label: "CM_621SB1_LT1",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "mtr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 ml-2",
              label: "CEMENT SILO - 3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "613 S123",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div className="containerImage text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 ml-2",
              label: "CEMENT SILO - 1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div className="containerImage text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 ml-2",
              label: "CEMENT SILO - 2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <div className="dashedHr-Pipe "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "593ASG",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="dashedHr-Pipe "></div>
      </div>

      <div className="position-absolute single-text-10 d-flex">
        <div className="containerImage text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "593DB1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="containerImage text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "593DB2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="containerImage text-center ml-2"></div>
      </div>
      <div className="position-absolute single-text-13">
        <div className="dashedHr-Pipe "></div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}>b</span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNL_RUN", healthyLabel: "CM_593FNL_PH" }
              )}`}
              label="CM_593FNL_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNL",
            }}
          />
        </div>
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}>n</span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNM_RUN", healthyLabel: "CM_593FNM_PH" }
              )}`}
              label="CM_593FNM_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNM",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <div className="dashedHr-Pipe "></div>
      </div>

      <div className="position-absolute single-text-16 d-flex">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}>b</span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNR_RUN", healthyLabel: "CM_593FNR_PH" }
              )}`}
              label="CM_593FNR_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNR",
            }}
          />
        </div>
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}>b</span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNS_RUN", healthyLabel: "CM_593FNS_PH" }
              )}`}
              label="CM_593FNS_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNS",
            }}
          />
        </div>
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}>b</span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNT_RUN", healthyLabel: "CM_593FNT_PH" }
              )}`}
              label="CM_593FNT_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}></span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNU_RUN", healthyLabel: "CM_593FNU_PH" }
              )}`}
              label="CM_593FNU_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNN",
            }}
          />
        </div>
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}></span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNP_RUN", healthyLabel: "CM_593FNP_PH" }
              )}`}
              label="CM_593FNP_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNP",
            }}
          />
        </div>
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            {/* <span className={`line-circle ${"581FN2"}`}></span> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNQ_RUN", healthyLabel: "CM_593FNQ_PH" }
              )}`}
              label="CM_593FNQ_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNQ",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22  d-flex">
        <div>
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_593SG4_OLS", closeLabel: "CM_593SG4_CLS" }
              )}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "593SG4",
            }}
          />
        </div>
        {/* <BlackContainer
        data={{
          label: "BH_FAN_KW",
          useClass: "greenTxt  mt-3 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
      </div>

      <div className="position-absolute single-text-24  d-flex">
        <div>
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_593SG5_OLS", closeLabel: "CM_593SG5_CLS" }
              )}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "593SG5",
            }}
          />
        </div>
        {/* <BlackContainer
        data={{
          label: "BH_FAN_KW",
          useClass: "greenTxt  mt-3 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
      </div>
      <div className="position-absolute single-text-25  d-flex">
        <div>
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_593SG6_OLS", closeLabel: "CM_593SG6_CLS" }
              )}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "593SG6",
            }}
          />
        </div>
        {/* <BlackContainer
        data={{
          label: "BH_FAN_KW",
          useClass: "greenTxt  mt-3 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
      </div>
      <div className="position-absolute single-text-26  d-flex">
        <div>
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_593SG2_OLS", closeLabel: "CM_593SG2_CLS" }
              )}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "593SG2",
            }}
          />
        </div>
        {/* <BlackContainer
        data={{
          label: "BH_FAN_KW",
          useClass: "greenTxt  mt-3 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_593SG7_OLS", closeLabel: "CM_593SG7_CLS" }
              )}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "593SG7",
            }}
          />
        </div>
        {/* <BlackContainer
        data={{
          label: "BH_FAN_KW",
          useClass: "greenTxt  mt-3 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
      </div>
      <div className="position-absolute single-text-23  d-flex">
        <div>
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_593SG3_OLS", closeLabel: "CM_593SG3_CLS" }
              )}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "593SG3",
            }}
          />
        </div>
        {/* <BlackContainer
        data={{
          label: "BH_FAN_KW",
          useClass: "greenTxt  mt-3 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
      </div>

      <div className="position-absolute single-text-28">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV1_OLS", closeLabel: "CM_593BV1_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV1_OLS", closeLabel: "CM_593BV1_CLS" }
          )}`}
          label="CM_593BV1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV6_OLS", closeLabel: "CM_593BV6_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV6_OLS", closeLabel: "CM_593BV6_CLS" }
          )}`}
          label="CM_593BV6_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV6",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("CM_593BE1_TS")}`}
          label="CM_593BE1_TS"
          text="TS"
        />
        <MotorCircleDigitalTag
          className={`text-dark ml-3 digital-tag ${useColorStatus(
            "CM_593BE1_ZS"
          )}`}
          label="CM_593BE1_ZS"
          text="ZS"
        />
      </div>
      <div className="position-absolute single-text-45">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("CM_593BE1_LS2")}`}
          label="CM_593BE1_LS2"
          text="LS2"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-3 digital-tag ${useColorStatus(
            "CM_593BE1_LS1"
          )}`}
          label="CM_593BE1_LS2"
          text="LS1"
        />
      </div>
      <MotorCircleDigitalTag
        className={`text-dark mt-3 position-absolute single-text-46 digital-tag ${useColorStatus(
          "CM_593BE1_ZSS"
        )}`}
        label="CM_593BE1_ZSS"
        text="ZSS"
      />

      <div className="position-absolute single-text-29">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV4_OLS", closeLabel: "CM_593BV4_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV4_OLS", closeLabel: "CM_593BV4_CLS" }
          )}`}
          label="CM_593BV4_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV5_OLS", closeLabel: "CM_593BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV5_OLS", closeLabel: "CM_593BV5_CLS" }
          )}`}
          label="CM_593BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV5",
          }}
        />
      </div>

      <div className="position-absolute single-text-32">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV2_OLS", closeLabel: "CM_593BV2_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV2_OLS", closeLabel: "CM_593BV2_CLS" }
          )}`}
          label="CM_593BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV3_OLS", closeLabel: "CM_593BV3_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CM_593BV3_OLS", closeLabel: "CM_593BV3_CLS" }
          )}`}
          label="CM_593BV3_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div className="d-flex">
          {/* <span className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}>t</span> */}
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_TLF"
            )}`}
            label="CM_593BE1_TLF"
          />
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_TLA"
            )}`}
            label="CM_593BE1_TLA"
          />
        </div>
        <div className="d-flex ml-3">
          {/* <span className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}>j</span> */}
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_TRA"
            )}`}
            label="CM_593BE1_TRA"
          />
          {/* <span className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}>d</span> */}
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_TRF"
            )}`}
            label="CM_593BE1_TRF"
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className="d-flex">
          {/* <span className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}>o</span> */}
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_BLF"
            )}`}
            label="CM_593BE1_BLF"
          />
          {/* <span className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}>g</span> */}
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_BLA"
            )}`}
            label="CM_593BE1_BLA"
          />
        </div>
        <div className="d-flex ml-3">
          {/* <span className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}></span> */}
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_BRA"
            )}`}
            label="CM_593BE1_BRA"
          />
          {/* <span className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}></span> */}
          <MotorCircleDigitalTag
            className={`square mr-2 digital-tag ${useColorStatus(
              "CM_593BE1_BRF"
            )}`}
            label="CM_593BE1_BRF"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CM_593BE1_BSS_A01",
          useClass: "greenTxt mb-3 position-absolute single-text-37",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-38",
          label: "593BE1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-39",
          label: "593ASF",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-40",
          label: "593ASE",
        }}
      />
      <div className="position-absolute single-text-41 d-flex">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNU_RUN", healthyLabel: "CM_593FNU_PH" }
              )}`}
              label="CM_593FNU_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNU",
            }}
          />
        </div>
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_593FNV_RUN", healthyLabel: "CM_593FNV_PH" }
              )}`}
              label="CM_593FNV_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "593FNV",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "CM_593BE1_BSS_A02",
            useClass: "greenTxt mb-3",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM CEMENT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MILL",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14"></div>
      <div className="yellowline-Vr  position-absolute line-15"></div>
      <div className="yellowline-Vr  position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Hr  position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Hr  position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
    </div>
  );
};
