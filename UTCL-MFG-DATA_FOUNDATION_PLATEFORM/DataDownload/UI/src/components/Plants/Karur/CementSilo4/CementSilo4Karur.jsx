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
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CementSilo4Karur = () => {
  return (
    <div className="CementSilo1Kukurdih  CS4Kukurdih CementSilo4Karur w-100 h-100 position-relative">
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
                label: "611SGB",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "PP_611SG1B_OLS", closeLabel: "PP_611SG1B_CLS", healthyLabel: "PP_611SG1B_PH" })}`}
                  label="PP_611SG1B_OLS"
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
                label: "611CGX",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 p-1 ${useColorStatus(
                  "PP_611CGX_ECLS"
                )} mr-1`}
                label="PP_611CGX_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGX_EOLS",
                      closeLabel: "PP_611CGX_ECLS",
                      healthyLabel: "PP_611CGX_PH",
                    }
                  )}`}
                  label="PP_611CGX_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGX_EOLS"
                )} ml-2`}
                label="PP_611CGX_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGD",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1D_OLS",
                      closeLabel: "PP_611SG1D_CLS",
                      healthyLabel: "PP_611SG1D_PH",
                    }
                  )}`}
                  label="PP_611SG1D_OLS"
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
                label: "611CGZ",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGZ_ECLS"
                )} mr-1`}
                label="PP_611CGZ_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGZ_EOLS",
                      closeLabel: "PP_611CGZ_ECLS",
                      healthyLabel: "PP_611CGZ_PH",
                    }
                  )}`}
                  label="PP_611CGZ_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGZ_EOLS"
                )} ml-2`}
                label="PP_611CGZ_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGF",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1F_OLS",
                      closeLabel: "PP_611SG1F_CLS",
                      healthyLabel: "PP_611SG1F_PH",
                    }
                  )}`}
                  label="PP_611SG1F_OLS"
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
                label: "611CG1B",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1B_ECLS"
                )} mr-1`}
                label="PP_611CG1B_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1B_EOLS",
                      closeLabel: "PP_611CG1B_ECLS",
                      healthyLabel: "PP_611CG1B_PH",
                    }
                  )}`}
                  label="PP_611CG1B_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1B_EOLS"
                )} ml-2`}
                label="PP_611CG1B_EOLS"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-8">
        <div className="d-flex">
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGY",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGY_EOLS"
                )} mr-1`}
                label="PP_611CGY_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGY_EOLS",
                      closeLabel: "PP_611CGY_ECLS",
                      healthyLabel: "PP_611CGY_PH",
                    }
                  )}`}
                  label="PP_611CGY_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGY_ECLS"
                )} ml-2`}
                label="PP_611CGY_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1C",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1C_OLS",
                      closeLabel: "PP_611SG1C_CLS",
                      healthyLabel: "PP_611SG1C_PH",
                    }
                  )}`}
                  label="PP_611SG1C_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CG1A",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1A_EOLS"
                )} mr-1`}
                label="PP_611CG1A_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1A_EOLS",
                      closeLabel: "PP_611CG1A_ECLS",
                      healthyLabel: "PP_611CG1A_PH",
                    }
                  )}`}
                  label="PP_611CG1A_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1A_ECLS"
                )} ml-2`}
                label="PP_611CG1A_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1E",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1E_OLS",
                      closeLabel: "PP_611SG1E_CLS",
                      healthyLabel: "PP_611SG1E_PH"
                    }
                  )}`}
                  label="PP_611SG1E_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CG1C",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1C_EOLS"
                )} mr-1`}
                label="PP_611CG1C_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1C_EOLS",
                      closeLabel: "PP_611CG1C_ECLS",
                      healthyLabel: "PP_611CG1C_PH",
                    }
                  )}`}
                  label="PP_611CG1C_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1C_ECLS"
                )} ml-2`}
                label="PP_611CG1C_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1G",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1G_OLS",
                      closeLabel: "PP_611SG1G_CLS",
                      healthyLabel: "PP_611SG1G_PH"
                    }
                  )}`}
                  label="PP_611SG1G_OLS"
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
              label: "SILO COMMON CG SP",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "SILO4_SEQ_CV",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SILO4_TIMER1_PV",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "SILO4_OVLP_TIME",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SILO4_CG_SP",
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
            "PP_611BI4_PH"
          )}`}
          label="PP_611BI4_PH"
        />
        <div className="containerImage text-center ml-2">
          <div className="d-flex pt-3">
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ml-2 ${useColorStatus(
                "PP_611BI4_LS"
              )}`}
              label="PP_611BI4_LS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "611Bl4",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "611LIC",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611BI4_WI",
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
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CG1G",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1G_EOLS"
                )} mr-1`}
                label="PP_611CG1G_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1G_EOLS",
                      closeLabel: "PP_611CG1G_ECLS",
                      healthyLabel: "PP_611CG1G_PH",
                    }
                  )}`}
                  label="PP_611CG1G_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1G_ECLS"
                )} ml-2`}
                label="PP_611CG1G_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1L",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1L_OLS",
                      closeLabel: "PP_611SG1L_CLS",
                      healthyLabel: "PP_611SG1L_PH",
                    }
                  )}`}
                  label="PP_611SG1L_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CG1Q",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1Q_EOLS"
                )} mr-1`}
                label="PP_611CG1Q_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1Q_EOLS",
                      closeLabel: "PP_611CG1Q_ECLS",
                      healthyLabel: "PP_611CG1Q_PH",
                    }
                  )}`}
                  label="PP_611CG1Q_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1Q_ECLS"
                )} ml-2`}
                label="PP_611CG1Q_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1U",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1U_OLS",
                      closeLabel: "PP_611SG1U_CLS",
                      healthyLabel: "PP_611SG1U_PH"
                    }
                  )}`}
                  label="PP_611SG1U_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CG1P",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1P_EOLS"
                )} mr-1`}
                label="PP_611CG1P_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1P_EOLS",
                      closeLabel: "PP_611CG1P_ECLS",
                      healthyLabel: "PP_611CG1P_PH",
                    }
                  )}`}
                  label="PP_611CG1P_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1P_ECLS"
                )} ml-2`}
                label="PP_611CG1P_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1T",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1T_OLS",
                      closeLabel: "PP_611SG1T_CLS",
                      healthyLabel: "PP_611SG1T_PH"
                    }
                  )}`}
                  label="PP_611SG1T_OLS"
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
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1H",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1H_OLS",
                      closeLabel: "PP_611SG1H_CLS",
                      healthyLabel: "PP_611SG1H_PH"
                    }
                  )}`}
                  label="PP_611SG1H_OLS"
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
                label: "611CG1D",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 mr-1 ${useColorStatus(
                  "PP_611CG1D_ECLS"
                )}`}
                label="PP_611CG1D_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1D_EOLS",
                      closeLabel: "PP_611CG1D_ECLS",
                      healthyLabel: "PP_611CG1D_PH",
                    }
                  )}`}
                  label="PP_611CG1D_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1D_EOLS"
                )} ml-2`}
                label="PP_611CG1D_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1J",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1J_OLS",
                      closeLabel: "PP_611SG1J_CLS",
                      healthyLabel: "PP_611SG1J_PH"
                    }
                  )}`}
                  label="PP_611SG1J_OLS"
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
                label: "611CG1E",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1E_ECLS"
                )} mr-1`}
                label="PP_611CG1E_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1E_EOLS",
                      closeLabel: "PP_611CG1E_ECLS",
                      healthyLabel: "PP_611CG1E_PH",
                    }
                  )}`}
                  label="PP_611CG1E_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1E_EOLS"
                )} ml-2`}
                label="PP_611CG1E_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1K",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1K_OLS",
                      closeLabel: "PP_611SG1K_CLS",
                      healthyLabel: "PP_611SG1K_PH",
                    }
                  )}`}
                  label="PP_611SG1K_OLS"
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
                label: "611CG1F",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1F_ECLS"
                )} mr-1`}
                label="PP_611CG1F_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1F_EOLS",
                      closeLabel: "PP_611CG1F_ECLS",
                      healthyLabel: "PP_611CG1F_PH",
                    }
                  )}`}
                  label="PP_611CG1F_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1F_EOLS"
                )} ml-2`}
                label="PP_611CG1F_EOLS"
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
            label: "611AS1L",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "PP_611CG1Q_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG1Q",
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
              label: "PP_611CG1E_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG1E",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611AS1H",
          }}
        />
      </div>

      <div className="position-absolute single-text-27 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1U",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1J_RUN", healthyLabel: "PP_611FN1J_PH" }
                )}`}
                label="PP_611FN1J_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1J",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1T",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" }
                )}`}
                label="PP_621FN4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1K",
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
                  { runLabel: "PP_611FN1H_RUN", healthyLabel: "PP_611FN1H_PH" }
                )}`}
                label="PP_611FN1H_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1H",
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
                  { runLabel: "PP_611FN1E_RUN", healthyLabel: "PP_611FN1E_PH" }
                )}`}
                label="PP_611FN1E_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1E",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611ASJ",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1F_RUN", healthyLabel: "PP_611FN1F_PH" }
                )}`}
                label="PP_611FN1F_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1F",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1K",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1G_RUN", healthyLabel: "PP_611FN1G_PH" }
                )}`}
                label="PP_611FN1G_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1G",
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
              firstCircleText: "",
              firstCircleLable: "PP_641BE4",
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
                  { runLabel: "PP_611FN1C_RUN", healthyLabel: "PP_611FN1C_PH" }
                )}`}
                label="PP_611FN1C_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1C",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1D_RUN", healthyLabel: "PP_611FN1D_PH" }
                )}`}
                label="PP_611FN1D_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1D",
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
      <div className="position-absolute single-text-46 d-flex">
        <div className="ml-3 mr-2">
          <div className="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" }
                )}`}
                label="PP_621FN4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1U",
            }}
          />
        </div>
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" }
                )}`}
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
      </div>
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
              className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_611SGX_OLS", closeLabel: "PP_611SGX_CLS", healthyLabel: "PP_611SGX_PH" }
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
              className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_611SGY_OLS", closeLabel: "PP_611SGY_CLS", healthyLabel: "PP_611SGY_PH" }
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
              className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_611SGZ_OLS", closeLabel: "PP_611SGZ_CLS", healthyLabel: "PP_611SGZ_PH" }
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
              label: "611HR4",
            }}
          />
        </div>
        <div className="ml-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_611HR4_RUN", healthyLabel: "PP_611HR4_PH" }
            )}`}
            label="PP_611HR4_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "PP_611HR4_TE",
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
              label: "PP_611HR8_TE",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_611HR8_RUN", healthyLabel: "PP_611HR8_PH" }
            )}`}
            label="PP_611HR8_RUN"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "611HRS",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "SM_592BV1_OLS", closeLabel: "SM_592BV1_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "SM_592BV1_OLS", closeLabel: "SM_592BV1_CLS" }
          )}`}
          label="SM_592BV1_OLS"
        />
      </div>
      <div className="position-absolute single-text-55 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2L_OLS", closeLabel: "PP_611BV2L_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2L_OLS", closeLabel: "PP_611BV2L_CLS" }
          )}`}
          label="PP_611BV2L_OLS"
        />
      </div>
      <div className="position-absolute single-text-56">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV5_OLS", closeLabel: "PP_611BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV5_OLS", closeLabel: "PP_611BV5_CLS" }
          )}`}
          label="PP_611BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV1_OLS", closeLabel: "PP_611BV1_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV1_OLS", closeLabel: "PP_611BV1_CLS" }
          )}`}
          label="PP_611BV1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV1Z_OLS", closeLabel: "PP_611BV1Z_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV1Z_OLS", closeLabel: "PP_611BV1Z_CLS" }
          )}`}
          label="PP_611BV1Z_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV1Z",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2G_OLS", closeLabel: "PP_611BV2G_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV2G_OLS", closeLabel: "PP_611BV2G_CLS" }
          )}`}
          label="PP_611BV2G_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2G",
          }}
        />
      </div>

      <div className="position-absolute single-text-60 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL4_RUN", healthyLabel: "PP_611BL4_PH" }
                )}`}
                label="PP_611BL4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL4",
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
            label: "PP_611BL4_PT",
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
                  { runLabel: "PP_611BL8_RUN", healthyLabel: "PP_611BL8_PH" }
                )}`}
                label="PP_611BL8_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL8",
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
            label: "PP_611BL8_PT",
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
            label: "TO SILO 4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-4 ",
            label: "611BV1M-1Y",
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
            label: "611BV2L",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-4",
            label: "TO 611BI-4",
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
            label: "PP_611CG1D_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611CG1D",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <BlackContainer
          data={{
            label: "PP_611CG1G_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611CG1G",
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
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ",
                  label: "611BF5",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {runLabel: "PP_611RA5_RUN",
                      healthyLabel: "PP_611RA5_PH",}
                     )}`}
                    label="PP_611RA5_RUN"
                  />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2 ",
                      label: "611RA5",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-39a ml-3 mb-2"></div>
            </div>
            <div className="mt-4 ml-5 position-absolute">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "611FN1B",
                  }}
                />
                <div className="d-flex">
                  <div className="img-97 d-flex justify-content-center  align-items-end">
                    <MotorCircleDigitalTag
                      className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                        {
                          runLabel: "PP_611FN1B_RUN",
                          healthyLabel: "PP_611FN1B_PH",
                        }
                      )}`}
                      label="PP_611FN1B_RUN"
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
            label: "TO 611AS1A",
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
            label: "CEMENT SILO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SI4",
          }}
        />
      </div>

      <div className="position-absolute single-text-71 d-flex justify-content-between">
        <div>
          <BlackContainer
            data={{
              label: "PP_611CG1P_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG1P",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "PP_611CG1F_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG1F",
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
            className={`square digital-tag ml-1 ${useColorStatus(
              "PP_611BF5_DPT"
            )}`}
            label="PP_611BF5_DPT"
          />
        </span>

        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "PP_611BF5_PT"
            )}`}
            label="PP_611BF5_PT"
          />
        </span>
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1W_RUN", healthyLabel: "PP_611FN1W_PH" }
                )}`}
                label="PP_611FN1W_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1W",
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
      <div className="yellowline-Vr upArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr upArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-21"></div>
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
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Hr  position-absolute line-70"></div>
      <div className="yellowline-Vr  position-absolute line-71"></div>
      <div className="yellowline-Hr  position-absolute line-72 rightarrow"></div>
      <div className="yellowline-Hr  position-absolute line-73"></div>
    </div>
  );
};
