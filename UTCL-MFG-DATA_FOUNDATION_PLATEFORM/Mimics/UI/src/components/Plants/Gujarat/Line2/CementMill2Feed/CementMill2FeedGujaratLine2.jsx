import { useColorStatus } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, TransparentBoxWithGate, PipeWithCircles } from "../../../../index";
export const CementMill2FeedGujaratLine2 = () => {
  return (
    <div className="CementMill2FeedGujaratLine2 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U2U06" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("Z2_GA_PER_SP_MAN")}`,
          secondCircleText: "M",
          secondCircleLabel: "Z2_GA_PER_SP_MAN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("U2U07")}`,
          firstCircleText: "M",
          firstCircleLabel: "U2U07",
        }}
        text={{ useClass: "text-dark", label: "U2U07" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
        }}
      />

      <div className="d-flex pipe-3">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z2A01A")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z2A01A",
          }}
          text={{ useClass: "text-dark", label: "A01A" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z2A01B")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z2A01B",
          }}
          text={{ useClass: "text-dark", label: "A01B" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />

        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z2A02")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z2A02",
          }}
          text={{ useClass: "text-dark", label: "A02" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />

        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z2A03")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z2A03",
          }}
          text={{ useClass: "text-dark", label: "A03" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "Z2J01C" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("Z2J01C")}`,
          secondCircleText: "M",
          secondCircleLabel: "Z2J01C",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "J01A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("Z2J01A")}`,
          secondCircleText: "M",
          secondCircleLabel: "Z2J01A",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "J01B" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("Z2J01B")}`,
          secondCircleText: "M",
          secondCircleLabel: "Z2J01B",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U8U06" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("U8U06")}`,
          secondCircleText: "M",
          secondCircleLabel: "U8U06",
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
        <div className="squareplustri text-center">
          <BlackContainer
            data={{
              label: "Z2L01_L4",
              useClass: "greenTxt mt-4",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="squareplustri text-center">
          <BlackContainer
            data={{
              label: "Z2L03_L4",
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
        </div>
        <div className="squareplustri text-center">
          <BlackContainer
            data={{
              label: "Z2L02_L3",
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
        </div>
        <div className="squareplustri text-center">
          <BlackContainer
            data={{
              label: "Z2L07_L2",
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
        </div>
      </div>

      <div className="position-absolute single-text-4">
        <div className="d-flex gap-1">
          <div className="squareplustri text-center mt-1"></div>
        </div>
        <div className="yellowline-Vr downArrow line-1"></div>
        <div className="yellowline-Hr rightarrow line-2"></div>
        {/* <div className="yellowline-Hr upArrow line-3"></div> */}
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-5 text-dark",
          label: "TO BALL MILL I/L",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-6 text-dark",
          label: "FLYASH SEL TO J19",
        }}
      />

      <div className="truck position-absolute single-text-7"></div>

      <div className="position-absolute single-text-8">
        <div className="d-flex gap-1">
          <div>
            <div className="squareplustri text-center mt-1"></div>
          </div>
          <div className="mt-3 gap-2">
            <div className={`line-circle grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "P25",
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
              label: "P24",
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
                label: "P75",
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

      <div className="d-flex flex-column position-absolute single-text-11">
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-2",
                label: "U8T06A",
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
                label: "U8T06B",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto position-relative">
          <div className="position-absolute container-bottom d-flex">
            <TransparentBoxWithGate
              isClickable={false}
              squareProps={{
                squareClass: `mr-1 grey-color`,
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "U8T10",
              }}
            />
          </div>
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-12 text-dark",
          label: "TO MILL 3 U8U07",
        }}
      />

      <div className="position-absolute single-text-13 d-flex">
        <div className="d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "CLINKER",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L01",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "Z2A01_TE",
            useClass: "greenTxt ml-3",
            unit: "°C",
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
              <th scope="col">A04</th>
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
                    label: "Z2A01A_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A01B_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A02_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A03_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L5SF2_Z1AI",
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
                    label: "Z2A01A_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A01B_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A02_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A03_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L5SF2_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
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
                      label: "ACT_F",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A01A_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A01B_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A02_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A03_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L5SF2_F1_FREQ",
                    useClass: "greenTxt",
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
                    label: "TPH SP",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_F11",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_F12",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_F13",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_F14",
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
                        label: "CM2RATIOCTRL_F15",
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
                          label: "L5SF2_STEP_SP",
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
                          label: "L5SF2_ADD_SP",
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
                    label: "Z2A01B_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A02_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_F14",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L5SFF2_OP_SP",
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
                    label: "Z2A01A_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A01B_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A02_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2A03_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L5SFF2_ACPT",
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
                    label: "CM2RATIOCTRL_A01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_B01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_C01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_D01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM2RATIOCTRL_E01CN",
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
            label: "Z2_GA_PER_SP_MAN",
            useClass: "greenTxt mt-1 ml-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "Z2G01_SP_SPA",
                useClass: "greenTxt ",
                unit: "lit/h",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "Z2G01_F1",
                useClass: "greenTxt mt-2 ml-2",
                unit: "lit/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="box-1 p-1 ml-4">
            <BlackContainer
              data={{
                label: "Z2G01_SP_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "Z2G01_S1",
                useClass: "greenTxt mt-2 ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
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
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>

      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
    </div>
  );
};
