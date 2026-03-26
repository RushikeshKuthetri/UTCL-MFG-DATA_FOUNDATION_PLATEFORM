import {
  GreenDot,
  KilnPipe,
  BlackContainer,
  TextContainerWithWrapWord,
  TopLeftBox,
  ProgressBarMimic,
} from "../../index";
import {
  cementMill3TextColumn4,
  cementMill3TextColumn5,
  cementMill3TextColumn6,
  cementMill3TextColumn7,
  cementMill3TextColumn8,
  cementMill3TextColumn9,
  cementMill3TextColumn10,
} from "../../../data/nathdwara/cementmill3/cementMillTextColumn";

export const CoalMill2 = () => {
  return (
    <div className="pl-1 pr-1 CoalMill2 w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="row m-0">
        <div className="col-2 p-1">
          <div className="pipeHr-grn text-center">L42WF1</div>
          <TopLeftBox
            parentDivClass="boxContainer"
            useClass="d-flex justify-content-between mt-01"
            list={cementMill3TextColumn8}
          />
          <div className="pipeHr-grn text-center">L42WF2</div>
          <TopLeftBox
            parentDivClass="boxContainer"
            useClass="d-flex justify-content-between mt-01"
            list={cementMill3TextColumn9}
          />
          <div className="pipeHr-grn text-center">L42WF3</div>
          <TopLeftBox
            parentDivClass="boxContainer"
            useClass="d-flex justify-content-between mt-01"
            list={cementMill3TextColumn10}
          />
          <TopLeftBox
            parentDivClass="box-1"
            useClass="d-flex justify-content-between mt-01"
            list={cementMill3TextColumn7}
          />
        </div>
        <div className="pipeHr position-absolute pipe-1"></div>
        <div className="pipeHr position-absolute pipe-2"></div>
        <div className="pipeHr position-absolute pipe-3"></div>
        <div className="pipeHr position-absolute pipe-4"></div>
        <div className="pipeHr position-absolute pipe-5"></div>
        <div className="pipeHr position-absolute pipe-6"></div>
        <div className="pipeVr position-absolute pipe-7"></div>
        <div className="pipeVr position-absolute pipe-8"></div>
        <div className="pipeVr position-absolute pipe-9"></div>
        <div className="pipeVr position-absolute pipe-10"></div>
        <div className="position-absolute pipe-11">
          <div className="pipeVr d-flex flex-column align-items-center justify-content-between">
            <BlackContainer
              data={{
                label: "A2482CRS3_WL",
                useClass: "greenTxt mt-1",
                unit: "TON",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark"> FB2 </div>
          </div>
          <div className="triangle-with-squares position-absolute cone-1"></div>
          <div className="triangle-with-squares position-absolute cone-2"></div>
        </div>
        <div className="position-absolute pipe-12">
          <div className="pipeVr d-flex flex-column align-items-center justify-content-between">
            <BlackContainer
              data={{
                label: "A2482CRS2_WL",
                useClass: "greenTxt mt-1",
                unit: "TON",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark"> FB1 </div>
          </div>
          <div className="triangle-with-squares position-absolute cone-1"></div>
          <div className="triangle-with-squares position-absolute cone-2"></div>
        </div>
        <div className="position-absolute pipe-13">
          <div className="pipeVr d-flex flex-column align-items-center justify-content-between">
            <BlackContainer
              data={{
                label: "A2482CRS1_WL",
                useClass: "greenTxt mt-1",
                unit: "TON",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark"> FB3 </div>
          </div>
          <div className="triangle-with-squares position-absolute cone-1"></div>
          <div className="triangle-with-squares position-absolute cone-2"></div>
        </div>
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
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-26" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-27" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-28" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-29" }} />
        <KilnPipe data={{ classname: "yellowline-Vr pipe-30" }} />
        <KilnPipe data={{ classname: "yellowline-Vr pipe-31" }} />
        <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-32" }} />
        <KilnPipe data={{ classname: "yellowline-Hr pipe-33" }} />
        <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-25" }} />
        <KilnPipe data={{ classname: "yellowline-Hr rightarrow pipe-34" }} />
        <div className="bigContainer position-absolute single-item-1 d-flex flex-column justify-content-between align-items-center">
          <div className="greenDot"></div>
          <ProgressBarMimic />
          <BlackContainer
            data={{
              useClass: "greenTxt mt-3",
              label: "A2_L42LU2N01LYH",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt",
              label: "A2L42RM1N06V01",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="bagHouse text-center pr-4 position-absolute single-item-2">
          <div className="d-flex justify-content-end">
            <div className="text-dark mr-4">BAGHOUSE</div>
            <BlackContainer
              data={{
                useClass: "greenTxt mt-3",
                label: "A2L42BH1_PZ11",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="greenDot"></div>
          <div className="d-flex justify-content-around">
            <BlackContainer
              data={{
                useClass: "greenTxt mt-3",
                label: "A2L42BH1_DP1",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="triangle-with-squares position-absolute single-item-3"></div>
        <div className="roller-drum position-absolute d-flex justify-content-center align-items-center single-item-4">
          <GreenDot data={{ useClass: "" }} />
        </div>
        <div className="connector-both-side-2 position-absolute single-item-5">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-6">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-7">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-8">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <TopLeftBox
          parentDivClass="boxContainer position-absolute single-item-9"
          useClass="d-flex justify-content-between mt-01"
          list={cementMill3TextColumn6}
        />
        <div className="hpipecircle position-absolute single-item-10">
          <span className="greenDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="hpipecircle position-absolute single-item-11">
          <span className="greenDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="hpipecircle position-absolute single-item-12">
          <span className="greenDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="hpipecircle position-absolute single-item-13">
          <span className="greenDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>

        <div className="position-absolute single-item-14">
          <BlackContainer
            data={{
              label: "A2L42FN1N13V01",
              useClass: "greenTxt mt-1",
              unit: "MM/S",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42FN1N13V02",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-15">
          <BlackContainer
            data={{
              label: "A2L42RM1_KW",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42MD1RTD",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42GB1N01T01",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-16">
          <BlackContainer
            data={{
              label: "A2_L42RM1N04P01",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42RM1N03T01",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2_L42RM1N05P01",
              useClass: "greenTxt mt-1",
              unit: "mBar",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-item-18">
          <BlackContainer
            data={{
              label: "A2L42FN3N01V01",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42FN3N02V01",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-19">
          <BlackContainer
            data={{
              label: "A2L42FN3PID_A:MV.VALUE",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42FN3PID_A:IO.WSP.VALUE",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-20">
          <BlackContainer
            data={{
              label: "A2L42LD2PID:MV.VALUE",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42LD2PID:IO.WSP.VALUE",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-21">
          <BlackContainer
            data={{
              label: "A2462RM1005P01_PID:MV.VALUE",
              useClass: "greenTxt",
              unit: "mBar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2462RM1005P01_PID:IO.OUTP.VALUE",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-22">
          <BlackContainer
            data={{
              label: "A2L42FN3N01T01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42FN3N02T01",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-23">
          <BlackContainer
            data={{
              label: "A2_L42RM1N01T01",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2_L42RM1N02P01",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-24">
          <BlackContainer
            data={{
              label: "A2L42RM1VZ2",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42RM1N06V02",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-25">
          <BlackContainer
            data={{
              label: "A2L42RM1N06P01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42RM1N06P01",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-26">
          <BlackContainer
            data={{
              label: "A2L42WP1A01F01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42WP1M01Z01",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-27">
          <BlackContainer
            data={{
              label: "A2L42FN2A1",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42FN2N01P01",
              useClass: "greenTxt mt-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <div className="text-dark mt-4"> L42FN2A </div>
        </div>
        <div className="position-absolute single-item-28">
          <BlackContainer
            data={{
              label: "A2_L42SR1A1:MV.VALUE",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2_L42SR1A1:IO.WSP.VALUE",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-29">
          <BlackContainer
            data={{
              label: "A2_L42LU2N01GRSP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2_L42LU2N01GRPV",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-30">
          <BlackContainer
            data={{
              label: "A2L42ESPN15T01",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42BH1N01P01",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-31">
          <BlackContainer
            data={{
              label: "A2L42ESPN16T01",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42EP1N01P04",
              useClass: "greenTxt mt-1",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-32">
          <BlackContainer
            data={{
              label: "A2_L42FN1AOP:MV.VALUE",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2_L42FN1AOP:IO.WSP.VALUE",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-33">
          <BlackContainer
            data={{
              label: "A2L42RM1N07T01",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="text-dark mt-1"> L92SG2 </div>
        </div>
        <div className="position-absolute single-item-34">
          <BlackContainer
            data={{
              label: "A2L42RM1N08T01",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="text-dark mt-1"> L92SG3 </div>
        </div>

        <BlackContainer
          data={{
            label: "A2L42RM1N09T01",
            useClass: "greenTxt position-absolute single-item-35",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A2L92SC2A1",
            useClass: "greenTxt position-absolute single-item-36",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex position-absolute single-item-37">
          <div className="text-dark"> IGG TANK PRESSURE </div>
          <BlackContainer
            data={{
              label: "A2L42IN1_PZ1",
              useClass: "greenTxt ml-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" position-absolute single-item-38">
          <div className="text-dark"> L42LD2 </div>
          <BlackContainer
            data={{
              label: "A2L42LD2M01Z01",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "A2L42ESPO2IL",
            useClass: "greenTxt position-absolute single-item-39",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A2L92FB3NO1P01",
            useClass: "greenTxt position-absolute single-item-40",
            unit: "PPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A2L92SC1A1",
            useClass: "greenTxt position-absolute single-item-42",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="position-absolute single-item-43">
          <div className="text-dark"> L42LD3 </div>
          <BlackContainer
            data={{
              label: "A2L42LD3ZZ1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-44">
          <div className="text-dark"> L43LD4 </div>
          <BlackContainer
            data={{
              label: "A2L43LD4ZZ1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-dark position-absolute single-item-45">L42BC1</div>
        <div className="text-dark position-absolute single-item-46">L43SD4</div>
        <div className="text-dark position-absolute single-item-47">L42CV1</div>
        <div className="text-dark position-absolute single-item-48">392SGH</div>
        <div className="text-dark position-absolute single-item-49">392AS7</div>
        <div className="text-dark position-absolute single-item-50">L42CN1</div>
        <div className="text-dark position-absolute single-item-51">
          FROM 452FN1
        </div>
        <div className="text-dark position-absolute single-item-52">L42SD4</div>
        <div className="text-dark position-absolute single-item-53">L42LD1</div>
        <div className="text-dark position-absolute single-item-54">L42FN3</div>
        <div className="text-dark position-absolute single-item-55">L42SD5</div>
        <div className="text-dark position-absolute single-item-56">392CV2</div>
        <div className="hpipecircle position-absolute single-item-61">
          <span className="greenDot"></span>
          <span className="blackTxt p-1"></span>
          <span className="grayDot"></span>
        </div>
        <div className="text-dark position-absolute single-item-62"> WP1A </div>
        <div className="text-dark position-absolute single-item-63">L42SD2</div>
        <div className="text-dark position-absolute single-item-64">L42SD3</div>
        <div className="text-dark position-absolute single-item-65">
          L92RA2-5
        </div>
        <div className="text-dark position-absolute single-item-66">L42FN1</div>
        <div className="text-dark position-absolute single-item-67">L92SG1</div>
        <div className="text-dark position-absolute single-item-68">L92SC1</div>
        <div className="text-dark position-absolute single-item-69">L42SM2</div>
        <div className="text-dark position-absolute single-item-70">L92SC2</div>
        <div className="text-dark position-absolute single-item-71">L92RA8</div>
        <div className="text-dark position-absolute single-item-72">L92RA7</div>
        <div className="text-dark position-absolute single-item-73">L92RA9</div>
        <div className="text-dark position-absolute single-item-74"> ILC </div>
        <div className="text-dark position-absolute single-item-75"> SLC </div>
        <div className="text-dark position-absolute single-item-76"> KILN </div>
        <div className="text-dark position-absolute single-item-77">L42WP1</div>
        <div className="text-dark position-absolute single-item-78"> WP1A </div>
        <div className="text-dark position-absolute single-item-79">L42RM1</div>
        <div className="position-absolute single-item-80">
          <BlackContainer
            data={{
              label: "A2L42SR1_SZ1",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A2L42SR1_IZ1",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="pipeVr position-absolute single-item-81">
          <BlackContainer
            data={{
              label: "HYDTANK_TEMP",
              useClass: "greenTxt mx-auto mt-2",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "HYDTANK_TEMP",
              useClass: "greenTxt mt-2 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-82">
          <BlackContainer
            data={{
              label: "A2L42BH1_PZ1A",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />

          <div className="greenSqure mt-2 d-block"></div>
          <BlackContainer
            data={{
              label: "A2L42BH1_PZ1",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <div className="greenSqure mt-4 d-block"></div>
        </div>
        <div className="position-absolute single-item-83">
          <div className="greenSqure mb-3 d-block"></div>
          <GreenDot data={{ useClass: "" }} />
          <div className="greenSqure mt-3 d-block"></div>
          <BlackContainer
            data={{
              label: "A2L42BH1_PZ2",
              useClass: "greenTxt mt-4",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-84">
          <div className="greenSqure d-block"></div>
          <BlackContainer
            data={{
              label: "A2L42BH1_PZ3",
              useClass: "greenTxt mt-3 mb-3 mb-4",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <div className="greenSqure mt-3 d-block"></div>
        </div>
        <div className="position-absolute single-item-85">
          <div className="greenSqure mb-3 d-block"></div>
          <GreenDot data={{ useClass: "" }} />
          <div className="greenSqure mt-3 d-block"></div>
          <BlackContainer
            data={{
              label: "A2L42BH1_PZ4",
              useClass: "greenTxt mt-3",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-item-86">
          <BlackContainer
            data={{
              label: "A2L42SC1IZ1",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <div className="text-dark mt-1"> L42SC1 </div>
        </div>
        <div className="truck position-absolute single-item-87"></div>
        <div className="scalemeasure position-absolute single-item-88"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center position-absolute single-item-89",
            label: "TO NEW COAL MILL 3",
          }}
        />
      </div>
      <div className="row m-0">
        <div className="dashed-box col-2 p-1">
          <div className="d-flex">
            <div className="text-dark text-center">SEPE.LUB </div>
            <BlackContainer
              data={{
                label: "A2L42SR1N03T01",
                useClass: "greenTxt mx-auto",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div className="boxContainer h-100">
            <BlackContainer
              data={{
                label: "A2L42LU7PZ1",
                useClass: "greenTxt ml-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex justify-content-around">
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "LU6",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "LU7",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "DPSW",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dashed-box col-2 p-1">
          <div className="text-dark text-center">BIN ANALYSER </div>

          <TopLeftBox
            parentDivClass="boxContainer h-100 w-100"
            useClass="d-flex justify-content-between mt-01"
            list={cementMill3TextColumn4}
          />
        </div>

        <div className="dashed-box col-2 p-1">
          <div className="text-dark text-center">OPPER LEVEL </div>
          <div className="boxContainer d-flex">
            <TopLeftBox
              parentDivClass="w-50"
              useClass="d-flex justify-content-between mt-01"
              list={cementMill3TextColumn5}
            />
            <div className="w-50">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center",
                  label: "ALT FUEL",
                }}
              />
              <BlackContainer
                data={{
                  label: "A2V92HP1N01LZ1",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "T",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "A2V92HP2N01LZ1",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
