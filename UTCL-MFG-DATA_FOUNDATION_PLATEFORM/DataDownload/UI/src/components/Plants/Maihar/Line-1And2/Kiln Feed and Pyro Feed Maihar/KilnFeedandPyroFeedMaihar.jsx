import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../../index";
import { useColorStatus } from "../../../../../utils";

export const KilnFeedandPyroFeedMaihar = () => {
  return (
    <div className="KilnFeedandPyroFeedMaihar w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 text-center p-2 bg-secondary">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-primary p-1 mx-auto",
            label: "BLENDING SILO",
          }}
        />
        <div className="containerImage"></div>
        <div className="single-text-2">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto digital-tag ${useColorStatus(
              "410AE1SDP"
            )}`}
            label="410AE1SDP"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-primary pt-2 mx-auto",
              label: "SILO DISCH PANEL",
            }}
          />
        </div>
      </div>
      <div className="containerImage position-absolute single-text-3"></div>
      <div className="position-absolute single-text-4 text-center">
        <BlackContainer
          data={{
            label: "PT2005",
            useClass: "greenTxt mt-1 mb-2 text",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-icon">
          <div className="circle-group p-1 ">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("330CP1")}`}
              label="330CP1"
              text="M"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`dot p-3 mt-1 digital-tag ${useColorStatus("330CP1A")}`}
          label="330CP1A"
          text="M"
        />
      </div>
      <div className="containerImage position-absolute single-text-5"></div>
      <div className="containerImage position-absolute single-text-6">
        <BlackContainer
          data={{
            label: "WT3001",
            useClass: "greenTxt mt-5 mx-auto text",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-7 position-absolute">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FROM 330BE1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto digital-tag ${useColorStatus(
              "330BE1"
            )}`}
            label="330BE1"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FROM 330BE2",
            }}
          />

          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto digital-tag ${useColorStatus(
              "330BE2"
            )}`}
            label="330BE2"
            text="M"
          />
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-8"></div>
      <div className="hpipecircle position-absolute single-text-9"></div>
      <div className="position-absolute single-text-10">
        <div className="img-66">
          <div className="connector-icon ">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("410FN1")}`}
                label="410FN1"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="img-66 mr-3">
          <div className="connector-icon ">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("410FN2")}`}
                label="410FN2"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="img-66 ml-5 img-rotate ">
          <div className="connector-icon ">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("410FN1A")}`}
                label="410FN1A"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-12"></div>
      <div className="hpipecircle position-absolute single-text-13"></div>
      <div className="hpipecircle position-absolute single-text-14"></div>
      <div className="position-absolute single-text-15">
        <div>
          <BlackContainer
            data={{
              label: "GT3013",
              useClass: "greenTxt mb-1 text",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("416SG1")}`}
            label="416SG1"
            text="M"
          />
        </div>
        <div className="mt-5">
          <MotorCircleDigitalTag
            className={`dot p-3 mb-2 digital-tag ${useColorStatus("416SG2")}`}
            label="416SG2"
            text="M"
          />
          <BlackContainer
            data={{
              label: "GT3014",
              useClass: "greenTxt mb-1 text",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16">
        <div>
          <BlackContainer
            data={{
              label: "GT3015",
              useClass: "greenTxt mb-1 text",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("416SG3")}`}
            label="416SG3"
            text="M"
          />
        </div>
        <div className="mt-5">
          <MotorCircleDigitalTag
            className={`dot p-3 mb-2 digital-tag ${useColorStatus("416SG4")}`}
            label="416SG4"
            text="M"
          />
          <BlackContainer
            data={{
              label: "GT3016",
              useClass: "greenTxt mb-1 text",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-17"></div>
      <div className="position-absolute single-text-18 d-flex">
        <div className="img-66 mr-3">
          <div className="connector-icon ">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("416FN1")}`}
                label="416FN1"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="img-66 img-rotate  ml-3">
          <div className="connector-icon">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("416FN4")}`}
                label="416FN4"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div className="img-66 mr-3">
          <div className="connector-icon ">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("416FN4A")}`}
                label="416FN4A"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="img-66 img-rotate  ml-3">
          <div className="connector-icon">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("416FN2")}`}
                label="416FN2"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div className="connector-icon mr-3">
          <div className="circle-group p-1 ">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("416BL2")}`}
              label="416BL2"
              text="M"
            />
          </div>
        </div>
        <div className="connector-icon ml-3">
          <div className="circle-group p-1 ">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("416BL1")}`}
              label="416BL1"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="connector-icon ">
          <div className="circle-group p-1 ">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("410BL3")}`}
              label="410BL3"
              text="M"
            />
          </div>
        </div>
        <div className="connector-icon">
          <div className="circle-group p-1 ">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("410BL2")}`}
              label="410BL2"
              text="M"
            />
          </div>
        </div>
        <div className="connector-icon">
          <div className="circle-group p-1 ">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("410BL1")}`}
              label="410BL1"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "PT3005",
            useClass: "greenTxt mt-1 mr-5 text",
            unit: "WG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "PT3006",
            useClass: "greenTxt mt-1 mr-5 text",
            unit: "WG",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-24 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TO 416AL1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "416AS1",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "416AS2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 ",
            label: "TO 416AL2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-26">
        <div className="img-66">
          <div className="connector-icon">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("330FN7")}`}
                label="330FN7"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "416FN3(IF IN SEQ)",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "ON TIME = 50 MIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "ON TIME = 10 MIN",
          }}
        />
      </div>
      <div className=" squareplustri position-absolute single-text-28"></div>
      <div className=" img-87 position-absolute single-text-29"></div>
      <div className=" squareplustri position-absolute single-text-30"></div>
      <div className=" img-87 position-absolute single-text-31"></div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-32 ",
          label: "TO KILN 1st STAGE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-33 ",
          label: "TO PYRO 1st STAGE",
        }}
      />
      <div className=" position-absolute single-text-34 d-flex">
        <div className="img-41 mr-1">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto mt-2 digital-tag ${useColorStatus(
              "416BL3"
            )}`}
            label="416BL3"
            text="M"
          />
        </div>
        <div className="img-41 mr-1">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto mt-2 digital-tag ${useColorStatus(
              "416BL3A"
            )}`}
            label="416BL3A"
            text="M"
          />
        </div>
        <div className="img-41 mr-1">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto mt-2 digital-tag ${useColorStatus(
              "416BL4"
            )}`}
            label="416BL4"
            text="M"
          />
        </div>
        <div className="img-41 mr-1">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto mt-2 digital-tag ${useColorStatus(
              "416BL4A"
            )}`}
            label="416BL4A"
            text="M"
          />
        </div>
        <div className="img-41">
          <MotorCircleDigitalTag
            className={`dot p-3 mx-auto mt-2 digital-tag ${useColorStatus(
              "416BL5"
            )}`}
            label="416BL5"
            text="M"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-35">
        <div className="img-66">
          <div className="connector-icon">
            <div className="circle-group p-1 ">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("330FN7")}`}
                label="330FN7"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-36">
        <i className="fa fa-caret-down d-block m-auto"></i>
        <i className="fa-solid fa-caret-up d-block m-auto"></i>
      </div>
      <div className=" position-absolute single-text-37">
        <i className="fa fa-caret-down d-block m-auto"></i>
        <i className="fa-solid fa-caret-up d-block m-auto"></i>
      </div>
      <div className=" position-absolute single-text-38">
        <i className="fa fa-caret-down d-block m-auto"></i>
        <i className="fa-solid fa-caret-up d-block m-auto"></i>
      </div>
      <div className=" position-absolute single-text-39 d-flex  justify-content-between">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KILN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PYRO",
          }}
        />
      </div>

      <div className="pipeHr position-absolute pipe-1 d-flex justify-content-center">
        <i className="fas fa-long-arrow-alt-left"></i>
      </div>
      <div className="pipeHr position-absolute pipe-2 d-flex justify-content-center">
        <i className="fas fa-long-arrow-alt-left ml-5"></i>
      </div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7 d-flex justify-content-center">
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12 d-flex justify-content-center">
        {" "}
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>

      <div className="yellowline-Hr rightarrow position-absolute line-1"></div>
      <div className="yellowline-Vr position-absolute line-2"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-10"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-11"></div>
      <div className="yellowline-Hr  position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Hr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Vr upArrow position-absolute line-21"></div>
      <div className="yellowline-Vr upArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Hr  position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Vr upArrow position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Vr upArrow position-absolute line-37"></div>
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Hr  position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr position-absolute line-46"></div>
      <div className="yellowline-Vr position-absolute line-47"></div>
      <div className="yellowline-Vr position-absolute line-48"></div>
      <div className="yellowline-Vr position-absolute line-49"></div>
      <div className="yellowline-Vr position-absolute line-50"></div>
      <div className="yellowline-Hr position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Hr position-absolute line-54"></div>
      <div className="yellowline-Vr downArrow position-absolute line-55"></div>
      <div className="yellowline-Hr position-absolute line-56"></div>
      <div className="yellowline-Vr upArrow position-absolute line-57"></div>
    </div>
  );
};
