import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
import {
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
  TextContainerWithWrapWord,
} from "../../../../index";

export const CoalFiringLine3 = () => {
  return (
    <div className="CoalFiringLine3  w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("L71SC1")}`,
          firstCircleLabel: "L71SC1",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          // secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("L71SC2")}`,
          firstCircleLabel: "L71SC2",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          // secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: ``,
          // firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L72SC1")}`,
          secondCircleLabel: "L72SC1",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: ``,
          // firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L72SC2")}`,
          secondCircleLabel: "L72SC2",
          secondCircleText: "M",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17"></div>
      <div className="pipeHr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeHr position-absolute pipe-21"></div>
      <div className="pipeVr position-absolute pipe-22"></div>
      <div className="pipeHr position-absolute pipe-23"></div>
      <div className="pipeHr position-absolute pipe-24"></div>
      <div className="pipeVr position-absolute pipe-25"></div>
      <div className="pipeHr position-absolute pipe-26"></div>
      <div className="pipeVr position-absolute pipe-27"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-28"></div>
      <div className="yellowline-Hr position-absolute pipe-29"></div>
      <div className="yellowline-Hr position-absolute pipe-30"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-31"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-32"></div>
      <div className="yellowline-Hr position-absolute pipe-33"></div>
      <div className="yellowline-Hr position-absolute pipe-34"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Hr position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="pipeVr position-absolute pipe-45"></div>
      <div className="pipeVr position-absolute pipe-46"></div>
      <div className="pipeVr position-absolute pipe-47"></div>
      <div className="pipeHr position-absolute pipe-48"></div>
      <div className="pipeHr position-absolute pipe-49"></div>
      <div className="pipeHr position-absolute pipe-50"></div>
      <div className="pipeHr position-absolute pipe-51"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="containerImage d-flex justify-content-center align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DE 2 SBY",
            }}
          />
        </div>
        <div className="containerImage d-flex justify-content-center align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DE 2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="containerImage d-flex justify-content-center align-items-center text-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FROM L50SC5",
              }}
            />
            <BlackContainer
              data={{
                label: "WT3002",
                useClass: "greenTxt mt-1",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "COAL BIN 1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PYRO",
              }}
            />
          </div>
        </div>
        <div className="containerImage d-flex justify-content-center align-items-center text-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FROM L50SC5",
              }}
            />
            <BlackContainer
              data={{
                label: "WT3003",
                useClass: "greenTxt mt-1",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "COAL BIN 2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PYRO",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="containerImage d-flex justify-content-center align-items-center">
          <BlackContainer
            data={{
              label: "WT3010",
              useClass: "greenTxt",
              unit: "Kg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage d-flex justify-content-center align-items-center">
          <BlackContainer
            data={{
              label: "WT3011",
              useClass: "greenTxt",
              unit: "Kg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage d-flex justify-content-center align-items-center">
          <BlackContainer
            data={{
              label: "WT4002",
              useClass: "greenTxt",
              unit: "Kg",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="img-108 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("L71WF1")}`}
            label="L71WF1"
            text="M"
          />
        </div>
        <div className="img-108 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("L73WF1")}`}
            label="L73WF1"
            text="M"
          />
        </div>
        <div className="img-108 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("L74WF1")}`}
            label="L74WF1"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-5 d-flex">
        <div className="img-86 ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "L71BL1"
            )} position-absolute`}
            label="L71BL1"
            text="M"
          />
        </div>
        <div className="img-86">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "L73BL1"
            )} position-absolute`}
            label="L73BL1"
            text="M"
          />
        </div>
        <div className="img-86">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "L73BL1A"
            )} position-absolute`}
            label="L73BL1A"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-6">
        <div className="img-86 ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "L74BL1"
            )} position-absolute`}
            label="L74BL1"
            text="M"
          />
        </div>
        <div className="img-86">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "L74BL1A"
            )} position-absolute`}
            label="L74BL1A"
            text="M"
          />
        </div>
        <div className="img-86">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "L74BL1B"
            )} position-absolute`}
            label="L74BL1B"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-7">
        <div>
          <BlackContainer
            data={{
              label: "AS3001",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KT3001",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "AS3021",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KT3021",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "AS3023",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "IT3023",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-8">
        <div>
          <BlackContainer
            data={{
              label: "AS3020",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KT3020",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "FT4165",
              useClass: "greenTxt",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "AS4167",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KT4167",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-9">
        <div>
          <BlackContainer
            data={{
              label: "BL3010",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AF3010",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "IT3010",
              useClass: "greenTxt mt-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "BL3003",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AF3012",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "IT2013",
              useClass: "greenTxt mt-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS3012",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "BL4001",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AF4005",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "IT4040",
              useClass: "greenTxt mt-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <div className="connector-icon ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("DE2CP")}`}
              label="DE2CP"
              text="M"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("L60FN1")}`}
              label="L60FN1"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="text-center">
          <div className="connector-icon ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("DE2CP")}`}
              label="DE2CP"
              text="M"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("DE2FAN")}`}
              label="DE2FAN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "PT4030",
              useClass: "greenTxt ml-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "PT4032",
              useClass: "greenTxt ml-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "PT4031",
              useClass: "greenTxt ml-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("DE2_RF1A")} `}
          label="DE2_RF1A"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO COAL BIN",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("DE2RF")} `}
          label="DE2RF"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO COAL BIN",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("L60CP1")} `}
          label="L60CP1"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SCREW COMPRESSOR",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 border p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TOTAL COAL CONSUMPTION",
          }}
        />
        <BlackContainer
          data={{
            label: "TOTALCOAL",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L71RF1-ROT FEEDER",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("L71RF1")} mt-2`}
          label="L71RF1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "FROM ROTORSCALE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "& FINE COAL BIN",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "FROM ROTORSCALE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "& FINE COAL BIN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO RISER DUCT",
          }}
        />
        <div className="img-86 ml-2"></div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("L71RF1ADOL")}`}
            label="L71RF1ADOL"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("L73RF1A")}`}
            label="L73RF1A"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("L74RF1ADOL")}`}
            label="L74RF1ADOL"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`squar digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "SM_532SG3_OLS", closeLabel: "SM_532SG3_CLS" }
              )}`}
              label="SM_532SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`squar digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "SM_532SG3_OLS", closeLabel: "SM_532SG3_CLS" }
              )}`}
              label="SM_532SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`squar digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "SM_532SG3_OLS", closeLabel: "SM_532SG3_CLS" }
              )}`}
              label="SM_532SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PYRO",
          }}
        />
        <div>
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KILN",
          }}
        />
      </div>
    </div>
  );
};
