

"use client";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LuNetwork } from "react-icons/lu";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImFilesEmpty } from "react-icons/im";
import { FiLink } from "react-icons/fi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { FaCogs } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import {
    Moon,
    PanelLeftClose,
    PanelRightClose,
    Power,
    Sun,
    ChevronRight,
    ChevronDown,
} from "lucide-react";
import useToken from "../../utils/UseToken/useToken";

const menuItems = [
    {
        name: "Mimics",
        icon: LuNetwork,
        // path: "https://dev.d24ohd8z0zwg7d.amplifyapp.com/mimics",
        path: "/mimics",
        moduleKey: "Mimics",
        openInNewTab: false
    },
    {
        name: "Data Download",
        icon: FaDownload,
        path: "/datadownload",
        moduleKey: "Mimics",
        openInNewTab: false
    },
    {
        name: "Trends",
        icon: FaArrowTrendUp,
        path: "/mimics/viewtrends",
        moduleKey: "Mimics",
        openInNewTab: false
    },
    {
        name: "Report",
        icon: ImFilesEmpty,
        path: "/reports/reportList",
        moduleKey: "Mimics",
        openInNewTab: false
    },
    {
        name: "Tag Utility",
        icon: FiLink,
        path: "https://tag_utility.akxatechapps.com/",
        moduleKey: "Mimics",
        openInNewTab: true
    },
    {
        name: "CBM",
        icon: HiOutlineWrenchScrewdriver,
        path: "",
        moduleKey: "CBM",
        openInNewTab: false,
        hasDropdown: true,
        children: [
            { name: "Equipment Template", path: "/cbm/templates", moduleKey: "CBM", openInNewTab: false },
            { name: "Email Template", path: "/cbm/EmailTemplateList", moduleKey: "CBM", openInNewTab: false },
            { name: "Cyclone View List", path: "/cbm/cyclonelist", moduleKey: "CBM", openInNewTab: false },
        ],
    },
    {
        name: "Charts Visualization",
        icon: VscGraph,
        path: "/mimics/chartspage",
        moduleKey: "OPT",
        openInNewTab: false,
    },
    {
        name: "Process Optimization",
        icon: FaCogs,
        path: "",
        moduleKey: "OPT",
        openInNewTab: false,
        hasDropdown: true,
        children: [
            { name: "Blaine Prediction", path: "/blaine/#/home", moduleKey: "OPT", openInNewTab: false },
            {
                name: "Cement OPT",
                path: "",
                moduleKey: "OPT",
                openInNewTab: false,
                hasDropdown: true,
                children: [
                    { name: "Home", path: "/cement/#/home", moduleKey: "OPT", openInNewTab: false },
                    { name: "Dashboard", path: "/cement/#/dashboard", moduleKey: "OPT", openInNewTab: false },
                    { name: "Recommendation", path: "/cement/#/recommendationsList", moduleKey: "OPT", openInNewTab: false },
                    { name: "Admin", path: "/cement/#/adminpage", moduleKey: "OPT", openInNewTab: false },
                ],
            },
            {
                name: "Kiln OPT",
                path: "",
                moduleKey: "OPT",
                openInNewTab: false,
                hasDropdown: true,
                children: [
                    { name: "Performance Dashboard", path: "/klin/#/dashboard/", moduleKey: "OPT", openInNewTab: false },
                    { name: "Process Dashboard", path: "/klin/#/home", moduleKey: "OPT", openInNewTab: false },
                    { name: "Recommendations", path: "/klin/#/recommendationsList", moduleKey: "OPT", openInNewTab: false },
                    { name: "Alerts", path: "/klin/#/alertList", moduleKey: "OPT", openInNewTab: false },
                    { name: "Equipment", path: "/klin/#/equipmentList", moduleKey: "OPT", openInNewTab: false },
                    { name: "Tag List", path: "/klin/#/disturbanceOrder", moduleKey: "OPT", openInNewTab: false },
                    { name: "Admin Page", path: "/klin/#/adminpage", moduleKey: "OPT", openInNewTab: false },
                    { name: "Control Range Page", path: "/klin/#/controlRange", moduleKey: "OPT", openInNewTab: false },
                ],
            },
        ],
    },
       {
        name: "Help",
        icon: IoHelpCircleOutline,
           path: "/mimics/help",
        moduleKey: "Mimics",
        openInNewTab: false
    },
    {
        name: "Admin",
        icon: MdAdminPanelSettings,
        path: "/dashboard/admin",
        moduleKey: "Admin",
        openInNewTab: false,
        hasDropdown: true,
        children: [
            { name: "User List", path: "/admin/dashboard/datatable", roles: ["admin", "super_admin"] },
            { name: "Access Logs", path: "/admin/Dashboard/logs", roles: ["admin", "super_admin"] },
            { name: "Sent Email Logs", path: "/admin/Dashboard/emailLogs", roles: ["admin", "super_admin"] },

            { name: "Alerts", path: "/admin/Dashboard/mimicLineAlerts", roles: ["super_admin"] },
            { name: "Alert For Blaine", path: "/admin/Dashboard/blainealerts", roles: ["super_admin"] },
            { name: "Alert For Kiln", path: "/admin/Dashboard/kilnalerts", roles: ["super_admin"] },
            { name: "CBM Templates", path: "/admin/Dashboard/alltemplates", roles: ["super_admin"] },

            { name: "Kiln Master", path: "/admin/Dashboard/kilnmaster", roles: ["super_admin"] },
            { name: "Utilization", path: "/admin/Dashboard/utilization", roles: ["super_admin"] },
            { name: "Settings", path: "/admin/Dashboard/settings", roles: ["admin", "super_admin"] },
        ],
    }
];
 
