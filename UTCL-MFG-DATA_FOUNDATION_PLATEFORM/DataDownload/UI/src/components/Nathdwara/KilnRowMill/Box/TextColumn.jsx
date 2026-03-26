import { BlackContainer } from "../../../";

export const TextColumn = ({
  list,
  yellowText,
  useClass,
  textClass,
  text,
  text2Class,
}) => {
  return (
    <div className={`${useClass}`}>
      {yellowText && (
        <div
          className={
            `${textClass} ` || "yellowTxt text-center align-self-baseline"
          }
        >
          {yellowText}
        </div>
      )}
      {text && <div className={`${text2Class} `}>{text}</div>}
      {list.map((obj, index) => {
        return (
          <BlackContainer
            data={{
              label: obj.blackTextLabel,
              useClass: obj.blackTextClass,
              unit: obj.unit,
              unitColor: "unitColor",
              hhValue: obj?.hhValue,
              hhTime: obj?.hhTime,
              roundOff: obj?.roundOff,
            }}
            key={index}
          />
        );
      })}
    </div>
  );
};
