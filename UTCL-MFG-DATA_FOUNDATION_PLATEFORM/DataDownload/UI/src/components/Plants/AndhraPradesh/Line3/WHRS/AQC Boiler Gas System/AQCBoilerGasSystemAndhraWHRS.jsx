import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../../index";

export const AQCBoilerGasSystemAndhra = () => {
  return (
    <div className="AQCBGSAndhra w-100 h-100 position-relative">
      <div className="CGRnBox position-absolute line-1"></div>
      <div className="CGRnBox position-absolute line-2"></div>
      <div className="CGRnBox position-absolute line-3"></div>
      <div className="CGRnBox position-absolute line-4"></div>
      <div className="CGRnBox position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Vr position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>

      <div className="pipeHr d-flex justify-content-around align-items-center position-absolute pipe-1">
        <div className="yellowline-Hr rightarrow position-relative"></div>
        <div className="yellowline-Hr rightarrow position-relative"></div>
      </div>
      <div className="pipeHr d-flex justify-content-around align-items-center position-absolute pipe-2">
        <div className="yellowline-Hr rightarrow position-relative"></div>
      </div>
      <div className="pipeHr d-flex justify-content-around align-items-center position-absolute pipe-3">
        <div className="yellowline-Hr rightarrow position-relative"></div>
        <div className="yellowline-Hr rightarrow position-relative"></div>
      </div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeHr d-flex justify-content-around align-items-center position-absolute pipe-6">
        <div className="yellowline-Hr leftarrow position-relative"></div>
      </div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr d-flex justify-content-around align-items-center position-absolute pipe-8">
        <div className="yellowline-Hr rightarrow position-relative"></div>
      </div>
      <div className="pipeVr d-flex justify-content-around align-items-center position-absolute pipe-9">
        <div className="yellowline-Vr upArrow position-relative"></div>
      </div>

      <div className="pipeVr d-flex justify-content-around align-items-center position-absolute pipe-10">
        <div className="yellowline-Vr upArrow position-relative"></div>
      </div>

      <div className="pipeVr d-flex justify-content-around align-items-center position-absolute pipe-11">
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="pipeVr position-absolute pipe-12"></div>

      <div className="pipeVr d-flex justify-content-around align-items-center position-absolute pipe-13">
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="pipeVr d-flex justify-content-around align-items-center position-absolute pipe-14">
        <div className="yellowline-Vr upArrow position-relative"></div>
      </div>
      <div className="pipeVr d-flex justify-content-around align-items-center position-absolute pipe-15">
        <div className="yellowline-Vr upArrow position-relative"></div>
      </div>
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="pipeVr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeVr d-flex justify-content-around align-items-center position-absolute pipe-19">
        <div className="yellowline-Vr upArrow position-relative"></div>
      </div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeVr position-absolute pipe-21"></div>

      <div className="img-101 d-flex flex-column align-items-center justify-content-end position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "CPH-3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "CPH-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "CPH-1",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p-1",
              label: "LP ECO (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 bg-secondary p-1",
              label: "LP ECO (AQC)",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p-1",
              label: "HP ECO-1 (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 bg-secondary p-1",
              label: "HP ECO-1 (AQC)",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP EVAP-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP EVAP-1",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p-1",
              label: "HP ECO-2 (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 bg-secondary p-1",
              label: "HP ECO-2 (AQC)",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p-1",
              label: "HP ECO-3 (PH)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 bg-secondary p-1",
              label: "HP ECO-3 (AQC)",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP SH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAP-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAP-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP SH-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP SH-2A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP SH-2B",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "SACRIFCING TUBES",
          }}
        />
      </div>
      <div className="position-absolute single-text-2">
        <div className="containerImage"></div>
        <div className="containerImage"></div>
      </div>
      <div className="position-absolute single-text-3">
        <div className="containerImage"></div>
        <div className="containerImage"></div>
      </div>
      <div className="containerImage position-absolute single-text-4"></div>
      <div className="containerImage position-absolute single-text-5"></div>
      <div className="containerImage position-absolute single-text-6"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "W3_473CV4_RUN"
          )}`,
          firstCircleText: "M",
          firstCircleLabel: "W3_473CV4_RUNs,",
        }}
        text={{ useClass: "text-dark", label: "DCC-1" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "W3_473CV5_RUN"
          )}`,
          firstCircleLabel: "W3_473CV5_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "DCC-2" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        text={{ useClass: "text-dark mx-auto", label: "ESP" }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-10",
          label: "MID TAP-1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-11",
          label: "MID TAP-2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-12",
          label: "FROM CLINKER COOLER",
        }}
      />

      <div className="d-flex flex-column position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT_113",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_113_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_112",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_112_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_111",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_111_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_110",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_110_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_109",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_109_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT_105",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_105_PT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_108",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_108_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_107A",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_107A_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT_102",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_102_PT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-5",
            label: "TT_118",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_118_TT",
            useClass: "greenTxt ml-5",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column align-items-end position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TURBINE SPEED",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_PCS_901_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "WHRS POWER GENERATION",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MW001",
            useClass: "greenTxt mt-1",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ZT-MLD-001",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_MLD_001_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-103",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_103_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GLD-102/473SQ2",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "PT-101",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_101_PT",
            useClass: "greenTxt mt-1 ml-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "AQCFG-FLG-TIC-102",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_102_TIC",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DPT-101A",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQCFG_FLG_101A_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DPT-101B",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQCFG_FLG_101B_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DPT-101C",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQCFG_FLG_101C_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DPT-101D",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQCFG_FLG_101D_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DPT-101E",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQCFG_FLG_101E_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-117",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_117_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT-103",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_103_PT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-104",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_104_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT-104",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_104_PT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "473LD7 ZT",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_473LD7_ZT",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT-105",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_105_TT",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ZT-MLD-102/LD9",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_473LD9_ZT",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "ZT-MLD-101/LD8",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_473LD9_ZT",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-114",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_AQC_FLG_114_TT",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-4",
            label: "PT-106",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_106_PT",
            useClass: "greenTxt mt-01 ml-4",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT-107",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_AQC_FLG_107_PT",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TT-115",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_115_TT",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-107B",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_AQC_FLG_107B_TT",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_106_TT",
            useClass: "greenTxt mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT-106",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT-119",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_119_TT",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="grid-container-2 position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Deareator Level",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_DEA_LI_101",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CST Level",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_ACC_CDS_003_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DMST Level 1",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_DMS_DM_001_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DMST Level 2",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_DMS_DM_003_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HP Drum Level",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_AQC_SW_600_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LP Drum Level",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_AQC_SW_615_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BFP FDW 001",
          }}
        />

        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "W3_DEA_FDW_001_PH",
                runLabel: "W3_DEA_FDW_001_RUN",
              }
            )}`}
            label="W3_DEA_FDW_001_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BFP FDW 002",
          }}
        />

        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "W3_DEA_FDW_002_PH",
                runLabel: "W3_DEA_FDW_002_RUN",
              }
            )}`}
            label="W3_DEA_FDW_002_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BFP FDW 003",
          }}
        />

        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "W3_DEA_FDW_003_PH",
                runLabel: "W3_DEA_FDW_003_RUN",
              }
            )}`}
            label="W3_DEA_FDW_003_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Instrument Air Pressure",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_CMP_IST011_PT",
            useClass: "greenTxt ml-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ACWP Pressure",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_CWS_ACW_011_PT",
            useClass: "greenTxt ml-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TG HP Steam Pressure",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_STG_MAS_STEAM_PT_MED",
            useClass: "greenTxt ml-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TG LP Steam Pressure",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_STG_MAS_LP_ST_PT_MED",
            useClass: "greenTxt ml-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TG HP Steam Temp",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_STG_MAS_101_TT",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TG LP Steam Temp",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_STG_MAS_112_TT",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DRAIN TANK LEVEL",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_STG_TGD_251_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DRAIN POT",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_ACC_MAS_002_LT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TURBINE EXHAUST",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_STG_MAS_EXT_PT_MED",
            useClass: "greenTxt ml-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-35">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("SPARE1_DI")}`}
          label="SPARE1_DI"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("SPARE2_DI")}`}
          label="SPARE2_DI"
          text="C"
        />
      </div>
      <div className="position-absolute single-text-36">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSHH-701",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_701_LSHH"
            )}`}
            label="W3_AQC_FLG_701_LSHH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSH-701",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_701_LSH"
            )}`}
            label="W3_AQC_FLG_701_LSH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSL-701",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_701_LSL"
            )}`}
            label="W3_AQC_FLG_701_LSL"
          />
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSHH-702",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_702_LSHH"
            )}`}
            label="W3_AQC_FLG_702_LSHH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSH-702",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_702_LSH"
            )}`}
            label="W3_AQC_FLG_702_LSH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSL-702",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_702_LSL"
            )}`}
            label="W3_AQC_FLG_702_LSL"
          />
        </div>
      </div>
      <div className="position-absolute single-text-38">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSHH-703",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_703_LSHH"
            )}`}
            label="W3_AQC_FLG_703_LSHH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSH-703",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_703_LSH"
            )}`}
            label="W3_AQC_FLG_703_LSH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSL-703",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_703_LSL"
            )}`}
            label="W3_AQC_FLG_703_LSL"
          />
        </div>
      </div>
      <div className="position-absolute single-text-39">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSHH-704",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_704_LSHH"
            )}`}
            label="W3_AQC_FLG_704_LSHH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSH-704",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_704_LSH"
            )}`}
            label="W3_AQC_FLG_704_LSH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSL-704",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_704_LSL"
            )}`}
            label="W3_AQC_FLG_704_LSL"
          />
        </div>
      </div>
      <div className="position-absolute single-text-40">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSHH-705",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_705_LSHH"
            )}`}
            label="W3_AQC_FLG_705_LSHH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSH-705",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_705_LSH"
            )}`}
            label="W3_AQC_FLG_705_LSH"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "LSL-705",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_705_LSL"
            )}`}
            label="W3_AQC_FLG_705_LSL"
          />
        </div>
      </div>
      <div className="d-flex flex-column position-absolute single-text-41">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD9_OPEN_FB"
          )}`}
          label="W3_473LD9_OPEN_FB"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD9_CLOSE_FB"
          )}`}
          label="W3_473LD9_CLOSE_FB"
          text="C"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD8_OPEN_FB"
          )}`}
          label="W3_473LD8_OPEN_FB"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD8_CLOSE_FB"
          )}`}
          label="W3_473LD8_CLOSE_FB"
          text="C"
        />
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MLD-101/473LD8",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD7_OPEN_FB"
          )}`}
          label="W3_473LD7_OPEN_FB"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD7_CLOSE_FB"
          )}`}
          label="W3_473LD7_CLOSE_FB"
          text="C"
        />
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473SD4_OPEN_FB"
          )}`}
          label="W3_473SD4_OPEN_FB"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473SD4_CLOSE_FB"
          )}`}
          label="W3_473SD4_CLOSE_FB"
          text="C"
        />
      </div>
      <div className="d-flex position-absolute single-text-45">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_014_CLS"
            )}`}
            label="W3_AQC_FLG_014_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square mt-3 digital-tag ${useColorStatus(
              "W3_AQC_FLG_014_OLS"
            )}`}
            label="W3_AQC_FLG_014_OLS"
            text="O"
          />
        </div>
        <div className="ml-1">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "W3_AQC_FLG_014_CLS",
                  openLabel: "W3_AQC_FLG_014_OLS",
                }
              )}`}
              label="W3_AQC_FLG_014_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "KGV-014",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_015_CLS"
            )}`}
            label="W3_AQC_FLG_015_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square mt-3 digital-tag ${useColorStatus(
              "W3_AQC_FLG_015_OLS"
            )}`}
            label="W3_AQC_FLG_015_OLS"
            text="O"
          />
        </div>
        <div className="ml-1">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "W3_AQC_FLG_015_CLS",
                  openLabel: "W3_AQC_FLG_015_OLS",
                }
              )}`}
              label="W3_AQC_FLG_015_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "KGV-011",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column position-absolute single-text-46">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_001_OLS"
          )}`}
          label="W3_AQC_FLG_001_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_001_CLS"
          )}`}
          label="W3_AQC_FLG_001_CLS"
          text="C"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_005_OLS"
          )}`}
          label="W3_AQC_FLG_005_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_005_CLS"
          )}`}
          label="W3_AQC_FLG_005_CLS"
          text="C"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_004_OLS"
          )}`}
          label="W3_AQC_FLG_004_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_004_CLS"
          )}`}
          label="W3_AQC_FLG_004_CLS"
          text="C"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_003_OLS"
          )}`}
          label="W3_AQC_FLG_003_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_003_CLS"
          )}`}
          label="W3_AQC_FLG_003_CLS"
          text="C"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_002_OLS"
          )}`}
          label="W3_AQC_FLG_002_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_FLG_002_CLS"
          )}`}
          label="W3_AQC_FLG_002_CLS"
          text="C"
        />
      </div>
      <div className="d-flex position-absolute single-text-51">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_011_CLS"
            )}`}
            label="W3_AQC_FLG_011_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square mt-3 digital-tag ${useColorStatus(
              "W3_AQC_FLG_011_OLS"
            )}`}
            label="W3_AQC_FLG_011_OLS"
            text="O"
          />
        </div>
        <div className="ml-1">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "W3_AQC_FLG_011_CLS",
                  openLabel: "W3_AQC_FLG_011_OLS",
                }
              )}`}
              label="W3_AQC_FLG_011_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "KGV-011",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_012_CLS"
            )}`}
            label="W3_AQC_FLG_012_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square mt-3 digital-tag ${useColorStatus(
              "W3_AQC_FLG_012_OLS"
            )}`}
            label="W3_AQC_FLG_012_OLS"
            text="O"
          />
        </div>
        <div className="ml-1">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "W3_AQC_FLG_012_CLS",
                  openLabel: "W3_AQC_FLG_012_OLS",
                }
              )}`}
              label="W3_AQC_FLG_012_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "KGV-012",
            }}
          />
        </div>
        <div className="ml-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_FLG_013_CLS"
            )}`}
            label="W3_AQC_FLG_013_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square mt-3 digital-tag ${useColorStatus(
              "W3_AQC_FLG_013_OLS"
            )}`}
            label="W3_AQC_FLG_013_OLS"
            text="O"
          />
        </div>
        <div className="ml-1">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "W3_AQC_FLG_013_CLS",
                  openLabel: "W3_AQC_FLG_013_OLS",
                }
              )}`}
              label="W3_AQC_FLG_013_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "KGV-013",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-52">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_FLG_001_OLS",
                closeLabel: "W3_AQC_FLG_001_CLS",
              }
            )}`}
            label="W3_AQC_FLG_001_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "KGV-001",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-53">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_FLG_002_OLS",
                closeLabel: "W3_AQC_FLG_002_CLS",
              }
            )}`}
            label="W3_AQC_FLG_002_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "KGV-002",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-54">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_FLG_003_OLS",
                closeLabel: "W3_AQC_FLG_003_CLS",
              }
            )}`}
            label="W3_AQC_FLG_003_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "KGV-003",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-55">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_FLG_004_OLS",
                closeLabel: "W3_AQC_FLG_004_CLS",
              }
            )}`}
            label="W3_AQC_FLG_004_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "KGV-004",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-56">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_FLG_005_OLS",
                closeLabel: "W3_AQC_FLG_005_CLS",
              }
            )}`}
            label="W3_AQC_FLG_005_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "KGV-005",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-57">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M701"
          )}`}
          label="W3_AQC_FLG_M701"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV-701",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-58">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M702"
          )}`}
          label="W3_AQC_FLG_M702"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV-702",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-59">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M703"
          )}`}
          label="W3_AQC_FLG_M703"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV-703",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-60">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M704"
          )}`}
          label="W3_AQC_FLG_M704"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV-704",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-61">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M705"
          )}`}
          label="W3_AQC_FLG_M705"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV-705",
          }}
        />
      </div>

      <div className="text-center position-absolute single-text-62">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-102",
          }}
        />

        <BlackContainer
          data={{
            label: "W3_AQC_FLG_102_TT",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT-101",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_FLG_101_TT",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-63">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "SP",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("SPARE3_DI")}`}
          label="SPARE3_DI"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-64">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD1_OPEN_FB"
          )}`}
          label="W3_473LD1_OPEN_FB"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473LD1_CLOSE_FB"
          )}`}
          label="W3_473LD1_CLOSE_FB"
          text="C"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-65">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473SD2_OPEN_FB"
          )}`}
          label="W3_473SD2_OPEN_FB"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_473SD2_CLOSE_FB"
          )}`}
          label="W3_473SD2_CLOSE_FB"
          text="C"
        />
      </div>
    </div>
  );
};
