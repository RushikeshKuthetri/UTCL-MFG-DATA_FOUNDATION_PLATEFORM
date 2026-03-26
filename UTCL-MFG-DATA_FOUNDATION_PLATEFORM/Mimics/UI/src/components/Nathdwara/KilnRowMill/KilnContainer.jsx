import {
  bottomBox1,
  bottombox2,
  bottombox3,
  bottomLeftBox,
} from "../../../data/nathdwara/kiln/bottomLeftBox";
import {
  bottomRightBox1,
  bottomRightBox2,
  bottomRightBox3,
  bottomRightBox4,
} from "../../../data/nathdwara/kiln/bottomRightBox";
import {
  leftMiddleBox1,
  leftMiddleBox2,
} from "../../../data/nathdwara/kiln/leftMiddleBox";
import {
  rightMiddleBox2,
  rightMiddleBox3,
  rightMiddleBox4,
} from "../../../data/nathdwara/kiln/rightMiddleBox";
import {
  textColumn1,
  textColumn10,
  textColumn2,
  textColumn3,
  textColumn4,
  textColumn5,
  textColumn6,
  textColumn7,
  textColumn8,
  textColumn9,
  textColumn11,
  textColumn12,
  textColumn13,
} from "../../../data/nathdwara/kiln/textColumn";
import {
  BottomBox,
  MiddleBottom,
  MiddleLeftBox,
  BottomLeftBox,
  SingleText,
  SingleText2,
  SingleText4,
  TextColumn,
  TextColumn3,
  TopLeftBox,
  TopRightBox,
  Calciner,
  ImageContainerwithC,
  ImageContainerWithK,
  Rocket,
  TankImage,
  GreenDotWithText,
  KilnPipe,
} from "../../index";
import { topLeftBox } from "../../../data/nathdwara/kiln/topLeftBox";

