import { BlackContainer, TextContainerWithWrapWord, PipeWithCircles, MotorCircleDigitalTag, MimicCaret } from "../../../../index";
import {
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const FlyAshSiloMaiharL4 = () => {
  return (
    <div className="FlyAshSiloMaiharL4 w-100 h-100 position-relative">
      <div className="d-flex justify-content-center pipeVr position-absolute single-text-1">
        <div className="trapezoid"></div>
      </div>
      <div className="pipe  position-absolute single-text-2"></div>
      <div className="containerImage pt-2 text-center position-absolute single-text-3"></div>
      <div className="position-absolute single-text-4">
        <div>
          <div className="img-108"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "K24AR2",
            }}
          />
        </div>
        <div className="mt-2">
          <div className="img-108"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "K24AR3",
            }}
          />
        </div>
        <div className="mt-2">
          <div className="img-108"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "K24AR1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <div>
          <div className="truck"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "Bulk Carrier-1 For K24SI1",
            }}
          />
        </div>
        <div className="mt-2">
          <div className="truck"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "Bulk Carrier-2 For K24SI1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>

          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV3_OLS",
              closeLabel: "CMH_K24BV3_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV3_OLS",
              closeLabel: "CMH_K24BV3_CLS",
            })}`}
            label="CMH_K24BV3_OLS"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV4_OLS",
              closeLabel: "CMH_K24BV4_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV4_OLS",
              closeLabel: "CMH_K24BV4_CLS",
            })}`}
            label="CMH_K24BV4_OLS"
          />
          <div className="d-flex mt-3">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG1_OLS", closeLabel: "CMH_K24SG1_CLS" })}`}
                  label="CMH_K24SG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SG1",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K24CG1_OLS",
                    closeLabel: "CMH_K24CG1_CLS",
                    healthyLabel: "CMH_K24CG1_PH",
                  })}`}
                  label="CMH_K24CG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CG1",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mimi5 justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>

          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV7_OLS",
              closeLabel: "CMH_K24BV7_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV7_OLS",
              closeLabel: "CMH_K24BV7_CLS",
            })}`}
            label="CMH_K24BV7_OLS"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV8_OLS",
              closeLabel: "CMH_K24BV8_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV8_OLS",
              closeLabel: "CMH_K24BV8_CLS",
            })}`}
            label="CMH_K24BV8_OLS"
          />
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG3_OLS", closeLabel: "CMH_K24SG3_CLS" })}`}
                  label="CMH_K24SG3_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SG3",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K24CG3_OLS",
                    closeLabel: "CMH_K24CG3_CLS",
                    healthyLabel: "CMH_K24CG3_PH",
                  })}`}
                  label="CMH_K24CG3_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CG3",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex  mimi6 align-items-center justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>

          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVB_OLS",
              closeLabel: "CMH_K24BVB_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVB_OLS",
              closeLabel: "CMH_K24BVB_CLS",
            })}`}
            label="CMH_K24BVB_OLS"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVC_OLS",
              closeLabel: "CMH_K24BVC_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVC_OLS",
              closeLabel: "CMH_K24BVC_CLS",
            })}`}
            label="CMH_K24BVC_OLS"
          />
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG5_OLS", closeLabel: "CMH_K24SG5_CLS" })}`}
                  label="CMH_K24SG5_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SG5",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K24CG5_OLS",
                    closeLabel: "CMH_K24CG5_CLS",
                    healthyLabel: "CMH_K24CG5_PH",
                  })}`}
                  label="CMH_K24CG5_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CG5",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>
          <div className="d-flex mt-3">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K24CG2_OLS",
                    closeLabel: "CMH_K24CG2_CLS",
                    healthyLabel: "CMH_K24CG2_PH",
                  })}`}
                  label="CMH_K24CG2_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CG2",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG2_OLS", closeLabel: "CMH_K24SG2_CLS" })}`}
                  label="CMH_K24SG2_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SG2",
                }}
              />
            </div>
          </div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV6_OLS",
              closeLabel: "CMH_K24BV6_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV6_OLS",
              closeLabel: "CMH_K24BV6_CLS",
            })}`}
            label="CMH_K24BV6_OLS"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV5_OLS",
              closeLabel: "CMH_K24BV5_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV5_OLS",
              closeLabel: "CMH_K24BV5_CLS",
            })}`}
            label="CMH_K24BV5_OLS"
          />
        </div>
        <div className="d-flex align-items-center mimi5 justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CMH_K24CG4")}`} label="CMH_K24CG4" />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CG4",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG4_OLS", closeLabel: "CMH_K24SG4_CLS" })}`}
                  label="CMH_K24SG4_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SG4",
                }}
              />
            </div>
          </div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVA_OLS",
              closeLabel: "CMH_K24BVA_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVA_OLS",
              closeLabel: "CMH_K24BVA_CLS",
            })}`}
            label="CMH_K24BVA_OLS"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV9_OLS",
              closeLabel: "CMH_K24BV9_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV9_OLS",
              closeLabel: "CMH_K24BV9_CLS",
            })}`}
            label="CMH_K24BV9_OLS"
          />
        </div>
        <div className="d-flex align-items-center mimi6 justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K24CG6_OLS",
                    closeLabel: "CMH_K24CG6_CLS",
                    healthyLabel: "CMH_K24CG6_PH",
                  })}`}
                  label="CMH_K24CG6_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CG6",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG6_OLS", closeLabel: "CMH_K24SG6_CLS" })}`}
                  label="CMH_K24SG6_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SG6",
                }}
              />
            </div>
          </div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVE_OLS",
              closeLabel: "CMH_K24BVE_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVE_OLS",
              closeLabel: "CMH_K24BVE_CLS",
            })}`}
            label="CMH_K24BVE_OLS"
          />
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center ml-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVD_OLS",
              closeLabel: "CMH_K24BVD_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVD_OLS",
              closeLabel: "CMH_K24BVD_CLS",
            })}`}
            label="CMH_K24BVD_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="d-flex align-items-center justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K24CG7_OLS",
                    closeLabel: "CMH_K24CG7_CLS",
                    healthyLabel: "CMH_K24CG7_PH",
                  })}`}
                  label="CMH_K24CG7_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K24CG7",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG7_OLS", closeLabel: "CMH_K24SG7_CLS" })}`}
                  label="CMH_K24SG7_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K24SG7",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mimi5 justify-content-center">
          <div className="pipeHr position-absolute pipe-1"></div>
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG8_OLS", closeLabel: "CMH_K24SG8_CLS" })}`}
                  label="CMH_K24SG8_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K24SG8",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K24CG8_OLS",
                    closeLabel: "CMH_K24CG8_CLS",
                    healthyLabel: "CMH_K24CG8_PH",
                  })}`}
                  label="CMH_K24CG8_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K24CG8",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24BL1_RUN", healthyLabel: "CMH_K24BL1_PH" })}`}
            label="CMH_K24BL1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24BL1",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24BL2_RUN", healthyLabel: "CMH_K24BL2_PH" })}`}
            label="CMH_K24BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24BL2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "STDBY",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24BL3_RUN", healthyLabel: "CMH_K24BL3_PH" })}`}
            label="CMH_K24BL3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24BL3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24BL4_RUN", healthyLabel: "CMH_K24BL4_PH" })}`}
            label="CMH_K24BL4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24BL4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "STDBY",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24FNA_RUN", healthyLabel: "CMH_K24FNA_PH" })}`}
            label="CMH_K24FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24FNA",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24FNB_RUN", healthyLabel: "CMH_K24FNB_PH" })}`}
            label="CMH_K24FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24FNB",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "STDBY",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "K24AS7" }}
        secondCircle={{
          secondCircleClass: ` `,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "K34AS1" }}
        secondCircle={{
          secondCircleClass: ` `,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "K37AS1" }}
        secondCircle={{
          secondCircleClass: ` `,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "K36AS1" }}
        secondCircle={{
          secondCircleClass: ` `,
          secondCircleText: "",
        }}
      />
      <div className="triangle-with-squares position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 p-2",
            label: "K34DB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K37SG1_OLS", closeLabel: "CMH_K37SG1_CLS" })}`}
                  label="CMH_K37SG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K37SG1",
                }}
              />
            </div>
            <div className="ml-3">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K37CG1_OLS",
                    closeLabel: "CMH_K37CG1_CLS",
                    healthyLabel: "CMH_K37CG1_PH",
                  })}`}
                  label="CMH_K37CG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K37CG1",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex mt-1">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K34CG1_OLS",
                    closeLabel: "CMH_K34CG1_CLS",
                    healthyLabel: "CMH_K34CG1_PH",
                  })}`}
                  label="CMH_K34CG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K34CG1",
                }}
              />
            </div>
            <div className="ml-1">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K34SG1_OLS", closeLabel: "CMH_K34SG1_CLS" })}`}
                  label="CMH_K34SG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K34SG1",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center ml-1">
          <div className="d-flex mt-1">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K36SG1_OLS", closeLabel: "CMH_K36SG1_CLS" })}`}
                  label="CMH_K36SG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K36SG1",
                }}
              />
            </div>
            <div className="ml-2">
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                    openLabel: "CMH_K36CG1_OLS",
                    closeLabel: "CMH_K36CG1_CLS",
                    healthyLabel: "CMH_K36CG1_PH",
                  })}`}
                  label="CMH_K36CG1_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K36CG1",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "K37AS2" }}
        secondCircle={{
          secondCircleClass: ` `,
          secondCircleText: "",
        }}
      />
      <div className="position-absolute single-text-18 d-flex flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bulk Carrier-1",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24CP1_PT",
              useClass: "greenTxt  ml-3 mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bulk Carrier-2",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24CP2_PT",
              useClass: "greenTxt  ml-3 mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bulk Carrier-3",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24CP3_PT",
              useClass: "greenTxt  ml-3 mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CMH_K24CP1_RUN")}`} label="CMH_K24CP1_RUN" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K24CP1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CMH_K24CP2_RUN")}`} label="CMH_K24CP2_RUN" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K24CP2",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CMH_K24CP3_RUN")}`} label="CMH_K24CP3_RUN" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K24CP3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CMH_K24CP4_RUN")}`} label="CMH_K24CP4_RUN" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K24CP4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div className="gap-1  d-flex flex-column">
          <BlackContainer
            data={{
              label: "CMH_514CG1_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_514CG3_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_514CG5_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="gap-1  d-flex flex-column">
          <BlackContainer
            data={{
              label: "CMH_514CG2_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_514CG4_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_514CG6_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_K24SB1_HL1")}`} label="CMH_K24SB1_HL1" />
          <BlackContainer
            data={{
              label: "CMH_K24SB1_LI1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLYASY SILO",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CAP -5000T",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24SI1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_K24BI1_LSH")}`} label="CMH_K24BI1_LSH" text="HH" />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K24BI1",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24BI1_WI",
              useClass: "greenTxt mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <div>
          <BlackContainer
            data={{
              label: "CMH_K37CG1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K37CG1_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMH_K36CG1",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K36CG1_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "CMH_K34CG1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_K34CG1_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_K24BE1_BMS")}`} label="CMH_K24BE1_BMS" text="BMS" />
        <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("CMH_K24BE1_TS")}`} label="CMH_K24BE1_TS" text="TS" />
        <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("CMH_K24BE1_ZS")}`} label="CMH_K24BE1_ZS" text="ZS" />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24BE1_RUN", healthyLabel: "CMH_K24BE1_PH" })}`}
          label="CMH_K24BE1_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24BE1_AUX_RUN", healthyLabel: "CMH_K24BE1_AUX_PH" })}`}
          label="CMH_K24BE1_AUX_RUN"
          text="M"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K24BE1_Aux",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24BE1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_3_ALM")}`} label="CMH_K24BE1_BSS_3_ALM" text="BSS3A" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_3")}`} label="CMH_K24BE1_BSS_3" text="BSS3" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_4_ALM")}`} label="CMH_K24BE1_BSS_4_ALM" text="BSS4A" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_4")}`} label="CMH_K24BE1_BSS_4" text="BSS4" />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_1_ALM")}`} label="CMH_K24BE1_BSS_1_ALM" text="BSS1A" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_1")}`} label="CMH_K24BE1_BSS_1" text="BSS1" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_2_ALM")}`} label="CMH_K24BE1_BSS_2_ALM" text="BSS2A" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_BSS_2")}`} label="CMH_K24BE1_BSS_2" text="BSS2" />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_LS2")}`} label="CMH_K24BE1_LS2" text="LS2" />
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_LS1")}`} label="CMH_K24BE1_LS1" text="LS1" />
        <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CMH_K24BE1_ZSS")}`} label="CMH_K24BE1_ZSS" text="ZSS" />
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CMH_K24CG7",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24CG7_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMH_K24CG8",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24CG8_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K36FN2_RUN", healthyLabel: "CMH_K36FN2_PH" })}`}
            label="CMH_K36FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K36FN2",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K36FN2A_RUN", healthyLabel: "CMH_K36FN2A_PH" })}`}
            label="CMH_K36FN2A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K36FN2A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "STDBY",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K36FN3_RUN", healthyLabel: "CMH_K36FN3_PH" })}`}
            label="CMH_K36FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K36FN3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K36FN4_RUN", healthyLabel: "CMH_K36FN4_PH" })}`}
            label="CMH_K36FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K36FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K37FN3_RUN", healthyLabel: "CMH_K37FN3_PH" })}`}
            label="CMH_K37FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K37FN3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K37FN4_RUN", healthyLabel: "CMH_K37FN4_PH" })}`}
            label="CMH_K37FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K37FN4",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K37FN4A_RUN", healthyLabel: "CMH_K37FN4A_PH" })}`}
            label="CMH_K37FN4A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K37FN4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "STDBY",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K37FN5_RUN", healthyLabel: "CMH_K37FN5_PH" })}`}
            label="CMH_K37FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K37FN5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K36FN5_RUN", healthyLabel: "CMH_K36FN5_PH" })}`}
            label="CMH_K36FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K36FN5",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K36FN5A_RUN", healthyLabel: "CMH_K36FN5A_PH" })}`}
            label="CMH_K36FN5A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K36FN5A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "STDBY",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K36FN6_RUN", healthyLabel: "CMH_K36FN6_PH" })}`}
            label="CMH_K36FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K36FN6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-3",
              label: "K34FN2",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K34FN2_RUN", healthyLabel: "CMH_K34FN2_PH" })}`}
            label="CMH_K34FN2_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K34FN2A_RUN", healthyLabel: "CMH_K34FN2A_PH" })}`}
            label="CMH_K34FN2A_RUN"
          />
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K34FN2A",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "STDBY",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-3",
              label: "K37FN2",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K37FN2_RUN", healthyLabel: "CMH_K37FN2_PH" })}`}
            label="CMH_K37FN2_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K37FN2A_RUN", healthyLabel: "CMH_K37FN2A_PH" })}`}
            label="CMH_K37FN2A_RUN"
          />
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K37FN2A",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "STDBY",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div className="containerImage pt-2 text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLYASH BIN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "At CM-6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Building",
            }}
          />
        </div>
        <div className="containerImage pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLYASH BIN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "At CM-7",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Building",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div>
          <div className="truck"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "Bulk Carrier-3 For Flyash Bin",
            }}
          />
        </div>
        <div>
          <div className="truck"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "Bulk Carrier-3 For Flyash Bin",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K34BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CMH_K34RA1")}`} label="CMH_K34RA1_RUN" />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end">
              <MotorCircleDigitalTag
                className={`dot p-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K34FN1_RUN", healthyLabel: "CMH_K34FN1_PH" })}`}
                label="CMH_K34FN1_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K34FN1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "K34RA1",
              }}
            />
            <BlackContainer
              data={{
                label: "CMH_K34FN1_II",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      </div>
      <div className="position-absolute single-text-39 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K24BF5",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CMH_K24RA5")}`} label="CMH_K24RA5_RUN" />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24FN5_RUN", healthyLabel: "CMH_K24FN5_PH" })}`}
                label="CMH_K24FN5_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K24FN5",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "K24RA5",
              }}
            />
            <BlackContainer
              data={{
                label: "CMH_K24BF5_DPT",
                useClass: "greenTxt mt-1",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CMH_K24BF5_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      </div>
      <div className="position-absolute single-text-40 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K24BF6",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CMH_K24RA6")}`} label="CMH_K24RA6_RUN" />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24FN6_RUN", healthyLabel: "CMH_K24FN6_PH" })}`}
                label="CMH_K24FN6_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K24FN6",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "K24RA6",
              }}
            />
            <BlackContainer
              data={{
                label: "CMH_K24BF6_DPT",
                useClass: "greenTxt mt-1",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CMH_K24BF6_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr  position-absolute line-1"></div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex mt-2">
            <div>
              <div className="dot-square-line d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CMH_K24SG9_OLS", closeLabel: "CMH_K24SG9_CLS" })}`}
                  label="CMH_K24SG9_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "K24SG9",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-42 mt-3 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_K24SM1_ZS")}`} label="CMH_K24SM1_ZS" />
        <MotorCircleDigitalTag className={`circle-img ml-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CMH_K24SM1")}`} label="CMH_K24SM1_RUN" />
        <PipeWithCircles parentDivClass="hpipecircle " />
      </div>
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-43 ${useColorStatus("CMH_K34BF1")}`} label="CMH_K34BF1" />
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-44 ${useColorStatus("CMH_K24BF5")}`} label="CMH_K24BF5" />
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-45 ${useColorStatus("CMH_K24BF6")}`} label="CMH_K24BF6" />
      <div className="position-absolute single-text-46">
        <BlackContainer
          data={{
            label: "CMH_K34BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_K34BF1_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <BlackContainer
          data={{
            label: "CMH_K24HR1_TE",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2 ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K24HR1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24HR1_RUN", healthyLabel: "CMH_K24HR1_PH" })}`}
            label="CMH_K24HR1_RUN"
            text="H"
          />
        </div>
      </div>
      <div className="position-absolute single-text-48">
        <BlackContainer
          data={{
            label: "CMH_K24HR2_TE",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2 ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K24HR2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24HR2_RUN", healthyLabel: "CMH_K24HR2_PH" })}`}
            label="CMH_K24HR2_RUN"
            text="H"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-49 d-flex flex-column">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV2_OLS",
              closeLabel: "CMH_K24BV2_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV2_OLS",
              closeLabel: "CMH_K24BV2_CLS",
            })}`}
            label="CMH_K24BV2_OLS"
          />
          <MotorCircleDigitalTag className={`text-dark digital-tag mt-2`} text="K24BV2" />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV1_OLS",
              closeLabel: "CMH_K24BV1_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BV1_OLS",
              closeLabel: "CMH_K24BV1_CLS",
            })}`}
            label="CMH_K24BV1_OLS"
          />
          <MotorCircleDigitalTag className={`text-dark digital-tag mt-2`} text="K24BV1" />
        </div>
      </div>
      <div className="text-center position-absolute single-text-50 d-flex flex-column">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVH_OLS",
              closeLabel: "CMH_K24BVH_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVH_OLS",
              closeLabel: "CMH_K24BVH_CLS",
            })}`}
            label="CMH_K24BVH_OLS"
          />
          <MotorCircleDigitalTag className={`text-dark digital-tag mt-2`} text="K24BVH" />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVG_OLS",
              closeLabel: "CMH_K24BVG_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVG_OLS",
              closeLabel: "CMH_K24BVG_CLS",
            })}`}
            label="CMH_K24BVG_OLS"
          />
          <MotorCircleDigitalTag className={`text-dark digital-tag mt-2`} text="K24BVG" />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVF_OLS",
              closeLabel: "CMH_K24BVF_CLS",
            })}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel: "CMH_K24BVF_OLS",
              closeLabel: "CMH_K24BVF_CLS",
            })}`}
            label="CMH_K24BVF_OLS"
          />
          <MotorCircleDigitalTag className={`text-dark digital-tag mt-2`} text="K24BVF" />
        </div>
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <div className="mt-5 d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24FN8_RUN", healthyLabel: "CMH_K24FN8_PH" })}`}
              label="CMH_K24FN8_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K24FN8",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "STDBY",
              }}
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24FN7_RUN", healthyLabel: "CMH_K24FN7_PH" })}`}
              label="CMH_K24FN7_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "K24FN7",
              }}
            />
          </div>
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_K24FN9_RUN", healthyLabel: "CMH_K24FN9_PH" })}`}
            label="CMH_K24FN9_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K24FN9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SM1 ON Time",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K24SM1_ON_Timer",
              useClass: "greenTxt ml-3",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SM1 OFF Time",
            }}
          />
          <BlackContainer
            data={{
              label: "K24SM1_OFF_Timer",
              useClass: "greenTxt ml-3",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-53">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SEQ NO",
            }}
          />
          <BlackContainer
            data={{
              label: "FlyAsh_Seq_No",
              useClass: "greenTxt ml-3",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SEQ TIME",
            }}
          />
          <BlackContainer
            data={{
              label: "FlyAsh_Seq_ON_Timer",
              useClass: "greenTxt ml-3",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SEQ OVERLAP",
            }}
          />
          <BlackContainer
            data={{
              label: "FlyAsh_Seq_Overlap_Timer",
              useClass: "greenTxt ml-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CG SP",
            }}
          />
          <BlackContainer
            data={{
              label: "FlyAsh_CG1_CG6_SP",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55">
        <BlackContainer
          data={{
            label: "CMH_K34FN1",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_K34FN1",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-56 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "To Atmosphere",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "To Atmosphere",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-57",
          label: "K24SM1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-58",
          label: "K24BE1",
        }}
      />
      <div className="yellowline-Hr position-absolute line-1"></div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Vr upArrow position-absolute line-20"></div>
      <div className="yellowline-Vr upArrow position-absolute line-21"></div>
      <div className="yellowline-Vr upArrow position-absolute line-22"></div>
      <div className="yellowline-Vr upArrow position-absolute line-23"></div>
      <div className="yellowline-Vr upArrow position-absolute line-24"></div>
      <div className="yellowline-Vr upArrow position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Vr upArrow position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Hr  position-absolute line-31"></div>
      <div className="yellowline-Vr  position-absolute line-32"></div>
      <div className="yellowline-Vr  position-absolute line-33"></div>
      <div className="yellowline-Hr  position-absolute line-34"></div>
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-39"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-40"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Vr  position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>
      <div className="yellowline-Vr  position-absolute line-50"></div>
      <div className="yellowline-Hr  position-absolute line-51"></div>
      <div className="yellowline-Vr  position-absolute line-52"></div>
      <div className="yellowline-Vr upArrow position-absolute line-53"></div>
      <div className="yellowline-Vr  position-absolute line-54"></div>
      <div className="yellowline-Vr  position-absolute line-55"></div>
      <div className="yellowline-Hr  position-absolute line-56"></div>
      <div className="yellowline-Vr  position-absolute line-57"></div>
      <div className="yellowline-Vr  position-absolute line-58"></div>
      <div className="yellowline-Vr upArrow position-absolute line-59"></div>
      <div className="yellowline-Vr  position-absolute line-60"></div>
      <div className="yellowline-Hr  position-absolute line-61"></div>
      <div className="yellowline-Vr downArrow position-absolute line-62"></div>
      <div className="yellowline-Vr position-absolute line-63"></div>
      <div className="yellowline-Vr upArrow position-absolute line-64"></div>
      <div className="yellowline-Vr  position-absolute line-65"></div>
      <div className="yellowline-Hr position-absolute line-66"></div>
      <div className="yellowline-Vr position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Hr position-absolute line-69"></div>
      <div className="yellowline-Vr upArrow position-absolute line-70"></div>
      <div className="yellowline-Hr position-absolute line-71"></div>
      <div className="yellowline-Vr upArrow position-absolute line-72"></div>
      <div className="yellowline-Vr downArrow position-absolute line-73"></div>
      <div className="yellowline-Vr downArrow position-absolute line-74"></div>
      <div className="yellowline-Vr downArrow position-absolute line-75"></div>
      <div className="yellowline-Vr downArrow position-absolute line-76"></div>
      <div className="yellowline-Hr  position-absolute line-77"></div>
      <div className="yellowline-Vr downArrow position-absolute line-78"></div>
      <div className="yellowline-Vr downArrow position-absolute line-79"></div>
      <div className="yellowline-Hr  position-absolute line-80"></div>
      <div className="yellowline-Hr  position-absolute line-81"></div>
      <div className="yellowline-Vr  position-absolute line-82"></div>
      <div className="yellowline-Vr downArrow position-absolute line-83"></div>
      <div className="yellowline-Vr downArrow position-absolute line-84"></div>
      <div className="yellowline-Vr  position-absolute line-85"></div>
      <div className="yellowline-Vr  position-absolute line-86"></div>
    </div>
  );
};