// ── Tree connector dimensions ─────────────────────────────────────
const SPINE_X = 8;    // x-position of the vertical part of the L
const ITEM_H  = 32;   // height of each item row
const LINE_W  = 1.5;
const RADIUS  = 10;    // corner radius of the L-curve
const SVG_W   = 20;   // width of the connector SVG
 
/**
 * TreeConnector
 *
 * isLast = true  → L-curve (vertical line down to midY then curve right)
 * isLast = false → T-junction (full vertical spine + horizontal branch at midY)
 */
function TreeConnector({ lineColor, isLast }) {
    const midY        = ITEM_H / 2;
    const curveStartY = midY - RADIUS;
 
    return (
        <svg
            width={SVG_W}
            height={ITEM_H}
            viewBox={`0 0 ${SVG_W} ${ITEM_H}`}
            className="shrink-0"
            fill="none"
        >
            {isLast ? (
                /* Last item: L-curve only */
                <path
                    d={`
                        M ${SPINE_X} 0
                        L ${SPINE_X} ${curveStartY}
                        Q ${SPINE_X} ${midY} ${SPINE_X + RADIUS} ${midY}
                        L ${SVG_W} ${midY}
                    `}
                    stroke={lineColor}
                    strokeWidth={LINE_W}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ) : (
                <>
                    {/* Vertical spine full height */}
                    <line
                        x1={SPINE_X} y1={0}
                        x2={SPINE_X} y2={ITEM_H}
                        stroke={lineColor}
                        strokeWidth={LINE_W}
                        strokeLinecap="round"
                    />
                    {/* Same L-curve as isLast but spine continues below */}
                    <path
                        d={`
                            M ${SPINE_X} ${curveStartY}
                            Q ${SPINE_X} ${midY} ${SPINE_X + RADIUS} ${midY}
                            L ${SVG_W} ${midY}
                        `}
                        stroke={lineColor}
                        strokeWidth={LINE_W}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </>
            )}
        </svg>
    );
}

