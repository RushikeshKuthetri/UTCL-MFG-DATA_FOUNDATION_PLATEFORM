import { TextContainerWithWrapWord, BlackContainer, PipeWithCircles, MotorCircleDigitalTag, MimicCaret, TransparentBoxWithGate, BlueContainerWithDynamicBorder } from "../../../../index";
import { useColorStatus } from "../../../../../utils";

export const CoalMill1GujaratLine1 = () => {
  return (
    <div className="CoalMill2GujaratLine2 CoalMill1 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-1"
        firstCircle={{
          firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("KM2_F2J03A_MR")}`,
          firstCircleText: "M",
          firstCircleLabel: "KM2_F2J03A_MR",
        }}
        text={{ useClass: "text-dark", label: "F2J03A" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
        }}
      />

      <div className="position-absolute single-text-2">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "G",
          }}
          text={{ useClass: "text-dark", label: "J05" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("F1J05")}`,
            secondCircleText: "M",
            secondCircleLabel: "F1J05",
          }}
        />
      </div>

      <div className="position-absolute single-text-4">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "T12",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "K1L01_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L01_T9",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L01_T9A",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOZA",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L01",
            }}
          />
        </div>
        <div className="containerImage text-center ml-5">
          <BlackContainer
            data={{
              label: "K1L02_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L02_T9",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L02_T9A",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "US PC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L02",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K2A01",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "G",
            }}
            text={{ useClass: "text-dark", label: "A01" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("K1A01")}`,
              secondCircleText: "M",
              secondCircleLabel: "K1A01",
            }}
          />
        </div>
        <div className="ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "K2A02",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "G",
            }}
            text={{ useClass: "text-dark", label: "A02" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("K1A02")}`,
              secondCircleText: "M",
              secondCircleLabel: "K1A02",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "K1A01_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1A01_F1",
            useClass: "greenTxt mt-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1A01_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "K1A02_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1A02_F1",
            useClass: "greenTxt mt-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1A02_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "J01" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("K1J01")}`,
            secondCircleText: "M",
            secondCircleLabel: "K1J01",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KW PID",
          }}
        />
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "MILL_KW_PID_SPM",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 mt-1">
          <BlackContainer
            data={{
              label: "MILL_KW_PID_SPA",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1M03_VFD_J1",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "A04",
          }}
        />
        <MotorCircleDigitalTag className={`square digital-tag position-absolute mt-1 ${useColorStatus("K1A04")}`} label="K1A04" />
        <BlackContainer
          data={{
            label: "K1A04_I1",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <div className="box-1 p-1 mt-1">
          <BlackContainer
            data={{
              label: "K1K06_PID_SPA",
              useClass: "greenTxt mt-1",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1M01_F1",
              useClass: "greenTxt mt-1",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "K1M06_P1",
            useClass: "greenTxt mb-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        {/* <div className="d-flex">
          <div className={`line-circle grey-color`}></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "M06",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <div className={`line-circle grey-color`}></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "M06A",
            }}
          />
        </div> */}
        <BlackContainer
          data={{
            label: "K1M01_P1",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M03_VFD_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M03_VFD_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M03_VFD_I1",
            useClass: "greenTxt mt-2 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M03_VFD_J1",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M03_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M07_GRDG_PRES",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M07_P1_FILTERED",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bigContainer position-absolute single-text-16 text-center ">
        <BlackContainer
          data={{
            label: "K1M01_L1",
            useClass: "greenTxt mt-5",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M01_X1",
            useClass: "greenTxt mt-4",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "K1R01_T1",
            useClass: "greenTxt mt-4 ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className={`square position-absolute mt-1 grey-color`}></div>
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-18">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K1R02")} `} label="K1R02" text="M" />
      </div>
      <div className="containerImage position-absolute single-text-19"></div>
      <div className="position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WATER SOV",
          }}
        />
        <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block`} secondCaretClass={`fa-solid fa-caret-up d-block`} label="" />
      </div>
      <div className="position-absolute single-text-21">
        <div className="box-1 p-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "DAY",
              }}
            />
            <BlackContainer
              data={{
                label: "KM1 TPH DAY",
                useClass: "greenTxt  ml-2",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SHIFT",
              }}
            />
            <BlackContainer
              data={{
                label: "KM1 TPH SHIFT",
                useClass: "greenTxt  ml-2",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "COAL MILL SPECIFIC POWER/TON",
            useClass: "greenTxt  ml-2- mt-5",
            unit: "KW/t",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "K1P11_P3",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_P2",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_P4",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_F1",
              useClass: "greenTxt mt-1",
              unit: "scfm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K1M01_T2",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J03A_T1",
            useClass: "greenTxt  mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />

        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "K1S01_SP_SPM",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1S01_S1",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K1S01_I1",
            useClass: "greenTxt mt-2 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1S01_P2",
            useClass: "greenTxt mt-2 ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1S01_X1",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1S01_X2",
            useClass: "greenTxt mt-2 ",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri d-flex  mt-1 position-absolute single-text-22">
        <div className="d-flex align-items-end justify-content-center mt-1">
          <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-23">
        <div className={`line-circle grey-color`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P05",
          }}
        />
      </div>
      <div className="squareplustri d-flex align-items-end justify-content-center mt-1 position-absolute single-text-24">
        <div className="d-flex align-items-end justify-content-center mt-1"></div>
      </div>
      <div className=" position-absolute single-text-25 d-flex">
        <div className={`line-circle grey-color`}></div>
        <div className={`line-circle grey-color ml-1`}></div>
      </div>

      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K01",
          }}
        />
        <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block`} secondCaretClass={`fa-solid fa-caret-up d-block`} label="" />
      </div>
      <div className="position-absolute single-text-27">
        <div class="tringle-item">
          <i class="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i class="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WTR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TANK",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "K1K01Z1_SP_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1K01_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 mt-1">
          <BlackContainer
            data={{
              label: "K1K06_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1K06_S1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K1S01_T2",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1S01_T1",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-83 position-absolute single-text-29">
        <div className="d-flex justify-content-around pt-3">
          <BlackContainer
            data={{
              label: "K1P11_C01_P1",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_A1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_A2",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_T2",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-32 d-flex">
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "P37",
          }}
        />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("K1P37")}`} label="K1P37" />
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "P36",
          }}
        />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("K1P36")}`} label="K1P36" />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
        <div>
          <div className={`circle-img c-grey-img-2`}></div>
          <div className={`circle-img mt-2 c-grey-img-2`}></div>
        </div>
      </div>

      {/* <div className=" position-absolute single-text-39 ">
        <BlackContainer
          data={{
            label: "K2L01_W1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2L01_W1",
            useClass: "greenTxt mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2L01_W1",
            useClass: "greenTxt  mt-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div> */}

      <div className="position-absolute single-text-40 d-flex">
        <BlueContainerWithDynamicBorder useClass={""} isClickable={false} />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "T19",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TO PHASE-2",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M01_P3",
            useClass: "greenTxt mt-3",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M01_T1",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-1 mt-3">
          <BlackContainer
            data={{
              label: "K1T19_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1T19_Z1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "BSTR FAN DAMPER",
          }}
        />
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "J1P62_SP_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P62_ZI",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TEMP. PID (DAMPER)",
          }}
        />
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "J1P62_SP_SPA",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1M01_T2",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "J1P61_X1",
            useClass: "greenTxt  mt-2",
            unit: "mm/s ",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "J1P61_INV_I1",
            useClass: "greenTxt  mt-2",
            unit: "A ",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BSTR FAN",
            }}
          />
          <div className="box-1 p-1 mt-2">
            <BlackContainer
              data={{
                label: "J1P61S1_SP_SPM",
                useClass: "greenTxt",
                unit: "% ",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P61_S1",
                useClass: "greenTxt mt-2",
                unit: "% ",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TEMP.PID(FAN)",
            }}
          />
          <div className="box-1 p-1 mt-2">
            <BlackContainer
              data={{
                label: "J1P61S1_SP_SPA",
                useClass: "greenTxt",
                unit: "°C ",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1M01_T2",
                useClass: "greenTxt mt-2",
                unit: "°C ",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className={`square grey-color position-absolute single-text-51`}></div>
      <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("K1J03")} position-absolute single-text-52`} label="K1J03" />
      <div className="position-absolute single-text-53 d-flex align-items-center ">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L04",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L04_P1",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L04_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L04_TEMP_MAX",
              useClass: "greenTxt mt-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K1L04_L05_A2",
            useClass: "greenTxt mt-1",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L05",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L05_P1",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L05_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L05_TEMP_MAX",
              useClass: "greenTxt mt-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54  mt-1 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "J03",
          }}
        />
        <BlackContainer
          data={{
            label: "K1J03_I1",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-55">
        <BlackContainer
          data={{
            label: "K1P51_T1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P51_T2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P55_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <div className="squareplustri d-flex  mt-1">
          <div className="d-flex  mt-5 ml-2">
            <div className={`circle-img mt-3 c-grey-img-2`}></div>
            <div className="mt-4 ml-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-2",
                  label: "P54",
                }}
              />
            </div>
            <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-56">
        <div className={`line-circle grey-color`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P55",
          }}
        />
      </div>

      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "T01",
          }}
        />
        <MotorCircleDigitalTag className={`line-circle digital-tag mt-1 ${useColorStatus("K1T01")} `} label="K1T01" />
        <BlackContainer
          data={{
            label: "K1T01_I1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T01_J1",
            useClass: "greenTxt mt-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T01_X2",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T01_X9",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-59 d-flex ">
        <div>
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "K1T08_PID_SPM",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1T08_Z1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="box-1 p-1 mt-5">
            <BlackContainer
              data={{
                label: "K1T03_PID_SPM",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1T03_Z1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-60 ">
        <div className="d-flex">
          <BlueContainerWithDynamicBorder useClass={"mx-auto mt-2 mr-4"} isClickable={false} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "T03",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P25",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P24",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P35",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P34",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P13",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P12",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P23",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P22",
            }}
          />
        </div>
      </div>
      <div className=" d-flex position-absolute single-text-65">
        <div className={`circle-img c-grey-img-2`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1 ",
            label: "P04",
          }}
        />
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1 ",
            label: "T23",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mt-1 ",
            label: "T24",
          }}
        />
      </div>
      <div className="position-absolute single-text-68">
        <BlackContainer
          data={{
            label: "F1J05_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F1J05_W1",
            useClass: "greenTxt mt-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PLC_F1J07_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "K1SD01_SP_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1SD01_SP_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-70 d-flex">
        <BlackContainer
          data={{
            label: "K1A01SP",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "K1A02SP",
              useClass: "greenTxt mt-2 ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM1_TOTAL_FEED",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-71">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CHIMNEY DAMPER",
          }}
        />
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "J1P60_SP_SPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P60_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-72 d-flex">
        <BlackContainer
          data={{
            label: "K1M07_T9",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M05_T9",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M05_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-73 d-flex  align-items-center ">
        <div>
          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "COALMIIL MW",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_MW",
                useClass: "greenTxt mt-1",
                unit: "MM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GAS TEMP.MAX",
              }}
            />
            <BlackContainer
              data={{
                label: "GAS_TEMP_MAX",
                useClass: "greenTxt  ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MAT TEMP.MAX",
              }}
            />
            <BlackContainer
              data={{
                label: "MAT_TEMP_MAX",
                useClass: "greenTxt  ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "K1T01_P1_PID_SPA",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1T01_P1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "K1T01_SP_SPA",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1T01_J1_FILTERED",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "K1T01_SP_SPM",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1T01_S1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-74 d-flex">
        <BlackContainer
          data={{
            label: "K1P11_C01_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C03_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C05_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C07_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C09_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C11_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-75 d-flex">
        <BlackContainer
          data={{
            label: "K1P11_C02_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C04_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C06_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C08_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C10_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P11_C12_P1",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-76 d-flex">
        <div className="pole-shape">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ml-1 ${useColorStatus("K1M03")}`} label="K1M03" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-77">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F1PS1_SEQ",
          }}
        />
        <div className="squareplustri d-flex">
          <div className="yellowline-Vr  downArrow position-absolute line-139 ml-2 mt-2"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-78">
        <div className={`line-circle grey-color`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F1P55",
          }}
        />
      </div>
      <div className=" position-absolute single-text-79 d-flex box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Res90",
          }}
        />
        <BlackContainer
          data={{
            label: "QCX_RES90_KM1",
            useClass: "greenTxt  ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-80 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO PH 2",
          }}
        />
        <BlackContainer
          data={{
            label: "F2J03A_T1",
            useClass: "greenTxt  ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "K1P36_I1",
          useClass: "greenTxt  ml-2 position-absolute single-text-81",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="brick-cooler-img position-absolute single-text-82"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Hr  position-absolute line-54"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-55"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-56"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-57"></div>
      <div className="yellowline-Vr upArrow position-absolute line-58"></div>
      <div className="yellowline-Vr downArrow position-absolute line-59"></div>
      <div className="yellowline-Hr  position-absolute line-60"></div>
      <div className="yellowline-Hr  position-absolute line-61"></div>
      <div className="yellowline-Hr  position-absolute line-62"></div>
      <div className="yellowline-Vr downArrow position-absolute line-63"></div>
      <div className="yellowline-Vr downArrow position-absolute line-64"></div>
      <div className="yellowline-Vr  position-absolute line-65"></div>
      <div className="yellowline-Hr  position-absolute line-66"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Vr downArrow position-absolute line-69"></div>
      <div className="yellowline-Vr downArrow position-absolute line-70"></div>
      <div className="yellowline-Vr upArrow position-absolute line-71"></div>
      <div className="yellowline-Hr position-absolute line-72"></div>
      <div className="yellowline-Vr downArrow position-absolute line-73"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-74"></div>
    </div>
  );
};
