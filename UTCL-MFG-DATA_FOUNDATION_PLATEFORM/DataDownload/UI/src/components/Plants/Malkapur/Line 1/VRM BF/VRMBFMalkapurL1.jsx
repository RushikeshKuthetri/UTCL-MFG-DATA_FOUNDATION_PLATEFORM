import { TextContainerWithWrapWord, MotorCircleDigitalTag, PipeWithCircles, BlueContainerWithDynamicBorder, MimicCaret, BlackContainer } from "../../../../index";
import { useColorStatus, useFanImgTagsColorStatus, useCaretColorStatus, useBorderTagsColorStatus, useImgColorStatus } from "../../../../../utils";
export const VRMBFMalkapurL1 = () => {
  return (
    <div className="VRMBFMalkapurL1 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="d-flex gap-1">
          <BlackContainer
            data={{
              label: "BH/STK_HOP_1_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/STK_HOP_2_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/STK_HOP_3_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/STK_DG_1_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/STK_DG_2_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/STK_DG_3_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="squareplustri mt-2 pt-3 d-flex flex-column">
          <div className="d-flex gap-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "LINE-1 SIDE CASING",
              }}
            />
            <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("BH/TP")} `} label="BH/TP" />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "DG SIDE CASING",
              }}
            />
          </div>
          <div className="d-flex gap-1 justify-content-center">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H01",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H1/ANN")}`} label="EA161H1/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H02",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H2/ANN")}`} label="EA161H2/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H03",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H3/ANN")}`} label="EA161H3/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H04",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H4/ANN")}`} label="EA161H4/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H05",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H5/ANN")}`} label="EA161H5/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H06",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H6/ANN")}`} label="EA161H6/ANN" />
            </div>
          </div>
          <div className="circle-1 d-flex flex-column">
            <div className="d-flex gap-2">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM156",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1   digital-tag ${useFanImgTagsColorStatus("EBM156/M")}`} label="EBM156/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM167",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("EBM167/M")}`} label="EBM167/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM128",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM128/M")}`} label="HBM128/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM129",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM129/M")}`} label="HBM129/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM131",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("HBM131/M")}`} label="HBM131/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM177",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("EBM177/M")}`} label="EBM177/M" />
              </div>
            </div>
            <div className="d-flex gap-2">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM157",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("EBM157/M")}`} label="EBM157/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM168",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1 digital-tag ${useFanImgTagsColorStatus("EBM168/M")}`} label="EBM168/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM158",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("EBM158/M")}`} label="EBM158/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM130",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM130/M")}`} label="HBM130/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1 ",
                    label: "HBM132",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM132/M")}`} label="HBM132/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM177A",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("EBM177_A/M")}`} label="EBM177_A/M" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-2">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "EBM165" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("EBM165/EBM165")}`,
            secondCircleLabel: "EBM165/EBM165",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "EBM165/EBM16551",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-3">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("EBM166/M")}`,
            firstCircleLabel: "EBM166/M",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark mx-auto", label: "EBM166" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleLabel: "",
            secondCircleText: "",
          }}
        />
        <BlackContainer
          data={{
            label: "EBM166/EBM16651",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-4">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "EBM175" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("EBM175/M")}`,
            secondCircleLabel: "EBM175/M",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "EBM175/EBM17551",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-5">
        <BlackContainer
          data={{
            label: "EBM176/EBM17651",
            useClass: "greenTxt",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "EBM176",
          }}
        />
        <div className="pipe dotted-pipe mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("EBM176/M")} `} label="EBM176/M" text="M" />
        </div>
      </div>
      <div className="img-87  position-absolute single-text-6"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        // text={{ useClass: "text-dark mx-auto", label: "EBM175" }} 
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("EM166/M")}`,
          secondCircleLabel: "EM166/M",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        text={{ useClass: "text-dark mx-auto", label: "EBM167" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("EM167/M")}`,
          secondCircleLabel: "EM167/M",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        text={{ useClass: "text-dark mx-auto", label: "HM128" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("EM168/M")}`,
          secondCircleLabel: "EM168/M",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        text={{ useClass: "text-dark mx-auto", label: "EM177" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("EM177/M")}`,
          secondCircleLabel: "EM177/M",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        text={{ useClass: "text-dark mx-auto", label: "EBM184" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("EBM184/M")}`,
          secondCircleLabel: "EBM184/M",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        text={{ useClass: "text-dark mx-auto", label: "EM183" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("EM183/M")}`,
          secondCircleLabel: "EM183/M",
          secondCircleText: "M",
        }}
      />
      <div className=" position-absolute single-text-13  d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "GCT BIN LEVEL",
          }}
        />
        <div className="containerImage pt-2">
          <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("GCTBIN_LVL/ANN")} `} label="GCTBIN_LVL/ANN" />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "EM182/RPM_SP",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM182/RPM_FB",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM182/AMP",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag className={`circle-img position-absolute single-text-15  mt-3 digital-tag ${useFanImgTagsColorStatus("EM182")}`} label="EM182" />
      <div className="position-absolute single-text-16 ">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img  digital-tag ${useFanImgTagsColorStatus("EM160/M")}`} label="EM160/M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "EM160",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TO EM133 BE",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("EM151/M")}`} label="EM151/M" text="M" />
        </div>
        <div className="connector-icon  ml-2 ">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("EM150/M")}`} label="EM150/M" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "151",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "150",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "E1Z90",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("E1Z09/M")}`} isClickable={true} tagLabel="E1Z09/M" />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM174",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("EM174/M")}`} isClickable={true} tagLabel="EM174/M" />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "E1Z09/POSSP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E1Z09/POSVAL",
              useClass: "greenTxt   mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FROM PR.HTR",
          }}
        />
        <BlackContainer
          data={{
            label: "E1E0158/UM",
            useClass: "greenTxt   mt-1",
            unit: "m3/hr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TE03",
          }}
        />
        <BlackContainer
          data={{
            label: "BH/TE03_01",
            useClass: "greenTxt   mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "TT01",
              }}
            />
            <BlackContainer
              data={{
                label: "BH/TT01_01",
                useClass: "greenTxt   mt-1 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PT02",
              }}
            />
            <BlackContainer
              data={{
                label: "BH/PT02_01",
                useClass: "greenTxt   mt-1 ml-2",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "TT02",
              }}
            />
            <BlackContainer
              data={{
                label: "BH/TT02_01",
                useClass: "greenTxt   mt-1 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PT03",
              }}
            />
            <BlackContainer
              data={{
                label: "BH/PT03_01",
                useClass: "greenTxt   mt-1 ml-2",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-24 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TE04",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/TT04_01",
              useClass: "greenTxt   mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TT05",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/TT05_01",
              useClass: "greenTxt   mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PT01",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/PT01_01",
              useClass: "greenTxt   mt-1 ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PDT01",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/PDT01_01",
              useClass: "greenTxt   mt-1 ml-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM171",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 ${useBorderTagsColorStatus("EM171/M")}`} isClickable={true} tagLabel="EM171/M" />

        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "EM171/POS_SP",
              useClass: "greenTxt   mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM171/POS_FB",
              useClass: "greenTxt   mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("EM169/EM169")}`} label="EM169/EM169" text="M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "EM169",
          }}
        />
        <div className="text-center">
          <MotorCircleDigitalTag className={`dot mt-2  digital-tag ${useColorStatus("EM169A/M")}`} label="EM169A/M" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EM169A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 box-1 p-1">
        <BlackContainer
          data={{
            label: "EM169/RPM_SP",
            useClass: "greenTxt   mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM169/KW",
            useClass: "greenTxt   mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM169/VIB",
            useClass: "greenTxt   mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="chimni-red position-absolute single-text-29"></div>
      <div className=" position-absolute single-text-30 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAW MILL FAN",
          }}
        />
        <div className="box-1 p-1 d-flex gap-1 mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "WINDING TEMP",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ1",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD1TZ1/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ2",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD2TZ2/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ3",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD3TZ3/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ4",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD4TZ4/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MOT.BRG TEMP",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD1TZ5UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "NDE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD2TZ6/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FAN BRG TEMP",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD1TZ7/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "NDE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD2TZ8/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-31 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SIGNAL STATUS",
          }}
        />
        <div className="box-1 p-1 d-flex gap-1 mt-2">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR Initial",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/GRRINTI")}`} label="EM169/GRRINTI" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR On",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/EM16914")}`} label="EM169/EM16914" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR Final",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/EM16910")}`} label="EM169/EM16910" />
            </div>
          </div>
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR AR1",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/GRRAR1C")}`} label="EM169/GRRAR1C" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR BLW OL",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/GRR_BL_OLOAD")}`} label="EM169/GRR_BL_OLOAD" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DC Coil",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/EM169COIL")}`} label="EM169/EM169COIL" />
            </div>
          </div>
        </div>
      </div>
      <div className="img-87  position-absolute single-text-32"></div>
      <div className=" position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-4",
            label: "BEDIV1",
          }}
        />
        <MotorCircleDigitalTag className={`grn-gry-img mt-1 digital-tag ${useImgColorStatus("BEDIVI/M")}`} label="BEDIVI/M" />
      </div>

      <div className="containerImage pt-2 position-absolute single-text-34 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SEP",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FM110",
              }}
            />
            <MotorCircleDigitalTag className={`line-circle ml-2 digital-tag ${useColorStatus("FM110/M")}`} label="FM110/M" />
            <div className="yellowline-Hr line-1"></div>
            <BlackContainer
              data={{
                label: "FM110/AMP",
                useClass: "greenTxt mt-1 ml-5",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FM111",
              }}
            />
            <MotorCircleDigitalTag className={`line-circle ml-2 digital-tag ${useColorStatus("FM111/M")}`} label="FM111/M" />
            <div className="yellowline-Hr line-1"></div>
            <BlackContainer
              data={{
                label: "FM111/AMP",
                useClass: "greenTxt mt-1 ml-5",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FM112",
              }}
            />
            <MotorCircleDigitalTag className={`line-circle ml-2 digital-tag ${useColorStatus("FM112/M")}`} label="FM112/M" />
            <div className="yellowline-Hr line-1"></div>
            <BlackContainer
              data={{
                label: "FM112/AMP",
                useClass: "greenTxt mt-1 ml-5",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FM113",
              }}
            />
            <MotorCircleDigitalTag className={`line-circle ml-2 digital-tag ${useColorStatus("FM113/M")}`} label="FM113/M" />
            <div className="yellowline-Hr line-1"></div>
            <BlackContainer
              data={{
                label: "FM113/AMP",
                useClass: "greenTxt mt-1 ml-5",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <MimicCaret
          parentClass="d-flex mt-1 tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("VRMAPBFV/V")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("VRMAPBFV/V")}`}
          label="VRMAPBFV/V"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Aae.BkPrs.",
            }}
          />
          <BlackContainer
            data={{
              label: "F1P035/UM",
              useClass: "greenTxt   mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-37" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-38" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-39" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-40" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-41" />
      <div className="containerImage pt-2 position-absolute single-text-42 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "BLENDING SELO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "12.000T",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-43"></div>

      <div className="position-absolute single-text-44 d-flex">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FM105/M")}`} label="FM105/M" />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FM105",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FM114/M")}`} label="FM114/M" />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FM114",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FM106",
          }}
        />
        <div className="d-flex mt-1">
          <div className="reject-bin mt-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "FA107",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-46 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "FM109",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus("FM109/M")}`} label="FM109/M" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("FM108/M")}`} label="FM108/M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2  ",
              label: "FM108",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FM104/M")}`} label="FM104/M" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FA104",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-48",
          label: "TO AEROPOLE",
        }}
      />
      <MotorCircleDigitalTag className={`dot digital-tag  position-absolute single-text-49 ${useColorStatus("FM106/M")}`} label="FM106/M" text="M" />

      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-50",
            label: "TO SILO",
          }}
        />
      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr  position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Hr  position-absolute line-24"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-26"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr  position-absolute line-34"></div>
      <div className="yellowline-Hr  position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-43"></div>
      <div className="yellowline-Hr   position-absolute line-44"></div>
      <div className="yellowline-Hr   position-absolute line-45"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-50"></div>
      <div className="yellowline-Vr  position-absolute line-51"></div>
      <div className="yellowline-Hr  position-absolute line-52"></div>
      <div className="yellowline-Vr  position-absolute line-53"></div>
    </div>
  );
};
