import {
  BlackContainer,
  TextContainerWithWrapWord,
  MotorCircleDigitalTag,
  PipeWithCircles,
  MimicCaret,
  TextColumn,
} from "../../../../index";
import { useCaretColorStatus, useColorStatus } from "../../../../../utils";

import * as tagsData from "../../../../../data/maihar/Line-3/CementMill4Grinding/maiharL3CM4GrindingTextcolumn";

export const CementMill4GrindingMaiharL3 = () => {
  return (
    <div className="CM4GrindingMaiharL3 w-100 h-100 position-relative">
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
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr upArrow position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>
      <div className="yellowline-Vr upArrow position-absolute line-30"></div>
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
      <div className="yellowline-Hr rightarrow position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
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
              label: "SS5001",
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
              label: "51_FEED",
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
        text={{ useClass: "text-dark", label: "51WF4" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51WF4")}`,
          secondCircleLabel: "51WF4",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51AC1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51AC1")}`,
          secondCircleText: "M",
          secondCircleLabel: "51AC1",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51WF1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51WF1")}`,
          secondCircleText: "M",
          secondCircleLabel: "51WF1",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51AC2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51AC2")}`,
          secondCircleLabel: "51AC2",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51WF2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51WF2")}`,
          secondCircleText: "M",
          secondCircleLabel: "51WF2",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51WF3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51WF3")}`,
          secondCircleText: "M",
          secondCircleLabel: "51WF3",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51BC5" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC5")}`,
          secondCircleText: "M",
          secondCircleLabel: "51BC5",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51BC3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC3")}`,
          secondCircleText: "M",
          secondCircleLabel: "51BC3",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51BC4" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC4")}`,
          secondCircleText: "M",
          secondCircleLabel: "51BC4",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC9")}`,
          firstCircleLabel: "51BC9",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "51BC9" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC10")}`,
          firstCircleLabel: "51BC10",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "51BC10" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC7")}`,
          firstCircleLabel: "51BC7",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "51BC7" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51BC8" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC8")}`,
          secondCircleText: "M",
          secondCircleLabel: "51BC8",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "51BC6" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("51BC6")}`,
          secondCircleText: "M",
          secondCircleLabel: "51BC6",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        text={{ useClass: "text-dark mx-auto", label: "51SC2" }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-19" />
      <div className="img-66 position-absolute single-text-20">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51FN5")}`}
            label="51FN5"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-21">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51FN4")}`}
            label="51FN4"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-22">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51FN7")}`}
            label="51FN7"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-23">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51OP2")}`}
            label="51OP2"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-24">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51AB5")}`}
            label="51AB5"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-25">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51AB5A")}`}
            label="51AB5A"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-26">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51FN2")}`}
            label="51FN2"
            text="M"
          />
        </div>
      </div>
      <div className="p-2 text-center containerImage position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "51WF4_RATIO",
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
            label: "AF5010",
            useClass: "greenTxt",
            unit: "TPH",
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
            label: "LT5008",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "51AC1_FD",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="p-2 text-center containerImage position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "51WF1_RATIO",
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
            label: "LT5007",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="p-2 text-center containerImage position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "POZZOLANA",
          }}
        />
        <BlackContainer
          data={{
            label: "LT5001",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "51AC2_FD",
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
            label: "51BF3",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "51BF2",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "51BF5",
          }}
        />
      </div>
      <div className="text-center containerImage position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "51HP4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HRC PREBIN",
          }}
        />
        <BlackContainer
          data={{
            label: "WT5002",
            useClass: "greenTxt mt-1",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center pt-2 containerImage position-absolute single-text-35">
        <div className="d-flex justify-content-center">
          <MotorCircleDigitalTag
            className={`mr-2 dot p-3 digital-tag ${useColorStatus("51RP1F")}`}
            label="51RP1F"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51RP1M")}`}
            label="51RP1M"
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
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("51BE1")}`,
          firstCircleLabel: "51BE1",
          firstCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-40"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus("51BE3")}`,
          firstCircleLabel: "51BE3",
          firstCircleText: "M",
        }}
      />
      <div className="img-41 text-center position-absolute single-text-41">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("51BM1A")}`}
          label="51BM1A"
          text="M"
        />
      </div>
      <div className="img-41 text-center position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("51BM1")}`}
          label="51BM1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-43">
        <div className="img-41 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51SC2")}`}
            label="51SC2"
            text="M"
          />
        </div>

        <BlackContainer
          data={{
            label: "PT5030",
            useClass: "greenTxt mt-3 ml-auto",
            unit: "KG/CM2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <div className="bg-info p-2">
          <div className="img-86 p-3">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("51GP1")}`}
              label="51GP1"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "51GP1",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GG Lub",
          }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-end bagHouse p-3 position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "PT5013",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex bg-secondary p-2 position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "BH I/L TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "RT5005",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
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
            label: "CM4_FEED_SP",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-secondary p-1 position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RP LUB UNITS",
          }}
        />
        <div className="d-flex justify-content-between mt-01">
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU5")}`}
                label="51LU5"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU5",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("51LU3")}`}
              label="51LU3"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU3",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center img-86-a">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU7")}`}
                label="51LU7"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU7",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-01">
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU1")}`}
                label="51LU1"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU1",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("51LU4A")}`}
              label="51LU4A"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU4A",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("51LU4")}`}
              label="51LU4"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU4",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-01">
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("51LU1A")}`}
              label="51LU1A"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU1A",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("51LU2A")}`}
              label="51LU2A"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU2A",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center img-86-a">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU2")}`}
                label="51LU2"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LU2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex border p-2 position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3 mt-4",
            label: "NEW FLY ASH DRY",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "DRIVE STATUS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 mt-1 digital-tag ${useColorStatus(
              "51FAPANEL"
            )}`}
            label="51FAPANEL"
            text="M"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "AF5018",
              useClass: "greenTxt mt-3",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("51GAP")}`}
          label="51GAP"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "51GAP",
          }}
        />
        <BlackContainer
          data={{
            label: "FT5010",
            useClass: "greenTxt",
            unit: "LPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-51"
        list={tagsData.maiharL3CM4GrindingTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-52"
        list={tagsData.maiharL3CM4GrindingTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-53"
        list={tagsData.maiharL3CM4GrindingTextcolumn2}
      />
      <BlackContainer
        data={{
          label: "AS5006",
          useClass: "greenTxt position-absolute single-text-54",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "AF5011",
          useClass: "greenTxt position-absolute single-text-55",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "IT5010",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "IT5021",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KT5003",
          useClass: "greenTxt position-absolute single-text-58",
          unit: "KW",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "IT5020",
          useClass: "greenTxt position-absolute single-text-59",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PT5006",
          useClass: "greenTxt position-absolute single-text-60",
          unit: "mmwg",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-61",
          label: "51SR1 REJECT",
        }}
      />
      <div className="pipeVr text-center position-absolute single-text-62">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("51MS1")}`}
          label="51MS1"
          text="M"
        />
      </div>
      <BlackContainer
        data={{
          label: "IT5022",
          useClass: "greenTxt position-absolute single-text-63",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="d-flex position-absolute single-text-64"
        list={tagsData.maiharL3CM4GrindingTextcolumn5}
      />
      <TextColumn
        useClass="position-absolute single-text-65"
        list={tagsData.maiharL3CM4GrindingTextcolumn6}
      />
      <div className="position-absolute single-text-66">
        <BlackContainer
          data={{
            label: "OM5001A",
            useClass: "greenTxt ml-auto",
            unit: "mg/Nm3",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CM1 SPECIFIC POWER",
          }}
        />
        <BlackContainer
          data={{
            label: "RT5004",
            useClass: "greenTxt mt-3  ml-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-67"
        list={tagsData.maiharL3CM4GrindingTextcolumn7}
      />
      <div className="grid-container-2 bg-secondary p-2 position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT5025 CY-1 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT5025",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT5026 CY-2 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT5026",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT5027 CY-3 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT5027",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT5028 CY-4 CONE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "PT5028",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT5001 CYCONE DP",
          }}
        />
        <BlackContainer
          data={{
            label: "PT5001",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "PT5002 BAG HOUSE DP",
          }}
        />
        <BlackContainer
          data={{
            label: "PT5002",
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
            label: "51WP",
            useClass: "greenTxt",
            unit: "kg/Cm2",
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
            label: "PT5007",
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
            label: "PT5009",
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
            label: "YT5001",
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
              label: "51_SKEW",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "YT5002",
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
            label: "AS5007",
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
            label: "AS5008",
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
            label: "IT5005",
            useClass: "greenTxt",
            unit: "Amp",
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
            label: "IT5006",
            useClass: "greenTxt",
            unit: "Amp",
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
            label: "KT5010",
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
            label: "51DPSP",
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
            label: "51RP1_SPD_SP",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-71"
        list={tagsData.maiharL3CM4GrindingTextcolumn4}
      />
      <BlackContainer
        data={{
          label: "TT5004",
          useClass: "greenTxt position-absolute single-text-72",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "WT5001",
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
            label: "IT5024",
            useClass: "greenTxt",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "GT5003",
          useClass: "greenTxt position-absolute single-text-75",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KT5004",
          useClass: "greenTxt position-absolute single-text-76",
          unit: "KW",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KT5002",
          useClass: "greenTxt position-absolute single-text-77",
          unit: "KW",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-78">
        <div className="img-86 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("51BM1_WSP")}`}
            label="51BM1_WSP"
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
            label: "FT5002",
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
            label: "PT5029",
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
            label: "51SG1B",
          }}
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("51SG1B")}`}
          label="51SG1B"
        />
      </div>

      <div className="d-flex position-absolute single-text-84">
        <MimicCaret
          parentClass="tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "51SG1A"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "51SG1A"
          )}`}
          label="51SG1A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "51SG1A",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-85">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "MILL I/L",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("51BC11")}`}
          label="51BC11"
          text="M"
        />
      </div>

      <div className="bg-secondary p-2 text-center position-absolute single-text-86">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-4",
              label: "51LU1A",
            }}
          />
          <div className="img-86 text-center">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("51LU1A")}`}
              label="51LU1A"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BALL MILL LUB UNITS",
          }}
        />
        <div className="d-flex mt-1 justify-content-between">
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU9")}`}
                label="51LU9"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU9",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU9A")}`}
                label="51LU9A"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU9A",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU10")}`}
                label="51LU10"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU10",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU10A")}`}
                label="51LU10A"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU10A",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU13")}`}
                label="51LU13"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU13",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU14")}`}
                label="51LU14"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU14",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU11")}`}
                label="51LU11"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU11",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU15")}`}
                label="51LU15"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU15",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU17")}`}
                label="51LU17"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU17",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU18")}`}
                label="51LU18"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU18",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU21")}`}
                label="51LU21"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU21",
              }}
            />
          </div>
          <div>
            <div className="img-86 text-center">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("51LU21A")}`}
                label="51LU21A"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "51LU21A",
              }}
            />
          </div>
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-87 p-3 digital-tag ${useColorStatus(
          "51FN7RF"
        )}`}
        label="51FN7RF"
        text="M"
      />
      <div className="grid-container-2 position-absolute single-text-88">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("51CF1")}`}
          label="51CF1"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "51CF1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("51CF2")}`}
          label="51CF2"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "51CF2",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-89 p-3 digital-tag ${useColorStatus(
          "51FN5RF"
        )}`}
        label="51FN5RF"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-90 p-3 digital-tag ${useColorStatus(
          "51FN4RF"
        )}`}
        label="51FN4RF"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-91 p-3 digital-tag ${useColorStatus(
          "51RF8"
        )}`}
        label="51RF8"
        text="M"
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-92",
          label: "TO 51BE2",
        }}
      />
      <div className="d-flex position-absolute single-text-93">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "I/L TUN LUM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "O/L TUN BRG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PRE J Pump",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GB LUB",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CS LUB",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-94",
          label: " TO 51BE2",
        }}
      />
    </div>
  );
};
