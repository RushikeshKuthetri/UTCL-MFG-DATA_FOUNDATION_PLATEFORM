import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, PipeWithCircles } from "../../../../index";
export const JettyTransportOldGujaratLine2 = () => {
  return (
    <div className="JettyTransportOldGujaratLine2 w-100 h-100 position-relative">
      <div className="squareplustri text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CLINKER SILO",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PETER SILO",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X1J03")}`,
          secondCircleText: "M",
          secondCircleLabel: "X1J03",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X1J02")}`,
          secondCircleText: "M",
          secondCircleLabel: "X1J02",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U2U04" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("U2U04")}`,
          secondCircleText: "M",
          secondCircleLabel: "U2U04",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "X1J05" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X1J05")}`,
          secondCircleText: "M",
          secondCircleLabel: "X1J05",
        }}
      />
      <div className="position-absolute single-text-3 mt-2">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("U4U01")} `} label="U4U01" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto mr-2",
            label: "U4U01",
          }}
        />
      </div>
      <div className="position-absolute single-text-4">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("U4U02")} `} label="U4U02" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto mr-2",
            label: "U4U02",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("U4U03")} `} label="U4U03" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto mr-2",
            label: "U4U03",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6 d-flex">
        <div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "P45",
              }}
            />
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X1P45_MR")}`} label="X1P45_MR" />
            </div>
          </div>
          <div className="squareplustri d-flex  mt-1">
            <div className="d-flex circle">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-2",
                  label: "P44",
                }}
              />
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("X1P44_MR")}`} label="X1P44_MR" />
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "P85",
              }}
            />
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X1P85_MR")}`} label="X1P85_MR" />
            </div>
          </div>
          <div className="squareplustri d-flex  mt-1">
            <div className="d-flex circle">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-2",
                  label: "P84",
                }}
              />
              <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("X1P84_MR")}`} label="X1P84_MR" />
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
            </div>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "JETTY_CLINKER_TPH",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "JETTY_CLINKER_TOT",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-7">
        <div className="text">
          <BlackContainer
            data={{
              label: "IBAU 1 OUTER SILO COUNTINUOUS LEVEL 1 IN TON  ",
              useClass: "greenTxt",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "OUTER SILO",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-8">
        <div className="text">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "INNER",
            }}
          />
          <BlackContainer
            data={{
              label: "IBAU1 INNER SILO CONTINUOUS LEVEL IN TON",
              useClass: "greenTxt",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "L2L03_W1",
              useClass: "greenTxt mt-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "L1L03_W1",
              useClass: "greenTxt mt-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L3P20_MR")}`} label="L3P20_MR" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1P10_MR")}`} label="L1P10_MR" />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-11">
        <div className="text">
          <BlackContainer
            data={{
              label: "IBAU 2  COUNTINUOUS LEVEL  IN TON   ",
              useClass: "greenTxt",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "IBAU-II",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <PipeWithCircles parentDivClass="hpipecircle " />
        <div className="d-flex mt-2 ml-4">
          <div>
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L3U05M1_MR")}`} label="L3U05M1_MR" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "M1",
              }}
            />
          </div>
          <div className="ml-3">
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L3U05M2_MR")}`} label="L3U05M2_MR" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "M2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <PipeWithCircles parentDivClass="hpipecircle " />
        <div className="connector-icon ml-3 mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1U12_MR")}`} label="L1U12_MR" />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <PipeWithCircles parentDivClass="hpipecircle " />
        <div className="connector-icon ml-3 mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1U11_MR")}`} label="L1U11_MR" />
        </div>
      </div>
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-15 ${useColorStatus("L1U06_MR")}`} label="L1U06_MR" />
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-16 ${useColorStatus("L1U05_MR")}`} label="L1U05_MR" />
      <div className="position-absolute single-text-17">
        <PipeWithCircles parentDivClass="hpipecircle " />
        <div className="d-flex mt-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-1",
                label: "U02",
              }}
            />
            <MotorCircleDigitalTag className={` circle-img digital-tag ${useFanImgTagsColorStatus("L3U02_MR")}`} label="L3U02_MR" />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag className={` circle-img ml-1 digital-tag ${useFanImgTagsColorStatus("L3U02_MR")}`} label="L3U02_MR" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-1",
                label: "U03",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("X1U10_MR")} `} label="X1U10_MR" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-1",
            label: "U10",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X1U06_INV_RUN")}`,
          firstCircleText: "M",
          firstCircleLabel: "X1U06_INV_RUN",
        }}
        text={{ useClass: "text-dark", label: "U06" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X1U07_INV_RUN")}`,
          firstCircleText: "M",
          firstCircleLabel: "X1U07_INV_RUN",
        }}
        text={{ useClass: "text-dark", label: "U07" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <MotorCircleDigitalTag className={`square digital-tag position-absolute pipe-7 ${useColorStatus("X1U15_MR")} `} label="X1U15_MR" text="U15" />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X1J15_INV_RUN")}`,
          firstCircleText: "M",
          firstCircleLabel: "X1J15_INV_RUN",
        }}
        text={{ useClass: "text-dark", label: "J15" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X5J20_RUN")}`,
          firstCircleText: "",
          firstCircleLabel: "X5J20_RUN",
        }}
        text={{ useClass: "text-dark", label: "X5J20" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "J16" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X5J16_MR")}`,
          secondCircleText: "M",
          secondCircleLabel: "X5J16_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "J09" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X1J09_MR")}`,
          secondCircleText: "M",
          secondCircleLabel: "X1J09_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X1J09_FBINT04")}`,
          secondCircleText: "M",
          secondCircleLabel: "X1J09_FBINT04",
        }}
      />
      <div className="position-absolute single-text-19 d-flex">
        <BlackContainer
          data={{
            label: "X1U07_I1",
            useClass: "greenTxt mt-4",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "JETTY_CEMENT_TPH",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "JETTY_CLINKER_TOT",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "X1U06_I1",
            useClass: "greenTxt",
            unit: "apm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag mt-1 ${useColorStatus("L3P35_MR")}`} label="L3P35_MR" />
          <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        </div>
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag mt-1 ${useColorStatus("L1X28_MR")}`} label="L1X28_MR" />
          <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="box-1 p-1 d-flex">
          <MotorCircleDigitalTag className={`line-circle digital-tag  ${useColorStatus("L2P25_MR")} `} label="L2P25_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L2P26_MR")} `} label="L2P26_MR" />
        </div>
        <div className="box-1 p-1 d-flex">
          <MotorCircleDigitalTag className={`line-circle digital-tag  ${useColorStatus("L3P22_MR")} `} label="L3P22_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L3P23_MR")} `} label="L3P23_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L3P24_MR")} `} label="L3P24_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L3P25_MR")} `} label="L3P25_MR" />
        </div>
        <div className="box-1 p-1 d-flex">
          <MotorCircleDigitalTag className={`line-circle digital-tag  ${useColorStatus("L1X25_MR")} `} label="L1X25_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L1X26_MR")} `} label="L1X26_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L1X27_MR")} `} label="L1X27_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L1X29_MR")} `} label="L1X29_MR" />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("L1X30_MR")} `} label="L1X30_MR" />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "IS BLOWER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "OS BLOWER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "IB-2 BLOWER",
          }}
        />
      </div>
      <div className="img-114 position-absolute single-text-23"></div>
      <div className="position-absolute single-text-25 d-flex">
        <BlackContainer
          data={{
            label: "X1J15_I1",
            useClass: "greenTxt",
            unit: "apm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SL_BOOM_POSITION",
            useClass: "greenTxt mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "X1J16_I1",
            useClass: "greenTxt",
            unit: "apm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "X1J16_TOT",
            useClass: "greenTxt mt-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "X1J16_TOT",
            useClass: "greenTxt mt-2",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <MotorCircleDigitalTag className={`text-dark p-1 digital-tag ${useColorStatus("X1BB1_CLKR_RUN")}`} text="SL CLKR MODE RUN" label="X1BB1_CLKR_RUN" />
        <MotorCircleDigitalTag className={`text-dark p-1 digital-tag ${useColorStatus("X1BB1_CEM_RUN")}`} text="SL CEM MODE RUN" label="X1BB1_CEM_RUN" />
        <MotorCircleDigitalTag className={`text-dark p-1 digital-tag ${useColorStatus("SL_BYPASS_MODE")}`} text="SL BYPASS" label="SL_BYPASS_MODE" />
      </div>
      <div className="position-absolute single-text-28">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M20 MTR POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "M20_MTR_POWER",
              useClass: "greenTxt ml-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M30 MTR POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "M30_MTR_POWER",
              useClass: "greenTxt ml-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M40 MTR POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "M40_MTR_POWER",
              useClass: "greenTxt ml-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "JETTY RS-1 RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "RS1_RH",
              useClass: "greenTxt ml-2",
              unit: "hrs",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "JETTY SL OLD RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "SL1_RH",
              useClass: "greenTxt ml-2",
              unit: "hrs",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <div className="stone1"></div>
        <div className="stone1"></div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-31 ",
          label: "TOWARDS C.MILL",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-32",
          label: "TOWARDS PACKER-5",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-33",
          label: "COAL STACKER RBC",
        }}
      />
      <div className=" position-absolute single-text-34 d-flex">
        <BlackContainer
          data={{
            label: "L2DV12_Z1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1DV12_Z1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X1J10_MRD")}`} label="X1J10_MRD" />
      </div>
      <div className="fiveside-shape position-absolute single-text-24"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-12"></div>
      <div className="yellowline-Vr   position-absolute line-13"></div>
      <div className="yellowline-Vr   position-absolute line-14"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-26"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Vr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
    </div>
  );
};
