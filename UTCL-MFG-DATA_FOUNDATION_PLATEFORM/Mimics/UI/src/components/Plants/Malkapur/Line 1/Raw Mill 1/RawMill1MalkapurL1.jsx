import { TextContainerWithWrapWord, MotorCircleDigitalTag, PipeWithCircles, BlueContainerWithDynamicBorder, MimicCaret, BlackContainer } from "../../../../index";
import { useColorStatus, useFanImgTagsColorStatus, useBorderTagsColorStatus, useImgColorStatus } from "../../../../../utils";
export const RawMill1MalkapurL1 = () => {
  return (
    <div className="RawMill1MalkapurL1 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 text-center">
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("BM102/M01")}`} label="BM102/M01" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BM102",
            }}
          />
          <div className="box-1 p-1 mt-1">
            <BlackContainer
              data={{
                label: "BM102/RPM_SP",
                useClass: "greenTxt", 
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "BM102/RPM_FB",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "BM102/KW",
                useClass: "greenTxt mt-1",
                unit: "kw",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("BM202/M01")}`} label="BM202/M01" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BM202",
            }}
          />
          <div className="box-1 p-1 mt-1">
            <BlackContainer
              data={{
                label: "BM202/RPM_SP",
                useClass: "greenTxt",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "BM202/RPM_FB",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "BM202/KW",
                useClass: "greenTxt mt-1",
                unit: "kw",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1 mt-2 ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MAN SP",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_TOTAL_TPH/SP",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_TOTAL_TPH/UM",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "G.Gate Chute",
              }}
            />
            <BlackContainer
              data={{
                label: "EM11052/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("EM109/ANN1")}`} label="EM109/ANN1" />
            <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("EM109/ANN2")}`} label="EM109/ANN2" />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "E2TT04/UM",
            useClass: "greenTxt mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "E2TT05/UM",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("E2F01/ANN")}`} label="E2F01/ANN" />
          <BlackContainer
            data={{
              label: "EM010/E2P06_ANA",
              useClass: "greenTxt mt-1 ml-4",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 text-center d-flex">
        <div className="containerImage pt-2 text-center">
          <BlackContainer
            data={{
              label: "VRM_HOP_LVL1/UM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MIXED LS HOPPER",
            }}
          />
        </div>
        <div className="containerImage pt-2 text-center ">
          <BlackContainer
            data={{
              label: "VRM_HOP_LVL2/UM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LS HOPPER",
            }}
          />
        </div>
        <div className="containerImage pt-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ADDITIVE HOPPER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "EA103/SP",
              useClass: "greenTxt",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EA103/TPH_FB",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          {/* <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "RM1_361SG1_EOLS",
                closeLabel: "RM1_361SG1_ECLS",
                healthyLabel: "RM1_361SG1_PH",
              })}`}
              label="RM1_361SG1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "EA104/SP",
              useClass: "greenTxt",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EA104/TPH_FB",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          {/* <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "RM1_361SG1_EOLS",
                closeLabel: "RM1_361SG1_ECLS",
                healthyLabel: "RM1_361SG1_PH",
              })}`}
              label="RM1_361SG1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "EA102/SP",
              useClass: "greenTxt",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EA102/TPH_FB",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          {/* <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "RM1_361SG1_EOLS",
                closeLabel: "RM1_361SG1_ECLS",
                healthyLabel: "RM1_361SG1_PH",
              })}`}
              label="RM1_361SG1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div> */}
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex text-center">
        <div className="mx-auto">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("EA103/M")}`,
              firstCircleLabel: "EA103/M",
              firstCircleText: "M",
            }}
            text={{ useClass: "text-dark", label: "EA103" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleLabel: "",
              secondCircleText: "",
            }}
          />
          <BlackContainer
            data={{
              label: "EA103/RPM_FB",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mx-auto">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("EA104/M")}`,
              firstCircleLabel: "EA104/M",
              firstCircleText: "M",
            }}
            text={{ useClass: "text-dark", label: "EA104" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleLabel: "SM110/M",
              secondCircleText: "",
            }}
          />
          <BlackContainer
            data={{
              label: "EA104/RPM_FB",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mx-auto">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useColorStatus("EA102/M")}`,
              firstCircleLabel: "EA102/M",
              firstCircleText: "M",
            }}
            text={{ useClass: "text-dark", label: "EA102" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleLabel: "SM110/M",
              secondCircleText: "",
            }}
          />
          <BlackContainer
            data={{
              label: "EA102/RPM_FB",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("EA105/M")}`,
          firstCircleLabel: "EA105/M",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark MX-AUTO", label: "EM105" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleLabel: "SM110/M",
          secondCircleText: "",
        }}
      />
      <div className="position-absolute single-text-6 d-flex text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EA108",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("EA108/EA10802")} `} label="EA108/EA10802" />
        </div>
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EA106",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("EA106/M")} `} label="EA106/M" />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1  ${useColorStatus("MAGNET_ON/MAGNET_ON")} `} label="MAGNET_ON/MAGNET_ON" />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <MotorCircleDigitalTag className={`grn-gry-img digital-tag ${useImgColorStatus("EM109/V")} `} label="EM109/V" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM109",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("EM133/EM133")}`,
          firstCircleLabel: "EM133/EM133",
          firstCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-9 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HTDRAULIC PUMP",
            }}
          />
          <div className="box-1 p-2 d-flex text-center">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "136",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-3 ${useColorStatus("EM136/EM136")}`} label="EM136/EM136" text="M" />
            </div>
            <div className="ml-3">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "137",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-3 ${useColorStatus("EM137/EM137")}`} label="EM137/EM137" text="M" />
            </div>
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LP PUMP",
            }}
          />
          <div className="box-1 p-2">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "139",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-3 ${useColorStatus("EM139/EM139")}`} label="EM139/EM139" text="M" />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HP PUMP",
          }}
        />
        <div className="box-1 p-2 d-flex mt-1 text-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "141",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-3 ${useColorStatus("EM141/EM141")}`} label="EM141/EM141" text="M" />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "142",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-3 ${useColorStatus("EM142/EM142")}`} label="EM142/EM142" text="M" />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "143",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-3 ${useColorStatus("EM143/EM143")}`} label="EM143/EM143" text="M" />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "144",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag mt-2 p-3 ${useColorStatus("EM144/M")}`} label="EM144/M" text="M" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "THRUST PAD PRESSURE",
            }}
          />
          <div className="box-1 p-2">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "Pressure1",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2P01ANA/UM",
                  useClass: "greenTxt mt-1 ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "Pressure4",
                }}
              />
              <BlackContainer
                data={{
                  label: "E1P04ANA/UM",
                  useClass: "greenTxt mt-1 ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "Pressure10",
                }}
              />
              <BlackContainer
                data={{
                  label: "E1P10ANA/UM",
                  useClass: "greenTxt mt-1 ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ROLLER LEVEL",
            }}
          />
          <div className="box-1 p-2">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "BE Side1",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2L02_ANA/UM",
                  useClass: "greenTxt mt-1 ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "BE Side2",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2L03_ANA/UM",
                  useClass: "greenTxt mt-1 ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "Mot.Side3",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2L051/UM",
                  useClass: "greenTxt mt-1 ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "Mot.Side4",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2L041/UM",
                  useClass: "greenTxt mt-1 ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DYN SEPR",
          }}
        />
        <div className="d-flex gap-1">
          <div>
            <div className="d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "E20M2",
                  }}
                />
                <div className="img-66 mt-1 d-flex justify-content-center align-items-center">
                  <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E20M2/M")}`} label="E20M2/M" text="M" />
                </div>
              </div>
              <div className="ml-3">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "E20M3",
                  }}
                />
                <div className="img-66 mt-1 d-flex justify-content-center align-items-center">
                  <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E20M3/M")}`} label="E20M3/M" text="M" />
                </div>
              </div>
            </div>
            <BlackContainer
              data={{
                label: "EM129/E1E0151",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "EM129/E2T11",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "EM129/E1T551",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "EM129/E1T451",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "EM129/EM129BRG",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "EM129/RPM_SP",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "EM129/RPM_FB",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "EM129/AMP",
                useClass: "greenTxt mt-1",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13 bigContainer text-center">
        <BlackContainer
          data={{
            label: "E1P0551/UM",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM010/KW",
            useClass: "greenTxt mt-4",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM010/E19P03A",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM010/E19PO4A",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM010/E19P5A",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <div className="img-86 img-1 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag className={`dot mt-2 digital-tag  ${useColorStatus("EM124/EM124")}`} label="EM124/EM124" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EM124",
            }}
          />
        </div>
        <div>
          <div className="img-86 d-flex justify-content-center align-items-center ml-3">
            <MotorCircleDigitalTag className={`dot mt-2 digital-tag  ${useColorStatus("EM010/EM010")}`} label="EM010/EM010" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "EM010",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM129",
          }}
        />
        <div className="img-86 img-1 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`dot mt-2 digital-tag  ${useColorStatus("EM129/EM129BRG")}`} label="EM129/EM129BRG" />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "EM110",
          }}
        />
        <MotorCircleDigitalTag className={`dot mt-2 p-3 digital-tag  ${useColorStatus("EM110/M")}`} label="EM110/M" text="M" />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <MotorCircleDigitalTag className={`grn-gry-img digital-tag ${useImgColorStatus("EM146/V")} `} label="EM146/V" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "EM146",
          }}
        />
      </div>
      <div className=" position-absolute single-text-18 text-center">
        <div className="containerImage pt-2 text-center">
          <MotorCircleDigitalTag className={`dot digital-tag p-3 ${useColorStatus("E161H15/E161H15")}`} label="E161H15/E161H15" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "EMPTYING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MILL",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "amp",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EM133",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`dot digital-tag   ${useColorStatus("EM134/EM134")}`} label="EM134/EM134" text="M" />
      </div>
      <BlackContainer
        data={{
          label: "GMBFKW/UM",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-21 " />
      <div className="position-absolute single-text-22 d-flex flex-column">
        <div className="d-flex gap-1">
          <div>
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM126/EM126")}`} label="EM126/EM126" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "EM126",
              }}
            />
          </div>
          <div>
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM126A/M")}`} label="EM126A/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "EM126A",
              }}
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div>
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM315/M")}`} label="EM315/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "EM315",
              }}
            />
          </div>
          <div>
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM127/EM127")}`} label="EM127/EM127" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "EM127",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-23 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SI.Air BE Side",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P0751/E1P0751",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SI.Air Mot. Side",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P0851/E1P0851",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="box-1 p-1 d-flex">
          <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("EM155/M")}`} isClickable={true} tagLabel="EM155/M" />
          <BlackContainer
            data={{
              label: "EM155/EM15551",
              useClass: "greenTxt   mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Blending Silo Top",
            }}
          />
          <div className="box-1 p-1 mt-1">
            <BlackContainer
              data={{
                label: "GMVSDCU/UM",
                useClass: "greenTxt   mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "FM10651/UM",
                useClass: "greenTxt   mt-1",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Preheater Fan",
            }}
          />
          <div className="box-1 p-1 mt-1">
            <BlackContainer
              data={{
                label: "KM011/RPM_SP",
                useClass: "greenTxt   mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM011/RPM_FB",
                useClass: "greenTxt   mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM011/KW",
                useClass: "greenTxt   mt-1",
                unit: "kw",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-25">
        <div className="squareplustri mt-2 pt-3 d-flex flex-column">
          <div className="d-flex gap-1 justify-content-center">
            <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("BH/TP")} `} label="BH/TP" />
          </div>
          <div className="d-flex gap-1 justify-content-center">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H01",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H1/ANN")}`} label="EA161H1/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H02",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("E161H2/ANN")}`} label="E161H2/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H03",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H3/ANN")}`} label="EA161H3/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H04",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H4/ANN")}`} label="EA161H4/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H05",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H5/ANN")}`} label="EA161H5/ANN" />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "H06",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-2 ${useColorStatus("EA161H6/ANN")}`} label="EA161H6/ANN" />
            </div>
          </div>
          <div className="circle-1 d-flex flex-column">
            <div className="d-flex gap-2">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM156",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1   digital-tag ${useFanImgTagsColorStatus("EBM156/M")}`} label="EBM156/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM167",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("EBM167/M")}`} label="EBM167/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM128",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM128/M")}`} label="HBM128/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM129",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM129/M")}`} label="HBM129/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM131",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("HBM131/M")}`} label="HBM131/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM177",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img  ml-1 digital-tag ${useFanImgTagsColorStatus("EBM177/M")}`} label="EBM177/M" />
              </div>
            </div>
            <div className="d-flex gap-2">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM157",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("EBM157/M")}`} label="EBM157/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM168",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1 digital-tag ${useFanImgTagsColorStatus("EBM168/M")}`} label="EBM168/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM158",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM158/M")}`} label="HBM158/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "HBM130",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM130/M")}`} label="HBM130/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1 ",
                    label: "HBM132",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("HBM132/M")}`} label="HBM132/M" />
              </div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "EEM177A",
                  }}
                />
                <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("EBM177_A/M")}`} label="EBM177_A/M" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-26 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "BH/TT04_01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/TT-1_01",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/PT02_01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "BH/PT01_01",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/CAL_DP",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/PDT01_01",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WINDING TEMP",
            }}
          />
          <div className="box-1 p-1 mt-1">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ml-2",
                  label: "TZ1",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM010WD1TZ1/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-4",
                  label: "TZ3",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM010WD3TZ3/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "TZ2",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM010WD2TZ2/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-4",
                  label: "TZ4",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM010WD4TZ4/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BEARING TEMP",
            }}
          />
          <div className="box-1 p-1 mt-1">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ml-2",
                  label: "DE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM010BRTZ5/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "NDE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM010BRTZ6/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ROLLER TEMP",
            }}
          />
          <div className="box-1 p-1 mt-1">
            <div className="d-flex">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  ml-2",
                    label: "BE Outside RLR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "E2T07/E2T07",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="ml-4">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  ml-2",
                    label: "Mot. Inside RLR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "E2T09/E2T09",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
            <div className="d-flex mt-2">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  ml-2",
                    label: "BE Inside RLR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "E2T08/E2T08",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="ml-4">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  ml-2",
                    label: "Mot. Outside RLR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "E2T10/UM",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center ml-5">
          <div className="box-1 p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Are. BkPrs.",
              }}
            />
            <BlackContainer
              data={{
                label: "F1P0351/UM",
                useClass: "greenTxt mt-1",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Klin Feed TPH",
              }}
            />
            <BlackContainer
              data={{
                label: "HA110.HA11055A",
                useClass: "greenTxt mt-1",
                unit: "tph",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "K1T0251/UM",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Blending Silo",
              }}
            />
            <BlackContainer
              data={{
                label: "G1L0251/UM",
                useClass: "greenTxt mt-1",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Mill l/L Prs.",
          }}
        />
        <BlackContainer
          data={{
            label: "E1P0651/UM",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Mill l/L TT",
          }}
        />
        <BlackContainer
          data={{
            label: "E1T0151/UM1",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-29 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAW MILL FAN",
          }}
        />
        <div className="box-1 p-1 d-flex gap-1 mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "WINDING TEMP",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ1",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD1TZ1/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ2",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD2TZ2/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ3",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WD3TZ3/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TZ4",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169WT4TZ4/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "MOT.BRG TEMP",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169MT1TZ5/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "NDE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169MT02TZ6/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FAN BRG TEMP",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169FN1TZ7/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "NDE",
                }}
              />
              <BlackContainer
                data={{
                  label: "EM169FN2TZ8/UM",
                  useClass: "greenTxt ml-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-30 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SIGNAL STATUS",
          }}
        />
        <div className="box-1 p-1 d-flex gap-1 mt-2">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR Initial",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/GRRINTI")}`} label="EM169/GRRINTI" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR On",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/EM16914")}`} label="EM169/EM16914" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR Final",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/EM16910")}`} label="EM169/EM16910" />
            </div>
          </div>
          <div className="ml-3">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR AR1",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/GRRAR1C")}`} label="EM169/GRRAR1C" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GRR BLW OL",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/GRR_BL_OLOAD")}`} label="EM169/GRR_BL_OLOAD" />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DC Coil",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag ml-auto ${useColorStatus("EM169/EM169COIL")}`} label="EM169/EM169COIL" />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-31 d-flex">
        <div>
          <div className="d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("E1L1001/ANN")}`} label="E1L1001/ANN" />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "Low Lvl Proxy",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("E1L1002/ANN")}`} label="E1L1002/ANN" />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "Low Lvl",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1">
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "SCRAP AMPS",
              }}
            />
            <BlackContainer
              data={{
                label: "REC1_AMPS/UM",
                useClass: "greenTxt ml-3",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "BC-5 AMPS",
              }}
            />
            <BlackContainer
              data={{
                label: "EM206/EM20651",
                useClass: "greenTxt ml-3",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "BC-6 AMPS",
              }}
            />
            <BlackContainer
              data={{
                label: "EM207/EM20751",
                useClass: "greenTxt ml-3",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "L-2 BC-4 AMPS",
              }}
            />
            <BlackContainer
              data={{
                label: "EM207/EM40751",
                useClass: "greenTxt ml-3",
                unit: "amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Line-1 REC",
            }}
          />
          <BlackContainer
            data={{
              label: "EM205/REC1SP",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM205/REC1PV",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "BH/TT02_01",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH/PT03_01",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "EM169/RPM_SP",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM169/KW",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM169/VIB",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "EM171/SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM171/POSVAL",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("EM16A/M")}`} label="EM16A/M" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EM164",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "E1T0151/UM1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EM010/E1P0451",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "E1Z09/POS_SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E1Z09/POS_VAL",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "E1T0751/UM",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "VRMOHTL/UM",
              useClass: "greenTxt mt-3",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "E1F11S1/UM",
              useClass: "greenTxt mt-1",
              unit: "LPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM151/M")}`} label="EM151/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "151",
              }}
            />
          </div>
          <div>
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM150/M")}`} label="EM150/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "150",
              }}
            />
          </div>
          <div>
            <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("E1Z09/M")}`} isClickable={true} tagLabel="E1Z09/M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "E1Z09",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VIBRATION",
            }}
          />
          <div className="box-1 p-1">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Pinion Vib",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2V01/E2V0151",
                  useClass: "greenTxt ml-2",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "GB Base Vib",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2V05/UM",
                  useClass: "greenTxt ml-2",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Body Vib",
                }}
              />
              <BlackContainer
                data={{
                  label: "E2V04/E2V04",
                  useClass: "greenTxt ml-2",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("E1Z0451/M")}`} isClickable={true} tagLabel="E1Z0451/M" />

          <div className="box-1 p-1 mt-2">
            <BlackContainer
              data={{
                label: "E1Z0451/POSSP",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "E1Z0451/POSVAL",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM130/EM130")}`} label="EM130/EM130" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "130",
              }}
            />
          </div>
          <div className="d-flex">
            <div className="connector-icon p-1 ml-2 mt-1">
              <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM134/M")}`} label="EM134/M" text="M" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "134",
              }}
            />
          </div>
        </div>
      </div>
      <div className="containerImage position-absolute single-text-37 pt-2 text-center">
        <BlackContainer
          data={{
            label: "E1E0158/UM",
            useClass: "greenTxt",
            unit: "m³/hr",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GCT",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-38"
        firstCircle={{
          firstCircleClass: " grey-color",
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("EM166/M")}`,
          secondCircleLabel: "EM166/M",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-39 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "O/L TT.",
            }}
          />
          <BlackContainer
            data={{
              label: "E1T0851/UM",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "O/L Prs.",
            }}
          />
          <BlackContainer
            data={{
              label: "E1P1251/UM",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EM310",
            }}
          />
          <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("EM310/M")}`} isClickable={true} tagLabel="EM310/M" />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EM174",
            }}
          />
          <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("EM174/M")}`} isClickable={true} tagLabel="EM174/M" />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM172",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("EM172/M")}`} isClickable={true} tagLabel="EM172/M" />
      </div>
      <div className="position-absolute single-text-42 box-1 p-1">
        <BlackContainer
          data={{
            label: "EM310/POS_SP",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EM310/POSVAL",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM173",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("EM173/M")}`} isClickable={true} tagLabel="EM173/M" />
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM171",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-1 ml-2 ${useBorderTagsColorStatus("EM171/M")}`} isClickable={true} tagLabel="EM171/M" />
      </div>
      <div className="d-flex position-absolute single-text-45">
        <div className="connector-icon p-1 ml-2 mt-1">
          <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EM169/EM169")}`} label="EM169/EM169" text="M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM169",
          }}
        />
      </div>
      <div className="position-absolute single-text-46">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag p-1  ${useColorStatus("EBM176/EM176")}`} label="EBM176/EM176" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("MAGNET_ON/MAGNET_ON")}`} label="MAGNET_ON/MAGNET_ON" />
        </div>
        <BlackContainer
          data={{
            label: "EBM176/EBM17651",
            useClass: "greenTxt mt-1",
            unit: "amp",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EBM165",
          }}
        />

        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 mt-3 ${useColorStatus("EBM165/EBM165")}`} label="EBM165/EBM165" text="M" />
        <BlackContainer
          data={{
            label: "EBM165/EBM16551",
            useClass: "greenTxt mt-1",
            unit: "amps",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EBM166",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 mt-3 ${useColorStatus("EBM166/M")}`} label="EBM166/M" text="M" />
        <BlackContainer
          data={{
            label: "EBM166/EBM16651",
            useClass: "greenTxt mt-1",
            unit: "amps",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EBM175",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 mt-3 ${useColorStatus("EBM175/M")}`} label="EBM175/M" text="M" />
        <BlackContainer
          data={{
            label: "EBM175/EBM17551",
            useClass: "greenTxt mt-1",
            unit: "amps",
            unitColor: "unitColor",
          }}
        />
        {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EM176",
          }}
        /> */}
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "EM124/UM",
              useClass: "greenTxt mt-1",
              unit: "amp",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Clutch",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag p-1 ml-2 ${useColorStatus("E2Z08/ANN")}`} label="E2Z08/ANN" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "3/SET PRESSURE",
            }}
          />
          <BlackContainer
            data={{
              label: "RML01_G03/SET_PRESSURE",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-48",
          label: "TO CALIB",
        }}
      />
      <div className="chimni-red position-absolute single-text-49"></div>
      <div className="position-absolute single-text-50">
      <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "EBM176",
            }}
          />
            <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-5",
              label: "BOOT",
            }}
          />
      </div>

      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr  position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-13"></div>
      <div className="yellowline-Vr  position-absolute line-14"></div>
      <div className="yellowline-Hr  position-absolute line-15"></div>
      <div className="yellowline-Hr  position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Vr  position-absolute line-24"></div>
      <div className="yellowline-Hr  position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-26"></div>
      <div className="yellowline-Hr  position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
    </div>
  );
};
