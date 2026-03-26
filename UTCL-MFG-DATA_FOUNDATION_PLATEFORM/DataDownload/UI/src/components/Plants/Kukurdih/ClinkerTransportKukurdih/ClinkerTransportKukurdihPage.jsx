import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, PipeWithCircles } from "../../../index";
import {
  useMotorTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useImgColorStatusForNewPlantScreen,
  useImgGateColorStatusForNewPlantScreen,
} from "../../../../utils";

export const ClinkerTransportKukurdihPage = () => {
  return (
    <div className="CTKukurdih w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "491BF1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />

              <div className="">
                <div className="squareplustri d-flex align-items-center   mt-1"></div>

                <div className="d-flex align-items-end justify-content-center ml-2 mt-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("NA")}`} label="NA" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "491RA1A",
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
                    label: "491FN1",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className="">
                    <MotorCircleDigitalTag
                      className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_491FN1_RUN", healthyLabel: "CL_491FN1_PH" })}`}
                      label="CL_491FN1_RUN"
                    />
                    <div className="yellowline-Vr  downArrow position-absolute line-391 ml-3 mb-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex ">
        <div className="containerImage text-center ml-2">
          <div className="mr-5">
            <div className="d-flex justify-content-center align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-4",
                  label: "491SI1_LS1",
                }}
              />
              <MotorCircleDigitalTag className={`square digital-tag ml-2 mt-3  ${useColorStatus("CL_491SI1_LS")}`} label="CL_491SI1_LS" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "491SI1_LT1",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_491SI1_LT1",
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
              label: "491SI1",
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
            label: "491S12",
          }}
        />
        <div className="containerImage text-center pt-2 ">
          <div className="mx-auto text-center">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "491SI2_LS1",
                }}
              />
              <MotorCircleDigitalTag className={`square digital-tag  mt-2 ml-4 ${useColorStatus("CL_491SI2_LS")}`} label="CL_491SI2_LS" />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2 ml-2",
                  label: "491SI2_LT1",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_491SI2_LT1",
                  useClass: "greenTxt  ml-3 mt-2",
                  unit: "mtr",
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
                  label: "BYP SEL",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "511BF1",
                }}
              />

              <div className="">
                <div className="squareplustri  mt-1 d-flex align-items-center justify-content-center">
                  <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CMH_511RA1")}`} label="CMH_511RA1_RUN" />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "511RA1",
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
                    label: "511FN1",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className=" mt-2 line-circle grey-color"></div>
                </div>
              </div>
              <div>
                <BlackContainer
                  data={{
                    label: "CMH_511FN1_II",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CMH_511FN1_SI",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
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
                  label: "BYP SEL",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "511BF2",
                }}
              />

              <div className="">
                <div className="squareplustri d-flex align-items-center justify-content-center mt-1">
                  <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CMH_511RA2")}`} label="CMH_511RA2_RUN" />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "511RA2",
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
                    label: "511FN2",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className=" mt-2 line-circle grey-color"></div>
                </div>
              </div>
              <div>
                <BlackContainer
                  data={{
                    label: "CMH_511FN2_II",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CMH_511FN2_SI",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
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
                  useClass: "text-dark",
                  label: "491BF2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />

              <div className="">
                <div className="squareplustri  d-flex align-items-center justify-content-center mt-1">
                  <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("Cl_491RA2")}`} label="Cl_491RA2_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "491RA2",
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
                    label: "491FN2",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className="">
                    <MotorCircleDigitalTag
                      className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_491FN2_RUN", healthyLabel: "CL_491FN2_PH" })}`}
                      text=""
                      label="CL_491FN2_RUN"
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
                label: "491DG1",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`gray-green-red-img digital-tag position-absolute ${useImgColorStatusForNewPlantScreen({ closeLabel: "NA", openLabel: "NA" })}`} label="NA" />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-7 d-flex">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("NA")}`} label="NA" />
          </div>
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
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
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG1",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-2">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("NA")}`} label="NA" />
          </div>
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
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
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG2",
              }}
            />
          </div>
        </div>
        <div className="d-flex ml-2">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("NA")}`} label="NA" />
          </div>
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
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
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG3",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-2">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("NA")}`} label="NA" />
          </div>
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
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
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG4",
              }}
            />
          </div>
        </div>

        <div className="d-flex ml-2">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("NA")}`} label="NA" />
          </div>
          <div className="mr-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
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
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="d-flex">
          <div>
            <div className=" mt-4 position-absolute">
              <div>
                <div className="yellowline-Vr  downArrow position-absolute line-393 mb-2"></div>
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  <span></span>
                  <MotorCircleDigitalTag className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "NA", healthyLabel: "NA" })}`} label="NA" />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2",
                    label: "491FN3",
                  }}
                />
              </div>
            </div>
            <div className="squareplustri ml-5 d-flex align-items-end justify-content-center mt-1"></div>
          </div>
        </div>
        <div className="d-flex mt-5 ml-3">
          <MotorCircleDigitalTag className={`square digital-tag mr-2  ${useColorStatus("NA")}`} label="NA" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CG6",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CG7",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CG8",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CG9",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGA",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGB",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGC",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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
      <div className="position-absolute single-text-10 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGD",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGE",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGF",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGG",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "CGH",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mr-3">
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_511DB1_RUN", healthyLabel: "CMH_511DB1_PH" })}`,
            secondCircleLabel: "CMH_511DB1_RUN",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1 ml-2",
              label: "511DB1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info mt-3 mr-4 ml-2",
              label: "DB1 SEL",
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
              label: "511DB2",
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_511DB3_RUN", healthyLabel: "CMH_511DB3_PH" })}`,
            secondCircleLabel: "CMH_511DB3_RUN",
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
              label: "511DB3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "511SG1",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
              openLabel: "CMH_511SG1_EOLS",
              closeLabel: "CMH_511SG1_ECLS",
              healthyLabel: "CMH_511SG1_PH",
            })}`}
            label="CMH_511SG1_EOLS"
          />
        </div>
        <div className="ml-5">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CMH_511SG1_EOLS")}`} label="CMH_511SG1_EOLS" />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("CMH_511SG1_ECLS")}`} label="CMH_511SG1_ECLS" />
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "511SG2",
            }}
          />
        </div>
        <div>
          <div className="d-flex mb-3">
            <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color  ${useColorStatus("CMH_511SG2_EOLS")}`} text="EOLS" label="CMH_511SG2_EOLS" />
            <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color ml-4 ${useColorStatus("CMH_511SG2_ECLS")}`} text="ECLS" label="CMH_511SG2_ECLS" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "511SG3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
              openLabel: "CMH_511SG3_EOLS",
              closeLabel: "CMH_511SG3_ECLS",
              healthyLabel: "CMH_511SG3_PH",
            })}`}
            label="CMH_511SG3_EOLS"
          />
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_511DB4_RUN", healthyLabel: "CMH_511DB4_PH" })}`,
            secondCircleLabel: "CMH_511DB4_RUN",
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CMH_511BC1_RUN", healthyLabel: "CMH_511BC1_PH" })}`,
            secondCircleLabel: "CMH_511BC1_RUN",
          }}
        />
      </div>

      <div className="position-absolute single-text-19 d-flex">
        <div className=" loadingtruck"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-5",
            label: "491WG1",
          }}
        />
      </div>

      <div className=" position-absolute single-text-21">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "491DB1.MO1",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_491DB1_TT1",
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_491DB1_RUN", healthyLabel: "CL_491DB1_PH" })}`,
            secondCircleLabel: "CL_491DB1_RUN",
            secondCircleText: "",
          }}
        />
        <div className="d-flex mt-2 ">
          <BlackContainer
            data={{
              label: "CL_491DB1_Curr",
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
              label: "491DB2",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-23">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_491DB2_RUN", healthyLabel: "CL_491DB2_PH" })}`,
            firstCircleLabel: "CL_491DB2_RUN",
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
              label: "TO 491BF2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4 mr-1",
              label: "TO 491BF3",
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
            label: "491SG1",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-27",
          label: "TO 491DB2",
        }}
      />
      <div className=" position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "491SG2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "491CG1",
          }}
        />
      </div>

      <div className=" position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "CL_491CG1_ZT",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "CMH_511DB2_ANLG",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "CMH_511DB3_ANLG",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "CMH_511DB4_ANLG",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "TO 531HP1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "CMH_511BC1_ANLG",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
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
          label: "511DB4",
        }}
      />

      <div className=" position-absolute single-text-44 d-flex">
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 ${useColorStatus("CMH_511BC1_NDE_MG")}`} text="NDE" label="CMH_511BC1_NDE_MG" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "511BC1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-45">
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 mx-auto ${useColorStatus("CL_491DB1_PCSL")}`} text="PCL" label="CL_491DB1_PCSL" />
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 mx-auto ${useColorStatus("CL_491DB1_PCSR")}`} text="PCR" label="CL_491DB1_PCSR" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "CLINKER SILO FEED GROUP",
        }}
      />
      <div className=" position-absolute single-text-47">
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 mx-auto ${useColorStatus("CL_491DB2_PCSL")}`} text="PCL" label="CL_491DB2_PCSL" />
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 mx-auto ${useColorStatus("CL_491DB2_PCSR")}`} text="PCR" label="CL_491DB2_PCSR" />
        <BlackContainer
          data={{
            label: "CL_491DB2_Curr",
            useClass: "greenTxt  mt-4 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
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
        <div className="dot-square-line d-flex flex-column align-items-center">
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

        <div className="dot-square-line mt-4 d-flex flex-column align-items-center">
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

      <div className="position-absolute single-text-50">
        <MotorCircleDigitalTag className={`square digital-tag mr-2  ${useColorStatus("NA")}`} label="NA" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 mr-2  ${useColorStatus("NA")}`} label="NA" />
      </div>
      <div className="position-absolute single-text-51 bg-info box-1 p-2">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LOCAL EMG STOP",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-auto mr-2  ${useColorStatus("NA")}`} label="NA" />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LOCAL EMG START",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-auto mr-2  ${useColorStatus("NA")}`} label="NA" />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LOCAL STOP",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-auto mr-2  ${useColorStatus("NA")}`} label="NA" />
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DOWN POSITION",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-auto mr-2  ${useColorStatus("NA")}`} label="NA" />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MID POSITION",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-auto mr-2  ${useColorStatus("NA")}`} label="NA" />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "UP POSITION",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-auto mr-2  ${useColorStatus("NA")}`} label="NA" />
        </div>
      </div>

      <div className="position-absolute single-text-53 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "491BS1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-54">
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ${useColorStatus("CMH_511SG3_EOLS")}`} text="EOLS" label="CMH_511SG3_EOLS" />
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ml-5 ${useColorStatus("CMH_511SG3_ECLS")}`} text="ECLS" label="CMH_511SG3_ECLS" />
      </div>
      <div className="position-absolute single-text-55 ">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                openLabel: "CMH_511DG1_EOLS",
                closeLabel: "CMH_511DG1_ECLS",
                healthyLabel: "CMH_511DG1_PH",
              })}`}
              label="CMH_511DG1_EOLS"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5 mr-2",
                label: "511DG1",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "CMH_511DG1_ZT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-56">
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ${useColorStatus("CMH_511DG1_ECLS")}`} text="ECLS" label="CMH_511DG1_ECLS" />
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ml-5 ${useColorStatus("CMH_511DG1_EOLS")}`} text="EOLS" label="CMH_511DG1_EOLS" />
      </div>
      <div className="position-absolute single-text-57 ">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                openLabel: "CMH_511DG2_EOLS",
                closeLabel: "CMH_511DG2_ECLS",
                healthyLabel: "CMH_511DG2_PH",
              })}`}
              label="CMH_511DG2_EOLS"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5 mr-2",
                label: "511DG2",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "CMH_511DG2_ZT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-58">
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ${useColorStatus("CMH_511DG2_EOLS")}`} text="EOLS" label="CMH_511DG2_EOLS" />
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ml-5 ${useColorStatus("CMH_511DG2_ECLS")}`} text="ECLS" label="CMH_511DG2_ECLS" />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYP SEL",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "511BF3",
                }}
              />

              <div className="">
                <div className="squareplustri d-flex align-items-center justify-content-center mt-1">
                  <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NA")}`} label="NA" />
                </div>

                <div className="d-flex align-items-end justify-content-center ml-2 mt-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CMH_511RA3")}`} label="CMH_511RA3_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "511RA3",
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
                    label: "511FN3",
                  }}
                />
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <div className=" mt-2 line-circle grey-color"></div>
                </div>
              </div>
              <div>
                <BlackContainer
                  data={{
                    label: "CMH_511FN3_II",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CMH_511FN3_SI",
                    useClass: "greenTxt  mt-2 ml-2",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-60 ">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
                openLabel: "CMH_511DG3_EOLS",
                closeLabel: "CMH_511DG3_ECLS",
                healthyLabel: "CMH_511DG3_PH",
              })}`}
              label="CMH_511DG3_EOLS"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5 mr-2",
                label: "511DG3",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "CMH_511DG3_ZT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-61">
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ${useColorStatus("CMH_511DG3_EOLS")}`} text="EOLS" label="CMH_511DG3_EOLS" />
        <MotorCircleDigitalTag className={`text-dark digital-tag px-1 grey-color mt-2 ml-5 ${useColorStatus("CMH_511DG3_ECLS")}`} text="ECLS" label="CMH_511DG3_ECLS" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "TO 511DB4/511BC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-63",
          label: "TO 511DB4/511BC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-64",
          label: "511DB4/511BC1",
        }}
      />
      <div className=" position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "CMH_511DB1_ANLG",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "491BF2.PT1",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_491BF2_PT1",
            useClass: "greenTxt  mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "491BF2.DPT",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_491BF2_DPT",
            useClass: "greenTxt  mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DPT",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF1_DPT",
            useClass: "greenTxt  mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF1_PT",
            useClass: "greenTxt  mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DPT",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF2_DPT",
            useClass: "greenTxt  mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF2_PT",
            useClass: "greenTxt  mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DPT",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF3_DPT",
            useClass: "greenTxt  mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PT",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF3_PT",
            useClass: "greenTxt  mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-70">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "491BF1.DPT",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_491BF1_DPT",
            useClass: "greenTxt  mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "491BF1.PT1",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_491BF1_PT1",
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
                      useClass: "text-dark ",
                      label: "491RA1",
                    }}
                  />
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_491RA1")} ml-2`} label="CL_491RA1_RUN" />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
          </div>
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-73 ${useImgGateColorStatusForNewPlantScreen({
          openLabel: "CMH_511SG2_EOLS",
          closeLabel: "CMH_511SG2_ECLS",
          healthyLabel: "CMH_511SG2_PH",
        })}`}
        label="CMH_511SG2_EOLS"
      />
      <MotorCircleDigitalTag className={`square digital-tag  position-absolute single-text-74 ${useColorStatus("NA")}`} label="NA" />

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
      <div className="yellowline-Vr  downArrow position-absolute line-49"></div>
      <div className="yellowline-Hr   position-absolute line-50"></div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-51">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Hr   position-absolute line-52"></div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-53">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr  d-flex justify-content-center align-items-end position-absolute line-54">
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
      <div className="yellowline-Hr   position-absolute line-59"></div>
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
