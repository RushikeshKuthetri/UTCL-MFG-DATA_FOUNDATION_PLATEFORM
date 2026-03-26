import { useColorStatus } from "../../../../../utils";
import {
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
  RedBoxWithGate,
  TextContainerWithWrapWord,
} from "../../../../index";

export const ClinkerSiloDischargeLine3 = () => {
  return (
    <div className="ClinkerSiloDischargeLine3 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot digital-tag grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("430BC10")}`,
          secondCircleLabel: "430BC10",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot digital-tag grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "430PC5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("430PC5")}`,
          secondCircleLabel: "430PC5",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot digital-tag grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "430PC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("430PC4")}`,
          secondCircleLabel: "430PC4",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot digital-tag grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "G21" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("G21")}`,
          secondCircleLabel: "G21",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "G22" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("G22")}`,
          secondCircleLabel: "G22",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("51BC2")}`,
          firstCircleLabel: "51BC2",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "51BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: `dot digital-tag grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CL6-C" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("CL6C")}`,
          secondCircleLabel: "CL6C",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CL6D")}`,
          firstCircleLabel: "CL6D",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "CL6-D" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag  grey-color`,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CL6E")}`,
          firstCircleLabel: "CL6E",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "CL6-E" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("PZ20")}`,
          firstCircleLabel: "PZ20",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "PZ20" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("PZ21")}`,
          firstCircleLabel: "PZ21",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "PZ21" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("51BC1")}`,
          firstCircleLabel: "51BC1",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "51BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag grey-color`,
          secondCircleLabel: "",
        }}
      />
      <div className="pipeHr position-absolute pipe-13 d-flex justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLINKER SILO-1",
          }}
        />
      </div>
      <div className="pipeHr position-absolute pipe-14 d-flex justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLINKER SILO-2",
          }}
        />
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div className="yellowline-Vr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Vr position-absolute pipe-50"></div>
      <div className="yellowline-Vr position-absolute pipe-51"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-53"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-54"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-55"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-58"></div>

      <div className="position-absolute single-text-1 d-flex ">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "LT5008",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GYPSUM-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM4",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "LT6002",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GYPSUM-2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM5",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "LT5012",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PI-FEEDING",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM4 & 5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex ">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "LT5007",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM4",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "LT6001",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM5",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "LT5001",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "POZ-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM4",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "LT6003",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "POZ-2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM5",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-3">
        <div className="squareplustri"></div>
      </div>
      <div className=" position-absolute single-text-4">
        <div className="squareplustri"></div>
      </div>
      <div className=" position-absolute single-text-5">
        <div className="squareplustri"></div>
      </div>
      <div className=" position-absolute single-text-6">
        <div className="squareplustri"></div>
      </div>
      <div className=" position-absolute single-text-7 d-flex">
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV2",
            squareClass: `${useColorStatus("430DV2")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV3",
            squareClass: `${useColorStatus("430DV3")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV4",
            squareClass: `${useColorStatus("430DV4")}`,
          }}
        />
      </div>
      <div className=" position-absolute single-text-8 d-flex">
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV5",
            squareClass: `${useColorStatus("430DV5")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV6",
            squareClass: `${useColorStatus("430DV6")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV7",
            squareClass: `${useColorStatus("430DV7")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV8",
            squareClass: `${useColorStatus("430DV8")}`,
          }}
        />
      </div>
      <div className=" position-absolute single-text-9 d-flex">
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV10",
            squareClass: `${useColorStatus("430DV10")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV11",
            squareClass: `${useColorStatus("430DV11")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV12",
            squareClass: `${useColorStatus("430DV12")}`,
          }}
        />
      </div>
      <div className=" position-absolute single-text-10 d-flex">
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV13",
            squareClass: `${useColorStatus("430DV13")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV14",
            squareClass: `${useColorStatus("430DV14")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV15",
            squareClass: `${useColorStatus("430DV15")}`,
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          parentClass=""
          squareProps={{
            tagLabel: "430DV16",
            squareClass: `${useColorStatus("430DV16")}`,
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("52RS2")} `}
          label="52RS2"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("52RS1")} `}
          label="52RS1"
          text="M"
        />
      </div>
      <BlackContainer
        data={{
          label: "IT6025",
          useClass: "greenTxt position-absolute single-text-12",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "IT5025",
          useClass: "greenTxt position-absolute single-text-13",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-14 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "OUTSIDE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLINKER",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM UNIT 1",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM UNIT 1",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO CEMENT MILLS",
          }}
        />
      </div>
    </div>
  );
};
