import {
  TextContainerWithWrapWord,
  BlackContainer,
  TopLeftBox,
  TextColumn,
  SingleText,
} from "../../index";
import { useDispatch, useSelector } from "react-redux";
import {
  rawmill2BalajiTextColumn1,
  rawmill2BalajiTextColumn10,
  rawmill2BalajiTextColumn11,
  rawmill2BalajiTextColumn12,
  rawmill2BalajiTextColumn13,
  rawmill2BalajiTextColumn14,
  rawmill2BalajiTextColumn15,
  rawmill2BalajiTextColumn16,
  rawmill2BalajiTextColumn17,
  rawmill2BalajiTextColumn18,
  rawmill2BalajiTextColumn19,
  rawmill2BalajiTextColumn2,
  rawmill2BalajiTextColumn20,
  rawmill2BalajiTextColumn21,
  rawmill2BalajiTextColumn22,
  rawmill2BalajiTextColumn23,
  rawmill2BalajiTextColumn24,
  rawmill2BalajiTextColumn25,
  rawmill2BalajiTextColumn3,
  rawmill2BalajiTextColumn4,
  rawmill2BalajiTextColumn5,
  rawmill2BalajiTextColumn6,
  rawmill2BalajiTextColumn7,
  rawmill2BalajiTextColumn8,
  rawmill2BalajiTextColumn9,
} from "../../../data/balaji/RawMill2/rawmill2BalajiTextColumn";
export const RawMill2Balaji = () => {
  const dispatch = useDispatch();
  const { balajiPopup } = useSelector((state) => state);
  return (
    <div className="p-1 RawMill2Balaji w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="row m-0">
        <div className="yellowline-Hr rightarrow position-absolute pipe-1"></div>
        <div className="yellowline-Hr rightarrow position-absolute pipe-2"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-3"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-4"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-5"></div>
        <div className="yellowline-Vr position-absolute pipe-6"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-7"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-8"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-9"></div>
        <div className="yellowline-Hr position-absolute pipe-10"></div>
        <div className="yellowline-Hr position-absolute pipe-11"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
        <div className="yellowline-Vr upArrow position-absolute pipe-16"></div>
        <div className="yellowline-Vr upArrow position-absolute pipe-17"></div>
        <div className="yellowline-Hr position-absolute pipe-18"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
        <div className="yellowline-Hr rightarrow position-absolute pipe-21"></div>
        <div className="yellowline-Hr position-absolute pipe-22"></div>
        <div className="yellowline-Vr upArrow position-absolute pipe-23"></div>
        <div className="yellowline-Hr position-absolute pipe-24"></div>
        <div className="yellowline-Vr position-absolute pipe-25"></div>
        <div className="yellowline-Vr position-absolute pipe-26"></div>
        <div className="yellowline-Vr position-absolute pipe-27"></div>
        <div className="yellowline-Hr position-absolute pipe-28"></div>
        <div className="yellowline-Vr position-absolute pipe-29"></div>
        <div className="yellowline-Hr leftarrow position-absolute pipe-30"></div>
        <div className="yellowline-Vr position-absolute pipe-31"></div>
        <div className="yellowline-Hr position-absolute pipe-32"></div>
        <div className="yellowline-Vr upArrow position-absolute pipe-33"></div>
        <div className="yellowline-Hr position-absolute pipe-34"></div>
        <div className="yellowline-Hr rightarrow position-absolute pipe-35"></div>
        <div className="yellowline-Hr position-absolute pipe-36"></div>
        <div className="yellowline-Vr upArrow position-absolute pipe-37"></div>
        <div className="yellowline-Hr rightarrow position-absolute pipe-38"></div>
        <div className="yellowline-Hr position-absolute pipe-39"></div>
        <div className="yellowline-Vr position-absolute pipe-40"></div>
        <div className="yellowline-Vr position-absolute pipe-41"></div>
        <div className="yellowline-Hr rightarrow position-absolute pipe-42"></div>
        <div className="yellowline-Vr position-absolute pipe-43"></div>
        <div className="yellowline-Vr position-absolute pipe-44"></div>
        <div className="yellowline-Hr position-absolute pipe-45"></div>
        <div className="yellowline-Vr position-absolute pipe-46"></div>
        <div className="yellowline-Hr position-absolute pipe-47"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-48"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-49"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-50"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-51"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-52"></div>
        <div className="yellowline-Hr rightarrow position-absolute pipe-53"></div>
        <div className="yellowline-Hr position-absolute pipe-54"></div>
        <div className="yellowline-Hr position-absolute pipe-55"></div>
        <div className="yellowline-Vr position-absolute pipe-56"></div>
        <div className="yellowline-Vr position-absolute pipe-57"></div>
        <div className="yellowline-Vr upArrow position-absolute pipe-58"></div>
        <div className="yellowline-Hr position-absolute pipe-59"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-60"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-61"></div>
        <div className="yellowline-Hr position-absolute pipe-62"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-63"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-64"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-65"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-66"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-67"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-68"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>

        <TextColumn
          useClass="bigContainer position-absolute single-text-1"
          list={rawmill2BalajiTextColumn7}
          text="M"
          text2Class="greenDot text-dark text-center mx-auto mt-5"
        />
        <div className="pipe position-absolute single-text-2">
          <div className="greenDot"></div>
        </div>
        <div className="containerImage d-flex flex-column justify-content-center align-items-center position-absolute single-text-3">
          <BlackContainer
            data={{
              label: "362HP1_WT01",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362HP1",
            }}
          />
        </div>
        <div className="containerImage d-flex flex-column justify-content-center align-items-center position-absolute single-text-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362HP2",
            }}
          />
        </div>
        <div className="containerImage d-flex flex-column justify-content-center align-items-center position-absolute single-text-5"></div>
        <div className="pole-shape position-absolute single-text-6 pt-2">
          <div className="position-absolute greenDot">M</div>
        </div>
        <div className="pipe position-absolute single-text-7">
          <div className="greenDot"></div>
        </div>
        <div className="position-absolute single-text-8 d-flex">
          <div className="squareplustri mr-3 d-flex align-items-end justify-content-center">
            <div className="circle-img c-img-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "RA1",
              }}
            />
          </div>
          <div className="squareplustri mr-3 d-flex align-items-end justify-content-center">
            <div className="circle-img c-img-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "3",
              }}
            />
          </div>
          <div className="squareplustri mr-3 d-flex align-items-end justify-content-center">
            <div className="circle-img c-img-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "2",
              }}
            />
          </div>
          <div className="squareplustri mr-3 d-flex align-items-end justify-content-center">
            <div className="circle-img c-img-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "4",
              }}
            />
          </div>
        </div>
        <div className="squareplustri position-absolute single-text-9 text-center">
          <div className="greenSqure mt-3">D</div>
        </div>
        <div className="squareplustri position-absolute single-text-10"></div>
        <div className="truck position-absolute single-text-11"></div>
        <div className="hpipecircle position-absolute single-text-12">
          <div className="greenDot">M</div> <div className="grayDot">M</div>
        </div>
        <div className="hpipecircle position-absolute single-text-13">
          <div className="greenDot">M</div> <div className="grayDot">M</div>
        </div>
        <div className="hpipecircle position-absolute single-text-14">
          <div className="greenDot">M</div> <div className="grayDot">M</div>
        </div>
        <div className="hpipecircle position-absolute single-text-15"></div>
        <div className="hpipecircle position-absolute single-text-16"></div>
        <div className="hpipecircle position-absolute single-text-17"></div>
        <div className="hpipecircle position-absolute single-text-18"></div>
        <div className="hpipecircle position-absolute single-text-19"></div>
        <div className="hpipecircle position-absolute single-text-20"></div>
        <div className="hpipecircle position-absolute single-text-21"></div>
        <div className="d-flex justify-content-between position-absolute single-text-22">
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FN3",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FN4",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FN5",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FN6",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-23">
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FN8",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FN9",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FNA",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FNB",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "392FNC",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between position-absolute single-text-24">
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "391FNF",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "391FNE",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "391FND",
              }}
            />
          </div>
          <div className="circle-group">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "391FNC",
              }}
            />
          </div>
        </div>
        <div className="position-absolute single-text-25">
          <TextColumn
            useClass="d-flex justify-content-between"
            list={rawmill2BalajiTextColumn1}
          />
          <div className="d-flex justify-content-between mt-1">
            <div className="text-center">
              <div className="greenDot mb-1">M</div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "WF1 Limestone",
                }}
              />
            </div>
            <div className="text-center">
              <div className="greenDot mb-1">M</div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: " WF2 Laterite F",
                }}
              />
            </div>
            <div className="text-center">
              <div className="greenDot mb-1">M</div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "WF3 Laterite A",
                }}
              />
            </div>
          </div>
          <TextColumn
            useClass="d-flex justify-content-between mt-1"
            list={rawmill2BalajiTextColumn2}
          />
          <TextColumn
            useClass="d-flex justify-content-between mt-2"
            list={rawmill2BalajiTextColumn25}
          />
          <div className="ml-5 mt-2">
            <div className="greenDot ">M</div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Scraper",
              }}
            />
          </div>
        </div>
        <div className="box-1 position-absolute single-text-26">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center box-1",
              label: "Not Compl.Run",
            }}
          />
          <TopLeftBox
            parentDivClass="p-2"
            useClass="d-flex justify-content-between"
            list={rawmill2BalajiTextColumn3}
          />
        </div>
        <div className="position-absolute single-text-27">
          <div className="circle-group ml-5 mt-1">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "362MD2",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "362MD2_JT01",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        {/* <BlackContainer
          data={{
            label: "FCHN03 T",
            useClass: "greenTxt position-absolute single-text-28",
            unit: "",
            unitColor: "unitColor",
          }}
        /> */}
        <TextColumn
          useClass="position-absolute single-text-29"
          list={rawmill2BalajiTextColumn4}
        />

        <div className="d-flex position-absolute single-text-30">
          <div className="redlineshape1 mr-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "332MW1",
            }}
          />
        </div>
        <TextColumn
          useClass="position-absolute single-text-31"
          list={rawmill2BalajiTextColumn10}
        />

        <TextColumn
          useClass="position-absolute single-text-32"
          list={rawmill2BalajiTextColumn9}
        />
        <SingleText
          useClass="d-flex position-absolute single-text-33"
          data={{
            blackTextClass: "greenTxt mr-1",
            blackTextLabel: "362BW1_FT01",
            unit: "t/h",
          }}
          yellowText="362BC1"
          textClass="text-dark"
        />
        <TextColumn
          useClass="d-flex justify-content-between position-absolute single-text-34"
          list={rawmill2BalajiTextColumn6}
        />
        <TextColumn
          useClass="position-absolute single-text-35"
          list={rawmill2BalajiTextColumn8}
        />

        <div className="circle-group position-absolute single-text-36">
          <span className="green-line-circle"></span>
        </div>

        <BlackContainer
          data={{
            label: "362FN3_IT01",
            useClass: "greenTxt position-absolute single-text-37",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="circle-group position-absolute single-text-38">
          <span className="green-line-circle"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "391FNH",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "391SB1_LT01",
            useClass: "greenTxt position-absolute single-text-40",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "391FNG_IT01",
            useClass: "greenTxt position-absolute single-text-39",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextColumn
          useClass="position-absolute single-text-41"
          list={rawmill2BalajiTextColumn16}
        />
        <div className="circle-group position-absolute single-text-43">
          <span className="green-line-circle"></span>
        </div>
        <TextColumn
          useClass="position-absolute single-text-44"
          list={rawmill2BalajiTextColumn14}
        />
        <TextColumn
          useClass="position-absolute single-text-45"
          list={rawmill2BalajiTextColumn15}
        />
        <BlackContainer
          data={{
            label: "391FNG_ST01",
            useClass: "greenTxt position-absolute single-text-46",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <TextColumn
          useClass="position-absolute single-text-47"
          list={rawmill2BalajiTextColumn19}
        />
        <TextColumn
          useClass="position-absolute single-text-48"
          list={rawmill2BalajiTextColumn18}
        />
        <TextColumn
          useClass="position-absolute single-text-49"
          list={rawmill2BalajiTextColumn20}
        />
        <BlackContainer
          data={{
            label: "362MD1_JT01",
            useClass: "greenTxt position-absolute single-text-50",
            unit: "A",
            unitColor: "unitColor",
            hhTime: 5000,
            hhValue: 3400,
          }}
        />
        <BlackContainer
          data={{
            label: "362RM1_TT01",
            useClass: "greenTxt position-absolute single-text-51",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextColumn
          useClass="position-absolute single-text-52"
          list={rawmill2BalajiTextColumn5}
        />
        <TextColumn
          useClass="position-absolute single-text-53"
          list={rawmill2BalajiTextColumn11}
        />
        <TextColumn
          useClass="position-absolute single-text-54"
          list={rawmill2BalajiTextColumn12}
        />
        <BlackContainer
          data={{
            label: "362RA2_IT01",
            useClass: "greenTxt position-absolute single-text-55",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392MD1_IT02",
            useClass: "greenTxt position-absolute single-text-61",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "362LQ2_TT01",
            useClass: "greenTxt position-absolute single-text-64",
            unit: "°C",
            unitColor: "unitColor",
            hhValue: 85,
            hhTime: 0,
          }}
        />
        <div className="circle-img c-img-1 position-absolute single-text-56"></div>
        <TextColumn
          useClass="position-absolute single-text-57"
          list={rawmill2BalajiTextColumn13}
        />
        <div className="circle-group position-absolute single-text-58">
          <span className="green-line-circle"></span>
        </div>

        <div className="circle-group position-absolute single-text-59">
          <span className="green-line-circle"></span>
        </div>
        <div className="circle-group position-absolute single-text-60">
          <span className="greenDot">M</span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "362LU9",
            }}
          />
        </div>
        <div className="circle-group position-absolute single-text-62">
          <span className="green-line-circle"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "362LU9",
            }}
          />
        </div>
        <div className="circle-group position-absolute single-text-63">
          <span className="green-line-circle"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "362LU9",
            }}
          />
        </div>
        <div className="position-absolute single-text-65">
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-66",
            label: "Fresh Air",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-67",
            label: "From HAG",
          }}
        />
        <div className="hpipecircle position-absolute single-text-68"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-69",
            label: "332BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-70",
            label: "332BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-71",
            label: "RM1 Classifier > Limit",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-72",
            label: "391BF2",
          }}
        />
        <div className="position-absolute single-text-73">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391BF2",
            }}
          />
          <div className="greenDot mx-auto">D</div>
        </div>
        <div className="circle-group position-absolute single-text-74">
          <span className="green-line-circle"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "362LU9",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-75",
            label: "BDS Alarm",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-76",
            label: "Cooling Blower Trip",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-77",
            label: "391AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-78",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-79",
            label: "Tension Hydraulic System",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-80",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-81",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-82",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-83",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-84",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-85",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-86",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-87",
            label: "392AS4",
          }}
        />
        <div className="redlineshape1 position-absolute single-text-88"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-89",
            label: "392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-90",
            label: "392AS4",
          }}
        />
        <div className="position-absolute single-text-91">
          <div className="greenDot mx-auto">D</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391BF1",
            }}
          />
        </div>
        <div className="position-absolute single-text-92">
          <div className="greenDot mx-auto">D</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391BF1",
            }}
          />
        </div>
        <div className="circle-img c-img-1 position-absolute single-text-93"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-94",
            label: "Mill Body Vib",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-95",
            label: "Torque Oil Temp",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-96",
            label: "362BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-97",
            label: "362LU8",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-98",
            label: " To 362BC1",
          }}
        />
        {/* <button
          className="d-block btn greenbtn position-absolute single-text-99"
          onClick={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",

              payload: "rawMill2popup4",
            });
          }}
          style={{
            backgroundColor: balajiPopup.rawMill2popup4 ? "red" : "#64cb00",
          }}
        >
          T
        </button>
        <button
          className="d-block btn greenbtn position-absolute single-text-100"
          onClick={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",

              payload: "rawMill2popup6",
            });
          }}
          style={{
            backgroundColor: balajiPopup.rawMill2popup6 ? "red" : "#64cb00",
          }}
        >
          T
        </button>
        <button
          className="d-block btn greenbtn position-absolute single-text-101"
          // onClick={() => {
          //   dispatch({
          //     type: "SHOW_BALAJI_POPUP",

          //     payload: "rawMill2popup5",
          //   });
          // }}
          // style={{
          //   backgroundColor: balajiPopup.rawMill2popup5 ? "red" : "#64cb00",
          // }}
        >
          LUB
        </button>
        <button
          className="d-block btn greenbtn position-absolute single-text-102"
          onClick={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",

              payload: "rawMill2popup3",
            });
          }}
          style={{
            backgroundColor: balajiPopup.rawMill2popup3 ? "red" : "#64cb00",
          }}
        >
          T
        </button> */}
      </div>

      <div className="row m-0 box-1 p-1">
        <div className="col-2 d-flex pr-0 pl-4">
          <div className="align-self-end pr-1">
            <button
              className="d-block btn greenbtn ml-4"
              onClick={() => {
                dispatch({
                  type: "SHOW_BALAJI_POPUP",

                  payload: "rawMill2popup2",
                });
              }}
              onTouchStart={() => {
                dispatch({
                  type: "SHOW_BALAJI_POPUP",

                  payload: "rawMill2popup2",
                });
              }}
              style={{
                backgroundColor: balajiPopup.rawMill2popup2 ? "red" : "#64cb00",
              }}
            >
              Ten Hyd
            </button>
          </div>
          <div className="circle-group align-self-end">
            <span className="green-line-circle"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "362LU9",
              }}
            />
          </div>
        </div>
        <div className="col-2 pl-2 d-flex">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
          </div>
          <div className="ml-2">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "27.2",
                }}
              />
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            </div>
          </div>
        </div>

        <TopLeftBox
          parentDivClass="col-2 border-right pl-0"
          useClass="d-flex justify-content-between"
          list={rawmill2BalajiTextColumn17}
        />
        <div className="col-1 align-self-end pl-1">
          <BlackContainer
            data={{
              label: "362WP1_PT01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="col-1 align-self-end pl-1 border-right">
          <div className="circle-group">
            <span className="green-line-circle"></span>
          </div>
          <BlackContainer
            data={{
              label: "362WP1_IT01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362WP1_ST01",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362WP2_ST02",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362WI1_FT01",
              useClass: "greenTxt",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="col-1 align-self-end pl-1">
          <button
            className="d-block btn greenbtn"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",

                payload: "rawMill2popup1",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",

                payload: "rawMill2popup1",
              });
            }}
            style={{
              backgroundColor: balajiPopup.rawMill2popup1 ? "red" : "#64cb00",
            }}
          >
            Lub
          </button>
          <div className="d-flex justify-content-between mt-01">
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "LU1",
                }}
              />
            </div>
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "LU4",
                }}
              />
            </div>
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "LU5",
                }}
              />
            </div>
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "LU3",
                }}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "LU2",
                }}
              />
            </div>
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "LU6",
                }}
              />
            </div>
            <div className="circle-group">
              <span className="green-line-circle"></span>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark text-center",
                  label: "LU7",
                }}
              />
            </div>
            <div>
              <div className="PopupLQ1img1"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "HE1",
                }}
              />
            </div>
          </div>
        </div>

        <div className="d-flex col-3 pl-0">
          <BlackContainer
            data={{
              label: "362LQ1_TT02",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
              hhTime: 0,
              hhValue: 60,
            }}
          />
          <TextColumn useClass="pl-2" list={rawmill2BalajiTextColumn21} />
          <TextColumn useClass="pl-2" list={rawmill2BalajiTextColumn22} />
          <TextColumn useClass="pl-2" list={rawmill2BalajiTextColumn23} />
          <TextColumn useClass="pl-2" list={rawmill2BalajiTextColumn24} />
        </div>
      </div>
    </div>
  );
};
