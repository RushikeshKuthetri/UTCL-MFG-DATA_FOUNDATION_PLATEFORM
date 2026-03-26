import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
  ProgressBarMimic,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
} from "../../../../index";
// import * as tagsData from "../../../../data/kotputli/kiln main page/kotputliKilnMainPageTextcolumn";
import { useBVTagsColorStatusForNewPlantScreens, useColorStatus, useBorderTagsColorStatus, useFanImgTagsColorStatus, useMotorTagsColorStatusForNewPlantScreens } from "../../../../../utils";
export const RawMill1FeedGujaratLine1 = () => {
  return (
    <div className="RawMill1FeedGujaratL1 w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A2J05")}`,
            firstCircleText: "M",
            firstCircleLabel: "A2J05",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
      </div>
      <div className=" position-absolute single-text-2">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A2J03")}`,
            firstCircleText: "M",
            firstCircleLabel: "A2J03",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "G",
          }}
        />
      </div>
      <div className=" position-absolute single-text-3">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "G",
          }}
          text={{ useClass: "text-dark", label: "J06" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A2J06")}`,
            secondCircleLabel: "A2J06",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className=" position-absolute single-text-4">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "G",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("SWJ01")}`,
            secondCircleLabel: "SWJ01",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className=" position-absolute single-text-5 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("SWBRU1")}`,
            secondCircleLabel: "SWBRU1",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle ml-4"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("SWBRU2")}`,
            secondCircleLabel: "SWBRU2",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "G",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A2J07")}`,
            secondCircleLabel: "A2J07",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className="mr-4">
          <div className="middle-sqr-container">
            <div className="text-center mt-3 pt-2">
              <span class="dot grey-color ml-auto mr-2  mb-2">L</span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SWEETNER",
                }}
              />
              <BlackContainer
                data={{
                  label: "SWL01_L2",
                  useClass: "greenTxt mt-2",
                  unit: "m",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "SWL01",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow  line-1"></div>
        </div>
        <div>
          <div className="middle-sqr-container ml-3">
            <ProgressBarMimic label="511SB1_LI" />
            <div className="text-center">
              <span class="dot grey-color ml-auto mr-2 mb-2">L</span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "LIMESTONE",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "LO8",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L08_W1",
                  useClass: "greenTxt mt-2",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "L08",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
        <div>
          <div className="middle-sqr-container ml-4">
            <ProgressBarMimic label="511SB1_LI" />
            <div className="text-center">
              <span class="dot grey-color ml-auto mr-2 mb-2">L</span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "IRON SLUDGE",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "COPPER SLAG",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L07_CL",
                  useClass: "greenTxt mt-2",
                  unit: "m",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "L07",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
        <div>
          <div className="middle-sqr-container ml-4">
            <ProgressBarMimic label="511SB1_LI" />
            <div className="text-center">
              <span class="dot grey-color ml-auto mr-2 mb-2">L</span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "BAUXITE",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L06_CL",
                  useClass: "greenTxt mt-4",
                  unit: "m",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "L06",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
        <div>
          <div className="middle-sqr-container ml-4">
            <ProgressBarMimic label="511SB1_LI" />
            <div className="text-center">
              <span class="dot grey-color ml-auto mr-2 mb-2">L</span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "IMP. SWEETNER",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "BALDCTTE",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L01_CL",
                  useClass: "greenTxt mt-2",
                  unit: "m",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "L01",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
        <div>
          <div className="middle-sqr-container ml-4">
            <ProgressBarMimic label="511SB1_LI" />
            <div className="text-center">
              <span class="dot grey-color ml-auto mr-2 mb-2">L</span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "BLACKTRAP",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L02_CL",
                  useClass: "greenTxt mt-4",
                  unit: "m",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "L02",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
        <div>
          <div className="middle-sqr-container ml-4">
            <ProgressBarMimic label="511SB1_LI" />
            <div className="text-center">
              <span class="dot grey-color ml-auto mr-2 mb-2">L</span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "RED MUD",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "HOPPER",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L03_CL",
                  useClass: "greenTxt mt-2",
                  unit: "m",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "L03",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
      </div>

      <div className=" position-absolute single-text-8 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "SWA01",
              }}
            />
            <span className="dot dot-rotat grey-color ml-auto">D</span>
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("SWA01")}`,
              secondCircleLabel: "SWA01",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "SWA01_I1",
              useClass: "greenTxt mt-2 mx-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-4">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "A06",
              }}
            />
            {/* <span className="dot dot-rotat grey-color ml-auto">D</span> */}
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1A06")}`,
              secondCircleLabel: "R1A06",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R1A06_I1",
              useClass: "greenTxt mt-2 mx-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-4">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "A05",
              }}
            />
            {/* <span className="dot dot-rotat grey-color ml-auto">D</span> */}
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1A05")}`,
              secondCircleLabel: "R1A05",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
        <div className="ml-4">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "A04",
              }}
            />
            {/* <span className="dot dot-rotat grey-color ml-auto">D</span> */}
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1A04")}`,
              secondCircleLabel: "R1A04",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
        <div className="ml-3">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "A01",
              }}
            />
            {/* <span className="dot dot-rotat grey-color ml-auto">D</span> */}
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1A01")}`,
              secondCircleLabel: "R1A01",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R1A01_I1",
              useClass: "greenTxt mt-2 mx-auto ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "A02",
              }}
            />
            {/* <span className="dot dot-rotat grey-color ml-auto">D</span> */}
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1A02")}`,
              secondCircleLabel: "R1A02",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R1A02_I1",
              useClass: "greenTxt mt-2 mx-auto ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "A03",
              }}
            />
            {/* <span className="dot dot-rotat grey-color ml-auto">D</span> */}
          </div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1A03")}`,
              secondCircleLabel: "R1A03",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R1A03_I1",
              useClass: "greenTxt mt-2 mx-auto ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "G",
          }}
          text={{ useClass: "text-dark", label: "J04" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A2J04")}`,
            secondCircleLabel: "A2J04",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "QOC RUN HRS",
          }}
        />
        <BlackContainer
          data={{
            label: "WF_RECIEPE_COUNTER",
            useClass: "greenTxt mt-1",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "WF_RECIEPE_COUNTER_YD",
            useClass: "greenTxt mt-1",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "A2J06_I1",
              useClass: "greenTxt mt-5",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A2P26")} `} label="A2P26" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P26",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A2P45")}`} label="A2P45" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P45",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A2P46")} mr-2`} label="A2P46" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P46",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1P05")}`} label="R1P05" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P05",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1P06A")} mr-2`} label="R1P06A" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P06A",
          }}
        />
      </div>
      <div className=" position-absolute single-text-19">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A4J06")}`,
            firstCircleLabel: "A4J06",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "J06" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "G",
          }}
        />
        <BlackContainer
          data={{
            label: "A4J06_I1",
            useClass: "greenTxt mt-2 mx-auto ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-20">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "G",
          }}
          text={{ useClass: "text-dark", label: "J04" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A4J04")}`,
            secondCircleLabel: "A4J04",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "A4J04_I1",
            useClass: "greenTxt mt-2 mx-auto ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-21 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "Z03",
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "A4Z03",
            squareClass: `${useColorStatus("A4Z03")}`,
          }}
        />
      </div>
      <div className=" position-absolute single-text-22 d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "A4Z02",
            squareClass: `${useColorStatus("A4Z02")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "Z02",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1P09")}`} label="R1P09" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P09",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div class="line-circle digital-tagg grey-color mr-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P10",
          }}
        />
      </div>
      <div className=" position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "A4J03_I1",
            useClass: "greenTxt mb-2 ml-3 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A4J03")}`,
            firstCircleLabel: "A4J03",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "A4J03" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "G",
          }}
        />
      </div>
      <div className=" position-absolute single-text-27 d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "A4Z01",
            squareClass: `${useColorStatus("A4Z01")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "Z01",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A4P15")}`} label="A4P15" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P15",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A4P16")} mr-2`} label="A4P16" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P16",
          }}
        />
      </div>
      <div className=" position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "A4J01_I1",
            useClass: "greenTxt mb-2 ml-auto mr-4 ",
            unit: "A",
            unitColor: "unitColor",
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
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <div className="middle-sqr-container">
          <div className="text-center mt-3 pt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GROUND",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "HOPPER",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-33 loadingtruck"></div>
      <div className="position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RM1 BIN FILLING TPH",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_TPH_NEW",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1P14")}`} label="R1P14" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P14",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1P15")} mr-2`} label="R1P15" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P15",
          }}
        />
      </div>
      <div className="position-absolute single-text-38 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mb-1",
            label: "R1S06",
          }}
        />

        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1S06M1")} `} label="R1S06M1" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1S06X1")} `} label="R1S06X1" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-39 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mb-1",
            label: "S10",
          }}
        />

        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1S10M1")} `} label="R1S10M1" text="M" />
      </div>
      <div className=" position-absolute single-text-40">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "G",
          }}
          text={{ useClass: "text-dark", label: "J01" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1J01")}`,
            secondCircleLabel: "R1J01",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "R1J01_INV_I1",
            useClass: "greenTxt mt-2 mx-auto ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1P25")}`} label="R1P25" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P25",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1P26A")} mr-2`} label="R1P26A" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P26",
          }}
        />
      </div>
      <BlueContainerWithDynamicBorder useClass={`position-absolute single-text-44 ${useBorderTagsColorStatus("A2J04M2")}`} isClickable={true} tagLabel="A2J04M2" />
      <div className="box-1 p-2 position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "R1J01_SP_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1J01_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="box-1 p-2 position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "S09",
          }}
        />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("R1S09_DETECT")} `} label="R1S09_DETECT" text="" />
      </div>
      <div className="position-absolute single-text-47">
        <div>
          <div className="middle-sqr-container ml-4">
            <ProgressBarMimic label="511SB1_LI" />
            <div className="text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "RAW MIX",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "BIN",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L04_W1",
                  useClass: "greenTxt mt-2",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-48">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1J02")}`,
            secondCircleLabel: "R1J02",
            secondCircleText: "",
          }}
        />
      </div>
      <div className=" position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TOTAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SETPOINT",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_TOTAL_FEED_SP",
            useClass: "greenTxt mt-2 ml-3",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MILL DP",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M01_P1",
              useClass: "greenTxt mt-2 ml-3",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MILL VIB",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M01_X1",
              useClass: "greenTxt mt-2 ml-3",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MOTOR KW",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M03_J1",
              useClass: "greenTxt mt-2 ml-3",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50 ">
        <div className="box-1 p-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mb-1",
              label: "S08",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1S08M1")} `} label="R1S08M1" text="M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 ml-auto",
            label: "J03",
          }}
        />
      </div>
      <div className=" position-absolute single-text-51 d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "A2Z01",
            squareClass: `${useColorStatus("A2Z01")}`,
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SURGE BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FILLING SELECTION",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-auto",
            label: "JO5",
          }}
        />
        <BlackContainer
          data={{
            label: "A2J05_I1",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "SURGE HOP.SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "GATE TWRDS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SURGE HOP.SEL",
          }}
        />
      </div>
      <div className="position-absolute single-text-53 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square digital-tag grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A2P15")}`} label="A2P15" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P15",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A2P16")} mr-2`} label="A2P16" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P16",
          }}
        />
      </div>
      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SWJ01 CURRENT",
          }}
        />
        <BlackContainer
          data={{
            label: "SWJ01_I1",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-57 d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "SWT01",
            squareClass: `${useColorStatus("SWT01")}`,
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO RM2",
          }}
        />
        <BlackContainer
          data={{
            label: "SWL02_L2",
            useClass: "greenTxt mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-59 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mb-1",
            label: "S07",
          }}
        />

        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1S07M1")} `} label="R1S07M1" text="M" />
      </div>
      <div className="position-absolute single-text-60">
        <table className=" ">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              {/* <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "FEED SP",
                  }}
                />
              </th> */}
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SWEETNER(SWAD1)",
                  }}
                />
              </th>
              <th scope="col">LIMESTIONE(A06)</th>
              <th scope="col">IRON(ADS)</th>
              <th scope="col">BAUXITE(A04)</th>
              <th scope="col">IMP SWEETINER/BLDCITE(A01)</th>
              <th scope="col">BLACK TRAP(A02)</th>
              <th scope="col">STAND BY WF(A03)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SPEED",
                  }}
                />
              </th>
              {/* <td>
                <BlackContainer
                  data={{
                    label: "CM_WF1_Feed_SP",
                    useClass: "greenTxt",
                    unit: "%4",
                    unitColor: "unitColor",
                  }}
                />
              </td> */}
              <td>
                <BlackContainer
                  data={{
                    label: "SWA01_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A06_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A05_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A04_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A01_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A02_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A03_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "TPH FLOW",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SWA01_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A06_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A05_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A04_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A01_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A02_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A03_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "TPH SP",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F17",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F11",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F16",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F15",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F12",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F13",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F14",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "OPER %",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SWA01_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <div>&nbsp;</div>
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A05_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A04_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A01_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A02_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A03_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "Accepted",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SWA01_ACC_FB",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <div>&nbsp;</div>
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A05_ACC_FB",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A04_ACC_FB",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A01_ACC_FB",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A02_ACC_FB",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R1A03_ACC_FB",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "QCX %",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_G01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_A01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_F01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_E01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_B01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_C01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "RM_RECIPE_D01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" position-absolute single-text-61 d-flex">
        <div className="box-1 p-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LIME STONE TPH",
              }}
            />
            <BlackContainer
              data={{
                label: "A2J04_W1",
                useClass: "greenTxt ml-2",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LS TPH AVG.",
              }}
            />
            <BlackContainer
              data={{
                label: "A2J04_W1_AVERAGE",
                useClass: "greenTxt ml-2",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-2 ml-2">
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "A2J03_DOL_I1",
                useClass: "greenTxt mr-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "A2103 DOL CURRENT",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "A2J03_INV_I1",
                useClass: "greenTxt mr-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "A2103 INV CURRENT",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-2 ml-2">
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "A2J04_DOL_I1",
                useClass: "greenTxt mr-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "A2104 DOL CURRENT",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "A2J04_INV_I1",
                useClass: "greenTxt mr-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "A2104 INV CURRENT",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-2 ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WEIGH FDR RESET",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-62">
        <table className=" ">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              {/* <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "FEED SP",
                  }}
                />
              </th> */}
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "OVERALL RUN HRS",
                  }}
                />
              </th>
              <th scope="col">LOAN RUN HRS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "A4J03 TODAY",
                  }}
                />
              </th>
              {/* <td>
                <BlackContainer
                  data={{
                    label: "CM_WF1_Feed_SP",
                    useClass: "greenTxt",
                    unit: "%4",
                    unitColor: "unitColor",
                  }}
                />
              </td> */}
              <td>
                <BlackContainer
                  data={{
                    label: "A4J03_TODAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "A4J03_LOAD_TODAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "A4J03 YESTER",
                  }}
                />
              </th>
              {/* <td>
                <BlackContainer
                  data={{
                    label: "CM_WF2_Feed_SP",
                    useClass: "greenTxt",
                    unit: "%9",
                    unitColor: "unitColor",
                  }}
                />
              </td> */}
              <td>
                <BlackContainer
                  data={{
                    label: "A4J03_YESTERDAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "A4J04_LOAD_YESTERDAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-63">
        <BlackContainer
          data={{
            label: "A2J03_SP1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A2J03_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A2J03_INV_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="ml-4">
          <BlackContainer
            data={{
              label: "A2J04_W1_PID_SPA",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2J04_W1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A2P36")} `} label="A2P36" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P36",
          }}
        />
      </div>
      <div className=" position-absolute single-text-65 d-flex">
        <div className="mr-4">
          <BlackContainer
            data={{
              label: "A2J04_SP1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2J04_S1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TransparentBoxWithGate
            // isClickable={true}
            parentClass="mx-auto"
            squareProps={{
              tagLabel: "",
              squareClass: `grey-color`,
            }}
          />
          <div className="mt-4 truck"></div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-66",
          label: "J07",
        }}
      />
      <div className="position-absolute single-text-67">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1P10")} `} label="R1P10" text="S" />
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Hr  position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Vr upArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Vr upArrow position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr  position-absolute line-36"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Vr upArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr downArrow position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Hr  position-absolute line-48"></div>
    </div>
  );
};
