const initialState = {
    plotlyData: {},
    layout: "single",
    graphType: "trend",
    customDate: "",
    quickRange: null,        // for date communication
    lastTrendPayload: null,  // saved filter payload
    activeVariant: null,   // currently applied variant
    saveVariantError: "", //  to show error if saving variant fail
    // 👇 NEW: saved graph configuration (variant related)
    graphConfig: {
        tracesByTag: {},          // { tagUID: { visible, line } }
        yAxisRangesByTag: {},     // { tagUID: { min, max } }
        singleYAxisRange: {
            min: null,
            max: null,
        },
    },
    XaxisScrollDates: {
        startDate: null,
        endDate: null
    }
};


export const plotlyReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_PLOTLY_DATA":
            return {
                ...state,
                plotlyData: {
                    tagGraph: action.payload?.tagGraph || {},
                    tagTable: action.payload?.tagTable || {},
                },
            };

        case "SET_PLOTLY_LAYOUT":
            return {
                ...state,
                layout: action.payload, // "single" | "overlay" | "stacked"
            };

        case "SET_GRAPH_CONFIG":
            return {
                ...state,
                graphConfig: {
                    tracesByTag: action.payload.tracesByTag || {},
                    yAxisRangesByTag: action.payload.yAxisRangesByTag || {},
                    singleYAxisRange: action.payload.singleYAxisRange || {
                        min: null,
                        max: null,
                    },
                },
            };

        // 👇 NEW CASE (used by ChartNavbar)
        case "SET_QUICK_RANGE":
            return {
                ...state,
                quickRange: action.payload,
            };

        case "SET_LAST_TREND_PAYLOAD": {
            return {
                ...state,
                lastTrendPayload: action.payload,
            };
        }

        case "SAVE_VARIANT_ERROR":
            return {
                ...state,
                saveVariantError: action.payload,
            };


        // case "RESET_PLOTLY":
        //     return initialState;

        // case "TOGGLE_TRACE":
        //     return {
        //         ...state,
        //         plotlyData: {
        //             ...state.plotlyData,
        //             tagGraph: state.plotlyData.tagGraph.map((trace) =>
        //                 trace.name === action.payload
        //                     ? { ...trace, visible: trace.visible === false ? true : false }
        //                     : trace
        //             ),
        //         },
        //     };

        // case "REMOVE_TRACE":
        //     return {
        //         ...state,
        //         plotlyData: {
        //             ...state.plotlyData,
        //             tagGraph: state.plotlyData.tagGraph.filter(
        //                 (trace) => trace.name !== action.payload
        //             ),
        //         },
        //     };

        // case "UPDATE_TRACE_COLOR":
        // return {
        //     ...state,
        //     plotlyData: {
        //         ...state.plotlyData,
        //         tagGraph: state.plotlyData.tagGraph.map((trace) =>
        //             trace.name === action.payload.tag
        //                 ? {
        //                     ...trace,
        //                     line: {
        //                         ...trace.line,
        //                         color: action.payload.color,
        //                     },
        //                 }
        //                 : trace
        //         ),
        //     },
        // };
        case "APPLY_TREND_VARIANT":
            return {
                ...state,
                activeVariant: action.payload,
                lastTrendPayload: action.payload.requestPayload,
                layout: action.payload.layout,
                graphConfig: action.payload.graphConfig,
            };


        case "CLEAR_QUICK_RANGE":
            return {
                ...state,
                quickRange: null,
            };

        case "CLEAR_ACTIVE_VARIANT":
            return {
                ...state,
                activeVariant: null,
            };

        case "RESET_PLOTLY_LAYOUT":
            return {
                ...state,
                layout: "single", // default
                graphType: "trend",
            };

        case "SET_X_AXIS_SCROLL_DATES":
            return {
                ...state,
                XaxisScrollDates: {
                    ...state.XaxisScrollDates,   // 🔥 keep existing endDate
                    startDate: action.payload.startDate,
                },
            };
        case "SET_GRAPH_TYPE":
            return {
                ...state,
                graphType: action.payload,
            };

        default:
            return state;
    }
};





