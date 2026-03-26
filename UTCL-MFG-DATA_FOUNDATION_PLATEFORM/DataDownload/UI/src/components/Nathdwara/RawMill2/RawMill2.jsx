import {
  TopLeftBox,
  SingleText,
  BottomLeftBox,
  TextContainerWithWrapWord,
  BlackContainer,
  ImageData,
  CircleGroup,
  TxtcontainerMap,
  TextColumn,
  ProgressBarMimic,
} from "../../index";
import {
  rawmillTextColumn1,
  rawmillTextColumn10,
  rawmillTextColumn11,
  rawmillTextColumn12,
  rawmillTextColumn13,
  rawmillTextColumn15,
  rawmillTextColumn16,
  rawmillTextColumn17,
  rawmillTextColumn18,
  rawmillTextColumn19,
  rawmillTextColumn2,
  rawmillTextColumn20,
  rawmillTextColumn21,
  rawmillTextColumn22,
  rawmillTextColumn23,
  rawmillTextColumn24,
  rawmillTextColumn25,
  rawmillTextColumn26,
  rawmillTextColumn27,
  rawmillTextColumn3,
  rawmillTextColumn4,
  rawmillTextColumn5,
  rawmillTextColumn6,
  rawmillTextColumn7,
  rawmillTextColumn8,
  rawmillTextColumn9,
} from "../../../data/nathdwara/rawmill2/rawmillTextColumn";

