import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  MotorCircleDigitalTag,
  TextColumn,
  PipeWithCircles,
} from "../../../../index";

import * as tagsData from "../../../../../data/Kotputli/CementSiloExtraction/kotputliCSETextcolumn";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const CementSiloExtractionKotputliPage = () => {
  return (
    <div className="CementSiloExtractionKotputli w-100 h-100 position-relative">
      <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
        <div className="trapezoid"></div>
      </div>
      <div className="yellowline-Vr position-absolute line-1"></div>
      <div className="yellowline-Vr position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr upArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Vr upArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr upArrow position-absolute line-30"></div>
      <div className="yellowline-Vr upArrow position-absolute line-31"></div>
      <div className="yellowline-Vr upArrow position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Vr upArrow position-absolute line-37"></div>
      <div className="yellowline-Vr upArrow position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>
      <div className="yellowline-Vr upArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr position-absolute line-46"></div>
      <div className="yellowline-Vr position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="yellowline-Vr position-absolute line-49"></div>
      <div className="yellowline-Vr position-absolute line-50"></div>
      <div className="yellowline-Vr position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Vr position-absolute line-54"></div>
      <div className="yellowline-Vr downArrow position-absolute line-55"></div>
      <div className="yellowline-Vr downArrow position-absolute line-56"></div>
      <div className="yellowline-Vr downArrow position-absolute line-57"></div>
      <div className="yellowline-Vr downArrow position-absolute line-58"></div>
      <div className="yellowline-Vr downArrow position-absolute line-59"></div>
      <div className="yellowline-Vr upArrow position-absolute line-60"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Vr position-absolute line-62"></div>
      <div className="yellowline-Vr downArrow position-absolute line-63"></div>
      <div className="yellowline-Vr downArrow position-absolute line-64"></div>
      <div className="yellowline-Vr downArrow position-absolute line-65"></div>
      <div className="yellowline-Vr downArrow position-absolute line-66"></div>
      <div className="yellowline-Vr downArrow position-absolute line-67"></div>
      <div className="yellowline-Vr downArrow position-absolute line-68"></div>
      <div className="yellowline-Vr upArrow position-absolute line-69"></div>
      <div className="yellowline-Vr upArrow position-absolute line-70"></div>
      <div className="yellowline-Vr upArrow position-absolute line-71"></div>
      <div className="yellowline-Vr position-absolute line-72"></div>
      <div className="yellowline-Vr position-absolute line-73"></div>
      <div className="yellowline-Vr position-absolute line-74"></div>
      <div className="yellowline-Vr position-absolute line-75"></div>
      <div className="yellowline-Vr downArrow position-absolute line-76"></div>
      <div className="yellowline-Vr downArrow position-absolute line-77"></div>
      <div className="yellowline-Vr downArrow position-absolute line-78"></div>
      <div className="yellowline-Vr downArrow position-absolute line-79"></div>
      <div className="yellowline-Vr downArrow position-absolute line-80"></div>
      <div className="yellowline-Hr position-absolute line-81"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-82"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-83"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-84"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-85"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-86"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-87"></div>
      <div className="yellowline-Hr position-absolute line-88"></div>
      <div className="yellowline-Hr position-absolute line-89"></div>
      <div className="yellowline-Hr position-absolute line-90"></div>
      <div className="yellowline-Hr position-absolute line-91"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-92"></div>
      <div className="yellowline-Hr position-absolute line-93"></div>
      <div className="yellowline-Hr position-absolute line-94"></div>
      <div className="yellowline-Hr position-absolute line-95"></div>
      <div className="yellowline-Hr position-absolute line-96"></div>
      <div className="yellowline-Hr position-absolute line-97"></div>
      <div className="yellowline-Hr position-absolute line-98"></div>
      <div className="yellowline-Hr position-absolute line-99"></div>
      <div className="yellowline-Hr position-absolute line-100"></div>
      <div className="yellowline-Hr position-absolute line-101"></div>
      <div className="yellowline-Hr position-absolute line-102"></div>
      <div className="yellowline-Hr position-absolute line-103"></div>
      <div className="yellowline-Hr position-absolute line-104"></div>
      <div className="yellowline-Hr position-absolute line-105"></div>
      <div className="yellowline-Hr position-absolute line-106"></div>
      <div className="yellowline-Hr position-absolute line-107"></div>
      <div className="yellowline-Hr position-absolute line-108"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-109"></div>
      <div className="yellowline-Hr position-absolute line-110"></div>
      <div className="yellowline-Hr position-absolute line-111"></div>
      <div className="yellowline-Hr position-absolute line-112"></div>
      <div className="yellowline-Hr position-absolute line-113"></div>
      <div className="yellowline-Hr position-absolute line-114"></div>
      <div className="yellowline-Hr position-absolute line-115"></div>
      <div className="yellowline-Hr position-absolute line-116"></div>
      <div className="yellowline-Hr position-absolute line-117"></div>
      <div className="yellowline-Hr position-absolute line-118"></div>
      <div className="yellowline-Vr position-absolute line-119"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-120"></div>

      <div className="pipeHr position-absolute pipe-2"> </div>
      <div className="pipeHr position-absolute pipe-3"> </div>
      <div className="pipeHr position-absolute pipe-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613ASE",
          }}
        />
      </div>
      <div className="pipeHr position-absolute pipe-5"> </div>
      <div className="pipeHr position-absolute pipe-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613AS7",
          }}
        />{" "}
      </div>
      <div className="pipeHr position-absolute pipe-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613AS8",
          }}
        />
      </div>
      <div className="pipeHr position-absolute pipe-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613ASA",
          }}
        />{" "}
      </div>
      <div className="pipeHr position-absolute pipe-9"> </div>
      <div className="pipeHr position-absolute pipe-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613AS3",
          }}
        />{" "}
      </div>
      <div className="pipeHr position-absolute pipe-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613AS1",
          }}
        />{" "}
      </div>
      <div className="pipeHr position-absolute pipe-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-auto mt-2",
            label: "623AS2",
          }}
        />{" "}
      </div>
      <div className="pipeHr position-absolute pipe-13"> </div>
      <div className="pipeHr position-absolute pipe-14"> </div>
      <div className="pipeHr position-absolute pipe-15"> </div>
      <div className="pipeHr position-absolute pipe-16"> </div>
      <div className="pipeHr position-absolute pipe-17"> </div>
      <div className="pipeHr position-absolute pipe-18"> </div>
      <div className="pipeHr position-absolute pipe-19"> </div>
      <div className="pipeHr position-absolute pipe-20"> </div>
      <div className="pipeVr position-absolute pipe-21"> </div>
      <div className="pipeVr position-absolute pipe-22"> </div>
      <div className="pipeHr position-absolute pipe-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613ASB",
          }}
        />{" "}
      </div>
      <div className="pipeHr position-absolute pipe-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613ASF",
          }}
        />{" "}
      </div>
      <div className="pipeVr position-absolute pipe-25"> </div>
      <div className="pipeVr position-absolute pipe-26"> </div>
      <div className="pipeVr position-absolute pipe-27"> </div>
      <PipeWithCircles
        parentDivClass="pipeVr position-absolute pipe-28"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `square ${useColorStatus("PP_613SGA_OLS")}`,
          secondCircleLabel: "PP_613SGA_OLS",
        }}
      />
      {/* <div className="pipeVr position-absolute pipe-28">
        <div className="square grey-color mx-auto"></div>{" "}
      </div> */}

      <div className="containerImage text-center position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "CM_573BE1_BSS_A01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EXISTING BIN",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-2">
        <BlackContainer
          data={{
            label: "CM_573BE1_BSS_A01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EXISTING BIN",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-3">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`text-dark p-1 digital-tag ${useColorStatus(
              "PP_613BI1_PH"
            )}`}
            label="PP_613BI1_PH"
            text="PH"
          />
          <MotorCircleDigitalTag
            className={`text-dark p-1 digital-tag ${useColorStatus(
              "PP_613BI1_LSH"
            )}`}
            label="PP_613BI1_LSH"
            text="LS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "613LI3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "613BI1",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "623BI1",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_623BI1_WI",
            useClass: "greenTxt mt-1",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 mt-1",
            label: "BI1 SEL",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "623BI2",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_623BI2_WI",
            useClass: "greenTxt mt-1",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 mt-1",
            label: "BI2 SEL",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "613DB1",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "623DB1",
          }}
        />
      </div>
      <div className="truck position-absolute single-text-8"></div>
      <div className="truck position-absolute single-text-9"></div>
      <div className="d-flex position-absolute single-text-10">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "613FNJ",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-11">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end  mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "613FNL",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-12">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "613FNK",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-13">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "613FN1",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-14">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "623FN1",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-15">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "613FNP",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-16">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "613FNM",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-17">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle motor-dot grey-color`}
              label="CM_573FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "613FNN",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-18">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <div className="yellowline-Vr upArrow position-absolute"></div>
            <div className="dot grey-color"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "623FN2",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-19">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613BL2",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ml-3">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613BL1",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-20">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613FNQ",
            }}
          />
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center ml-3">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613FNR",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-21">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613FN2",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ml-3">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613FN3",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-22">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613BL4",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ml-4">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "613BL3",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-23">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN3",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ml-3">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN4",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ml-3">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-24">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`line-circle ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_623HR1_RUN", healthyLabel: "PP_623HR1_PH" }
            )}`}
            label="PP_623HR1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`line-circle ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_623BL2_RUN", healthyLabel: "PP_623BL2_PH" }
            )}`}
            label="PP_623BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`line-circle ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-25">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-26">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-27">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-up-long"></i>
          <span className={`line-circle green-color`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "623FN5",
            }}
          />
        </div>
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-28"></div>
      <div className="position-absolute single-text-29">
        <div className="hpipecircle"></div>
        <div className="triangle-down"></div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-30">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PP_613BV3_OLS", closeLabel: "PP_613BV3_CLS" }
            )} d-block`}
            secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PP_613BV3_OLS", closeLabel: "PP_613BV3_CLS" }
            )} d-block`}
            label="PP_613BV3_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BV3",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BV4",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG1",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG1_OLS", closeLabel: "PP_613SG1_CLS" }
              )}`}
              label="PP_613SG1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG1",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-31">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BV7",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BV8",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG3_OLS", closeLabel: "PP_613SG3_CLS" }
              )}`}
              label="PP_613SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG3",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG3",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-32">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BVB",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BVC",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG5_OLS", closeLabel: "PP_613SG5_CLS" }
              )}`}
              label="PP_613SG5_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG5",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG5",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-33">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG4",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG4_OLS", closeLabel: "PP_613SG4_CLS" }
              )}`}
              label="PP_613SG4_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG4",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BV9",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BVA",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-34">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG6",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG6_OLS", closeLabel: "PP_613SG6_CLS" }
              )}`}
              label="PP_613SG6_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG6",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BVD",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BVE",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-35">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG2",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG2_OLS", closeLabel: "PP_613SG2_CLS" }
              )}`}
              label="PP_613SG2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG2",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BV5",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right grey-color-caret d-block`}
            secondCaretClass={`fa-solid fa-caret-left grey-color-caret d-block`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2",
              label: "613BV6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BV2_OLS", closeLabel: "PP_613BV2_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BV2_OLS", closeLabel: "PP_613BV2_CLS" }
          )} d-block`}
          label="PP_613BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "613BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-1",
            label: "613BV1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BV1_OLS", closeLabel: "PP_613BV1_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BV1_OLS", closeLabel: "PP_613BV1_CLS" }
          )} d-block`}
          label="PP_613BV1_OLS"
        />
      </div>
      <div className="position-absolute single-text-38">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BVH_OLS", closeLabel: "PP_613BVH_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BVH_OLS", closeLabel: "PP_613BVH_CLS" }
          )} d-block`}
          label="PP_613BVH_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "613BVH",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BVG_OLS", closeLabel: "PP_613BVG_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BVG_OLS", closeLabel: "PP_613BVG_CLS" }
          )} d-block`}
          label="PP_613BVG_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "613BVG",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV2_OLS", closeLabel: "PP_623BV2_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV2_OLS", closeLabel: "PP_623BV2_CLS" }
          )} d-block`}
          label="PP_623BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "623BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV6_OLS", closeLabel: "PP_623BV6_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV6_OLS", closeLabel: "PP_623BV6_CLS" }
          )} d-block`}
          label="PP_623BV6_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "623BV6",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV4_OLS", closeLabel: "PP_623BV4_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV4_OLS", closeLabel: "PP_623BV4_CLS" }
          )} d-block`}
          label="PP_623BV4_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "623BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down grey-color-caret d-block`}
          secondCaretClass={`fa-solid fa-caret-up grey-color-caret d-block`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "623BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV3_OLS", closeLabel: "PP_623BV3_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-up digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV3_OLS", closeLabel: "PP_623BV3_CLS" }
          )} d-block`}
          label="PP_623BV3_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "623BV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-45">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV5_OLS", closeLabel: "PP_623BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_623BV5_OLS", closeLabel: "PP_623BV5_CLS" }
          )}`}
          label="PP_623BV5_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "623BV5",
          }}
        />
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-46">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SGE",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CGB",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-47">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SGE",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CGB",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-48">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG7",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG7_OLS", closeLabel: "PP_613SG7_CLS" }
              )}`}
              label="PP_613SG7_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG7",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-49">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG9_OLS", closeLabel: "PP_613SG9_CLS" }
              )}`}
              label="PP_613SG9_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG9",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG9",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-50">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SG8_OLS", closeLabel: "PP_613SG8_CLS" }
              )}`}
              label="PP_613SG8_OLS"
            />
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG8",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG8",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-51">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-1",
            label: "623SG2",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_623SG2_OLS", closeLabel: "PP_623SG2_CLS" }
              )}`}
              label="PP_623SG2_OLS"
            />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-1",
            label: "623SG1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_623SG1_OLS", closeLabel: "PP_623SG1_CLS" }
              )}`}
              label="PP_623SG1_OLS"
            />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-53">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_623SG3_OLS", closeLabel: "PP_623SG3_CLS" }
              )}`}
              label="PP_623SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613SG3",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "613CG1",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between position-absolute single-text-54">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_623SG4_OLS", closeLabel: "PP_623SG4_CLS" }
              )}`}
              label="PP_623SG4_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "623SG4",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-1",
              label: "623CG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55">
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PP_623PS1_OLS",
                closeLabel: "PP_623PS1_CLS",
                healthyLabel: "PP_623PS1_PH",
              }
            )}`}
            label="PP_623PS1_OLS"
          />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center ml-4 mt-4",
              label: "623SG4",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center ml-4 mt-4",
              label: "623SG4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PP_623PS2_OLS",
                closeLabel: "PP_623PS2_CLS",
                healthyLabel: "PP_623PS2_PH",
              }
            )}`}
            label="PP_623PS2_OLS"
          />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center ml-4 mt-4",
              label: "623SG4",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center ml-4 mt-4",
              label: "623SG4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-1",
            label: "613SGB",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div className="dot grey-color"></div>
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-1",
            label: "613SGB",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div className="dot grey-color"></div>
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-59">
        <div className="dot grey-color"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "623RA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <div className="dot grey-color"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "623RA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-61">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PP_623RA2"
          )}`}
          label="PP_623RA2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613RA2",
          }}
        />
      </div>
      <div className="position-absolute single-text-62">
        <BlackContainer
          data={{
            label: "PP_613HR1_RTD",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "613HR1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "HEATER",
          }}
        />
      </div>
      <TextColumn
        list={tagsData.kotputliCSETextcolumn3}
        useClass="position-absolute single-text-63"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn4}
        useClass="position-absolute single-text-64"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn5}
        useClass="position-absolute single-text-65"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn1}
        useClass="position-absolute single-text-66"
      />
      <BlackContainer
        data={{
          label: "NA",
          useClass: "greenTxt position-absolute single-text-68",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "NA",
          useClass: "greenTxt position-absolute single-text-69",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn15}
        useClass="position-absolute single-text-70"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn16}
        useClass="position-absolute single-text-71"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn9}
        useClass="position-absolute single-text-72"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn13}
        useClass="position-absolute single-text-73"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn14}
        useClass="position-absolute single-text-74"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn10}
        useClass="position-absolute single-text-75"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn11}
        useClass="position-absolute single-text-76"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn12}
        useClass="position-absolute single-text-77"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn8}
        useClass="d-flex position-absolute single-text-80"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn7}
        useClass="d-flex position-absolute single-text-81"
      />
      <TextColumn
        list={tagsData.kotputliCSETextcolumn6}
        useClass="d-flex position-absolute single-text-82"
      />

      <TextColumn
        list={tagsData.kotputliCSETextcolumn2}
        useClass="position-absolute single-text-86"
      />
      <div className="position-absolute single-text-87">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1",
            label: "EX ELEVATOR-5",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mx-auto mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-88">
        <div className={`dot mx-auto green-color`}>M</div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-1",
            label: "613SM1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mt-3",
            label: "EXISTING SILO SEL",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mx-auto mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-89">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "623WB1",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_623WB1_WI",
            useClass: "greenTxt  mt-1",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-90">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "623WB2",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_623WB2_WI",
            useClass: "greenTxt  mt-1",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-91">
        <MotorCircleDigitalTag
          className={`dot motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_623VS1_RUN", healthyLabel: "PP_623VS1_PH" }
          )}`}
          text="M"
          label="PP_623VS1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "623VS1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-92">
        <MotorCircleDigitalTag
          className={`dot motor-dot green-color`}
          text="M"
          label="CR_212FN2_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot motor-dot ml-4 green-color`}
          text="M"
          label="CR_212FN2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "623AD1",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PP_623HR2_RTD",
          useClass: "greenTxt position-absolute single-text-93",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PP_623CG2_ZT",
          useClass: "greenTxt position-absolute single-text-94",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "NA",
          useClass: "greenTxt position-absolute single-text-95",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PP_623CG1_ZT",
          useClass: "greenTxt position-absolute single-text-96",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PP_623HR1_RTD",
          useClass: "greenTxt position-absolute single-text-97",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-98">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BVF_OLS", closeLabel: "PP_613BVF_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PP_613BVF_OLS", closeLabel: "PP_613BVF_CLS" }
          )} d-block`}
          label="PP_613BVF_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "613BVF",
          }}
        />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-99">
        <span className={`line-circle green-color`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "613FN4",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-100">
        <span className={`line-circle green-color`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "623FN6",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-101">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mr-4 mt-4",
            label: "623SG4",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "PP_613SGA_OLS", closeLabel: "PP_613SGA_CLS" }
              )}`}
              label="PP_613SGA_OLS"
            />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-102",
          label: "TO ATM",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-103",
          label: "TO ATM",
        }}
      />
      <div className="position-absolute single-text-104">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF2",
          }}
        />
      </div>
      <div className="position-absolute single-text-105">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF4",
          }}
        />
      </div>
      <div className="position-absolute single-text-106">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF3",
          }}
        />
      </div>
      <div className="position-absolute single-text-107">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF4",
          }}
        />
      </div>
      <div className="position-absolute single-text-108">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF1",
          }}
        />
      </div>
      <div className="position-absolute single-text-109">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF7",
          }}
        />
      </div>
      <div className="position-absolute single-text-110">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF5",
          }}
        />
      </div>
      <div className="position-absolute single-text-111">
        <TextContainerWithWrapWord
          data={{
            useClass: "text- bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF6",
          }}
        />
      </div>
      <div className="position-absolute single-text-112">
        <TextContainerWithWrapWord
          data={{
            useClass: "text- bg-light px-1",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "613BF2",
          }}
        />
      </div>
      <div className="position-absolute single-text-113">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO REJECT",
          }}
        />{" "}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "623RB1",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-114",
          label: "613AS8",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-115",
          label: "613AS8",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-116",
          label: "613AS8",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-117",
          label: "613AS7",
        }}
      />
      <div className="position-absolute single-text-118">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1",
            label: "EX ELIVATOR-2",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mx-auto mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-119">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "PP_623BE1_BSS1_ALM"
          )}`}
          label="PP_623BE1_BSS1_ALM"
          text="BSS1A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-1",
            label: "BSS1T",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-1 digital-tag ${useColorStatus(
            "PP_623BE1_BSS2_ALM"
          )}`}
          label="PP_623BE1_BSS2_ALM"
          text="BSS2A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-1",
            label: "BSS2T",
          }}
        />
      </div>
      <div className="position-absolute single-text-120">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "PP_623BE1_BSS3_ALM"
          )}`}
          label="PP_623BE1_BSS3_ALM"
          text="BSS3A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-1",
            label: "BSS3T",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-1 digital-tag ${useColorStatus(
            "PP_623BE1_BSS4_ALM"
          )}`}
          label="PP_623BE1_BSS4_ALM"
          text="BSS4A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-1",
            label: "BSS4T",
          }}
        />
      </div>
      <div className="position-absolute single-text-121">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary",
            label: "LS01",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-1",
            label: "LS02",
          }}
        />
      </div>
      <div className="position-absolute single-text-122">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary",
            label: "ZS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-1",
            label: "TS",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-secondary position-absolute single-text-123",
          label: "ZZS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-secondary position-absolute single-text-124",
          label: "BMS",
        }}
      />
      <div className="position-absolute single-text-125">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "623BE1",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_623BE1_ANLG",
            useClass: "greenTxt mx-auto mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-126">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "613HR2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "HEATER",
          }}
        />
        <div className="dot grey-color mt-2"></div>
      </div>
      <div className="position-absolute single-text-127">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "613HR1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "HEATER",
          }}
        />
        <div className="dot grey-color mt-2"></div>
      </div>
      <div className="position-absolute single-text-128">
        <div className="dot grey-color"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "613HR2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "HEATER",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-129">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BV1_OLS")}`}
          label="PP_613BV1_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BV1_CLS")}`}
          label="PP_613BV1_CLS"
        />
          </div>
      <div className="d-flex justify-content-between position-absolute single-text-130">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BVF_CLS")}`}
          label="PP_613BVF_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BVF_OLS")}`}
          label="PP_613BVF_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-131">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BVG_OLS")}`}
          label="PP_613BVG_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BVG_CLS")}`}
          label="PP_613BVG_CLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-132">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BVH_CLS")}`}
          label="PP_613BVH_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BVH_OLS")}`}
          label="PP_613BVH_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-133">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-134">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-135">
      <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG2_CLS")}`}
          label="PP_623SG2_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG2_OLS")}`}
          label="PP_623SG2_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-136">
      <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG1_CLS")}`}
          label="PP_623SG1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG1_OLS")}`}
          label="PP_623SG1_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-137">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-138">
      <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG3_CLS")}`}
          label="PP_623SG3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG3_OLS")}`}
          label="PP_623SG3_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-139">
      <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG4_CLS")}`}
          label="PP_623SG4_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_623SG4_OLS")}`}
          label="PP_623SG4_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-140">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-141">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-142">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-143">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-144">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BV2_CLS")}`}
          label="PP_613BV2_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613BV2_OLS")}`}
          label="PP_613BV2_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-145">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG3_EOLS")}`}
          label="PP_613CG3_EOLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG3_ECLS")}`}
          label="PP_613CG3_ECLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-146">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG6_EOLS")}`}
          label="PP_613CG6_EOLS
