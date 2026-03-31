import { useSelector } from "react-redux";
import Plot from "react-plotly.js";
import { getChartTheme } from "../../../utils/chartUtils/plotlyLayout";
import { useEffect, useState } from "react";
export const HistogramPlot = () => {
    const [themeVersion, setThemeVersion] = useState(0);
    const plotlyData = useSelector(
        (state) => state.plotlyProvider.plotlyData
    );
    const theme = getChartTheme();

    const tagGraph = plotlyData?.tagGraph || [];
    const tagTable = plotlyData?.tagTable || [];


    useEffect(() => {
        const observer = new MutationObserver(() => {
            setThemeVersion(v => v + 1);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "style"],
        });

        return () => observer.disconnect();
    }, []);
    if (tagGraph.length < 1) {
        return (
            <div className="text-center mt-3">
                Select at least 1 tag for Histogram
            </div>
        );
    }

    // 🔥 Collect all values to calculate common bins
    const allValues = tagGraph.flatMap(tag => tag.y || []);

    const min = Math.min(...allValues);
    const max = Math.max(...allValues);

    const BIN_COUNT = 15;

    const traces = tagGraph.map(tag => {

        const tagMeta = tagTable.find(t => t.tagUID === tag.uid);

        return {
            x: tag.y,
            type: "histogram",
            name: tagMeta?.["Tag Description"] || tag.name,
            opacity: 0.6,
            marker: {
                color: tag.line?.color || "#3b82f6",
            },
            nbinsx: BIN_COUNT,
            xbins: {
                start: min,
                end: max,
                size: (max - min) / BIN_COUNT,
            },
            hovertemplate:
                `<b>${tagMeta?.["Tag Description"] || tag.name}</b><br>` +
                `<b>Range</b>: %{x}<br>` +
                `<b>Count</b>: %{y}<br>` +
                `<extra></extra>`,
        };
    });

    return (
        <div>
            <Plot
                key={themeVersion}
                data={traces}
                layout={{
                    paper_bgcolor: theme.bg,
                    plot_bgcolor: theme.bg,
                    font: { color: theme.text },
                    height: 400,
                    margin: { l: 70, r: 30, t: 40, b: 70 },
                    barmode: "overlay", // 🔥 unchanged
                    xaxis: {
                        title: "Value Range",
                        // ✅ UI only additions
                        showline: true,
                        linecolor: theme.grid,
                        gridcolor: theme.grid,
                        tickcolor: theme.axis,
                        zeroline: false,
                    },
                    yaxis: {
                        title: "Frequency",
                        // ✅ UI only additions
                        showline: true,
                        linecolor: theme.axis,
                        tickcolor: theme.axis,
                        zeroline: false,
                    },
                    legend: {
                        orientation: "h",
                        x: 0.5,
                        xanchor: "center",
                        y: 1.1,
                        yanchor: "bottom",
                        // ✅ UI only
                        font: { color: theme.text }
                    },

                    // ✅ UI only
                    hoverlabel: {
                        bgcolor: theme.hoverBg,
                        bordercolor: theme.border,
                        font: { color: theme.text }
                    }
                }}
                config={{
                    responsive: true,
                    displaylogo: false,
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
                }}
                style={{ width: "100%" }}
            />
        </div>
    );
};
