import { TextContainerWithWrapWord, PipeWithCircles, BlackContainer, MotorCircleDigitalTag } from "../../../../index";

import { useColorStatus } from "../../../../../utils";

export const RawMill1BasantL1 = () => {
  return (
    <div className="RawMill1BasantL1 w-100 h-100 position-relative">
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
            secondCircleClass: `dot digital-tag ${useColorStatus("R140WFP04")}`,
            secondCircleText: "M",
            secondCircleLabel: "R140WFP04",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R140WFP03")}`,
            secondCircleText: "M",
            secondCircleLabel: "R140WFP03",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R140WFP01")}`,
            secondCircleText: "M",
            secondCircleLabel: "R140WFP01",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R140WFP02")}`,
            secondCircleText: "M",
            secondCircleLabel: "R140WFP02",
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
          secondCircleClass: `dot digital-tag ${useColorStatus("R140BCM02")}`,
          secondCircleText: "M",
          secondCircleLabel: "R140BCM02",
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
                    label: "R140WFP04_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR101",
                    useClass: "greenTxt",
                    unit: "RPM",
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
                    label: "R140WFP03_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR102",
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
                    label: "R140WFP02_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR104",
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
                    label: "R140WFP01_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR103",
                    useClass: "greenTxt",
                    unit: "TPH",
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
            label: "IIR110",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R130BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R130BEM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "IIR109",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R140BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R140BEM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "VIR105",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R110BEM03")}`,
            firstCircleText: "M",
            firstCircleLabel: "R110BEM03",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "IIR210",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R110BEM02")}`,
            firstCircleText: "M",
            firstCircleLabel: "R110BEM02",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "IIR214",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R110BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R110BEM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="box-1 p-2 bg-light">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MILL BRG OIL PUMPS",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "I/L OIL PUMP",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM07")}`} label="R120OPM07" text="M" />
            <BlackContainer
              data={{
                label: "TIR111",
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
                label: "I/L OIL PUMP",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM08")}`} label="R120OPM08" text="M" />
            <BlackContainer
              data={{
                label: "TIR112",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GEAR BOX OIL PUMPS",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-1",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM01")}`} label="R120OPM01" text="M" />
          </div>
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-2",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM02")}`} label="R120OPM02" text="M" />
          </div>
        </div>
        <div className="box-1 p-2 bg-light">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MAIN MOTOR BRG",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-1",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM03")}`} label="R120OPM03" text="M" />
            <BlackContainer
              data={{
                label: "TIR101",
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM04")}`} label="R120OPM04" text="M" />
            <BlackContainer
              data={{
                label: "TIR102",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COUNTER SHAFT BRG",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-1",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM05")}`} label="R120OPM05" text="M" />
            <BlackContainer
              data={{
                label: "TIR109",
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R120OPM06")}`} label="R120OPM06" text="M" />
            <BlackContainer
              data={{
                label: "TIR110",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-2 bg-light">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "O' SEPA",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "OIL PUMPS",
                }}
              />
              <div className="d-flex mt-1">
                <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R130OPM01")}`} label="R130OPM01" text="M" />
                <MotorCircleDigitalTag className={`dot digital-tag p-2 ml-3 ${useColorStatus("R130OPM02")}`} label="R130OPM02" text="M" />
              </div>
            </div>
            <div className="ml-5">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "TOP BRG TEMP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "TIR117",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "BOT BRG TEMP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "TIR118",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "OIL PUMP PR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PIR109",
                    useClass: "greenTxt ml-2",
                    unit: "Kg/cm²",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-auto",
              label: "O' SEPA HT FAN HOT AIR FAN",
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
                label: "TIR121",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR115",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VIR104",
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
                label: "TIR122",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR116",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VIR107",
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
              label: "PIR 104",
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
              label: "PIR 105",
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
            label: "OSEPA LT DRIVE",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SET POINT",
            }}
          />
          <BlackContainer
            data={{
              label: "R120FNP03_SR",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "SIR109",
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
              label: "IIR111",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-14">
        <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R120FNP02")}`} label="R120FNP02" text="M" />
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
            label: "R120FNP02_SR",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SIR105",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIR105",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SIR106",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIR106",
            useClass: "greenTxt mt-2 ml-3",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R150FNP03_SR",
            useClass: "greenTxt mt-2 ml-3",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 text-center">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "O' SEPA CYCLONE",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R120RAL01")}`} label="R120RAL01" text="M" />
      </div>
      <div className="drumContainer position-absolute single-text-17"></div>
      <div className="position-absolute single-text-18">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R150FNM01")}`} label="R150FNM01" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R120FNP03")} `} label="R120FNP03" text="M" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R140BCM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "R140BCM01",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-21" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-22" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-23" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-24" />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-25"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R110ECM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "R110ECM01",
        }}
      />
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
              label: "PIR 103",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-2">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R120RAL02")}`} label="R120RAL02" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R120RAL03")}`} label="R120RAL03" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R130ASB02_")}`} label="R130ASB02_" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR115",
              useClass: "greenTxt mt-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R130ASB03")}`} label="R130ASB03" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR116",
              useClass: "greenTxt mt-2 ml-4",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R110ASB04")}`} label="R110ASB04" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR221",
              useClass: "greenTxt mt-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R110ASB03")}`} label="R110ASB03" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR220",
              useClass: "greenTxt mt-2 ml-4",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "IIR213",
          useClass: "greenTxt mt-2 position-absolute single-text-29",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-30 d-flex">
        <div>
          {/* <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-2",
              unit: "NA",
              unitColor: "unitColor",
            }}
          /> */}
          <BlackContainer
            data={{
              label: "PIR101",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PIR102",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIR113",
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
            label: "RAW MILL 1",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-2 ${useColorStatus("R130RMM01")}`} label="R130RMM01" text="M" />
        <BlackContainer
          data={{
            label: "IIR108",
            useClass: "greenTxt mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "WIR103",
            useClass: "greenTxt mt-2",
            unit: "DB",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <div className="d-flex box-1 p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OSEPA CYC O/L",
              }}
            />
            <BlackContainer
              data={{
                label: "PIR 106",
                useClass: "greenTxt mt-1 ml-3",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "PIR 103C",
              useClass: "greenTxt mt-1 ml-3",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PRTX101",
            useClass: "greenTxt mt-1 ml-5",
            unit: "Kg/cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "PIR 103A",
            useClass: "greenTxt mb-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R120FNP01")}`} label="R120FNP01" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "R120FNP01_SR",
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
              label: "SIR107",
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
              label: "IIR107",
              useClass: "greenTxt ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "DE BRG",
            }}
          />
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR133",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "VIBRATION",
              }}
            />
            <BlackContainer
              data={{
                label: "VIR106",
                useClass: "greenTxt ml-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "NDE BRG",
            }}
          />
          <BlackContainer
            data={{
              label: "TIR134",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIR108",
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
                label: "RM1_TOT_FEED",
                useClass: "greenTxt mt-4",
                unit: "AMP",
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
                label: "NA",
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
                label: "NA",
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
                label: "NA",
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
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-38" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-39" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-40" />
      <div className="position-absolute single-text-41 d-flex">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R110ASB02")}`} label="R110ASB02" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR219",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R110ASB01")}`} label="R110ASB01" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR218",
              useClass: "greenTxt mt-2 ml-4",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div className="containerImage text-center pt-2">
          <BlackContainer
            data={{
              label: "RSL101",
              useClass: "greenTxt mt-4",
              unit: "Mtrs",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SS-1",
            }}
          />
        </div>
        <div className="containerImage text-center pt-2 mt-3">
          <BlackContainer
            data={{
              label: "RSL102",
              useClass: "greenTxt mt-4",
              unit: "Mtrs",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SS-2",
            }}
          />
        </div>
        <div className="containerImage text-center pt-2">
          <BlackContainer
            data={{
              label: "RSL106",
              useClass: "greenTxt mt-4",
              unit: "Mtrs",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SS-3",
            }}
          />
        </div>
        <div className="containerImage text-center pt-2 mt-4">
          <BlackContainer
            data={{
              label: "RSL103",
              useClass: "greenTxt mt-4",
              unit: "Mtrs",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SS-4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R110ASB05")}`} label="R110ASB05" text="M" />
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-44"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45 bg-light p-2",
          label: "R110BEM02",
        }}
      />
      <div className="position-absolute single-text-46 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "OLD",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "NEW",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R130ASB01")}`} label="R130ASB01" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "IIR117",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
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
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-27"></div>
      <div className="yellowline-Vr   position-absolute line-28"></div>
      <div className="yellowline-Vr   position-absolute line-29"></div>
    </div>
  );
};
