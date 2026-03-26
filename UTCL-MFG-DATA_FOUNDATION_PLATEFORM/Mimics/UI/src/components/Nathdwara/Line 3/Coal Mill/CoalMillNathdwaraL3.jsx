import { TextContainerWithWrapWord, BlackContainer, PipeWithCircles, MotorCircleDigitalTag, MimicCaret } from "../../../index";

import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useImgColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CoalMillNathdwaraL3 = () => {
  return (
    <div className="CoalMillNathdwaraL3 CoalMillAndhra coalmill-maihar-l4 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L23MS1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23MS1_BC_ON", healthyLabel: "KM_L23MS1_PH" })}`,
          secondCircleLabel: "KM_L23MS1_BC_ON",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L23BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23BC3_RUN", healthyLabel: "KM_L23BC3_PH" })}`,
          secondCircleLabel: "KM_L23BC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L43WF1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43WF1_MR", healthyLabel: "KM_L43WF1_PH" })}`,
          secondCircleText: "",
          secondCircleLabel: "KM_L43WF1_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L43WF2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43WF2_MR", healthyLabel: "KM_L43WF2_PH" })}`,
          secondCircleText: "",
          secondCircleLabel: "KM_L43WF2_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L43BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43BC1_RUN", healthyLabel: "KM_L43BC1_PH" })}`,
          secondCircleLabel: "KM_L43BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L63CV1_RUN", healthyLabel: "KM_L63CV1_PH" })}`,
          firstCircleLabel: "KM_L63CV1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L63CV1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L93SC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC3_RUN", healthyLabel: "KM_L93SC3_PH" })}`,
          secondCircleLabel: "KM_L93SC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC2_RUN", healthyLabel: "KM_L93SC2_PH" })}`,
          firstCircleLabel: "KM_L93SC2_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC2" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC1_RUN", healthyLabel: "KM_L93SC1_PH" })}`,
          firstCircleLabel: "KM_L93SC1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC4_RUN", healthyLabel: "KM_L93SC4_PH" })}`,
          firstCircleLabel: "KM_L93SC4_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC4" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L93SC5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC5_RUN", healthyLabel: "KM_L93SC5_PH" })}`,
          secondCircleLabel: "KM_L93SC5_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC6_RUN", healthyLabel: "KM_L93SC6_PH" })}`,
          firstCircleLabel: "KM_L93SC6_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC6" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L93SC7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC7_RUN", healthyLabel: "KM_L93SC7_PH" })}`,
          secondCircleLabel: "KM_L93SC7_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L43BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43BC1_RUN", healthyLabel: "KM_L43BC1_PH" })}`,
          secondCircleLabel: "KM_L43BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Hr position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr position-absolute pipe-27"></div>
      <div className="yellowline-Hr position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Hr position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr position-absolute pipe-33"></div>
      <div className="yellowline-Hr position-absolute pipe-34"></div>
      <div className="yellowline-Hr position-absolute pipe-35 d-flex  align-items-center">
        <i className="fa-solid fa-caret-right d-block ml-5"></i>
      </div>
      <div className="yellowline-Hr position-absolute pipe-36"></div>
      <div className="yellowline-Vr position-absolute pipe-37 d-flex flex-column justify-content-around align-items-center">
        <i className="fa-solid fa-caret-up d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>

      <div className="yellowline-Vr position-absolute pipe-38"></div>
      <div className="yellowline-Hr position-absolute pipe-39 d-flex align-items-center">
        <i className="fa-solid fa-caret-left d-block ml-5"></i>
      </div>
      <div className="yellowline-Vr position-absolute pipe-40"></div>
      <div className="yellowline-Vr position-absolute pipe-41"></div>
      <div className="yellowline-Vr position-absolute pipe-42"></div>
      <div className="yellowline-Vr position-absolute pipe-43"></div>
      <div className="yellowline-Vr position-absolute pipe-44"></div>
      <div className="yellowline-Hr position-absolute pipe-45"></div>
      <div className="yellowline-Vr position-absolute pipe-46 d-flex flex-column justify-content-around align-items-center">
        <i className="fa-solid fa-caret-up d-block mt-5"></i>
      </div>
      {/* <div className="yellowline-Hr position-absolute pipe-47"></div> */}
      <div className="yellowline-Hr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Vr position-absolute pipe-50 d-flex flex-column justify-content-around align-items-center">
        <i className="fa-solid fa-caret-up d-block mt-5"></i>
      </div>
      <div className="yellowline-Hr position-absolute pipe-51 d-flex  justify-content-around align-items-center">
        <i className="fa-solid fa-caret-left d-block"></i>
      </div>
      <div className="yellowline-Hr position-absolute pipe-52 d-flex  align-items-center">
        <i className="fa-solid fa-caret-right d-block ml-4"></i>
        <i className="fa-solid fa-caret-right d-block ml-5"></i>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-59"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-60"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-62"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-63"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-64"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-66"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-67"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-68"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-70"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-71"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-72"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-75"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-76"></div>
      <div className="yellowline-Vr position-absolute pipe-77 d-flex flex-column justify-content-around align-items-center">
        <i className="fa-solid fa-caret-down d-block mt-2"></i>
      </div>
      <div className="yellowline-Hr position-absolute pipe-78"></div>
      <div className="yellowline-Vr position-absolute pipe-79"></div>
      <div className="yellowline-Vr position-absolute pipe-80"></div>
      <div className="yellowline-Hr position-absolute pipe-81 d-flex  justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right d-block"></i>
      </div>
      <div className="yellowline-Hr position-absolute pipe-82 d-flex  justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right d-block"></i>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-83"></div>
      <div className="yellowline-Vr position-absolute pipe-84"></div>
      <div className="yellowline-Vr position-absolute pipe-85"></div>
      <div className="yellowline-Hr position-absolute pipe-86"></div>
      <div className="yellowline-Vr position-absolute pipe-87"></div>
      <div className="yellowline-Vr position-absolute pipe-88"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-89"></div>
      <div className="yellowline-Hr position-absolute pipe-90"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-91"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-92"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-93"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-94"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L23MS1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23MS1_BC_ON", healthyLabel: "KM_L23MS1_PH" })}`,
          secondCircleLabel: "KM_L23MS1_BC_ON",
          secondCircleText: "M",
        }}
      />

      {/* <div className="yellowline-Vr downArrow position-absolute pipe-92"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-93"></div> */}
      {/* <div className="yellowline-Hr position-absolute pipe-94"></div> */}
      {/* <div className="yellowline-Hr position-absolute pipe-95"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-96"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-97"></div> */}

      <div className="containerImage text-center position-absolute single-text-1">
        <div className="text-left">
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43HP1_LS")}`} label="KM_L43HP1_LS" text="LS" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43HP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RAW COAL",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43HP1_WI",
            useClass: "greenTxt mt-1 ",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-2">
        <div className="text-left">
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43HP2_LS")}`} label="KM_L43HP2_LS" text="LS" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43HP2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "PET COKE",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43HP2_WI",
            useClass: "greenTxt mt-1",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="middle-sqr-container position-absolute single-text-4"></div>
      <div className="middle-sqr-container position-absolute single-text-5"></div>
      <div className="middle-sqr-container position-absolute single-text-6 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43TK1",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43WI1_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
      </div>
      <div className="bigContainer position-absolute single-text-8 text-center"></div>
      <div className=" position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5",
            label: "CLASSIFER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43SR1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "COAL MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_PT2",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_DP",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP1",
            }}
          />

          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP2",
            }}
          />

          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE2",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP3",
            }}
          />

          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP4",
            }}
          />

          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE4",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP5",
            }}
          />

          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE5",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP6",
            }}
          />

          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE6",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43MD1_RUN", healthyLabel: "KM_L43MD1_PH" })}`}
            label="KM_L43MD1_RUN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43MD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 pipeHr"></div>
      <div className="position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L23RA3")}`} label="KM_L23RA3_RUN" />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23FN3_RUN", healthyLabel: "KM_L23FN3_PH" })}`}
              label="KM_L23FN3_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L43BF2",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L43RA1")}`} label="KM_L43RA1_RUN" />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43FN3_RUN", healthyLabel: "KM_L43FN3_PH" })}`}
              label="KM_L43FN3_RUN"
            />
          </div>
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-16 d-flex flex-column align-items-center justify-content-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23BI1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAW",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "COAL",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L63BI1_WI",
            useClass: "greenTxt mt-1",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="triangle-with-squares position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L63BI1",
          }}
        />
      </div>
      <MotorCircleDigitalTag className={`position-absolute single-text-18 gray-green-red-img digital-tag ${useImgColorStatus("KM_L23DG1A_SOV")}`} label="KM_L23DG1A_SOV" />
      <div className="position-absolute single-text-19 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA1")}`} label="KM_L93RA1_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA1",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA2")}`} label="KM_L93RA2_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA2",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA3")}`} label="KM_L93RA3_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA3",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA4")}`} label="KM_L93RA4_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA4",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA5")}`} label="KM_L93RA5_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA5",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA6")}`} label="KM_L93RA6_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA6",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA7")}`} label="KM_L93RA7_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA7",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA8")}`} label="KM_L93RA8_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA8",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RA9")}`} label="KM_L93RA9_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA9",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RAA")}`} label="KM_L93RAA_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RAA",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RAB")}`} label="KM_L93RAB_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RAB",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RAC")}`} label="KM_L93RAC_RUN" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RAC",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-20 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "KM_L43SD3_EXOLS",
                closeLabel: "KM_L43SD3_EXCLS",
                healthyLabel: "KM_L43SD3_PH",
              })}`}
              label="KM_L43SD3_EXOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L43SD3",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "KM_L43LD1_EOLS",
                closeLabel: "KM_L43LD1_ECLS",
                healthyLabel: "KM_L43LD1_PH",
              })}`}
              label="KM_L43LD1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L43LD1",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-23 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "KM_L54LD1_EXOLS",
                closeLabel: "KM_L54LD1_EXCLS",
                healthyLabel: "KM_L54LD1_PH",
              })}`}
              label="KM_L54LD1_EXOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L54LD1",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "KM_L54SD1_EXOLS",
                closeLabel: "KM_L54SD1_EXCLS",
                healthyLabel: "KM_L54SD1_PH",
              })}`}
              label="KM_L54SD1_EXOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L54SD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L43SD1_EXOLS",
              closeLabel: "KM_L43SD1_EXCLS",
              healthyLabel: "KM_L43SD1_PH",
            })}`}
            label="KM_L43SD1_EXOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L43SD1",
          }}
        />
      </div>

      <div className="position-absolute single-text-27 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L43LD2_EOLS",
              closeLabel: "KM_L43LD2_ECLS",
              healthyLabel: "KM_L43LD2_PH",
            })}`}
            label="KM_L43LD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "L43LD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L43SD2_EXOLS",
              closeLabel: "KM_L43SD2_EXCLS",
              healthyLabel: "KM_L43SD2_PH",
            })}`}
            label="KM_L43SD2_EXOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L43SD2",
          }}
        />
      </div>

      <div className="position-absolute single-text-30 text-center d-flex align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43FN4_SI",
              useClass: "greenTxt ",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "KM_L43FN4_SI",
            useClass: "greenTxt mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43FN4_II",
                useClass: "greenTxt ",
                unit: "mmh20",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43FN4_JO1",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43FN4_JO1",
                useClass: "greenTxt mt-1",
                unit: "mg/m3",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "KM_L43LD1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43LD1_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L43LD2",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43LD2_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43LD2",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <BlackContainer
          data={{
            label: "KM_L93SC2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L93SC1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "KM_L93SC6_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L93SC4_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "KM_L93SC7_II",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-42 text-center">
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43FN4_RUN", healthyLabel: "KM_L43FN4_PH" })}`} label="KM_L43FN4_RUN" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43FN4",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <div>
          <BlackContainer
            data={{
              label: "KM_L54LD1_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L54LD1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "KM_L43WP1_M01",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-46  d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WP2_M01",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WP2_TE",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex flex-column ">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KM_L43WP1_M01")} `} label="KM_L43WP1_M01" text="M" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KM_L43WP2_M01")} `} label="KM_L43WP2_M01" text="M" />
      </div>
      <div className="position-absolute single-text-48 d-flex flex-column ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43FN1_RUN", healthyLabel: "KM_L43FN1_PH" })}`}
            label="KM_L43FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L43FN3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43FN2_RUN", healthyLabel: "KM_L43FN2_PH" })}`}
            label="KM_L43FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L43FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WI1_FT",
              useClass: "greenTxt ",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43KM1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43KM1_TT1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50  ">
        <BlackContainer
          data={{
            label: "KM_L43FN1_PT1",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51  ">
        <BlackContainer
          data={{
            label: "KM_L43MD1_JI",
            useClass: "greenTxt ",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43MD1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-54 d-flex  ">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WF1_SI",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF1_FR",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF1_SP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WF2_SI",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF2_FR",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF2_SP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 d-flex  ">
        <div>
          <BlackContainer
            data={{
              label: "KM_L23BF3_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L23BF3_PT2",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43BF1_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF1_PT1",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43BF1_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF1_PT1",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <BlackContainer
          data={{
            label: "KM_L43KM1_TT2",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "KM_L23BC3_II",
          useClass: "greenTxt position-absolute single-text-58",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-59 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43EX1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43EX2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-60",
          label: "L23FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-61",
          label: "L23RA1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "L43FN2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-63",
          label: "L43RA2",
        }}
      />
      <div className="position-absolute single-text-64 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "For Calibration/",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Rejects",
          }}
        />
      </div>
      <div className="position-absolute single-text-65 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO REJECT BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L63BI1",
          }}
        />
      </div>
      <div className="position-absolute single-text-66 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L63SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L63SG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L63SG1_OLS",
              closeLabel: "KM_L63SG1_CLS",
            })}`}
            label="KM_L63SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-68 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L63SG2_OLS",
              closeLabel: "KM_L63SG2_CLS",
            })}`}
            label="KM_L63SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-69 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L63SG3_OLS",
              closeLabel: "KM_L63SG3_CLS",
            })}`}
            label="KM_L63SG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>

      <div className="position-absolute single-text-71 ">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BF3")}`} label="KM_L23BF3" />
      </div>
      <div className="position-absolute single-text-72">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43BF1")}`} label="KM_L43BF1" />
      </div>
      <div className="position-absolute single-text-77 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "GB Lubrication",
            }}
          />
        </div>
        <div className="d-flex mt-1 align-items-center">
          <div className="">
            <div className="d-flex align-items-center justify-content-center mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-2",
                  label: "L43PU1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43PU1_RUN", healthyLabel: "KM_L43PU1_PH" })}`}
                label="KM_L43PU1_RUN"
                text="M"
              />
            </div>
            <div className="d-flex align-items-center mt-2 justify-content-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-2",
                  label: "L43PU2",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43PU2_RUN", healthyLabel: "KM_L43PU2_PH" })}`}
                label="KM_L43PU2_RUN"
                text="M"
              />
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FT1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FT2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PT",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "TT1",
              }}
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "KM_L43LQ1_FT1",
                useClass: "greenTxt",
                unit: "Lpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43LQ1_FT2",
                useClass: "greenTxt mt-1",
                unit: "Lpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43GB1_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43LQ1_TT1",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-79 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Hyd Tens Sys",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "Rollers Auto Lower",
              }}
            />
            <div className="text-center d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "L43PU3",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43PU3_RUN", healthyLabel: "KM_L43PU3_PH" })}`}
                label="KM_L43PU3_RUN"
                text="M"
              />
            </div>
            <div className="text-center mt-2 d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "L43PU4",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_HYDTENS_GRPSP03",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "Setpoint",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_HYDTENS_GRPSP03",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_ZT01",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-2 justify-content-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "Tension.pr.",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_PT1",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_ZT02",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-2 justify-content-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "Lifting.pr.",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_PT2",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_ZT03",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-81 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "L43RF1",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43RF1_RUN", healthyLabel: "KM_L43RF1_PH" })}`} label="KM_L43RF1_RUN" text="M" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "Hot Gas",
        }}
      />
      <div className=" position-absolute single-text-83">
        <div className="chimni-red"></div>
        <div className="text-center ml-2 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "STACK",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L43K1",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-87 ">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23MT1_PH")}`} label="KM_L23MT1_PH" text="PH" />
          <MotorCircleDigitalTag className={`ml-2 text-dark digital-tag ${useColorStatus("KM_L23MT1_FB")}`} label="KM_L23MT1_FB" text="FB" />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L23MT1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-89 d-flex ">
        <div>
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} label="KM_L23DG1_CLS" text="CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_OLS")}`} label="KM_L23DG1_OLS" text="OLS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L23DG1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-90 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L23BC2",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L23BC4_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-92 d-flex">
        <div className="d-flex ">
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43EX1_OLS1")}`} label="KM_L43EX1_OLS1" text="L1" />
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43EX1_OLS2")} ml-2`} label="KM_L43EX1_OLS2" text="L2" />
        </div>
        <div className="d-flex ">
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43EX2_OLS1")}`} label="KM_L43EX2_OLS1" text="L1" />
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43EX2_OLS2")} ml-2`} label="KM_L43EX2_OLS2" text="L2" />
        </div>
      </div>
      <div className="position-absolute single-text-94 d-flex flex-column">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43KM1_ZS")}`} label="KM_L43KM1_ZS" text="ZS" />
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L63SG2_CLS")}`} label="KM_L63SG2_CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L63SG2_OLS")}`} label="KM_L63SG2_OLS" />
        </div>
      </div>
      {/* <div className=" position-absolute single-text-97 d-flex">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43MD1_SB01")}`} label="KM_L43MD1_SB01" text="V" />
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43MD1_SB02")}`} label="KM_L43MD1_SB02" text="V" />
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43MD1_XB01")}`} label="KM_L43MD1_XB01" text="V" />
      </div> */}
      <div className="text-center position-absolute single-text-98">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KM_L43WI1_SV1_OLS", closeLabel: "KM_L43WI1_SV1_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KM_L43WI1_SV1_OLS", closeLabel: "KM_L43WI1_SV1_CLS" })}`}
          label="KM_L43WI1_SV1_OLS"
        />
        <div className="mt-1 d-flex">
          <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43WI1_PS01")}`} label="KM_L43WI1_PS01" text="PS1" />
          <MotorCircleDigitalTag className={`text-dark digital-tag  ml-3`} text="SV1" />
        </div>
      </div>
      <div className="text-center position-absolute single-text-99 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SV2",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-100 d-flex">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43WI1_PS02")}`} label="KM_L43WI1_PS02" text="PS2" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "COMP AIR",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-101 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43SD2_EXCLS")}`} label="KM_L43SD2_EXCLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43SD2_EXOLS")}`} label="KM_L43SD2_EXOLS" />
      </div>

      <div className="text-center position-absolute single-text-103 d-flex">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43BF2_LS1")} ml-2`} label="KM_L43BF2_LS1" text="LS1" />

        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43BF2_LS2")} ml-2`} label="KM_L43BF2_LS2" text="LS2" />

        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43BF2_LS3")} ml-2`} label="KM_L43BF2_LS3" text="LS3" />

        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43BF2_LS4")} ml-2`} label="KM_L43BF2_LS4" text="LS4" />

        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43BF2_LS5")} ml-2`} label="KM_L43BF2_LS5" text="LS5" />

        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43BF2_LS6")} ml-2`} label="KM_L43BF2_LS6" text="LS6" />
      </div>
      <div className="position-absolute single-text-104 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA1_CLS")}`} label="KM_L93GA1_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA1_OLS")}`} label="KM_L93GA1_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA2_CLS")}`} label="KM_L93GA2_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA2_OLS")}`} label="KM_L93GA2_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA3_CLS")}`} label="KM_L93GA3_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA3_OLS")}`} label="KM_L93GA3_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA4_CLS")}`} label="KM_L93GA4_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA4_OLS")}`} label="KM_L93GA4_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA5_CLS")}`} label="KM_L93GA5_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA5_OLS")}`} label="KM_L93GA5_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA6_CLS")}`} label="KM_L93GA6_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA6_OLS")}`} label="KM_L93GA6_OLS" />
      </div>
      <div className="position-absolute single-text-105 align-items-center">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L93SG1_OLS",
              closeLabel: "KM_L93SG1_CLS",
            })}`}
            label="KM_L93SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-106 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG1_CLS")}`} label="KM_L93SG1_CLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG1_OLS")}`} label="KM_L93SG1_OLS" />
      </div>
      <div className="text-center position-absolute single-text-107 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "SV3",
          }}
        />
      </div>

      <div className="text-center position-absolute single-text-110 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43SD1_EXCLS")}`} label="KM_L43SD1_EXCLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43SD1_EXOLS")}`} label="KM_L43SD1_EXOLS" />
      </div>

      <div className="position-absolute single-text-114 ">
        <div className="bg-secondary text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
      <div className="text-center position-absolute single-text-115 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43MD1_M2_RUN", healthyLabel: "KM_L43MD1_M2_PH" })}`}
          label="KM_L43MD1_M2_RUN"
          text="M"
        />
      </div>
      <div className="text-center position-absolute single-text-117 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L54SD1_EXOLS")}`} label="KM_L54SD1_EXOLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L54SD1_EXCLS")}`} label="KM_L54SD1_EXCLS" />
      </div>
      <div className="text-center position-absolute single-text-118 d-flex">
        <div className="ml-3">
          <div>
            <div class="yellowline-Hr w rightarrow leftarrow position-absolute"></div>
          </div>
        </div>
      </div>
      <div className="text-center position-absolute single-text-119 text-center">
        <div>
          <div class="yellowline-Hr w rightarrow leftarrow position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L43BC1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-121 text-center">
        <div>
          <div class="yellowline-Hr w rightarrow leftarrow  position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L93SC7",
          }}
        />
      </div>
      {/*<div className="text-center position-absolute single-text-122 text-center">
    <div>
      <div class="yellowline-Hr w rightarrow  position-absolute"></div>
    </div>
    <TextContainerWithWrapWord
      data={{
        useClass: "text-dark t",
        label: "L93SC8",
      }}
    />
  </div> */}

      <div className="position-absolute single-text-124">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L43AD1_AD1_ZS")}`} label="KM_L43AD1_AD1_ZS" text="ZS" />
      </div>
      <div className="position-absolute single-text-125 ">
        <div className="bg-secondary text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
      <div className="position-absolute single-text-126 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43BF2_CMP_DPT8",
              useClass: "greenTxt mb-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_PT2",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43BF2_HPR_DPT7",
              useClass: "greenTxt mb-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43BF2_CMP_DPT9",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_PT1",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-127">
        <BlackContainer
          data={{
            label: "KM_L43WP2_M01",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-128">
        <BlackContainer
          data={{
            label: "KM_L54FN1_SI",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L54FN1_SI",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L54FN1_SI",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L54FN1_II",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="text-center position-absolute single-text-130 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43LD1_EOLS")}`} label="KM_L43LD1_EOLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43LD1_ECLS")}`} label="KM_L43LD1_ECLS" />
      </div>
      <div className="text-center position-absolute single-text-131 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43LD2_ECLS")}`} label="KM_L43LD2_ECLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43LD2_EOLS")}`} label="KM_L43LD2_EOLS" />
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-99"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SC8_RUN", healthyLabel: "KM_L93SC8_PH" })}`,
          firstCircleLabel: "KM_L93SC8_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC8" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
      />
      <div className="yellowline-Hr position-absolute pipe-100"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-101"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-102"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-103"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-105"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-106"></div>

      <div className=" position-absolute single-text-135 d-flex">
        <div className="containerImage text-center">
          <div className="d-flex justify-content-end">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_454BI2_LS")} `} label="KM_454BI2_LS" text="LS" />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "KILN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "453BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_454BI2_WI",
                useClass: "greenTxt mt-1",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <div className="d-flex justify-content-end">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_484BI1_LS")} `} label="KM_484BI1_LS" text="LS" />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "KILN/",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CALCINER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "453BI2",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_484BI1_WI",
                useClass: "greenTxt mt-1",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <div className="d-flex justify-content-end">
            <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_474BI1_LS")} `} label="KM_474BI1_LS" text="LS" />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CALCINER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "453BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_474BI1_WI",
                useClass: "greenTxt mt-1",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-136 d-flex">
        <BlackContainer
          data={{
            label: "KM_454AM3_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="text-center position-absolute single-text-138 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG2_ECLS")}`} label="KM_L93SG2_ECLS" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG3_ECLS")}`} label="KM_L93SG3_ECLS" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG4_ECLS")}`} label="KM_L93SG4_ECLS" />
        </div>
      </div>
      <div className="position-absolute single-text-139 d-flex">
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel: "KM_L93SG2_EOLS",
                closeLabel: "KM_L93SG2_ECLS",
              })}`}
              label="KM_L93SG2_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L93SG2",
            }}
          />
        </div>

        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel: "KM_L93SG4_EOLS",
                closeLabel: "KM_L93SG4_ECLS",
              })}`}
              label="KM_L93SG4_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L93SG3",
            }}
          />
        </div>
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel: "KM_L93SG5_EOLS",
                closeLabel: "KM_L93SG5_ECLS",
              })}`}
              label="KM_L93SG5_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L93SG4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-140 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG2_EOLS")}`} label="KM_L93SG2_EOLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG3_EOLS")}`} label="KM_L93SG3_EOLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93SG5_EOLS")}`} label="KM_L93SG5_EOLS" />
      </div>

      <div className="position-absolute single-text-142 d-flex">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RAD")}`} label="KM_L93RAD_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L93RAD",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RAF")}`} label="KM_L93RAF_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L93RAE",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L93RAG")}`} label="KM_L93RAG_RUN" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L93RAF",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-143 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA7_CLS")}`} label="KM_L93GA7_CLS" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA7_OLS")} ml-2`} label="KM_L93GA7_OLS" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA8_CLS")}`} label="KM_L93GA8_CLS" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA8_OLS")} ml-2`} label="KM_L93GA8_OLS" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA9_CLS")}`} label="KM_L93GA9_CLS" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L93GA9_OLS")} ml-2`} label="KM_L93GA9_OLS" />
        </div>
      </div>
      <div className="text-center position-absolute single-text-144 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="text-center position-absolute single-text-145 ">
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L54FN1_RUN", healthyLabel: "KM_L54FN1_PH" })}`} label="KM_L54FN1_RUN" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L54FN1",
          }}
        />
      </div>
      {/* <div className="position-absolute single-text-146">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L63SG3",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-147">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mb-1",
            label: "L43WP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L43WP2",
          }}
        />
      </div>
      <div className="position-absolute single-text-148">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L93SG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-151 d-flex align-items-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 mb-1 bg-secondary",
              label: "N2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 bg-secondary",
              label: "CO2 BF2",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 bg-secondary mb-1",
              label: "CO2 BINS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 bg-secondary",
              label: "CO2 MILL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-152">
        <div className="d-flex justify-content-around text-center mt-1">
          <div>
            <BlackContainer
              data={{
                label: "KM_L43BF2_TT1",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43BF2_PT3",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43AM1_CO",
                useClass: "greenTxt ",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark border p-1 mt-1 bg-light",
                label: "BH RUN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark border p-1 mt-1 bg-light",
                label: "L43BF3",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43AM1_O2",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43BF2_TT2",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43BF2_PT4",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L93SC8_II",
          useClass: "greenTxt position-absolute single-text-153",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-154 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L63SG1_CLS")}`} label="KM_L63SG1_CLS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L63SG1_OLS")}`} label="KM_L63SG1_OLS" />
        </div>
      </div>
      <div className="text-center position-absolute single-text-155 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43SD3_EXCLS")}`} label="KM_L43SD3_EXCLS" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L43SD3_EXOLS")}`} label="KM_L43SD3_EXOLS" />
      </div>
      <div className="position-absolute single-text-156 d-flex">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L63BI1_LS")}`} label="KM_L63BI1_LS" text="LS" />
      </div>
      <div className="position-absolute single-text-158">
        <BlackContainer
          data={{
            label: "KM_L43RF1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-159 d-flex">
        <BlackContainer
          data={{
            label: "KM_L43WP1_M01",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43WP1_TE",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-160 d-flex align-items-end">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43SR1_II",
              useClass: "greenTxt ",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43SR1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43SR1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43SR1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43SR1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-161 text-center">
        <div>
          <div class="yellowline-Hr w rightarrow leftarrow position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L93SC6",
          }}
        />
      </div>
      <div className="position-absolute single-text-162 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L93SM1",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L93SM1_RUN", healthyLabel: "KM_L93SM1_PH" })}`} label="KM_L93SM1_RUN" text="M" />
      </div>

      <div className="position-absolute single-text-167 ">
        <BlackContainer
          data={{
            label: "KM_484AM1_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-168">
        <BlackContainer
          data={{
            label: "KM_474AM1_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-169 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KM_L43MD2")}`} label="KM_L43MD2" text="M" />
      </div>
      <div className="position-absolute single-text-170 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41AD1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-171 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L43AD1_RUN", healthyLabel: "KM_L43AD1_PH" })}`} label="KM_L43AD1_RUN" />
      </div>
      <div className="position-absolute single-text-172">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("KM_L23RA3")}`} label="KM_L23RA3_RUN" />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "KM_L23FN3_RUN", healthyLabel: "KM_L23FN3_PH" })}`}
              label="KM_L23FN3_RUN"
            />
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-173",
          label: "L43FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-174",
          label: "L43RA1",
        }}
      />
      <div className="text-center position-absolute single-text-175 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="text-center position-absolute single-text-176">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="text-center position-absolute single-text-177 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43BC1",
          }}
        />
      </div>

      <div className="text-center position-absolute single-text-178 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="position-absolute single-text-179 border p-1">
        <div className="d-flex mt-1 gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOTAL FEED TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_474AM1_CO",
              useClass: "greenTxt ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L43MD1_XT1",
          useClass: "greenTxt position-absolute single-text-180",
          unit: "mm/sec",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L43MD1_XT1",
          useClass: "greenTxt position-absolute single-text-182",
          unit: "Ton",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-183 d-flex ">
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} label="KM_L23DG1_CLS" text="LS1" />
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} label="KM_L23DG1_CLS" text="LS2" />
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} label="KM_L23DG1_CLS" text="LS3" />
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} label="KM_L23DG1_CLS" text="LS4" />
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} label="KM_L23DG1_CLS" text="LS5" />
        <MotorCircleDigitalTag className={`text-dark digital-tag ${useColorStatus("KM_L23DG1_CLS")}`} label="KM_L23DG1_CLS" text="LS6" />
      </div>
      <div className="position-absolute single-text-184 d-flex">
        <BlackContainer
          data={{
            label: "KM_L43MD1_XT1",
            useClass: "greenTxt mt-3",
            unit: "m3/hr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43MD1_XT1",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MimicCaret
        parentClass="d-flex position-absolute single-text-185 tringle-item justify-content-center"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KM_L43WI1_SV1_OLS", closeLabel: "KM_L43WI1_SV1_CLS" })}`}
        secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KM_L43WI1_SV1_OLS", closeLabel: "KM_L43WI1_SV1_CLS" })}`}
        label="KM_L43WI1_SV1_OLS"
      />
      <MimicCaret
        parentClass="d-flex position-absolute single-text-186 tringle-item justify-content-center"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KM_L43WI1_SV1_OLS", closeLabel: "KM_L43WI1_SV1_CLS" })}`}
        secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "KM_L43WI1_SV1_OLS", closeLabel: "KM_L43WI1_SV1_CLS" })}`}
        label="KM_L43WI1_SV1_OLS"
      />
      <BlackContainer
        data={{
          label: "KM_L43MD1_XT1",
          useClass: "greenTxt position-absolute single-text-187",
          unit: "mmWc",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L93SC5_II",
          useClass: "greenTxt  position-absolute single-text-188",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="text-center position-absolute single-text-189 text-center">
        <div>
          <div class="yellowline-Hr w rightarrow leftarrow  position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L93SC8",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L54FN1_SI",
          useClass: "greenTxt mt-2 position-absolute single-text-190",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-191 d-flex">
        <BlackContainer
          data={{
            label: "KM_L54FN1_SI",
            useClass: "greenTxt mt-2 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L54FN1_SI",
            useClass: "greenTxt mt-2 ",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-192 d-flex align-items-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 mb-1 bg-secondary",
              label: "N2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 bg-secondary",
              label: "CO2 BF2",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 bg-secondary mb-1",
              label: "CO2 BINS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 bg-secondary",
              label: "CO2 MILL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-193 d-flex">
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
      </div>
      <div className="position-absolute single-text-194 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "KM_L63SG2_OLS",
              closeLabel: "KM_L63SG2_CLS",
            })}`}
            label="KM_L63SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L54FN1_SI",
          useClass: "greenTxt mt-2 position-absolute single-text-195",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-196",
          label: "TANK WEIGHT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-197",
          label: "CO2 SYSTEM",
        }}
      />
      <div className="position-absolute single-text-198">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BF3")}`} label="KM_L23BF3" />
      </div>
      <div className="text-center position-absolute single-text-199 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="text-center position-absolute single-text-200 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="text-center position-absolute single-text-201 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="text-center position-absolute single-text-202 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("KM_L23BC5_NDE_MG")}`} label="KM_L23BC5_NDE_MG" />
      </div>
      <div className="position-absolute single-text-203">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KM_L43MD2")}`} label="KM_L43MD2" text="P" />
      </div>
      <div className="position-absolute single-text-204">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KM_L43MD2")}`} label="KM_L43MD2" text="P" />
      </div>
      <div className="position-absolute single-text-205">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KM_L43MD2")}`} label="KM_L43MD2" text="P" />
      </div>
      <div className="position-absolute single-text-206">
        <BlackContainer
          data={{
            label: "KM_L93SC3_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-207">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KM_L43MD2")}`} label="KM_L43MD2" text="M" />
      </div>
      <div class="yellowline-Vr downArrow position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow position-absolute line-3"></div>
      <div class="yellowline-Vr upArrow position-absolute line-4"></div>
      <div class="yellowline-Vr upArrow position-absolute line-5"></div>
      <div class="yellowline-Vr upArrow position-absolute line-6"></div>
      <div class="yellowline-Vr position-absolute line-7"></div>
    </div>
  );
};
