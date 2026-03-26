import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, PipeWithCircles } from "../../../../index";
import { useColorStatus, useFanImgsTagsColorStatusForNewPlantScreens, useMotorTagsColorStatusForNewPlantScreens } from "../../../../../utils";

export const FreshFeedDhuleL2 = () => {
  return (
    <div className="FreshFeedDhuleL2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div className="containerImage text-center">
          <MotorCircleDigitalTag className={`square ml-auto digital-tag p-1 mt-1 mr-1 ${useColorStatus("MH2_532HP1_LS")}`} label="MH2_532HP1_LS" text="P" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-1",
              label: "532HP1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF1_WI",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CM2_532WF1_MR", healthyLabel: "CM2_532WF1_PH" })}`,
              firstCircleText: "",
              firstCircleLabel: "CM2_532WF1_MR",
            }}
            text={{ useClass: "text-dark", label: "532WF1" }}
            secondCircle={{
              secondCircleClass: ``,
              secondCircleText: "",
            }}
          />
          <div className="yellowline-Vr downArrow line-2"></div>
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-1 mt-3",
              label: "532HP2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GYPSUM",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF2_WI",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CM2_532WF2_MR", healthyLabel: "CM2_532WF2_PH" })}`,
              firstCircleText: "",
              firstCircleLabel: "CM2_532WF2_MR",
            }}
            text={{ useClass: "text-dark", label: "532WF2" }}
            secondCircle={{
              secondCircleClass: ``,
              secondCircleText: "",
            }}
          />
          <div className="yellowline-Vr downArrow line-2"></div>
        </div>
        <div className="containerImage text-center">
          <MotorCircleDigitalTag className={`square ml-auto digital-tag p-1 mt-1 mr-1 ${useColorStatus("MH2_532HP3_LS")}`} label="MH2_532HP3_LS" text="P" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-1",
              label: "532HP3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ADDITIVE",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF3_WI",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: ``,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "" }}
            secondCircle={{
              secondCircleClass: ``,
              secondCircleText: "",
            }}
          />
          <div className="yellowline-Vr downArrow line-2"></div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM2_532WF1_FR",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF1_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF1_TOT",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM2_532WF2_FR",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF2_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF2_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF2_TOT",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM2_532WF3_FR",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF3_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF3_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WF3_TOT",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="text-center">
          <div className={`dot grey-color p-1`}>M</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "532WF1",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`dot grey-color p-1`}>M</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "532WF2",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`dot grey-color p-1`}>M</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "532WF3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="bg-secondary CGRnBox p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Analog Input Fault",
            }}
          />
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532FN1_SI",
                useClass: "greenTxt ml-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2 mb-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Out",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532FN1_SPSPM",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="bg-secondary CGRnBox p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Analog Input Fault",
            }}
          />
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532WF1_SPSPA",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532WF1_FR",
                useClass: "greenTxt ml-2",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2 mb-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532WF1_SPSPM",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        {/* <div className="bg-secondary CGRnBox p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Analog Input Fault",
            }}
          />
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt ml-2",
                unit: "NA",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt ml-2",
                unit: "NA",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2 mb-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt ml-2",
                unit: "NA",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div> */}
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM2_532FN1_SI",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532FN1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM2_532WF2_FR",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-6" />
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "CM2_532BC1II_B",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM2_532BC1JI_B",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "532BC1",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th></th>
              <th>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "533WF1",
                  }}
                />
              </th>
              <th>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "533WF2",
                  }}
                />
              </th>
              <th>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "533WF3",
                  }}
                />
              </th>
              <th>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "K32FM1",
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                {" "}
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "QCX %",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01A01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01B01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01C01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01D01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "SP ratio",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01A01Y1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01B01Y1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01C01Y1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01D01Y1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "SP t/h",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01F11",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01F12",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01F13",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WFA01F14",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  mt-1",
                    label: "Act PV t/h",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WF1_FR",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WF2_FR",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_532WF3_FR",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2_K32FM1_FR",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-9  CGRnBox p-3 text-center d-flex">
        <div className="mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Receipe",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532WFA01",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Total Feed Control",
            }}
          />
          <div className="bg-secondary CGRnBox p-2 mt-3 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Force UP",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "CM2_532WFA01I01SPA",
                  useClass: "greenTxt ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "PV",
                }}
              />
              <BlackContainer
                data={{
                  label: "CM2_562BI1_WT",
                  useClass: "greenTxt ml-2",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2 mb-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "Out",
                }}
              />
              <BlackContainer
                data={{
                  label: "CM2_532WFA01I01SPM",
                  useClass: "greenTxt ml-2",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "CM2_532WFTOT_FEED",
              useClass: "greenTxt ml-2 mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM2_532BF1_DPT",
              useClass: "greenTxt mt-4",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-2",
              unit: "NA",
              unitColor: "unitColor",
            }}
          /> */}
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "532BF1",
            }}
          />
          <div className="squareplustri text-center pt-3"></div>
          <div className="d-flex mt-1 ml-1 text-center">
            <MotorCircleDigitalTag className={`circle-img mt-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CM2_532RA1")}`} label="CM2_532RA1_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "532RA1",
              }}
            />
            <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
            <div className="yellowline-Hr  position-absolute line-2"></div>
            <div className="yellowline-Vr upArrow position-absolute line-3"></div>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM2_532BF2_DPT",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM2_532BF2_PT",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "532BF2",
            }}
          />
          <div className="squareplustri text-center pt-3"></div>
          <div className="d-flex mt-1 ml-1 text-center">
            <MotorCircleDigitalTag className={`circle-img mt-2 c-grey-img-2`} label="" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "532RA2",
              }}
            />
            <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
            <div className="yellowline-Hr  position-absolute line-2"></div>
            <div className="yellowline-Vr upArrow position-absolute line-3"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11 text-center d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CM2_532FN1_RUN", healthyLabel: "CM2_532FN1_PH" })}`}
            label="CM2_532FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "532FN1",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`line-circle grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "532FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "532BC2",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "532BC2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Discharge Chute",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark p-2 bg-info position-absolute single-text-13",
          label: "Calibration Mode",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark p-2 bg-info position-absolute single-text-14",
          label: "532BC2",
        }}
      />
      <div className="position-absolute single-text-15">
        <div className="bg-secondary CGRnBox p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Analog Input Fault",
            }}
          />
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532WF3_SPSPA",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532WF3_FR",
                useClass: "greenTxt ml-2",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2 mb-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_532WF3_SPSPM",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <MotorCircleDigitalTag className={`dot digital-tag p-1 position-absolute single-text-16 ${useColorStatus("CM2_532BF1_RUN")}`} label="CM2_532BF1_RUN" text="M" />
      <div className="position-absolute single-text-17">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square ml-2 digital-tag ${useColorStatus("CM2_532WF3_MR")}`} label="CM2_532WF3_MR" />
          <MotorCircleDigitalTag className={`square ml-2 digital-tag ${useColorStatus("CM2_532WF3_PNL_SEL")}`} label="CM2_532WF3_PNL_SEL" />
          <MotorCircleDigitalTag className={`square ml-2 digital-tag ${useColorStatus("CM2_532WF3_VIB_ON")}`} label="CM2_532WF3_VIB_ON" />
          <MotorCircleDigitalTag className={`square ml-2 digital-tag ${useColorStatus("CM2_532WF3_VOL_SEL")}`} label="CM2_532WF3_VOL_SEL" />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag p-1 ${useColorStatus("CM2_532WF3_BSS")}`} label="CM2_532WF3_BSS" text="B" />
          <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("CM2_532WF3_PCS")}`} label="CM2_532WF3_PCS" text="C" />
          <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("CM2_532WF3_VIB_OL")}`} label="CM2_532WF3_VIB_OL" text="V" />
        </div>
      </div>
      <div className="d-flex  position-absolute single-text-18">
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ${useColorStatus("CM2_532BC1BSSL1")}`} label="CM2_532BC1BSSL1" text="B" />
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("CM2_532BC1BSSR1")}`} label="CM2_532BC1BSSR1" text="B" />
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("CM2_532BC1PCSL1")}`} label="CM2_532BC1PCSL1" text="P" />
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("CM2_532BC1PCSR1")}`} label="CM2_532BC1PCSR1" text="P" />
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("CM2_532BC1_DE_MG")}`} label="CM2_532BC1_DE_MG" text="M" />
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("CM2_532BC1_NDE_MG")}`} label="CM2_532BC1_NDE_MG" text="B" />
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
    </div>
  );
};
