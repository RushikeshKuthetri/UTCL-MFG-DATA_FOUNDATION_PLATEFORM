import { TextContainerWithWrapWord, MimicCaret, PipeWithCircles, BlackContainer, MotorCircleDigitalTag } from "../../../../index";

import { useCaretColorStatus, useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const DedustingVishnupuramL2 = () => {
  return (
    <div className="dedustingVishnupuram w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="drumContainer"></div>
        <div className="triangle-with-squares"></div>
      </div>
      <div className="position-absolute single-text-2">
        <div className="drumContainer"></div>
        <div className="triangle-with-squares"></div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <div className="img-41  text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_200_M01")}`} label="K2_200_M01" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_200_M03")}`} label="K2_200_M03" />
          </div>
        </div>
        <div>
          <div className="img-41  text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_200_M02")}`} label="K2_200_M02" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_200_M04")}`} label="K2_200_M04" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="img-41  text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_100_M01")}`} label="K2_100_M01" />
        </div>
        <div className="img-41 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_100_M04")}`} label="K2_100_M04" />
        </div>
        <div className="img-41  text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_100_M02")}`} label="K2_100_M02" />
        </div>
        <div className="img-41 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_100_M05")}`} label="K2_100_M05" />
        </div>
        <div className="img-41  text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_100_M03")}`} label="K2_100_M03" />
        </div>
        <div className="img-41 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_100_M06")}`} label="K2_100_M06" />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <BlackContainer
          data={{
            label: "K2_ESPBH_IL_1TI",
            useClass: "greenTxt mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_2TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_3TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          {/* <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("PP_611BI4_PH")}`} label="PP_611BI4_PH" text="1"/> */}
          <PipeWithCircles
            parentDivClass="hpipecircle mt-1"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
              firstCircleLabel: "",
            }}
            text={{ useClass: "text-dark", label: "K2_200_ESPCH" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("K2_200_ESPCH")}`,
              secondCircleText: "",
              secondCircleLabel: "K2_200_ESPCH",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_200_ESPC_KV",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "HYBRID BAG HOUSE",
            }}
          />
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "AIR",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "BH DP",
                }}
              />
            </div>
            <div className="ml-3">
              <BlackContainer
                data={{
                  label: "K2_ESP_BH_AIR_PI",
                  useClass: "greenTxt",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "K2_ESP_BH_DP",
                  useClass: "greenTxt mt-1",
                  unit: "mmWg",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "K2_ESP_BH_OL_PI_N - K2_ESP_BH_IL_PI_N:",
                  useClass: "greenTxt mt-1",
                  unit: "mmWg",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <BlackContainer
          data={{
            label: "K2_ESP_BH_OL_PI",
            useClass: "greenTxt mt-3",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-1",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_ESP_HOP1_LSH")}`} label="K2_ESP_HOP1_LSH" />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-2",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_ESP_HOP2_LSH")}`} label="K2_ESP_HOP2_LSH" />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-3",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_ESP_HOP3_LSH")}`} label="K2_ESP_HOP3_LSH" />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-4",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_ESP_HOP4_LSH")}`} label="K2_ESP_HOP4_LSH" />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "K2_200_M13_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_200_M13")}`} label="K2_200_M13" />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "K2_200_M14_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_200_M14")}`} label="K2_200_M14" />
          <div className="d-flex circle">
            <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_200_M10")}`} label="K2_200_M10" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-2",
                label: "RAL-2",
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "K2_200_M15_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_200_M15")}`} label="K2_200_M15" />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "K2_200_M16_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_200_M16")}`} label="K2_200_M16" />
          <div className="d-flex circle">
            <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_200_M12")}`} label="K2_200_M12" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-2",
                label: "RAL-4",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="d-flex gap-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "1&2 HOP COMMON SC-1",
              }}
            />
            <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_200_M06")}`} label="K2_200_M06" />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "3&4 HOP COMMON SC-2",
              }}
            />
            <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_200_M07")}`} label="K2_200_M07" />
          </div>
        </div>
        <div className="square-1">
          <MotorCircleDigitalTag className={`square mt-4  digital-tag ${useColorStatus("K2_200_M08")}`} label="K2_200_M08" />
          <MotorCircleDigitalTag className={`square mt-4  digital-tag ${useColorStatus("K2_200_M09")}`} label="K2_200_M09" />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="d-flex gap-1">
          <BlackContainer
            data={{
              label: "K2_200_M06_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_200_M07_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K2_200_M08_II",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_200_M09_II",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-87 position-absolute single-text-10 text-center"></div>

      <div className="position-absolute single-text-11 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "VRM VP PUMP",
          }}
        />
        <BlackContainer
          data={{
            label: "E3_VPP_PI",
            useClass: "greenTxt mt-2",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
        <div className="img-41 mt-4 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_SV")}`} label="E3_05_SV" />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <div className="d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "1",
          }}
        />
          <div className="connector-icon p-1 ml-2">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("E3_05_M01")}`} label="E3_05_M01" />
          </div>
          </div>
          <div className="d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mt-4",
            label: "2",
          }}
        />
          <div className="connector-icon p-1 mt-4 ml-2">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("E3_05_M02")}`} label="E3_05_M02" />
          </div>
          </div>
        </div>
        <div>
        <div className="d-flex">
       
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("E3_05_M03")}`} label="E3_05_M03" />
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2",
            label: "3",
          }}
        />
          </div>
          <div className="d-flex">
      
          
          <div className="connector-icon p-1 mt-4">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("E3_05_M04")}`} label="E3_05_M04" />
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 ml-2",
            label: "4",
          }}
        />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <div className="connector-icon p-1 mt-4">
          <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2_ESP_FAN")}`} label="K2_ESP_FAN" />
        </div>
        <BlackContainer
          data={{
            label: "K2_ESPF_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "ESP FAN PAR",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "K2_ESPF_ZI",
          useClass: "greenTxt position-absolute single-text-14",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LONG SCREW",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "LONG CHAIN CONV.",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 bg-info p-1",
            label: "ESP DD GROUP",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-16",
          label: "FROM EX.FAN",
        }}
      />
      <div className="containerImage position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "PREDUSTER",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-18"></div>
      <div className="position-absolute single-text-19">
        <div className="drumContainer"></div>
        <div className="triangle-with-squares"></div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-1",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TAD_HOP1_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TAD_HOP1_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-1",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TAD_HOP2_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_TAD_HOP2_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-21"></div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH2_HI_LS")}`} label="K2_CLR_SPH2_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH2_LO_LS")}`} label="K2_CLR_SPH2_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH2_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH2_FP2")}`} label="K2_SPH2_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH2_FP1")}`} label="K2_SPH2_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH3_HI_LS")}`} label="K2_CLR_SPH3_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH3_LO_LS")}`} label="K2_CLR_SPH3_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH3_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH3_FP2")}`} label="K2_SPH3_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH3_FP1")}`} label="K2_SPH3_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH4_HI_LS")}`} label="K2_CLR_SPH4_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH4_LO_LS")}`} label="K2_CLR_SPH4_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH4_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH4_FP2")}`} label="K2_SPH4_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH4_FP1")}`} label="K2_SPH4_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH5_HI_LS")}`} label="K2_CLR_SPH5_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH5_LO_LS")}`} label="K2_CLR_SPH5_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH5_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH5_FP2")}`} label="K2_SPH5_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH5_FP1")}`} label="K2_SPH5_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH6_HI_LS")}`} label="K2_CLR_SPH6_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH6_LO_LS")}`} label="K2_CLR_SPH6_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH6_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH6_FP2")}`} label="K2_SPH6_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH6_FP1")}`} label="K2_SPH6_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH7_HI_LS")}`} label="K2_CLR_SPH7_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH7_LO_LS")}`} label="K2_CLR_SPH7_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH7_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH7_FP2")}`} label="K2_SPH7_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH7_FP1")}`} label="K2_SPH7_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH8_HI_LS")}`} label="K2_CLR_SPH8_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH8_LO_LS")}`} label="K2_CLR_SPH8_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH8_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH8_FP2")}`} label="K2_SPH8_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH8_FP1")}`} label="K2_SPH8_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH9_HI_LS")}`} label="K2_CLR_SPH9_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH9_LO_LS")}`} label="K2_CLR_SPH9_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH9_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH9_FP2")}`} label="K2_SPH9_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH9_FP1")}`} label="K2_SPH9_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH10_HI_LS")}`} label="K2_CLR_SPH10_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH10_LO_LS")}`} label="K2_CLR_SPH10_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH10_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH10_FP2")}`} label="K2_SPH10_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH10_FP1")}`} label="K2_SPH10_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH11_HI_LS")}`} label="K2_CLR_SPH11_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH11_LO_LS")}`} label="K2_CLR_SPH11_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH11_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH11_FP2")}`} label="K2_SPH11_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH11_FP1")}`} label="K2_SPH11_FP1" />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("K2_CLR_SPH12_HI_LS")}`} label="K2_CLR_SPH12_HI_LS" />
          <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CLR_SPH12_LO_LS")}`} label="K2_CLR_SPH12_LO_LS" />
          <BlackContainer
            data={{
              label: "K2_SPH12_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH12_FP2")}`} label="K2_SPH12_FP2" />
          </div>
          <div className="img-41 mt-1 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_SPH12_FP1")}`} label="K2_SPH12_FP1" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "COMPARTMENT PRESSURES",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLR_COMP1_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLR_COMP2_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLR_COMP3_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLR_COMP4_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLR_COMP5_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2 gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "STATIC PRE GRATE TEPM'S",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLR_STG_1_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLR_STG_2_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 box-1 p-2 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CSP DPC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "DBC-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "DBC-2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CLK BRK AMPS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CSP TOP BF DP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CLK TEMP",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K2_CSP_DPC_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_ZI",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_DBC2_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CLK_BRK_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CSP_TI",
              useClass: "greenTxt mt-2",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_DBC1_CLK_TI",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO 312 CONVEYOR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TO PREHEATER",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-1",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_CESP_HOP1_LS")}`} label="K2_CESP_HOP1_LS" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_100_M07")}`} label="K2_100_M07" />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-4",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_CESP_HOP4_LS")}`} label="K2_CESP_HOP4_LS" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_100_M10")}`} label="K2_100_M10" />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-2",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_CESP_HOP2_LS")}`} label="K2_CESP_HOP2_LS" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_100_M08")}`} label="K2_100_M08" />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-5",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_CESP_HOP5_LS")}`} label="K2_CESP_HOP5_LS" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_100_M11")}`} label="K2_100_M11" />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-3",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_CESP_HOP3_LS")}`} label="K2_CESP_HOP3_LS" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_100_M09")}`} label="K2_100_M09" />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOP-6",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2_CESP_HOP6_LS")}`} label="K2_CESP_HOP6_LS" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("K2_100_M12")}`} label="K2_100_M12" />
          <div className="yellowline-Vr position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("K2_100_M314")}`} label="K2_100_M314" />
          <BlackContainer
            data={{
              label: "K2_100_M314_II",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("K2_100_M315")}`} label="K2_100_M315" />
          <BlackContainer
            data={{
              label: "K2_100_M315_II",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("K2_100_M312")}`} label="K2_100_M312" />
          <BlackContainer
            data={{
              label: "K2_100_M312_II",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28">
        <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("K2_100_M313")}`} label="K2_100_M313" />
        <BlackContainer
          data={{
            label: "K2_100_M313_II",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="connector-icon p-1 mt-4">
          <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("CLR_ESP_FAN_DOL")}`} label="CLR_ESP_FAN_DOL" />
        </div>
        <BlackContainer
          data={{
            label: "K2_CESPF_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_CESPF_SI",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "CESP FAN PAR",
          }}
        />
        <BlackContainer
          data={{
            label: "CLK_34BLT_II",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLK_35BLT_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-30">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-1",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_FI",
              useClass: "greenTxt mt-1",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF1_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF1_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF1_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF1_NDE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-2A",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_NDE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2A_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-3",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF3_FI",
              useClass: "greenTxt mt-1",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF3_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF3_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF3_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF3_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF3_NDE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-4",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF4_FI",
              useClass: "greenTxt mt-1",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF4_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF4_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF4_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF4_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF4_NDE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-5",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF5_FI",
              useClass: "greenTxt mt-1",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF5_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF5_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF5_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF5_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF5_NDE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-6",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF6_FI",
              useClass: "greenTxt mt-1",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF6_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF6_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF6_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF6_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF6_NDE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-7",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF7_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF7_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF7_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF7_NDE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-info p-1",
              label: "CF-2",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2A_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF2A_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "COOLER ESP CHAMBERS",
          }}
        />
        <div className="d-flex gap-1">
          <div className="text-center">
            {/* <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("PP_611BI4_PH")}`} label="PP_611BI4_PH" text="36" /> */}
            <PipeWithCircles
              parentDivClass="hpipecircle mt-1"
              firstCircle={{
                firstCircleClass: `dot grey-color`,
                firstCircleText: "",
                firstCircleLabel: "",
              }}
              text={{ useClass: "text-dark", label: "K2_CESP1" }}
              secondCircle={{
                secondCircleClass: `dot digital-tag ${useColorStatus("K2_CESP1")}`,
                secondCircleText: "",
                secondCircleLabel: "K2_CESP1",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CESP1_KV",
                useClass: "greenTxt mt-1",
                unit: "KV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            {/* <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("PP_611BI4_PH")}`} label="PP_611BI4_PH" text="37" /> */}
            <PipeWithCircles
              parentDivClass="hpipecircle mt-1"
              firstCircle={{
                firstCircleClass: `dot grey-color`,
                firstCircleText: "",
                firstCircleLabel: "",
              }}
              text={{ useClass: "text-dark", label: "K2_CESP2" }}
              secondCircle={{
                secondCircleClass: `dot digital-tag ${useColorStatus("K2_CESP2")}`,
                secondCircleText: "",
                secondCircleLabel: "K2_CESP2",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CESP2_KV",
                useClass: "greenTxt mt-1",
                unit: "KV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            {/* <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("PP_611BI4_PH")}`} label="PP_611BI4_PH" text="38" /> */}
            <PipeWithCircles
              parentDivClass="hpipecircle mt-1"
              firstCircle={{
                firstCircleClass: `dot grey-color`,
                firstCircleText: "",
                firstCircleLabel: "",
              }}
              text={{ useClass: "text-dark", label: "K2_CESP3" }}
              secondCircle={{
                secondCircleClass: `dot digital-tag ${useColorStatus("K2_CESP3")}`,
                secondCircleText: "",
                secondCircleLabel: "K2_CESP3",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_CESP3_KV",
                useClass: "greenTxt mt-1",
                unit: "KV",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "K2_CESPF_ZI",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`square mt-1  digital-tag ${useColorStatus("K2_CESP_DMP_PID")}`} label="K2_CESP_DMP_PID" />
      </div>

      <BlackContainer
        data={{
          label: "K2_AQC_IL_TI_2",
          useClass: "greenTxt mt-1 position-absolute single-text-33",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-34",
          label: "KILN",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-35",
          label: "TO SPILLAGE DRAG CHAIN",
        }}
      />
      <div className="position-absolute single-text-36 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AQC",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BOILER",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "STORES SIDE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KILN-1 SIDE",
          }}
        />
      </div>
      <MotorCircleDigitalTag className={`text-dark digital-tag mt-1 p-1 position-absolute single-text-38 ${useColorStatus("K2_CSP_DPC_RUN")}`} label="K2_CSP_DPC_RUN" text="K2 CSP DPC" />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-39 bg-info p-1",
          label: "ESP RAPPING ON",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-40 bg-info p-1",
          label: "CESP RAPPING ON",
        }}
      />
      <div className="position-absolute single-text-41 d-flex">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("NA")}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("NA")}`}
            label="NA"
          />
          <MimicCaret
            parentClass="d-flex tringle-item mt-2 justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("NA")}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("NA")}`}
            label="NA"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K2_CD1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD1_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag mt-3 p-3 ${useColorStatus("K2_CD1")}`} label="K2_CD1" />
          <BlackContainer
            data={{
              label: "K2_CD1_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "COOLER",
          }}
        />
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag mt-3 p-3 ${useColorStatus("K2_CD2")}`} label="K2_CD2" />
          <BlackContainer
            data={{
              label: "K2_CD2_DE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K2_CD2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD2_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CD2_NDE_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "311",
          }}
        />
        <MotorCircleDigitalTag className={`circle-img mt-1 ml-2 digital-tag ${useFanImgTagsColorStatus("K2_100_M311")}`} label="K2_100_M311" />
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("K2_CF3_PID")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("K2_CF3_PID")}`}
          label="K2_CF3_PID"
        />
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2_CF3_VFD")}`} label="K2_CF3_VFD" />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K2_CF3_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF3_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <MimicCaret
          parentClass="d-flex tringle-item mt-2 justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("K2_CF4_PID")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("K2_CF4_PID")}`}
          label="K2_CF4_PID"
        />
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2_CF4_VFD")}`} label="K2_CF4_VFD" />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K2_CF4_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CF4_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "K2_AQC_IL_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2_AQC_IL_PI",
            useClass: "greenTxt mt-1",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-41 position-absolute single-text-45 text-center">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_BH_FA_GATE")}`} label="K2_BH_FA_GATE" />
      </div>
      <div className="chimni-red position-absolute single-text-46"></div>
      <div className="chimni-red position-absolute single-text-47"></div>
      <div className="position-absolute single-text-48 d-flex justify-content-cente align-items-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ",
          label: "TAD",
        }}
      />
      <div className="bg-info p-1 text-center ml-3">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ",
          label: "TAD AIR",
        }}
      />
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "BLASTERS",
        }}
      />
      </div>

</div>
<div className="img-96 position-absolute single-text-49"></div>

      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeHr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="pipeVr position-absolute pipe-17"></div>
      <div className="pipeHr position-absolute pipe-18"></div>
      <div className="pipeHr position-absolute pipe-19"></div>
      <div className="pipeHr position-absolute pipe-20"></div>
      <div className="pipeHr position-absolute pipe-21"></div>
      <div className="pipeHr position-absolute pipe-22"></div>
      <div className="pipeVr position-absolute pipe-23"></div>
      <div className="pipeVr position-absolute pipe-24"></div>

      <div className="yellowline-Vr  position-absolute line-1"></div>
      <div className="yellowline-Vr  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
    </div>
  );
};
