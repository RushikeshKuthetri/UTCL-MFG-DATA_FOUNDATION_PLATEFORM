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

export const CementSilo1KukurdihPage = () => {
  return (
    <div className="CementSilo1Kukurdih w-100 h-100 position-relative">
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
                label: "611SG1",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG1_OLS", closeLabel: "PP_611SG1_CLS" }
                  )}`}
                  label="PP_611SG1_OLS"
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
                label: "611CG1",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 p-1 ${useColorStatus(
                  "PP_611CG1_ECLS"
                )} mr-1`}
                label="PP_611CG1_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1_EOLS",
                      closeLabel: "PP_611CG1_ECLS",
                      healthyLabel: "PP_611CG1_PH",
                    }
                  )}`}
                  label="PP_611CG1_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1_EOLS"
                )} ml-2`}
                label="PP_611CG1_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG3",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG3_OLS", closeLabel: "PP_611SG3_CLS" }
                  )}`}
                  label="PP_611SG3_OLS"
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
                label: "611CG3",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG3_ECLS"
                )} mr-1`}
                label="PP_611CG3_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG3_EOLS",
                      closeLabel: "PP_611CG3_ECLS",
                      healthyLabel: "PP_611CG3_PH",
                    }
                  )}`}
                  label="PP_611CG3_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG3_EOLS"
                )} ml-2`}
                label="PP_611CG3_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG5",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG5_OLS", closeLabel: "PP_611SG5_CLS" }
                  )}`}
                  label="PP_611SG5_OLS"
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
                label: "611CG5",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG5_ECLS"
                )} mr-1`}
                label="PP_611CG5_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG5_EOLS",
                      closeLabel: "PP_611CG5_ECLS",
                      healthyLabel: "PP_611CG5_PH",
                    }
                  )}`}
                  label="PP_611CG5_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG5_EOLS"
                )} ml-2`}
                label="PP_611CG5_EOLS"
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
                label: "611CG2",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG2_EOLS"
                )} mr-1`}
                label="PP_611CG2_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG2_EOLS",
                      closeLabel: "PP_611CG2_ECLS",
                      healthyLabel: "PP_611CG2_PH",
                    }
                  )}`}
                  label="PP_611CG2_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG2_ECLS"
                )} ml-2`}
                label="PP_611CG2_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG2",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG2_OLS", closeLabel: "PP_611SG2_CLS" }
                  )}`}
                  label="PP_611SG2_OLS"
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
                label: "611CG4",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG4_EOLS"
                )} mr-1`}
                label="PP_611CG4_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG4_EOLS",
                      closeLabel: "PP_611CG4_ECLS",
                      healthyLabel: "PP_611CG4_PH",
                    }
                  )}`}
                  label="PP_611CG4_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG4_ECLS"
                )} ml-2`}
                label="PP_611CG4_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG4",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG4_OLS", closeLabel: "PP_611SG4_CLS" }
                  )}`}
                  label="PP_611SG4_OLS"
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
                label: "611CG6",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG6_EOLS"
                )} mr-1`}
                label="PP_611CG6_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG6_EOLS",
                      closeLabel: "PP_611CG6_ECLS",
                      healthyLabel: "PP_611CG6_PH",
                    }
                  )}`}
                  label="PP_611CG6_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG6_ECLS"
                )} ml-2`}
                label="PP_611CG6_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG6",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG6_OLS", closeLabel: "PP_611SG6_CLS" }
                  )}`}
                  label="PP_611SG6_OLS"
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
              label: "SILO1_SEQ_CV",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SILO1_TIMER1_PV",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "SILO1_OVLP_TIME",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SILO1_CG_SP",
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
            "PP_611BI1_PH"
          )}`}
          label="PP_611BI1_PH"
        />
        <div className="containerImage text-center ml-2">
          <div className="d-flex pt-3">
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ml-2 ${useColorStatus(
                "PP_611BI1_LS"
              )}`}
              label="PP_611BI1_LS"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "611Bl1",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "PP_611BI1_WI",
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
                label: "611CGA",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGA_EOLS"
                )} mr-1`}
                label="PP_611CGA_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGA_EOLS",
                      closeLabel: "PP_611CGA_ECLS",
                      healthyLabel: "PP_611CGA_PH",
                    }
                  )}`}
                  label="PP_611CGA_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CGA_ECLS"
                )} ml-2`}
                label="PP_611CGA_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGA",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SGA_OLS", closeLabel: "PP_611SGA_CLS" }
                  )}`}
                  label="PP_611SGA_OLS"
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
                label: "611CG1J",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1J_EOLS"
                )} mr-1`}
                label="PP_611CG1J_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1J_EOLS",
                      closeLabel: "PP_611CG1J_ECLS",
                      healthyLabel: "PP_611CG1J_PH",
                    }
                  )}`}
                  label="PP_611CG1J_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1J_ECLS"
                )} ml-2`}
                label="PP_611CG1J_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG4N",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1N_OLS",
                      closeLabel: "PP_611SG1N_CLS",
                    }
                  )}`}
                  label="PP_611SG1N_OLS"
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
                label: "611CG1H",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1H_EOLS"
                )} mr-1`}
                label="PP_611CG1H_EOLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1H_EOLS",
                      closeLabel: "PP_611CG1H_ECLS",
                      healthyLabel: "PP_611CG1H_PH",
                    }
                  )}`}
                  label="PP_611CG1H_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG1H_ECLS"
                )} ml-2`}
                label="PP_611CG1H_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1M",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1M_OLS",
                      closeLabel: "PP_611SG1M_CLS",
                    }
                  )}`}
                  label="PP_611SG1M_OLS"
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
                label: "611SG7",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG7_OLS", closeLabel: "PP_611SG7_CLS" }
                  )}`}
                  label="PP_611SG7_OLS"
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
                label: "611CG7",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 mr-1 ${useColorStatus(
                  "PP_611CG7_ECLS"
                )}`}
                label="PP_611CG7_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG7_EOLS",
                      closeLabel: "PP_611CG7_ECLS",
                      healthyLabel: "PP_611CG7_PH",
                    }
                  )}`}
                  label="PP_611CG7_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG7_EOLS"
                )} ml-2`}
                label="PP_611CG7_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG8",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG8_OLS", closeLabel: "PP_611SG8_CLS" }
                  )}`}
                  label="PP_611SG8_OLS"
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
                label: "611CG8",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG8_ECLS"
                )} mr-1`}
                label="PP_611CG8_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG8_EOLS",
                      closeLabel: "PP_611CG8_ECLS",
                      healthyLabel: "PP_611CG8_PH",
                    }
                  )}`}
                  label="CM_573RA3_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG8_EOLS"
                )} ml-2`}
                label="PP_611CG8_EOLS"
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG9",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                    { openLabel: "PP_611SG9_OLS", closeLabel: "PP_611SG9_CLS" }
                  )}`}
                  label="PP_611SG9_OLS"
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
                label: "611CG9",
              }}
            />
            <div className="d-flex">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG9_ECLS"
                )} mr-1`}
                label="PP_611CG9_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG9_EOLS",
                      closeLabel: "PP_611CG9_ECLS",
                      healthyLabel: "PP_611CG9_PH",
                    }
                  )}`}
                  label="CM_573RA3_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-3 ${useColorStatus(
                  "PP_611CG9_EOLS"
                )} ml-2`}
                label="PP_611CG9_EOLS"
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
            label: "611ASA",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "PP_611CG1J_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG1J",
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
              label: "PP_611CG8_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG8",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611AS7",
          }}
        />
      </div>

      <div className="position-absolute single-text-27 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1N",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN9_RUN", healthyLabel: "PP_611FN9_PH" }
                )}`}
                label="PP_611FN9_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1M",
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
              label: "611FN1M",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1V",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1L_RUN", healthyLabel: "PP_611FN1L_PH" }
                )}`}
                label="PP_611FN1L_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1L",
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
                  { runLabel: "PP_611FN6_RUN", healthyLabel: "PP_611FN6_PH" }
                )}`}
                label="PP_611FN6_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN6",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS8",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN7_RUN", healthyLabel: "PP_611FN7_PH" }
                )}`}
                label="PP_611FN7_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN7",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS9",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN8_RUN", healthyLabel: "PP_611FN8_PH" }
                )}`}
                label="PP_611FN8_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN8",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611ASX",
          }}
        />
      </div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-33"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-34"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-35"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-36"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-37"></div>
      <div className=" position-absolute  single-text-38">
        <BlackContainer
          data={{
            label: "PP_641BI4_WI",
            useClass: "greenTxt  mt-2 mb-2",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe position-relative"
          firstCircle={{
            firstCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641BE4_RUN", healthyLabel: "PP_641BE4_PH" }
            )} `,
            firstCircleText: "M",
            firstCircleLable: "PP_641BE4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "641BE4",
          }}
        />
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
                  { runLabel: "PP_611FN4_RUN", healthyLabel: "PP_611FN4_PH" }
                )}`}
                label="PP_611FN4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN4",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN5_RUN", healthyLabel: "PP_611FN5_PH" }
                )}`}
                label="PP_611FN5_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN5",
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
        <div className="ml-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 mr-1",
              label: "611FNS",
            }}
          />
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
        <div className="ml-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1",
              label: "611FNU",
            }}
          />
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
        </div>
      </div>
      <div className="position-absolute single-text-46 d-flex justify-content-around">
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
              label: "611FN1U",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611AS1W",
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
              label: "611FNV",
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
              useClass: "text-dark mt-3 mr-1",
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
      <div className="position-absolute  single-text-51">
        <div className="d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            <div
              className={`dot digital-tag grey-color ${{
                openLabel: "PH_412CG5_OLS",
                closeLabel: "PH_412CG5_CLS",
              }}`}
            ></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-52 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "611HR1",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611HR1_TE",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_611HR1_RUN", healthyLabel: "PP_611HR1_PH" }
            )}`}
            label="PP_611HR1_RUN"
          />
        </div>
      </div>
      <div className="position-absolute  single-text-53 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "611HR5",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611HR5_TE",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_611HR5_RUN", healthyLabel: "PP_611HR5_PH" }
            )}`}
            label="PP_611HR5_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "SM_592BV1_OLS",
              closeLabel: "SM_592BV1_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "SM_592BV1_OLS", closeLabel: "SM_592BV1_CLS" }
          )}`}
          label="SM_592BV1_OLS"
        />
      </div>
      <div className="position-absolute single-text-55 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2H_OLS",
              closeLabel: "PP_611BV2H_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2H_OLS",
              closeLabel: "PP_611BV2H_CLS",
            }
          )}`}
          label="PP_611BV2H_OLS"
        />
      </div>
      <div className="position-absolute single-text-56">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV8_OLS", closeLabel: "PP_611BV8_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_611BV8_OLS", closeLabel: "PP_611BV8_CLS" }
          )}`}
          label="PP_611BV8_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV8",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV4_OLS",
              closeLabel: "PP_611BV4_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV4_OLS",
              closeLabel: "PP_611BV4_CLS",
            }
          )}`}
          label="PP_611BV4_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2C_OLS",
              closeLabel: "PP_611BV2C_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2C_OLS",
              closeLabel: "PP_611BV2C_CLS",
            }
          )}`}
          label="PP_611BV2C_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2C",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2D_OLS",
              closeLabel: "PP_611BV2D_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2D_OLS",
              closeLabel: "PP_611BV2D_CLS",
            }
          )}`}
          label="PP_611BV2D_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2O",
          }}
        />
      </div>

      <div className="position-absolute single-text-60 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL1_RUN", healthyLabel: "PP_611BL1_PH" }
                )}`}
                label="PP_611BL1_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL1",
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
            label: "PP_611BL1_PT",
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
                  { runLabel: "PP_611BL5_RUN", healthyLabel: "PP_611BL5_PH" }
                )}`}
                label="PP_611BL5_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL5",
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
            label: "PP_611BL5_PT",
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
            useClass: "text-dark mt-3 ",
            label: "611BV9-L",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-4",
            label: "TO SELO 1",
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
            label: "611BV2H",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-4",
            label: "TO 611BI-1",
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
            label: "PP_611CG7_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611CG7",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <BlackContainer
          data={{
            label: "PP_611CGA_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_611CGA",
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
                  label: "PP_611BF1_DPT",
                  useClass: "greenTxt  mx-auto",
                  unit: "mmWc",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PP_611BF1_PT",
                  useClass: "greenTxt  mt-1 mx-auto",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_611RA1"
                    )}`}
                    label="PP_611RA1_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "611RA1",
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
                    label: "611FN1",
                  }}
                />
                <div className="d-flex">
                  <div className="img-97 d-flex justify-content-center  align-items-end">
                    <MotorCircleDigitalTag
                      className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                        {
                          runLabel: "PP_611FN1_RUN",
                          healthyLabel: "PP_611FN1_PH",
                        }
                      )}`}
                      label="PP_611FN1_RUN"
                    />
                  </div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark mt-2 ",
                      label: "611BF1",
                    }}
                  />
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
            label: "TO 611ASA1",
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
            label: "611SI1",
          }}
        />
      </div>

      <div className="position-absolute single-text-71 d-flex justify-content-between">
        <div>
          <BlackContainer
            data={{
              label: "PP_611CG1H_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG1H",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "PP_611CG9_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP_611CG9",
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
              "PP_611BF1_DPT"
            )}`}
            label="PP_611BF1_DPT"
          />
        </span>

        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "PP_611BF1_PT"
            )}`}
            label="PP_611BF1_PT"
          />
        </span>
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNY_RUN", healthyLabel: "PP_611FNY_PH" }
                )}`}
                label="PP_611FNY_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNY",
            }}
          />
        </div>
      </div>

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
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
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
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Hr  position-absolute line-37"></div>
      <div className="yellowline-Vr upArrow position-absolute line-38"></div>
      <div className="yellowline-Vr upArrow position-absolute line-39"></div>
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
    </div>
  );
};
