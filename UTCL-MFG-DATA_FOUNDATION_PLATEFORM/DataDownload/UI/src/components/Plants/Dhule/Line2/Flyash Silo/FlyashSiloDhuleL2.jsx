import { TextContainerWithWrapWord, MimicCaret, BlackContainer, TransparentBoxWithGate, MotorCircleDigitalTag, PipeWithCircles } from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const FlyashSiloDhuleL2 = () => {
  return (
    <div className="FlyashSiloDhuleL2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
          <div className="trapezoid"></div>
          <div className="position-absolute single-text-2">
            <div className="dashedHr-Pipe mt-1 position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-5"></div>
          </div>
          <div className="position-absolute single-text-6">
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-5"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "MH2_K32BFA_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1"></div>
            <div className="d-flex text-1">
              <div className={`circle-img c-grey-img-2`}></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "MH2_K32RAA",
                }}
              />
            </div>
            <div className="yellowline-Vr  downArrow line-1"></div>
            <div className="yellowline-Hr line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-3">
        <div className="containerImage text-center ml-2">
          <MotorCircleDigitalTag className={`dot digital-tag pt-2 mr-2 ml-auto ${useColorStatus("MH 2_K22BI1_LSH")}`} label="MH 2_K22BI1_LSH" text="L" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "K22BI1",
            }}
          />
          <BlackContainer
            data={{
              label: "MH2_K22BI1_WI",
              useClass: "greenTxt mt-2 ml-3",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K32FNA_RUN", healthyLabel: "MH2_K32FNA_PH" })}`}
            label="MH2_K32FNA_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MH2_K32FNA",
          }}
        />
      </div>

      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-5" />

      <div className="position-absolute single-text-6 text-center">
        <BlackContainer
          data={{
            label: "MH2_K22SI1_LT",
            useClass: "greenTxt mb-3",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "FLYASH SILO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "K22SI1",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVC_OLS", closeLabel: "MH2_K22BVC_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVC_OLS", closeLabel: "MH2_K22BVC_CLS" })}`}
            label="MH2_K22BVC_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BVC",
            }}
          />
        </div>
        <div className="ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVB_OLS", closeLabel: "MH2_K22BVB_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVB_OLS", closeLabel: "MH2_K22BVB_CLS" })}`}
            label="MH2_K22BVB_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BVB",
            }}
          />
        </div>
        <div className="ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVA_OLS", closeLabel: "MH2_K22BVA_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVA_OLS", closeLabel: "MH2_K22BVA_CLS" })}`}
            label="MH2_K22BVA_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BVA",
            }}
          />
        </div>
        <div className="ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV9_OLS", closeLabel: "MH2_K22BV9_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV9_OLS", closeLabel: "MH2_K22BV9_CLS" })}`}
            label="MH2_K22BV9_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BV9",
            }}
          />
        </div>
        <div className="ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV8_OLS", closeLabel: "MH2_K22BV8_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV8_OLS", closeLabel: "MH2_K22BV8_CLS" })}`}
            label="MH2_K22BV8_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BVB",
            }}
          />
        </div>
        <div className="ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV7_OLS", closeLabel: "MH2_K22BV7_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV7_OLS", closeLabel: "MH2_K22BV7_CLS" })}`}
            label="MH2_K22BV7_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV7",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV6_OLS", closeLabel: "MH2_K22BV6_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV6_OLS", closeLabel: "MH2_K22BV6_CLS" })}`}
            label="MH2_K22BV6_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BV6",
            }}
          />
        </div>
        <div className="ml-1">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV5_OLS", closeLabel: "MH2_K22BV5_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV5_OLS", closeLabel: "MH2_K22BV5_CLS" })}`}
            label="MH2_K22BV5_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BV5",
            }}
          />
        </div>
        <div className="ml-2">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV1_OLS", closeLabel: "MH2_K22BV1_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BV1_OLS", closeLabel: "MH2_K22BV1_CLS" })}`}
            label="MH2_K22BV1_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "K22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BV1",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-9 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22SG4",
            }}
          />
          <MotorCircleDigitalTag
            className={`square mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22SG4_Open", closeLabel: "MH2_K22SG4_Close" })}`}
            label="MH2_K22SG4_Open"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "MH2_K22CG4_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2"
            squareProps={{
              tagLabel: "MH2_K22CG4_Open",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22CG4_Open", closeLabel: "MH2_K22CG4_Close" })}`,
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "K22CG4",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "MH2_K22CG3_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K22SG3",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K22SG6",
          }}
        />
        <MotorCircleDigitalTag
          className={`square mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22SG6_Open", closeLabel: "MH2_K22SG6_Close" })}`}
          label="MH2_K22SG6_Open"
        />
      </div>
      <div className="position-absolute single-text-11">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "MH2_K22CG1_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "K22SG1",
            }}
          />
        </div>
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto mt-2"
          squareProps={{
            tagLabel: "MH2_K22CG1_Open",
            squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22CG1_Open", closeLabel: "MH2_K22CG1_Close" })}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2",
            label: "K22CG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2"
            squareProps={{
              tagLabel: "MH2_K22CG8_Open",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22CG8_Open", closeLabel: "MH2_K22CG8_Close" })}`,
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "K22CG8",
            }}
          />
        </div>
        <div className="mt-2">
          <MotorCircleDigitalTag
            className={`square mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22SG8_Open", closeLabel: "MH2_K22SG8_Close" })}`}
            label="MH2_K22SG8_Open"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K22SG8",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-13 d-flex">
        <div>
          <div className="box-1 p-2 bg-secondary">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Force Down",
              }}
            />

            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "MH2_K22CG8_SPSPA",
                  useClass: "greenTxt mt-1 ml-3",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "PV",
                }}
              />
              <BlackContainer
                data={{
                  label: "MH2_K22CG8_ZT",
                  useClass: "greenTxt mt-1 ml-3",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "OUT",
                }}
              />
              <BlackContainer
                data={{
                  label: "MH2_K22CG8_SPSPM",
                  useClass: "greenTxt mt-1 ml-3",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "MH2_K22CG8_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="box-1 p-2 bg-secondary">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Force Down",
              }}
            />

            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "MH2_K22CG7_SPSPA",
                  useClass: "greenTxt mt-1 ml-3",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "PV",
                }}
              />
              <BlackContainer
                data={{
                  label: "MH2_K22CG7_ZT",
                  useClass: "greenTxt mt-1 ml-3",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            {/* <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "OUT",
                }}
              />
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt mt-1 ml-3",
                  unit: "NA",
                  unitColor: "unitColor",
                }}
              />
            </div> */}
          </div>
          <BlackContainer
            data={{
              label: "MH2_K22CG7_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-14" />
      <div className="pipe dotted-pipe position-absolute single-text-15"> </div>
      <div className="position-absolute single-text-16 d-flex">
        <BlackContainer
          data={{
            label: "MH2_K22CP1_AR_PT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "K22BE1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22BE1M01_RUN", healthyLabel: "MH2_K22BE1M01_PH" })}`}
            label="MH2_K22BE1M01_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22BE1M02_RUN", healthyLabel: "MH2_K22BE1M02_PH" })}`}
            label="MH2_K22BE1M02_RUN"
            text="M"
          />
        </div>
        <BlackContainer
          data={{
            label: "MH2_K22BE1M01II_B",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <MotorCircleDigitalTag className={`dot ml-1 mt-1 digital-tag ${useColorStatus("MH2_K22BE1_BSS2")}`} label="MH2_K22BE1_BSS2" text="B" />
        <MotorCircleDigitalTag className={`dot ml-1 mt-2 digital-tag ${useColorStatus("MH2_K22BE1_BSS2_ALM")}`} label="MH2_K22BE1_BSS2_ALM" text="A" />
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <MotorCircleDigitalTag className={`dot ml-1 mt-1 digital-tag ${useColorStatus("MH2_K22BE1_BSS_X91")}`} label="MH2_K22BE1_BSS_X91" text="X" />
        <MotorCircleDigitalTag className={`dot ml-1 mt-1 digital-tag ${useColorStatus("MH2_K22BE1_BSS_X92")}`} label="MH2_K22BE1_BSS_X92" text="X" />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "MH2_K32BFB_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "MH2_K32BFB_DPT",
                useClass: "greenTxt mt-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1"></div>
            <div className="d-flex text-1">
              <div className={`circle-img c-grey-img-2`}></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "K32RAB",
                }}
              />
            </div>
            <div className="yellowline-Vr  downArrow line-1"></div>
            <div className="yellowline-Hr line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K32FNB_RUN", healthyLabel: "MH2_K32FNB_PH" })}`}
            label="MH2_K32FNB_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K32FNB",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "MH2_K22BF5_PT",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <div className="squareplustri d-flex align-items-end justify-content-center mt-1"></div>
            <div className="d-flex text-1">
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("MH2_K22RA5")}`} label="MH2_K22RA5_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "K22RA5",
                }}
              />
            </div>
            <div className="yellowline-Vr  downArrow line-1"></div>
            <div className="yellowline-Hr line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "Compressor 1",
            }}
          />
          <BlackContainer
            data={{
              label: "MH2_K22CP1_PT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-2",
              label: "Compressor 2",
            }}
          />
          <BlackContainer
            data={{
              label: "MH2_K22CP2_PT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-2",
              label: "Compressor 3",
            }}
          />
          <BlackContainer
            data={{
              label: "MH2_K22CP3_PT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag className={`dot ml-1 mt-1 digital-tag ${useColorStatus("MH2_K22BE1_BSS3")}`} label="MH2_K22BE1_BSS3" text="B" />
            <MotorCircleDigitalTag className={`dot ml-1 mt-2 digital-tag ${useColorStatus("MH2_K22BE1_BSS3_ALM")}`} label="MH2_K22BE1_BSS3_ALM" text="A" />
          </div>
          <div className="ml-5">
            <MotorCircleDigitalTag className={`dot ml-1 mt-1 digital-tag ${useColorStatus("MH2_K22BE1_BSS4")}`} label="MH2_K22BE1_BSS4" text="B" />
            <MotorCircleDigitalTag className={`dot ml-1 mt-2 digital-tag ${useColorStatus("MH2_K22BE1_BSS4_ALM")}`} label="MH2_K22BE1_BSS4_ALM" text="A" />
          </div>
        </div>
        <MotorCircleDigitalTag className={`dot ml-1 mt-1 digital-tag ${useColorStatus("MH2_K22BE1_LS_X91")}`} label="MH2_K22BE1_LS_X91" text="X" />
        <MotorCircleDigitalTag className={`dot ml-1 mt-2 digital-tag ${useColorStatus("MH2_K22BE1_LS_X92")}`} label="MH2_K22BE1_LS_X92" text="X" />
      </div>
      <div className="position-absolute single-text-24">
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "K22SG9",
            }}
          />
          <MotorCircleDigitalTag
            className={`square mt-2 mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22SG9_Open", closeLabel: "MH2_K22SG9_Close" })}`}
            label="MH2_K22SG9_Open"
          />
        </div>
        <div className="mt-2">
          <MotorCircleDigitalTag
            className={`square square1 mx-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22SM1_RUN", healthyLabel: "MH2_K22SM1_PH" })}`}
            label="MH2_K22SM1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "K22SM1",
            }}
          />
        </div>

        {/* <MotorCircleDigitalTag className={`dot digital-tag mt-2 ml-2 ${useColorStatus("PP_611BI1_LS")}`} label="PP_611BI1_LS" text="X" /> */}
      </div>
      <div className="position-absolute single-text-25 containerImage">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto pt-2",
            label: "K32DBA",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 containerImage">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto pt-2",
            label: "K32DBC",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-27" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-28" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-29" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-30" />
      <div className="position-absolute single-text-31 containerImage">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto pt-2",
            label: "K32DBB",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 containerImage">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto pt-2",
            label: "K31JB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32SGD_Open", closeLabel: "MH2_K32SGD_Close" })}`}
            label="MH2_K32SGD_Open"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K32SGD",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32SGA_Open", closeLabel: "MH2_K32SGA_Close" })}`}
            label="MH2_K32SGA_Open"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K32SGA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <MotorCircleDigitalTag
          className={`square mx-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CM_K31FN3_RUN", healthyLabel: "CM_K31FN3_PH" })}`}
          label="CM_K31FN3_RUN"
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32SGB_Open", closeLabel: "MH2_K32SGB_Close" })}`}
            label="MH2_K32SGB_Open"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K32SGB",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square mx-auto digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32SGC_Open", closeLabel: "MH2_K32SGC_Close" })}`}
            label="MH2_K32SGC_Open"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K32SGC",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div>
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2"
            squareProps={{
              tagLabel: "CM_K31SG1_M01_OLS",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CM_K31SG1_M01_OLS", closeLabel: "CM_K31SG1_M01_CLS" })}`,
            }}
          />
        </div>
        <div>
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2"
            squareProps={{
              tagLabel: "CM_K31CG2_OLS",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CM_K31CG2_OLS", closeLabel: "CM_K31CG2_CLS" })}`,
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K31CG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVF_OLS", closeLabel: "MH2_K32BVF_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVF_OLS", closeLabel: "MH2_K32BVF_CLS" })}`}
          label="MH2_K32BVF_OLS"
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVE_OLS", closeLabel: "MH2_K32BVE_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVE_OLS", closeLabel: "MH2_K32BVE_CLS" })}`}
          label="MH2_K32BVE_OLS"
        />

        <div className="d-flex ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1",
              label: "K32BVD",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVD_OLS", closeLabel: "MH2_K32BVD_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVD_OLS", closeLabel: "MH2_K32BVD_CLS" })}`}
            label="MH2_K32BVD_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K32FNH",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K32FNH_RUN", healthyLabel: "MH2_K32FNH_PH" })} ml-2`}
            label="MH2_K32FNH_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K32FNG_RUN", healthyLabel: "MH2_K32FNG_PH" })}`}
            label="MH2_K32FNG_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "K32FNG",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "MH2_K22HR1_TE",
              useClass: "greenTxt  mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mx-auto mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22HR1_RUN", healthyLabel: "MH2_K22HR1_PH" })}`}
              label="MH2_K22HR1_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2 mt-2",
                label: "K22HR1",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "MH2_K22BL2_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22BL2",
            }}
          />
          <BlackContainer
            data={{
              label: "MH2_K22BL1_PT",
              useClass: "greenTxt  mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22BL1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "MH2_K22BL3_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22BL3",
            }}
          />
          <BlackContainer
            data={{
              label: "MH2_K22BL4_PT",
              useClass: "greenTxt  mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22BL4",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "MH2_K22HR2_TE",
              useClass: "greenTxt  mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "K22HR2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22FN9_RUN", healthyLabel: "MH2_K22FN9_PH" })}`}
            label="MH2_K22FN9_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22FN9",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22FNA_RUN", healthyLabel: "MH2_K22FNA_PH" })}`}
            label="MH2_K22FNA_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K22FNA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22FN6_RUN", healthyLabel: "MH2_K22FN6_PH" })}`}
          label="MH2_K22FN6_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "K22FN6",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "MH2_K22FN8",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K22FN8_RUN", healthyLabel: "MH2_K22FN8_PH" })}`}
          label="MH2_K22FN8_RUN"
        />
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CM_K31FN3_RUN", healthyLabel: "CM_K31FN3_PH" })}`}
            label="CM_K31FN3_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K31FN3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CM_K31FN4_RUN", healthyLabel: "CM_K31FN4_PH" })}`}
            label="CM_K31FN4_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K31FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex flex-column">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K22AS4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K22AS3",
            }}
          />
        </div>
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K22AS5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K22AS2",
            }}
          />
        </div>
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K22AS6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ",
              label: "K22AS1",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-45",
          label: "K22AS7",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-46",
          label: "K22ASA",
        }}
      />
      <div className="position-absolute single-text-47 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "Existing silo",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "K31BI1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-48">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "K32BVB",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVB_OLS", closeLabel: "MH2_K32BVB_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K32BVB_OLS", closeLabel: "MH2_K32BVB_CLS" })}`}
            label="MH2_K32BVB_OLS"
          />
        </div>
        <div className="text-48">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "MH2_K32FND_RUN", healthyLabel: "MH2_K32FND_PH" })} ml-2`}
            label="MH2_K32FND_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K32FND",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 text-center">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVD_OLS", closeLabel: "MH2_K22BVD_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "MH2_K22BVD_OLS", closeLabel: "MH2_K22BVD_CLS" })}`}
          label="MH2_K22BVD_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K22BVD",
          }}
        />
      </div>
      <MotorCircleDigitalTag className={`dot ml-1 mt-1  digital-tag position-absolute single-text-50 ${useColorStatus("MH2_K22SI1_LS")}`} label="MH2_K22SI1_LS" text="L" />

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Hr  position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Hr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr upArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr  position-absolute line-36"></div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Hr  position-absolute line-38"></div>
      <div className="yellowline-Vr upArrow position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Vr upArrow position-absolute line-41"></div>
      <div className="yellowline-Vr upArrow position-absolute line-42"></div>
      <div className="yellowline-Vr upArrow position-absolute line-43"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-44"></div>
      <div className="yellowline-Vr upArrow position-absolute line-45"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-46"></div>
    </div>
  );
};
