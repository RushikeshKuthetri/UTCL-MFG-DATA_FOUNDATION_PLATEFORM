import {
  cmpopuplq61,
  cmpopuplq62,
} from "../../../../data/balaji/Cementmill3/popupLists/cmpopup6";
import { BlackContainer, TextColumn } from "../../../index";
export const PopupLQ6 = () => {
  return (
    <div className="mt-1 overflow-auto">
    <div className="row m-0 position-relative main-body">
      <div className="yellowline-Hr position-absolute pipe-1"></div>
      <div className="yellowline-Hr position-absolute pipe-2"></div>
      <div className="yellowline-Hr position-absolute pipe-3"></div>
      <div className="yellowline-Hr position-absolute pipe-4"></div>
      <div className="yellowline-Hr position-absolute pipe-5"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-6"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-7"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-8"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-9"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-10"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-11"></div>
      <div className="yellowline-Vr position-absolute pipe-12"></div>
      <div className="yellowline-Hr position-absolute pipe-13"></div>
      <div className="yellowline-Vr position-absolute pipe-14"></div>
      <div className="yellowline-Vr position-absolute pipe-15"></div>
      <div className="yellowline-Vr position-absolute pipe-16"></div>
      <div className="yellowline-Vr position-absolute pipe-17"></div>
      <div className="yellowline-Vr position-absolute pipe-18"></div>
      <div className="yellowline-Vr position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="position-absolute single-text-1 d-flex">
        <div className="circle-shape"></div>
        <div className="circle-shape ml-2"></div>
        <div className="circle-shape ml-2"></div>
        <div className="circle-shape ml-2"></div>
      </div>
      <div className="popup-shape5 position-absolute single-text-2 d-flex justify-content-between p-2">
        {/* <div>
          <div className="greenDot">L</div>
          <div className="greenDot mt-2">L</div>
        </div> */}
        <div>
          <div className="PopupLQ1img1"></div>
          <span className="mt-2 text-white">HE6</span>
        </div>
        <div>
          <div className="PopupLQ1img1"></div>
          <span className="mt-2 text-white">HE7</span>
        </div>
        <div>
          <div className="PopupLQ1img1"></div>
          <span className="mt-2 text-white">HE8</span>
        </div>
        <div>
          <div className="PopupLQ1img1"></div>
          <span className="mt-2 text-white">HE9</span>
        </div>
        <div>
          <div className="PopupLQ1img1"></div>
          <span className="mt-2 text-white">HEA</span>
        </div>
        <div>
          <div className="PopupLQ1img1"></div>
          <span className="mt-2 text-white">HEB</span>
        </div>
      </div>
      {/* <div className="greenDot position-absolute single-text-3">T</div> */}
      <div className="outlinediv position-absolute single-text-4"></div>
      <div className="popup-shape3 position-absolute single-text-5"></div>
      <div className="popup-shape3 position-absolute single-text-6"></div>
      <div className="popup-shape3 position-absolute single-text-7"></div>
      <div className="tringle-item position-absolute single-text-8">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-9">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-10">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-11">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div className="tringle-item position-absolute single-text-12">
        <i className="fa-solid fa-caret-down d-block"></i>
        <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <TextColumn
        useClass="position-absolute single-text-13"
        list={cmpopuplq61}
      />
      <TextColumn
        useClass="position-absolute single-text-14"
        list={cmpopuplq62}
      />
      <BlackContainer
        data={{
          label: "563LQ8_PT01",
          useClass: "greenTxt position-absolute single-text-15",
          unit: "bar",
          unitColor: "unitColor",
          // hhValue: 0,
          // hhTime: 0
        }}
      />
      <div className="circle-group position-absolute single-text-16 d-flex">
        <span className="green-line-circle"></span>
        <div className="text-white ml-2"> 563LUL </div>
      </div>
    </div>
    </div>
  );
};
