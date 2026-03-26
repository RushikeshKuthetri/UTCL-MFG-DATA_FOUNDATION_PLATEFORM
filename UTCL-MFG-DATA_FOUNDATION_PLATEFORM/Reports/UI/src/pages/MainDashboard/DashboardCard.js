import { useNavigate } from "react-router-dom";
import "./DashboardCard.scss";

export const DashboardCard = ({ heading, description, url }) => {
    const navigate = useNavigate();

    return (
        <div
            className="col-xl-3 col-md-4 col-sm-6 col-12 mb-4 cursor-pointer"
            onClick={() => navigate(url)}
        >
            <div className="card">
                {/* yellow animated corner */}
                <div className="go-corner"></div>

                {/* heading */}
                <p className="head">{heading}</p>

                {/* description */}
                <p className="mt-3 pt-3">{description}</p>
            </div>
        </div>
    );
};
