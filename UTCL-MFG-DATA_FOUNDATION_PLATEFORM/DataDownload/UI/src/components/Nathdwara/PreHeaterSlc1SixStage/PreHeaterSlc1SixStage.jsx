import {
  imageInPreheaterWithCLeft,
  imageInPreheaterWithCRight,
} from "../../../data/nathdwara/preheater/imageTriangleWithC";
import {
  imageInPreheaterWithK1Left,
  imageInPreheaterWithK1Right,
} from "../../../data/nathdwara/preheater/imageTriangleWithK";
import {
  textBox1,
  textBox11,
  textBox13,
  textBox14,
  textBox15,
  textBox16,
  textBox17,
  textBox18,
  textBox2,
  textBox20,
  textbox21,
  textbox22,
  textbox23,
  textBox3,
  textBox4,
  textBox5,
  textBox6,
  textBox7,
} from "../../../data/nathdwara/preheater/textBox";
import {
  txtContainerList1,
  txtContainerList2,
} from "../../../data/nathdwara/preheater/txtContainerList";
import {
  LongPipe,
  TxtcontainerMap,
  BlackContainer,
  TextContainer,
  BottomLeftBox,
  SingleText,
  TextColumn,
  TriangleImage,
  KilnPipe,
  TextContainerWithWrapWord,
} from "../../index";

