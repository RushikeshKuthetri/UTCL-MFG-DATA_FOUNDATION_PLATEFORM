import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaDownload } from "react-icons/fa";

const capitalizeFirst = (text = "") =>
    text.charAt(0).toUpperCase() + text.slice(1);

const BreadCrumb = ({ plantName, millName }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const plantLink = plantName
        ?.replace(/[^a-zA-Z ]/g, "")
        ?.split(" ")
        ?.join("")
        ?.toLowerCase();

    const handleGoToPlants = () => {
        sessionStorage.removeItem("plantName");
        sessionStorage.removeItem("millName");

        dispatch({ type: "REMOVE_PLANT_IN_NAVBAR" });
        dispatch({ type: "REMOVE_SELECTED_MILL" });

        navigate("/dashboard");
    };

    const handlePlantClick = () => {
        sessionStorage.removeItem("millName");
        dispatch({ type: "REMOVE_SELECTED_MILL" });
    };

    return (
        <nav aria-label="breadcrumb" className="mb-1">
            <ol className="flex items-center gap-2 text-sm ">

                {/* Plants — Always Visible */}
                <button
                    onClick={handleGoToPlants}
                    className="flex items-center gap-1 font-medium text-[var(--text-color)] hover:text-[var(--card-border)] transition-colors duration-200 focus:outline-none"
                >
                    <FaDownload size={12} className="mr-1" />
                    Data Downloads
                </button>

                {/* Show Plant Only If Exists */}
                {plantName && (
                    <>
                        <span className="text-[var(--card-subtle)]">/</span>

                        <Link
                            to={`/${plantLink}`}
                            onClick={handlePlantClick}
                            className="
                font-medium
                text-[var(--text-color)]
                hover:text-[var(--card-border)]
                transition-colors duration-200
                no-underline hover:no-underline
              "
                        >
                            {capitalizeFirst(plantName)}
                        </Link>
                    </>
                )}

                {/* Show Mill Only If Exists */}
                {millName && (
                    <>
                        <span className="text-[var(--card-subtle)]">/</span>
                        <span className="text-[var(--card-subtle)] font-medium">
                            {capitalizeFirst(millName)}
                        </span>
                    </>
                )}

            </ol>
        </nav>
    );
};

export default BreadCrumb;