import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../index";
export const CoalMillJafrabad = () => {
  return (
    <div className="CoalMillJafrabad w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "BI050_RTD1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage mt-1 pt-2 ">
            <BlackContainer
              data={{
                label: "462LC035_A01W01",
                useClass: "greenTxt mt-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PETCOKE BI050",
              }}
            />
            <BlackContainer
              data={{
                label: "BI050_RTD2",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "BI030_RTD1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage mt-1 pt-2 text-center">
            <BlackContainer
              data={{
                label: "462LC055_A01W01",
                useClass: "greenTxt mt-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MOZ BI030",
              }}
            />
            <BlackContainer
              data={{
                label: "BI030_RTD2",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex ">
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WF065 PID",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <div>
              <BlackContainer
                data={{
                  label: "462WF065_A01S01",
                  useClass: "greenTxt mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "462WF065_N01I01",
                  useClass: "greenTxt mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "WF065_MSP",
                  useClass: "greenTxt mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "462WF065PID_SPA",
                  useClass: "greenTxt mt-2",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "462WF065PID_SPM",
                  useClass: "greenTxt mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="box-1 p-1 align-self-baseline">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WF045 PID",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <div>
              <BlackContainer
                data={{
                  label: "462WF045_N01I01",
                  useClass: "greenTxt mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "462WF045_A01S01",
                  useClass: "greenTxt mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "462WF045PID_SPM",
                  useClass: "greenTxt mt-2",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "462WF045_A01F01",
                  useClass: "greenTxt mt-2",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex ">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
          text={{ useClass: "text-dark", label: "WF065" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "WF045" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
      </div>
      <div className="box-1 p-1 position-absolute single-text-4">
        <BlackContainer
          data={{
            label: "261WF150_SC_1_A01I01",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BC070" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-6 d-flex ">
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP_FFFD_RATIO",
            }}
          />
          <div className=" gap-1 mt-1">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TOT FEED SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "COAL_MILL TOTAL_FEED_SP",
                  useClass: "greenTxt ml-2",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "WF065 RATIO",
                }}
              />
              <BlackContainer
                data={{
                  label: "_462WF065_SP_RATIO",
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
                  label: "TOTAL FEED",
                }}
              />
              <BlackContainer
                data={{
                  label: "COAL_MILL_TOTAL_FEED",
                  useClass: "greenTxt ml-2",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="box-1 p-1 align-self-baseline">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MD152 Paramtrs",
            }}
          />
          <div className=" gap-1 mt-1">
            <div className="d-flex">
              <BlackContainer
                data={{
                  label: "462MD152_U01I01",
                  useClass: "greenTxt mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "462MD152PID_SPM",
                  useClass: "greenTxt mt-2 ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <BlackContainer
                data={{
                  label: "462MD152_N01S01",
                  useClass: "greenTxt mt-2",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "462MD152_U01S01",
                  useClass: "greenTxt mt-2 ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bigContainer position-absolute single-text-7 text-center">
        <BlackContainer
          data={{
            label: "462RM100_N05P01",
            useClass: "greenTxt mt-5",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "COAL MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "462MD140_N29V01",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462RM100_N06V01",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "HY_A01P01",
            useClass: "greenTxt mt-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "HY_A01L01",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 pt-2 pl-1",
            label: "462CN441",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "462CN441_N01T01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462CN441_N01P01",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462CN441_N01P02",
            useClass: "greenTxt mt-5",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "RF442",
          }}
        />
        <MotorCircleDigitalTag
          className={` circle-img c-grey-img-2 ml-2`}
          label=""
        />
      </div>
      <div className="position-absolute single-text-11 mx-auto">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: "CV445" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
        <BlackContainer
          data={{
            label: "462CV445_M01I01",
            useClass: "greenTxt mt-2 ml-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "_462MD140_SPD_MANSP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462MD140_U01I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462MD140_U01S01",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462MD160_ROL_UP_CTR",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "462MD140PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462RM100_N01T01",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462RM100_N02P01",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MILL_MOTOR_KW",
              useClass: "greenTxt mt-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "462MD140_N02S02",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WS WI130",
            }}
          />
          <BlackContainer
            data={{
              label: "462WI130_VFD_AMP",
              useClass: "greenTxt mt-1 ml-5",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "462WI130_N01F02",
                useClass: "greenTxt mt-1",
                unit: "m³/h",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "462WI130_VFD_SPEED",
                useClass: "greenTxt mt-1 ml-3",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "462WI130PID_SPM",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "CLM_WTR_CNSMPTN_TOT",
                useClass: "greenTxt mt-1 ml-3",
                unit: "m³",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex ">
            <BlackContainer
              data={{
                label: "462WI130PID_SPA",
                useClass: "greenTxt mt-1",
                unit: "m³/h",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "COAL_MILL_WATER_CUM_TOT",
                useClass: "greenTxt mt-1 ml-3",
                unit: "m³",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "462FN450_U01I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "na",
              useClass: "greenTxt mt-2",
              unit: "na",
              unitColor: "unitColor",
            }}
          /> */}
          <BlackContainer
            data={{
              label: "462FN450PID_SPM",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462FN450PID_SPA",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "462FN450_N13V01",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462FN450_N14V02",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462FN450_N01S01",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "462TV452_Y01Z01",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462WF045PID_SPA",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-83 position-absolute single-text-13">
        <div className="d-flex mt-3 ml-4">
          <div>
            <BlackContainer
              data={{
                label: "462BF300_N02P01",
                useClass: "greenTxt mt-1",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "BF300_CAL_DP_NEW",
                useClass: "greenTxt mt-2",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "462BF300_D010P42",
                useClass: "greenTxt mt-1",
                unit: "kg/cm²",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF310",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF312",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF309",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF311",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF307",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF308",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF305",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "RF306",
              }}
            />
            <div className="circle-img c-grey-img-2"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15 ">
        <BlackContainer
          data={{
            label: "462BF300_N01T01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462BF300_N03T01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462BF300_N04P01",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462RM100_N04P01",
            useClass: "greenTxt mt-4",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Kiln Res. 90",
          }}
        />
        <BlackContainer
          data={{
            label: "Coal_Res90",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Hyd Pump op cnt",
          }}
        />
        <BlackContainer
          data={{
            label: "HY110_1_OP_COUNT",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462RM100_N03T01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462COAL_MILL_LU_SEAL_TMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLM STOPPAGE COUNTE",
          }}
        />
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "CLM_STOPPAGE_COUNT",
              useClass: "greenTxt mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462FN125_N01P01",
              useClass: "greenTxt mt-3",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462FN125_M01I01",
              useClass: "greenTxt mt-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462LQ120A_N04X",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "BH_CO_HIGH_TIMER",
              useClass: "greenTxt ",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "BAGHOUSE OUTLET ANALYSER(02, C0)",
            }}
          />
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "462AM495_A01A02",
                useClass: "greenTxt mt-3",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "462AM495_A01A01",
                useClass: "greenTxt ml-4 mt-3",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MILL SP POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "COALMILL_SP_POWER",
              useClass: "greenTxt mt-2",
              unit: "kW/t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMBHSTK_TEMP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CMBH STK TEMP",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "462BF300_N03T02",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462BF300_N05P01",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "462LD390PID_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462LD390_Y01Z01",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "462FN400PID_SPM",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462FN400_U01I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "462FN400_N01S01",
                useClass: "greenTxt mt-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "462FN400_U01S01",
                useClass: "greenTxt ml-3",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "LD405",
            }}
          />
          <BlackContainer
            data={{
              label: "462LD405PID_SPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462LD405_Y01Z01",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "462AM420_A01A01",
            useClass: "greenTxt mt-2",
            unit: "mg/Nm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        text={{ useClass: "text-dark mx-auto", label: "SC505" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        text={{ useClass: "text-dark mx-auto", label: "SC500" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-21"
        text={{ useClass: "text-dark mx-auto", label: "SG510" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-22"
        text={{ useClass: "text-dark mx-auto", label: "SC520" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-23"
        text={{ useClass: "text-dark mx-auto", label: "SC520" }}
      />
      <div className="position-absolute single-text-24 d-flex">
        <div className="containerImage text-center mt-1 pt-2 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PETCOKE B1600",
            }}
          />
          <BlackContainer
            data={{
              label: "462LC604_N01W01",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center mt-1 pt-2 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PETCOKE B1550",
            }}
          />
          <BlackContainer
            data={{
              label: "462LC554_N01W01",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="containerImage text-center mt-1 pt-2 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "AUS/MOZ COAL BI700",
            }}
          />
          <BlackContainer
            data={{
              label: "462LC704_N01W01",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="containerImage text-center mt-1 pt-2 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PET COKE B1750",
            }}
          />
          <BlackContainer
            data={{
              label: "462LC754_N01W01",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "RF525",
            }}
          />
          <div className="circle-img c-grey-img-2"></div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "RF526",
            }}
          />
          <div className="circle-img c-grey-img-2"></div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "RF535",
            }}
          />
          <div className="circle-img c-grey-img-2"></div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "RF536",
            }}
          />
          <div className="circle-img c-grey-img-2"></div>
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <BlackContainer
          data={{
            label: "462SC505_M01I01",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462SC500_M01I01",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <BlackContainer
          data={{
            label: "462SC520_M01I01",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462SC530_M01I01",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "462SC510_M01I01",
          useClass: "greenTxt position-absolute single-text-28",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-29 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1",
              label: "B1700 BOTT TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "BI700_RTD_BOTTOM",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto mt-1",
              label: "TOTAL BIN WT",
            }}
          />
          <BlackContainer
            data={{
              label: "TOTAL_BIN_WEIGHT",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <div className="border">
          <div className="border p-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SER LUB SYS",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "462LQ153_N01P01",
              useClass: "greenTxt ml-3 mt-2",
              unit: "kg/cm²",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462LQ153_N01P01",
              useClass: "greenTxt mt-2 ml-3 mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border">
          <div className="border p-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "BRG LUB",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "SEP_GREASE_SPRAY_ONTIME",
              useClass: "greenTxt mt-2 ml-3",
              unit: "min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SEP_GREASE_SPRAY_OFFTIME",
              useClass: "greenTxt mt-2 ml-3 mb-1",
              unit: "min",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-2 position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "462LD415_Y01Z01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462LD415PID_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462LD415PID_SPA",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border position-absolute single-text-32">
        <div className="border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BRG LUB",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "HY_A01P11",
            useClass: "greenTxt mt-2 ml-2 mb-1 mr-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-33 "
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "M",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "SF090" }}
      />
      <div className="position-absolute single-text-34 d-flex">
        <BlackContainer
          data={{
            label: "MILLFEED_DP_PID_SPA",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462SF90_CURRENT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "462MD140_ONDLY",
            useClass: "greenTxt",
            unit: "min",
            unitColor: "unitColor",
          }}
        />
        <div className="pole-shape mt-2 position-absolute">
          <MotorCircleDigitalTag
            className={`dot mt-2 grey-color`}
            label=""
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN",
            }}
          />
          <BlackContainer
            data={{
              label: "462AM495_1_A01A02",
              useClass: "greenTxt ml-3",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CALC",
            }}
          />
          <BlackContainer
            data={{
              label: "BI550_GAS_ANA_CO",
              useClass: "greenTxt ml-3",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CALC",
            }}
          />
          <BlackContainer
            data={{
              label: "BI700_GAS_ANA_CO",
              useClass: "greenTxt ml-3",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN",
            }}
          />
          <BlackContainer
            data={{
              label: "BI750_GAS_ANA_CO",
              useClass: "greenTxt ml-3",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Hr   position-absolute line-7"></div>
      <div className="yellowline-Vr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
    </div>
  );
};
