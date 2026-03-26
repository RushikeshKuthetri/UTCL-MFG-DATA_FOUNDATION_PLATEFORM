import { useNavigate, useLocation } from "react-router-dom";
import { Network } from "lucide-react";
import { MdAdminPanelSettings } from "react-icons/md";
 
const BreadCrumb = () => {
    const navigate = useNavigate();
    const location = useLocation();
 
    const routeConfig = {
        // Dashboard
        "/dashboard": {
            crumbs: ["Plants"],
            paths: [null],
            icon: "network",
            showCreate: false
        },
 
        // Admin routes
        "/admin/":                          { crumbs: ["Admin"],                              paths: [null],        icon: "admin", showCreate: false },
        "/admin/Dashboard/":                 { crumbs: ["Admin", "User List"],                 paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/DataTable/":       { crumbs: ["Admin", "User List"],                 paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/emailLogs/":       { crumbs: ["Admin", "Sent Email Logs"],           paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/Settings/":        { crumbs: ["Admin", "Settings"],                  paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/alerts/":          { crumbs: ["Admin", "Alerts"],                    paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/mimicLineAlerts/": { crumbs: ["Admin", "Mimic Line Alerts"],         paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/blainealerts/":    { crumbs: ["Admin", "Alert For Blaine"],          paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/kilnalerts/":      { crumbs: ["Admin", "Alert For Kiln"],            paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/alltemplates/":    { crumbs: ["Admin", "CBM Templates"],             paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/logs/":            { crumbs: ["Admin", "Access Logs"],               paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/kilnmaster/":      { crumbs: ["Admin", "Kiln Master"],               paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/utilization/":     { crumbs: ["Admin", "Utilization"],               paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/dashboard/datatable/":       { crumbs: ["Admin", "User List"],                 paths: [null, null],  icon: "admin", showCreate: false },
        "/admin/Dashboard/settings/":        { crumbs: ["Admin", "Settings"],                  paths: [null, null],  icon: "admin", showCreate: false },
 
        // Process Opt
        "/processopt": { crumbs: ["Process Optimization"], paths: [null], icon: "network", showCreate: false },
    };
 
    const current = routeConfig[location.pathname];
    if (!current) return null;
 
    const IconComponent = current.icon === "admin"
        ? <MdAdminPanelSettings size={14} className="" />
        : <Network size={14} className="" />;
 
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
                                {index > 0 && (
                                    <span className="text-[var(--card-subtle)]">/</span>
                                )}
                                {path ? (
                                    <button
                                        onClick={() => navigate(path)}
                                        className="flex items-center gap-1 text-[var(--text-color)] hover:text-[var(--card-border)] transition-colors duration-200 focus:outline-none"
                                    >
                                        {isFirst && IconComponent}
                                        {crumb}
                                    </button>
                                ) : (
                                    <span className={`flex items-center gap-1 ${isLast ? "font-semibold" : "font-medium"} text-[var(--text-color)]`}>
                                        {isFirst && IconComponent}
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
 