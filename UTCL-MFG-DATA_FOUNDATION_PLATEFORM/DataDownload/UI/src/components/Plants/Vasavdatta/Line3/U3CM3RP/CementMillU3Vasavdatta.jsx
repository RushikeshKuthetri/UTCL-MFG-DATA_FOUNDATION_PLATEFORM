import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, TransparentBoxWithGate, PipeWithCircles } from "../../../../index";
export const CementMillU3Vasavdatta = () => {
  return (
    <div className="CementMillRPVasavdatta w-100 h-100 position-relative">
      <div className="box-1 p-2 position-absolute single-text-1">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "3N118SFM_FI",
              useClass: "greenTxt mr-3",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto"
            squareProps={{
              tagLabel: "3N118SFM",
              squareClass: `${useColorStatus("3N118SFM")}`,
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "3N118ROS_FR",
              useClass: "greenTxt mr-3",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("3N118ROS")}`} label="3N118ROS" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <BlackContainer
          data={{
            label: "3N10BEM01_JI",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N10BEM02_JI",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N10BEM01_II",
            useClass: "greenTxt mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N10BEM02_II",
            useClass: "greenTxt mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3N10BE",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("3N10BE")}`} label="3N10BE" text="M" />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
        />
      </div>
      <div className=" position-absolute single-text-4 ">
        <BlackContainer
          data={{
            label: "3N3CLT",
            useClass: "greenTxt ml-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 pt-2",
              label: "CLINKER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ",
              label: "HOPPER",
            }}
          />
          <BlackContainer
            data={{
              label: "3N01HP_LT",
              useClass: "greenTxt mt-2",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-5">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "3N04WF" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("3N04WF")}`,
            secondCircleText: "M",
            secondCircleLabel: "3N04WF",
          }}
        />
        <BlackContainer
          data={{
            label: "3N04WF_FI",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N04WF_SI",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "TOTAL TPH",
          }}
        />
        <BlackContainer
          data={{
            label: "TOTAL_TPH",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-auto",
            label: "3N08BC",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("3N08BC")}`,
            secondCircleText: "M",
            secondCircleLabel: "3N08BC",
          }}
        />
        <BlackContainer
          data={{
            label: "3N08BC_JI",
            useClass: "greenTxt mt-2 ml-auto mr-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-7 d-flex">
        <div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "3N05WF" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("3N05WF")}`,
              secondCircleText: "M",
              secondCircleLabel: "3N05WF",
            }}
          />
          <BlackContainer
            data={{
              label: "3N05WF_FI",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N05WF_SI",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("3N06WF")}`,
              firstCircleText: "M",
              firstCircleLabel: "3N06WF",
            }}
            text={{ useClass: "text-dark", label: "3N06WF" }}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "",
            }}
          />
          <BlackContainer
            data={{
              label: "3N06WF_FI",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N06WF_SI",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          {/* <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-auto",
              label: "3N122BC",
            }}
          /> */}
          <BlackContainer
            data={{
              label: "3N14PY_DIS_TI",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-8">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "3N122BC" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("3N122BC")}`,
            secondCircleText: "M",
            secondCircleLabel: "3N122BC",
          }}
        />
        {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "3N09M5",
          }}
        /> */}
      </div>
      <div className=" position-absolute single-text-9">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "3N11BC" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="gray-green-red-img red-img ml-1 position-absolute single-text-10"></div>
      <div className="triangle-with-squares  position-absolute single-text-11"></div>
      <div className=" position-absolute single-text-12">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "M",
          }}
        />
      </div>
      <div className=" position-absolute single-text-13">
        <div className="d-flex gap">
          <div className="squareplustri d-flex">
            <div className="d-flex  mt-5 ml-2">
              <div className={`circle-img mt-3 c-grey-img-2`}></div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-140 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-141 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-142 ml-3 mb-2"></div>
            </div>
          </div>
          <div className="squareplustri d-flex">
            <div className="d-flex  mt-5 ml-2">
              <div className={`circle-img mt-3 c-grey-img-2`}></div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-140 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-141 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-142 ml-3 mb-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-14">
        <div className="d-flex gap">
          <div className="squareplustri d-flex">
            <div className="d-flex  mt-5 ml-2">
              <div className={`circle-img mt-3 c-grey-img-2`}></div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-140 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-141 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-142 ml-3 mb-2"></div>
            </div>
          </div>
          <div className="squareplustri d-flex">
            <div className="d-flex  mt-5 ml-2">
              <div className={`circle-img mt-3 c-grey-img-2`}></div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-140 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-141 ml-3 mb-2"></div>
              <div className="yellowline-Hr  rightarrow position-absolute line-142 ml-3 mb-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("3N24FN")}`} label="3N24FN" text="M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-3",
            label: "3N24FN",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div className="yellowline-Vr position-absolute line-140"></div>
        <div className="yellowline-Vr position-absolute line-141"></div>
        <div>
          <BlackContainer
            data={{
              label: "3N15-1CY-PI-01",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <div className="triangle-with-squares">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-3 mx-auto",
                label: "CYC 1",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ml-4 ${useFanImgTagsColorStatus("3N19RA")}`} label="3N19RA" />
          <div className="yellowline-Vr  downArrow position-absolute line-139"></div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "3N15-1CY-PI-02",
              useClass: "greenTxt mt-2",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <div className="triangle-with-squares">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-3 mx-auto",
                label: "CYC 2",
              }}
            />
          </div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ml-4 ${useFanImgTagsColorStatus("3N20RA")}`} label="3N20RA" />
          <div className="yellowline-Vr  downArrow position-absolute line-139"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "3N24FN_SPRS_SI/4_ANA_OP",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N24FN_JI_01",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N24FN_SPRS_II",
            useClass: "greenTxt mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N24FN_SPRS_SI",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-18 d-flex">
        <BlackContainer
          data={{
            label: "3N13SR_JI",
            useClass: "greenTxt mt-2 mr-5",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "3N13SR_SI/4_ANA_OP",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N13SR_SI",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "3N13SR",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div className="topImage d-flex justify-content-center">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("3N13SR")}`} label="3N13SR" text="M" />
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-20"></div>
      <div className="containerImage position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "3N14HP_WI",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "3N14HS_OFF_TRACK",
            useClass: "greenTxt mt-5 mx-auto",
            unit: "MM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <BlackContainer
          data={{
            label: "3N14PYSGB_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N14PYSGA_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "3N13SR_PI_01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N13SR_TI_01",
            useClass: "greenTxt mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "3N14PYM01_JI_01",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N14PY_GAP_LFT",
              useClass: "greenTxt mt-2",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N14HS_PI_01",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N14HS_CAL_PRESSURE",
              useClass: "greenTxt mt-2",
              unit: "Mpa",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "3N14PYM01_JI_02",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N14PY_GAP_RHT",
              useClass: "greenTxt mt-2",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N14HS_PI_02",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N14PY_VI_01",
              useClass: "greenTxt mt-2",
              unit: "MM/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-86 position-absolute single-text-26  d-flex justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 mx-auto ${useColorStatus("3N14PY")}`} label="3N14PY" text="" />
      </div>
      <div className="img-86 position-absolute single-text-27 d-flex justify-content-center align-items-center">
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 mx-auto ${useColorStatus("3N14PY")}`} label="3N14PY" text="" />
      </div>
      <div className="position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SILO LEVELS",
          }}
        />
        <div className="box-1 p-2 mt-1">
          <BlackContainer
            data={{
              label: "3P01_LT",
              useClass: "greenTxt",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3P02_LT",
              useClass: "greenTxt mt-2",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3P03_LT",
              useClass: "greenTxt mt-2",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 dashedHr-Pipe"></div>
      <div className="position-absolute single-text-30 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3N16BL",
            }}
          />
          <MotorCircleDigitalTag className={`line-circle digital-tag mt-2 ml-2 ${useColorStatus("3N16BL")} `} label="3N16BL" />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "65BL",
            }}
          />
          <MotorCircleDigitalTag className={`line-circle digital-tag ml-2 ${useColorStatus("3N65BL")} `} label="3N65BL" />
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "3N57BL",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "OR-3N42BL",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM CLINKER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "STOCKPILE",
          }}
        />
      </div>
      <div className=" position-absolute single-text-32 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3N27",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3N28",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-33 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3N26",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3N50A",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-34 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "3N04 &",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "3N04WF",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "3N51DR &",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "3N10BE",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-35 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "3N16",
          }}
        />
      </div>
      <div className=" position-absolute single-text-36 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "POLYCOM",
          }}
        />
      </div>
      <div className=" position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3N28A",
          }}
        />

        <div className="squareplustri d-flex mt-1">
          <div className="d-flex mt-2 ml-2">
            <div className={`circle-img mt-5 c-grey-img-2`}></div>
            <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
            <div className="yellowline-Hr  rightarrow position-absolute line-140 ml-3 mb-2"></div>
            <div className="yellowline-Hr  rightarrow position-absolute line-141 ml-3 mb-2"></div>
            <div className="yellowline-Hr  rightarrow position-absolute line-142 ml-3 mb-2"></div>
          </div>
        </div>
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Vr  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Hr  position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Hr  position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Hr  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr upArrow position-absolute line-25"></div>
      <div className="yellowline-Vr upArrow position-absolute line-26"></div>
      <div className="yellowline-Hr  position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr  position-absolute line-30"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
    </div>
  );
};
