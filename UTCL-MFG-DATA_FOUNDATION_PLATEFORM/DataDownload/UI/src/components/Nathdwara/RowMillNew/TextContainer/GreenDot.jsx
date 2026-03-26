export const GreenDot = ({ data }) => {
  return <span className="greenDot"></span>;
};

export const GreenDotWithText = ({ data }) => {
  return <span className={`greenDot ${data?.useClass}`}>{data.label}</span>;
};

export const PinkDot = ({ data }) => {
  return <span className="pinkDot">{data.label}</span>;
};

export const BlackDotWithGreenBroder = ({ data }) => {
  return <span className="BlackDotWithGreenBroder">{data.label}</span>;
};
