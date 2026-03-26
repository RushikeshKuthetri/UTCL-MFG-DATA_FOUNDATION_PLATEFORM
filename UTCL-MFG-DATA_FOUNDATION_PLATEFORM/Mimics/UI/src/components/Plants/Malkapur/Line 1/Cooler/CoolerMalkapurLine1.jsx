import {
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  TextContainerWithWrapWord,
} from "../../../../index";
import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const CoolerMalkapurLine1 = () => {
  return (
    <div className="Malkapur-L1-Cooler w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 border p-1 d-flex">
        <div className="mr-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Wind. Temp.",
            }}
          />
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ1",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_TZ1/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ2",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_TZ2/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ3",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_TZ3/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ4",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_TZ4/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ5",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_TZ5/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ6",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_TZ6/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Mot.Brg.Temp.",
            }}
          />
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ7",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_DE_TZ7/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ8",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_NDE_TZ8/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Fan Brg.Temp.",
            }}
          />
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ9",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_DE_TZ9/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ10",
              }}
            />
            <BlackContainer
              data={{
                label: "KM183_NDE_TZ9/UM",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Vibration",
            }}
          />
          <BlackContainer
            data={{
              label: "KM183/K1V0251",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FLA",
          }}
        />
        <BlackContainer
          data={{
            label: "KM155/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM161/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM163/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM165/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM167/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM169/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM171/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM173/AMP",
            useClass: "greenTxt",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3 border p-1 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PV",
          }}
        />
        <BlackContainer
          data={{
            label: "KM161/RPM_FB",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM163/RPM_FB",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM165/RPM_FB",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM167/RPM_FB",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM169/RPM_FB",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM171/RPM_FB",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM173/RPM_FB",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FLOW",
          }}
        />
        <BlackContainer
          data={{
            label: "KM155/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM161/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM163/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM165/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM167/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM169/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM171/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM173/FLOW",
            useClass: "greenTxt",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM173/M")}`}
            label="KM173/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM171/M")}`}
            label="KM171/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM169/M")}`}
            label="KM169/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM167/M")}`}
            label="KM167/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM165/M")}`}
            label="KM165/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM163/M")}`}
            label="KM163/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM161/M")}`}
            label="KM161/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM155/M")}`}
            label="KM155/M"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleText: "",
          }}
        />
      </div>
      <div className="single-text-7 position-absolute d-flex">
        <div className="text-center ">
          <div className="containerImage text-center pt-2">
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KA180",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`square mx-1 digital-tag ${useColorStatus(
                    "KA180/PNL"
                  )}`}
                  label="KA180/PNL"
                />
              </div>
              <div>
                <MotorCircleDigitalTag
                  className={`dot p-1 mb-1 digital-tag ${useColorStatus(
                    "KA18004/ANN"
                  )}`}
                  label="KA18004/ANN"
                  text=""
                />
                <MotorCircleDigitalTag
                  className={`dot p-1 digital-tag ${useColorStatus(
                    "KA18003/ANN"
                  )}`}
                  label="KA18003/ANN"
                  text=""
                />
              </div>
            </div>
            <BlackContainer
              data={{
                label: "KA180/KV",
                useClass: "greenTxt mt-1",
                unit: "kv",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KA180/MA_FB",
                useClass: "greenTxt mt-1",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 mt-3 digital-tag ${useColorStatus(
                "KA180H2/ANN"
              )}`}
              label="KA180H2/ANN"
              text=""
            />
          </div>
          <MotorCircleDigitalTag
            className={`circle-img mt-4 digital-tag ${useFanImgTagsColorStatus(
              "KM179A/M"
            )}`}
            label="KM179A/M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "KM179A",
            }}
          />
        </div>

        <div className="text-center ">
          <div className="containerImage text-center pt-2">
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KA181",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`square mx-1 digital-tag ${useColorStatus(
                    "KA181/PNL"
                  )}`}
                  label="KA181/PNL"
                />
              </div>
              <div>
                <MotorCircleDigitalTag
                  className={`dot p-1 mb-1 digital-tag ${useColorStatus(
                    "KA18104/ANN"
                  )}`}
                  label="KA18104/ANN"
                  text=""
                />
                <MotorCircleDigitalTag
                  className={`dot p-1 digital-tag ${useColorStatus(
                    "KA18103/ANN"
                  )}`}
                  label="KA18103/ANN"
                  text=""
                />
              </div>
            </div>
            <BlackContainer
              data={{
                label: "KA181/KV",
                useClass: "greenTxt mt-1",
                unit: "kv",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KA181/MA_FB",
                useClass: "greenTxt mt-1",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 mt-3 digital-tag ${useColorStatus(
                "KA180H4/ANN"
              )}`}
              label="KA180H4/ANN"
              text=""
            />
          </div>
          <MotorCircleDigitalTag
            className={`circle-img mt-4 digital-tag ${useFanImgTagsColorStatus(
              "KM179B/M"
            )}`}
            label="KM179B/M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "KM179B",
            }}
          />
        </div>
        <div className="text-center ">
          <div className="containerImage text-center pt-3">
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KA182",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`square mx-1 digital-tag ${useColorStatus(
                    "KA182/PNL"
                  )}`}
                  label="KA182/PNL"
                />
              </div>
            </div>
            <BlackContainer
              data={{
                label: "KA180/KV",
                useClass: "greenTxt mt-2",
                unit: "kv",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KA180/MA_FB",
                useClass: "greenTxt mt-1",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 mt-3 digital-tag ${useColorStatus(
                "KA180H5/ANN"
              )}`}
              label="KA180H5/ANN"
              text=""
            />
          </div>
          <MotorCircleDigitalTag
            className={`circle-img mt-4 digital-tag ${useFanImgTagsColorStatus(
              "KM179C/M"
            )}`}
            label="KM179C/M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "KM179C",
            }}
          />
        </div>
      </div>
      <div className="single-text-8 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("KM185/M")}`,
            secondCircleLabel: "KM185/M",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="single-text-9 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLINKER CRUSHER",
          }}
        />
        <div className="border p-1">
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "VIB",
              }}
            />
            <BlackContainer
              data={{
                label: "KM17752",
                useClass: "greenTxt",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ1",
              }}
            />
            <BlackContainer
              data={{
                label: "KM177_DE_TZ1",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TZ2",
              }}
            />
            <BlackContainer
              data={{
                label: "KM177_NDE_TZ2",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-10 position-absolute pipe-2 pipeHr d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center ">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "Cl. Fan",
                }}
              />
              <MotorCircleDigitalTag
                className={`square ml-1 digital-tag ${useColorStatus(
                  "KM150/CF"
                )}`}
                label="KM150/CF"
              />
            </div>
            <div className="d-flex mt-3">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "KM 150",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot p-1 ml-1 digital-tag ${useColorStatus(
                  "KM150/M"
                )}`}
                label="KM150/M"
                text="M"
              />
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GRATE-1",
              }}
            />
            <BlackContainer
              data={{
                label: "KM150/SETSPM",
                useClass: "greenTxt mt-1",
                unit: "set spm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM150/SPM",
                useClass: "greenTxt mt-1",
                unit: "spm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM150/AMP",
                useClass: "greenTxt mt-1",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "Cl. Fan",
                }}
              />
              <MotorCircleDigitalTag
                className={`square ml-1 digital-tag ${useColorStatus(
                  "KM151/CF"
                )}`}
                label="KM151/CF"
              />
            </div>
            <div className="d-flex mt-3">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "KM 151",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot p-1 ml-1 digital-tag ${useColorStatus(
                  "KM151/M"
                )}`}
                label="KM151/M"
                text="M"
              />
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GRATE-2",
              }}
            />
            <BlackContainer
              data={{
                label: "KM151/SETSPM",
                useClass: "greenTxt mt-1",
                unit: "set spm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM151/SPM",
                useClass: "greenTxt mt-1",
                unit: "spm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM151/AMP",
                useClass: "greenTxt mt-1",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-11 d-flex">
        <div className="text-center">
          <div className="containerImage text-center pt-2"></div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF01/V")}`}
            label="CLGF01/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF02/V")}`}
            label="CLGF02/V"
          />
          <BlackContainer
            data={{
              label: "K1P1551/UM",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage text-center pt-2">
            <MotorCircleDigitalTag
              className={`dot p-1  digital-tag ${useColorStatus(
                "CLRHOP2/ANN"
              )}`}
              label="CLRHOP2/ANN"
              text=""
            />
            <BlackContainer
              data={{
                label: "K1T_H2_TZ/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF03/V")}`}
            label="CLGF03/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF04/V")}`}
            label="CLGF04/V"
          />
          <BlackContainer
            data={{
              label: "K1P1851/UM",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage text-center pt-2">
            <MotorCircleDigitalTag
              className={`dot p-1  digital-tag ${useColorStatus(
                "CLRHOP3/ANN"
              )}`}
              label="CLRHOP3/ANN"
              text=""
            />
            <BlackContainer
              data={{
                label: "K1T_H3_TZ/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF05/V")}`}
            label="CLGF05/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF06/V")}`}
            label="CLGF06/V"
          />
          <BlackContainer
            data={{
              label: "K1P1951/UM",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage text-center pt-2">
            <MotorCircleDigitalTag
              className={`dot p-1  digital-tag ${useColorStatus(
                "CLRHOP4/ANN"
              )}`}
              label="CLRHOP4/ANN"
              text=""
            />
            <BlackContainer
              data={{
                label: "K1T_H4_TZ/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF07/V")}`}
            label="CLGF07/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF08/V")}`}
            label="CLGF08/V"
          />
          <BlackContainer
            data={{
              label: "K1P2551/UM",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage text-center pt-2">
            <MotorCircleDigitalTag
              className={`dot p-1  digital-tag ${useColorStatus(
                "CLRHOP5/ANN"
              )}`}
              label="CLRHOP5/ANN"
              text=""
            />
            <BlackContainer
              data={{
                label: "K1T_H5_TZ/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF09/V")}`}
            label="CLGF09/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF10/V")}`}
            label="CLGF10/V"
          />
        </div>
        <div className="text-center">
          <div className="containerImage text-center pt-2">
            <MotorCircleDigitalTag
              className={`dot p-1  digital-tag ${useColorStatus(
                "CLRHOP6/ANN"
              )}`}
              label="CLRHOP6/ANN"
              text=""
            />
            <BlackContainer
              data={{
                label: "K1T_H6_TZ/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF11/V")}`}
            label="CLGF11/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF12/V")}`}
            label="CLGF12/V"
          />
          <BlackContainer
            data={{
              label: "K1P2651/UM",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage text-center pt-2">
            <MotorCircleDigitalTag
              className={`dot p-1  digital-tag ${useColorStatus(
                "CLRHOP7/ANN"
              )}`}
              label="CLRHOP7/ANN"
              text=""
            />
            <BlackContainer
              data={{
                label: "K1T_H7_TZ/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF13/V")}`}
            label="CLGF13/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF14/V")}`}
            label="CLGF14/V"
          />
        </div>
        <div className="text-center">
          <div className="containerImage text-center pt-2">
            <MotorCircleDigitalTag
              className={`dot p-1  digital-tag ${useColorStatus(
                "CLRHOP8/ANN"
              )}`}
              label="CLRHOP8/ANN"
              text=""
            />
            <BlackContainer
              data={{
                label: "K1T_H8_TZ/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square mt-2 digital-tag ${useColorStatus("CLGF15/V")}`}
            label="CLGF15/V"
          />
          <MotorCircleDigitalTag
            className={`square mt-1 digital-tag ${useColorStatus("CLGF16/V")}`}
            label="CLGF16/V"
          />
        </div>
      </div>
      <div className="single-text-12 position-absolute">
        <div className="box-1 p-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "KM156/POSVAL",
                useClass: "greenTxt ml-3",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SP",
              }}
            />
            <BlackContainer
              data={{
                label: "KM156/POSSP",
                useClass: "greenTxt ml-3",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-13 position-absolute chimni-red"></div>
      <div className=" position-absolute single-text-14 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM186A",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-1 digital-tag ${useFanImgTagsColorStatus(
            "KM186A/M"
          )}`}
          label="KM186A/M"
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-4 digital-tag ${useFanImgTagsColorStatus(
            "KM186B/M"
          )}`}
          label="KM186B/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM186B",
          }}
        />
      </div>
      <div className="single-text-15 position-absolute squareplustri text-center pt-2">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("322_CC1/M1")}`}
          label="322_CC1/M1"
        />
      </div>
      <div className="position-absolute single-text-16 ">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM183/M")}`}
            label="KM183/M"
            text=""
          />
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM186/M")}`}
            label="KM186/M"
            text=""
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 text-center">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("KM184/M")}`}
          label="KM184/M"
        />
        <BlackContainer
          data={{
            label: "KM184/POSVAL",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "KM184",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 text-center">
        <MotorCircleDigitalTag
          className={`square  digital-tag ${useColorStatus("KGS404/M")}`}
          label="KGS404/M"
        />
        <BlackContainer
          data={{
            label: "KGS404/POSVAL",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 ">
        <BlackContainer
          data={{
            label: "ESP_IL_TEMP/UM",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P1451/UM",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "KM183_PID/HD",
            useClass: "greenTxt mb-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T1351/UM",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "KM17751/UM",
            useClass: "greenTxt mb-1",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot p-1 digital-tag ${useColorStatus("KM177/M")}`}
            label="KM177/M"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KM 177",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "K1T1751/UM",
          useClass: "greenTxt position-absolute single-text-23",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-24 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 156",
          }}
        />
        <MotorCircleDigitalTag
          className={`square ml-1 digital-tag ${useColorStatus("KM156/M")}`}
          label="KM156/M"
        />
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 178",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-1 ml-1 digital-tag ${useColorStatus("KM178/M")}`}
          label="KM178/M"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 155",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 161",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 163",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 165",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 167",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 169",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 171",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KM 173",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM185/AMP",
          useClass: "greenTxt position-absolute single-text-27",
          unit: "amp",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-28 d-flex ">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("KM185/PCS")}`}
          label="KM185/PCS"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PCS",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM157A/M")}`}
            label="KM157A/M"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("KM157/M")}`}
            label="KM157/M"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex ">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("KM183COIL/ANN")}`}
          label="KM183COIL/ANN"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "DC STATUS",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "KM157",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "KM157A",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "KM190",
            }}
          />
          <MotorCircleDigitalTag
            className={`square ml-1 digital-tag ${useColorStatus("KM190/HT")}`}
            label="KM190/HT"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "KA182A",
            }}
          />
          <MotorCircleDigitalTag
            className={`square ml-1 digital-tag ${useColorStatus(
              "KM182A/PNL"
            )}`}
            label="KM182A/PNL"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM191/PNL")}`}
            label="KM191/PNL"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "KM191",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "KM194WSP/UM",
              useClass: "greenTxt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P12551/UM",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K1F40751/UM",
              useClass: "greenTxt",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "KM183/KW",
            useClass: "greenTxt mb-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ESP FAN",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-35",
          label: "KM186",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-36",
          label: "KM183",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-37",
          label: "TAD",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-38",
          label: "COOLER",
        }}
      />

      <div className="pipe-1 pipeVr position-absolute text-center pt-3">
        CLINKER STOCK PILE
      </div>
      <div className="pipe-3 pipeHr position-absolute"></div>

      <div class="yellowline-Vr downArrow position-absolute line-1"></div>
      <div class="yellowline-Vr downArrow position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow position-absolute line-3"></div>
      <div class="yellowline-Vr downArrow position-absolute line-4"></div>
      <div class="yellowline-Vr downArrow position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow position-absolute line-6"></div>
      <div class="yellowline-Vr downArrow position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow position-absolute line-8"></div>
      <div class="yellowline-Vr downArrow position-absolute line-9"></div>
      <div class="yellowline-Vr upArrow position-absolute line-10"></div>
      <div class="yellowline-Vr upArrow position-absolute line-11"></div>
      <div class="yellowline-Vr upArrow position-absolute line-12"></div>
      <div class="yellowline-Vr upArrow position-absolute line-13"></div>
      <div class="yellowline-Vr upArrow position-absolute line-14"></div>
      <div class="yellowline-Vr upArrow position-absolute line-15"></div>
      <div class="yellowline-Vr upArrow position-absolute line-16"></div>
      <div class="yellowline-Vr upArrow position-absolute line-17"></div>
      <div class="yellowline-Vr position-absolute line-18"></div>
      <div class="yellowline-Hr position-absolute line-19"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-20"></div>
      <div class="yellowline-Vr downArrow position-absolute line-21"></div>
      <div class="yellowline-Vr position-absolute line-22"></div>
      <div class="yellowline-Vr position-absolute line-23"></div>
      <div class="yellowline-Hr position-absolute line-24"></div>
      <div class="yellowline-Vr position-absolute line-25"></div>
      <div class="yellowline-Hr position-absolute line-26"></div>
      <div class="yellowline-Hr position-absolute line-27"></div>
      <div class="yellowline-Vr position-absolute line-28"></div>
      <div class="yellowline-Vr position-absolute line-29"></div>
      <div class="yellowline-Vr downArrow position-absolute line-30"></div>
      <div class="yellowline-Hr position-absolute line-31"></div>
      <div class="yellowline-Vr upArrow position-absolute line-32"></div>
      <div class="yellowline-Vr upArrow position-absolute line-33"></div>
      <div class="yellowline-Vr downArrow position-absolute line-34"></div>
    </div>
  );
};
