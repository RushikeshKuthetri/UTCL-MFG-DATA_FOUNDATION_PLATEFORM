import { TextContainerWithWrapWord, BlackContainer, PipeWithCircles, MotorCircleDigitalTag, MimicCaret } from "../../../../../index";
import { useColorStatus, useFanImgTagsColorStatus, useCaretColorStatus, useBVTagsColorStatusForNewPlantScreens } from "../../../../../../utils";
export const LPSystemAndhraWHRS = () => {
  return (
    <div className=" AqcBoilerLPSystem LPSystemAndhra w-100 h-100 position-relative">
      <div className="img-101 position-absolute single-text-1"></div>
      <div className="triangle-with-squares position-absolute single-text-2"></div>
      <div className=" position-absolute single-text-3 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("W3_AQC_FLG_M701")}`} label="W3_AQC_FLG_M701" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("W3_AQC_FLG_M702")}`} label="W3_AQC_FLG_M702" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("W3_AQC_FLG_M703")}`} label="W3_AQC_FLG_M703" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("W3_AQC_FLG_M704")}`} label="W3_AQC_FLG_M704" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("W3_AQC_FLG_M705")}`} label="W3_AQC_FLG_M705" />
      </div>
      <div className=" position-absolute single-text-4 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1",
            label: "CPH-3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "CPH-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "CPH-1",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2",
              label: "LP ECO (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2 ml-4",
              label: "LP ECO (AQC)",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2",
              label: "HP ECO-1 (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2 ml-3",
              label: "HP ECO-1 (AQC)",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2 ",
            label: "LP EVAP-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2 ",
            label: "LP EVAP-1",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2",
              label: "HP ECO-2 (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2 ml-3",
              label: "HP ECO-2 (AQC)",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2",
              label: "HP ECO-3 (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2 ml-3",
              label: "HP ECO-3 (AQC)",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "LP SH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "HP EVAP-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "HP EVAP-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "HP SH-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "HP SH-2A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mt-2",
            label: "HP SH-2B",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SACRIFICING TUBES",
          }}
        />
      </div>

      <div className=" position-absolute single-text-5 ">
        <div className="bg-light p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CONDENSATE WATER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FROM GSC OUTLET",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 text-center mt-2",
            label: "SIGNAL TO CEP PUMP VFD",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 text-center mt-2",
            label: "TO DEAREATOR TANK",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 text-center mt-2",
            label: "TO PH BOILER LP DRUM",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6 d-flex ">
        <div className="mr-5">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3 mt-1",
                label: "FT-680A",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_CDS_680A_FT",
                useClass: "greenTxt mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3 mt-1",
                label: "FT-680B",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_CDS_680B_FT",
                useClass: "greenTxt mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT-680",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_CDS_680_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PT-680B",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_CDS_680B_PT",
              useClass: "greenTxt mt-1",
              unit: "Kg/Cm²",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-7 d-flex ">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "PT-681",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_CDS_681_PT",
              useClass: "greenTxt mt-1",
              unit: "Kg/Cm²",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "TT-681",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_CDS_681_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TT-503",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FDW_503_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-light p-1 text-center  position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LP FW FROM BFW LINE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "NEAR AQC BOILER",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex">
          <div className="mr-4 mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "PT-501",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_PH_FDW_501_PT",
                useClass: "greenTxt mt-1",
                unit: "Kg/Cm²",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <div className="d-flex justify-content-end">
              <BlackContainer
                data={{
                  label: "W3_PH_FDW_501_FT",
                  useClass: "greenTxt mt-1",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "FT-501A",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_PH_FDW_501A_FT",
                  useClass: "greenTxt mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "FT-501B",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_PH_FDW_501B_FT",
                  useClass: "greenTxt mt-1",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex flex-column align-items-end">
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "W3_AQC_FDW_501_FT",
                useClass: "greenTxt mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "FT-501A",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_FDW_501A_FT",
                useClass: "greenTxt mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-3",
                label: "FT-501B",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_FDW_501B_FT",
                useClass: "greenTxt mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <div className=" mt-2">
          <BlackContainer
            data={{
              label: "W3_PH_FCV_501A_ZT",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "501A-ZT",
            }}
          />
        </div>
        <div className=" mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "501B-ZT",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_PH_FCV_501B_ZT",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" mt-4">
          <BlackContainer
            data={{
              label: "W3_AQC_FDW_FCV_501A_ZT",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "501A-ZT",
            }}
          />
        </div>
        <div className=" mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "501B-ZT",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_FDW_FCV_501B_ZT",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-13">
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AQCLP-SW-LIC-615A",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_SW_615A_LIC",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AQCLP-SW-LIC-615B",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_SW_615B_LIC",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AQCLP-FDW-FIC-5O1",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_FDW_501_FIC",
                useClass: "greenTxt",
                unit: "tph",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT-502",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FDW_502_PT",
            useClass: "greenTxt mt-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT-501",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FDW_501_PT",
            useClass: "greenTxt mt-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-light p-1 text-center  position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM HP DOSING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SYSTEM",
          }}
        />
      </div>
      <div className=" position-absolute pipeHr single-text-17 text-center  p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mr-3 mt-4",
            label: "LP STEAM DRUM",
          }}
        />
      </div>
      <div className=" position-absolute single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT-615",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_SS_615_PT",
            useClass: "greenTxt mt-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM LP CEO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "(AQC OUTLET)",
          }}
        />
      </div>
      <div className="bg-light p-1 text-center  position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO CSDH AT STG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BUILDING",
          }}
        />
      </div>

      <div className="position-absolute single-text-21">
        <div className="d-flex">
          <div>
            <div className="d-flex justify-content-end">
              <BlackContainer
                data={{
                  label: "W3_AQC_MAS_618_FT",
                  useClass: "greenTxt mt-1",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "FT-618A",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_AQC_MAS_618A_FT",
                  useClass: "greenTxt mt-1",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "FT-618B",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_AQC_MAS_618B_FT",
                  useClass: "greenTxt mt-1",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="ml-5">
            <div className="d-flex justify-content-end">
              <BlackContainer
                data={{
                  label: "W3_AQC_MAS_617_TT",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "TT-617A",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_AQC_MAS_617A_TT",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3",
                  label: "TT-617B",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_AQC_MAS_617B_TT",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "AQCHP-MAS-PIC-616",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_MAS_616_PIC",
                useClass: "greenTxt",
                unit: "Kg/Cm²",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <BlackContainer
          data={{
            label: "W3_AQCLP_MAS_616_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "ZT-616",
          }}
        />
        <div className=" ml-4 mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PT-616",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_616_PT",
              useClass: "greenTxt mt-1",
              unit: "Kg/Cm²",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex flex-column align-items-end">
        <BlackContainer
          data={{
            label: "W3_AQC_MOV_05A_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "ZT-05A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TO IBD TANK",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "W3_AQC_MOV_08A_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "ZT-08A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TO CBD TANK",
          }}
        />
      </div>

      <div className="d-flex position-absolute single-text-25 flex-column">
        <div className="d-flex">
          <div className="text-center">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_PH_MOV_501A_OLS", closeLabel: "W3_PH_MOV_501A_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_PH_MOV_501A_OLS", closeLabel: "W3_PH_MOV_501A_CLS" })}`}
              label="W3_PH_MOV_501A_OLS"
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MOV-501A",
              }}
            />
          </div>
          <div className="text-center ml-4">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
              secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
              label=""
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FCV-501A",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="text-center">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_PH_MOV_501B_OLS", closeLabel: "W3_PH_MOV_501B_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_PH_MOV_501B_OLS", closeLabel: "W3_PH_MOV_501B_CLS" })}`}
              label="W3_PH_MOV_501B_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MOV-501B",
              }}
            />
          </div>
          <div className="text-center ml-4">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
              secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
              label=""
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FCV-501B",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-26 flex-column">
        <div className="d-flex">
          <div className="text-center">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_501A_OLS", closeLabel: "W3_AQC_MOV_501A_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_501A_OLS", closeLabel: "W3_AQC_MOV_501A_CLS" })}`}
              label="W3_AQC_MOV_501A_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MOV-501A",
              }}
            />
          </div>
          <div className="text-center ml-4">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
              secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
              label=""
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FCV-501A",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="text-center">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_501B_OLS", closeLabel: "W3_AQC_MOV_501B_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_501B_OLS", closeLabel: "W3_AQC_MOV_501B_CLS" })}`}
              label="W3_AQC_MOV_501B_OLS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MOV-501B",
              }}
            />
          </div>
          <div className="text-center ml-4">
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
              secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
              label=""
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FCV-501B",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-27 ">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("W3_AQC_MOV_05A_M01")}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useCaretColorStatus("W3_AQC_MOV_05A_M01")}`}
            label="W3_AQC_MOV_05A_M01"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MOV-05A",
            }}
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("W3_AQC_MOV_08A_M01")}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useCaretColorStatus("W3_AQC_MOV_08A_M01")}`}
            label="W3_AQC_MOV_08A_M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MOV-08A",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-28 flex-column">
        <div className="text-center d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_035_OLS", closeLabel: "W3_AQC_MOV_035_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_035_OLS", closeLabel: "W3_AQC_MOV_035_CLS" })}`}
            label="W3_AQC_MOV_035_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MOV-35",
            }}
          />
        </div>
        <div className="text-center d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_036_OLS", closeLabel: "W3_AQC_MOV_036_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_036_OLS", closeLabel: "W3_AQC_MOV_036_CLS" })}`}
            label="W3_AQC_MOV_036_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MOV-36",
            }}
          />
        </div>
        <div className="ml-0">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_037_OLS", closeLabel: "W3_AQC_MOV_037_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_037_OLS", closeLabel: "W3_AQC_MOV_037_CLS" })}`}
            label="W3_AQC_MOV_037_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MOV-37",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "MOV-618A",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_618A_OLS", closeLabel: "W3_AQC_MOV_618A_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_618A_OLS", closeLabel: "W3_AQC_MOV_618A_CLS" })}`}
            label="W3_AQC_MOV_618A_OLS"
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag className={`square digital-tag ml-2 ${useColorStatus("W3_AQC_MOV_618A_OLS")} ml-2`} label="W3_AQC_MOV_618A_OLS" text="O" />
          <MotorCircleDigitalTag className={`square digital-tag ml-2 ${useColorStatus("W3_AQC_MOV_618A_CLS")} ml-2`} label="W3_AQC_MOV_618A_CLS" text="C" />
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag className={`square digital-tag mr-3 ${useColorStatus("W3_AQC_MOV_035_CLS")}`} text="C" label="W3_AQC_MOV_035_CLS" />
          <MotorCircleDigitalTag className={`square digital-tag ml-2 ${useColorStatus("W3_AQC_MOV_035_OLS")} ml-5`} text="O" label="W3_AQC_MOV_035_OLS" />
        </div>
      </div>
      <div className="position-absolute single-text-31">
        <div className="text-center d-flex justify-content-center align-items-center">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block  grey-color-caret`} label="" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "PCV-616",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-center align-items-center">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_040_OLS", closeLabel: "W3_AQC_MOV_040_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_AQC_MOV_040_OLS", closeLabel: "W3_AQC_MOV_040_CLS" })}`}
            label="W3_AQC_MOV_040_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "MOV-40",
            }}
          />
        </div>
        <div className="d-flex mt-4 mr-5">
          <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W3_AQC_MOV_040_OLS")}`} label="W3_AQC_MOV_040_OLS" text="O" />
          <MotorCircleDigitalTag className={`square digital-tag ml-5 ${useColorStatus("W3_AQC_MOV_040_CLS")}`} label="W3_AQC_MOV_040_CLS" text="C" />
        </div>
      </div>
      <div className=" position-absolute single-text-32 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "M",
            firstCircleClass: `dot digital-tag ${useColorStatus("W3_473CV4_RUN")}`,
            firstCircleLabel: "W3_473CV4_RUN",
          }}
          text={{ useClass: "text-dark", label: "DCC-1" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle ml-3"
          firstCircle={{
            firstCircleText: "M",
            firstCircleClass: `dot digital-tag ${useColorStatus("W3_473CV5_RUN")}`,
            firstCircleLabel: "W3_473CV5_RUN",
          }}
          text={{ useClass: "text-dark", label: "DCC-2" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
      </div>
      <div className=" position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "AIR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "INLET",
          }}
        />
        <div className="img-66">
          <div className="connector-icon">
            <div className="dot  grey-color"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <div className="d-flex justify-content-end">
          <BlackContainer
            data={{
              label: "W3_AQC_SW_615_LT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-4",
              label: "FT-501A",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_SW_615A_LT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-4",
              label: "FT-501B",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_SW_615B_LT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-35">
        <MotorCircleDigitalTag className={`square digital-tag mr-3 ${useColorStatus("W3_AQC_MOV_036_CLS")}`} text="C" label="W3_AQC_MOV_036_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ml-2 ${useColorStatus("W3_AQC_MOV_036_OLS")} ml-5`} text="O" label="W3_AQC_MOV_036_OLS" />
      </div>
      <div className="d-flex position-absolute single-text-36">
        <MotorCircleDigitalTag className={`square digital-tag mr-3 ${useColorStatus("W3_AQC_MOV_037_CLS")}`} text="C" label="W3_AQC_MOV_037_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ml-2 ${useColorStatus("W3_AQC_MOV_037_OLS")} ml-5`} text="O" label="W3_AQC_MOV_037_OLS" />
      </div>

      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "W3_AQCLP_CDS502_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-38 d-flex">
        <div className="mr-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "Sacrifising Valve",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACW_MOV002",
            }}
          />
        </div>

        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("W3_ACW_MOV002")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("W3_ACW_MOV002")}`}
          label="W3_ACW_MOV002"
        />
      </div>

      <div className="pipeVr position-absolute pipe-1 d-flex justify-content-around align-items-end ">
        <i class="fas fa-long-arrow-alt-up"></i>
      </div>
      <div className="pipeHr position-absolute pipe-2 d-flex justify-content-around align-items-center ">
        <i class="fas fa-long-arrow-alt-right"></i>
      </div>
      <div className="pipeVr position-absolute pipe-3 d-flex justify-content-around align-items-center">
        <i class="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeHr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>

      <div className="yellowline-Hr position-absolute line-1 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-4 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9 d-flex justify-content-left align-items-left">
        <i className="fa-solid ml-2 fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11 d-flex justify-content-left align-items-left">
        <i className="fa-solid ml-2 fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-12 d-flex justify-content-left align-items-left">
        <i className="fa-solid ml-2 fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14  d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-15 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-16 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-25  d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Vr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33 d-flex justify-content-around">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-34 d-flex justify-content-around">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Hr  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Vr  position-absolute line-44"></div>
      <div className="yellowline-Vr  position-absolute line-45"></div>
      <div className="yellowline-Hr  position-absolute line-46"></div>
      <div className="yellowline-Hr  position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-48"></div>
    </div>
  );
};
