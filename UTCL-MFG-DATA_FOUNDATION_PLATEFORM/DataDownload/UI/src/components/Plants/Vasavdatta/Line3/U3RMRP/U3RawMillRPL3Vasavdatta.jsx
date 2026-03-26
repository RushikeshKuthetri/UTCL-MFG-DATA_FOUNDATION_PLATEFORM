import { TextContainerWithWrapWord, BlackContainer, BlueContainerWithDynamicBorder, TransparentBoxWithGate, PipeWithCircles, MotorCircleDigitalTag } from "../../../../index";
import { useBorderTagsColorStatus, useColorStatus, useFanImgTagsColorStatus, useImgColorStatus } from "../../../../../utils";

export const U3RawMillRPL3Vasavdatta = () => {
  return (
    <div className="U3RawMillRPL3Vasavdatta w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-1"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{}}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("3D06BM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "3D06BM01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{}}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("3D10BCM01")}`,
          secondCircleText: "M",
          secondCircleLabel: "3D10BCM01",
        }}
      />
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <div className="containerImage text-center  pt-2">
            <BlackContainer
              data={{
                label: "3EA01HP_LT",
                useClass: "greenTxt mt-1",
                unit: "MTR",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "LIMESTONE",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA07WFM01_FR",
                useClass: "greenTxt mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA07WFM01_SI",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle single-text-4"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("3EA07WFM01")}`,
              secondCircleText: "M",
              secondCircleLabel: "3EA07WFM01",
            }}
          />
        </div>
        <div>
          <div className="containerImage text-center  pt-2 mt-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "LATERITE",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA03HP_LT",
                useClass: "greenTxt mt-1",
                unit: "MTR",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "3EA08WFM01_FR",
                useClass: "greenTxt mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA08WFM01_SI",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle single-text-4"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("3EA08WFM01")}`,
              secondCircleText: "M",
              secondCircleLabel: "3EA08WFM01",
            }}
          />
        </div>
        <div>
          <div className="containerImage text-center  pt-2 mt-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BAUXITE",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA05HP_LT",
                useClass: "greenTxt mt-1",
                unit: "MTR",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "3EA09WFM01_FR",
                useClass: "greenTxt mt-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA09WFM01_SI",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle single-text-4"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus("3EA09WFM01")}`,
              secondCircleText: "M",
              secondCircleLabel: "3EA09WFM01",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 text-center">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("3EA11BCM01_R")}`,
            firstCircleText: "M",
            firstCircleLabel: "3EA11BCM01_R",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("3EA11BCM01_F")}`,
            secondCircleText: "M",
            secondCircleLabel: "3EA11BCM01_F",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA_ACTUAL_TPH",
            useClass: "greenTxt mt-5",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6 d-flex">
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("3EA14BEM01")}`} label="3EA14BEM01" text="M" />
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe mt-2"
            firstCircle={{
              firstCircleClass: ``,
              firstCircleText: "",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("3EA15BEM01")}`} label="3EA15BEM01" text="M" />
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe mt-2"
            firstCircle={{
              firstCircleClass: ``,
              firstCircleText: "",
            }}
          />
        </div>
      </div>
      <div className="gray-img  position-absolute single-text-7"></div>
      <div className="gray-img  position-absolute single-text-8"></div>
      <div className=" position-absolute single-text-9 d-flex">
        <div className="mt-5">
          <BlackContainer
            data={{
              label: "3EA14BEM01_JI",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3PH_P01",
              useClass: "greenTxt mt-2",
              unit: "KG/CM2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="ml-5">
            <BlackContainer
              data={{
                label: "3EA15BEM01_JI",
                useClass: "greenTxt",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA15BEM01_JI2",
                useClass: "greenTxt mt-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "3EA15BEM01_I1",
                useClass: "greenTxt",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA15BEM01_I2",
                useClass: "greenTxt mt-2",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10 text-center">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("3EA16BCM01")}`,
            firstCircleText: "M",
            firstCircleLabel: "3EA16BCM01",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            // secondCircleText: "M",
            // secondCircleLabel: "",
          }}
        />
      </div>
      <MotorCircleDigitalTag className={`${useImgColorStatus("3EA22DGM01")} digital-tag position-absolute single-text-11`} label="3EA22DGM01" />
      <div className="position-absolute single-text-12">
        <div className="topImage d-flex justify-content-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("3EA18SRM01")}`} label="3EA18SRM01" text="M" />
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-13"></div>
      <div className="position-absolute single-text-14">
        <div className="containerImage text-center pt-2">
          <BlackContainer
            data={{
              label: "3EA20HP_WI",
              useClass: "greenTxt mt-2",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <div className="containerImage text-center pt-2">
          <BlackContainer
            data={{
              label: "3EA20HS_OFF_TRACK",
              useClass: "greenTxt mt-4",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-16 text-center">
        <BlackContainer
          data={{
            label: "3EA18CY_PI01",
            useClass: "greenTxt mt-2",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 dashedHr-Pipe">
        <BlackContainer
          data={{
            label: "3EA39_TI-1",
            useClass: "greenTxt ml-auto mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 text-center">
        <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        <MotorCircleDigitalTag className={`line-circle digital-tag mt-2 ml-2 ${useColorStatus("3EA39BLM01")} `} label="3EA39BLM01" />
      </div>
      <div className="position-absolute single-text-19">
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "3EA18SR,M01_SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA18SRM01_SI",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA18SRM01_JI",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA18SRM01_I",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "3EA18V01",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA18V02",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA18V03",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "3EA37_1DRM01_ZI",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA20_TI_15",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA20_PI01",
            useClass: "greenTxt mt-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "3EA22DGM01_PS1",
          useClass: "greenTxt mt-2 position-absolute single-text-21",
          unit: "KG/CM2",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-22">
        <BlueContainerWithDynamicBorder useClass={`${useBorderTagsColorStatus("3EA36DRM01")}`} isClickable={true} tagLabel="3EA36DRM01" />
        <BlackContainer
          data={{
            label: "3EA36_1DRM01_ZI",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA20ZI03",
            useClass: "greenTxt mt-3 ml-3 mb-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`ml-4 ${useBorderTagsColorStatus("3EA20SGM01")}`} isClickable={true} tagLabel="3EA20SGM01" />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "3EA20HS_PS1/SP_120BAR",
            useClass: "greenTxt mt-2",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA20ZI04",
            useClass: "greenTxt mt-3 ml-3 mb-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`ml-4 ${useBorderTagsColorStatus("3EA20SGM02")}`} isClickable={true} tagLabel="3EA20SGM02" />
      </div>
      <div className="img-86 position-absolute single-text-24  d-flex justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("3EA20PLYM02")} mt-3`} label="3EA20PLYM02" />
      </div>
      <div className="img-86 position-absolute single-text-25  d-flex justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("3EA20PLYM01")} mt-3`} label="3EA20PLYM01" />
      </div>
      <div className=" position-absolute single-text-26 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "3EA20M01_JI",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA20HS-PS1",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GAP_LEFT",
              useClass: "greenTxt mt-2",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA20HS_CAL_PRESSURE",
              useClass: "greenTxt mt-2",
              unit: "Map",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA20V01",
              useClass: "greenTxt mt-2",
              unit: "MM/S",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "3EA20M01_II",
                useClass: "greenTxt",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA20V02",
                useClass: "greenTxt ml-3",
                unit: "MM/S",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3EA20M02_II",
                useClass: "greenTxt ml-3",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "3EA20M02_JI",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA20HS_PS2",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GAP_RIGHT",
              useClass: "greenTxt mt-2",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA20HS_MEAN_PRESSURE",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MIDDLE_GAP",
              useClass: "greenTxt mt-2",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 text-center">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 text-center">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("3EA16BCM02")}`,
            firstCircleText: "M",
            firstCircleLabel: "3EA16BCM02",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA22DGM02_PS2",
            useClass: "greenTxt mt-3",
            unit: "KG/CM2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag className={`${useImgColorStatus("3EA22DGM02")} digital-tag position-absolute single-text-29`} label="3EA22DGM02" />
      <div className="position-absolute single-text-30">
        <div className="topImage d-flex justify-content-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("3EA18SRM02")}`} label="3EA18SRM02" text="M" />
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-31"></div>
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "3EA20_TI-16",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA20_PI02",
            useClass: "greenTxt mt-2",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA18SRM02_I",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 dashedHr-Pipe"></div>
      <div className="position-absolute single-text-34 text-center d-flex">
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          <div className="yellowline-Hr position-absolute line-2"></div>
          <MotorCircleDigitalTag className={`line-circle digital-tag mt-2 ml-2 ${useColorStatus("3EA40BLM01")} `} label="3EA40BLM01" />
        </div>
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          <div className="yellowline-Hr position-absolute line-2"></div>
          <MotorCircleDigitalTag className={`line-circle digital-tag mt-2 ml-2 ${useColorStatus("3EA40BLM02")} `} label="3EA40BLM02" />
        </div>
        <div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          <div className="yellowline-Hr position-absolute line-2"></div>
          <MotorCircleDigitalTag className={`line-circle digital-tag mt-2 ml-2 ${useColorStatus("3EA39BLM03")} `} label="3EA39BLM03" />
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "3EA18SR,M02_SP",
            useClass: "greenTxt mt-2",
            unit: "SP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA18SRM02_SI",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA18SRM02_JI",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA18V04",
            useClass: "greenTxt mt-4",
            unit: "MM/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA18V05",
            useClass: "greenTxt mt-2",
            unit: "MM/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3EA18V06",
            useClass: "greenTxt mt-2",
            unit: "MM/s",
            unitColor: "unitColor",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mt-2 ${useBorderTagsColorStatus("3EA36DRM02")}`} isClickable={true} tagLabel="3EA36DRM02" />
        <BlackContainer
          data={{
            label: "3EA36_2DRM01_ZI",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="triangle-with-squares position-absolute single-text-36 text-center">
        <BlackContainer
          data={{
            label: "3EA18CY_PI02",
            useClass: "greenTxt mt-2",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 dashedHr-Pipe">
        <BlackContainer
          data={{
            label: "3EA39_TI-2",
            useClass: "greenTxt ml-auto mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38 text-center">
        <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        <MotorCircleDigitalTag className={`line-circle digital-tag mt-2 ml-2 ${useColorStatus("3EA39BLM02")} `} label="3EA39BLM02" />
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "3EA28M01_JI",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA28FNM01_VI",
              useClass: "greenTxt mt-2",
              unit: "MM/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA28FNM01_VI2",
              useClass: "greenTxt mt-2",
              unit: "MM/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA28FN_T03",
              useClass: "greenTxt  mt-2",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-5">
          <BlackContainer
            data={{
              label: "3EA28FNM01/ST_PT_GRR",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3EA28FN_SI",
              useClass: "greenTxt  mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-40">
        <BlackContainer
          data={{
            label: "3KEA32DR_ZI",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mt-4 ${useBorderTagsColorStatus("3KEA32DR")}`} isClickable={true} tagLabel="3KEA32DR" />
      </div>

      <div className="position-absolute single-text-41 d-flex">
        <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("3EA35DRM01")}`} isClickable={true} tagLabel="3EA35DRM01" />

        <BlackContainer
          data={{
            label: "3EA35DRM01_ZI",
            useClass: "greenTxt  ml-4 mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <BlueContainerWithDynamicBorder useClass={`mt-3 ${useBorderTagsColorStatus("3EA37DGM02")}`} isClickable={true} tagLabel="3EA37DGM02" />
        <BlackContainer
          data={{
            label: "3EA37_2DRM01_ZI",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-43 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SILO FEED BE",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 mr-4 ${useColorStatus("3H12BEM01")}`} label="3H12BEM01" text="M" />
          <div>
            <BlackContainer
              data={{
                label: "3H12BEM01_II",
                useClass: "greenTxt ",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "3H12BEM01_JI",
                useClass: "greenTxt mt-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-44">
        <BlueContainerWithDynamicBorder useClass={`${useBorderTagsColorStatus("3KEA34SG")}`} isClickable={true} tagLabel="3KEA34SG" />
      </div>
      <div className="position-absolute single-text-45">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("3EA28FNM01")}`} label="3EA28FNM01" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-46">
        <BlueContainerWithDynamicBorder useClass={`${useBorderTagsColorStatus("3EA37DGM01")}`} isClickable={true} tagLabel="3EA37DGM01" />
      </div>
      <div className="position-absolute single-text-47">
        <BlueContainerWithDynamicBorder useClass={`${useBorderTagsColorStatus("3KEA49DR")}`} isClickable={true} tagLabel="3KEA49DR" />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-15"></div>
      <div className="yellowline-Vr  position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Hr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Hr  position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-36"></div>
      <div className="yellowline-Vr upArrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr  position-absolute line-42"></div>
      <div className="yellowline-Vr  position-absolute line-43"></div>
      <div className="yellowline-Hr  position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-46"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-48"></div>
      <div className="yellowline-Hr  position-absolute line-49"></div>
      <div className="yellowline-Hr  position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
      <div className="yellowline-Vr  position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Vr  position-absolute line-54"></div>
      <div className="yellowline-Vr  position-absolute line-55"></div>
      <div className="yellowline-Hr  position-absolute line-56"></div>
      <div className="yellowline-Vr upArrow position-absolute line-57"></div>
      <div className="yellowline-Vr  position-absolute line-58"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-59"></div>
      <div className="yellowline-Vr  position-absolute line-60"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-61"></div>
      <div className="yellowline-Vr upArrow position-absolute line-62"></div>
      <div className="yellowline-Vr  position-absolute line-63"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-64"></div>
      <div className="yellowline-Vr upArrow position-absolute line-65"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-66"></div>
      <div className="yellowline-Vr downArrow position-absolute line-67"></div>
      <div className="yellowline-Vr downArrow position-absolute line-68"></div>
      <div className="yellowline-Vr downArrow position-absolute line-69"></div>
      <div className="yellowline-Vr  position-absolute line-70"></div>
      <div className="yellowline-Vr  position-absolute line-71"></div>
      <div className="yellowline-Hr  position-absolute line-72"></div>
      <div className="yellowline-Hr  position-absolute line-73"></div>
      <div className="yellowline-Vr downArrow position-absolute line-74"></div>
      <div className="yellowline-Vr downArrow position-absolute line-75"></div>
      <div className="yellowline-Vr  position-absolute line-76"></div>
    </div>
  );
};
