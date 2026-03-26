import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../../index";
import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../../utils";
export const AQCBoilerFlueGasSystemL1AndhraWHRS = () => {
  return (
    <div className="AQCBoilerFlueGasSystemL1Andhra w-100 h-100 position-relative">
      <div className="CGRnBox position-absolute line-1"></div>
      <div className="yellowline-Vr d-flex align-items-center justify-content-center position-absolute line-2">
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div className="yellowline-Vr d-flex align-items-center justify-content-center position-absolute line-3">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr d-flex align-items-center justify-content-center position-absolute line-4">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"> </div>
      <div className="yellowline-Vr d-flex align-items-center justify-content-center position-absolute line-8">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr d-flex align-items-center justify-content-center position-absolute line-9">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr d-flex align-items-center justify-content-center position-absolute line-10">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Hr d-flex align-items-center justify-content-center position-absolute line-20">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr d-flex align-items-center justify-content-center position-absolute line-27">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr d-flex align-items-center justify-content-center position-absolute line-28">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr leftarrow position-absolute line-29"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-30"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-31"></div>
      <div className="img-101 d-flex flex-column align-items-center justify-content-around position-absolute single-text-1">
        <i className="fa-solid fa-up-long green-color-caret"></i>
        <div className="border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CONDENSATE PREHEATER #1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CONDENSATE PREHEATER #2",
            }}
          />
        </div>
        <i className="fa-solid fa-up-long green-color-caret"></i>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border p-1",
            label: "LT WATER HEATER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border p-1",
            label: "HT WATER HEATER",
          }}
        />
        <div className="border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HP EVAPORATOR #1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "HP EVAPORATOR #2",
            }}
          />
        </div>
        <i className="fa-solid fa-up-long green-color-caret"></i>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border p-1",
            label: "PRIMARY SUPERHEATER",
          }}
        />
        <div className="border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MIDDLE SUPERHEATER #1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MIDDLE SUPERHEATER #2",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FINAL SUPERHEATER #1",
          }}
        />
        <i className="fa-solid fa-up-long green-color-caret"></i>
      </div>
      <div className="img-101 d-flex flex-column align-items-center justify-content-end position-absolute single-text-2"></div>
      <div className="img-101 d-flex flex-column align-items-center justify-content-end position-absolute single-text-3"></div>
      <div className="img-101 d-flex flex-column align-items-center justify-content-end position-absolute single-text-4"></div>
      <div className="img-101 d-flex flex-column align-items-center justify-content-end position-absolute single-text-5">
        <i className="fa-solid fa-down-long green-color-caret"></i>
      </div>
      <div className="img-101 d-flex flex-column align-items-center justify-content-end position-absolute single-text-6"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_005_ZSS"
          )}`,
          firstCircleLabel: "W1_AQCFLG_005_ZSS",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "CP101" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_CP101"
          )}`,
          secondCircleLabel: "W1_AQCFLG_CP101",
          secondCircleText: "P",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_CP102"
          )}`,
          firstCircleLabel: "W1_AQCFLG_CP102",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "CP102" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_006_ZSS"
          )}`,
          secondCircleLabel: "W1_AQCFLG_006_ZSS",
          secondCircleText: "P",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_007_ZSS"
          )}`,
          firstCircleLabel: "W1_AQCFLG_007_ZSS",
          firstCircleText: "P",
        }}
        text={{ useClass: "text-dark mx-auto", label: "CP103" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_CP103"
          )}`,
          secondCircleLabel: "W1_AQCFLG_CP103",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_008_ZSS"
          )}`,
          firstCircleLabel: "W1_AQCFLG_008_ZSS",
          firstCircleText: "P",
        }}
        text={{ useClass: "text-dark mx-auto", label: "CP105" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "W1_AQCFLG_CP104"
          )}`,
          secondCircleLabel: "W1_AQCFLG_CP104",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        text={{ useClass: "text-dark mx-auto", label: "DPC CONVEYOR" }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-12" />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        text={{ useClass: "text-dark mx-auto", label: "ESP" }}
      />
      <div className="pipeHr position-absolute single-text-14"></div>
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT021",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AQCFLG_021_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT022",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_022_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT023",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_023_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT024",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_024_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT025",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_025_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT026",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_026_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT027",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_027_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT028",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_028_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PT-030",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_030_PT",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT-031",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCFLG_031_TT",
              useClass: "greenTxt mt-",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-20">
        <div>
          <BlackContainer
            data={{
              label: "W1_AQCFLG_006_PT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PT006",
            }}
          />
        </div>
        <div className="ml-2">
          <BlackContainer
            data={{
              label: "W1_AQCFLG_005_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TT005",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-21">
        <div>
          <BlackContainer
            data={{
              label: "W1_AQCFLG_011_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TT-011",
            }}
          />
        </div>
        <div className="ml-2">
          <BlackContainer
            data={{
              label: "W1_AQCFLG_012_PT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PT-012",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "W1_AQCFLG_001_PT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT-001",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "W1_AQCFLG_007_PT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT-007",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "W1_AQC_FLG_DMPR002_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DMPR002",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DMPR003",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AQCFLG_DMPR003_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-002",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AQCFLG_002_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-008",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AQCFLG_008_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "W1_AQCFLG_DMPR004_ZT",
          useClass: "greenTxt position-absolute single-text-28",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT013",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AQCFLG_013_PT",
            useClass: "greenTxt ml-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT020",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AQCFLG_020_PT",
            useClass: "greenTxt ml-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "W1_AQCFLG_DMPR001_ECLS",
                openLabel: "W1_AQCFLG_DMPR001_EOLS",
              }
            )}`}
            label="W1_AQCFLG_DMPR001_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DMPR001",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AQCFLG_DMPR001_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-66 position-absolute single-text-32">
        <div className="connector-icon"></div>
      </div>
      <div className="d-flex position-absolute single-text-33">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1_AQCFLG_RAV001"
          )}`}
          label="W1_AQCFLG_RAV001"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV01",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-34">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1_AQCFLG_RAV002"
          )}`}
          label="W1_AQCFLG_RAV002"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV02",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-35">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1_AQCFLG_RAV003"
          )}`}
          label="W1_AQCFLG_RAV003"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV03",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-36">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W1_AQCFLG_RAV004"
          )}`}
          label="W1_AQCFLG_RAV004"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "RAV04",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SEAL AIR FAN 3",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "W1_AQC_DMP3_M02"
          )}`}
          label="W1_AQC_DMP3_M02"
        />
      </div>
      <div className="d-flex position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SEAL AIR FAN 1",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "W1_AQC_DMP1_M02"
          )}`}
          label="W1_AQC_DMP1_M02"
        />
      </div>
      <div className="d-flex position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SEAL AIR FAN 2",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "W1_AQC_DMP2_M02"
          )}`}
          label="W1_AQC_DMP2_M02"
        />
      </div>
      <div className="d-flex position-absolute single-text-40">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              healthyLabel: "W1_AQCHP_FAB101_PH",
              runLabel: "W1_AQCHP_FAB101_RUN",
            }
          )}`}
          label="W1_AQCHP_FAB101_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "FAB101",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-41">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "W1_AQCFLG_DMP003_ECLS",
                openLabel: "W1_AQCFLG_DMP003_EOLS",
              }
            )}`}
            label="W1_AQCFLG_DMP003_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mt-01",
            label: "DMP003",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMP003_ECLS"
          )}`}
          label="W1_AQCFLG_DMP003_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMP003_EOLS"
          )}`}
          label="W1_AQCFLG_DMP003_EOLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-43">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMPR004_ECLS"
          )}`}
          label="W1_AQCFLG_DMPR004_ECLS"
          text="C"
        />
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W1_AQCFLG_DMPR004_EOLS"
            )}`}
            label="W1_AQCFLG_DMPR004_EOLS"
            text="O"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "DMPR004",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMPR003_ECLS"
          )}`}
          label="W1_AQCFLG_DMPR003_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMPR003_EOLS"
          )}`}
          label="W1_AQCFLG_DMPR003_EOLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-45">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT001_CLS"
          )}`}
          label="W1_AQCFLGKGT001_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT001_OLS"
          )}`}
          label="W1_AQCFLGKGT001_OLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-46">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT002_CLS"
          )}`}
          label="W1_AQCFLGKGT002_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT002_OLS"
          )}`}
          label="W1_AQCFLGKGT002_OLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMP001_ECLS"
          )}`}
          label="W1_AQCFLG_DMP001_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMP001_EOLS"
          )}`}
          label="W1_AQCFLG_DMP001_EOLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMPR002_ECLS"
          )}`}
          label="W1_AQCFLG_DMPR002_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMPR002_EOLS"
          )}`}
          label="W1_AQCFLG_DMPR002_EOLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT003_CLS"
          )}`}
          label="W1_AQCFLGKGT003_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT003_OLS"
          )}`}
          label="W1_AQCFLGKGT003_OLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT004_CLS"
          )}`}
          label="W1_AQCFLGKGT004_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLGKGT004_OLS"
          )}`}
          label="W1_AQCFLGKGT004_OLS"
          text="O"
        />
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-51">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLG_DMPR004_ECLS",
              openLabel: "W1_AQCFLG_DMPR004_EOLS",
            }
          )}`}
          label="W1_AQCFLG_DMPR004_EOLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-52">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLG_DMPR003_ECLS",
              openLabel: "W1_AQCFLG_DMPR003_EOLS",
            }
          )}`}
          label="W1_AQCFLG_DMPR003_EOLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-53">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLGKGT001_CLS",
              openLabel: "W1_AQCFLGKGT001_OLS",
            }
          )}`}
          label="W1_AQCFLGKGT001_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-54">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLGKGT002_CLS",
              openLabel: "W1_AQCFLGKGT002_OLS",
            }
          )}`}
          label="W1_AQCFLGKGT002_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-55">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLG_DMPR002_ECLS",
              openLabel: "W1_AQCFLG_DMPR002_EOLS",
            }
          )}`}
          label="W1_AQCFLG_DMPR002_EOLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-56">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLGKGT003_CLS",
              openLabel: "W1_AQCFLGKGT003_OLS",
            }
          )}`}
          label="W1_AQCFLGKGT003_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-57">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLGKGT004_CLS",
              openLabel: "W1_AQCFLGKGT004_OLS",
            }
          )}`}
          label="W1_AQCFLGKGT004_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="position-absolute single-text-58">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LSHH004",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "W1_AQCFLG_004_LSHH"
            )}`}
            label="W1_AQCFLG_004_LSHH"
            text="H"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LSH003",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_003_LSH")}`}
            label="W1_AQCFLG_003_LSH"
            text="H"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LSL010",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_010_LSL")}`}
            label="W1_AQCFLG_010_LSL"
            text="L"
          />
        </div>
      </div>
      <div className="position-absolute single-text-59">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "W1_AQCFLG_002_LSHH"
            )}`}
            label="W1_AQCFLG_002_LSHH"
            text="H"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSHH002",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_001_LSH")}`}
            label="W1_AQCFLG_001_LSH"
            text="H"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSH001",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_009_LSL")}`}
            label="W1_AQCFLG_009_LSL"
            text="L"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSL009",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-60">
        <i className="fa-solid fa-down-long green-color-caret"></i>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "W1_AQCFLG_008_LSHH"
            )}`}
            label="W1_AQCFLG_008_LSHH"
            text="H"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSHH008",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_007_LSH")}`}
            label="W1_AQCFLG_007_LSH"
            text="H"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSH007",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_012_LSL")}`}
            label="W1_AQCFLG_012_LSL"
            text="L"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSL012",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "W1_AQCFLG_006_LSHH"
            )}`}
            label="W1_AQCFLG_006_LSHH"
            text="H"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSHH006",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_005_LSH")}`}
            label="W1_AQCFLG_005_LSH"
            text="H"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSH005",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W1_AQCFLG_011_LSL")}`}
            label="W1_AQCFLG_011_LSL"
            text="L"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "LSL011",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-62">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "PRE DUST COLLECTOR",
          }}
        />
        <i className="fa-solid fa-down-long green-color-caret"></i>
      </div>
      <div className="position-absolute single-text-63">
        <i className="fa-solid fa-up-long green-color-caret"></i>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "VENT",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MID TAP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MID TAP2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-65",
          label: "MID AIR TAPPING",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-66",
          label: "COOLER",
        }}
      />
      <div className="fa-solid fa-left-long green-color-caret position-absolute single-text-67"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-68",
          label: "TO CHIMNEY",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-69",
          label: "TO: CLINKER SILO",
        }}
      />
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-70">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLG_DMP001_ECLS",
              openLabel: "W1_AQCFLG_DMP001_EOLS",
            }
          )}`}
          label="W1_AQCFLG_DMP001_EOLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-71",
          label: "DMP001",
        }}
      />
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-72">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            {
              closeLabel: "W1_AQCFLG_DMP001_ECLS",
              openLabel: "W1_AQCFLG_DMP001_EOLS",
            }
          )}`}
          label="W1_AQCFLG_DMP001_EOLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="d-flex position-absolute single-text-73">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMPR001_ECLS"
          )}`}
          label="W1_AQCFLG_DMPR001_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMPR001_EOLS"
          )}`}
          label="W1_AQCFLG_DMPR001_EOLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-74">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMP001_ECLS"
          )}`}
          label="W1_AQCFLG_DMP001_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQCFLG_DMP001_EOLS"
          )}`}
          label="W1_AQCFLG_DMP001_EOLS"
          text="O"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-75",
          label: "DMP002",
        }}
      />
    </div>
  );
};
