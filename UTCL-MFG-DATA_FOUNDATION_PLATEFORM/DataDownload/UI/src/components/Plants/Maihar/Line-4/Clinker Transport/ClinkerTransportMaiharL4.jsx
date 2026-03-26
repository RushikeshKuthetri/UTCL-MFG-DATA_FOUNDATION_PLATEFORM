import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, PipeWithCircles } from "../../../../index";
import {
  useMotorTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useImgGateColorStatusForNewPlantScreen,
  useImgColorStatusForNewPlantScreen,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

import * as tagsData from "../../../../../data/maihar/Line-3/Preheater/maiharL3PreheaterTextcolumn";

export const ClinkerTransportMaiharL4 = () => {
  return (
    <div className="CTMaiharL4 CTKukurdih ClinkerTransportAndhra w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "494BF1",
                }}
              />

              <div className="">
                <div className="squareplustri d-flex align-items-center   mt-1"></div>

                <div className="d-flex align-items-end justify-content-center ml-2 mt-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("NA")}`} label="NA" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "494RA2",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2  mb-3 ",
                    label: "494FN1",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className="">
                    <MotorCircleDigitalTag
                      className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                        runLabel: "CL_494FN1_RUN",
                        healthyLabel: "CL_494FN1_PH",
                      })}`}
                      label="CL_494FN1_RUN"
                    />
                    <div className="yellowline-Vr  downArrow position-absolute line-391 ml-3 mb-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <div class="trapezoid"></div>
        <div className="pipeVr text-center ml-2">
          <div className="mr-5">
            <div className="d-flex justify-content-center align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-4",
                  label: "494SI1_LS1",
                }}
              />
              <MotorCircleDigitalTag className={`square digital-tag ml-2 mt-3 ${useColorStatus("CL_494SI1_LS")}`} label="CL_494SI1_LS" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "494SI1_LT1",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_494SI1_LT1",
                  useClass: "greenTxt  mt-1 ml-3",
                  unit: "Mtr",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 ml-2",
              label: "494SI1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 ml-2",
              label: "CLINKER SILO",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "494SB1",
          }}
        />
        <div className="containerImage text-center pt-2 ">
          <div className="mx-auto text-center">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "494SB1_LS1",
                }}
              />
              <MotorCircleDigitalTag className={`square digital-tag  mt-2 ml-4 ${useColorStatus("CL_494SI2_LS")}`} label="CL_494SI2_LS" />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "493SB1_LT1",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_494SI2_LT1",
                  useClass: "greenTxt  ml-3 mt-2",
                  unit: "Mtr",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>

          <div className="mx-auto mt-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "UNBURNT",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "CLINKER SILO",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "514BF1",
                }}
              />

              <div className="">
                <div className="squareplustri  mt-1 d-flex align-items-center justify-content-center"></div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <div className="circle-img c-grey-img-2"></div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "514RA1",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr   position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2  mb-3 ",
                    label: "514FN1",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className=" mt-2 line-circle grey-color"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "514BF2",
                }}
              />

              <div className="">
                <div className="squareplustri d-flex align-items-center justify-content-center mt-1"></div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <div className="circle-img c-grey-img-2"></div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "514RA2",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr   position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2  mb-3 ",
                    label: "514FN2",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className=" mt-2 line-circle grey-color"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "494BF2",
                }}
              />
              <div className="">
                <div className="squareplustri  d-flex align-items-center justify-content-center mt-1">
                  <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_494BF2")}`} label="CL_494BF2" />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("NA")}`} label="NA" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "494RA3",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2  mb-3 ",
                    label: "494FN2",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className="">
                    <MotorCircleDigitalTag
                      className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                        runLabel: "CL_494FN2_RUN",
                        healthyLabel: "CL_494FN2_PH",
                      })}`}
                      text=""
                      label="CL_494FN2_RUN"
                    />
                    <div className="yellowline-Vr  downArrow position-absolute line-391 ml-3 mb-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute single-text-20 d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-3",
                label: "494DG1",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                closeLabel: "CL_494DG1_CLS",
                openLabel: "CL_494DG1_OLS",
                healthyLabel: "CL_494DG1_PH",
              })}`}
              label="CL_494DG1_OLS"
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-7 d-flex">
        <div className="d-flex">
          <div className="mr-3">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG1",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG2",
              }}
            />
          </div>
        </div>
        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG3",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG4",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="d-flex">
          <div className="mr-3">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG6",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG7",
              }}
            />
          </div>
        </div>
        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG8",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG9",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGA",
              }}
            />
          </div>
        </div>
        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGB",
              }}
            />
          </div>
        </div>
        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGC",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div className="d-flex">
          <div className="mr-3">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGD",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGE",
              }}
            />
          </div>
        </div>
        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGF",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGG",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-3">
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <div className={`square grey-color`}></div>
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGH",
              }}
            />
          </div>
        </div>
      </div>

      <div className=" position-absolute single-text-11">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot grey-color`,
            // firstCircleLabel: "66CL8",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot grey-color`,
            secondCircleLabel: "",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-2 mr-4 ml-2",
              label: "DB1 SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1 ml-2",
              label: "514DB1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-12">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot grey-color`,
            // firstCircleLabel: "66CL8",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1 mr-4 ml-2",
              label: "DB2 SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1 ml-2",
              label: "514DB3",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-13">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot grey-color`,
            // firstCircleLabel: "66CL8",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-1 mr-4 ml-2",
              label: "DB3 SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1 ml-2",
              label: "514DB2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "514SG1",
            }}
          />
        </div>
        <div>
          {/* <MotorCircleDigitalTag
                className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                  openLabel: "CMH_514SG1_EOLS",
                  closeLabel: "CMH_514SG1_ECLS",
                  healthyLabel: "CMH_514SG1_PH",
                })}`}
                label="CMH_514SG1_EOLS"
              /> */}
          <div className={`gray-green-red-img position-absolute gray-img`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "514SG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "514SG3",
            }}
          />
        </div>
        <div>
          {/* <MotorCircleDigitalTag
                className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                  openLabel: "CMH_514SG3_EOLS",
                  closeLabel: "CMH_514SG3_ECLS",
                  healthyLabel: "CMH_514SG3_PH",
                })}`}
                label="CMH_514SG3_EOLS"
              /> */}
          <div className={`gray-green-red-img position-absolute gray-img`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-17">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot grey-color`,
            // firstCircleLabel: "66CL8",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot grey-color`,
            // firstCircleLabel: "66CL8",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot grey-color`,
            secondCircleLabel: "",
          }}
        />
      </div>

      <div className="position-absolute single-text-19 d-flex">
        <div className=" loadingtruck"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-5",
            label: "494WG1",
          }}
        />
      </div>

      <div className=" position-absolute single-text-21">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-2",
              label: "494DB1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-4",
              label: "494DB1_TT1",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_494DB1_TT1",
              useClass: "greenTxt mb-1 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "NA", healthyLabel: "NA" })} `,
            secondCircleLabel: "NA",
            secondCircleText: "",
          }}
        />
        <div className="d-flex mt-2 ">
          <BlackContainer
            data={{
              label: "CL_494DB1_Curr",
              useClass: "greenTxt mb-1 ml-5",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 bg-info",
              label: "UNBURNT",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-22">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          // secondCircle={{
          //   secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          //     { runLabel: "KM_L41BC1_RUN", healthyLabel: "KM_L41BC1_PH" }
          //   )}`,
          //   secondCircleLabel: "KM_L41BC1_RUN",
          //   secondCircleText: "",
          // }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-5",
              label: "494DB2",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-23">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          // secondCircle={{
          //   secondCircleText: "",
          //   secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          //     { runLabel: "RM2_361WF2_RUN", healthyLabel: "RM2_361WF2_PH" }
          //   )}`,
          //   secondCircleLabel: "RM2_361WF2_RUN",
          // }}
        />
      </div>

      <div className="position-absolute single-text-24">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TO 494BF2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4 mr-1",
              label: "TO 494BF2",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info mt-1  ml-auto",
            label: "SILO",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 ">
        <div class="squareplustri d-flex align-items-end justify-content-center ml-2 mt-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "494SG1",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-27",
          label: "TO 494DB2",
        }}
      />
      <div className=" position-absolute single-text-28 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "494CG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "494SG2",
          }}
        />
      </div>

      <div className=" position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO CEMENT MILL HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FEEDIND CONVEYOR",
          }}
        />
      </div>
      <div className=" position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "TO CLINKER BULK",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "LOADING BIN",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-42",
          label: "514DB4",
        }}
      />

      <div className=" position-absolute single-text-44 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "514BC1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-45">
        <div className={`text-dark px-1 grey-color mt-2 mx-auto`}>PCL</div>
        <div className={`text-dark px-1 grey-color mt-2 mx-auto`}>PCR</div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "CLINKER SILO FEED GROUP",
        }}
      />
      <div className=" position-absolute single-text-47 ">
        <div className="d-flex">
          <div className={`text-dark px-1 grey-color mt-2 mx-auto`}>PCL</div>
          <div className={`text-dark px-1 grey-color mt-2 ml-3`}>PCR</div>
        </div>
        <BlackContainer
          data={{
            label: "CL_494DB2_Curr",
            useClass: "greenTxt  mt-4 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_494SG1")}`} text="" label="CL_494SG1" />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "CL_494CG1_EOLS",
              closeLabel: "CL_494CG1_ECLS",
            })}`}
            text=""
            label="CL_494CG1_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-53 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_494BS1_RUN", healthyLabel: "CL_494BS1_PH" })}`}
            text=""
            label="CL_494BS1_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-4",
            label: "494BS1",
          }}
        />
      </div>
      <div className="position-absolute single-text-55 ">
        <div className="d-flex">
          <div>
            {/* <MotorCircleDigitalTag
                  className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                    openLabel: "CMH_514DG1_EOLS",
                    closeLabel: "CMH_514DG1_ECLS",
                    healthyLabel: "CMH_514DG1_PH",
                  })}`}
                  label="CMH_514DG1_EOLS"
                /> */}
            <div className={`gray-green-red-img position-absolute gray-img`}></div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5 mr-2",
                label: "514DG1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-57 ">
        <div className="d-flex">
          <div>
            {/* <MotorCircleDigitalTag
                  className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                    openLabel: "CMH_514DG2_EOLS",
                    closeLabel: "CMH_514DG2_ECLS",
                    healthyLabel: "CMH_514DG2_PH",
                  })}`}
                  label="CMH_514DG2_EOLS"
                /> */}
            <div className={`gray-green-red-img position-absolute gray-img`}></div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5 mr-2",
                label: "514DG2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "514BF3",
                }}
              />

              <div className="">
                <div className="squareplustri d-flex align-items-center justify-content-center mt-1"></div>

                <div className="d-flex align-items-end justify-content-center ml-2 mt-2">
                  <div className="circle-img c-grey-img-2"></div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "514RA3",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr   position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2  mb-3 ",
                    label: "514FN3",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className=" mt-2 line-circle grey-color"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-60 ">
        <div className="d-flex">
          <div>
            {/* <MotorCircleDigitalTag
                  className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                    openLabel: "CMH_514DG3_EOLS",
                    closeLabel: "CMH_514DG3_ECLS",
                    healthyLabel: "CMH_514DG3_PH",
                  })}`}
                  label="CMH_514DG3_EOLS"
                /> */}
            <div className={`gray-green-red-img position-absolute gray-img`}></div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5 mr-2",
                label: "514DG3",
              }}
            />
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "TO 514DB4/514BC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-63",
          label: "TO 514DB4/514BC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-64",
          label: "514DB4/514BC1",
        }}
      />

      <div className="position-absolute single-text-66">
        <BlackContainer
          data={{
            label: "CL_494BF2_DPT",
            useClass: "greenTxt  mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_494BF2_PT1",
            useClass: "greenTxt  mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-70">
        <BlackContainer
          data={{
            label: "CL_494BF1_DPT",
            useClass: "greenTxt  mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_494BF1_PT1",
            useClass: "greenTxt  mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <div className="">
                <div className="squareplustri  mt-1"></div>

                <div className="d-flex position-absolute single-text-72">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark mt-2",
                      label: "494RA1",
                    }}
                  />
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("NA")} ml-1`} label="NA" />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag position-absolute single-text-73 ${useImgGateColorStatusForNewPlantScreen({
              openLabel: "CMH_514SG2_EOLS",
              closeLabel: "CMH_514SG2_ECLS",
              healthyLabel: "CMH_514SG2_PH",
            })}`}
            label="CMH_514SG2_EOLS"
          /> */}
      <div className={`gray-green-red-img position-absolute gray-img  single-text-73`}></div>
      <MotorCircleDigitalTag className={`square digital-tag  position-absolute single-text-74 ${useColorStatus("CL_494BF1")}`} label="CL_494BF1" />

      <div className="position-absolute single-text-76 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info",
                  label: "494BF3",
                }}
              />
              <div className="">
                <div className="squareplustri  d-flex align-items-center justify-content-center mt-1"></div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2  mb-3 ",
                    label: "494FN3",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className="">
                    <MotorCircleDigitalTag
                      className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                        runLabel: "NA",
                        healthyLabel: "NA",
                      })}`}
                      text=""
                      label="NA"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-78">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "494BF3.DPT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "494BF3.PT1",
          }}
        />
      </div>
      <div className="position-absolute single-text-79 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FUTURE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "514BF1",
          }}
        />
      </div>
      <div className="position-absolute single-text-80 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FUTURE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "514BF2",
          }}
        />
      </div>
      <div className="position-absolute single-text-81 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FUTURE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "514BF3",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "514BF1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-83",
          label: "514BF2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-84",
          label: "514BF3",
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
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr  position-absolute line-34"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-35"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-41"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-44"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-46"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-47"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-48"></div>
      <div className="yellowline-Hr   position-absolute line-50"></div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-51">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Hr   position-absolute line-52"></div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-53">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr d-flex justify-content-center align-items-end position-absolute line-55">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-56">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Hr  d-flex justify-content-center align-items-center position-absolute line-57">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr   position-absolute line-58"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-59"></div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-60">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-61">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Hr d-flex justify-content-center align-items-center  position-absolute line-62">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr   position-absolute line-63"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-64"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-65"></div>
      <div className="yellowline-Vr  position-absolute line-66"></div>
      <div className="yellowline-Vr d-flex justify-content-center align-items-end  position-absolute line-67">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr d-flex justify-content-center align-items-end  position-absolute line-68">
        <i className="fa-solid fa-caret-up"></i>
      </div>
    </div>
  );
};
