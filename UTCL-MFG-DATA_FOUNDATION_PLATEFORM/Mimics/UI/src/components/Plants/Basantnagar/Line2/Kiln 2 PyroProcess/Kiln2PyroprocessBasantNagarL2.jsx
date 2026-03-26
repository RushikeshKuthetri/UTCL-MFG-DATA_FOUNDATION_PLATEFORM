import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  SingleText,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus } from "../../../../../utils";

export const Kiln2PyroprocessBasantNagarL2 = () => {
  return (
    <div className="BasantNagar-L2-Kiln-2-Pyroprocess w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className=" border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FEEDING SYSTEM",
            }}
          />
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ROT AIR LOCK",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                "K218RAL01"
              )}`}
              label="K218RAL01"
              text="M"
            />
            <BlackContainer
              data={{
                label: "IIK253",
                useClass: "greenTxt ml-2",
                unit: "Amps",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "BKT ELEVATOR",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                "K218BEM02"
              )}`}
              label="K218BEM02"
              text="M"
            />
            <BlackContainer
              data={{
                label: "IIK254",
                useClass: "greenTxt ml-2",
                unit: "Amps",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AS BLOWER-1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                "K218BLM03"
              )}`}
              label="K218BLM03"
              text="M"
            />
            <BlackContainer
              data={{
                label: "IIK265",
                useClass: "greenTxt ml-2",
                unit: "Amps",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AS BLOWER-2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                "K218BLM04"
              )}`}
              label="K218BLM04"
              text="M"
            />
            <BlackContainer
              data={{
                label: "IIK266",
                useClass: "greenTxt ml-2",
                unit: "Amps",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SOLID FLOW FDR",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                "K218SFF05"
              )}`}
              label="K218SFF05"
              text="M"
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AER. BLOWER-1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                "K218BLM08"
              )}`}
              label="K218BLM08"
              text="M"
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AER. BLOWER-2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-1 ml-2 digital-tag ${useColorStatus(
                "K218BLM07"
              )}`}
              label="K218BLM07"
              text="M"
            />
          </div>
          <div className="text-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SURGE HOPPER WEIGHT",
              }}
            />
            <BlackContainer
              data={{
                label: "WIK251",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className=" border p-1 text-center mt-2">
          <div className="d-flex  justify-content-end mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MAIN COAL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "PC COAL",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SET PT.",
              }}
            />
            <BlackContainer
              data={{
                label: "K211LWP03_SR",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K212WLP07_SR",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PR.VAL.",
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
                label: "TOTAL COAL",
              }}
            />
            <BlackContainer
              data={{
                label: "FIK201C",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <div className=" border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MATERIAL TEMPERATURE",
            }}
          />
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-1A",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK253",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-1B",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK254",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-2",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK256",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-3",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK258",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-4",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK260",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-5",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK262",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className=" border p-1 text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CYCLONE O/L GAS TEMP",
            }}
          />
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-2",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK255",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-3",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK257",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-4",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK259",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CYCLONE-5",
              }}
            />
            <BlackContainer
              data={{
                label: "TIK261",
                useClass: "greenTxt ml-2",
                unit: "DegC",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <div className=" border p-1 text-center">
          <div className="d-flex  justify-content-end mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PH O/L",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WGF O/L",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "O2",
              }}
            />
            <BlackContainer
              data={{
                label: "AIK206",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "AIK202",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CO",
              }}
            />
            <BlackContainer
              data={{
                label: "AIK205",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "AIK201",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className=" border p-1 text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN FEED",
            }}
          />
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SET POINT",
              }}
            />
            <BlackContainer
              data={{
                label: "K218SFF05_SR",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FEED RATE",
              }}
            />
            <BlackContainer
              data={{
                label: "FIK251",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 border p-1 text-center">
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED SETPT",
            }}
          />
          <BlackContainer
            data={{
              label: "K219WGF04_SR1",
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
              label: "SPEED(SPRS)",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK252",
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
              label: "CURRENT(SPRS)",
            }}
          />
          <BlackContainer
            data={{
              label: "IIK257",
              useClass: "greenTxt ml-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOTOR CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "IIK258",
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
              label: "BRG TEMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "VIBRN",
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
              label: "TIK267",
              useClass: "greenTxt ",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIK251",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
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
              label: "TIK268",
              useClass: "greenTxt ",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIK252",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <table className="">
          <tr>
            <th></th>
            <th>CLR FAN-1</th>
            <th>CLR FAN-2</th>
            <th>CLR FAN-3</th>
            <th>CLR FAN-4</th>
            <th>CLR FAN-5</th>
          </tr>

          <tr>
            <td>Setpoint</td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "K214FNM02_SR",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "K214FNM03_SR",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "K214FNM04_SR",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "K214FNM05_SR",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "K214FNM06_SR",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Flowrate</td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "PIK217C",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "PIK218C",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PIK219C",
                  useClass: "greenTxt ",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "PIK220C",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "PIK221C",
                  useClass: "greenTxt",
                  unit: "m3/min",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Fan RPM</td>
            <td>
              <BlackContainer
                data={{
                  label: "SIK204",
                  useClass: "greenTxt ",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "SIK205",
                  useClass: "greenTxt ",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "SIK206",
                  useClass: "greenTxt ",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "SIK207",
                  useClass: "greenTxt ",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "SIK208",
                  useClass: "greenTxt ",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Amps</td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "IIK213",
                  useClass: "greenTxt ml-2",
                  unit: "Amps",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "IIK214",
                  useClass: "greenTxt ml-2",
                  unit: "Amps",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "IIK215",
                  useClass: "greenTxt ml-2",
                  unit: "Amps",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "IIK216",
                  useClass: "greenTxt ml-2",
                  unit: "Amps",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "IIK217",
                  useClass: "greenTxt ml-2",
                  unit: "Amps",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="position-absolute single-text-6 border p-1 text-center">
        <div className="text-center d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ST.PT.",
            }}
          />
          <BlackContainer
            data={{
              label: "K214FNM07_SR",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK209",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Current",
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
      <div className="position-absolute single-text-7 img-107 d-flex align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "PIK208",
              useClass: "greenTxt ml-2",
              unit: "mmWCL",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "TIK206",
              useClass: "greenTxt ",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK201C",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 img-83 d-flex  pl-3 pt-3">
        <MotorCircleDigitalTag
          className={`dot p-1 ml-3 digital-tag ${useColorStatus("K216TRP01")}`}
          label="K216TRP01"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("K216TRP02")}`}
          label="K216TRP02"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("K216TRP03")}`}
          label="K216TRP03"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-9 chimni-red"></div>
      <div className="position-absolute single-text-10 chimni-red"></div>
      <div className="position-absolute single-text-11 asset-72 pl-2">
        <BlackContainer
          data={{
            label: "TIK276",
            useClass: "greenTxt mt-3",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK277",
            useClass: "greenTxt mt-1",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK278",
            useClass: "greenTxt mt-1",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <MotorCircleDigitalTag
          className={`dot p-1  digital-tag ${useColorStatus("K220RAL04")}`}
          label="K220RAL04"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("K220RAL05")}`}
          label="K220RAL05"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("K220RAL06")}`}
          label="K220RAL06"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("K220RAL07")}`}
          label="K220RAL07"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K219WGF04")}`}
            label="K219WGF04"
            text="M"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K220FNM08")}`}
            label="K220FNM08"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K214FNM07")}`}
            label="K214FNM07"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 border p-1">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`dot p-1  digital-tag ${useColorStatus("K213BLM04")}`}
            label="K213BLM04"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Blowers",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1  digital-tag ${useColorStatus("K213BLM03")}`}
            label="K213BLM03"
            text="M"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center my-2">
          <MotorCircleDigitalTag
            className={`dot p-1  digital-tag ${useColorStatus("K213KMM05")}`}
            label="K213KMM05"
            text="M"
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`dot p-1  digital-tag ${useColorStatus("K213OPM02")}`}
            label="K213OPM02"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Oil Pmp",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-1  digital-tag ${useColorStatus("K213OPM01")}`}
            label="K213OPM01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 border p-1 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "K214HCM01_SR",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SPM201C",
              useClass: "greenTxt mt-1",
              unit: "spm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HYDRAULIC COOLER",
            }}
          />
          <BlackContainer
            data={{
              label: "PIK210",
              useClass: "greenTxt mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PIK211",
              useClass: "greenTxt mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot p-1  digital-tag ${useColorStatus("K214HCM01")}`}
            label="K214HCM01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "IIK211",
              useClass: "greenTxt mt-1",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-17 position-absolute text-center d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "PD Damper press",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK288",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "Purging press",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK289",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 border p-1 text-center">
        <div className="text-center d-flex justify-content-between">
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
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
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
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Current",
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
      <div className="single-text-19 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "grayDot" }}
          text={{
            useClass: "text-dark ml-auto text-center",
            label: "CROSS DPC",
          }}
          secondCircle={{
            secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
              "K215DPM01"
            )}`,
            secondCircleLabel: "K215DPM01",
          }}
        />
        <BlackContainer
          data={{
            label: "IIK219",
            useClass: "greenTxt mt-1 ml-auto",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-20 position-absolute d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "grayDot" }}
          text={{
            useClass: "text-dark ml-auto text-center",
            label: "CROSS DPC",
          }}
          secondCircle={{
            secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
              "K215DPM05"
            )}`,
            secondCircleLabel: "K215DPM05",
          }}
        />
        <BlackContainer
          data={{
            label: "IIK221",
            useClass: "greenTxt ml-2 ",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 text-center">
        <BlackContainer
          data={{
            label: "PIK250",
            useClass: "greenTxt ",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Kiln speed set point",
          }}
        />
        <BlackContainer
          data={{
            label: "K213KMM05_SR",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-22 position-absolute">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          secondCircle={{
            secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
              "K220ENM03"
            )}`,
            secondCircleLabel: "K220ENM03",
          }}
        />
        <BlackContainer
          data={{
            label: "IIK262",
            useClass: "greenTxt mt-1 ml-auto",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 text-center">
        <BlackContainer
          data={{
            label: "PIK290",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK279",
            useClass: "greenTxt mt-3",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 text-center">
        <BlackContainer
          data={{
            label: "PIK231",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK244",
            useClass: "greenTxt mt-3",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 border p-1 text-center">
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED ",
            }}
          />
          <BlackContainer
            data={{
              label: "SIK254",
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
              label: "AMPS",
            }}
          />
          <BlackContainer
            data={{
              label: "IIK260",
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
              label: "BRG TEMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "VIBRN",
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
              label: "TIK280",
              useClass: "greenTxt ",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIK253",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
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
              label: "TIK281",
              useClass: "greenTxt ",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIK254",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 ">
        <BlackContainer
          data={{
            label: "TIK262",
            useClass: "greenTxt mt-1 ml-2",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK267",
            useClass: "greenTxt mt-1 ml-2",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK264",
            useClass: "greenTxt mt-3",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK270",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "PIK274",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "GCT_AVG_VAL_M",
            useClass: "greenTxt mt-3",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK273",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute text-center d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TERTIARY AIR TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "TIK247",
              useClass: "greenTxt mt-1",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PIK291",
              useClass: "greenTxt mt-2",
              unit: "mmWCL",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "PIK224",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK243",
            useClass: "greenTxt mt-2",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "TIK261",
            useClass: "greenTxt ",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK266",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "BH Fan parameters",
          }}
        />
        <BlackContainer
          data={{
            label: "K220FNM08_SR",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "PIK253",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK252",
            useClass: "greenTxt mt-2",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 box-1 d-flex align-items-end px-2 justify-content-between">
        <BlackContainer
          data={{
            label: "PIK212",
            useClass: "greenTxt ",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK213",
            useClass: "greenTxt ",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK214",
            useClass: "greenTxt ",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK215",
            useClass: "greenTxt ",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K214FNM06")}`}
            label="K214FNM06"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K214FNM05")}`}
            label="K214FNM05"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K214FNM04")}`}
            label="K214FNM04"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K214FNM03")}`}
            label="K214FNM03"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K214FNM02")}`}
            label="K214FNM02"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "PA PRESS",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK209",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("K211FNM01")}`}
            label="K211FNM01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SEC.AIR TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK248",
            useClass: "greenTxt mt-1",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1A",
            }}
          />
          <BlackContainer
            data={{
              label: "PIK254",
              useClass: "greenTxt mt-2",
              unit: "mmWCL",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1B",
            }}
          />
          <BlackContainer
            data={{
              label: "PIK255",
              useClass: "greenTxt mt-2",
              unit: "mmWCL",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 containerImage text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "2",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK257",
            useClass: "greenTxt mt-2",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39 containerImage text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "3",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK261",
            useClass: "greenTxt mt-2",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 containerImage text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "4",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK264",
            useClass: "greenTxt mt-2",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 containerImage text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "5",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK269",
            useClass: "greenTxt mt-2",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PIK275",
          useClass: "greenTxt position-absolute single-text-42",
          unit: "mmWCL",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "GIK252C",
          useClass: "greenTxt  position-absolute single-text-43",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PIK295",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "mmWCL",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PIK292",
          useClass: "greenTxt position-absolute single-text-45",
          unit: "mmWCL",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-46 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PREDUSTER MAT TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK246",
            useClass: "greenTxt mt-1",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PIK290C",
          useClass: "greenTxt position-absolute single-text-47",
          unit: "mmWCL",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("K215CBM08")}`}
          label="K215CBM08"
          text="M"
        />
        <BlackContainer
          data={{
            label: "IIK220",
            useClass: "greenTxt mt-3",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-49",
          label: "MAIN DPC",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-50",
          label: "SURGE HOPPER",
        }}
      />
      <BlackContainer
        data={{
          label: "GIK253C",
          useClass: "greenTxt  position-absolute single-text-51",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PIK216",
          useClass: "greenTxt position-absolute single-text-52",
          unit: "mmWCL",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "PIK265",
            useClass: "greenTxt mt-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TIK287",
            useClass: "greenTxt mt-2",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="pipe-1 pipeHr position-absolute"></div>
      <div className="pipe-2 pipeHr position-absolute"></div>
      <div className="pipe-3 pipeVr position-absolute"></div>
      <div className="pipe-4 pipeVr position-absolute"></div>
      <div className="pipe-5 pipeVr position-absolute"></div>
      <div className="pipe-6 pipeVr position-absolute"></div>
      <div className="pipe-7 pipeVr position-absolute"></div>
      <div className="pipe-8 pipeHr position-absolute"></div>
      <div className="pipe-9 pipeHr position-absolute"></div>
      <div className="pipe-10 pipeVr position-absolute">
        <BlackContainer
          data={{
            label: "TIK288",
            useClass: "greenTxt mb-3",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIK296",
            useClass: "greenTxt mt-4",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipe-11 pipeVr position-absolute"></div>
      <div className="pipe-12 pipeVr position-absolute"></div>
      <div className="pipe-13 pipeHr position-absolute"></div>
      <div className="pipe-14 pipeHr position-absolute"></div>
      <div className="pipe-15 pipeVr position-absolute"></div>
      <div className="pipe-16 pipeVr position-absolute"></div>
      <div className="pipe-17 pipeHr position-absolute"></div>
      <div className="pipe-18 pipeHr position-absolute"></div>
      <div className="pipe-19 pipeVr position-absolute"></div>
      <div className="pipe-20 pipeVr position-absolute"></div>
      <div className="pipe-21 pipeVr position-absolute"></div>
      <div className="pipe-22 pipeVr position-absolute"></div>
      <div className="pipe-23 pipeVr position-absolute"></div>
      <div className="pipe-24 pipeVr position-absolute"></div>
      <div className="pipe-25 pipeVr position-absolute"></div>
      <div className="pipe-26 pipeHr position-absolute"></div>
      <div className="pipe-27 pipeHr position-absolute"></div>
      <div className="pipe-28 pipeHr position-absolute"></div>
      <div className="pipe-29 pipeHr position-absolute"></div>
      <div className="pipe-30 pipeHr position-absolute"></div>
      <div className="pipe-31 pipeVr position-absolute"></div>
      <div className="pipe-32 pipeVr position-absolute"></div>
      <div className="pipe-33 pipeVr position-absolute"></div>
      <div className="pipe-34 pipeVr position-absolute"></div>
      <div className="pipe-35 pipeHr position-absolute"></div>
      <div className="pipe-36 pipeVr position-absolute"></div>
      <div className="pipe-37 pipeVr position-absolute"></div>
      <div className="pipe-38 pipeHr position-absolute"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
    </div>
  );
};
