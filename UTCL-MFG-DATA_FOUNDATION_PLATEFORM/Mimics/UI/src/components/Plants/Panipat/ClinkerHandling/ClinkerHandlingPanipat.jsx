import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../index";
import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../utils";

export const ClinkerHandlingPanipat = () => {
  return (
    <div className="ClinkerHandlingPanipat w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "512AF1" }}
        secondCircle={{
          secondCircleClass: `square digital-tag ${useColorStatus(
            "CM_512AF1"
          )}`,
          secondCircleLabel: "CM_512AF1",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "512AF2" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "512AF3" }}
        secondCircle={{
          secondCircleClass: `square digital-tag ${useColorStatus(
            "CM_512AF3"
          )}`,
          secondCircleLabel: "CM_512AF3",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CM_512SX1")}`,
          firstCircleText: "M",
          firstCircleLabel: "CM_512SX1",
        }}
        text={{ useClass: "text-dark", label: "512SX1" }}
        secondCircle={{
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CM_512SX2")}`,
          firstCircleText: "M",
          firstCircleLabel: "CM_512SX2",
        }}
        text={{ useClass: "text-dark", label: "512SX2" }}
        secondCircle={{
          secondCircleLabel: "CL_471CV2_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CM_512SX3")}`,
          firstCircleText: "M",
          firstCircleLabel: "CM_512SX3",
        }}
        text={{ useClass: "text-dark", label: "512SX3" }}
        secondCircle={{
          secondCircleLabel: "CL_471CV2_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "512BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("CM_512BC1")}`,
          secondCircleLabel: "CM_512BC1",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "512BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("CM_512BC2")}`,
          secondCircleLabel: "CM_512BC2",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "512PC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("CM_512PC1")}`,
          secondCircleLabel: "CM_512PC1",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("")}`,
          firstCircleLabel: "",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "512BC3" }}
        secondCircle={{
          secondCircleClass: `grayDot`,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "512BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("CM_512BC4")}`,
          secondCircleLabel: "CM_512BC4",
          secondCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CM_512BC7")}`,
          firstCircleLabel: "CM_512BC7",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "512BC7" }}
        secondCircle={{
          secondCircleClass: `grayDot`,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
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
      <div className="yellowline-Hr position-absolute pipe-26"></div>
      <div className="yellowline-Hr position-absolute pipe-27"></div>
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
      <div className="yellowline-Vr position-absolute pipe-39"></div>
      <div className="yellowline-Vr position-absolute pipe-40"></div>
      <div className="yellowline-Hr position-absolute pipe-41"></div>
      <div className="yellowline-Hr position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Hr position-absolute pipe-45"></div>
      <div className="yellowline-Hr position-absolute pipe-46"></div>
      <div className="yellowline-Hr position-absolute pipe-47"></div>
      <div className="yellowline-Hr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Hr position-absolute pipe-50"></div>
      <div className="yellowline-Hr position-absolute pipe-51"></div>
      <div className="yellowline-Hr position-absolute pipe-52"></div>
      <div className="yellowline-Hr position-absolute pipe-53"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="triangle-with-squares text-center p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CLINKER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DUMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOPPER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "512HP1",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CLINKER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DUMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOPPER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "512HP2",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CLINKER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DUMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HOPPER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "512HP3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF1",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_512BF1"
              )} mt-1`}
              label="CM_512BF1"
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_512RA1"
              )}`}
              label="CM_512RA1"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "512RA1",
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF2",
              }}
            />
            <MotorCircleDigitalTag
              className={`square ${useColorStatus("")} mt-1`}
              label=""
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img ${useFanImgTagsColorStatus("")}`}
              label=""
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "512RA2",
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF3",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_512BF3"
              )} mt-1`}
              label="CM_512BF3"
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_512RA3"
              )}`}
              label="CM_512RA3"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "512RA3",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-3 d-flex">
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "521BF1",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_521BF1"
              )} mt-1`}
              label="CM_521BF1"
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_521RF1"
              )}`}
              label="CM_521RF1"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "521RA1",
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF7",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_512BF7"
              )} mt-1`}
              label="CM_512BF7"
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_512RA7"
              )}`}
              label="CM_512RA7"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "512RA7",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF4",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_512BF4"
              )} mt-1`}
              label="CM_512BF4"
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_512RA4"
              )}`}
              label="CM_512RA4"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "512RA4",
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center t-1">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF5",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_512BF5"
              )} mt-1`}
              label="CM_512BF5"
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_512RA5"
              )}`}
              label="CM_512RA5"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "512RA5",
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center t-2">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF6",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_512BF6"
              )} mt-1`}
              label="CM_512BF6"
            />
          </div>
          <div className="d-flex align-items-center left">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_512RA6"
              )}`}
              label="CM_512RA6"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "512RA6",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "512BF9",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_512BF9"
              )} mt-1`}
              label="CM_512BF9"
            />
          </div>
          <div className="t">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CM_512RA9"
              )}`}
              label="CM_512RA9"
            />
          </div>
        </div>
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-6"></div>
      <div className="pipe dotted-pipe position-absolute single-text-7"></div>
      <div className="position-absolute single-text-8 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_512BE2")} `}
          label="CM_512BE2"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_512BE1")} `}
          label="CM_512BE1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-9">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag ${useImgColorStatus(
              "CM_512SG3"
            )}`}
            label="CM_512SG3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "512SG1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex align-items-center">
          <div className="grn-gry-img"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "512DG1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_512FN1VFD_A"
              )}`}
              label="CM_512FN1VFD_A"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "512FN1",
            }}
          />
        </div>
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle ${useColorStatus("")}`}
              label=""
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "512FN2",
            }}
          />
        </div>
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_512FN3"
              )}`}
              label="CM_512FN3"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "512FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_512FN4"
              )}`}
              label="CM_512FN4"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "512FN4",
            }}
          />
        </div>
        <div className="t-1">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_512FN5"
              )}`}
              label="CM_512FN5"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "512FN5",
            }}
          />
        </div>
        <div className="t-2">
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_512FN6"
              )}`}
              label="CM_512FN6"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "512FN6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_521FN1"
              )}`}
              label="CM_521FN1"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "521FN1",
            }}
          />
        </div>
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_512FN7"
              )}`}
              label="CM_512FN7"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "512FN7",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "CM_512FN9"
              )}`}
              label="CM_512FN9"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <BlackContainer
          data={{
            label: "CM_512FN1VFD_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512FN1VFD_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <BlackContainer
          data={{
            label: "CM_512BF1_DPT",
            useClass: "greenTxt ",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "CM_512BF9_DPT",
            useClass: "greenTxt ",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <BlackContainer
          data={{
            label: "CM_512SX1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512SX2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512SX3_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "CM_512BF2_DPT",
            useClass: "greenTxt ",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <BlackContainer
          data={{
            label: "CM_512BF2_PT",
            useClass: "greenTxt ",
            unit: "KG/CM2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512BC1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex align-items-end">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RPM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "AMPS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "KIW",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SETP",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "512AF1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF1",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF1",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF1",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF1",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "512AF2",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF2",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF2",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF2",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF2",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "512AF3",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF3",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF3",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF3",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_512AF3",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex align-items-end">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "531WF1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "531WF2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "531WF3",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Speed",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF2_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF3_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Actual tph",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF1_FI",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF2_FI",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF3_FI",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Belt Id",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF1_BL",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF2_BL",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WF3_II",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "CM_512BC7_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_511FY1_LHH")} `}
          label="CM_511FY1_LHH"
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "CEMENT MILL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HOPPER",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_511FY1_LI",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_512DG1_FLS")} `}
          label="CM_512DG1_FLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_512DG1_RLS")} `}
          label="CM_512DG1_RLS"
        />
      </div>
      <div className="position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "CM_512BC3_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CM_512BE2_MG2_CLS"
            )} `}
            label="CM_512BE2_MG2_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CM_512BE2_MG2_OLS"
            )} ml-2`}
            label="CM_512BE2_MG2_OLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CM_512BE1_MG1_CLS"
            )} `}
            label="CM_512BE1_MG1_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CM_512BE1_MG1_OLS"
            )} ml-2`}
            label="CM_512BE1_MG1_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <BlackContainer
          data={{
            label: "CM_512BE2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512BE1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_512BE2_LH")} `}
          label="CM_512BE2_LH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_512BE1_LH")} `}
          label="CM_512BE1_LH"
        />
      </div>
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "CM_512BC4_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "CM_512FS2_LI",
            useClass: "greenTxt ",
            unit: "M",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "CM_512FN7_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512BF7_DPT",
            useClass: "greenTxt  ml-2 mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "CM_512BF3_DPT",
            useClass: "greenTxt ",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "CM_512FN4_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512BF4_DPT",
            useClass: "greenTxt  ml-2 mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "CM_512FN5_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512BF5_DPT",
            useClass: "greenTxt  ml-2 mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CM_512FN6_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512BF6_DPT",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_512PC1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "CM_512BC2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_521BF1_LH")} `}
          label="CM_521BF1_LH"
        />
      </div>
      <div className="position-absolute single-text-39 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "FUTURE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CLINKER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SILO",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 text-center p-1 bg-secondary">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CLINKER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SILO",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <MotorCircleDigitalTag
          className={`fa fa-chevron-up ${useColorStatus("CM_512BC1_BSS")}`}
          label="CM_512BC1_BSS"
        />
      </div>
      <div className="position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`fa fa-chevron-up ${useColorStatus("CM_512BC3_BSS")}`}
          label="CM_512BC3_BSS"
        />
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_512BF4")} mt-1`}
          label="CM_512BF4"
          text='M'
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_512BF4")} mt-1`}
          label="CM_512BF4"
          text='M'
        />
      </div>
    </div>
  );
};
