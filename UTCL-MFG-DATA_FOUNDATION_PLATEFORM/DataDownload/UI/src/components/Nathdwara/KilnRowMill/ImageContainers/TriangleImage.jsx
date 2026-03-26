import { TriangleContainer } from "./TriangleContainer";

export const TriangleImage = ({ useClass, list }) => {
  return (
    <div className={`${useClass}`}>
      {list.map((obj, index) => {
        return (
          <TriangleContainer
            data={{ list: obj.divList, class: obj.parentDivClass }}
            key={index}
          />
        );
      })}
    </div>
  );
};
