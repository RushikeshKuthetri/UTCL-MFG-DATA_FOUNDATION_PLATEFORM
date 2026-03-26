import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { viewCardClickHandler } from "../../utils";

export const Card = ({ data, view, plantId }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-4">
      <div className="data-card">
        <h6>{data?.name}</h6>
        <p>{data?.category}</p>
        <Link
          to={`${data?.path}`}
          className="link-text"
          onClick={() => viewCardClickHandler(plantId, data, dispatch)}
        >
          {view} <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>
    </div>
  );
};
