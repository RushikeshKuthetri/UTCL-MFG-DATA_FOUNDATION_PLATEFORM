import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

export const LimestoneTransportCircuitRawanL2 = () => {
  return (
    <div className="LTCRawanL2 w-100 h-100 position-relative">
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
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-24"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>

      <div className="position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SURGE HOPPER",
          }}
        />
        <div className="text-center containerImage mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "222.HP1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "222.BF1",
          }}
        />
        <div className="text-center containerImage mt-01">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("222BF1/M01")}`}
            label="222BF1/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "211BFG",
          }}
        />
        <div className="text-center containerImage mt-01">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("211BFG/M01")}`}
            label="211BFG/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "222.BF2",
          }}
        />
        <div className="text-center containerImage mt-01">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("222BF2/M01")}`}
            label="222BF2/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "222.BF3",
          }}
        />
        <div className="text-center containerImage mt-01">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("222BF3/M01")}`}
            label="222BF3/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "222.BF4",
          }}
        />
        <div className="text-center containerImage mt-01">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("222BF4/M01")}`}
            label="222BF4/M01"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222AF1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222AF1/M01"
          )}`,
          secondCircleLabel: "222AF1/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222.BC1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC1/222BC1/M01"
          )}`,
          secondCircleLabel: "222BC1/222BC1/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222.BC2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC2/M01"
          )}`,
          secondCircleLabel: "222BC2/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222.BC3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC3/M01"
          )}`,
          secondCircleLabel: "222BC3/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222BC3A" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC3A/M01"
          )}`,
          secondCircleLabel: "222BC3A/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222.BC5" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC5/M01"
          )}`,
          secondCircleLabel: "222BC5/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222.BC4" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC4/M01"
          )}`,
          secondCircleLabel: "222BC4/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222.BC7" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC7/M01"
          )}`,
          secondCircleLabel: "222BC7/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "222.BC6" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BC6/M01"
          )}`,
          secondCircleLabel: "222BC6/M01",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "221BCG" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "221BCG/M01"
          )}`,
          secondCircleLabel: "221BCG/M01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "221BCF" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "221BCF/M01"
          )}`,
          secondCircleLabel: "221BCF/M01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "222BRU/M01"
          )}`,
          firstCircleLabel: "222BRU/M01",
          firstCircleText: "M",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <div className="d-flex flex-column justify-content-between position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "212BW1/FRA",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "222AF1/SA",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "222.MS1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("222MS1/M01")}`}
          label="222MS1/M01"
        />
      </div>
      <div className="d-flex position-absolute single-text-21">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "211DG1/M01"
          )}`}
          label="211DG1/M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "211DG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-22">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "222DG1/M01"
          )}`}
          label="222DG1/M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "222.DG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "222RA1/M01"
          )}`}
          label="222RA1/M01"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "222.RA1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "222.BC1",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-24">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "222RA2/M01"
          )}`}
          label="222RA2/M01"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "222.RA2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "222.BC2",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-25">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "211RAG/M01"
          )}`}
          label="211RAG/M01"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "211RAG",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "222.BC3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "222RA3/M01"
          )}`}
          label="222RA3/M01"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "222.RA3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "222.BC3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-27">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "222RA4/M01"
          )}`}
          label="222RA4/M01"
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "222.RA4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "222.BC4",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-28">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("222FN1/M01")}`}
            label="222FN1/M01"
            text="F"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "222.FN1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-29">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("222FN2/M01")}`}
            label="222FN2/M01"
            text="F"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "222.FN2",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-30">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("211FNG/M01")}`}
            label="211FNG/M01"
            text="F"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "211FNG",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-31">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("222FN3/M01")}`}
            label="222FN3/M01"
            text="F"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "222.FN3",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-32">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon justify-content-start pl-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("222FN4/M01")}`}
            label="222FN4/M01"
            text="F"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "222.FN4",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "222BC1/IA",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "221BCF/IA",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "222BC1/TPH",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC2/IA",
            useClass: "greenTxt ml-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "221BCG/TPH",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "221BCG/IA",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "222BC3A/SA",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "222BC3A/IA",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "WATER PUMP FOR 222BC1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("222BC1WP/M01")}`}
          label="222BC1WP/M01"
          text="M"
        />
      </div>
      <div className="d-flex position-absolute single-text-38">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("222ST1/M01")}`}
          label="222ST1/M01"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "222.ST1",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "GUMA BRU",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "222BC3/IA",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "222BC3AFI/FI",
          useClass: "greenTxt position-absolute single-text-41",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "222BC4/IA",
          useClass: "greenTxt position-absolute single-text-42",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "222BC6/IA",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-44",
          label: "FROM LINE 1 (221BC8) CROSS COUNTRY BELT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "TO LINE 1 (221BC9)",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "TO 312BC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-47",
          label: "RECLAIMER BYPASS BELT",
        }}
      />
      <BlackContainer
        data={{
          label: "222DG1/ZTA",
          useClass: "greenTxt position-absolute single-text-48",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};
