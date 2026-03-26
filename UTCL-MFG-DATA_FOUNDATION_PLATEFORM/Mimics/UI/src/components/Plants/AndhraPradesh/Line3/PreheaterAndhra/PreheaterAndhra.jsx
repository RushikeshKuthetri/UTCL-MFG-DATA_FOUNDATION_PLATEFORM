import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import {
  useMotorTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useImgColorStatusForNewPlantScreen,
} from "../../../../../utils";

export const PreheaterAndhra = () => {
  return (
    <div className="Preheter-andhra w-100 h-100 position-relative">
      <div className="position-absolute d-flex single-text-1">
        <div className="triangle-with-squares text-center">PH1.1A</div>
        <div className="triangle-with-squares text-center">PH1.1B</div>
      </div>

      <div className="position-absolute d-flex single-text-2">
        <div className="triangle-with-squares text-center">PH1.3</div>
        <div className="triangle-with-squares mt-4 text-center d-flex flex-column justify-content-center align-items-center">
          <div>PH1.4</div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useColorStatus(
              "PH_443PH1_CN4_LS"
            )} mb-1`}
            text="L"
            label="PH_443PH1_CN4_LS"
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-3 ">
        <div className="triangle-with-squares d-flex flex-column justify-content-center align-items-center text-center">
          <div>PH1.5</div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useColorStatus(
              "PH_443PH1_CN5_LS"
            )} mb-1`}
            text="L"
            label="PH_443PH1_CN5_LS"
          />
        </div>
        <div className="triangle-with-squares mt-4 text-center">
          <div className="triangle-with-squares d-flex flex-column justify-content-center align-items-center text-center">
            <div>PH1.6</div>
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-2 ${useColorStatus(
                "PH_443PH1_CN6_LS"
              )} mb-1`}
              text="L"
              label="PH_443PH1_CN6_LS"
            />
          </div>
        </div>
      </div>

      <div className="position-absolute d-flex single-text-4">
        <div className="triangle-with-squares text-center">PH2.1A</div>
        <div className="triangle-with-squares text-center">PH2.1B</div>
      </div>

      <div className="position-absolute d-flex single-text-5">
        <div className="triangle-with-squares d-flex flex-column justify-content-center align-items-center text-center">
          <div>PH2.4</div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useColorStatus(
              "PH_443PH2_CN4_LS"
            )} mb-1`}
            text="L"
            label="PH_443PH2_CN4_LS"
          />
        </div>{" "}
        <div className="triangle-with-squares text-center ">PH2.3</div>
      </div>

      <div className="position-absolute d-flex single-text-6">
        <div className="triangle-with-squares mt-4 d-flex flex-column justify-content-center align-items-center text-center">
          <div>PH2.6</div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useColorStatus(
              "PH_443PH2_CN6_LS"
            )} mb-1`}
            text="L"
            label="PH_443PH2_CN6_LS"
          />
        </div>
        <div className="triangle-with-squares d-flex flex-column justify-content-center align-items-center text-center">
          <div>PH2.5</div>
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useColorStatus(
              "PH_443PH2_CN5_LS"
            )} mb-1`}
            text="L"
            label="PH_443PH2_CN5_LS"
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-7">
        <div className="triangle-with-squares text-center">PH1.2</div>
        <div className="triangle-with-squares text-center">PH2.2</div>
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
              label: "PH_453AM1_CO",
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
              label: "PH_453AM1_NOX",
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
              label: "PH_453AM1_O2",
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
              label: "PH_453AM2_CO",
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
              label: "NO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_453AM2_NOX",
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
              label: "PH_453AM2_O2",
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
              label: "PH_463AM1_CO",
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
              label: "PH_463AM1_NOX",
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
              label: "PH_463AM1_O2",
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
            useClass: "text-dark mb-1",
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
              label: "PH_443AM1_CO",
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
              label: "PH_443AM1_O2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-15 box-1 d-flex flex-column justify-content-center align-items-center p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "KILN FEED PARAMETERS",
          }}
        />
        <div className="d-flex justify-content-between">
          <div className="mr-1">
            <div className="d-flex justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "TOTAL KILN FEED",
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "KILN FEED CORIOLIS 433DQ1",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_433DQ1_FR",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "KILN FEED CORIOLIS 433DQ2",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_433DQ2_FR",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "COLLECTION BIN",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_413BI1_WT",
                  useClass: "greenTxt",
                  unit: "T",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "MIXING BIN",
                }}
              />
              <BlackContainer
                data={{
                  label: "PH_433BI1_WT",
                  useClass: "greenTxt",
                  unit: "T",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>

          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "433BE1.MO1",
              }}
            />
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-1 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PH_433BE1_M1M2_RUN",
                    healthyLabel: "PH_433BE1_M1M2_PH",
                  }
                )}`}
                label="PH_433BE1_M1M2_RUN"
              />
              <BlackContainer
                data={{
                  label: "PH_433BE1_I",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "433BE1.MO2",
              }}
            />
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-1 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PH_433BE1_M3M4_RUN",
                    healthyLabel: "PH_433BE1_M3M4_PH",
                  }
                )}`}
                label="PH_433BE1_M3M4_RUN"
              />

              <BlackContainer
                data={{
                  label: "PH_433BE1_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "413BE1",
              }}
            />
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-1 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "PH_413BE1_M01_RUN",
                    healthyLabel: "PH_413BE1_M01_PH",
                  }
                )}`}
                label="PH_413BE1_M01_RUN"
              />

              <BlackContainer
                data={{
                  label: "PH_413BE1_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>

          <div className="mr-1">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "KILN FEED TO RECIRCULATION",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "KILN FEED TO PREHETER",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "CLINKERIZATION PROCESS PARAM",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "COAL CONSUMPTION",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "DEISEL FIRING",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 mr-1",
                  label: "CLINKER PRODUCTION",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-18 box-1 d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SP",
            }}
          />
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
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "A",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443FN1_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-19 box-1 d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "BH FAN",
          }}
        />

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag mr-2 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_423FN1_M01_RUN",
                healthyLabel: "PH_423FN1_M01_PH",
              }
            )} mx-1`}
            label="PH_423FN1_M01_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light",
              label: "V",
            }}
          />
        </div>

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421FN1_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423FN1_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "KW",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
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

      <div className="pipeVr text-center d-flex flex-column justify-content-center align-item-center position-absolute pipe-25"></div>
      <div className="pipeVr text-cenetr d-flex justify-content-center akign-items-center position-absolute pipe-26">
        HOT GAS
      </div>
      <div className="pipeHr position-absolute pipe-27"></div>
      <div className="pipeVr position-absolute pipe-28 d-flex justify-content-center align-items-center">
        WHR BOILER
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute  pipe-29"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_443CV1_RUN", healthyLabel: "PH_443CV1_PH" }
          )}`,
          firstCircleLabel: "PH_443CV1_RUN",
          // firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />

      <div className="pipeVr position-absolute pipe-30"></div>

      <div className="single-text-20 d-flex position-absolute">
        <div>
          <BlackContainer
            data={{
              label: "PH_463LD1_ZT",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_463LD2_ZT",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_463LD3_ZT",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_463LD4_ZT",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_453PR1_TT7",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex flex-column justify-content-end align-items-end">
          <BlackContainer
            data={{
              label: "PH_443DG2_TT",
              useClass: "greenTxt mb-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443DG2_ZT",
              useClass: "greenTxt mb-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_453PR1_TT5",
              useClass: "greenTxt mb-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="single-text-21 d-flex flex-column position-absolute">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN5_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN5_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN5_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN5_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443DG1_PT",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443DG1_TT",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443DG1_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="single-text-22 d-flex position-absolute">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN SP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN RPM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN CURRENT",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-24 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PHT_PT1",
              useClass: "greenTxt mb-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_PT1",
              useClass: "greenTxt mb-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="pipeHr d-flex flex-column justify-content-center align-items-center position-absolute single-text-25 pt-2">
        <div>KILN FIRING</div>
        <div className="d-flex align-items-center">
          <div className="mr-1">473CG1</div>
          <div className="dot grey-color mr-1">M</div>
          <div className="mr-1">473RC1</div>
          <div className="dot grey-color ">M</div>
        </div>
      </div>

      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-28 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "NA", openLabel: "NA" }
        )}`}
        label="NA"
      />

      <div className="position-absolute single-text-29 d-flex align-items-end">
        <BlackContainer
          data={{
            label: "PH_463DU1_TT1",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light p-1 position-absolute single-text-30",
          label: "CYCLONE BYPASS",
        }}
      />

      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "PH_443PH2_CN5_PT1",
            useClass: "greenTxt mt-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_443PH2_CN5_TT1",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-36  align-items-end text-center">
        <BlackContainer
          data={{
            label: "PH_443FVK_PT",
            useClass: "greenTxt ",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443FVL_PT",
            useClass: "greenTxt mt-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
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
      <div className="yellowline-Hr d-flex justify-content-end align-items-center position-absolute  line-6">
        <div className="dot grey-color">M</div>
      </div>
      <div className="yellowline-Hr d-flex justify-content-start align-items-center position-absolute line-7">
        <div className="dot grey-color">M</div>
      </div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>

      <div className="position-absolute d-flex single-text-42">
        <div className="dot grey-color">M</div>
        <div className="dot grey-color">M</div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-43">
        <MotorCircleDigitalTag
          className={`line-circle digital-tagg ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )} ml-4`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tagg ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tagg ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )} ml-4`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-44">
        <div className="dot-square-line d-flex flex-column align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_443SD3_RUN", healthyLabel: "PH_443SD3_PH" }
            )}`}
            label="PH_443SD3_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "443SD3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "443SD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-45 dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_443SD2_RUN", healthyLabel: "PH_443SD2_PH" }
          )}`}
          label="PH_443SD2_RUN"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>

      <div className="position-absolute single-text-46">
        <div className=" dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_443LD1_RUN", healthyLabel: "PH_443LD1_PH" }
            )}`}
            label="PH_443LD1_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>

        <BlackContainer
          data={{
            label: "PH_443LD1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div className="d-flex flex-column align-items-center  dot-square-line ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_443LD2_RUN", healthyLabel: "PH_443LD2_PH" }
            )}`}
            label="PH_443LD2_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "443LD2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-48 dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_443LD3_RUN", healthyLabel: "PH_443LD3_PH" }
          )}`}
          label="PH_443LD3_RUN"
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
      </div>

      <div className="position-absolute text-center single-text-50">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_443SD1_RUN", healthyLabel: "PH_443SD1_PH" }
            )}`}
            label="PH_443SD1_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="position-absolute text-center d-flex flex-column justify-content-center align-items-center single-text-51">
        <MotorCircleDigitalTag
          className={`dot digital-tagg p-2 ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )}`}
          label="NA"
        />
        <BlackContainer
          data={{
            label: "PH_443FN1_II",
            useClass: "greenTxt mt-1 mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "443FN1",
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-53">
        <div className="d-flex align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tagg mr-1 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <div className="mr-1">483BL4</div>
          <div>JET AIR</div>
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tagg mr-1 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <div className="mr-1">483BL4</div>
        </div>

        <div className="d-flex align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tagg mr-1 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <div>483BL4</div>
        </div>
      </div>

      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>

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
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_463LD3_RUN", healthyLabel: "PH_463LD3_PH" }
            )}`}
            label="PH_463LD3_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>

        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_463LD4_RUN", healthyLabel: "PH_463LD4_PH" }
            )}`}
            label="PH_463LD4_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-65">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_463LD1_RUN", healthyLabel: "PH_463LD1_PH" }
            )}`}
            label="PH_463LD1_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>

        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_463LD2_RUN", healthyLabel: "PH_463LD2_PH" }
            )}`}
            label="PH_463LD2_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="d-flex position-absolute single-text-66">
        <div>
          <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
              { closeLabel: "NA", openLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "443DG1",
            }}
          />
        </div>
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
            label: "PH_443PH2_CN4_PT1",
            useClass: "greenTxt ml-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443PH2_CN4_TT1",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-68">
        <div className="mb-3">START TO START ET</div>

        <BlackContainer
          data={{
            label: "PH_443FN1_PT2",
            useClass: "greenTxt mb-1 mr-3",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443FN1_TT2",
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
        <div className="yellowline-Vr d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="yellowline-Vr d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="yellowline-Vr d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="yellowline-Vr d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>

      <div className="single-text-74 d-flex flex-column position-absolute">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN4_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN4_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
            s
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN4_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN4_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="yellowline-Vr line-49"></div>
      <div className="yellowline-Vr downArrow line-50"></div>
      <div className="yellowline-Vr downArrow line-51"></div>

      <div className="position-absolute d-flex single-text-76">
        <div className="text-cenetr">
          393AS3 <br /> BLENDING <br /> SILO
        </div>
        <div className="ml-1">
          {" "}
          423CV <br /> HOT JUST BIN
        </div>
      </div>

      <div className="pipeVr position-absolute d-flex single-text-77"></div>
      <div className="pipeVr position-absolute d-flex single-text-78"></div>
      <div className="pipeVr position-absolute d-flex single-text-79"></div>
      <div className="pipeVr position-absolute d-flex single-text-80"></div>

      <div className="position-absolute single-text-81">
        <BlackContainer
          data={{
            label: "PH_443FN1_PT1",
            useClass: "greenTxt mb-1",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443FN1_TT1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="yellowline-Hr position-absolute rightarrow single-text-84"></div>

      <div className="yellowline-Vr position-absolute single-text-85"></div>
      <div className="yellowline-Hr position-absolute single-text-86"></div>

      <div className="position-absolute d-flex flex-column single-text-91">
        <p>443CV1</p>
        <p>443DG3</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-93">
        <p>443SD2</p>
        <p className="ml-3">443LD1</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-104">
        <p>463AD2</p>
        <p>463AD1</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-105">
        <p className="ml-4">463FN1</p>
        <p>463FN2A</p>
        <p className="ml-4">463FN2</p>
      </div>
      <div className="position-absolute single-text-106">
        FUEL DOZING SYSTEM
      </div>

      <div className="yellowline-Vr downArrow position-absolute single-text-107"></div>
      <div className="yellowline-Hr position-absolute single-text-108"></div>
      <div className="position-absolute d-flex flex-column single-text-109">
        <p>COAL MILL</p>
      </div>

      <div className="position-absolute d-flex flex-column single-text-110">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1A_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1A_TT1",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1A_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1A_TT2",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-111">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1B_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1B_TT1",
              useClass: "greenTxt mb",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1A_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1A_TT1",
              useClass: "greenTxt mb",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-112">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1B_PT2",
              useClass: "greenTxt",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN1B_TT2",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1A_PT2",
              useClass: "greenTxt",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1A_TT2",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex  flex-column single-text-113">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1B_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1B_TT1",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1B_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN1B_TT2",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-114">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN2_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN2_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN2_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN2_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-115">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN6_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN6_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN6_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN6_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-116">
        <BlackContainer
          data={{
            label: "PH_443PH2_CN4_PT2",
            useClass: "greenTxt mb-1",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443PH2_CN4_TT2",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute d-flex single-text-117">
        <div>
          <BlackContainer
            data={{
              label: "PH_453PR1_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_453PR1_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_453PR1_PT3",
              useClass: "greenTxt mb-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_453PR1_TT3",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-118">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN6_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN6_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN6_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN6_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-119">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_443FN1_M01_RUN",
              healthyLabel: "PH_443FN1_M01_PH",
            }
          )} mr-2`}
          label="PH_443FN1_M01_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_443FN1_M02_RUN",
              healthyLabel: "PH_443FN1_M02_PH",
            }
          )} mr-2`}
          label="PH_443FN1_M02_RUN"
          text="M"
        />
      </div>

      <div className="yellowline-Hr leftarrow position-absolute single-text-120"></div>
      <div className="yellowline-Hr  position-absolute single-text-121"></div>

      <div className="position-absolute d-flex single-text-122 align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "PH_463DU1_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_463DU1_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_463DU1_PT3",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_463DU1_PT4",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "PH_463DU1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-123 text-center">
        <BlackContainer
          data={{
            label: "PH_443BQ1_AD_PT1",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443PHT_PT1",
            useClass: "greenTxt mt-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-124 text-center">
        <BlackContainer
          data={{
            label: "PH_453PR1_TT1",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_453PR1_PT1",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-125">BAG HOUSE</div>

      <div className="postition-absolute single-text-126 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tagg ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )} mr-2`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`line-circle  digital-tagg ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )} mr-2`}
          label="NA"
        />
      </div>

      <div className="position-absolute single-text-127">
        <div>GRATE SPEED</div>
        <div className="d-flex ">
          <span className="mr-2">493DB1</span>
          <span>493DB2</span>
        </div>
      </div>

      <div className="yellowline-Vr position-absolute single-text-128"></div>

      <div className="position-absolute d-flex flex-column single-text-129">
        <div className="yellowline-Hr d-flex justify-content-end align-items-center">
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className="yellowline-Hr d-flex justify-content-end align-items-center">
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className="yellowline-Hr d-flex justify-content-end align-items-center">
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className="yellowline-Hr mb-3 d-flex justify-content-end align-items-center">
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className="yellowline-Hr d-flex justify-content-end align-items-center">
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="yellowline-Vr position-absolute single-text-130"></div>
      <div className="yellowline-Hr position-absolute single-text-131"></div>

      <div className="yellowline-Hr position-absolute single-text-132"></div>
      <div className="yellowline-Vr position-absolute single-text-133"></div>

      <div className="position-absolute single-text-134 text-center">
        KILN HOOD PARAMETERES <br /> TT & PT
      </div>

      <div className="position-absolute d-flex flex-column single-text-135">
        <BlackContainer
          data={{
            label: "PH_443LD2_ZT",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443LD3_ZT",
            useClass: "greenTxt ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute d-flex flex-column single-text-136">
        <BlackContainer
          data={{
            label: "PH_443PH1_CN2_PT1",
            useClass: "greenTxt mb-1",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443PH1_CN2_TT1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-abolute d-flex single-text-137">
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "PH_443PH2_CN5_PT2",
              useClass: "greenTxt",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN5_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443DG2_PT",
              useClass: "greenTxt",
              unit: "mmwG",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_453PR1_TT8",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-abolute d-flex flex-column single-text-138">
        <BlackContainer
          data={{
            label: "PH_443PH2_CN2_PT2",
            useClass: "greenTxt mb-1",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_443PH2_CN2_TT2",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-139">
        <BlackContainer
          data={{
            label: "PH_463DU1_PT5",
            useClass: "greenTxt ",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_463DU1_TT3",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute d-flex flex-column single-text-140">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN3_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN3_TT1",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH2_CN3_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH2_CN3_TT2",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex flex-column single-text-141">
        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN3_PT1",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN3_TT1",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "PH_443PH1_CN3_PT2",
              useClass: "greenTxt mb-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_443PH1_CN3_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-142">
        KILN I/L TEMP PYRO METER TE & PT
      </div>
    </div>
  );
};
