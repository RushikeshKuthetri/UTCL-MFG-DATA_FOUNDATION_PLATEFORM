import * as tagsData from "../../../data/wanakbori/coalmill/wanakboriKMTextcolumn";
import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  TopLeftBox,
  SingleText,
  BlueContainerWithDynamicBorder,
} from "../../index";
export const CoalMillWanakbori = () => {
  return (
    <div className="CoalMillWanakbori w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr upArrow position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Vr position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>
      <div className="yellowline-Vr position-absolute line-30"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-33"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-34"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-35"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Hr position-absolute line-48"></div>
      <div className="yellowline-Hr position-absolute line-49"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-50"></div>
      <div className="yellowline-Vr upArrow position-absolute line-51"></div>

      <div className="squareplustri position-absolute text-center single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mr-2",
            label: "RAW COAL HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mr-2",
            label: "L91HP2",
          }}
        />
        <BlackContainer
          data={{
            label: "L91HP2_LT01",
            useClass: "greenTxt",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-2"></div>
      <div className="squareplustri position-absolute text-center single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mr-2",
            label: "GRIT SEPERATOR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mr-2",
            label: "L41GS1",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41PP1",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-5">
        <div className="d-flex justify-content-center mt-2">
          <BlackContainer
            data={{
              label: "L41BF1_DP01",
              useClass: "greenTxt mr-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          {/* d59 */}
          <div className={`dot ${useColorStatus("L41BF1_LS01")}`}>L</div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "L41BF1",
            }}
          />
          {/* d60 */}
          <div className={`square mr-2 ${useColorStatus("L41BF1_BF_SEQ")}`} />
          <BlackContainer
            data={{
              label: "L41BF1_TEMP1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="squareplustri text-center position-absolute single-text-6">
        <PipeWithCircles
          parentDivClass="d-flex justify-content-between w-100"
          // d52
          firstCircle={{
            firstCircleClass: `dot ${useColorStatus("L41BF3_PS01")}`,
            firstCircleText: "P",
          }}
          // d53
          secondCircle={{
            secondCircleClass: `dot ${useColorStatus("L41BF3_LS01")}`,
            secondCircleText: "L",
          }}
        />
        <BlackContainer
          data={{
            label: "L41BF3_DP01",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41BF3",
          }}
        />
        <BlackContainer
          data={{
            label: "L41BF3_TE2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        list={tagsData.wanakboriKMTextColumn10}
        text="FINE COAL BIN"
        text2Class="text-dark mt-1"
        useClass="squareplustri text-center position-absolute single-text-7"
      />
      <div className="asset-67 text-center position-absolute single-text-8 pt-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-DARK text-center w-50",
            label: "COAL MILL W/F STOPPED IF MILL DP >=150",
          }}
        />
      </div>
      <div className="triangle-down position-absolute single-text-9"></div>
      <div className="brick-cooler-img position-absolute single-text-10"></div>
      <div className="position-absolute single-text-11">
        <div className="pole-shape">
          {/* d41 */}
          <span
            className={`dot mt-3 position-absolute ${useColorStatus("L41MD1")}`}
          >
            M
          </span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-center",
            label: "L41MD1",
          }}
        />
      </div>

      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-3",
            label: "L41BD5",
          }}
        />
        {/* d70 */}
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("L41BD5")}`}
        />
      </div>
      <div className="position-absolute single-text-13">
        {/* d15 */}
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("L41BD6")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2 ml-2",
            label: "L41BD6",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        {/* d12 */}
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("L41BD4")}`}
        />{" "}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2 ml-2",
            label: "L41BD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        {/* d6 */}
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("L41DA3")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2 ml-4",
            label: "L41DA3",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L42DA3",
          }}
        />
        {/* d9 */}
        <BlueContainerWithDynamicBorder
          useClass={`mt-2 ml-5 ${useBorderTagsColorStatus("L42DA5")}`}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-17">
        <div className="grayDot"></div>
        {/* d23 */}
        <div className={`dot ${useColorStatus("L41WF1_BDS")}`}>B</div>
        {/* d22 */}
        <div className={`dot ${useColorStatus("L41WF1")}`}>M</div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        // d24
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("L41SC1")}`,
          firstCircleText: "M",
        }}
      />
      <div className="d-flex position-absolute single-text-19">
        <div className="justify-content-center align-items-center tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "IV",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-20">
        <div className="justify-content-center align-items-center tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "IV",
          }}
        />
      </div>

      <div className="d-flex position-absolute single-text-21">
        <div className="justify-content-center align-items-center tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "IV",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-22">
        <div className="justify-content-center align-items-center tringle-item">
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "IV",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <div className="justify-content-center align-items-center tringle-item">
          {/* d46 */}
          <i
            className={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
              "L41PP1_SOV"
            )} `}
          ></i>
          <i
            className={`${useCaretColorStatus(
              "L41PP1_SOV"
            )} fa-solid fa-caret-up d-block`}
          ></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "L41PP1_SOV",
          }}
        />
      </div>
      <TopLeftBox
        parentDivClass="CGRnBox position-absolute single-text-24"
        useClass="d-flex mt-2"
        list={tagsData.wanakboriKMTextColumn1}
      />
      <div className="CGRnBox position-absolute single-text-25">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "FINE C/BIN CO ANALYZER",
            }}
          />
          <BlackContainer
            data={{
              label: "L41CB1_CO_DT01",
              useClass: "greenTxt",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextColumn
        list={tagsData.wanakboriKMTextColumn2}
        text="FROM HAG 1"
        text2Class="text-white"
        useClass="position-absolute single-text-26"
      />
      <TextColumn
        list={tagsData.wanakboriKMTextColumn3}
        useClass="position-absolute single-text-27"
      />
      <TextColumn
        list={tagsData.wanakboriKMTextColumn4}
        useClass="position-absolute single-text-28"
      />
      <TextColumn
        list={tagsData.wanakboriKMTextColumn6}
        useClass="position-absolute single-text-29"
      />
      <TextColumn
        list={tagsData.wanakboriKMTextColumn5}
        useClass="position-absolute single-text-30"
      />
      <SingleText
        useClass="position-absolute single-text-31"
        yellowText="MILL I/L DRAFT"
        textClass="text-white mt-1"
        data={{
          blackTextLabel: "L41CM1_PT01",
          blackTextClass: "greenTxt",
          unit: "mmWc",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-32"
        yellowText="MILL I/L TEMP."
        textClass="text-white mt-1"
        data={{
          blackTextLabel: "L41CM_I/L_TEMP",
          blackTextClass: "greenTxt",
          unit: "°C",
        }}
      />
      <div className="CGRnBox position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white my-1",
            label: "INLET LUBRICATION",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "L41GB1_PT01",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          {/* d32 */}
          <div className={`dot ml-1 ${useColorStatus("L41GB1_FS01")}`}>F</div>
          <BlackContainer
            data={{
              label: "L41GB1_PT02",
              useClass: "greenTxt ml-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <div className="text-center">
            {/* d27 */}
            <div className={`line-circle ${useColorStatus("L41LP1")}`} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "L41LP1",
              }}
            />
          </div>
          {/* d33 */}
          <div className={`dot ${useColorStatus("L41GB1_DS01")}`}>D</div>
          <div className="text-center">
            {/* d28 */}
            <div className={`line-circle ${useColorStatus("L41HP1")}`} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "L41HP1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white my-1",
            label: "OUTLET LUBRICATION",
          }}
        />
        <div className="d-flex">
          {/* d35 */}
          <BlackContainer
            data={{
              label: "L41GB2_PT01",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          {/* d36 */}
          <div className={`dot ml-1 ${useColorStatus("L41GB2_FS01")}`}>F</div>
          {/* d38 */}
          <BlackContainer
            data={{
              label: "L41GB2_PT02",
              useClass: "greenTxt ml-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <div className="text-center">
            {/* d29 */}
            <div className={`line-circle ${useColorStatus("L41LP2")}`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "L41LP2",
              }}
            />
          </div>
          {/* d37 */}
          <div className={`dot ${useColorStatus("L41GB2_DS01")}`}>D</div>
          <div className="text-center">
            {/* d30 */}
            <div className={`line-circle ${useColorStatus("L41HP2")}`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "L41HP2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "HAG - 2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "BEARING LUBRICATION",
          }}
        />
      </div>
      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "L41CM1_PT02",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "MILL O/L DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "L41CM1_TE3",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "NEW O/L DRAFT",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        {/* d25 */}
        <div className={`dot mx-auto ${useColorStatus("L41RD1")}`}>X</div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "RUPTURE DISK",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        {/* d64 */}
        <div
          className={`square mx-auto ${useColorStatus(
            "L41BF1_MANUAL_PURGING"
          )}`}
        >
          S
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "B/F MANUAL PURGING",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "L41BF1_I/L TEMP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "L41BF1_PT01",
            useClass: "greenTxt mt-5",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "B/F I/L DRAFT",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "L41BF1_PT",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "Kg/cm2",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={tagsData.wanakboriKMTextColumn8}
        useClass="position-absolute single-text-41"
      />
      <div className="text-center position-absolute single-text-42">
        {/* d65 */}
        <div className={`line-circle ${useColorStatus("L41FN1")}`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L41FN1",
          }}
        />
      </div>
      <TextColumn
        list={tagsData.wanakboriKMTextColumn9}
        useClass="position-absolute single-text-43"
      />
      <BlackContainer
        data={{
          label: "L41ST1_DT01",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "mg/nm3",
          unitColor: "unitColor",
        }}
      />
      <div className="CGRnBox position-absolute single-text-45">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "L41SC1 BF TEMP HI",
            }}
          />
          {/* d74 */}
          <div className={`dot ml-3 ${useColorStatus("L41SCN1_BFTH")}`}>T</div>
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "L41SC1 BF TEMP HI HI",
            }}
          />
          {/* d75 */}
          <div className={`dot ml-3 ${useColorStatus("L41SCN1_BFTHH")}`}>
            T
          </div>{" "}
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "L41SC1 BF FLOOD ON FB",
            }}
          />
          {/* d76 */}
          <div className={`dot ml-3 ${useColorStatus("L41SCN1_FLR1")}`}>
            T
          </div>{" "}
        </div>
      </div>

      <div className="text-center position-absolute single-text-46">
        {/* d54 */}
        <div className={`line-circle ${useColorStatus("L41FN3")}`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "L41FN3",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "L41SCN1_TT02",
          useClass: "greenTxt position-absolute single-text-47",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="CGRnBox position-absolute single-text-48">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "L41SC1 CB TEMP HI",
            }}
          />
          {/* d78 */}
          <div className={`dot ml-3 ${useColorStatus("L41SCN1_CBTH")}`}>T</div>
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "L41SC1 CB TEMP HI",
            }}
          />
          {/* d79 */}
          <div className={`dot ml-3 ${useColorStatus("L41SCN1_CBTHH")}`}>
            T
          </div>{" "}
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "L41SC1 CB FLOOD ON FB",
            }}
          />
          {/* d80 */}
          <div className={`dot ml-3 ${useColorStatus("L41SCN1_FLR2")}`}>
            T
          </div>{" "}
        </div>
      </div>
      <div className="d-flex position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "NITROGEN PRESS",
          }}
        />
        <BlackContainer
          data={{
            label: "L41_N2_PT01",
            useClass: "greenTxt ml-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="CGRnBox text-center position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white my-1",
            label: "GREASE LUBRICATION SYSTEM",
          }}
        />
        <div className="d-flex">
          <div className="mr-2">
            <div className="d-flex justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1 HLTHY",
                }}
              />
              {/* d85 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_MK")}`}>X</div>
            </div>
            <div className="d-flex mt-01 justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1 LOW LVL",
                }}
              />
              {/* d86 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_LS01")}`}>
                X
              </div>
            </div>
            <div className="d-flex mt-01 justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1 AIR PR HLTHY",
                }}
              />
              {/* d87 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_PS01")}`}>
                X
              </div>
            </div>
            <div className="d-flex mt-01 justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1 NOZZLE FLT",
                }}
              />
              {/* d88 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_NMFT")}`}>
                X
              </div>
            </div>
            <div className="d-flex mt-01 justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1 SPRAY FLT",
                }}
              />
              {/* d89 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_SP_FLT")}`}>
                X
              </div>
            </div>
          </div>
          <div className="text-center mr-2">
            {/* d84 */}
            <div className={`line-circle ${useColorStatus("L41GL1")}`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "L41GL1",
              }}
            />
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1_SPRAY NZ-1",
                }}
              />
              {/* d90 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_SP_NZ1")}`}>
                X
              </div>
            </div>
            <div className="d-flex mt-01 justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1_SPRAY NZ-2",
                }}
              />
              {/* d91 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_SP_NZ2")}`}>
                X
              </div>
            </div>
            <div className="d-flex mt-01 justify-content-between">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "L41GL1_SPRAY NZ-3",
                }}
              />
              {/* d92 */}
              <div className={`dot ml-3 ${useColorStatus("L41GL1_SP_NZ3")}`}>
                X
              </div>
            </div>
          </div>
        </div>
      </div>
      <TextColumn
        list={tagsData.wanakboriKMTextColumn7}
        useClass="position-absolute single-text-51"
      />
      {/* d57 */}
      <div
        className={`${useColorStatus(
          "L41BF1_I/L_GATE"
        )} greenDot position-absolute single-text-52`}
      >
        X
      </div>
      {/* d58 */}
      <div
        className={`${useColorStatus(
          "L41BF1_O/L_GATE"
        )} greenDot position-absolute single-text-53`}
      >
        X
      </div>
      {/* d47 */}
      <div
        className={`greenDot position-absolute single-text-54 ${useColorStatus(
          "L41BL1_PS01"
        )}`}
      >
        P
      </div>
      {/* d48 */}
      <div
        className={`greenDot position-absolute single-text-55 ${useColorStatus(
          "L41BL1_PS02"
        )}`}
      >
        P
      </div>
      <div className="d-flex position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-3",
            label: "L41PP1",
          }}
        />
        {/* d45 */}
        <div className={`dot ${useColorStatus("L41PP1")}`}>X</div>
      </div>
      <div className="position-absolute single-text-57">
        {/* d44 */}
        <div className={`line-circle ${useColorStatus("L41BL1")}`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-3",
            label: "L41BL1",
          }}
        />
      </div>
      {/* <div className="d-flex position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-3",
            label: "L41RA5",
          }}
        />
        <div className="greenDot"></div>
      </div> */}
      <div className="d-flex position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-3",
            label: "L41RA4",
          }}
        />
        {/* d49 */}
        <div
          className={`circle-img ${useFanImgTagsColorStatus("L41RA4")}`}
        ></div>
      </div>
      {/* <div className="d-flex position-absolute single-text-60">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-3",
            label: "L41RA1",
          }}
        />
        <div className="greenDot"></div>
      </div> */}
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-61",
          label: "L41SC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-62",
          label: "L41HP1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-63",
          label: "L41GB1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-64",
          label: "EXPLOSION VENT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-65",
          label: "To MILL INLET",
        }}
      />
      {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-66",
          label: "NITROGEN CYL. WEIGHT",
        }}
      /> */}
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-67",
          label: "L41WF1",
        }}
      />

      <div className="img-79 position-absolute single-text-68"></div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-69",
          label: "FRESH AIR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-70",
          label: "VIBRO FEEDER",
        }}
      />
    </div>
  );
};