export default function LeftDrawer({ open, setOpen, collapsed, setCollapsed }) {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState(() => {
        try {
            const saved = localStorage.getItem("openDropdowns");
            return saved ? JSON.parse(saved) : {};
        } catch (err) {
            return {};
        }
    });
    const { token, setToken } = useToken();
    const mobileOpen = open;
    const setMobileOpen = setOpen;
    const modules = JSON.parse(localStorage.getItem("modules")) || [];
    const pathname = useLocation();
    const navigate = useNavigate();

    // ── line color based on theme ─────────────────────────────────
    const lineColor = theme === "dark" ? "#7E8383" : "#9FACAC";

    useEffect(() => {
        localStorage.setItem("openDropdowns", JSON.stringify(openDropdowns));
    }, [openDropdowns]);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const toggleDropdown = (key) => {
        setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
    };
 
    const isDropdownOpen = (key) => !!openDropdowns[key];


    const handleNavigation = (item) => {
        if (!item.path) return;
        if (item.name === "Trends") {
            localStorage.setItem("collapsed", "true");
            // setCollapsed(true); // since your toggle function flips state
        }
        if (item.openInNewTab) {
            const fullUrl = item.path.startsWith("http")
                ? item.path
                : `${window.location.origin}${item.path}`;

            window.open(fullUrl, "_blank", "noopener,noreferrer");
        } else {
            const fullUrl = item.path.startsWith("http")
                ? item.path
                : `${window.location.origin}${item.path}`;

            window.location.href = fullUrl;   // 🔥 Forces full reload
        }

        setMobileOpen(false);
    };



    // Added to show the lefdrawer based on Module access and Admin tile based admin and superadmin access
    const role = token?.Role;
    const filteredMenu = menuItems
        .filter((item) => {
            if (item.moduleKey === "Admin") return true;
            if (item.moduleKey && !modules?.includes(item.moduleKey)) {
                return false;
            }
            return true;
        })
        .map((item) => {
            if (!item.children) return item;
            let filteredChildren = item.children;
            if (item.moduleKey === "Admin") {
                // Apply role filtering ONLY for Admin
                filteredChildren = item.children.filter(
                    (child) => !child.roles || child.roles.includes(role)
                );
            } else {
                // Apply module filtering for other sections
                filteredChildren = item.children.filter(
                    (child) => !child.moduleKey || modules?.includes(child.moduleKey)
                );
            }
            return { ...item, children: filteredChildren };
        })
        .filter((item) => {
            // remove parent if no children remain
            if (item.children && item.children.length === 0) return false;
            return true;
        });

    return (
        <>
            {/* MOBILE HAMBURGER */}
            {!mobileOpen && (
                <button
                    className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-lg bg-[var(--bg-leftdrawer)] shadow"
                    onClick={() => setMobileOpen(true)}
                >
                    <FaBars size={20} />
                </button>
            )}

            {/* BACKDROP */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}
 
            {/* SIDEBAR */}
            <div className={`
                fixed top-18 left-0 z-40 mt-2
                h-[calc(100dvh-92px)]
                flex flex-col
                rounded-r-3xl
                bg-[var(--bg-leftdrawer)]
                shadow-left-drawer-light
                dark:shadow-left-drawer-dark
                transition-all duration-300
                ${collapsed ? "lg:w-20" : "lg:w-60"}
                w-60
                ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0
            `}>
 
                {/* MOBILE CLOSE BUTTON */}
                <div className="lg:hidden flex justify-end pt-3 pr-3 -mb-2">
                    <button onClick={() => setMobileOpen(false)}>
                        <FaTimes size={20} className="text-[var(--text-color)]" />
                    </button>
                </div>
 
                {/* MENU */}
                <div className={`flex-1 overflow-y-auto flex flex-col gap-1 mt-2 ${collapsed ? "px-1" : "px-3"}`}>
                    {filteredMenu.map((item, index) => {
                        const Icon = item.icon;
                        const hasChildren = item.hasDropdown && item.children?.length > 0;
                        const dropdownOpen = isDropdownOpen(item.name);
 
                        return (
                            <div key={index}>
 
                                {/* ── PARENT ITEM ── */}
                                <div
                                    className={`flex items-center py-2 px-3 rounded-xl cursor-pointer
                                        ${collapsed ? "justify-center" : "gap-4"}
                                         text-[var(--leftdrawer-text)]
                                        hover:bg-[var(--left-drawer-active-tab)]
                                        hover:text-[#111111]`}
                                    onClick={() => {
                                        if (hasChildren) toggleDropdown(item.name);
                                        else handleNavigation(item);
                                    }}
                                >
                                    <Icon size={22} />
                                    {!collapsed && (
                                        <>
                                            <span className="text-sm font-medium flex-1">{item.name}</span>
                                            {hasChildren && (
                                                <span className="text-xs">
                                                    {dropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
 
                                {/* ── LEVEL 1 CHILDREN ── */}
                                {hasChildren && dropdownOpen && !collapsed && (
                                    <div className="ml-[34px] flex flex-col">
                                        {item.children.map((child, childIndex) => {
                                            const hasNested = child.hasDropdown && child.children?.length > 0;
                                            const nestedKey = `${item.name}_${child.name}`;
                                            const nestedOpen = isDropdownOpen(nestedKey);
                                            const isLast = childIndex === item.children.length - 1;
 
                                            return (
                                                <div key={childIndex} className="flex flex-col">
 
                                                    {/* CHILD ROW */}
                                                    <div
                                                        className="flex items-center cursor-pointer"
                                                        style={{ height: ITEM_H }}
                                                        onClick={() => {
                                                            if (hasNested) toggleDropdown(nestedKey);
                                                            else handleNavigation(child);
                                                        }}
                                                    >
                                                       <TreeConnector lineColor={lineColor} isLast={isLast} />
 
                                                        <div className={`flex-1 flex items-center py-[6.4px] px-2 rounded-lg transition-all text-sm min-w-0 gap-1
                                                            text-[var(--text-color)]
                                                            hover:bg-[var(--left-drawer-active-tab)]
                                                            hover:text-[#111111]`}>
                                                            <span className="flex-1 truncate">{child.name}</span>
                                                            {hasNested && (
                                                                <span className="ml-auto shrink-0">
                                                                    {nestedOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
 
                                                    {/* ── LEVEL 2 CHILDREN ── */}
                                                   {/* ── LEVEL 2 CHILDREN ── */}
{hasNested && nestedOpen && (
    <div className="flex flex-col relative" style={{ marginLeft: SVG_W }}>
        {/* Connecting line sirf tab jab isLast FALSE ho */}
        {!isLast && (
            <div
                style={{
                    position: "absolute",
                    left: -SVG_W + SPINE_X,
                    top: 0,
                    bottom: 0,
                    width: LINE_W,
                    backgroundColor: lineColor,
                }}
            />
        )}
        {child.children.map((grandchild, gcIndex) => {
            const gcIsLast = gcIndex === child.children.length - 1;
            return (
                <div
                    key={gcIndex}
                    className="flex items-center cursor-pointer"
                    style={{ height: ITEM_H }}
                    onClick={() => handleNavigation(grandchild)}
                >
                    <TreeConnector lineColor={lineColor} isLast={gcIsLast} />
                    <div className={`flex-1 py-[6.4px] px-2 rounded-lg transition-all text-sm truncate
                        text-[var(--text-color)]
                        hover:bg-[var(--left-drawer-active-tab)]
                        hover:text-[#111111]`}>
                        {grandchild.name}
                    </div>
                </div>
            );
        })}
    </div>
)}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                            </div>
                        );
                    })}
                </div>

                {/* FOOTER */}
                <div className="px-3 pb-2">
                    <div className={`
                        ${collapsed ? "flex flex-col items-center gap-5 py-2" : "flex items-center justify-evenly lg:justify-between px-9 py-2"}
                        rounded-xl border
                        bg-[var(--bg-leftdrawer-footer)]
                        border-[color:var(--left-drawer-footer-border)]
                        shadow-[0_2px_6px_rgba(0,0,0,0.05)]
                        backdrop-blur-sm
                        transition-all duration-300
                    `}>
                        {/* Theme */}
                        <button onClick={toggleTheme} className="focus:outline-none focus:ring-0 outline-none">
                            {theme === "dark" ? (
                                <Sun size={20} className="cursor-pointer text-yellow-400" />
                            ) : (
                                <Moon size={20} className="cursor-pointer text-[var(--text-color)]" />
                            )}
                        </button>

                        {/* Collapse (desktop only, original position restored) */}
                        {/* <PanelLeftClose
              size={22}
              onClick={() => setCollapsed(!collapsed)}
              className="cursor-pointer text-[var(--text-color)] hidden lg:block"
            /> */}
                        <button
                            onClick={() => setCollapsed(prev => !prev)}
                            className="hidden lg:block cursor-pointer text-[var(--text-color)] focus:outline-none focus:ring-0 outline-none"
                        >
                            {collapsed ? (
                                <PanelRightClose size={20} />
                            ) : (
                                <PanelLeftClose size={20} />
                            )}
                        </button>


                        {/* Power */}
                        <Power size={20} className="cursor-pointer text-[var(--text-color)] focus:outline-none focus:ring-0 outline-none" />
                    </div>
                </div>
            </div>
        </>
    );
}

