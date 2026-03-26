import {
  TextContainerWithWrapWord,
  BlackContainer,
  ProgressBarMimic,
} from "../../../../index";

export const TurbineOperationMaihar = () => {
  return (
    <div className="TurbineOperationMaihar  w-100 h-100 position-relative">
      <div className="bg-secondary position-absolute text-center px-2 single-text-1 ">
        HP Steam
      </div>
      <div className="yellowline-Hr position-absolute pipe-1"></div>
      <div className="yellowline-Vr position-absolute pipe-2"></div>
      <div className="yellowline-Vr position-absolute pipe-3"></div>
      <div className="yellowline-Hr position-absolute pipe-4"></div>
      <div className="yellowline-Vr position-absolute pipe-5"></div>
      <div className="yellowline-Hr position-absolute pipe-6"></div>
      <div className="yellowline-Hr position-absolute pipe-7"></div>
      <div className="yellowline-Vr position-absolute pipe-8"></div>
      <div className="yellowline-Vr position-absolute pipe-9"></div>
      <div className="yellowline-Hr position-absolute pipe-10"></div>
      <div className="yellowline-Hr position-absolute pipe-11"></div>
      <div className="yellowline-Hr position-absolute pipe-12"></div>
      <div className="yellowline-Hr position-absolute pipe-13"></div>
      <div className="yellowline-Vr position-absolute pipe-14"></div>
      <div className="yellowline-Vr position-absolute pipe-15"></div>

      <div className="position-absolute  d-flex single-text-2">
        <div className="mr-5">
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.FT9001A",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-3",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.CB14_CTF_001_AS",
              useClass: "greenTxt mt-2",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9014A",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-2",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-2",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <div>
          <div className="d-flex  justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9010",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9010",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9011",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9011",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-4">
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9005",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.PT9005",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-5">
        <div>
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9006A",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.PT9006A",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9006B",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9006C",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9016A",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9016A",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9016B",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9016C",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute d-flex single-text-6">
        <div className="mt-1 mr-2">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9012",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9012",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9013",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9013",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "970CV02",
          }}
        />

        <div className="mt-1 mr-2">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LALP9001",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.LALP9001",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-between bg-white text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "GT9007",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.GT9007",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "970ESV02",
          }}
        />
      </div>

      <div className="position-absolute  single-text-8">
        <div className="d-flex">
          <div className="mt-1">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TT9017A",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "Turbine_MN.IO.AI.TT9017A",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 ml-2">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "PT9007A",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "Turbine_MN.IO.AI.PT9007A",
                useClass: "greenTxt",
                unit: "kg/cm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="mt-1">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TT9017B",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 ml-2">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "PT9007B",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt",
                unit: "kg/cm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="mt-1">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TT9017C",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 ml-2">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "PT9007C",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt",
                unit: "kg/cm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute  single-text-9">
        <div className="d-flex">
          <div className="mt-1">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CB14_PT_640",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "Turbine_MN.IO.AI.CB14_PT_640",
                useClass: "greenTxt",
                unit: "kg/cm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 ml-2">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "FT9002A",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "Turbine_MN.IO.AI.FT9002A",
                useClass: "greenTxt",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="mt-1">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CB14_TT_640",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "Turbine_MN.IO.AI.CB14_TT_640",
                useClass: "greenTxt",
                unit: "Deg C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 ml-2">
            <div className="d-flex justify-content-between bg-white text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "FT9002B",
                }}
              />
              <div className="greenSqure "></div>
            </div>
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-10">
        <div className="img-102"></div>
      </div>

      <div className="position-absolute  d-flex single-text-11">
        <div className="text-center mr-3 mt-2">
          DEMAND<div>FB</div>
        </div>
        <div className="mr-1">
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.LAHP9001",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.GT9001",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute  d-flex single-text-12">
        <div className="text-white mr-5 mt-4">TURBINE HP</div>
        <div className="mr-1">
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.SI9001",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <div className="text-white mt-3">TURBINE LP </div>
        </div>
      </div>

      <BlackContainer
        data={{
          label: "NA",
          useClass: "greenTxt position-absolute  single-text-13 p-3",
          unit: "mw",
          unitColor: "unitColor",
        }}
      />
      <div className="bg-secondary position-absolute text-center px-2 single-text-14 ">
        Bpray Water inlet
      </div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-15 ">
        To Atmosphere
      </div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-16 ">
        To Acc
      </div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-17 ">
        Injuction Steam
      </div>
      <div className="tringle-item position-absolute single-text-18 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-19 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-20 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-21 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-22 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-23 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-24 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-25 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-68 text-white">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="position-absolute single-text-26">
        <div className="box-1 p-3 text-center pt-4">
          <div className="yellowline-Hr  pipe-17"></div>
          <div className="yellowline-Vr  pipe-18"></div>
          <div className="yellowline-Vr  pipe-19"></div>
          <div className="yellowline-Hr  pipe-20"></div>
          <div className="tringle-item position-absolute single-text-27 text-white">
            <i className="fa-solid fa-caret-down d-block"></i>
            <i className="fa-solid fa-caret-up d-block"></i>
          </div>
          <div className="tringle-item position-absolute single-text-28 text-white">
            <i className="fa-solid fa-caret-down d-block"></i>
            <i className="fa-solid fa-caret-up d-block"></i>
          </div>
          <div className="bg-secondary position-absolute text-center px-2 single-text-29 ">
            HP Steam
          </div>
          <div className="bg-secondary position-absolute text-center px-2 single-text-30 ">
            Ejector
          </div>
          <div className="position-absolute d-flex single-text-31">
            <div className="mt-1 mr-2">
              <div className="d-flex justify-content-between bg-white text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CB14_PT_633",
                  }}
                />
                <div className="greenSqure "></div>
              </div>
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="mt-1">
              <div className="d-flex justify-content-between bg-white text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CB14_TT_633",
                  }}
                />
                <div className="greenSqure "></div>
              </div>
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="box-1 p-3 text-center ">
          <div className=" single-text-32 mb-2">
            <div className="mt-2 mr-2">
              <div className="d-flex justify-content-between bg-white text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "PT9011A",
                  }}
                />
                <div className="greenSqure "></div>
              </div>
              <BlackContainer
                data={{
                  label: "Turbine_MN.IO.AI.PT9011A",
                  useClass: "greenTxt",
                  unit: "kg/cm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="mt-1">
              <div className="d-flex justify-content-between bg-white text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "PT9011B",
                  }}
                />
                <div className="greenSqure "></div>
              </div>
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt",
                  unit: "kg/cm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="yellowline-Hr  pipe-21"></div>
          <div className="yellowline-Vr  pipe-18"></div>
          <div className="yellowline-Vr  pipe-19"></div>
          <div className="yellowline-Hr  pipe-20"></div>
          <div className="yellowline-Vr position-absolute pipe-22"></div>
          <div className="yellowline-Hr position-absolute pipe-23"></div>
          <div className="yellowline-Hr position-absolute pipe-24"></div>
          <div className="yellowline-Vr position-absolute pipe-25"></div>
          <div className="tringle-item position-absolute single-text-34 text-white">
            <i className="fa-solid fa-caret-down d-block"></i>
            <i className="fa-solid fa-caret-up d-block"></i>
          </div>
          <div className="tringle-item position-absolute single-text-35 text-white">
            <i className="fa-solid fa-caret-down d-block"></i>
            <i className="fa-solid fa-caret-up d-block"></i>
          </div>

          <div className="tringle-item position-absolute single-text-27 text-white">
            <i className="fa-solid fa-caret-down d-block"></i>
            <i className="fa-solid fa-caret-up d-block"></i>
          </div>
          <div className="tringle-item position-absolute single-text-28 text-white">
            <i className="fa-solid fa-caret-down d-block"></i>
            <i className="fa-solid fa-caret-up d-block"></i>
          </div>
          <div className="bg-secondary position-absolute text-center px-2 single-text-29 ">
            Seal Steam
          </div>
          <div className="position-absolute d-flex single-text-33">
            <div className="mt-1 mr-2">
              <div className="d-flex justify-content-between bg-white text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TT9021",
                  }}
                />
                <div className="greenSqure "></div>
              </div>
              <BlackContainer
                data={{
                  label: "Turbine_MN.IO.AI.TT9021",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>

        <div className="box-1 p-3 pb-0 text-center">
          <div className="d-flex align-items-end justify-content-around  single-text-36">
            <div>
              <div className="containerImage position-relative pt-3 mt-2">
                <ProgressBarMimic />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "FLASH TANK",
                  }}
                />
                {/* <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt mx-auto",
                unit: "MT",
                unitColor: "unitColor",
              }}
            /> */}
              </div>
            </div>
          </div>
          <div className="yellowline-Vr  pipe-26"></div>
          <div className="yellowline-Hr  pipe-27"></div>
          <div className="yellowline-Vr  pipe-28"></div>
          <div className="yellowline-Hr  pipe-29"></div>
          <div className="yellowline-Hr  pipe-30"></div>
          <div className="yellowline-Vr position-absolute pipe-31"></div>
          <div className="yellowline-Hr  pipe-32"></div>
          <div className="yellowline-Vr position-absolute pipe-33"></div>
          <div className="yellowline-Hr position-absolute pipe-34"></div>

          <div className="bg-secondary position-absolute text-center px-2 single-text-37 ">
            TO CST
          </div>
        </div>
      </div>
      <div className="yellowline-Vr position-absolute pipe-35"></div>
      <div className="yellowline-Vr position-absolute pipe-36"></div>
      <div className="yellowline-Vr position-absolute pipe-37"></div>
      <div className="yellowline-Hr position-absolute pipe-38"></div>
      <div className="yellowline-Vr position-absolute pipe-39"></div>
      <div className="yellowline-Hr position-absolute pipe-40"></div>
      <div className="yellowline-Vr position-absolute pipe-41"></div>
      <div className="yellowline-Vr position-absolute pipe-42"></div>
      <div className="yellowline-Hr position-absolute pipe-43"></div>
      <div className="yellowline-Vr position-absolute pipe-44"></div>
      <div className="yellowline-Hr position-absolute pipe-45"></div>
      <div className="yellowline-Vr position-absolute pipe-46"></div>
      <div className="yellowline-Vr position-absolute pipe-47"></div>
      <div className="yellowline-Hr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-40 ">
        MOP Dixcharge
      </div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-41 ">
        MOP Dixcharge
      </div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-44 ">
        LUBE OIL
      </div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-45 ">
        Control Oil
      </div>
      <div className="bg-secondary position-absolute text-center px-2 single-text-53 ">
        COP
      </div>

      <div className="position-absolute   single-text-42">
        <div className="connector-icon mt-2 ">
          <span className="grayDot mr-2"> M</span>
        </div>
      </div>
      <div className="position-absolute   single-text-43">
        <div className="connector-icon mt-2 mr-2 ">
          <span className="grayDot mr-2"> M</span>
        </div>
      </div>

      <div className="d-flex position-absolute single-text-38">
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9002A",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.PT9002A",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2 mr-2">
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9002B",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9002C",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-46">
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9003A",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.PT9003A",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2 mr-2">
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9003B",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9003C",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute   single-text-47">
        <div className="connector-icon mt-2 mr-2 ">
          <span className="grayDot mr-2"> M</span>
        </div>
      </div>
      <div className="position-absolute   single-text-48">
        <div className="connector-icon mt-2 mr-2 ">
          <span className="grayDot mr-2"> M</span>
        </div>
      </div>

      <div className=" position-absolute single-text-39">
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "DPT9001",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9005",
              useClass: "greenTxt mt-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9002",
              useClass: "greenTxt mt-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-50"></div>
      <div className="pipeHr position-absolute pipe-51"></div>
      <div className="yellowline-Vr position-absolute pipe-53"></div>
      <div className="yellowline-Hr position-absolute pipe-54"></div>
      <div className="yellowline-Hr position-absolute pipe-55"></div>
      <div className="yellowline-Hr position-absolute pipe-56"></div>
      <div className="yellowline-Vr position-absolute pipe-57"></div>
      <div className="yellowline-Hr position-absolute pipe-58"></div>
      <div className="yellowline-Hr position-absolute pipe-59"></div>
      <div className="yellowline-Hr position-absolute pipe-60"></div>
      <div className="yellowline-Vr position-absolute pipe-61"></div>
      <div className="yellowline-Vr position-absolute pipe-62"></div>
      <div className="pipeHr position-absolute pipe-63"></div>
      <div className="yellowline-Hr position-absolute pipe-64"></div>
      <div className="yellowline-Hr position-absolute pipe-65"></div>
      <div className="yellowline-Vr position-absolute pipe-65"></div>
      <div className="yellowline-Hr position-absolute pipe-66"></div>
      <div className="yellowline-Vr position-absolute pipe-67"></div>
      <div className="yellowline-Hr position-absolute pipe-68"></div>
      <div className="yellowline-Hr position-absolute pipe-69"></div>
      <div className="yellowline-Hr position-absolute pipe-70"></div>
      <div className="yellowline-Vr position-absolute pipe-71"></div>
      <div className="yellowline-Vr position-absolute pipe-72"></div>
      <div className="yellowline-Hr position-absolute pipe-73"></div>
      <div className="pipeHr position-absolute pipe-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Emergency",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Overhead",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Oil Tank",
          }}
        />
      </div>

      <div className="d-flex align-items-end justify-content-around  single-text-49">
        <div>
          <div className="containerImage position-relative pt-3 mt-2">
            <ProgressBarMimic />
          </div>
        </div>
      </div>

      <div className="d-flex position-absolute single-text-50">
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TT9001",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.TT9001",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2 mr-2">
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LT9001",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.LT9001",
              useClass: "greenTxt",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-51">
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9001",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "Turbine_MN.IO.AI.PT9001",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-52">
        <div>
          <div className="d-flex justify-content-between bg-white  text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT9003A",
              }}
            />
            <div className="greenSqure "></div>
          </div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "kg/cm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-54">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "14MOV632A",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "970PRV03",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-4",
            label: "970PRV04",
          }}
        />
      </div>
      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "970PCV03",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-4",
            label: "970PCV05",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "910ESV01",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2 ",
            label: "910CV01",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "14M0V622A",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "Vaccumbreaker SOV",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "970VBV01",
          }}
        />
      </div>
      <div className="position-absolute single-text-62">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "970TCV1 SOV",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-4",
            label: "970TCV2 SOV",
          }}
        />
      </div>
      <div className="position-absolute d-flex single-text-63">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "STG AOP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-2",
            label: "STG EOP",
          }}
        />
      </div>
      <div className="position-absolute d-flex single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mt-2",
            label: "STG_COP_01",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-3 ml-2",
            label: "STG_COP_02",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mt-2",
            label: "Lube Oil Fitter ",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mt-2",
            label: "14MV635",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mt-2",
            label: "14MOV623",
          }}
        />
      </div>
      <div className="tringle-arrow">
        <div className="d-flex tringle-item position-absolute text-white single-text-70">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-71">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-72">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-73">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-74">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-75">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-76">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-77">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-78">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-79">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-80">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-81">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-82">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-83">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-84">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-85">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-86">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-87">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-88">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute text-white single-text-89">
          <i className="fa-solid fa-caret-right d-block"></i>
        </div>
      </div>
      <div className="position-absolute single-text-90 bg-white px-1">
        HP Warm-up Vent
      </div>
      <div className="position-absolute single-text-91 bg-white px-1">
        HP ACTUATOR
      </div>
      <div className="position-absolute single-text-93 bg-white px-1">
        LP Warm-up Vent
      </div>
      <div className="position-absolute single-text-94 bg-white px-1">
        Gland Seallng
      </div>
      <div className="position-absolute single-text-95 bg-white px-1">
        Draln Trans. Pump
      </div>
      <div className="position-absolute single-text-96 bg-white px-1">
        EJCT-PRDS
      </div>
    </div>
  );
};
