import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus } from "../../../../../utils";

export const CementMill1And2LNVCiruitBasantnagarL1 = () => {
  return (
    <div className="Basantnagar-L1-Cement-Mill-LNV-Circuit w-100 h-100 position-relative">
      <div className="position-absolute single-text-1  border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLASSIFIER BRG TEMP",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOP BRG",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC123",
              useClass: "greenTxt ml-2",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BOTTOM BRG",
            }}
          />
          <BlackContainer
            data={{
              label: "TIC124",
              useClass: "greenTxt ml-2",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <BlackContainer
          data={{
            label: "SIC105",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC122",
            useClass: "greenTxt mb-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC123",
            useClass: "greenTxt mb-1",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3 chimni-red"></div>
      <div className="position-absolute single-text-4">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("C210FNM08")}`}
            label="C210FNM08"
            text="M"
          />
        </div>
        <BlackContainer
          data={{
            label: "SIC138",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIC138",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("C210FNP06_SC")}`}
            label="C210FNP06_SC"
            text="M"
          />
        </div>
        <BlackContainer
          data={{
            label: "IIC106",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute containerImage single-text-6"></div>
      <div className="position-absolute containerImage text-center single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "DC",
          }}
        />
        <BlackContainer
          data={{
            label: "PIC124",
            useClass: "greenTxt mt-3",
            unit: "mmWCL",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-8 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("C210BLM10")}`}
            label="C210BLM10"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("C210BLM11")}`}
            label="C210BLM11"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-9  border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLASSIFIER HT FAN BRG TEMP&VIB",
          }}
        />
        <div className="text-center d-flex mt-1 ">
          <div className="mr-2 mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "DE BRG",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "NDE BRG",
              }}
            />
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "TIC121",
                useClass: "greenTxt mb-1",
                unit: "degC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "TIC122",
                useClass: "greenTxt mb-1",
                unit: "degC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "VIB",
              }}
            />
            <BlackContainer
              data={{
                label: "VIC121",
                useClass: "greenTxt mb-1",
                unit: "mm/sec",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "VIC122",
                useClass: "greenTxt mb-1",
                unit: "mm/sec",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "IIC139",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <BlackContainer
          data={{
            label: "PIC121",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIC133",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <BlackContainer
          data={{
            label: "IIC135",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <BlackContainer
          data={{
            label: "IIC140",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IIC130",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "IIC105",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "IIC126",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <BlackContainer
          data={{
            label: "IIC131",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "IIC141",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("C110BEM05")}`}
          label="C110BEM05"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "FIC203",
            useClass: "greenTxt mb-3",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("C240SFF02_SC")}`}
          label="C240SFF02_SC"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-20 ">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("C210BLM02")}`}
            label="C210BLM02"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-21">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("C210BLM04")}`}
            label="C210BLM04"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("C210BLM03")}`}
            label="C210BLM03"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "IIC134",
            useClass: "greenTxt mt-1",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "PIC111",
            useClass: "greenTxt mt-1",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("C210RAL05")}`}
          label="C210RAL05"
          text=""
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CEMENT MILL-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CEMENT MILL-1",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-27"
        secondCircle={{
          secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
            "C210SCM04"
          )}`,
          secondCircleLabel: "C210SCM04",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-28">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("C210FNP07_SC")}`}
          label="C210FNP07_SC"
          text="M"
        />
      </div>

      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 pipeVr position-absolute"></div>
      <div className="pipe-3 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-4 pipeHr position-absolute"></div>
      <div className="pipe-5 pipeHr position-absolute"></div>
      <div className="pipe-6 pipeHr position-absolute"></div>
      <div className="pipe-7 pipeVr position-absolute"></div>
      <div className="pipe-8 pipeHr position-absolute"></div>
      <div className="pipe-9 pipeVr position-absolute"></div>
      <div className="pipe-10 pipeHr position-absolute"></div>
      <div className="pipe-11 pipeVr position-absolute"></div>
      <div className="pipe-12 pipeHr position-absolute"></div>
      <div className="pipe-13 pipeHr position-absolute"></div>
      <div className="pipe-14 pipeHr position-absolute"></div>
      <div className="pipe-15 pipeVr position-absolute"></div>
      <div className="pipe-16 pipeVr position-absolute"></div>
      <div className="pipe-17 pipeHr position-absolute"></div>
      <div className="pipe-18 pipeHr position-absolute"></div>
      <div className="pipe-19 pipeVr position-absolute"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
    </div>
  );
};
