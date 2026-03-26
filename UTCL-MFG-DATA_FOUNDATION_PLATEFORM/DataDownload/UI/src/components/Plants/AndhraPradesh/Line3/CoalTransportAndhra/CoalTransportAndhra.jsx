import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, PipeWithCircles } from "../../../../index";
import {
  useMotorTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
 
  useColorStatus,
  useImgColorStatusForNewPlantScreen,
} from "../../../../../utils";

export const CoalTransportAndhra = () => {
  return (
    <div className="CoalTransportAndra w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="containerImage">
          <div className="mx-auto text-center p-3">
            <div className="d-flex ml-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 bg-info",
                  label: "L43HP1",
                }}
              />
              <MotorCircleDigitalTag className={`text-dark px-1 ml-3 grey-color mt-1 digital-tag ${useColorStatus("KM_L43HP1_LS")}`} text="LS" label="KM_L43HP1_LS" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "RAW COAL",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43HP1_BIW",
                useClass: "greenTxt  ml-3 mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-4",
              label: "L23BF1",
            }}
          />
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <div className="">
                <div className="squareplustri  mt-1 d-flex align-items-center justify-content-center">
                  <MotorCircleDigitalTag
                    className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BF1_RUN", healthyLabel: "KM_L23BF1_PH" })}`}
                    label="KM_L23BF1_RUN"
                  />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L23RA1")}`} label="KM_L23RA1_RUN" />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "L23RA1",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <MotorCircleDigitalTag
                    className={`mt-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23FN1_RUN", healthyLabel: "KM_L23FN1_PH" })}`}
                    label="KM_L23FN1_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-3 mt-2 ",
                    label: "L23FN1",
                  }}
                />
              </div>

              <div>
                <BlackContainer
                  data={{
                    label: "KM_L23BF1_DPT",
                    useClass: "greenTxt  mt-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L23BF1_PT",
                    useClass: "greenTxt  mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-3">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "",
            firstCircleClass: `dot grey-color`,
            // firstCircleLabel: "66CL8",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleText: "",
            secondCircleClass: `dot grey-color `,
            secondCircleLabel: "",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "L231BC9",
          }}
        />
      </div>
      <div className=" position-absolute single-text-4">
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BC1A_RUN", healthyLabel: "KM_L23BC1A_PH" })}`,
            secondCircleLabel: "KM_L23BC1A_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "L23BC1A",
          }}
        />
      </div>
      <div className=" position-absolute single-text-5">
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BC1_RUN", healthyLabel: "KM_L23BC1_PH" })}`,
            secondCircleLabel: "KM_L23BC1_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "L23BC1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6">
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BC2_RUN", healthyLabel: "KM_L23BC2_PH" })}`,
            secondCircleLabel: "KM_L23BC2_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "L23BC2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-7">
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BC3_RUN", healthyLabel: "KM_L23BC3_PH" })}`,
            secondCircleLabel: "KM_L23BC3_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "L23BC3",
          }}
        />
      </div>
      <div className=" position-absolute single-text-8">
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BC4_RUN", healthyLabel: "KM_L23BC4_PH" })}`,
            secondCircleLabel: "KM_L23BC4_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "L23BC4",
          }}
        />
      </div>
      <div className=" position-absolute single-text-9">
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
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BC5_RUN", healthyLabel: "KM_L23BC5_PH" })}`,
            secondCircleLabel: "KM_L23BC5_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "L23BC5",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L23BC4_II",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-4",
              label: "L23BF2",
            }}
          />
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <div className="">
                <div className="squareplustri  mt-1 d-flex align-items-center justify-content-center">
                  <MotorCircleDigitalTag
                    className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BF2_RUN", healthyLabel: "KM_L23BF2_PH" })}`}
                    label="KM_L23BF2_RUN"
                  />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L23RA2")}`} label="KM_L23RA2_RUN" />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "L23RA2",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <MotorCircleDigitalTag
                    className={`mt-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23FN2_RUN", healthyLabel: "KM_L23FN2_PH" })}`}
                    label="KM_L23FN2_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-3 mt-2 ",
                    label: "L23FN2",
                  }}
                />
              </div>

              <div>
                <BlackContainer
                  data={{
                    label: "KM_L23BF2_DPT",
                    useClass: "greenTxt  mt-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L23BF2_PT",
                    useClass: "greenTxt  mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-4",
              label: "L23BF2A",
            }}
          />
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <div className="">
                <div className="squareplustri  mt-1 d-flex align-items-center justify-content-center">
                  <MotorCircleDigitalTag
                    className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BF2A_RUN", healthyLabel: "KM_L23BF2A_PH" })}`}
                    label="KM_L23BF2A_RUN"
                  />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L23RA2A")}`} label="KM_L23RA2A_RUN" />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "L23RA2A",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <MotorCircleDigitalTag
                    className={`mt-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23FN2A_RUN", healthyLabel: "KM_L23FN2A_PH" })}`}
                    label="KM_L23FN2A_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-3 mt-2 ",
                    label: "L23FN2A",
                  }}
                />
              </div>

              <div>
                <BlackContainer
                  data={{
                    label: "KM_L23BF2A_DPT",
                    useClass: "greenTxt  mt-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L23BF2A_PT",
                    useClass: "greenTxt  mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-4",
              label: "L23BF2B",
            }}
          />
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <div className="">
                <div className="squareplustri  mt-1 d-flex align-items-center justify-content-center">
                  <MotorCircleDigitalTag
                    className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BF2B_RUN", healthyLabel: "KM_L23BF2B_PH" })}`}
                    label="KM_L23BF2B_RUN"
                  />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L23RA2B")}`} label="KM_L23RA2B_RUN" />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "L23RA2B",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <MotorCircleDigitalTag
                    className={`mt-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23FN2B_RUN", healthyLabel: "KM_L23FN2B_PH" })}`}
                    label="KM_L23FN2B_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-3 mt-2 ",
                    label: "L23FN2B",
                  }}
                />
              </div>

              <div>
                <BlackContainer
                  data={{
                    label: "KM_L23BF2B_DPT",
                    useClass: "greenTxt  mt-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L23BF2B_PT",
                    useClass: "greenTxt  mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-4",
              label: "L23BF3",
            }}
          />
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "bg-info text-dark mb-1",
                  label: "BYPASS",
                }}
              />
              <div className="">
                <div className="squareplustri  mt-1 d-flex align-items-center justify-content-center">
                  <MotorCircleDigitalTag
                    className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BF3_RUN", healthyLabel: "KM_L23BF3_PH" })}`}
                    label="KM_L23BF3_RUN"
                  />
                </div>

                <div className="d-flex align-items-end justify-content-center mt-2 ml-2">
                  <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L23RA3")}`} label="KM_L23RA3_RUN" />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ml-2",
                      label: "L23RA3",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr downArrow  position-absolute line-39 ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-1 position-absolute d-flex">
              <div>
                <div className="yellowline-Vr  downArrow position-absolute line-392 ml-3 mb-2"></div>
                <div className="img-97 d-flex  mt-4 justify-content-center align-items-end">
                  <MotorCircleDigitalTag
                    className={`mt-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23FN3_RUN", healthyLabel: "KM_L23FN3_PH" })}`}
                    label="KM_L23FN3_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-3 mt-2  ",
                    label: "L23FN3",
                  }}
                />
              </div>

              <div>
                <BlackContainer
                  data={{
                    label: "KM_L23BF3_DPT",
                    useClass: "greenTxt  mt-2",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L23BF3_PT",
                    useClass: "greenTxt  mt-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <div className="containerImage">
          <div className="mx-auto text-center p-3">
            <div className="d-flex ml-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 bg-info",
                  label: "L43HP2",
                }}
              />
              <MotorCircleDigitalTag className={`text-dark px-1 ml-3 grey-color mt-1 digital-tag ${useColorStatus("KM_L43HP2_LS")}`} text="LS" label="KM_L43HP2_LS" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "PET COKE",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43HP2_BIW",
                useClass: "greenTxt  ml-3 mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <div className="triangle-with-squares">
          <div className="mx-auto text-center p-1">
            <div className="d-flex ml-1">
              <MotorCircleDigitalTag className={`text-dark px-1 mr-3 grey-color mt-1 digital-tag ${useColorStatus("KM_L63BI1_LS")}`} text="LS" label="KM_L63BI1_LS" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "L63BI1",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "RAW COAL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "CAP:4T",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L63BI1_WI",
                useClass: "greenTxt  ml-3 mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <MotorCircleDigitalTag className={`gray-green-red-img position-absolute single-text-16 digital-tag ${useImgColorStatusForNewPlantScreen({ closeLabel: "NA", openLabel: "NA" })}`} label="NA" />

      <div className="position-absolute single-text-17 d-flex">
        <MotorCircleDigitalTag className={`text-dark px-1 mr-3 grey-color mt-1 digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} text="CLS" label="KM_L23DG1_CLS" />
        <MotorCircleDigitalTag className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen({ closeLabel: "NA", openLabel: "NA" })}`} label="NA" />
        <MotorCircleDigitalTag className={`text-dark px-1 ml-3 grey-color mt-1 digital-tag ${useColorStatus("KM_L23DG1_OLS")}`} text="OLS" label="KM_L23DG1_OLS" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-18",
          label: "Twoards line2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-19",
          label: "For Calibration/Rejects",
        }}
      />
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L23MS1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-2 ml-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23MS1_RUN", healthyLabel: "KM_L23MS1_PH" })}`}
            label="KM_L23MS1_RUN"
          />
        </div>
        <div className="ml-4 mt-3">
          <MotorCircleDigitalTag className={`text-dark px-1 grey-color mt-1 digital-tag ${useColorStatus("KM_L23MT1_MD")}`} text="MD" label="KM_L23MT1_MD" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "L23MT1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-21">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot mt-2 ml-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L63SG3_RUN", healthyLabel: "KM_L63SG3_PH" })}`}
            label="KM_L63SG3_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="yellowline-Vr   position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow   position-absolute line-2"></div>
      <div className="yellowline-Hr rightarrow   position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow   position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow   position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow   position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow   position-absolute line-7"></div>
      <div className="yellowline-Vr  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
    </div>
  );
};