export const RawMill2 = () => {
  return (
    <div className="RawMill2 w-100 h-100 position-relative d-flex flex-column justify-content-between pb-1">
      <div className="row m-0 pl-2">
        <div className="col-3 p-0">
          <div className="dashed-box d-flex justify-content-between">
            <TxtcontainerMap list={rawmillTextColumn20} />
            <TextColumn
              list={rawmillTextColumn19}
              useClass="boxContainer grid-container-2"
              yellowText="DP PID"
              textClass="text-dark"
              text="KW PID"
              text2Class="text-dark"
            />
          </div>
          <div className="dashed-box d-flex justify-content-between mt-1">
            <TxtcontainerMap list={rawmillTextColumn22} />
            <BottomLeftBox
              list={rawmillTextColumn21}
              parentDivClass="boxContainer"
              useClass="d-flex mt-3 justify-content-between"
            />
          </div>
          <div className="dashed-box d-flex justify-content-between mt-1">
            <div>
              <div className="text-dark mt-2"> R 1 Layer Thickness</div>
              <div className="text-dark mt-2">R 2 Layer Thickness</div>
              <div className="text-dark mt-2">R 3 Layer Thickness</div>
              <div className="d-flex mt-2">
                <div className="text-dark mr-2">Layer Thickness RMS</div>
                <BlackContainer
                  data={{
                    useClass: "greenTxt",
                    label: "R2362LAYERRMS",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="text-dark mt-2">Time Average 10S</div>
            </div>
            <TextColumn
              list={rawmillTextColumn23}
              useClass="boxContainer justify-content-between"
            />
          </div>
        </div>
        <div className="col-6 p-0">
          <div className="bigContainer position-absolute single-item-1 d-flex flex-column justify-content-between align-items-center">
            <div className="greenDot">M</div>
            <div className="greySqure"> M </div>
            <div className="redgrey-sqaure"></div>
            <ProgressBarMimic />
            <BlackContainer
              data={{
                useClass: "greenTxt mt-3",
                label: "R2_362LU1THICKNESS",
                unit: "MM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "R2362RM1V06V01",
                unit: "mm/Sec",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="pipeHr position-absolute single-item-1"></div>
          <div className="pipeVr position-absolute single-item-2 pt-5">
            <i className="fas fa-long-arrow-alt-up"></i>
          </div>
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
          <ImageData
            data={{
              useClass:
                "triangle-with-squares position-absolute single-item-5 d-flex flex-column justify-content-end align-items-center",
              subImage: "rawmill2circle",
            }}
          />
          <ImageData
            data={{
              useClass:
                "triangle-with-squares position-absolute single-item-6 d-flex flex-column justify-content-end align-items-center",
              subImage: "rawmill2circle",
            }}
          />
          <div className="pipeHr position-absolute single-item-13">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="connector-both-side-2 position-absolute single-item-7 d-flex flex-column justify-content-center align-items-center">
            <div className="green-line-circle"></div>
          </div>
          <div className="pipeHr position-absolute single-item-12"></div>
          <div className="pipeVr position-absolute single-item-8"></div>
          <div className="pipeVr position-absolute single-item-9"></div>
          <div className="pipeVr position-absolute single-item-10"></div>
          <div className="pipeVr position-absolute single-item-11"></div>
          <div className="pipeVr position-absolute single-item-15"></div>
          <div className="pipeVr position-absolute single-item-16 d-flex justify-content-around flex-column">
            <i className="fas fa-long-arrow-alt-up"></i>
            <i className="fas fa-long-arrow-alt-up mt-auto"></i>
          </div>
          <div className="pipeVr position-absolute single-item-17 pt-5">
            <i className="fas fa-long-arrow-alt-down"></i>
          </div>
          <div className="pipeVr position-absolute single-item-18 pt-5">
            <i className="fas fa-long-arrow-alt-up"></i>
          </div>
          <div className="pipeVr position-absolute single-item-19"></div>
          <div className="pipeHr position-absolute single-item-20"></div>
          <div className="pipeHr position-absolute single-item-21"></div>
          <div className="pipeHr position-absolute single-item-22"></div>
          <div className="pipeHr position-absolute single-item-23"></div>
          <div className="pipeHr position-absolute single-item-24"></div>
          <div className="pipeHr position-absolute single-item-25"></div>
          <div className="bagHouse position-absolute single-item-14"></div>
          <div className="connector-both-side-2 position-absolute single-item-26 d-flex flex-column justify-content-end align-items-center"></div>
          <div className="connector-both-side-2 position-absolute single-item-27 d-flex flex-column justify-content-end align-items-center"></div>
          <div className="green-line-circle position-absolute single-item-28"></div>
          <div className="grey-line-circle position-absolute single-item-29"></div>
          <div className="pipeHr position-absolute single-item-30 d-flex justify-content-around">
            <i className="fas fa-long-arrow-alt-left"></i>
            <i className="fas fa-long-arrow-alt-left"></i>
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="pipeHr position-absolute single-item-31 text-right">
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="pipeVr position-absolute single-item-32"></div>
          <div className="hpipecircle position-absolute single-item-33 justify-content-center">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="hpipecircle position-absolute single-item-35 justify-content-start flex-column pt-5">
            <i className="fas fa-long-arrow-alt-up"></i>
          </div>
          <div className="pipeVr position-absolute single-item-36">
            <span className="greySqure"></span>
          </div>
          <div className="pipeVr position-absolute single-item-37"></div>
          <div className="pipeHr position-absolute single-item-38"></div>
          <div className="pipeHr position-absolute single-item-39"></div>
          <div className="connector-both-side-2 position-absolute single-item-40">
            <span className="grey-line-circle"></span>
          </div>
          <div className="connector-both-side-2 position-absolute single-item-41">
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <span className="c-text">C</span>
            </div>
          </div>
          <div className="pipeHr position-absolute single-item-42"></div>
          <div className="boxContainer position-absolute single-item-43">
            <div className="text-dark">RECL PILE</div>
            <div className="d-flex mt-1">
              <div className="greySqure"></div>
              <div className="text-dark"> 2A</div>
              <BlackContainer
                data={{
                  useClass: "greenTxt ml-2",
                  label: "R1PILE2A_COUNTER",
                  unit: "TON",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <div className="greenSqure"></div>
              <div className="text-dark"> 2B</div>
              <BlackContainer
                data={{
                  useClass: "greenTxt ml-2",
                  label: "R1PILE2B_COUNTER",
                  unit: "TON",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <TextColumn list={rawmillTextColumn25} />
          <TextColumn
            list={rawmillTextColumn10}
            useClass="CGRnBox position-absolute single-item-46"
          />
          <div className="text-dark position-absolute single-item-47">
            A SC MR
          </div>
          <div className="text-dark position-absolute single-item-48">
            A SC1 DO
          </div>
          <div className="boxContainer position-absolute single-item-49">
            <div className="d-flex justify-content-between mb-1">
              <div className="grayDot"></div>
              <div className="grayDot ml-3"></div>
              <BlackContainer
                data={{
                  useClass: "greenTxt ml-3",
                  label: "R2_362FN1_GRR_SPD",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                useClass: "greenTxt ml-auto",
                label: "R2362FN1GRCSP",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-dark position-absolute single-item-50">
            362FN3
          </div>
          <CircleGroup
            parentClass="circle-group position-absolute single-item-51"
            useClass="greenDot"
          />
          <TextColumn
            list={rawmillTextColumn9}
            useClass="position-absolute single-item-52"
          />
          <TextColumn
            list={rawmillTextColumn8}
            useClass="position-absolute single-item-54"
          />
          <BlackContainer
            data={{
              useClass: "greenTxt position-absolute single-item-56",
              label: "K2422BH1N04P01",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
          <SingleText
            yellowText="362LD3"
            textClass="text-dark position-absolute single-item-59"
            data={{
              blackTextLabel: "K2362LD3M01Z01",
              blackTextClass: "greenTxt position-absolute single-item-57",
              unit: "",
            }}
          />
          <SingleText
            yellowText="362LD4"
            textClass="text-dark position-absolute single-item-60"
            data={{
              blackTextLabel: "K2362LD4M01Z01",
              blackTextClass: "greenTxt position-absolute single-item-58",
              unit: "",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt position-absolute single-item-61",
              label: "K2422FN2N01SZ1_HW",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt position-absolute single-item-62",
              label: "K2422FN2N01IZ1_HW",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-64",
              label: "422FN2",
            }}
          />
          <SingleText
            yellowText="422LD1"
            textClass="text-dark position-absolute single-item-65"
            data={{
              blackTextLabel: "K2422LD1M01Z01",
              blackTextClass: "greenTxt position-absolute single-item-63",
              unit: "%",
            }}
          />
          <BottomLeftBox
            parentDivClass="boxContainer position-absolute single-item-66 p-2"
            list={rawmillTextColumn4}
          />
          <BottomLeftBox
            parentDivClass="boxContainer position-absolute single-item-67 p-2"
            list={rawmillTextColumn5}
          />
          <SingleText
            data={{
              blackTextLabel: "K2_452FN1N03P01",
              blackTextClass: "greenTxt position-absolute single-item-68",
              unit: "mm",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-69",
              label: "PH FAN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-70",
              label: "362SD2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-71",
              label: "PH FAN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-72",
              label: "362FN4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-73",
              label: "362SD1",
            }}
          />
          <SingleText
            yellowText="362LD1"
            textClass="text-dark position-absolute single-item-74"
            data={{
              blackTextLabel: "R2362LD1M01Z01",
              blackTextClass: "greenTxt position-absolute single-item-75",
              unit: "%",
            }}
          />
          <TextColumn
            useClass="CGRnBox position-absolute single-item-76"
            list={rawmillTextColumn6}
          />
          <TextColumn
            useClass="CGRnBox position-absolute single-item-77"
            list={rawmillTextColumn7}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-78",
              label: "GRC A SC 1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute single-item-79",
              label: "A SC DO",
            }}
          />
          <SingleText
            data={{
              blackTextLabel: "R2362WTLZ1",
              blackTextClass: "greenTxt position-absolute single-item-80",
              unit: "M",
            }}
          />
          <SingleText
            yellowText="STDBY WP2"
            textClass="text-dark position-absolute single-item-88"
            data={{
              blackTextLabel: "R2362WP1M01Z01",
              blackTextClass: "greenTxt position-absolute single-item-81",
              unit: "%",
            }}
          />
          <TextColumn list={rawmillTextColumn13} />
          <div className="text-dark position-absolute single-item-89">
            362FN2
          </div>
          <div className="text-dark position-absolute single-item-90">
            362FN2A
          </div>
          <div className="text-dark position-absolute single-item-91">
            362RM1
          </div>
          <TextColumn list={rawmillTextColumn15} />
          <TextColumn
            list={rawmillTextColumn16}
            useClass="CGRnBox position-absolute single-item-99"
          />
          <TextColumn list={rawmillTextColumn17} />
          <SingleText
            yellowText="362BC1"
            textClass="text-dark position-absolute single-item-112"
            data={{
              blackTextLabel: "R2362BC1IZ1",
              blackTextClass: "greenTxt position-absolute single-item-107",
              unit: "A",
            }}
          />
          <SingleText
            yellowText="332BC1"
            textClass="text-dark position-absolute single-item-111"
            data={{
              blackTextLabel: "R2362BW1A01F01",
              blackTextClass: "greenTxt position-absolute single-item-108",
              unit: "TPH",
            }}
          />
          <SingleText
            yellowText="372HG1"
            textClass="text-dark position-absolute single-item-110"
            data={{
              blackTextLabel: "R2362RA1_FB",
              blackTextClass: "greenTxt position-absolute single-item-109",
              unit: "RPM",
            }}
          />
          <div className="text-dark position-absolute single-item-113">
            362VF1
          </div>
          <div className="boxContainer position-absolute single-item-114">
            <div className="d-flex justify-content-between mb-1">
              <div className="grayDot"></div>
              <div className="grayDot ml-3"></div>
              <BlackContainer
                data={{
                  useClass: "greenTxt ml-3",
                  label: "R2_362RM1_GRR_SPD",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                useClass: "greenTxt ml-auto",
                label: "R2362RM1GRCSP",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-dark position-absolute single-item-115">
            362FN1
          </div>
          <div className="text-dark position-absolute single-item-116">NDE</div>
          <div className="text-dark position-absolute single-item-117"> DE</div>
          <div className="text-dark position-absolute single-item-118">
            332MT1
          </div>
          <TextColumn
            list={rawmillTextColumn18}
            useClass="CGRnBox position-absolute single-item-119"
          />
          <div className="text-dark position-absolute single-item-120">
            332MS1
          </div>
          <div className="text-dark position-absolute single-item-121">
            FROM W/F
          </div>
          <div className="text-dark position-absolute single-item-122">
            332MW1
          </div>
          <div className="text-dark position-absolute single-item-123">
            332BC1
          </div>
          <div className="text-dark position-absolute single-item-124">
            REJECT BIN
          </div>
          <div className="text-dark position-absolute single-item-126">
            332VF1
          </div>
          <div className="text-dark position-absolute single-item-127">
            332BC2
          </div>
          <div className="text-dark position-absolute single-item-128">
            362BV1
          </div>
          <div className="text-dark position-absolute single-item-129">
            SELECTION
          </div>
          <div className="cgreen-text position-absolute single-item-130">
            Fresh Air
          </div>
          <div className="boxContainer position-absolute single-item-131 p-0 text-center">
            <div className="text-dark"></div>
            <div className="text-dark">332BC1</div>
            <TextColumn list={rawmillTextColumn26} />
            <div className="d-flex mt-1">
              <div className="text-dark">SL</div>
              <div className="greenSqure ml-3"></div>
              <div className="greenSqure ml-2"></div>
            </div>
          </div>
           
          <div className="hpipecircle position-absolute single-item-132">
            <span className="greenDot">M</span>
            <span className="blackTxt p-1 mw-170"></span>
            <span className="grayDot"></span>
          </div>
          <div className="grn-gry-img position-absolute single-item-133"></div>
          <div className="reject-bin position-absolute single-item-134"></div>
          <div className="roller-drum position-absolute single-item-135 d-flex justify-content-center align-items-center">
            {" "}
            <div className="greenDot">M</div>
          </div>
          <div className="roller-jcb position-absolute single-item-136"></div>
          <div className="hpipecircle position-absolute single-item-137">
            <span className="grayDot"></span>
            <span className="blackTxt p-1 mw-170"></span>
            <span className="greenDot"></span>
          </div>
          <div className="hpipecircle position-absolute single-item-138">
            <span className="grayDot"></span>
            <span className="blackTxt p-1 mw-170"></span>
            <span className="greenDot"></span>
          </div>
          <div className="hpipecircle position-absolute single-item-139">
            <span className="grayDot"></span>
            <span className="blackTxt p-1 mw-170"></span>
            <span className="greenDot"></span>
          </div>
          <div className="hpipecircle position-absolute single-item-140">
            <span className="grayDot"></span>
            <span className="blackTxt p-1 mw-170"></span>
            <span className="greenDot"></span>
          </div>
          <div className="hpipecircle position-absolute single-item-141">
            <span className="grayDot"></span>
            <span className="blackTxt p-1 mw-170"></span>
            <span className="greenDot"></span>
          </div>
          <TextColumn list={rawmillTextColumn12} />
          <SingleText
            yellowText="362FD1"
            textClass="text-dark position-absolute single-item-125"
            data={{
              blackTextLabel: "R2362FD1N01IZ1",
              blackTextClass: "greenTxt position-absolute single-item-148",
              unit: "A",
            }}
          />
          <TextColumn
            list={rawmillTextColumn11}
            useClass="CGRnBox position-absolute single-item-149"
          />
          <SingleText
            useClass="pipeVr position-absolute single-item-150"
            divClass="circle-img"
          />
          <div className="boxContainer position-absolute single-item-151 p-0">
            <div className="d-flex mt-1 justify-content-between">
              <div className="text-dark">RM2</div>
              <div className="text-dark">COMP</div>
              <div className="text-dark">AIR</div>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <div className="text-dark">SOV</div>
              <div className="text-dark">CLS</div>
              <div className="redgrey-sqaure"></div>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <div className="greenSqure"></div>
              <div className="text-dark">OPN</div>
              <div className="greenSqure"></div>
            </div>
          </div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-152"></div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-153"></div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-154"></div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-155"></div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-156"></div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-157"></div>
          <div className="yellowline-Vr position-absolute single-item-158"></div>
          <TextColumn list={rawmillTextColumn27} />
          <div className="greenSqure position-absolute single-item-161"></div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-162"></div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-163"></div>
          <div className="pipeVr position-absolute single-item-164"></div>
          <div className="text-dark position-absolute single-item-165">
            362LD2
          </div>
          <div className="yellowline-Vr rightarrow position-absolute single-item-166"></div>
          <div className="greenDot position-absolute single-item-167"></div>
          <div className="greenDot position-absolute single-item-168"></div>
          <div className="greenDot position-absolute single-item-169"></div>
          <div className="greenDot position-absolute single-item-170"></div>
          <SingleText
            data={{
              blackTextLabel: "R2362WP1N01F01",
              blackTextClass: "greenTxt position-absolute single-item-171",
              unit: "M3/H",
            }}
          />
        </div>
      </div>
      <div className="row m-0 pl-3 align-items-end ml-5">
        <div className="col-1 p-2 mr-2 dashed-box h-75 d-flex flex-column justify-content-between align-items-center">
          <div className="text-dark"> HYD. UNIT</div>
          <div className=" w-100 d-flex justify-content-center">
            <div className="text-dark"> H</div>
            <div className="greenSqure ml-3"></div>
          </div>

          <div className="boxContainer w-100 d-flex justify-content-between align-items-center p-1 mr-1">
            <div>
              <div className="greenDot"></div>
              <div className="text-dark mt-01">LU1</div>
            </div>
            <div>
              <div className="greenDot"></div>
              <div className="text-dark mt-01">LU2</div>
            </div>
            <div>
              <div className="greenDot"></div>
              <div className="text-dark mt-01">HE</div>
            </div>
          </div>
        </div>
        <div className="col-2 p-2 mr-2 dashed-box h-75 d-flex flex-column justify-content-between align-items-center">
          <div className="text-dark">GB LUB.</div>
          <div className=" w-100 d-flex justify-content-between">
            <div className="text-dark"> H</div>
            <div className="greenSqure"></div>
            <div>
              <div className="circle-group">
                <span className="greenSqure"></span>
                <span className="c-text">C</span>
              </div>
              <BlackContainer
                data={{
                  useClass: "greenTxt",
                  label: "R2_362THRST_PAD",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "R2362M04RPM",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex w-100">
            <div className="boxContainer w-100 d-flex justify-content-between align-items-center p-1 mr-1">
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">LU4</div>
              </div>
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">LU3</div>
              </div>
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">HE</div>
              </div>
            </div>
            <TextColumn list={rawmillTextColumn24} />
          </div>
        </div>
        <div className=" col-2 w-20 p-2 mr-2 dashed-box h-75 d-flex flex-column justify-content-between align-items-center">
          <div className="text-dark">ROLLER LUBRICATION</div>
          <div className=" w-100 d-flex justify-content-between">
            <div className="greenSqure"></div>
            <div className="greenSqure"></div>
            <div className="redgrey-sqaure"></div>
          </div>
          <div className="d-flex w-100">
            <div className="boxContainer w-100 d-flex justify-content-between align-items-center p-1">
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">FD</div>
              </div>
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">PMP</div>
              </div>
              <div>
                <div className="greenDot"></div>
              </div>
            </div>
            <div className="boxContainer w-100 d-flex justify-content-between align-items-center p-1">
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">RTN.</div>
              </div>
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">PMP</div>
              </div>
              <div>
                <div className="greenDot"></div>
              </div>
            </div>
            <div className="boxContainer w-100 d-flex justify-content-between align-items-center p-1">
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">LUB</div>
              </div>
              <div>
                <div className="greenDot"></div>
                <div className="text-dark mt-01">HE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 p-2 mr-3 dashed-box d-flex flex-column justify-content-between align-items-center h-75">
          <div className="text-dark">SEP. LUB.</div>
          <div className=" w-100 d-flex justify-content-between">
            <div className="greenSqure"></div>
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "R2362LUFGN31T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div className="greenSqure"></div>
            <div className="redgrey-sqaure"></div>
          </div>

          <div className="boxContainer w-100 d-flex justify-content-between align-items-center p-1">
            <div>
              <div className="greenDot"></div>
              <div className="text-dark mt-01">LUE</div>
            </div>
            <div>
              <div className="greenDot"></div>
              <div className="text-dark mt-01">LUF</div>
            </div>
            <div>
              <div className="greenDot"></div>
              <div className="text-dark mt-=1">LUFA</div>
            </div>
            <BlackContainer
              data={{
                useClass: "greenTxt mt-01",
                label: "R2362LUFN01P01",
                unit: "B",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <BottomLeftBox
          parentDivClass="col-1 p-1 mr-2 ml-5 dashed-box"
          list={rawmillTextColumn3}
        />
        <BottomLeftBox
          parentDivClass="col-1 p-1 mr-2 dashed-box"
          list={rawmillTextColumn2}
        />
        <TopLeftBox
          parentDivClass="col-2 p-1 mr-2 dashed-box"
          useClass="d-flex justify-content-between"
          list={rawmillTextColumn1}
        />
      </div>
    </div>
  );
};
