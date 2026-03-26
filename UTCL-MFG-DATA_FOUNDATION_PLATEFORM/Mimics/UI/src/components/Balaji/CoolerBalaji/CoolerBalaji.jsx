import {
  TopLeftBox,
  KilnPipe,
  GreenDot,
  BlackContainer,
  TextContainerWithWrapWord,
  TextColumn,
  SingleText,
} from "../../index";
import {
  balajiCoolerTextColumn1,
  balajiCoolerTextColumn10,
  balajiCoolerTextColumn11,
  balajiCoolerTextColumn12,
  balajiCoolerTextColumn13,
  balajiCoolerTextColumn14,
  balajiCoolerTextColumn15,
  balajiCoolerTextColumn16,
  balajiCoolerTextColumn18,
  balajiCoolerTextColumn19,
  balajiCoolerTextColumn2,
  balajiCoolerTextColumn20,
  balajiCoolerTextColumn21,
  balajiCoolerTextColumn22,
  balajiCoolerTextColumn23,
  balajiCoolerTextColumn24,
  balajiCoolerTextColumn3,
  balajiCoolerTextColumn4,
  balajiCoolerTextColumn5,
  balajiCoolerTextColumn6,
  balajiCoolerTextColumn7,
  balajiCoolerTextColumn8,
  balajiCoolerTextColumn9,
} from "../../../data/balaji/Cooler1/balajiCoolerTextColumn";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const CoolerBalaji = () => {
  const dispatch = useDispatch();
  const { balajiPopup } = useSelector((state) => state);
  return (
    <div className="p-1 CoolerBalaji w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="row ml-0 mr-0 h-35">
        <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-1" }} />
        <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-2" }} />
        <KilnPipe data={{ classname: "yellowline-Hr pipe-3" }} />
        <KilnPipe data={{ classname: "yellowline-Hr pipe-4" }} />
        <KilnPipe data={{ classname: "yellowline-Hr pipe-5" }} />
        <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-6" }} />
        <KilnPipe data={{ classname: "yellowline-Hr leftarrow pipe-7" }} />
        <KilnPipe data={{ classname: "yellowline-Vr pipe-8" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-9" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-10" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-11" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-12" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-13" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-14" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-15" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-16" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-17" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-18" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-19" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-20" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-21" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-22" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-23" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-24" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-25" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-26" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-27" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-28" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-29" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-30" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-31" }} />
        <KilnPipe data={{ classname: "yellowline-Vr pipe-32" }} />
        <KilnPipe data={{ classname: "yellowline-Vr pipe-33" }} />
        <KilnPipe data={{ classname: "yellowline-Vr pipe-34" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-35" }} /> 
        <div className="box-1 p-2 position-absolute single-text-22">
          <div className="cgreentext">Crossbar Cooler Temp</div>
          <TopLeftBox
            parentDivClass=""
            useClass="d-flex justify-content-between mt-1"
            list={balajiCoolerTextColumn16}
          />
        </div>
        <TextColumn
          useClass="position-absolute single-text-11"
          list={balajiCoolerTextColumn24}
        />
        <div className="position-absolute single-text-20 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "Clinker Level",
            }}
          />
          <BlackContainer
            data={{
              label: "491SB1_LT01",
              useClass: "greenTxt mt-01",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-01",
              label: "Avg. Tower Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "471CC1_PT01_AVG",
              useClass: "greenTxt mt-01",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox position-absolute single-text-21">
          <div className="d-flex justify-content-between align-items-center bb-1 pl-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt w-50",
                label: "GRR",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt bl-1 w-50",
                label: "VFD",
              }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center bb-1">
            <div className="w-50 p-1">
              <BlackContainer
                data={{
                  label: "471FND_JT01",
                  useClass: "greenTxt",
                  unit: "KW",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="w-50 bl-1 p-1">
              <BlackContainer
                data={{
                  label: "471FND_IT01",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "471FND_ST01",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "471FND_SP01_SPM",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around chamber-img pr-5 position-absolute single-text-23">
          <div className="d-flex flex-column pl-2">
            <p className="pt-2 ml-4 yellowTxt">2</p>
            <BlackContainer
              data={{
                label: "471TR2_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR2_KV",
                useClass: "greenTxt",
                unit: "kV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
          <div className="d-flex flex-column">
            <p className="pt-2 ml-4 yellowTxt">4</p>
            <BlackContainer
              data={{
                label: "471TR4_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR4_KV",
                useClass: "greenTxt",
                unit: "kV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
          <div className="d-flex flex-column">
            <p className="pt-2 ml-4 yellowTxt">6</p>
            <BlackContainer
              data={{
                label: "471TR6_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR6_KV",
                useClass: "greenTxt",
                unit: "kV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
          <div className="d-flex flex-column">
            <p className="pt-2 ml-4 yellowTxt">8</p>
            <BlackContainer
              data={{
                label: "471TR8_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR8_KV",
                useClass: "greenTxt",
                unit: "kV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
          <div className="d-flex flex-column">
            <p className="pt-2 ml-4 yellowTxt">1</p>
            <BlackContainer
              data={{
                label: "471TR1_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR1_KV",
                useClass: "greenTxt",
                unit: "kV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
          <div className="d-flex flex-column">
            <p className="pt-2 ml-4 yellowTxt">3</p>
            <BlackContainer
              data={{
                label: "471TR3_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR3_KV",
                useClass: "greenTxt",
                unit: "kV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
          <div className="d-flex flex-column">
            <p className="pt-2 ml-4 yellowTxt">5</p>
            <BlackContainer
              data={{
                label: "471TR5_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR5_KV",
                useClass: "greenTxt",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
          <div className="d-flex flex-column">
            <p className="pt-2 ml-4 yellowTxt">7</p>
            <BlackContainer
              data={{
                label: "471TR7_IT01",
                useClass: "greenTxt",
                unit: "mA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471TR7_KV",
                useClass: "greenTxt",
                unit: "kV",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column mt-3"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-24",
            label: "471LDD",
          }}
        />
        <BlackContainer
          data={{
            label: "HOOD_DRAFT",
            useClass: "greenTxt single-text-25",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className="CGRnBox position-absolute single-text-26">
          <div className="d-flex justify-content-between align-items-center p-1 bb-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt w-50",
                label: "471FND",
              }}
            />
            <button
              className="btn greenbtn ml-2"
              onClick={() => {
                dispatch({
                  type: "SHOW_BALAJI_POPUP",
                  payload: "coolerPopupD",
                });
              }}
              onTouchStart={() => {
                dispatch({
                  type: "SHOW_BALAJI_POPUP",
                  payload: "coolerPopupD",
                });
              }}
              style={{
                backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
              }}
            >
              TEMP
            </button>
          </div>
          <BlackContainer
            data={{
              label: "471FND_VT01",
              useClass: "greenTxt mx-auto mt-3",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "471FND_VT02",
              useClass: "greenTxt mx-auto mt-01",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "471FND_VT03",
              useClass: "greenTxt mx-auto mt-01",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "471FND_VT04",
              useClass: "greenTxt mx-auto mt-01",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="brick-cooler-img position-absolute single-text-30"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-32",
            label: "TO MVR",
          }}
        />
        <div className="hpipecircle position-absolute single-text-34">
          <span className="grayDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="hpipecircle position-absolute single-text-35">
          <span className="grayDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="hpipecircle position-absolute single-text-36">
          <span className="grayDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="hpipecircle position-absolute single-text-37">
          <span className="grayDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="hpipecircle position-absolute single-text-38">
          <span className="grayDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-40",
            label: "471CV1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-41",
            label: "471CV2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-42",
            label: "471CV3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-43",
            label: "471CV4",
          }}
        />
        <div className="position-absolute single-text-44">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "CHAMBER",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "TRAN RAPPER",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "HEATER",
            }}
          />
        </div>
        <div className="position-absolute single-text-45">
          <BlackContainer
            data={{
              label: "471EP1_PT01",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "471EP1_TT01",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-46">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "H",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-47">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "I",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-48">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "1",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-49">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "2",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-50">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "3",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-51">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "4",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-52">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "5",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-53">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "6",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-54">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "7",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-55">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "8",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-56">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "9",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-57">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "A",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-58">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "B",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-59">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "C",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-60">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "D",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-61">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "E",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-62">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "F",
            }}
          />
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-63">
          <div className="circle-img c-img-1 position-absolute Circle-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "G",
            }}
          />
        </div>
        <div className="circle-group position-absolute single-text-64">
          <span className="green-line-circle"></span>
        </div>
      </div>
      <div className="row ml-0 mr-0 h-15">
        <TextColumn
          useClass="position-absolute single-text-69"
          list={balajiCoolerTextColumn18}
        />
        <TextColumn
          useClass="position-absolute single-text-70"
          list={balajiCoolerTextColumn19}
        />
        <TextColumn
          useClass="position-absolute single-text-71"
          list={balajiCoolerTextColumn20}
        />
        <TextColumn
          useClass="position-absolute single-text-72"
          list={balajiCoolerTextColumn21}
        />
        <div className="position-absolute single-text-73">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "Specific Air Volume",
            }}
          />

          <BlackContainer
            data={{
              label: "COOLER_FLOW_PER_KG",
              useClass: "greenTxt mt-01",
              unit: "m3/kg",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "471WI1_FT01",
              useClass: "greenTxt mt-01",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextColumn
          useClass="position-absolute single-text-74"
          list={balajiCoolerTextColumn22}
        />
        <TextColumn
          useClass="position-absolute single-text-75"
          list={balajiCoolerTextColumn23}
        />
        <div className="position-absolute single-text-76">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "Cooler Hyd Oil Tank Temp.",
            }}
          />
          <BlackContainer
            data={{
              label: "471HY1_TT01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "HRB Oil Tank Temp.",
            }}
          />
          <BlackContainer
            data={{
              label: "471HY2_TT01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <SingleText
          useClass="position-absolute single-text-79"
          yellowTextUp="HRB Clinker Level"
          textClass="yellowTxt"
          data={{
            blackTextLabel: "471HY2_LT01",
            blackTextClass: "greenTxt mt-01",
            unit: "m",
          }}
        />
      </div>
      <div className="row ml-0 mr-0 h-35 big-img-din-padding">
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-13">
          <div className="yellowline-Vr downArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>
          <button
            className="btn greenbtn"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup2",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup2",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-14">
          <div className="yellowline-Vr downArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup4",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup4",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-15">
          <div className="yellowline-Vr downArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup6",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup6",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-16">
          <div className="yellowline-Vr downArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>
          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup8",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopup8",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-17">
          <div className="yellowline-Vr downArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopupA",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopupA",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-18">
          <div className="yellowline-Vr downArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopupC",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "coolerPopupC",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="big-back-img ml-auto mr-auto pt-2 d-flex justify-content-between pl-3 pr-3">
          <div className="d-flex">
            <div>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt w-50",
                    label: "AIR BLASTER 471HY1",
                  }}
                />
              </div>
              <div className="d-flex mt-3">
                <GreenDot data={{ useClass: "mr-2" }} />
                <GreenDot data={{ useClass: "" }} />
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="greenSqure"></div>
              <div className="greenSqure mt-1"></div>
              <div className="greenSqure mt-1"></div>
              <div className="greenSqure mt-1"></div>
              <div className="greenSqure mt-1"></div>
              <div className="greenSqure mt-1"></div>
            </div>
          </div>
          <div className="yellowline-Vr position-absolute pipe-43"></div>
          <TextColumn list={balajiCoolerTextColumn14} />
          <div className="yellowline-Vr position-absolute pipe-44"></div>
          <TextColumn list={balajiCoolerTextColumn13} />
          <div className="yellowline-Vr position-absolute pipe-45"></div>
          <TextColumn list={balajiCoolerTextColumn12} />
          <div className="yellowline-Vr position-absolute pipe-46"></div>
          <TextColumn list={balajiCoolerTextColumn11} />
          <div className="yellowline-Vr position-absolute pipe-47"></div>
          <TextColumn list={balajiCoolerTextColumn10} />
          <TextColumn list={balajiCoolerTextColumn9} />
          <div className="yellowline-Vr position-absolute pipe-48"></div>
          <TextColumn list={balajiCoolerTextColumn8} />
          <TextColumn list={balajiCoolerTextColumn7} />
          <div>
            <BlackContainer
              data={{
                label: "471HY2A_SP01_SPM",
                useClass: "greenTxt mt-01",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471HY2A_SP02_SPM",
                useClass: "greenTxt mt-01",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471HY2A_SP03_SPM",
                useClass: "greenTxt mt-01",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "471HY2A_SP04_SPM",
                useClass: "greenTxt mt-01",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />

            <div className="mt-2">
              <div className="circle-group d-inline-block">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt  d-inline-block",
                  label: "471HY2",
                }}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center position-absolute single-text-1">
          <div className="yellowline-Vr upArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>
          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup1" });
            }}
            onTouchStart={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup1" });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-2">
          <div className="yellowline-Vr upArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup3" });
            }}
            onTouchStart={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup3" });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-3">
          <div className="yellowline-Vr upArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup5" });
            }}
            onTouchStart={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup5" });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-4">
          <div className="yellowline-Vr upArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup7" });
            }}
            onTouchStart={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup7" });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-5">
          <div className="yellowline-Vr upArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup9" });
            }}
            onTouchStart={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopup9" });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center position-absolute single-text-6">
          <div className="yellowline-Vr upArrow line1 position-absolute "></div>
          <div className="circle-group ml-4">
            <span className="green-line-circle"></span>
          </div>

          <button
            className="btn greenbtn ml-2"
            onClick={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopupB" });
            }}
            onTouchStart={() => {
              dispatch({ type: "SHOW_BALAJI_POPUP", payload: "coolerPopupB" });
            }}
            style={{
              backgroundColor: balajiPopup.coolerPopup1 ? "red" : "#64cb00",
            }}
          >
            T
          </button>
        </div>
        <TextColumn
          useClass="position-absolute single-text-97"
          list={balajiCoolerTextColumn15}
        />
        <div className="d-flex align-items-center position-absolute single-text-110">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
      </div>

      <div className="row ml-0 mr-0 h-15">
        <TextColumn useClass="single-text-80" list={balajiCoolerTextColumn1} />
        <TextColumn useClass="single-text-81" list={balajiCoolerTextColumn2} />
        <TextColumn useClass="single-text-82" list={balajiCoolerTextColumn3} />
        <TextColumn useClass="single-text-83" list={balajiCoolerTextColumn4} />
        <TextColumn useClass="single-text-84" list={balajiCoolerTextColumn5} />
        <TextColumn useClass="single-text-85" list={balajiCoolerTextColumn6} />
        <SingleText
          useClass="position-absolute single-text-86"
          yellowTextUp="Clinker Temp."
          textClass="yellowTxt"
          data={{
            blackTextLabel: "491CL1_TT01",
            blackTextClass: "greenTxt mt-01",
            unit: "°C",
          }}
        />
        <BlackContainer
          data={{
            label: "491DB2_IT01",
            useClass: "greenTxt position-absolute single-text-87",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <div className="hpipecircle position-absolute single-text-88">
          <span className="grayDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>

        <div className="hpipecircle position-absolute single-text-89">
          <span className="grayDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-36" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-37" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-38" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-39" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-40" }} />
        <KilnPipe data={{ classname: "yellowline-Vr pipe-41" }} />
        <KilnPipe data={{ classname: "yellowline-Hr pipe-42" }} />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt  position-absolute single-text-90",
            label: "491DB1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt  position-absolute single-text-91",
            label: "491SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt  position-absolute single-text-92",
            label: "491DB2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt  position-absolute single-text-93",
            label: "491SB1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt  position-absolute single-text-94",
            label: "REJECT CLINKER STOCK PILE",
          }}
        />
        <BlackContainer
          data={{
            label: "491DB1_IT01",
            useClass: "greenTxt position-absolute single-text-95",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};
