import { useColorStatus } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, TransparentBoxWithGate, PipeWithCircles } from "../../../../index";
export const CementMill3FeedGujaratLine2 = () => {
  return (
    <div className="CementMill2FeedGujaratLine2  CementMill3Feed w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U8U07" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "U2U07" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "G",
        }}
      />

      <div className="d-flex pipe-3">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("Z3A01A")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z3A01A",
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
            firstCircleClass: `dot digital-tag ${useColorStatus("Z3A01B")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z3A01B",
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
            firstCircleClass: `dot digital-tag ${useColorStatus("Z3A02")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z3A02",
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
            firstCircleClass: `dot digital-tag ${useColorStatus("Z3A03")}`,
            firstCircleText: "M",
            firstCircleLabel: "Z3A03",
          }}
          text={{ useClass: "text-dark", label: "A03" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "J01A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("Z3J01A")}`,
          secondCircleText: "M",
          secondCircleLabel: "Z3J01A",
        }}
      />

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
          <div className="yellowline-Vr downArrow line-1"></div>
          <BlackContainer
            data={{
              label: "Z3L01_L4_TON",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z3L01_L4",
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
        </div>
        <div className="squareplustri text-center">
          <div className="yellowline-Vr downArrow line-1"></div>
          <BlackContainer
            data={{
              label: "Z3L02_L4_TON",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z3L02_L4",
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
              label: "LO2",
            }}
          />
        </div>
        <div className="squareplustri text-center">
          <div className="yellowline-Vr downArrow line-1"></div>

          <BlackContainer
            data={{
              label: "Z3L03_L3",
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
              label: "LO3",
            }}
          />
        </div>
        <div className="squareplustri text-center">
          <div className="yellowline-Vr downArrow line-1"></div>
          <BlackContainer
            data={{
              label: "Z3L06_L2",
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
              label: "LO6",
            }}
          />
        </div>
      </div>
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
        <div className="d-flex">
          <div className="circle-img c-grey-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-bottom text-dark mb-2",
              label: "P24",
            }}
          />
        </div>
      </div>

      <div className="d-flex flex-column position-absolute single-text-11">
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mr-2",
                label: "U8T07A",
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
                label: "U8T07B",
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
                label: "U8T11",
              }}
            />
          </div>
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-12 text-dark",
          label: "TO MILL 4 U8U08",
        }}
      />

      <div className="position-absolute single-text-13 d-flex">
        <BlackContainer
          data={{
            label: "Z3P25_DP",
            useClass: "greenTxt ml-3",
            unit: "mmWC",
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
                    label: "Z3A01A_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A01B_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A02_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A03_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF1_POS",
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
                    label: "Z3A01A_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A01B_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A02_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A03_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF1_F1",
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
                    label: "CM3RATIOCONTROL_F11",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM3RATIOCONTROL_F12",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM3RATIOCONTROL_F13",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A03S1_SPA",
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
                        label: "CM3RATIOCONTROL_F15",
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
                          label: "L6SF1_STEP_SP",
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
                    label: "Z3A01A_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A01B_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A02_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A03_F1_FREQ",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <div>&nbsp;</div>
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
                    label: "Z3A01B_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A02_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A03_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF1_OP_SP",
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
                    label: "Z3A01A_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A02_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A01B_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "Z3A03_ACPT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L6SFF1_ACPT",
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
                    label: "CM3RATIOCONTROL_A01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM3RATIOCONTROL_B01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM3RATIOCONTROL_C01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM3RATIOCONTROL_D01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM3RATIOCONTROL_E01CN",
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
            label: "Z3_GA_PER_SP_MAN",
            useClass: "greenTxt mt-1 ml-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "Z3G01_SP_SPA",
                useClass: "greenTxt ",
                unit: "lit/h",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "Z3G01_F1",
                useClass: "greenTxt mt-2 ml-2",
                unit: "lit/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="box-1 p-1 ml-4">
            <BlackContainer
              data={{
                label: "Z3G01_SP_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "Z3G01_S1",
                useClass: "greenTxt mt-2 ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <MotorCircleDigitalTag className={`dot position-absolute single-text-16 digital-tag ${useColorStatus("Z3VB1")}`} label="Z3VB1" text="M" />

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr  position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>

      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr  position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Hr  position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
    </div>
  );
};
