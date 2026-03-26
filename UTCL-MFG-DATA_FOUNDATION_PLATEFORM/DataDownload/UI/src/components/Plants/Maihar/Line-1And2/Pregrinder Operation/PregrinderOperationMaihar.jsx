import {
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const PregrinderOperationMaihar = () => {
  return (
    <div className="PregrinderOperationMaihar  w-100 h-100 position-relative">
      <div className="hpipecircle position-absolute pipe-1">
        <span className="grayDot"></span>
        <span className="text">CL9</span>
        <span className="dot grey-color">M</span>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("66CL8")}`,
          firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "CL8" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("60CL11A")}`,
          firstCircleLabel: "60CL11A",
        }}
        text={{ useClass: "text-dark", label: "CL11A" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("66CL10")}`,
          firstCircleLabel: "66CL10",
        }}
        text={{ useClass: "text-dark", label: "CL10" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <div className="hpipecircle position-absolute pipe-5">
        <span className="grayDot"></span>
        <span className="text">60CFW</span>
        <span className="dot grey-color">M</span>
        {/* <PipeWithCircles
          parentDivClass="hpipecircle position-absolute pipe-5"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "60CFW" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useColorStatus("PH_422CV1" )}`,
            secondCircleLabel: "PH_422CV1",
          }}
        /> */}
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("60RB")}`,
          firstCircleLabel: "60RB",
        }}
        text={{ useClass: "text-dark", label: "60RB" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "CL12A" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("60CL12A")}`,
          secondCircleLabel: "60CL12A",
        }}
      />

      <div className="pipe dotted-pipe  position-absolute text-center pipe-8">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("60BE")}`}
          label="60BE"
          text="M"
        />
      </div>
      <div className="pipeHr  position-absolute text-center pipe-9"></div>
      <div className="pipeHr  position-absolute text-center pipe-10"></div>
      <div className="pipeHr  position-absolute text-center pipe-11"></div>
      <div className="pipeVr  position-absolute text-center pipe-12"></div>
      <div className="pipeHr  position-absolute text-center pipe-13"></div>
      <div className="pipeVr  position-absolute text-center pipe-14"></div>
      <div className="pipeHr  position-absolute text-center pipe-15"></div>
      <div className="pipeVr  position-absolute text-center pipe-16"></div>
      <div className="pipeVr  position-absolute text-center pipe-17"></div>
      <div className="pipeHr  position-absolute text-center pipe-18"></div>
      <div className="pipeHr  position-absolute text-center pipe-19"></div>
      <div className="pipeVr  position-absolute text-center pipe-20"></div>
      <div className="pipeVr  position-absolute text-center pipe-21"></div>
      <div className="pipeVr  position-absolute text-center pipe-22"></div>
      <div className="pipeVr  position-absolute text-center pipe-23"></div>
      <div className="pipeVr  position-absolute text-center pipe-24"></div>
      <div className="pipeVr  position-absolute text-center pipe-25"></div>
      <div className="pipeVr  position-absolute text-center pipe-26"></div>
      <div className="pipeVr  position-absolute text-center pipe-27"></div>
      <div className="pipeHr  position-absolute text-center pipe-28"></div>
      <div className="pipeHr  position-absolute text-center pipe-29"></div>
      <div className="yellowline-Vr   position-absolute pipe-30"></div>
      <div className="yellowline-Vr   position-absolute pipe-31"></div>
      <div className="yellowline-Vr   position-absolute pipe-32"></div>
      <div className="yellowline-Vr   position-absolute pipe-33"></div>
      <div className="yellowline-Vr   position-absolute pipe-34"></div>
      <div className="yellowline-Vr   position-absolute pipe-35"></div>
      <div className="yellowline-Vr   position-absolute pipe-36"></div>
      <div className="yellowline-Vr   position-absolute pipe-37"></div>
      <div className="yellowline-Vr   position-absolute pipe-38"></div>
      <div className="yellowline-Vr   position-absolute pipe-39"></div>
      <div className="yellowline-Vr   position-absolute pipe-40"></div>
      <div className="pipeVr  position-absolute text-center pipe-41"></div>
      <div className="yellowline-Hr   position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-44"></div>
      <div className="yellowline-Hr   position-absolute pipe-45"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-46"></div>
      <div className="yellowline-Vr   position-absolute pipe-47"></div>
      <div className="yellowline-Hr   position-absolute pipe-48"></div>

      <div className="bigContainer position-absolute text-center single-text-1">
        <div className="text mt-4">PREGRINDER</div>
        <BlackContainer
          data={{
            label: "60RT09-M",
            useClass: "greenTxt mt-2 text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage position-absolute text-center single-text-2"></div>
      <div className="containerImage position-absolute text-center single-text-3"></div>
      <div className="containerImage position-absolute text-center single-text-4">
        <BlackContainer
          data={{
            label: "60PT04-M",
            useClass: "greenTxt mt-1 text",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <span className="redsqure mt-1"></span>
      </div>
      <div className="containerImage position-absolute text-center single-text-5">
        <BlackContainer
          data={{
            label: "60PT05",
            useClass: "greenTxt mt-1 text",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <span className="redsqure mt-1"></span>
      </div>
      <div className="containerImage position-absolute text-center single-text-6">
        <div className="text mt-2">CM1</div>
      </div>
      <div className="containerImage position-absolute text-center single-text-7">
        <div className="text mt-2">CM2</div>
      </div>
      <div className="containerImage position-absolute text-center single-text-8">
        <div className="text mt-1">CLINKER</div>
        <BlackContainer
          data={{
            label: "60HLVL-M",
            useClass: "greenTxt mt-1 text",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60TT1_IO",
            useClass: "greenTxt mt-1 text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="connector-both-side-2 position-absolute text-center single-text-9">
        <span className="line-circle grey-color"></span>
        {/* <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("63FARB1")}`}
              label="63FARB1"
            /> */}
      </div>
      <div className="d-flex position-absolute text-center single-text-10">
        <BlackContainer
          data={{
            label: "_60CAFCUR",
            useClass: "greenTxt mx-auto text",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60RT13",
            useClass: "greenTxt mx-auto text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60RT14",
            useClass: "greenTxt mx-auto text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60CAFDE_VIB_V",
            useClass: "greenTxt mx-auto text",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60CAFNDEVIB_V",
            useClass: "greenTxt mx-auto text",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-11 border p-1">
        <BlackContainer
          data={{
            label: "_60PGCAFRPM",
            useClass: "greenTxt mx-auto  text",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_60PGCAFRPM",
            useClass: "greenTxt mx-auto mt-1 text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-12">
        <BlackContainer
          data={{
            label: "60CWFA",
            useClass: "greenTxt mx-auto text",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60RT10-M",
            useClass: "greenTxt mx-auto text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60VIBRA-M",
            useClass: "greenTxt mx-auto text",
            unit: "MM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60VIBRA1-M",
            useClass: "greenTxt mx-auto text",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60KW1-M",
            useClass: "greenTxt mx-auto text",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-13 border p-1">
        <BlackContainer
          data={{
            label: "60BFF2RPM",
            useClass: "greenTxt mx-auto  text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60BFF2RPM",
            useClass: "greenTxt mx-auto mt-1 text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-14 border p-1">
        <BlackContainer
          data={{
            label: "60PGDCFRPM-M",
            useClass: "greenTxt mx-auto  text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60PGDCFRPM-M",
            useClass: "greenTxt mx-auto mt-1 text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-15">
        {/* <BlackContainer
          data={{
            label: "_60CL11A_PC",
            useClass: "greenTxt mx-auto text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        /> */}
        <div className=" border p-1 mt-2">
          <BlackContainer
            data={{
              label: "60CFW",
              useClass: "greenTxt mx-auto  text",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "60CFW",
              useClass: "greenTxt mx-auto mt-1 text",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-16">
        <BlackContainer
          data={{
            label: "_60RT15_M",
            useClass: "greenTxt mx-auto  text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60PT08",
            useClass: "greenTxt mx-auto text",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-17">
        <BlackContainer
          data={{
            label: "60CWFR_M",
            useClass: "greenTxt mx-auto  text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60RBW_M",
            useClass: "greenTxt mx-auto text",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center">
          <div>MS2</div>

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("60MS2")}`}
            label="60MS2"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-18">
        <BlackContainer
          data={{
            label: "60RT11-M",
            useClass: "greenTxt mx-auto  text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60MDRF2",
            useClass: "greenTxt mx-auto text",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-19">
        <div>
          <div className="text">BE</div>

          <BlackContainer
            data={{
              label: "CR_211BW3_PROD_PREV_TOT",
              useClass: "greenTxt mx-auto  text",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "60PT09",
            useClass: "greenTxt mx-auto text",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-20">
        <BlackContainer
          data={{
            label: "60PT07",
            useClass: "greenTxt mx-auto text",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60CYC_DP1",
            useClass: "greenTxt mx-auto text mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-21">
        <BlackContainer
          data={{
            label: "66CL8 AMP",
            useClass: "greenTxt mx-auto text",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-22">
        <BlackContainer
          data={{
            label: "60PT06",
            useClass: "greenTxt mx-auto text",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-23">
        <BlackContainer
          data={{
            label: "60PBW",
            useClass: "greenTxt mx-auto text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-24">
        <BlackContainer
          data={{
            label: "60CP4_KW",
            useClass: "greenTxt mx-auto text",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60FL01A-M",
            useClass: "greenTxt mx-auto text",
            unit: "LIT/MIN",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60FL02A-M",
            useClass: "greenTxt mx-auto text",
            unit: "LIT/MIN",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "60FL03A-M",
            useClass: "greenTxt mx-auto text",
            unit: "LIT/MIN",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-25">
        <div className="text d-flex justify-content-start">PRES HOLD</div>
        <div className="d-flex gap">
          <span className=" bg-secondary text">S4</span>
          <span className=" bg-secondary text">S5</span>
          <span className=" bg-secondary text">S1</span>
          <span className=" bg-secondary text">S7</span>
          <span className=" bg-secondary text">S8</span>
          <span className=" text">RLR UP</span>
        </div>
        <div className="d-flex gap mt-1">
          <span className=" bg-secondary text">S2</span>
          <span className=" bg-secondary text">S3</span>
          <span className=" bg-secondary text">S5</span>
          <span className=" bg-secondary text">S7</span>
          <span className=" bg-secondary text">S9</span>
          <span className=" text">RLR DN</span>
        </div>
      </div>
      <div className="position-absolute text-center single-text-26 border p-1">
        <div className="text d-flex justify-content-start">PROXY POS</div>
        <div className="d-flex gap">
          {/* <span className=" bg-secondary text">R1 PRX1</span>
          <span className=" bg-secondary text">R2 PRX1</span>
          <span className=" bg-secondary text">R3 PRX1</span> */}
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60R1-PRX1")}`}
            label="60R1-PRX1"
            text="R1 PRX1"
          />
          <MotorCircleDigitalTag
            className={`text  digital-tag ${useColorStatus("60R2-PRX1")}`}
            label="60R2-PRX1"
            text="R2 PRX1"
          />
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60R3-PRX1")}`}
            label="60R3-PRX1"
            text="R3 PRX1"
          />
        </div>
        <div className="d-flex gap mt-1">
          {/* <span className=" bg-secondary text">R1 PRX2</span>
          <span className=" bg-secondary text">R2 PRX2</span>
          <span className=" bg-secondary text">R3 PRX2</span> */}
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60R1-PRX2")}`}
            label="60R1-PRX2"
            text="R1 PRX2"
          />
          <MotorCircleDigitalTag
            className={`text  digital-tag ${useColorStatus("60R2-PRX2")}`}
            label="60R2-PRX2"
            text="R2 PRX2"
          />
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60R3-PRX2")}`}
            label="60R3-PRX2"
            text="R3 PRX2"
          />
        </div>
        <div className="d-flex gap mt-1">
          {/* <span className=" bg-secondary text">R1 PRX3</span>
          <span className=" bg-secondary text">R2 PRX3</span>
          <span className=" bg-secondary text">R3 PRX3</span> */}
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60R1-PRX3")}`}
            label="60R1-PRX3"
            text="R1 PRX3"
          />
          <MotorCircleDigitalTag
            className={`text  digital-tag ${useColorStatus("60R2-PRX3")}`}
            label="60R2-PRX3"
            text="R2 PRX3"
          />
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60R3-PRX3")}`}
            label="60R3-PRX3"
            text="R3 PRX3"
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-27  border p-1">
        <div className="text d-flex justify-content-start">LRCP</div>
        <div className="d-flex gap">
          {/* <span className=" bg-secondary text">EMST</span>
          <span className=" bg-secondary text">RUP</span> */}
          <MotorCircleDigitalTag
            className={`text  digital-tag ${useColorStatus("60EMST")}`}
            label="60EMST"
            text="EMST"
          />
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60RUP")}`}
            label="60RUP"
            text="RUP"
          />
        </div>
        <div className="d-flex gap mt-1">
          {/* <span className=" bg-secondary text">LTEST</span>
          <span className=" bg-secondary text">RDN</span> */}
          <MotorCircleDigitalTag
            className={`text  digital-tag ${useColorStatus("60LTEST")}`}
            label="60LTEST"
            text="LTEST"
          />
          <MotorCircleDigitalTag
            className={`text digital-tag ${useColorStatus("60RDN")}`}
            label="60RDN"
            text="RDN"
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-28  border p-1">
        <div className="text d-flex justify-content-start">
          REDUCED GEAR LUB
        </div>
        <div className="d-flex gap align-items-center">
          <div className="text ">PUMP</div>
          <div className="text-center">
            <div className="  text">LP</div>
            {/* <div className="  green-line-circle"></div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("60RGLP")}`}
              label="60RGLP"
            />
          </div>
          <div className="text-center">
            <div className="  text">HP1</div>
            {/* <div className="  green-line-circle"></div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("60RGHP1")}`}
              label="60RGHP1"
            />
          </div>
          <div className="text-center">
            <div className="  text">HP2</div>
            {/* <div className="  green-line-circle"></div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("60RGHP2")}`}
              label="60RGHP2"
            />
          </div>
          <div className="text-center">
            <div className="  text">HP3</div>
            {/* <div className="  green-line-circle"></div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("60RGHP3")}`}
              label="60RGHP3"
            />
          </div>
          <div className="text-center">
            <div className="  text">HP4</div>
            {/* <div className="  green-line-circle"></div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("60RGHP4")}`}
              label="60RGHP4"
            />
          </div>
          <div className="text-center">
            <div className="  text">HP5</div>
            {/* <div className="  green-line-circle"></div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("60RGHP5")}`}
              label="60RGHP5"
            />
          </div>
          <div className="text-center">
            <div className="  text">HP6</div>
            {/* <div className="  green-line-circle"></div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("60RGHP6")}`}
              label="60RGHP6"
            />
          </div>
        </div>
        <div className="text-center d-flex gap">
          <div className="text">PSW</div>
          <div className="d-flex left-1">
            {/* <span className="bg-secondary">PS</span> */}
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW13"
              )}`}
              label="60RG-PSW13"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-1"
              )}`}
              label="60RG-PSW14-1"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-2"
              )}`}
              label="60RG-PSW14-2"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-3"
              )}`}
              label="60RG-PSW14-3"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-4"
              )}`}
              label="60RG-PSW14-4"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-5"
              )}`}
              label="60RG-PSW14-5"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-6"
              )}`}
              label="60RG-PSW14-6"
              text="PS"
            />
            {/* <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span> */}
          </div>
        </div>
        <div className="text-center d-flex gap mt-1">
          <div className="text">PSW</div>
          <div className="d-flex left-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-7"
              )}`}
              label="60RG-PSW14-7"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-8"
              )}`}
              label="60RG-PSW14-8"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-9"
              )}`}
              label="60RG-PSW14-9"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-10"
              )}`}
              label="60RG-PSW14-10"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-11"
              )}`}
              label="60RG-PSW14-11"
              text="PS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "60RG-PSW14-12"
              )}`}
              label="60RG-PSW14-12"
              text="PS"
            />
            {/* <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span>
            <span className="bg-secondary">PS</span> */}
          </div>
        </div>
        <div className="text-center d-flex gap mt-1">
          <div className="text">FSW</div>
          <div className="d-flex left-3">
            {/* <span className="bg-secondary">FS</span>
            <span className="bg-secondary">FS</span> */}
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60RG-FSW1")}`}
              label="60RG-FSW1"
              text="FS"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60RG-FSW2")}`}
              label="60RG-FSW2"
              text="FS"
            />
          </div>
        </div>
        <div className="text-center d-flex gap mt-1">
          <div className="text">TSW</div>
          <div className="d-flex left-3">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60RG_TSW1")}`}
              label="60RG_TSW1"
              text="TS1"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60RG_TSW2")}`}
              label="60RG_TSW2"
              text="TS2"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60RG_TSW3")}`}
              label="60RG_TSW3"
              text="TS3"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60RG_TSW4")}`}
              label="60RG_TSW4"
              text="TS4"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag  ${useColorStatus("60RGHTR1")}`}
              label="60RGHTR1"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-29  border p-1">
        <div className="text d-flex justify-content-start">HYDRAULIC</div>
        <div className="d-flex gap text-center">
          <div>
            <div className="text">HYD/P</div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("60HCOLP")}`}
              label="60HCOLP"
              text="M"
            />
          </div>
          <div>
            <div className="text">PILOT</div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("60HOLP")}`}
              label="60HOLP"
              text="M"
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "60PT01_M",
                useClass: "greenTxt mx-auto  text",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex left-4 text-center mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-PSW1")}`}
              label="60HC-PSW1"
              text="PS"
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-PSW2")}`}
              label="60HC-PSW2"
              text="PS"
            />
          </div>
        </div>
        <div className="d-flex left-5 text-center mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-PSL")}`}
              label="60HC-PSL"
              text="PSL"
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-PSH")}`}
              label="60HC-PSH"
              text="PSH"
            />
          </div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("60HHTR")}`}
            label="60HHTR"
          />
        </div>
        <div className="d-flex left-6 text-center mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-TSW1")}`}
              label="60HC-TSW1"
              text="TS1"
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-TSW2")}`}
              label="60HC-TSW2"
              text="TS2"
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-TSW3")}`}
              label="60HC-TSW3"
              border
              text="TS3"
            />
          </div>
        </div>
        <div className="d-flex left-7 text-center mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-LSW1")}`}
              label="60HC-LSW1"
              text="LS1"
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus("60HC-LSW2")}`}
              label="60HC-LSW2"
              text="LS2"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-30  border p-1">
        <div className="text d-flex justify-content-start">
          RLR BEARING LUBRICATION
        </div>
        <div className="d-flex gap text-center">
          <div>
            <div className="text">FEED</div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("60RFOLP")}`}
              label="60RFOLP"
              text="M"
            />

            <MotorCircleDigitalTag
              className={`text-dark mt-1 digital-tag ${useColorStatus(
                "60RB-LSW1"
              )}`}
              label="60RB-LSW1"
              text="LS1"
            />
            <MotorCircleDigitalTag
              className={`text-dark mt-1 digital-tag ${useColorStatus(
                "60RB-TSW1"
              )}`}
              label="60RB-TSW1"
              text="TS1"
            />
          </div>
          <div>
            <div className="text">RET1</div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("60RROLP1")}`}
              label="60RROLP1"
              text="M"
            />

            <MotorCircleDigitalTag
              className={`text-dark mt-1 digital-tag ${useColorStatus(
                "60RB-LSW2"
              )}`}
              label="60RB-LSW2"
              text="LS2"
            />
            <MotorCircleDigitalTag
              className={`text-dark mt-1 digital-tag ${useColorStatus(
                "60RB-TSW2"
              )}`}
              label="60RB-TSW2"
              text="TS2"
            />
          </div>
          <div>
            <div className="text">RET2</div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("60RROLP2")}`}
              label="60RROLP2"
              text="M"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "60RLUBHTR"
              )} mt-1`}
              label="60RLUBHTR"
            />
            <MotorCircleDigitalTag
              className={`text-dark mt-1 digital-tag ${useColorStatus(
                "60RB-TSW3"
              )}`}
              label="60RB-TSW3"
              text="TS3"
            />
          </div>
          <div>
            <div className="text">RET3</div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("60RROLP3")}`}
              label="60RROLP3"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-31">
        <div className="text d-flex justify-content-center">PACKERS</div>
        <div className="border p-1">
          <div className="text d-flex justify-content-start">
            PACKER RUNNING STATUS
          </div>
          <div className="d-flex gap justify-content-center">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("PACKER1")}`}
                label="PACKER1"
                text="M"
              />
              <div className="text">1</div>
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("PACKER2")}`}
                label="PACKER2"
                text="M"
              />
              <div className="text">2</div>
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("PACKER3")}`}
                label="PACKER3"
                text="M"
              />
              <div className="text">3</div>
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("PACKER4")}`}
                label="PACKER4"
                text="M"
              />
              <div className="text">4</div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-32">
        <div>60CP4</div>

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("60CP4")}`}
          label="60CP4"
          text="M"
        />
      </div>
      <div className="position-absolute text-center single-text-33 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("60MDRF1")}`}
          label="60MDRF1"
          text="M"
        />
        <div className="greenDot">M</div>
        <div className="greenDot">M</div>
      </div>
      <div className="position-absolute text-center single-text-34 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark  digital-tag ${useColorStatus("_60CL11A_PC")}`}
          label="_60CL11A_PC"
          text="PC"
        />
        <MotorCircleDigitalTag
          className={`text-dark  digital-tag ${useColorStatus("_60CL10_PC")}`}
          label="_60CL10_PC"
          text="PC"
        />
      </div>
      <div className="position-absolute img-88 single-text-35"></div>
      <div className="position-absolute containerImage single-text-36"></div>
      <div className="position-absolute img-88 single-text-37"></div>
      <div className="position-absolute gray-green-red-img gray-img single-text-38"></div>
      <div className="position-absolute single-text-39 d-flex">
        <div className="text">FROM KILNS</div>
        <div className="text text-center">
          <div>CLINKER</div>
          <div>STORAGE YARD</div>
        </div>
      </div>
      <div className="connector-icon position-absolute text-center single-text-40">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("60CSAF")}`}
          label="60CSAF"
        />
      </div>
      <div className="connector-both-side-2 position-absolute text-center single-text-41">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("60BFF2")}`}
          label="60BFF2"
        />
      </div>
      <div className="connector-both-side-2 position-absolute text-center single-text-42">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("60PGDCF")}`}
          label="60PGDCF"
        />
      </div>
      <div className="chimni-red  position-absolute text-center single-text-43"></div>
      <div className="chimni-red  position-absolute text-center single-text-44"></div>
      <div className=" position-absolute text-center single-text-45 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("61CWF")}`}
          label="61CWF"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("62CWF")}`}
          label="62CWF"
          text="M"
        />
      </div>
      <MotorCircleDigitalTag
        className={`position-absolute circle-img digital-tag ${useFanImgTagsColorStatus(
          "60PGDCRF"
        )} text-center single-text-46 d-flex`}
        label="60PGDCRF"
      />
      <MotorCircleDigitalTag
        className={`position-absolute circle-img digital-tag c-grey-img-2 text-center single-text-47 d-flex`}
        label="60PGDCRF"
      />
      <div className=" position-absolute text-center single-text-48 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "60CYRF1"
          )}`}
          label="60CYRF1"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "60CYRF2"
          )}`}
          label="60CYRF2"
        />
      </div>
      <div className=" position-absolute text-center single-text-49 ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("60R1_PRX1A_HI")}`}
          label="60R1_PRX1A_HI"
        />
        <MotorCircleDigitalTag
          className={`square mt-2 digital-tag ${useColorStatus(
            "60R1_PRX1A_NOR"
          )}`}
          label="60R1_PRX1A_NOR"
        />
      </div>
      <div className=" position-absolute text-center single-text-50 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("60MS3")}`}
          label="60MS3"
        />
      </div>
    </div>
  );
};