"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG6_ECLS")}`}
          label="PP_613CG6_ECLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-147">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG2_EOLS")}`}
          label="PP_613CG2_EOLS
"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG2_ECLS")}`}
          label="PP_613CG2_ECLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-148">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG5_EOLS")}`}
          label="PP_613CG5_EOLS
"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG5_ECLS")}`}
          label="PP_613CG5_ECLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-149">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG7_ECLS")}`}
          label="PP_613CG7_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG7_EOLS")}`}
          label="PP_613CG7_EOLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-150">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-151">
        <div className="square grey-color"></div>
        <div className="square grey-color"></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-152">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613SG7_CLS")}`}
          label="PP_613SG7_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613SG7_OLS")}`}
          label="PP_613SG7_OLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-153">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613SG8_CLS")}`}
          label="PP_613SG9_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613SG8_OLS")}`}
          label="PP_613SG9_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG8_ECLS")}`}
          label="PP_613CG9_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG8_EOLS")}`}
          label="PP_613CG9_EOLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-154">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613SG8_CLS")}`}
          label="PP_613SG8_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613SG8_OLS")}`}
          label="PP_613SG8_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG8_ECLS")}`}
          label="PP_613CG8_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG8_EOLS")}`}
          label="PP_613CG8_EOLS"
        />
      </div>
      <div className="square grey-color position-absolute single-text-155"></div>
      {/* <div className="square grey-color position-absolute single-text-156"></div> */}
      <MotorCircleDigitalTag
          className={`square position-absolute single-text-156 digital-tag ${useColorStatus("PP_613SGA_CLS")}`}
          label="PP_613SGA_CLS"
        />
      <div className="position-absolute single-text-157">
        <BlackContainer
          data={{
            label: "PP_613SI2_LT",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "613SI2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CEMENT SILO-3",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-158">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG3_EOLS")}`}
          label="PP_613CG3_EOLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG3_ECLS")}`}
          label="PP_613CG3_ECLS"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-159">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG3_EOLS")}`}
          label="PP_613CG3_EOLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PP_613CG3_ECLS")}`}
          label="PP_613CG3_ECLS"
        />
      </div>
    </div>
  );
};
