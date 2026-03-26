import { TopLeftBox } from "../index";

export const PopupDataBox = ({ data }) => {
  return (
    <div className={data.divClass}>
      {data.heading && <div className={data.headingClass}>{data.heading}</div>}
      <TopLeftBox parentDivClass="" useClass={data.useClass} list={data.list} />
    </div>
  );
};
