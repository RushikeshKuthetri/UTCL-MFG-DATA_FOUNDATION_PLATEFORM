import {
  useBVTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

export const BlendingSiloKotputliPage = () => {
  return (
    // code
    <div className="BlendingSiloKotputliPage w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FROM 391BE1  BL4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-5",
              label: "392AS5",
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

      <div className="position-absolute single-text-7">
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA2",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>

          <div className="d-flex ml-5">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA3",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA4",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-5">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA5",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA6",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-5">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA7",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA8",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-5">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "392GA9",
              }}
            />
          </div>
        </div>
      </div>
      <div className="boxContainer p-3 position-absolute single-text-8"></div>
      <div className="boxContainer p-1 position-absolute single-text-9 d-flex pt-4 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNC_RUN", healthyLabel: "RM_392FNC_PH" })}`}
            label="RM_392FNC_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNC",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FND_RUN", healthyLabel: "RM_392FND_PH" })}`}
            label="RM_392FND_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FND",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNE_RUN", healthyLabel: "RM_392FNE_PH" })}`}
            label="RM_392FNE_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "392FNE",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-3 position-absolute single-text-10 d-flex">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
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
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNK_RUN", healthyLabel: "RM_392FNK_PH" })}`}
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
      <div className="boxContainer p-1 position-absolute single-text-11 d-flex pt-5 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
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
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNG_RUN", healthyLabel: "RM_392FNG_PH" })}`}
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
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "RM_392FNH_RUN", healthyLabel: "RM_392FNH_PH" })}`}
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
      <div className="boxContainer p-1 position-absolute single-text-12 d-flex pt-5 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 mr-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412BL1_RUN", healthyLabel: "PH_412BL1_PH" })}`}
            label="PH_412BL1_RUN"
          />
          <BlackContainer
            data={{
              label: "PH_412BL1_PT",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412BL3_RUN", healthyLabel: "PH_412BL3_PH" })}`}
            label="PH_412BL3_RUN"
          />
          <BlackContainer
            data={{
              label: "PH_412BL3_PT",
              useClass: "greenTxt  mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412BL2_RUN", healthyLabel: "PH_412BL2_PH" })}`}
            label="PH_412BL2_RUN"
          />
          <BlackContainer
            data={{
              label: "PH_412BL2_PT",
              useClass: "greenTxt  mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
          <div className="trapezoid"></div>
          <div className="position-absolute single-text-14">
            <div className="d-flex justify-content-end  mt-2">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 position-relative single-text-15"></div>
            <div className="d-flex justify-content-end  mt-3">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 position-relative single-text-16"></div>
            <div className="d-flex justify-content-end  mt-3">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 position-relative single-text-17"></div>
            <div className="d-flex justify-content-end  mt-3">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 position-relative single-text-18"></div>
            <div className="d-flex justify-content-end  mt-4">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 position-relative single-text-19"></div>
          </div>
          <div className="position-absolute single-text-20">
            <div className="d-flex justify-content-start  mt-4">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-15"></div>
            <div className="d-flex justify-content-start  mt-3">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-16"></div>
            <div className="d-flex justify-content-start  mt-3">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-17"></div>
            <div className="d-flex justify-content-start  mt-3">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-18"></div>
            <div className="d-flex justify-content-start  mt-3">
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
              ></span>
              <span
                className={`square grey-color mr-2 ${"RM_332RF1_ZSS"}`}
              ></span>
            </div>
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-19"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-21">
        <div className="d-flex">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG5_OLS", closeLabel: "PH_412SG5_CLS" })}`}
                label="PH_412SG5_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG5_OLS", closeLabel: "PH_412CG5_CLS" })}`}
                label="PH_412CG5_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG4_OLS", closeLabel: "PH_412SG4_CLS" })}`}
                label="PH_412SG4_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG4_OLS", closeLabel: "PH_412CG4_CLS" })}`}
                label="PH_412CG4_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG3_OLS", closeLabel: "PH_412SG3_CLS" })}`}
                label="PH_412SG3_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG3_OLS", closeLabel: "PH_412CG3_CLS" })}`}
                label="PH_412CG3_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG2_OLS", closeLabel: "PH_412SG2_CLS" })}`}
                label="PH_412SG2_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG2_OLS", closeLabel: "PH_412CG2_CLS" })}`}
                label="PH_412CG2_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG1_OLS", closeLabel: "PH_412SG1_CLS" })}`}
                label="PH_412SG1_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG1_OLS", closeLabel: "PH_412CG1_CLS" })}`}
                label="PH_412CG1_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CGA_OLS", closeLabel: "PH_412CGA_CLS" })}`}
                label="PH_412CGA_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SGA_OLS", closeLabel: "PH_412SGA_CLS" })}`}
                label="PH_412SGA_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG9_OLS", closeLabel: "PH_412CG9_CLS" })}`}
                label="PH_412CG9_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG9_OLS", closeLabel: "PH_412SG9_CLS" })}`}
                label="PH_412SG9_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG8_OLS", closeLabel: "PH_412CG8_CLS" })}`}
                label="PH_412CG8_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG8_OLS", closeLabel: "PH_412SG8_CLS" })}`}
                label="PH_412SG8_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG7_OLS", closeLabel: "PH_412CG7_CLS" })}`}
                label="PH_412CG7_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG7_OLS", closeLabel: "PH_412SG7_CLS" })}`}
                label="PH_412SG7_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CG6_OLS", closeLabel: "PH_412CG6_CLS" })}`}
                label="PH_412CG6_OLS"
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
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SG6_OLS", closeLabel: "PH_412SG6_CLS" })}`}
                label="PH_412SG6_OLS"
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
            label: "PH_412CG5_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_412CG4_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_412CG3_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_412CG2_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_412CG1_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-24">
        <BlackContainer
          data={{
            label: "PH_412CGA_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_412CG9_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_412CG8_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_412CG7_ZT",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_412CG6_ZT",
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
              label: "PH_412BI1_WI",
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
            label: "412SGB",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-27 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-3",
            label: "412SGB",
          }}
        />
      </div>
      <div className="boxContainer p-1 position-absolute single-text-28 d-flex pt-4 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FN2_RUN", healthyLabel: "PH_412FN2_PH" })}`}
            label="PH_412FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412FN2",
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
            className={`line-circle green-color mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FN4_RUN", healthyLabel: "PH_412FN4_PH" })}`}
            label="PH_412FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412FN4",
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
            className={`line-circle green-color mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FN3_RUN", healthyLabel: "PH_412FN3_PH" })}`}
            label="PH_412FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412FN3",
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
            className={`line-circle mt-4 mr-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412BL4_RUN", healthyLabel: "PH_412BL4_PH" })}`}
            label="PH_412BL4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412BL4",
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
              label: "PH_412BL4_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412BL5_RUN", healthyLabel: "PH_412BL5_PH" })}`}
            label="PH_412BL5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412BL5",
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
              label: "PH_412BL5_PT",
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
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FN5_RUN", healthyLabel: "PH_412FN5_PH" })}`}
            label="PH_412FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412FN5",
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
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FN7_RUN", healthyLabel: "PH_412FN7_PH" })}`}
            label="PH_412FN7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412FN7",
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
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FN6_RUN", healthyLabel: "PH_412FN6_PH" })}`}
            label="PH_412FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "412FN6",
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
        <div>
          <BlackContainer
            data={{
              label: "PH_412CGB_PID",
              useClass: "greenTxt  mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_412CGB_PID",
              useClass: "greenTxt  mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_412CGB_PID",
              useClass: "greenTxt  mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-4 mb-3",
              label: "412CGB",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "412A SB",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_412CGB_ZT",
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
          {/* <BlackContainer
        data={{
          label: "CM_563FN5_SI",
          useClass: "greenTxt  mt-1  ml-auto",
          unit: "",
          unitColor: "unitColor",
        }}
      /> */}
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 mr-3",
              label: "ON TIME",
            }}
          />
          {/* <BlackContainer
        data={{
          label: "CM_563FN5_SI",
          useClass: "greenTxt  mt-1 ml-auto",
          unit: "Sec",
          unitColor: "unitColor",
        }}
      /> */}
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 mr-3",
              label: "OVERLAP TIME",
            }}
          />
          {/* <BlackContainer
        data={{
          label: "CM_563FN5_SI",
          useClass: "greenTxt  mt-1",
          unit: "Sec",
          unitColor: "unitColor",
        }}
      /> */}
        </div>
      </div>

      <div className="position-absolute single-text-33 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "412BF2",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_412BF2_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_412RA2")}`} label="PH_412RA2_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "412RA2",
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
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                      runLabel: "PH_412FN9_RUN",
                      healthyLabel: "PH_412FN9_PH",
                    })}`}
                    label="PH_412FN9_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "412FN9",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PH_412BF2_PT",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
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
                  label: "412BF1",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_412BF1_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_412RA1")}`} label="PH_412RA1_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "412RA1",
                    }}
                  />
                </div>
              </div>

              <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-4 ",
                  label: "TO 412Bl1",
                }}
              />
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                      runLabel: "PH_412FN8_RUN",
                      healthyLabel: "PH_412FN8_PH",
                    })}`}
                    label="PH_412FN8_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "412FN8",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PH_412BF1_PT",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "392BF5",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("RM_392RA5")}`} label="RM_392RA5_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "392RA5",
                    }}
                  />
                </div>
              </div>

              <div className="yellowline-Vr  downArrow position-absolute line-39 ml-3 mb-2"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-4 ",
                  label: "392Bl1",
                }}
              />
            </div>
            <div className="ml-5 mt-4 position-absolute">
              <div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                      runLabel: "RM_392FNL_RUN",
                      healthyLabel: "RM_392FNL_PH",
                    })}`}
                    label="RM_392FNL_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "392FNL",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
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
            label: "PH_412BE1_II",
            useClass: "greenTxt  mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <div className=" mr-2">
            <MotorCircleDigitalTag className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412BE1_RUN", healthyLabel: "PH_412BE1_PH" })}`} label="PH_412BE1_RUN" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "412BE1_M01",
            }}
          />
        </div>
        <div className="d-flex">
          <div className=" mr-2">
            <MotorCircleDigitalTag
              className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "PH_412BE1_M02_RUN",
                healthyLabel: "PH_412BE1_M02_PH",
              })}`}
              label="PH_412BE1_M02_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "412BE1_M02",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white mt-2 ",
            label: "412BE1",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-38 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-3 mr-3",
            label: "412ASD",
          }}
        />
      </div>
      <div className="position-absolute  single-text-39">
        <div className="containerImage text-center ml-2">
          <BlackContainer
            data={{
              label: "PH_432BI1_WI",
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
      <div className="dashedHr-Pipe position-absolute single-text-40 mt-2 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "432AS2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-3 mr-3",
            label: "432AS2A",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-41 mt-2 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "432AS1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-3  mr-3",
            label: "432AS1A",
          }}
        />
      </div>

      <div className="position-absolute  single-text-43">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432CG2",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432SG2",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GA2",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-4">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432CG1",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432SG1",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GA1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-44">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GA2A",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432SG2A",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432CG2A",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-4">
          <div>
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GA1A",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432SG1A",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <div className="dot grey-color"></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432CG1A",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-45 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-2"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FNA_RUN", healthyLabel: "PH_412FNA_PH" })}`}
            label="PH_412FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "412FNA",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_412FNB_RUN", healthyLabel: "PH_412FNB_PH" })}`}
            label="PH_412FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "412FNB",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-1 position-absolute single-text-46 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432BL1_RUN", healthyLabel: "PH_432BL1_PH" })}`}
            label="PH_432BL1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "432BL1",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432BL2_RUN", healthyLabel: "PH_432BL2_PH" })}`}
            label="PH_432BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "432BL2",
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
                  label: "412BF3",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_412BF3_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_412RA3")}`} label="PH_412RA3_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "412RA3",
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
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                      runLabel: "PH_412FNC_RUN",
                      healthyLabel: "PH_412FNC_PH",
                    })}`}
                    label="PH_412FNC_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "412FNC",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PH_412BF3_PT",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
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
      <div className="dashedHr-Pipe position-absolute single-text-52 mt-2">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-3 mr-2",
              label: "432SM1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-3 mr-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432SM1_RUN", healthyLabel: "PH_432SM1_PH" })}`}
            label="PH_432SM1_RUN"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-53 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-2"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN1_RUN", healthyLabel: "PH_432FN1_PH" })}`}
            label="PH_432FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "432FN1",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr upArrow position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN2_RUN", healthyLabel: "PH_432FN2_PH" })}`}
            label="PH_432FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "432FN2",
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
              label: "432DQ1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "432DQ1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_432DQ1_FR",
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
              label: "PH_432DQ2_FT",
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
              label: "432DQ2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info  mt-1",
              label: "432DQ2",
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
            className={`line-circle mt-4 mr-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN6_RUN", healthyLabel: "PH_432FN6_PH" })}`}
            label="PH_432FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "432FN6",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN8_RUN", healthyLabel: "PH_432FN8_PH" })}`}
            label="PH_432FN8_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "432FN8",
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
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN7_RUN", healthyLabel: "PH_432FN7_PH" })}`}
            label="PH_432FN7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "432FN7",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-58 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-3 mr-3",
            label: "432ASA",
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
                  label: "432BF1",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_432BF1_DPT",
                  useClass: "greenTxt  mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_432RA6")}`} label="PH_432RA6_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "432RA6",
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
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                      runLabel: "PH_432FN3_RUN",
                      healthyLabel: "PH_432FN3_PH",
                    })}`}
                    label="PH_432FN3_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "432FN3",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PH_432BF1_PT1",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "single-text-107 position-absolute text-dark mt-2 ",
                  label: "432BF1PT1",
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
              label: "PH_432DG1_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
        data={{
          label: "PH_432DG2_ZT",
          useClass: "greenTxt  mt-2 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "PH_432DG2_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
        data={{
          label: "CM_563FN5_SI",
          useClass: "greenTxt  mt-2 ml-2",
          unit: "%",
          unitColor: "unitColor",
        }}
      /> */}
        </div>
      </div>
      <div className="position-absolute single-text-61">
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432SG4",
              }}
            />
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432SG4_OLS", closeLabel: "PH_432SG4_CLS" })}`}
                label="PH_432SG4_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>

          <div className="d-flex ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432DG1_OLS", closeLabel: "PH_432DG1_CLS" })}`}
                label="PH_432DG1_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432DG1",
              }}
            />
          </div>
          <div className="d-flex ml-5">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432DG2_OLS", closeLabel: "PH_432DG2_CLS" })}`}
                label="PH_432DG2_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "432DG2",
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
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN4_RUN", healthyLabel: "PH_432FN4_PH" })}`}
            label="PH_432FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "432FN4",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN5_RUN", healthyLabel: "PH_432FN5_PH" })}`}
            label="PH_432FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "432FN5",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-1 position-absolute single-text-65 d-flex pt-1 ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FNB_RUN", healthyLabel: "PH_432FNB_PH" })}`}
            label="PH_432FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "432FNB",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FNC_RUN", healthyLabel: "PH_432FNC_PH" })}`}
            label="PH_432FNC_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "432FNC",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-66 d-flex ">
        <div>
          <div className="yellowline-Vr  position-absolute line-39 ml-2"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FN9_RUN", healthyLabel: "PH_432FN9_PH" })}`}
            label="PH_432FN9_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mt-1",
              label: "432FN9",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="yellowline-Vr  position-absolute line-39 ml-4"></div>
          <MotorCircleDigitalTag
            className={`line-circle mt-4 ml-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432FNA_RUN", healthyLabel: "PH_432FNA_PH" })}`}
            label="PH_432FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1",
              label: "432FNA",
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
            <span
              className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
            ></span>
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
            <span
              className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
            ></span>
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
            <span
              className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
            ></span>
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
            <span
              className={`square grey-color mr-2 ${"RM_332RF1_PTC"}`}
            ></span>
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
            <MotorCircleDigitalTag className={`mr-2 square digital-tag ${useColorStatus("PH_ST1_DRAFT_HLTHY")}`} label="PH_ST1_DRAFT_HLTHY" />
            <MotorCircleDigitalTag className={`mr-2 square digital-tag ${useColorStatus("PH_ST2_DRAFT_HLTHY")}`} label="PH_ST2_DRAFT_HLTHY" />
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
            <MotorCircleDigitalTag className={`mr-2 square digital-tag ${useColorStatus("PH_ST1_LS_HLTHY")}`} label="PH_ST1_LS_HLTHY" />
            <MotorCircleDigitalTag className={`mr-2 square digital-tag ${useColorStatus("PH_ST2_LS_HLTHY")}`} label="PH_ST2_LS_HLTHY" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-68">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_432RA2")}`} label="PH_432RA2_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "432RA2",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_432RA3")}`} label="PH_432RA3_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "432RA3",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432SG7_OLS", closeLabel: "PH_432SG7_CLS" })}`}
              label="PH_432SG7_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "432SG7",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "432FV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_432RA4")}`} label="PH_432RA4_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "432RA4",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("PH_432RA5")}`} label="PH_432RA5_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "432RA5",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432SG8_OLS", closeLabel: "PH_432SG8_CLS" })}`}
              label="PH_432SG8_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "432SG8",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "432FV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-70">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "432RA4",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot motor-dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_432RA1_RUN", healthyLabel: "PH_432RA1_PH" })}`}
            text=""
            label="PH_432RA1_RUN"
          />
          <div class="yellowline-Vr downArrow arrow ml-auto"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "432RA1",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432SG6_OLS", closeLabel: "PH_432SG6_CLS" })}`}
              label="PH_432SG6_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "432SG6",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "432FV1",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-71 mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-3 ml-2",
            label: "432AS5",
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
            label: "442PH1",
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
            label: "392SB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-76">
        <BlackContainer
          data={{
            label: "PH_432SG4_TT",
            useClass: "greenTxt  mt-1 ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-1 d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432SG5_OLS", closeLabel: "PH_432SG5_CLS" })}`}
              label="PH_432SG5_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "432SG5",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_432SG5_TT",
            useClass: "greenTxt  mt-1 ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-77">
        <BlackContainer
          data={{
            label: "PH_432DG1_PT",
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
              label: "432BV9",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV9_OLS", closeLabel: "PH_432BV9_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV9_OLS", closeLabel: "PH_432BV9_CLS" })}`}
            label="PH_432BV9_OLS"
          />
        </div>
        <div className="d-flex ml-5">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BVA_OLS", closeLabel: "PH_432BVA_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BVA_OLS", closeLabel: "PH_432BVA_CLS" })}`}
            label="PH_432BVA_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "432BVA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-79 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "432BVB",
            }}
          />

          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BVB_OLS", closeLabel: "PH_432BVB_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BVB_OLS", closeLabel: "PH_432BVB_CLS" })}`}
            label="PH_432BVB_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-80 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "432BV3",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV3_OLS", closeLabel: "PH_432BV3_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV3_OLS", closeLabel: "PH_432BV3_CLS" })}`}
            label="PH_432BV3_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-81 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "432BV1",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV1_OLS", closeLabel: "PH_432BV1_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV1_OLS", closeLabel: "PH_432BV1_CLS" })}`}
            label="PH_432BV1_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-82 d-flex">
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVD_OLS", closeLabel: "PH_412BVD_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVD_OLS", closeLabel: "PH_412BVD_CLS" })}`}
            label="PH_412BVD_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "412BVD",
            }}
          />
        </div>
        <div className="d-flex ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVE_OLS", closeLabel: "PH_412BVE_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVE_OLS", closeLabel: "PH_412BVE_CLS" })}`}
            label="PH_412BVE_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "412BVE",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-83 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "412BVB",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVB_OLS", closeLabel: "PH_412BVB_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVB_OLS", closeLabel: "PH_412BVB_CLS" })}`}
            label="PH_412BVB_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-84 d-flex">
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV1_OLS", closeLabel: "PH_412BV1_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV1_OLS", closeLabel: "PH_412BV1_CLS" })}`}
            label="PH_412BV1_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "412BV1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-85 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "412BV3",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV3_OLS", closeLabel: "PH_412BV3_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV3_OLS", closeLabel: "PH_412BV3_CLS" })}`}
            label="PH_412BV3_OLS"
          />
        </div>
        <div className="d-flex ml-5">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV4_OLS", closeLabel: "PH_412BV4_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV4_OLS", closeLabel: "PH_412BV4_CLS" })}`}
            label="PH_412BV4_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "412BV4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-86 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "392BV3",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV3_OLS", closeLabel: "RM_392BV3_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV3_OLS", closeLabel: "RM_392BV3_CLS" })}`}
            label="RM_392BV3_OLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2 mb-2",
              label: "392BV4",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV4_OLS", closeLabel: "RM_392BV4_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV4_OLS", closeLabel: "RM_392BV4_CLS" })}`}
            label="RM_392BV4_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-87 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "392BV9",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV9_OLS", closeLabel: "RM_392BV9_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV9_OLS", closeLabel: "RM_392BV9_CLS" })}`}
            label="RM_392BV9_OLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2 mb-2",
              label: "392BVA",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BVA_OLS", closeLabel: "RM_392BVA_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BVA_OLS", closeLabel: "RM_392BVA_CLS" })}`}
            label="RM_392BVA_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-88 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "412BV7",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV7_OLS", closeLabel: "PH_412BV7_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV7_OLS", closeLabel: "PH_412BV7_CLS" })}`}
            label="PH_412BV7_OLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2 mb-2",
              label: "412BV8",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV8_OLS", closeLabel: "PH_412BV8_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV8_OLS", closeLabel: "PH_412BV8_CLS" })}`}
            label="PH_412BV8_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-89 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "432BV7",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV7_OLS", closeLabel: "PH_432BV7_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV7_OLS", closeLabel: "PH_432BV7_CLS" })}`}
            label="PH_432BV7_OLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2 mb-2",
              label: "432BV8",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV8_OLS", closeLabel: "PH_432BV8_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV8_OLS", closeLabel: "PH_432BV8_CLS" })}`}
            label="PH_432BV8_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-90 ">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "392BV5",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-3"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV5_OLS", closeLabel: "RM_392BV5_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV5_OLS", closeLabel: "RM_392BV5_CLS" })}`}
            label="RM_392BV5_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-91 ">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "BVA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-92 ">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2  mb-2",
              label: "BV9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-93 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "392BV8",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV8_OLS", closeLabel: "RM_392BV8_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV8_OLS", closeLabel: "RM_392BV8_CLS" })}`}
          label="RM_392BV8_OLS"
        />
      </div>
      <div className="position-absolute single-text-94 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV7_OLS", closeLabel: "RM_392BV7_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV7_OLS", closeLabel: "RM_392BV7_CLS" })}`}
          label="RM_392BV7_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "392BV7",
          }}
        />
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV1_OLS", closeLabel: "RM_392BV1_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV1_OLS", closeLabel: "RM_392BV1_CLS" })}`}
          label="RM_392BV1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "392BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-96 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "392BV2",
          }}
        />

        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV2_OLS", closeLabel: "RM_392BV2_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV2_OLS", closeLabel: "RM_392BV2_CLS" })}`}
          label="RM_392BV2_OLS"
        />
      </div>
      <div className="position-absolute single-text-97 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "412BV6",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV6_OLS", closeLabel: "PH_412BV6_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV6_OLS", closeLabel: "PH_412BV6_CLS" })}`}
          label="PH_412BV6_OLS"
        />
      </div>
      <div className="position-absolute single-text-98 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV5_OLS", closeLabel: "PH_412BV5_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV5_OLS", closeLabel: "PH_412BV5_CLS" })}`}
          label="PH_412BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "412BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-99 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV5_OLS", closeLabel: "PH_432BV5_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV5_OLS", closeLabel: "PH_432BV5_CLS" })}`}
          label="PH_432BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "432BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-100 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2  mb-2",
            label: "432BV6",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV6_OLS", closeLabel: "PH_432BV6_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV6_OLS", closeLabel: "PH_432BV6_CLS" })}`}
          label="PH_432BV6_OLS"
        />
      </div>
      <div className="position-absolute single-text-101 ">
        <BlackContainer
          data={{
            label: "PH_432BE1_MT1_II",
            useClass: "greenTxt  mt-2 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  bg-white mr-1 mt-2  mb-2",
            label: "432BE1",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mr-1 mt-2  mb-2",
              label: "432BE1-MO1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "PH_432BE1_RUN",
              healthyLabel: "PH_432BE1_PH",
            })}`}
            label="PH_432BE1_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "PH_432BE1_RUN",
              healthyLabel: "PH_432BE1_PH",
            })}`}
            label="PH_432BE1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark   mr-1 mt-2  mb-2",
              label: "432BE1-MO2",
            }}
          />
        </div>

        <div className="d-flex ml-auto">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "PH_432BE1_AD_RUN",
              healthyLabel: "PH_432BE1_AD_PH",
            })}`}
            label="PH_432BE1_AD_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "PH_432BE1_AD_RUN",
              healthyLabel: "PH_432BE1_AD_PH",
            })}`}
            label="PH_432BE1_AD_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mr-1 mt-2  mb-2",
            label: "432BE1-MO3/MO4",
          }}
        />
      </div>
      <div className="position-absolute single-text-102">
        <div className="mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "432SG3",
            }}
          />

          <div className="dot-square-line  ml-4 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_432SG3_OLS", closeLabel: "PH_432SG3_CLS" })}`}
              label="PH_432SG3_OLS"
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
              label: "432SGC",
            }}
          />
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div className={`square grey-color`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SGC_OLS", closeLabel: "PH_412SGC_CLS" })}`}
              label="PH_412SGC_OLS"
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-104">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1",
                label: "SKIP5",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1",
                label: "STATUS",
              }}
            />
          </div>
          <div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1 ",
                label: "SKIP4",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1 ",
                label: "STATUS",
              }}
            />
          </div>
          <div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1 ",
                label: "SKIP3",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1 ",
                label: "STATUS",
              }}
            />
          </div>
          <div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1",
                label: "SKIP2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1",
                label: "STATUS",
              }}
            />
          </div>
          <div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1 ",
                label: "SKIP1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1 mt-1 ",
                label: "STATUS",
              }}
            />
          </div>
          <div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1   mb-2",
            label: "EMERGENCY SEQ STOP",
          }}
        />
      </div>
      <div className="position-absolute single-text-105 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info mr-1 mt-2",
            label: "BL1",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mr-1 mt-2",
              label: "BL3 FOR BL1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info mr-1 mt-2",
              label: "BL3 FOR BL2",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info mr-1 mt-2",
            label: "BL2",
          }}
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
          label: "432AS3",
        }}
      />
      <div className="position-absolute single-text-109">
        <div className="d-flex mt-1">
          <div className="d-flex">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412CGB_OLS", closeLabel: "PH_412CGB_CLS" })}`}
                label="PH_412CGB_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>

          <div className="d-flex ml-2">
            <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PH_412SGB_OLS", closeLabel: "PH_412SGB_CLS" })}`}
                label="PH_412SGB_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-110 d-flex">
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_412BE1_LS2")}`} text="LS2" label="PH_412BE1_LS2" />
        <MotorCircleDigitalTag className={` mt-2 ml-3 text-dark digital-tag ${useColorStatus("PH_412BE1_LS1")}`} text="LS1" label="PH_412BE1_LS1" />
      </div>
      <div className="position-absolute single-text-111 d-flex">
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_LS2")}`} text="LS2" label="PH_432BE1_LS2" />
        <MotorCircleDigitalTag className={`mt-2 ml-3 text-dark digital-tag ${useColorStatus("PH_432BE1_LS1")}`} text="LS1" label="PH_432BE1_LS1" />
      </div>
      <div className="position-absolute single-text-112 d-flex">
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_412BE1_BS2")}`} text="BS2" label="PH_412BE1_BS2" />
        <MotorCircleDigitalTag className={` mt-2 ml-4 text-dark digital-tag ${useColorStatus("PH_412BE1_BS1")}`} text="BS1" label="PH_412BE1_BS1" />
      </div>
      <div className="position-absolute single-text-113 d-flex">
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_BS2")}`} text="BS2" label="PH_432BE1_BS2" />
        <MotorCircleDigitalTag className={` mt-2 ml-4 text-dark digital-tag ${useColorStatus("PH_432BE1_BS1")}`} text="BS1" label="PH_432BE1_BS1" />
      </div>
      <div className="position-absolute single-text-114 d-flex">
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_412BE1_BS4")}`} text="BS4" label="PH_412BE1_BS4" />
        <MotorCircleDigitalTag className={` mt-2 ml-4 text-dark digital-tag ${useColorStatus("PH_412BE1_BS3")}`} text="BS3" label="PH_412BE1_BS3" />
      </div>
      <div className="position-absolute single-text-115">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-danger",
            label: "BMS",
          }}
        />
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_412BE1_TS1")}`} text="TS1" label="PH_412BE1_TS1" />
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_412BE1_TS2")}`} text="TS2" label="PH_412BE1_TS2" />
        <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_412BE1_ZS1")}`} text="ZS1" label="PH_412BE1_ZS1" />
      </div>
      <div className="position-absolute single-text-116 d-flex">
        <div className="mr-3">
          <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_BS4")}`} text="BS4" label="PH_432BE1_BS4" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 bg-danger",
              label: "BMS",
            }}
          />
        </div>
        <div className="ml-2">
          <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_BS3")}`} text="BS3" label="PH_432BE1_BS3" />
          <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_TS1")}`} text="TS1" label="PH_432BE1_TS1" />
          <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_TS2")}`} text="TS2" label="PH_432BE1_TS2" />
          <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_ZS1")}`} text="ZS1" label="PH_432BE1_ZS1" />
          <MotorCircleDigitalTag className={`mt-2 text-dark digital-tag ${useColorStatus("PH_432BE1_ZS2")}`} text="ZS2" label="PH_432BE1_ZS2" />
        </div>
      </div>
      <div className="position-absolute single-text-117">
        <MotorCircleDigitalTag className={`mt-2 dot digital-tag ${useColorStatus("PH_432BI1_LS")}`} text="L" label="PH_432BI1_LS" />
      </div>
      <div className="position-absolute single-text-118 ">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "392BV6",
            }}
          />
          <MimicCaret
            parentClass="tringle-item mt-1"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV6_OLS", closeLabel: "RM_392BV6_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "RM_392BV6_OLS", closeLabel: "RM_392BV6_CLS" })}`}
            label="RM_392BV6_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-119  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV2_OLS", closeLabel: "PH_412BV2_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BV2_OLS", closeLabel: "PH_412BV2_CLS" })}`}
          label="PH_412BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "412BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-120  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVC_OLS", closeLabel: "PH_412BVC_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_412BVC_OLS", closeLabel: "PH_412BVC_CLS" })}`}
          label="PH_412BVC_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "412BVC",
          }}
        />
      </div>
      <div className="position-absolute single-text-121  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV2_OLS", closeLabel: "PH_432BV2_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV2_OLS", closeLabel: "PH_432BV2_CLS" })}`}
          label="PH_432BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "432BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-122  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BVC_OLS", closeLabel: "PH_432BVC_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BVC_OLS", closeLabel: "PH_432BVC_CLS" })}`}
          label="PH_432BVC_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "432BVC",
          }}
        />
      </div>
      <div className="position-absolute single-text-123  d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV4_OLS", closeLabel: "PH_432BV4_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_432BV4_OLS", closeLabel: "PH_432BV4_CLS" })}`}
          label="PH_432BV4_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "432BV4",
          }}
        />
      </div>
      {/* add */}
      <div className="position-absolute single-text-124 d-flex flex-column">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA5",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA4",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA3",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA2",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-125 d-flex flex-column">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GAA",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA9",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA8",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA7",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA6",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "PH_432BE1_BD1",
          useClass: "greenTxt mt-2 position-absolute single-text-126",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />

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
      <div className="yellowline-Vr  position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Hr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Vr  position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Vr  position-absolute line-24"></div>
      <div className="yellowline-Hr  position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Hr  position-absolute line-28"></div>
      <div className="yellowline-Hr  position-absolute line-29"></div>
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
