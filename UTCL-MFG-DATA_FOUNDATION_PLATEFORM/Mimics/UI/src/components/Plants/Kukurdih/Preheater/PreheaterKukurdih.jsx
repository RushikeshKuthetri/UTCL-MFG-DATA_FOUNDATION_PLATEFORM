import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";

import {
  useMotorTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useImgColorStatusForNewPlantScreen,
  useGateTagsColorStatusForNewPlantScreens,
} from "../../../../utils";
export const PreheaterKukurdih = () => {
  return (
    <div className="Preheter-kukurdih w-100 h-100 position-relative">
      <div className="position-absolute d-flex single-text-1">
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1A_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1A_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1A_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1A_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1B_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1B_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1B_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN1B_TT2",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-2">
        <div className="triangle-with-squares text-center">
          {" "}
          <BlackContainer
            data={{
              label: "PH_441PH1_CN3_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN3_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN3_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN3_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares mt-4 text-center">
          <BlackContainer
            data={{
              label: "PH_441PH1_CN4_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN4_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN4_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN4_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-3 ">
        <div className="triangle-with-squares text-center">
          {" "}
          <BlackContainer
            data={{
              label: "PH_441PH1_CN5_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN5_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN5_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN5_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares mt-4 text-center">
          <BlackContainer
            data={{
              label: "PH_441PH1_CN6_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN6_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN6_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN6_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-4">
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1A_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1A_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1A_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1A_TT2",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1B_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1B_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1B_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN1B_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-5">
        <div className="triangle-with-squares mt-4 text-center">
          {" "}
          <BlackContainer
            data={{
              label: "PH_441PH2_CN4_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN4_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN4_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN4_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center ">
          <BlackContainer
            data={{
              label: "PH_441PH2_CN3_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN3_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN3_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN3_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-6">
        <div className="triangle-with-squares mt-4 text-center">
          {" "}
          <BlackContainer
            data={{
              label: "PH_441PH2_CN6_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN6_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN6_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN6_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          {" "}
          <BlackContainer
            data={{
              label: "PH_441PH2_CN5_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN5_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN5_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN5_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-7">
        <div className="triangle-with-squares text-center">
          {" "}
          <BlackContainer
            data={{
              label: "PH_441PH1_CN2_PT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN2_TT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN2_PT1",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_CN2_TT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          {" "}
          <BlackContainer
            data={{
              label: "PH_441PH2_CN2_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN2_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN2_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_CN2_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-8 img-107"></div>

      <div className="position-absolute single-text-9 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "PC1 ANALYZER",
          }}
        />
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "CO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_451AM1_CO",
              useClass: "greenTxt",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "NO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_451AM1_NOX",
              useClass: "greenTxt",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_451AM1_O2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "PC2 ANALYZER",
          }}
        />
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "CO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_451AM2_CO",
              useClass: "greenTxt",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "NO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_451AM2_NOX",
              useClass: "greenTxt",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_451AM2_O2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "KILN I/L ANALYZER",
          }}
        />
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "CO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461AM1_CO",
              useClass: "greenTxt",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "NO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461AM1_NOX",
              useClass: "greenTxt",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461AM1_O2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-12 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PH O/L ANALYZER",
          }}
        />
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "CO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441AM1_CO",
              useClass: "greenTxt",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441AM1_O2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-13 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "PC LNOX TEMP",
          }}
        />
        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_451PR1_TT4",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_451PR1_TT5",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_451PR1_TT6",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_451PR1_TT7",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-14 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TAD DAMPER",
          }}
        />
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "LD1",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461LD1_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "LD2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461LD2_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "LD3",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461LD3_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "LD4",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461LD4_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-15 box-1 d-flex flex-column justify-content-start align-items-start p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "KILN FEED PARAMETERS",
          }}
        />
        <div className="d-flex">
          <div className="mr-3">
            <div className="d-flex mb-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "COLLECTION BIN",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_411BI1_WT",
                  useClass: "greenTxt",
                  unit: "T",
                  unitColor: "unitColor",
                }}
              />
            </div>

            <div className="d-flex mb-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "MIXING BIN",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_431BI1_WT",
                  useClass: "greenTxt",
                  unit: "T",
                  unitColor: "unitColor",
                }}
              />
            </div>

            <div className="d-flex mb-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "TOTAL KILIN FEED",
                }}
              />
              <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>

          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1 bg-light",
                label: "KILN FEED TO RECIRCULATION",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1 bg-light",
                label: "KILN FEED TO PREHETER",
              }}
            />
          </div>
        </div>

        <div className="d-flex">
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "431DQ1",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PH_431DQ1_RUN", healthyLabel: "PH_431DQ1_PH" }
                )} mb-1`}
                label="PH_431DQ1_RUN"
              />
              {/* <div className="bg-light px-1">V</div> */}
            </div>
            <BlackContainer
              data={{
                label: "PH_431DQ1_FR",
                useClass: "greenTxt ",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "431DQ2",
              }}
            />
            <div className="mb-1 d-flex">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PH_431DQ2_RUN", healthyLabel: "PH_431DQ2_PH" }
                )} mr-1`}
                label="PH_431DQ2_RUN"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PH_431BE1_M1M2_RUN",
                    healthyLabel: "PH_431BE1_M1M2_PH",
                  }
                )}`}
                label="PH_431BE1_M1M2_RUN"
              />
              {/* <div className="bg-light px-1">V</div> */}
            </div>

            <BlackContainer
              data={{
                label: "PH_431DQ2_FR",
                useClass: "greenTxt ",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "431BE1",
              }}
            />

            <BlackContainer
              data={{
                label: "PH_431BE1_ITA_M1",
                useClass: "greenTxt mb-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "PH_431BE1_ITA_M2",
                useClass: "greenTxt ",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "411BE1",
              }}
            />

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "PH_411BE1_M01_RUN",
                  healthyLabel: "PH_411BE1_M01_PH",
                }
              )} mb-1`}
              label="PH_411BE1_M01_RUN"
            />

            <BlackContainer
              data={{
                label: "PH_411BE1_II",
                useClass: "greenTxt ",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "BLENDING SILO",
              }}
            />

            <BlackContainer
              data={{
                label: "PH_391SB1_LT",
                useClass: "greenTxt mb-1",
                unit: "mtr",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "SILO AERATION",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-16 box-1 d-flex  justify-content-center align-items-center p-1">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "481DQ1",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_481BI1_WT",
              useClass: "greenTxt mb-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mb-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KL_481DQ1_RUN", healthyLabel: "KL_481DQ1_PH" }
              )} mr-1`}
              label="KL_481DQ1_RUN"
            />
            {/* <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light",
                label: "V",
              }}
            /> */}
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KL_481DQ1_SP_PID",
                useClass: "greenTxt",
                unit: "THP",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "451DQ1",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_451BI1_WT",
              useClass: "greenTxt mb-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mb-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KL_451DQ1_RUN", healthyLabel: "KL_451DQ1_PH" }
              )} mr-1`}
              label="KL_451DQ1_RUN"
            />{" "}
            {/* <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light",
                label: "V",
              }}
            /> */}
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_SP_PID",
                useClass: "greenTxt",
                unit: "THP",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "STANDBY 451DQ2",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_451BI2_WT",
              useClass: "greenTxt mb-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mb-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KL_451DQ2_RUN", healthyLabel: "KL_451DQ2_PH" }
              )} mr-1`}
              label="KL_451DQ2_RUN"
            />
            {/* <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light",
                label: "V",
              }}
            /> */}
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KL_451DQ2_SP_PID",
                useClass: "greenTxt",
                unit: "THP",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute text-center single-text-17 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 fs-2",
            label: "Booster Water Pump",
          }}
        />

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_441TK1_LT1",
              useClass: "greenTxt mr-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_441TK2_LT1",
              useClass: "greenTxt mr-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
        </div>
      </div>

      <div className="position-absolute single-text-18 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 fs-2 fw-light",
            label: "PH FAN",
          }}
        />
        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_441FN1_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_441FN1_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_441FN1_JI01",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_441FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-19 box-1 d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_421FN1_SP",
              useClass: "greenTxt mr-3",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "PH_421FN1_M01_RUN",
                  healthyLabel: "PH_421FN1_M01_PH",
                }
              )} mx-1`}
              label="PH_421FN1_M01_RUN"
            />
            {/* <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light",
                label: "V",
              }}
            /> */}
          </div>
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_421FN1_SI",
              useClass: "greenTxt mr-3",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light",
              label: "BH FAN",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_421FN1_II",
              useClass: "greenTxt mr-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421FN1_M01",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mb-1">
          <BlackContainer
            data={{
              label: "PH_421FN1_JI01",
              useClass: "greenTxt mr-3",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421BF1_DPT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "BH TRIP CONDITION",
          }}
        />
      </div>

      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeHr position-absolute pipe-20"></div>
      <div className="pipeHr position-absolute pipe-21"></div>
      <div className="pipeVr position-absolute pipe-22"></div>
      <div className="pipeVr position-absolute pipe-23"></div>
      <div className="pipeHr position-absolute pipe-24"></div>

      <div className="pipeVr text-center position-absolute pipe-25">
        <BlackContainer
          data={{
            label: "PH_451PR1_PT2",
            useClass: "greenTxt mt-2 mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_451PR1_PT3",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_451PR1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_451PR1_TT3",
            useClass: "greenTxt mb-3",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_451PR1_PT1",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_451PR1_TT1",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipeVr position-absolute pipe-26"></div>
      <div className="pipeHr position-absolute pipe-27"></div>
      <div className="pipeVr position-absolute pipe-28 d-flex justify-content-center align-items-center">
        WHR BOILER
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute  pipe-29"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_441CV1_RUN", healthyLabel: "PH_441CV1_PH" }
          )}`,
          firstCircleLabel: "PH_441CV1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />

      <div className="pipeVr position-absolute pipe-30"></div>

      <div className="single-text-20 position-absolute">
        <BlackContainer
          data={{
            label: "PH_461KL1_PT1",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT1",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-21 position-absolute">
        <BlackContainer
          data={{
            label: "PH_441PH1_CN5_PT3",
            useClass: "greenTxt mb-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441DG1_ZT",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441DG1_PT1",
            useClass: "greenTxt mb-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441DG1_TT1",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441DG1_PT2",
            useClass: "greenTxt mb-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441DG1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="single-text-22 d-flex position-absolute">
        <div>
          <BlackContainer
            data={{
              label: "KL_461MD2_II",
              useClass: "greenTxt mb-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_461MD1_II",
              useClass: "greenTxt ",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_SPEED_PID",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN POSITION",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_461KT1_ZT1",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="single-text-23 d-flex flex-column position-absolute mb-3">
        <BlackContainer
          data={{
            label: "KL_461KL1_PT2",
            useClass: "greenTxt ",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_461KL1_TT5",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-24 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_441SD2_ZT",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441LD1_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_441LD2_ZT",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441LD3_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_441PH1_PT1",
              useClass: "greenTxt mb-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH2_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_441PH2_PT1",
              useClass: "greenTxt mb-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441PH1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="pipeHr d-flex justify-content-center align-items-start position-absolute single-text-25 pt-2">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "DB16_DBX136_1"
            )} mb-1`}
            text="M"
            label="DB16_DBX136_1"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "DB16_DBX138_1"
            )} mb-1`}
            text="M"
            label="DB16_DBX138_1"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("DB16_DBX140_1")}`}
            text="M"
            label="DB16_DBX140_1"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "DB16_DBW22",
              useClass: "greenTxt mb-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "DB16_DBW20",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "Speed",
            }}
          />

          <BlackContainer
            data={{
              label: "DB16_DBW18",
              useClass: "greenTxt",
              unit: "spm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute text-center single-text-26">
        <BlackContainer
          data={{
            label: "PH_441PH2_CN5_PT3",
            useClass: "greenTxt mb-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex text-center">
          <div className="mr-2">
            <BlackContainer
              data={{
                label: "PH_441DG2_TT1",
                useClass: "greenTxt mb-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_441DG2_PT2",
                useClass: "greenTxt mb-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_461DU1_TT1",
                useClass: "greenTxt mb-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div>
            <BlackContainer
              data={{
                label: "PH_441DG2_ZT",
                useClass: "greenTxt mb-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_441DG2_TT2",
                useClass: "greenTxt mb-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_461DU1_TT2",
                useClass: "greenTxt mb-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-27 d-flex flex-column">
        <BlackContainer
          data={{
            label: "PH_441PH2_CN6_PT3",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441DG2_PT1",
            useClass: "greenTxt ml-3",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>

      {/* <div className="gray-green-red-img red-img position-absolute single-text-28"></div> */}
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-28 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "NA", openLabel: "NA" }
        )}`}
        label="NA"
      />

      <div className="position-absolute single-text-29 d-flex align-items-end">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_461AD2_ZS1"
            )} mr-1`}
            text="Z"
            label="KL_461AD2_ZS1"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")} mr-1`}
            label="NA"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")} mr-1`}
            label="NA"
          />
        </div>

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />

        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_461MD2_M02_RUN",
                healthyLabel: "KL_461MD2_M02_PH",
              }
            )}`}
            label="KL_461MD2_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_461MD2_M03_RUN",
                healthyLabel: "KL_461MD2_M03_PH",
              }
            )}`}
            label="KL_461MD2_M03_RUN"
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "KL_461KL1_TT3",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_461KL1_TV1_PT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1",
            label: "CYCLONE BYPASS",
          }}
        />
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Wind Speed",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_ANEMOMETER",
              useClass: "greenTxt ml-1",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-31">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH1_CN4_LS"
            )} mb-1`}
            text="L"
            label="PH_441PH1_CN4_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH1_CN4_PH"
            )} mb-1`}
            text="P"
            label="PH_441PH1_CN4_PH"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_441PH1_CN4_FS")}`}
            text="L"
            label="PH_441PH1_CN4_FS"
          />
        </div>

        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH2_CN4_FS"
            )} mb-1`}
            text="L"
            label="PH_441PH2_CN4_FS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH2_CN4_PH"
            )} mb-1`}
            text="P"
            label="PH_441PH2_CN4_PH"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_441PH2_CN4_LS")}`}
            text="L"
            label="PH_441PH2_CN4_LS"
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-32">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH1_CN6_FS"
            )} mb-1`}
            text="L"
            label="PH_441PH1_CN6_FS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH1_CN6_PH"
            )} mb-1`}
            text="P"
            label="PH_441PH1_CN6_PH"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_441PH1_CN6_LS")}`}
            text="L"
            label="PH_441PH1_CN6_LS"
          />
        </div>

        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH2_CN6_FS"
            )} mb-1`}
            text="L"
            label="PH_441PH2_CN6_FS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH2_CN6_PH"
            )} mb-1`}
            text="P"
            label="PH_441PH2_CN6_PH"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_441PH2_CN6_LS")}`}
            text="L"
            label="PH_441PH2_CN6_LS"
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-33">
        <div className="mr-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH2_CN5_FS"
            )} mb-1`}
            text="L"
            label="PH_441PH2_CN5_FS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH2_CN5_PH"
            )} mb-1`}
            text="P"
            label="PH_441PH2_CN5_PH"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_441PH2_CN5_LS")}`}
            text="L"
            label="PH_441PH2_CN5_LS"
          />
        </div>

        <BlackContainer
          data={{
            label: "PH_441PH2_CN5_LT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-34">
        <div>
          <BlackContainer
            data={{
              label: "KL_481FN1_SI",
              useClass: "greenTxt mb-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "KL_481FN2_SI",
              useClass: "greenTxt mb-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "KL_481FN2_II",
              useClass: "greenTxt mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "KL_481FN1_II",
              useClass: "greenTxt mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "CL_491SI1_LT1",
              useClass: "greenTxt mb-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_491DB1_RUN", healthyLabel: "CL_491DB1_PH" }
            )} mb-1`}
            label="CL_491DB1_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_491DB2_RUN", healthyLabel: "CL_491DB2_PH" }
            )}`}
            label="CL_491DB2_RUN"
          />
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-35">
        <div className="ml-auto">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH1_CN5_FS"
            )}  mb-1`}
            text="L"
            label="PH_441PH1_CN5_FS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH1_CN5_PH"
            )}  mb-1`}
            text="P"
            label="PH_441PH1_CN5_PH"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_441PH1_CN5_LS"
            )}  mb-1`}
            text="L"
            label="PH_441PH1_CN5_LS"
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_441BQ1_AD_PT1",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "PH_442PH2_CN6_LT",
              useClass: "greenTxt mb-1",
              unit: "%162",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442PH2_CN6_LT",
              useClass: "greenTxt mb-1",
              unit: "%163",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
      </div>

      <div className="position-absolute single-text-36 d-flex flex-column align-items-end text-center">
        <BlackContainer
          data={{
            label: "PH_441PH1_CN6_PT3",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "BARRING MODE",
          }}
        />
        <div className="box-1 p-1 text-center">
          <div className="d-flex mb-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_461KT1_M01_RUN",
                  healthyLabel: "KL_461KT1_M01_PH",
                }
              )} mr-2`}
              label="KL_461KT1_M01_RUN"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_461KT1_M02_RUN",
                  healthyLabel: "KL_461KT1_M02_PH",
                }
              )}`}
              label="KL_461KT1_M02_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light",
              label: "KILN THRUSTER",
            }}
          />
        </div>
      </div>

      <div className="single-text-37 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HYD PUMP RUN",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471RC1_RUN", healthyLabel: "CL_471RC1_PH" }
          )}`}
          label="CL_471RC1_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471RC2_RUN", healthyLabel: "CL_471RC2_PH" }
          )}`}
          label="CL_471RC2_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471RC3_RUN", healthyLabel: "CL_471RC3_PH" }
          )}`}
          label="CL_471RC3_RUN"
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471RC4_RUN", healthyLabel: "CL_471RC4_PH" }
          )}`}
          label="CL_471RC4_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471RC5_RUN", healthyLabel: "CL_471RC5_PH" }
          )}`}
          label="CL_471RC5_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471RC6_RUN", healthyLabel: "CL_471RC6_PH" }
          )}`}
          label="CL_471RC6_RUN"
        />
      </div>

      <div className="pipeVr position-absolute d-flex flex-column single-text-38"></div>
      <div className="pipeVr position-absolute d-flex flex-column single-text-39"></div>

      <div className="pipeVr position-absolute d-flex flex-column single-text-40"></div>
      <div className="pipeVr position-absolute d-flex flex-column single-text-41"></div>
      <div className="yellowline-Vr position-absolute line-1"></div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>

      <div className="position-absolute d-flex single-text-42">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_461AD1_ZS1"
            )} mr-1`}
            label="KL_461AD1_ZS1"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} mr-1`}
            label="NA"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} mr-1`}
            label="NA"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_461MD1_M02_RUN",
                healthyLabel: "KL_461MD1_M02_PH",
              }
            )} mb-1`}
            label="KL_461MD1_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_461MD1_M03_RUN",
                healthyLabel: "KL_461MD1_M03_PH",
              }
            )}`}
            label="KL_461MD1_M03_RUN"
          />
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-43">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461FN1_M01_RUN", healthyLabel: "KL_461FN1_M01_PH" }
          )} ml-4`}
          label="KL_461FN1_M01_RUN"
        />
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
          )} ml-4`}
          label="KL_461FN2_M01_RUN"
        />
      </div>
      <div className="position-absolute single-text-44">
        <div className="dot-square-line d-flex flex-column align-items-center mb-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>

        <BlackContainer
          data={{
            label: "PH_441SD3_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45 dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              openLabel: "NA",
              closeLabel: "NA",
            }
          )}`}
          label="NA"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>

      <div className="position-absolute single-text-46 dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              openLabel: "NA",
              closeLabel: "NA",
            }
          )}`}
          label="NA"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="position-absolute single-text-47 dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              openLabel: "NA",
              closeLabel: "NA",
            }
          )}`}
          label="NA"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="position-absolute single-text-48 dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              openLabel: "NA",
              closeLabel: "NA",
            }
          )}`}
          label="NA"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>

      <div className="position-absolute text-center single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "KILN FEED SYSTEM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "431DG2",
          }}
        />

        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PH_431DG2_OLS",
                closeLabel: "PH_431DG2_CLS",
                healthyLabel: "PH_431DG2_PH",
              }
            )}`}
            label="PH_431DG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="position-absolute text-center single-text-50">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>

        <BlackContainer
          data={{
            label: "PH_441SD1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute text-center d-flex flex-column justify-content-center align-items-center single-text-51">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} ml-1`}
            text="M"
            label="NA"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_441FN1_M02_RUN",
                healthyLabel: "PH_441FN1_M02_PH",
              }
            )} ml-2`}
            label="PH_441FN1_M02_RUN"
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag p-2 ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_441FN1_M01_RUN", healthyLabel: "PH_441FN1_M01_PH" }
          )}`}
          label="PH_441FN1_M01_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "441FN1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441FN1_M01",
            useClass: "greenTxt mt-1 mb-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute text-center single-text-52">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_461FNZ_M01_RUN", healthyLabel: "KL_461FNZ_M01_PH" }
          )}`}
          label="KL_461FNZ_M01_RUN"
        />

        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-53">
        <div className="d-flex align-items-center ">
          <MimicCaret
            parentClass="d-flex tringle-item mr-2 "
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV4_OLS", closeLabel: "KL_481BV4_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV4_OLS", closeLabel: "KL_481BV4_CLS" }
            )}`}
            label="KL_481BV4_OLS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481BL4_RUN", healthyLabel: "KL_481BL4_PH" }
            )}`}
            label="KL_481BL4_RUN"
          />
          {/* <div className="bg-light px-1">V</div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_481BL4_M02_RUN",
                healthyLabel: "KL_481BL4_M02_PH",
              }
            )} ml-2`}
            label="KL_481BL4_M02_RUN"
          />
        </div>
        <div className="d-flex align-items-center ">
          <MimicCaret
            parentClass="d-flex tringle-item mr-2 "
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV3_OLS", closeLabel: "KL_481BV3_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV3_OLS", closeLabel: "KL_481BV3_CLS" }
            )}`}
            label="KL_481BV3_OLS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481BL3_RUN", healthyLabel: "KL_481BL3_PH" }
            )}`}
            label="KL_481BL3_RUN"
          />
          {/* <div className="bg-light px-1">V</div> */}

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_481BL3_M02_RUN",
                healthyLabel: "KL_481BL3_M02_PH",
              }
            )} ml-2`}
            label="KL_481BL3_M02_RUN"
          />
        </div>

        <div className="d-flex  align-items-center">
          <MimicCaret
            parentClass="d-flex tringle-item mr-2 "
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV2A_OLS", closeLabel: "KL_481BV2A_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV2A_OLS", closeLabel: "KL_481BV2A_CLS" }
            )}`}
            label="KL_481BV2A_OLS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481BL2_RUN", healthyLabel: "KL_481BL2_PH" }
            )}`}
            label="KL_481BL2_RUN"
          />
          {/* <div className="bg-light px-1">V</div> */}

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_481BL2_M02_RUN",
                healthyLabel: "KL_481BL2_M02_PH",
              }
            )} ml-2`}
            label="KL_481BL2_M02_RUN"
          />
        </div>
        <div className="d-flex  align-items-center">
          <MimicCaret
            parentClass="d-flex tringle-item mr-2 "
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV7_OLS", closeLabel: "KL_481BV7_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV7_OLS", closeLabel: "KL_481BV7_CLS" }
            )}`}
            label="KL_481BV7_OLS"
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481FN2_RUN", healthyLabel: "KL_481FN2_PH" }
            )}`}
            label="KL_481FN2_RUN"
          />
          {/* <div className="bg-light px-1">V</div> */}
        </div>

        <div className="d-flex align-items-cenetr">
          <MimicCaret
            parentClass="d-flex tringle-item mr-2 "
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV5_OLS", closeLabel: "KL_481BV5_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV5_OLS", closeLabel: "KL_481BV5_CLS" }
            )}`}
            label="KL_481BV5_OLS"
          />
          <MimicCaret
            parentClass="d-flex tringle-item mr-1"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV6_OLS", closeLabel: "KL_481BV6_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "KL_481BV6_OLS", closeLabel: "KL_481BV6_CLS" }
            )}`}
            label="KL_481BV6_OLS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KL_481FN1_RUN", healthyLabel: "KL_481FN1_PH" }
            )}`}
            label="KL_481FN1_RUN"
          />
          {/* <div className="bg-light px-1">V</div> */}
        </div>
      </div>

      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>

      <div className="position-absolute single-text-54 d-flex">
        <div className="mr-2">
          {/* <BlackContainer
            data={{
              label: "RC1_Curr",
              useClass: "greenTxt",
              unit: "A168",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RC1_Curr",
              useClass: "greenTxt ",
              unit: "A169",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RC1_Curr",
              useClass: "greenTxt mb-1",
              unit: "A170",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_461KL1_PT4",
              useClass: "greenTxt mb-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-55 d-flex flex-column">
        <div className="yellowline-Hr rightarrow"></div>
        <div className="yellowline-Hr rightarrow"></div>
        <div className="yellowline-Hr rightarrow"></div>
        <div className="yellowline-Hr rightarrow"></div>
      </div>
      <div className="position-absolute single-text-56 yellowline-Hr rightarrow"></div>
      <div className="gray-img position-absolute single-text-57"></div>

      <div className="pipeHr position-absolute d-flex flex-column single-text-58"></div>
      <div className="pipeHr position-absolute d-flex flex-column single-text-59"></div>

      <div className="pipeHr position-absolute d-flex flex-column single-text-60"></div>
      <div className="pipeVr position-absolute d-flex flex-column single-text-61"></div>

      <div className="pipeHr position-absolute d-flex flex-column single-text-62"></div>
      <div className="pipeVr position-absolute d-flex flex-column single-text-63"></div>

      <div className="position-absolute d-flex flex-column single-text-64">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>

        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-65">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>

        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="d-flex position-absolute single-text-66">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
            { closeLabel: "NA", openLabel: "NA" }
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
            { closeLabel: "NA", openLabel: "NA" }
          )}`}
          label="NA"
        />
      </div>

      <div className="yellowline-Vr downArrow line-16 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-17  position-absolute"></div>
      <div className="yellowline-Vr  line-18  position-absolute"></div>
      <div className="yellowline-Vr  line-19  position-absolute"></div>
      <div className="yellowline-Hr  line-20  position-absolute"></div>
      <div className="yellowline-Hr  line-21  position-absolute"></div>
      <div className="yellowline-Vr  line-22  position-absolute"></div>
      <div className="yellowline-Vr  line-23  position-absolute"></div>
      <div className="yellowline-Hr  line-24  position-absolute"></div>
      <div className="yellowline-Hr  line-25  position-absolute"></div>
      <div className="yellowline-Vr  line-26  position-absolute"></div>
      <div className="yellowline-Vr  line-27  position-absolute"></div>
      <div className="yellowline-Hr rightarrow line-28  position-absolute"></div>
      <div className="yellowline-Hr leftarrow line-29  position-absolute"></div>
      <div className="yellowline-Vr downArrow line-30  position-absolute"></div>

      <div className="yellowline-Vr downArrow line-31  position-absolute"></div>
      <div className="yellowline-Vr line-32  position-absolute"></div>

      <div className="yellowline-Vr line-33  position-absolute"></div>
      <div className="yellowline-Hr rightarrow line-34  position-absolute"></div>
      <div className="yellowline-Hr leftarrow line-35  position-absolute"></div>
      <div className="yellowline-Vr line-36  position-absolute"></div>
      <div className="yellowline-Vr line-37  position-absolute"></div>
      <div className="yellowline-Hr line-38  position-absolute"></div>
      <div className="yellowline-Vr downArrow line-39  position-absolute"></div>
      <div className="yellowline-Vr  line-40  position-absolute"></div>

      <div className="yellowline-Vr  line-41  position-absolute"></div>
      <div className="yellowline-Hr line-42  position-absolute"></div>
      <div className="yellowline-Hr line-43  position-absolute"></div>
      <div className="yellowline-Vr  line-44  position-absolute"></div>
      <div className="yellowline-Vr  line-45  position-absolute"></div>
      <div className="yellowline-Hr line-46  position-absolute"></div>
      <div className="yellowline-Hr line-47  position-absolute"></div>
      <div className="single-text-67 d-flex flex-column position-absolute">
        <BlackContainer
          data={{
            label: "PH_441PH2_CN4_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441PH2_CN6_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-68">
        <BlackContainer
          data={{
            label: "PH_441FN1_PT1",
            useClass: "greenTxt mb-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441FN1_TT1",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441FN1_PT2",
            useClass: "greenTxt mb-1 mr-3",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441FN1_TT2",
            useClass: "greenTxt mb-1 mr-3",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-69">
        <div className="yellowline-Hr rightarrow"></div>
      </div>

      <div className="yellowline-Hr rightarrow line-48  position-absolute"></div>
      <div className="img-96 d-flex position-absolute single-text-70"></div>
      <div className="pipeHr single-text-71"></div>
      <div className="d-flex single-text-72">
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
        <div className="yellowline-Vr"></div>
      </div>
      <BlackContainer
        data={{
          label: "PH_441PHT_PT1",
          useClass: "greenTxt single-text-73",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_461KL1_PT3",
          useClass: "greenTxt single-text-75",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-74 d-flex flex-column position-absolute">
        <BlackContainer
          data={{
            label: "PH_441PH1_CN4_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_441PH1_CN6_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="yellowline-Vr line-49"></div>
      <div className="yellowline-Vr downArrow line-50"></div>
      <div className="yellowline-Vr downArrow line-51"></div>

      <div className="position-absolute d-flex single-text-76">
        <div>
          391AS3 <br /> BLENDING SILO
        </div>
        <div>HOT JUST BIN</div>
      </div>

      <div className="pipeVr position-absolute d-flex single-text-77"></div>
      <div className="pipeVr position-absolute d-flex single-text-78"></div>
      <div className="pipeVr position-absolute d-flex single-text-79"></div>
      <div className="pipeVr position-absolute d-flex single-text-80"></div>
      <BlackContainer
        data={{
          label: "PH_441PH1_CN5_LT",
          useClass: "greenTxt position-absolute single-text-81",
          unit: "%",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-82 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KL_481BL2_SP_PID",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_481BL3_SP_PID",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_481BL4_SP_PID",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-83">
        <div className="d-flex align-items-center ">
          <MotorCircleDigitalTag
            className={`square digital-tag mr-2  ${useColorStatus(
              "KL_GG_ST_INT"
            )} mb-2`}
            label="KL_GG_ST_INT"
          />
          <p className="bg-light">STARTING INT</p>
        </div>
        <div className="d-flex align-items-center ">
          <MotorCircleDigitalTag
            className={`square digital-tag mr-2 ${useColorStatus(
              "KL_GG_OP_INT"
            )}`}
            label="KL_GG_OP_INT"
          />
          <p className="bg-light">OPERATION INT</p>
        </div>
      </div>
      <div className="yellowline-Hr position-absolute rightarrow single-text-84"></div>

      <div className="yellowline-Vr position-absolute single-text-85"></div>
      <div className="yellowline-Hr position-absolute single-text-86"></div>
      <div className="yellowline-Hr position-absolute single-text-87"></div>
      <div className="yellowline-Hr position-absolute single-text-88"></div>
      <div className="yellowline-Vr position-absolute downArrow single-text-89"></div>
      <div className="yellowline-Vr position-absolute downArrow single-text-90"></div>

      <div className="position-absolute d-flex flex-column single-text-91">
        <p>411CV1</p>
        <p>411DG3</p>
      </div>
      <div className="position-absolute d-flex flex-column single-text-92">
        <p>411LD2</p>
        <p>411LD3</p>
      </div>
      <div className="position-absolute d-flex flex-column single-text-93">
        <p>411SD2</p>
        <p className="ml-3">411LD1</p>
      </div>
      <div className="position-absolute d-flex flex-column single-text-94">
        <p>PH_461DU1_TT1</p>
        <p>461FN2</p>
      </div>
      <div className="position-absolute d-flex single-text-95">
        <p>411LD5</p>
        <p>461FNZ</p>
      </div>
      <div className="yellowline-Vr position-absolute single-text-96"></div>

      <div className="position-absolute d-flex single-text-97">
        <p>PH1.1A</p>
        <p>PH1.1B</p>
      </div>

      <div className="position-absolute d-flex single-text-98">
        <p>PH2.1A</p>
        <p>PH2.1B</p>
      </div>

      <div className="position-absolute d-flex single-text-99">
        <p>PH1.3</p>
        <p>PH1</p>
      </div>

      <div className="position-absolute d-flex single-text-100">
        <p>PH2.4</p>
        <p>PH2.3</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-101">
        <p>PH1.4</p>
        <p>PH1.5</p>
      </div>

      <div className="position-absolute d-flex single-text-102">
        <p>PH1.6</p>
        <p>PH2.6</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-103">
        <p>PH2.5</p>
        <p>441GD1</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-104">
        <p>461AD2</p>
        <p>461AD1</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-105">
        <p className="ml-4">461FN1</p>
        <p>461FN2A</p>
        <p className="ml-4">461FN2</p>
      </div>
      <div className="position-absolute single-text-106">
        FUEL DOZING SYSTEM
      </div>

      <div className="yellowline-Vr downArrow position-absolute single-text-107"></div>
      <div className="yellowline-Hr leftarrow position-absolute single-text-108"></div>
      <div className="position-absolute d-flex flex-column single-text-109">
        <p>RM/BH</p>
        <p>COAL MILL</p>
      </div>
    </div>
  );
};
