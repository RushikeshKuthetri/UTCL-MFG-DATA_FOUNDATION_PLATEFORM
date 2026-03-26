import {
  GreenDot,
  KilnPipe,
  BottomLeftBox,
  SingleText,
  TextColumn,
  BlackContainer,
  ProgressBarMimic,
} from "../../index";
import { cementMill3TextColumn2 } from "../../../data/nathdwara/cementmill3/cementMillTextColumn";
import { TopLeftBox } from "../KilnRowMill/Box/TopLeftBox";
import { TextContainerWithWrapWord } from "../RowMillNew/TextContainer/TextContainer";
import {
  coalMillTextColumn1,
  coalMillTextColumn10,
  coalMillTextColumn11,
  coalMillTextColumn12,
  coalMillTextColumn2,
  coalMillTextColumn3,
  coalMillTextColumn4,
  coalMillTextColumn5,
  coalMillTextColumn6,
  coalMillTextColumn7,
  coalMillTextColumn8,
  coalMillTextColumn9,
} from "../../../data/nathdwara/coalmill1/coalMillTextColumn";

export const CoalMill1 = () => {
  return (
    <div className="p-1 CoalMill1 w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="row m-0">
        <div className="col-2 p-1">
          <div className="CGRnBox text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt mt-1",
                label: "L41WF1",
              }}
            />
            <GreenDot data={{ useClass: "" }} />
            <BlackContainer
              data={{
                label: "L41WF1FZ1",
                useClass: "greenTxt mx-auto",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "L41WF1SZ1",
                useClass: "greenTxt mx-auto",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KMWF1_SP",
                useClass: "greenTxt mx-auto",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="CGRnBox  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt mt-1",
                label: "L41WF2",
              }}
            />
            <GreenDot data={{ useClass: "" }} />
            <BlackContainer
              data={{
                label: "L41WF2FZ1",
                useClass: "greenTxt mx-auto",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "L41WF2SZ1",
                useClass: "greenTxt mx-auto",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KMWF2_SP",
                useClass: "greenTxt mx-auto",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TopLeftBox
            parentDivClass="CGRnBox  text-center"
            useClass="d-flex justify-content-between mt-1"
            list={cementMill3TextColumn2}
          />
        </div>
        <div className="pipeVr position-absolute pipe-1">
          <i className="fas fa-long-arrow-alt-up mt-5"></i>
        </div>
        <div className="pipeVr position-absolute pipe-2"></div>
        <div className="pipeVr position-absolute pipe-3 pt-5">
          <i className="fas fa-long-arrow-alt-down mt-5 mb-5"></i>
          <i className="fas fa-long-arrow-alt-down mt-5"></i>
        </div>
        <div className="pipeVr position-absolute pipe-4 pt-5">
          <i className="fas fa-long-arrow-alt-up mt-5"></i>
        </div>
        <div className="pipeVr position-absolute pipe-5"></div>
        <div className="pipeVr position-absolute pipe-6 pt-5">
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
        <div className="pipeHr position-absolute pipe-7 text-center">
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
        <div className="pipeHr position-absolute pipe-8"></div>
        <div className="pipeHr position-absolute pipe-9"></div>
        <div className="pipeHr position-absolute pipe-10"></div>
        <div className="pipeHr position-absolute pipe-11 text-center">
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
        <div className="pipeHr position-absolute pipe-12 text-center">
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
        <div className="pipeHr position-absolute pipe-13"></div>
        <div className="pipeHr position-absolute pipe-14"></div>
        <div className="pipeHr position-absolute pipe-15"></div>
        <div className="pipeHr position-absolute pipe-16"></div>
        <div className="pipeHr position-absolute pipe-17 text-center">
          <i className="fas fa-long-arrow-alt-left"></i>
        </div>
        <div className="pipeVr position-absolute pipe-18 pt-3">
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
        <div className="pipeVr position-absolute pipe-19"></div>
        <div className="pipeHr position-absolute pipe-20"></div>
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-21" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-22" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-23" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-24" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-27" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-28" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-29" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-30" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-31" }} />
        <KilnPipe data={{ classname: "yellowline-Vr downArrow pipe-32" }} />
        <div className="bigContainer position-absolute single-item-1 d-flex flex-column justify-content-between align-items-center">
          <div className="greenDot"></div>
          <div className="text-dark">L41SR1</div>
          <ProgressBarMimic />
          <BlackContainer
            data={{
              useClass: "greenTxt mt-3",
              label: "L41HY1ZZ1",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt",
              label: "L41RM1AZ1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="pr-1 d-flex flex-column justify-content-around align-items-end blue-pipe position-absolute single-item-2">
          <GreenDot data={{ useClass: "" }} />
          <div className="greenDot ml-2">M</div>
        </div>
        <div className="bagHouse text-center pr-4 position-absolute single-item-3">
          <div className="d-flex justify-content-end">
            <div className="text-dark mr-4">BAGHOUSE</div>
            <BlackContainer
              data={{
                useClass: "greenTxt mt-3",
                label: "L41BH1-PZ11",
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
                label: "L41BH1-DP1",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="linebottel position-absolute single-item-4"></div>
        <div className="connector-both-side-2 position-absolute single-item-5">
          {" "}
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-6">
          {" "}
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="triangle-with-squares position-absolute single-item-7"></div>

        <TextColumn
          list={coalMillTextColumn4}
          useClass="position-absolute single-item-8"
          yellowText="L41FN1"
          textClass="yellowTxt"
        />
        <TextColumn
          list={coalMillTextColumn12}
          useClass="position-absolute single-item-9"
        />
        <div className="position-absolute single-item-10">
          <BlackContainer
            data={{
              label: "L41RM1PZ2",
              useClass: "greenTxt mt-1",
              unit: "MB",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41RM1TZ2",
              useClass: "greenTxt mt-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41RM1PZ3",
              useClass: "greenTxt mt-1",
              unit: "MB",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-11">
          <BlackContainer
            data={{
              label: "L41HY1_GRNPRSP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41HY1AI1",
              useClass: "greenTxt mt-1",
              unit: "B",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "HYDTANK_TEMP",
              useClass: "greenTxt mt-1",
              unit: "B",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextColumn
          list={coalMillTextColumn11}
          useClass="position-absolute single-item-12"
        />
        <TextColumn
          list={coalMillTextColumn10}
          useClass="position-absolute single-item-13"
        />
        <TextColumn
          list={coalMillTextColumn9}
          useClass="position-absolute single-item-14"
        />
        <div className="hpipecircle position-absolute single-item-15">
          <span className="grayDot">M</span>
        </div>

        <div className="hpipecircle position-absolute single-item-17">
          <span className="greenDot"></span>
        </div>
        <div className="position-absolute single-item-18">
          <BlackContainer
            data={{
              label: "L41RM1PZ3_PID:IO.OUTP.VALUE",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_KMFEED_PV1",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-19">
          <BlackContainer
            data={{
              label: "L41LD3_MAN",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41LD3ZZ1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-20">
          <BlackContainer
            data={{
              label: "L41SR1TZ2",
              useClass: "greenTxt mt-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41SR1TZ3",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-21">
          <BlackContainer
            data={{
              label: "L41TV1_MAN",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41TV1ZZ1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "L41TV1",
            }}
          />
        </div>
        <TextColumn
          list={coalMillTextColumn5}
          useClass="position-absolute single-item-22"
        />
        <div className="position-absolute single-item-23">
          <BlackContainer
            data={{
              label: "L41RM1TZ1",
              useClass: "greenTxt mt-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41RM1PZ1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-24">
          <BlackContainer
            data={{
              label: "L41SC1-IZ1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "L41SC1",
            }}
          />
        </div>
        {/* <BlackContainer
          data={{
            label: "NA-28",
            useClass: "greenTxt position-absolute single-item-25",
            unit: "C",
            unitColor: "unitColor",
          }}
        /> */}
        <div className="position-absolute single-item-26 text-right">
          <i className="fa-solid fa-road-barrier"></i>
          <SingleText
            useClass="mt-4"
            yellowTextUp="L41SD3"
            textClass="yellowTxt"
            data={{
              blackTextLabel: "L41EP4AZ1",
              blackTextClass: "greenTxt mt-1",
              unit: "PPM",
            }}
          />
        </div>

        <SingleText
          useClass="position-absolute single-item-27"
          yellowTextUp="CL BIN CHNGOVR AFT 10 MIN"
          textClass="yellowTxt"
          data={{
            blackTextLabel: "CL_BIN_CHANG_TIME",
            blackTextClass: "greenTxt mt-1",
            unit: "MIN",
          }}
        />
        <BlackContainer
          data={{
            label: "L41FN2PZ1",
            useClass: "greenTxt position-absolute single-item-29",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1PZ1_PID:IO.WSP.VALUE",
            useClass: "greenTxt position-absolute single-item-30",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41LU4FZ1",
            useClass: "greenTxt position-absolute single-item-31",
            unit: "LPM",
            unitColor: "unitColor",
          }}
        />
        <div className="position-absolute single-item-32">
          <BlackContainer
            data={{
              label: "L41FN3_SP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41FN3SZ1",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41FN3IZ1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <SingleText
          useClass="d-flex position-absolute single-item-33"
          yellowTextUp="IGG TANK PRESSURE"
          textClass="yellowTxt"
          data={{
            blackTextLabel: "L41IN1PZ1",
            blackTextClass: "greenTxt ml-3",
            unit: "BAR",
          }}
        />
        <div className="d-flex align-items-center CGRnBox p-1 position-absolute single-item-35">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-2",
              label: "AFR",
            }}
          />
          <TextColumn list={coalMillTextColumn2} />
        </div>
        <BottomLeftBox
          parentDivClass="CGRnBox p-1 position-absolute single-item-36"
          list={coalMillTextColumn3}
          useClass="d-flex align-items-center mt-1"
        />
        <div className="roller-drum position-absolute d-flex justify-content-center align-items-center single-item-37">
          <GreenDot data={{ useClass: "" }} />
        </div>
        <div className="position-absolute single-item-38">
          <div className="greenSqure mt-2 d-block"></div>
          <BlackContainer
            data={{
              label: "L41EP1-PZ2",
              useClass: "greenTxt mt-2 mb-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <BlackContainer
            data={{
              label: "L41BH1-TE-03",
              useClass: "greenTxt mt-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-39">
          <div className="greenSqure mt-2 d-block"></div>
          <BlackContainer
            data={{
              label: "L41EP1-PZ3",
              useClass: "greenTxt mt-2 mb-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <BlackContainer
            data={{
              label: "L41BH1-TE-04",
              useClass: "greenTxt mt-5",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-item-40">
          <div className="greenSqure mt-2 d-block"></div>
          <BlackContainer
            data={{
              label: "L41EP1-PZ4",
              useClass: "greenTxt mt-2 mb-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <BlackContainer
            data={{
              label: "L41BH1-TE-05",
              useClass: "greenTxt mt-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-item-41">
          <div className="greenSqure mt-2 d-block"></div>
          <BlackContainer
            data={{
              label: "L41EP1-PZ5",
              useClass: "greenTxt mt-2 mb-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <BlackContainer
            data={{
              label: "L41BH1-TE-06",
              useClass: "greenTxt mt-5",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-item-42">
          <div className="greenSqure mt-2 d-block"></div>
          <BlackContainer
            data={{
              label: "L41EP1-PZ7",
              useClass: "greenTxt mt-2 mb-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <BlackContainer
            data={{
              label: "L41BH1-TE-07",
              useClass: "greenTxt mt-1",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="position-absolute single-item-43">
          <div className="greenSqure mt-2 d-block"></div>
          <BlackContainer
            data={{
              label: "L41EP1-PZ6",
              useClass: "greenTxt mt-2 mb-4",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <BlackContainer
            data={{
              label: "L41BH1-TE-08",
              useClass: "greenTxt mt-5",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-45",
            label: "L91RA2-7",
          }}
        />

        <div className="position-absolute single-item-44">
          <div className="bars"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "L41LD3",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-46",
            label: "TO L91SC",
          }}
        />
        <div className="position-absolute single-item-47">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mb-2",
              label: "L41BC1",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-48",
            label: "FRESH AIR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-49",
            label: "291CV5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-50",
            label: "TD 291A5A/391CV4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-51",
            label: "FROM HAC1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-52",
            label: "L41SD1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-53",
            label: "L41FN3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-54",
            label: "L41NA1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-55",
            label: "L41LD1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-56",
            label: "L41FN2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-item-71",
            label: "L41FN2A",
          }}
        />

        <div className="position-absolute single-item-61">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "L41WP2A",
            }}
          />
        </div>
        <div className="position-absolute single-item-62">
          <div className="greenDot mt-2 d-block"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "L41WP1",
            }}
          />
        </div>
        <div className="position-absolute single-item-63">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "L41FN7",
            }}
          />
          <GreenDot data={{ useClass: "" }} />
          <div>
            <i className="fas fa-long-arrow-alt-down"></i>
          </div>
          <div className="bars mt-2"></div>
        </div>

        <div className="position-absolute single-item-64">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "CAL",
            }}
          />
        </div>
        <div className="position-absolute single-item-65">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "SIDE",
            }}
          />
        </div>
        <div className="position-absolute single-item-66">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "KILN",
            }}
          />
        </div>
        <div className="position-absolute single-item-67">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "SIDE",
            }}
          />
        </div>
        <div className=" d-flex position-absolute single-item-68">
          <div className="text-dark mr-2"> MVA HIGH</div>
        </div>

        <div className="d-flex position-absolute single-item-70">
          <BlackContainer
            data={{
              label: "L41SR1TZ1",
              useClass: "greenTxt",
              unit: "C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="row m-0 justify-content-end">
        <div className="CGRnBox p-1 col-2">
          <div className="d-flex flex-column justify-content-center mt-2">
            <div className="d-flex align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt",
                  label: "GEAR BOX LUB",
                }}
              />
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L41GB1",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "LU4",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L41HE2",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L41HE3",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="CGRnBox p-1 col-2">
          <div className="d-flex  flex-column justify-content-around mt-2">
            <div className="d-flex align-items-center justify-content-between">
              {/* <div className="redgrey-sqaure"></div> */}
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt",
                  label: "KM HYD UNIT",
                }}
              />
              {/* <div className="redgrey-sqaure"></div> */}
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L41HY1",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "LU1",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "LU2",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L41HE1",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="CGRnBox p-1 col-2">
          <div className="d-flex  flex-column justify-content-around mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "SEP. LUBRICATION",
              }}
            />
            <div className="d-flex justify-content-around">
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "LU3",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "LU5",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "FN4",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="CGRnBox p-1 col-2">
          <div className="d-flex  flex-column justify-content-around mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "CALORIFIER",
              }}
            />
            <div className="d-flex justify-content-around">
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L412U7",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L412U6",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L41HE4",
                  }}
                />
              </div>
              <div>
                <GreenDot data={{ useClass: "" }} />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "yellowTxt mt-1",
                    label: "L41HE5",
                  }}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="CGRnBox p-1 col-3">
          <div className="d-flex justify-content-between mt-01">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "KILN BIN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "CAL. BIN",
              }}
            />
          </div>
          <TextColumn
            list={coalMillTextColumn6}
            useClass="d-flex justify-content-between mt-01"
          />
          <TextColumn
            list={coalMillTextColumn7}
            useClass="d-flex justify-content-between mt-01"
          />
          <TextColumn
            list={coalMillTextColumn8}
            useClass="d-flex justify-content-between mt-01"
          />
        </div>
        <BottomLeftBox
          list={coalMillTextColumn1}
          parentDivClass="CGRnBox p-1 col-1"
        />{" "}
      </div>
    </div>
  );
};
