import { TextContainerWithWrapWord, MimicCaret, BlackContainer, MotorCircleDigitalTag } from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useCaretColorStatus,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
export const KilnCoalFiringRawanL3 = () => {
  return (
    <div className="KilnCoalFiringRawanL3 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div className="d-flex">
          <div className="mt-2">
            <BlackContainer
              data={{
                label: "KL_483BF1_DPT",
                useClass: "greenTxt ",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_483BF1_PT",
                useClass: "greenTxt  mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark",
                label: "BYPASS",
              }}
            />
            <div className="squareplustri mt-1"></div>
            <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-4",
                label: "TO 483BI1",
              }}
            />
          </div>
          <div className="mt-4 single-text-2">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_483FN3_M01_RUN", healthyLabel: "KL_483FN3_M01_PH" })}`}
                label="KL_483FN3_M01_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "483FN3",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="mt-2">
            <BlackContainer
              data={{
                label: "KL_453BF2_DPT",
                useClass: "greenTxt ",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_453BF2_PT",
                useClass: "greenTxt  mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark",
                label: "BYPASS",
              }}
            />
            <div className="squareplustri mt-1"></div>
            <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-4",
                label: "TO 453BI2",
              }}
            />
          </div>
          <div className="mt-4 single-text-2">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453FN2_M01_RUN", healthyLabel: "KL_453FN2_M01_PH" })}`}
                label="KL_453FN2_M01_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "453FN2",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="mt-2">
            <BlackContainer
              data={{
                label: "KL_453BF1_DPT",
                useClass: "greenTxt ",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_453BF1_PT",
                useClass: "greenTxt  mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "bg-info text-dark",
                label: "BYPASS",
              }}
            />
            <div className="squareplustri mt-1"></div>
            <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-4",
                label: "TO 453BI1",
              }}
            />
          </div>
          <div className="mt-4 single-text-2">
            <div className="img-97 d-flex justify-content-center  align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453FN1_M01_RUN", healthyLabel: "KL_453FN1_M01_PH" })}`}
                label="KL_453FN1_M01_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "453FN1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="d-flex gap-1">
          <div className="box-1 p-2 text-center align-self-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "483AE1",
              }}
            />
            <div className="d-flex mt-2">
              <div>
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_483AE1_SV1")}`}
                  secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_483AE1_SV1")}`}
                  label="KL_483AE1_SV1"
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "SV1",
                  }}
                />
              </div>
              <div className="ml-3">
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_483AE1_SV2")}`}
                  secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_483AE1_SV2")}`}
                  label="KL_483AE1_SV2"
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "SV2",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto",
                label: "481BI1_LS",
              }}
            />
            <div className="containerImage mt-1 text-center">
              <div className="d-flex gap-1 pt-2">
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SCOM",
                    }}
                  />
                  <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KM_483BI1_EX_LS1")}`} label="KM_483BI1_EX_LS1" />
                </div>
                <div className="box-1 p-1">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "KILN FIRING",
                    }}
                  />
                </div>
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SCOM",
                    }}
                  />
                  <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KM_483BI1_EX_LS2")}`} label="KM_483BI1_EX_LS2" />
                </div>
              </div>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "483BI1",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KL_483BI1_WT",
                    useClass: "greenTxt ml-1 mt-1",
                    unit: "Ton",
                    unitColor: "unitColor",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "SILO-1",
                  }}
                />
              </div>
              <div className="yellowline-Vr  position-absolute line-1"></div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-info mt-3 p-1",
                label: "CO2",
              }}
            />

            <div className="text-center bg-info mt-5 p-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "COMPR AIR",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "N2/CO2",
                }}
              />
            </div>
          </div>
          <div>
            <MimicCaret
              parentClass="d-flex mt-4 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_483BF1_SV1")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_483BF1_SV1")}`}
              label="KL_483BF1_SV1"
            />
            <MimicCaret
              parentClass="d-flex mt-2 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_483BF1_SV2")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_483BF1_SV2")}`}
              label="KL_483BF1_SV2"
            />
            <MimicCaret
              parentClass="d-flex mt-2 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_483BF1_SV3")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_483BF1_SV3")}`}
              label="KL_483BF1_SV3"
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div className="box-1 p-2 text-center align-self-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "453AE2",
              }}
            />
            <div className="d-flex mt-2">
              <div>
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453AE2_SV1")}`}
                  secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453AE2_SV1")}`}
                  label="KL_453AE2_SV1"
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "SV1",
                  }}
                />
              </div>
              <div className="ml-3">
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453AE2_SV2")}`}
                  secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453AE2_SV2")}`}
                  label="KL_453AE2_SV2"
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "SV2",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto",
                label: "453BI2_LS",
              }}
            />
            <div className="containerImage mt-1 text-center">
              <div className="d-flex gap-1 pt-2">
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SCOM",
                    }}
                  />
                  <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KM_453BI2_EX_LS1")}`} label="KM_453BI2_EX_LS1" />
                </div>
                <div className="box-1 p-1">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "St. By Kiln/ STANDBY",
                    }}
                  />
                </div>
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SCOM",
                    }}
                  />
                  <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KM_453BI2_EX_LS2")}`} label="KM_453BI2_EX_LS2" />
                </div>
              </div>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "453BI2",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KL_453BI2_WT",
                    useClass: "greenTxt ml-1 mt-1",
                    unit: "Ton",
                    unitColor: "unitColor",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "SILO-2",
                  }}
                />
              </div>
              <div className="yellowline-Vr  position-absolute line-1"></div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-info mt-3 p-1",
                label: "CO2",
              }}
            />

            <div className="text-center bg-info mt-5 p-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "COMPR AIR",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "N2/CO2",
                }}
              />
            </div>
          </div>
          <div>
            <MimicCaret
              parentClass="d-flex mt-4 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453BF2_SV1")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453BF2_SV1")}`}
              label="KL_453BF2_SV1"
            />
            <MimicCaret
              parentClass="d-flex mt-2 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453BF2_SV2")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453BF2_SV2")}`}
              label="KL_453BF2_SV2"
            />
            <MimicCaret
              parentClass="d-flex mt-2 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453BF2_SV3")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453BF2_SV3")}`}
              label="KL_453BF2_SV3"
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div className="box-1 p-2 text-center align-self-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "453AE1",
              }}
            />
            <div className="d-flex mt-2">
              <div>
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453AE1_SV1")}`}
                  secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453AE1_SV1")}`}
                  label="KL_453AE1_SV1"
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "SV1",
                  }}
                />
              </div>
              <div className="ml-3">
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453AE1_SV2")}`}
                  secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453AE1_SV2")}`}
                  label="KL_453AE1_SV2"
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "SV2",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto",
                label: "453BI1_LS",
              }}
            />
            <div className="containerImage mt-1 text-center">
              <div className="d-flex gap-1 pt-2">
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SCOM",
                    }}
                  />
                  <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KM_453BI1_EX_LS1")}`} label="KM_453BI1_EX_LS1" />
                </div>
                <div className="box-1 p-1">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "PC FIRING",
                    }}
                  />
                </div>
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SCOM",
                    }}
                  />
                  <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KM_453BI1_EX_LS2")}`} label="KM_453BI1_EX_LS2" />
                </div>
              </div>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "453BI1",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KL_453BI1_WT",
                    useClass: "greenTxt ml-1 mt-1",
                    unit: "Ton",
                    unitColor: "unitColor",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-3",
                    label: "SILO-3",
                  }}
                />
              </div>
              <div className="yellowline-Vr  position-absolute line-1"></div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-info mt-3 p-1",
                label: "CO2",
              }}
            />

            <div className="text-center bg-info mt-5 p-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "COMPR AIR",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "N2/CO2",
                }}
              />
            </div>
          </div>
          <div>
            <MimicCaret
              parentClass="d-flex mt-4 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453BF1_SV1")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453BF1_SV1")}`}
              label="KL_453BF1_SV1"
            />
            <MimicCaret
              parentClass="d-flex mt-2 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453BF1_SV2")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453BF1_SV2")}`}
              label="KL_453BF1_SV2"
            />
            <MimicCaret
              parentClass="d-flex mt-2 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("KL_453BF1_SV3")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("KL_453BF1_SV3")}`}
              label="KL_453BF1_SV3"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KL_483DQ1_FT1",
              useClass: "greenTxt ",
              unit: "LPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_483DQ1_FR",
              useClass: "greenTxt mt-2 ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_483DQ1_SP_PID",
              useClass: "greenTxt mt-2 ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_453DQ2_FT1",
              useClass: "greenTxt ",
              unit: "LPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453DQ2_FR",
              useClass: "greenTxt mt-2 ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453DQ2_SP_PID",
              useClass: "greenTxt mt-2 ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_453DQ1_FT1",
              useClass: "greenTxt ",
              unit: "LPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453DQ1_FR",
              useClass: "greenTxt mt-2 ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453DQ1_SP_PID",
              useClass: "greenTxt mt-2 ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KL_483BL1_II",
              useClass: "greenTxt ",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_483BL1_SI",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_483BL1_PT",
              useClass: "greenTxt mt-2 ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_483BL1_TT1",
              useClass: "greenTxt mt-2 ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_483BL1_SP_PID",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_453BL3_II",
              useClass: "greenTxt ",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL3_SI",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL3_PT",
              useClass: "greenTxt mt-2 ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL3_TT1",
              useClass: "greenTxt mt-2 ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL3_SP_PID",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_453BL2_II",
              useClass: "greenTxt ",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL2_SI",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL2_PT",
              useClass: "greenTxt mt-2 ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL2_TT1",
              useClass: "greenTxt mt-2 ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL2_SP_PID",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_453BL1_II",
              useClass: "greenTxt ",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL1_SI",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL1_PT",
              useClass: "greenTxt mt-2 ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL1_TT1",
              useClass: "greenTxt mt-2 ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_453BL1_SP_PID",
              useClass: "greenTxt mt-2 ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <div className="containerImage"></div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="containerImage Image-1 pt-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag mx-auto ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_483DQ1_ON", healthyLabel: "KL_483DQ1_PH" })}`}
              label="KL_483DQ1_ON"
            />
          </div>
        </div>
        <div>
          <div className="containerImage"></div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="containerImage Image-1 pt-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag mx-auto  digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453DQ2_ON", healthyLabel: "KL_453DQ2_PH" })}`}
              label="KL_453DQ2_ON"
            />
          </div>
        </div>
        <div>
          <div className="containerImage"></div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="containerImage Image-1 pt-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag mx-auto  digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453DQ1_ON", healthyLabel: "KL_453DQ1_PH" })}`}
              label="KL_453DQ1_ON"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_483SG1_OLS")}`} label="KL_483SG1_OLS" />
          <div className="d-flex align-items-center mt-2 ml-3 rotate">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_483SG1_OLS", closeLabel: "KL_483SG1_CLS" })}`}
              label="KL_483SG1_OLS"
            />
            <div className="yellowline-Hr  hr-left"></div>
            <span className={`go mr-2 grey-color  square`}></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto mt-1 ml-2",
                label: "483SG1",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`square mr-2 mt-2 digital-tag ${useColorStatus("KL_483SG1_CLS")}`} label="KL_483SG1_CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG3_OLS")}`} label="KL_453SG3_OLS" />
          <div className="d-flex align-items-center mt-2 ml-3 rotate">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG3_OLS", closeLabel: "KL_453SG3_CLS" })}`}
              label="KL_453SG3_OLS"
            />
            <div className="yellowline-Hr  hr-left"></div>
            <span className={`go mr-2 grey-color  square`}></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto mt-1 ml-2",
                label: "453SG3",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`square mr-2 mt-2 digital-tag ${useColorStatus("KL_453SG3_CLS")}`} label="KL_453SG3_CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_453SG1_OLS")}`} label="KL_453SG1_OLS" />
          <div className="d-flex align-items-center mt-2 ml-3 rotate">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG1_OLS", closeLabel: "KL_453SG1_CLS" })}`}
              label="KL_453SG1_OLS"
            />
            <div className="yellowline-Hr  hr-left"></div>
            <span className={`go mr-2 grey-color  square`}></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto mt-1 ml-2",
                label: "453SG1",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`square mr-2 mt-2 digital-tag ${useColorStatus("KL_453SG1_CLS")}`} label="KL_453SG1_CLS" />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_483SG2_OLS")}`} label="KL_483SG2_OLS" />
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_483SG2_OLS", closeLabel: "KL_483SG2_CLS" })}`} label="KL_483SG2_OLS" />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ml-2",
              label: "483SG2",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`square mr-2 mt-2 digital-tag ${useColorStatus("KL_483SG2_CLS")}`} label="KL_483SG2_CLS" />
      </div>
      <div className="position-absolute single-text-8">
        <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG2_OLS")}`} label="KL_453SG2_OLS" />
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG2_OLS", closeLabel: "KL_453SG2_CLS" })}`} label="KL_453SG2_OLS" />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ml-2",
              label: "453SG2",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`square mr-2 mt-2 digital-tag ${useColorStatus("KL_453SG2_CLS")}`} label="KL_453SG2_CLS" />
      </div>
      <div className="position-absolute single-text-9">
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG4_OLS")}`} label="KL_453SG4_OLS" />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG4_OLS", closeLabel: "KL_453SG4_CLS" })}`}
            label="KL_453SG4_OLS"
          />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ml-2",
              label: "453SG4",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG4_CLS")}`} label="KL_453SG4_CLS" />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG6_OLS", closeLabel: "KL_453SG6_CLS" })}`}
            label="KL_453SG6_OLS"
          />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ml-2",
              label: "453SG6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG5_OLS")}`} label="KL_453SG5_OLS" />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG5_OLS", closeLabel: "KL_453SG5_CLS" })}`}
            label="KL_453SG5_OLS"
          />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ml-2",
              label: "453SG5",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG5_CLS")}`} label="KL_453SG5_CLS" />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG7_OLS", closeLabel: "KL_453SG7_CLS" })}`}
            label="KL_453SG7_OLS"
          />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1 ml-2",
              label: "453SG7",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG6_OLS")}`} label="KL_453SG6_OLS" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KL_453SG6_CLS")}`} label="KL_453SG6_CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG7_OLS")}`} label="KL_453SG7_OLS" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("KL_453SG7_CLS")}`} label="KL_453SG7_CLS" />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG10_CLS")}`} label="KL_453SG10_CLS" />
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG10_OLS", closeLabel: "KL_453SG10_CLS" })}`}
            label="KL_453SG10_OLS"
          />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
        </div>
        <MotorCircleDigitalTag className={`square mr-2 mt-2 digital-tag ${useColorStatus("KL_453SG10_OLS")}`} label="KL_453SG10_OLS" />
      </div>
      <div className="position-absolute single-text-13">
        <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453SG9_CLS")}`} label="KL_453SG9_CLS" />
        <div className="d-flex align-items-center mt-2 ml-3 rotate">
          <MotorCircleDigitalTag className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KL_453SG9_OLS", closeLabel: "KL_453SG9_CLS" })}`} label="KL_453SG9_OLS" />
          <div className="yellowline-Hr  hr-left"></div>
          <span className={`go mr-2 grey-color  square`}></span>
        </div>
        <MotorCircleDigitalTag className={`square mr-2 mt-2 digital-tag ${useColorStatus("KL_453SG9_OLS")}`} label="KL_453SG9_OLS" />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_483BV2_OLS")}`} label="KL_483BV2_OLS" />
          <MimicCaret
            parentClass="d-flex tringle-item ml-2 justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_483BV2_OLS", closeLabel: "KL_483BV2_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_483BV2_OLS", closeLabel: "KL_483BV2_CLS" })}`}
            label="KL_483BV2_OLS"
          />
          <MotorCircleDigitalTag className={`square ml-2 digital-tag ${useColorStatus("KL_483BV2_CLS")}`} label="KL_483BV2_CLS" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_453BV4_OLS")}`} label="KL_453BV4_OLS" />
          <MimicCaret
            parentClass="d-flex tringle-item ml-2 justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV4_OLS", closeLabel: "KL_453BV4_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV4_OLS", closeLabel: "KL_453BV4_CLS" })}`}
            label="KL_453BV4_OLS"
          />
          <MotorCircleDigitalTag className={`square ml-2  digital-tag ${useColorStatus("KL_453BV4_CLS")}`} label="KL_453BV4_CLS" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453BV5_OLS")}`} label="KL_453BV5_OLS" />
          <MimicCaret
            parentClass="d-flex tringle-item ml-2 justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV5_OLS", closeLabel: "KL_453BV5_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV5_OLS", closeLabel: "KL_453BV5_CLS" })}`}
            label="KL_453BV5_OLS"
          />
          <MotorCircleDigitalTag className={`square ml-2  digital-tag ${useColorStatus("KL_453BV5_CLS")}`} label="KL_453BV5_CLS" />
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_483BV1_OLS")}`} label="KL_483BV1_OLS" />
          <div className="d-flex">
            <MimicCaret
              parentClass="d-flex tringle-item ml-4 justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_483BV1_OLS", closeLabel: "KL_483BV1_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_483BV1_OLS", closeLabel: "KL_483BV1_CLS" })}`}
              label="KL_483BV1_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "483BV1",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_483BV1_CLS")}`} label="KL_483BV1_CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_453BV3_OLS")}`} label="KL_453BV3_OLS" />
          <div className="d-flex">
            <MimicCaret
              parentClass="d-flex tringle-item ml-4 justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV3_OLS", closeLabel: "KL_453BV3_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV3_OLS", closeLabel: "KL_453BV3_CLS" })}`}
              label="KL_453BV3_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "453BV3",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453BV3_CLS")}`} label="KL_453BV3_CLS" />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_453BV2_OLS")}`} label="KL_453BV2_OLS" />
          <div className="d-flex">
            <MimicCaret
              parentClass="d-flex tringle-item ml-4 justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV2_OLS", closeLabel: "KL_453BV2_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV2_OLS", closeLabel: "KL_453BV2_CLS" })}`}
              label="KL_453BV2_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "453BV2",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453BV2_CLS")}`} label="KL_453BV2_CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_453BV1_OLS")}`} label="KL_453BV1_OLS" />
          <div className="d-flex">
            <MimicCaret
              parentClass="d-flex tringle-item ml-4 justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV1_OLS", closeLabel: "KL_453BV1_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV1_OLS", closeLabel: "KL_453BV1_CLS" })}`}
              label="KL_453BV1_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "453BV1",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`square  digital-tag ${useColorStatus("KL_453BV1_CLS")}`} label="KL_453BV1_CLS" />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "KL_483BL1_M01",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_483BL1_M02_RUN", healthyLabel: "KL_483BL1_M02_PH" })}`}
            label="KL_483BL1_M02_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_483BL1_M03_RUN", healthyLabel: "KL_483BL1_M03_PH" })}`}
            label="KL_483BL1_M03_RUN"
            text="M"
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "KL_453BL3_M01",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453BL3_M02_RUN", healthyLabel: "KL_453BL3_M02_PH" })}`}
            label="KL_453BL3_M02_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453BL3_M03_RUN", healthyLabel: "KL_453BL3_M03_PH" })}`}
            label="KL_453BL3_M03_RUN"
            text="M"
          />
        </div>
      </div>

      <div className="position-absolute single-text-18 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "KL_453BL2_M01",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453BL2_M02_RUN", healthyLabel: "KL_453BL2_M02_PH" })}`}
            label="KL_453BL2_M02_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453BL2_M03_RUN", healthyLabel: "KL_453BL2_M03_PH" })}`}
            label="KL_453BL2_M03_RUN"
            text="M"
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "KL_453BL1_M01",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453BL1_M02_RUN", healthyLabel: "KL_453BL1_M02_PH" })}`}
            label="KL_453BL1_M02_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KL_453BL1_M03_RUN", healthyLabel: "KL_453BL1_M03_PH" })}`}
            label="KL_453BL1_M03_RUN"
            text="M"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KL_453DQ1_PT2",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_483DQ1_PT2",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-21 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Coriolis dryer",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TANK 1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_DQ_DR_TANK1_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TANK 2",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_DQ_DR_TANK2_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Dewpoint",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_DQ_DR_EA",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-22",
          label: "TO KILN BURNER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-23",
          label: "TO PRECAL CLINER",
        }}
      />
      <div className="position-absolute single-text-24 d-flex">
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
      </div>

      <div className="position-absolute single-text-25 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AERATION",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AERATION",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AERATION",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "483BV2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "453BV4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "453BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 text-center">
        <div className="d-flex ">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KL_453BV6_OLS")}`} label="KL_453BV6_OLS" />
          <MimicCaret
            parentClass="d-flex tringle-item ml-2 justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV6_OLS", closeLabel: "KL_453BV6_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KL_453BV6_OLS", closeLabel: "KL_453BV6_CLS" })}`}
            label="KL_453BV6_OLS"
          />
          <MotorCircleDigitalTag className={`square ml-2 digital-tag ${useColorStatus("KL_453BV6_CLS")}`} label="KL_453BV6_CLS" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "453BV6",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <i class="fa-solid fa-caret-right  grey-color-caret"></i>
      </div>
      <div className="yellowline-Hr rightarrow  position-absolute line-2 "></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-3"></div>
      <div className="yellowline-Hr   position-absolute line-4"></div>
      <div className="yellowline-Vr   position-absolute line-5"></div>
      <div className="yellowline-Vr   position-absolute line-6"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-10"></div>
      <div className="yellowline-Vr   position-absolute line-11"></div>
      <div className="yellowline-Vr   position-absolute line-12"></div>
      <div className="yellowline-Hr   position-absolute line-13"></div>
      <div className="yellowline-Hr   position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-18"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-19"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-20"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-21"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-22"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-23"></div>
    </div>
  );
};
