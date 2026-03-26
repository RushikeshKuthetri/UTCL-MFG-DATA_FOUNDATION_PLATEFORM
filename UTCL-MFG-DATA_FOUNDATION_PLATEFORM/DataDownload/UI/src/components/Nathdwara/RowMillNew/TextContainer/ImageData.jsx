import { GreenDot } from "./GreenDot";

export const ImageData = ({ data }) => {
  return (
    <div className={data.useClass} style={data.size}>
      {data.subImage === "redCircle" ? <span className="redCircle"></span> : ""}
      {data.subImage === "greenDot" ? <GreenDot /> : ""}
      {data.subImage === "rawmill2circle" ? (
        <div className="circle-img ml-1"></div>
      ) : (
        ""
      )}
    </div>
  );
};
// greenDot
