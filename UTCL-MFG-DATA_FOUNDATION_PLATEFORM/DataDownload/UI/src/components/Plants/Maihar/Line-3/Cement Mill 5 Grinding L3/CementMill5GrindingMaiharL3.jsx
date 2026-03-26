import {
  BlackContainer,
  TextContainerWithWrapWord,
  MotorCircleDigitalTag,
  PipeWithCircles,
  MimicCaret,
  TextColumn,
} from "../../../../index";
import { useCaretColorStatus, useColorStatus } from "../../../../../utils";

import * as tagsData from "../../../../../data/maihar/Line-3/CementMill5Grinding/maiharL3CM5GrindingTextcolumn";

export const CementMill5GrindingMaiharL3 = () => {
  return (
    <div className="CM4GrindingMaiharL3 CM5GrindingMaiharL3 w-100 h-100 position-relative">
      <div className="bg-secondary position-absolute single-text-0"></div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr upArrow position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>
      <div className="yellowline-Vr upArrow position-absolute line-31"></div>
      <div className="yellowline-Vr upArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="yellowline-Hr position-absolute line-49"></div>
      <div className="yellowline-Vr position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>

      <div className="p-5 drumContainer position-absolute single-text-1">
        <div className="d-flex pl-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "MILL FILLING",
            }}
          />
          <BlackContainer
            data={{
              label: "SS6001",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2 pl-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "TOTAL FEED",
            }}
          />
          <BlackContainer
            data={{
              label: "52_FEED",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-64 position-absolute single-text-2"></div>
      <div className="text-center position-absolute single-text-3">
        <div className="containerImage"></div>
        <div className="pipeVr position-relative pipe-1"></div>
        <div className="pipeVr position-relative pipe-2"></div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52WF4" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52WF4")}`,
          secondCircleLabel: "52WF4",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52AC1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52AC1")}`,
          secondCircleText: "M",
          secondCircleLabel: "52AC1",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52WF1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52WF1")}`,
          secondCircleText: "M",
          secondCircleLabel: "52WF1",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52AC2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52AC2")}`,
          secondCircleLabel: "52AC2",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52WF2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52WF2")}`,
          secondCircleText: "M",
          secondCircleLabel: "52WF2",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52WF3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52WF3")}`,
          secondCircleText: "M",
          secondCircleLabel: "52WF3",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52BC5" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC5")}`,
          secondCircleText: "M",
          secondCircleLabel: "52BC5",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52BC3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC3")}`,
          secondCircleText: "M",
          secondCircleLabel: "52BC3",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52BC4" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC4")}`,
          secondCircleText: "M",
          secondCircleLabel: "52BC4",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC9")}`,
          firstCircleLabel: "52BC9",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "52BC9" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC10")}`,
          firstCircleLabel: "52BC10",
          firstCircleText: "M",
        }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC7")}`,
          firstCircleLabel: "52BC7",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "52BC7" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52BC8" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC8")}`,
          secondCircleText: "M",
          secondCircleLabel: "52BC8",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "52BC6" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("52BC6")}`,
          secondCircleText: "M",
          secondCircleLabel: "52BC6",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        text={{ useClass: "text-dark mx-auto", label: "52SC4" }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-19" />
      <div className="img-66 position-absolute single-text-20">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52FN5")}`}
            label="52FN5"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-21">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52FN4")}`}
            label="52FN4"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-22">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52FN7")}`}
            label="52FN7"
            text="M"
          />
        </div>
      </div>

      <div className="img-66 position-absolute single-text-24">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52AB5")}`}
            label="52AB5"
            text="M"
          />
        </div>
      </div>

      <div className="img-66 position-absolute single-text-26">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52FN2")}`}
            label="52FN2"
            text="M"
          />
        </div>
      </div>
      <div className="p-2 text-center containerImage position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "52WF4_RATIO",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "P I Feed",
          }}
        />
        <BlackContainer
          data={{
            label: "LT5012",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="p-2 text-center containerImage position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "52WF2_RATIO",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "GYPSUM",
          }}
        />
        <BlackContainer
          data={{
            label: "LT6002",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "52AC1_FACTOR",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="p-2 text-center containerImage position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "52WF1_RATIO",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CLINKER",
          }}
        />
        <BlackContainer
          data={{
            label: "LT6001",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="p-2 text-center containerImage position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "52WF3_RATIO",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "POZZOLANA",
          }}
        />
        <BlackContainer
          data={{
            label: "LT6003",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "52AC2_FACTOR",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "52BF3",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "52BF2",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "52BF5",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "52HP4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HRC PREBIN",
          }}
        />
      </div>
      <div className="text-center pt-2 containerImage position-absolute single-text-35">
        <div className="d-flex justify-content-center">
          <MotorCircleDigitalTag
            className={`mr-2 dot p-3 digital-tag ${useColorStatus("52RP1F")}`}
            label="52RP1F"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52RP1M")}`}
            label="52RP1M"
            text="M"
          />
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "HRC",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "REJECT HOPPER",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-37"></div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img position-absolute single-text-38 gray-img`}
        label="V23L7DIV"
      />

      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-39"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("52BE1")}`,
          firstCircleLabel: "52BE1",
          firstCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-40"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("52BE3")}`,
          firstCircleLabel: "52BE3",
          firstCircleText: "M",
        }}
      />
      <div className="img-41 text-center position-absolute single-text-41">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52BM1A")}`}
          label="52BM1A"
          text="M"
        />
      </div>
      <div className="img-41 text-center position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52BM1")}`}
          label="52BM1"
          text="M"
        />
      </div>

      <div className="position-absolute single-text-43">
        <div className="img-41 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52SC3")}`}
            label="52SC3"
            text="M"
          />
        </div>
      </div>

      <div className="position-absolute single-text-44">
        <div className="img-86 p-3">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52GP1")}`}
            label="52GP1"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GP1",
          }}
        />
      </div>
      <div className="d-flex justify-content-around align-items-center bagHouse p-3 position-absolute single-text-45">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52EP11")}`}
          label="52EP11"
          text="M"
        />
        <BlackContainer
          data={{
            label: "PT6013",
            useClass: "greenTxt",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-secondary p-2 position-absolute single-text-46">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "BAG HOUSE I/L TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "RT6005",
              useClass: "greenTxt ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "NEW FLYASH TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "AF6018",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "52FA_RATIO",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex bg-secondary p-2 position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "MANUAL FEED SETPOINT",
          }}
        />
        <BlackContainer
          data={{
            label: "CM5_FEED_SP",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-secondary p-1 text-center position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RP LUB UNITS",
          }}
        />
        <div className="d-flex mt-01">
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU5")}`}
              label="52LU5"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU5",
              }}
            />
          </div>
          <div className="ml-4">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU3")}`}
              label="52LU3"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU3",
              }}
            />
          </div>
          <div className="ml-4">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU7")}`}
              label="52LU7"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU7",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-01">
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU1")}`}
              label="52LU1"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU1",
              }}
            />
          </div>
          <div className="ml-4">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU3A")}`}
              label="52LU3A"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU3A",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-01">
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU1A")}`}
              label="52LU1A"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU1A",
              }}
            />
          </div>
          <div className="ml-4">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU4")}`}
              label="52LU4"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU4",
              }}
            />
          </div>
          <div className="ml-4">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU2")}`}
              label="52LU2"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52GAP")}`}
          label="52GAP"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "52GAP",
          }}
        />
        <BlackContainer
          data={{
            label: "FT6010",
            useClass: "greenTxt",
            unit: "LPM",
            unitColor: "unitColor",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "IT6002",
          useClass: "greenTxt position-absolute single-text-51",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <BlackContainer
        data={{
          label: "IT6012",
          useClass: "greenTxt position-absolute single-text-53",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-56"
        list={tagsData.maiharL3CM5GrindingTextcolumn8}
      />
      <BlackContainer
        data={{
          label: "IT6021",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KT6003",
          useClass: "greenTxt position-absolute single-text-58",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "IT6020",
          useClass: "greenTxt position-absolute single-text-59",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PT6006",
          useClass: "greenTxt position-absolute single-text-60",
          unit: "mmwg",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-61",
          label: "52SR1 REJECT",
        }}
      />
      <div className="pipeVr text-center position-absolute single-text-62">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52MS1")}`}
          label="52MS1"
          text="M"
        />
      </div>
      <BlackContainer
        data={{
          label: "IT6022",
          useClass: "greenTxt position-absolute single-text-63",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="d-flex position-absolute single-text-64"
        list={tagsData.maiharL3CM5GrindingTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-65"
        list={tagsData.maiharL3CM5GrindingTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-67"
        list={tagsData.maiharL3CM5GrindingTextcolumn5}
      />
      <div className="grid-container-2 bg-secondary p-2 position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT6025 CY-1 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6025",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT6026 CY-2 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6026",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT6027 CY-3 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6027",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT6028 CY-4 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6028",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT6001 CYCONE DP",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6001",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT6002 BAG HOUSE DP",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6002",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="grid-container-2 bg-secondary p-2 position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "W.P",
          }}
        />
        <BlackContainer
          data={{
            label: "52WP",
            useClass: "greenTxt",
            unit: "KG/CM2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "DE",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6007",
            useClass: "greenTxt",
            unit: "KG/CM2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "NDE",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6009",
            useClass: "greenTxt",
            unit: "KG/CM2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "DE",
          }}
        />
        <BlackContainer
          data={{
            label: "YT6001",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "TT5003",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "YT6002",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "FIX",
          }}
        />
        <BlackContainer
          data={{
            label: "AS6007",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "MOV",
          }}
        />
        <BlackContainer
          data={{
            label: "AS6008",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "FIX",
          }}
        />
        <BlackContainer
          data={{
            label: "IT6005",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "MOV",
          }}
        />
        <BlackContainer
          data={{
            label: "IT6006",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "KW",
          }}
        />
        <BlackContainer
          data={{
            label: "KT6010",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="grid-container-2 bg-secondary p-2 position-absolute single-text-70">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "DP SP",
          }}
        />

        <BlackContainer
          data={{
            label: "52DPSP",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "HRC SP",
          }}
        />
        <BlackContainer
          data={{
            label: "52RP1_SPD_SP",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-71"
        list={tagsData.maiharL3CM5GrindingTextcolumn4}
      />

      <BlackContainer
        data={{
          label: "WT6001",
          useClass: "greenTxt position-absolute single-text-73",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "DM REJECT",
          }}
        />
        <BlackContainer
          data={{
            label: "IT6024",
            useClass: "greenTxt",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "GT6003",
          useClass: "greenTxt position-absolute single-text-75",
          unit: "%",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-78">
        <div className="img-86 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52BM1_WSP")}`}
            label="52BM1_WSP"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WATER PUMP",
          }}
        />
      </div>
      <div className="position-absolute single-text-79">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WATER FLOW",
          }}
        />
        <BlackContainer
          data={{
            label: "FT6002",
            useClass: "greenTxt mt-1",
            unit: "LPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-80">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LINE PRESS",
          }}
        />
        <BlackContainer
          data={{
            label: "PT6024",
            useClass: "greenTxt mt-1",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-81",
          label: "AIR LINE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "MILL WATER SPRAY",
        }}
      />
      <div className="d-flex position-absolute single-text-83">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "52SG1B",
          }}
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("52SG1B")}`}
          label="52SG1B"
        />
      </div>

      <div className="d-flex position-absolute single-text-84">
        <MimicCaret
          parentClass="tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "52SG1A"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "52SG1A"
          )}`}
          label="52SG1A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "52SG1A",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-85",
          label: "51BC5",
        }}
      />

      <div className="d-flex bg-secondary p-3 text-center position-absolute single-text-86">
        <div>
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU9")}`}
              label="52LU9"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU9",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU10")}`}
              label="52LU10"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU10",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU11")}`}
              label="52LU11"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU11",
            }}
          />
        </div>
        <div className="ml-5">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU13")}`}
              label="52LU13"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU13",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU14")}`}
              label="52LU14"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU14",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU15")}`}
              label="52LU15"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU15",
            }}
          />
        </div>
        <div className="ml-5">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU17")}`}
              label="52LU17"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU17",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU18")}`}
              label="52LU18"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU18",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("52LU21")}`}
              label="52LU21"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LU21",
            }}
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-87 p-3 digital-tag ${useColorStatus(
          "52FN7RF"
        )}`}
        label="52FN7RF"
        text="M"
      />
      <div className="d-flex position-absolute single-text-88">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52CF1")}`}
          label="52CF1"
          text="M"
        />

        <MotorCircleDigitalTag
          className={`dot ml-2 p-3 digital-tag ${useColorStatus("52CF2")}`}
          label="52CF2"
          text="M"
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-89 p-3 digital-tag ${useColorStatus(
          "52FN5RF"
        )}`}
        label="52FN5RF"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-90 p-3 digital-tag ${useColorStatus(
          "52FN4RF"
        )}`}
        label="51FN4RF"
        text="M"
      />
      <div className="position-absolute single-text-92">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO 52BE2",
          }}
        />
        <BlackContainer
          data={{
            label: "KT6002",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>

      {/* new code */}

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-95"
        text={{ useClass: "text-dark mx-auto", label: "52SC3" }}
      />

      <div className="img-41 text-center position-absolute single-text-96">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52SC4")}`}
          label="52SC4"
          text="M"
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-97",
          label: "TO 52AS3",
        }}
      />
      <div className="d-flex position-absolute single-text-98">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52PAFAN")}`}
          label="52PAFAN"
          text="M"
        />
        <BlackContainer
          data={{
            label: "RT6004",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-secondary text-center p-2 position-absolute single-text-99">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Preocess Water Pump",
          }}
        />
        <div className="grid-container-3 mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52WP1")}`}
            label="52WP1"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52WP2")}`}
            label="52WP2"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("52WP3")}`}
            label="52WP3"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "52WP1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "52WP2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "52WP3",
            }}
          />
        </div>
      </div>
      <div className="grid-container-6 bg-secondary text-center p-2 position-absolute single-text-100">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "52CP7",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "52CP11",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "52CP12",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "52CP13",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "52CP15",
          }}
        />
        <BlackContainer
          data={{
            label: "KT6017",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52CP7")}`}
          label="52CP7"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52CP11")}`}
          label="52CP11"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52CP12")}`}
          label="52CP12"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52CP13")}`}
          label="52CP13"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("52CP15")}`}
          label="52CP15"
          text="M"
        />
        <BlackContainer
          data={{
            label: "PT6044",
            useClass: "greenTxt mt-1",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "TT6004",
          useClass: "greenTxt position-absolute single-text-101",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="d-flex position-absolute single-text-102"
        list={tagsData.maiharL3CM5GrindingTextcolumn2}
      />
      <div className="grid-container-2 position-absolute single-text-103">
        <BlackContainer
          data={{
            label: "LT6008",
            useClass: "greenTxt",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "FLYASH SILO 1 LV",
          }}
        />
        <BlackContainer
          data={{
            label: "LT6009",
            useClass: "greenTxt",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "FLYASH SILO 2 LVL",
          }}
        />
        <BlackContainer
          data={{
            label: "LT6010",
            useClass: "greenTxt",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "FLYASH SILO 3 LVL",
          }}
        />
        <BlackContainer
          data={{
            label: "LT6011",
            useClass: "greenTxt",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "FLYASH SILO 4 LV2",
          }}
        />
      </div>
      <TextColumn
        useClass="d-flex position-absolute single-text-104"
        list={tagsData.maiharL3CM5GrindingTextcolumn6}
      />
      <TextColumn
        useClass="position-absolute single-text-105"
        list={tagsData.maiharL3CM5GrindingTextcolumn7}
      />
    </div>
  );
};
