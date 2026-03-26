import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
export const CoolerMainkotputliLine1 = () => {
  return (
    <div className="CoolerMainkotputliLine1 w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-1 d-flex flex-column justify-content-center">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RADAR CL FAN",
            }}
          />
        </div>
        <div className="text-center mt-2 p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AIR BLASTER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TIME",
            }}
          />
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-2">
        <div className="mt-1 ">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "COMP 2 U/C TEMP COMP 2 U/G PRES COMP 4 U/G PRES",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <div className="">
              <BlackContainer
                data={{
                  label: "CL_471GQ7_TT",
                  useClass: "greenTxt",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ6_TT",
                  useClass: "greenTxt mt-1",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ5_TT",
                  useClass: "greenTxt mt-1",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ4_TT",
                  useClass: "greenTxt mt-1",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ3_TT",
                  useClass: "greenTxt mt-1",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ2_TT",
                  useClass: "greenTxt mt-1",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ1_TT",
                  useClass: "greenTxt mt-1",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <BlackContainer
                data={{
                  label: "CL_471GQ7_PT1",
                  useClass: "greenTxt",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ6_PT1",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ5_PT1",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ4_PT1",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ3_PT1",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ2_PT1",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ1_PT1",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <BlackContainer
                data={{
                  label: "CL_471GQ7_PT2",
                  useClass: "greenTxt",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ6_PT2",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ5_PT2",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ4_PT2",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ3_PT2",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ2_PT2",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471GQ1_PT2",
                  useClass: "greenTxt mt-1",
                  unit: "mbar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <BlackContainer
                data={{
                  label: "CL_471HD7_G1_AIS",
                  useClass: "greenTxt",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD6_G1_AIS",
                  useClass: "greenTxt mt-1",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD5_G1_AIS",
                  useClass: "greenTxt mt-1",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD4_DLP",
                  useClass: "greenTxt mt-1",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD3_G1_AIS",
                  useClass: "greenTxt mt-1",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD2_G1_AIS",
                  useClass: "greenTxt mt-1",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD1_G1_AIS",
                  useClass: "greenTxt mt-1",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <BlackContainer
                data={{
                  label: "CL_471HD7_DLP",
                  useClass: "greenTxt",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD6_DLP",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD5_DLP",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD4_DLP",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD3_DLP",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD2_DLP",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "CL_471HD1_DLP",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-3 d-flex flex-column justify-content-center">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "ROLLER SPEED TEMP",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <div className="text-center">
            <BlackContainer
              data={{
                label: "CL_471RC1M1_II",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471RC1M1_A"
              )} mt-1`}
              label="CL_471RC1M1_A"
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "CL_471RC1M2_II",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471RC1M2_A"
              )} mt-1`}
              label="CL_471RC1M2_A"
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "CL_471RC1M3_II",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471RC1M3_A"
              )} mt-1`}
              label="CL_471RC1M3_A"
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "CL_471RC1M4_II",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471RC1M4_A"
              )} mt-1`}
              label="CL_471RC1M4_A"
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "CL_471RC1M5_II",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471RC1M5_A"
              )} mt-1`}
              label="CL_471RC1M5_A"
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "CL_471RC1M6_II",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471RC1M6_A"
              )} mt-1`}
              label="CL_471RC1M6_A"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute pipe-4 d-flex">
        <div className="border text-center p-1 w">1A</div>
        <div className="border text-center p-1 w">1B</div>
        <div className="border text-center p-1 w">2</div>
        <div className="border text-center p-1 w">3</div>
        <div className="border text-center p-1 w">4</div>
        <div className="border text-center p-1 w">5</div>
        <div className="border text-center p-1 w">6</div>
        <div className="border text-center p-1 w">7</div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: ``,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot ${useColorStatus(
            "CL_471TK4_A"
          )} digital-tag`,
          secondCircleLabel: "CL_471TK4_A",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "491PC2" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot grey-color`,
          secondCircleLabel: "RM1_361CV1_RUN",
        }}
      />
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="img-65 position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="yellowline-Vr position-absolute pipe-16"></div>
      <div className="yellowline-Hr position-absolute pipe-17"></div>
      <div className="yellowline-Hr position-absolute pipe-18"></div>
      <div className="yellowline-Vr position-absolute pipe-19"></div>
      <div className="yellowline-Hr position-absolute pipe-20"></div>
      <div className="yellowline-Hr position-absolute pipe-21"></div>
      <div className="yellowline-Vr position-absolute pipe-22"></div>
      <div className="yellowline-Hr position-absolute pipe-23"></div>
      <div className="yellowline-Hr position-absolute pipe-24"></div>
      <div className="yellowline-Vr position-absolute pipe-25"></div>
      <div className="yellowline-Hr position-absolute pipe-26"></div>
      <div className="yellowline-Vr position-absolute pipe-27"></div>
      <div className="yellowline-Vr position-absolute pipe-28"></div>
      <div className="yellowline-Hr position-absolute pipe-29"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN1A",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "CL_471FN1A_A"
                )}`}
                label="CL_471FN1A_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN1B",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "CL_471FN1B_A"
                 
                )}`}
                label="CL_471FN1B_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN2",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "CL_471FN2_A"
                  
                )}`}
                label="CL_471FN2_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN3",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "CL_471FN3_A"
                  )}`}
                label="CL_471FN3_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN4",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "CL_471FN4_A"
                 )}`}
                label="CL_471FN4_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN5",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                   "CL_471FN5_BTE1"
                  
                )}`}
                label="CL_471FN5_BTE1"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN6",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                   "CL_471FN5_SPEED2"
                  
                )}`}
                label="CL_471FN5_SPEED2"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN7",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "CL_471FN7_A"
                )}`}
                label="CL_471FN7_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN8",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "CL_471FN8_A"
                )}`}
                label="CL_471FN8_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN9",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus( "CL_471FN9_A")}`}
                label="CL_471FN9_A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "FN10",
              }}
            />
          </div>
          <div>
            <i className="fas fa-long-arrow-alt-up ml-2"></i>
            <div className="connector-icon p-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                   "CL_471FN10_A"
                 
                )}`}
                label="CL_471FN10_A"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN1A_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1A_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1A_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1A_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1A_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN1B_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1B_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1B_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1B_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1B_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN2_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN2_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN2_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN2_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN2_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN3_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN3_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN3_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN3_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN3_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN4_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN4_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN4_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN4_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN4_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN5_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN5_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN5_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN5_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN5_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN6_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN6_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN6_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN6_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN6_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN7_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN7_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN7_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN7_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN7_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN8_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN8_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN8_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN8_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN8_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN9_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN9_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN9_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN9_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN9_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL_471FN10_PID",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN10_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN10_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN10_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN10_PID:IO.Out.Auto",
                useClass: "greenTxt ml-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <div className="text-center p-1 border bg-dark">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "COOLER HYDRAULIC",
            }}
          />
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "471TK HT1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471TK1_A"
              )} ml-2`}
              label="CL_471TK1_A"
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "471TK HT2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471TK2_A"
              )} ml-2`}
              label="CL_471TK2_A"
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "471TK HT3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471TK3_A"
              )} ml-2`}
              label="CL_471TK3_A"
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "471TK HT4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CL_471TK4_A"
              )} ml-2`}
              label="CL_471TK4_A"
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-4 text-center">
        <div className="connector-both-side-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "CL_471FN11_A"
            )}`}
            label="CL_471FN11_A"
          />
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-5"></div>
      <div className="position-absolute single-text-6 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_491PC1_TT",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_491PC1MD1_A",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7  text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "CL_491PC1MD2_A"
          )} mt-1`}
          label="CL_491PC1MD2_A"
          text="M"
        />
        <BlackContainer
          data={{
            label: "CL_491PC1MD2_A",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-8 d-flex ">
        <BlackContainer
          data={{
            label: "CL_471FN11_PID_A:IO.Out.Auto",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471SK1_SMC",
            useClass: "greenTxt ml-2",
            unit: "mg/Ng",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 d-flex flex-column">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "CCR SIDE",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471WIS_NOZ_TE1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "COAL MILL SIDE",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471WIS_NOZ_TE2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "CL_471WIS_FT",
              useClass: "greenTxt ",
              unit: "M3/H",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471WIS_FT4_ACT",
              useClass: "greenTxt mt-2",
              unit: "M3/H",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CL_471WIS_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 p-1 bg-dark">
        <BlackContainer
          data={{
            label: "CL_471HD1LANEDP_PID_A:IO.Out.Auto",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
          data={{
            label: "W1_AQC_HP_FDW_TCV_608_SP",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Flow",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Speed",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "% Speed",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Kw",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN1A_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1A_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1A_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1A_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN1B_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1B_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1B_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1B_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN2_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN3_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN4_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN5_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN6_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN7_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN8_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN9_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN10_FT",
              useClass: "greenTxt mt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN10_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN10_SPEED2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN10_KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "CL_471FN11_CURR",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471FN11_KW",
            useClass: "greenTxt mt-1",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471FN11_SI1",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};
