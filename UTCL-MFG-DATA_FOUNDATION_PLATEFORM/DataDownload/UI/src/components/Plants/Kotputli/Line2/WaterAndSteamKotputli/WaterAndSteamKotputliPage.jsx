import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
} from "../../../../index";

export const WaterAndSteamKotputliPage = () => {
  return (
    <div className="WaterAndSteamKotputliPage w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 box-1 p-1 d-flex">
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 text-center",
              label: "Main  Steam Flow",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_FT_401",
                useClass: "greenTxt  mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AL_MAS_FT_501",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 text-center",
              label: "Main  Steam Pr.",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_PT_402",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "kg/cm2",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AL_MAS_PT_502",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "Main  Steam Temp.",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_TT_407",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AL_MAS_TT_501",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "Steam Drum Level",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "HP_DRUM_LEVEL_COMP",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "LP_DRUM_LEVEL_COMP",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "Feed Water Flow",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_FW_FT_401",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "Main Steam Flow",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_PH_MAS_FT_201",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_PL_MAS_FT_301",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "Main Steam Pr",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_PH_MAS_PT_202",
                useClass: "greenTxt ml-2 mt-2",
                unit: "kg/Cm2",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_PL_MAS_PT_302",
                useClass: "greenTxt ml-2 mt-2",
                unit: "kg/Cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "Main Steam Temp",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_PH_MAS_TT_202",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_PL_MAS_TT_301",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "Steam Drum Level ",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "PH_HP_DRUM_LEVEL_COMP",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_LP_DRUM_LEVEL_COMP",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <div className="d-flex justify-content-center mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PT-401",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_MAS_401_PT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Kg/Cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="mr-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "LT-401A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_MAS_401A_LT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div className="box-1 p-1 d-flex">
            <div className="ml-3">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2",
                    label: "DRUM_LEVEL_HI",
                  }}
                />
                <span className={`greenDot mt-2 ml-2 p-1 ${"RM_362PU8"}`}>
                  L
                </span>
                {/* <MotorCircleDigitalTag
          className={`dot motor-dot mt-2 ml-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_623VS1_RUN", healthyLabel: "PP_623VS1_PH" }
          )}`}
          text="M"
          label="PP_623VS1_RUN"
        /> */}
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2",
                    label: "DRUM_LEVEL_LO",
                  }}
                />
                <span className={`grayDot mt-2 ml-2 p-1 ${"RM_362PU8"}`}>
                  L
                </span>
                {/* <MotorCircleDigitalTag
          className={`dot motor-dot mt-2 ml-2 p-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_623VS1_RUN", healthyLabel: "PP_623VS1_PH" }
          )}`}
          text="M"
          label="PP_623VS1_RUN"
        /> */}
              </div>
            </div>
            <div className="ml-3">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2",
                    label: "DRUM_LEVEL",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "HP_DRUM_LEVEL",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
            <div className="ml-3">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2",
                    label: "HP STEAM DRUM",
                  }}
                />
              </div>
            </div>
            <div className="ml-3">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2",
                    label: "DRUM LEVEL COMPEN SATION",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "HP_DRUM_LEVEL_COMP",
                    useClass: "greenTxt ml-2 mt-2",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "LT-401B",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_MAS_401B_LT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PT-401",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_CD_401_PT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Kg/Cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3 mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TT-401",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_CD_401_TT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "W2_AH_CD_401_FT",
              useClass: "greenTxt ml-2 mt-2 ml-auto",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "FT-401B",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_CD_401B_FT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "FT-401A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_CD_401A_FT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TT-402",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_CD_402_TT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PT-402",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_CD_402_PT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Kg/Cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div className="mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Feed Water Line",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Match Line B-B",
            }}
          />
        </div>
        <div className="ml-4">
          <BlackContainer
            data={{
              label: "W2_AH_FW_403_FT",
              useClass: "greenTxt ml-2 mt-2  ml-auto",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "FT-403 B",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_FW_403B_FT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "FT-403 A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_FW_403A_FT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-4">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "STEAM_CNTRL_PID_M",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-4">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "STEAM_CNTRL_PID_S",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FT-402A",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_402A_FT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <BlackContainer
          data={{
            label: "W2_AH_FW_404_FT",
            useClass: "greenTxt ml-2 mt-2 ml-auto",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FT-404 B",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_404B_FT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FT-404 A",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_404A_FT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "ZT401",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_401_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_401_SP",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "ZT402",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_402_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_402_SP",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "W2_AH_MAS_TT",
            useClass: "greenTxt ml-2 mt-2 ml-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TT-403",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_MAS_403_TT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TT-402",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_MAS_402_TT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "W2_AH_MAS_TT_HP",
            useClass: "greenTxt ml-2 mt-2 ml-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TT-406",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_MAS_406_TT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TT-405",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_MAS_405_TT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "DSH2_PID_M",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-3">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "DSH2_PID_S",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_362LQ11_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "ZT403",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_403_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_403_SP",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "ZT404",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_404_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_TCV_404_SP",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2",
            label: "OUTLET HEADER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "CONDENSATE PREHEATER -||",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "INLET HEADER",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2",
            label: "OUTLET HEADER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "CONDENSATE PREHEATER -|",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "INLET HEADER",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 text-center">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2",
                label: "INLET HEADER -1B",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "HP ECO -1B",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "OUILET HEADER -1B",
              }}
            />
          </div>
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2",
                label: "INLET HEADER -1A",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "HP ECO -1A",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "OUILET HEADER -1A",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-4">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2",
                label: "INLET HEADER -|| B",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "HP ECO -||B",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "OUILET HEADER -||B",
              }}
            />
          </div>
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2",
                label: "INLET HEADER -||A",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "HP ECO -||A",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light box-1 px-2 mx-autos",
                label: "OUILET HEADER -||A",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2",
            label: "INLET HEADER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "HP EVAPORA TOR -1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "OUTLET HEADER",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2",
            label: "INLET HEADER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "HP EVAPORA TOR -1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "OUTLET HEADER",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2",
            label: "INLET HEADER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "HP PRIMARY SH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "OUTLET HEADER",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2",
            label: "INLET HEADER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "HP INTERMTTEN SH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "OUTLET HEADER",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2",
            label: "INLET HEADER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "HP FINAL SH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light box-1 px-2 mx-autos",
            label: "OUTLET HEADER",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="ml-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "TT-407 A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_MAS_407A_TT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "TT-407 B",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_MAS_407B_TT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_TT_407",
                useClass: "greenTxt  mt-2 ml-auto",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PT-402 A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_MAS_402A_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PT-402 A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_MAS_402B_PT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_PT_402",
                useClass: "greenTxt  mt-2 ml-auto",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-1">
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_401A_FT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "FT-401 A",
              }}
            />
          </div>
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_401B_FT",
                useClass: "greenTxt ml-2 mt-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "FT-401 B",
              }}
            />
          </div>
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W2_AH_MAS_FT_401",
                useClass: "greenTxt  mt-2 ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "M",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "FLOW PID",
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
                label: "HP_ST_VENT_FT_PID",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "M",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "PR. PLD ",
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
                label: "HP_ST_VENT_TT_PID",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "Kg/Cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "HP STEAM FLOW",
            }}
          />
          <BlackContainer
            data={{
              label: "HP_STEAM_FLOW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W2_AH_FW_404_PT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Kg/Cm2",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "M",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "PT-404",
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
                label: "W2_AH_FW_FCV_404",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div>
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_404_SP",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_404_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W2_AH_FW_402_PT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Kg/Cm21",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "M",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "FLOW PID",
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
                label: "W2_AH_FW_FCV_402",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "M",
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
                label: "W2_AH_FW_FCV_403",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="ml-4">
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_402_SP",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_402_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_403_SP",
              useClass: "greenTxt ml-2 mt-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_403_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1 mt-5">
          <BlackContainer
            data={{
              label: "W2_AH_FW_402_FT",
              useClass: "greenTxt ml-2 mt-2 ml-auto",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1",
                label: "FT-402 B",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_FW_402B_FT",
                useClass: "greenTxt ml-2 mt-2 ml-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1",
                label: "FT-402 A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_FW_402A_FT",
                useClass: "greenTxt ml-2 mt-2 ml-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "M",
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
                label: "W2_AH_FW_FCV_401",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt ml-2 mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="ml-4">
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_401_SP",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_AH_FW_FCV_401_ZT",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1 mt-3">
          <BlackContainer
            data={{
              label: "W2_AH_FW_FT_401",
              useClass: "greenTxt ml-2 mt-2 ml-auto",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1",
                label: "FT-401 B",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_FW_401B_FT",
                useClass: "greenTxt ml-2 mt-2 ml-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1",
                label: "FT-401 A",
              }}
            />
            <BlackContainer
              data={{
                label: "W2_AH_FW_401A_FT",
                useClass: "greenTxt ml-2 mt-2 ml-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark mr-1 box-1 bg-light p-1 position-absolute single-text-26",
          label: "SAMPLE COOLER",
        }}
      />
      <div className="position-absolute single-text-27 box-1 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1  ",
            label: "CBD LINE TO COMMON",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "BLOWDOWN",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark mr-1 box-1 bg-light p-1 position-absolute single-text-28",
          label: "FORM CMP QUTLET",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark mr-1 box-1 bg-light p-1 position-absolute single-text-29",
          label: "SAMPLE COOLER",
        }}
      />
      <div className="position-absolute single-text-30 box-1 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1  ",
            label: "CONDENSATE OULET",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "TO DEAERATOR",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 box-1 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1  ",
            label: "TO PH BOILER HP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "STEAM DRUM",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark mr-1 box-1 bg-light p-1 position-absolute single-text-32",
          label: "TO SAMPLE COOLER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark mr-1 box-1 bg-light p-1 position-absolute single-text-33",
          label: "TO HP STREAM LINE",
        }}
      />
      <div className="position-absolute single-text-34 box-1 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "FEED WATER FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "PUMP OUTLET",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 box-1 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "FROM HP DOSING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "FROM PH BOILER",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark mr-1  box-1 bg-light p-1 position-absolute single-text-36",
          label: "FROM HP DOSING",
        }}
      />
      <div className="position-absolute single-text-37 box-1 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "IBD LINE TO COMMON",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "BLOWDOWN TANK",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "PT-401",
          }}
        />
        <BlackContainer
          data={{
            label: "W2_AH_FW_401_PT",
            useClass: "greenTxt ml-2 mt-2",
            unit: "Kg/Cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "PT-401",
          }}
        />
        <BlackContainer
          data={{
            label: "W2_AH_FW_403_PT",
            useClass: "greenTxt ml-2 mt-2",
            unit: "Kg/Cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "Match line D1-D1",
          }}
        />
        <BlackContainer
          data={{
            label: "W2_PL_MAS_SUV_401_ZT",
            useClass: "greenTxt ml-2 mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W2_PL_MAS_SUV_401_SP",
            useClass: "greenTxt ml-2 mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "TT-401",
          }}
        />
        <BlackContainer
          data={{
            label: "W2_AH_MAS_401_TT",
            useClass: "greenTxt ml-2 mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "TT-401",
          }}
        />
        <BlackContainer
          data={{
            label: "W2_AH_MAS_404_TT",
            useClass: "greenTxt ml-2 mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "MAIN_STEAM_DENSITY",
          }}
        />
        <BlackContainer
          data={{
            label: "MAIN_STEAM_DENSITY",
            useClass: "greenTxt ml-2 mt-2",
            unit: "Kg/Cm2",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
            data={{
              label: "RMH_332WF1_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "Kg/Cm2",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RMH_332WF1_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "RMH_332WF1_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "RMH_332WF1_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "RMH_332WF1_BIW",
              useClass: "greenTxt ml-2 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          /> */}
      </div>
      <div className="position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "Match Line E1-E1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SUV-402 ZT",
          }}
        />
      </div>
      <div className="position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "Match Line G-G",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "TO Super Heater",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "Drain Heater",
          }}
        />
      </div>
      <div className="position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "Match Line C1-C1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "TO Common Drain",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: " Heater",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "W2-AH-CD-FE-401",
          }}
        />
      </div>
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "Match Line C-C",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "FROM ECO 2A OIL",
          }}
        />
      </div>
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "W2-AL-BD-mov-401",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TCV-401",
          }}
        />
        <MimicCaret
          parentClass="tringle-item mt-2"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "TCV-402",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-52 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "ZT-403",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-53 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "ZT-404",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-54 ">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SUV-401",
          }}
        />
      </div>
      <div className="position-absolute single-text-55 ">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "MAS-MOV-401",
          }}
        />
      </div>
      <div className="position-absolute single-text-56 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "MOV-403",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-57 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "MOV-403",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "FCV-404",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "MOV-404",
          }}
        />
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "FCV-404",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
      </div>
      <div className="position-absolute single-text-61 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "MOV-404",
          }}
        />
      </div>
      <div className="position-absolute single-text-62 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FCV-402",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
          />
        </div>
        <div className="ml-3 d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "MOV-402",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FCV-402",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
          />
        </div>
        <div className="ml-3 d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "MOV-402",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret ${"541SG1"}`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret  ${"541SG1"}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "MOV-402",
          }}
        />
      </div>

      <div className="yellowline-Hr leftarrow position-absolute line-1"></div>
      <div className="yellowline-Vr position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr upArrow position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-8"></div>
      <div className="yellowline-Vr  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14 d-flex align-items-center justify-content-around ">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr  position-absolute line-15"></div>
      <div className="yellowline-Hr  position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21  d-flex align-items-center justify-content-around ">
        <i className="fa-solid fa-caret-left"></i>
        <i className="fa-solid fa-caret-left"></i>
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Hr  position-absolute line-23  d-flex align-items-center justify-content-around">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr  position-absolute line-24 d-flex align-items-center justify-content-around ">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr  position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Vr  position-absolute line-32"></div>
      <div className="yellowline-Hr  position-absolute line-33"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-34"></div>
      <div className="yellowline-Hr   position-absolute line-35 d-flex align-items-center justify-content-around ">
        <i className="fa-solid fa-caret-left"></i>
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr   position-absolute line-36 d-flex align-items-center justify-content-around ">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr   position-absolute line-37"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr   position-absolute line-39"></div>
      <div className="yellowline-Vr   position-absolute line-40"></div>
      <div className="yellowline-Vr   position-absolute line-41"></div>
      <div className="yellowline-Vr   position-absolute line-42"></div>
      <div className="yellowline-Vr   position-absolute line-43"></div>
      <div className="yellowline-Vr   position-absolute line-44"></div>
      <div className="yellowline-Hr   position-absolute line-45"></div>
      <div className="yellowline-Vr   position-absolute line-46"></div>
      <div className="yellowline-Vr   position-absolute line-47"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-48"></div>
      <div className="yellowline-Hr  position-absolute line-49"></div>
      <div className="yellowline-Hr  position-absolute line-50"></div>
      <div className="yellowline-Vr  position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="yellowline-Vr  position-absolute line-53"></div>
      <div className="yellowline-Hr  position-absolute line-54"></div>
      <div className="yellowline-Vr downArrow position-absolute line-55"></div>
      <div className="yellowline-Vr downArrow position-absolute line-56"></div>
      <div className="yellowline-Vr downArrow position-absolute line-57"></div>
      <div className="yellowline-Vr  position-absolute line-58"></div>
      <div className="yellowline-Hr  position-absolute line-59"></div>
      <div className="yellowline-Hr  position-absolute line-60"></div>
      <div className="yellowline-Vr  position-absolute line-61"></div>
      <div className="yellowline-Vr  position-absolute line-62"></div>
      <div className="yellowline-Hr  position-absolute line-63"></div>
      <div className="yellowline-Vr  position-absolute line-64"></div>
      <div className="yellowline-Vr downArrow position-absolute line-65"></div>
      <div className="yellowline-Vr downArrow position-absolute line-66"></div>
      <div className="yellowline-Vr  position-absolute line-67"></div>
      <div className="yellowline-Hr  position-absolute line-68"></div>
      <div className="yellowline-Hr  position-absolute line-69"></div>
      <div className="yellowline-Vr  position-absolute line-70"></div>
      <div className="yellowline-Vr  position-absolute line-71"></div>
      <div className="yellowline-Hr  position-absolute line-72"></div>
      <div className="yellowline-Hr  position-absolute line-73"></div>
      <div className="yellowline-Vr  position-absolute line-74"></div>
      <div className="yellowline-Vr  position-absolute line-75"></div>
      <div className="yellowline-Hr  position-absolute line-76"></div>
      <div className="yellowline-Vr  position-absolute line-77"></div>
      <div className="yellowline-Vr upArrow position-absolute line-78"></div>
      <div className="yellowline-Hr position-absolute line-79"></div>
      <div className="yellowline-Vr upArrow position-absolute line-80"></div>
      <div className="yellowline-Hr position-absolute line-81"></div>
      <div className="yellowline-Hr position-absolute line-82"></div>
      <div className="yellowline-Vr upArrow position-absolute line-83"></div>
      <div className="yellowline-Hr position-absolute line-84"></div>
      <div className="yellowline-Hr position-absolute line-85"></div>
      <div className="yellowline-Hr position-absolute line-86"></div>
      <div className="yellowline-Vr upArrow position-absolute line-87"></div>
      <div className="yellowline-Vr upArrow position-absolute line-88"></div>
      <div className="yellowline-Vr upArrow position-absolute line-89"></div>
      <div className="yellowline-Hr position-absolute line-90"></div>
      <div className="yellowline-Vr position-absolute line-91"></div>
      <div className="yellowline-Vr position-absolute line-92"></div>
      <div className="yellowline-Vr position-absolute line-93"></div>
      <div className="yellowline-Vr downArrow position-absolute line-94"></div>
      <div className="yellowline-Vr position-absolute line-95"></div>
      <div className="yellowline-Vr position-absolute line-96"></div>
      <div className="yellowline-Hr position-absolute line-97"></div>
      <div className="yellowline-Hr position-absolute line-98"></div>
      <div className="yellowline-Hr position-absolute line-99"></div>
      <div className="yellowline-Vr upArrow position-absolute line-100"></div>
      <div className="yellowline-Vr upArrow position-absolute line-101"></div>
      <div className="yellowline-Vr upArrow position-absolute line-102"></div>
      <div className="yellowline-Hr position-absolute line-103"></div>
      <div className="yellowline-Hr position-absolute line-104"></div>
      <div className="yellowline-Hr position-absolute line-105"></div>
      <div className="yellowline-Vr upArrow position-absolute line-106"></div>
      <div className="yellowline-Vr upArrow position-absolute line-107"></div>
      <div className="yellowline-Vr upArrow position-absolute line-108"></div>
      <div className="yellowline-Hr position-absolute line-109 d-flex align-items-center justify-content-around ">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-110"></div>
      <div className="yellowline-Vr position-absolute line-111"></div>
      <div className="yellowline-Hr position-absolute line-112"></div>
      <div className="yellowline-Hr position-absolute line-113"></div>
      <div className="yellowline-Hr position-absolute line-114"></div>
      <div className="yellowline-Vr downArrow position-absolute line-115"></div>
      <div className="yellowline-Vr downArrow position-absolute line-116"></div>
      <div className="yellowline-Vr downArrow position-absolute line-117"></div>
      <div className="yellowline-Vr downArrow position-absolute line-118"></div>
      <div className="yellowline-Hr position-absolute line-119"></div>
      <div className="yellowline-Hr position-absolute line-120"></div>
      <div className="yellowline-Vr downArrow position-absolute line-121"></div>
      <div className="yellowline-Vr downArrow position-absolute line-122"></div>
      <div className="yellowline-Vr downArrow position-absolute line-123"></div>
      <div className="yellowline-Vr downArrow position-absolute line-124"></div>
      <div className="yellowline-Vr position-absolute line-125"></div>
      <div className="yellowline-Vr position-absolute line-126"></div>
      <div className="yellowline-Hr position-absolute line-127"></div>
      <div className="yellowline-Vr downArrow position-absolute line-128"></div>
      <div className="yellowline-Hr position-absolute line-129"></div>
      <div className="yellowline-Hr position-absolute line-130"></div>
      <div className="yellowline-Vr position-absolute line-131"></div>
      <div className="yellowline-Vr position-absolute line-132"></div>
      <div className="yellowline-Hr position-absolute line-133"></div>
      <div className="yellowline-Vr position-absolute line-134"></div>
      <div className="yellowline-Hr position-absolute line-135"></div>
      <div className="yellowline-Vr downArrow position-absolute line-136"></div>
      <div className="yellowline-Vr downArrow position-absolute line-137"></div>
      <div className="yellowline-Vr downArrow position-absolute line-138"></div>
      <div className="yellowline-Vr downArrow position-absolute line-139"></div>
      <div className="yellowline-Hr  position-absolute line-140"></div>
      <div className="yellowline-Vr downArrow position-absolute line-141"></div>
      <div className="yellowline-Vr downArrow position-absolute line-142"></div>
      <div className="yellowline-Vr position-absolute line-143"></div>
      <div className="yellowline-Vr position-absolute line-144"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-145"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-146"></div>
      <div className="yellowline-Hr  position-absolute line-147"></div>
      <div className="yellowline-Vr  position-absolute line-148"></div>
      <div className="yellowline-Vr  position-absolute line-149"></div>
      <div className="yellowline-Vr  position-absolute line-150"></div>
      <div className="yellowline-Hr  position-absolute line-151"></div>
      <div className="yellowline-Vr  position-absolute line-152"></div>
      <div className="yellowline-Hr  position-absolute line-153"></div>
      <div className="yellowline-Vr  position-absolute line-154"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-155"></div>
      <div className="yellowline-Vr   position-absolute line-156"></div>
      <div className="yellowline-Vr   position-absolute line-157"></div>
      <div className="yellowline-Vr   position-absolute line-158"></div>
      <div className="yellowline-Hr   position-absolute line-159"></div>
      <div className="yellowline-Hr   position-absolute line-160"></div>
      <div className="yellowline-Hr   position-absolute line-161"></div>
      <div className="yellowline-Vr   position-absolute line-162"></div>
      <div className="yellowline-Vr   position-absolute line-163"></div>
      <div className="yellowline-Hr   position-absolute line-164"></div>
      <div className="yellowline-Hr   position-absolute line-165"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-166"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-167"></div>
      <div className="yellowline-Hr   position-absolute line-168"></div>
      <div className="yellowline-Vr   position-absolute line-169"></div>
      <div className="yellowline-Hr   position-absolute line-170"></div>
      <div className="yellowline-Vr  downArrow  position-absolute line-171"></div>
      <div className="yellowline-Hr    position-absolute line-172"></div>
      <div className="yellowline-Vr   upArrow position-absolute line-173"></div>
      <div className="yellowline-Hr position-absolute line-174"></div>
      <div className="yellowline-Vr position-absolute line-175"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-176"></div>
      <div className="yellowline-Hr  position-absolute line-177"></div>
      <div className="yellowline-Vr  position-absolute line-178"></div>
      <div className="yellowline-Hr  position-absolute line-179"></div>
      <div className="yellowline-Hr  position-absolute line-180"></div>
      <div className="yellowline-Vr  position-absolute line-181"></div>
    </div>
  );
};
