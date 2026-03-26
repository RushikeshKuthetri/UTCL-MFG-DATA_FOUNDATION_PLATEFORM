import {
  cementMillTextcolumn1,
  cementMillTextcolumn10,
  cementMillTextcolumn11,
  cementMillTextcolumn12,
  cementMillTextcolumn13,
  cementMillTextcolumn14,
  cementMillTextcolumn15,
  cementMillTextcolumn16,
  cementMillTextcolumn17,
  cementMillTextcolumn18,
  cementMillTextcolumn2,
  cementMillTextcolumn3,
  cementMillTextcolumn4,
  cementMillTextcolumn6,
  cementMillTextcolumn7,
  cementMillTextcolumn8,
  cementMillTextcolumn9,
} from "../../../data/nathdwara/cementmill1/cementMillTextColumn";
import {
  SingleText,
  TextColumn,
  TopLeftBox,
  TxtcontainerMap,
  TopRightTriangleImage,
  BlackContainer,
} from "../../index";

export const Cementmill1 = () => {
  return (
    <div className="Cementmill1 w-100 h-100 position-relative d-flex flex-column justify-content-between pb-1">
      <div className="row m-0 pl-2">
        <div className="col-9 pl-0 pr-0">
          <TextColumn
            list={cementMillTextcolumn2}
            useClass="boxContainer position-absolute single-text-3 p-1"
            yellowText="561WP1"
            textClass="yellowTxt mt-1"
          />
          <TextColumn
            list={cementMillTextcolumn3}
            useClass="boxContainer position-absolute single-text-4 p-1"
            yellowText="561WP2"
            textClass="yellowTxt mt-1"
          />
          <TextColumn
            list={cementMillTextcolumn4}
            useClass="boxContainer position-absolute single-text-5 p-1"
            yellowText="561FN5"
            textClass="yellowTxt mt-1"
          />
          <TextColumn
            list={cementMillTextcolumn1}
            useClass="boxContainer position-absolute single-text-6 p-1"
            yellowText="561FN7"
            textClass="yellowTxt mt-1"
          />
          <TextColumn
            list={cementMillTextcolumn18}
            useClass="boxContainer position-absolute single-text-7 p-1"
            yellowText="561SR1"
            textClass="yellowTxt mt-1"
          />
          <div className="pipeHr position-absolute single-text-14"></div>
          <div className="pipeVr position-absolute single-text-15 pt-5">
            <i className="fas fa-long-arrow-alt-up"></i>
          </div>
          <div className="pipeHr position-absolute single-text-16 text-center">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="pipeVr position-absolute single-text-17 d-flex flex-column justify-content-around">
            <i className="fas fa-long-arrow-alt-down mt-5"></i>
            <i className="fas fa-long-arrow-alt-down mt-5"></i>
          </div>
          <div className="pipeVr position-absolute single-text-18"></div>
          <div className="pipeVr position-absolute single-text-19"></div>
          <div className="pipeVr position-absolute single-text-20"></div>
          <div className="pipeVr position-absolute single-text-21"></div>
          <div className="pipeHr position-absolute single-text-22 pl-5">
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="pipeVr position-absolute single-text-23 d-flex flex-column justify-content-around">
            <i className="fas fa-long-arrow-alt-up"></i>{" "}
            <i className="fas fa-long-arrow-alt-up"></i>
          </div>
          <div className="pipeHr position-absolute single-text-24 text-right pr-5">
            <i className="fas fa-long-arrow-alt-left mr-5"></i>
          </div>
          <div className="pipeHr position-absolute single-text-25 text-center">
            <i className="fas fa-long-arrow-alt-left"></i>{" "}
          </div>
          <div className="pipeHr position-absolute single-text-26"></div>
          <div className="thinContainer position-absolute single-text-9"></div>
          <div className="drumContainer position-absolute single-text-27 d-flex justify-content-center align-items-center">
            {" "}
            <div className="text-dark">CM 1</div>
          </div>
          <div className="bagHouse position-absolute single-text-28 text-center">
            <div className="text-dark">BAGHOUSE</div>
            <div className="greenDot"></div>
            <div className="d-flex justify-content-around">
              <div className="greenSqure"></div>
              <div className="grayDot">M</div>
              <div className="greenSqure"></div>
            </div>
          </div>
          <div className="linebottel position-absolute single-text-29"></div>
          <div className="pipe dotted-pipe position-absolute single-text-30">
            {" "}
            <div className="greenDot"></div>
          </div>
          <div className="mBox position-absolute single-text-31">
            {" "}
            <div className="greenDot"></div>
          </div>
          <div className="mBox position-absolute single-text-32">
            <div className="greenDot"></div>
          </div>
          <div className="pipe dotted-pipe position-absolute single-text-34">
            {" "}
            <div className="greenDot"></div>
          </div>
          <div className="middle-sqr-container position-absolute text-center single-text-33">
            <BlackContainer
              data={{
                label: "541FB1WZ1",
                useClass: "greenTxt",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
            <div className="wrapTextDiv mt-2">FLY ASH</div>
            <BlackContainer
              data={{
                label: "541FM1WZ1",
                useClass: "greenTxt mt-2",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextColumn list={cementMillTextcolumn8} />
          <div className="triangle-with-squares position-absolute single-text-10 d-flex flex-column justify-content-end align-items-center">
            <div className="greenDot"></div>
            <div className="downArrow"></div>
          </div>
          <div className="triangle-with-squares position-absolute single-text-11 d-flex flex-column justify-content-end align-items-center">
            <div className="greenDot"></div>
            <div className="downArrow"></div>
          </div>
          <div className="triangle-with-squares position-absolute single-text-12 d-flex flex-column justify-content-end align-items-center">
            <div className="greenDot"></div>
            <div className="downArrow"></div>
          </div>
          <div className="triangle-with-squares position-absolute single-text-13 d-flex flex-column justify-content-end align-items-center">
            <div className="greenDot"></div>
            <div className="downArrow"></div>
          </div>
          <div className="dashedHr-Pipe position-absolute single-text-78"></div>
          <div className="dashedHr-Pipe position-absolute single-text-79"></div>
          <div className="dashedHr-Pipe position-absolute single-text-80"></div>
          <div className="dashedHr-Pipe position-absolute single-text-81"></div>
          <div className="dashedHr-Pipe position-absolute single-text-82"></div>
          <div className="dashedHr-Pipe position-absolute single-text-83"></div>
          <div className="dashedHr-Pipe position-absolute single-text-84"></div>
          <div className="dashedHr-Pipe position-absolute single-text-85"></div>
          <div className="dashedHr-Pipe position-absolute single-text-86"></div>
          <div className="half-circle position-absolute single-text-87"></div>
          <div className="half-circle position-absolute single-text-88"></div>
          <div className="half-circle position-absolute single-text-89"></div>
          <div className="half-circle position-absolute single-text-90"></div>
          <div className="half-circle position-absolute single-text-91"></div>
          <div className="half-circle position-absolute single-text-93"></div>
          <TxtcontainerMap list={cementMillTextcolumn9} />
          <div className="greySqure position-absolute single-text-128">
            <div className="greenDot"></div>
          </div>
          <div className="greySqure position-absolute single-text-129">
            <div className="greenDot"></div>
          </div>
          <div className="downArrow position-absolute single-text-130"></div>
          <div className="downArrow position-absolute single-text-131"></div>
          <div className="downArrow position-absolute single-text-132"></div>
          <div className="downArrow position-absolute single-text-133"></div>
          <div className="downArrow position-absolute single-text-134"></div>
          <div className="downArrow position-absolute single-text-135"></div>
          <div className="downArrow position-absolute single-text-136"></div>
          <div className="downArrow position-absolute single-text-137"></div>
          <div className="downArrow position-absolute single-text-138"></div>
          <div className="downArrow position-absolute single-text-139"></div>
          <div className="downArrow position-absolute single-text-140"></div>
          <div className="downArrow position-absolute single-text-141"></div>
          <div className="downArrow position-absolute single-text-142"></div>
          <div className="downArrow blue-arrow position-absolute single-text-143"></div>
          <div className="downArrow blue-arrow position-absolute single-text-144"></div>
          <div className="downArrow blue-arrow position-absolute single-text-145"></div>
          <div className="downArrow blue-arrow position-absolute single-text-146"></div>
          <div className="downArrow blue-arrow position-absolute single-text-147"></div>
          <div className="downArrow blue-arrow position-absolute single-text-148"></div>
          <div className="downArrow blue-arrow position-absolute single-text-149"></div>
          <div className="downArrow blue-arrow position-absolute single-text-150"></div>
          <div className="downArrow blue-arrow position-absolute single-text-151"></div>
          <div className="downArrow blue-arrow position-absolute single-text-152"></div>
          <div className="downArrow blue-arrow position-absolute single-text-153"></div>
          <div className="downArrow blue-arrow position-absolute single-text-154"></div>
          <div className="greenDot position-absolute single-text-155"></div>
          <div className="greenDot position-absolute single-text-156"></div>
          <div className="greenDot position-absolute single-text-157"></div>
          <div className="greenDot position-absolute single-text-158"></div>
          <div className="greenDot position-absolute single-text-159"></div>
          <div className="greenDot position-absolute single-text-160"></div>
          <div className="greenDot position-absolute single-text-161"></div>
          <div className="greenDot position-absolute single-text-162"></div>
          <div className="greenDot position-absolute single-text-163"></div>
          <div className="greenDot position-absolute single-text-164"></div>
          <div className="greenDot position-absolute single-text-165"></div>
          <div className="greenDot position-absolute single-text-166"></div>
          <div className="half-circle position-absolute single-text-167"></div>
          <div className="downArrow position-absolute single-text-168"></div>
          <div className="yellowline-Vr position-absolute single-text-172"></div>
          <div className="yellowline-Vr position-absolute single-text-173"></div>
          <div className="yellowline-Vr position-absolute single-text-174"></div>
          <div className="half-circle position-absolute single-text-175"></div>
          <div className="triangle-down position-absolute single-text-169"></div>
          <div className="triangle-down position-absolute single-text-170"></div>
          <div className="triangle-down position-absolute single-text-171"></div>
          <div className="squareplustri position-absolute single-text-193">
            <div className="greenDot"></div>
          </div>
          <div className="yellowline-Vr position-absolute single-text-194"></div>
          <div className="yellowline-Vr position-absolute single-text-195"></div>
          <div className="yellowline-Hr position-absolute single-text-196"></div>
          <div className="yellowline-Hr position-absolute single-text-197"></div>
          <div className="fiveside-shape position-absolute single-text-198"></div>
          <div className="fiveside-shape position-absolute single-text-199"></div>
          <div className="downArrow position-absolute single-text-200"></div>
        </div>
        <div className="col-3 pl-0 pr-0 d-flex justify-content-around cement-right">
          <TopRightTriangleImage
            useClass="position-relative w-25"
            list1={cementMillTextcolumn10}
            textOfTriangle="511HP1 CLINKER"
            data={{
              label: "511HP1-LZ1",
              useClass: "greenTxt",
              unit: "M",
              unitColor: "unitColor",
            }}
            list2={cementMillTextcolumn11}
            secondText="531WF1"
            secondTextClass="yellowTxt mt-2"
          />
          <TopRightTriangleImage
            useClass="position-relative w-25"
            list1={cementMillTextcolumn12}
            textOfTriangle="K21HP1 GYPSUM"
            list2={cementMillTextcolumn13}
            secondText="531WF2"
            secondTextClass="yellowTxt mt-2"
          />
          <TopRightTriangleImage
            useClass="position-relative  w-25"
            list1={cementMillTextcolumn14}
            textOfTriangle="551HP2 ADDITIVE"
            data={{
              label: "551HP2-LZ1",
              useClass: "greenTxt mt-1",
              unit: "MTR",
              unitColor: "unitColor",
            }}
            list2={cementMillTextcolumn15}
            secondText="551WF2"
            secondTextClass="yellowTxt mt-2"
          />
          <TopRightTriangleImage
            useClass="position-relative w-25"
            list1={cementMillTextcolumn16}
            textOfTriangle="551HP1 ADDITIVE"
            data={{
              label: "551HP1-LZ1",
              useClass: "greenTxt",
              unit: "MTR",
              unitColor: "unitColor",
            }}
            list2={cementMillTextcolumn17}
            secondText="551WF1"
            secondTextClass="yellowTxt mt-3"
          />
          <div className="downArrow position-absolute single-text-176"></div>
          <div className="downArrow position-absolute single-text-177"></div>
          <div className="downArrow position-absolute single-text-178"></div>
          <div className="hpipecircle position-absolute single-text-179">
            {" "}
            <span className="greenDot"></span>{" "}
            <span className="triangle-down"></span>{" "}
            <span className="triangle-down"></span>
          </div>
          <div className="downArrow position-absolute single-text-180"></div>
          <SingleText
            yellowTextUp="531BC1"
            textClass="yellowTxt position-absolute single-text-186"
            data={{
              blackTextLabel: "531BC1IZ1",
              blackTextClass: "greenTxt position-absolute single-text-181",
              unit: "Amp",
            }}
          />
          <SingleText
            yellowText="531BF1"
            textClass="yellowTxt position-absolute single-text-187"
            data={{
              blackTextLabel: "561BM1AZ1_PID:IO.OUTP.VALUE",
              blackTextClass: "greenTxt position-absolute single-text-182",
              unit: "",
            }}
          />
          <SingleText
            yellowText="531BC1"
            textClass="yellowTxt position-absolute single-text-188"
            data={{
              blackTextLabel: "CM1TOTFEED_PV",
              blackTextClass: "greenTxt position-absolute single-text-183",
              unit: "TPH",
            }}
          />
          <SingleText
            yellowText="531RA1"
            textClass="yellowTxt position-absolute single-text-189"
            data={{
              blackTextLabel: "561BM1PZ1",
              blackTextClass: "greenTxt position-absolute single-text-184",
              unit: "mm",
            }}
          />
          <SingleText
            yellowText="531FN1"
            textClass="yellowTxt position-absolute single-text-190"
            data={{
              blackTextLabel: "531BF1DP",
              blackTextClass: "greenTxt position-absolute single-text-185",
              unit: "",
            }}
          />
          <div className="downArrow blue-arrow position-absolute single-text-191"></div>
          <div className="squareplustri position-absolute single-text-192">
            <div className="greenDot"></div>
          </div>
          <div className="greenDot position-absolute single-text-201"></div>
          <div className="greenDot position-absolute single-text-202"></div>

          <div className="CGRnBox position-absolute single-text-1 p-1">
            <div className="yellowTxt mt-1">GRIND ADD PUMP</div>
            <div className="d-flex justify-content-between">
              <div className="grid-container-2">
                <div className="yellowTxt">CONTROL</div>
                <div className="greenSqure mt-1"></div>
                <div className="yellowTxt">REMOTE</div>
                <div className="greenSqure mt-1"></div>
                <div className="yellowTxt">RUN</div>
                <div className="greenSqure mt-1"></div>
                <div className="yellowTxt">COMMAND</div>
                <div className="greenSqure mt-1"></div>
              </div>
            </div>
          </div>
          <TextColumn
            list={cementMillTextcolumn7}
            useClass="CGRnBox position-absolute single-text-2 p-1"
            yellowText="WH++ LIQUID"
            textClass="yellowTxt mt-1"
          />
        </div>
      </div>
      <div className="row m-0 pl-2 align-items-end justify-content-between bottomrow">
        <div className="col-01 d-flex CGRnBox pb-1 justify-content-around pl-1 pr-1">
          <div className="text-center">
            <div className="yellowTxt">G.G.LUB</div>
            <div>
              <i className="fas fa-long-arrow-alt-up"></i>
            </div>
            <div className="greenDot"></div>
            <div className="yellowTxt">5612UG</div>
          </div>

          <div className="text-center">
            <div className="greenSqure"></div>
            <div>
              <i className="fas fa-long-arrow-alt-up"></i>
            </div>
            <div className="greenDot"></div>
            <div className="yellowTxt">SYS.A&B</div>
          </div>
        </div>
        <div className="col-1 d-flex CGRnBox pb-1 justify-content-between pl-1 pr-1">
          <div className="text-center">
            <div className="greenSqure"></div>
            <div>
              <i className="fas fa-long-arrow-alt-up"></i>
            </div>
            <div className="greenDot"></div>
            <div className="yellowTxt">561LU1</div>
          </div>
          <div className="text-center">
            <div className="greenSqure"></div>
            <div>
              <i className="fas fa-long-arrow-alt-up"></i>
            </div>
            <div className="greenDot"></div>
            <div className="yellowTxt">LUF</div>
          </div>
          <div>
            <div className="yellowTxt">INLET PUMP</div>
            <div className="d-flex justify-content-around">
              <div className="text-center">
                <div>
                  {" "}
                  <i className="fas fa-long-arrow-alt-up"></i>{" "}
                </div>
                <div className="greenDot"></div>
                <div className="yellowTxt">LU2</div>
              </div>
              <div className="text-center">
                <div>
                  <i className="fas fa-long-arrow-alt-up"></i>
                </div>
                <div className="greenDot"></div>
                <div className="yellowTxt">LUE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 d-flex CGRnBox pb-1 justify-content-between pl-1 pr-1">
          <div className="text-center">
            <div className="greenSqure"></div>
            <div>
              <i className="fas fa-long-arrow-alt-up"></i>
            </div>
            <div className="greenDot"></div>
            <div className="yellowTxt">LU3</div>
          </div>
          <div className="text-center">
            <div className="greenSqure"></div>
            <div>
              <i className="fas fa-long-arrow-alt-up"></i>
            </div>
            <div className="greenDot"></div>
            <div className="yellowTxt">LUG</div>
          </div>
          <div>
            <div className="yellowTxt">OUT LET PUMP</div>
            <div className="d-flex justify-content-around">
              <div className="text-center">
                <div>
                  {" "}
                  <i className="fas fa-long-arrow-alt-up"></i>{" "}
                </div>
                <div className="greenDot"></div>
                <div className="yellowTxt">LU4</div>
              </div>
              <div className="text-center">
                <div>
                  <i className="fas fa-long-arrow-alt-up"></i>
                </div>
                <div className="greenDot"></div>
                <div className="yellowTxt">LUH</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 CGRnBox pb-1 pl-1 pr-1">
          <div className="d-flex justify-content-between">
            <BlackContainer
              data={{
                label: "561GB1PZ1",
                useClass: "greenTxt",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
            <div className="yellowTxt text-center">G.B.PUMP</div>
            <BlackContainer
              data={{
                label: "561GB2PZ1",
                useClass: "greenTxt",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div className="d-flex justify-content-between">
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">LU5</div>
            </div>

            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">LU6</div>
            </div>
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">LUC</div>
            </div>
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">LUD</div>
            </div>
          </div>
        </div>
        <div className="col-1 CGRnBox pb-1 pl-1 pr-1">
          <div className="yellowTxt text-center">M.D.BLOWER</div>
          <div className="d-flex justify-content-between">
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">BL1</div>
            </div>

            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">BL2</div>
            </div>
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">BL3</div>
            </div>
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">BL4</div>
            </div>
          </div>
        </div>
        <div className="col-1 CGRnBox pb-1 pl-1 pr-1">
          <div className="d-flex justify-content-between ">
            <BlackContainer
              data={{
                label: "561SR1PZ1",
                useClass: "greenTxt",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
            <div className="yellowTxt">SEPERATOR LUB.</div>
          </div>

          <div className="d-flex justify-content-between ">
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">LU7</div>
            </div>
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">LU9</div>
            </div>
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">2U9</div>
            </div>
            <div className="text-center">
              <div>
                <i className="fas fa-long-arrow-alt-up"></i>
              </div>
              <div className="greenDot"></div>
              <div className="yellowTxt">FN8</div>
            </div>
          </div>
        </div>
        <div className="col-1 CGRnBox pb-1 justify-content-between pl-1 pr-1">
          <div className="yellowTxt d-flex">G.G VIBRATION</div>
          <div className=" grid-container-2 ">
            <div className="yellowTxt d-flex">PRESS</div>
            <div className="yellowTxt d-flex">LIFT</div>
            <BlackContainer
              data={{
                label: "561PN1AZ1",
                useClass: "greenTxt d-flex",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "561PN2AZ1",
                useClass: "greenTxt d-flex",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "561PN1AZ2",
                useClass: "greenTxt d-flex",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "561PN2AZ2",
                useClass: "greenTxt d-flex",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="col-2 CGRnBox pb-1 grid-container-3 pl-1 pr-1">
          <div className="yellowTxt d-flex">591SB1</div>
          <div className="yellowTxt d-flex">591SB3</div>
          <div className="yellowTxt d-flex">591SB5</div>
          <BlackContainer
            data={{
              label: "591SB1_LZ1",
              useClass: "greenTxt d-flex",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "591SB3_LZ1",
              useClass: "greenTxt d-flex",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2591SB5N01L01",
              useClass: "greenTxt d-flex",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "591SB2_LZ1",
              useClass: "greenTxt d-flex",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "591SB4_LZ1",
              useClass: "greenTxt d-flex",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "N2593SB6N01L01",
              useClass: "greenTxt d-flex",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <div className="yellowTxt d-flex">591SB2</div>
          <div className="yellowTxt d-flex">591SB4</div>
          <div className="yellowTxt d-flex">591SB6</div>
        </div>
        <TopLeftBox
          parentDivClass="col-1 CGRnBox pb-1  pl-1 pr-1"
          list={cementMillTextcolumn6}
          useClass="d-flex justify-content-between"
        />
      </div>
    </div>
  );
};
