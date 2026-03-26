import { PopupDataBox } from "./PopupDataBox";

export const CommonPopup = ({ popData }) => {
  return (
    <div className={popData.mainDivClass}>
      <div className={popData.secondDivClass}>
        <div className="text-white text-center bb-1">{popData.mainHeading}</div>
        {popData.dataList.map((obj, index) => {
          return <PopupDataBox data={obj} key={index} />;
        })}
      </div>
    </div>
  );
};
