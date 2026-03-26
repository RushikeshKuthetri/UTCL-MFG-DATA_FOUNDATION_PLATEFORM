import { TextContainer, BlackContainer } from "../../../";

export const LeftContainer = ({ data }) => {
  return (
    <div className="row m-0 p-0 mw-170">
      <div className="col-4 d-flex m-0 pr-1 pl-0">
        <TextContainer data={data} />
      </div>
      <div className="col-8 d-flex m-0 p-0 ">
        <div className="row m-0 p-0 w-100">
          <div className="col-6 d-flex m-0 pr-1 pl-0">
            <BlackContainer data={data.Children[0]} />
          </div>
          <div className="col-6 d-flex m-0 p-0">
            <BlackContainer data={data.Children[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};
