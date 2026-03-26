import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";

import {
  useMotorTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useBVTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CementSilo3kukurdih = () => {
  return (
    <div className="CementSilo1Kukurdih CS3Kukurdih w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
          <div className="trapezoid"></div>
          <div className="position-absolute single-text-2">
            <div className="dashedHr-Pipe mt-1 position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-5"></div>
          </div>
          <div className="position-absolute single-text-6">
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-5"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-7">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGM",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGM_OLS", closeLabel: "PP_611SGM_CLS" }
                  )}`}
                  label="PP_611SGM_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGM",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 p-1 ${useColorStatus(
                  "PP_611CGM_ECLS"
                )} mr-1`}
                label="PP_611CGM_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGM_EOLS",
                      closeLabel: "PP_611CGM_ECLS",
                      healthyLabel: "PP_611CGM_PH",
                    }
                  )}`}
                  label="PP_611CGM_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGM_EOLS"
                )} ml-2`}
                label="PP_611CGM_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGP",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGP_OLS", closeLabel: "PP_611SGP_CLS" }
                  )}`}
                  label="PP_611SGP_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGP",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGP_ECLS"
                )} mr-1`}
                label="PP_611CGP_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGP_EOLS",
                      closeLabel: "PP_611CGP_ECLS",
                      healthyLabel: "PP_611CGP_PH",
                    }
                  )}`}
                  label="PP_611CGP_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGP_EOLS"
                )} ml-2`}
                label="PP_611CGP_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGR",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGR_OLS", closeLabel: "PP_611SGR_CLS" }
                  )}`}
                  label="PP_611SGR_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGR",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGR_ECLS"
                )} mr-1`}
                label="PP_611CGR_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGR_EOLS",
                      closeLabel: "PP_611CGR_ECLS",
                      healthyLabel: "PP_611CGR_PH",
                    }
                  )}`}
                  label="PP_611CGR_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGR_EOLS"
                )} ml-2`}
                label="PP_611CGR_EOLS"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-8">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGN",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGN_EOLS"
                )} mr-1`}
                label="PP_611CGN_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGN_EOLS",
                      closeLabel: "PP_611CGN_ECLS",
                      healthyLabel: "PP_611CGN_PH",
                    }
                  )}`}
                  label="PP_611CGN_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGN_ECLS"
                )} ml-2`}
                label="PP_611CGN_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGN",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGN_OLS", closeLabel: "PP_611SGN_CLS" }
                  )}`}
                  label="PP_611SGN_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGQ",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGQ_EOLS"
                )} mr-1`}
                label="PP_611CGQ_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGQ_EOLS",
                      closeLabel: "PP_611CGQ_ECLS",
                      healthyLabel: "PP_611CGQ_PH",
                    }
                  )}`}
                  label="PP_611CGQ_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGQ_ECLS"
                )} ml-2`}
                label="PP_611CGQ_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGQ",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGQ_OLS", closeLabel: "PP_611SGQ_CLS" }
                  )}`}
                  label="PP_611SGQ_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGS",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGS_EOLS"
                )} mr-1`}
                label="PP_611CGS_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGS_EOLS",
                      closeLabel: "PP_611CGS_ECLS",
                      healthyLabel: "PP_611CGS_PH",
                    }
                  )}`}
                  label="PP_611CGS_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGS_ECLS"
                )} ml-2`}
                label="PP_611CGS_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGS",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGS_OLS", closeLabel: "PP_611SGS_CLS" }
                  )}`}
                  label="PP_611SGS_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-9 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RUN SEQ",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TIMER PV",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "OVERLAP TIME",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SILO COMMON CG S",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "SILO3_SEQ_CV",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SILO3_TIMER1_PV",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "SILO3_OVLP_TIME",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SILO3_CG_SP",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-10">
        <MotorCircleDigitalTag
          className={`square digital-tag mx-auto ${useColorStatus(
            "PP_611BI3_PH"
          )}`}
          label="PP_611BI3_PH"
        />
        <div className="containerImage text-center ml-2">
          <div className="d-flex pt-3">
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ml-2 ${useColorStatus(
                "PP_611BI3_LS"
              )}`}
              label="PP_611BI3_LS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "611BI3",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "PP_611BI3_WI",
              useClass: "greenTxt  mt-5 ml-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-11"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-12"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-13"></div>
      <div className="position-absolute  single-text-14">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CG1N",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1N_EOLS"
                )} mr-1`}
                label="PP_611CG1N_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1N_EOLS",
                      closeLabel: "PP_611CG1N_ECLS",
                      healthyLabel: "PP_611CG1N_PH",
                    }
                  )}`}
                  label="PP_611CG1N_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1N_ECLS"
                )} ml-2`}
                label="PP_611CG1N_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1S",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1S_OLS",
                      closeLabel: "PP_611SG1S_CLS",
                    }
                  )}`}
                  label="PP_611SG1S_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CG1M",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1M_EOLS"
                )} mr-1`}
                label="PP_611CG1M_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1M_EOLS",
                      closeLabel: "PP_611CG1M_ECLS",
                      healthyLabel: "PP_611CG1M_PH",
                    }
                  )}`}
                  label="PP_611CG1M_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1M_ECLS"
                )} ml-2`}
                label="PP_611CG1M_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1R",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1R_OLS",
                      closeLabel: "PP_611SG1R_CLS",
                    }
                  )}`}
                  label="PP_611SG1R_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGT",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGT_EOLS"
                )} mr-1`}
                label="PP_611CGT_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGT_EOLS",
                      closeLabel: "PP_611CGT_ECLS",
                      healthyLabel: "PP_611CGT_PH",
                    }
                  )}`}
                  label="PP_611CGT_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGT_ECLS"
                )} ml-2`}
                label="PP_611CGT_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGT",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGT_OLS", closeLabel: "PP_611SGT_CLS" }
                  )}`}
                  label="PP_611SGT_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-15"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-16"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-17"></div>
      <div className="position-absolute  single-text-18">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGW",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGW_OLS", closeLabel: "PP_611SGW_CLS" }
                  )}`}
                  label="PP_611SGW_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGW",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 mr-1 ${useColorStatus(
                  "PP_611CGW_ECLS"
                )}`}
                label="PP_611CGW_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGW_EOLS",
                      closeLabel: "PP_611CGW_ECLS",
                      healthyLabel: "PP_611CGW_PH",
                    }
                  )}`}
                  label="PP_611CGW_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGW_EOLS"
                )} ml-2`}
                label="PP_611CGW_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGV",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGV_OLS", closeLabel: "PP_611SGV_CLS" }
                  )}`}
                  label="PP_611SGV_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGV",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGV_ECLS"
                )} mr-1`}
                label="PP_611CGV_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGV_EOLS",
                      closeLabel: "PP_611CGV_ECLS",
                      healthyLabel: "PP_611CGV_PH",
                    }
                  )}`}
                  label="PP_611CGV_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGV_EOLS"
                )} ml-2`}
                label="PP_611CGV_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGU",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGU_OLS", closeLabel: "PP_611SGU_CLS" }
                  )}`}
                  label="PP_611SGU_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGU",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGU_ECLS"
                )} mr-1`}
                label="PP_611CGU_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGU_EOLS",
                      closeLabel: "PP_611CGU_ECLS",
                      healthyLabel: "PP_611CGU_PH",
                    }
                  )}`}
                  label="PP_611CGU_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGU_EOLS"
                )} ml-2`}
                label="PP_611CGU_EOLS"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-19"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-20"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-21"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-22"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-23"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-24"></div>
      <div className="position-relative single-text-25 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611AS1S",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "PP_611CG1M_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG1M",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-relative single-text-26 d-flex justify-content-around">
        <div>
          <BlackContainer
            data={{
              label: "PP_611CGV_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CGV",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611ASW",
          }}
        />
      </div>

      {/* <div className="position-absolute single-text-27 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1R",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag grey-color`}
                // label="PP_611FN9_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1R",
            }}
          />
        </div>
      </div> */}
      <div className="position-absolute single-text-28 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AST",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1Q_RUN", healthyLabel: "PP_611FN1Q_PH" }
                )}`}
                label="PP_611FN1Q_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1Q",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNJ_RUN", healthyLabel: "PP_611FNJ_PH" }
                )}`}
                label="PP_611FNJ_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FNJ",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNM_RUN", healthyLabel: "PP_611FNM_PH" }
                )}`}
                label="PP_611FNM_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FNM",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611ASV",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNL_RUN", healthyLabel: "PP_611FNL_PH" }
                )}`}
                label="PP_611FNL_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FNL",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611ASU",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNK_RUN", healthyLabel: "PP_611FNK_PH" }
                )}`}
                label="PP_611FNK_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FNK",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-33"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-34"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-35"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-36"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-37"></div>
      <div className=" position-absolute  single-text-38">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe position-relative"
            firstCircle={{
              firstCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE4_RUN", healthyLabel: "PP_641BE4_PH" }
              )} `,
              firstCircleText: "M",
              firstCircleLable: "PP_641BE4_RUN",
            }}
          />
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "PP_641BI4_WI",
                useClass: "greenTxt  mt-2 mb-2",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "641BE4",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute  single-text-39">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe position-relative"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE1_RUN", healthyLabel: "PP_641BE1_PH" }
              )}`,
              firstCircleLabel: "PP_641BE1_RUN",
            }}
          />
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "PP_641BI1_WI",
                useClass: "greenTxt  mt-2 mb-2",
                unit: "tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "641BE1",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611ASY",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-40">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe position-relative"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE2_RUN", healthyLabel: "PP_641BE2_PH" }
              )}`,
              firstCircleLabel: "PP_641BE2_RUN",
            }}
          />
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "PP_641BI2_WI",
                useClass: "greenTxt  mt-2 mb-2",
                unit: "tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "641BE2",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611ASZ",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-41">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe position-relative"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE3_RUN", healthyLabel: "PP_641BE3_PH" }
              )}`,
              firstCircleLabel: "PP_641BE3_RUN",
            }}
          />
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "PP_641BI3_WI",
                useClass: "greenTxt  mt-2 mb-2",
                unit: "tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "641BE3",
              }}
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNG_RUN", healthyLabel: "PP_611FNG_PH" }
                )}`}
                label="PP_611FNG_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNG",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNH_RUN", healthyLabel: "PP_611FNH_PH" }
                )}`}
                label="PP_611FNH_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNH",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex justify-content-around">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNN_RUN", healthyLabel: "PP_611FNN_PH" }
                )}`}
                label="PP_611FNN_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNN",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNS_RUN", healthyLabel: "PP_611FNS_PH" }
                )}`}
                label="PP_611FNS_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1",
              label: "611FNS",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex justify-content-around">
        <div className="ml-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNP",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNP_RUN", healthyLabel: "PP_611FNP_PH" }
                )}`}
                label="PP_611FNP_RUN"
              />
            </span>
          </div>
        </div>
        <div className="ml-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 mr-1",
              label: "611FNT",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNT_RUN", healthyLabel: "PP_611FNT_PH" }
                )}`}
                label="PP_611FNT_RUN"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-45 d-flex justify-content-around">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNR_RUN", healthyLabel: "PP_611FNR_PH" }
                )}`}
                label="PP_611FNR_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNR",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNQ_RUN", healthyLabel: "PP_611FNQ_PH" }
                )}`}
                label="PP_611FNQ_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNQ",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNV_RUN", healthyLabel: "PP_611FNV_PH" }
                )}`}
                label="PP_611FNV_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNV",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNU_RUN", healthyLabel: "PP_611FNU_PH" }
                )}`}
                label="PP_611FNU_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1",
              label: "611FNU",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-46 d-flex">
        <div className="ml-3 mr-2">
          <div className="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" })}`}
                label="PP_621FN4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNV",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" })}`}
                label="PP_621FN4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1V",
            }}
          />
        </div>
      </div> */}
      <div className="position-absolute single-text-47 d-flex justify-content-around">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNR",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1S_RUN", healthyLabel: "PP_611FN1S_PH" }
                )}`}
                label="PP_611FN1S_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1S",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNV",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1T_RUN", healthyLabel: "PP_611FN1T_PH" }
                )}`}
                label="PP_611FN1T_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1T",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-48">
        <div className="d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_611SGX_OLS", closeLabel: "PP_611SGX_CLS" }
              )}`}
              label="PP_611SGX_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SGX",
          }}
        />
      </div>
      <div className="position-absolute  single-text-49">
        <div className="d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_611SGY_OLS", closeLabel: "PP_611SGY_CLS" }
              )}`}
              label="PP_611SGY_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SGY",
          }}
        />
      </div>
      <div className="position-absolute  single-text-50">
        <div className="d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_611SGZ_OLS", closeLabel: "PP_611SGZ_CLS" }
              )}`}
              label="PP_611SGZ_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SGZ",
          }}
        />
      </div>

      <div className="position-absolute  single-text-52 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "611HR3",
            }}
          />
        </div>
        <div className="ml-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_611HR3_RUN", healthyLabel: "PP_611HR3_PH" }
            )}`}
            label="PP_611HR3_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "PP_611HR3_TE",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-53 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PP_611HR7_TE",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_611HR7_RUN", healthyLabel: "PP_611HR7_PH" }
            )}`}
            label="PP_611HR7_RUN"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "611HR7",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-54 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${{ openLabel: "SM_592BV1_OLS", closeLabel: "SM_592BV1_CLS" }}`}
          secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${{ openLabel: "SM_592BV1_OLS", closeLabel: "SM_592BV1_CLS" }}`}
          label="SM_592BV1_OLS"
        />
      </div> */}
      <div className="position-absolute single-text-55 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2K_OLS", closeLabel: "PP_611BV2K_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2K_OLS", closeLabel: "PP_611BV2K_CLS" }
          )}`}
          label="PP_611BV2K_OLS"
        />
      </div>
      <div className="position-absolute single-text-56">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV6_OLS", closeLabel: "PP_611BV6_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV6_OLS", closeLabel: "PP_611BV6_CLS" }
          )}`}
          label="PP_611BV6_OLS"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV6",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2_OLS", closeLabel: "PP_611BV2_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2_OLS", closeLabel: "PP_611BV2_CLS" }
          )}`}
          label="PP_611BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2A_OLS", closeLabel: "PP_611BV2A_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2A_OLS", closeLabel: "PP_611BV2A_CLS" }
          )}`}
          label="PP_611BV2A_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2A",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2E_OLS", closeLabel: "PP_611BV2E_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2E_OLS", closeLabel: "PP_611BV2E_CLS" }
          )}`}
          label="PP_611BV2E_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2E",
          }}
        />
      </div>

      <div className="position-absolute single-text-60 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL3_RUN", healthyLabel: "PP_611BL3_PH" }
                )}`}
                label="PP_611BL3_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL3",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL9_RUN", healthyLabel: "PP_611BL9_PH" }
                )}`}
                label="PP_611BL9_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61 d-flex">
        <BlackContainer
          data={{
            label: "PP_611BL3_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611BL9_PT",
            useClass: "greenTxt  ml-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-62 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL7_RUN", healthyLabel: "PP_611BL7_PH" }
                )}`}
                label="PP_611BL7_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL7",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BLA_RUN", healthyLabel: "PP_611BLA_PH" }
                )}`}
                label="PP_611BLA_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BLA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <BlackContainer
          data={{
            label: "PP_611BL7_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611BLA_PT",
            useClass: "greenTxt  ml-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "TO SELO 3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-4 ",
            label: "611BVZ-1L",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TO ATM",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ",
            label: "611BV2K",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-4",
            label: "TO 611BI-3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TO ATM",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <BlackContainer
          data={{
            label: "PP_611CGW_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611CGW",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <BlackContainer
          data={{
            label: "PP_611CG1N_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611CG1N",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  bg-info mb-2",
                  label: "BYP",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_611BF3_DPT",
                  useClass: "greenTxt  mx-auto",
                  unit: "mmWc",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_611BF3_PT",
                  useClass: "greenTxt  mt-1 mx-auto",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ",
                  label: "611BF3",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_611RA3"
                    )}`}
                    label="PP_611RA3_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "611RA3",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-39a ml-3 mb-2"></div>
            </div>
            <div className="mt-5 ml-5 position-absolute">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "611FN3",
                  }}
                />
                <div className="d-flex">
                  <div className="img-97 d-flex justify-content-center  align-items-end">
                    <MotorCircleDigitalTag
                      className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                        {
                          runLabel: "PP_611FN3_RUN",
                          healthyLabel: "PP_611FN3_PH",
                        }
                      )}`}
                      label="PP_611FN3_RUN"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611AS1A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "BULK LOADING",
          }}
        />
      </div>
      <div className="position-absolute single-text-70">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CEMENT SELO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SI3",
          }}
        />
      </div>

      <div className="position-absolute single-text-71 d-flex justify-content-between">
        <div>
          <BlackContainer
            data={{
              label: "PP_611CGT_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CGT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "PP_611CGU_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CGU",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-72">
        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus("PP_611BF3")}`}
            label="PP_611BF3"
          />
        </span>

        {/* <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "SM_592BF1_PT"
            )}`}
            label="SM_592BF1_PT"
          />
        </span> */}
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1A_RUN", healthyLabel: "PP_611FN1A_PH" }
                )}`}
                label="PP_611FN1A_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611AS1V",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-75",
          label: "611AS1W",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-76",
          label: "FUTURE BE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-77",
          label: "611ASX",
        }}
      />

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      {/* <div className="yellowline-Vr upArrow position-absolute line-13"></div> */}
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr upArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr  position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Hr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-33"></div>
      <div className="yellowline-Hr  position-absolute line-34"></div>
      {/* <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div> */}
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Hr  position-absolute line-44"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-45"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-46"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-48"></div>
      <div className="yellowline-Hr  position-absolute line-49"></div>
      <div className="yellowline-Hr  position-absolute line-50"></div>
      <div className="yellowline-Hr  position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow position-absolute line-52"></div>
      <div className="yellowline-Vr upArrow position-absolute line-53"></div>
      <div className="yellowline-Vr upArrow position-absolute line-54"></div>
      <div className="yellowline-Vr  position-absolute line-55"></div>
      <div className="yellowline-Vr  position-absolute line-56"></div>
      <div className="yellowline-Vr  position-absolute line-57"></div>
      <div className="yellowline-Vr  position-absolute line-58"></div>
      <div className="yellowline-Hr  position-absolute line-59"></div>
      <div className="yellowline-Hr  position-absolute line-60"></div>
      <div className="yellowline-Hr  position-absolute line-61"></div>
      <div className="yellowline-Hr  position-absolute line-62"></div>
      <div className="yellowline-Vr  position-absolute line-63"></div>
      <div className="yellowline-Vr  position-absolute line-64"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-65"></div>
      <div className="yellowline-Hr position-absolute line-66"></div>
      <div className="yellowline-Vr downArrow position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-69"></div>
      <div className="yellowline-Hr  position-absolute line-70"></div>
    </div>
  );
};
