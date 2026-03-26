import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus } from "../../../../../utils";

export const Kiln2CoalMillAndFiringBasantNagarL2 = () => {
  return (
    <div className="Basantnagar-L2-Kiln-2-Coal-Mill-Firing  w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute d-flex">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "TIC216",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC215",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC214",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PIC207",
              useClass: "greenTxt mb-2 mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "TIC218",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC217",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC219",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PIC208",
              useClass: "greenTxt mb-2 mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "TIC222",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC221",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC220",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PIC209",
              useClass: "greenTxt mb-2 mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-2 position-absolute drumContainer d-flex flex-column align-items-center justify-content-center">
        <BlackContainer
          data={{
            label: "PIC204C",
            useClass: "greenTxt",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2",
            label: "COAL MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "EEC201",
            useClass: "greenTxt mt-2",
            unit: "db",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3  border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MAIN COAL",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SET POINT",
            }}
          />
          <BlackContainer
            data={{
              label: "K212WLP07_SR",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FEED RATE",
            }}
          />
          <BlackContainer
            data={{
              label: "FIK201",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SCREW-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "SCREW-2",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <BlackContainer
            data={{
              label: "SIK212",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK213",
              useClass: "greenTxt ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <BlackContainer
            data={{
              label: "IIK201",
              useClass: "greenTxt",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "IIK202",
              useClass: "greenTxt ml-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4  border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PC COAL",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SET POINT",
            }}
          />
          <BlackContainer
            data={{
              label: "K211LWP03_SR1",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FEED RATE",
            }}
          />
          <BlackContainer
            data={{
              label: "FIK202",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SCREW-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "SCREW-2",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <BlackContainer
            data={{
              label: "SIK214",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK215",
              useClass: "greenTxt ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <BlackContainer
            data={{
              label: "IIK203",
              useClass: "greenTxt",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "IIK204",
              useClass: "greenTxt ml-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5  border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P.A FAN",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED SP",
            }}
          />
          <BlackContainer
            data={{
              label: "K211FNM01_SR",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK203",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "IIK208",
              useClass: "greenTxt ml-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LIWS PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK201",
            useClass: "greenTxt mt-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 border p-1 text-center">
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Classifier DP",
            }}
          />
          <BlackContainer
            data={{
              label: "PIC212_C",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Cyclone DP",
            }}
          />
          <BlackContainer
            data={{
              label: "PIC205_C",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "INT HOPPER WEIGHT",
          }}
        />
        <BlackContainer
          data={{
            label: "WIC202K",
            useClass: "greenTxt ml-2",
            unit: "Kgs",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 border p-2 text-center">
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED SP",
            }}
          />
          <BlackContainer
            data={{
              label: "C211FNM05_SR",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIC202",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "IIC205",
              useClass: "greenTxt ml-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "TEMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "VIB",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DE",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC210",
              useClass: "greenTxt ",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIC201",
              useClass: "greenTxt ml-2",
              unit: "m/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC211",
              useClass: "greenTxt ",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIC202",
              useClass: "greenTxt ml-2",
              unit: "m/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-10 position-absolute d-flex">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "PIC210",
              useClass: "greenTxt mb-2 mt-1",
              unit: "mmWCL",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC224",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "PIC211",
              useClass: "greenTxt mb-2 mt-1",
              unit: "mmWCL",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC225",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11  border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BOOSTER FAN",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`dot p-2 mr-3 digital-tag ${useColorStatus(
              "C211FNM10"
            )}`}
            label="C211FNM10"
            text="M"
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SET PT.",
            }}
          />
          <BlackContainer
            data={{
              label: "C211FNM10_SR",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK217",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "IIK218",
              useClass: "greenTxt ml-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12  border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLASSIFIER",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PC",
            }}
          />
          <BlackContainer
            data={{
              label: "C211CFM07_SR",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIC203",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "IIC206",
              useClass: "greenTxt ml-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "TIC213",
            useClass: "greenTxt mt-1",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC206",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("C211FNM05")}`}
            label="C211FNM05"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark MT-1",
            label: "CDC FAN",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 chimni-red"></div>
      <div className="single-text-15 position-absolute d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PC COAL HOPPER",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC226",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "WIC203",
              useClass: "greenTxt mb-2 mt-1",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MAIN COAL HOPPER",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC223",
              useClass: "greenTxt mb-2 mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "WIC201",
              useClass: "greenTxt mb-2 mt-1",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-16 position-absolute squareplustri text-center">
        <BlackContainer
          data={{
            label: "LIC201",
            useClass: "greenTxt mb-2 mt-2",
            unit: "mtrs",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIC204",
            useClass: "greenTxt mb-2 mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SIC201",
            useClass: "greenTxt mb-2 mt-1",
            unit: "rmp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-17 position-absolute squareplustri text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PC LIWS",
          }}
        />
        <BlackContainer
          data={{
            label: "WIK202",
            useClass: "greenTxt mb-2 mt-2",
            unit: "Kgs",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K212LWP07")}`}
          label="K212LWP07"
          text="M"
        />
      </div>
      <div className="single-text-18 position-absolute squareplustri text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "MAIN LIWS",
          }}
        />
        <BlackContainer
          data={{
            label: "WIK201",
            useClass: "greenTxt mb-2 mt-2",
            unit: "Kgs",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K211LWP03")}`}
          label="K211LWP03"
          text="M"
        />
      </div>
      <div className="single-text-19 position-absolute squareplustri text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Classifier",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-2 digital-tag ${useColorStatus("C211CFM07")}`}
          label="C211CFM07"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-20 box-1 text-center bg-secondary">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "COAL DUST COLLECTOR",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC206C",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 border p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "COAL MILL OIL PUMPS",
          }}
        />
        <div className="d-flex mt-2">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "I/L BRG",
              }}
            />
            <div className="d-flex mt-1">
              <MotorCircleDigitalTag
                className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                  "C211OPM01"
                )}`}
                label="C211OPM01"
                text="M"
              />
              <MotorCircleDigitalTag
                className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                  "C211OPM01"
                )}`}
                label="C211OPM01"
                text="M"
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-3",
                  label: "2",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "PIC201",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "O/L BRG",
              }}
            />
            <div className="d-flex mt-1">
              <MotorCircleDigitalTag
                className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                  "C211OPM01"
                )}`}
                label="C211OPM01"
                text="M"
              />
              <MotorCircleDigitalTag
                className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                  "C211OPM01"
                )}`}
                label="C211OPM01"
                text="M"
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-3",
                  label: "2",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "PIC202",
                useClass: "greenTxt mt-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "GEAR BOX",
              }}
            />
            <div className="d-flex mt-1">
              <MotorCircleDigitalTag
                className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                  "C211OPM01"
                )}`}
                label="C211OPM01"
                text="M"
              />
              <MotorCircleDigitalTag
                className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                  "C211OPM01"
                )}`}
                label="C211OPM01"
                text="M"
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-2",
                  label: "1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-3",
                  label: "2",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "PIC203",
                useClass: "greenTxt mt-2 mr-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-22 position-absolute text-center">
        <BlackContainer
          data={{
            label: "TIC204",
            useClass: "greenTxt mb-2 mt-1",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mb-2 digital-tag ${useColorStatus("C211CMM06")}`}
          label="C211CMM06"
          text="M"
        />
        <BlackContainer
          data={{
            label: "IIC201",
            useClass: "greenTxt mb-2 ",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute text-center d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "Comp. Air",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC213",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC205",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-24 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("C212RAL03")}`}
          label="C212RAL03"
        />
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("C212RAL04")}`}
          label="C212RAL04"
        />
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("C212RAL05")}`}
          label="C212RAL05"
        />
      </div>
      <div className="single-text-25 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("C212RAL09")}`}
          label="C212RAL09"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("C212RAL10")}`}
          label="C212RAL10"
          text="M"
        />
      </div>
      <div className="single-text-26 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("C212FNM08")}`}
          label="C212FNM08"
          text="M"
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot p-2 single-text-27 position-absolute digital-tag ${useColorStatus(
          "K211FNM02"
        )}`}
        label="K211FNM02"
        text="M"
      />
      <div className="single-text-28 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          secondCircle={{
            secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
              "C212SCM02"
            )}`,
            secondCircleLabel: "C212SCM02",
          }}
        />
        <BlackContainer
          data={{
            label: "IIK202A",
            useClass: "greenTxt ml-auto mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-29 position-absolute">
        <div className="d-flex justify-content-end">
          <BlackContainer
            data={{
              label: "IIC203",
              useClass: "greenTxt mb-1",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          secondCircle={{
            secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
              "C212ENM12"
            )}`,
            secondCircleLabel: "C212ENM12",
            secondCircleText: "M",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-30"
        secondCircle={{
          secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
            "C212SCM13"
          )}`,
          secondCircleLabel: "C212SCM13",
          secondCircleText: "M",
        }}
      />

      <MotorCircleDigitalTag
        className={`dot p-2 single-text-31 position-absolute digital-tag ${useColorStatus(
          "C211FTM08"
        )}`}
        label="C211FTM08"
        text="M"
      />

      <div className="single-text-32 position-absolute">
        <BlackContainer
          data={{
            label: "IIK207",
            useClass: "greenTxt mb-1 ",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK206",
            useClass: "greenTxt mb-4",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK207",
            useClass: "greenTxt mt-3",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-33 position-absolute">
        <BlackContainer
          data={{
            label: "TIC201",
            useClass: "greenTxt mb-1 ",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC203",
            useClass: "greenTxt mb-4",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIC203",
            useClass: "greenTxt mt-3",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-34 position-absolute">
        <BlackContainer
          data={{
            label: "TIC229",
            useClass: "greenTxt mb-5",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIC202",
            useClass: "greenTxt mb-1",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC204",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-35 position-absolute">
        <BlackContainer
          data={{
            label: "PIC212",
            useClass: "greenTxt mb-2",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIC228",
            useClass: "greenTxt mb-1 ",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-36 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          secondCircle={{
            secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
              "C212SCM01"
            )}`,
            secondCircleLabel: "C212SCM01",
          }}
        />
        <BlackContainer
          data={{
            label: "IIC202",
            useClass: "greenTxt mt-1 ml-auto",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BOOSTER FAN DAMPER",
          }}
        />
        <BlackContainer
          data={{
            label: "GIC202",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "TIC227",
          useClass: "greenTxt single-text-38 position-absolute",
          unit: "DegC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "C211FTM08_SR",
          useClass: "greenTxt single-text-39 position-absolute",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-40 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 mb-1 digital-tag ${useColorStatus("K212PSM04")}`}
          label="K212PSM04"
          text="M"
        />
        <BlackContainer
          data={{
            label: "IIK206",
            useClass: "greenTxt",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-41 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "IIK206A",
            useClass: "greenTxt",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("K212PSM03")}`}
          label="K212PSM03"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-42 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K212BLM01")}`}
            label="K212BLM01"
            text="M"
          />
        </div>
        <div className="connector-icon ml-2">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K212BLM02")}`}
            label="K212BLM02"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K211FNM01")}`}
            label="K211FNM01"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-44 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("C212RAL11")}`}
          label="C212RAL11"
        />
      </div>
      <div className="single-text-45 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO MFC",
          }}
        />
      </div>
      <div className="single-text-46 position-absolute">
        <BlackContainer
          data={{
            label: "IIK207A",
            useClass: "greenTxt mb-1 ",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-47 position-absolute">
        <BlackContainer
          data={{
            label: "PIK209",
            useClass: "greenTxt mb-1 ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PIK235",
          useClass: "greenTxt single-text-48 position-absolute",
          unit: "mmWCL",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "TIC212",
          useClass: "greenTxt single-text-49 position-absolute",
          unit: "DegC",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-50 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("K211RAL02")}`}
          label="K211RAL02"
          text="M"
        />
      </div>
      <div className="single-text-51 position-absolute ">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("K212RAL05")}`}
          label="K212RAL05"
        />
      </div>
      <div className="single-text-52 position-absolute roller-drum"></div>

      <div className="pipe-1 pipeHr position-absolute"></div>
      <div className="pipe-2 pipeVr position-absolute"></div>
      <div className="pipe-3 pipeHr position-absolute"></div>
      <div className="pipe-4 pipeHr position-absolute"></div>
      <div className="pipe-5 pipeVr position-absolute"></div>
      <div className="pipe-6 pipeVr position-absolute"></div>
      <div className="pipe-7 pipeHr position-absolute"></div>
      <div className="pipe-8 pipeVr position-absolute"></div>
      <div className="pipe-9 pipeVr position-absolute"></div>
      <div className="pipe-10 pipeVr position-absolute"></div>
      <div className="pipe-11 pipeHr position-absolute"></div>
      <div className="pipe-12 pipeVr position-absolute"></div>
      <div className="pipe-13 pipeVr position-absolute"></div>
      <div className="pipe-14 pipeVr position-absolute"></div>
      <div className="pipe-15 pipeVr position-absolute"></div>
      <div className="pipe-16 pipeHr position-absolute"></div>
      <div className="pipe-17 pipeHr position-absolute"></div>
      <div className="pipe-18 pipeVr position-absolute"></div>
      <div className="pipe-19 pipeHr position-absolute"></div>
      <div className="pipe-20 pipeHr position-absolute"></div>
      <div className="pipe-21 pipeHr position-absolute"></div>
      <div className="pipe-22 pipeVr position-absolute"></div>
      <div className="pipe-23 pipeVr position-absolute"></div>
      <div className="pipe-24 pipeHr position-absolute"></div>
      <div className="pipe-25 pipeHr position-absolute"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-7"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
    </div>
  );
};
