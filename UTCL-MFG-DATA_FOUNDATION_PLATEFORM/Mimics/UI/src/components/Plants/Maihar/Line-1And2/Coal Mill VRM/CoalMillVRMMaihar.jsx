import { BlackContainer, MotorCircleDigitalTag } from "../../../../index";

import { useColorStatus } from "../../../../../utils";

export const CoalMillVRMMaihar = () => {
  return (
    <div className="CoalMillVRMMaihar  w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3">
        <div className="bars"></div>
      </div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-42"></div>

      <div className="pipeHr position-absolute pipe-5">
        <div className="d-flex ml-5">
          <i className="fas fa-long-arrow-alt-left ml-5"></i>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7">
        <div className="d-flex ml-5">
          <div className="bars "></div>
          <i className="fas fa-long-arrow-alt-left ml-5"></i>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-8">
        <div className="d-flex justify-content-center">
          <i className="fas fa-long-arrow-alt-right"></i>
          <div className="bars"></div>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-9">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-right"></i>
          <div className="bars"></div>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-40">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-right"></i>
          <div className="bars"></div>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-41">
        <div className="d-flex justify-content-around">
          <div className="bars"></div>
        </div>
      </div>

      <div className="containerImage text-center position-absolute single-text-1"></div>
      <div className="bigContainer  justify-content-center single-text-2">
        <div className="position-absolute single-text-78">
          <div className="greenDot p-3 mt-3"> M</div>
          <div>
            <BlackContainer
              data={{
                label: "_54VS06",
                useClass: "greenTxt mt-2 ",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "54DP04",
                useClass: "greenTxt mt-3 ",
                unit: "mmwg",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "_54VS07",
                useClass: "greenTxt mt-2 ",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "54FT01_AIC",
                useClass: "greenTxt mt-5 ",
                unit: "l/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "_54PT08",
                useClass: "greenTxt mt-2 ",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="bagHouse text-center pr-4 position-absolute single-item-3"></div>
      <div className="chimni-red position-absolute single-text-4"></div>
      <div className="containerImage text-center position-absolute single-text-5"></div>

      <div className="containerImage text-center position-absolute single-text-6"></div>
      <div className="containerImage position-absolute single-text-7 text-center">
        {" "}
        <span className="greenSqure mt-1"></span>
      </div>
      <div className="d-flex align-items-center single-text-9">
        {/* <div className="greenDot p-3"> M</div> */}
        <MotorCircleDigitalTag
          className={`dot p-3 ${useColorStatus("M4FCFKP1")} `}
          label="M4FCFKP1"
          text="M"
        />
        <div className="dashedHr-Pipe position-absolute"></div>
      </div>

      <div className="containerImage position-absolute single-text-8 text-center">
        {" "}
        <span className="greenSqure mt-1"></span>
      </div>
      <div className="d-flex align-items-center single-text-10">
        <div className="grayDot  p-3"> M</div>
        <div className="dashedHr-Pipe position-absolute"></div>
      </div>
      <div className="containerImage position-absolute single-text-11 text-center"></div>
      <div className="greenDot  position-absolute single-text-12 p-3"> M</div>

      <div className="CGRnBox position-absolute single-text-13">
        <div className="text-white position-absolute single-text-a">
          M4HTSV1_10 OP
        </div>
        <div className="d-flex">
          <div className="d-flex mt-2 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV1 <span className="yellowTxt">(11.1)</span>
            </span>
          </div>
          <div className="d-flex mt-2 ml-3 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV6 <span className="yellowTxt">(27.1)</span>
            </span>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex mt-2 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV2 <span className="yellowTxt">(11.2)</span>
            </span>
          </div>
          <div className="d-flex mt-2 ml-3 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV7 <span className="yellowTxt">(27.2)</span>
            </span>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex mt-2 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV3 <span className="yellowTxt">(17.1)</span>
            </span>
          </div>
          <div className="d-flex mt-2 ml-3 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV8 <span className="yellowTxt">28.1</span>
            </span>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex mt-2 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV4 <span className="yellowTxt">(17.2)</span>
            </span>
          </div>
          <div className="d-flex mt-2 ml-3 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV9 <span className="yellowTxt">28.2</span>
            </span>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex mt-2 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SV5 <span className="yellowTxt">(18)</span>
            </span>
          </div>
          <div className="d-flex mt-2 ml-3 fs-5">
            <div className="circle-group p-1 text-white">
              <div className="d-flex tringle-item rotate ">
                <i className="fa-solid fa-caret-right d-block green"></i>
                <i className="fa-solid fa-caret-left d-block green"></i>
              </div>
            </div>
            <span>
              SVA <span className="yellowTxt">28.3</span>
            </span>
          </div>
        </div>
      </div>

      <div className="CGRnBox position-absolute single-text-14">
        <div className="text-white position-absolute single-text-a">
          CYLINDER POSITION
        </div>
        <div className="d-flex mt-2">
          <span>Cylin 1 Pos</span>
          <BlackContainer
            data={{
              label: "_54GT05",
              useClass: "greenTxt mx-auto mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <span>Cylin 2 Pos</span>
          <BlackContainer
            data={{
              label: "_54GT06",
              useClass: "greenTxt mx-auto mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <span> Cylin 3 Pos </span>
          <BlackContainer
            data={{
              label: "_54GT07",
              useClass: "greenTxt mx-auto mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <span>Pos AVG</span>
          <BlackContainer
            data={{
              label: "54GT567",
              useClass: "greenTxt mx-auto mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="CGRnBox position-absolute single-text-15">
        <div className="text-white position-absolute single-text-a">
          M4HYDPMP
        </div>
        <div className="d-flex mt-2">
          <div className="greenDot p-3"> M</div>
          <BlackContainer
            data={{
              label: "KL_451DQ1_BIN_WT",
              useClass: "greenTxt mx-auto mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <span>Oper PR</span>
          <BlackContainer
            data={{
              label: "_54PT09",
              useClass: "greenTxt mx-auto mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <span>Lift PR</span>
          <BlackContainer
            data={{
              label: "_54PT10",
              useClass: "greenTxt mx-auto mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="CGRnBox position-absolute single-text-16">
        <div className="text-white position-absolute single-text-a">
          COMPRESSOR
        </div>
        <BlackContainer
          data={{
            label: "_54PT21",
            useClass: "greenTxt mt-2 mb-2 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <div>
            <div className="width-fit-content p-1">
              {/* <div className="circle-group"> */}
              {/* <span className="grayDot">M</span> */}
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("M4CP1")}`}
                label="M4CP1"
                text="M"
              />
              {/* </div> */}
            </div>

            <div className="redgrey-sqaure mt-1"></div>
            <div className="yellowTxt">RM-CP1</div>
            <div className="greenSqure mt-1"></div>
          </div>
          <div className="ml-3">
            <div className="width-fit-content p-1">
              {/* <div className="circle-group "> */}
              {/* <span className="greenDot p-2">M</span>  */}
              <MotorCircleDigitalTag
                className={`dot digital-tag p-2 ${useColorStatus("M4CP2")}`}
                label="M4CP2"
                text="M"
              />
              {/* </div> */}
            </div>
            <div className="greenSqure mt-1"></div>
            <div className="yellowTxt mt-1">STBY</div>
            <div className="circle-group">
              <span className="c-text"> c</span>
            </div>
            <div className="greenSqure mt-1"></div>
          </div>
          <div className="ml-3">
            <div className="width-fit-content p-1">
              {/* <div className="circle-group">
                <span className="greenDot p-2">M</span>
                <span className="c-text"> c</span>
                </div> */}
              <MotorCircleDigitalTag
                className={`dot digital-tag p-2 ${useColorStatus("M4CP3")}`}
                label="M4CP3"
                text="M"
              />
            </div>

            <div className="greenSqure mt-1"></div>
            <div className="yellowTxt mt-1">FC-CP3</div>
            <div className="circle-group">
              <span className="c-text"> c</span>
            </div>
            <div className="greenSqure mt-1"></div>
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-17">
        <div className="text-white position-absolute single-text-a">
          COMPRESSOR
        </div>
        <div className="yellowTxt mt-3">KAISAN COMP</div>
        <div className="d-flex mt-2">
          <div className=" width-fit-content p-1">
            {/* <div className="circle-group">
                <span className="grayDot p-2">M</span><span className="c-text"> c</span>
                </div> */}
            <MotorCircleDigitalTag
              className={`dot digital-tag digital-tag p-2 ${useColorStatus(
                "M4CP6"
              )}`}
              label="M4CP6"
              text="M"
            />
          </div>
          <BlackContainer
            data={{
              label: "M4CP6",
              useClass: "greenTxt ml-3 mt-2 mb-2 ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="yellowTxt mt-3">FC-CP6</div>
        <BlackContainer
          data={{
            label: "_54PT35",
            useClass: "greenTxt ml-5  mx-auto mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="CGRnBox position-absolute single-text-18">
        <div className="text-white position-absolute single-text-a">
          FEED CONTROL
        </div>
        <div className="d-flex">
          <div>
            <div className="mt-3"> TOTAL FEED TPH</div>
            <div className=""> TOTAL FEED SP</div>
          </div>
          <div className="bg-dark p-1 ml-3">
            <div className="text-white">M4WF RecipeCtrl</div>
            <BlackContainer
              data={{
                label: "M4WF_RecipeCtrl",
                useClass: "greenTxt mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "M4WF_RecipeCtrl",
                useClass: "greenTxt  mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="d-flex">
          <div>
            <div className="yellowTxt">RATIO</div>
            <div className="">SP</div>
            <div className="">OUT</div>
          </div>
          <div className="CGRnBox mt-2 ml-2 position-relative single-text-19">
            <div className="text-white position-absolute single-text-a">
              Calculated
            </div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="CGRnBox mt-2 ml-2 position-relative single-text-19">
            <div className="text-white position-absolute single-text-a">
              Ratio
            </div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-around mb-2">
          <div className="mt-2">MV</div>
          <BlackContainer
            data={{
              label: "KL_451DQ1_BIN_WT",
              useClass: "greenTxt  mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_451DQ1_BIN_WT",
              useClass: "greenTxt  mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="position-absolute single-text-20 text-center mb-1">
          <div className="redgrey-sqaure"></div>
          <div className="containerImage">
            <BlackContainer
              data={{
                label: "_54WT01",
                useClass: "greenTxt ",
                unit: "TON",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="hpipecircle position-absolute single-text-23 mt-4">
            <span className="grayDot "></span>
            <span className="greenDot p-3">M</span>
          </div>
        </div>
        <div className="greenDot p-3 position-absolute single-text-22"> M</div>
        <div className="position-absolute single-text-21 text-center mb-1">
          <div className="greenSqure"></div>
          <div className="containerImage">
            <BlackContainer
              data={{
                label: "_54WT02",
                useClass: "greenTxt  mt-2",
                unit: "TON",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="hpipecircle position-absolute single-text-23 mt-4">
            <span className="grayDot  p-3">M</span>{" "}
            <span className="greenDot "></span>
          </div>
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        <div className="yellowline-Vr downArrow position-absolute line-2"></div>
        <div className="yellowline-Vr downArrow position-absolute line-3"></div>
        <div className="yellowline-Vr downArrow position-absolute line-4"></div>
        <div className="yellowline-Vr  position-absolute line-5"></div>
        <div className="yellowline-Vr  position-absolute line-6"></div>
        <div className="yellowline-Vr downArrow position-absolute d-flex justify-content-center align-items-center line-7">
          {/* <div className="greenDot p-3"> M</div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useColorStatus("M4BFRF1")} `}
            label="M4BFRF1"
            text="M"
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-8 d-flex justify-content-center align-items-center ">
          {/* <div className="greenDot p-3"> M</div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useColorStatus("M4BFRF3")} `}
            label="M4BFRF3"
            text="M"
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-9 d-flex justify-content-center align-items-center">
          {/* <div className="greenDot p-3"> M</div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useColorStatus("M4BFRF2")} `}
            label="M4BFRF2"
            text="M"
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-10 d-flex justify-content-center align-items-center">
          {/* <div className="greenDot p-3"> M</div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useColorStatus("M4BFRF4")} `}
            label="M4BFRF4"
            text="M"
          />
        </div>

        <div className="hpipecircle position-absolute single-text-24 mt-5 ml-4">
          <span className="grayDot"></span>{" "}
          <span className="greenDot p-3">M</span>
        </div>
        <BlackContainer
          data={{
            label: "_54AF01",
            useClass: "greenTxt single-text-26 mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <div className="bg-dark single-text-25 p-1">
          <div className="text-white text-center">M4WF01</div>
          <div className="d-flex">
            <div className="text-white">MV</div>
            <BlackContainer
              data={{
                label: "M4WF01",
                useClass: "greenTxt ml-4 mb-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white">SP</div>
            <BlackContainer
              data={{
                label: "M4WF01",
                useClass: "greenTxt ml-4",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <BlackContainer
          data={{
            label: "54AF02",
            useClass: "greenTxt single-text-27 mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <div className="bg-dark single-text-28 p-1">
          <div className="text-white text-center">M4WF01</div>
          <div className="d-flex">
            <div className="text-white">MV</div>
            <BlackContainer
              data={{
                label: "M4WF02",
                useClass: "greenTxt ml-4 mb-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white">SP</div>
            <BlackContainer
              data={{
                label: "M4WF02",
                useClass: "greenTxt ml-4",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex position-absolute single-text-29">
          <div className="greenSqure"></div>
          <div className="d-flex ml-5">
            <div className="greenSqure"></div>
            <div className="redgrey-sqaure  ml-2"></div>
          </div>
        </div>
        <div className="greenDot p-3 position-absolute single-text-30"> M</div>
      </div>
      <div className="position-absolute single-text-31">
        <div className="text-white ">SF BIN LVL</div>
        <BlackContainer
          data={{
            label: "SFBN_LVL",
            useClass: "greenTxt mt-1 ml-3",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
        <div className=" bg-success mt-2 px-1">SFBIN LEVEL HIGH</div>
      </div>
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "_54PT05",
            useClass: "greenTxt mt-1 ml-3",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54PT06",
            useClass: "greenTxt mt-1 ml-3",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54PT07",
            useClass: "greenTxt mt-1 ml-3",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <div className="connector-icon">
          <span className="greenDot p-3"> M</span>
        </div>
        <div className="connector-icon mt-2">
          <span className="greenDot p-3"> M</span>
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <div className="yellowTxt">MD GRR SP</div>
        <BlackContainer
          data={{
            label: "KL_451DQ1_BIN_WT",
            useClass: "greenTxt mt-2 ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54AS04",
            useClass: "greenTxt mt-1 ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54KW04",
            useClass: "greenTxt mt-5 ml-3",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="img-86 position-absolute single-text-35"></div>
      <div className="d-flex">
        <div className="img-86 position-absolute single-text-37">
          <div className="bg-red width-fit-content mt-2">
            <div className="circle-group">
              <span className="grayDot p-2">M</span>
              <span className="c-text"> c</span>
            </div>
          </div>
        </div>
        <div className="bg-danger px-1 single-text-38">LEVEL FINISHED</div>
      </div>
      {/* <span className="greenDot p-3 position-absolute single-text-36"> M</span> */}
      <MotorCircleDigitalTag
        className={`dot p-3 digital-tag position-absolute single-text-36 ${useColorStatus(
          "M4MD"
        )}`}
        label="M4MD"
        text="M"
      />
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "_54RT02",
            useClass: "greenTxt mx-auto mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT03",
            useClass: "greenTxt mx-auto mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT04",
            useClass: "greenTxt mx-auto mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54KW01",
            useClass: "greenTxt mx-auto mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 ">
        <div className="bg-dark p-1">
          <div className="text-white text-center">M4SEP</div>
          <div className="d-flex">
            <div className="text-white">MV</div>
            <BlackContainer
              data={{
                label: "M4SEP",
                useClass: "greenTxt ml-4 mb-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white">SP</div>
            <BlackContainer
              data={{
                label: "M4SEP",
                useClass: "greenTxt ml-4",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "_54AS01",
            useClass: "greenTxt ml-4 mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <div className="d-flex ">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
        <div className="yellowTxt">M4BH CP1</div>
        <div className="redgrey-sqaure mt-2"></div>
        <div className="yellowTxt">1ST STAGE</div>
        <div className="greenSqure ml-2"></div>
        <div className="yellowTxt">SEL STG1</div>
      </div>
      <div className="position-absolute single-text-42 ml-1">
        <BlackContainer
          data={{
            label: "54PT22",
            useClass: "greenTxt ml-4 mt-2 mb-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        {/* <div className="redgrey-sqaure mt-2"></div> */}
        <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("54PT22")}`}
          label="54PT22"
        />
        <div className="yellowTxt">2ST STAGE</div>
        <div className="greenSqure ml-2"></div>
        <div className="yellowTxt">SEL STG2</div>
      </div>
      <div className="position-absolute single-text-43 ml-3">
        <div className="d-flex ">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
        <div className="yellowTxt mt-2">M4BH CP2</div>

        <div className="yellowTxt mt-4">CM HOOTER</div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-44 text-center">
        {" "}
        <span className="greenSqure mt-1"></span>
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "_54PT14",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT18",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT19",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT26",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="greenSqure  mt-4 mx-auto"></div>
          <BlackContainer
            data={{
              label: "LS5008",
              useClass: "greenTxt mx-auto mt-2",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="ml-1">
          <BlackContainer
            data={{
              label: "_54DP02",
              useClass: "greenTxt mt-2 ",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT20",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT21",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT27",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="greenSqure  mt-4 mx-auto"></div>
          <BlackContainer
            data={{
              label: "_54PT17",
              useClass: "greenTxt mx-auto mt-2",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <BlackContainer
            data={{
              label: "_54DP01",
              useClass: "greenTxt mt-2 ",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT22",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT23",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT28",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="greenSqure  mt-4 mx-auto"></div>
          <BlackContainer
            data={{
              label: "_54PT18",
              useClass: "greenTxt mx-auto mt-2",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <BlackContainer
            data={{
              label: "_54PT15",
              useClass: "greenTxt mt-2 ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT24",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT25",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT29",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="greenSqure  mt-4 mx-auto"></div>
          <BlackContainer
            data={{
              label: "_54PT19",
              useClass: "greenTxt mx-auto mt-2",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-46 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "_54OX01",
              useClass: "greenTxt mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54CO01",
              useClass: "greenTxt mx-auto mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT16",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-text-47">
          <BlackContainer
            data={{
              label: "_54OX02",
              useClass: "greenTxt mx-auto mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54CO02",
              useClass: "greenTxt mx-auto mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_54RT17",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "54GT01",
              useClass: "greenTxt mt-4 ml-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-48">
        <BlackContainer
          data={{
            label: "_54KW02",
            useClass: "greenTxt mx-auto mt-2 ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "_54RT01",
            useClass: "greenTxt mx-auto mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT11",
            useClass: "greenTxt mx-auto mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54VS01",
            useClass: "greenTxt mx-auto mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54VS02",
            useClass: "greenTxt mx-auto mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center mt-3">
          <div className="greenSqure mt-2"></div>
          <div className="redgrey-sqaure mt-2"></div>
        </div>
        <BlackContainer
          data={{
            label: "_54GT03",
            useClass: "greenTxt  mt-2 mr-3 ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-49">
        <BlackContainer
          data={{
            label: "_54TT06",
            useClass: "greenTxt mr-2 mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54PT20",
            useClass: "greenTxt mx-auto mt-2 ",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT05",
            useClass: "greenTxt  mr-2 mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "_54RT12",
            useClass: "greenTxt mx-auto mt-4",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT13",
            useClass: "greenTxt mx-auto mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT14",
            useClass: "greenTxt mx-auto mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54FT02",
            useClass: "greenTxt mx-auto mt-2",
            unit: "l/hr",
            unitColor: "unitColor",
          }}
        />
        <div className="greenDot p-3 mt-3 ml-5"> M</div>
        <BlackContainer
          data={{
            label: "_54RT15",
            useClass: "greenTxt  mt-4 ml-5",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex align-items-center single-text-50">
        {/* <div className="greenDot p-3"> M</div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useColorStatus("M4BFSC1")} `}
          label="M4BFSC1"
          text="M"
        />
        <div className="dashedHr-Pipe position-absolute"></div>
      </div>
      <div className="d-flex align-items-center single-text-51">
        <div className="dashedHr-Pipe position-absolute"></div>
        {/* <div className="greenDot p-3"> M</div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useColorStatus("M4BFSC2")}`}
          label="M4BFSC2"
          text="M"
        />
      </div>
      <div className="yellowline-Vr  position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="d-flex position-absolute single-text-52">
        <div>
          <BlackContainer
            data={{
              label: "54PT26",
              useClass: "greenTxt mt-2 mr-3",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="grn-gry-img"></div>
        <div>
          <BlackContainer
            data={{
              label: "54PT27",
              useClass: "greenTxt  mt-2  ml-3",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-53">
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4WF01_02_PID</div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "M4WF01_02_PID",
                useClass: "greenTxt mt-2",
                unit: "mmwg",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "M4WF01_02_PID",
                useClass: "greenTxt  mt-2",
                unit: "mmwg",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">OUT</div>
            <BlackContainer
              data={{
                label: "M4WF01_02_PID",
                useClass: "greenTxt  mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-54">
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4WFILD_PID</div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">OUT</div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-55">
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4RECRD_MOTF</div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "M4RECRD_MOTP",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "M4RECRD_MOTP",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4RECRD_PID</div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "M4RECRD_PID",
                useClass: "greenTxt mt-2",
                unit: "mmwg",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "M4RECRD_PID",
                useClass: "greenTxt  mt-2",
                unit: "mmwg",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">OUT</div>
            <BlackContainer
              data={{
                label: "M4RECRD_PID",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-57">
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4FCRF</div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "M4FCRF",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "M4FCRF",
                useClass: "greenTxt  mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "KL_451DQ1_BIN_WT",
            useClass: "greenTxt mx-auto mt-3",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4WP01_PID</div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt mt-2",
                unit: "l/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-2",
                unit: "l/hr",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">OUT</div>
            <BlackContainer
              data={{
                label: "KL_451DQ1_BIN_WT",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "KL_451DQ1_BIN_WT",
            useClass: "greenTxt mx-auto mt-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4BFANILD_PID</div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "M4BFANILD_PID",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "M4BFANILD_PID",
                useClass: "greenTxt  mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">OUT</div>
            <BlackContainer
              data={{
                label: "M4BFANILD_PID",
                useClass: "greenTxt  mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-60 d-flex ">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "_54AS06",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="bg-dark p-1 ml-3">
          <div className="text-white">M4BFAN</div>

          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "M4BFAN",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "M4BFAN",
                useClass: "greenTxt  mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-61 ">
        <div className="bg-dark p-1">
          <div className="text-white">M4MIDF</div>

          <div className="d-flex">
            <div className="text-white mt-2 mr-2">MV</div>
            <BlackContainer
              data={{
                label: "M4MIDF",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="text-white mt-2 mr-2">SP</div>
            <BlackContainer
              data={{
                label: "M4MIDF",
                useClass: "greenTxt  mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-62 ">
        <BlackContainer
          data={{
            label: "_54RT30",
            useClass: "greenTxt mt-2 ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54DP05",
            useClass: "greenTxt mx-auto mt-2",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "54PT34",
            useClass: "greenTxt mx-auto mt-2",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT31",
            useClass: "greenTxt mt-2 ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-63">
        <BlackContainer
          data={{
            label: "54KW03",
            useClass: "greenTxt  mt-2",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT42",
            useClass: "greenTxt mt-2 ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54RT43",
            useClass: "greenTxt  mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54VS03",
            useClass: "greenTxt  mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54VS04",
            useClass: "greenTxt mt-2 ",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54GT04",
            useClass: "greenTxt ml-4 mt-2 ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-64">
        <BlackContainer
          data={{
            label: "_54TT01",
            useClass: "greenTxt mt-2 ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54TT02",
            useClass: "greenTxt  mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "_54PT11",
            useClass: "greenTxt mt-2 ",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_54TT05",
            useClass: "greenTxt  mt-4",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <div className="bg-info">M4FCFKP1-SEL</div>
        <BlackContainer
          data={{
            label: "54PT28",
            useClass: "greenTxt mt-2 ",
            unit: "kg/cm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "54PT29",
            useClass: "greenTxt  mt-2",
            unit: "kg/cm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <div className="bg-info">M4FCFKP2-SEL</div>
        <BlackContainer
          data={{
            label: "54PT01",
            useClass: "greenTxt mt-2 ",
            unit: "kg/cm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "54PT02",
            useClass: "greenTxt  mt-2",
            unit: "kg/cm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-68">
        <div className="d-flex">
          <div>
            <div className="greenSqure"></div>
            <div className="greenSqure mt-2"></div>
          </div>
          <div>
            {/* <div className="greenDot p-3 ml-2 mr-2"> M</div> */}
            <MotorCircleDigitalTag
              className={`dot digital-tag p-3 ml-2 mr-2 ${useColorStatus(
                "M4BHIL_MOP"
              )} `}
              label="M4BHIL_MOP"
              text="M"
            />
          </div>
          <div>
            <div className="redgrey-sqaure d-block"></div>
            <div className="redgrey-sqaure mt-2 d-block"></div>
          </div>
        </div>
        <BlackContainer
          data={{
            label: "_54PT12",
            useClass: "greenTxt  mt-2",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <div className="d-flex">
          <div>
            <div className="greenSqure"></div>
            <div className="greenSqure mt-2"></div>
          </div>
          <div>
            <div className="greenDot p-3 ml-2 mr-2"> M</div>
          </div>
          <div>
            <div className="redgrey-sqaure d-block"></div>
            <div className="redgrey-sqaure mt-2 d-block"></div>
          </div>
        </div>
        <BlackContainer
          data={{
            label: "_54PT13",
            useClass: "greenTxt  mt-2",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-70">
        <div className="d-flex">
          <div>
            <div className="greenSqure"></div>
            <div className="greenSqure mt-2"></div>
          </div>
          <div>
            <div className="greenDot p-3 ml-2 mr-2"> M</div>
          </div>
          <div>
            <div className="redgrey-sqaure d-block"></div>
            <div className="redgrey-sqaure mt-2 d-block"></div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-71 ">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "53RT19",
              useClass: "greenTxt mt-2 ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "53RT27",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "53RT20",
            useClass: "greenTxt mx-auto mt-3",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "53RT22",
              useClass: "greenTxt mt-2 ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "53RT21",
              useClass: "greenTxt mx-auto mt-2 ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "482BI1_WI",
            useClass: "greenTxt mx-auto mt-2 ",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-72 ">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "51RT17",
              useClass: "greenTxt mt-2 ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "51RT16",
              useClass: "greenTxt mx-auto mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "51RT18",
            useClass: "greenTxt mx-auto mt-3",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "51RT20",
              useClass: "greenTxt mt-2 ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "51RT19",
              useClass: "greenTxt mx-auto mt-2 ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "481BI1_WI",
            useClass: "greenTxt mx-auto mt-2 ",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-73">
        <div className="text-white ml-3 position-absolute">FKP BF</div>
        <div className="containerImage text-center mt-3">
          <div>
            <div className="greenSqure mt-1"></div>
            <div className="greenSqure mt-2"></div>
          </div>
          {/* <span className="greenDot p-3 mt-3"> M</span> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 mt-3 ${useColorStatus(
              "M4FCDCRF"
            )} `}
            label="M4FCDCRF"
            text="M"
          />
        </div>
        <div className="connector-icon mt-2 ">
          {/* <span className="greenDot p-3"> M</span> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("M4FCDCF")} p-3`}
            label="M4FCDCF"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-74">
        <div className="text-white ml-3  position-absolute">FCP BF</div>
        <div className="containerImage text-center mt-3">
          <span className="greenDot p-3 mt-5"> M</span>
        </div>
        <div className="connector-icon mt-2">
          <span className="greenDot p-3"> M</span>
        </div>
      </div>

      <div className="CGRnBox mt-2 ml-2 position-relative single-text-75">
        <div className="text-white position-absolute single-text-a">
          Classifier gear oil unit
        </div>
        <div className="d-flex ml-4">
          <div>
            <span className={`dot ${useColorStatus("M4SEPRFAN")} p-3 mt-2`}>
              M
            </span>
            <div className="text-white ">FAN</div>
          </div>
          <div className="ml-3">
            <span className={`dot ${useColorStatus("M4SEPOP")} p-3 mt-2`}>
              M
            </span>
            <div className="text-white ">OIL PUMP</div>
          </div>
        </div>
        <BlackContainer
          data={{
            label: "_54RT05",
            useClass: "greenTxt ml-4 mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="CGRnBox mt-2 ml-2 position-relative single-text-76">
        <div className="text-white position-absolute single-text-a">
          Dome Valve
        </div>

        <div className="text-right">TO SF BIN</div>
        <div className="d-flex">
          {/* <span className="grayDot p-3 mt-2"> M</span> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 mt-2 ${useColorStatus("_54PT14")} `}
            label="_54PT14"
            text="M"
          />
          <div className="ml-2 mr-2">
            <div className="text-white">TO FC BIN</div>
            <div className="text-white mt-3">TO SF BIN</div>
          </div>

          <div className="mr-3">
            <div className="redgrey-sqaure mb-2 d-block"></div>
            <div className="greenSqure"></div>
          </div>
          <div className="">
            <div className="greenSqure mb-2"></div>
            <div className="redgrey-sqaure d-block"></div>
          </div>
        </div>
      </div>
      <div className="yellowline-Vr  position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Hr  position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-29"></div>
      <div className="yellowline-Vr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Hr  position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="d-flex position-absolute single-text-77">
        <div>
          <BlackContainer
            data={{
              label: "KL_451DQ1_BIN_WT",
              useClass: "greenTxt mt-2 mr-3",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="grn-gry-img"></div>
        <div>
          <BlackContainer
            data={{
              label: "_54GT08",
              useClass: "greenTxt  mt-2  ml-3",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-79">
        <div className="greenSqure mt-2"></div>
        <div className="redgrey-sqaure mt-2"></div>
      </div>
      <div className="position-absolute single-text-80">
        <div className="greenSqure mt-2"></div>
        <div className="redgrey-sqaure mt-2"></div>
      </div>
      <div className="position-absolute single-text-81">
        <div className="greenSqure mt-2"></div>
        <div className="redgrey-sqaure mt-2"></div>
      </div>
      <div className="position-absolute single-text-82">
        <div className="redgrey-sqaure mt-2 d-block"></div>{" "}
        <div className="redgrey-sqaure mt-2 d-block"></div>{" "}
        <div className="redgrey-sqaure mt-2 d-block"></div>
        <div className="redgrey-sqaure mt-2 d-block"></div>
      </div>

      <div className="position-absolute single-text-83">
        <BlackContainer
          data={{
            label: "_54KW05",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-94">
        <BlackContainer
          data={{
            label: "54DP03_AIC",
            useClass: "greenTxt mt-2 ",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-84">
        <BlackContainer
          data={{
            label: "_54AS05",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="connector-both-side-2 position-absolute single-text-86">
        <div className="greenDot p-3">M</div>
      </div>
      <div className="position-absolute single-text-87">
        <div className="d-flex">
          <div className="mr-1">
            <div>CYCRF1</div>
            <div className="grayDot p-3">M</div>
          </div>
          <div className="mr-1">
            <div>CYCRF2</div>
            <div className="grayDot p-3">M</div>
          </div>
          <div className="mr-1">
            <div>RMFKP1</div>
            <div className="grayDot p-3">M</div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-88">
        <div className="redgrey-sqaure mt-2"></div>
        <div className="greenSqure mt-2"></div>
      </div>
      <div className="position-absolute single-text-89">
        <div className="redgrey-sqaure mt-2 d-block"></div>
        <div className="redgrey-sqaure mt-2"></div>
      </div>
      <div className="position-absolute single-text-90">
        <div className="redgrey-sqaure mt-2 d-block"></div>
        <div className="redgrey-sqaure mt-2"></div>
      </div>
      <div className="position-absolute single-text-91">
        <div className="redgrey-sqaure mt-2 d-block"></div>
        <div className="redgrey-sqaure mt-2"></div>
      </div>
      <div className="CGRnBox mt-2 ml-2 position-relative single-text-92">
        <div className="text-white position-absolute single-text-a">
          O/L - I/L TE
        </div>

        <BlackContainer
          data={{
            label: "KL_451DQ1_BIN_WT",
            useClass: "greenTxt ml-4 mt-4",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="connector-both-side-2 position-absolute single-text-93">
        <div className="greenDot p-3">M</div>
      </div>
      <div className="yellowline-Hr  position-absolute line-36"></div>
      <div className="yellowline-Hr  position-absolute line-37"></div>
      <div className="yellowline-Vr upArrow position-absolute line-38"></div>
      <div className="yellowline-Vr upArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="single-text-95 position-absolute">
        <div className="d-flex ">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
        <div className="d-flex mt-1">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
      </div>
      <div className="single-text-96 position-absolute">
        <div className="d-flex ">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
        <div className="d-flex mt-1">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
      </div>
      <div className="single-text-97 position-absolute">
        <div className="d-flex ">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
        <div className="d-flex mt-1">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
      </div>
      <div className="single-text-98 position-absolute">
        <div className="d-flex ">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
        <div className="d-flex mt-1">
          <div className="greenSqure"></div>
          <div className="greenSqure ml-2"></div>
        </div>
      </div>
      <div className="yellowline-Hr rightarrow position-absolute line-41"></div>
      <div className="single-text-99 position-absolute bg-info p-1">
        From Pre-Heater
        <div className="text-center"> 1 & 2 </div>
      </div>
      <div className="single-text-100 position-absolute ">BIN2</div>
      <div className="single-text-101 position-absolute ">BIN1</div>
      <div className="single-text-102 position-absolute ">
        <div className="bg-white width-fit-content px-2 circle-group">
          <span className="greenSqure"></span>
          <span className="c-text"> c</span>
        </div>
      </div>
      <div className="single-text-103 position-absolute ">
        <div className="pipeVr"></div>
      </div>
      <div className="pipeHr position-absolute pipe-43"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-45"></div>
      <div className="d-flex position-absolute single-text-105 text-white  ">
        <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block"></i>
          <i className="fa-solid fa-caret-up d-block"></i>
        </div>
      </div>
      <div className="single-text-106 position-absolute bg-info ">
        GRAINDING
      </div>
      <div className="single-text-107 position-absolute ">M4SEP</div>
      <div className="single-text-108 position-absolute ">54MD01</div>
      <div className="single-text-109 position-absolute ">VRM SIDE</div>
      <div className="single-text-110 position-absolute ">KILN SIDE</div>

      <div className="single-text-111 position-absolute ">HD PRES</div>
      <div className="single-text-112 position-absolute ">DP</div>
      <div className="single-text-113 position-absolute ">HD PRES</div>
    </div>
  );
};
