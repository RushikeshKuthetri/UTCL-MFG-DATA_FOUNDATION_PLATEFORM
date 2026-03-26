import { BlackContainer, TextContainerWithWrapWord, MotorCircleDigitalTag, PipeWithCircles } from "../../../index";

import { useColorStatus, useDampersValveTagsColorStatusForNewPlantScreens, useGateTagsColorStatusForNewPlantScreens, useMotorTagsColorStatusForNewPlantScreens } from "../../../../utils";

export const ClinkerBulkerLoadingNathdwaraL3 = () => {
  return (
    <div className="ClinkerBulkLNathdwaraL3 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
        }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot grey-color`,
        }}
      />
      <div className=" position-absolute single-text-1 d-flex">
        <div className="containerImage"></div>
        <div className="containerImage"></div>
      </div>
      <div className=" position-absolute single-text-2">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_513BL_S2SG1_OLS", closeLabel: "CMH_513BL_S2SG1_CLS" })}`}
            label="CMH_513BL_S2SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK2_CG1_OLS",
              closeLabel: "CMH_513BLK2_CG1_CLS",
              healthyLabel: "CMH_513BLK2_CG1_PH",
            })}`}
            label="CMH_513BLK2_CG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="boxContainer">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S2BF1_PS")}`} label="BL_S2BF1_PS" text="PS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_513BLK2_BF1")}`} label="CMH_513BLK2_BF1" />
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("BL_S2BF1_TMR_MK")}`} label="BL_S2BF1_TMR_MK" text="T" />
          </div>
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S2BF1_DPS")}`} label="BL_S2BF1_DPS" text="DPS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2BF1_TMR_ON_FB")}`} label="BL_S2BF1_TMR_ON_FB" />
          </div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK2_SP1_OLS",
              closeLabel: "CMH_513BLK2_SP1_CLS",
              healthyLabel: "CMH_513BLK2_SP1_PH",
            })}`}
            label="CMH_513BLK2_SP1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="triangle-with-squares cone-1"></div>
      </div>
      <div className=" position-absolute single-text-3">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_513BL_S2SG2_OLS", closeLabel: "CMH_513BL_S2SG2_CLS" })}`}
            label="CMH_513BL_S2SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK2_CG2_OLS",
              closeLabel: "CMH_513BLK2_CG2_CLS",
              healthyLabel: "CMH_513BLK2_CG2_PH",
            })}`}
            label="CMH_513BLK2_CG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="boxContainer">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S2BF2_PS")}`} label="BL_S2BF2_PS" text="PS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_513BLK2_BF2")}`} label="CMH_513BLK2_BF2" />
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("BL_S2BF2_TMR_MK")}`} label="BL_S2BF2_TMR_MK" text="T" />
          </div>
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S2BF2_DPS")}`} label="BL_S2BF2_DPS" text="DPS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2BF2_TMR_ON_FB")}`} label="BL_S2BF2_TMR_ON_FB" />
          </div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK2_SP2_OLS",
              closeLabel: "CMH_513BLK2_SP2_CLS",
              healthyLabel: "CMH_513BLK2_SP2_PH",
            })}`}
            label="CMH_513BLK2_SP2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="triangle-with-squares cone-1"></div>
      </div>
      <div className=" position-absolute single-text-4">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_513BL_S2SG3_OLS", closeLabel: "CMH_513BL_S2SG3_CLS" })}`}
            label="CMH_513BL_S2SG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK2_CG3_OLS",
              closeLabel: "CMH_513BLK2_CG3_CLS",
              healthyLabel: "CMH_513BLK2_CG3_PH",
            })}`}
            label="CMH_513BLK2_CG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="boxContainer">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S2BF3_PS")}`} label="BL_S2BF3_PS" text="PS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_513BLK2_BF3")}`} label="CMH_513BLK2_BF3" />
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("BL_S2BF3_TMR_MK")}`} label="BL_S2BF3_TMR_MK" text="T" />
          </div>
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S2BF3_DPS")}`} label="BL_S2BF3_DPS" text="DPS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2BF3_TMR_ON_FB")}`} label="BL_S2BF3_TMR_ON_FB" />
          </div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK2_SP3_OLS",
              closeLabel: "CMH_513BLK2_SP3_CLS",
              healthyLabel: "CMH_513BLK2_SP3_PH",
            })}`}
            label="CMH_513BLK2_SP3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="triangle-with-squares cone-1"></div>
      </div>
      <div className=" position-absolute single-text-5">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_513BL_S1SG1_OLS", closeLabel: "CMH_513BL_S1SG1_CLS" })}`}
            label="CMH_513BL_S1SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK1_CG1_OLS",
              closeLabel: "CMH_513BLK1_CG1_CLS",
              healthyLabel: "CMH_513BLK1_CG1_PH",
            })}`}
            label="CMH_513BLK1_CG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="boxContainer">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S1BF1_PS")}`} label="BL_S1BF1_PS" text="PS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_513BLK1_BF1")}`} label="CMH_513BLK1_BF1" />
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("BL_S1BF1_TMR_MK")}`} label="BL_S1BF1_TMR_MK" text="T" />
          </div>
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S1BF1_DPS")}`} label="BL_S1BF1_DPS" text="DPS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1BF1_TMR_ON_FB")}`} label="BL_S1BF1_TMR_ON_FB" />
          </div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK1_SP1_OLS",
              closeLabel: "CMH_513BLK1_SP1_CLS",
              healthyLabel: "CMH_513BLK1_SP1_PH",
            })}`}
            label="CMH_513BLK1_SP1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="triangle-with-squares cone-1"></div>
      </div>
      <div className=" position-absolute single-text-6">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_513BL_S1SG2_OLS", closeLabel: "CMH_513BL_S1SG2_CLS" })}`}
            label="CMH_513BL_S1SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK1_CG2_OLS",
              closeLabel: "CMH_513BLK1_CG2_CLS",
              healthyLabel: "CMH_513BLK1_CG2_PH",
            })}`}
            label="CMH_513BLK1_CG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="boxContainer">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S1BF2_PS")}`} label="BL_S1BF2_PS" text="PS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_513BLK1_BF2")}`} label="CMH_513BLK1_BF2" />
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("BL_S1BF2_TMR_MK")}`} label="BL_S1BF2_TMR_MK" text="T" />
          </div>
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S1BF2_DPS")}`} label="BL_S1BF2_DPS" text="DPS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1BF2_TMR_ON_FB")}`} label="BL_S1BF2_TMR_ON_FB" />
          </div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK1_SP2_OLS",
              closeLabel: "CMH_513BLK1_SP2_CLS",
              healthyLabel: "CMH_513BLK1_SP2_PH",
            })}`}
            label="CMH_513BLK1_SP2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="triangle-with-squares cone-1"></div>
      </div>
      <div className=" position-absolute single-text-7">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_513BL_S1SG3_OLS", closeLabel: "CMH_513BL_S1SG3_CLS" })}`}
            label="CMH_513BL_S1SG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK1_CG3_OLS",
              closeLabel: "CMH_513BLK1_CG3_CLS",
              healthyLabel: "CMH_513BLK1_CG3_PH",
            })}`}
            label="CMH_513BLK1_CG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="boxContainer">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S1BF3_PS")}`} label="BL_S1BF3_PS" text="PS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_513BLK1_BF3")}`} label="CMH_513BLK1_BF3" />
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("BL_S1BF3_TMR_MK")}`} label="BL_S1BF3_TMR_MK" text="T" />
          </div>
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("BL_S1BF3_DPS")}`} label="BL_S1BF3_DPS" text="DPS" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1BF3_TMR_ON_FB")}`} label="BL_S1BF3_TMR_ON_FB" />
          </div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_513BLK1_SP3_OLS",
              closeLabel: "CMH_513BLK1_SP3_CLS",
              healthyLabel: "CMH_513BLK1_SP3_PH",
            })}`}
            label="CMH_513BLK1_SP3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="triangle-with-squares cone-1"></div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2SG1_OLS")}`} label="BL_S2SG1_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2SG1_CLS")}`} label="BL_S2SG1_CLS" />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2SG2_OLS")}`} label="BL_S2SG2_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2SG2_CLS")}`} label="BL_S2SG2_CLS" />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2SG3_OLS")}`} label="BL_S2SG3_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S2SG3_CLS")}`} label="BL_S2SG3_CLS" />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1SG1_OLS")}`} label="BL_S1SG1_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1SG1_CLS")}`} label="BL_S1SG1_CLS" />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1SG2_OLS")}`} label="BL_S1SG2_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1SG2_CLS")}`} label="BL_S1SG2_CLS" />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1SG3_OLS")}`} label="BL_S1SG3_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("BL_S1SG3_CLS")}`} label="BL_S1SG3_CLS" />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_513BLK2_CG1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL_S2CG1_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH1_UPLS")}`} label="BL_S2TL_CH1_UPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH1_MPLS")}`} label="BL_S2TL_CH1_MPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH1_DNLS")}`} label="BL_S2TL_CH1_DNLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-4 ${useColorStatus("BL_S2TLT1_LS")}`} label="BL_S2TLT1_LS" />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_513BLK2_CG2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL_S2CG2_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH2_UPLS")}`} label="BL_S2TL_CH2_UPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH2_MPLS")}`} label="BL_S2TL_CH2_MPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH2_DNLS")}`} label="BL_S2TL_CH2_DNLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-4 ${useColorStatus("BL_S2TLT2_LS")}`} label="BL_S2TLT2_LS" />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_513BLK2_CG3",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL_S2CG3_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH3_UPLS")}`} label="BL_S2TL_CH3_UPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH3_MPLS")}`} label="BL_S2TL_CH3_MPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S2TL_CH3_DNLS")}`} label="BL_S2TL_CH3_DNLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-4 ${useColorStatus("BL_S2TLT3_LS")}`} label="BL_S2TLT3_LS" />
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_513BLK1_CG1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL_S1CG1_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH1_UPLS")}`} label="BL_S1TL_CH1_UPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH1_MPLS")}`} label="BL_S1TL_CH1_MPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH1_DNLS")}`} label="BL_S1TL_CH1_DNLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-4 ${useColorStatus("BL_S1TLT1_LS")}`} label="BL_S1TLT1_LS" />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_513BLK1_CG2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL_S1CG2_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH2_UPLS")}`} label="BL_S1TL_CH2_UPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH2_MPLS")}`} label="BL_S1TL_CH2_MPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH2_DNLS")}`} label="BL_S1TL_CH2_DNLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-4 ${useColorStatus("BL_S1TLT2_LS")}`} label="BL_S1TLT2_LS" />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_513BLK1_CG3",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL_S1CG3_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH3_UPLS")}`} label="BL_S1TL_CH3_UPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH3_MPLS")}`} label="BL_S1TL_CH3_MPLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("BL_S1TL_CH3_DNLS")}`} label="BL_S1TL_CH3_DNLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-4 ${useColorStatus("BL_S1TLT3_LS")}`} label="BL_S1TLT3_LS" />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("BL_SI1_LS2")} mt-1`} label="BL_SI1_LS2" text="L" />
        <div className="text-center mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER BULK LOADING",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HOPPER-2",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "BL_SI1_LT2",
            useClass: "greenTxt",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("BL_SI1_LS1")} mt-1`} label="BL_SI1_LS1" text="L" />
        <div className="text-center mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER BULK LOADING",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HOPPER-1",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "BL_SI1_LT1",
            useClass: "greenTxt",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18  loadingtruck"></div>
      <div className="position-absolute single-text-19  loadingtruck"></div>
      <div className="triangle-with-squares cone-1 position-absolute single-text-20"></div>
      <div className="triangle-with-squares cone-1 position-absolute single-text-21"></div>
      <div className="position-absolute single-text-22 text-center">
        <BlackContainer
          data={{
            label: "BL_WB2_WI",
            useClass: "greenTxt",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WB-2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Towards Plant Gate Side",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 text-center">
        <BlackContainer
          data={{
            label: "BL_WB1_WI",
            useClass: "greenTxt",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WB-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Link-2 Clinker Silo",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_513BC2_RUN", healthyLabel: "CMH_513BC2_PH" })}`}
          label="CMH_513BC2_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "513BC2",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_513BLK2_CFM1_RUN", healthyLabel: "CMH_513BLK2_CFM1_PH" })}`}
            label="CMH_513BLK2_CFM1_RUN"
          />
        </div>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_513BLK2_CFM2_RUN", healthyLabel: "CMH_513BLK2_CFM2_PH" })}`}
            label="CMH_513BLK2_CFM2_RUN"
          />
        </div>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_513BLK2_CFM3_RUN", healthyLabel: "CMH_513BLK2_CFM3_PH" })}`}
            label="CMH_513BLK2_CFM3_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_513BLK1_CFM1_RUN", healthyLabel: "CMH_513BLK1_CFM1_PH" })}`}
            label="CMH_513BLK1_CFM1_RUN"
          />
        </div>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_513BLK1_CFM2_RUN", healthyLabel: "CMH_513BLK1_CFM2_PH" })}`}
            label="CMH_513BLK1_CFM2_RUN"
          />
        </div>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 mt-1 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_513BLK1_CFM3_RUN", healthyLabel: "CMH_513BLK1_CFM3_PH" })}`}
            label="CMH_513BLK1_CFM3_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "AIR RECEIVER TANK",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_513BLS_RTANK_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div className="bg-secondary"></div>
        <div className="bg-secondary"></div>
        <div className="bg-secondary"></div>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <div className="bg-secondary"></div>
        <div className="bg-secondary"></div>
        <div className="bg-secondary"></div>
      </div>

      <div class="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-8"></div>
    </div>
  );
};
