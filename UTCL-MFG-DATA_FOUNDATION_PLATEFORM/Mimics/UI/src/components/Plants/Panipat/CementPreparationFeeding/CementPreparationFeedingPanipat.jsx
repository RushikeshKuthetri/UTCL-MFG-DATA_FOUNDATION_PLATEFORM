import { useColorStatus, useFanImgTagsColorStatus, useImgColorStatus } from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
  ProgressBarMimic,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
} from "../../../index";

export const CementPreparationFeedingPanipat = () => {
  return (
    <div className="GypsymWetFlyPanipat w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <MotorCircleDigitalTag className={`dot digital-tag ml-4 ${useColorStatus("CM_511FY1_LHH")}`} label="CM_511FY1_LHH" text="X" />
        <div class="yellowline-Vr position-absolute line-2"></div>

        <div className="containerImage">
          <ProgressBarMimic label="CM_511FY1_LI" />
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "511FY1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CLINKER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "1100T",
              }}
            />
          </div>
        </div>
        <div class="yellowline-Vr downArrow line-1"></div>

        <div className="d-flex mt-4">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "531WF1" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("CM_531WF1")}`,
              secondCircleText: "M",
              secondCircleLabel: "CM_531WF1",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_531WF1_POPUP")}`} label="CM_531WF1_POPUP" text="P" />
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <MotorCircleDigitalTag className={`dot digital-tag ml-4 ${useColorStatus("CM_511FY2_LHH")}`} label="CM_511FY2_LHH" text="X" />
        <div class="yellowline-Vr position-absolute line-2"></div>

        <div className="containerImage">
          <ProgressBarMimic label="CM_511FY2_LI" />
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "511FY2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GYPSUM",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "285T",
              }}
            />
          </div>
        </div>
        <div class="yellowline-Vr downArrow line-1"></div>
        <div className="d-flex mt-4">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "531WF2" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("CM_531WF2")}`,
              secondCircleText: "M",
              secondCircleLabel: "CM_531WF2",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_531WF2_POPUP")}`} label="CM_531WF2_POPUP" text="P" />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <MotorCircleDigitalTag className={`dot digital-tag ml-4 ${useColorStatus("CM_511FY3_LHH")}`} label="CM_511FY3_LHH" text="X" />
        <div class="yellowline-Vr position-absolute line-2"></div>

        <div className="containerImage">
          <ProgressBarMimic label="CM_511FY3_LI" />
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "511FY3",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "WET FLY",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "ASH",
              }}
            />
          </div>
        </div>
        <div class="yellowline-Vr downArrow line-1"></div>
        <div className="d-flex mt-4">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "531WF3" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("CM_531WF3")}`,
              secondCircleText: "M",
              secondCircleLabel: "CM_531WF3",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_531WF3_POPUP")}`} label="CM_531WF3_POPUP" text="P" />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <table className=" ">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              {/* <th scope="col">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "FEED SP",
                    }}
                  />
                </th> */}
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "WF RPM",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "PRESENT",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SP TPH",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "ACT FEED",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "TPH",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "MTR SPD",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "BLT LD",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "TOTAL",
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF1",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_SI ",
                    useClass: "greenTxt",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_WC_CRNT_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_FEED",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_BLT_SPD",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_BLT_LD",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td scope="col">&nbsp;</td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF2",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_SI ",
                    useClass: "greenTxt",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_WC_CRNT_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_FEED",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_BLT_SPD",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_BLT_LD",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td scope="col">&nbsp;</td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF3",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_SI ",
                    useClass: "greenTxt",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_WC_CRNT_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_FEED",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_BLT_SPD",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_BLT_LD",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td scope="col">&nbsp;</td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "FM1",
                  }}
                />
              </th>
              <td></td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_241FM1_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_241FM1_FI",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td></td>
              <td></td>
              <td scope="col">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-5">
        <div className="d-flex">
          <table>
            <thead>
              <tr>
                <th colspan="3" className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "TOTALISER-(Tonnes)",
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "TOTAL TODAY",
                    }}
                  />
                </th>
                <th scope="col">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "TODAY WRC PROD.",
                    }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "WF1",
                    }}
                  />
                </th>
                <td>
                  <BlackContainer
                    data={{
                      label: "531WF1",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
                <td>
                  <BlackContainer
                    data={{
                      label: "531WF1",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "WF2",
                    }}
                  />
                </th>
                <td>
                  <BlackContainer
                    data={{
                      label: "531WF2",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
                <td>
                  <BlackContainer
                    data={{
                      label: "531WF2",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "WF3",
                    }}
                  />
                </th>
                <td>
                  <BlackContainer
                    data={{
                      label: "531WF3",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
                <td>
                  <BlackContainer
                    data={{
                      label: "531WF3",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "FM1",
                    }}
                  />
                </th>
                <td>
                  <BlackContainer
                    data={{
                      label: "241FM1",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
                <td>
                  <BlackContainer
                    data={{
                      label: "241FM1",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "TOTAL",
                    }}
                  />
                </th>
                <td>
                  <BlackContainer
                    data={{
                      label: "TODAY_TOTAL",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
                <td>
                  <BlackContainer
                    data={{
                      label: "TODAY_TOTAL",
                      useClass: "greenTxt",
                      unit: "",
                      unitColor: "unitColor",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="ml-4 mt-3">
            <BlackContainer
              data={{
                label: "531WF1",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "531WF2",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "531WF3",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "241FM1",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TOTAL",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <table>
          <thead>
            <tr>
              <th scope="col">
                {" "}
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "FLW MTR",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "TPH",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "T",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "RESET",
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">551FM1</th>
              <td>
                <BlackContainer
                  data={{
                    label: "551FM1_TPH",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "551FM1_TOT",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">241FM1</th>
              <td>
                <BlackContainer
                  data={{
                    label: "241FM1_TPH",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                {/* <BlackContainer
                  data={{
                    label: "A4J03_TODAY",
                    useClass: "greenTxt",
                    unit: "37",
                    unitColor: "unitColor",
                  }}
                /> */}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "CM_RUN_HR_TODAY",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CM RUN HR TODAY",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_RUN_HR_PRVDY",
            useClass: "greenTxt  mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CM RUN HR PRV DY",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_TPH",
            useClass: "greenTxt  mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-8 bg-white p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLINKER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HANDLING",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "CM_521FN1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mt-1",
            label: "521BF1",
          }}
        />
        <div className=" d-flex align-items-center justify-content-cente">
          <div className="squareplustri">
            <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-3 ${useColorStatus("CM_521BF1")}`} label="CM_521BF1" />
            <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            <div className="position-absolute single-text-10 d-flex">
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CM_521RF1")}`} label="CM_521RF1" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2 mt-1",
                  label: "521RA1",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10 text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PLANT VOLTAGE",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_PLANT_VOLTAGE1",
              useClass: "greenTxt mt-2",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-4 ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GYPSUM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PROBLEM",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-3 ${useColorStatus("GYPSUM_PROBLEM")}`} label="GYPSUM_PROBLEM" />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <BlackContainer
          data={{
            label: "CM_511FY1_LI",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_521VF1_II",
            useClass: "greenTxt mt-5 ml-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="gray-img"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "K11SG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 bg-white p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GYPSUM/WET",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FLY ASH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HANDLING",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_511FY2_LI",
          useClass: "greenTxt position-absolute single-text-14",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_521BF1_PT",
          useClass: "greenTxt position-absolute single-text-15",
          unit: "Bar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-16 d-flex">
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon pr-2">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("CM_521FN1")}`} label="CM_521FN1" text="" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2- ml-5",
              label: "521FN1",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "531BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("CM_531BC1")}`,
          secondCircleText: "M",
          secondCircleLabel: "CM_531BC1",
        }}
      />

      <div className="position-absolute single-text-18 d-flex">
        <MotorCircleDigitalTag className={`digital-tag ${useImgColorStatus("CM_531DG3")}`} label="CM_531DG3" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "531DG3",
          }}
        />
      </div>
      <div className=" position-absolute single-text-19">
        <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("FLS_WF_1")}`} label="FLS_WF_1" text="P" />
      </div>
      <div className=" position-absolute single-text-20  d-flex">
        <div className="bg-white p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Manual",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_FEED_RC",
                useClass: "greenTxt ml-4",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_FEED_RC",
                useClass: "greenTxt ml-4",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="bg-white p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Manual",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MV",
              }}
            />
            <BlackContainer
              data={{
                label: "WF CONTROLLER MV",
                useClass: "greenTxt ml-4",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "WF CONTROLLER OUT",
                useClass: "greenTxt ml-4",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-4 ${useColorStatus("CM_531GA1")} `} label="CM_531GA1" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CM_531GA1",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FIELD CHANGE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "OVER SELECTION",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag className={`square digital-tag  mt-2 ${useColorStatus("GA_PMP_FLD_SEL_PPC")}`} label="GA_PMP_FLD_SEL_PPC" text="" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3 mt-2",
                label: "PPC",
              }}
            />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("GA_PMP_FLD_SEL_WRC")}`} label="GA_PMP_FLD_SEL_WRC" text="" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3 mt-2",
                label: "WRC",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "531GA1 PUMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "DOSING  SP",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531GA1 ",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531GA1 ",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SETPOINT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MOTOR RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531GA1",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GA_PMP_WRC_FLOW",
              useClass: "greenTxt mt-3",
              unit: "LPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GA_PMP_PPC_FLOW",
              useClass: "greenTxt mt-1",
              unit: "ml/min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag mt-1 ml-3 ${useColorStatus("CM_531BC4_LH")}`} label="CM_531BC4_LH" text="" />
        </div>
      </div>
      <div className=" position-absolute single-text-22 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "531BC3" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("CM_531BC3AM01")}`,
            secondCircleText: "M",
            secondCircleLabel: "CM_531BC3AM01",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_531BC3AM01_II",
            useClass: "greenTxt ml-3 mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-23">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "531BC4" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("METAL_DET_TREND")}`,
            secondCircleText: "M",
            secondCircleLabel: "METAL_DET_TREND",
          }}
        />
        <BlackContainer
          data={{
            label: "531WF1",
            useClass: "greenTxt ml-4 mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-24 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-5"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("CM_531MS1")}`,
            firstCircleText: "M",
            firstCircleLabel: "CM_531MS1",
          }}
          text={{ useClass: "text-dark", label: "531MS1" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "ACT_TOTAL_TPH",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "METAL DETECTOR CTR",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "Metal Count",
              }}
            />
          </div>
          <div className="d-flex mt-3">
            <MotorCircleDigitalTag className={`square digital-tag  mt-1 ${useColorStatus("CM_531MT1_DT")}`} label="CM_531MT1_DT" text="" />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "531MT1",
              }}
            />
          </div>
        </div>
        <div>
          <div className="">
            <BlackContainer
              data={{
                label: "CM_24DV2_ZT",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "30 TON GATE",
              }}
            />
            <BlackContainer
              data={{
                label: "METAL DETECTOR CTR",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <div className="text-center">
              <MotorCircleDigitalTag className={`square digital-tag mt-3 ${useColorStatus("CM_531MT2_DT")}`} label="CM_531MT2_DT" text="" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "531MT2",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mt-1",
            label: "521BF2",
          }}
        />
        <div className=" d-flex align-items-center justify-content-cente">
          <div className="squareplustri">
            <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-3 ${useColorStatus("CM_521BF2")}`} label="CM_521BF2" />
            <div className="yellowline-Vr position-absolute line-1 ml-auto"></div>
            <div className="position-absolute single-text-10 d-flex">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CM_521RF2")} `} label="CM_521RF2" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2 mt-1",
                  label: "521RA2",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div className="ml-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_521FN2")}`} label="CM_521FN2" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-5",
              label: "521FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "CM_521FN2_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_521BF2_DPT",
            useClass: "greenTxt mt-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_241BF2_PT",
            useClass: "greenTxt mt-5",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_241BF2_DPT",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <MotorCircleDigitalTag className={`digital-tag ${useImgColorStatus("CM_531DG1")}`} label="CM_531DG1" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "531DG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <MotorCircleDigitalTag className={`digital-tag ${useImgColorStatus("CM_531DG2")}`} label="CM_531DG2" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "531DG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <MotorCircleDigitalTag className={`dot digital-tag ml-4 ${useColorStatus("CM_531BI1_LHH")} `} label="CM_531BI1_LHH" text="X" />
        <div class="yellowline-Vr position-absolute line-2"></div>

        <div className="containerImage mt-3">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "531BL1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "REJECT",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BIN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "15T",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_531BI1",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div class="yellowline-Vr downArrow line-1"></div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <BlackContainer
          data={{
            label: "CM_531DG1_TOWARDS_REJECT  COUNT",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "Divert Count",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("METAL_DET_TREND")}`} label="METAL_DET_TREND" text="T" />
      </div>
      <div className="truck position-absolute single-text-33"></div>
      <div className="truck position-absolute single-text-34"></div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <div className="triangle-with-squares">
            <div className="pipeHr"></div>
          </div>
        </div>
        <div className="text-center">
          <div className="dot grey-color">M</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "541BE1",
            }}
          />
        </div>
        <div>
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "531BC2" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "M",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CM_531BC1_II",
          useClass: "greenTxt position-absolute single-text-36",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-37">
        <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_531BC1_BSS")}`} label="CM_531BC1_BSS" />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr  position-absolute line-2"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Hr  position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr upArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr upArrow position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Vr upArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Hr  position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
    </div>
  );
};
