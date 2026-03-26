import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const U3CrusherL3Vasavdatta = () => {
  return (
    <div className="LimestoncecrushingVasavdatta w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-13"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className=" position-absolute single-text-1">
        <div className="loadingtruck ml-auto"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "OLD LS STACKER BOOM POSITION",
          }}
        />
      </div>
      <div className="containerImage pt-3 text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER LVL",
          }}
        />
        <BlackContainer
          data={{
            label: "3C01HP_LT",
            useClass: "greenTxt mt-1",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage pt-3 text-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C04W0B",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-4">
        <div className="pipeVr pt-2 position-relative">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DHB CRUSHER",
            }}
          />
        </div>
        <div className="img-93 pt-2 text-center">
          <div className="d-flex justify-content-around">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "3C05CRM01",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3",
                label: "3C05CRM02",
              }}
            />
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        text={{ useClass: "text-dark mx-auto", label: "3C02AF" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "3C02AFM01"
          )}`,
          secondCircleLabel: "3C02AFM01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        firstCircle={{
          firstCircleClass: `dot  grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "3C03SRC" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "3C03SRCM01"
          )}`,
          secondCircleLabel: "3C03SRCM01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "3C06BCM01" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "3C06BCM01"
          )}`,
          secondCircleLabel: "3C06BCM01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark mx-auto", label: "3C16BCM01" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useColorStatus(
            "3C13BCM01"
          )}`,
          secondCircleLabel: "3C13BCM01",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-9">
        <PipeWithCircles
          parentDivClass="hpipecircle position-relative"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleLabel: "CM_561BE1_M01",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("3C15CPM01")}`,
            secondCircleLabel: "3C15CPM01",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle position-relative mt-1"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "3C15CPM01",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <PipeWithCircles
          parentDivClass="hpipecircle position-relative"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("3C19CPM01")}`,
            secondCircleLabel: "3C19CPM01",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle position-relative mt-1"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "3C19CPM01",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        secondCircle={{
          secondCircleClass: `dot p-3 ml-auto digital-tag ${useColorStatus(
            "3C04WOBM01"
          )}`,
          secondCircleLabel: "3C04WOBM01",
          secondCircleText: "M",
        }}
      />
      <div className="squareplustri text-center pt-2 position-absolute single-text-12">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("3C09BF_ST_01")}`}
          label="3C09BF_ST_01"
        />
      </div>
      <div className="position-absolute single-text-13">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("3C09FNM01")}`}
            label="3C09FNM01"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C09NM01",
          }}
        />
      </div>
      <div className="grid-container-3 position-absolute single-text-14">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("3C14BCM01")}`}
          text="M"
          label="3C14BCM01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BC2",
          }}
        />
        <BlackContainer
          data={{
            label: "3C14BCM01_JI",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("3D04BCM01")}`}
          text="M"
          label="3D04BCM01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BC3",
          }}
        />
        <BlackContainer
          data={{
            label: "3D04BCM01_JI",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("3D02")}`}
          text="M"
          label="3D02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "STK",
          }}
        />
      </div>
      <div className="grid-container-2 position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "3C2AF_JI",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C02AF_SI",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C02AF_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "3C02SC_II",
          useClass: "greenTxt position-absolute single-text-16",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C13BC_BW",
          }}
        />
        <BlackContainer
          data={{
            label: "3C13BC_BW",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "3C05R01_SI_1A",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05R01_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05M01_JI",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "3C05M01_JI",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "3C04WOB_II",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <div className="grid-container-2 position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C05M01_VI1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C05M02_VI1",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05M01_VI1",
            useClass: "greenTxt",
            unit: "MM/S",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05M01_VI2",
            useClass: "greenTxt",
            unit: "MM/S",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05M02_VI1",
            useClass: "greenTxt",
            unit: "MM/S",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05M02_VI2",
            useClass: "greenTxt",
            unit: "MM/S",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C05M01_VI2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C05M02_VI2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "3CSTK_AO",
            useClass: "greenTxt",
            unit: "mg/m³",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C09FNM01_DPI",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "3C05R02_SI_1A",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05R02_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C05M02_JI",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3C05M02_JI",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "3C13BCM01_SI",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "BC1",
          }}
        />
        <BlackContainer
          data={{
            label: "3C13BCM_JI1",
            useClass: "greenTxt ml-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3C13BCM_JI2",
            useClass: "greenTxt ml-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="grid-container-4 position-absolute single-text-24">
        <MotorCircleDigitalTag
          className={`circle-img p-3 digital-tag ${useFanImgTagsColorStatus(
            "3C09RA1M01"
          )}`}
          label="3C09RA1M01"
        />
        <MotorCircleDigitalTag
          className={`circle-img p-3 digital-tag ${useFanImgTagsColorStatus(
            "3C09RA1M02"
          )}`}
          label="3C09RA1M02"
        />
        <MotorCircleDigitalTag
          className={`circle-img p-3 digital-tag ${useFanImgTagsColorStatus(
            "3C09RA1M03"
          )}`}
          label="3C09RA1M03"
        />
        <MotorCircleDigitalTag
          className={`circle-img p-3 digital-tag ${useFanImgTagsColorStatus(
            "3C09RA1M04"
          )}`}
          label="3C09RA1M04"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAL-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAL-3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAL-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAL-4",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("3C05CRM01")}`}
          label="3C05CRM01"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("3C05CRM02")}`}
          label="3C05CRM02"
          text="M"
        />
      </div>
      <div className="boxContainer text-center position-absolute single-text-26">
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ROTOR-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ROTOR-2",
            }}
          />
        </div>
        <div className="grid-container-4 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05R_TI1",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05R_TI1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05R_TI3",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05R_TI3",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05R_TI2",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05R_TI2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05R_TI4",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05R_TI4",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOTOR-1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOTOR-2",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "JACK SHAFT BRG TEMP",
          }}
        />
        <div className="grid-container-4 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI5",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI5",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI7",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI7",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI6",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI6",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI8",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI8",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "MOTOR WINDING TEMP",
          }}
        />
        <div className="grid-container-4 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M01_TI1",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M01_TI1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M01_TI1",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M02_TI1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M01_TI2",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M01_TI2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "BEARING TEMPERATURE",
          }}
        />
        <div className="grid-container-4 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI1",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI3",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI3",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI2",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3C05M_TI4",
            }}
          />
          <BlackContainer
            data={{
              label: "3C05M_TI4",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-27">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("3D08BCM01")}`}
          text="M"
          label="3D08BCM01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BC4",
          }}
        />
        <BlackContainer
          data={{
            label: "3D08BCM01_JI",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};
