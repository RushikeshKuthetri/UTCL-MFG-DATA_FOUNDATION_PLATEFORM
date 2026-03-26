import { BlackContainer } from "../../../../";

export const SingleText = ({
  useClass,
  data,
  yellowText,
  divClass,
  textClass,
  yellowTextUp,
}) => {
  return (
    <div className={`${useClass}`}>
      {divClass && <div className={`${divClass}`}></div>}
      {yellowTextUp && (
        <div className={`${textClass}` || "yellowTxt text-center"}>
          {yellowTextUp}
        </div>
      )}
      <BlackContainer
        data={{
          label: data?.blackTextLabel,
          useClass: data?.blackTextClass,
          unit: data?.unit,
          unitColor: "unitColor",
          hhValue: data?.hhValue,
          hhTime: data?.hhTime,
        }}
      />
      {yellowText && (
        <div className={`${textClass}` || "yellowTxt text-center"}>
          {yellowText}
        </div>
      )}
    </div>
  );
};
