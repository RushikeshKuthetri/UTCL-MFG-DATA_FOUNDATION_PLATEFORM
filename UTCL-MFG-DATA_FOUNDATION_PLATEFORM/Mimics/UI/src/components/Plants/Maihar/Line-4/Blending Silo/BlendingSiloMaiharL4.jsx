import {
  BlackContainer,
  TextContainerWithWrapWord,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";
import {
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const BlendingSiloMaiharL4 = () => {
  return (
    <div className="maihar-l4-blending-silo w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FROM 394BE1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-5",
              label: "394AS5",
            }}
          />
        </div>
        <div className="dashedHr-Pipe position-absolute mt-2"></div>
      </div>
      <div className="position-absolute single-text-6">
        <div className="dashedHr-Pipe mt-3 mx-auto position-relative single-text-2"></div>
        <div className="dashedHr-Pipe mt-4 mx-auto position-relative single-text-3"></div>
        <div className="dashedHr-Pipe mt-4 mx-auto position-relative single-text-4"></div>
        <div className="dashedHr-Pipe mt-4 mx-auto position-relative single-text-5"></div>
      </div>

      <div className="position-absolute single-text-7 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "414FN1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PH_414FN1")}`}
          label="PH_414FN1"
          text="M"
        />
      </div>
      <div className="boxContainer p-3 position-absolute single-text-8"></div>
      <div className="boxContainer p-1 position-absolute single-text-9 d-flex pt-4 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414BL1_RUN", healthyLabel: "PH_414BL1_PH" }
            )}`}
            label="PH_414BL1_RUN"
          />
          <BlackContainer
            data={{
              label: "PH_414BL1_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414BL3_RUN", healthyLabel: "PH_414BL3_PH" }
            )}`}
            label="PH_414BL3_RUN"
          />
          <BlackContainer
            data={{
              label: "PH_414BL3_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <div className="yellowline-Vr  position-absolute line-39 "></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414BL2_RUN", healthyLabel: "PH_414BL2_PH" }
            )}`}
            label="PH_414BL2_RUN"
          />
          <BlackContainer
            data={{
              label: "PH_414BL2_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "PH_414BL2_II",
            useClass: "greenTxt  mb-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414BL2_SI",
            useClass: "greenTxt  mb-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_414BL1_II",
              useClass: "greenTxt  mb-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_414BL1_SI",
              useClass: "greenTxt  mb-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_414BL3_II",
              useClass: "greenTxt  mb-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_414BL3_SI",
              useClass: "greenTxt  mb-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <BlackContainer
          data={{
            label: "PH_414FNC_II",
            useClass: "greenTxt  mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414FNC_SI",
            useClass: "greenTxt  mb-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-13">
        <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
          <div className="trapezoid"></div>
          <div className="position-absolute single-text-14 d-flex flex-column">
            <div className="dashedHr-Pipe mt-1 position-relative single-text-15"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-16"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-17"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-18"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-19"></div>
          </div>
          <div className="position-absolute single-text-20 d-flex flex-column">
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-15"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-16"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-17"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-18"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-19"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-21">
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG5_OLS", closeLabel: "PH_414SG5_CLS" }
                )}`}
                label="PH_414SG5_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG5",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG5_OLS",
                    closeLabel: "PH_414CG5_CLS",
                    healthyLabel: "PH_414CG5_PH",
                  }
                )}`}
                label="PH_414CG5_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG5",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG4_OLS", closeLabel: "PH_414SG4_CLS" }
                )}`}
                label="PH_414SG4_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG4",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG4_OLS",
                    closeLabel: "PH_414CG4_CLS",
                    healthyLabel: "PH_414CG4_PH",
                  }
                )}`}
                label="PH_414CG4_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG4",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG3_OLS", closeLabel: "PH_414SG3_CLS" }
                )}`}
                label="PH_414SG3_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG3",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG3_OLS",
                    closeLabel: "PH_414CG3_CLS",
                    healthyLabel: "PH_414CG3_PH",
                  }
                )}`}
                label="PH_414CG3_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG3",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG2_OLS", closeLabel: "PH_414SG2_CLS" }
                )}`}
                label="PH_414SG2_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG2",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG2_OLS",
                    closeLabel: "PH_414CG2_CLS",
                    healthyLabel: "PH_414CG2_PH",
                  }
                )}`}
                label="PH_414CG2_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG2",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG1_OLS", closeLabel: "PH_414SG1_CLS" }
                )}`}
                label="PH_414SG1_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG1",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG1_OLS",
                    closeLabel: "PH_414CG1_CLS",
                    healthyLabel: "PH_414CG1_PH",
                  }
                )}`}
                label="PH_414CG1_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-22">
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CGA_OLS",
                    closeLabel: "PH_414CGA_CLS",
                    healthyLabel: "PH_414CGA_PH",
                  }
                )}`}
                label="PH_414CGA_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGA",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SGA_OLS", closeLabel: "PH_414SGA_CLS" }
                )}`}
                label="PH_414SGA_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SGA",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG9_OLS",
                    closeLabel: "PH_414CG9_CLS",
                    healthyLabel: "PH_414CG9_PH",
                  }
                )}`}
                label="PH_414CG9_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG9",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG9_OLS", closeLabel: "PH_414SG9_CLS" }
                )}`}
                label="PH_414SG9_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG9",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG8_OLS",
                    closeLabel: "PH_414CG8_CLS",
                    healthyLabel: "PH_414CG8_PH",
                  }
                )}`}
                label="PH_414CG8_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG8",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG8_OLS", closeLabel: "PH_414SG8_CLS" }
                )}`}
                label="PH_414SG8_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG8",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG7_OLS",
                    closeLabel: "PH_414CG7_CLS",
                    healthyLabel: "PH_414CG7_PH",
                  }
                )}`}
                label="PH_414CG7_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG7",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG7_OLS", closeLabel: "PH_414SG7_CLS" }
                )}`}
                label="PH_414SG7_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG7",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CG6_OLS",
                    closeLabel: "PH_414CG6_CLS",
                    healthyLabel: "PH_414CG6_PH",
                  }
                )}`}
                label="PH_414CG6_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG6",
              }}
            />
          </div>
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SG6_OLS", closeLabel: "PH_414SG6_CLS" }
                )}`}
                label="PH_414SG6_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG6",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-23">
        <BlackContainer
          data={{
            label: "PH_414CG5_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG5_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG4_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG4_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG3_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG3_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG2_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_414CG2_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG1_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG1_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-24">
        <BlackContainer
          data={{
            label: "PH_414CGA_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CGA_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG9_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG9_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG8_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG8_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG7_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG7_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG6_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414CG6_SP_HMI",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-25">
        <div className="containerImage text-center ml-2">
          <BlackContainer
            data={{
              label: "PH_414BI1_WI",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MIXING BIN",
            }}
          />
        </div>
      </div>

      <div className="dashedHr-Pipe position-absolute single-text-26 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-3",
            label: "414SGB",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-27 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-3",
            label: "414ASC",
          }}
        />
      </div>
      <div className="boxContainer p-1 position-absolute single-text-28 d-flex pt-4 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FN2_RUN", healthyLabel: "PH_414FN2_PH" }
            )}`}
            label="PH_414FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414FN2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "FN2",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle green-color mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FN4_RUN", healthyLabel: "PH_414FN4_PH" }
            )}`}
            label="PH_414FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414FN4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "FN4 FOR FN2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "FN4 FOR FN3",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle green-color mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FN3_RUN", healthyLabel: "PH_414FN3_PH" }
            )}`}
            label="PH_414FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414FN3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "FN3",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-1 position-absolute single-text-29 d-flex pt-2 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 mr-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414BL4_RUN", healthyLabel: "PH_414BL4_PH" }
            )}`}
            label="PH_414BL4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414BL4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "BL4",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_414BL4_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414BL5_RUN", healthyLabel: "PH_414BL5_PH" }
            )}`}
            label="PH_414BL5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414BL5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "STANDBY",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "BL5",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_414BL5_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-1 position-absolute single-text-30 d-flex pt-2">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FN5_RUN", healthyLabel: "PH_414FN5_PH" }
            )}`}
            label="PH_414FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414FN5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "FN5",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FN7_RUN", healthyLabel: "PH_414FN7_PH" }
            )}`}
            label="PH_414FN7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414FN7",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "FN7 FOR FN5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "FN7 FOR FN6",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FN6_RUN", healthyLabel: "PH_414FN6_PH" }
            )}`}
            label="PH_414FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "414FN6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "FN6",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-31 d-flex">
        <div className="ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-4 mb-3",
              label: "414CGB",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "414A SB",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_414CGB_ZT",
              useClass: "greenTxt  mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-1  position-absolute single-text-32">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 mr-3",
              label: "SEQ.NO",
            }}
          />
          <BlackContainer
            data={{
              label: "SEQ_NO",
              useClass: "greenTxt  mt-1  ml-auto",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 mr-3",
              label: "ON TIME",
            }}
          />
          <BlackContainer
            data={{
              label: "SEQ_ON_TIMER",
              useClass: "greenTxt  mt-1 ml-auto",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 mr-3",
              label: "OVERLAP TIME",
            }}
          />
          <BlackContainer
            data={{
              label: "SEQ_OVERLAP_TIMER",
              useClass: "greenTxt  mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-33 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "414BF2",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_414BF2_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PH_414RA2"
                    )}`}
                    label="PH_414RA2_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "414RA2",
                    }}
                  />
                </div>
              </div>

              <div className="yellowline-Vr  downArrow position-absolute line-26 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PH_414FN9_RUN",
                        healthyLabel: "PH_414FN9_PH",
                      }
                    )}`}
                    label="PH_414FN9_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "414FN9",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "414BF1",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_414BF1_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PH_414RA1"
                    )}`}
                    label="PH_414RA1_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "414RA1",
                    }}
                  />
                </div>
              </div>

              <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-4 ",
                  label: "TO 414Bl1",
                }}
              />
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PH_414FN8_RUN",
                        healthyLabel: "PH_414FN8_PH",
                      }
                    )}`}
                    label="PH_414FN8_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "414FN8",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PH_414BF1_PT",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "Bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "PH_434RA1_II",
            useClass: "greenTxt  mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_434RA1_SI",
            useClass: "greenTxt  mb-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-36">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
        />
        {/* <div className="mt-1 ml-2">
              <span className={`dot greenDot ml-3 mt-2 ${"_541LQ3"}`}></span>
            </div> */}
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "PH_414BE1_II",
            useClass: "greenTxt  mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <div className=" mr-2">
            <MotorCircleDigitalTag
              className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PH_414BE1_RUN", healthyLabel: "PH_414BE1_PH" }
              )}`}
              label="PH_414BE1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "414BE1_M01",
            }}
          />
        </div>
        <div className="d-flex">
          <div className=" mr-2">
            <MotorCircleDigitalTag
              className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "PH_414BE1_M02_RUN",
                  healthyLabel: "PH_414BE1_M02_PH",
                }
              )}`}
              label="PH_414BE1_M02_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "414BE1_M02",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white mt-2 ",
            label: "414BE1",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-38 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-3 mr-3",
            label: "414ASD",
          }}
        />
      </div>
      <div className="position-absolute  single-text-39">
        <div className="containerImage text-center ml-2">
          <BlackContainer
            data={{
              label: "PH_434BI1_WI",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "KILN FEED BIN",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-40 mt-2 d-flex"></div>
      <div className="dashedHr-Pipe position-absolute single-text-41 mt-2 d-flex"></div>

      <div className="position-absolute single-text-43 d-flex">
        <BlackContainer
          data={{
            label: "PH_434CG2_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG2_CLS")}`}
          label="PH_434SG2_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG2_OLS")}`}
          label="PH_434SG2_OLS"
        />
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <BlackContainer
          data={{
            label: "PH_434CG1_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG1_CLS")}`}
          label="PH_434SG1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG1_OLS")}`}
          label="PH_434SG1_OLS"
        />
      </div>
      <div className=" position-absolute single-text-45 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-2"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FNA_RUN", healthyLabel: "PH_414FNA_PH" }
            )}`}
            label="PH_414FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "414FNA",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_414FNB_RUN", healthyLabel: "PH_414FNB_PH" }
            )}`}
            label="PH_414FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "414FNB",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-1 position-absolute single-text-46 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434BL1_RUN", healthyLabel: "PH_434BL1_PH" }
            )}`}
            label="PH_434BL1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "434BL1",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434BL2_RUN", healthyLabel: "PH_434BL2_PH" }
            )}`}
            label="PH_434BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "434BL2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "414BF3",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_414BF3_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PH_414RA3"
                    )}`}
                    label="PH_414RA3_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "414RA3",
                    }}
                  />
                </div>
              </div>

              <div className="yellowline-Vr  downArrow position-absolute line-25 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PH_414FNC_RUN",
                        healthyLabel: "PH_414FNC_PH",
                      }
                    )}`}
                    label="PH_414FNC_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "414FNC",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="containerImage position-absolute single-text-48"></div>
      <div class="containerImage position-absolute single-text-49"></div>
      <div class="containerImage position-absolute single-text-50"></div>
      <div class="containerImage position-absolute single-text-51"></div>
      <div className="dashedHr-Pipe position-absolute single-text-52 mt-2"></div>
      <div className=" position-absolute single-text-53 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-2"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN1_RUN", healthyLabel: "PH_434FN1_PH" }
            )}`}
            label="PH_434FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "434FN1",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN2_RUN", healthyLabel: "PH_434FN2_PH" }
            )}`}
            label="PH_434FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "434FN2",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-54 d-flex">
        <div>
          <div>
            <span className={`dot ${"RM_362FN1"}`}></span>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white  mt-1",
              label: "434DQ1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "434DQ1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_434DQ1_FR",
              useClass: "greenTxt  mt-2 ml-4",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-55 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_434DQ2_FR",
              useClass: "greenTxt  mt-2 mr-4",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white  mt-1",
              label: "434DQ2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "434DQ2",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-56">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
        />
        {/* <div className="mt-1 ml-2">
              <span className={`dot greenDot ml-3 mt-2 ${"_541LQ3"}`}></span>
            </div> */}
      </div>

      <div className="boxContainer p-1 position-absolute single-text-57 d-flex pt-5 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-3"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 mr-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN6_RUN", healthyLabel: "PH_434FN6_PH" }
            )}`}
            label="PH_434FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "434FN6",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN8_RUN", healthyLabel: "PH_434FN8_PH" }
            )}`}
            label="PH_434FN8_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "434FN8",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "STANDBY",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN7_RUN", healthyLabel: "PH_434FN7_PH" }
            )}`}
            label="PH_434FN7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "434FN7",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-58 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-3 mr-3",
            label: "434ASA",
          }}
        />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "434BF1",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_434BF1_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PH_434RA6"
                    )}`}
                    label="PH_434RA6_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "434RA6",
                    }}
                  />
                </div>
              </div>

              <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "PH_434FN3_RUN",
                        healthyLabel: "PH_434FN3_PH",
                      }
                    )}`}
                    label="PH_434FN3_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "434FN3",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PH_434BF1_PT1",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "Bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "single-text-107 position-absolute text-dark mt-2 ",
                  label: "434BF1PT1",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-60 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_434DG1_SP",
              useClass: "greenTxt  mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_434DG1_ZT",
              useClass: "greenTxt  mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "PH_434DG2_SP_1",
              useClass: "greenTxt  mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_434DG2_ZT",
              useClass: "greenTxt  mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61">
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "434SG4",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_434SG4_OLS", closeLabel: "PH_434SG4_CLS" }
                )}`}
                label="PH_434SG4_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>

          <div className="d-flex ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("PH_434DG1")}`}
                label="PH_434DG1"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "434DG1",
              }}
            />
          </div>
          <div className="d-flex ml-5">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_434DG2_OLS", closeLabel: "PH_434DG2_CLS" }
                )}`}
                label="PH_434DG2_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "434DG2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-62 mt-2"></div>
      <div className="dashedHr-Pipe position-absolute single-text-63 mt-2"></div>

      <div className="boxContainer p-1 position-absolute single-text-64 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN4_RUN", healthyLabel: "PH_434FN4_PH" }
            )}`}
            label="PH_434FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "434FN4",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN5_RUN", healthyLabel: "PH_434FN5_PH" }
            )}`}
            label="PH_434FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "434FN5",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-1 position-absolute single-text-65 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FNB_RUN", healthyLabel: "PH_434FNB_PH" }
            )}`}
            label="PH_434FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "434FNB",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FNC_RUN", healthyLabel: "PH_434FNC_PH" }
            )}`}
            label="PH_434FNC_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "434FNC",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-66 d-flex ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-2"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FN9_RUN", healthyLabel: "PH_434FN9_PH" }
            )}`}
            label="PH_434FN9_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "434FN9",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434FNA_RUN", healthyLabel: "PH_434FNA_PH" }
            )}`}
            label="PH_434FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "434FNA",
            }}
          />
        </div>
      </div>

      <div className=" boxContainer p-1 position-absolute single-text-67">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PH FEED HEAL THY",
            }}
          />
          <div className="ml-auto">
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_FEED_HEALTHY"
              )}`}
              label="PH_FEED_HEALTHY"
            />
          </div>
        </div>
        <div className="d-flex  mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "KILN FIRING",
            }}
          />
          <div className="ml-auto">
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_484DQ_RUN"
              )}`}
              label="PH_484DQ_RUN"
            />
          </div>
        </div>
        <div className="d-flex  mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PC FIRING",
            }}
          />
          <div className="ml-auto">
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_454DQ_RUN1"
              )}`}
              label="PH_454DQ_RUN1"
            />
          </div>
        </div>
        <div className="d-flex  mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "KILN MAIN DIRIVE",
            }}
          />
          <div className="ml-auto">
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_464MD_RUN"
              )}`}
              label="PH_464MD_RUN"
            />
          </div>
        </div>
        <div className="d-flex  mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PH DRAFT",
            }}
          />
          <div className="ml-auto d-flex">
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_ST1_DRAFT_HLTHY"
              )}`}
              label="PH_ST1_DRAFT_HLTHY"
            />
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_ST2_DRAFT_HLTHY"
              )}`}
              label="PH_ST2_DRAFT_HLTHY"
            />
          </div>
        </div>
        <div className="d-flex  mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "LEVEL SW",
            }}
          />
          <div className="ml-auto d-flex">
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_ST1_LS_HLTHY"
              )}`}
              label="PH_ST1_LS_HLTHY"
            />
            <MotorCircleDigitalTag
              className={`mr-2 square digital-tag ${useColorStatus(
                "PH_ST2_LS_HLTHY"
              )}`}
              label="PH_ST2_LS_HLTHY"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-68">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PH_434RA2"
            )}`}
            label="PH_434RA2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "434RA2",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PH_434RA3"
            )}`}
            label="PH_434RA3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "434RA3",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PH_434SG7_OLS", closeLabel: "PH_434SG7_CLS" }
              )}`}
              label="PH_434SG7_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "434SG7",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "434FV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PH_434RA4"
            )}`}
            label="PH_434RA4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "434RA4",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PH_434RA5"
            )}`}
            label="PH_434RA5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "434RA5",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PH_434SG8_OLS", closeLabel: "PH_434SG8_CLS" }
              )}`}
              label="PH_434SG8_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "434SG8",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "434FV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-70">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "434RA4",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot motor-dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_434RA1_RUN", healthyLabel: "PH_434RA1_PH" }
            )}`}
            text=""
            label="PH_434RA1_RUN"
          />
          <div class="yellowline-Vr downArrow arrow ml-auto"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "434RA1",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PH_434SG6_OLS", closeLabel: "PH_434SG6_CLS" }
              )}`}
              label="PH_434SG6_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "434SG6",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "434FV1",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-71 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-3 ml-2",
            label: "434AS5",
          }}
        />
      </div>

      <div className=" position-absolute single-text-72">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "TO KILN INLET FOR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "COLD MEAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "INJECTION",
          }}
        />
      </div>
      <div className=" position-absolute single-text-73">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "TO PREHEA TER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "444PH1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "TO PREHEA TER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "442PH2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-75">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "RAW MEAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "SILO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2 ml-2",
            label: "394SB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-76">
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PH_434SG5_OLS", closeLabel: "PH_434SG5_CLS" }
              )}`}
              label="PH_434SG5_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "434SG5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-77">
        <BlackContainer
          data={{
            label: "PH_434DG1_PT1",
            useClass: "greenTxt  mt-1 ml-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-78 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "434BV9",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV9_OLS", closeLabel: "PH_434BV9_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV9_OLS", closeLabel: "PH_434BV9_CLS" }
            )}`}
            label="PH_434BV9_OLS"
          />
        </div>
        <div className="d-flex ml-5 single-text-138">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BVA_OLS", closeLabel: "PH_434BVA_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BVA_OLS", closeLabel: "PH_434BVA_CLS" }
            )}`}
            label="PH_434BVA_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "434BVA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-79 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "434BVB",
            }}
          />

          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BVB_OLS", closeLabel: "PH_434BVB_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BVB_OLS", closeLabel: "PH_434BVB_CLS" }
            )}`}
            label="PH_434BVB_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-80 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "434BV3",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV3_OLS", closeLabel: "PH_434BV3_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV3_OLS", closeLabel: "PH_434BV3_CLS" }
            )}`}
            label="PH_434BV3_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-81 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "434BV1",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV1_OLS", closeLabel: "PH_434BV1_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV1_OLS", closeLabel: "PH_434BV1_CLS" }
            )}`}
            label="PH_434BV1_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-82 d-flex">
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVD_OLS", closeLabel: "PH_414BVD_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVD_OLS", closeLabel: "PH_414BVD_CLS" }
            )}`}
            label="PH_414BVD_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "414BVD",
            }}
          />
        </div>
        <div className="d-flex ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVE_OLS", closeLabel: "PH_414BVE_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVE_OLS", closeLabel: "PH_414BVE_CLS" }
            )}`}
            label="PH_414BVE_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "414BVE",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-83 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "414BVB",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVB_OLS", closeLabel: "PH_414BVB_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVB_OLS", closeLabel: "PH_414BVB_CLS" }
            )}`}
            label="PH_414BVB_OLS"
          />
        </div>
        <div className="d-flex ml-5">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVC_OLS", closeLabel: "PH_414BVC_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BVC_OLS", closeLabel: "PH_414BVC_CLS" }
            )}`}
            label="PH_414BVC_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "414BVC",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-84 d-flex">
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV1_OLS", closeLabel: "PH_414BV1_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV1_OLS", closeLabel: "PH_414BV1_CLS" }
            )}`}
            label="PH_414BV1_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "414BV1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-85 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "414BV3",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV3_OLS", closeLabel: "PH_414BV3_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV3_OLS", closeLabel: "PH_414BV3_CLS" }
            )}`}
            label="PH_414BV3_OLS"
          />
        </div>
        <div className="d-flex ml-5">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV4_OLS", closeLabel: "PH_414BV4_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV4_OLS", closeLabel: "PH_414BV4_CLS" }
            )}`}
            label="PH_414BV4_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "414BV4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-86 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "414BV7",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV7_OLS", closeLabel: "PH_414BV7_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV7_OLS", closeLabel: "PH_414BV7_CLS" }
            )}`}
            label="PH_414BV7_OLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2 mb-2",
              label: "414BV8",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV8_OLS", closeLabel: "PH_414BV8_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_414BV8_OLS", closeLabel: "PH_414BV8_CLS" }
            )}`}
            label="PH_414BV8_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-87">
        <BlackContainer
          data={{
            label: "PH_434SG4_TT",
            useClass: "greenTxt  mt-1 ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_434SG5_TT",
            useClass: "greenTxt  mt-3 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-88 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_BSS4_ALARM"
          )}`}
          text="BS4A"
          label="PH_434BE1_BSS4_ALARM"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_BSS4"
          )}`}
          text="BS4"
          label="PH_434BE1_BSS4"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_BSS3"
          )}`}
          text="BS3"
          label="PH_434BE1_BSS3"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_BSS3_ALARM"
          )}`}
          text="BS3A"
          label="PH_434BE1_BSS3_ALARM"
        />
      </div>

      <div className="position-absolute single-text-89 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "434BV7",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV7_OLS", closeLabel: "PH_434BV7_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV7_OLS", closeLabel: "PH_434BV7_CLS" }
            )}`}
            label="PH_434BV7_OLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2 mb-2",
              label: "434BV8",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV8_OLS", closeLabel: "PH_434BV8_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_434BV8_OLS", closeLabel: "PH_434BV8_CLS" }
            )}`}
            label="PH_434BV8_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-90">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_434BE1_RUN",
              healthyLabel: "PH_434BE1_PH",
            }
          )}`}
          label="PH_434BE1_RUN"
        />
      </div>
      <div className="position-absolute single-text-91">
        <BlackContainer
          data={{
            label: "PH_434BE1_BD1",
            useClass: "greenTxt  mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_434BE1_MT1_II",
            useClass: "greenTxt  mt-1 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-92 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG2A_CLS")}`}
          label="PH_434SG2A_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG2A_OLS")}`}
          label="PH_434SG2A_OLS"
        />
        <BlackContainer
          data={{
            label: "PH_434CG2A_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-93 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG1A_CLS")}`}
          label="PH_434SG1A_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG1A_OLS")}`}
          label="PH_434SG1A_OLS"
        />
        <BlackContainer
          data={{
            label: "PH_434CG1A_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-94 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PH_CL_CND_TEMP")}`}
          label="PH_CL_CND_TEMP"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PH_CL_CND_TEMP_HH")}`}
          label="PH_CL_CND_TEMP_HH"
        />
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV5_OLS", closeLabel: "PH_414BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV5_OLS", closeLabel: "PH_414BV5_CLS" }
          )}`}
          label="PH_414BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "414BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-96 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "414BV6",
          }}
        />

        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV6_OLS", closeLabel: "PH_414BV6_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV6_OLS", closeLabel: "PH_414BV6_CLS" }
          )}`}
          label="PH_414BV6_OLS"
        />
      </div>
      <div className="position-absolute single-text-97">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_434DQ1_ON",
              healthyLabel: "PH_434DQ1_PH",
            }
          )}`}
          label="PH_434DQ1_ON"
        />
      </div>
      <div className="position-absolute single-text-98">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_434DQ2_ON",
              healthyLabel: "PH_434DQ2_PH",
            }
          )}`}
          label="PH_434DQ2_ON"
        />
      </div>

      <div className="position-absolute single-text-99 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV5_OLS", closeLabel: "PH_434BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV5_OLS", closeLabel: "PH_434BV5_CLS" }
          )}`}
          label="PH_434BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "434BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-100 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "434BV6",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV6_OLS", closeLabel: "PH_434BV6_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV6_OLS", closeLabel: "PH_434BV6_CLS" }
          )}`}
          label="PH_434BV6_OLS"
        />
      </div>
      <div className="position-absolute single-text-101 d-flex flex-column align-items-end ">
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_434BE1_AD")}`}
            label="PH_434BE1_AD"
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useColorStatus("PH_434BE1_AD")}`}
            label="PH_434BE1_AD"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mr-1 mt-2  mb-2",
            label: "434BE1-MO3/MO4",
          }}
        />
      </div>
      <div className="position-absolute single-text-102">
        <div className="mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "434SG3",
            }}
          />

          <div className="dot-square-line  ml-4 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PH_434SG3_OLS", closeLabel: "PH_434SG3_CLS" }
              )}`}
              label="PH_434SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-103">
        <div className="mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "414SGC",
            }}
          />
          <div className="dot-square-line  ml-3 d-flex flex-column align-items-center">
            <div className={`square grey-color`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PH_414SGC_OLS", closeLabel: "PH_414SGC_CLS" }
              )}`}
              label="PH_414SGC_OLS"
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-104 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG1_SKIP_STAT"
                )}`}
                label="CG1_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG2_SKIP_STAT"
                )}`}
                label="CG2_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG3",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG3_SKIP_STAT"
                )}`}
                label="CG3_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG4",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG4_SKIP_STAT"
                )}`}
                label="CG4_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG5",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG5_SKIP_STAT"
                )}`}
                label="CG5_SKIP_STAT"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG6",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG6_SKIP_STAT"
                )}`}
                label="CG6_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG7",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG7_SKIP_STAT"
                )}`}
                label="CG7_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG8",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG8_SKIP_STAT"
                )}`}
                label="CG8_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SG9",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CG9_SKIP_STAT"
                )}`}
                label="CG9_SKIP_STAT"
              />
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SGA",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1 mt-1",
                  label: "SKIP",
                }}
              />
            </div>
            <div className="ml-1">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "CGA_SKIP_STAT"
                )}`}
                label="CGA_SKIP_STAT"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-105">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "PH_434BE1_BSS2_ALARM"
          )}`}
          label="PH_434BE1_BSS2_ALARM"
        />
      </div>
      <div className="position-absolute single-text-106 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info mr-1 mt-2",
            label: "FN6",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mr-1 mt-2",
              label: "FN8 FOR FN6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mr-1 mt-2",
              label: "FN8 FOR FN7",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info mr-1 mt-2",
            label: "FN7",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "single-text-108 position-absolute text-dark mt-2 ",
          label: "434AS3",
        }}
      />
      <div className="position-absolute single-text-109">
        <div className="d-flex mt-1">
          <div className="d-flex">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_414CGB_OLS",
                    closeLabel: "PH_414CGB_CLS",
                    healthyLabel: "PH_414CGB_PH",
                  }
                )}`}
                label="PH_414CGB_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>

          <div className="d-flex ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "PH_414SGB_OLS", closeLabel: "PH_414SGB_CLS" }
                )}`}
                label="PH_414SGB_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-110 d-flex">
        <MotorCircleDigitalTag
          className={`mt-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_LS2"
          )}`}
          text="LS2"
          label="PH_414BE1_LS2"
        />
        <MotorCircleDigitalTag
          className={` mt-2 ml-3 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_LS1"
          )}`}
          text="LS1"
          label="PH_414BE1_LS1"
        />
      </div>
      <div className="position-absolute single-text-111 d-flex">
        <BlackContainer
          data={{
            label: "PH_434BE1_BD2",
            useClass: "greenTxt  mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`mt-2 ml-2 text-dark digital-tag ${useColorStatus(
            "PH_434BE1_LS2"
          )}`}
          text="LS2"
          label="PH_434BE1_LS2"
        />
        <MotorCircleDigitalTag
          className={`mt-2 ml-3 text-dark digital-tag ${useColorStatus(
            "PH_434BE1_LS1"
          )}`}
          text="LS1"
          label="PH_434BE1_LS1"
        />
      </div>
      <div className="position-absolute single-text-112 d-flex">
        <MotorCircleDigitalTag
          className={`mt-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS1"
          )}`}
          text="BS1"
          label="PH_414BE1_BSS1"
        />
        <MotorCircleDigitalTag
          className={` mt-2 ml-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS1_ALARM"
          )}`}
          text="BS1 A"
          label="PH_414BE1_BSS1_ALARM"
        />
      </div>
      <div className="position-absolute single-text-113 d-flex">
        <MotorCircleDigitalTag
          className={`mt-2 text-dark digital-tag ${useColorStatus(
            "PH_434BE1_BSS2"
          )}`}
          text="BS2"
          label="PH_434BE1_BSS2"
        />
        <MotorCircleDigitalTag
          className={` mt-2 ml-4 text-dark digital-tag ${useColorStatus(
            "PH_434BE1_BSS1"
          )}`}
          text="BS1"
          label="PH_434BE1_BSS1"
        />
        <MotorCircleDigitalTag
          className={`square mt-2 ml-2 digital-tag ${useColorStatus(
            "PH_434BE1_BSS1_ALARM"
          )}`}
          label="PH_434BE1_BSS1_ALARM"
        />
      </div>
      <div className="position-absolute single-text-114 d-flex">
        <MotorCircleDigitalTag
          className={`mt-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS3"
          )}`}
          text="BS3"
          label="PH_414BE1_BSS3"
        />
        <MotorCircleDigitalTag
          className={` mt-2 ml-1 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS3_ALARM"
          )}`}
          text="BS3 A"
          label="PH_414BE1_BSS3_ALARM"
        />
      </div>
      <div className="position-absolute single-text-115">
        <MotorCircleDigitalTag
          className={`mt-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_TS1"
          )}`}
          text="TS1"
          label="PH_414BE1_TS1"
        />
        <MotorCircleDigitalTag
          className={`mt-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_ZS1"
          )}`}
          text="ZS1"
          label="PH_414BE1_ZS1"
        />
      </div>
      <div className="position-absolute single-text-116 ">
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_TS1"
          )}`}
          text="TS1"
          label="PH_434BE1_TS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_TS2"
          )}`}
          text="TS2"
          label="PH_434BE1_TS2"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_ZS1"
          )}`}
          text="ZS1"
          label="PH_434BE1_ZS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "PH_434BE1_ZS2"
          )}`}
          text="ZS2"
          label="PH_434BE1_ZS2"
        />
      </div>
      <div className="position-absolute single-text-117">
        <MotorCircleDigitalTag
          className={`mt-2 dot digital-tag ${useColorStatus("PH_434BI1_LS")}`}
          text="L"
          label="PH_434BI1_LS"
        />
      </div>
      <div className="position-absolute single-text-118 d-flex">
        <MotorCircleDigitalTag
          className={` mt-2  text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS2_ALARM"
          )}`}
          text="BS2 A"
          label="PH_414BE1_BSS2_ALARM"
        />
        <MotorCircleDigitalTag
          className={`mt-2 ml-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS2"
          )}`}
          text="BS2"
          label="PH_414BE1_BSS2"
        />
      </div>

      <div className="position-absolute single-text-119 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV2_OLS", closeLabel: "PH_414BV2_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV2_OLS", closeLabel: "PH_414BV2_CLS" }
          )}`}
          label="PH_414BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "414BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-121  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV2_OLS", closeLabel: "PH_434BV2_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV2_OLS", closeLabel: "PH_434BV2_CLS" }
          )}`}
          label="PH_434BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "434BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-122  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BVC_OLS", closeLabel: "PH_434BVC_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BVC_OLS", closeLabel: "PH_434BVC_CLS" }
          )}`}
          label="PH_434BVC_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "434BVC",
          }}
        />
      </div>
      <div className="position-absolute single-text-123  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV4_OLS", closeLabel: "PH_434BV4_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_434BV4_OLS", closeLabel: "PH_434BV4_CLS" }
          )}`}
          label="PH_434BV4_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "434BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-124">
        <MotorCircleDigitalTag
          className={` mt-2  text-dark digital-tag ${useColorStatus(
            "PH_414BE1_ZSS1"
          )}`}
          text="ZSS1"
          label="PH_414BE1_ZSS1"
        />
      </div>
      <div className="position-absolute single-text-125">
        <MotorCircleDigitalTag
          className={` mt-2  text-dark digital-tag ${useColorStatus(
            "PH_434BE1_ZSS1"
          )}`}
          text="ZSS"
          label="PH_434BE1_ZSS1"
        />
      </div>
      <div className="position-absolute single-text-126 d-flex">
        <MotorCircleDigitalTag
          className={` mt-2 ml-1 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS4_ALARM"
          )}`}
          text="BS4 A"
          label="PH_414BE1_BSS4_ALARM"
        />
        <MotorCircleDigitalTag
          className={`mt-2 ml-1 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_BSS4"
          )}`}
          text="BS4"
          label="PH_414BE1_BSS4"
        />
      </div>
      <div className="position-absolute single-text-127">
        <BlackContainer
          data={{
            label: "PH_414FN9_II",
            useClass: "greenTxt  mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_414FN9_SI",
            useClass: "greenTxt  mb-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-128 d-flex">
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus(
            "SEQUENCE_STARTED"
          )}`}
          label="SEQUENCE_STARTED"
          text="S"
        />
        <BlackContainer
          data={{
            label: "PH_414CGB_SP_HMI",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-129 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "BLENDING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SILO",
          }}
        />
      </div>
      <div className="position-absolute single-text-130 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BVA_OLS", closeLabel: "PH_414BVA_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BVA_OLS", closeLabel: "PH_414BVA_CLS" }
          )}`}
          label="PH_414BVA_OLS"
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV9_OLS", closeLabel: "PH_414BV9_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_414BV9_OLS", closeLabel: "PH_414BV9_CLS" }
          )}`}
          label="PH_414BV9_OLS"
        />
      </div>
      <div className="position-absolute single-text-131 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info mr-1 mt-2",
            label: "BL1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info mr-1 mt-2",
            label: "BL3 FOR BL1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  bg-info mr-1 mt-2",
            label: "BL2",
          }}
        />
      </div>

      <div className="position-absolute single-text-132">
        <BlackContainer
          data={{
            label: "PH_414BF2_PT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-133">
        <MotorCircleDigitalTag
          className={` mt-2 text-dark digital-tag ${useColorStatus(
            "PH_414BE1_ZSS2"
          )}`}
          text="ZSS2"
          label="PH_414BE1_ZSS2"
        />
      </div>
      <div className="position-absolute single-text-134">
        <MotorCircleDigitalTag
          className={`mt-2 dot digital-tag ${useColorStatus("PH_414BI1_LS")}`}
          text="L"
          label="PH_414BI1_LS"
        />
      </div>
      <div className="position-absolute single-text-135">
        <BlackContainer
          data={{
            label: "PH_414CGB_PID",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-136">
        <BlackContainer
          data={{
            label: "PH_414BF3_PT1",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-138 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_414BF1_RUN")}`}
          label="PH_414BF1_RUN"
        />
      </div>
      <div className="single-text-139 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_414BF2_RUN")}`}
          label="PH_414BF2_RUN"
        />
      </div>
      <div className="single-text-140 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_414BF3_RUN")}`}
          label="PH_414BF3_RUN"
        />
      </div>
      <div className="single-text-141 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434BF1_RUN")}`}
          label="PH_434BF1_RUN"
        />
      </div>

      <div className="yellowline-Hr  position-absolute line-1"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr upArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14"></div>

      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr upArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr upArrow position-absolute line-19"></div>
      <div className="yellowline-Vr upArrow position-absolute line-20"></div>
      <div className="yellowline-Vr upArrow position-absolute line-21"></div>
      <div className="yellowline-Vr upArrow position-absolute line-22"></div>
      <div className="yellowline-Vr upArrow position-absolute line-23"></div>
      <div className="yellowline-Vr upArrow position-absolute line-24"></div>

      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Vr  position-absolute line-44"></div>
      <div className="yellowline-Vr  position-absolute line-45"></div>
      <div className="yellowline-Hr  position-absolute line-46"></div>
      <div className="yellowline-Hr  position-absolute line-47"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-48"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-49"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-50"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-51"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-52"></div>
      <div className="yellowline-Hr   position-absolute line-53"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-54"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-56"></div>
      <div className="yellowline-Hr   position-absolute line-57"></div>
      <div className="yellowline-Hr   position-absolute line-58"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-59"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-60"></div>
      <div className="yellowline-Vr   position-absolute line-61"></div>
      <div className="yellowline-Vr   position-absolute line-62"></div>
      <div className="yellowline-Vr   downArrow position-absolute line-63"></div>
      <div className="yellowline-Vr  downArrow  position-absolute line-64"></div>
      <div className="yellowline-Vr  downArrow  position-absolute line-65"></div>
      <div className="yellowline-Hr  position-absolute line-66"></div>
      <div className="yellowline-Hr  position-absolute line-67"></div>
      <div className="yellowline-Vr  position-absolute line-68"></div>
      <div className="yellowline-Vr  position-absolute line-69"></div>
      <div className="yellowline-Vr  position-absolute line-70"></div>
      <div className="yellowline-Vr  position-absolute line-71"></div>
      <div className="yellowline-Hr  position-absolute line-72"></div>
      <div className="yellowline-Hr  position-absolute line-73"></div>
      <div className="yellowline-Hr  position-absolute line-74"></div>
      <div className="yellowline-Vr downArrow position-absolute line-75"></div>
      <div className="yellowline-Vr downArrow position-absolute line-76"></div>
      <div className="yellowline-Vr downArrow position-absolute line-77"></div>
      <div className="yellowline-Vr downArrow position-absolute line-78"></div>
      <div className="yellowline-Vr downArrow position-absolute line-79"></div>
      <div className="yellowline-Vr downArrow position-absolute line-80"></div>
      <div className="yellowline-Vr downArrow position-absolute line-81"></div>
      <div className="yellowline-Hr  position-absolute line-82"></div>
      <div className="yellowline-Hr  position-absolute line-83"></div>
      <div className="yellowline-Hr  position-absolute line-84"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-85"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-86"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-87"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-88"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-89"></div>
    </div>
  );
};
