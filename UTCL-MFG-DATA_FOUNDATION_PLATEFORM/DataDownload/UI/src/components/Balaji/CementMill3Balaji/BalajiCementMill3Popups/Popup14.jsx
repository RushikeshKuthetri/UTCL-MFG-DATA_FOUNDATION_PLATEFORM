import { TextContainerWithWrapWord, TextColumn } from "../../../index";
export const Popup14 = ({ popData }) => {
  const { list1, list2, list3, circleLabel, circle } = popData;
  return (
    <div className="mt-1 overflow-auto">
    <div className="row m-0 position-relative main-body">
      <div className="popup-14-img position-absolute single-text-17"></div>
      <TextColumn useClass="position-absolute single-text-1" list={list1} />
      <TextColumn useClass="position-absolute single-text-2" list={list2} />
      <TextColumn useClass="position-absolute single-text-3" list={list3} />

      <div className="popup-shape2 position-absolute single-text-4">
        <div className="greenDot mx-auto mt-3">M</div>
      </div>
      <div className="popup-shape2 position-absolute single-text-5">
        <div className="text-white">{circleLabel[4]}</div>
      </div>

      <div className="text-white position-absolute single-text-6">
        Classifier
      </div>
      <div className="text-white position-absolute single-text-7">
        Material Feed
      </div>
      <div className="text-white position-absolute single-text-8">
        Gas Flow Routing
      </div>
      <div className="text-white position-absolute single-text-9">
        {circleLabel[5]}
      </div>
      <div className="yellowline-Hr position-absolute pipe-1"></div>
      <div className="yellowline-Hr position-absolute pipe-2"></div>
      <div className="yellowline-Hr position-absolute pipe-3"></div>
      <div className="yellowline-Vr position-absolute pipe-4"></div>
      <div className="yellowline-Hr position-absolute pipe-5"></div>
      <div className="yellowline-Vr position-absolute pipe-6"></div>
      <div className="yellowline-Vr position-absolute pipe-7"></div>
      <div className="yellowline-Hr position-absolute pipe-8"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-9"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-10"></div>
      <div className="yellowline-Hr position-absolute pipe-11"></div>
      <div className="yellowline-Vr position-absolute pipe-12"></div>
      {circle && (
        <div className="circle-group position-absolute single-text-10 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white text-center mr-3",
              label: circle,
            }}
          />
          <span className="green-line-circle">T</span>
        </div>
      )}
      <div className="circle-group position-absolute single-text-11 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-center mr-3",
            label: circleLabel[0],
          }}
        />
        <span className="green-line-circle">T</span>
      </div>
      <div className="circle-group position-absolute single-text-12 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-center mr-3",
            label: circleLabel[1],
          }}
        />
        <span className="green-line-circle"></span>
      </div>
      <div className="circle-group position-absolute single-text-13">
        <span className="green-line-circle"></span>
      </div>
      <div className="circle-group position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-center mr-3",
            label: circleLabel[2],
          }}
        />
        <span className="green-line-circle">T</span>
      </div>
      <div className="popup-shape3 position-absolute single-text-15"></div>

      <div className="text-white position-absolute single-text-16">
        {circleLabel[3]}
      </div>
    </div>
    </div>
  );
};
