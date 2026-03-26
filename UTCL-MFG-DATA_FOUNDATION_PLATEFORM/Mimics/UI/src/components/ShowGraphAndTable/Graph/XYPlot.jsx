import { useSelector } from "react-redux";
import Plot from "react-plotly.js";
import { getChartTheme } from "../../../utils/chartUtils/plotlyLayout";
import { useEffect, useState } from "react";

export const XYPlot = () => {
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

    if (tagGraph.length < 2) {
        return (
            <div
                style={{
                    minHeight: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <h1>Select at least 2 tags for XY Plot</h1>
            </div>
        );
    }

    const tag1 = tagGraph[0];
    const tag2 = tagGraph[1];

    const tag1Meta = tagTable.find(t => t.tagUID === tag1.uid);
    const tag2Meta = tagTable.find(t => t.tagUID === tag2.uid);

    const minLength = Math.min(tag1.y.length, tag2.y.length);

    const xValues = tag1.y.slice(0, minLength);
    const yValues = tag2.y.slice(0, minLength);

    const timeValues = tag1.x
        .slice(0, minLength)
        .map((time) => {
            const date = new Date(time);
            return date.toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
        });

    const data = [
        {
            x: xValues,
            y: yValues,
            customdata: timeValues,
            type: "scatter",
            mode: "markers",
            name: `${tag2.name} vs ${tag1.name}`,
            marker: {
                color: tag1.line?.color || "#3b82f6",
                size: 5,
            },
            hovertemplate:
                `<b>Date:</b> %{customdata}<br>` +
                `<b>${tag2.name}</b>: %{y}<br>` +
                `<b>${tag1.name}</b>: %{x}<br>` +
                `<extra></extra>`,
        },
    ];

    const config = {
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
    };

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
                    margin: { l: 80, r: 40, t: 40, b: 80 },
                    xaxis: {
                        title: {
                            text: `${tag1Meta?.["Tag Description"] || tag1.name} (${tag1Meta?.Unit || ""})`,
                            font: { size: 13, color: theme.text }
                        },
                        zeroline: false,
                        showline: true,
                        linecolor: theme.grid,
                        gridcolor: theme.grid,
                        tickcolor: theme.axis,
                        // ✅ UI consistency improvement
                        ticks: "outside",
                        ticklen: 6,
                        tickwidth: 1,
                    },
                    yaxis: {
                        title: {
                            text: `${tag2Meta?.["Tag Description"] || tag2.name} (${tag2Meta?.Unit || ""})`,
                            font: { size: 13, color: theme.text }
                        },
                        zeroline: false,
                        showline: true,
                        linecolor: theme.axis,
                        tickcolor: theme.axis,

                        // ✅ UI consistency improvement
                        ticks: "outside",
                        ticklen: 6,
                        tickwidth: 1,
                    },

                    hovermode: "closest",

                    hoverlabel: {
                        bgcolor: theme.hoverBg,
                        bordercolor: theme.border,
                        font: { color: theme.text }
                    },

                    showlegend: true,

                    legend: {
                        orientation: "h",
                        x: 0.5,
                        xanchor: "center",
                        y: 1.05,
                        yanchor: "bottom",
                        font: { size: 11, color: theme.text }
                    }
                }}
                config={config}
                style={{ width: "100%" }}
            />

        </div>
    );
};
