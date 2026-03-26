import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ImFilesEmpty } from "react-icons/im";

const BreadCrumb = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const handleGoToPlants = () => {
        navigate("/reportList");
    };

    const isReportsPage = location.pathname === "/reportspage" || 
                          location.pathname === "/editreportspage";

    return (
        <nav aria-label="breadcrumb" className="mb-1">
            <ol className="flex items-center gap-2 text-sm w-full justify-between">

                {/* Left — Breadcrumb */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleGoToPlants}
                        className="flex items-center gap-1 font-medium text-[var(--text-color)] hover:text-[var(--card-border)] transition-colors duration-200 focus:outline-none"
                    >
                        <ImFilesEmpty size={12} className="mr-1" />
                        Reports
                    </button>

                    {/* Reports Page ke liye extra breadcrumb */}
                    {isReportsPage && (
                        <>
                            <span className="text-[var(--card-subtle)]">/</span>
                            <span className="font-semibold text-[var(--text-color)]">
                                Report Template Configuration
                            </span>
                        </>
                    )}
                </div>


            </ol>
        </nav>
    );
};

export default BreadCrumb;