export const PreHeaterSlc1SixStage = () => {
  return (
    <div className="PreHeaterSlc1 w-100 h-100 position-relative d-flex flex-column justify-content-between pb-1">
      <div className="row ml-0 mr-0 h-50">
        <KilnPipe
          data={{ classname: "pipeHr position-absolute singlepipe-9" }}
        />
        <KilnPipe
          data={{ classname: "pipeHr position-absolute singlepipe-10" }}
        />

        <TextColumn
          list={textBox1}
          yellowText="432RA3"
          useClass="position-absolute single-values-56"
          textClass="text-dark text-right"
        />
        <div className="d-flex position-absolute single-values-57">
          <KilnPipe
            data={{ classname: "yellowline-Hr yellow-line-1 rightarrow" }}
          />
          <div className="yellowline-Vr yellow-line-2 position-absolute">
            <div className="circle-img c-img-1"></div>
          </div>
          <KilnPipe data={{ classname: "yellowline-Hr yellow-line-3" }} />
          <KilnPipe data={{ classname: "yellowline-Vr yellow-line-4" }} />
          <TriangleImage
            useClass="triangle-left"
            list={imageInPreheaterWithK1Left}
          />
          <TriangleImage
            useClass="triangle-right"
            list={imageInPreheaterWithK1Right}
          />
        </div>
        <TextColumn
          list={textBox2}
          useClass="position-absolute single-values-58"
        />
        <div className="position-absolute single-values-59">
          <SingleText
            // useClass="col-1 pl-0 pr-0"
            divClass="grn-gry-img grn-gry-img-2 ml-auto"
            data={{
              blackTextLabel: "K2432MW2M01Z01",
              blackTextClass: "greenTxt ml-auto",
              unit: "%",
            }}
            textClass="text-dark text-right"
            yellowText="432MW2"
          />
          <div className="boxContainer mt-5">
            <div>432FM1</div>
            <TextColumn list={textBox13} />
            <div className="text-dark mt-01">432FM2</div>
            <TextColumn list={textBox14} />
          </div>
          <div className="text-dark mt-3">CCR WIND SPEED</div>
          <TextColumn list={textBox20} />
        </div>
        <TextColumn
          list={textBox3}
          useClass="position-absolute single-values-60"
        />
        <div className="position-absolute single-values-61 d-flex">
          <KilnPipe
            data={{ classname: "yellowline-Hr yellow-line-5 rightarrow" }}
          />

          <div className="yellowline-Vr yellow-line-6 position-absolute">
            <div className="circle-img c-img-2"></div>
          </div>
          <KilnPipe data={{ classname: "yellowline-Hr yellow-line-7" }} />
          <KilnPipe data={{ classname: "yellowline-Vr yellow-line-8" }} />
          <TriangleImage
            useClass="triangle-left"
            list={imageInPreheaterWithCLeft}
          />
          <TriangleImage
            useClass="triangle-right"
            list={imageInPreheaterWithCRight}
          />
        </div>
        <TextColumn
          list={textBox4}
          yellowText="432RA4"
          useClass="position-absolute single-values-62"
          textClass="text-dark"
        />
        <div className="position-absolute single-values-63">
          <KilnPipe data={{ classname: "pipeHr singlepipe-1" }} />
          <KilnPipe data={{ classname: "pipeVr singlepipe-2" }} />
          <KilnPipe data={{ classname: "pipeHr singlepipe-3" }} />
          <KilnPipe data={{ classname: "pipeVr singlepipe-4" }} />
          <KilnPipe data={{ classname: "pipeHr singlepipe-5" }} />
          <KilnPipe data={{ classname: "pipeVr singlepipe-6" }} />
          <KilnPipe data={{ classname: "pipeHr singlepipe-7" }} />
          <KilnPipe data={{ classname: "pipeHr singlepipe-8" }} />
          <div className="connector-both-side position-absolute c-1">
            <div className="circle-group position-absolute greengroup-circle">
              <span className="green-line-circle"></span>
              <span className="c-text">C</span>
            </div>
          </div>
          <div className="connector-both-side position-absolute c-2">
            <div className="circle-group position-absolute greygroup-circle">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
          </div>

          <TextColumn
            useClass="single-values-1 position-absolute justify-content-between align-items-center"
            list={textBox5}
          />
          <TextColumn
            useClass="single-values-2 position-absolute justify-content-between align-items-center"
            list={textBox6}
          />

          <TextColumn list={textBox11} />
          <TextContainer
            data={{
              useClass: "single-values-11 position-absolute text-dark",
              label: "452LD2",
            }}
          />

          <TextContainer
            data={{
              useClass: "single-values-13 position-absolute text-dark",
              label: "452LD1",
            }}
          />
        </div>
        <div className="dashed-box position-absolute single-values-64">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "452FN1",
            }}
          />
          <div className="grid-container-3">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N21T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N22T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N23T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N01T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N02T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N03T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N24T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N25T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N11T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N12T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N31T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N32T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N33T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N13V01",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN1N13V02",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="dashed-box position-absolute single-values-65">
          <div className="grid-container-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "422FN1",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N22T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N21T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N23T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N01T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N03T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "k2422FN1N11T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "k2422FN1N24T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "k2422FN1N25T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "k2422FN1N12T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="grid-container-3">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N01IZ2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2_452FN1N03P01",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N02T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="grid-container-2">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N13V01",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN1N13V02",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "422FN2",
            }}
          />
          <div className="grid-container-2">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN2N01IZ1_HW",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN2N01SZ1_HW",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="dashed-box position-absolute single-values-66">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "452FN2",
            }}
          />
          <div className="grid-container-4">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N21T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N22T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N23T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N01T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N02T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N03T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N24T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N25T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N11T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N12T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N31T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N32T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N33T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N13V01",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2452FN2N13V02",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="dashed-box grid-container-2 position-absolute single-values-75">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "482BL1",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt",
              label: "A2482BL1PZ1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "482BL4",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt",
              label: "A2_482BL4N01P01",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "451BL1",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt",
              label: "A2451BL1PZ1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="dashed-box grid-container-3 position-absolute single-values-76">
          <BlackContainer
            data={{
              label: "R2362THRUSTTZ2",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2D31CP2N01P01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2D31CP3N01P01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />

          <div>
            <div className="bg-red circle-group greygroup-circle">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
            <div className="text-dark mt-1">CP1</div>
          </div>
          <div>
            <div className="bg-red circle-group greygroup-circle">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
            <div className="text-dark mt-1">CP2</div>
          </div>
          <div>
            <div className="bg-red circle-group greygroup-circle">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
            <div className="text-dark mt-1">CP3</div>
          </div>
          <BlackContainer
            data={{
              label: "K2D31CP4N01P01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2D31CP5N01P01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2452FN2N01P01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />

          <div>
            <div className="bg-red circle-group greygroup-circle">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
            <div className="text-dark mt-1">CP4</div>
          </div>
          <div>
            <div className="bg-red circle-group greygroup-circle">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
            <div className="text-dark mt-1">CP5</div>
          </div>
          <div>
            <div className="bg-red circle-group greygroup-circle">
              <span className="grey-line-circle"></span>
              <span className="c-text">C</span>
            </div>
            <div className="text-dark mt-1">CP6</div>
          </div>
        </div>
        <div className="dashed-box position-absolute single-values-77">
          <TextContainerWithWrapWord
            data={{
              useClass: "cgreentext text-center",
              label: "482PBL1",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL1_SZ1",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL1_IZ1",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL1TZ1",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL1TZ2",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="dashed-box position-absolute single-values-78">
          <div className="text-dark text-center">Bag House</div>
          <div className="grid-container-2 ">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2_422BH1N01T01",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "R2422BH1_N03T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2_422BH1N02P02",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2_422BH1N02P01",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422BH1N01P02",
                unit: "B",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN2TZ1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422BH1N01T02",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422FN2TZ2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2422BH1N04P01",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="dashed-box position-absolute single-values-79">
          <TextContainerWithWrapWord
            data={{
              useClass: "cgreentext text-center",
              label: "482PBL2",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL2_IZ1",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL2_SZ1",
              useClass: "greenTxt mt-01",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL2TZ1",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C2482PBL2TZ2",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="dashed-box position-absolute single-values-4">
          <TxtcontainerMap
            parentDivClass="d-flex justify-content-end"
            list={txtContainerList2}
          />
          <div className="w-100 d-flex justify-content-between ">
            <TxtcontainerMap
              parentDivClass="w-25 pb-1 align-self-end"
              list={txtContainerList1}
            />
            <BottomLeftBox
              parentDivClass="boxContainer w-75"
              list={textbox23}
              useClass="d-flex justify-content-between"
            />
          </div>
        </div>
        <div className="dashed-box position-absolute single-values-67">
          <div className="grid-container-3 ">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N21T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "462MD1",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N24T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N22T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N23T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N03T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N01T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N02T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD1N25T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "462MD2",
            }}
          />
          <div className="grid-container-4">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N21T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N22T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N23T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N01T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N02T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N03T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N24T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462MD2N25T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row ml-0 mr-0 pl-3">
        <TextColumn
          useClass="col-1 dashed-box d-flex flex-column align-items-center"
          list={textBox7}
        />
        <div className="col-8 p-0">
          <BottomLeftBox
            parentDivClass="polygon-shape poly-1 d-flex flex-column align-items-center position-absolute"
            list={textbox22}
          />
          <BottomLeftBox
            parentDivClass="polygon-shape poly-2 d-flex flex-column align-items-center position-absolute"
            list={textbox21}
          />
          <div className="pipeVr position-absolute pV-1"></div>
          <div className="pipeVr position-absolute pV-2"></div>
          <div className="pipeVr position-absolute pV-3"></div>
          <div className="pipeVr position-absolute pV-4"></div>
          <div className="pipeVr position-absolute pV-5"></div>
          <div className="pipeVr position-absolute pV-7"></div>
          <div className="pipeVr position-absolute pV-8"></div>
          <div className="pipeVr position-absolute pV-9"></div>
          <div className="pipeVr position-absolute pV-10"></div>
          <div className="pipeVr position-absolute pV-11"></div>
          <div className="pipeHr position-absolute pH-2 d-flex justify-content-around align-items-center">
            <i className="fas fa-long-arrow-alt-left"></i>{" "}
            <i className="fas fa-long-arrow-alt-left ml-5"></i>
          </div>
          <div className="pipeHr position-absolute pH-3 d-flex justify-content-around align-items-center">
            <i className="fas fa-long-arrow-alt-left"></i>{" "}
            <i className="fas fa-long-arrow-alt-left ml-5"></i>
          </div>
          <div className="pipeHr position-absolute pH-4"></div>
          <div className="pipeHr position-absolute pH-5"></div>
          <div className="pipeHr position-absolute pH-6"></div>
          <div className="pipeHr position-absolute pH-7"></div>
          <div className="pipeHr position-absolute pH-8"></div>
          <div className="pipeHr position-absolute pH-9"></div>
          <div className="pipeHr position-absolute pH-10 text-center">
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="pipeHr position-absolute pH-11 text-center">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="single-values-15 position-absolute text-dark ">
            452MW3
          </div>
          <div className="single-values-28 position-absolute">
            <BlackContainer
              data={{
                label: "K2_452PR2N04T01",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_452PR2N05P01",
                useClass: "greenTxt ",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="single-values-30 position-absolute">
            <BlackContainer
              data={{
                label: "A2482CRS2_FZ1",
                useClass: "greenTxt ",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "A2482FM2N01FZ1",
                useClass: "greenTxt ",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="single-values-51 position-absolute">
            <BlackContainer
              data={{
                label: "K2_PH_ILC_O2",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2_PH_ILC_CO",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="single-values-17 position-absolute">
            <div className="text-dark ">452MW1</div>
            <BlackContainer
              data={{
                label: "K1_441PH1TZ7",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div className="grid-container-2 position-absolute single-values-18">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CO",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2_PH_IL_CO",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "O2",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2_PH_IL_O2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "NOX",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "K2_PH_IL_NOX",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextColumn
            useClass="single-values-21 position-absolute"
            list={textBox16}
          />
          <TextContainer
            data={{
              useClass: "single-values-22 position-absolute text-dark",
              label: "482PBL1",
            }}
          />
          <TextContainer
            data={{
              useClass: "single-values-23 position-absolute text-dark",
              label: "482PBL2",
            }}
          />
          <SingleText
            useClass="single-values-24 position-absolute"
            yellowTextUp="Diesel flow"
            textClass="cgreentext mr-1"
            data={{
              blackTextLabel: "A2451BL1PZ1",
              blackTextClass: "greenTxt",
              unit: "mmWC",
            }}
          />
          <TextColumn
            list={textBox17}
            useClass="single-values-25 position-absolute"
          />
          <TextColumn list={textBox18} />
          <div className="single-values-36 position-absolute">
            <BlackContainer
              data={{
                label: "K2452MW4ZZ1",
                useClass: "greenTxt mt-01",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <div className="text-dark"> 452MW4 </div>
          </div>
          <div className="position-absolute single-values-29">
            <BlackContainer
              data={{
                label: "K2_PH_SLC_O2",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "C2_PH_SLC_CO",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <KilnPipe data={{ classname: "pipeHr singlepipe-11" }} />
        <KilnPipe data={{ classname: "pipeHr singlepipe-12" }} />
        <KilnPipe data={{ classname: "pipeHr singlepipe-13" }} />
        <KilnPipe data={{ classname: "pipeHr singlepipe-14" }} />
        <KilnPipe data={{ classname: "pipeVr singlepipe-15" }} />
        <KilnPipe
          data={{ classname: "mBox position-absolute singlepipe-16" }}
        />
        <div className="connector-both-side position-absolute single-values-70">
          <div className="circle-group position-absolute greengroup-circle">
            <span className="green-line-circle"></span>
            <span className="c-text">C</span>
          </div>
        </div>
        <div className="connector-both-side position-absolute single-values-71">
          <div className="circle-group position-absolute greengroup-circle">
            <span className="green-line-circle"></span>
            <span className="c-text">C</span>
          </div>
        </div>
        <div className="position-absolute single-values-72">
          <div className="text-center">
            {" "}
            <i className="fa-solid fa-caret-right"></i>{" "}
            <i className="fa-solid fa-caret-left"></i>{" "}
          </div>
          <div className="text-dark">482SGI</div>
        </div>
        <div className="position-absolute single-values-73">
          <div className="text-center">
            {" "}
            <i className="fa-solid fa-caret-right"></i>{" "}
            <i className="fa-solid fa-caret-left"></i>{" "}
          </div>
          <div className="text-dark">482SGS</div>
          <BlackContainer
            data={{
              label: "A2_L42RM1N05P01",
              useClass: "greenTxt mt-01 ml-auto mr-auto",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-01 ml-auto mr-auto",
              unit: "mm",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="d-flex align-items-center position-absolute single-values-74">
          <i className="fa-solid fa-caret-right"></i>{" "}
          <i className="fa-solid fa-caret-left"></i>
          <div className="text-dark">482SGR</div>
        </div>
      </div>
      <div className="row ml-0 mr-0 pl-3 align-items-end last-row">
        <BottomLeftBox
          useClass="d-flex justify-content-between mt-01"
          parentDivClass="col-2 dashed-box align-self-end"
          list={textBox15}
        />
        <div className="col-1 p-1 mt-3">
          <div className="grid-container-2 ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "422FN1",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "k2422FN1N12T01",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "422FN1",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "k2422FN1N11T01",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <LongPipe />
        <div className="dashed-box position-absolute single-values-69">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "KILN GEAR BOX1 LUB.",
            }}
          />
          <div className="grid-container-2">
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462LU2_3N01P01",
                unit: "Bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462LU2_3N01T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462LU2_3N02P01",
                unit: "mBar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                useClass: "greenTxt",
                label: "C2462LU2_3N02T01",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="dashed-box p-1 position-absolute single-values-68">
          <div className="text-dark"> KILN GEAR BOX2 LUB. </div>
          <div className="d-flex mt-01">
            <BlackContainer
              data={{
                label: "C2462LU4_5N01P01",
                useClass: "greenTxt",
                unit: "Bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "C2462LU4_5N02P01",
                useClass: "greenTxt ml-1",
                unit: "mBar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "C2462LU4_5N01T01",
                useClass: "greenTxt ml-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "C2462LU4_5N02T01",
                useClass: "greenTxt ml-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="dashed-box p-1 position-absolute single-values-55">
          <div className="text-dark pr-2">COOLING TOWER</div>

          <div className="d-flex justify-content-around">
            <div>
              <BlackContainer
                data={{
                  label: "R2M12WP4A1",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "R2M12WP3A1",
                  useClass: "greenTxt mt-01",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>

            <div>
              <div className="bg-red circle-group greygroup-circle">
                <span className="grey-line-circle"></span>
                <span className="c-text">C</span>
              </div>
              <div className="text-dark mt-1">WP3</div>
            </div>
            <div>
              <div className="bg-red circle-group greygroup-circle">
                <span className="grey-line-circle"></span>
                <span className="c-text">C</span>
              </div>
              <div className="text-dark mt-1">WP4</div>
            </div>
            <div>
              <div className="bg-red circle-group greygroup-circle">
                <span className="grey-line-circle"></span>
                <span className="c-text">C</span>
              </div>
              <div className="text-dark mt-1">FN1</div>
            </div>
            <div>
              <div className="bg-red circle-group greygroup-circle">
                <span className="grey-line-circle"></span>
                <span className="c-text">C</span>
              </div>
              <div className="text-dark mt-1">FN2</div>
            </div>
          </div>
        </div>
        <div className="pipeVr position-absolute text-center pv-12">
          <div className="text-dark">COOLING TOWER</div>
          <BlackContainer
            data={{
              useClass: "greenTxt mx-auto mt-01",
              label: "R2362CLNG_LVL",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt mx-auto mt-01",
              label: "R2WTRSPLYT01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              useClass: "greenTxt mx-auto mt-01",
              label: "R2WTRSPLYT02",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <BlackContainer
        data={{
          useClass: "greenTxt position-absolute single-values-80",
          label: "Kiln_string_feed",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          useClass: "greenTxt position-absolute single-values-81",
          label: "Calc_string_feed",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};
