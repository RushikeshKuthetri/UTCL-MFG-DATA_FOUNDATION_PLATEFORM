import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  TopLeftBox,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";

import * as tagsData from "../../../../../data/Kotputli/TurbineTripLogic/kotputliTurbineTripLogicTextcolumn";
import {
  useCaretColorStatus,
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const TurbineTripLogickotputli = () => {
  return (
    <div className="TurbineTripLogic-kotputli w-100 h-100 position-relative">
      <div className="yellowline-Hr position-absolute line-1"></div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Hr position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Hr position-absolute line-48"></div>
      <div className="yellowline-Hr position-absolute line-49"></div>
      <div className="yellowline-Hr position-absolute line-50"></div>
      <div className="yellowline-Hr position-absolute line-51"></div>
      <div className="yellowline-Hr position-absolute line-52"></div>
      <div className="yellowline-Hr position-absolute line-53"></div>
      <div className="yellowline-Hr position-absolute line-54"></div>
      <div className="yellowline-Hr position-absolute line-55"></div>
      <div className="yellowline-Hr position-absolute line-56"></div>
      <div className="yellowline-Hr position-absolute line-57"></div>
      <div className="yellowline-Hr position-absolute line-58"></div>
      <div className="yellowline-Hr position-absolute line-59"></div>
      <div className="yellowline-Hr position-absolute line-60"></div>
      <div className="yellowline-Hr position-absolute line-61"></div>
      <div className="yellowline-Hr position-absolute line-62"></div>
      <div className="yellowline-Hr position-absolute line-63"></div>
      <div className="yellowline-Hr position-absolute line-64"></div>
      <div className="yellowline-Hr position-absolute line-65"></div>
      <div className="yellowline-Hr position-absolute line-66"></div>
      <div className="yellowline-Hr position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Vr position-absolute line-69"></div>
      <div className="yellowline-Vr position-absolute line-70"></div>
      <div className="yellowline-Vr position-absolute line-72"></div>
      <div className="yellowline-Vr position-absolute line-73"></div>
      <div className="yellowline-Vr position-absolute line-74"></div>
      <div className="yellowline-Vr position-absolute line-75"></div>
      <div className="yellowline-Vr position-absolute line-76"></div>
      <div className="yellowline-Vr position-absolute line-77"></div>
      <div className="yellowline-Vr position-absolute line-78"></div>
      <div className="yellowline-Vr position-absolute line-80"></div>
      <div className="yellowline-Vr position-absolute line-81"></div>
      <div className="yellowline-Vr position-absolute line-82"></div>
      <div className="yellowline-Vr position-absolute line-84"></div>
      <div className="yellowline-Vr position-absolute line-86"></div>
      <div className="yellowline-Vr position-absolute line-87"></div>
      <div className="yellowline-Vr position-absolute line-88"></div>
      <div className="yellowline-Vr position-absolute line-89"></div>
      <div className="yellowline-Vr position-absolute line-90"></div>
      <div className="yellowline-Hr position-absolute line-91"></div>
      <div className="yellowline-Hr position-absolute line-92"></div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-success p-2 position-absolute single-text-1",
          label: "TURBINE SPEED < 300",
        }}
      />
      <div className="d-flex position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PS-004 CONTROL OIL PRESSURE VERY LOW",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "HOTWELL LEVEL VERY HIGH",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PS-002 LUB OIL PR VERY LOW",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PS-003 EXHAUST STEAM PR VERY HIGH",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PT-003 EXHAUST STEAM PRESSURE VERY LOW",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "TT-004 EXHAUST STEAM TEMP VERY HIGH",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-success p-2 position-absolute single-text-8",
          label: "OSTD TURBINE SPEE VERY HIGH (FROM OSTD)",
        }}
      />
      <div className="d-flex position-absolute single-text-9">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-004 TURBINE BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-005 TURBINE BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-006 TURBINE BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-007 TURBINE BRG TEMP VERY HIGH",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "7",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light border",
            label: "&",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-10">
        <div className="flex-grow-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-008 GB BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-009 GB BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-010 GB BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-011 GB BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-012 GB BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-013 GB BRG TEMP VERY HIGH",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "8",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "9",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "10",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "11",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "12",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "13",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light border",
            label: "&",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-11">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-024 ALT DE BRG TEMP VERY HIGH",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-success",
              label: "RTD-025 ALT NDE BRG TEMP VERY HIGH",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "24",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "25",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light border",
            label: "&",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-success p-2 position-absolute single-text-12",
          label: "EMPB EMERGENCY TRIP PUSH BUTTON",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-success p-2 position-absolute single-text-13",
          label: "MASTER TRIP RELAY OPERATOR",
        }}
      />
      <div className="d-flex position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "TT-001 INLET STEAM TEMP VERY LOW",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "TT-001 INLET STEAM TEMP VERY HIGH",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PS-001 INLET STEAM PRESSURE VERY HIGH",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PT-001 INLET STEAM PRESSURE VERY LOW",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-success p-2 position-absolute single-text-18",
          label: "TURBINE AXIS CASING & DIFFERETIAL EXPANSION (PC S-ZAHH)",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-success p-2 position-absolute single-text-19",
          label: "TURBINE/GB/ATERNATOR SHAFT VIBRATION VERY HIGH(PC S-VAHH)",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-success p-2 position-absolute single-text-20",
          label:
            "15 MINS DELAY ON INITIATION (MIN LOAD FOR LONGER TIME) OR 10 MINS DELAY ON INITIATION (NO LOAD FOR LONGER TIME)",
        }}
      />

      <div className="d-flex position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "TT-003 INJECTION STEAM TEMP VERY LOW",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PTT-003 INJECTION STEAM TEMP VERY HIGH",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PS-002 INJECTION STEAM PRESSURE VERY HIGH",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "o",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light border",
              label: "3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success p-2 flex-grow-1",
            label: "PS-002 LUB OIL PR VERY LOW",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "A",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "B",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-success border",
              label: "C",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light border",
            label: "&",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light width-mc px-1 ml-auto",
            label: "LP TRIP RESET",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "COC-001 ESV CLS FB",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "PT-003 TRP OIL PR NOT<0.8",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "SV270 RESET FB",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "ACOP 1 RUNNING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "ACOP 2 RUNNING",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light px-1 flex-grow-1",
            label: "ESV OPEN PERMISSIVE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light  px-1 mt-01",
            label: "ESV OPEN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "COC-001 ESV CLS FB",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "SV270 RESET FB",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "PT-003 TRP OIL PR NOT<0.8",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light p-2 position-absolute single-text-27",
          label: "&",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-danger position-absolute single-text-28",
          label: "ESV OPN CMD ESV SV RST CMD",
        }}
      />
      <div className="position-absolute single-text-29">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-light px-1 mr-2",
              label: "AOP MOTOR IN AUTO AND RUNNING",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "W2_STG_MT_200_RUN",
                healthyLabel: "W2_STG_MT_200_PH",
              }
            )}`}
            text="M"
            label="W2_STG_MT_200_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-light px-1 mr-2",
              label: "BG MOTOR IN AUTO AND RUNNING",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "W2_STG_LOC_MT_004_RUN",
                healthyLabel: "W2_STG_LOC_MT_004_TRIP",
              }
            )}`}
            text="M"
            label="W2_STG_LOC_MT_004_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "W2_STG_MT_251_RUN",
                healthyLabel: "W2_STG_MT_251_PH",
              }
            )}`}
            text="M"
            label="W2_STG_MT_251_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-light px-1 mr-2",
              label: "ACOP-1 MOTOR IN AUTO AND RUNNING",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "W2_STG_MT_250_RUN",
                healthyLabel: "W2_STG_MT_250_PH",
              }
            )}`}
            text="M"
            label="W2_STG_MT_250_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-light px-1 mr-2",
              label: "GVC-2 MOTOR IN AUTO AND RUNNING",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "W2_STG_MT_161_RUN",
                healthyLabel: "W2_STG_MT_161_PH",
              }
            )}`}
            text="M"
            label="W2_STG_MT_161_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-light px-1 mr-2",
              label: "GVC-1 MOTOR IN AUTO AND RUNNING",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "W2_STG_MT_160_RUN",
                healthyLabel: "W2_STG_MT_160_PH",
              }
            )}`}
            text="M"
            label="W2_STG_MT_160_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-light px-1 mr-2",
              label: "OMS-2 MOTOR IN AUTO AND RUNNING",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            text="M"
            label="NA"
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "bg-light px-1 mr-2",
              label: "OMS-1 MOTOR IN AUTO AND RUNNING",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "W2_STG_MT_202_RUN",
                healthyLabel: "W2_STG_MT_202_PH",
              }
            )}`}
            text="M"
            label="W2_STG_MT_202_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light px-1",
            label: "EOP MOTOR DCS/ REM SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light  px-1 mt-01",
            label: "MAIN OIL TANK LVL NOT LOW",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "OH OIL TANK LVL NOT LOW",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "TRIP OIL PRESSURE LVL NOT LOW",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "TRIP OIL PRESSURE LVL NOT HIGH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "SV270 RESET FB",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "ESV OPEN REQUIRED",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-01",
            label: "GOV START PERMIS SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-3",
            label: "MANUAL START FB",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1",
            label: "86T TURBINE MASTER TRIP RELAY OPERATED (86T-OPTD)",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "bg-success px-1 mt-2",
            label: "TURBINE AXIS CASING & DIFFERETIAL EXPANSION (PC S-ZAHH)",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light px-1 mr-2",
            label: "TURBINE SPEED VERY HIGHT (FROM GOV)",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_SAHH_GOV")}`}
          label="W2_STG_SAHH_GOV"
          text="S"
        />
      </div>
      <div className="d-flex position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light px-1",
            label: "LP TRIP ASSEMBLY REM RESET CMD",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-light p-2 ml-2",
            label: "&",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light px-1 position-absolute single-text-34",
          label: "TG TRIP RESET",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light px-1 position-absolute single-text-35",
          label: "TG TRIP CMD",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light px-1 position-absolute single-text-36",
          label: "GOVERNOR START PERMISSIVE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-success px-1 position-absolute single-text-37",
          label: "GOVERNOR START PERMISSION COMMAND",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light px-1 position-absolute single-text-38",
          label: "LP TRIP REMOTE RESET",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light p-2 position-absolute single-text-39",
          label: "&",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light p-2 position-absolute single-text-40",
          label: "&",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light p-2 position-absolute single-text-41",
          label: "&",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light p-2 position-absolute single-text-42",
          label: "&",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light p-2 position-absolute single-text-43",
          label: "&",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-success p-2 position-absolute single-text-44",
          label: "Inject Line  Shut Off  PCV  ON Cmd",
        }}
      />
      <div className="bg-light p-1 position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Q S",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-auto",
            label: "R",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass:
            "bg-light rounded-circle p-1 position-absolute single-text-46",
          label: "OR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "bg-light rounded-circle p-1 position-absolute single-text-47",
          label: "OR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "bg-light rounded-circle p-1 position-absolute single-text-48",
          label: "OR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "bg-light rounded-circle p-1 position-absolute single-text-49",
          label: "OR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "bg-light rounded-circle p-1 position-absolute single-text-50",
          label: "OR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "bg-light rounded-circle p-1 position-absolute single-text-51",
          label: "OR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-danger px-1 position-absolute single-text-52",
          label:
            "OPEN VACCUME  BREAKER VALUE OPEN COMMAND (W1-STG-MA S-VBV-001)",
        }}
      />
      <BlackContainer
        data={{
          label: "W2_STG_COC_001_SI",
          useClass: "greenTxt position-absolute single-text-53",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_422SD2_ZT",
          useClass: "greenTxt position-absolute single-text-53",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={tagsData.kotputliTurbineTripLogicTextcolumn1}
        useClass="position-absolute single-text-54"
      />
      <TextColumn
        list={tagsData.kotputliTurbineTripLogicTextcolumn2}
        useClass="position-absolute single-text-55"
      />
      <TextColumn
        list={tagsData.kotputliTurbineTripLogicTextcolumn3}
        useClass="position-absolute single-text-56"
      />
      <TextColumn
        list={tagsData.kotputliTurbineTripLogicTextcolumn4}
        useClass="position-absolute single-text-57"
      />
      <TextColumn
        list={tagsData.kotputliTurbineTripLogicTextcolumn5}
        useClass="position-absolute single-text-58"
      />
      <BlackContainer
        data={{
          label: "W2_STG_KW",
          useClass: "greenTxt position-absolute single-text-59",
          unit: "kW",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={tagsData.kotputliTurbineTripLogicTextcolumn6}
        useClass="position-absolute single-text-60"
      />
      <TextColumn
        list={tagsData.kotputliTurbineTripLogicTextcolumn8}
        useClass="position-absolute single-text-61"
      />
      <BlackContainer
        data={{
          label: "W2_STG_COC_PT_003",
          useClass: "greenTxt position-absolute single-text-62",
          unit: "kg/cm2",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "W2_STG_LOC_001_LT",
          useClass: "greenTxt position-absolute single-text-63",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "W2_STG_LOC_002_LT",
          useClass: "greenTxt position-absolute single-text-64",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "W2_STG_COC_PT_003",
          useClass: "greenTxt position-absolute single-text-65",
          unit: "kg/cm2",
          unitColor: "unitColor",
        }}
      />
      <div className="border p-1 position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "TURBINE PARAMETER",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Speed High (GOV)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W2_STG_GOV_RPM_H")}`}
            label="W2_STG_GOV_RPM_H"
            text="S"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Speed High (O SP S)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W2_STG_SAH_OSTD")}`}
            label="W2_STG_SAH_OSTD"
            text="S"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Speed",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_STG_COC_001_SI",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Ref. Speed",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_STG_SI_200_REF",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "STG-Power",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_STG_KW",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "STG-KVA",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_STG_KVA",
              useClass: "greenTxt",
              unit: "kVA",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "STG-KVAR",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_STG_KVAR",
              useClass: "greenTxt",
              unit: "kVAR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "STG-HZ",
            }}
          />
          <BlackContainer
            data={{
              label: "W2_STG_HZ",
              useClass: "greenTxt",
              unit: "Hz",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-68">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GOVERNOR RESET CMD",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")}`}
            label="NA"
            text="I"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GOVERNOR RUN CMD",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")}`}
            label="NA"
            text="I"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GOVERNOR HALT CMD",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")}`}
            label="NA"
            text="I"
          />
        </div>
      </div>
      <TopLeftBox
        parentDivClass="border p-1 position-absolute single-text-69"
        useClass="d-flex justify-content-between mt-2"
        list={tagsData.kotputliTurbineTripLogicTextcolumn7}
        headText={{ class: "text-dark mx-auto", text: "ALTERNATOR PARAMETER" }}
      />
      <div className="position-absolute single-text-70">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_COC_PS_004A")}`}
          label="W2_STG_COC_PS_004A"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_COC_PS_004B"
          )}`}
          label="W2_STG_COC_PS_004B"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_COC_PS_004C"
          )}`}
          label="W2_STG_COC_PS_004C"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-71">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_LOC_PS_002A")}`}
          label="W2_STG_LOC_PS_002A"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_LOC_PS_002B"
          )}`}
          label="W2_STG_LOC_PS_002B"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_LOC_PS_002C"
          )}`}
          label="W2_STG_LOC_PS_002C"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-3 digital-tag ${useColorStatus(
            "W2_STG_MAS_PS_003A"
          )}`}
          label="W2_STG_MAS_PS_003A"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_MAS_PS_003B"
          )}`}
          label="W2_STG_MAS_PS_003B"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_MAS_PS_003C"
          )}`}
          label="W2_STG_MAS_PS_003C"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-72">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_GOV_SHUT_PB")}`}
          label="W2_STG_GOV_SHUT_PB"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_86T_OPTD"
          )}`}
          label="W2_STG_86T_OPTD"
          text="X"
        />
      </div>
      <div className={`dot position-absolute single-text-73 green-color`}>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_SAHH_OSTD")}`}
          label="W2_STG_SAHH_OSTD"
          text="S"
        />
      </div>
      <div className="position-absolute single-text-74">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_MAS_PS_001A")}`}
          label="W2_STG_MAS_PS_001A"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_MAS_PS_001B"
          )}`}
          label="W2_STG_MAS_PS_001B"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_MAS_PS_001C"
          )}`}
          label="W2_STG_MAS_PS_001C"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-75">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_MAS_PS_002A")}`}
          label="W2_STG_MAS_PS_002A"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_MAS_PS_002B"
          )}`}
          label="W2_STG_MAS_PS_002B"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_MAS_PS_002C"
          )}`}
          label="W2_STG_MAS_PS_002C"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-76">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_LOC_PS_002A")}`}
          label="W2_STG_LOC_PS_002A"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_LOC_PS_002B"
          )}`}
          label="W2_STG_LOC_PS_002B"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "W2_STG_LOC_PS_002C"
          )}`}
          label="W2_STG_LOC_PS_002C"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-77">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_86T_OPTD")}`}
          label="W2_STG_86T_OPTD"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot mt-3 digital-tag ${useColorStatus(
            "W2_STG_PCS_ZAHH"
          )}`}
          label="W2_STG_PCS_ZAHH"
          text="X"
        />
      </div>

      <div className="position-absolute single-text-78">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_PCS_ZAHH")}`}
          label="W2_STG_PCS_ZAHH"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot mt-5 digital-tag ${useColorStatus(
            "W2_STG_PCS_VAHH"
          )}`}
          label="W2_STG_PCS_VAHH"
          text="V"
        />
        <MotorCircleDigitalTag
          className={`dot mt-5 digital-tag ${useColorStatus("W2_STG_TGCB_XO")}`}
          label="W2_STG_TGCB_XO"
          text="X"
        />
      </div>
      <div className="position-absolute single-text-79">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_LOC_201_LS")}`}
          label="W2_STG_LOC_201_LS"
        />
        <MotorCircleDigitalTag
          className={`dot mt-5 digital-tag ${useColorStatus(
            "W2_STG_SV270_RST"
          )}`}
          label="W2_STG_SV270_RST"
        />
      </div>
      <div className={`position-absolute single-text-80 dot mt-3 green-color`}>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_GOV_TRIP_SV")}`}
          label="W2_STG_GOV_TRIP_SV"
          text="X"
        />
      </div>
      <div className={`position-absolute single-text-81 dot mt-3 green-color`}>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="I"
        />
      </div>

      <div className="position-absolute single-text-82">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success p-1",
            label: "LT-002 OVER HEAD TANK VERY LOW",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success p-1 mt-1",
            label: "LT-002 OVER HEAD TANK VERY HIGH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success p-1 mt-1",
            label: "LT-001 MAIN TANK LEVEL VERY HIGH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success p-1 mt-1",
            label: "LT-001 MAIN TANK LEVEL VERY LOW",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-success p-1 position-absolute single-text-83",
          label:
            "TCP SIGNAL TO MAIN TURBINE TRIP SOLENOID VALVE (DE-ENERGIZE TO TRIP)",
        }}
      />

      <div className="position-absolute single-text-84">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W2_STG_SV270_RST")}`}
          label="W2_STG_SV270_RST"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "W2_STG_MT_250_RUN", healthyLabel: "W2_STG_MT_250_PH" }
          )}`}
          label="W2_STG_MT_250_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "W2_STG_MT_251_RUN", healthyLabel: "W2_STG_MT_251_PH" }
          )}`}
          label="W2_STG_MT_251_RUN"
        />
        {/* <div className={`dot mt-1 green-color`}></div> */}
        {/* <div className={`dot mt-1 green-color`}></div> */}
      </div>
      <MimicCaret
        parentClass="d-flex tringle-item single-text-85"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
          "W2_STG_COC_001"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
          "W2_STG_COC_001"
        )}`}
        label="W2_STG_COC_001"
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "bg-light px-1 position-absolute single-text-86",
          label: "INJECTION LINE SHUT OFF/PCV",
        }}
      />
    </div>
  );
};
