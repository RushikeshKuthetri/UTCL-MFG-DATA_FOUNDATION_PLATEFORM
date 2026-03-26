import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const BreadCrumb = () => {
    const navigate = useNavigate();
    const location = useLocation();

   const routeConfig = {
    "/":              { crumbs: ["CBM"],                                                                      paths: [null],                    showCreate: false },
    "/templates":         { crumbs: ["CBM", "Equipment Template List"],                                   paths: [null, null],              showCreate: true,  createPath: "/createTemplate" },
    "/createTemplate":    { crumbs: ["CBM", "Equipment Template List", "Equipment Template Configuration"], paths: [null, "/templates", null], showCreate: false },
    "/editTemplate":      { crumbs: ["CBM", "Equipment Template List", "Equipment Template Configuration"], paths: [null, "/templates", null], showCreate: false },
    "/EmailTemplateList": { crumbs: ["CBM", "Email Template List"],                                       paths: [null, null],              showCreate: true,  createPath: "/EmailTemplate" },
    "/EmailTemplate":     { crumbs: ["CBM", "Email Template List", "Email Template"],                     paths: [null, "/EmailTemplateList", null], showCreate: false },
    "/editEmailTemplate": { crumbs: ["CBM", "Email Template List", "Email Template"],                     paths: [null, "/EmailTemplateList", null], showCreate: false },
    "/cyclonelist":       { crumbs: ["CBM", "Cyclone View List"],                                         paths: [null, null],              showCreate: false },
    "/cycloneview":       { crumbs: ["CBM", "Cyclone View List", "Cyclone View"],                         paths: [null, "/cyclonelist", null], showCreate: false },
};

    const current = routeConfig[location.pathname];
    if (!current) return null;

    return (
        <nav aria-label="breadcrumb" className="mb-1">
            <ol className="flex items-center gap-2 text-sm w-full justify-between">

                {/* Left — Breadcrumb */}
                <div className="flex items-center gap-2">
                    {current.crumbs.map((crumb, index) => {
                        const isLast = index === current.crumbs.length - 1;
                        const isFirst = index === 0;
                        const path = current.paths[index];

                        return (
                            <div key={index} className="flex items-center gap-2">
                                {/* Separator */}
                                {index > 0 && (
                                    <span className="text-[var(--card-subtle)]">/</span>
                                )}

                                {/* Clickable crumb */}
                                {path ? (
                                    <button
                                        onClick={() => navigate(path)}
                                        className="flex items-center gap-1 font-medium text-[var(--text-color)] hover:text-[var(--card-border)] transition-colors duration-200 focus:outline-none"
                                    >
                                        {isFirst && <HiOutlineWrenchScrewdriver size={14} className="mr-1" />}
                                        {crumb}
                                    </button>
                                ) : (
                                    /* Non-clickable crumb */
                                    <span className={`flex items-center gap-1 ${isLast ? "font-semibold" : "font-medium"} text-[var(--text-color)]`}>
                                        {isFirst && <HiOutlineWrenchScrewdriver size={14} className="mr-1" />}
                                        {crumb}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

               
            </ol>
        </nav>
    );
};

export default BreadCrumb;