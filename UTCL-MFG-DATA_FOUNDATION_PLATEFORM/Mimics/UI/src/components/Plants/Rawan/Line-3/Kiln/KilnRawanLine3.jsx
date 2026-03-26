import {
  useBVTagsColorStatusForNewPlantScreens,
  useCaretColorStatus,
  useColorStatus,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

export const KilnRawanL3 = () => {
  return (
    <div className="KilnAuxilaieskotputli Kilnkukurdih KilnAndhra KilnRawanL3 w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-56"></div>
      <div className="yellowline-Vr downArrow position-absolute line-57"></div>
      <div className="yellowline-Vr downArrow position-absolute line-58"></div>
      <div className="yellowline-Vr upArrow position-absolute line-59"></div>
      <div className="yellowline-Vr upArrow position-absolute line-60"></div>
      <div className="yellowline-Vr upArrow position-absolute line-61"></div>
      <div className="yellowline-Vr position-absolute line-62"></div>
      <div className="yellowline-Vr position-absolute line-63"></div>
      <div className="yellowline-Vr position-absolute line-64"></div>
      <div className="yellowline-Vr position-absolute line-65"></div>
      <div className="yellowline-Vr position-absolute line-66"></div>
      <div className="yellowline-Vr position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Vr position-absolute line-69"></div>
      <div className="yellowline-Vr position-absolute line-71"></div>
      <div className="yellowline-Vr position-absolute line-72"></div>
      <div className="yellowline-Vr position-absolute line-73"></div>
      <div className="yellowline-Vr position-absolute line-74"></div>
      <div className="yellowline-Vr position-absolute line-75"></div>
      <div className="yellowline-Vr position-absolute line-76"></div>
      <div className="yellowline-Vr position-absolute line-77"></div>
      <div className="yellowline-Vr position-absolute line-78"></div>
      <div className="yellowline-Vr position-absolute line-79"></div>
      <div className="yellowline-Hr position-absolute line-80"></div>
      <div className="yellowline-Hr position-absolute line-81"></div>
      <div className="yellowline-Hr position-absolute line-82"></div>
      <div className="yellowline-Hr position-absolute line-83"></div>
      <div className="yellowline-Hr position-absolute line-84"></div>
      <div className="yellowline-Hr position-absolute line-85"></div>
      <div className="yellowline-Hr position-absolute line-86"></div>
      <div className="yellowline-Hr position-absolute line-87"></div>
      <div className="yellowline-Hr position-absolute line-88"></div>
      <div className="yellowline-Hr pl-3 d-flex align-items-center position-absolute line-91">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr pl-3 d-flex align-items-center position-absolute line-92">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-93"></div>
      <div className="yellowline-Hr position-absolute line-94"></div>
      <div className="yellowline-Hr position-absolute line-95"></div>
      <div className="yellowline-Hr position-absolute line-96"></div>
      <div className="yellowline-Hr position-absolute line-97"></div>
      <div className="yellowline-Hr position-absolute line-98"></div>
      <div className="yellowline-Hr position-absolute line-99"></div>
      <div className="yellowline-Hr position-absolute line-100"></div>
      <div className="yellowline-Hr position-absolute line-101"></div>
      <div className="yellowline-Hr position-absolute line-102"></div>
      <div className="yellowline-Hr position-absolute line-103"></div>
      <div className="yellowline-Hr position-absolute line-104"></div>
      <div className="yellowline-Hr position-absolute line-105"></div>
      <div className="yellowline-Hr position-absolute line-106"></div>
      <div className="yellowline-Hr position-absolute line-107"></div>
      <div className="yellowline-Hr position-absolute line-108"></div>
      <div className="yellowline-Hr position-absolute line-109"></div>
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="d-flex border border-dark p-2 position-absolute text-center single-item-57"></div>
      <div className="img-107 position-absolute single-text-1"></div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-2" />
      <div className="position-absolute pl-1 pt-1 pr-5 pb-5 text-center border border-dark single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Supporting Roller Lube Station-1",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQ3",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQ3_M01_RUN",
                    healthyLabel: "KL_463LQ3_M01_PH",
                  }
                )}`}
                label="KL_463LQ3_M01_RUN"
                text="M"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE3",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQ5",
                }}
              />
            </div>

            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQ5_M01_RUN",
                    healthyLabel: "KL_463LQ5_M01_PH",
                  }
                )}`}
                label="KL_463LQ5_M01_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQ4",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQ4_M01_RUN",
                    healthyLabel: "KL_463LQ4_M01_PH",
                  }
                )}`}
                label="KL_463LQ4_M01_RUN"
                text="M"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE4",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQ6",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQ6_M01_RUN",
                    healthyLabel: "KL_463LQ6_M01_PH",
                  }
                )}`}
                label="KL_463LQ6_M01_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute pl-1 pt-1 pr-5 pb-5 text-center border border-dark single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Supporting Roller Lube Station-2",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE5",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQ7",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQ7_M01_RUN",
                    healthyLabel: "KL_463LQ7_M01_PH",
                  }
                )}`}
                label="KL_463LQ7_M01_RUN"
                text="M"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE7",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "462LQ9",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQ9_M01_RUN",
                    healthyLabel: "KL_463LQ9_M01_PH",
                  }
                )}`}
                label="KL_463LQ9_M01_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE6",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQ8",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQ8_M01_RUN",
                    healthyLabel: "KL_463LQ8_M01_PH",
                  }
                )}`}
                label="KL_463LQ8_M01_RUN"
                text="M"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE8",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQA",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQA_M01_RUN",
                    healthyLabel: "KL_463LQA_M01_PH",
                  }
                )}`}
                label="KL_463LQA_M01_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute pl-1 pt-1 pr-5 pb-5 text-center border border-dark single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Supporting Roller Lube Station-3",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE9",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQB",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQB_M01_RUN",
                    healthyLabel: "KL_463LQB_M01_PH",
                  }
                )}`}
                label="KL_463LQB_M01_RUN"
                text="M"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE11",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQD",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQD_M01_RUN",
                    healthyLabel: "KL_463LQD_M01_PH",
                  }
                )}`}
                label="KL_463LQD_M01_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE10",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQC",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQC_M01_RUN",
                    healthyLabel: "KL_463LQC_M01_PH",
                  }
                )}`}
                label="KL_463LQC_M01_RUN"
                text="M"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE12",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "463LQE",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "A",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "KL_463LQE_M01_RUN",
                    healthyLabel: "KL_463LQE_M01_PH",
                  }
                )}`}
                label="KL_463LQE_M01_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-46">
        <div className="d-flex pt-3 px-2 pb-2 border border-dark">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_463LQ1_M01_RUN",
                  healthyLabel: "KL_463LQ1_M01_PH",
                }
              )}`}
              label="KL_463LQ1_M01_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "463LQ1_M01",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "463GB1",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_463LQ1_M02_RUN",
                  healthyLabel: "KL_463LQ1_M02_PH",
                }
              )}`}
              label="KL_463LQ1_M02_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "463LQ1_M02",
              }}
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "MAIN GB-1 LUB UNIT",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "FROM PREHEATER",
        }}
      />
      <div
        className={`position-absolute single-text-67 p-3 square grey-color`}
      ></div>

      {/* new code */}
      <div className="d-flex justify-content-between position-absolute single-item-1">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FN3_RUN", healthyLabel: "KL_463FN3_RUN" }
            )}`}
            label="KL_463FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FN3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FN6_RUN", healthyLabel: "KL_463FN6_PH" }
            )}`}
            label="KL_463FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FN6",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FN9_RUN", healthyLabel: "KL_463FN9_PH" }
            )}`}
            label="KL_463FN9_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FN9",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNC_RUN", healthyLabel: "KL_463FNC_PHH" }
            )}`}
            label="KL_463FNC_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNC",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNF_RUN", healthyLabel: "KL_463FNF_ph" }
            )}`}
            label="KL_463FNF_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNF",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNJ_RUN", healthyLabel: "KL_463FNJ_PH" }
            )}`}
            label="KL_463FNJ_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNJ",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNM_RUN", healthyLabel: "KL_463FNM_PH" }
            )}`}
            label="KL_463FNM_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNM",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNQ_RUN", healthyLabel: "KL_463FNQ_PH" }
            )}`}
            label="KL_463FNQ_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNQ",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNT_RUN", healthyLabel: "KL_463FNT_PH" }
            )}`}
            label="KL_463FNT_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNT",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNW_RUN", healthyLabel: "KL_463FNW_PH" }
            )}`}
            label="KL_463FNW_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNW",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-item-2">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FN4_RUN", healthyLabel: "KL_463FN4_PH" }
            )}`}
            label="KL_463FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FN4",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FN7_RUN", healthyLabel: "KL_463FN7_PH" }
            )}`}
            label="KL_463FN7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FN7",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNA_RUN", healthyLabel: "KL_463FNA_PH" }
            )}`}
            label="KL_463FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNA",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FND_RUN", healthyLabel: "KL_463FND_PH" }
            )}`}
            label="KL_463FND_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FND",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNG_RUN", healthyLabel: "KL_463FNG_PH" }
            )}`}
            label="KL_463FNG_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNG",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNK_RUN", healthyLabel: "KL_463FNK_PH" }
            )}`}
            label="KL_463FNK_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNK",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNN_RUN", healthyLabel: "KL_463FNN_PH" }
            )}`}
            label="KL_463FNN_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNN",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNR_RUN", healthyLabel: "KL_463FNR_PH" }
            )}`}
            label="KL_463FNR_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNR",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNU_RUN", healthyLabel: "KL_463FNU_PH" }
            )}`}
            label="KL_463FNU_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNU",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNX_RUN", healthyLabel: "KL_463FNX_PH" }
            )}`}
            label="KL_463FNX_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNX",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-item-3">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FN5_RUN", healthyLabel: "KL_463FN5_PH" }
            )}`}
            label="KL_463FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FN5",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FN8_RUN", healthyLabel: "KL_463FN8_PH" }
            )}`}
            label="KL_463FN8_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FN8",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNB_RUN", healthyLabel: "KL_463FNB_PH" }
            )}`}
            label="KL_463FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNB",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNE_RUN", healthyLabel: "KL_463FNE_PH" }
            )}`}
            label="KL_463FNE_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNE",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNH_RUN", healthyLabel: "KL_463FNH_PH" }
            )}`}
            label="KL_463FNH_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNH",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNL_RUN", healthyLabel: "KL_463FNL_PH" }
            )}`}
            label="KL_463FNL_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNL",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNP_RUN", healthyLabel: "KL_463FNP_PH" }
            )}`}
            label="KL_463FNP_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNP",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNS_RUN", healthyLabel: "KL_463FNS_PH" }
            )}`}
            label="KL_463FNS_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNS",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNV_RUN", healthyLabel: "KL_463FNV_PH" }
            )}`}
            label="KL_463FNV_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNV",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_463FNY_RUN", healthyLabel: "KL_463FNY_PH" }
            )}`}
            label="KL_463FNY_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463FNY",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-item-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "MAIN GB-2 LUB UNIT",
          }}
        />
        <div className="d-flex p-2 border border-dark">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "463LQ2_M01",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_463LQ2_M01_RUN",
                  healthyLabel: "KL_463LQ2_M01_PH",
                }
              )}`}
              label="KL_463LQ2_M01_RUN"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark align-self-end",
              label: "463GB2",
            }}
          />
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "463LQ2_M02",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_463LQ2_M02_RUN",
                  healthyLabel: "KL_463LQ2_M02_PH",
                }
              )}`}
              label="KL_463LQ2_M02_RUN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-5">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { closeLabel: "KL_483BV3_CLS", openLabel: "KL_483BV3_OLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { closeLabel: "KL_483BV3_CLS", openLabel: "KL_483BV3_OLS" }
            )}`}
            label="KL_483BV3_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV3",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_483BV4_OLS", closeLabel: "KL_483BV4_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_483BV4_OLS", closeLabel: "KL_483BV4_CLS" }
            )}`}
            label="KL_483BV4_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV4",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_483BV5_OLS", closeLabel: "KL_483BV5_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_483BV5_OLS", closeLabel: "KL_483BV5_CLS" }
            )}`}
            label="KL_483BV5_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV5",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-6">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { closeLabel: "KL_483BV7_CLS", openLabel: "KL_483BV7_OLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { closeLabel: "KL_483BV7_CLS", openLabel: "KL_483BV7_OLS" }
            )}`}
            label="KL_483BV7_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV7",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_483BV8_OLS", closeLabel: "KL_483BV8_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_483BV8_OLS", closeLabel: "KL_483BV8_CLS" }
            )}`}
            label="KL_483BV8_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV8",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-8">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_483BL2_M02_RUN", healthyLabel: "KL_483BL2_M02_PH" }
          )}`}
          label="KL_483BL2_M02_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_483BL3_M02_RUN", healthyLabel: "KL_483BL3_M02_PH" }
          )}`}
          label="KL_483BL3_M02_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_483BL4_M02_RUN", healthyLabel: "KL_483BL4_M02_PH" }
          )}`}
          label="KL_483BL4_M02_RUN"
          text="M"
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-9">
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <div className={`dot grey-color p-3`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "FN1",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <div className={`dot grey-color p-3`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "FN2 STAND BY",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-item-10">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_483BV6_OLS", closeLabel: "KL_483BV6_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_483BV6_OLS", closeLabel: "KL_483BV6_CLS" }
          )}`}
          label="KL_483BV6_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV6",
          }}
        />
      </div>
      <div className="p-1 text-center border border-dark position-absolute single-item-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-2",
            label: "TH & PINION BTE",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_BTE13",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_BTE14",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_BTE15",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_BTE16",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_BTE17",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_BTE18",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border border-dark p-2 position-absolute text-center single-item-13">
        <div className="d-flex mt-1">
          <div className="d-flex align-self-center justify-content-between w-50">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_463KT1_M01_RUN",
                  healthyLabel: "KL_463KT1_M01_PH",
                }
              )}`}
              label="KL_463KT1_M01_RUN"
              text="M"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_463KT1_M02_RUN",
                  healthyLabel: "KL_463KT1_M02_PH",
                }
              )}`}
              label="KL_463KT1_M02_RUN"
              text="M"
            />
          </div>
          <div className="ml-2 w-50">
            <BlackContainer
              data={{
                label: "KL_463KT1_PT1",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "463KT1-PT1",
              }}
            />

            <BlackContainer
              data={{
                label: "KL_463KT1_TT1",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "463KT1-TT1",
              }}
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "KILN HYDRAULIC THRUSTER SYSTEM",
          }}
        />
      </div>
      <div className="grid-container-2 border border-dark pl-1 pr-3 py-3 position-absolute text-center single-item-14">
        <div className="first-col">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "KL_463LQF_SV3"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "KL_463LQF_SV3"
            )}`}
            label="KL_463LQF_SV3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463LQF_SV3",
            }}
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_463CP1_RUN",
                healthyLabel: "KL_463CP1_PH",
              }
            )}`}
            label="KL_463CP1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "463CP1",
            }}
          />
        </div>
        <div className="mt-3">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "KL_463LQF_SV4"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "KL_463LQF_SV4"
            )}`}
            label="KL_463LQF_SV4"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463LQF_SV4",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column position-absolute single-item-15">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_463FN1_M01_RUN",
                healthyLabel: "KL_463FN1_M01_PH",
              }
            )}`}
            label="KL_463FN1_M01_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FN1",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463FN2A_M01_RUN",
              healthyLabel: "KL_463FN2A_M01_PH",
            }
          )}`}
          label="KL_463FN2A_M01_RUN"
        />
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_463FN2_M01_RUN",
                healthyLabel: "KL_463FN2_M01_PH",
              }
            )}`}
            label="KL_463FN2_M01_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FN2",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-item-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "BRAKE POSITION",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_463AD1_ZS1")}`}
          label="KL_463AD1_ZS1"
          text="Z"
        />
      </div>
      <div className="d-flex position-absolute single-item-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "BRAKE POSITION",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_463AD2_ZS1")}`}
          label="KL_463AD2_ZS1"
          text="Z"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-22",
          label: "SHELL COOLING FANS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-24",
          label: "GIRTH GEAR LUB SYS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-25",
          label: "TO COOLER",
        }}
      />

      <div className="position-absolute p-2 text-center border border-dark single-item-27">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KL_GG_ST_INT")}`}
            label="KL_GG_ST_INT"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light ml-2",
              label: "STARTING INT",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KL_GG_OP_INT")}`}
            label="KL_GG_OP_INT"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light ml-2",
              label: "OPERATIONAL INT",
            }}
          />
        </div>
      </div>

      <div className="d-flex flex-column justify-content-between position-absolute single-item-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "463KL1_TT1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_463KL1_TT1",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "463KL1_TT2",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_TT2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "463KL1_PT1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_463KL1_PT1",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-item-31">
        <BlackContainer
          data={{
            label: "KL_463FN2_PT1",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "463FN2_PT1",
          }}
        />
      </div>
      <div className="position-absolute single-item-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "COAL DOSING SYSTEM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-auto",
            label: "483DQ1",
          }}
        />
      </div>
      <div className="position-absolute single-item-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SWIRL AIR PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_463KL1_PT3",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-item-34">
        <BlackContainer
          data={{
            label: "KL_463FN1_PT1",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "463FN1_PT1",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PH_463FNZ_PT",
          useClass: "greenTxt position-absolute single-item-35",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex flex-column align-items-center position-absolute single-item-36">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463FNZ_M01_RUN",
              healthyLabel: "KL_463FNZ_M01_PH",
            }
          )}`}
          label="KL_463FNZ_M01_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "463FNZ",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "KL_463LD5_M01_CLS",
                openLabel: "KL_463LD5_M01_OLS",
                healthyLabel: "KL_463LD5_M01_PH",
              }
            )}`}
            label="KL_463LD5_M01_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "463LD5",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-37",
          label: "463KL1-AT1",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-item-38" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-item-39" />
      <div className="position-absolute single-item-40">
        <MotorCircleDigitalTag
          className={`dot mt-1 ml-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463AD1_M02_RUN",
              healthyLabel: "KL_463AD1_M02_PH",
            }
          )}`}
          label="KL_463AD1_M02_RUN"
          text="M"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "463AD1",
          }}
        />
      </div>
      <div className="position-absolute single-item-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "463AD2",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463AD2_M02_RUN",
              healthyLabel: "KL_463AD2_M02_PH",
            }
          )}`}
          label="KL_463AD2_M02_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-item-42">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD2_M02_RUN",
              healthyLabel: "KL_463MD2_M02_PH",
            }
          )}`}
          label="KL_463MD2_M02_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD2_M03_RUN",
              healthyLabel: "KL_463MD2_M03_PH",
            }
          )}`}
          label="KL_463MD2_M03_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-item-43">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD1_M02_RUN",
              healthyLabel: "KL_463MD1_M02_PH",
            }
          )}`}
          label="KL_463MD1_M02_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD1_M03_RUN",
              healthyLabel: "KL_463MD1_M03_PH",
            }
          )}`}
          label="KL_463MD1_M03_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-item-46">
        <BlackContainer
          data={{
            label: "KL_463MD1_SI",
            useClass: "greenTxt mt-4",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KL_463MD2_SI",
          useClass: "greenTxt position-absolute single-item-47",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex flex-column justify-content-between position-absolute single-item-49">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463KL1.BTE13",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE13",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE15",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463KL1.BTE15",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-50">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463KL1.BTE14",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE14",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MV",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_SPEED_PID",
              useClass: "greenTxt my-3",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_463KL1_BTE16",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "463KL1.BTE16",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-51 border border-dark p-2">
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "KL_463KT1_ZT1",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_463KT1_FS")}`}
            text="F"
            label="KL_463KT1_FS"
          />
        </div>
        <div className="yellowline-Hr rightarrow position-relative my-2 w-75"></div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_463KT1_ZS4")}`}
            text="Z"
            label="KL_463KT1_ZS4"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_463KT1_ZS3"
            )} ml-1`}
            text="Z"
            label="KL_463KT1_ZS3"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_463KT1_ZS2"
            )} ml-1`}
            text="Z"
            label="KL_463KT1_ZS2"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_463KT1_ZS1"
            )} ml-1`}
            text="Z"
            label="KL_463KT1_ZS1"
          />
        </div>
        <div className="d-flex mt-3">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "KL_463KT1_SV2"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "KL_463KT1_SV2"
            )}`}
            label="KL_463KT1_SV2"
          />
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "KL_463KT1_SV1"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "KL_463KT1_SV1"
            )}`}
            label="KL_463KT1_SV1"
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-53">
        <div>
          <BlackContainer
            data={{
              label: "KL_463KL1_TT3",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "463KL1_TT3",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_463KL1_PT2",
              useClass: "greenTxt mt-3",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "463KL1_PT2",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "KL_463KL1_PT4",
              useClass: "greenTxt mt-5",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "JET AIR PRESSURE",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-55",
          label: "FN2 (STANDBY)",
        }}
      />
      <div className="position-absolute single-item-56">
        <BlackContainer
          data={{
            label: "KL_463KL1_TT5",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "463KL1_TT5",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-58",
          label: "481BU1",
        }}
      />
      <div className="position-absolute single-item-59">
        <BlackContainer
          data={{
            label: "KL_DU1_PT5",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_DU1_TT3",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-item-60">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV3_OLS")}`}
          label="KL_483BV3_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV4_CLS")}`}
          label="KL_483BV4_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV5_CLS")}`}
          label="KL_483BV5_CLS"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-item-61">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV3_CLS")}`}
          label="KL_483BV3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV4_OLS")}`}
          label="KL_483BV4_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV5_OLS")}`}
          label="KL_483BV5_OLS"
        />
      </div>
      <div className="d-flex position-absolute single-item-62">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV7_OLS")}`}
          label="KL_483BV7_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV7_CLS")}`}
          label="KL_483BV7_CLS"
        />
      </div>
      <div className="d-flex position-absolute single-item-63">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV6_OLS")}`}
          label="KL_483BV6_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV6_CLS")}`}
          label="KL_483BV6_CLS"
        />
      </div>
      <div className="d-flex position-absolute single-item-64">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV8_OLS")}`}
          label="KL_483BV8_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_483BV8_CLS")}`}
          label="KL_483BV8_CLS"
        />
      </div>
      <div className="text-center position-absolute single-item-65">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_463KT1_GS")}`}
          label="KL_463KT1_GS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-t",
            label: "483KT1_GS",
          }}
        />
      </div>
    </div>
  );
};
