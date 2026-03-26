import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useCaretColorStatus,
} from "../../../../../utils";
export const BlendingSiloMalkapurLine1 = () => {
  return (
    <div className="Malkapur-L1-Blending-Silo w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
          <div className="trapezoid"></div>
          <div className="position-absolute single-text-2 d-flex flex-column">
            <div className="dashedHr-Pipe mt-1 position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-5"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-6"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-7"></div>
          </div>
          <div className="position-absolute single-text-8 d-flex flex-column">
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-5"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-6"></div>

            <div className="dashedHr-Pipe  ml-auto position-relative single-text-7"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="dashedHr-Pipe mt-4 mx-auto position-relative single-text-11"></div>
        <div className="dashedHr-Pipe mt-4 mx-auto position-relative single-text-12"></div>
        <div className="dashedHr-Pipe mt-4 mx-auto position-relative single-text-13"></div>
      </div>
      <div className="position-absolute single-text-14 text-center">
        <div className="containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-3",
              label: "BIN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 text-center">
        <div className="containerImage pt-2">
          <BlackContainer
            data={{
              label: "SRGBIN_LVL/UM",
              useClass: "greenTxt mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "SURGE BIN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 text-center">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("GM105/M")}`}
            label="GM105/M"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "GM105",
          }}
        />
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("GM104/M")}`}
            label="GM104/M"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "GM104",
          }}
        />
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("GM103/M")}`}
            label="GM103/M"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "GM103",
          }}
        />
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("GM102/M")}`}
            label="GM102/M"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "GM102",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 text-center border p-2">
        <div className="d-flex justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AVAILABLE",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1 ml-2 digital-tag ${useColorStatus(
              "HA110/PD_AVAIL"
            )}`}
            label="HA110/PD_AVAIL"
            text=""
          />
        </div>
        <div className="d-flex mt-1 justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P<MAX",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1 ml-2 digital-tag ${useColorStatus(
              "HA110/PD_AIR_PRS"
            )}`}
            label="HA110/PD_AIR_PRS"
            text=""
          />
        </div>
        <div className="d-flex mt-1 justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PR NOT DIST",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1 ml-2 digital-tag ${useColorStatus(
              "HA110/PD_PRS_DIST"
            )}`}
            label="HA110/PD_PRS_DIST"
            text=""
          />
        </div>
        <div className="d-flex mt-1 justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CONT AIR PRES",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1 ml-2 digital-tag ${useColorStatus(
              "HA110/CONT_AIR_PRS"
            )}`}
            label="HA110/CONT_AIR_PRS"
            text=""
          />
        </div>
        <div className="d-flex mt-1 justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FILL LVL MAX",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1 ml-2 digital-tag ${useColorStatus(
              "KLN01_G11/ANN"
            )}`}
            label="KLN01_G11/ANN"
            text=""
          />
        </div>
        <div className="d-flex mt-1 justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CALIB. ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1 ml-2 digital-tag ${useColorStatus(
              "HA110_FIL/ANN"
            )}`}
            label="HA110_FIL/ANN"
            text=""
          />
        </div>
        <div className="d-flex mt-1 justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CAL.ON CMD.",
            }}
          />
          <MotorCircleDigitalTag
            className={`square ml-2 digital-tag ${useColorStatus(
              "HA110_FIL/CALIB_ON_CMD"
            )}`}
            label="HA110_FIL/CALIB_ON_CMD"
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "HM117",
          }}
        />
        <div className="squareplustri text-center pt-2">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("HM117/M")}`}
            label="HM117/M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 text-center",
              label: "HM116",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "HM106",
          }}
        />
        <div className="squareplustri text-center pt-2">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div className="mt-4 text-center">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("H01SV01/V")}`}
            label="H01SV01/V"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H01SV01",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("HA100_FIL/PNL")}`}
            label="HA100_FIL/PNL"
          />
        </div>
        <div className="mt-4 text-center">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("H01SV02/V")}`}
            label="H01SV02/V"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "H01SV02",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 text-center">
        <div className="containerImage text-center pt-2">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("HA110/HA110")}`}
            label="HA110/HA110"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "POLDOS-SR",
            }}
          />
          <div className="text-center d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "HA110/HA11053S",
                useClass: "greenTxt ml-2",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Act",
              }}
            />
            <BlackContainer
              data={{
                label: "HA110/HA11053",
                useClass: "greenTxt ml-2",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22 text-center">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center align-self-center img-66">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("HM111/M")}`}
              label="HM111/M"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "HM111/HI10151",
                useClass: "greenTxt ",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "HM111",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center align-self-center img-66">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("HM112/M")}`}
              label="HM112/M"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "HM112/HI10251",
                useClass: "greenTxt ",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "HM112",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center align-self-center img-66">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("HM113/M")}`}
              label="HM113/M"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "HM113/HI10351",
                useClass: "greenTxt ",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "HM113",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center align-self-center img-66">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("HM127/M")}`}
              label="HM127/M"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "HM127/HI10751",
                useClass: "greenTxt ",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "HM127",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-23 text-center">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center align-self-center img-66">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("HA114/M")}`}
              label="HA114/M"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "HA114/HA110451",
                useClass: "greenTxt ",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "HM114",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <div className="d-flex align-items-center justify-content-center align-self-center img-66">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("HM115/M")}`}
              label="HM115/M"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "HM115/H1I0551",
                useClass: "greenTxt ",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "HM115",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-24 border p-1 text-center">
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "HA110/HA11055",
              useClass: "greenTxt ml-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Thr. Put SP",
            }}
          />
          <BlackContainer
            data={{
              label: "HA110/HA11054",
              useClass: "greenTxt ml-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Act. TPH SP",
            }}
          />
          <BlackContainer
            data={{
              label: "HA110/HA11055A",
              useClass: "greenTxt ml-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-25 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FM109",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-1 digital-tag ${useFanImgTagsColorStatus(
            "FM109/M"
          )}`}
          label="FM109/M"
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-4 digital-tag ${useFanImgTagsColorStatus(
            "FM108/M"
          )}`}
          label="FM108/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FM108",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 text-center">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("HM120/M")}`}
            label="HM120/M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HM120",
          }}
        />
        <div className="d-flex mt-2 align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("HM121/M")}`}
            label="HM121/M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HM121",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "COMPRESSORS",
          }}
        />
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KM101A",
            }}
          />
          <MotorCircleDigitalTag
            className={`square ml-2 digital-tag ${useColorStatus("KM101A")}`}
            label="KM101A"
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KM101B",
            }}
          />
          <MotorCircleDigitalTag
            className={`square ml-2 digital-tag ${useColorStatus("KA101B")}`}
            label="KA101B"
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 text-center">
        <div className="squareplustri text-center pt-2">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("HA124/M")}`}
            label="HA124/M"
          />
        </div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "HM126/M"
          )}`}
          label="HM126/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5",
            label: "TO SURG BIN",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("FM106/M")}`}
            label="FM106/M"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("HM117/M")}`}
            label="HM117/M"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-31">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("HM125/M")}`}
            label="HM125/M"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex flex-column">
        <BlackContainer
          data={{
            label: "GM105/AMP",
            useClass: "greenTxt ",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "GM104/AMP",
            useClass: "greenTxt ",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "GM103/AMP",
            useClass: "greenTxt ",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "GM102/AMP",
            useClass: "greenTxt ",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("HM107/M")}`}
            label="HM107/M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("HM107A/M")}`}
            label="HM107A/M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HM107",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HM107A",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FM105",
          }}
        />
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("FM105/M")}`}
            label="FM105/M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("FM114/M")}`}
            label="FM114/M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FM114",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-37",
          label: "TO PREHEATER",
        }}
      />
      <div className="position-absolute single-text-38">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img mr-1 digital-tag ${useFanImgTagsColorStatus(
              "HM123/M"
            )}`}
            label="HM123/M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HM123",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "HM123/RPM_SP",
            useClass: "greenTxt mt-1 ml-3",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "HM123/RPM_FB",
            useClass: "greenTxt mt-1 ml-3",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AERATION AIR PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "HA11081/UM",
            useClass: "greenTxt ml-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("FM104/M")}`}
            label="FM104/M"
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "FM104",
        }}
      />
      <div className="position-absolute single-text-42 text-center">
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Level",
            }}
          />
          <BlackContainer
            data={{
              label: "GIL0251/UM",
              useClass: "greenTxt ml-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Air. Prs.",
            }}
          />
          <BlackContainer
            data={{
              label: "GMVSDCU/UM",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Main Air Prs.",
          }}
        />
        <BlackContainer
          data={{
            label: "HA110/HA11052",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TOP PR",
          }}
        />
        <BlackContainer
          data={{
            label: "HA110/SR_TOP_PR",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HA124",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5",
            label: "HM126",
          }}
        />
      </div>
      <div className="position-absolute single-text-46">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "GA19/V"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "GA19/V"
          )}`}
          label="GA19/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GA19",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("HM103/M")}`}
            label="HM103/M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HM103",
            }}
          />
        </div>
        <div className="text-center mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DosVlv SP",
            }}
          />
          <BlackContainer
            data={{
              label: "HA110/HA11051",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square  digital-tag ${useColorStatus("HM104/M")}`}
            label="HM104/M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HM104",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "(KILN SIDE)",
          }}
        />
        <BlackContainer
          data={{
            label: "HM103/H1Z0351",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "(RECLAIMER SIDE)",
          }}
        />
        <BlackContainer
          data={{
            label: "HM104/H1Z0451",
            useClass: "greenTxt mt-1 ml-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-50 text-center">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("HM109/M")}`}
          label="HM109/M"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HM109",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-51",
          label: "FROM",
        }}
      />

      <div className="pipe-2 dashedHr-Pipe position-absolute"></div>
      <div className="pipe-3 dashedHr-Pipe position-absolute"></div>
      <div className="pipe-4 dashedHr-Pipe position-absolute"></div>
      <div className="pipe-5 dashedHr-Pipe position-absolute"></div>

      <div className="yellowline-Hr position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Vr position-absolute line-42"></div>
      <div className="yellowline-Vr position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Vr upArrow position-absolute line-48"></div>
      <div className="yellowline-Vr upArrow position-absolute line-49"></div>
      <div className="yellowline-Vr position-absolute line-50"></div>
      <div className="yellowline-Vr position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow position-absolute line-52"></div>
      <div className="yellowline-Hr position-absolute line-53"></div>
      <div className="yellowline-Vr position-absolute line-54"></div>
      <div className="yellowline-Vr upArrow position-absolute line-55"></div>
      <div className="yellowline-Vr upArrow position-absolute line-56"></div>
      <div className="yellowline-Vr upArrow position-absolute line-57"></div>
      <div className="yellowline-Vr downArrow position-absolute line-58"></div>
      <div className="yellowline-Vr upArrow position-absolute line-59"></div>
      <div className="yellowline-Hr position-absolute line-60"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Hr position-absolute line-62"></div>
      <div className="yellowline-Vr position-absolute line-63"></div>
      <div className="yellowline-Vr downArrow position-absolute line-64"></div>
      <div className="yellowline-Vr downArrow position-absolute line-65"></div>
      <div className="yellowline-Vr position-absolute line-66"></div>
    </div>
  );
};
