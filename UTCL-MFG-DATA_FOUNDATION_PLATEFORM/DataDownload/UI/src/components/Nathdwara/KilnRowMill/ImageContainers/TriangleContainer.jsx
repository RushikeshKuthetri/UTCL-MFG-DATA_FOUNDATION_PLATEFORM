export const TriangleContainer = ({ data }) => {
  return (
    <div className={`${data.class}`}>
      {data.list.map(({ arrow, divClass, text, downArrow }, index) => {
        return (
          <div className={`${divClass}`} key={index}>
            {arrow && <i className={`${arrow}`}></i>}
            {text && <span className="text-dark">{text}</span>}
            {downArrow && <div className={`${downArrow}`}></div>}
          </div>
        );
      })}
    </div>
  );
};
