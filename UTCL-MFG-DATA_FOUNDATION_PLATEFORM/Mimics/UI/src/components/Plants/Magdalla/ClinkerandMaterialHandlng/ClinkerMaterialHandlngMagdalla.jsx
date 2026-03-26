import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../index";
import { useColorStatus, useFanImgTagsColorStatus } from "../../../../utils";

export const ClinkerMaterialHandlngMagdalla = () => {
  return (
    <div className="CMHMagdalla position-relative w-100 h-100">
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
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-1">
        <div className="pipeVr position-relative"></div>
        <div className="containerImage d-flex flex-column justify-content-center align-items-center">
          <BlackContainer
            data={{
              label: "PAC1_G32_LT",
              useClass: "greenTxt",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "EXISTING CLINKER SILO-1",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-2">
        <div className="pipeVr position-relative"></div>
        <div className="containerImage d-flex flex-column justify-content-center align-items-center">
          <BlackContainer
            data={{
              label: "PAC1_G32A_LT",
              useClass: "greenTxt",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "EXISTING CLINKER SILO-2",
            }}
          />
        </div>
      </div>
      <div className="loadingtruck position-absolute single-text-3"></div>
      <div className="loadingtruck position-absolute single-text-4"></div>
      <div className="position-absolute single-text-5">
        <BlackContainer
          data={{
            label: "MH_491BF1_DPTA",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "MH_491BF1_PTA",
            useClass: "greenTxt my-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "491BF1",
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <div className={`square  grey-color`} />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "MH_491FN1_II",
                useClass: "greenTxt ml-5",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <div className="img-97 d-flex justify-content-center align-items-end mt-1">
              <div className="yellowline-Vr upArrow position-absolute"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("MH_491FN1")}`}
                label="MH_491FN1"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "491FN1",
              }}
            />
            <BlackContainer
              data={{
                label: "MH_491FN1_SI",
                useClass: "greenTxt mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <BlackContainer
          data={{
            label: "MH_491BF2_DPTA",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "MH_491BF2_PTA",
            useClass: "greenTxt my-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "491BF2",
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <div className={`square  grey-color`} />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "MH_491FN2_II",
                useClass: "greenTxt ml-5",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <div className="img-97 d-flex justify-content-center align-items-end mt-1">
              <div className="yellowline-Vr upArrow position-absolute"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("MH_491FN2")}`}
                label="MH_491FN2"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "491FN2",
              }}
            />
            <BlackContainer
              data={{
                label: "MH_491FN2_SI",
                useClass: "greenTxt mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "491BF3",
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <div className={`square  grey-color`} />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-4">
              <div className="yellowline-Vr upArrow position-absolute"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("MH_491FN3")}`}
                label="MH_491FN3"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "491FN3",
              }}
            />
            <BlackContainer
              data={{
                label: "MH_491BF3_DPTA",
                useClass: "greenTxt",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "MH_491BF3_PTA",
                useClass: "greenTxt my-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `grayDot`,
        }}
        text={{ useClass: "text-dark", label: "491BC1" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus("MH_491BC1")} digital-tag`,
          secondCircleLabel: "MH_491BC1",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "40BC60" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("MH_40BC60")}`,
          secondCircleLabel: "MH_40BC60",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "491BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("MH_491BC2")}`,
          secondCircleLabel: "MH_491BC2",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "G4A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "PAC1_G4A_RUN"
          )}`,
          secondCircleLabel: "PAC1_G4A_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-12"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "MH_491BE1_M01"
          )}`,
          firstCircleLabel: "MH_491BE1_M01",
        }}
      />
      <div className="boxContainer p-2 position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "491RU1",
          }}
        />
        <div className="d-flex justify-content-between mt-1">
          <BlackContainer
            data={{
              label: "MH_491RU1_SI",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <div className="position-relative">
            <div className="yellowline-Vr upArrow position-absolute"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag p-3 ${useColorStatus("MH_491RU1")}`}
              label="MH_491RU1"
            />
          </div>
          <BlackContainer
            data={{
              label: "MH_491RU1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-2 position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "491RU2",
          }}
        />
        <div className="d-flex justify-content-between mt-1">
          <BlackContainer
            data={{
              label: "MH_491RU2_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="position-relative">
            <div className="yellowline-Vr upArrow position-absolute"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag p-3 ${useColorStatus("MH_491RU2")}`}
              label="MH_491RU2"
            />
          </div>

          <BlackContainer
            data={{
              label: "MH_491RU2_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-15">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH_491DG1")}`}
            label="MH_491DG1"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4 mt-3",
            label: "491DG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-16">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH_491DG2")}`}
            label="MH_491DG2"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4 mt-3",
            label: "491DG2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark boxContainer px-3 text-center",
            label: "41BC70 CLINKER SHED",
          }}
        />
        <BlackContainer
          data={{
            label: "MH_491BC2_II",
            useClass: "greenTxt ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "MH_491BE1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 mt-3 ml-auto ${useColorStatus(
            "MH_491BE1_M02"
          )}`}
          label="MH_491BE1_M02"
          text="M"
        />
      </div>
      <div className="d-flex align-items-end position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "491RA1",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "MH_491RA1"
          )}`}
          label="MH_491RA1"
        />
      </div>
      <div className="d-flex align-items-end position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "491RA2",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "MH_491RA2"
          )}`}
          label="MH_491RA2"
        />
      </div>
      <div className="d-flex align-items-end position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "491RA3",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "MH_491RA3"
          )}`}
          label="MH_491RA3"
        />
      </div>
      <BlackContainer
        data={{
          label: "MH_491BC1_II",
          useClass: "greenTxt position-absolute single-text-22",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-23",
          label: "491TT1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-24",
          label: "491TT2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-25",
          label: "491BE1",
        }}
      />
    </div>
  );
};
