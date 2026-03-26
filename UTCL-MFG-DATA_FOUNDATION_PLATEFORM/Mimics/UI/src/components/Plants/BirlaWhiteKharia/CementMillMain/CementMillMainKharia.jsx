import { TextContainerWithWrapWord, BlackContainer } from "../../../index";
export const CementMillMainKharia = () => {
  return (
    <div className="CemetMillMainMaihar  w-100 h-100 position-relative">
      <div className="col-1 CGRnBox position-absolute single-text-1 ">
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 bg-info p-1",
              label: "Grinding Aid in MANUAL",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "GA Valve",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "WATER Valve",
            }}
          />
        </div>
        <div className="d-flex mt-2 justify-content-around">
          <div className="greenSqure mr-4"></div>
          <div className="greenSqure mr-1"></div>
        </div>
        <div className="d-flex justify-content-around">
          <div className=" d-flex single-text-2">
            <div className="greySqure mr-4 mt-3"></div>{" "}
            <div className="tringle-item mt-3 text-white">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div>
          </div>
          <div className=" d-flex single-text-2">
            <div className="tringle-item mt-3 text-white">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div>
            <div className="greySqure ml-4 mt-3"></div>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-2">
          <div className="redgrey-sqaure mr-4"></div>
          <div className="redgrey-sqaure mr-1"></div>
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Pressure",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Tank Level",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <BlackContainer
            data={{
              label: "PI_C51911",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "WI_C51911",
              useClass: "greenTxt mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mb-2",
              label: "GA VALVE CLS WATER VALVE CLS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mb-2",
              label: "GA LEVEL PROGRESS",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <BlackContainer
          data={{
            label: "PI_505A",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TI_520",
            useClass: "greenTxt mt-2",
            unit: "DegC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="containerImage text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mb-2",
            label: "OSPE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mb-2",
            label: "C52302",
          }}
        />
        <span className="greenDot mr-2 mt-2"> M</span>
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-5">
        <span className="greenDot"> M</span>
      </div>
      <div className="bagHouse text-center pr-4 position-absolute single-item-6 ">
        <BlackContainer
          data={{
            label: "PR_C52604",
            useClass: "greenTxt mt-2",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PI_C52604_DP",
            useClass: "greenTxt mt-2",
            unit: "mmww",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bagHouse text-center pr-4 position-absolute single-item-7">
        <div className="d-flex justify-content-center">
          <div className="greenSqure mt-2 mr-3"></div>
          <BlackContainer
            data={{
              label: "DP_C52705",
              useClass: "greenTxt mt-2",
              unit: "MMWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-8 ">
        <div className="d-flex  justify-content-center">
          <BlackContainer
            data={{
              label: "PI_C52303",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <div className="greenSqure mt-2 ml-3"></div>
        </div>
        <div className="d-flex  justify-content-center">
          <BlackContainer
            data={{
              label: "FI_C52303",
              useClass: "greenTxt mt-2",
              unit: "LPM",
              unitColor: "unitColor",
            }}
          />
          <div className="greenSqure mt-2 ml-3"></div>
        </div>
        <div className="hpipecircle d-flex justify-content-center mt-3"> </div>
        <div className="d-flex ml-4">
          <div className="greenDot p-2 mt-3 mr-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-3 ",
              label: "C52202",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "SIC_52302",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SI_50302",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EI_52302_1",
            useClass: "greenTxt mt-2",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-10">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "PI_C52604_B",
              useClass: "greenTxt mt-2 mr-4",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "EI_52604",
              useClass: "greenTxt mt-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "SI_52604",
              useClass: "greenTxt mt-2 ml-5",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <span className="green-line-circle"> </span>
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt mt-1 ",
                label: "C52604",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "SIC_52604",
              useClass: "greenTxt mt-2 ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <BlackContainer
          data={{
            label: "EI-52301_1",
            useClass: "greenTxt mt-2 mr-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SI_52301",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 ",
            label: "CS2301",
          }}
        />
        <div className="greenDot position-absolute p-2 mt-3 mr-2"></div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="containerImage">
          <BlackContainer
            data={{
              label: "PI_52301A",
              useClass: "greenTxt ml-1",
              unit: "mmw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage">
          <BlackContainer
            data={{
              label: "PI_52301B",
              useClass: "greenTxt ml-1",
              unit: "mmw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "XI_52301_DE",
            useClass: "greenTxt mt-2 mr-4",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "XI_52301_NDE",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-14">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "SIC_518",
              useClass: "greenTxt mt-2 mr-4",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FI_CM_INLET_SFM",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "SI_518",
              useClass: "greenTxt mt-2 mr-4",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PI_CM_INLET",
              useClass: "greenTxt mt-2",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "EI_518",
              useClass: "greenTxt mt-2 mr-4",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FI_5118",
              useClass: "greenTxt mt-2 ml-5",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "WI_502",
              useClass: "greenTxt mt-2 mr-4",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ",
              label: "CM IMPACT FLOW MTR",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2 ml-5 ",
            label: "4th HOPPFR BIN WEIGHT",
          }}
        />
      </div>

      <div className="bg-secondary CGRnBox px-2 position-absolute single-text-15">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "NS1911A",
            }}
          />
          <div className="grayDot ml-2 mt-1">M</div>
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "351911",
            }}
          />
          <div className="grayDot ml-2 mt-1">M</div>
        </div>
      </div>

      <div className="position-absolute single-text-16">
        <div className="greySqure"></div>
        <div className="d-flex mt-3">
          <div className="redgrey-sqaure mr-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ml-2",
              label: "SFL CS1911",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "FI_C51911",
            useClass: "greenTxt mt-2 mr-4",
            unit: "LPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FI_C51911_1",
            useClass: "greenTxt mt-2 mr-4",
            unit: "LPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CEMENT_MILL_FEED",
            useClass: "greenTxt mt-4 mr-4",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <div className="d-flex">
          <span className="green-line-circle"> </span>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ml-2",
              label: "C51901",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <span className="green-line-circle"> </span>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ml-2",
              label: "C51902",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PI_51901",
            useClass: "greenTxt mt-2 mr-4",
            unit: "kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PI_51903",
            useClass: "greenTxt mt-2 mr-4",
            unit: "kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FI_502",
            useClass: "greenTxt mt-2 mr-4",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FI_503",
            useClass: "greenTxt mt-2 mr-4",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <div className="drumContainer"></div>
      </div>
      <div className="position-absolute single-text-20">
        <div className="d-flex mb-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "AUX",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "C51906",
            }}
          />
          <div className="bg-red width-fit-content p-1">
            <div className="circle-group">
              <span className="grayDot">M</span>
              <span className="c-text"> c</span>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "C51901A",
            }}
          />
          <span className="green-line-circle"> </span>
        </div>
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "C51903",
            }}
          />
          <span className="green-line-circle"> </span>
        </div>
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "C51904",
            }}
          />
          <span className="green-line-circle"> </span>
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="hpipecircle d-flex justify-content-center mt-3"> </div>
        <div className="hpipecircle d-flex justify-content-center  ml-3 mt-3">
          {" "}
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="hpipecircle d-flex justify-content-center mt-3"> </div>
        <div className="hpipecircle d-flex justify-content-center  ml-5 mt-3">
          {" "}
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div className="hpipecircle  mt-3"> </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div className="hpipecircle  mt-3"> </div>
      </div>
      <div className="position-absolute single-text-25">
        <div className="greenDot p-2 mt-3 ml-4"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "C52303_A",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="greenDot p-2 mt-3 ml-1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "C520",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="greenDot p-2 mt-3 ml-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "C50287",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="greenDot p-2 mt-3 ml-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "N51922",
          }}
        />
      </div>
      <div className="bg-secondary CGRnBox px-2 position-absolute single-text-29">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "DIVIDER",
            }}
          />
          <div className="greenSqure mt-1 ml-2"></div>
          <BlackContainer
            data={{
              label: "PI_506",
              useClass: "greenTxt mt-1 ml-2",
              unit: "kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "GS MAIN AIR PR",
            }}
          />

          <BlackContainer
            data={{
              label: "PI_C51908",
              useClass: "greenTxt mt-1 ml-2",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <div className="greenSqure mt-1 ml-2"></div>
          <span className="greenDot ml-2"> M</span>
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <div className="d-flex ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "CS18",
            }}
          />
          <div className="grayDot p-2 mt-1 mL-2"></div>
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <span className="green-line-circle"> </span>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "C51920",
            }}
          />
        </div>
        <div>
          <div className="bg-red width-fit-content">
            {" "}
            <div className="circle-group">
              <span className="grey-line-circle"></span>
            </div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2 mr-2",
              label: "C51921",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <span className="grey-line-circle"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "C52002",
            }}
          />
        </div>
        <div className="mt-4 ml-3">
          <span className="green-line-circle"> </span>

          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "C52003",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div>
          <div className="redgrey-sqaure mr-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "AUX",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 mr-2",
              label: "COLPLED",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "FI_C51905",
              useClass: "greenTxt mt-2 ml-3",
              unit: "LPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2 ml-3",
              label: "DE VIB",
            }}
          />
          <BlackContainer
            data={{
              label: "XI506_DE",
              useClass: "greenTxt mt-2 ml-3",
              unit: "MM/SEC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2 mr-2",
              label: "NDE VIB",
            }}
          />
          <BlackContainer
            data={{
              label: "XI507_NDE",
              useClass: "greenTxt mt-2 ml-3",
              unit: "MM/SEC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TI_501",
              useClass: "greenTxt mt-2 ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PI_502",
              useClass: "greenTxt mt-2 ml-3",
              unit: "mmW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TI_506",
              useClass: "greenTxt mt-2 ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2 ml-5",
              label: "AUX",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ml-5",
              label: "DECOUPLED",
            }}
          />
          <div className="greenSqure mt-1 ml-5"></div>
        </div>
      </div>
      <div className="position-absolute single-text-38">
        <BlackContainer
          data={{
            label: "EI_502",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "EI_503",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <BlackContainer
          data={{
            label: "PI_C52604_A",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "PI_521",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "kg",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "CM COMPR AIR PRSS",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "4TH HOPPER C518-VIBR",
          }}
        />
        <div className="greySqure ml-2 mt-1"></div>
      </div>
      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "REV",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "C526028",
            }}
          />
          <span className="greenDot ml-2"> M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "To C521",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <div className="d-flex mr-5 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "C52602A",
            }}
          />
          <span className="grayDot ml-2"> M</span>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-5 ml-2",
              label: "CO C52801",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <div>
          <span className="greenDot "> M</span>
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "FWD",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "C52601",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "C52301_1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "COOING_FAN",
            }}
          />
          <div className="greenDot p-2 mt-1 ml-4"></div>
        </div>
      </div>
      <div className="box-1 px-1 position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "500 TON FEED BIN GATE",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "GI_C5118",
              useClass: "greenTxt mt-2 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FI_5050",
              useClass: "greenTxt mt-2 ml-3 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <i className="fa-solid fa-road-barrier mt-2 mx-auto"></i>
          <i className="fa-solid fa-road-barrier mt-2 ml-3 mx-auto"></i>
        </div>
      </div>
      <div className="bg-secondary CGRnBox px-2 position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "500 TON FEED BIN",
          }}
        />
        <div className="d-flex ml-4 mt-2">
          <div className="squareplustri text-center"></div>
          <span className="green-line-circle ml-2 mt-3"> </span>
        </div>
        <div className="containerImage">
          <BlackContainer
            data={{
              label: "WI_5115",
              useClass: "greenTxt",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ml-2",
              label: "500 T BIN",
            }}
          />
        </div>
        <div className="yellowline-Vr upArrow line-26"></div>
        <div className="yellowline-Hr  line-27"></div>
        <div className="single-text-48 d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt mt-1 mx-auto",
                label: "C519",
              }}
            />
            <div className="grayDot p-2 mt-1 mx-auto"></div>
          </div>

          <div className="ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "yellowTxt mt-1 mx-auto",
                label: "C522",
              }}
            />
            <div className="grayDot p-2 mt-1 mx-auto"></div>
          </div>
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "dark-text bg-info text-center",
              label: "SEL-C519",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "dark-text bg-info text-center mt-2 mb-3",
              label: "SEL-C522",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2 ",
            label: "N5050",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2 ",
            label: "591SM2",
          }}
        />
        <div className="bg-red width-fit-content p-1 ml-2 mt-2">
          <div className="circle-group">
            <span className="grayDot">M</span>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "N5050_TD_COUNT",
            useClass: "greenTxt",
            unit: "Nos.",
            unitColor: "unitColor",
          }}
        />
        <div className="ml-4">
          <div className="redgrey-sqaure mr-1 ml-3"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2 ",
              label: "N5140 FLD SW",
            }}
          />
          <BlackContainer
            data={{
              label: "N5139_TD_COUNT",
              useClass: "greenTxt mt-2",
              unit: "Nos.",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <div className="mt-3 mr-3">
          <BlackContainer
            data={{
              label: "CM_1_BLAIN",
              useClass: "greenTxt mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM-1-R63",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2 ",
              label: "N5308",
            }}
          />
          <span className="greenDot "> M</span>
        </div>
      </div>
      <div className="position-absolute single-text-52">
        <div className="greenDot p-2 mt-3 ml-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "C50286",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <div className="greenDot p-2 mt-3 ml-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "N5304",
          }}
        />
        <BlackContainer
          data={{
            label: "EI_509",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-54">
        <div className="greenDot p-2 mt-3 ml-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "C52201",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "N5305",
          }}
        />
        <div className="pipe dotted-pipe ">
          <span className="greenDot"> M</span>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
        </div>
      </div>

      <div className="position-absolute single-text-56">
        <div className="hpipecircle "> </div>
      </div>
      <div className="position-absolute single-text-57 d-flex">
        <div className="hpipecircle "> </div>
        <div className="hpipecircle ml-5"> </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <div className="redgrey-sqaure mr-1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "COMP 1 OPEN 1",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <div className=" d-flex">
          <div className="greenSqure mt-1 ml-5"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ml-2",
              label: "COMP 2 OPEN 1",
            }}
          />
        </div>
        <div className="greenSqure mt-3 ml-5"></div>
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <div className="redgrey-sqaure mr-1"></div>
      </div>
      <div className="position-absolute single-text-61 d-flex ">
        <div>
          <div className="redgrey-sqaure mr-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "CLOSE",
            }}
          />
        </div>
        <div className=" ml-1">
          <div className="redgrey-sqaure mr-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1  ",
              label: "OPEN",
            }}
          />
        </div>
        <div className=" ml-4">
          <div className="redgrey-sqaure mr-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ",
              label: "CLOSE",
            }}
          />
        </div>
        <div className=" ml-4">
          <div className="greenSqure mt-3"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ",
              label: "OPEN",
            }}
          />
        </div>
        <div className=" ml-4">
          <div className="greenSqure mt-3"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ",
              label: "CLOSE",
            }}
          />
        </div>
        <div className=" ml-4">
          <div className="redgrey-sqaure mr-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1 ",
              label: "OPEN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-62 d-flex">
        <div className="d-flex mr-5">
          <div className="squareplustri text-center">
            <div className="greenSqure mr-1 pt-2"></div>
          </div>
          <div className="greenDot p-2 mt-3 ml-2 "></div>
        </div>
        <div className="d-flex ml-4 mr-5">
          <div className="squareplustri text-center">
            <div className="greenSqure mr-1 pt-2"></div>
          </div>
          <div className="greenDot p-2 mt-3 ml-2"></div>
        </div>
        <div className="d-flex ml-4 mr-5">
          <div className="squareplustri text-center">
            <div className="greenSqure mr-1 pt-2"></div>
          </div>
          <div className="greenDot p-2 mt-3 ml-2"></div>
        </div>
      </div>
      <div className="position-absolute single-text-63">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "N5140",
          }}
        />
        <div className="pipe dotted-pipe ">
          <span className="greenDot"> M</span>
          <div className="redgrey-sqaure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="greenSqure mt-3"></div>
          <div className="redgrey-sqaure mt-3"></div>
        </div>
      </div>
      <div className="position-absolute single-text-64">
        <div className="gry-img "></div>
        <div className="d-flex">
          <div className="greenSqure"></div>
          <div className="redgrey-sqaure ml-4"></div>
        </div>
      </div>
      <div className="position-absolute single-text-65 ">
        <div className="d-flex">
          <div className="greenSqure mr-3"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-1",
              label: "N5140 CLUTCH SW",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "TI_503",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <div className="hpipecircle "> </div>
        <div className="hpipecircle ml-5"> </div>
      </div>

      <div className="containerImage text-center position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mb-2",
            label: "SILO-2",
          }}
        />
        <BlackContainer
          data={{
            label: "WI_503",
            useClass: "greenTxt mt-3",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mb-2",
            label: "SILO-1",
          }}
        />
        <BlackContainer
          data={{
            label: "WI_501",
            useClass: "greenTxt mt-3",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "SILO_LVL_4",
            useClass: "greenTxt mt-3",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "WI ONE TON",
            useClass: "greenTxt mt-3",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-70">
        <BlackContainer
          data={{
            label: "EI_60270",
            useClass: "greenTxt mt-3",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EI_60272",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-71 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2 mr-3",
            label: "SEILO-2 OPEN GREEN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2 ml-5",
            label: "SEILO-1 OPEN GREEN",
          }}
        />
      </div>
      <div className="position-absolute single-text-72">
        <div className="d-flex mr-5">
          <div className="squareplustri text-center">
            <div className="greenSqure mr-1 pt-2"></div>
          </div>
          <div className="green-line-circle p-2 mt-3 ml-2 "></div>
        </div>
      </div>
      <div className="position-absolute single-text-73">
        <div className="d-flex mr-5">
          <div className="squareplustri text-center">
            <div className="greenSqure mr-1 pt-2"></div>
          </div>
          <div className="green-line-circle p-2 mt-3 ml-2 "></div>
        </div>
      </div>
      <div className="position-absolute single-text-74">
        <div className="greenDot p-2 mt-3 ml-1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2",
            label: "C53101",
          }}
        />
      </div>
      <div className="position-absolute single-text-75">
        <div className="greenDot p-2 mt-3 ml-1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2",
            label: "C53201",
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-76">
        <span className="greenDot">M</span>
      </div>
      <div className=" position-absolute single-text-77">
        <div className="d-flex ml-4">
          <div className="greenDot p-2 mr-2"></div>

          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mt-2",
              label: "C52704A",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2 ml-5",
            label: "SEP DC SCREW",
          }}
        />
      </div>
      <div className="position-absolute single-text-78">
        <BlackContainer
          data={{
            label: "EI_5140",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-79">
        <BlackContainer
          data={{
            label: "PI_5115",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-80">
        <div className="greenDot p-2 mt-3 ml-1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "C52304",
          }}
        />
      </div>
      <div className="position-absolute single-text-81">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1 mr-2",
            label: "C52303",
          }}
        />
        <div className="grayDot p-2 mt-1 ml-1"></div>
      </div>
      <div className="position-absolute single-text-82">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "CEMENT MILL",
          }}
        />
      </div>
      <div className="position-absolute single-text-83">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "SEP DC RAL",
          }}
        />
      </div>
      <div className="position-absolute single-text-84 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "RTS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "ABF",
          }}
        />
      </div>
      <div className="position-absolute single-text-85">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "C521",
          }}
        />
      </div>
      <div className="position-absolute single-text-88">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2",
            label: "C52705",
          }}
        />
      </div>
      <div className="position-absolute single-text-86">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "BLOWER",
          }}
        />
      </div>
      <div className="position-absolute single-text-87">
        <div class="green-line-circle p-2 mt-3 ml-2 "></div>
      </div>

      <div className="position-absolute single-text-32">
        <div className="containerImage"></div>
        <div className="img-86 position-absolute"></div>

        <div className="bg-red width-fit-content p-1 ">
          <div className="circle-group">
            <span className="grayDot">M</span>
            <span className="c-text"> c</span>
          </div>
        </div>
      </div>

      <div className="pipeVr position-absolute pipe-1">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-up mt-5"></i>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-2">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-3">
        <div className="d-flex justify-content-around mt-3">
          <i className="fas fa-long-arrow-alt-down"></i>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-4">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-right"></i>
          <i className="fas fa-long-arrow-alt-right"></i>{" "}
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-5">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-left"></i>
          <i className="fas fa-long-arrow-alt-left"></i>{" "}
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <span className="invisible">C</span>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="yellowline-Vr upArrow position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Hr  leftarrow position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-6"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr upArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-21"></div>
      <div className="yellowline-Vr upArrow position-absolute line-22"></div>
      <div className="yellowline-Vr upArrow position-absolute line-23"></div>
      <div className="yellowline-Vr  position-absolute line-24"></div>
      <div className="yellowline-Hr  position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Hr  position-absolute line-29"></div>
      <div className="yellowline-Vr   downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr upArrow position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow position-absolute line-33"></div>
      <div className="yellowline-Vr upArrow position-absolute line-34"></div>
      <div className="yellowline-Hr  position-absolute line-35"></div>
      <div className="yellowline-Hr  position-absolute line-36"></div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr  position-absolute line-42"></div>
      <div className="yellowline-Vr  position-absolute line-43"></div>
      <div className="yellowline-Hr  position-absolute line-44"></div>
      <div className="yellowline-Vr  position-absolute line-45"></div>
      <div className="yellowline-Vr  position-absolute line-46"></div>
      <div className="yellowline-Vr  position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-48"></div>
      <div className="yellowline-Vr  position-absolute line-49"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-50"></div>
      <div className="yellowline-Hr  position-absolute line-51"></div>
      <div className="yellowline-Vr  position-absolute line-52"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-53"></div>
      <div className="yellowline-Hr  position-absolute line-54"></div>
      <div className="yellowline-Vr  position-absolute line-55"></div>
      <div className="yellowline-Hr  position-absolute line-56"></div>
      <div className="yellowline-Vr downArrow position-absolute line-57"></div>
      <div className="yellowline-Vr upArrow position-absolute line-58"></div>
      <div className="yellowline-Vr  position-absolute line-59"></div>
      <div className="yellowline-Hr  position-absolute line-60"></div>
      <div className="yellowline-Hr  position-absolute line-61"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-62"></div>
      <div className="yellowline-Hr  position-absolute line-63"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-64"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-65"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-66"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-67"></div>
      <div className="yellowline-Hr   position-absolute line-68"></div>
      <div className="yellowline-Hr   position-absolute line-69"></div>
      <div className="yellowline-Hr   position-absolute line-70"></div>
      <div className="yellowline-Hr   position-absolute line-71"></div>
      <div className="yellowline-Hr   position-absolute line-72"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-73"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-74"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-75"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-76"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-77"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-78"></div>
      <div className="yellowline-Hr   position-absolute line-79"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-80"></div>
    </div>
  );
};
