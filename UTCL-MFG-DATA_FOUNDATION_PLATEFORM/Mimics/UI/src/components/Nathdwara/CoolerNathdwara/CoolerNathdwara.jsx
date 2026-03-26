import {
  coolerTextColumn1,
  coolerTextColumn2,
  coolerTextColumn3,
  coolerTextColumn4,
  coolerTextColumn5,
  coolerTextColumn6,
  coolerTextColumn7,
  coolerTextColumn8,
  coolerTxtContainerList1,
} from "../../../data/nathdwara/cooler2/coolerTextColumn";
import {
  BottomLeftBox,
  SingleText,
  TextColumn,
  TxtcontainerMap,
  BlackContainer,
} from "../../index";

export const CoolerNathdwara = () => {
  return (
    <div className="pl-1 pr-1 CoolerNathdwara w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="row ml-0 mr-0 h-11">
        <TextColumn
          useClass="CGRnBox position-absolute single-text-1"
          list={coolerTextColumn1}
        />
        <TextColumn
          useClass="CGRnBox position-absolute single-text-2"
          list={coolerTextColumn2}
        />
        <TextColumn
          useClass="CGRnBox position-absolute single-text-3"
          list={coolerTextColumn3}
        />
        <TextColumn
          useClass="CGRnBox position-absolute single-text-4"
          list={coolerTextColumn4}
        />
        <TxtcontainerMap list={coolerTxtContainerList1} />
        <TextColumn
          useClass="pipeVr d-flex flex-column justify-content-around align-items-center single-text-13"
          list={coolerTextColumn5}
        />
        <BlackContainer
          data={{
            label: "C2_AVG_RW_PRESS",
            useClass: "greenTxt position-absolute single-text-14",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "C2472EP1N01T03",
            useClass: "greenTxt position-absolute single-text-15",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "C2472WP1N01F01",
            useClass: "greenTxt position-absolute single-text-16",
            unit: "M3/H",
            unitColor: "unitColor",
          }}
        />
        <div className="position-absolute single-text-17">
          <i className="fas fa-long-arrow-alt-left"></i>
        </div>
        <div className="position-absolute single-text-18">
          <i className="fas fa-long-arrow-alt-left"></i>
        </div>
        <div className="yellowline-Hr pipe-1 position-absolute"></div>
        <div className="yellowline-Vr pipe-2 position-absolute"></div>
        <div className="yellowline-Vr pipe-3 position-absolute"></div>
        <div className="yellowline-Vr pipe-4 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-5 position-absolute"></div>
      </div>
      <div className="row ml-0 mr-0 align-items-end">
        <div className="col-2 boxContainer text-center pt-4 pb-4">
          <div className="text-dark">AIR BLASTER </div>
          <div className="circle-group mt-1 mx-auto">
            <span className="greySqure"></span>
            <span className="c-text">c</span>
          </div>
          <div className="text-dark mt-1">SELECT 1-5 </div>
          <BlackContainer
            data={{
              label: "C2_472KH1N01P01",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2_472KH1N01T01",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2472GQ1N01T01",
              useClass: "greenTxt mt-5 mx-auto",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2472GQ1N02T01",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2472GQ1N03T01",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="text-dark mt-1">1 </div>

          <div className="text-dark position-absolute single-text-33">1A </div>
        </div>
        <div className="col-8 mb-2 boxContainer text-center">
          <div className="d-flex justify-content-around">
            <div>
              <div className="text-dark">FWD OIL PRS </div>
              <div className="text-dark mt-1">REV OIL PRS </div>
            </div>
            <div>
              <div className="text-dark mt-1">DRV-11 </div>
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P01",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P02",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">DRIVE SPEED PV </div>
            </div>
            <div>
              <div className="text-dark mt-1">DRV-12 </div>
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P03",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P04",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A02_C61",
                  useClass: "greenTxt mt-1",
                  unit: "SPM",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="text-dark mt-1">DRV-21 </div>
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P05",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P06",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">SPEED SP </div>
            </div>
            <div>
              <div className="text-dark mt-1">DRV-22 </div>
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P07",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2_E5P2L1A01P08",
                  useClass: "greenTxt mt-1",
                  unit: "BAR",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="box-2">
                <BlackContainer
                  data={{
                    label: "C2472GQ1N01T01",
                    useClass: "greenTxt mt-1",
                    unit: "SPM",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "C2472GQ1N01T01",
                    useClass: "greenTxt mt-1",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </div>

              <div className="text-dark mt-1">Strk/mn </div>
            </div>
            <div>
              {/* <div className="redgrey-sqaure mt-1"></div> */}
              <div className="text-dark mt-1">472GQ1</div>
            </div>
            <div>
              {/* <div className="redgrey-sqaure mt-1"></div> */}
              <BlackContainer
                data={{
                  label: "C2_MMCOIL_TZ1",
                  useClass: "greenTxt mt-1",
                  unit: "C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="text-dark mt-1">PREWARNING</div>
              {/* <div className="redgrey-sqaure mt-1"></div> */}
            </div>
          </div>

          <div className="coolermiddle-2-img mt-1 mb-2"></div>
          <div className="d-flex align-items-end">
            <BlackContainer
              data={{
                label: "C2_472CMPT2N01P01",
                useClass: "greenTxt",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "C2_472CMPT2N02P01",
                useClass: "greenTxt ml-4",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around align-items-end">
            <div>
              <BlackContainer
                data={{
                  label: "C2472GQ1N05T01",
                  useClass: "greenTxt",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2472GQ1N06T01",
                  useClass: "greenTxt mt-01",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2472GQ1N07T01",
                  useClass: "greenTxt mt-01",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2472GQ1N08T01",
                  useClass: "greenTxt mt-01",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "C2472GQ1N05T01A",
                  useClass: "greenTxt",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2472GQ1N06T01A",
                  useClass: "greenTxt mt-01",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2472GQ1N07T01A",
                  useClass: "greenTxt mt-01",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2472GQ1N08T01A",
                  useClass: "greenTxt mt-01",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">2 </div>
            </div>
            <div className="">
              <BlackContainer
                data={{
                  label: "C2_472FN3N01P01",
                  useClass: "greenTxt mt-1",
                  unit: "mmWG",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">3</div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "C2_472FN4N01P01",
                  useClass: "greenTxt mt-1",
                  unit: "mmWG",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">4 </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "C2_472FN5N01P01",
                  useClass: "greenTxt mt-1",
                  unit: "mmWG",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">5 </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "C2_472FN6NO1P01",
                  useClass: "greenTxt mt-1",
                  unit: "mmWG",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">6 </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "C2_472FN7N01P01",
                  useClass: "greenTxt mt-1",
                  unit: "mmWG",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">7 </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "C2_472FN8N01P01",
                  useClass: "greenTxt mt-1",
                  unit: "mmWG",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">8 </div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "C2_472FN9N01P01",
                  useClass: "greenTxt mt-1",
                  unit: "mmWG",
                  unitColor: "unitColor",
                }}
              />
              <div className="text-dark mt-1">9 </div>
            </div>
          </div>
        </div>
        <div className="col-2 boxContainer pt-5 pb-5">
          <div className="d-flex justify-content-between">
            <div>
              <div className="text-dark mt-1">TR3+2+1 </div>

              <BlackContainer
                data={{
                  label: "C2_E5O2L2A01S03",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2_E5O2L2A01S04",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2_E5O2L2A01S05",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="text-dark mt-1">CR2 </div>

              <BlackContainer
                data={{
                  label: "C2_E5O2L2A01S02",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />

              {/* <div className="redgrey-sqaure mt-1"></div> */}
              <div className="text-dark mt-1">PREWARNING </div>
              {/* <div className="redgrey-sqaure mt-1"></div> */}
            </div>
            <div>
              <div className="text-dark mt-1">CR1</div>

              <BlackContainer
                data={{
                  label: "C2_E5O2L2A01S01",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
              <div className="greySqure mt-1"></div>
              <BlackContainer
                data={{
                  label: "C2_HRBOIL_TZ1",
                  useClass: "greenTxt mt-1 mx-auto",
                  unit: "C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <i className="fa-solid fa-gear gear"></i>
            <i className="fa-solid fa-gear gear"></i>
            <i className="fa-solid fa-gear gear"></i>
            <i className="fa-solid fa-gear gear"></i>
            <i className="fa-solid fa-gear gear"></i>
          </div>
          {/* <div className="d-flex justify-content-around mt-3">
            <div className="greenSqure"></div>
            <div className="greenSqure"></div>
          </div> */}
        </div>
        <div className="col-12 d-flex coolermiddle-2 justify-content-between pl-0">
          <div>
            <BlackContainer
              data={{
                label: "PC3DROOMTEMP",
                useClass: "greenTxt mt-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PC3ROOMTZ1",
                useClass: "greenTxt mt-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "C2472FN1N01P01",
                useClass: "greenTxt mt-2",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN1 </div>
          </div>
          <div className="single-text-34">
            <BlackContainer
              data={{
                label: "C2_472FN1AN01P01",
                useClass: "greenTxt mt-2",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN1A </div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "C2_472FN2N01P01",
                useClass: "greenTxt mt-2",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN2 </div>
          </div>
          <div className="mt-3">
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN3 </div>
          </div>
          <div className="mt-3">
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN4 </div>
          </div>
          <div className="mt-3">
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN5 </div>
          </div>
          <div className="mt-3">
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN6 </div>
          </div>
          <div className="mt-3">
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN7 </div>
          </div>
          <div className="mt-3">
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN8 </div>
          </div>
          <div className="mt-3">
            <div className="yellowline-Vr upArrow"></div>
            <div className="connector-both-side-2 mt-4">
              <div className="circle-group">
                <span className="green-line-circle"></span>
              </div>
            </div>
            <div className="text-dark mt-4">472FN9 </div>
          </div>
          <div className="d-flex">
            <div className="mr-2">
              <div className="text-dark">492DP1</div>
              <div className="text-dark mt-2">492DP2 </div>
            </div>
            <div className="mr-2">
              <div className="circle-group">
                <span className="grey-circle"></span>
                <span className="c-text">C</span> M
              </div>
              <div className="circle-group bg-red mt-2">
                <span className="grey-circle"></span>
                <span className="c-text">C</span> M
              </div>
            </div>
            <div className="mr-2">
              <BlackContainer
                data={{
                  label: "C2492DP1A1",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "C2492DP2A1",
                  useClass: "greenTxt mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            {/* <div className="mr-2">
              <div className="redgrey-sqaure d-block"></div>
              <div className="greenSqure mt-2"></div>
            </div> */}
            <div className="yellowline-Vr downArrow position-absolute pipe-6"></div>
            <div className="yellowline-Vr downArrow position-absolute pipe-7"></div>
            <div className="yellowline-Vr downArrow position-absolute pipe-8"></div>
            <div className="grn-gry-img position-absolute single-text-21"></div>
            <div className="text-dark position-absolute single-text-22">
              492DP1
            </div>
            <div className="text-dark position-absolute single-text-23">
              492MW1
            </div>
            <div className="text-dark position-absolute single-text-24">
              492DP2
            </div>
            <div className="text-dark position-absolute single-text-25">
              TO492FB1
            </div>
          </div>
        </div>
        {/* useClass mein change */}
        <SingleText
          yellowTextUp="TOTAL FLOW"
          textClass="text-dark mr-1"
          data={{
            blackTextLabel: "C2_472FNN01F01",
            blackTextClass: "greenTxt ",
            unit: "M3/MIN",
          }}
          useClass="position-absolute single-text-27 d-flex"
        />
        <SingleText
          yellowTextUp="AVG FLOW 5,6,7,8 SETPOINT"
          textClass="text-dark mr-1"
          data={{
            blackTextLabel: "FANFLOW_5_6_7_8_SP",
            blackTextClass: "greenTxt",
            unit: "M3/MIN",
          }}
          useClass="position-absolute single-text-28 d-flex"
        />
        <SingleText
          yellowTextUp="AVG FLOW 5,6,7,8"
          textClass="text-dark mr-1"
          data={{
            blackTextLabel: "FANFLOW_5_6_7_8_AVG",
            blackTextClass: "greenTxt",
            unit: "M3/MIN",
          }}
          useClass="position-absolute single-text-29 d-flex"
        />
        <TextColumn
          useClass="CGRnBox position-absolute single-text-5"
          list={coolerTextColumn8}
        />
      </div>
      <div className="row ml-0 mr-0">
        <BottomLeftBox
          parentDivClass="col-10 p-1 box-1 d-flex flex-column w-100 align-items-stretch"
          list={coolerTextColumn7}
          useClass="d-flex flex-row justify-content-between"
        />
        <TextColumn
          useClass="position-absolute single-text-26"
          list={coolerTextColumn6}
          yellowText="WHRS PID RUN HRS"
          textClass="text-dark"
        />
      </div>
      <BlackContainer
        data={{
          label: "WHRS_MW",
          useClass: "greenTxt position-absolute single-text-35",
          unit: "MW",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};
