import { useColorStatus } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, TransparentBoxWithGate, PipeWithCircles } from "../../../../index";
export const CementMill4FeedGujaratLine2 = () => {
  return (
    <div className="CementMill2FeedGujaratLine2 CementMill4FeedGujaratLine2 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U2U07" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("U2U07")}`,
          secondCircleText: "M",
          secondCircleLabel: "U2U07",
        }}
      />
      <div className="d-flex flex-column align-items-end position-absolute pipe-2">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "G",
          }}
          text={{ useClass: "text-dark", label: "Z4J06" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("Z4J06")}`,
            secondCircleText: "M",
            secondCircleLabel: "Z4J06",
          }}
        />
        <div className="yellowline-Vr downArrow line-19 mr-2"></div>
      </div>

      <div className="d-flex pipe-3">
        <div className="d-flex flex-column align-items-end">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("Z4A01A")}`,
              firstCircleText: "M",
              firstCircleLabel: "Z4A01A",
            }}
            text={{ useClass: "text-dark", label: "A01A" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "",
            }}
          />
          <div className="yellowline-Vr downArrow line-19 mr-2"></div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("Z4A01B")}`,
              firstCircleText: "M",
              firstCircleLabel: "Z4A01B",
            }}
            text={{ useClass: "text-dark", label: "A01B" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "",
            }}
          />
          <div className="yellowline-Vr downArrow line-18 mr-2"></div>
        </div>

        <div className="d-flex flex-column align-items-end">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("Z4A02")}`,
              firstCircleText: "M",
              firstCircleLabel: "Z4A02",
            }}
            text={{ useClass: "text-dark", label: "A02" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "",
            }}
          />
          <div className="yellowline-Vr downArrow line-19 mr-2"></div>
        </div>

        <div className="d-flex flex-column align-items-start">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("Z4A03")}`,
              firstCircleText: "M",
              firstCircleLabel: "Z4A03",
            }}
            text={{ useClass: "text-dark", label: "A03" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "",
            }}
          />
          <div className="yellowline-Vr downArrow line-19 ml-2"></div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end position-absolute pipe-4">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "A01B_SC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("Z4A01B_SC1")}`,
            secondCircleText: "M",
            secondCircleLabel: "Z4A01B_SC1",
          }}
        />

        <div className="yellowline-Vr downArrow line-19 mr-2"></div>
      </div>

      <div className="d-flex flex-column align-items-end position-absolute pipe-8">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "A01B_SC2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("Z4A01B_SC2")}`,
            secondCircleText: "M",
            secondCircleLabel: "Z4A01B_SC2",
          }}
        />

        <div className="yellowline-Vr downArrow line-18 mr-2"></div>
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "A01B_SC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("Z4A01B_SC3")}`,
          secondCircleText: "M",
          secondCircleLabel: "Z4A01B_SC3",
        }}
      />

      <div className="yellowline-Hr rightarrow position-absolute line-20"></div>
      <div className="d-flex flex-column position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "TO MILL INLET",
          }}
        />
        <BlackContainer
          data={{
            label: "Z4A03_SP_SPA",
            useClass: "greenTxt mt-1 ml-4",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="d-flex flex-column align-items-start position-absolute pipe-5">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z4J01A")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z4J01A",
          }}
          text={{ useClass: "text-dark", label: "J01A" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "G",
          }}
        />
        <div className="yellowline-Vr downArrow line-19 ml-2"></div>

        <div className="truck"></div>
        <div className="yellowline-Vr downArrow line-18 align-self-end mr-2"></div>
      </div>

      <div className="d-flex flex-column align-items-end position-absolute pipe-6">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z4J01B")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z4J01B",
          }}
          text={{ useClass: "text-dark", label: "J01B" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "G",
          }}
        />
        <div className="yellowline-Vr downArrow line-18 align-self-end mr-2"></div>
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U8U06" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("U8U08")}`,
          secondCircleText: "M",
          secondCircleLabel: "U8U08",
        }}
      />

      <div className="position-absolute single-text-1">
        <div className="d-flex gap-1">
          <div className="squareplustri text-center mt-1"></div>
          <div className="mt-3">
            <div className={`line-circle grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "P75A",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr downArrow line-1"></div>
        <div className="yellowline-Hr line-2"></div>
        <div className="yellowline-Vr upArrow line-3"></div>
      </div>

      <div className="position-absolute single-text-2">
        <TransparentBoxWithGate
          isClickable={false}
          squareProps={{
            squareClass: `mr-1 grey-color`,
          }}
        />
      </div>

      <div className="position-absolute single-text-3 d-flex">
        <div className="squareplustri text-center position-relative">
          <BlackContainer
            data={{
              label: "Z4A01A_L1",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CLINKER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "LO1",
            }}
          />
          <BlackContainer
            data={{
              label: "Z4A01A_T1",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="yellowline-Vr downArrow"></div>
        </div>
        <div className="squareplustri text-center position-relative">
          <BlackContainer
            data={{
              label: "Z4L03_L4",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "POND ASH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "LO3",
            }}
          />
          <div className="yellowline-Vr downArrow"></div>
        </div>
        <div className="squareplustri text-center position-relative">
          <BlackContainer
            data={{
              label: "Z4L02_L3",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "GYPSUM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "LO2",
            }}
          />
          <div className="yellowline-Vr downArrow"></div>
        </div>
        <div className="squareplustri text-center position-relative">
          <BlackContainer
            data={{
              label: "Z4L07_L2",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PERFORMANCE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "IMPROVER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LO7",
            }}
          />
          <div className="yellowline-Vr downArrow"></div>
        </div>

        <div className="squareplustri text-center position-relative">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "ADDITIVE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "HOPPER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "IMPROVER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LO8",
            }}
          />
          <div className="yellowline-Vr downArrow"></div>
          <div className="circle-img c-grey-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-last",
              label: "TO MIll INLET",
            }}
          />
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-6 text-dark",
          label: "To Z4J19",
        }}
      />

      <div className="position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "Z4P95_DP",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex gap-1">
          <div>
            <div className="squareplustri text-center mt-1"></div>
          </div>
          <div className="mt-3 gap-2">
            <div className={`line-circle grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "P95",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr downArrow line-1"></div>
        <div className="yellowline-Hr line-2"></div>
        <div className="yellowline-Vr upArrow line-3"></div>

        <div className="d-flex">
          <div className="circle-img c-grey-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-bottom text-dark mb-4",
              label: "P94",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-9">
        <div className="d-flex gap-1">
          <div className="squareplustri text-center mt-1"></div>
          <div className="mt-3">
            <div className={`line-circle grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "P85A",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr downArrow line-1"></div>
        <div className="yellowline-Hr line-2"></div>
        <div className="yellowline-Vr upArrow line-3"></div>
      </div>

      <div className="position-absolute single-text-10">
        <div className="d-flex gap-1">
          <div>
            <div className="squareplustri text-center mt-1"></div>
          </div>
          <div className="mt-3 gap-2">
            <div className={`line-circle grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "P05",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr downArrow line-1"></div>
        <div className="yellowline-Hr line-2"></div>
        <div className="yellowline-Vr upArrow line-3"></div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-bottom text-dark mb-4",
            label: "P04",
          }}
        />
      </div>

      <div className="position-absolute single-text-4">
        <div className="d-flex gap-1">
          <div>
            <div className="squareplustri text-center mt-1"></div>
          </div>
          <div className="mt-3 gap-2">
            <div className={`line-circle grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "P75B",
              }}
            />
          </div>
        </div>
        <div className="yellowline-Vr downArrow line-1"></div>
        <div className="yellowline-Hr line-2"></div>
        <div className="yellowline-Vr upArrow line-3"></div>
      </div>

      <div className="d-flex flex-column position-absolute single-text-11">
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-2",
                label: "U8T08A",
              }}
            />

            <TransparentBoxWithGate
              isClickable={false}
              squareProps={{
                squareClass: `mr-1 grey-color`,
              }}
            />
          </div>
          <div className="d-flex ml-4">
            <TransparentBoxWithGate
              isClickable={false}
              squareProps={{
                squareClass: `mr-1 grey-color`,
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "U8T08B",
              }}
            />
          </div>
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-12 text-dark",
          label: "TO MILL:3",
        }}
      />

      <div className="position-absolute single-text-13 d-flex flex-column">
        <BlackContainer
          data={{
            label: "Z4G01_F1",
            useClass: "greenTxt",
            unit: "lit/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z4G01_S1",
            useClass: "greenTxt mt-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      {/* map krna h */}
      <div className="position-absolute single-text-14">
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
              <th scope="col">A01A</th>
              <th scope="col">A01B</th>
              <th scope="col">A02</th>
              <th scope="col">A03</th>
              <th scope="col">FLYASH SEL L6SF2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SPEED",
                  }}
                />
              </th>

              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01A_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01B_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A02_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A03_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF2_POS",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "TPH FLOW",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01A_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01B_F1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A02_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A03_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF2_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "TPH SP",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_F11",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_F12",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_F13",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_F14",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td className="p-0">
                <tr>
                  <td>
                    <BlackContainer
                      data={{
                        label: "CM4RATIOCONTROL_F15",
                        useClass: "greenTxt ",
                        unit: "t/h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <span className="ml-1">
                      <BlackContainer
                        data={{
                          label: "L6SF2_STEP_SP",
                          useClass: "greenTxt ",
                          unit: "t/h",
                          unitColor: "unitColor",
                        }}
                      />
                    </span>
                    <span className="ml-1"> +</span>
                    <span className="ml-1">
                      <BlackContainer
                        data={{
                          label: "L6SF2_ADD_SP",
                          useClass: "greenTxt ",
                          unit: "t/h",
                          unitColor: "unitColor",
                        }}
                      />
                    </span>
                  </td>
                </tr>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "ACT_F",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01A_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01B_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A02_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A03_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF2_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "OPER % Entered",
                    }}
                  />
                </div>
              </th>
              <td>
                <div>&nbsp;</div>
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01B_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A02_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A03_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF2_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "Accepted",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01A_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A01B_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A02_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z4A03_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF2_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "QCX %",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_A01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_B01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_C01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_D01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM4RATIOCONTROL_E01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "Z4P95_SPM",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z4P95_SPEED",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z4P95_CURRENT",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "L6SF2_STEP_SP",
            useClass: "greenTxt mt-4 ml-4",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-16">
        <BlackContainer
          data={{
            label: "Z4P50_S1SP",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "Z4P50_S1",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      {/* <div className="yellowline-Vr downArrow position-absolute line-4"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute line-5"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute line-6"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute line-7"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute line-8"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute line-9"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute line-10"></div> */}
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>

      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
    </div>
  );
};
