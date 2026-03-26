import { useCaretColorStatus, useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  MotorCircleDigitalTag,
  Connector,
} from "../../../../index";
export const MainParameterwhrsAndhra = () => {
  return (
    <div className="MParawhrsAndhra w-100 h-100 position-relative">
      <div className="yellowline-Vr position-absolute line-1"></div>
      <div className="yellowline-Vr position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
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
      <div className="d-flex justify-content-between position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WHRS-2 LOAD",
          }}
        />
        <BlackContainer
          data={{
            label: "_MVA01",
            useClass: "greenTxt",
            unit: "MVA",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WHRS-2 RPM",
          }}
        />
        <BlackContainer
          data={{
            label: "_ST_901",
            useClass: "greenTxt",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DA-104",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151HAZO104",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DA-105",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151HAZO105",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DA-106",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151HAZO106",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DA-107",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151HAZO107",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AQC I/L Temp",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151HATT101",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AQC I/L DT",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151HADT101",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AQC O/L Temp",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151TT111",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AQC O/L DT",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151DT112",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white",
            label: "_MW001",
          }}
        />
        <BlackContainer
          data={{
            label: "_MW001",
            useClass: "greenTxt",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-3">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STLT115A",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STLT115A",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STLT115B",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STLT115B",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STLT115C",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STLT115C",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-4">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWTE117",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWTE117",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWTE112",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWTE112",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STPT117",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STPT117",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STPT118",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STPT118",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-5">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWFT110A",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWFT110A",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWFT110B",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWFT110B",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Compensation",
            }}
          />
          <BlackContainer
            data={{
              label: "FLOW_COMP_2",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FCV-101",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151FWZT101",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "FCV-102",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151FWZT102",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-7">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STLT138A",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STLT138A",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STLT138B",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STLT138B",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STLT138C",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STLT138C",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-8">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWTE140",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWTE140",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWTE135",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWTE135",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STPT142",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STPT142",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151STPT143",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151STPT143",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-9">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWFT132A",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWFT132A",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151FWFT132B",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151FWFT132B",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Compensation",
            }}
          />
          <BlackContainer
            data={{
              label: "AQC_HP_FW_Comp",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FCV-103",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151FWZT103",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "FCV-104",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151FWZT104",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-11">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151MSFLOW152A",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151MSFLOW152A",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151MSFLOW152B",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151MSFLOW152B",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SCV-312",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151SHZT312",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-12">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151MSFLOW164A",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151MSFLOW164A",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_1151MSFLOW164B",
            }}
          />
          <BlackContainer
            data={{
              label: "_1151MSFLOW164B",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SCV-360",
          }}
        />
        <BlackContainer
          data={{
            label: "_1151SHZT360",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-13">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_103A",
            }}
          />
          <BlackContainer
            data={{
              label: "_0122MS_PT_103A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_103B",
            }}
          />
          <BlackContainer
            data={{
              label: "_0122MS_PT_103A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_103C",
            }}
          />
          <BlackContainer
            data={{
              label: "_0122MS_PT_103A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_mvv01",
            }}
          />
          <BlackContainer
            data={{
              label: "_0122MS_PT_103A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_301",
            }}
          />
          <BlackContainer
            data={{
              label: "_0122MS_PT_103A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0122MS_PT_103A",
            }}
          />
          <BlackContainer
            data={{
              label: "_0122MS_PT_103A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-14">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_103A",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_103A33FN2_SP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_103B",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_103B33FN2_SP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_103C",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_103C3FN2_SP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_302",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_302333FN2_SP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_301",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_301333FN2_SP",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0122MS_TT_106A",
            }}
          />
          <BlackContainer
            data={{
              label: "_0122MS_TT_106A",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-15">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_201A",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_201A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_201B",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_201B",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_201C",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_201C",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-16">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_201A",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_201A",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_201C",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_201C",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_201D",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_201D",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-17">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "LP1_201",
            }}
          />
          <BlackContainer
            data={{
              label: "LP1_201",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "LP2_201A",
            }}
          />
          <BlackContainer
            data={{
              label: "LP2_201A",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "LP2_201B",
            }}
          />
          <BlackContainer
            data={{
              label: "LP2_201B",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-18">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_101A",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_101A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_101B",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_101B",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_101C",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_101C",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-19">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_101A",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_101A",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_101B",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_101B",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_101C",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_101C",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-20">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dar bg-white",
              label: "_FLOW_HP_101",
            }}
          />
          <BlackContainer
            data={{
              label: "_FLOW_HP_101",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_FLOW_HP_101B",
            }}
          />
          <BlackContainer
            data={{
              label: "_FLOW_HP_101B",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-21">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_102A",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_102A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_113",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_113",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_PT_102B",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_102B",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-22">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_102A",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_102A",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_102B",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_102B",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_102C",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_102C",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_TT_102D",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_102D",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-23">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0132IAPT101",
            }}
          />
          <BlackContainer
            data={{
              label: "_0132IAPT101",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0123DR_LT_111",
            }}
          />
          <BlackContainer
            data={{
              label: "_0123DR_LT_111",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BFP-1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("_0123FWPU101")}`}
            text="X"
            label="_0123FWPU101"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0123DR_LT_110",
            }}
          />
          <BlackContainer
            data={{
              label: "_0123DR_LT_110",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BFP-2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("_0123FWPU102")}`}
            text="X"
            label="_0123FWPU102"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0123DR_LT_109",
            }}
          />
          <BlackContainer
            data={{
              label: "_0123DR_LT_109",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BFP-3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("_0123FWPU103")}`}
            text="X"
            label="_0123FWPU103"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-24">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0131CD_LT_004",
            }}
          />
          <BlackContainer
            data={{
              label: "_0131CD_LT_004",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("_0131CD_MO_003")}`}
            childLabel="_0131CD_MO_003"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0131CD_LT_005",
            }}
          />
          <BlackContainer
            data={{
              label: "_0131CD_LT_005",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus(
              "_0131CDMO_004_VFD"
            )}`}
            childLabel="_0131CDMO_004_VFD"
            childText="X"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-25">
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Main Steam Press. and Temp.",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-2",
              label: "_PT_101A",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_101A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_TT_101A",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_101A",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Exh. Press. and Temp.",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_PT_103A",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_103A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_TT_103A",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_103A",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border px-3 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_ST_901",
            }}
          />
          <BlackContainer
            data={{
              label: "_ST_901",
              useClass: "greenTxt",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_MW001",
            }}
          />
          <BlackContainer
            data={{
              label: "_MW001",
              useClass: "greenTxt",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Lube Oil Pressure And Temp.",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_PT_506A",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_506A",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_TT_505",
            }}
          />
          <BlackContainer
            data={{
              label: "_TT_505",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Control oil header pressure",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_PT_401",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_401",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Impulse oil press. -Gov. vlv",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_PT_456",
            }}
          />
          <BlackContainer
            data={{
              label: "_PT_456",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark w-50",
              label: "HP valve demand",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white mt-1",
              label: "_HP_001",
            }}
          />
          <BlackContainer
            data={{
              label: "_HP_001",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Gen. Circuit Breaker ON",
            }}
          />
          <div className="d-flex align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-white",
                label: "GCB_ON",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("GCB_ON")}`}
              label="GCB_ON"
              text="H"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Gen. In Parallel With Grid",
            }}
          />
          <div className="d-flex align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-white",
                label: "GEN_PWG",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("GEN_PWG")}`}
              label="GEN_PWG"
              text="H"
            />
          </div>
        </div>
        <div className="border px-1 pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Flow for injection line to Turbine",
            }}
          />
          <BlackContainer
            data={{
              label: "Steam_Flow_Compensation_1",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Main steam  flow",
            }}
          />
          <BlackContainer
            data={{
              label: "TG_Steam_Flow_Compensation_1",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-26">
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "XS201"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "XS201"
            )}`}
            label="XS201"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "XS-201",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "_ZT_201",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="ml-3">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "XS101"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "XS101"
            )}`}
            label="XS101"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "XS-101",
            }}
          />
        </div>
        <div className="ml-3">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "XS104A"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "XS104A"
            )}`}
            label="XS104A"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "XS-104A",
            }}
          />
        </div>
        <div className="ml-3">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "XS104B"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "XS104B"
            )}`}
            label="XS104B"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "XS-104B",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-28">
        <div>
          <BlackContainer
            data={{
              label: "_0131CD_LZT_001",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LCV-001",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "_0131CD_LZT_002",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LCV-002",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-29">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0134CW_LT_101",
            }}
          />
          <BlackContainer
            data={{
              label: "_0134CW_LT_101",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACW-1",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("_0134CWMO103")}`}
            childLabel="_0134CWMO103"
            childText="X"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACW-2",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("_0134CWMO104")}`}
            childLabel="_0134CWMO104"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0134CW_PT_106",
            }}
          />
          <BlackContainer
            data={{
              label: "_0134CW_PT_106",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CT-1",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0134CTMO101"
            )}`}
            label="_0134CTMO101"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CT-2",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0134CTMO102"
            )}`}
            label="_0134CTMO102"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-30">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_LT_251",
            }}
          />
          <BlackContainer
            data={{
              label: "_LT_251",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("DTP001")}`}
            childLabel="DTP001"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DTP-001",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_LT_252",
            }}
          />
          <BlackContainer
            data={{
              label: "_LT_252",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("DTP002")}`}
            childLabel="DTP002"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DTP-002",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-31">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0131CD_LT_001",
            }}
          />
          <BlackContainer
            data={{
              label: "_0131CD_LT_001",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("_0131CD_MO_001")}`}
            childLabel="_0131CD_MO_001"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0131CD_LT_003",
            }}
          />
          <BlackContainer
            data={{
              label: "_0131CD_LT_003",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("_0131CD_MO_002")}`}
            childLabel="_0131CD_MO_002"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-32">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_LT_501",
            }}
          />
          <BlackContainer
            data={{
              label: "_LT_501",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_LT_701",
            }}
          />
          <BlackContainer
            data={{
              label: "_LT_701",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("AOP501_FB")}`}
            childLabel="AOP501_FB"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AOP-501",
            }}
          />
        </div>
        <div>
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("EOP_501_A")}`}
            childLabel="EOP_501_A"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "EOP-501",
            }}
          />
        </div>
        <div>
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("AB501")}`}
            childLabel="AB501"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AB-502",
            }}
          />
        </div>
        <div>
          <Connector
            parentClass="connector-both-side-2"
            childClass={`dot digital-tag ${useColorStatus("AB502")}`}
            childLabel="AB502"
            childText="X"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AB-503",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-33">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-1",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_006"
            )}`}
            label="_0131CDMO_006"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-2",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_007"
            )}`}
            label="_0131CDMO_007"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-3",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_008"
            )}`}
            label="_0131CDMO_008"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-4",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_009"
            )}`}
            label="_0131CDMO_009"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-5",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_010"
            )}`}
            label="_0131CDMO_010"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-6",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_011"
            )}`}
            label="_0131CDMO_011"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-7",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_012"
            )}`}
            label="_0131CDMO_012"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC-8",
            }}
          />
          <MotorCircleDigitalTag
            className={`fa-solid digital-tag fa-dharmachakra ${useCaretColorStatus(
              "_0131CDMO_013"
            )}`}
            label="_0131CDMO_013"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-34">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-white",
              label: "_0125DM_LT_105A",
            }}
          />
          <BlackContainer
            data={{
              label: "_0125DM_LT_105A",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <Connector
          parentClass="connector-both-side-2"
          childClass={`dot digital-tag ${useColorStatus("_0125DMMO103")}`}
          childLabel="_0125DMMO103"
        />
        <Connector
          parentClass="connector-both-side-2"
          childClass={`dot digital-tag ${useColorStatus("_0125DMMO104")}`}
          childLabel="_0125DMMO104"
        />
        <Connector
          parentClass="connector-both-side-2"
          childClass={`dot digital-tag ${useColorStatus("_0125DMMO105")}`}
          childLabel="_0125DMMO105"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-35",
          label: "AQC Boiler",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-36",
          label: "AQC LP Drum",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-37",
          label: "AQC HP Drum",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-38",
          label: "AQC LP Steam",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-39",
          label: "AQC HP Steam",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-40",
          label: "Turbine",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "Gland Sealing",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-42",
          label: "PRDS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-43",
          label: "Vaccum",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-44",
          label: "Main Steam LP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "Main Steam HP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "Stage Pressure",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-47",
          label: "Casing Temp",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-48",
          label: "Valve Status",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-49",
          label: "AIR COMPRESSOR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-50",
          label: "Deaerator Level",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-51",
          label: "BOP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-52",
          label: "CEP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-53",
          label: "Drain Tank Level",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-54",
          label: "Lube Oil System",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-55",
          label: "DM Level",
        }}
      />     
       <TextContainerWithWrapWord
      data={{
        useClass: "text-dark position-absolute single-text-56",
        label: "HOT WELL Level",
      }}
    />
    </div>
  );
};
