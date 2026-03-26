import { BlackContainer, TextContainerWithWrapWord, MotorCircleDigitalTag, PipeWithCircles, MimicCaret } from "../../../index";

import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useImgGateColorStatusForNewPlantScreen,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const RabhNathdwaraL3 = () => {
  return (
    <div className="RABHNathdwaraL3 w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP1_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP2_DPT",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="pipeVr position-absolute single-text-2"></div>
      <div className="position-absolute single-text-3">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP1_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP1_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-4 d-flex">
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP1_LS")}`} label="PH_423BF1_HP1_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP2_LS")}`} label="PH_423BF1_HP2_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP3_LS")}`} label="PH_423BF1_HP3_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP4_LS")}`} label="PH_423BF1_HP4_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP5_LS")}`} label="PH_423BF1_HP5_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP6_LS")}`} label="PH_423BF1_HP6_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP7_LS")}`} label="PH_423BF1_HP7_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP8_LS")}`} label="PH_423BF1_HP8_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP9_LS")}`} label="PH_423BF1_HP9_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP10_LS")}`} label="PH_423BF1_HP10_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP11_LS")}`} label="PH_423BF1_HP11_LS" />
        </div>
        <div className="triangle-with-squares text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("PH_423BF1_HP12_LS")}`} label="PH_423BF1_HP12_LS" />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_423BF1_PT1",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423BF1_TT1",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "423BF1 BAGHOUSE PURGING",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_BH_SEQ_NO",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_423BF1_DPT",
              useClass: "greenTxt ml-3",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "PH_423BF1_PT3",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_423BF1_PT4",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_423BF1_PT5",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_423BF1_PT2",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423BF1_TT4",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA1",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA1")}`} label="PH_423RA1_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA2",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA2")}`} label="PH_423RA2_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA3",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA3")}`} label="PH_423RA3_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA4",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA4")}`} label="PH_423RA4_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA5",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA5")}`} label="PH_423RA5_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA6",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA6")}`} label="PH_423RA6_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA7",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA7")}`} label="PH_423RA7_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA8",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA8")}`} label="PH_423RA8_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RA9",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RA9")}`} label="PH_423RA9_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RAA",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RAA")}`} label="PH_423RAA_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RAB",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RAB")}`} label="PH_423RAB_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RAC",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RAC")}`} label="PH_423RAC_RUN" />
        </div>
        <div className="d-flex align-items-end justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RAD",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RAD")}`} label="PH_423RAD_RUN" />
        </div>
      </div>
      <div className=" position-absolute single-text-7 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA1",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA2",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA3",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA4",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA5",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA6",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA7",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA8",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GA9",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GAA",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GAB",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GAC",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GAD",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-8 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423LD2A_EOLS",
              closeLabel: "PH_423LD2A_ECLS",
              healthyLabel: "PH_423LD2A_PH",
            })}`}
            label="PH_423LD2A_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mt-3",
            label: "423LD2A",
          }}
        />
      </div>
      <div className=" position-absolute single-text-9 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423LD2_EOLS",
              closeLabel: "PH_423LD2_ECLS",
              healthyLabel: "PH_423LD2_PH",
            })}`}
            label="PH_423LD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mt-2",
            label: "423LD2",
          }}
        />
      </div>

      <div className="position-absolute single-text-11 d-flex flex-column">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FOR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "DILUTION",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FRESH AIR",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FOR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "DILUTION",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FRESH AIR",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12  text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Form",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Raw Mill",
          }}
        />
      </div>

      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "PH_423LD2A",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423LD2A_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-15 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Dust",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Topper",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <BlackContainer
          data={{
            label: "PH_423LD2",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423LD2_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423LD2_PID",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "PH_423SD2",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423SD2_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423FN3",
            useClass: "greenTxt mt-4",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423FN3_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423FN3_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18  text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Form",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PM FAN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "(MIX CMAMBER)",
          }}
        />
      </div>

      <div className="position-absolute single-text-20 d-flex">
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID1_CLS")}`} label="PH_423BF1_ID1_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID1_OLS")}`} label="PH_423BF1_ID1_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID2_CLS")}`} label="PH_423BF1_ID2_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID2_OLS")}`} label="PH_423BF1_ID2_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID3_CLS")}`} label="PH_423BF1_ID3_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID3_OLS")}`} label="PH_423BF1_ID3_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID4_CLS")}`} label="PH_423BF1_ID4_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID4_OLS")}`} label="PH_423BF1_ID4_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID5_CLS")}`} label="PH_423BF1_ID5_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID5_OLS")}`} label="PH_423BF1_ID5_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID6_CLS")}`} label="PH_423BF1_ID6_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID6_OLS")}`} label="PH_423BF1_ID6_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID7_CLS")}`} label="PH_423BF1_ID7_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID7_OLS")}`} label="PH_423BF1_ID7_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID8_CLS")}`} label="PH_423BF1_ID8_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID8_OLS")}`} label="PH_423BF1_ID8_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID9_CLS")}`} label="PH_423BF1_ID9_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID9_OLS")}`} label="PH_423BF1_ID9_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID10_CLS")}`} label="PH_423BF1_ID10_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID10_OLS")}`} label="PH_423BF1_ID10_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID11_CLS")}`} label="PH_423BF1_ID11_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID11_OLS")}`} label="PH_423BF1_ID11_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID12_CLS")}`} label="PH_423BF1_ID12_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID12_OLS")}`} label="PH_423BF1_ID12_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID13_CLS")}`} label="PH_423BF1_ID13_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID13_OLS")}`} label="PH_423BF1_ID13_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID14_CLS")}`} label="PH_423BF1_ID14_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID14_OLS")}`} label="PH_423BF1_ID14_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID15_CLS")}`} label="PH_423BF1_ID15_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID15_OLS")}`} label="PH_423BF1_ID15_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID16_CLS")}`} label="PH_423BF1_ID16_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID16_OLS")}`} label="PH_423BF1_ID16_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID17_CLS")}`} label="PH_423BF1_ID17_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID17_OLS")}`} label="PH_423BF1_ID17_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID18_CLS")}`} label="PH_423BF1_ID18_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID18_OLS")}`} label="PH_423BF1_ID18_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID19_CLS")}`} label="PH_423BF1_ID19_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID19_OLS")}`} label="PH_423BF1_ID19_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID20_CLS")}`} label="PH_423BF1_ID20_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID20_OLS")}`} label="PH_423BF1_ID20_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID21_CLS")}`} label="PH_423BF1_ID21_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID21_OLS")}`} label="PH_423BF1_ID21_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID22_CLS")}`} label="PH_423BF1_ID22_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID22_OLS")}`} label="PH_423BF1_ID22_OLS" text="O" />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID23_CLS")}`} label="PH_423BF1_ID23_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID23_OLS")}`} label="PH_423BF1_ID23_OLS" text="O" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1_ID24_CLS")}`} label="PH_423BF1_ID24_CLS" text="C" />
            <MotorCircleDigitalTag className={`square mt-3 digital-tag ${useColorStatus("PH_423BF1_ID24_OLS")}`} label="PH_423BF1_ID24_OLS" text="O" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA1_CLS")}`} label="PH_423GA1_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA1_OLS")}`} label="PH_423GA1_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA2_CLS")}`} label="PH_423GA2_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA2_OLS")}`} label="PH_423GA2_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA3_CLS")}`} label="PH_423GA3_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA3_OLS")}`} label="PH_423GA3_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA4_CLS")}`} label="PH_423GA4_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA4_OLS")}`} label="PH_423GA4_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA5_OLS")}`} label="PH_423GA5_OLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA5_CLS")}`} label="PH_423GA5_CLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA6_CLS")}`} label="PH_423GA6_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA6_OLS")}`} label="PH_423GA6_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA7_CLS")}`} label="PH_423GA7_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA7_OLS")}`} label="PH_423GA7_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA8_CLS")}`} label="PH_423GA8_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA8_OLS")}`} label="PH_423GA8_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GA9_CLS")}`} label="PH_423GA9_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GA9_OLS")}`} label="PH_423GA9_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GAA_CLS")}`} label="PH_423GAA_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GAA_OLS")}`} label="PH_423GAA_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GAB_CLS")}`} label="PH_423GAB_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GAB_OLS")}`} label="PH_423GAB_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GAC_CLS")}`} label="PH_423GAC_CLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GAC_OLS")}`} label="PH_423GAC_OLS" text="O" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423GAD_OLS")}`} label="PH_423GAD_OLS" text="C" />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("PH_423GAD_CLS")}`} label="PH_423GAD_CLS" text="O" />
        </div>
      </div>
      <div className="position-absolute single-text-22 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info p-1 mx-auto",
            label: "423AM1",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "423AM1",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423AM1_O2",
              useClass: "greenTxt ml-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOX",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423AM1_NOX",
              useClass: "greenTxt ml-2 ",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SOX",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423AM1_SOX",
              useClass: "greenTxt ml-2 ",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "PH_423SK1_PT",
              useClass: "greenTxt  ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "PH_423SK1_FT",
                useClass: "greenTxt  ",
                unit: "m/sec",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_423SK1_TT",
                useClass: "greenTxt mt-2 ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "PH_423FN1_JI",
            useClass: "greenTxt ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-2 d-flex">
          <BlackContainer
            data={{
              label: "PH_423FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423SK1_DT",
              useClass: "greenTxt ml-2 ",
              unit: "mg/Nmq",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_423FN1_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423FN1",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-24 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423SD1_EOLS",
              closeLabel: "PH_423SD1_ECLS",
              healthyLabel: "PH_423SD1_PH",
            })}`}
            label="PH_423SD1_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mt-2",
            label: "423SD1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-25">
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423FN1_RUN", healthyLabel: "PH_423FN1_PH" })} `} label="PH_423FN1_RUN" />
      </div>
      <div className=" position-absolute single-text-26 text-center">
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423SK1_RUN", healthyLabel: "PH_423SK1_PH" })} `} label="PH_423SK1_RUN" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "423SK1",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 chimni-red"></div>
      <div className="position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "PH_423SD1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423SD1_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423FN1_PID",
            useClass: "greenTxt mt-1 ml-4",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "BH_FAN_RST_TIME",
            useClass: "greenTxt mt-2 ml-4",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "PH_423BE1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "423BE1",
          }}
        />
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BE1_BMS")}`} label="PH_423BE1_BMS" text="BMS" />
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423BE1_RUN", healthyLabel: "PH_423BE1_PH" })} `} label="PH_423BE1_RUN" />
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423BE1_M02_RUN", healthyLabel: "PH_423BE1_M02_PH" })} `}
            label="PH_423BE1_M02_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-31">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BE1_TS1")}`} label="PH_423BE1_TS1" text="TS1" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("PH_423BE1_ZS1")}`} label="PH_423BE1_ZS1" text="ZS1" />
      </div>
      <div className="position-absolute single-text-32">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423DG1_EX_CLS")}`} label="PH_423DG1_EX_CLS" text="CL" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("PH_423DG1_EX_OLS")}`} label="PH_423DG1_EX_OLS" text="OP" />
      </div>
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-33 ${useColorStatus("PH_423BE1_LS1")}`} label="PH_423BE1_LS1" text="LS1" />
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-34 ${useColorStatus("PH_423BE1_ZSS1")}`} label="PH_423BE1_ZSS1" text="ZSS" />
      <div className="position-absolute single-text-35 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO NOT DUST BN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "423BL1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-36 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "423SG3",
          }}
        />
        <div className="dot-square-line ml-2 d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423SG3_EOLS",
              closeLabel: "PH_423SG3_ECLS",
              healthyLabel: "PH_423SG3_PH",
            })}`}
            label="PH_423SG3_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-37 box-1 p-3 bg-info">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WHRS",
          }}
        />
      </div>
      {/* <div className="  gray-green-red-img gray-img"></div> */}
      <MotorCircleDigitalTag
        className={`position-absolute single-text-38 digital-tag gray-green-red-img ${useImgGateColorStatusForNewPlantScreen({
          openLabel: "PH_423DG1_1_OLS",
          closeLabel: "PH_423DG1_1_CLS",
          healthyLabel: "PH_423DG1_1_PH",
        })}`}
        label="PH_423DG1_1_OLS"
      />
      <div className=" position-absolute single-text-39 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "423SG2",
          }}
        />
        <div className="dot-square-line ml-2 d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423SG2_OLS",
              closeLabel: "PH_423SG2_CLS",
            })}`}
            label="PH_423SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-40 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "423SG1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423SG1_OLS",
              closeLabel: "PH_423SG1_CLS",
            })}`}
            label="PH_423SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "TO 331AS4",
        }}
      />
      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO RAW MILLSECTION AS4",
          }}
        />
      </div>

      <div className="containerImage position-absolute single-text-45">
        <MotorCircleDigitalTag className={`dot digital-tag ml-2 mt-1 ${useColorStatus("PH_423BI1_LS")}`} label="PH_423BI1_LS" text="L" />
        <div className="text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "423BI1",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_423BI1_WT",
              useClass: "greenTxt mt-1 ",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-46 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "423SG4",
          }}
        />
        <div className="dot-square-line ml-2 d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423SG4_OLS",
              closeLabel: "PH_423SG4_CLS",
            })}`}
            label="PH_423SG4_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-47 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "423SD2",
          }}
        />
        <div className="dot-square-line ml-2 d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "PH_423SD2_EOLS",
              closeLabel: "PH_423SD2_ECLS",
              healthyLabel: "PH_423SD2_PH",
            })}`}
            label="PH_423SD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-48 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363LD4",
          }}
        />
        <div className="dot-square-line ml-2 d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "NA",
              closeLabel: "NA",
            })}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO KILN FEED BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "AIRSLIDE 413ASC",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "PH_423RAE",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423RAE_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423RAE_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-51 text-center d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423BL1A_RUN", healthyLabel: "PH_423BL1A_PH" })}`}
            label="PH_423BL1A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "423BL1A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info",
              label: "BL1A",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423BL1B_RUN", healthyLabel: "PH_423BL1B_PH" })}`}
            label="PH_423BL1B_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "423BL1B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-info",
              label: "BL1B",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "423BF2",
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF2")}`} label="PH_423BF2" />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423FN2_RUN", healthyLabel: "PH_423FN2_PH" })}`}
                label="PH_423FN2_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "423FN2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-53 d-flex align-items-end justify-content-center">
        <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgsTagsColorStatusForNewPlantScreens("PH_423RAF")}`} label="PH_423RAF_RUN" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "432RA1",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PH_423BF2_DPT",
          useClass: "greenTxt position-absolute single-text-54",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_423BF2_PT1",
          useClass: "greenTxt position-absolute single-text-55",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex justify-content-center align-items-center squareplustri position-absolute single-text-56">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("PH_423BF1")}`} label="PH_423BF1" />
      </div>
      <MotorCircleDigitalTag className={`square position-absolute single-text-57 digital-tag ${useColorStatus("PH_423BF1_HP13_LS")}`} label="PH_423BF1_HP13_LS" text="LS" />
      <div className="position-absolute single-text-58">
        <BlackContainer
          data={{
            label: "RM_362_LD4",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "#COM",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-59">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center mt-1"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_423BV1_OLS", closeLabel: "PH_423BV1_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "PH_423BV1_OLS", closeLabel: "PH_423BV1_CLS" })}`}
          label="PH_423BV1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "423BV1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-60">
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP3_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP4_DPT",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-61">
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP5_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP6_DPT",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-62">
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP7_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP8_DPT",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-63">
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP9_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP10_DPT",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-64">
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP11_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_CMP12_DPT",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP2_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP2_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP3_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP3_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP4_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP4_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-68">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP5_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP5_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP6_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP6_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-70">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP7_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP7_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-71">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP8_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP8_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-72">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP9_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP9_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-73">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP10_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP10_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-74">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP11_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP11_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-75">
        <BlackContainer
          data={{
            label: "PH_423BF1_HP12_DPT",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_423BF1_HP12_TE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "423CV1" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423CV1_RUN", healthyLabel: "PH_423CV1_PH" })}`,
          secondCircleLabel: "PH_423CV1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "423CV2" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423CV2_RUN", healthyLabel: "PH_423CV2_PH" })}`,
          secondCircleLabel: "PH_423CV2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "423CV3" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423CV3_RUN", healthyLabel: "PH_423CV3_PH" })}`,
          secondCircleLabel: "PH_423CV3_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "423CV4" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423CV4_RUN", healthyLabel: "PH_423CV4_PH" })}`,
          secondCircleLabel: "PH_423CV4_RUN",
        }}
      />
      <div className="pipe dotted-pipe position-absolute pipe-5"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "443CV1" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_443CV1_RUN", healthyLabel: "PH_443CV1_PH" })}`,
          secondCircleLabel: "PH_443CV1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "423CV5" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423CV5_RUN", healthyLabel: "PH_423CV5_PH" })}`,
          secondCircleLabel: "PH_423CV5_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "423CV6" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PH_423CV6_RUN", healthyLabel: "PH_423CV6_PH" })}`,
          secondCircleLabel: "PH_423CV6_RUN",
        }}
      />
      <div class="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-10"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-11"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-12"></div>
      <div class="yellowline-Hr  position-absolute line-13"></div>
      <div class="yellowline-Hr  position-absolute line-14"></div>
      <div class="yellowline-Vr  position-absolute line-15"></div>
      <div class="yellowline-Hr  position-absolute line-16"></div>
      <div class="yellowline-Hr  position-absolute line-17"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-18"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-19"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-20"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-21"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-22"></div>
      <div class="yellowline-Vr  position-absolute line-23"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-24"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-25"></div>
      <div class="yellowline-Vr  position-absolute line-26"></div>
      <div class="yellowline-Vr downArrow position-absolute line-27"></div>
      <div class="yellowline-Vr  position-absolute line-28"></div>
      <div class="yellowline-Hr  position-absolute line-29"></div>
      <div class="yellowline-Vr  position-absolute line-30"></div>
      <div class="yellowline-Vr  position-absolute line-31"></div>
      <div class="yellowline-Hr  position-absolute line-32"></div>
      <div class="yellowline-Vr  position-absolute line-33"></div>
      <div class="yellowline-Hr  position-absolute line-34"></div>
      <div class="yellowline-Vr  position-absolute line-35"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-36"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-37"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-38"></div>
      <div class="yellowline-Hr  position-absolute line-39"></div>
      <div class="yellowline-Vr  position-absolute line-40"></div>
      <div class="yellowline-Vr  position-absolute line-41"></div>
      <div class="yellowline-Vr downArrow position-absolute line-42"></div>
    </div>
  );
};
