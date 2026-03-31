import { useSelector } from "react-redux";
import Plot from "react-plotly.js";
import { getChartTheme } from "../../../utils/chartUtils/plotlyLayout";
import { useEffect, useState } from "react";
export const BarChart = () => {
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
                Select at least 1 tag for Bar Chart
            </div>
        );
    }

    // ✅ Get selected tags only
    const selectedTags = tagTable.filter(t =>
        tagGraph.some(g => g.uid === t.tagUID)
    );

    const MAX_LABEL_LENGTH = 25;

    const fullLabels = selectedTags.map(
        t => t["Tag Description"] || t.tagUID
    );

    const xLabels = fullLabels.map(label =>
        label.length > MAX_LABEL_LENGTH
            ? label.substring(0, MAX_LABEL_LENGTH) + "..."
            : label
    );

    const yValues = selectedTags.map(t => t.Average);

    const colors = selectedTags.map(t => {
        const trace = tagGraph.find(g => g.uid === t.tagUID);
        return trace?.line?.color || "#3b82f6";
    });

    const data = [
        {
            x: xLabels,
            y: yValues,
            type: "bar",
            marker: {
                color: colors,
            },
            text: yValues.map(val => val.toFixed(2)),
            textposition: "outside",
            cliponaxis: false, // 🔥 prevents text cut
            hovertemplate:
                `<b>%{x}</b><br>` +
                `<b>Average</b>: %{y}<br>` +
                `<extra></extra>`,
        },
    ];

    return (
        <div>
            <Plot
                key={themeVersion}
                data={data}
                layout={{
                    paper_bgcolor: theme.bg,
                    plot_bgcolor: theme.bg,
                    font: { color: theme.text },

                    height: 450,
                    margin: { l: 70, r: 30, t: 60, b: 140 },
                    barmode: "group", // ✅ unchanged

                    xaxis: {
                        title: "Tags",
                        tickangle: -45,
                        automargin: true,

                        // ✅ UI enhancements only
                        showline: true,
                        linecolor: theme.grid,
                        gridcolor: theme.grid,
                        tickcolor: theme.axis,
                        zeroline: false,
                    },

                    yaxis: {
                        title: "Average Value",
                        automargin: true,

                        // ✅ UI enhancements only
                        showline: true,
                        linecolor: theme.axis,
                        tickcolor: theme.axis,
                        zeroline: false,
                    },

                    bargap: 0.4,
                    showlegend: false,

                    // ✅ added (UI only)
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
