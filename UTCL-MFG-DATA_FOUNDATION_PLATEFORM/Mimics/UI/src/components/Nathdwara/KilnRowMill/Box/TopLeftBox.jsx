import { BlackContainer, TextContainerWithWrapWord } from "../../../";

export const TopLeftBox = ({ parentDivClass, useClass, list, headText }) => {
  return (
    <div className={parentDivClass}>
      {headText?.text && (
        <TextContainerWithWrapWord
          data={{
            useClass: headText.class,
            label: headText.text,
          }}
        />
      )}
      {list.map((obj, index) => {
        return (
          <div className={useClass} key={index}>
            <div className={`${obj.textClass}`}>{obj.cgrnTxt}</div>
            <BlackContainer
              data={{
                label: obj.blackTextLabel,
                useClass: `${obj.blackTextClass}`,
                unit: obj.unit,
                unitColor: "unitColor",
                hhValue: obj?.hhValue,
                hhTime: obj?.hhTime,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
