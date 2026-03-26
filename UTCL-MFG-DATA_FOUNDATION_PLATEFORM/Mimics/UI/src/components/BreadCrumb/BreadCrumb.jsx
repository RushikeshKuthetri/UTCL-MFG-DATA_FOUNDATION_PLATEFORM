import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Network } from "lucide-react";
import { VscGraph } from "react-icons/vsc";
import { FaArrowTrendUp } from "react-icons/fa6";

const capitalizeFirst = (text = "") =>
    text.charAt(0).toUpperCase() + text.slice(1);

const BreadCrumb = ({ plantName, millName }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const isChartPage = location.pathname === "/chartspage";
    const isTrendPage = location.pathname === "/viewtrends";

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

    console.log("pathname:", location.pathname);

    // Chart Visualization page ke liye alag breadcrumb
    if (isChartPage) {
        return (
            <nav aria-label="breadcrumb" className="mb-1">
                <ol className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1 font-medium text-[var(--text-color)]">
                        <VscGraph size={14} className="mr-1" />
                        Chart Visualization
                    </span>
                </ol>
            </nav>
        );
    }
    if (isTrendPage) {
        return (
            <nav aria-label="breadcrumb" className="mb-1">
                <ol className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1 font-medium text-[var(--text-color)]">
                        <FaArrowTrendUp size={14} className="mr-1" />
                         Trends
                    </span>
                </ol>
            </nav>
        );
    }



    return (
        <nav aria-label="breadcrumb" className="mb-1">
            <ol className="flex items-center gap-2 text-sm">

                {/* Plants — Always Visible */}
                <button
                    onClick={handleGoToPlants}
                    className="flex items-center gap-1 font-medium text-[var(--text-color)] hover:text-[var(--card-border)] transition-colors duration-200 focus:outline-none"
                >
                    <Network size={14} className="mr-1" />
                    Plants
                </button>

                {/* Plant */}
                {plantName && (
                    <>
                        <span className="text-[var(--card-subtle)]">/</span>
                        <Link
                            to={`/${plantLink}`}
                            onClick={handlePlantClick}
                            className="font-medium text-[var(--text-color)] hover:text-[var(--card-border)] transition-colors duration-200 no-underline hover:no-underline"
                        >
                            {capitalizeFirst(plantName)}
                        </Link>
                    </>
                )}

                {/* Mill */}
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
 