import { TextContainerWithWrapWord, MotorCircleDigitalTag, PipeWithCircles, BlueContainerWithDynamicBorder, MimicCaret, BlackContainer } from "../../../../index";
import { useColorStatus, useFanImgTagsColorStatus, useCaretColorStatus, useBorderTagsColorStatus } from "../../../../../utils";
export const CoalMillMalkapurL1 = () => {
  return (
    <div className="CoalMilMalkapurL1 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle  position-absolute single-text-1"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "SM 110" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("SM110/M")}`,
          secondCircleLabel: "SM110/M",
          secondCircleText: "M",
        }}
      /> 
      <PipeWithCircles
        parentDivClass="hpipecircle  position-absolute single-text-2"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "SM 111" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("SM111/M")}`,
          secondCircleLabel: "SM111/M",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-3">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PCS",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("SM110/PCS")}`} label="SM110/PCS" text="" />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BSS",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("SM110/BSS")}`} label="SM110/BSS" text="" />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <BlackContainer
          data={{
            label: "SM110/AMP",
            useClass: "greenTxt ml-2",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PCS",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("SM111/PCS")}`} label="SM111/PCS" text="" />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BSS",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("SM111/BSS")}`} label="SM111/BSS" text="" />
        </div>
      </div>
      <div className="containerImage position-absolute single-text-5 text-center">
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("S1L0101/L1_HPR_LVL")}`} label="S1L0101/L1_HPR_LVL" text="" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RAW COAL HOPPER",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6 img-86 text-center d-flex justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`dot digital-tag mt-3 ${useColorStatus("SM118/M")}`} label="SM118/M" text="" />
      </div>
      <div className="drumContainer position-absolute single-text-7 pt-3 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "COAL MILL",
          }}
        />
      </div>
      <div className=" position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "SM010/SB_DE",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM010/SB_NDE",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "S1T0351/UM",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "S1PO25/UM",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-10 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "S1T0952/UM",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "S1T0951/UM",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("SM010/LRS_IN")} `} label="SM010/LRS_IN" />
            <MotorCircleDigitalTag className={`square mt-2 digital-tag  ${useColorStatus("SM010/LRS_OUT")} `} label="SM010/LRS_OUT" />
            <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("SM010/SM010COAL")}`} label="SM010/SM010COAL" text="" />
          </div>
          <div className="ml-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LRS IN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "LRS OUT",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "DC STATUS",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-11 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TABLE FEEDER",
            }}
          />
          <div className="box-1 mt-1 p-2">
            <BlackContainer
              data={{
                label: "SM118/RPM_SP",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "SM118/RPM_FB",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "SM118/AMP",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "SM118/KW",
                useClass: "greenTxt mt-1",
                unit: "kw",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "SM012",
              }}
            />
            <div className="box-1 mt-1 p-2">
              <BlackContainer
                data={{
                  label: "SM012/RPM_SP",
                  useClass: "greenTxt mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM012/RPM_FB",
                  useClass: "greenTxt mt-1",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM012/AMP",
                  useClass: "greenTxt mt-1",
                  unit: "Amp",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "BRG LUB SYS",
              }}
            />
            <div className="box-1 mt-1 p-2">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "SYS RDY",
                  }}
                />
                <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM305/SYS_READY")}`} label="SM305/SYS_READY" text="M" />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "BRL LVL",
                  }}
                />
                <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM305/BRL_LVL")}`} label="SM305/BRL_LVL" text="M" />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "VLV CMD",
                  }}
                />
                <MotorCircleDigitalTag className={`square mt-1 ml-2 digital-tag  ${useColorStatus("VAL CMD")} `} label="VAL CMD" />
              </div>
            </div>
          </div>
        </div>
        <div className="box-1 mt-1 p-2">
          <div className="d-flex justify-content-center">
            <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("SM305/M")}`} label="SM305/M" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "SM 305",
              }}
            />
          </div>
          <div className="mt-1 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GB OIL PRS",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM305 GB_FS/ANN")}`} label="SM305 GB_FS/ANN" text="" />
          </div>
          <div className="mt-1 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GB OIL FLOW",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM305GB_FS/ANN")}`} label="SM305GB_FS/ANN" text="" />
          </div>
          <div className="mt-1 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "DP SWITCH",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM305_DPS/ANN")}`} label="SM305_DPS/ANN" text="" />
          </div>
          <div className="mt-1 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GB OIL",
              }}
            />
            <BlackContainer
              data={{
                label: "SM012 GB/UM",
                useClass: "greenTxt mt-1 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "TOP BRG",
              }}
            />
            <BlackContainer
              data={{
                label: "SM012/TOP_BRG_TEMP",
                useClass: "greenTxt mt-1 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BOT BRG",
              }}
            />
            <BlackContainer
              data={{
                label: "SM012/BOT_BRG_TMEP",
                useClass: "greenTxt mt-1 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="containerImage position-absolute single-text-12 text-center"></div>
      <div className="position-absolute single-text-13 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COAL MILL MAIN DRIVE",
            }}
          />
          <div className="text-center box-1 mt-2 p-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "WINDING",
              }}
            />
            <div className="d-flex gap-1 mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ1",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010_TZ1/UM",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ4",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010-TZ4/UM",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex gap-1 mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ2",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010_TZ2/UM",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ5",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010-TZ5/UM",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex gap-1 mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ3",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010_TZ3/UM",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ6",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010-TZ6/UM",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "MOTOR BEARING",
              }}
            />
            <div className="d-flex gap-1 mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ7",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010-TZ7/UM",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ8",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM010-TZ8/UM",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <div className="yellowline-Vr upArrow line-1"></div>
            <div className="yellowline-Vr upArrow line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
            <div className="img-66 d-flex justify-content-center align-items-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("SM123/M")}`} label="SM123/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SM 123",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "PS",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM123/PRS")}`} label="SM123/PRS" text="" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "FS",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM123/FLS")}`} label="SM123/FLS" text="" />
            </div>
          </div>
          <div>
            <div className="yellowline-Vr upArrow line-1"></div>
            <div className="yellowline-Vr upArrow line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
            <div className="img-66 d-flex justify-content-center align-items-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("SM125/M")}`} label="SM125/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SM 125",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "PS",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM125/PRS")}`} label="SM125/PRS" text="" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "FS",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM125/FLS")}`} label="SM125/FLS" text="" />
            </div>
          </div>
          <div>
            <div className="yellowline-Vr upArrow line-1"></div>
            <div className="yellowline-Vr upArrow line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
            <div className="img-66 d-flex justify-content-center align-items-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("SM124/M")}`} label="SM124/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SM 124",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "PS",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM124/PRS")}`} label="SM124/PRS" text="" />
            </div>
          </div>
          <div>
            <div className="yellowline-Vr upArrow line-1"></div>
            <div className="yellowline-Vr upArrow line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
            <div className="img-66 d-flex justify-content-center align-items-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("SM126/M")}`} label="SM126/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SM 126",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "PS",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("SM126/PRS")}`} label="SM126/PRS" text="" />
            </div>
          </div>
          <div>
            <div className="yellowline-Vr upArrow line-1"></div>
            <div className="yellowline-Vr upArrow line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
            <div className="img-66 d-flex justify-content-center align-items-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("SM121/M")}`} label="SM121/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SM 121",
              }}
            />
          </div>
          <div>
            <div className="yellowline-Vr upArrow line-1"></div>
            <div className="yellowline-Vr upArrow line-2"></div>
            <div className="yellowline-Vr upArrow line-3"></div>
            <div className="img-66 d-flex justify-content-center align-items-center">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("SM122/M")}`} label="SM122/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SM 122",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TRUNNION BEARING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PRE JACKING PUMPS",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GEAR BOXLUBRICATION",
            }}
          />
          <BlackContainer
            data={{
              label: "KLM01_GO/GB_PR",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GG LUBRICATION",
          }}
        />
        <div className="box-1 p-1 mt-4">
          <div className="d-flex gap-1">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "PRS",
                }}
              />
              <MotorCircleDigitalTag className={`dot mt-1 digital-tag  ${useColorStatus("S9SOV0321/S2P01")}`} label="S9SOV0321/S2P01" text="" />
            </div>
            <MimicCaret
              parentClass="d-flex mt-1 tringle-item justify-content-center"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("S9SOV0321/V")}`}
              secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("S9SOV0321/V")}`}
              label="S9SOV0321/V"
            />
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "LVL",
                }}
              />
              <MotorCircleDigitalTag className={`dot mt-1 digital-tag  ${useColorStatus("S9SOV0321/S2L01")}`} label="S9SOV0321/S2L01" text="" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "On Time SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "S9SOV0321/ON TIME",
                  useClass: "greenTxt mt-2",
                  unit: "SEC",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="d-flex mt-2 gap-1">
            <div>
              <div className="d-flex gap-1 mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "NZ1",
                  }}
                />
                <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("S9SOV0321/NZ1-ON")}`} label="S9SOV0321/NZ1-ON" text="" />
                <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("S9SOV0321/NZ1-OFF")}`} label="S9SOV0321/NZ1-OFF" text="" />
              </div>
              <div className="d-flex gap-1 mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "NZ2",
                  }}
                />
                <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("S9SOV0321/NZ2-ON")}`} label="S9SOV0321/NZ2-ON" text="" />
                <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("S9SOV0321/NZ2-OFF")}`} label="S9SOV0321/NZ2-OFF" text="" />
              </div>
              <div className="d-flex gap-1 mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "NZ3",
                  }}
                />
                <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("S9SOV0321/NZ3-ON")}`} label="S9SOV0321/NZ3-ON" text="" />
                <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("S9SOV0321/NZ3-OFF")}`} label="S9SOV0321/NZ3-OFF" text="" />
              </div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "Pos Time SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "S9SOV0321/POS TIME",
                  useClass: "greenTxt   mt-2",
                  unit: "SEC",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "SM152/POS_SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM152/POSVAL",
              useClass: "greenTxt   mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlueContainerWithDynamicBorder useClass={`mx-auto  ${useBorderTagsColorStatus("SM152/M")}`} isClickable={true} tagLabel="SM152/M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SM 152",
            }}
          />
        </div>
        <div>
          <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("SM139/M")}`} isClickable={true} tagLabel="SM139/M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SM 139",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SM 144",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("SM144/M")}`} isClickable={true} tagLabel="SM144/M" />
      </div>

      <div className="position-absolute single-text-18 d-flex">
        <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("SM303/M")}`} isClickable={true} tagLabel="SM303/M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SM 303",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "SM303/POS_SP",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM30S/POSVAL",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "S1F0151/UM",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-info p-1 position-absolute single-text-21",
          label: "FROM COOLER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-22",
          label: "FAD",
        }}
      />
      <div className=" position-absolute single-text-23 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM012",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("SM012/M")}`} label="SM012/M" text="M" />
        <div className="triangle-with-squares mt-1"></div>
      </div>
      <div className=" position-absolute single-text-24">
        <div className="d-flex gap-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SM 232",
              }}
            />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("SM232")} `} label="SM232" />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SM 231",
              }}
            />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("SM231")} `} label="SM231" />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SM 130",
              }}
            />
            <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("SM230")} `} label="SM230" />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AIR PRESSUR",
              }}
            />
            <BlackContainer
              data={{
                label: "KM01_G01/COALBHPRS",
                useClass: "greenTxt mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="asset-72 mt-2 pt-4">
          <div className="d-flex gap-1 justify-content-around">
            <div>
              <BlackContainer
                data={{
                  label: "S1T0751/UM",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "HP1_TZ21/S1_HP1_TZ21",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "HP1_TZ22/UM",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "HP3_TZ23/UM",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div>
              <BlackContainer
                data={{
                  label: "S1T0851/UM",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "HPA_TZ24",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SM 147",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("SM147/M")}`} label="SM147/M" />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SM 149",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("SM149/M")}`} label="SM149/M" />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SM 135",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("SM135/M")}`} label="SM135/M" />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SM 116",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("SM116/M")}`} label="SM116/M" />
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle  position-absolute single-text-25"
        text={{ useClass: "text-dark mx-auto", label: "SM 133" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("SM133/M")}`,
          secondCircleLabel: "SM133/M",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle  position-absolute single-text-26"
        text={{ useClass: "text-dark mx-auto", label: "SM 134" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("SM134/M")}`,
          secondCircleLabel: "SM134/M",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle  position-absolute single-text-27"
        text={{ useClass: "text-dark mx-auto", label: "SM 146" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("SM146/M")}`,
          secondCircleLabel: "SM146/M",
          secondCircleText: "M",
        }}
      />

      <div className=" position-absolute single-text-28 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MAGNET",
            }}
          />
          <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 ${useBorderTagsColorStatus("SM140/MAGNET")}`} isClickable={true} tagLabel="SM140/MAGNET" />

          <div className="d-flex mt-2">
            <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("SM140/M")}`} isClickable={true} tagLabel="SM140/M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "SM 140",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2",
              label: "Auto open",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MILL O/L CO",
            }}
          />
          <BlackContainer
            data={{
              label: "S1A0151/UM",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MAGNET",
            }}
          />
          <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 ${useBorderTagsColorStatus("SM141/MAGNET")}`} isClickable={true} tagLabel="SM141/MAGNET" />

          <div className="d-flex mt-2">
            <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("SM141/M")}`} isClickable={true} tagLabel="SM141/M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "SM 141",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info p-1 mt-2",
              label: "Auto open",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "SM 138",
            }}
          />
          <BlackContainer
            data={{
              label: "SM138/SETPOINT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM138/POSVAL",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className=" position-absolute single-text-29 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "PC_BIN_TZ/TZ61",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage mt-3 pt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PC",
              }}
            />
            <BlackContainer
              data={{
                label: "SA206/S1W0551",
                useClass: "greenTxt mt-2",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "KC_BIN_TZ/T251",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage mt-3 pt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "KC",
              }}
            />
            <BlackContainer
              data={{
                label: "S1W0451/UM",
                useClass: "greenTxt mt-2",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "KC TOP PR",
              }}
            />
            <BlackContainer
              data={{
                label: "SA203/SCTOPPR",
                useClass: "greenTxt  ml-3",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PC TOP PR",
              }}
            />
            <BlackContainer
              data={{
                label: "PCTOPPR",
                useClass: "greenTxt  ml-3",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-30 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CA FAN",
          }}
        />
        <div className="box-1 p-1 d-flex gap-1 mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "WINDING",
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
                  label: "SM011_TZ1/UM",
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
                  label: "SM011_TZ2/UM",
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
                  label: "SM011_TZ3/UM",
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
                  label: "SM011_TZ4/UM",
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
                  label: "TZ5",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM011_TZ5/UM",
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
                  label: "TZ6",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM011_TZ6/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "VIB",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM011/VIB",
                  useClass: "greenTxt ml-2",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MOTOR BEARING",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ7",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM011_TZ7/UM",
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
                  label: "TZ8",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM011_TZ8/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FAN BEARING",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ9",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM011_TZ9/UM",
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
                  label: "TZ10",
                }}
              />
              <BlackContainer
                data={{
                  label: "SM011_TZ10/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-31">
        <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("SM138/M")}`} isClickable={true} tagLabel="SM138/M" />
      </div>
      <div className="connector-icon p-1 mt-1 position-absolute single-text-32">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("SM011/M")}`} label="SM011/M" />
      </div>
      <div className="chimni-red position-absolute single-text-33"></div>
      <div className="position-absolute single-text-34 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM011",
          }}
        />
        <div className="box-1 p-2">
          <BlackContainer
            data={{
              label: "SM011/AMP",
              useClass: "greenTxt",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM011/KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className="pipeVr pipe-1 position-absolute"></div>

        <div className="ml-5">
          <div className="d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("MD_TRIP/ANN")}`} label="MD_TRIP/ANN" text="" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "MD TRIP",
              }}
            />
          </div>
          <div className="d-flex mt-2 d-flex justify-content-center align-items-center">
            <div className="img-86"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "SM 010",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "SM010/KW",
              useClass: "greenTxt mt-2",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BAG FIL TER",
          }}
        />
        <BlackContainer
          data={{
            label: "S12B51/UM",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
      <BlackContainer
          data={{
            label: "SM010/TB_NDE",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM010/TB_DE",
            useClass: "greenTxt  mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-38"></div>
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-39",
            label: "SM 118",
          }}
        />
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>

      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Hr   position-absolute line-6"></div>
      <div className="yellowline-Hr   position-absolute line-7"></div>
      <div className="yellowline-Hr   position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Vr position-absolute line-30"></div>
      <div className="yellowline-Vr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Hr position-absolute line-34"></div>
    </div>
  );
};
