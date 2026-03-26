export const TxtcontainerMap = ({ list, parentDivClass }) => {
  return (
    <div className={`${parentDivClass}`}>
      {list.map((obj, index) => {
        return (
          <div className={obj.textClass} key={index}>
            {obj.textLabel}
          </div>
        );
      })}
    </div>
  );
};
