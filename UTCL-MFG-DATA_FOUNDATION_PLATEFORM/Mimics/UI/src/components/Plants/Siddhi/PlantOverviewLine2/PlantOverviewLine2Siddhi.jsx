import { useColorStatus } from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  ProgressBarMimic,
} from "../../../index";

export const PlantOverviewLine2Siddhi = () => {
  return (
    <div className="PlantOverviewLine2 w-100 h-100 position-relative">
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
              label: "TPP1_POWER",
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
              label: "TPP2_POWER",
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
              label: "TPP1_POWER",
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
                useClass: "yellowTxt text-center mt-2",
                label: "CRUSHER",
              }}
            />
          </div>
          <div>
            <div className="roller-jcb"></div>
            <div className="d-flex mt-1">
              <div className={`dot ${useColorStatus("212CR1")}`}>R</div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center ml-1",
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
                  useClass: "yellowTxt text-center mr-1",
                  label: "Reclaimer-1",
                }}
              />
              <div className={`dot ${useColorStatus("311RE1")}`}>R</div>
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center mr-1",
                  label: "Reclaimer-2",
                }}
              />
              <div className={`dot ${useColorStatus("311RE2_RET")}`}>R</div>
            </div>
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "KILN - 2",
          }}
        />
        <div className="d-flex align-items-end justify-content-around w-75 position-absolute single-text-6a">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "KILN FEED BE CURRENT",
            }}
          />
          <div>
            <BlackContainer
              data={{
                label: "432MD1_IT01",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "432MD2_IT01",
                useClass: "greenTxt mt-1 ml-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "SP HEAT",
              }}
            />
            <BlackContainer
              data={{
                label: "L2HB_J3",
                useClass: "greenTxt ml-2",
                unit: "Kcal/kg",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt text-center",
                label: "PH Q/L TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "442FN1_TT01",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="bluegrey-big-img d-flex align-items-center justify-content-center mx-auto mt-2">
          <div className={`dot ${useColorStatus("462MD1_CR")} p-3`}>M</div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "KILN FEED",
            }}
          />
          <BlackContainer
            data={{
              label: "Kiln Feed Act",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center ml-4",
              label: "KILN RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "462MD1_RPM_FB",
              useClass: "greenTxt ml-2",
              unit: "rpm",
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
          <ProgressBarMimic label="392SB1_LT01" min={0} max={31.4} />
          <BlackContainer
            data={{
              label: "392SB1_LT01",
              useClass: "greenTxt mx-auto",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "392SB1_LS01A",
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
                label: "18000 MTD",
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
            <ProgressBarMimic label="452SFF1_WT01" min={40} max={56} />
            <BlackContainer
              data={{
                label: "452SFF1_WT01",
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
            <ProgressBarMimic min={40} max={56} label="482SFF1_WT01" />
            <BlackContainer
              data={{
                label: "482SFF1_WT01",
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
            label="492SB1_LT01"
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
                label: "492SB1_LT01",
                useClass: "greenTxt ml-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
          </div>

          <BlackContainer
            data={{
              label: "492SB1_LT01A",
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
                label: "25000 MTD",
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
              label: "332HP1_LT01",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "332HP2_LT01",
              useClass: "greenTxt ml-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "332HP3_LT01",
              useClass: "greenTxt ml-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "332HP4_LT01",
              useClass: "greenTxt ml-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-end justify-content-around">
          <div className="middle-sqr-container position-relative pt-3 text-center">
            <ProgressBarMimic label="332HP1_LT01" min={1.5} max={4.2} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "332HP1",
              }}
            />
          </div>
          <div className="middle-sqr-container position-relative pt-3 text-center">
            <ProgressBarMimic label="332HP2_LT01" min={0.8} max={4.2} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "332HP2",
              }}
            />
          </div>
          <div className="middle-sqr-container position-relative pt-3 text-center ml-2">
            <ProgressBarMimic label="332HP3_LT01" min={3} max={6.5} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  text-center",
                label: "332HP3",
              }}
            />
          </div>
          <div className="middle-sqr-container position-relative pt-3 text-center ml-2">
            <ProgressBarMimic label="332HP4_LT01" min={3} max={6.5} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  text-center",
                label: "332HP4",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "422DM1A_DT01",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "mg/Nm3",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-end justify-content-around mt-2">
          <div className="bigContainer d-flex align-items-center justify-content-center">
            <div className={`dot ${useColorStatus("362MD1")} p-3`}> M</div>
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
                  label: "332RF6_TB01",
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
                  label: "385 TPH",
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
                  label: "RM_TOTAL_FEED",
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
                  label: "362MD1_JT01",
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
              label: "L22BI1_WT01",
              useClass: "greenTxt",
              unit: "MT",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42BI1_WT01",
              useClass: "greenTxt ml-2",
              unit: "MT",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-end justify-content-around">
          <div className="middle-sqr-container position-relative pt-3 text-center">
            <ProgressBarMimic label="L22BI1_WT01" max={140} min={0} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L22BL1",
              }}
            />
          </div>

          <div className="middle-sqr-container position-relative pt-3 text-center ml-2">
            <ProgressBarMimic label="L42BI1_WT01" max={80} min={17} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L42BL1",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "D.CHAIN RPM:-",
            }}
          />
          <BlackContainer
            data={{
              label: "L42CV1_ST01",
              useClass: "greenTxt ml-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-4",
              label: "W/F FEED:-",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WF1_FT01",
              useClass: "greenTxt ml-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "L42DM1_AT01",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "mg/Nm3",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-end justify-content-around">
          <div className="bigContainer d-flex align-items-center justify-content-center">
            <div className={`dot ${useColorStatus("L42MD1")} p-3`}> M</div>
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
                  label: "COAL TPH",
                }}
              />
              <BlackContainer
                data={{
                  label: "L2_TOTAL_COAL_TPH",
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
                  label: "L42MD1_JT01",
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
          <div className={`dot ${useColorStatus("591BF3_SEL")}`}>S</div>
          <div className={`dot ${useColorStatus("591BF4_SEL")}`}>S</div>
          <div className={`dot ${useColorStatus("591BF5_SEL")}`}>S</div>
        </div>
        <div className="d-flex align-items-end justify-content-around mt-3">
          <div className="pipeVr position-relative pt-3 text-center">
            <ProgressBarMimic label="591LT1_TONS" min={0} max={6019} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Compt 1",
              }}
            />
            <BlackContainer
              data={{
                label: "591LT1_TONS",
                useClass: "greenTxt mx-auto mt-4",
                unit: "MT",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="pipeVr position-relative pt-3 text-center ml-1">
            <ProgressBarMimic label="591LT2_TONS" min={0} max={5327} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Compt 2",
              }}
            />
            <BlackContainer
              data={{
                label: "591LT2_TONS",
                useClass: "greenTxt mx-auto mt-4",
                unit: "MT",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="pipeVr position-relative pt-3 text-center ml-1">
            <ProgressBarMimic label="591LT3_TONS" min={0} max={5027} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Compt 3",
              }}
            />
            <BlackContainer
              data={{
                label: "591LT3_TONS",
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
              label: "25000 MTD",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox d-flex align-items-center justify-content-around position-absolute single-text-13">
        <div className="h-100 d-flex flex-column justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center",
              label: "CEMENT MILL - 2",
            }}
          />
          <div className="d-flex align-items-end justify-content-around">
            <BlackContainer
              data={{
                label: "512HP1_LT01",
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
                  label: "521HP1",
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
                  label: "512HP2",
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

          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-3",
              label: "CEMENT MILL - 1",
            }}
          />
          <div className="asset-67 d-flex align-items-center justify-content-center">
            <div className={`dot p-3 ${useColorStatus("561MD1")}`}> M</div>
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
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "TOTAL FEED",
              }}
            />
            <BlackContainer
              data={{
                label: "CM1_TOTAL_FEED",
                useClass: "greenTxt ml-3",
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
                label: "561MD1_KW",
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
            <div className="d-flex justify-content-between mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "yellowTxt text-center",
                  label: "RAW MILL",
                }}
              />
              <BlackContainer
                data={{
                  label: "RM_SP_POWER",
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
                  label: "KILN_SP_POWER",
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
                  label: "CLM_SP_POWER",
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
                  label: "CM2_SPC_PWR",
                  useClass: "greenTxt ml-2",
                  unit: "kW/t",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "562SK1_DT01",
              useClass: "greenTxt ml-auto",
              unit: "mg/Nm3",
              unitColor: "unitColor",
            }}
          />
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
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white text-center",
                label: "TOTAL FEED",
              }}
            />
            <BlackContainer
              data={{
                label: "Feed_sum",
                useClass: "greenTxt ml-3",
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
                label: "562MD1_JT01",
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
          <div className={`dot ${useColorStatus("Packer-1 Running")} p-3 mt-2`}>
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
          <div className={`dot ${useColorStatus("Packer-2 Running")} p-3 mt-2`}>
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
          <div className={`dot ${useColorStatus("Packer3_Running")} p-3 mt-2`}>
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
                label: "Clinker_TOD",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Clinker_YTD",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "KILN RUN HOUR",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "KILN RUN HOUR_YES",
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
                label: "RAWMILL_TDY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "RAWMILL_YTD",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Raw Mill HR",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Raw Mill HR_YES",
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
            <BlackContainer
              data={{
                label: "COAL CONSUMPTION YES",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Coal Mill RH",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "Coal Mill RH_YES",
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
                label: "CM_FEED_TOD",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "CM_FEED_YTD",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "CM TDY",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
          <td className="CGRnBox">
            <BlackContainer
              data={{
                label: "CM YTD",
                useClass: "greenTxt",

                unitColor: "unitColor",
              }}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};
