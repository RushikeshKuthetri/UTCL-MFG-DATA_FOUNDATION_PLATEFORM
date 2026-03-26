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
export const RawMillFeed2GujaratLine2 = () => {
  return (
    <div className="RawMill1FeedGujaratL1 RawMillFeed2GujaratLine2 w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "J05" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "G",
          }}
        />
      </div>
      <div className=" position-absolute single-text-2">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A6J03")}`,
            firstCircleText: "M",
            firstCircleLabel: "A6J03",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "G",
          }}
        />
      </div>
      <div className=" position-absolute single-text-3">
        <BlackContainer
          data={{
            label: "A6J05_I1",
            useClass: "greenTxt mb-2 ml-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "J05" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A6J05")}`,
            secondCircleLabel: "A6J05",
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
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A6J06")}`,
            secondCircleLabel: "A6J06",
            secondCircleText: "M",
          }}
        />
      </div>

      <div className="position-absolute single-text-7 d-flex">
        <div className="mr-5">
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
              <BlackContainer
                data={{
                  label: "R2L08_W1",
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
                  label: "R2L07_LVL",
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
                  label: "R2L06_LVL",
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
                  label: "R2L01_LVL",
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
                  label: "R2L02_LVL",
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
                  label: "R2L03_LVL",
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
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R2A06")}`,
              secondCircleLabel: "R2A06",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R2A06_I1",
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
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R2A05")}`,
              secondCircleLabel: "R2A05",
              secondCircleText: "M",
            }}
          />

          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>
          <BlackContainer
            data={{
              label: "R2A05_I1",
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
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R2A04")}`,
              secondCircleLabel: "R2A04",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>
          <BlackContainer
            data={{
              label: "R2A04_I1",
              useClass: "greenTxt mt-2 mx-auto",
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
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R2A01")}`,
              secondCircleLabel: "R2A01",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R2A01_I1",
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
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R2A02")}`,
              secondCircleLabel: "R2A02",
              secondCircleText: "M",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R2A02_I1",
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
              firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R2A03")}`,
              firstCircleLabel: "R2A03",
              firstCircleText: "M",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "",
            }}
          />
          <div class="yellowline-Vr downArrow  line-1 ml-auto"></div>

          <BlackContainer
            data={{
              label: "R2A03_I1",
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
          text={{ useClass: "text-dark", label: "A6J04" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A6J04")}`,
            secondCircleLabel: "A6J04",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 box-1 p-2 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 mr-3",
            label: "GRINDING AND SP",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "GRINDING_AID_VFD_SP",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_GA_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11  d-flex align-items-center justify-content-cente ">
        <div className="squareplustri">
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
        <div></div>
      </div>
      <div className="position-absolute single-text-12">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A6P26")} `} label="A6P26" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P26",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-1",
            label: "P35",
          }}
        />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A6P35")}`} label="A6P35" />
      </div>
      <div className="position-absolute single-text-15">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A6P36")} mr-2`} label="A6P36" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P36",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-1",
            label: "P10",
          }}
        />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A8P10")}`} label="A8P10" />
      </div>
      <div className="position-absolute single-text-18">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A8P11A")} mr-2`} label="A8P11A" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P11A",
          }}
        />
      </div>
      <div className=" position-absolute single-text-19">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A8J06")}`,
            firstCircleLabel: "A8J06",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "A8J06" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "G",
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
          text={{ useClass: "text-dark", label: "A8J04" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A8J04")}`,
            secondCircleLabel: "A8J04",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "A8J04_I1",
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
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className=" position-absolute single-text-22 d-flex">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
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
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A8P05")}`} label="A8P05" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P05",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A8P06")} grey-color mr-2`} label="A8P06" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P06",
          }}
        />
      </div>
      <div className=" position-absolute single-text-26">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A8J03")}`,
            firstCircleLabel: "A8J03",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "A8J03" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "G",
          }}
        />
        <BlackContainer
          data={{
            label: "A8J03_I1",
            useClass: "greenTxt mb-2 mt-3 ml-auto ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-27 d-flex">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
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
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1 mr-2",
            label: "A8P15",
          }}
        />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A8P15")}`} label="A8P15" />
      </div>
      <div className="position-absolute single-text-30">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A8P16")} mr-2`} label="A8P16" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "A8P16",
          }}
        />
      </div>
      <div className=" position-absolute single-text-31">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("A8J01")}`,
            firstCircleLabel: "A8J01",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "A8J01" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "",
          }}
        />
        <BlackContainer
          data={{
            label: "A8J01_I1",
            useClass: "greenTxt mb-2 mt-3 ml-auto ",
            unit: "A",
            unitColor: "unitColor",
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
      <div className="position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RM2 TPH",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_TPH_NEW",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R2P14")}`} label="R2P14" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P14",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R2P15")} mr-2`} label="R2P15" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P15",
          }}
        />
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
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R2J01")}`,
            secondCircleLabel: "R2J01",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "R2J01_INV_I1",
            useClass: "greenTxt mt-2 mx-auto ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R2P25")}`} label="R2P25" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P25",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R2P26")} mr-2`} label="R2P26" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P26",
          }}
        />
      </div>
      <div className="box-1 p-2 position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "QCX RUN HRS",
          }}
        />
        <BlackContainer
          data={{
            label: "WF_RECIEPE_COUNTER",
            useClass: "greenTxt mt-2",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "WF_RECIEPE_COUNTER_YD",
            useClass: "greenTxt mt-2",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
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
                  label: "R2L04_W1",
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
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleLabel: "",
            secondCircleText: "",
          }}
        />
      </div>

      <div className=" position-absolute single-text-51 d-flex">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="position-absolute single-text-53 d-flex align-items-center justify-content-cente">
        <div className="squareplustri">
          <div className="square grey-color mx-auto mt-3"></div>
          <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A6P15")}`} label="A6P15" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P15",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("A6P16")} mr-2`} label="A6P16" />
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
            label: "J06",
          }}
        />
        <BlackContainer
          data={{
            label: "A6J06_I1",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <table className=" ">
          <thead>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "TOTAL FEED SP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM_TOTAL_FEED_SP",
                    useClass: "greenTxt mt-1 mx-auto",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "LIMESTONE(A06)",
                  }}
                />
              </th>

              <th scope="col">IRON(A05)</th>
              <th scope="col">BAUXITE(A04)</th>
              <th scope="col">IMP SWEETINER/BLDCITE(A01)</th>
              <th scope="col">BLACK TRAP(A02)</th>
              <th scope="col">STAND BY WF(A03)</th>
              <th scope="col">SWEETNER SW(A02)</th>
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
              <td>
                <BlackContainer
                  data={{
                    label: "R2A06_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A05_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A04_S1",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A01_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A02_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A03_S1",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L1_SVR::SWA02_S1",
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
                    label: "R2A06_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A05_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A04_F1",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A01_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A02_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A03_F1",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "L1_SVR::SWA02_F1",
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
                    label: "WF_RECIPE_F11",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_F16",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_F15",
                    useClass: "greenTxt",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_F12",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_F13",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_F14",
                    useClass: "greenTxt ",
                    unit: "t/h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "SWA02_SP",
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
                <div>&nbsp;</div>
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A05_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A04_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A01_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A02_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A03_OP_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <div>&nbsp;</div>
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
                    label: "R2A06_ACC_FB",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A05_ACC_FB",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A04_ACC_FB",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A01_ACC_FB",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A02_ACC_FB",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "R2A03_ACC_FB",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "SWA02_ACC_FB",
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
                      label: "QCX %",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_A01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_F01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_E01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_B01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_C01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_D01CN",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "WF_RECIPE_G01CN",
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
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "A6J04 BELT WEIGHER",
              }}
            />
            <BlackContainer
              data={{
                label: "A6J04_W2",
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
                label: "A6J04 BELT WEIG AVG",
              }}
            />
            <BlackContainer
              data={{
                label: "A6J04_W1_AVERAGE",
                useClass: "greenTxt ml-2",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "A6J04_S1_SP",
              useClass: "greenTxt mr-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A6J04_S1",
              useClass: "greenTxt mr-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="box-1 p-2 ml-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "A6J04 DOL I1",
              }}
            />
            <BlackContainer
              data={{
                label: "A6J04_DOL_I1",
                useClass: "greenTxt mr-2 ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "A6J04 INV I1",
              }}
            />
            <BlackContainer
              data={{
                label: "A6J04_INV_I1",
                useClass: "greenTxt mr-2 ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className=" p-2 ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SWEETNER MANUAL SP",
            }}
          />
          <BlackContainer
            data={{
              label: "QCX_IMP_SW2",
              useClass: "greenTxt mt-2 ",
              unit: "%",
              unitColor: "unitColor",
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
                    label: "A8J03 TODAY",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "A8J03 TODAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "A8J03 LOAD TODAY",
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
                    label: "A8J03 YESTER",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "A8J03 YESTERDAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "A8J03 LOAD YESTERDAY",
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
      <div className="position-absolute single-text-63 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "A6J03_DOL_I1",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "A6J03_INV_I1",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "L1_SVR::SWA02_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1_SVR::SWA02_S1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1_SVR::SWA02_I1",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-65 d-flex">
        <div>
          <TransparentBoxWithGate
            isClickable={false}
            parentClass="mx-auto"
            squareProps={{
              tagLabel: "",
              squareClass: `grey-color`,
            }}
          />
          <div className="mt-5 truck"></div>
        </div>
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-1",
            label: "P25",
          }}
        />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("A6P25")}`} label="A6P25" />
      </div>
      <div className="position-absolute single-text-69">
        <div className="middle-sqr-container ml-3">
          <ProgressBarMimic label="511SB1_LI" />
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "SWEETNER",
              }}
            />
            <BlackContainer
              data={{
                label: "L1_SVR::SWL02_L2",
                useClass: "greenTxt mt-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            {/* <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "L08",
              }}
            /> */}
          </div>
        </div>
        <div class="yellowline-Vr downArrow ml-4 line-1"></div>
      </div>
      <div className=" position-absolute single-text-70">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("SWA02")}`,
            firstCircleLabel: "SWA02",
            firstCircleText: "M",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "A6J03_S1_SP",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A6J03_S1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-3",
              label: "J03",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "A6J03_W1",
              useClass: "greenTxt mt-2 ml-3",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  mt-3 position-absolute single-text-72",
          label: "SWA02",
        }}
      />
      <div className="position-absolute single-text-73">
        <BlackContainer
          data={{
            label: "R2A06_BL_FB",
            useClass: "greenTxt mt-1",
            unit: "kg",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr  position-absolute line-36"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Vr upArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Hr  position-absolute line-48"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-49"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-50"></div>
    </div>
  );
};
