import { useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
  PipeWithCircles,
} from "../../../../index";
export const Coalmill1FeedGujaratLine1 = () => {
  return (
    <div className="Coalmill1FeedGujaratLine1 w-100 h-100 position-relative">
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
      <div className="yellowline-Vr upArrow position-absolute line-19"></div>
      <div className="yellowline-Vr upArrow position-absolute line-20"></div>
      <div className="yellowline-Vr upArrow position-absolute line-21"></div>
      <div className="yellowline-Vr upArrow position-absolute line-22"></div>
      <div className="yellowline-Vr upArrow position-absolute line-23"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="squareplustri text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Raw Coal",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Raw Coal",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-3">
        <BlackContainer
          data={{
            label: "K1L01_W1",
            useClass: "greenTxt mt-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1L01_T9",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "INDO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "L01",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-4">
        <BlackContainer
          data={{
            label: "K1L02_W1",
            useClass: "greenTxt mt-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1L02_T9",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U.S. PC",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "L02",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F1P21_SEQ",
          }}
        />
        <div className="squareplustri text-center mt-1"></div>
      </div>
      <div className="position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F1P31",
          }}
        />
        <div className="squareplustri text-center mt-1"></div>
      </div>
      <div className="position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F1P41_SEQ",
          }}
        />
        <div className="squareplustri text-center mt-1"></div>
      </div>
      <div className="position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F1P51_SEQ",
          }}
        />
        <div className="squareplustri text-center mt-1"></div>
      </div>
      <div className="position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "VACUUM BLOWER",
          }}
        />
        <div className="squareplustri text-center mt-1"></div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "F1J07" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("F1J07")}`,
          secondCircleLabel: "F1J07",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "F1J08" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("F1J08")}`,
          secondCircleLabel: "F1J08",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "F1J04" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("F1J04")}`,
          secondCircleLabel: "F1J04",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("F1J05")}`,
          firstCircleLabel: "F1J05",
        }}
        text={{ useClass: "text-dark mx-auto", label: "F1J05" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleLabel: "73BDB-3A-FB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "F1J05" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("F1J05")}`,
          secondCircleLabel: "F1J05",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "A01" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("K1A01")}`,
          secondCircleLabel: "K1A01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "A02" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("K1A02")}`,
          secondCircleLabel: "K1A02",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "K1J01" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus("K1J01")}`,
          secondCircleLabel: "K1J01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F1S10M1")}`,
          secondCircleLabel: "F1S10M1",
        }}
      />
      <div className="text-center position-absolute single-text-20">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "PLC_F1J07_SP_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC_F1J07_S1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PLC_F1J07_I1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center d-flex flex-column position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "F1J07_T1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "F1J08_I1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center d-flex flex-column position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "F1J04_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "F1J04_SP_FB",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J04_S1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "F1J08_T1",
          useClass: "greenTxt position-absolute single-text-23",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "F1J05_W1",
          useClass: "greenTxt position-absolute single-text-24",
          unit: "t/h",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "K1A01_F1",
          useClass: "greenTxt position-absolute single-text-25",
          unit: "t/h",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "K1A02_F1",
          useClass: "greenTxt position-absolute single-text-26",
          unit: "t/h",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "F1J05_T1",
          useClass: "greenTxt position-absolute single-text-27",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-28">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("F1P25")}`}
          label="F1P25"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "F1P25",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("F1P35")}`}
          label="F1P35"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "F1P35",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("F1P45")}`}
          label="F1P45"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "F1P45",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("F1P55")}`}
          label="F1P55"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "F1P55",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("K1VB01")}`}
          label="K1VB01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K1VB01",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-33">
        <TransparentBoxWithGate
          isClickable={false}
          squareProps={{
            squareClass: `mr-1 grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "T12",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-34">
        <TransparentBoxWithGate
          isClickable={false}
          squareProps={{
            squareClass: `mr-1 grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "T23",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-35",
          label: "TO PH 2 (F2J03A)",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-36",
          label: "COAL MILL - 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-37",
          label: "F2T12",
        }}
      />
      <div className="border p-2 position-absolute single-text-38">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "F1J05 TODAY CTR",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_W1_TODAY",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "F1J05 YESTERDAY CTR",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_W1_YESTERDAY",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "F1J05 WEEK CTR",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_W1_WEEK",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "F1J05 MONTH CTR",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_W1_MONTH",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "F1J05 RUN HRS",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05 YESTERDAY",
              useClass: "greenTxt",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "F1J05 YEST",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J07 YESTERDAY",
              useClass: "greenTxt",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "F1J05 TODAY",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J07 TODAY",
              useClass: "greenTxt",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
    </div>
  );
};
