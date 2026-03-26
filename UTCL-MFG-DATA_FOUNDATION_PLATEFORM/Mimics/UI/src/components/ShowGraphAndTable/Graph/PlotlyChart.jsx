import { useDispatch, useSelector } from "react-redux";
import Plot from "react-plotly.js";
import { useEffect, useState, useMemo, useRef } from "react";
import { Eye, EyeOff, Trash2 } from "lucide-react";
import "./Graph.css";
import {
    getOverlayLayout,
    getSingleLayout,
    getStackedLayout,
} from "../../../utils/chartUtils/plotlyLayout";
import Table from "../TagTable/TagTable";

export const PlotlyGraph = () => {
    const plotlyProvider = useSelector((state) => state.plotlyProvider);
    const plotlyData = plotlyProvider.plotlyData;
    const layoutMode = plotlyProvider.layout;
    const lastTrendPayload = plotlyProvider.lastTrendPayload;

    const prevTagGraphRef = useRef(null);
    const prevRangeRef = useRef(null);
    const dispatch = useDispatch();

    const tagGraph = plotlyData?.tagGraph || [];
    const tagTable = plotlyData?.tagTable || [];
    const graphConfig = plotlyProvider.graphConfig;

    const [traces, setTraces] = useState([]);
    const [yAxisRanges, setYAxisRanges] = useState({});

    const [anchoredPoints, setAnchoredPoints] = useState([]);

    const [singleYAxisRange, setSingleYAxisRange] = useState({
        min: null,
        max: null,
    });
    const [theme, setTheme] = useState(
        document.documentElement.getAttribute("data-theme")
    );
    const [themeReady, setThemeReady] = useState(false);
    const [revision, setRevision] = useState(0);

    console.log("Theme in the plotly is =====================>", theme)

    useEffect(() => {
        setRevision((r) => r + 1);
    }, [theme]);

    const [themeVersion, setThemeVersion] = useState(0);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setThemeVersion(prev => prev + 1);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "style"],
        });

        return () => observer.disconnect();
    }, []);;

    const themeVars = useMemo(() => {
        const css = getComputedStyle(document.documentElement);
        return {
            annotationBg: css.getPropertyValue("--card-bg").trim(),
            border: css.getPropertyValue("--form-border").trim(),
            text: css.getPropertyValue("--text-color").trim(),
        };
    }, [themeVersion]);
    /* ---------------- INIT TRACES ---------------- */
    // Initialize traces from tagGraph
    // useEffect(() => {
    //     if (Array.isArray(tagGraph)) {
    //         setTraces(
    //             tagGraph.map((t) => ({
    //                 ...t,
    //                 tagUID: t.tagUID || t.tagUid,
    //                 visible: t.visible ?? true,
    //                 line: { ...(t.line || {}), color: t.line?.color || "#cbd5e1" },
    //             }))
    //         );
    //     }
    //     console.count("SET_GRAPH_CONFIG effect");
    // }, [tagGraph]);

    useEffect(() => {
        if (!Array.isArray(tagGraph)) return;

        // 🔒 prevent rerender loop
        if (
            prevTagGraphRef.current &&
            JSON.stringify(prevTagGraphRef.current) === JSON.stringify(tagGraph)
        ) {
            return;
        }

        prevTagGraphRef.current = tagGraph;

        setTraces(
            tagGraph.map((t) => ({
                ...t,
                tagUID: t.tagUID || t.tagUid,
                visible: t.visible ?? true,
                line: {
                    ...(t.line || {}),
                    color: t.line?.color || "#cbd5e1",
                },
            }))
        );

        console.count("INIT_TRACES_FROM_TAGGRAPH");
    }, [tagGraph]);

    // Added to call an api for horizontal x axis range chnages 
    useEffect(() => {
        if (!traces.length) return;

        const firstTrace = traces[0];
        if (!firstTrace?.x?.length) return;

        const start = new Date(firstTrace.x[0]).getTime();
        const end = new Date(firstTrace.x[firstTrace.x.length - 1]).getTime();

        prevRangeRef.current = {
            start,
            end,
        };

    }, [traces]);




    // Clear anchored points on Escape key press
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                setAnchoredPoints([]);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // Clear anchored points on layout mode change
    useEffect(() => {
        setAnchoredPoints([]);
    }, [layoutMode]);


    // Track up traces and yAxisRanges to Redux store for global access so when we save variant it will have these latest configs as well
    useEffect(() => {
        if (!traces.length) return;
        const tracesByTag = {};
        traces.forEach((t) => {
            const tagUID = t.uid || t.tagUID;
            if (!tagUID) return;

            tracesByTag[tagUID] = {
                visible: t.visible !== false,
                line: {
                    color: t.line?.color,
                    width: t.line?.width,
                    dash: t.line?.dash,
                    shape: t.line?.shape,
                },
            };
        });

        dispatch({
            type: "SET_GRAPH_CONFIG",
            payload: {
                tracesByTag,
                yAxisRangesByTag: yAxisRanges,
                singleYAxisRange,
            },
        });

    }, [traces, yAxisRanges, singleYAxisRange, dispatch]);



    // Handle relayout autoscale it reset min max range also removes anchored points
    // const handleRelayout = (event) => {
    //     if (event["yaxis.autorange"] === true) {
    //         if (layoutMode === "single") {
    //             setSingleYAxisRange({
    //                 min: null,
    //                 max: null,
    //             });
    //         }
    //         else {
    //             setYAxisRanges({});
    //         }
    //     }
    //     // existing logic
    //     if (event["xaxis.autorange"]) {
    //         setAnchoredPoints([]);
    //     }
    // };


    const handleRelayout = (event) => {

        /* ---------------- Y AUTOSCALE ---------------- */
        if (event["yaxis.autorange"] === true) {
            if (layoutMode === "single") {
                setSingleYAxisRange({ min: null, max: null });
            } else {
                setYAxisRanges({});
            }
        }

        /* ---------------- X AUTOSCALE ---------------- */
        if (event["xaxis.autorange"] === true) {
            setAnchoredPoints([]);
            return; // DO NOT touch prevRangeRef
        }

        /* ---------------- NORMAL SCROLL ---------------- */

        let start, end;

        if (event["xaxis.range"]) {
            start = event["xaxis.range"][0];
            end = event["xaxis.range"][1];
        } else {
            start = event["xaxis.range[0]"];
            end = event["xaxis.range[1]"];
        }

        if (!start || !end) return;

        const newStart = new Date(start).getTime();
        const newEnd = new Date(end).getTime();

        // First time initialization
        if (!prevRangeRef.current) {
            prevRangeRef.current = {
                start: newStart,
                end: newEnd,
            };
            return;
        }

        const prev = prevRangeRef.current;

        const startDiff = newStart - prev.start;
        const endDiff = newEnd - prev.end;

        const isHorizontalMove =
            startDiff !== 0 &&
            startDiff === endDiff;

        prevRangeRef.current = {
            start: newStart,
            end: newEnd,
        };

        if (!isHorizontalMove) return;

        dispatch({
            type: "SET_X_AXIS_SCROLL_DATES",
            payload: {
                startDate: new Date(start).toISOString(),
            },
        });
    };


    // Handle click on data points to anchor them
    const handlePointClick = (event) => {
        // 👇 clicked on empty area
        if (!event?.points?.length) {
            setAnchoredPoints([]);
            return;
        }

        const points = event.points.map((p) => ({
            x: p.x,
            y: p.y,
            tag: p.data.name,
            color: p.data.line?.color || "#000",
            yaxis: p.yaxis || "y",
        }));

        setAnchoredPoints(points);
    };

    /* ---------------- ACTION HANDLERS ---------------- */
    // Toggle trace visibility on/off or hide/show
    const toggleTraceVisibility = (tagUID) => {
        console.log("Toggling visibility for:", tagUID);
        setTraces((prev) =>
            prev.map((t) =>
                t.uid === tagUID ? { ...t, visible: !t.visible } : t
            )
        );
    };

    // Delete a trace from the graph
    const deleteTrace = (tagUID) => {
        setTraces((prev) => prev.filter((t) => t.uid !== tagUID));
    };

    // Update trace line properties like color, width, dash, shape
    const updateTrace = (tagUID, updates) => {
        setTraces((prev) =>
            prev.map((t) =>
                t.uid === tagUID
                    ? {
                        ...t,
                        line: {
                            ...t.line,
                            ...updates.line,
                        },
                    }
                    : t
            )
        );
    };

    // Update Y-Axis Min Max range for multiple Y-Axis mode
    const updateYAxisRange = (tagName, min, max) => {
        setYAxisRanges((prev) => ({
            ...prev,
            [tagName]: {
                min: min !== "" ? Number(min) : null,
                max: max !== "" ? Number(max) : null,
            },
        }));
    };

    // Table data with action buttons and range inputs for each trace 
    const tableDataWithActions = useMemo(() => {
        if (!traces.length) return [];

        return tagTable
            .filter((tag) => traces.some((t) => t.uid === tag.tagUID))
            .map((tag) => {
                const trace = traces.find((t) => t.uid === tag.tagUID);
                const isVisible = trace?.visible !== false;

                return {
                    ...tag,
                    Action: (
                        <div
                            className="d-flex align-items-center"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {/* ===== ICON ACTIONS ===== */}
                            <div className="d-flex align-items-center action-icons">
                                <button
                                    type="button"
                                    className="btn p-0 border-0 bg-transparent"
                                    title={isVisible ? "Hide" : "Show"}
                                    onClick={() => toggleTraceVisibility(tag.tagUID)}
                                >
                                    {isVisible ? (
                                        <Eye size={16} className="text-success" />
                                    ) : (
                                        <EyeOff size={16} className="text-secondary" />
                                    )}
                                </button>

                                <input
                                    type="color"
                                    value={trace?.line?.color || "#cbd5e1"}
                                    onChange={(e) =>
                                        updateTrace(tag.tagUID, {
                                            line: { color: e.target.value },
                                        })
                                    }
                                    title="Color"
                                    className="table-color-input"
                                />

                                <button
                                    type="button"
                                    className="btn p-0 border-0 bg-transparent"
                                    title="Delete"
                                    onClick={() => deleteTrace(tag.tagUID)}
                                >
                                    <Trash2 size={16} className="text-danger" />
                                </button>
                            </div>
                        </div>
                    ),
                    "Formats": (
                        <div className="flex items-center gap-2 w-fit">
                            {/* ===== FORMAT CONTROLS ===== */}

                            <select
                                title="Change the line size"
                                className="w-[70px] px-1 py-[2px] text-[10px] rounded 
                       bg-[var(--input-enable-bg)] 
                       border border-[var(--form-border)] 
                       text-[var(--text-color)]
                       focus:outline-none focus:ring-1 focus:ring-[var(--picker-accent)]"
                                value={trace?.line?.width || 2}
                                onChange={(e) =>
                                    updateTrace(tag.tagUID, {
                                        line: { width: Number(e.target.value) },
                                    })
                                }
                            >
                                <option value={1}>Small</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Large</option>
                                <option value={4}>Extra large</option>
                            </select>

                            <select
                                title="Change the line type"
                                className="w-[70px] px-1 py-[2px] text-[10px] rounded 
                       bg-[var(--input-enable-bg)] 
                       border border-[var(--form-border)] 
                       text-[var(--text-color)]
                       focus:outline-none focus:ring-1 focus:ring-[var(--picker-accent)]"
                                value={trace?.line?.dash || "solid"}
                                onChange={(e) =>
                                    updateTrace(tag.tagUID, {
                                        line: { dash: e.target.value },
                                    })
                                }
                            >
                                <option value="solid">Solid</option>
                                <option value="dash">Dash</option>
                                <option value="dot">Dot</option>
                                <option value="dashdot">Dash-dot</option>
                            </select>

                            <select
                                title="Change the line type"
                                className="w-[70px] px-1 py-[2px] text-[10px] rounded 
                       bg-[var(--input-enable-bg)] 
                       border border-[var(--form-border)] 
                       text-[var(--text-color)]
                       focus:outline-none focus:ring-1 focus:ring-[var(--picker-accent)]"
                                value={trace?.line?.shape || "linear"}
                                onChange={(e) =>
                                    updateTrace(tag.tagUID, {
                                        line: { shape: e.target.value },
                                    })
                                }
                            >
                                <option value="linear">Linear</option>
                                <option value="spline">Spline</option>
                                <option value="hv">Step</option>
                            </select>
                        </div>
                    ),
                    "Y Axis Ranges": (
                        <div className="flex gap-1 items-center w-fit">
                            <input
                                title="Add min range"
                                type="number"
                                placeholder="Min"
                                className="w-[40px] h-[30px] px-1 py-[2px] text-[10px] rounded 
                   bg-[var(--input-enable-bg)] 
                   border border-[var(--form-border)] 
                   text-[var(--text-color)] 
                   focus:outline-none focus:ring-1 focus:ring-[var(--picker-accent)]"
                                value={
                                    layoutMode === "single"
                                        ? singleYAxisRange.min ?? ""
                                        : yAxisRanges[tag.tagUID]?.min ?? ""
                                }
                                onChange={(e) =>
                                    layoutMode === "single"
                                        ? setSingleYAxisRange((prev) => ({
                                            ...prev,
                                            min:
                                                e.target.value !== ""
                                                    ? Number(e.target.value)
                                                    : null,
                                        }))
                                        : updateYAxisRange(
                                            tag.tagUID,
                                            e.target.value,
                                            yAxisRanges[tag.tagUID]?.max
                                        )
                                }
                                step="any"
                            />

                            <input
                                title="Add max range"
                                type="number"
                                placeholder="Max"
                                className="w-[40px] h-[30px] px-1 py-[2px] text-[10px] rounded 
                   bg-[var(--input-enable-bg)] 
                   border border-[var(--form-border)] 
                   text-[var(--text-color)] 
                   focus:outline-none focus:ring-1 focus:ring-[var(--picker-accent)]"
                                value={
                                    layoutMode === "single"
                                        ? singleYAxisRange.max ?? ""
                                        : yAxisRanges[tag.tagUID]?.max ?? ""
                                }
                                onChange={(e) =>
                                    layoutMode === "single"
                                        ? setSingleYAxisRange((prev) => ({
                                            ...prev,
                                            max:
                                                e.target.value !== ""
                                                    ? Number(e.target.value)
                                                    : null,
                                        }))
                                        : updateYAxisRange(
                                            tag.tagUID,
                                            yAxisRanges[tag.tagUID]?.min,
                                            e.target.value
                                        )
                                }
                                step="any"
                            />
                        </div>
                    )
                };
            });
    }, [tagTable, traces, yAxisRanges, singleYAxisRange, layoutMode]);


    if (!traces.length) return null;

    const BASE_HEIGHT = 450;

    // const layout =
    //     layoutMode === "single"
    //         ? { ...getSingleLayout(traces, yAxisRanges), height: BASE_HEIGHT }
    //         : layoutMode === "stacked"
    //             ? {
    //                 ...getStackedLayout(traces, yAxisRanges),
    //                 height: Math.max(300, traces.length * 220),
    //             }
    //             : { ...getOverlayLayout(traces, yAxisRanges), height: BASE_HEIGHT };


    // Layout for the graph where the Y-Axis ranges are applied for single Y axis mode
    const baseSingleLayout = getSingleLayout(traces);
    const layout =
        layoutMode === "single"
            ? {
                ...baseSingleLayout,
                height: BASE_HEIGHT,
                yaxis: {
                    ...baseSingleLayout.yaxis,
                    autorange:
                        singleYAxisRange.min == null ||
                        singleYAxisRange.max == null,
                    range:
                        singleYAxisRange.min != null &&
                            singleYAxisRange.max != null
                            ? [
                                singleYAxisRange.min,
                                singleYAxisRange.max,
                            ]
                            : undefined,
                },
            }
            : layoutMode === "stacked"
                ? {
                    ...getStackedLayout(traces, yAxisRanges),
                    height: Math.max(300, traces.length * 220),
                }
                : {
                    ...getOverlayLayout(traces, yAxisRanges),
                    height: BASE_HEIGHT,
                };




    // Layout for the anchor on click of intersction points where the anchored points are shown
    const layoutWithAnchor = {
        ...layout,
        annotations: anchoredPoints.length
            ? layoutMode === "stacked"
                ? anchoredPoints.map((p) => ({
                    x: p.x,
                    xref: "x",

                    // 🔥 anchor inside that tag's graph
                    y: p.y,
                    yref: p.yaxis, // y, y2, y3...
                    text:
                        `<b>${new Date(p.x).toLocaleString()}</b><br>` +
                        `<span style="color:${p.color}">▉</span> ` +
                        `<b>${p.tag}</b>: ${p.y}`,
                    showarrow: true,
                    arrowhead: 2,
                    ax: 20,
                    ay: -20,
                    // bgcolor: "#ffffff",
                    bgcolor: themeVars.annotationBg,
                    // bordercolor: p.color,
                    bordercolor: themeVars.border,
                    borderwidth: 1,
                    // font: { size: 12 },
                    font: { size: 12, color: themeVars.text },
                    opacity: 0.95,
                }))

                // 🟢 SINGLE / OVERLAY: keep existing behavior
                : [
                    {
                        x: anchoredPoints[0].x,
                        xref: "x",
                        y: 0.98,
                        yref: "paper",

                        text: `
<b>${new Date(anchoredPoints[0].x).toLocaleString()}</b><br><br>
${anchoredPoints
                                .map(
                                    (p) =>
                                        `<span style="color:${p.color}">▉</span>
<b>${p.tag}</b>: ${p.y}`
                                )
                                .join("<br>")}
                    `,
                        showarrow: false,
                        align: "left",
                        // bgcolor: "#ffffff",
                        bgcolor: themeVars.annotationBg,
                        // bordercolor: "#cbd5e1",
                        bordercolor: themeVars.border,
                        borderwidth: 1,
                        // font: { size: 12 },
                        font: { size: 12, color: themeVars.text },
                        opacity: 0.95,
                    },
                ]
            : [],
    };

    // Configuration like zoom in zoom out, download as image etc
    const config = {
        responsive: true,
        displaylogo: false,
        displayModeBar: true,
        modeBarButtonsToRemove: [
            "zoom",
            "pan2d",
            "select2d",
            "lasso2d",
            "resetScale2d",
            "hoverClosestCartesian",
            "hoverCompareCartesian",
            "toggleSpikelines"
        ],
        // modeBarButtonsToAdd: ["zoomIn2d", "zoomOut2d", "autoScale2d", "toImage", "toggleFullscreen"],
    };




    /* ---------------- RENDER ---------------- */

    return (
        <div>
            {/* <div id="graph-div" className="graph-div w-[100%] px-2"> */}
            <div
                id="graph-div" className={`graph-div w-[100%] px-2 ${layoutMode === "stacked" ? "graph-scroll" : ""}`}>

                <Plot
                    key={themeVersion}
                    revision={revision}
                    data={traces.map((trace, index) => ({
                        ...trace,
                        opacity: 0.6,
                        visible: trace.visible === false ? "legendonly" : true,
                        yaxis:
                            layoutMode === "single"
                                ? "y"
                                : layoutMode === "stacked"
                                    ? `y${index + 1}`
                                    : index === 0
                                        ? "y"
                                        : `y${index + 1}`,
                        hovertemplate:
                            `<span style="color:${trace.line?.color}">▉</span> ` +
                            `${trace.name}: <b>%{y}</b>` +
                            `<extra></extra>`,
                    }))}
                    // layout={layout}
                    layout={layoutWithAnchor}
                    config={config}
                    onClick={handlePointClick}
                    onRelayout={handleRelayout}
                    useResizeHandler
                    style={{ width: "100%", minHeight: layout.height }}
                    onLegendClick={(e) => {
                        toggleTraceVisibility(e.fullData[e.curveNumber].tagUID);
                        return false;
                    }}
                />
            </div>

            <div className="mt-4 w-full">
                <Table
                    visibleRows={10}
                    tableData={tableDataWithActions}
                    labels={["tagUID", "Tag Description", "Unit", "Average", "Min", "Max", "SD", "Action", "Formats", "Y Axis Ranges"]}
                />
            </div>
        </div>
    );
};





