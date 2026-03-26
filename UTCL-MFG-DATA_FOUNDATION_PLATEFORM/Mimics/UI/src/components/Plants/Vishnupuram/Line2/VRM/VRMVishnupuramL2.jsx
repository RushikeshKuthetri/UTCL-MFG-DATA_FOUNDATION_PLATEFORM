import { TextContainerWithWrapWord, MimicCaret, PipeWithCircles, BlackContainer, MotorCircleDigitalTag } from "../../../../index";

import { useCaretColorStatus, useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const VRMVishnupuramL2 = () => {
  return (
    <div className="VRMVishnupuramL2 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleLabel: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "VRM_82BC_VFD" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("VRM_82BC_VFD")}`,
          secondCircleText: "",
          secondCircleLabel: "VRM_82BC_VFD",
        }}
      />
      <div className="position-absolute single-text-1">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "VRM_83B" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("VRM_83B")}`,
            secondCircleText: "M",
            secondCircleLabel: "VRM_83B",
          }}
        />
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="hpipecircle pipe-2 mt-2"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleLabel: "",
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "VRM_82B" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("VRM_82B")}`,
              secondCircleText: "M",
              secondCircleLabel: "VRM_82B",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_10_M09_II",
              useClass: "greenTxt ml-3 mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="hpipecircle pipe-3 mt-2"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleLabel: "",
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "VRM_81B" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("VRM_81B")}`,
              secondCircleText: "M",
              secondCircleLabel: "VRM_81B",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_10_M07II",
              useClass: "greenTxt ml-3 mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-2">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "LINE_FREQUENCY",
              useClass: "greenTxt",
              unit: "Hz",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CPP_MW_AI",
              useClass: "greenTxt ml-3",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mt-2",
            label: "RM2 SIDE",
          }}
        />
        <div className="ml-5 mr-3">
          <BlackContainer
            data={{
              label: "E2_05_FI",
              useClass: "greenTxt mt-3",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E2_05_FY",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("VRM_HG_CS_POS")}`} label="VRM_HG_CS_POS" />
            <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("VRM_HG_RS_POS")}`} label="VRM_HG_RS_POS" />
          </div>
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <BlackContainer
              data={{
                label: "VRM_HG_LI",
                useClass: "greenTxt mt-2",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 bg-info p-1",
                label: "HG",
              }}
            />
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleLabel: "",
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "E3_09_M06" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("E3_09_M06")}`,
              secondCircleText: "",
              secondCircleLabel: "E3_09_M06",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_HG_FI_TOT",
              useClass: "greenTxt mt-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_HG_FI",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_HG_WF_FI",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_09_M06_SI",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("VRM_LG_CS_POS")}`} label="VRM_LG_CS_POS" />
            <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("VRM_LG_RS_POS")}`} label="VRM_LG_RS_POS" />
          </div>
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <BlackContainer
              data={{
                label: "VRM_LG_LI",
                useClass: "greenTxt mt-2",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 bg-info p-1",
                label: "LG",
              }}
            />
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleLabel: "",
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "E3_09_M07" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("E3_09_M07")}`,
              secondCircleText: "",
              secondCircleLabel: "E3_09_M07",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_LG_FI_TOT",
              useClass: "greenTxt mt-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_LG_FI",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_LG_WF_FI",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_HG_WTRSP_SOV")}`} label="E3_HG_WTRSP_SOV" />
          </div>
        </div>
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("VRM_LAT_CS_POS")}`} label="VRM_LAT_CS_POS" />
            <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("VRM_LAT_RS_POS")}`} label="VRM_LAT_RS_POS" />
          </div>
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <BlackContainer
              data={{
                label: "VRM_LAT_LI",
                useClass: "greenTxt mt-2",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 bg-info p-1",
                label: "LAT",
              }}
            />
            <div className="img-41 text-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_09_M08A")}`} label="E3_09_M08A" />
            </div>
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleLabel: "",
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "E3_09_M08" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("E3_09_M08")}`,
              secondCircleText: "",
              secondCircleLabel: "E3_09_M08",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_LAT_FI_TOT",
              useClass: "greenTxt mt-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_LAT_FI",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_LAT_WF_FI",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_09_M08_II",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "E3_09_M02" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E3_M09_M02")}`,
            secondCircleText: "",
            secondCircleLabel: "E3_M09_M02",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle ml-5 mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "E3_09_M03" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E3_M09_M03")}`,
            secondCircleText: "",
            secondCircleLabel: "E3_M09_M03",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "E3_M09_M02_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_M09_M02_SI",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <MimicCaret
          parentClass="d-flex tringle-item mt-3 justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("E3_MILL_DP_BC_PID")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("E3_MILL_DP_BC_PID")}`}
          label="E3_MILL_DP_BC_PID"
        />
        <div>
          <BlackContainer
            data={{
              label: "E3_M09_M03_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_M09_M03_SI",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleLabel: "",
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "E3_09_M05" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("E3_M09_M05")}`,
              secondCircleText: "",
              secondCircleLabel: "E3_M09_M05",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_M09_M05_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex ">
        <div>
          <div className="img-41 mt-4  text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_IL_WP")}`} label="E3_IL_WP" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K2 3FLR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: " WT LVL",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_3FLR_WT_LI",
              useClass: "greenTxt  mt-2",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 align-self-baseline">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "INT. WATER SPRAY",
            }}
          />
          <div className="d-flex gap-1 mt-2 align-items-center">
            <div className="img-41  text-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_SV1")}`} label="E3_01_SV1" />
            </div>
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("CYC_OL_TI_PID_1")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("CYC_OL_TI_PID_1")}`}
              label="CYC_OL_TI_PID_1"
            />
            <BlackContainer
              data={{
                label: "VRM_WS_MV_POS_FB",
                useClass: "greenTxt  ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex gap-1 mt-1 align-items-center">
            <div className="img-41  text-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_SV2")}`} label="E3_01_SV2" />
            </div>
            <MimicCaret
              parentClass="d-flex tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("CYC_OL_TI_PID_2")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("CYC_OL_TI_PID_2")}`}
              label="CYC_OL_TI_PID_2"
            />
            <BlackContainer
              data={{
                label: "E3_IL_WSV2_ZI",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="box-1 p-1 position-absolute single-text-7">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_CU_FCS")}`} label="E3_NRTU_CU_FCS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "CIRCULATION UNIT FILTER",
            }}
          />
        </div>
        <div className="d-flex  mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_GL_FCS")}`} label="E3_NRTU_GL_FCS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "GRINDING LINE FILTER",
            }}
          />
        </div>
        <div className="d-flex  mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_LL_FCS")}`} label="E3_NRTU_LL_FCS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "LIFTING LINE FILTER",
            }}
          />
        </div>
        <div className="d-flex  mt-1">
          <div className="d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_SVLS1")}`} label="E3_NRTU_SVLS1" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "SUCTION VLV1",
              }}
            />
          </div>
          <div className="d-flex ml-2">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_SFCS1")}`} label="E3_NRTU_SFCS1" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "FILTER 1",
              }}
            />
          </div>
        </div>
        <div className="d-flex  mt-1">
          <div className="d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_SVLS2")}`} label="E3_NRTU_SVLS2" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "SUCTION VLV2",
              }}
            />
          </div>
          <div className="d-flex ml-2">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_SFCS2")}`} label="E3_NRTU_SFCS2" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "FILTER 2",
              }}
            />
          </div>
        </div>
        <div className="d-flex  mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_GL_BVLS")}`} label="E3_NRTU_GL_BVLS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "GRINDING LINE VLV1 LS",
            }}
          />
        </div>
        <div className="d-flex  mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_LL_BVLS")}`} label="E3_NRTU_LL_BVLS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "LIFING LINE VLV1 LS",
            }}
          />
        </div>
        <div className="d-flex  mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_NRTU_OT_LS")}`} label="E3_NRTU_OT_LS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "OIL TANK LEVEL",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-8 d-flex">
        <div className="box-1 p-1 d-flex gap-1 align-self-baseline">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "NEW ROLLER TENSION UNIT",
              }}
            />
            <div className="d-flex mt-1">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "C PMP",
                  }}
                />
                <div className="img-41 text-center">
                  <MotorCircleDigitalTag className={`dot pt-2 digital-tag ${useColorStatus("E3_01_M10A")}`} label="E3_01_M10A" />
                </div>
              </div>
              <BlackContainer
                data={{
                  label: "E3_NRTU_OT_LI",
                  useClass: "greenTxt ml-3",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "GRIND_PRE_SET",
                  useClass: "greenTxt ml-3",
                  unit: "Kg",
                  unitColor: "unitColor",
                }}
              />

              <div className="ml-3">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "MAIN PMP",
                  }}
                />
                <div className="img-41 text-center">
                  <MotorCircleDigitalTag className={`dot pt-2 digital-tag ${useColorStatus("E3_01_M12")}`} label="E3_01_M12" />
                </div>
              </div>
            </div>
            <div className="d-flex mt-1">
              <BlackContainer
                data={{
                  label: "E3_NRTU_PMP_PI",
                  useClass: "greenTxt",
                  unit: "Kg",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_NRTU_LP_PI",
                  useClass: "greenTxt ml-3",
                  unit: "Kg",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_NRTU_GP_PI",
                  useClass: "greenTxt ml-3",
                  unit: "Kg",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_01_M12_II",
                  useClass: "greenTxt ml-3",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_NHYD_SV1_COM")}`} label="E3_NHYD_SV1_COM" text="1" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_NHYD_SV2_COM")}`} label="E3_NHYD_SV2_COM" text="2" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_NHYD_SV3_COM")}`} label="E3_NHYD_SV3_COM" text="3" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_NHYD_SV4_COM")}`} label="E3_NHYD_SV4_COM" text="4" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_NHYD_SV5_COM")}`} label="E3_NHYD_SV5_COM" text="5" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_NHYD_SV6_COM")}`} label="E3_NHYD_SV6_COM" text="6" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_NHYD_SV7_COM")}`} label="E3_NHYD_SV7_COM" text="7" />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "UP CMD",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "DN CMD",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "UP POSITION",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PRES. INC",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PRES. DEC",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GRINDING",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FAST LIFT",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1 d-flex gap-1 align-self-baseline">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ROLLER LUB",
              }}
            />
            <div className="d-flex gap-1">
              <div className="img-41 text-center">
                <MotorCircleDigitalTag className={`dot pt-2 digital-tag ${useColorStatus("E3_01_M04")}`} label="E3_01_M04" />
              </div>
              <div>
                <BlackContainer
                  data={{
                    label: "E3_RL_DLV_PI",
                    useClass: "greenTxt mt-2",
                    unit: "Bar",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "E3_RL_SUC_PI",
                    useClass: "greenTxt mt-2",
                    unit: "Bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div>
                <div className="img-41 text-center">
                  <MotorCircleDigitalTag className={`dot pt-2 digital-tag ${useColorStatus("E3_01_M05")}`} label="E3_01_M05" />
                  <BlackContainer
                    data={{
                      label: "E3_01_M05_II",
                      useClass: "greenTxt mt-2",
                      unit: "A",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OLD ROLLER TENSION",
              }}
            />
            <div className="d-flex">
              <div className="img-41 text-center">
                <MotorCircleDigitalTag className={`dot pt-2 digital-tag ${useColorStatus("E3_01_M10")}`} label="E3_01_M10" />
              </div>
              <BlackContainer
                data={{
                  label: "E3_RT_GP_PI",
                  useClass: "greenTxt ml-3",
                  unit: "Bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              {/* <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt",
                  unit: "NA",
                  unitColor: "unitColor",
                }}
              /> */}
              <BlackContainer
                data={{
                  label: "E3_RT_OL_PI",
                  useClass: "greenTxt ml-3",
                  unit: "Bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_01_M10_II",
                  useClass: "greenTxt ml-3",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "PRES SET",
                }}
              />

              <MotorCircleDigitalTag className={`text-dark p-1 ml-2 digital-tag ${useColorStatus("SV_PRESS_SET")}`} label="SV_PRESS_SET" text="O" />

              <MotorCircleDigitalTag className={`text-dark p-1 ml-2 digital-tag ${useColorStatus("SV_PB")}`} label="SV_PB" text="ON" />
              <div className="ml-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SV",
                  }}
                />
                <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("E3_RT_SV_COM")}`} label="E3_RT_SV_COM" />
              </div>

              {/* <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt ml-3",
                  unit: "NA",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt ml-3",
                  unit: "NA",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt ml-3",
                  unit: "NA",
                  unitColor: "unitColor",
                }}
              /> */}
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "SV",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_HYD_SV1_COM")}`} label="E3_HYD_SV1_COM" text="1" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_HYD_SV2_COM")}`} label="E3_HYD_SV2_COM" text="2" />

              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_HYD_SV3_COM")}`} label="E3_HYD_SV3_COM" text="3" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_HYD_SV4_COM")}`} label="E3_HYD_SV4_COM" text="4" />
              <MotorCircleDigitalTag className={`dot digital-tag mr-1 ${useColorStatus("E3_HYD_SV5_COM")}`} label="E3_HYD_SV5_COM" text="5" />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OIL TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_RET_OIL_TI_1",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex gap-1">
              <BlackContainer
                data={{
                  label: "E3_RET_OIL_TI_2",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_RET_OIL_TI_3",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex gap-1">
              <BlackContainer
                data={{
                  label: "E3_RET_OIL_TI_4",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_RT_OT_LI",
                  useClass: "greenTxt mt-2",
                  unit: "M",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <div>
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_1_UP")}`} label="E3_01_1_UP" text="U" />
                <MotorCircleDigitalTag className={`dot mt-1 digital-tag ${useColorStatus("E3_01_2_UP")}`} label="E3_01_2_UP" text="U" />
                <MotorCircleDigitalTag className={`dot mt-1 digital-tag ${useColorStatus("E3_01_3_UP")}`} label="E3_01_3_UP" text="U" />
                <MotorCircleDigitalTag className={`dot mt-1 digital-tag ${useColorStatus("E3_01_4_UP")}`} label="E3_01_4_UP" text="U" />
              </div>
              <div className="ml-3">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_1_DN")}`} label="E3_01_1_DN" text="D" />
                <MotorCircleDigitalTag className={`dot mt-1 digital-tag ${useColorStatus("E3_01_2_DN")}`} label="E3_01_2_DN" text="D" />
                <MotorCircleDigitalTag className={`dot mt-1 digital-tag ${useColorStatus("E3_01_3_DN")}`} label="E3_01_3_DN" text="D" />
                <MotorCircleDigitalTag className={`dot mt-1 digital-tag ${useColorStatus("E3_01_4_DN")}`} label="E3_01_4_DN" text="D " />
              </div>
            </div>
          </div>
        </div>
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MILL GEAR BOX",
            }}
          />
          <div className="d-flex gap-1">
            <div>
              <BlackContainer
                data={{
                  label: "E3_MGB_OT_LI",
                  useClass: "greenTxt mt-1",
                  unit: "M",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "LP",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_LPP_PI",
                  useClass: "greenTxt mt-1",
                  unit: "Bar",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "HP1",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_HPP1_PI",
                  useClass: "greenTxt mt-1",
                  unit: "Bar",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "HP2",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_HPP2_PI",
                  useClass: "greenTxt mt-1",
                  unit: "Bar",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "HP3",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_HPP3_PI",
                  useClass: "greenTxt mt-1",
                  unit: "Bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="img-41 mt-1 text-center">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_M06")}`} label="E3_01_M06" />
              </div>
              <BlackContainer
                data={{
                  label: "E3_01_M06_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <div className="img-41 mt-1 text-center">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_M07")}`} label="E3_01_M07" />
              </div>
              <BlackContainer
                data={{
                  label: "E3_01_M07_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <div className="img-41 mt-1 text-center">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_M08")}`} label="E3_01_M08" />
              </div>
              <BlackContainer
                data={{
                  label: "E3_01_M08_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <div className="img-41 mt-1 text-center">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_M09")}`} label="E3_01_M09" />
              </div>
              <BlackContainer
                data={{
                  label: "E3_01_M09_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OIL TI",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_MGB_TI_1",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "IL TI",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_MGB_TI_2",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "OL TI",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_MGB_TI_3",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "IL TI",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_RT_TI_2",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "OL TI",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_RT_TI_3",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="box-1 p-1 align-self-baseline">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TRIPPLE GATE",
            }}
          />
          <div className="d-flex">
            <div>
              <div className="img-41 text-center">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_03_M01")}`} label="E3_03_M01" />
              </div>
              <BlackContainer
                data={{
                  label: "E3_03_M01_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_TG_TI_1",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_TG_PI",
                  useClass: "greenTxt mt-1",
                  unit: "mmWg",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="img-41  ml-3 text-center">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_03_M02")}`} label="E3_03_M02" />
                <BlackContainer
                  data={{
                    label: "E3_TG_OT_LI",
                    useClass: "greenTxt mt-1",
                    unit: "M",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "E3_TG_PILOT_PI",
                    useClass: "greenTxt mt-1",
                    unit: "mmWg",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
            <div className="img-41 ml-3 text-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_03_M03")}`} label="E3_03_M03" />
            </div>
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("E3_10_M01")}`,
          firstCircleText: "",
          firstCircleLabel: "E3_10_M01",
        }}
      />
      <div className="position-absolute single-text-10">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "E2_05_M01" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E2_05_M01")}`,
            secondCircleText: "",
            secondCircleLabel: "E2_05_M01",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 ml-5"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "E3_08_M03A" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E3_M09_M03A")}`,
            secondCircleText: "",
            secondCircleLabel: "E3_M09_M03A",
          }}
        />
      </div>
      <div className="bigContainer position-absolute  single-text-11">
        <div className="text-center text-11">
          <BlackContainer
            data={{
              label: "E3_SEP_FY",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_04_M01_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_04_M01_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "VRM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MILL DP",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MILL_DP",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MILL VIB",
            }}
          />
          <div className="d-flex justify-content-center align-items-center">
            <BlackContainer
              data={{
                label: "E3_MILL_XI1",
                useClass: "greenTxt mt-1",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_MILL_XI2",
                useClass: "greenTxt mt-1 ml-3",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <BlackContainer
                data={{
                  label: "E3_01_M01_II",
                  useClass: "greenTxt mt-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "E3_01_M01_JI",
                  useClass: "greenTxt mt-1 ml-3",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="img-41 text-center">
                <MotorCircleDigitalTag className={`dot pt-2 digital-tag ${useColorStatus("E3_01_M01")}`} label="E3_01_M01" />
              </div>
              <div className="d-flex mt-1">
                <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("E3_01_M01_LRS_MAX")}`} label="E3_01_M01_LRS_MAX" />
                <MotorCircleDigitalTag className={`square mt-1 ml-auto digital-tag ${useColorStatus("E3_01_M01_LRS_MIN")}`} label="E3_01_M01_LRS_MIN" />
              </div>
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot border pt-2 digital-tag ${useColorStatus("E3_01_BLR1")}`} label="E3_01_BLR1" />
              <MotorCircleDigitalTag className={`dot  border mt-2 pt-2 digital-tag ${useColorStatus("E3_01_BLR2")}`} label="E3_01_BLR2" />
            </div>
          </div>
          <MotorCircleDigitalTag className={`text-dark border mt-1 digital-tag ${useColorStatus("E3_01_DS")}`} label="E3_01_DS" text="DOOR INT" />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "E3_10_M02" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E3_10_M02")}`,
            secondCircleText: "",
            secondCircleLabel: "E3_10_M02",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 ml-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "E3_10_M03" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E3_10_M03")}`,
            secondCircleText: "",
            secondCircleLabel: "E3_10_M03",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleLabel: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "E3_10_M04" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("E3_10_M04")}`,
          secondCircleText: "",
          secondCircleLabel: "E3_10_M04",
        }}
      />
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("E3_MILL_WS_PID")}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("E3_MILL_WS_PID")}`}
            label="E3_MILL_WS_PID"
          />
          <BlackContainer
            data={{
              label: "E3_MILL_MV_WS_ZI",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MILL_IL_PI",
              useClass: "greenTxt mt-2",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_IL_TI",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <div className="img-41 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_IL_WS_SV")}`} label="E3_IL_WS_SV" />
          </div>
          <BlackContainer
            data={{
              label: "E3_IL_WTR_FI",
              useClass: "greenTxt mt-2",
              unit: "Ltr/min",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 box-1 p-1 d-flex">
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_TGV1_OPEN")}`} label="E3_TGV1_OPEN" text="1" />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_TGV3_OPEN")}`} label="E3_TGV3_OPEN" text="3" />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_TGV5_OPEN")}`} label="E3_TGV5_OPEN" text="5" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_TGV2_OPEN")}`} label="E3_TGV2_OPEN" text="2" />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_TGV4_OPEN")}`} label="E3_TGV4_OPEN" text="4" />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_TGV6_OPEN")}`} label="E3_TGV6_OPEN" text="6" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleLabel: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "E3_10_M05" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("E3_10_M05")}`,
          secondCircleText: "",
          secondCircleLabel: "E3_10_M05",
        }}
      />
      <div className="position-absolute single-text-17">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_09_M04")}`} label="E3_09_M04" />
        <div className="img-41 mt-2 mt-3 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_01_SV3")}`} label="E3_01_SV3" />
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-18 text-center">
        <BlackContainer
          data={{
            label: "E3_RH_LI",
            useClass: "greenTxt mt-2",
            unit: "M",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "E3_TG_IL_PI",
          useClass: "greenTxt mt-2 position-absolute single-text-19",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PLANT MD",
          }}
        />
        <BlackContainer
          data={{
            label: "MD_APSEB_AI",
            useClass: "greenTxt mt-1",
            unit: "MVA",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E3_OL_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E3_MILL_OL_PI",
            useClass: "greenTxt mt-1",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <MotorCircleDigitalTag className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus("E3_04_M01")}`} label="E3_04_M01" />

        <div>
          <div className="img-41 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_04_M02")}`} label="E3_04_M02" />
          </div>
          <BlackContainer
            data={{
              label: "E3_SEP_PI",
              useClass: "greenTxt mt-1",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "VRM_TPH",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-2 mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "SEP. TEMP",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "E3_SEP_TI1",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_SEP_TI2",
                useClass: "greenTxt mt-2 ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-23 box-1 p-1 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "E3_MD_TI_1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MD_TI_7",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MD_TI_11",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "E3_MD_TI_2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MD_TI_8",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MD_TI_12",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "E3_MD_TI_3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MD_DE_XI",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_MD_XI_3",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "E3_MD_TI_4",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E3_MD_TI_5",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E3_MD_TI_6",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 box-1 p-1">
        <div className="d-flex gap-1">
          <BlackContainer
            data={{
              label: "E3_EXF_TI_1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_TI_2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_TI_3",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_TI_4",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_TI_5",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_TI_6",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1 gap-1">
          <BlackContainer
            data={{
              label: "E3_EXF_TI_7",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_TI_8",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1 gap-1">
          <BlackContainer
            data={{
              label: "E3_EXF_TI_9",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_TI_10",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_XI_3",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_EXF_XI_4",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div>
          {/* <BlackContainer
            data={{
              label: "SYREN_PB",
              useClass: "greenTxt",
              unit: "State",
              unitColor: "unitColor",
            }}
          /> */}
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("SYREN_PB")} mr-2`} label="SYREN_PB" text="SYREN" />

          <BlackContainer
            data={{
              label: "E3_08_M01_ZI",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "VRM IO PNI ROOM TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "VRM_IO_PNL_TI",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E3_08_M01")}`} label="E3_08_M01" />
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E3_08_M03")}`} label="E3_08_M03" />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E3_08_M04")}`} label="E3_08_M04" />
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E3_02_M05")}`} label="E3_02_M05" />
      </div>
      <div className="position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "HOT GAS DAMP-A",
          }}
        />
        <BlackContainer
          data={{
            label: "E3_MILL_IL_PI1",
            useClass: "greenTxt mt-1",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "E3_08_M03_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square ml-3 digital-tag ${useColorStatus("E3_02_M05_OLS_IND")}`} label="E3_02_M05_OLS_IND" />
        </div>
        <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "E3_08_M04_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_02_M05_ZI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-87 position-absolute single-text-30 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GCT",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_WGF1_FB")}`} label="K2_WGF1_FB" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WGF-1",
            }}
          />
          <BlackContainer
            data={{
              label: "WGF1_STEP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_GCT_OL_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_GCT_PI",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_WGF2_FB")}`} label="K2_WGF2_FB" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WGF-2",
            }}
          />
          <BlackContainer
            data={{
              label: "WGF2_STEP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("VCM_M03_FB")}`} label="VCM_M03_FB" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VCM",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_MD_FB")}`} label="K2_MD_FB" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K2",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_KF_WF_FI",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_HF_SFF_FI",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "E3_CYC_OL_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_CYC_DP",
              useClass: "greenTxt mt-1",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "E3_EXF_IL_PI",
            useClass: "greenTxt mt-3",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E3_02_M04_ZI",
            useClass: "greenTxt mt-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div className="text-center">
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYC 1",
              }}
            />
          </div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-1"></div>

          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M02")}`} label="E3_M02" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M01")}`} label="E3_M01" />
        </div>
        <div className="text-center">
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYC 2",
              }}
            />
          </div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-1"></div>

          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M04")}`} label="E3_M04" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M03")}`} label="E3_M03" />
        </div>
        <div className="text-center">
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYC 3",
              }}
            />
          </div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-1"></div>

          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M06")}`} label="E3_M06" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M05")}`} label="E3_M05" />
        </div>
        <div className="text-center">
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYC 4",
              }}
            />
          </div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-1"></div>

          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M08")}`} label="E3_M08" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M07")}`} label="E3_M07" />
        </div>
        <div className="text-center">
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYC 5",
              }}
            />
          </div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-1"></div>

          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M10")}`} label="E3_M10" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M09")}`} label="E3_M09" />
        </div>
        <div className="text-center">
          <div className="triangle-with-squares text-center pt-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYC 6",
              }}
            />
          </div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-1"></div>

          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M12")}`} label="E3_M12" />
          <MotorCircleDigitalTag className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus("E3_M11")}`} label="E3_M11" />
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("E3_02_M04")}`} label="E3_02_M04" />
          <div className="ml-3">
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_02_M03")}`} label="E3_02_M03" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "EX.FAN",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_02_M03_II",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_02_M03_JI",
                useClass: "greenTxt mt-1",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_EXF_OT_LI",
                useClass: "greenTxt mt-1",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center bg-info p-1",
            label: "AIR SLIDE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center bg-info p-1",
            label: "AIR SLIDE",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div className="d-flex">
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M05")}`} label="E3_05_M05" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M05_II",
              useClass: "greenTxt mt-1 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M06")}`} label="E3_05_M06" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M06_II",
              useClass: "greenTxt mt-1 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div className="d-flex">
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M09")}`} label="E3_05_M09" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M09_II",
              useClass: "greenTxt mt-1 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M07")}`} label="E3_05_M07" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M07_II",
              useClass: "greenTxt mt-1 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M08")}`} label="E3_05_M08" />
        </div>
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center bg-info p-1",
            label: "AIR SLIDE",
          }}
        />
      </div>
      <div className="asset-72 position-absolute single-text-39 text-center">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("HYB_BH_TIMER_ON_FB")}`} label="HYB_BH_TIMER_ON_FB" text="HYB BH TIMER" />
        <div className="d-flex justify-content-center align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DP",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESP_BH_DP",
              useClass: "greenTxt  ml-3",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1 justify-content-center align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AIR",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESP_BH_AIR_PI",
              useClass: "greenTxt  ml-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BAG HOUSE",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 text-center d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "H-1",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_ESP_HOP1_LSH")}`} label="K2_ESP_HOP1_LSH" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M13")}`} label="K2_200_M13" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "H-2",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_ESP_HOP2_LSH")}`} label="K2_ESP_HOP2_LSH" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M14")}`} label="K2_200_M14" />
          <MotorCircleDigitalTag className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus("K2_200_M10")}`} label="K2_200_M10" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "H-3",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_ESP_HOP3_LSH")}`} label="K2_ESP_HOP3_LSH" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M15")}`} label="K2_200_M15" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "H-4",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_ESP_HOP4_LSH")}`} label="K2_ESP_HOP4_LSH" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M16")}`} label="K2_200_M16" />
          <MotorCircleDigitalTag className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus("K2_200_M12")}`} label="K2_200_M12" />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M06")}`} label="K2_200_M06" />
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M07")}`} label="K2_200_M07" />
      </div>
      <div className="position-absolute single-text-42">
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M08")}`} label="K2_200_M08" />
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2_200_M09")}`} label="K2_200_M09" />
      </div>
      <div className="position-absolute single-text-43">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_1TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_ESPBH_IL_PI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
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
      </div>
      <div className="position-absolute single-text-44">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "E3_07_M13_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="connector-icon p-1 ml-3">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_M13")}`} label="E3_07_M13" />
          </div>
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "E3_07_M14_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="connector-icon p-1 ml-3">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_M14")}`} label="E3_07_M14" />
          </div>
        </div>
        <div className="connector-icon p-1 mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E0_61_M01")}`} label="E0_61_M01" />
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <div className="img-41 mt-2 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_02_M01")}`} label="E3_02_M01" />
        </div>
        <BlackContainer
          data={{
            label: "E3_EXF_PI",
            useClass: "greenTxt mt-1",
            unit: "Bar ",
            unitColor: "unitColor",
          }}
        />
        <div className="img-41 mt-2 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_02_M02")}`} label="E3_02_M02" />
        </div>
      </div>
      <div className="position-absolute single-text-46  text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 p-1 bg-info",
            label: "PH BOILER CONVEYOR ON",
          }}
        />
        <div className="img-41 mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("PH_BOI_MAT_DVG")}`} label="PH_BOI_MAT_DVG" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "NEDO MAT.DVG",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("E3_06_M01_TIMER")}`} label="E3_06_M01_TIMER" />
        <div className="containerImage mt-1"></div>
      </div>
      <div className="position-absolute single-text-48 tect-center">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_06_M02")}`} label="E3_06_M02" />
          <div>
            <div className="containerImage ml-1 mt-1 pt-2">
              <BlackContainer
                data={{
                  label: "E3_VPP_PI",
                  useClass: "greenTxt mt-1",
                  unit: "mmWg",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="img-41 mt-2 mx-auto text-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_SV")}`} label="E3_05_SV" />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "E3_S3_DC_PI",
                useClass: "greenTxt mt-1",
                unit: "Bar ",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("E3_BS3_TIMER")}`} label="E3_BS3_TIMER" />
            <div className="containerImage mt-1 pt-2">
              <BlackContainer
                data={{
                  label: "E3_S3_BF_DP",
                  useClass: "greenTxt",
                  unit: "mmWg",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("E3_07_M02")}`} label="E3_07_M02" />
            <MotorCircleDigitalTag className={`circle-img mt-1 mx-auto digital-tag ${useFanImgTagsColorStatus("E3_07_M03")}`} label="E3_07_M03" />
          </div>
          <div className="ml-1 mt-2">
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_M01")}`} label="E3_07_M01" />
            </div>
            <BlackContainer
              data={{
                label: "E3_07_M01_II",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "E3_S4_DC_PI",
                useClass: "greenTxt mt-1",
                unit: "Bar ",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("E3_BS4_TIMER")}`} label="E3_BS4_TIMER" />
            <div className="containerImage mt-1 pt-2">
              <BlackContainer
                data={{
                  label: "E3_S4_BF_DP",
                  useClass: "greenTxt ",
                  unit: "mmWg",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("E3_07_M05")}`} label="E3_07_M05" />
            <MotorCircleDigitalTag className={`circle-img mt-1 mx-auto digital-tag ${useFanImgTagsColorStatus("E3_07_M06")}`} label="E3_07_M06" />
          </div>
          <div className="ml-1 mt-2">
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_M04")}`} label="E3_07_M04" />
            </div>
            <BlackContainer
              data={{
                label: "E3_07_M04_II",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-50"></div>
      <div className=" position-absolute single-text-51 d-flex flex-column">
        <div className="d-flex gap-1">
          <div className="containerImage pt-2 text-center">
            <BlackContainer
              data={{
                label: "E3_BS3_LI",
                useClass: "greenTxt mt-1",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BS-3",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_BS3_TOTAL_TONS",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="containerImage pt-2 text-center">
            <BlackContainer
              data={{
                label: "E3_BS4_LI",
                useClass: "greenTxt mt-1",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BS-4",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_BS4_TOTAL_TONS",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div className="containerImage pt-2 text-center">
            <BlackContainer
              data={{
                label: "E3_SS3_LI",
                useClass: "greenTxt mt-1",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SS-3",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_SS3_TOTAL_TONS",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="containerImage pt-2 text-center">
            <BlackContainer
              data={{
                label: "E3_SS4_LI",
                useClass: "greenTxt mt-1",
                unit: "M",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SS-4",
              }}
            />
            <BlackContainer
              data={{
                label: "E3_SS4_TOTAL_TONS",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-52 d-flex flex-column">
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E3_07_M07")}`} label="E3_07_M07" />
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E3_07_M08")}`} label="E3_07_M08" />
      </div>
      <div className="position-absolute single-text-53 d-flex flex-column">
        <div className="d-flex gap-1">
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E2_37_SV")}`} label="E2_37_SV" />
          </div>
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_SV3")}`} label="E3_07_SV3" />
          </div>
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_SV4")}`} label="E3_07_SV4" />
          </div>
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_SV5")}`} label="E3_07_SV5" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E2_37A_SV")}`} label="E2_37A_SV" />
          </div>
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_SV2")}`} label="E3_07_SV2" />
          </div>
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_07_SV6")}`} label="E3_07_SV6" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E2_37_M03")}`} label="E2_37_M03" />
          <BlackContainer
            data={{
              label: "E2_37_M03_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E2_07_M09")}`} label="E2_07_M09" />
          <BlackContainer
            data={{
              label: "E2_07_M09_ZII",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("E3_07_M12")}`} label="E3_07_M12" />
          <BlackContainer
            data={{
              label: "E3_07_M12_ZII",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 bg-info p-1 position-absolute single-text-55",
          label: "CF - BS3 TO VPP AS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 bg-info p-1 position-absolute single-text-56",
          label: "CF - BS4 TO SS3 AS",
        }}
      />
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "VRM SILO STOCK",
          }}
        />
        <BlackContainer
          data={{
            label: "VRM_SILO3_4_TOTAL_TONS",
            useClass: "greenTxt mt-1",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-4">
          <BlackContainer
            data={{
              label: "E3_VPP_AIR_PI",
              useClass: "greenTxt mt-1",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "VPP BFV AIR",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M01")}`} label="E3_05_M01" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M01_II",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <div className="connector-icon p-1 mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M02")}`} label="E3_05_M02" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M02_II",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M03")}`} label="E3_05_M03" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M03_II",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <div className="connector-icon p-1 mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_05_M04")}`} label="E3_05_M04" />
          </div>
          <BlackContainer
            data={{
              label: "E3_05_M04_II",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SPENT WASH PUMP",
          }}
        />
        <div className="d-flex">
          <div className="img-41 mt-2 text-center">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_SPW_PMP_VFD")}`} label="E3_SPW_PMP_VFD" />
          </div>
          <BlackContainer
            data={{
              label: "E3_SPW_PMP_II",
              useClass: "greenTxt mt-1 ml-3",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "E3_SPW_PMP_FY",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E3_SPW_PMP_SI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "E3_EXF_OL_PI",
          useClass: "greenTxt mt-1 position-absolute single-text-60",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />
      <MotorCircleDigitalTag className={`position-absolute single-text-61 circle-img mt-2 digital-tag ${useFanImgTagsColorStatus("E3_08_M02")}`} label="E3_08_M02" />
      <div className="position-absolute single-text-62">
        <MimicCaret
          parentClass="d-flex tringle-item "
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("E3_MILL_DP_PID")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("E3_MILL_DP_PID")}`}
          label="E3_MILL_DP_PID"
        />
        <BlackContainer
          data={{
            label: "E3_MILL_DP_INTR.SpManValue",
            useClass: "greenTxt mt-1",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MT COUNTER",
          }}
        />
        <BlackContainer
          data={{
            label: "METAL_TOUCH_CNT",
            useClass: "greenTxt mt-1",
            unit: "No.",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-63">
        <div className="img-41 mt-2 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E3_10_M14")}`} label="E3_10_M14" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "BE PIT PUMP",
          }}
        />
      </div>
      <div className="chimni-red position-absolute single-text-64"></div>
      <div className="position-absolute single-text-65 text-center  ">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2_ESPF_FB")}`} label="K2_ESPF_FB" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "ESP FAN",
          }}
        />
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MD WIND TEMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MD BRG. TEMP & VIB",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GB I/P SHAFT TEMP & VIB",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EXF MTR. WIND",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EXF MTR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EXF TEMP & VIB",
            }}
          /> 
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-67",
          label: "RECYC.DAMP",
        }}
      />
      <MotorCircleDigitalTag className={`square mt-2 digital-tag position-absolute single-text-68 ${useColorStatus("E3_IL_WSV2")}`} label="E3_IL_WSV2" />

      <BlackContainer
        data={{
          label: "E3_10_M01_II",
          useClass: "greenTxt position-absolute single-text-69",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <MotorCircleDigitalTag className={`square mt-2 digital-tag position-absolute single-text-70 ${useColorStatus("E3_07_M10")}`} label="E3_07_M10" />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-71",
          label: "TO VPP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-72",
          label: "TO KF",
        }}
      />
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-5"></div>
      <div className="pipeHr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17"></div>
      <div className="pipeHr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeVr position-absolute pipe-21"></div>

      <div className="yellowline-Hr  position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Vr  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Hr  position-absolute line-15"></div>
      <div className="yellowline-Vr  position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-34"></div>
      <div className="yellowline-Vr  position-absolute line-35"></div>
      <div className="yellowline-Hr  position-absolute line-36"></div>
      <div className="yellowline-Hr  position-absolute line-37"></div>
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
    </div>
  );
};
