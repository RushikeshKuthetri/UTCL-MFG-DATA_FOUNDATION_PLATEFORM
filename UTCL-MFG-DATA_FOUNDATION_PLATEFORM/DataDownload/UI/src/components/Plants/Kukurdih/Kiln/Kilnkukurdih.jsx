import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const Kilnkukurdih = () => {
  return (
    <div className="KilnAuxilaieskotputli Kilnkukurdih w-100 h-100 position-relative">
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
      <div className="yellowline-Vr position-absolute line-70"></div>
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
      <div className="yellowline-Hr position-absolute line-89"></div>
      <div className="yellowline-Hr position-absolute line-90"></div>
      <div className="yellowline-Hr pl-3 d-flex align-items-center position-absolute line-91">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr pl-3 d-flex align-items-center position-absolute line-92">
        <i className="fa-solid fa-caret-right"></i>
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
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
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
              label: "KL_461KL1_BTE1",
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
                  label: "461LQ3",
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
                    runLabel: "KL_461LQ3_M01_RUN",
                    healthyLabel: "KL_461LQ3_M01_PH",
                  }
                )}`}
                label="KL_461LQ3_M01_RUN"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE3",
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
                  label: "461LQ5",
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
                    runLabel: "KL_461LQ5_M01_RUN",
                    healthyLabel: "KL_461LQ5_M01_PH",
                  }
                )}`}
                label="KL_461LQ5_M01_RUN"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE2",
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
                  label: "461LQ4",
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
                    runLabel: "KL_461LQ4_M01_RUN",
                    healthyLabel: "KL_461LQ4_M01_PH",
                  }
                )}`}
                label="KL_461LQ4_M01_RUN"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE4",
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
                  label: "461LQ6",
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
                    runLabel: "KL_461LQ6_M01_RUN",
                    healthyLabel: "KL_461LQ6_M01_PH",
                  }
                )}`}
                label="KL_461LQ6_M01_RUN"
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
              label: "KL_461KL1_BTE5",
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
                  label: "461LQ7",
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
                    runLabel: "KL_461LQ7_M01_RUN",
                    healthyLabel: "KL_461LQ7_M01_PH",
                  }
                )}`}
                label="KL_461LQ7_M01_RUN"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE7",
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
                  label: "461LQ9",
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
                    runLabel: "KL_461LQ9_M01_RUN",
                    healthyLabel: "KL_461LQ9_M01_PH",
                  }
                )}`}
                label="KL_461LQ9_M01_RUN"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE6",
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
                  label: "461LQ8",
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
                    runLabel: "KL_461LQ8_M01_RUN",
                    healthyLabel: "KL_461LQ8_M01_PH",
                  }
                )}`}
                label="KL_461LQ8_M01_RUN"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE8",
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
                  label: "461LQA",
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
                    runLabel: "KL_461LQA_M01_RUN",
                    healthyLabel: "KL_461LQA_M01_PH",
                  }
                )}`}
                label="KL_461LQA_M01_RUN"
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
              label: "KL_461KL1_BTE9",
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
                  label: "461LQB",
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
                    runLabel: "KL_461LQB_M01_RUN",
                    healthyLabel: "KL_461LQB_M01_PH",
                  }
                )}`}
                label="KL_461LQB_M01_RUN"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE11",
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
                  label: "461LQD",
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
                    runLabel: "KL_461LQD_M01_RUN",
                    healthyLabel: "KL_461LQD_M01_PH",
                  }
                )}`}
                label="KL_461LQD_M01_RUN"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE10",
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
                  label: "461LQC",
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
                    runLabel: "KL_461LQC_M01_RUN",
                    healthyLabel: "KL_461LQC_M01_PH",
                  }
                )}`}
                label="KL_461LQC_M01_RUN"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE12",
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
                  label: "461LQE",
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
                    runLabel: "KL_461LQE_M01_RUN",
                    healthyLabel: "KL_461LQE_M01_PH",
                  }
                )}`}
                label="KL_461LQE_M01_RUN"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-46">
        <div className="d-flex pt-3 px-2 pb-2 border border-dark">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "KL_461LQ1_M01_PH",
                  runLabel: "KL_461LQ1_M01_RUN",
                }
              )}`}
              label="KL_461LQ1_M01_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "461LQ1_M01",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "461GB1",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_461LQ1_M02_RUN",
                  healthyLabel: "KL_461LQ1_M02_PH",
                }
              )}`}
              label="KL_461LQ1_M02_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "461LQ1_M02",
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
              { runLabel: "KL_461FN3_RUN", healthyLabel: "KL_461FN3_RUN" }
            )}`}
            label="KL_461FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FN3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FN6_RUN", healthyLabel: "KL_461FN6_PH" }
            )}`}
            label="KL_461FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FN6",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FN9_RUN", healthyLabel: "KL_461FN9_PH" }
            )}`}
            label="KL_461FN9_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FN9",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNC_RUN", healthyLabel: "KL_461FNC_PH" } // issue here in healthy label - it should be PH and not PHH
            )}`}
            label="KL_461FNC_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNC",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNF_RUN", healthyLabel: "KL_461FNF_PH" } // issue here in healthy label - it should be PH and not ph
            )}`}
            label="KL_461FNF_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNF",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNJ_RUN", healthyLabel: "KL_461FNJ_PH" }
            )}`}
            label="KL_461FNJ_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNJ",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNM_RUN", healthyLabel: "KL_461FNM_PH" }
            )}`}
            label="KL_461FNM_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNM",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNQ_RUN", healthyLabel: "KL_461FNQ_PH" }
            )}`}
            label="KL_461FNQ_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNQ",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNT_RUN", healthyLabel: "KL_461FNT_PH" }
            )}`}
            label="KL_461FNT_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNT",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNW_RUN", healthyLabel: "KL_461FNW_PH" }
            )}`}
            label="KL_461FNW_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNW",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-item-2">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FN4_RUN", healthyLabel: "KL_461FN4_PH" }
            )}`}
            label="KL_461FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FN4",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FN7_RUN", healthyLabel: "KL_461FN7_PH" }
            )}`}
            label="KL_461FN7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FN7",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNA_RUN", healthyLabel: "KL_461FNA_PH" }
            )}`}
            label="KL_461FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNA",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FND_RUN", healthyLabel: "KL_461FND_PH" }
            )}`}
            label="KL_461FND_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FND",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNG_RUN", healthyLabel: "KL_461FNG_PH" }
            )}`}
            label="KL_461FNG_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNG",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNK_RUN", healthyLabel: "KL_461FNK_PH" }
            )}`}
            label="KL_461FNK_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNK",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNN_RUN", healthyLabel: "KL_461FNN_PH" }
            )}`}
            label="KL_461FNN_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNN",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNR_RUN", healthyLabel: "KL_461FNR_PH" }
            )}`}
            label="KL_461FNR_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNR",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNU_RUN", healthyLabel: "KL_461FNU_PH" }
            )}`}
            label="KL_461FNU_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNU",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNX_RUN", healthyLabel: "KL_461FNX_PH" }
            )}`}
            label="KL_461FNX_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNX",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-item-3">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FN5_RUN", healthyLabel: "KL_461FN5_PH" }
            )}`}
            label="KL_461FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FN5",
            }}
          />
        </div>
        <div>
          {/* <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "" }
            )}`}
            label="PP_611FNU_RUN"
          /> */}
          <div className="line-circle grey-color"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FN8",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNB_RUN", healthyLabel: "KL_461FNB_PH" }
            )}`}
            label="KL_461FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNB",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNE_RUN", healthyLabel: "KL_461FNE_PH" }
            )}`}
            label="KL_461FNE_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNE",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNH_RUN", healthyLabel: "KL_461FNH_PH" }
            )}`}
            label="KL_461FNH_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNH",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNL_RUN", healthyLabel: "KL_461FNL_PH" }
            )}`}
            label="KL_461FNL_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNL",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNP_RUN", healthyLabel: "KL_461FNP_PH" }
            )}`}
            label="KL_461FNP_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNP",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNS_RUN", healthyLabel: "KL_461FNS_PH" }
            )}`}
            label="KL_461FNS_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNS",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNV_RUN", healthyLabel: "KL_461FNV_PH" }
            )}`}
            label="KL_461FNV_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNV",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461FNY_RUN", healthyLabel: "KL_461FNY_PH" }
            )}`}
            label="KL_461FNY_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461FNY",
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
                label: "461LQ2_M01",
              }}
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_461LQ2_M01_RUN",
                  healthyLabel: "KL_461LQ2_M01_PH",
                }
              )}`}
              label="KL_461LQ2_M01_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark align-self-end",
              label: "461GB2",
            }}
          />
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "461LQ2_M02",
              }}
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_461LQ2_M02_RUN",
                  healthyLabel: "KL_461LQ2_M02_PH",
                }
              )}`}
              label="KL_461LQ2_M02_RUN"
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-5">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV2A_OLS", closeLabel: "KL_481BV2A_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV2A_OLS", closeLabel: "KL_481BV2A_CLS" }
            )}`}
            label="KL_481BV2A_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV2A",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV3_OLS", closeLabel: "KL_481BV3_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV3_OLS", closeLabel: "KL_481BV3_CLS" }
            )}`}
            label="KL_481BV3_OLS"
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
              { openLabel: "KL_481BV4_OLS", closeLabel: "KL_481BV4_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV4_OLS", closeLabel: "KL_481BV4_CLS" }
            )}`}
            label="KL_481BV4_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV4",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-6">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV6_OLS", closeLabel: "KL_481BV6_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV6_OLS", closeLabel: "KL_481BV6_CLS" }
            )}`}
            label="KL_481BV6_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV6",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV7_OLS", closeLabel: "KL_481BV7_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV7_OLS", closeLabel: "KL_481BV7_CLS" }
            )}`}
            label="KL_481BV7_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV7",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-8">
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481BL2_RUN", healthyLabel: "KL_481BL2_PH" }
            )} p-3`}
            label="KL_481BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "BL2",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481BL3_RUN", healthyLabel: "KL_481BL3_PH" }
            )} p-3`}
            label="KL_481BL3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "BL3",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481BL4_RUN", healthyLabel: "KL_481BL4_PH" }
            )} p-3`}
            label="KL_481BL4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "BL4",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-9">
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481FN1_RUN", healthyLabel: "KL_481FN1_PH" }
            )} p-3`}
            label="KL_481FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "FN1",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481FN2_RUN", healthyLabel: "KL_481FN2_PH" }
            )} p-3`}
            label="KL_481FN2_RUN"
          />
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
            { openLabel: "KL_481BV5_OLS", closeLabel: "KL_481BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_481BV5_OLS", closeLabel: "KL_481BV5_CLS" }
          )}`}
          label="KL_481BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV5",
          }}
        />
      </div>
      <div className="p-1 text-center border border-dark position-absolute single-item-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FN2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-2",
            label: "TH & PINION BTE",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_BTE13",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_BTE14",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_BTE15",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_BTE16",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_BTE17",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_BTE18",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="p-2 text-center border border-dark position-absolute single-item-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-2",
            label: "PYRO METERS",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_FT1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "461KL1-FT1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_FT2",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "461KL1-FT2",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_FT3",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "461KL1-FT3",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_FT4",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "461KL1-FT4",
          }}
        />
      </div>
      <div className="d-flex border border-dark p-2 position-absolute text-center single-item-13">
        <div className="d-flex align-self-end">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_461KT1_M01_RUN",
                  healthyLabel: "KL_461KT1_M01_PH",
                }
              )}`}
              label="KL_461KT1_M01_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light mt-2",
                label: "461KT1-M01",
              }}
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_461KT1_M02_RUN",
                  healthyLabel: "KL_461KT1_M02_PH",
                }
              )}`}
              label="KL_461KT1_M02_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light mt-2",
                label: "461KT1-M01",
              }}
            />
          </div>
        </div>
        <div className="ml-2">
          <BlackContainer
            data={{
              label: "KL_461KT1_PT1",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "KL_461KT1_TT1",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="grid-container-3 border border-dark pt-3 pb-1 position-absolute text-center single-item-14">
        <div className="first-col">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KL_461LQF_SV1_OLS",
                healthyLabel: "KL_461LQF_SV1_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KL_461LQF_SV1_OLS",
                healthyLabel: "KL_461LQF_SV1_CLS",
              }
            )}`}
            label="KL_461LQF_SV1_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461LQF_SV1",
            }}
          />
        </div>
        <div className="mt-3">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block  grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
            // label="KL_482BV3_OPN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461LQF_SV3",
            }}
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_461CP1_RUN", healthyLabel: "KL_461CP1_PH" }
            )}`}
            label="KL_461CP1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "461CP1",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KL_461LQF_SV2_OLS",
                closeLabel: "KL_461LQF_SV2_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KL_461LQF_SV2_OLS",
                closeLabel: "KL_461LQF_SV2_CLS",
              }
            )}`}
            label="KL_461LQF_SV2_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461LQF_SV2",
            }}
          />
        </div>
        <div className="mt-3">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
            // label="KL_482BV3_OPN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461LQF_SV4",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column position-absolute single-item-15">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_461FN1_M01_RUN",
                healthyLabel: "KL_461FN1_M01_PH",
              }
            )}`}
            label="KL_461FN1_M01_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-2",
              label: "FN1",
            }}
          />
        </div>

        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_461FN2A_M01_RUN",
              healthyLabel: "KL_461FN2A_M01_PH",
            }
          )}`}
          label="KL_461FN2A_M01_RUN"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461FN2_M01_RUN", healthyLabel: "KL_461FN2_M01_PH" }
          )}`}
          label="KL_461FN2_M01_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-item-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "BRAKE POSITION",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_461AD1_ZS1")}`}
          label="KL_461AD1_ZS1"
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
          className={`dot digital-tag ${useColorStatus("KL_461AD2_ZS1")}`}
          label="KL_461AD2_ZS1"
          text="Z"
        />
      </div>
      <div className="d-flex position-absolute single-item-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "Kiln Will Trip",
          }}
        />
        <i className="fa-solid fa-volume-low"></i>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-22",
          label: "SHELL COOLING FANS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-23",
          label: "KILN HYDRAULIC THRUSTER SYSTEM",
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

      <div className="position-absolute p-2 text-center border border-dark single-item-26">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "CARTAIN ON CMD",
            }}
          />
          <div
            className={`dot grey-color`}
            // label="PP_611FNU_RUN"
            // text="P"
          >
            P
          </div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "FIRE LAMP ON CMD",
            }}
          />
          <div
            className={`dot grey-color`}
            // label="PP_611FNU_RUN"
            // text="P"
          >
            P
          </div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOOTER",
            }}
          />
          <i className="fa-solid fa-volume-low"></i>
        </div>
      </div>
      <div className="position-absolute p-2 text-center border border-dark single-item-27">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`square ${useColorStatus("KL_GG_ST_INT")} digital-tag`}
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
            className={`square ${useColorStatus("KL_GG_OP_INT")} digital-tag`}
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
      <div className="d-flex flex-column position-absolute single-item-28">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_481BL2_M02_RUN", healthyLabel: "KL_481BL2_M02_PH" }
          )}`}
          label="KL_481BL2_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_481BL3_M02_RUN", healthyLabel: "KL_481BL3_M02_PH" }
          )}`}
          label="KL_481BL3_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_481BL4_M02_RUN", healthyLabel: "KL_481BL4_M02_PH" }
          )}`}
          label="KL_481BL4_M02_RUN"
        />
      </div>
      <div className="position-absolute single-item-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TAD INLET TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_TT3",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "461KL1-TT3",
          }}
        />
      </div>
      <div className="position-absolute single-item-31">
        <BlackContainer
          data={{
            label: "KL_461FN2_PT1",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "461FN2_PT1",
          }}
        />
      </div>
      <div className="position-absolute single-item-32">
        <BlackContainer
          data={{
            label: "KL_461KL1_TT4",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "461KL1-TT4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "COAL DOSING SYSTEM",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-auto",
            label: "481DQ1",
          }}
        />
      </div>
      <div className="position-absolute single-item-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "481BU1",
          }}
        />
        <div className={`square p-3 grey-color`} />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SWIRL AIR PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "KL_481FN1_SI",
            useClass: "greenTxt mt-4 ml-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_481FN1_II",
            useClass: "greenTxt mt-1 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "KL_481FN2_SI",
            useClass: "greenTxt mt-4 ml-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_481FN2_II",
            useClass: "greenTxt mt-1 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-item-34">
        <BlackContainer
          data={{
            label: "KL_461FN1_PT1",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "461FN1_PT1",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PH_461FNZ_PT",
          useClass: "greenTxt position-absolute single-item-35",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />

      <div className="d-flex flex-column align-items-center position-absolute single-item-36">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461FNZ_M01_RUN", healthyLabel: "KL_461FNZ_M01_PH" }
          )}`}
          label="KL_461FNZ_M01_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "461FNZ",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot  grey-color`} />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "461LD5",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-37",
          label: "461KL1-AT1",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-item-38" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-item-39" />
      <div className="position-absolute single-item-40">
        <div className="d-flex mb-1">
          <div className={`dot grey-color`} />
          <div className={`dot mt-1 ml-1 grey-color`} />
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "461AD1",
          }}
        />
      </div>
      <div className="position-absolute single-item-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "461AD2",
          }}
        />
        <div className="d-flex">
          <div className={`dot mt-1 mr-1  grey-color`} />
          <div className={`dot grey-color`} />
        </div>
      </div>
      <div className="position-absolute single-item-42">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461MD2_M02_RUN", healthyLabel: "KL_461MD2_M02_PH" }
          )}`}
          label="KL_461MD2_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461MD2_M03_RUN", healthyLabel: "KL_461MD2_M03_PH" }
          )}`}
          label="KL_461MD2_M03_RUN"
        />
      </div>
      <div className="position-absolute single-item-43">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461MD1_M02_RUN", healthyLabel: "KL_461MD1_M02_PH" }
          )}`}
          label="KL_461MD1_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461MD1_M03_RUN", healthyLabel: "KL_461MD1_M03_PH" }
          )}`}
          label="KL_461MD1_M03_RUN"
        />
      </div>
      <div className="p-1 border border-dark position-absolute single-item-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light my-2",
            label: "KILN THURSTER ANALOG",
          }}
        />
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461KT1-ZT1 (POSITION)",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_461KT1_ZT1",
              useClass: "greenTxt ml-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "UP COUNT",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_TH_UP_COUNT",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DOWN COUNT",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_TH_DW_COUNT",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "461KT1-ZS1 (LOW LOW)",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("KL_461KT1_ZS1")}`}
                label="KL_461KT1_ZS1"
                text="Z"
              />
            </div>
            <div className="d-flex mt-01">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "461KT1-ZS2 (LOW)",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("KL_461KT1_ZS2")}`}
                label="KL_461KT1_ZS2"
                text="Z"
              />
            </div>
            <div className="d-flex mt-01">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "461KT1-ZS3 (HIGH)",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("KL_461KT1_ZS3")}`}
                label="KL_461KT1_ZS3"
                text="Z"
              />
            </div>
            <div className="d-flex mt-01">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "461KT1-ZS4 (HIGH HIGH)",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("KL_461KT1_ZS4")}`}
                label="KL_461KT1_ZS4"
                text="Z"
              />
            </div>
          </div>
          <div className="p-1 border border-dark">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_461KT1_ZS1_IN"
              )}`}
              label="KL_461KT1_ZS1_IN"
              text="L"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_461KT1_ZS2_IN"
              )}`}
              label="KL_461KT1_ZS2_IN"
              text="L"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_461KT1_ZS3_IN"
              )}`}
              label="KL_461KT1_ZS3_IN"
              text="L"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_461KT1_ZS4_IN"
              )}`}
              label="KL_461KT1_ZS4_IN"
              text="L"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-item-46">
        <MotorCircleDigitalTag
          className={`dot digital-tag grey-color p-2`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-1",
            label: "461MD1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461MD1_II",
            useClass: "greenTxt",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KL_461MD2_II",
          useClass: "greenTxt position-absolute single-item-47",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex flex-column justify-content-between position-absolute single-item-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PH_461KL1_PT1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PH_461KL1_TT1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT1",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PH_461KL1_TT2",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-item-45 d-flex">
        <div className={`dot grey-color`}>I</div>
        <div className={`dot grey-color ml-1`}>I</div>
        <div className={`dot grey-color ml-1`}>I</div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-49">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461KL1.BTE13",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE13",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE15",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461KL1.BTE15",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-50">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461KL1.BTE14",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_461KL1_BTE14",
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
              label: "KL_461KL1_BTE16",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "461KL1.BTE16",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-51">
        <BlackContainer
          data={{
            label: "KL_461MD1_SI",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_SPEED",
            useClass: "greenTxt mt-3",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "KILN RPM",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "461KL1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KT1_ZT1",
            useClass: "greenTxt mt-3",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "461KT1-ZT1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "KILN POSITION",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-item-53">
        <div>
          <BlackContainer
            data={{
              label: "KL_461KL1_TT5",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "461KL1_TT5",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_461KL1_PT2",
              useClass: "greenTxt mt-3",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "461KL1_PT2",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "KL_461KL1_PT4",
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
      <div className="position-absolute single-item-54">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_461KT1_GS")}`}
          label="KL_461KT1_GS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "461KT1_GS",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-item-55",
          label: "FN2 (STANDBY)",
        }}
      />
    </div>
  );
};
