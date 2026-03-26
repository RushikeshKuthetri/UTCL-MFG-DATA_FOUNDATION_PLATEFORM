import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

import {
  useColorStatus,
  useBVTagsColorStatusForNewPlantScreens,
  useCaretColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const BallMillDhuleLine2 = () => {
  return (
    <div className="dhule-l2-ball-mill  w-100 h-100 position-relative">
      <div className="position-absolute asset-67 single-text-1"></div>
      <div className="position-absolute single-text-2">
        <BlackContainer
          data={{
            label: "CM2_WTR_SYS_LT1",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_WTR_SYS_LT2",
            useClass: "greenTxt mb-1 ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_WTR_SYS_LT3",
            useClass: "greenTxt mb-1 ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3">
        <BlackContainer
          data={{
            label: "CM2_562LQ5_FT1",
            useClass: "greenTxt mb-1",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ5_FT2",
            useClass: "greenTxt mb-1",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ5_FT3",
            useClass: "greenTxt mb-4",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ5_PT2",
            useClass: "greenTxt mb-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ5_PT3",
            useClass: "greenTxt mb-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-4">
        <BlackContainer
          data={{
            label: "CM2_562LQ6_FT1",
            useClass: "greenTxt mb-1",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ6_FT2",
            useClass: "greenTxt mb-1",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ6_FT3",
            useClass: "greenTxt mb-1",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ6_FT4",
            useClass: "greenTxt mb-1",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ6_FT5",
            useClass: "greenTxt mb-1",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM2_562LQ9_WI1",
              useClass: "greenTxt mb-1",
              unit: "kg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM2_562LQ9_WI2",
              useClass: "greenTxt mb-1",
              unit: "kg",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6  border p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Analog Input Faul",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_562WI1_CVSPA",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_562WI1_ZT",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Out",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_562WI1_CVSPM",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "CM2_562LQ5_TE1",
            useClass: "greenTxt mb-1 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "CM2_562WI1_PT1",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562WI1_FT",
            useClass: "greenTxt mb-1 ",
            unit: "m3/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "CM2_562LQ7_PT2",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ7_FT",
            useClass: "greenTxt mb-1 ",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "CM2_562LQ7_TT",
            useClass: "greenTxt mb-1 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ7_PT1",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <BlackContainer
          data={{
            label: "CM2_562LQ8_TT",
            useClass: "greenTxt mb-1 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ8_PT1",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <BlackContainer
          data={{
            label: "CM2_562LQ8_PT2",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ8_FT",
            useClass: "greenTxt mb-1 ",
            unit: "I/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "CM2_562LQ6_TE1",
            useClass: "greenTxt mb-1 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex flex-column ">
        <BlackContainer
          data={{
            label: "CM2_562LQ9_PT2",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ9_PT3",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "CM2_562LQ6_PT1",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ6_TE2",
            useClass: "greenTxt mb-1 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "CM2_562BM1_TT3",
            useClass: "greenTxt mb-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ6_PT2",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ6_PT3",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ6M03",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ6_M03_RUN",
                healthyLabel: "CM2_562LQ6_M03_PH",
              }
            )}`}
            label="CM2_562LQ6_M03_RUN"
          />
        </div>
        <div className="mt-3 text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ6_M3A_RUN",
                healthyLabel: "CM2_562LQ6_M3A_PH",
              }
            )}`}
            label="CM2_562LQ6_M3A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ6M03A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "CM2_562LQ6_DPT",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "CM2_562LQ5_DPT",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "CM2_562LQ9_PT1",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "CM2_562WI1_LT",
            useClass: "greenTxt mb-1 ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "CM2_562WI1_ZT",
            useClass: "greenTxt mb-1 ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "CM2_562WI1_DPT",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 text-center">
        <BlackContainer
          data={{
            label: "CM2_562LQ7_DPT",
            useClass: "greenTxt mt-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 text-center">
        <BlackContainer
          data={{
            label: "CM2_562LQ8_DPT",
            useClass: "greenTxt mt-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex align-items-center">
        <div className="">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562MD4_M03_RUN",
                healthyLabel: "CM2_562MD4_M03_PH",
              }
            )}`}
            label="CM2_562MD4_M03_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "M03",
            }}
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562MD4_M02_RUN",
                healthyLabel: "CM2_562MD4_M02_PH",
              }
            )}`}
            label="CM2_562MD4_M02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "M02",
            }}
          />
        </div>
        <div>
          <div className="pole-shape">
            <MotorCircleDigitalTag
              className={`dot digital-tag position-absolute ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel:"CM2_562MD4_RUN", healthyLabel:"CM2_562MD4_PH"
              })} mt-2`}
              label="CM2_562MD4_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "M01",
            }}
          />
        </div>
      </div>
      <div className="single-text-27 position-absolute text-center">
        <div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "562LQ5M03",
              }}
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CM2_562LQ5_M03_RUN",
                  healthyLabel: "CM2_562LQ5_M03_PH",
                }
              )}`}
              label="CM2_562LQ5_M03_RUN"
            />
          </div>
          <div className="mt-3">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CM2_562LQ5_M3A_RUN",
                  healthyLabel: "CM2_562LQ5_M3A_PH",
                }
              )}`}
              label="CM2_562LQ5_M3A_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "562LQ5M03A",
              }}
            />
          </div>
        </div>

        <div className="mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "562LQ5M01",
              }}
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CM2_562LQ5_M01_RUN",
                  healthyLabel: "CM2_562LQ5_M01_PH",
                }
              )}`}
              label="CM2_562LQ5_M01_RUN"
            />
          </div>
          <div className="mt-3">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CM2_562LQ5_M02_RUN",
                  healthyLabel: "CM2_562LQ5_M02_PH",
                }
              )}`}
              label="CM2_562LQ5_M02_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "562LQ5M02",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-28 position-absolute text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ6M01",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ6_M01_RUN",
                healthyLabel: "CM2_562LQ6_M01_PH",
              }
            )}`}
            label="CM2_562LQ6_M01_RUN"
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ6_M02_RUN",
                healthyLabel: "CM2_562LQ6_M02_PH",
              }
            )}`}
            label="CM2_562LQ6_M02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ6M02",
            }}
          />
        </div>
      </div>
      <div className="single-text-29 position-absolute text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ8M01",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ8_M01_RUN",
                healthyLabel: "CM2_562LQ8_M01_PH",
              }
            )}`}
            label="CM2_562LQ8_M01_RUN"
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ8_M02_RUN",
                healthyLabel: "CM2_562LQ8_M02_PH",
              }
            )}`}
            label="CM2_562LQ8_M02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ8M02",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex align-items-center">
        <div className="">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562MD3_M03_RUN",
                healthyLabel: "CM2_562MD3_M03_PH",
              }
            )}`}
            label="CM2_562MD3_M03_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "M03",
            }}
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562MD3_M02_RUN",
                healthyLabel: "CM2_562MD3_M02_PH",
              }
            )}`}
            label="CM2_562MD3_M02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "M02",
            }}
          />
        </div>
        <div>
          <div className="pole-shape">
            <MotorCircleDigitalTag
              className={`dot digital-tag position-absolute ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel:"CM2_562MD3_RUN", healthyLabel:"CM2_562MD3_PH"
              })} mt-2`}
              label="CM2_562MD3_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "M01",
            }}
          />
        </div>
      </div>
      <div className="single-text-31 position-absolute text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ7M01",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ7_M01_RUN",
                healthyLabel: "CM2_562LQ7_M01_PH",
              }
            )}`}
            label="CM2_562LQ7_M01_RUN"
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562LQ7_M02_RUN",
                healthyLabel: "CM2_562LQ7_M02_PH",
              }
            )}`}
            label="CM2_562LQ7_M02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562LQ7M02",
            }}
          />
        </div>
      </div>
      <div className="single-text-32 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562LQ9_M01_RUN",
              healthyLabel: "CM2_562LQ9_M01_PH",
            }
          )}`}
          label="CM2_562LQ9_M01_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "562LQ9M01",
          }}
        />
      </div>
      <div className="single-text-33 position-absolute text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562WP1M01",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562WP1_M01_RUN",
                healthyLabel: "CM2_562WP1_M01_PH",
              }
            )}`}
            label="CM2_562WP1_M01_RUN"
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM2_562WP1_M02_RUN",
                healthyLabel: "CM2_562WP1_M02_PH",
              }
            )}`}
            label="CM2_562WP1_M02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562WP1M02",
            }}
          />
        </div>
      </div>
      <div className="single-text-34 position-absolute text-center">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("CM2_562WI1_V01_RUN")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("CM2_562WI1_V01_RUN")}`}
          label="CM2_562WI1_V01_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "562WI1V01",
          }}
        />
      </div>
      <div className="single-text-35 position-absolute text-center">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("CM2_562WI1_V03_RUN")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("CM2_562WI1_V03_RUN")}`}
          label="CM2_562WI1_V03_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "562WI1V03",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562WI1_PT2",
            useClass: "greenTxt mb-1 ml-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-36 position-absolute text-center d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562LQ5_M04_RUN",
              healthyLabel: "CM2_562LQ5_M04_PH",
            }
          )}`}
          label="CM2_562LQ5_M04_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "562LQ5M04",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute text-center d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562LQ6_M04_RUN",
              healthyLabel: "CM2_562LQ6_M04_PH",
            }
          )}`}
          label="CM2_562LQ6_M04_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "562LQ6M04",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute  d-flex flex-column align-items-center">
        <div className="d-flex  align-items-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("CM2_562WI1_V02_RUN")}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("CM2_562WI1_V02_RUN")}`}
            label="CM2_562WI1_V02_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562WI1V02",
            }}
          />
        </div>
      </div>
      <div className="single-text-39 position-absolute  d-flex  align-items-center">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "CM2_562WI1_CV"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus(
            "CM2_562WI1_CV"
          )}`}
          label="CM2_562WI1_CV"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "562WI1_CV",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "562LQ9V01",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM2_562LQ9_V01_OLS",
                closeLabel: "CM2_562LQ9_V01_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM2_562LQ9_V01_OLS",
                closeLabel: "CM2_562LQ9_V01_CLS",
              }
            )}`}
            label="CM2_562LQ9_V01_OLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "562LQ9V02",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM2_562LQ9_V02_OLS",
                closeLabel: "CM2_562LQ9_V02_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM2_562LQ9_V02_OLS",
                closeLabel: "CM2_562LQ9_V02_CLS",
              }
            )}`}
            label="CM2_562LQ9_V02_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-41 ">
        <div className="box-1"></div>
      </div>
      <div className="position-absolute single-text-42 ">
        <div className="box-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562GB4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className="box-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "562GB3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 text-center">
        <div className="box-1 text-center">
          <div className="text-center p-1 mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "INLET SLIDE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "562LQ5H01",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CM2_562LQ5_H01_RUN",
                  healthyLabel: "CM2_562LQ5_H01_PH",
                }
              )}`}
              label="CM2_562LQ5_H01_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <div className="box-1">
          <div className="text-center p-1 mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OUTLET SLIDE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "562LQ6H01",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CM2_562LQ6_H01_RUN",
                  healthyLabel: "CM2_562LQ6_H01_PH",
                }
              )}`}
              label="CM2_562LQ6_H01_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-46 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562AD2_M01_RUN",
              healthyLabel: "CM2_562AD2_M01_PH",
            }
          )}`}
          label="CM2_562AD2_M01_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "562AD2M01",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562AD2_M02_RUN",
              healthyLabel: "CM2_562AD2_M02_PH",
            }
          )}`}
          label="CM2_562AD2_M02_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "562AD2M02",
          }}
        />
      </div>
      <div className="position-absolute single-text-48 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562AD3_M01_RUN",
              healthyLabel: "CM2_562AD3_M01_PH",
            }
          )}`}
          label="CM2_562AD3_M01_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "562AD3M01",
          }}
        />
      </div>
      <div className="position-absolute single-text-49 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562AD3_M02_RUN",
              healthyLabel: "CM2_562AD3_M02_PH",
            }
          )}`}
          label="CM2_562AD3_M02_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "562AD3M02",
          }}
        />
      </div>
      <div className="position-absolute single-text-50 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Water",
          }}
        />
      </div>
      <div className="position-absolute single-text-51 ">
        <div className="box-1"></div>
      </div>
      <div className="single-text-52 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "RESTART TIME",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562MD3_FBAI01",
            useClass: "greenTxt mb-1 ",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-53 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562BL1_RUN",
              healthyLabel: "CM2_562BL1_PH",
            }
          )}`}
          label="CM2_562BL1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "562BL1",
          }}
        />
      </div>
      <div className="single-text-54 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "562MD3",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562MD3_II",
            useClass: "greenTxt mb-1 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-55 position-absolute text-center">
        <BlackContainer
          data={{
            label: "CM2_562LQ5_PT1",
            useClass: "greenTxt mb-1 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562LQ5_TE2",
            useClass: "greenTxt mb-1 ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-56 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "562MD4",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_562MD4_II",
            useClass: "greenTxt mb-1 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-57 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562LQ9_H01_RUN",
              healthyLabel: "CM2_562LQ9_H01_PH",
            }
          )}`}
          label="CM2_562LQ9_H01_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "562LQ9",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H01",
          }}
        />
      </div>
      <div className="single-text-58 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "562LQ9",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "H02",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM2_562LQ9_H02_RUN",
              healthyLabel: "CM2_562LQ9_H02_PH",
            }
          )}`}
          label="CM2_562LQ9_H02_RUN"
        />
      </div>

      <div className="yellowline-Vr position-absolute line-1"></div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr upArrow position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Vr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Vr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Vr position-absolute line-42"></div>
      <div className="yellowline-Vr upArrow position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Vr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Vr position-absolute line-48"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-49"></div>
      <div className="yellowline-Vr position-absolute line-50"></div>
      <div className="yellowline-Hr position-absolute line-51"></div>
      <div className="yellowline-Vr position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Hr position-absolute line-54"></div>
      <div className="yellowline-Vr position-absolute line-55"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-56"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-57"></div>
      <div className="yellowline-Vr position-absolute line-58"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-59"></div>
      <div className="yellowline-Vr position-absolute line-60"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-61"></div>
      <div className="yellowline-Hr position-absolute line-62"></div>
      <div className="yellowline-Vr position-absolute line-63"></div>
      <div className="yellowline-Vr position-absolute line-64"></div>
      <div className="yellowline-Vr position-absolute line-65"></div>
      <div className="yellowline-Hr position-absolute line-66"></div>
      <div className="yellowline-Hr position-absolute line-67"></div>
      <div className="yellowline-Hr position-absolute line-68"></div>
      <div className="yellowline-Hr position-absolute line-69"></div>
      <div className="yellowline-Hr position-absolute line-70"></div>
      <div className="yellowline-Vr position-absolute line-71"></div>
      <div className="yellowline-Vr position-absolute line-72"></div>
      <div className="yellowline-Hr position-absolute line-73"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-74"></div>
      <div className="yellowline-Hr position-absolute line-75"></div>
      <div className="yellowline-Vr position-absolute line-76"></div>
      <div className="yellowline-Vr position-absolute line-77"></div>
      <div className="yellowline-Vr position-absolute line-78"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-79"></div>
      <div className="yellowline-Hr position-absolute line-80"></div>
      <div className="yellowline-Vr position-absolute line-81"></div>
      <div className="yellowline-Vr position-absolute line-82"></div>
      <div className="yellowline-Hr position-absolute line-83"></div>
    </div>
  );
};
