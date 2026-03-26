import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
} from "../../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../../index";

export const PHBoilerGasSystemAndhra = () => {
  return (
    <div className="PHBGSAndhra w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>

      <div className="pipeVr position-absolute pipe-1"> </div>
      <div className="pipeHr d-flex align-items-end justify-content-center position-absolute pipe-2">
        <i className="fa-solid fa-down-long"></i>
      </div>
      <div className="pipeVr position-absolute pipe-3"> </div>
      <div className="pipeHr d-flex align-items-center justify-content-center position-absolute pipe-4">
        <i className="fa-solid fa-down-long"></i>{" "}
      </div>
      <div className="pipeVr position-absolute pipe-5"> </div>
      <div className="pipeVr position-absolute pipe-6"> </div>
      <div className="containerImage position-absolute single-text-1"> </div>
      <div className="containerImage position-absolute single-text-2"></div>
      <div className="img-101 d-flex flex-column align-items-center justify-content-end pb-2 position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP SUPERHEATER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAPORATOR-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 bg-secondary p-1",
            label: "HP EVAPORATOR-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAPORATOR-3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAPORATOR-4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAPORATOR-5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAPORATOR-6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "HP EVAPORATOR-7",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP SUPERHEATER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP EVAPORATOR-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP EVAPORATOR-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP EVAPORATOR-3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1",
            label: "LP EVAPORATOR-4",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-34">
        <i className="fa-solid fa-down-long"></i>
        <i className="fa-solid fa-down-long"></i>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "M",
        }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "DUST CONVEYOR" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <div className="d-flex flex-column position-absolute single-text-6">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M111",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M111")}`}
            label="W3_PH_FLG_M111"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M113",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M113")}`}
            label="W3_PH_FLG_M113"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M115",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M115")}`}
            label="W3_PH_FLG_M115"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M117",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M117")}`}
            label="W3_PH_FLG_M117"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M119",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M119")}`}
            label="W3_PH_FLG_M119"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M121",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M121")}`}
            label="W3_PH_FLG_M121"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M123",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M123")}`}
            label="W3_PH_FLG_M123"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M125",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M125")}`}
            label="W3_PH_FLG_M125"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M127",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M127")}`}
            label="W3_PH_FLG_M127"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M129",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M129")}`}
            label="W3_PH_FLG_M129"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M131",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M131")}`}
            label="W3_PH_FLG_M131"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "PHFG_M133",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M133")}`}
            label="W3_PH_FLG_M133"
          />
        </div>
      </div>
      <div className="d-flex flex-column position-absolute single-text-7">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M112")}`}
            label="W3_PH_FLG_M112"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M112",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M114")}`}
            label="W3_PH_FLG_M114"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M114",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M116")}`}
            label="W3_PH_FLG_M116"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M116",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M118")}`}
            label="W3_PH_FLG_M118"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M118",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M120")}`}
            label="W3_PH_FLG_M120"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M120",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M122")}`}
            label="W3_PH_FLG_M122"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M122",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M124")}`}
            label="W3_PH_FLG_M124"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M124",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M126")}`}
            label="W3_PH_FLG_M126"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M126",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M128")}`}
            label="W3_PH_FLG_M128"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M128",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M130")}`}
            label="W3_PH_FLG_M130"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M130",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M132")}`}
            label="W3_PH_FLG_M132"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M132",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_PH_FLG_M134")}`}
            label="W3_PH_FLG_M134"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "PHFG_M134",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column position-absolute single-text-8">
        <MotorCircleDigitalTag
          className={`square ml-1 digital-tag ${useColorStatus(
            "W3_PH_FLG_701_LSHH"
          )}`}
          label="W3_PH_FLG_701_LSHH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_PH_FLG_701_LSH"
          )}`}
          label="W3_PH_FLG_701_LSH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_PH_FLG_701_LSL"
          )}`}
          label="W3_PH_FLG_701_LSL"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-9">
        <MotorCircleDigitalTag
          className={`square ml-1 digital-tag ${useColorStatus(
            "W3_PH_FLG_702_LSHH"
          )}`}
          label="W3_PH_FLG_702_LSHH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_PH_FLG_702_LSH"
          )}`}
          label="W3_PH_FLG_702_LSH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_PH_FLG_702_LSL"
          )}`}
          label="W3_PH_FLG_702_LSL"
        />
      </div>

      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-10">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "W3_PH_FLG_701_OLS", closeLabel: "W3_PH_FLG_701_CLS" }
          )}`}
          label="W3_PH_FLG_701_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-11">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "W3_PH_FLG_703_OLS", closeLabel: "W3_PH_FLG_703_CLS" }
          )}`}
          label="W3_PH_FLG_703_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-12">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "W3_PH_FLG_704_OLS", closeLabel: "W3_PH_FLG_704_CLS" }
          )}`}
          label="W3_PH_FLG_704_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-13">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "W3_PH_FLG_702_OLS", closeLabel: "W3_PH_FLG_702_CLS" }
          )}`}
          label="W3_PH_FLG_702_OLS"
        />
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="position-absolute single-text-14">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot grey-color`}></div>
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GLD_2",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot grey-color`}></div>
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GLD_1",
          }}
        />
      </div>
      <div className="dot-square-line d-flex flex-column align-items-center position-absolute single-text-16">
        <div className={`dot grey-color`}></div>
        <div className="yellowline-Vr position-relative"></div>
        <div className={`square grey-color`}></div>
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "W3_PH_FLG_101_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_101",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "W3_PH_FLG_101_PT",
            useClass: "greenTxt mr-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT_101",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "MILD_1",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_MLD_001_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "W3_PH_FLG_102_PT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT_102",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "W3_PH_FLG_102_TT",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_102",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "W3_PH_FLG_104_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TT_104",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT_105",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FLG_105_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "TT_106",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FLG_106_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT_108",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FLG_108_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PT_108",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FLG_108_PT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT_115",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FLG_115_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT_115",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FLG_115_PT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "W3_PH_FLG_111_TT",
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
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-28",
          label: "RAV_701",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-29",
          label: "RAV_702",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-30",
          label: "TO ID FAN",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-31",
          label: "EXISTING CONVEYOR",
        }}
      />
      <div className="position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KGV-701 & 3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "KGV-702 & 4",
          }}
        />
      </div>
      <div class="d-flex position-absolute single-text-33">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_PH_FLG_M701"
          )}`}
          label="W3_PH_FLG_M701"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_PH_FLG_M702"
          )}`}
          label="W3_PH_FLG_M702"
        />
      </div>
      <div className="fa-solid fa-down-long position-absolute single-text-35"></div>
    </div>
  );
};
