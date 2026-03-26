import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, PipeWithCircles } from "../../../../index";
export const JettyTransportNewGujaratLine2 = () => {
  return (
    <div className="JettyTNGL2 JettyTransportOldGujaratLine2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-9 d-flex">
        <div className="containerImage text-center"></div>
        <div className="containerImage text-center"></div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot grey-color`} />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot grey-color`} />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <PipeWithCircles parentDivClass="hpipecircle " />
        <div className="d-flex mt-2 ml-2 text-center">
          <div>
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5U05M1_MR")}`} label="X5U05M1_MR" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "X5U05M1",
              }}
            />
          </div>
          <div className="ml-2 text-center">
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5U05M2_MR")}`} label="X5U05M2_MR" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "X5U05M2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <PipeWithCircles parentDivClass="hpipecircle " />
        <div className="d-flex mt-2 ml-2 text-center">
          <div>
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5U15M1_MR")}`} label="X5U15M1_MR" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "X5U15M1",
              }}
            />
          </div>
          <div className="ml-2 text-center">
            <div className="connector-icon">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5U15M2_MR")}`} label="X5U15M2_MR" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "X5U15M2",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-18">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("X5U15_MR")} `} label="X5U15_MR" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mt-1",
            label: "X5U15",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X5U08_MR")}`,
          firstCircleText: "M",
          firstCircleLabel: "X5U08_MR",
        }}
        text={{ useClass: "text-dark", label: "X5U08" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X5U09_MR")}`,
          firstCircleText: "M",
          firstCircleLabel: "X5U09_MR",
        }}
        text={{ useClass: "text-dark", label: "X5U09" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X1J15_INV_RUN")}`,
          firstCircleText: "M",
          firstCircleLabel: "X1J15_INV_RUN",
        }}
        text={{ useClass: "text-dark", label: "J15" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X5J15_RUN")}`,
          firstCircleText: "M",
          firstCircleLabel: "X5J15_RUN",
        }}
        text={{ useClass: "text-dark", label: "X5J15" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "J16" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X5J16_MR")}`,
          secondCircleText: "M",
          secondCircleLabel: "X5J16_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "J09" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X1J09_MR")}`,
          secondCircleText: "M",
          secondCircleLabel: "X1J09_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("X1J09_FBINT04")}`,
          secondCircleText: "M",
          secondCircleLabel: "X1J09_FBINT04",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X5U06_MR")}`,
          firstCircleText: "M",
          firstCircleLabel: "X5U06_MR",
        }}
        text={{ useClass: "text-dark", label: "X5U06" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("X5U07_MR")}`,
          firstCircleText: "M",
          firstCircleLabel: "X5U07_MR",
        }}
        text={{ useClass: "text-dark", label: "X5U07" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "B2B07" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("B2B07_RUN")}`,
          secondCircleText: "M",
          secondCircleLabel: "B2B07_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-16"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "B2B03" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("B2B03_RUN")}`,
          secondCircleText: "M",
          secondCircleLabel: "B2B03_RUN",
        }}
      />
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        </div>
        <div>
          <MotorCircleDigitalTag className={`line-circle mt-1 grey-color`} />
          <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        </div>
      </div>

      <div className="img-114 position-absolute single-text-23"></div>
      <div className="position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "X1J16_I1",
            useClass: "greenTxt",
            unit: "apm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "X1J16_TOT",
            useClass: "greenTxt mt-5",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "X1J16_TOT",
            useClass: "greenTxt mt-2",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "JETTY RS-2 RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "RS2_RH",
              useClass: "greenTxt ml-2",
              unit: "hrs",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "JETTY SL OLD RUN HOURS",
            }}
          />
          <BlackContainer
            data={{
              label: "SL2_RH",
              useClass: "greenTxt ml-2",
              unit: "hrs",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <div className="stone1"></div>
        <div className="stone1"></div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-33",
          label: "COAL STACKER RBC",
        }}
      />
      <div className="position-absolute single-text-35">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5J10_MR")}`} label="X5J10_MR" />
      </div>
      <div className="position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P75",
          }}
        />
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5P75_MR")}`} label="X5P75_MR" />
        </div>
        <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
        <div className="d-flex text-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-1",
              label: "P74",
            }}
          />
          <MotorCircleDigitalTag className={` circle-img digital-tag ${useFanImgTagsColorStatus("X5P74_MR")}`} label="X5P74_MR" />
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P65",
          }}
        />
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5P65_MR")}`} label="X5P65_MR" />
        </div>
        <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
        <div className="d-flex text-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-1",
              label: "P64",
            }}
          />
          <MotorCircleDigitalTag className={` circle-img digital-tag ${useFanImgTagsColorStatus("X5P64_MR")}`} label="X5P64_MR" />
        </div>
      </div>
      <div className="position-absolute single-text-38">
        <BlackContainer
          data={{
            label: "X5U07_TPH",
            useClass: "greenTxt",
            unit: "Tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "X5U07_W1_TOT",
            useClass: "greenTxt mt-2",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "X5U06_TPH",
            useClass: "greenTxt ",
            unit: "Tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "X5U06_W1_TOT",
            useClass: "greenTxt mt-2",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-40 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "M20",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("X5J10M20_RUN")}`} label="X5J10M20_RUN" text="M" />
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "INNER/OUTER SILO",
          }}
        />
      <div className="yellowline-Hr rightarrow line-1"></div>

      </div>
      <div className="position-absolute single-text-42 d-flex">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "IBAU 2 SILO",
          }}
        />
              <div className="yellowline-Hr downArrow line-1"></div>

        </div>
      <div className="fiveside-shape position-absolute single-text-24"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-12"></div>
      <div className="yellowline-Vr   position-absolute line-13"></div>
      <div className="yellowline-Vr   position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Vr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Vr upArrow position-absolute line-46"></div>
      <div className="yellowline-Vr upArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
    </div>
  );
};
