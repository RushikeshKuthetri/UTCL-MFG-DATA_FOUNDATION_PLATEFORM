import { useDispatch, useSelector } from "react-redux";
import {
  kilnPreheaterTextColumn1,
  kilnPreheaterTextColumn2,
  kilnPreheaterTextColumn3,
  kilnPreheaterTextColumn7,
  kilnPreheaterTextColumn8,
  kilnPreheaterTextColumn9,
} from "../../../data/balaji/Kiln-Preheater/kilnPreheaterTextColumn";
import {
  SingleText,
  TextColumn,
  TopLeftBox,
  KilnPipe,
  RedDot,
  GreenDot,
  BlackContainer,
  TextContainerWithWrapWord,
} from "../../index";

export const KilnPreheater = () => {
  const dispatch = useDispatch();
  const { balajiPopup } = useSelector((state) => state);

  return (
    <div className="kilnpreheter w-100 h-100 position-relative">
      <KilnPipe data={{ classname: "yellowline-Hr leftarrow pipe-1" }} />
      <KilnPipe
        data={{ classname: "yellowline-Hr rightarrow leftarrow pipe-2" }}
      />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-3 leftarrow" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-4 rightarrow" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-5 leftarrow" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-6 rightarrow" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-7" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-8" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-9" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-10 rightarrow" }} />
      <KilnPipe
        data={{ classname: "yellowline-Hr rightarrow leftarrow  pipe-11" }}
      />
      <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-12" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-13 leftarrow" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-14" }} />
      <KilnPipe data={{ classname: "yellowline-Hr leftarrow pipe-15" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-16" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-17" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-18" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-19" }} />
      <KilnPipe data={{ classname: "yellowline-Hr pipe-20 leftarrow" }} />
      <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-21" }} />
      <KilnPipe data={{ classname: "yellowline-Vr upArrow pipe-22" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-26" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-27" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-28" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-29" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-30" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-31" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-32" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-33" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-34" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-35" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-36" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-37" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-38" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-39" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-42" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-43" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-44" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-45" }} />
      <KilnPipe data={{ classname: "yellowline-Vr upArrow pipe-46" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-47" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-48" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-49" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-50" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-51" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-52" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-53" }} />
      <KilnPipe data={{ classname: "yellowline-Vr pipe-54" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-55" }} />
      <KilnPipe data={{ classname: "yellowline-Vr upArrow pipe-56" }} />
      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-57" }} />
      <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-58" }} />

      <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-60" }} />
      <BlackContainer
        data={{
          label: "441FN1_PT01",
          useClass: "greenTxt position-absolute single-text-3",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "441FN1_TT01",
          useClass: "greenTxt position-absolute single-text-4",
          unit: "degC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "451FN1_PT01",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "mmwc",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "451FN1_TT01",
          useClass: "greenTxt position-absolute single-text-33",
          unit: "deg C",
          unitColor: "unitColor",
          hhValue: 400,
          hhTime: 10000,
        }}
      />

      <div className="triangle-with-squares text-dark position-absolute single-text-17">
        441 CN1
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-18">
        441 CN1
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-19">
        441 CN2
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-20">
        441 CN4
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-21">
        441 CN6
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-22">
        451 CN1
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-23">
        451 CN1
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-24">
        451 CN2
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-25">
        451 CN3
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-26">
        451 CN4
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-27">
        451 CN6
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-28">
        441 CN3
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-29">
        441 CN5
      </div>
      <div className="triangle-with-squares text-dark position-absolute single-text-30">
        451 CN5
      </div>
      <div className="bluegrey-big-img position-absolute single-text-31 d-flex align-items-center justify-content-between">
        <BlackContainer
          data={{
            label: "461HU1_ZT01",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "Kiln_Max_ExtremeTemp",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "461KL1_TT03",
              useClass: "greenTxt  mt-3",
              unit: "°C",
              unitColor: "unitColor",
              hhValue: 1300,
              hhTime: 0,
            }}
          />
        </div>
        <TextColumn useClass="ml-5" list={kilnPreheaterTextColumn9} />
      </div>
      <TextColumn
        list={kilnPreheaterTextColumn2}
        useClass="position-absolute single-text-34"
      />
      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "441CN1B_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN1B_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 400,
            hhTime: 10000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN1B_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -20,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN1B_TT02",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 400,
            hhTime: 10000,
          }}
        />
      </div>
      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "441CN2_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN2_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 600,
            hhTime: 10000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN2_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -10,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN2_TT02",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 600,
            hhTime: 10000,
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "441CN4_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN4_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 900,
            hhTime: 5000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN4_PT03",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -10,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN4_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -10,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN4_TT02",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 900,
            hhTime: 5000,
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <BlackContainer
          data={{
            label: "441CN6_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN6_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 950,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN6_PT03",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -10,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN6_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -10,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN6_TT02",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 975,
            hhTime: 0,
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "441CN3_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN3_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 800,
            hhTime: 5000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN3_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -10,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "441CN3_TT02",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 800,
            hhTime: 5000,
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <BlackContainer
          data={{
            label: "441CN5_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN5_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN5_PT03",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN5_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441CN5_TT02",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "451CN1A_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN1A_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 400,
            hhTime: 10000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN1A_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -75,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN1A_TT02",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 400,
            hhTime: 10000,
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <BlackContainer
          data={{
            label: "451CN3_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN3_TT01",
            useClass: "greenTxt mt-01",
            unit: "deg C",
            unitColor: "unitColor",
            hhValue: 800,
            hhTime: 5000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN3_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -50,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN3_TT02",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 800,
            hhTime: 5000,
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "451CN5_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN5_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 900,
            hhTime: 5000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN5_PT03",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN5_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -50,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN5_TT02",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 900,
            hhTime: 5000,
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "451CN1B_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN1B_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 400,
            hhTime: 10000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN1B_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -75,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN1B_TT02",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 400,
            hhTime: 10000,
          }}
        />
      </div>
      <div className="position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "451CN2_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN2_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 600,
            hhTime: 10000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN2_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -50,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN2_TT02",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 600,
            hhTime: 10000,
          }}
        />
      </div>
      <div className="position-absolute single-text-46">
        <BlackContainer
          data={{
            label: "451CN4_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN4_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 900,
            hhTime: 5000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN4_PT03",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -50,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN4_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -50,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN4_TT02",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 900,
            hhTime: 5000,
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <BlackContainer
          data={{
            label: "451CN6_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN6_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN6_PT03",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451CN6_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
            hhValue: -50,
            hhTime: 3000,
          }}
        />
        <BlackContainer
          data={{
            label: "451CN6_TT02",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 975,
            hhTime: 0,
          }}
        />
      </div>

      <div className="middle-sqr-container text-center position-absolute single-text-48">
        <BlackContainer
          data={{
            label: "451PR1_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451PR1_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451PR1_TT03",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-01",
            label: "451PRS",
          }}
        />
        <BlackContainer
          data={{
            label: "451PR1_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451PR1_TT02",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-50">
        <div className="CGRnBox p-1">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "431BE5",
              }}
            />
            <GreenDot data={{ useClass: "ml-3", label: "M" }} />
          </div>

          <BlackContainer
            data={{
              label: "431MD5_JT01",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
              hhValue: 144,
              hhTime: 0,
            }}
          />
        </div>
        <div className="CGRnBox p-1">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "431BE4",
              }}
            />
            <GreenDot data={{ useClass: "ml-3", label: "M" }} />
          </div>

          <BlackContainer
            data={{
              label: "431MD4_JT01",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
              hhValue: 144,
              hhTime: 0,
            }}
          />
        </div>
        <div className="CGRnBox p-1">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "431BE6",
              }}
            />
            <GreenDot data={{ useClass: "ml-3", label: "M" }} />
          </div>

          <BlackContainer
            data={{
              label: "431MD6_JT01",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
              hhValue: 144,
              hhTime: 0,
            }}
          />
        </div>
      </div>

      <div className="CGRnBox position-absolute single-text-51">
        <div className="d-flex justify-content-between align-items-center bb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt w-40",
              label: "Kiln Feed",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt w-60 bl-1",
              label: "Kiln Inlet Analyser",
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-40">
            <BlackContainer
              data={{
                label: "KILN_TOT_FEED",
                useClass: "greenTxt mt-1 mb-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="w-60 bl-1 pl-1">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt",
                  label: "CO",
                }}
              />
              <BlackContainer
                data={{
                  label: "461GA1_AT01",
                  useClass: "greenTxt ml-3",
                  unit: "ppm",
                  unitColor: "unitColor",
                  hhValue: 0.4,
                  hhTime: 0,
                }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt",
                  label: "O2",
                }}
              />
              <BlackContainer
                data={{
                  label: "461GA1_AT02",
                  useClass: "greenTxt ml-3",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt",
                  label: "NO",
                }}
              />
              <BlackContainer
                data={{
                  label: "461GA1_AT03",
                  useClass: "greenTxt ml-3",
                  unit: "ppm",
                  unitColor: "unitColor",
                  hhValue: 1200,
                  hhTime: 0,
                }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt",
                  label: "SO2",
                }}
              />
              <BlackContainer
                data={{
                  label: "461GA1_AT04",
                  useClass: "greenTxt ml-3",
                  unit: "ppm",
                  unitColor: "unitColor",
                  hhValue: 900,
                  hhTime: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <BlackContainer
          data={{
            label: "461KL1_TT05",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "461KL1A_PT01",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "461KL1A_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-53">
        <div className="CGRnBox p-1">
          <div className="d-flex justify-content-between align-items-center mb-2 bb-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "SFF1 (ST2)",
              }}
            />
          </div>

          <BlackContainer
            data={{
              label: "431SFF1_FT01",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "431SFF1_SP01_SPM",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox p-1">
          <div className="d-flex justify-content-between align-items-center mb-2 bb-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "SFF2 (ST1)",
              }}
            />
          </div>

          <BlackContainer
            data={{
              label: "431SFF2_FT01",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "431SFF2_SP01_SPM",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox p-1">
          <div className="d-flex justify-content-between align-items-center mb-2 bb-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "SFF3",
              }}
            />
          </div>

          <BlackContainer
            data={{
              label: "431SFF3_FT01",
              useClass: "greenTxt",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "431SFF3_SP01_SPM",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox d-flex position-absolute single-text-54 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "Feed Bin Weight",
          }}
        />
        <BlackContainer
          data={{
            label: "KILN_TOT_FEED",
            useClass: "greenTxt ml-4",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-55">
        <div className="CGRnBox p-2">
          <BlackContainer
            data={{
              label: "451SFF1_WT01",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
              hhValue: 165,
              hhTime: 0,
            }}
          />
          <BlackContainer
            data={{
              label: "451DQ1_PT01",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "451DQ1_FT01",
              useClass: "greenTxt mt-01",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "451DQ1_KS_SP01_SPM",
              useClass: "greenTxt mt-01",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox p-2">
          <BlackContainer
            data={{
              label: "481SFF1_WT01",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481DQ1_PT01",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481DQ1_FT01",
              useClass: "greenTxt mt-01",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481DQ1_PC1_SP01_SPM",
              useClass: "greenTxt mt-01",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox p-2">
          <BlackContainer
            data={{
              label: "481SFF1_WT01",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481DQ2_PT02",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481DQ2_FT01",
              useClass: "greenTxt mt-01",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481DQ2_PC2_SP01_SPM",
              useClass: "greenTxt mt-01",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-56">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-2",
              label: "KS",
            }}
          />
          <GreenDot data={{ useClass: "ml-2" }} />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-2",
              label: "PC1",
            }}
          />
          <RedDot data={{ useClass: "ml-2" }} />
          {/* <GreenDot data={{ useClass: "ml-2" }} /> */}
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-2",
              label: "PC2",
            }}
          />
          <GreenDot data={{ useClass: "ml-2" }} />
        </div>
      </div>

      <div className="CGRnBox position-absolute single-text-59">
        <div className="d-flex bb-1">
          <div className="d-flex justify-content-between align-items-center w-50 p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt w-50",
                label: "BH-1",
              }}
            />
            <div className="greenDot ml-2">M</div>
          </div>
          <div className="d-flex justify-content-between align-items-center w-50 bl-1 p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt w-50",
                label: "BH-2",
              }}
            />
            <div className="greenDot ml-2">M</div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50">
            <BlackContainer
              data={{
                label: "421BH1_PT02",
                useClass: "greenTxt mt-01 mx-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "421BH1_TT01",
                useClass: "greenTxt mt-01 mx-auto",
                unit: "deg C",
                unitColor: "unitColor",
                hhValue: 220,
                hhTime: 10000,
              }}
            />

            <BlackContainer
              data={{
                label: "421BH1_PT04",
                useClass: "greenTxt mt-01 mx-auto",
                unit: "mmwc",
                unitColor: "unitColor",
                hhValue: 200,
                hhTime: 30000,
              }}
            />
          </div>
          <div className="w-50 bl-1 pl-1">
            <BlackContainer
              data={{
                label: "422BH1_PT02",
                useClass: "greenTxt mt-01 mx-auto",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "422BH1_TT01",
                useClass: "greenTxt mt-01 mx-auto",
                unit: "deg C",
                unitColor: "unitColor",
                hhValue: 220,
                hhTime: 10000,
              }}
            />

            <BlackContainer
              data={{
                label: "422BH1_PT04",
                useClass: "greenTxt mt-01 mx-auto",
                unit: "mmwc",
                unitColor: "unitColor",
                hhValue: 200,
                hhTime: 30000,
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-60 p-2">
        <TopLeftBox
          useClass="d-flex justify-content-between mt-1"
          list={kilnPreheaterTextColumn3}
        />
      </div>
      <div className="position-absolute single-text-64">
        <BlackContainer
          data={{
            label: "EXTR__WT01",
            useClass: "greenTxt",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_TPH",
            useClass: "greenTxt mt-01",
            unit: "t/p",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AFR_SP01_SPM",
            useClass: "greenTxt mt-01 ml-3",
            unit: "t/p",
            unitColor: "unitColor",
          }}
        />
      </div>
      <SingleText
        data={{
          blackTextLabel: "461KL1_PT02_IND",
          blackTextClass: "greenTxt position-absolute single-text-67",
          unit: "mmWC",
        }}
      />
      <TextColumn
        list={kilnPreheaterTextColumn8}
        useClass="position-absolute single-text-68"
      />
      <TextColumn
        useClass="position-absolute single-text-69"
        list={kilnPreheaterTextColumn7}
      />

      <div className="position-absolute single-text-71">
        <BlackContainer
          data={{
            label: "451DU1_PT01",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451DU1_TT01",
            useClass: "greenTxt ml-2 mt-01",
            unit: "deg C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <BlackContainer
          data={{
            label: "481DQ1_PC1_SP01_SPA",
            useClass: "greenTxt",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481DQ2_PC2_SP01_SPA",
            useClass: "greenTxt ml-2 mt-01",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-74">
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
        <BlackContainer
          data={{
            label: "451TRB1_FT01",
            useClass: "greenTxt mt-01",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex CGRnBox position-absolute single-text-76 p-1">
        <div className="mr-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "BH1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "BH2",
            }}
          />
        </div>
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "421FN1_ST02",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
              // hhValue: ,
              // hhTime: ,
            }}
          />
          <BlackContainer
            data={{
              label: "422FN1_ST02",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
              // hhValue: ,
              // hhTime: ,
            }}
          />
        </div>
      </div>
      <div className="d-flex CGRnBox position-absolute single-text-77 p-1">
        <div className="mr-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "K",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "K",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "C",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "C",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "451BL1_N_IT01",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "451BL2_N_IT01",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481BL2_N_IT01",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "481BL1_N_IT01",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-78 p-2">
        <div className="d-flex">
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "CO",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt",
                label: "O2",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "451GA1_AT01",
                useClass: "greenTxt mt-01",
                unit: "ppm",
                unitColor: "unitColor",
                hhValue: 0.4,
                hhTime: 0,
              }}
            />
            <BlackContainer
              data={{
                label: "451GA1_AT02",
                useClass: "greenTxt mt-01",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-80",
          label: "451FN1",
        }}
      />

      <div className="circle-img c-img-1 position-absolute Circle-1"></div>
      <div className="circle-img c-img-1 position-absolute Circle-2"></div>
      <div className="circle-group position-absolute Circle-3">
        <span className="green-line-circle"></span>
      </div>
      <button
        className="btn greenbtn position-absolute p-0 Btn-1"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "451FN1" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "451FN1" });
        }}
        style={{ backgroundColor: balajiPopup.popup451FN1 ? "red" : "#64cb00" }}
      >
        451FN1
      </button>

      <div className="position-absolute single-text-81 text-center">
        <BlackContainer
          data={{
            label: "451FN1_JT02",
            useClass: "greenTxt mt-01 mx-auto",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "451FN1_ST01",
          useClass: "greenTxt position-absolute single-text-82",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-83">
        <BlackContainer
          data={{
            label: "451FN1_SP01_SPM",
            useClass: "greenTxt mr-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "471EP1_TT01",
            useClass: "greenTxt",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <button
        className="btn greenbtn p-0 position-absolute Btn-3"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "CritcalAlarm" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "CritcalAlarm" });
        }}
        style={{
          backgroundColor: balajiPopup.criticalAlarm ? "red" : "#64cb00",
          pointerEvents: "auto",
          cursor: "pointer",
        }}
      >
        Critical Alarms
      </button>
      <button
        className="btn greenbtn p-0 position-absolute Btn-4"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "Temp1" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "Temp1" });
        }}
        style={{ backgroundColor: balajiPopup.temp1 ? "red" : "#64cb00" }}
      >
        TEMP
      </button>
      <button
        className="btn greenbtn p-0 position-absolute Btn-5"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "Temp2" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "Temp2" });
        }}
        style={{ backgroundColor: balajiPopup.temp2 ? "red" : "#64cb00" }}
      >
        TEMP
      </button>
      <button
        className="btn greenbtn p-0 position-absolute Btn-8"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "KilnRoller" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "KilnRoller" });
        }}
        style={{ backgroundColor: balajiPopup.kilnRoller ? "red" : "#64cb00" }}
      >
        KILN ROLLER
      </button>
      <button
        className="btn greenbtn p-0 position-absolute Btn-9"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "MDTemp" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "MDTemp" });
        }}
        style={{ backgroundColor: balajiPopup.mdTemp ? "red" : "#64cb00" }}
      >
        MD Temp
      </button>
      <div className="circle-group position-absolute Circle-6">
        <span className="green-line-circle"></span>
      </div>

      <div className="circle-group position-absolute Circle-8">
        <span className="green-line-circle"></span>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-85",
          label: "481FN2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-86",
          label: "481TV3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-89",
          label: "481FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-95",
          label: "COAL",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-96",
          label: "PC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-105",
          label: "To CPP",
        }}
      />
      <div className="position-absolute single-text-106">
        <BlackContainer
          data={{
            label: "481FN1_SP01_SPM",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481FN1_ST01",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-113",
          label: "451MW1",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-114",
          label: "441MW1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-115",
          label: "431RF1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-116",
          label: "To CF SILO",
        }}
      />
      <button
        className="btn greenbtn p-0 position-absolute Btn-10"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "441FN1" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "441FN1" });
        }}
        style={{ backgroundColor: balajiPopup.popup441FN1 ? "red" : "#64cb00" }}
      >
        441FN1
      </button>
      <div className="circle-group position-absolute Circle-9">
        <span className="green-line-circle"></span>
      </div>
      <div className="position-absolute single-text-117 text-center">
        <BlackContainer
          data={{
            label: "441FN1_JT01",
            useClass: "greenTxt mt-01 mx-auto",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-118"
        list={kilnPreheaterTextColumn1}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-119",
          label: "441FN1",
        }}
      />

      <div className="CGRnBox p-1 d-flex position-absolute single-text-121">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "CO",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-01",
              label: "O2",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "451GA2_AT01",
              useClass: "greenTxt",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "451GA2_AT02",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-125">
        <BlackContainer
          data={{
            label: "441_451FN1_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_AVG_TEMP",
            useClass: "greenTxt mt-1",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-126",
          label: "AFR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-128",
          label: "431RF2",
        }}
      />
      <button
        className="btn greenbtn position-absolute p-0 Btn-11"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "Firing" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "Firing" });
        }}
        style={{
          backgroundColor: balajiPopup.firingBlower ? "red" : "#64cb00",
        }}
      >
        Firing Blower Temp
      </button>
      <button
        className="btn greenbtn position-absolute p-0 Btn-12"
        onClick={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "CoalFiring" });
        }}
        onTouchStart={() => {
          dispatch({ type: "SHOW_BALAJI_POPUP", payload: "CoalFiring" });
        }}
      >
        Coal Firing
      </button>
    </div>
  );
};
