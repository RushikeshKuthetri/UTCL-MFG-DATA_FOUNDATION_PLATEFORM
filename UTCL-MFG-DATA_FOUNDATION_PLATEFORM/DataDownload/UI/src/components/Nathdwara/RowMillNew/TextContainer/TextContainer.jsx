export const TextContainer = ({ data }) => {
  return <span className={data.useClass}>{data.label}</span>;
};
export const TextContainerWithWrapWord = ({ data }) => {
  return (
    <div className={data.useClass} style={data.style}>
      {data.label}
    </div>
  );
};

export const TextData = ({ data }) => {
  return <span className={data.useClass}>{data.label}</span>;
};
