import { TextContainerWithWrapWord, PipeWithCircles, BlackContainer, MotorCircleDigitalTag } from "../../../../index";

import { useColorStatus } from "../../../../../utils";

export const RawMill2BasantL2 = () => {
  return (
    <div className="RawMill1BasantL1 RawMill2BasantL2 w-100 h-100 position-relative">
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
            secondCircleClass: `dot digital-tag ${useColorStatus("R240WFP04")}`,
            secondCircleText: "M",
            secondCircleLabel: "R240WFP04",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R240WFP03")}`,
            secondCircleText: "M",
            secondCircleLabel: "R240WFP03",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R240WFP01")}`,
            secondCircleText: "M",
            secondCircleLabel: "R240WFP01",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("R240WFP02")}`,
            secondCircleText: "M",
            secondCircleLabel: "R240WFP02",
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
          secondCircleClass: `dot digital-tag ${useColorStatus("R240BCM02")}`,
          secondCircleText: "M",
          secondCircleLabel: "R240BCM02",
        }}
      />
      <div className="position-absolute single-text-5">
        <table className=" ">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">SET POINT(%)</th>
              <th scope="col">SET POINT(TPH)</th>
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
                    label: "R240WFP04_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR201",
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
                    label: "LG",
                  }}
                />
              </th>

              <td>&nbsp;</td>
              <td>
                <BlackContainer
                  data={{
                    label: "R240WFP03_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR202",
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
                    label: "R240WFP01_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR203",
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
                    label: "R240WFP02_SR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "FIR203",
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
                    label: "RM2_TOT_FEED",
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
            label: "IIR210",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R230BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R230BEM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "IIR209",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2 d-flex"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("R240BEM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "R240BEM01",
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
              label: "MILL BEARINGS",
            }}
          />
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "I/L OIL PUMP",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM07")}`} label="R220OPM07" text="M" />
            <BlackContainer
              data={{
                label: "TIR211",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "IIR216",
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM08")}`} label="R220OPM08" text="M" />
            <BlackContainer
              data={{
                label: "TIR212",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "IIR217",
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM01")}`} label="R220OPM01" text="M" />
          </div>
          <div className="d-flex gap-1 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-2",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM02")}`} label="R220OPM02" text="M" />
            <BlackContainer
              data={{
                label: "PIR208",
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
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "OIL PUMP-1",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM03")}`} label="R220OPM03" text="M" />
            <BlackContainer
              data={{
                label: "TIR201",
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM04")}`} label="R220OPM04" text="M" />
            <BlackContainer
              data={{
                label: "TIR202",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM05")}`} label="R220OPM05" text="M" />
            <BlackContainer
              data={{
                label: "TIR209",
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R220OPM06")}`} label="R220OPM06" text="M" />
            <BlackContainer
              data={{
                label: "TIR210",
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
                  label: "O'SEPA",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "OIL PUMPS",
                }}
              />
              <div className="d-flex mt-1">
                <MotorCircleDigitalTag className={`dot digital-tag p-2 ${useColorStatus("R230OPM01")}`} label="R230OPM01" text="M" />
                <MotorCircleDigitalTag className={`dot digital-tag p-2 ml-3 ${useColorStatus("R230OPM02")}`} label="R230OPM02" text="M" />
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
                    label: "TIR217",
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
                    label: "TIR218",
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
                    label: "PIR209",
                    useClass: "greenTxt ml-2",
                    unit: "Kg/cm²",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "O'SEPA HT FAN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-auto",
                label: "HOT AIR FAN TEMP  VIB.",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "DE BRG TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR221",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR215",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VIR201",
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
                label: "TIR222",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TIR216",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VIR202",
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
              label: "INLET",
            }}
          />
          <BlackContainer
            data={{
              label: "PIR204",
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
              label: "PIR205",
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
            label: "OSEPA HT FAN BLWR",
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
              label: "SIR209",
              useClass: "greenTxt ml-2",
              unit: "A",
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
              label: "IIR211",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-14">
        <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R230FNP02")}`} label="R230FNP02" text="M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "O' SEPA",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "SIR206",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIR206",
            useClass: "greenTxt mt-2 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R250FNP03_SR",
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
        <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R220RAL01")}`} label="R220RAL01" text="M" />
      </div>
      <div className="drumContainer position-absolute single-text-17"></div>
      <div className="position-absolute single-text-18">
        <div className="connector-icon p-1">
          <div className={`dot p-2 mt-1 grey-color`}>M</div>
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R230FNM01")} `} label="R230FNM01" text="M" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R240BCM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "R240BCM01",
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
              label: "PIR203",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-2">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R220RAL02")}`} label="R220RAL02" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R220RAL03")}`} label="R220RAL03" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R230ASB02")}`} label="R230ASB02" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR223",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R230ASB03")}`} label="R230ASB03" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR222",
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
            <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R110ASB04")}`} label="R110ASB04" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "IIR221",
              useClass: "greenTxt mt-2",
              unit: "A",
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
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "IIR213",
          useClass: "greenTxt mt-2 position-absolute single-text-29",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-30 d-flex">
        <div>
          {/* <BlackContainer
                data={{
                  label: "undefined",
                  useClass: "greenTxt mt-2",
                  unit: "undefined",
                  unitColor: "unitColor",
                }}
              /> */}
          <BlackContainer
            data={{
              label: "PIR 201",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PIR202",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TIR213",
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
            label: "RAW MILL 2",
          }}
        />
        <div className={`dot mt-2 p-2 grey-color`}>M</div>
        <BlackContainer
          data={{
            label: "IIR208",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EER201",
            useClass: "greenTxt mt-2",
            unit: "dB",
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
                label: "PIR206",
                useClass: "greenTxt mt-1 ml-3",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "PIR203",
              useClass: "greenTxt mt-1 ml-3",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PRTX201",
            useClass: "greenTxt mt-1 ml-5",
            unit: "Kg/cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "PIR203B",
            useClass: "greenTxt mb-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R220FNP03")}`} label="R220FNP03" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "R220FNP03_SR",
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
              label: "SIR207",
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
              label: "IIR207",
              useClass: "greenTxt ml-2",
              unit: "A",
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
                label: "TIR229",
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
                label: "VIR205",
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
              label: "TIR230",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "VIR206",
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
              unit: "A",
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
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R230ASB01")}`} label="R230ASB01" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "R230FNP02_SR",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SIR205",
            useClass: "greenTxt mt-3",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIR205",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
          data={{
            label: "undefined",
            useClass: "greenTxt mt-1",
            unit: "undefined",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-2 mt-1 ${useColorStatus("R110ASB06")}`} label="R110ASB06" text="M" />
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