export const KilnContainer = () => {
  return (
    <div className="row ml-0 mr-0 h-100 position-relative KilnPreheater1">
      <div className="col-2 pl-3 pr-0 d-flex flex-column">
        <TopLeftBox
          parentDivClass="box-1 p-1 w-75 mt-1"
          useClass="d-flex justify-content-between mt-1"
          list={topLeftBox}
        />
        <MiddleLeftBox
          list={leftMiddleBox1}
          useClass="CGRnBox p-1 w-75 mt-2"
          divClass="grid-container-2"
        />
        <MiddleLeftBox
          list={leftMiddleBox2}
          useClass="CGRnBox p-1 w-75 mt-2"
          divClass="grid-container-2"
        />
        <BottomLeftBox
          parentDivClass="CGRnBox p-1 w-50 mt-2"
          list={bottomLeftBox}
        />
      </div>
      <div className="col-8 pl-0 pr-0 middle-2">
        <div className="row ml-0 mr-0 my-pb-82">
          <TextColumn list={textColumn1} useClass="col-1 pl-0 pr-0 d-flex flex-column justify-content-around" />
          <ImageContainerwithC />
          <TextColumn
            list={textColumn2}
            yellowText="431RA4"
            useClass="col-1 pl-0 pr-0 d-flex flex-column justify-content-around alignment-2"
          />
          <div className="col-2 pl-0 pr-0">
            <TextColumn3 />
            <SingleText
              useClass="singletext-1 position-absolute d-flex flex-column"
              yellowTextUp="CCR WIND SPEED"
              textClass="yellowTxt text-center"
              data={{
                blackTextLabel: "C1_WIND_ANEMOMETER",
                blackTextClass: "greenTxt mt-1",
                unit: "KMPH",
              }}
            />

            <SingleText2 />
            <SingleText
              useClass="singletext-3 position-absolute d-flex flex-column"
              data={{
                blackTextLabel: "K1_451PC1TZ9A",
                blackTextClass: "greenTxt",
                unit: "°C",
              }}
            />
            <SingleText4 />
          </div>
          <TextColumn
            list={textColumn3}
            useClass="col-1 pl-0 pr-0 d-flex flex-column justify-content-around alignment-3 pt-3"
          />
          <ImageContainerWithK />
          <TextColumn
            list={textColumn4}
            useClass="col-1 pl-0 pr-0 d-flex flex-column justify-content-around pt-5"
          />
          <div className="col-2 pl-0 pr-0">
            <KilnPipe data={{ classname: "pipeVr pipeVr-1" }} />
            <KilnPipe data={{ classname: "pipeVr pipeVr-2" }} />
            <KilnPipe data={{ classname: "pipeVr pipeVr-3" }} />
            <KilnPipe data={{ classname: "pipeHr pipeHr-1" }} />
            <KilnPipe data={{ classname: "pipeHr pipeHr-8" }} />
            <KilnPipe data={{ classname: "pipeHr pipeHr-2" }} />
            <KilnPipe data={{ classname: "pipeHr pipeHr-3" }} />
            <KilnPipe data={{ classname: "pipeHr pipeHr-4" }} />
            <div className="d-flex two-grn-dot  position-absolute">
              <GreenDotWithText data={{ label: "M" }} />
              <GreenDotWithText data={{ useClass: "ml-3", label: "M" }} />
            </div>
            {/* <AutoManual
              list={autoManualData8}
              useClass="position-absolute singletext-19"
            /> */}

            <TextColumn
              list={textColumn7}
              useClass="position-absolute singletext-14"
            />
            <TextColumn
              list={textColumn8}
              useClass="position-absolute singletext-15"
            />
            <TextColumn
              list={textColumn9}
              useClass="position-absolute singletext-16"
            />
            <TextColumn
              list={textColumn10}
              useClass="position-absolute singletext-20"
            />
            <TextColumn
              list={textColumn11}
              useClass="position-absolute singletext-21"
            />
            <SingleText
              useClass="position-absolute singletext-22"
              data={{
                blackTextLabel: "K1_421BH1TZ1",
                blackTextClass: "greenTxt",
                unit: "°C",
              }}
            />
            <SingleText
              useClass="position-absolute singletext-23"
              data={{
                blackTextLabel: "K1_441LD1ZZ1",
                blackTextClass: "greenTxt",
                unit: "%",
              }}
            />

            <div className="position-absolute singletext-33 yellowTxt text-center">
              431RA3
            </div>
            <div className="position-absolute singletext-19">
              <div className="yellowTxt text-center">451FN1</div>
            </div>
            <div className="position-absolute singletext-24">
              <div className="yellowTxt text-center">451LD1</div>
            </div>
            <div className="position-absolute singletext-25">
              <div className="yellowTxt text-center">441LD1</div>
            </div>
            <div className="position-absolute singletext-0">
              <div className="yellowTxt text-center">441FN1</div>
            </div>
            <div className="connector-both-side c1 position-absolute">
              <GreenDotWithText data={{ useClass: "dot2", label: "M" }} />
            </div>
            <div className="connector-both-side c2 position-absolute">
              <GreenDotWithText data={{ useClass: "dot2", label: "M" }} />
            </div>
            <div className="middle-right-bottom">
              <MiddleLeftBox
                list={rightMiddleBox3}
                useClass="CGRnBox p-1 mt-2"
                divClass="grid-container-2"
              />
              <MiddleLeftBox
                list={rightMiddleBox2}
                useClass="CGRnBox p-1 mt-2 w-285"
                divClass="grid-container-3"
              />
              <div className="d-flex">
                <BottomLeftBox
                  parentDivClass="CGRnBox p-1"
                  list={bottomRightBox1}
                />
                <BottomLeftBox
                  parentDivClass="CGRnBox p-1"
                  list={bottomRightBox2}
                />
                <BottomLeftBox
                  parentDivClass="CGRnBox p-1"
                  list={bottomRightBox3}
                />
              </div>
            </div>
          </div>
        </div>
        <Calciner />
        <KilnPipe data={{ classname: "pipeVr pipeVr-4 position-absolute" }} />
        <KilnPipe data={{ classname: "pipeHr pipeHr-5 position-absolute" }} />
        <KilnPipe data={{ classname: "pipeVr pipeVr-5 position-absolute" }} />
        <KilnPipe data={{ classname: "pipeVr pipeVr-6 position-absolute" }} />
        <KilnPipe data={{ classname: "pipeHr pipeHr-6 position-absolute" }} />
        <div className="position-absolute singletext-31 lightyellowtext">
          451MW1
        </div>
        <div className="position-absolute singletext-34 yellowTxt">451MW1</div>

        <div className="position-absolute coal2">COAL</div>
        <KilnPipe data={{ classname: "yellowline-Hr yellow-line-arrow-5 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Hr yellow-line-arrow-6 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Hr yellow-line-arrow-7 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Hr yellow-line-arrow-8 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Hr yellow-line-arrow-9 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Vr yellow-line-arrow-10 position-absolute" }} />
   
        <KilnPipe data={{ classname: "pipeHr pipeHr-7 position-absolute" }} />
        <KilnPipe
          data={{ classname: "yellowline-Hr yellow-line-arrow-1 rightarrow position-absolute" }}
        />
        <KilnPipe
          data={{ classname: "yellowline-Hr yellow-line-arrow-2 rightarrow position-absolute" }}
        />
        <KilnPipe
          data={{ classname: "yellowline-Hr yellow-line-arrow-3 rightarrow position-absolute" }}
        />
        <KilnPipe
          data={{ classname: "yellowline-Hr yellow-line-arrow-4 rightarrow position-absolute" }}
        />
        <KilnPipe
          data={{ classname: "yellowline-Hr yellow-line-arrow-5 rightarrow position-absolute" }}
        />
        <KilnPipe
          data={{ classname: "yellowline-Hr yellow-line-arrow-6 rightarrow position-absolute" }}
        />
        <KilnPipe data={{ classname: "yellowline-Vr yellow-line-arrow-7 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Vr yellow-line-arrow-8 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Vr yellow-line-arrow-9 position-absolute" }} />
        <KilnPipe data={{ classname: "yellowline-Vr yellow-line-arrow-11 position-absolute" }} />
        <SingleText
          useClass="position-absolute singletext-9"
          data={{
            blackTextLabel: "C1_471GQ1TZ1",
            blackTextClass: "greenTxt mt-1",
            unit: "°C",
          }}
        />
        <SingleText
          useClass="position-absolute singletext-10"
          data={{
            blackTextLabel: "C1_461KL1_TZF",
            blackTextClass: "greenTxt mt-1",
            unit: "°C",
          }}
        />
        <SingleText
          useClass="position-absolute singletext-11"
          data={{
            blackTextLabel: "C1_AFWF1_FZ1",
            blackTextClass: "greenTxt mt-1",
            unit: "tph",
          }}
          yellowText="AF FEED"
        />
        <SingleText
          useClass="position-absolute singletext-12"
          data={{
            blackTextLabel: "K1_451PC1TZB",
            blackTextClass: "greenTxt mt-1",
            unit: "°C",
          }}
        />
        <SingleText
          useClass="position-absolute singletext-13"
          data={{
            blackTextLabel: "K1_451PC1PZ9",
            blackTextClass: "greenTxt mt-1",
            unit: "mm",
          }}
        />
        <div className="position-absolute coal cgreentext">
          <span>COAL</span>
          <div className="yellowline-Hr rightarrow"></div>
        </div>
        <Rocket />
        <div className="position-absolute singletext-26">
          <div className="lightyellowtext text-center">441MW1</div>
        </div>
        <div className="position-absolute singletext-35 yellowTxt text-center">
          441MW1
        </div>
        <TextColumn
          list={textColumn6}
          useClass="position-absolute singletext-28"
        />
        <TextColumn
          list={textColumn5}
          useClass="position-absolute singletext-29"
        />
        <div className="position-absolute singletext-30">
          <div className="lightyellowtext text-center">BLSTR PNL</div>
        </div>

        <div className="row ml-0 mr-0 middle-last-part">
          <BottomLeftBox
            parentDivClass="col-1 pl-0 pr-2"
            list={bottomBox1}
            useClass="CGRnBox p-1"
          />
          <BottomLeftBox
            parentDivClass="col-1 pl-0 pr-2"
            list={bottombox2}
            useClass="CGRnBox p-1"
          />
          <BottomLeftBox
            parentDivClass="col-1 pl-0 pr-0"
            list={bottombox3}
            useClass="CGRnBox p-1"
          />
          <div className="col-3 pl-5 pr-4 text-right">
            <div className="greenDot text-dark dot2">M</div>
            <div className="lightyellowtext text-right">461MD1</div>
          </div>
          <BottomBox />
          <div className="col-1"></div>
          <MiddleBottom />
        </div>
      </div>
     
        <TopRightBox />
       
          <MiddleLeftBox
            list={rightMiddleBox4}
            useClass="CGRnBox p-1 position-absolute singletext-40"
            divClass="grid-container-3 mt-1"
          />
          <div className="position-absolute singletext-41">
            <div className="yellowTxt mr-2">KLIN1 PARAMETERS</div>
            <BottomLeftBox
              list={bottomRightBox4}
              parentDivClass="CGRnBox p-1 mt-1"
            />
          </div>
          <div className="row mb-1 position-absolute singletext-42">
            <TankImage
              useClass="offset-1 col-6 pl-0 pr-0"
              tankName={"Process Water Tank"}
              list={textColumn12}
            />
            <TankImage
              useClass="col-5 pl-1 pr-0"
              tankName={"Cooling Water"}
              list={textColumn13}
            />
          </div>
       
   
    </div>
  );
};
