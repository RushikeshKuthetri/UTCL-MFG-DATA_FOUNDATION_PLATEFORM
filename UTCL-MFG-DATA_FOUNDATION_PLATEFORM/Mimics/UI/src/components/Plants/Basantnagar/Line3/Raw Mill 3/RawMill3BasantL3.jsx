import { TextContainerWithWrapWord, PipeWithCircles, BlackContainer, MotorCircleDigitalTag } from "../../../../index";

import { useColorStatus } from "../../../../../utils";

export const RawMill3BasantL3 = () => {
  return (
    <div className="RawMill1BasantL1 RawMill3BasantL3 w-100 h-100 position-relative">
      <div className="containerImage text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "TRANSFER POINT DC",
          }}
        />
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "HG",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "LG",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "BX",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "HM",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-3 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R340WFP04")}`,
            secondCircleText: "M",
            secondCircleLabel: "R340WFP04",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R340WFP03")}`,
            secondCircleText: "M",
            secondCircleLabel: "R340WFP03",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R340WFP02")}`,
            secondCircleText: "M",
            secondCircleLabel: "R340WFP02",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R340WFP01")}`,
            secondCircleText: "M",
            secondCircleLabel: "R340WFP01",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R340BCM02")}`,
          secondCircleText: "M",
          secondCircleLabel: "R340BCM02",
        }}
      />
      <div className="position-absolute single-text-5">
        <table className=" ">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">SETPOINT(%)</th>
              <th scope="col">SETPOINT(TPH)</th>
              <th scope="col">ACT.FEED(TPH)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "HG",
                  }}
                />
              </th>

              <td>&nbsp;</td>
              <td>
                <BlackContainer
                  data={{
                    label: "R340WFP04_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR301",
                    useClass: "greenTxt",
                    unit: "DB",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LG",
                  }}
                />
              </th>

              <td>&nbsp;</td>
              <td>
                <BlackContainer
                  data={{
                    label: "R340WFP03_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR302",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "BX",
                  }}
                />
              </th>

              <td>&nbsp;</td>
              <td>
                <BlackContainer
                  data={{
                    label: "R340FTP01_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR303",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LAT",
                  }}
                />
              </th>

              <td>&nbsp;</td>
              <td>
                <BlackContainer
                  data={{
                    label: "R340FTP02_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR304",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TOT",
                  }}
                />
              </th>

              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM3_TOT_FEED",
                    useClass: "greenTxt",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-6">
        <BlackContainer
          data={{
            label: "IIR312",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R330BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R330BEM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "IIR309",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R340BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R340BEM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        {/* <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "NA",
            unitColor: "unitColor",
          }}
        /> */}
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "M",
            firstCircleLabel: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "IIR310",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R310BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R310BEM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="box-1 p-2 bg-light">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MILL BRARINGS",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "I/L OIL PUMP",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R320OPM08")}`} label="R320OPM08" text="M" />
            <BlackContainer
              data={{
                label: "TIR311",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "IIR321",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "O/L OIL PUMP",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R320OPM07")}`} label="R320OPM07" text="M" />
            <BlackContainer
              data={{
                label: "TIR312",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "IIR322",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GEAR BOX",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-1",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R320OPM01")}`} label="R320OPM01" text="M" />
          </div>
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-2",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R320OPM02")}`} label="R320OPM02" text="M" />
            <BlackContainer
              data={{
                label: "PIR308",
                useClass: "greenTxt",
                unit: "Kg/cm²",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-2 bg-light">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MAIN MOTOR BEARINGS",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DE",
                }}
              />
              <BlackContainer
                data={{
                  label: "TIR301",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "NDE",
                }}
              />
              <BlackContainer
                data={{
                  label: "TIR302",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COUNTER SHAFT BEARINGS",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-1",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R320OPM05")}`} label="R320OPM05" text="M" />
            <BlackContainer
              data={{
                label: "TIR309",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-2",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R320OPM06")}`} label="R320OPM06" text="M" />
            <BlackContainer
              data={{
                label: "TIR310",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-2 bg-light">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "O' SEPA PR .& BRG TEMP.",
            }}
          />
          <div className="d-flex mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OP-1(ROTR)",
              }}
            />
            <MotorCircleDigitalTag className={`dot ml-2 digital-tag p-2 ${useColorStatus("R330OPM01")}`} label="R330OPM01" text="M" />
            <BlackContainer
              data={{
                label: "PIR309",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm²",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR317",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OP-2 (GBOX)",
              }}
            />
            <MotorCircleDigitalTag className={`dot ml-2 digital-tag p-2 ${useColorStatus("R330OPM02")}`} label="R330OPM02" text="M" />
            <BlackContainer
              data={{
                label: "PIR310",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm²",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR318",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "HOT AIR FAN BRG TEMP & VIBRATIONS",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "DE BRG TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR315",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VIR303",
                useClass: "greenTxt ml-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "NDE BRG TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR316",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VIR304",
                useClass: "greenTxt ml-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12 text-center box-1 bg-secondary p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "OSEPA",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "INLEL",
            }}
          />
          <BlackContainer
            data={{
              label: "PIR304",
              useClass: "greenTxt ml-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OUTLET",
            }}
          />
          <BlackContainer
            data={{
              label: "PIR305",
              useClass: "greenTxt ml-3",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 text-center box-1 bg-secondary p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "OSEPA HT FAN BLWR STEPS",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIR309",
              useClass: "greenTxt ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "IIR311",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-14">
        <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R320FNP01")}`} label="R320FNP01" text="M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "O' Sepa",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "SIR306",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIR306",
            useClass: "greenTxt mt-2 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R350FNP01_SR",
            useClass: "greenTxt mt-2 ml-3",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 text-center">
        <div className="containerImage d-flex  text-center justify-content-cente align-items-center">
        </div>
        <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R320RAL01")}`} label="R320RAL01" text="M" />
      </div>
      <div className="drumContainer position-absolute single-text-17"></div>
      <div className="position-absolute single-text-18">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R350FNP01")}`} label="R350FNP01" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R330FNM01")} `} label="R330FNM01" text="M" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R340BCM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "R340BCM01",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-21" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-22" />
      <div className="position-absolute single-text-26">
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MAIN DUST COLLECTOR",
            }}
          />
          <BlackContainer
            data={{
              label: "PIR315C",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-2">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R350RAL01")}`} label="R350RAL01" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R350RAL02")}`} label="R350RAL02" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R330ASB03")}`} label="R330ASB03" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR315",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R330ASB02")}`} label="R330ASB02" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR314",
              useClass: "greenTxt mt-2 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R310ASB03")}`} label="R310ASB03" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR316",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R310ASB02")}`} label="R310ASB02" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR317",
              useClass: "greenTxt mt-2 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "TIR314",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
          data={{
            label: "PIR301",
            useClass: "greenTxt mt-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PIR302",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIR313",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RAW MILL 3",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-2 ${useColorStatus("R330RMM01")}`} label="R330RMM01" text="M" />
        <BlackContainer
          data={{
            label: "IIR308",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EER301",
            useClass: "greenTxt mt-2",
            unit: "DB",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <div className="text-center box-1 bg-secondary p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OSEPA",
              }}
            />
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CYC-1 O/L",
                }}
              />
              <BlackContainer
                data={{
                  label: "PIR306",
                  useClass: "greenTxt ml-2",
                  unit: "mmwc",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CYC-2 O/L",
                }}
              />
              <BlackContainer
                data={{
                  label: "PIR303",
                  useClass: "greenTxt ml-3",
                  unit: "mmwc",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "PIR314",
              useClass: "greenTxt mt-1 ml-3",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PIR307",
            useClass: "greenTxt mt-1 ml-5",
            unit: "Kg/cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "PIR315",
            useClass: "greenTxt mb-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R350FNP03")}`} label="R350FNP03" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "R320FNP01_SR",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 text-center box-1 bg-secondary p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DUST COLLECTOR FAN",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIR307",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DE",
            }}
          />
          <BlackContainer
            data={{
              label: "TIR330",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIR305",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "IIR307",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "TIR331",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIR306",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "RSL107",
                useClass: "greenTxt mt-4",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BS-3",
              }}
            />
          </div>
          <div className="containerImage text-center pt-2 mt-3">
            <BlackContainer
              data={{
                label: "RSL104",
                useClass: "greenTxt mt-4",
                unit: "Mtrs",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SS-5",
              }}
            />
          </div>
        </div>
        <div>
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "RSL108",
                useClass: "greenTxt mt-4",
                unit: "Mtrs",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BS-4",
              }}
            />
          </div>
          <div className="containerImage text-center pt-2 mt-3">
            <BlackContainer
              data={{
                label: "RSL105",
                useClass: "greenTxt mt-4",
                unit: "Mtrs",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SS-6",
              }}
            />
          </div>
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-36" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-37" />
      <div className="position-absolute single-text-41">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R330ASB01")}`} label="R330ASB01" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR318",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "SIR305",
            useClass: "greenTxt mt-3",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIR305",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R320FNP02_SR",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-43 ">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R310ASB01")}`} label="R310ASB01" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "IIR320",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="chimni-red position-absolute single-text-44"></div>
      <div className="position-absolute single-text-47">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R330ASB0")}`} label="R330ASB0" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "IIR319",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-48" />
      <div className=" position-absolute single-text-49 containerImage">
      <div className=" d-flex mt-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "CYC-1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "CYC-2",
              }}
            />
          </div>
     </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
      <div className="yellowline-Vr  position-absolute line-8"></div>
      <div className="yellowline-Vr  position-absolute line-9"></div>
      <div className="yellowline-Vr  position-absolute line-10"></div>
      <div className="yellowline-Hr  position-absolute line-11"></div>
      <div className="yellowline-Hr  position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr  position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Hr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Vr   position-absolute line-28"></div>
      <div className="yellowline-Vr   position-absolute line-29"></div>
      <div className="yellowline-Vr   position-absolute line-30"></div>
      <div className="yellowline-Vr   position-absolute line-31"></div>
      <div className="yellowline-Hr   position-absolute line-33"></div>
    </div>
  );
};
