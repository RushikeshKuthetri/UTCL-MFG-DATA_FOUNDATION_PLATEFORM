import * as tagsdata from "../../../data/wanakbori/HotAirGenerator/HotAirGenerator-2/hotAirGenerator2Textcolumn";
import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../utils";
import {
  BlackContainer,
  TextColumn,
  TextContainerWithWrapWord,
  PipeWithCircles,
  TopLeftBox,
  BlueContainerWithDynamicBorder,
} from "../../index";

export const HotAirGenerator2 = () => {
  return (
    <div className="HotAirGenerator1WanakboriPage HotAirGenerator2WanakboriPage w-100 h-100 position-relative ">
      <div className="yellowline-Vr  position-absolute pipe-1"></div>
      <div className="yellowline-Hr  position-absolute pipe-2"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-3"></div>
      <div className="yellowline-Hr  position-absolute pipe-4"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-5"></div>
      <div className=" position-absolute pipe-6"></div>
      <div className="yellowline-Hr  position-absolute pipe-7"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-8"></div>
      <div className="yellowline-Hr  position-absolute pipe-9"></div>
      <div className="yellowline-Hr rightarrow  position-absolute pipe-10"></div>
      <div className="yellowline-Hr  position-absolute pipe-11"></div>
      <div className="yellowline-Hr  position-absolute pipe-12"></div>
      <div className="yellowline-Hr  position-absolute pipe-13"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-14"></div>
      <div className="yellowline-Hr  position-absolute pipe-15"></div>
      <div className="yellowline-Vr  position-absolute pipe-16"></div>
      <div className="yellowline-Vr  position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr  position-absolute pipe-20"></div>
      <div className="yellowline-Vr  position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-22"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr  position-absolute pipe-24"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-25"></div>
      <div className="yellowline-Hr  position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>

      <div className="asset-72  position-absolute single-text-1"></div>
      <div className="  position-absolute single-text-2"></div>
      <div className="  position-absolute single-text-3"></div>
      <div className=" asset-67 position-absolute single-text-4"></div>
      <div className=" squareplustri position-absolute single-text-5"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "L41WF3" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus("L41WF3")}`,
          secondCircleText: "M",
        }}
      />
      <div className="hpipecircle position-absolute single-text-7 "></div>
      <div className="position-absolute single-text-8">
        <BlueContainerWithDynamicBorder useClass={`grey-border`} />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "SBF",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L42DA2",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`ml-1 ${useBorderTagsColorStatus("L42DA2")}`}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("L42DA3")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-1",
            label: "L42DA3",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L42DA4",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`mt-2 ${useBorderTagsColorStatus("L42DA4")}`}
        />
      </div>
      <div className="position-absolute single-text-12">
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("L42DA5")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "L42DA5",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L42DA6",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`mt-2 ${useBorderTagsColorStatus("L42DA6")}`}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex align-items-center">
        <div
          className={`circle-img ${useFanImgTagsColorStatus("L41RA3")}`}
        ></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-1",
            label: "L41RA3",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L41PG2(OIL)",
          }}
        />
        <div className="d-flex tringle-item mt-1">
          <i
            className={`fa-solid fa-caret-right d-block ${useCaretColorStatus(
              "L42PG2"
            )}`}
          ></i>
          <i
            className={`fa-solid fa-caret-left d-block ${useCaretColorStatus(
              "L42PG2"
            )}`}
          ></i>
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L42DA1",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`ml-1 ${useBorderTagsColorStatus("L42DA1")}`}
        />
      </div>
      <div className="position-absolute single-text-17">
        <div className="d-flex tringle-item">
          <i
            className={`fa-solid fa-caret-right d-block ${useCaretColorStatus(
              "L42PG1"
            )}`}
          ></i>
          <i
            className={`fa-solid fa-caret-left d-block ${useCaretColorStatus(
              "L42PG1"
            )}`}
          ></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "L41PG1(AIR)",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 d-flex flex-column align-items-center">
        <div className="d-flex tringle-item mt-1">
          <i className={`fa-solid fa-caret-right d-block grey-color-caret`}></i>
          <i className={`fa-solid fa-caret-left d-block grey-color-caret`}></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "IV",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex flex-column align-items-center">
        <div className="d-flex tringle-item mt-1">
          <i className={`fa-solid fa-caret-right d-block grey-color-caret`}></i>
          <i className={`fa-solid fa-caret-left d-block grey-color-caret`}></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "IV",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex flex-column align-items-center">
        <div className="d-flex tringle-item mt-1">
          <i className={`fa-solid fa-caret-right d-block grey-color-caret`}></i>
          <i className={`fa-solid fa-caret-left d-block grey-color-caret`}></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "IV",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex flex-column align-items-center">
        <div className="d-flex tringle-item mt-1">
          <i className={`fa-solid fa-caret-right d-block grey-color-caret`}></i>
          <i className={`fa-solid fa-caret-left d-block grey-color-caret`}></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "IV",
          }}
        />
      </div>
      <div className="circle-group  position-absolute single-text-22 text-center">
        <span className={`line-circle ${useColorStatus("L42OP1")}`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "L42OP1",
          }}
        />
      </div>
      <div className="circle-group mr-1 position-absolute single-text-23">
        <span className="green-line-circle"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L42FN1",
          }}
        />
      </div>
      <div className="circle-group mr-1 position-absolute single-text-24">
        <span className="green-line-circle"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L42FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="circle-group text-center">
          <span className={`line-circle ${useColorStatus("L42BL1")}`}></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "L42BL1",
            }}
          />
        </div>
      </div>
      <div
        className={`dot ${useColorStatus(
          "L42PP1"
        )} position-absolute single-text-26`}
      >
        M
      </div>
      <div
        className={`dot ${useColorStatus(
          "L41AG1"
        )} position-absolute single-text-27`}
      >
        M
      </div>
      <div
        className={`dot ${useColorStatus(
          "L41AG2"
        )} position-absolute single-text-28`}
      >
        M
      </div>
      <div
        className={`dot ${useColorStatus(
          "L41AG3"
        )} position-absolute single-text-29`}
      >
        M
      </div>
      <div
        className={`dot ${useColorStatus(
          "L41AG4"
        )} position-absolute single-text-30`}
      >
        M
      </div>
      <TopLeftBox
        parentDivClass="CGRnBox position-absolute single-text-31"
        useClass="d-flex mt-2 gap"
        list={tagsdata.hotAirGenerator2Textcolumn8}
        headText={{
          class: "text-white mx-auto p-1",
          text: "L42FN2 DA FAN TEMP",
        }}
      />
      <div className="position-absolute single-text-32">
        <table>
          <tr>
            <th colspan="2">HAG-02</th>
          </tr>
          <tr>
            <td>HAG-02 BURNER HLY WITH OIL FIRING</td>
            <td>
              <div className={`dot ${useColorStatus("L42HAG2_BUR_HLY")}`}>
                X
              </div>
            </td>
          </tr>
          <tr>
            <td>HAG-02 E/STOP HLY</td>
            <td>
              <div className={`dot ${useColorStatus("L42HAG2_E/S")}`}>X</div>
            </td>
          </tr>
          <tr>
            <td>HAG-02 AIR PR. HLY</td>
            <td>
              <div className={`dot ${useColorStatus("L42PS1")}`}>P</div>
            </td>
          </tr>
          <tr>
            <td>HAG-02 OIL PR. HLY</td>
            <td>
              <div className={`dot ${useColorStatus("L42PS2")}`}>P</div>
            </td>
          </tr>
          <tr>
            <td>CPD MAGNET OPEN LIMIT</td>
            <td>
              <div className={`dot ${useColorStatus("L42DA1_MAGNET_OPEN")}`}>
                X
              </div>
            </td>
          </tr>
          <tr>
            <td>CPD MAGNET CLOSE LIMIT</td>
            <td>
              <div className={`dot ${useColorStatus("L42DA1_MAGNET_CLOSE")}`}>
                X
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="position-absolute single-text-33">
        <table>
          <tr>
            <th colspan="2">HAG-02 LIGHT UP (PRE CONDITION)</th>
          </tr>
          <tr>
            <td>BAG HOUSE FAN RUN</td>
            <td>
              <div className={`dot ${useColorStatus("L42HAG2_ID_FAN_RUN")}`}>
                X
              </div>
            </td>
          </tr>
          <tr>
            <td>CA FAN RUN</td>
            <td>
              <div className={`dot ${useColorStatus("L42HAG2_FN1_RUN")}`}>
                X
              </div>
            </td>
          </tr>
          <tr>
            <td>DA FAN RUN</td>
            <td>
              <div className={`dot ${useColorStatus("L42HAG2_FN2_RUN")}`}>
                X
              </div>
            </td>
          </tr>
          <tr>
            <td>OIL PUMP HLY</td>
            <td>
              <div className={`dot ${useColorStatus("L42HAG2_OP1_HLY")}`}>
                X
              </div>
            </td>
          </tr>
          <tr>
            <td>HAG-02 AIR PR. HLY</td>
            <td>
              <div className={`dot ${useColorStatus("L42PS1")}`}>P</div>
            </td>
          </tr>
          <tr>
            <td>CPD HLY</td>
            <td>
              <div className={`dot ${useColorStatus("L42HAG2_CPD_HLY")}`}>
                X
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="d-flex position-absolute single-text-34 gap">
        <div className="gap">
          <BlackContainer
            data={{
              label: "L42CF1_PT01",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42FN1_ST01",
              useClass: "greenTxt  mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42FN2_IT01",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="circle-group  mt-1">
            <span className={`line-circle ${useColorStatus("L42FN1")}`}></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1",
                label: "L42FN1(CA FAN)",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "L42FN1_SP_SPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L42FN2_ST01",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42FN2_IT01",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="circle-group mt-1 ">
            <span className={`line-circle ${useColorStatus("L42FN2")}`}></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "L42FN2(CA FAN)",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "L42FN2_SP_SPM",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div
        className={`dot ${useColorStatus(
          "L42PS2"
        )} position-absolute single-text-36`}
      >
        P
      </div>
      <div
        className={`dot ${useColorStatus(
          "L42PS1"
        )} position-absolute single-text-35`}
      >
        P
      </div>
      <div className=" position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L41AG2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "L41AG1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L41AG4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "L41AG3",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black",
            label: "FINE COAL BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black mt-1",
            label: "L41CB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "PUMPING & FILTERING UNIT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-3",
            label: "FUEL OIL PV",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "COMPRESSED",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "AIR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "PUMP",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-42",
          label: "FUEL OIL TANK",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-43",
          label: "FROM L41SC3",
        }}
      />
      {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-44",
          label: "L42PP1-SET POINT",
        }}
      /> */}
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-45",
          label: "FRESH AIR FLAP",
        }}
      />
      <div className="position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ",
            label: "TO COAL MILL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "FOR COAL DRYING",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ",
            label: "COFFEE POT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "DAMPER",
          }}
        />
      </div>
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ",
            label: "TO CEMENT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "MILL-2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-49",
          label: "L42PP1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-50",
          label: "OIL INLET",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-black position-absolute single-text-51",
          label: "L42PP1",
        }}
      />
      <div className="d-flex  align-items-center gap position-absolute single-text-52">
        <div>
          <span className="d-flex gap align-items-center">
            <div className={`dot ${useColorStatus("L42BMS1_UV")}`}>X</div> UV
            SENSOR
          </span>
          <span className="d-flex gap align-items-center">
            <div className={`dot ${useColorStatus("L42BMS1_IR")}`}>X</div> IR
            SENSOR
          </span>
          <BlackContainer
            data={{
              label: "L42HAG2_TT01",
              useClass: "greenTxt mt-1",
              unit: "deg c",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-black mt-1",
              label: "TEMP B/ZONE",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-black mt-1",
              label: "HAG-2",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L42HAG2_PT01",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-black mt-1",
              label: "HAG O/L DRAFT",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HAG2_TT02",
              useClass: "greenTxt ",
              unit: "deg c",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-black mt-1",
              label: "TEMP OUTLET",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "L41CB1_WT01",
          useClass: "greenTxt position-absolute single-text-53",
          unit: "t",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "L41_SC3_ST01",
          useClass: "greenTxt position-absolute single-text-54",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "L42HAG2_FT01",
          useClass: "greenTxt position-absolute single-text-55",
          unit: "lit/h",
          unitColor: "unitColor",
        }}
      />
      {/* <TextColumn
        list={tagsdata.hotAirGenerator2Textcolumn2}
        useClass="position-absolute single-text-56"
      /> */}
      <TextColumn
        list={tagsdata.hotAirGenerator2Textcolumn3}
        useClass="position-absolute single-text-57"
      />

      <TextColumn
        list={tagsdata.hotAirGenerator2Textcolumn1}
        useClass="position-absolute single-text-58"
      />
      <BlackContainer
        data={{
          label: "L41WF3_SPEED",
          useClass: "greenTxt position-absolute single-text-59",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={tagsdata.hotAirGenerator2Textcolumn4}
        useClass="position-absolute single-text-60"
      />
      <TextColumn
        list={tagsdata.hotAirGenerator2Textcolumn6}
        useClass="position-absolute single-text-61"
      />
      <TextColumn
        list={tagsdata.hotAirGenerator2Textcolumn7}
        useClass="position-absolute single-text-62"
      />
      <div
        className={`square ${useColorStatus(
          "L42OP1_SEL-01"
        )} position-absolute single-text-63`}
      >
        S
      </div>
      <TextColumn
        list={tagsdata.hotAirGenerator2Textcolumn5}
        useClass="position-absolute single-text-64"
      />
      <div className="position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "(BEFORE START FK-PUMP, CPD TO BE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "OPEN & MAINTAIN DRAFT-10 mmwc)",
          }}
        />
      </div>
    </div>
  );
};
