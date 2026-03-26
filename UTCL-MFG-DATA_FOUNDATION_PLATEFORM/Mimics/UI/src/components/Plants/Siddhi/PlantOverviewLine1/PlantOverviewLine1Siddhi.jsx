import { useColorStatus } from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  ProgressBarMimic,
} from "../../../index";

export const PlantOverviewLine1Siddhi = () => {
  return (
    <div className="PlantOverviewLine2 PlantOverviewLine1 w-100 h-100 position-relative">
      <div className="CGRnBox position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto",
            label: "TPP 35MW",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "RFEQ",
            }}
          />
          <BlackContainer
            data={{
              label: "TPP35_FREQ",
              useClass: "greenTxt ml-1",
              unit: "Hz",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "TPP_POWER",
              useClass: "greenTxt ml-1",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto",
            label: "TPP 60MW(Unit-1)",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "RFEQ",
            }}
          />
          <BlackContainer
            data={{
              label: "TPP_FREQ",
              useClass: "greenTxt ml-1",
              unit: "Hz",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "TPP_GRID_POWER",
              useClass: "greenTxt ml-1",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto",
            label: "TPP 60MW(Unit-2)",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "RFEQ",
            }}
          />
          <BlackContainer
            data={{
              label: "TPP35_FREQ",
              useClass: "greenTxt ml-1",
              unit: "Hz",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "TPP_POWER",
              useClass: "greenTxt ml-1",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto",
            label: "GRID INCOMER",
          }}
        />
        <BlackContainer
          data={{
            label: "GRID_132KV_JT01",
            useClass: "greenTxt mt-2",
            unit: "MVA",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="CGRnBox position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "LIME STONE HANDLING",
          }}
        />
        <div className="d-flex align-items-end justify-content-around mt-3">
          <div>
            <div className="img-60"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center mt-4",
                label: "CRUSHER",
              }}
            />
          </div>
          <div>
            <div className="roller-jcb"></div>
            <div className="d-flex mt-4">
              <div className={`dot ${useColorStatus("212CR1")}`}>R</div>

              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center ml-1",
                  label: "STACKER",
                }}
              />
              <div className={`dot ${useColorStatus("212ST1_BOOM_RUN")}`}>
                R
              </div>
            </div>
          </div>
          <div>
            <div className="img-100"></div>

            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center mr-2",
                  label: "Reclaimer-1",
                }}
              />

              <div className={`dot ${useColorStatus("311RE1")}`}>R</div>
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center mr-2",
                  label: "Reclaimer-2",
                }}
              />

              <div className={`dot ${useColorStatus("311RE2_RET")}`}>R</div>
            </div>
          </div>
          <div className="d-flex position-absolute single-text-5a">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "CRUSHER",
              }}
            />
            <BlackContainer
              data={{
                label: "291BC1_BW01_CAL",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "KILN - 1",
          }}
        />
        <div className="d-flex align-items-end justify-content-around w-100 px-4 position-absolute single-text-6a">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "KILN FEED BE CURRENT",
            }}
          />
          <div>
            <BlackContainer
              data={{
                label: "431MD1_IT1",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "431MD2_IT1",
                useClass: "greenTxt mt-1 ml-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SP HEAT",
              }}
            />
            <BlackContainer
              data={{
                label: "L1HB_J3",
                useClass: "greenTxt ml-2",
                unit: "Kcal/kg",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "KS O/L TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "441FN1_TT01",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "CS O/L TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "451FN1_TT01",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="bluegrey-big-img d-flex align-items-center justify-content-center mx-auto mt-2">
          <div className={`dot p-3 ${useColorStatus("461MD1")}`}>M</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-5",
              label: "KILN RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "461MD1_ST01",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "KILN FEED TOTAL",
            }}
          />
          <BlackContainer
            data={{
              label: "431SFF1_FT01",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "KILN FEED",
            }}
          />
          <BlackContainer
            data={{
              label: "KILN",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CALCLINER FEED",
            }}
          />
          <BlackContainer
            data={{
              label: "CALC",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "CF SILO",
          }}
        />
        <div className="containerImage  position-relative pt-3 text-center mt-2 mx-auto">
          <ProgressBarMimic label="391SB1_LVL" max={40} min={0} />
          <BlackContainer
            data={{
              label: "391SB1_LVL",
              useClass: "greenTxt mx-auto",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "391SB1A_LS01",
              useClass: "greenTxt mt-2 mx-auto",
              unit: "MT",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex justify-content-center mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "CAPACITY",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "12000 MT",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox d-flex align-items-end justify-content-around position-absolute single-text-8">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "KILN COAL BIN",
            }}
          />
          <div className="containerImage position-relative pt-3 mt-2">
            <ProgressBarMimic label="481LC1_WT01" max={120} min={0} />
            <BlackContainer
              data={{
                label: "481LC1_WT01",
                useClass: "greenTxt mx-auto",
                unit: "MT",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "CALCINER COAL BIN",
            }}
          />
          <div className="containerImage  position-relative pt-3 mt-2">
            <ProgressBarMimic label="451LC1_WT01" max={120} min={0} />
            <BlackContainer
              data={{
                label: "451LC1_WT01",
                useClass: "greenTxt mx-auto",
                unit: "MT",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "CLINKER SILO",
          }}
        />
        <div className="containerImage position-relative pt-3 pr-4 text-center mt-2 mx-auto">
          <ProgressBarMimic
            label="491SB1_LT01"
            type="clinker-silo"
            max={48}
            min={6}
          />
          <div className="d-flex justify-content-end">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "EMPTY HEIGHT",
              }}
            />
            <BlackContainer
              data={{
                label: "491SB1_LT01",
                useClass: "greenTxt ml-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
          </div>

          <BlackContainer
            data={{
              label: "491SB1_LT01A",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "MT",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex justify-content-center mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "CAPACITY",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "25000 MT",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "RAW MILL",
          }}
        />
        <div className="d-flex align-items-end justify-content-around">
          <BlackContainer
            data={{
              label: "331HP1_LT01",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "331HP2_LT01",
              useClass: "greenTxt ml-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "331HP3_LT01",
              useClass: "greenTxt ml-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "331HP4_LT01",
              useClass: "greenTxt ml-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-end justify-content-around">
          <div className="middle-sqr-container position-relative pt-3 text-center">
            <ProgressBarMimic label="331HP1_LT01" min={5} max={6.5} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "331HP1",
              }}
            />
          </div>
          <div className="middle-sqr-container position-relative pt-3 text-center">
            <ProgressBarMimic label="331HP2_LT01" min={5} max={6.5} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "331HP2",
              }}
            />
          </div>
          <div className="middle-sqr-container position-relative pt-3 text-center ml-2">
            <ProgressBarMimic label="331HP3_LT01" min={5} max={7} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  text-center",
                label: "331HP3",
              }}
            />
          </div>
          <div className="middle-sqr-container position-relative pt-3 text-center ml-2">
            <ProgressBarMimic label="331HP4_LT01" min={5} max={7} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  text-center",
                label: "331HP4",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "421SK1_OM01",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "mg/Nm3",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-end justify-content-around mt-2">
          <div className="bigContainer d-flex align-items-center justify-content-center">
            <div className={`dot p-3 ${useColorStatus("361MD1")}`}>M</div>
          </div>
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center",
                  label: "GG O/L TEMP",
                }}
              />
              <BlackContainer
                data={{
                  label: "331GV1_TB01",
                  useClass: "greenTxt ml-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white ",
                  label: "CAPACITY",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white ml-1",
                  label: "330 TPH",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center",
                  label: "TOTAL FEED",
                }}
              />
              <BlackContainer
                data={{
                  label: "RAWMILL _TOT_FEED",
                  useClass: "greenTxt ml-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center",
                  label: "MD CURRENT",
                }}
              />
              <BlackContainer
                data={{
                  label: "361MD1_IT01A",
                  useClass: "greenTxt ml-1",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="brick-cooler-img"></div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "COAL MILL",
          }}
        />
        <div className="d-flex align-items-end justify-content-around">
          <BlackContainer
            data={{
              label: "L41HP1_WT01",
              useClass: "greenTxt",
              unit: "MT",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41HP2_WT01",
              useClass: "greenTxt ml-2",
              unit: "MT",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-end justify-content-around">
          <div className="middle-sqr-container position-relative pt-3 text-center">
            <ProgressBarMimic label="L41HP1_WT01" max={90} min={0} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L41HP1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Raw Coal",
              }}
            />
          </div>

          <div className="middle-sqr-container position-relative pt-3 text-center ml-2">
            <ProgressBarMimic label="L41HP2_WT01" max={80} min={0} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L41HP2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Pet Coak",
              }}
            />
          </div>
        </div>

        <BlackContainer
          data={{
            label: "L41SK1_OT01",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "mg/Nm3",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-end justify-content-around">
          <div className="bigContainer d-flex align-items-center justify-content-center">
            <div className={`dot p-3 ${useColorStatus("L41MD1")}`}>M</div>
          </div>
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white ",
                  label: "CAPACITY",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white ml-1",
                  label: "38 TPH",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center",
                  label: "COAL MILL TPH",
                }}
              />
              <BlackContainer
                data={{
                  label: "CLM1_TOTAL_TPH",
                  useClass: "greenTxt ml-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white text-center",
                  label: "MD POWER",
                }}
              />
              <BlackContainer
                data={{
                  label: "L41MD1_IT01",
                  useClass: "greenTxt ml-1",
                  unit: "kW",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="brick-cooler-img"></div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "CEMENT SILO",
          }}
        />
        <div className="d-flex align-items-end justify-content-around mt-3">
          <div className={`dot ${useColorStatus("Comp-1 Open")}`}>S</div>
          <div className={`dot ${useColorStatus("Comp-2 Open")}`}>S</div>
          <div className={`dot ${useColorStatus("Comp-3 open")}`}>S</div>
        </div>
        <div className="d-flex align-items-end justify-content-around mt-3">
          <div className="pipeVr position-relative pt-3 text-center">
            <ProgressBarMimic label="CementSilo_Cmpt1_Ton" min={0} max={6019} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Compt 1",
              }}
            />
            <BlackContainer
              data={{
                label: "CementSilo_Cmpt1_Ton",
                useClass: "greenTxt mx-auto mt-4",
                unit: "MT",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="pipeVr position-relative pt-3 text-center ml-1">
            <ProgressBarMimic label="CementSilo_Cmpt2_Ton" min={0} max={5327} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Compt 2",
              }}
            />
            <BlackContainer
              data={{
                label: "CementSilo_Cmpt2_Ton",
                useClass: "greenTxt mx-auto mt-4",
                unit: "MT",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="pipeVr position-relative pt-3 text-center ml-1">
            <ProgressBarMimic label="CementSilo_Cmpt3_Ton" min={0} max={5027} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Compt 3",
              }}
            />
            <BlackContainer
              data={{
                label: "CementSilo_Cmpt3_Ton",
                useClass: "greenTxt mx-auto mt-4",
                unit: "MT",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "CAPACITY",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "25000 MT",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox d-flex align-items-center justify-content-around position-absolute single-text-13">
        <div className="h-100 d-flex flex-column justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "CEMENT MILL - 1",
            }}
          />
          <div className="d-flex align-items-end justify-content-around">
            <BlackContainer
              data={{
                label: "K21HP1_LT01",
                useClass: "greenTxt ",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "512HP2_LT01",
                useClass: "greenTxt ml-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex align-items-end justify-content-around">
            <div className="middle-sqr-container position-relative pt-3 text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "K21HP1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "CLINKER",
                }}
              />
            </div>
            <div className="middle-sqr-container position-relative pt-3 text-center ml-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "K21HP2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "GYPSUM",
                }}
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "561SK1_DT01",
              useClass: "greenTxt mx-auto",
              unit: "mg/Nm3",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mx",
              label: "CEMENT MILL - 1",
            }}
          />
          <div className="asset-67 d-flex align-items-center justify-content-center">
            <div className={`dot p-3 ${useColorStatus("561MD1")}`}>M</div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "CAPACITY",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ml-3",
                label: "185TPH",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "TOTAL FEED",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_Total_Feed_Rate",
                useClass: "greenTxt ml-3",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "MD POWER",
              }}
            />
            <BlackContainer
              data={{
                label: "561MD1_JT1",
                useClass: "greenTxt ml-3",
                unit: "kW",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="h-100 d-flex flex-column justify-content-around">
          <div className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "SPECIFIC POWER",
              }}
            />
            <div className="d-flex justify-content-between mt-2n">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center",
                  label: "CRUSHER",
                }}
              />
              <BlackContainer
                data={{
                  label: "CRUSHER_SP_PWR",
                  useClass: "greenTxt ml-2",
                  unit: "kW/t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center",
                  label: "RAW MILL",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM1_SP_PWR",
                  useClass: "greenTxt ml-2",
                  unit: "kW/t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center",
                  label: "KILN",
                }}
              />
              <BlackContainer
                data={{
                  label: "KILN1_SP_PWR",
                  useClass: "greenTxt ml-2",
                  unit: "kW/t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center",
                  label: "COAL MILL",
                }}
              />
              <BlackContainer
                data={{
                  label: "COAL_MILL1_SPEC_POWER",
                  useClass: "greenTxt ml-2",
                  unit: "kW/t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex justify-content-between mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center",
                  label: "CEMENT MILL",
                }}
              />
              <BlackContainer
                data={{
                  label: "CM1_SP_PWR",
                  useClass: "greenTxt ml-2",
                  unit: "kW/t",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>

          <div className="brick-cooler-img position-absolute"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-2",
              label: "CEMENT MILL - 2",
            }}
          />
          <div className="asset-67 d-flex align-items-center justify-content-center">
            <div className={`dot p-3 ${useColorStatus("562MD1")}`}>M</div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "CAPACITY",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ml-3",
                label: "149TPH",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "TOTAL FEED",
              }}
            />
            <BlackContainer
              data={{
                label: "CM2_TOTAL_FEED",
                useClass: "greenTxt ml-3",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "MD POWER",
              }}
            />
            <BlackContainer
              data={{
                label: "562MD1_KW",
                useClass: "greenTxt ml-3",
                unit: "kW",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox d-flex align-items-center justify-content-around position-absolute single-text-14">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "PACKER - 1",
            }}
          />
          <div className={`dot p-3 mt-2 ${useColorStatus("Packer-1 Running")}`}>
            M
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "PACKER - 2",
            }}
          />
          <div className={`dot p-3 mt-2 ${useColorStatus("Packer-2 Running")}`}>
            M
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "PACKER - 3",
            }}
          />
          <div className={`dot p-3 mt-2 ${useColorStatus("Packer3_Running")}`}>
            M
          </div>
        </div>
      </div>
      <table className="CGRnBox position-absolute single-text-15">
        <tr>
          <td className="CGRnBox"> </td>
          <td colspan="2" className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "PRODUCTION MT",
              }}
            />
          </td>
          <td colspan="2" className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "RUNNING HOURS (h)",
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="CGRnBox"></td>
          <td className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "Today",
              }}
            />
          </td>
          <td className="CGRnBox">
            {" "}
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "yesterday",
              }}
            />{" "}
          </td>
          <td className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "Today",
              }}
            />
          </td>
          <td className="CGRnBox">
            {" "}
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "yesterday",
              }}
            />{" "}
          </td>
        </tr>
        <tr>
          <td className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "KILN",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "CLINKER PROD TODAY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "CLINKER PROD YESTERDAY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "461MD1_RUNHRS_TODAY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "461MD1_RUNHRS_YDAY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "RAW MILL",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Raw_Meal_Tday",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Raw_Meal_Yday",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "361MD1_RUNHRS",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "361MD1_YRUNHRS",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "COAL MILL",
              }}
            />
          </td>
          <td className="CGRnBox">
            {/* <BlackContainer
            data={{
              label: "COAL CONSUMPTION YES",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          /> */}
          </td>
          <td className="CGRnBox">
            {/* <BlackContainer
            data={{
              label: "COAL CONSUMPTION YES",
              useClass: "greenTxt",
             
              unitColor: "unitColor",
            }}
          /> */}
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Coal_Runhr",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Coal_YRunhr",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="CGRnBox">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "CEMET MILL",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "CEMENT_PROD_TODAY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "CEMENT_PROD_YESTERDAY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "561MD1_RUNHRS",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "561MD1_YRUNHRS",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
        </tr>
      </table>

      <div className="CGRnBox d-flex justify-content-around position-absolute single-text-16">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "FLYASH SILO",
            }}
          />
          <div className="d-flex justify-content-around mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "SILO 1(1000 t)",
              }}
            />
            <BlackContainer
              data={{
                label: "K11BI1_TONNAGE",
                useClass: "greenTxt ml-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "SILO 2(1000 t)",
              }}
            />
            <BlackContainer
              data={{
                label: "K11BI2_TONNAGE",
                useClass: "greenTxt ml-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "TPP2 SILO(2500 t)",
              }}
            />
            <BlackContainer
              data={{
                label: "TPP2_FLYASH_SILO",
                useClass: "greenTxt ml-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "FLYASH BIN",
            }}
          />
          <div className="d-flex justify-content-around mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "BIN (L1-50t)",
              }}
            />
            <BlackContainer
              data={{
                label: "531SFF1_WT01",
                useClass: "greenTxt ml-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "BIN (L2-200t)",
              }}
            />
            <BlackContainer
              data={{
                label: "532SFF1_WT01",
                useClass: "greenTxt ml-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "TPP1 SILO (600t)",
              }}
            />
            <BlackContainer
              data={{
                label: "TPP1_FLYASH_SILO",
                useClass: "greenTxt ml-2",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
