import { BlackContainer, TextColumn } from "../../../index";
export const PopupLQ1 = ({ popData }) => {
  return (
    <div className="mt-3 overflow-auto">
    <div className="col-12 p-4 main-body">
      <div className="cgreentext text-center">{popData.mainHeading}</div>
      <div className="row align-items-center m-0">
        <div className="col-2">
          <div className="pole-shape"> </div>
        </div>

        <div className="col-6">
          <TextColumn useClass="popup-shape1" list={popData.list1} />
        </div>
        <TextColumn useClass="col-4" list={popData.list2} />
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-1"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-2"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-3"></div>
      <div className="yellowline-Hr position-absolute pipe-4"></div>
      <div className="outlinediv position-absolute pipe-5"></div>
      <div className="outlinediv position-absolute pipe-6"></div>
      <div className="yellowline-Hr position-absolute pipe-7"></div>
      <div className="yellowline-Vr position-absolute pipe-8"></div>
      <div className="yellowline-Vr position-absolute pipe-9"></div>
      <div className="yellowline-Hr position-absolute pipe-10"></div>
      <div className="yellowline-Hr position-absolute pipe-11"></div>
      <div className="outlinediv position-absolute pipe-12 border-right-0"></div>
      <div className="outlinediv position-absolute pipe-13 border-left-0"></div>
      <div className="yellowline-Vr position-absolute pipe-14"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-15"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-16">
        <div className="tringle-item">
          <i className="fa-solid fa-caret-right"></i>
          <i className="fa-solid fa-caret-left"></i>
        </div>
      </div>

      <div className="popup-shape2 position-absolute single-text-3">
        <div className="PopupLQ1img1 mx-auto mt-4"> </div>
      </div>
      <div className="popup-shape3 position-absolute single-text-4"></div>
      <div className="popup-shape3 position-absolute single-text-5"></div>
      <div className="popup-shape3 position-absolute single-text-6"></div>
      <div className="popup-shape3 position-absolute single-text-7"></div>

      <div className="circle-group position-absolute single-text-8">
        <span className="green-line-circle"></span>
        <div className="text-white"> {popData.text[1]} </div>
      </div>
      <div className="circle-group position-absolute single-text-9">
        <span className="green-line-circle"></span>
        <div className="text-white"> {popData.text[2]} </div>
      </div>
      <div className="circle-group position-absolute single-text-10">
        <span className="green-line-circle"></span>
        <div className="text-white"> {popData.text[0]} </div>
      </div>
      <div className="greenDot position-absolute single-text-12">Z </div>
      <div className="greenDot position-absolute single-text-13">Z </div>
      <div className="greenDot position-absolute single-text-14">Z</div>
      <TextColumn
        useClass="position-absolute single-text-16"
        list={popData.list4}
      />
      <BlackContainer data={popData.data2} />

      <div className="greenDot position-absolute single-text-18">M</div>
    </div>
    </div>
  );
};
