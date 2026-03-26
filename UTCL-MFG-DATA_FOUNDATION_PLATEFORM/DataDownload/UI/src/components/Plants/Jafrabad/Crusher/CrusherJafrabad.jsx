import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  TransparentBoxWithGate,
} from "../../../index";
export const CrusherJafrabad = () => {
  return (
    <div className="jafrabad-crusher w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="img-114 position-absolute single-text-33"> </div>
      <div className="fiveside-shape position-absolute single-text-34"></div>
      <div className="single-text-1 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "B7 MOTOR TEMPERATURE",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <BlackContainer
            data={{
              label: "B_RTD140",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B_RTD170",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between my-1">
          <BlackContainer
            data={{
              label: "B_RTD150",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B_RTD180",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between my-1">
          <BlackContainer
            data={{
              label: "B_RTD160",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B_RTD190",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <BlackContainer
            data={{
              label: "B_RTD200",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B_RTD210",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-2 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "EQUIPMENTS RUN HOUR",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "B3 RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "B3_RUNHR",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "B7 RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "B7_RUNHR",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "B15 RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "B15_RUNHR",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "B7 IDLE RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "CRSHR_IDLE_HR",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BC1_RUN HR",
            }}
          />
          <BlackContainer
            data={{
              label: "bc1_run_hr",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-3 position-absolute d-flex border p-2">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "ADDITIVE",
            }}
          />
          <BlackContainer
            data={{
              label: "ADDITIVE_RUNHR",
              useClass: "greenTxt my-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B_FT230_ADDITIVE",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "LIME STONE",
            }}
          />
          <BlackContainer
            data={{
              label: "LIMESTONE_RUNHR",
              useClass: "greenTxt my-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B_FT230_LIMESTONE",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "SWEETNER",
            }}
          />
          <BlackContainer
            data={{
              label: "SWEETNER_RUNHR",
              useClass: "greenTxt my-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B_FT230_SWEETNER",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "TOTAL TONNAGE",
            }}
          />
          <BlackContainer
            data={{
              label: "B_FT230_DAY_TOT",
              useClass: "greenTxt my-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-4 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "B3 SCALPING FEEDER PARAMETER",
          }}
        />
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark my-1",
                label: "B3 ON/OFF COUNT",
              }}
            />
            <BlackContainer
              data={{
                label: "B3_OPR_COUNT",
                useClass: "greenTxt my-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 mb-2",
                label: "B3 VFD KW",
              }}
            />
            <BlackContainer
              data={{
                label: "B3_KW",
                useClass: "greenTxt my1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark my-1",
                label: "B3 PID AUTO SP",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark my-1",
                label: "B3 VFD RPM",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark my-1",
                label: "B3 VFD CURRENT",
              }}
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "B3_SCALPING_VFD_SPA",
                useClass: "greenTxt my-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "B3_VFD_RPM_FB",
                useClass: "greenTxt my-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "B3_VFD_current",
                useClass: "greenTxt my-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-5 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "BW < 25TPH",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "COUNTER",
            }}
          />
          <BlackContainer
            data={{
              label: "B_FT230_LES_THAN_25_COUNTER",
              useClass: "greenTxt mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "RUNHRS",
            }}
          />
          <BlackContainer
            data={{
              label: "B_FT230_LESTHAN_25_RUNHOURS",
              useClass: "greenTxt mb-1",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "B7 HT MOTOR TIME",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "20 MINS DELAY TMR",
            }}
          />
          <BlackContainer
            data={{
              label: "B7_TIMER2",
              useClass: "greenTxt mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "STOP TO STRT TMR",
            }}
          />
          <BlackContainer
            data={{
              label: "B7_STOP_TIMER",
              useClass: "greenTxt mb-1",
              unit: "min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "B7 WAIT TIME",
            }}
          />
          <BlackContainer
            data={{
              label: "B7_WAIT",
              useClass: "greenTxt mb-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "B7 STOPPAGE COUNTER",
            }}
          />
          <BlackContainer
            data={{
              label: "CRUSHER_STOP_COUNTER",
              useClass: "greenTxt mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-7 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "B7 CRUSHER BEARING TEMP",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "B7 BRG TEMP-DE",
            }}
          />
          <BlackContainer
            data={{
              label: "B_RTD120",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "B7 BRG TEMP-NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "B_RTD130",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-8 position-absolute loadingtruck"></div>
      <div className="single-text-9 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "AUTO UNLDING CURRENT SP",
          }}
        />
        <BlackContainer
          data={{
            label: "B3_CUR1",
            useClass: "greenTxt mx-auto mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="fiveside-shape single-text-10 position-absolute text-center pt-3 pl-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DUMP HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "DOOR SENSOR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "B1",
          }}
        />
      </div>
      <div className="single-text-11 position-absolute img-109 "></div>
      <div className="single-text-12 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "B7 CURRENT",
          }}
        />
        <BlackContainer
          data={{
            label: "B_IT100",
            useClass: "greenTxt my-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="single-text-13 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />
      <div className="single-text-14 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "B10 BAG FILTER",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <BlackContainer
            data={{
              label: "B12_VFD_RPM_SPA",
              useClass: "greenTxt mb-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C_PT1010",
              useClass: "greenTxt mb-1 ml-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1 ">
          <BlackContainer
            data={{
              label: "B12_VFD_RPM_FB",
              useClass: "greenTxt mb-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "B12_VFD_CURRENT_FB",
              useClass: "greenTxt mb-1 ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-15 position-absolute">
        <BlackContainer
          data={{
            label: "REC_CT_VFD_CURRENT",
            useClass: "greenTxt mb-1 ml-2",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "REC_DISTANCE",
            useClass: "greenTxt mb-1 ml-2",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-16 position-absolute border text-center p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "B15 RBC PARA",
          }}
        />
        <BlackContainer
          data={{
            label: "B_ST120",
            useClass: "greenTxt mb-1 ",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "B_IT110",
            useClass: "greenTxt mb-1 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-17 position-absolute text-center p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "STACKER S PILE COUNTER",
          }}
        />
        <BlackContainer
          data={{
            label: "S_TOT_PILE",
            useClass: "greenTxt mb-1 ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "STACKER N PILE COUNTER",
          }}
        />
        <BlackContainer
          data={{
            label: "B12_CURRENT",
            useClass: "greenTxt mb-1 ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-18  position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "B10",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-19 position-absolute">
        <BlackContainer
          data={{
            label: "CR_SP_PWR",
            useClass: "greenTxt mb-1 ",
            unit: "kW/t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-20 position-absolute border text-center p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "CRUSHER IDLING",
          }}
        />
        <BlackContainer
          data={{
            label: "B15_IDLE_TIME",
            useClass: "greenTxt mb-1 ",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="single-text-21 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />
      <div className="single-text-22 position-absolute border text-center p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "C1 RBC PARMTR",
          }}
        />
        <BlackContainer
          data={{
            label: "C1_CURRENT_DB",
            useClass: "greenTxt mb-1 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "B_ST130",
            useClass: "greenTxt mb-1 ",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark my-1",
              label: "STACKR DIST",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark my-1",
              label: "RECLMR DIST",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark my-1",
              label: "STACKR CURRENT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark my-1",
              label: "RAW MILL LSF",
            }}
          />
          <BlackContainer
            data={{
              label: "RML_LSF",
              useClass: "greenTxt my-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt my-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RECL_DISTANCE",
              useClass: "greenTxt my-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "STKR_AMPS",
              useClass: "greenTxt my-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CBA_BELT_WEIGHER",
          useClass: "greenTxt  single-text-24 position-absolute ",
          unit: "t/h",
          unitColor: "unitColor",
        }}
      />

      <BlackContainer
        data={{
          label: "B_PLC_ROOM_TEMP",
          useClass: "greenTxt single-text-25 position-absolute",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-26 position-absolute ">
        <div className="box-1"></div>
      </div>
      <div className="single-text-27  position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="single-text-28 position-absolute">
        <BlackContainer
          data={{
            label: "BC1_RBC_CURRENT",
            useClass: "greenTxt mb-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "C19_CURRENT",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-29 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "B25",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-30 position-absolute text-center">
        <BlackContainer
          data={{
            label: "C2_EMPTY_RUN",
            useClass: "greenTxt mb-1 ",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BOOM HEIGHT",
          }}
        />
        <BlackContainer
          data={{
            label: "CYL_POS_EU",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RADAR_DIST_EU",
            useClass: "greenTxt mt-4",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "LIME STONE",
          }}
        />
      </div>
      <div className="single-text-31 position-absolute ">
        <BlackContainer
          data={{
            label: "B_FT230",
            useClass: "greenTxt my-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-32 position-absolute hpipecircle">
        <div className={`dot grey-color`} text="M" />
      </div>
    </div>
  );
};
