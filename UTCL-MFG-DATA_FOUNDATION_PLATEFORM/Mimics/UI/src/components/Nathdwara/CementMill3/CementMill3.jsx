import {
  cementMill3TextColumn1,
  cementMill3TextColumn2a,
} from "../../../data/nathdwara/cementmill3/cementMillTextColumn";
import {
  CircleGroup,
  TopLeftBox,
  ImageData,
  BlackContainer,
  GreenDot,
} from "../../index";

export const CementMill3 = () => {
  return (
    <div className="pl-1 pr-1 CementMill3 w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="row m-0">
        <div className="pipeVr position-absolute pipe1"></div>
        <div className="pipeHr position-absolute pipe2"></div>
        <div className="pipeHr position-absolute pipe3"></div>
        <div className="pipeHr position-absolute pipe4"></div>
        <div className="pipeHr position-absolute pipe5"></div>
        <div className="pipeHr position-absolute pipe6"></div>
        <div className="pipeHr position-absolute pipe7"></div>
        <div className="pipeHr position-absolute pipe8"></div>
        <div className="pipeHr position-absolute pipe9"></div>
        <div className="pipeHr position-absolute pipe10"></div>
        <div className="pipeHr position-absolute pipe11"></div>
        <div className="pipeHr position-absolute pipe12"></div>
        <div className="pipeVr position-absolute pipe13"></div>
        <div className="pipeVr position-absolute pipe14"></div>
        <div className="pipeVr position-absolute pipe15"></div>
        <div className="pipeVr position-absolute pipe16"></div>
        <div className="pipeVr position-absolute pipe18"></div>
        <div className="pipeVr position-absolute pipe19"></div>
        <div className="pipeHr position-absolute pipe20"></div>
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        <div className="yellowline-Vr position-absolute line-2"></div>
        <div className="yellowline-Vr position-absolute line-3"></div>
        <div className="yellowline-Vr downArrow position-absolute line-4"></div>
        <div className="yellowline-Vr downArrow position-absolute line-5"></div>
        <div className="yellowline-Vr downArrow position-absolute line-6"></div>
        <div className="yellowline-Vr downArrow position-absolute line-7"></div>
        <div className="yellowline-Vr downArrow position-absolute line-8"></div>
        <div className="yellowline-Vr downArrow position-absolute line-9"></div>
        <div className="yellowline-Vr downArrow position-absolute line-10"></div>
        <div className="yellowline-Vr downArrow position-absolute line-11"></div>
        <div className="yellowline-Vr downArrow position-absolute line-12"></div>
        <div className="yellowline-Vr downArrow position-absolute line-13"></div>
        <div className="yellowline-Vr downArrow position-absolute line-14"></div>
        <div className="yellowline-Vr downArrow position-absolute line-15"></div>
        <div className="yellowline-Vr downArrow position-absolute line-16"></div>
        <div className="yellowline-Vr downArrow position-absolute line-17"></div>
        <div className="yellowline-Vr downArrow position-absolute line-18"></div>
        <div className="yellowline-Vr downArrow position-absolute line-19"></div>
        <div className="yellowline-Vr downArrow position-absolute line-20"></div>
        <div className="yellowline-Vr downArrow position-absolute line-22"></div>
        <div className="yellowline-Vr downArrow position-absolute line-23"></div>
        <div className="yellowline-Vr downArrow position-absolute line-24"></div>
        <div className="yellowline-Vr downArrow position-absolute line-25"></div>
        <div className="yellowline-Vr downArrow position-absolute line-26"></div>
        <div className="yellowline-Vr downArrow position-absolute line-27"></div>
        <ImageData
          data={{
            useClass:
              "triangle-with-squares position-absolute single-item-1 d-flex flex-column justify-content-end align-items-center",
            subImage: "rawmill2circle",
          }}
        />
        <ImageData
          data={{
            useClass:
              "triangle-with-squares position-absolute single-item-2 d-flex flex-column justify-content-end align-items-center",
            subImage: "rawmill2circle",
          }}
        />
        <ImageData
          data={{
            useClass:
              "triangle-with-squares position-absolute single-item-3 d-flex flex-column justify-content-end align-items-center",
            subImage: "rawmill2circle",
          }}
        />
        <ImageData
          data={{
            useClass:
              "triangle-with-squares position-absolute single-item-4 d-flex flex-column justify-content-end align-items-center",
            subImage: "rawmill2circle",
          }}
        />
        <div className="middle-sqr-container position-absolute text-center single-item-5">
          <BlackContainer
            data={{
              label: "N2563SR1N01P01",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563SR1N01P01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="drumContainer pt-4 position-absolute text-center single-item-6">
          {/* <BlackContainer
            data={{
              label: "N2563BM1N06N01_PID:MV.VALUE",
              useClass: "greenTxt mt-01 mx-auto",
              unit: "",
              unitColor: "unitColor",
            }}
          /> */}
          <div className="text-dark">CM-3</div>
          <BlackContainer
            data={{
              label: "N2563BM1N02T01",
              useClass: "greenTxt mt-01 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
   
        <div className="containerImage position-absolute d-flex justify-content-center align-items-center single-item-60">
          {" "}
          <div className="greenSqure">B</div>
        </div>
        <div className="roller-drum position-absolute d-flex justify-content-center align-items-center single-item-7">
          <div className="greenDot">M</div>
        </div>
        <div className="roller-drum position-absolute d-flex justify-content-center align-items-center single-item-8">
          <div className="greenDot">M</div>
        </div>

 
        <div className="containerImage d-flex flex-column justify-content-between align-items-center position-absolute single-item-9">
          {" "}
          <div className="circle-img ml-1"></div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-10">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-11">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="linebottel position-absolute single-item-12"></div>
        <div className="containerImage d-flex flex-column justify-content-between align-items-center position-absolute single-item-13">
          {" "}
          <div className="circle-img ml-1"></div>
        </div>
        <div className="containerImage d-flex flex-column justify-content-between align-items-center position-absolute single-item-14">
          {" "}
          <div className="wrapTextDiv"> 593BF</div>{" "}
          <div className="circle-img ml-1"></div>
        </div>
        <div className="bagHouse d-flex justify-content-between align-items-center position-absolute single-item-15">
          <span className="greenDot">M</span>
          <span className="grayDotWithText">M</span>
          <span className="greenDot">M</span>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-16">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="linebottel position-absolute single-item-17"></div>
        <div className="connector-both-side-2 position-absolute single-item-18">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-19">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="hpipecircle position-absolute single-item-20">
          <span>533BC1</span>
          <div className="bg-red width-fit-content">
            <span className="grayDot">M</span>
          </div>
        </div>
        <div className="hpipecircle position-absolute single-item-21"></div>
        <div className="hpipecircle position-absolute single-item-22"></div>
        <div className="hpipecircle position-absolute single-item-23"></div>
        <div className="hpipecircle position-absolute single-item-24"></div>
        <div className="hpipecircle position-absolute single-item-25"></div>
        <div className="hpipecircle position-absolute single-item-26">
          <span className="grayDotWithText">M</span>
        </div>
        <div className="hpipecircle position-absolute single-item-27"></div>
        <div className="hpipecircle position-absolute single-item-28"></div>
        <div className="hpipecircle position-absolute single-item-29"></div>
        <div className="hpipecircle position-absolute single-item-30"></div>
        <div className="hpipecircle position-absolute single-item-31"></div>
        <div className="connector-both-side-2 position-absolute single-item-32">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-33">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-34">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-35">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-36">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-37">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-38">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-39">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-40">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="connector-both-side-2 position-absolute single-item-41">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="pipe dotted-pipe position-absolute single-item-42">
          <GreenDot data={{ useClass: "" }} />
        </div>
        <div className="pipe dotted-pipe position-absolute single-item-43">
          <GreenDot data={{ useClass: "" }} />
        </div>
        <div className="p-2 dashed-box position-absolute single-item-44">
          <div className="d-flex justify-content-around">
            <BlackContainer
              data={{
                label: "N3MILLFDSP",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N3564MD1JZ1",
                useClass: "greenTxt ml-1",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-01">
            <BlackContainer
              data={{
                label: "N3564CM4TZ3",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N3594MD1_IZ1",
                useClass: "greenTxt ml-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-01">
            <BlackContainer
              data={{
                label: "N3564CM4TZ4",
                useClass: "greenTxt",
                unit: "°C",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N3564MD2_IZ1",
                useClass: "greenTxt ml-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-01">
            <BlackContainer
              data={{
                label: "N3564CM4FOL",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N3534WF1SZ1",
                useClass: "greenTxt ml-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-01">
            <BlackContainer
              data={{
                label: "N3564SR1IZ1",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N3564CM4TZ2",
                useClass: "greenTxt ml-1",
                unit: "°C",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <TopLeftBox
          parentDivClass="dashed-box position-absolute single-item-45"
          useClass="d-flex justify-content-between"
          list={cementMill3TextColumn1}
        />
        <div className="d-flex justify-content-around position-absolute single-item-46">
          <BlackContainer
            data={{
              label: "N2512HP1N01L01",
              useClass: "greenTxt",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2K22HP1N01L01",
              useClass: "greenTxt ml-1",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2K22HP2N01L01",
              useClass: "greenTxt ml-1",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="dashed-box grid-container-3 position-absolute single-item-47">
          <CircleGroup parentClass="circle-group" useClass="grey-line-circle" />
          <CircleGroup parentClass="circle-group" useClass="grey-line-circle" />
          <CircleGroup parentClass="circle-group" useClass="grey-line-circle" />
          <BlackContainer
            data={{
              label: "N2533WF1N01FZ1",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2533WF4N01FZ1",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2533WF5N01FZ1",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2533WF1N01LZ1",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2533WF4N01LZ1",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2533WF5N01LZ1",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563WF1N01SZ1",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2533WF4N01SZ1",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2533WF5N01SZ1",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox position-absolute single-item-48">
          <BlackContainer
            data={{
              label: "N2563WP1_PID:MV.VALUE",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563WP1_PID:IO.OUTP.VALUE",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox position-absolute single-item-49">
          <BlackContainer
            data={{
              label: "N2563WP2_PID:MV.VALUE",
              useClass: "greenTxt",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563WP3FZ1:IO.OUTP.VALUE",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-51">
          <BlackContainer
            data={{
              label: "N2563FN5N11T01",
              useClass: "greenTxt",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN5N12T01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-52">
          <BlackContainer
            data={{
              label: "N2563FM1A01F01",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563BM1N01T01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563BM1N02P01",
              useClass: "greenTxt mt-01",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-53">
          <BlackContainer
            data={{
              label: "N2563FN5_SP",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN5_SZ1",
              useClass: "greenTxt mt-01",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN5_IZ1",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-54">
          <BlackContainer
            data={{
              label: "N2563FN7_SP",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN7SZ1",
              useClass: "greenTxt mt-01",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN7A1",
              useClass: "greenTxt mt-01",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-55">
          <BlackContainer
            data={{
              label: "N2563LU4N03T01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563LU4N04T01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563WP3PRS",
              useClass: "greenTxt mt-01",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563WP2M01Z01",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-56">
          <BlackContainer
            data={{
              label: "N2563LU1N03T01",
              useClass: "greenTxt",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563LU1N04T01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-57">
          <BlackContainer
            data={{
              label: "N2563LU1N01T01",
              useClass: "greenTxt",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563LU1N02T01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-58">
          <BlackContainer
            data={{
              label: "N2563LU4N01T01",
              useClass: "greenTxt",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563LU4N02T01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-59">
          <BlackContainer
            data={{
              label: "N2563BM1N03T01",
              useClass: "greenTxt",
              unit: "°C",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563BM1_PSR",
              useClass: "greenTxt mt-01",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "N2563BF1DP",
            useClass: "greenTxt position-absolute single-item-61",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2_563SR1_DP",
            useClass: "greenTxt position-absolute single-item-62",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BF2N01P01",
            useClass: "greenTxt position-absolute single-item-63",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BF2AIRPR",
            useClass: "greenTxt position-absolute single-item-64",
            unit: "B",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BF2N01T01",
            useClass: "greenTxt position-absolute single-item-65",
            unit: "°C",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563TV2M01Z01",
            useClass: "greenTxt position-absolute single-item-66",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2593BE1A1",
            useClass: "greenTxt position-absolute single-item-67",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2593BF1DP",
            useClass: "greenTxt position-absolute single-item-68",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563SC2A1",
            useClass: "greenTxt position-absolute single-item-69",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BE1A1",
            useClass: "greenTxt position-absolute single-item-70",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BH1_PZ3",
            useClass: "greenTxt position-absolute single-item-71",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BH1_DP",
            useClass: "greenTxt position-absolute single-item-72",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563SR1N01P01",
            useClass: "greenTxt position-absolute single-item-73",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BM1KWAVG",
            useClass: "greenTxt position-absolute single-item-75",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BM1N05T01",
            useClass: "greenTxt position-absolute single-item-76",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563GB1VZ1",
            useClass: "greenTxt position-absolute single-item-77",
            unit: "MM/Sec",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563WP3PZ1",
            useClass: "greenTxt position-absolute single-item-78",
            unit: "B",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt position-absolute single-item-79",
            unit: "M3/HR.",
            unitColor: "unitColor",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "N2563BM1KWAVG",
            useClass: "greenTxt position-absolute single-item-80",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563WP1FZ1",
            useClass: "greenTxt position-absolute single-item-81",
            unit: "M3/HR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM3_TOTAL_FEED",
            useClass: "greenTxt position-absolute single-item-82",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FEED_CAL_FAC_PID",
            useClass: "greenTxt position-absolute single-item-83",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2563BM1N06N01_PID_OUTP",
            useClass: "greenTxt position-absolute single-item-84",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "N2533BC1A1",
            useClass: "greenTxt position-absolute single-item-85",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="CGRnBox position-absolute single-item-86">
          <BlackContainer
            data={{
              label: "N2563BM1N06N01_PID:MV.VALUE",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563BM1N06N01_PID:IO.OUTP.VALUE",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="CGRnBox position-absolute single-item-87">
          <BlackContainer
            data={{
              label: "N2563FN7_PID:MV.VALUE",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN7_PID:IO.OUTP.VALUE",
              useClass: "greenTxt mt-01",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-88">
          <BlackContainer
            data={{
              label: "N2563WP1N01P01",
              useClass: "greenTxt",
              unit: "B",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563WP1M01Z01",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-89">
          <BlackContainer
            data={{
              label: "N2563FN4N13V01",
              useClass: "greenTxt",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN4N14V01",
              useClass: "greenTxt mt-01",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-90">
          <BlackContainer
            data={{
              label: "N2563FN4SETP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PC5_Application1",
              useClass: "greenTxt mt-01",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-91">
          <div className="greenSqure d-block"></div>
          <BlackContainer
            data={{
              label: "N2563BH1_TE01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563BH1_PZ1",
              useClass: "greenTxt mt-01",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-92">
          <div className="greenSqure d-block"></div>
          <BlackContainer
            data={{
              label: "N2563BH1_TE02",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563BH1_PZ2",
              useClass: "greenTxt mt-01",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-93">
          <BlackContainer
            data={{
              label: "N2563EP1N01T01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563BH1_PZ9",
              useClass: "greenTxt mt-01",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-item-94">
          <BlackContainer
            data={{
              label: "N2563FN4KW",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563FN4N01_T01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2_563FN4N02P01",
              useClass: "greenTxt mt-01",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-dark position-absolute single-item-95">CM-4</div>
        <div className="text-dark position-absolute single-item-96">563BF1</div>
        <div className="text-dark position-absolute single-item-97">563FN6</div>
        <div className="text-dark position-absolute single-item-98">563RA1</div>
        <div className="text-dark position-absolute single-item-99">593RA1</div>
        <div className="text-dark position-absolute single-item-100">
          593RA2
        </div>
        <div className="text-dark position-absolute single-item-101">
          593AS1
        </div>
        <div className="text-dark position-absolute single-item-102">
          593FN1
        </div>
        <div className="text-dark position-absolute single-item-103">
          593FN3
        </div>
        <div className="text-dark position-absolute single-item-104">
          564AS3
        </div>
        <div className="text-dark position-absolute single-item-105">
          563FN3
        </div>
        <div className="text-dark position-absolute single-item-106">
          593FN5
        </div>
        <div className="text-dark position-absolute single-item-107">
          593AS3
        </div>
        <div className="text-dark position-absolute single-item-108">
          564AS2
        </div>
        <div className="text-dark position-absolute single-item-109">
          563RA3
        </div>
        <div className="text-dark position-absolute single-item-110">
          563RA4
        </div>
        <div className="text-dark position-absolute single-item-111">
          593AS2
        </div>
        <div className="text-dark position-absolute single-item-112">
          593FN2
        </div>
        <div className="text-dark position-absolute single-item-113">
          563SR1
        </div>
        <div className="text-dark position-absolute single-item-114">
          563FN8
        </div>
        <div className="text-dark position-absolute single-item-115">
          563SC2
        </div>
        <div className="text-dark position-absolute single-item-116">
          563BF2
        </div>
        <div className="text-dark position-absolute single-item-117">
          563RA2
        </div>
        <div className="text-dark position-absolute single-item-118">
          563FN5
        </div>
        <div className="text-dark position-absolute single-item-119">
          593FN6
        </div>
        <div className="text-dark position-absolute single-item-120">
          593RA5
        </div>
        <div className="text-dark position-absolute single-item-121">
          593BE1
        </div>
        <div className="text-dark position-absolute single-item-122">
          593AS5
        </div>
        <div className="text-dark position-absolute single-item-123">
          563BE1
        </div>
        <div className="text-dark position-absolute single-item-124">
          593SM1
        </div>
        <div className="text-dark position-absolute single-item-125">
          593AS3
        </div>
        <div className="text-dark position-absolute single-item-126">
          564AS2
        </div>
        <div className="text-dark position-absolute single-item-127">
          563FN7
        </div>
        <div className="d-flex position-absolute single-item-128">
          <div className="greySqure mr-2"></div>
          <div className="text-dark">CAPACITOR BANK</div>
        </div>
        <div className="d-flex position-absolute single-item-129">
          <div className="greenSqure mr-2"></div>
          <div className="text-dark">MVA HIGH</div>
        </div>
        <div className="position-absolute single-item-130">
          <div className="greySqure mr-2"></div>
          <div className="text-dark">563MW2</div>
        </div>
        <div className="position-absolute single-item-131">
          <div className="circle-group">
            <span className="greenSqure"></span>
            <span className="c-text">M</span>
          </div>
          <div className="text-dark">563TV2</div>
        </div>
        <div className="position-absolute single-item-132">
          <div className="greenSqure mr-2"></div>
          <div className="text-dark">WK</div>
        </div>
        <div className="position-absolute single-item-133">
          <div className="greenSqure mr-2"></div>
          <div className="text-dark">AM</div>
        </div>
        
        <div className="grn-gry-img position-absolute single-item-134"></div>
        <div className="grn-gry-img position-absolute single-item-135"></div>
        <div className="position-absolute single-item-136">
          <BlackContainer
            data={{
              label: "N2563SR1SZ1",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2563SR1IZ1",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="fiveside-shape position-absolute single-item-137"></div>
      </div>
      <div className="row m-0 bottom-row">
        <div className="col-2 dashed-box">
          <div className="d-flex p-2 justify-content-between w-100">
            <div className="circle-group">
              <span className="greenSqure"></span>
              <span className="c-text">M</span>
            </div>
            <div>
              <div className="text-dark mt-1">HTR</div>
              <div className="greySqure d-block"></div>
            </div>
            <div>
              <div className="text-dark mt-1">HP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
            <div>
              <div className="text-dark mt-1">LP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
            <div>
              <div className="text-dark mt-1">CP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
            <div>
              <div className="text-dark mt-1">LP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
          </div>
          <div className="d-flex p-2 justify-content-around w-100">
            <div>
              <div className="text-dark">OPR</div>
              <BlackContainer
                data={{
                  label: "N2563LU1N06T01",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="text-dark">RET</div>
              <BlackContainer
                data={{
                  label: "N2563LU1N05T01",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-2 dashed-box">
          <div className="d-flex p-2 justify-content-between w-100">
            <div className="circle-group">
              <span className="greenSqure"></span>
              <span className="c-text">M</span>
            </div>
            <div>
              <div className="text-dark mt-1">HTR</div>
              <div className="greySqure d-block"></div>
            </div>
            <div>
              <div className="text-dark mt-1">HP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
            <div>
              <div className="text-dark mt-1">LP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
            <div>
              <div className="text-dark mt-1">CP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
            <div>
              <div className="text-dark mt-1">LP</div>
              <div className="circle-group">
                {" "}
                <span className="grey-line-circle"></span>
              </div>
            </div>
          </div>
          <div className="d-flex p-2 justify-content-around w-100">
            <div>
              <div className="text-dark">OPR</div>
              <BlackContainer
                data={{
                  label: "N2563LU4N06T01",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div>
              <div className="text-dark">RET</div>
              <BlackContainer
                data={{
                  label: "N2563LU4N05T01",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-3 p-2 d-flex justify-content-between dashed-box">
          <div>
            <div className="circle-group">
              <span className="greenSqure"></span>
              <span className="c-text">M</span>
            </div>
            <div className="text-dark">LEVEL</div>
            <div className="circle-group">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
          </div>
          <div>
            <div className="greySqure d-block"></div>
            <div className="greenSqure  d-block mt-1"></div>
            <div className="greenSqure  d-block mt-1"></div>
          </div>
          <div>
            <div className="text-dark">GB I/T</div>
            <div className="text-dark">GB O/L</div>
            <div className="text-dark">TANK</div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "N2563LU7N01T01",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N2563LU7N03T01",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N2563LU7N02T01",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <div className="text-dark">P '2.5B'</div>
            <div className="text-dark">P '2.8B'</div>
            <div className="text-dark">D.P.</div>
          </div>
          <div>
            <div className="greenSqure d-block"></div>
            <div className="greenSqure d-block mt-1"></div>
            <div className="greenSqure d-block mt-1"></div>
          </div>
        </div>
        <div className="col-3 p-2 d-flex justify-content-between dashed-box">
          <div>
            <div className="redgrey-sqaure d-block"></div>
            <div className="greenSqure mt-1"></div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "N2563SR1N31T01",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N2563SR1N01P01",
                useClass: "greenTxt mt-01",
                unit: "B",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <CircleGroup
              parentClass="circle-group"
              useClass="grey-line-circle"
            />

            <div className="text-dark mt-01">GRS</div>
            <div className="text-dark mt-01">WTR</div>
          </div>
          <div>
            <CircleGroup
              parentClass="circle-group"
              useClass="grey-line-circle"
            />
            <CircleGroup
              parentClass="circle-group"
              useClass="grey-line-circle"
            />
            <CircleGroup
              parentClass="circle-group"
              useClass="grey-line-circle"
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "N2563SR1TZ1",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "N2563SR1TZ2",
                useClass: "greenTxt mt-01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <TopLeftBox
          parentDivClass="dashed-box col-2 p-2"
          useClass="d-flex justify-content-between"
          list={cementMill3TextColumn2a}
        />
      </div>
    </div>
  );
};
