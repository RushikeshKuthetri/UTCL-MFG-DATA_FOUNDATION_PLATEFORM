import { TextColumn } from "../../../index";
export const Popup78CM1 = ({ popData }) => {
  return (
    <div className="mdTemp-popup p-2">
      <div className="box-1">
        <div className="text-white text-center box-1">
          {popData.mainHeading}
        </div>
        <div className="d-flex">
          <div className="mr-2">
            <div className="circle-group mx-auto">
              <span className="green-line-circle"></span>
            </div>
            <div className="text-white text-center">
              {popData.circleText[0]}
            </div>
          </div>
          <div className="mr-2">
            <div className="circle-group mx-auto">
              <span className="green-line-circle"></span>
            </div>
            <div className="text-white text-center">
              {popData.circleText[1]}
            </div>
          </div>
          <div className="mr-2">
            <div className="circle-group mx-auto">
              <span className="green-line-circle"></span>
            </div>
            <div className="text-white text-center">
              {popData.circleText[2]}
            </div>
          </div>
          <TextColumn useClass="mr-2" list={popData.list1} />
        </div>
      </div>
    </div>
  );
};
