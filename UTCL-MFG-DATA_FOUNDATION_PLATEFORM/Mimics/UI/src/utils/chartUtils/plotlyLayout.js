export const GLOBAL_Y_AXIS_KEY = "__GLOBAL__";
export const getChartTheme = () => {
    const css = getComputedStyle(document.documentElement);

    return {
        bg: css.getPropertyValue("--bg-color").trim(),
        text: css.getPropertyValue("--text-color").trim(),
        grid: css.getPropertyValue("--form-border").trim(),
        axis: css.getPropertyValue("--text-color").trim(),
        spike: css.getPropertyValue("--picker-accent").trim(),
        border: css.getPropertyValue("--form-border").trim(),
        annotationBg: css.getPropertyValue("--card-bg").trim(),
        hoverBg: css.getPropertyValue("--picker-hover").trim(),
        // stripBg = css.getPropertyValue("--mimic-line").trim();
    };
};

export const getSingleLayout = (data, yAxisRanges = {}) => {
    const theme = getChartTheme();
    const signal = data[0];
    const isVisible = signal?.visible !== false;
    const rangeConfig = yAxisRanges?.[signal?.uid] ?? {};
    const hasRange =
        Number.isFinite(rangeConfig.min) &&
        Number.isFinite(rangeConfig.max) &&
        rangeConfig.min < rangeConfig.max;

    const layout = {
        // paper_bgcolor: "#F6F5F3",
        // plot_bgcolor: "#F6F5F3",
        // font: { color: "#1a1c1f" },

        paper_bgcolor: theme.bg,
        plot_bgcolor: theme.bg,
        font: { color: theme.text },

        xaxis: {
            title: "Time",
            automargin: true,
            domain: [0, 1],
            anchor: "y",
            showline: true,
            linecolor: theme.grid,
            gridcolor: theme.grid,
            tickcolor: theme.axis,
            showgrid: isVisible,
            // gridcolor: isVisible ? "#475569" : "transparent",
            zeroline: false,

            // ✅ Match overlay layout vertical hover line
            showspikes: true,
            spikemode: "across",
            spikesnap: "cursor",
            spikecolor: "rgba(37, 40, 43)", // semi-transparent white
            spikethickness: 1, // thinner line
            spikedash: "solid", // dashed
            spikevalign: "bottom", // timestamp at bottom
        },

        yaxis: {
            title: "",
            side: "left",
            showline: true,
            linecolor: theme.axis,
            tickcolor: theme.axis,
            linewidth: 1,
            ticks: "outside",
            ticklen: 8,
            tickwidth: 2,
            // tickcolor: "#1a1c1f",
            showticklabels: true,
            showgrid: false,
            zeroline: false,
            // autorange: signal?.range ? false : true,
            // range: signal?.range || undefined,
            // rangemode: "normal"
            autorange: !hasRange,
            range: hasRange
                ? [rangeConfig.min, rangeConfig.max]
                : undefined,
            rangemode: "normal",
        },

        legend: { visible: false }, // hide legend

        margin: { t: 25, b: 40, l: 40, r: 25 },
        dragmode: "zoom",
        hovermode: "x", // hover along x-axis
        clickmode: "event+select",
        uirevision: "keep-hover",
        hoverlabel: {
            namelength: 0, // remove tag names
        },
    };

    return layout;
};

export const getOverlayLayout = (data, yAxisRanges = {}) => {
    const theme = getChartTheme();
    const axisSpacing = 0.04;
    const totalSpace = axisSpacing * (data.length - 0.75);

    const allHidden = data.every((signal) => signal.visible === false);

    const layout = {
        // paper_bgcolor: "#F6F5F3",
        // plot_bgcolor: "#F6F5F3",
        // font: { color: "#1a1c1f" },
        paper_bgcolor: theme.bg,
        plot_bgcolor: theme.bg,
        font: { color: theme.text },
        xaxis: {
            title: "Time",
            automargin: true,
            domain: [totalSpace, 1],
            anchor: `y${data.length}`,
            showline: true,
            // linecolor: "#475569",
            // gridcolor: !allHidden ? "#475569" : "transparent",
            linecolor: theme.grid,
            gridcolor: theme.grid,
            showgrid: !allHidden,
            zeroline: false,

            showspikes: true,
            spikemode: "across",
            spikesnap: "cursor",
            // spikecolor: "rgba(37, 40, 43)",
            spikecolor: theme.spike,
            spikethickness: 1,
            spikedash: "solid",
            spikevalign: "bottom",
        },
        legend: {
            orientation: "h",
            x: 0.5,
            xanchor: "center",
            y: -0.05,
            yanchor: "top",
            visible: false,
        },
        margin: { t: 25, b: 40, l: 40, r: 25 },
        dragmode: "zoom",
        clickmode: "event+select",
        uirevision: "keep-hover",
        hovermode: "x",
        hoverlabel: { namelength: 0 },
    };

    // Add multiple y-axes
    data.forEach((signal, index) => {
        const axisName = index === 0 ? "yaxis" : `yaxis${index + 1}`;
        const isVisible = signal.visible !== false;

        // 🔑 Y-axis range logic (DEFAULT auto, manual only if both values exist)
        const rangeConfig = yAxisRanges?.[signal?.uid] ?? {};
        const hasRange =
            Number.isFinite(rangeConfig.min) &&
            Number.isFinite(rangeConfig.max) &&
            rangeConfig.min < rangeConfig.max;
        layout[axisName] = {
            title: "",
            side: "left",
            overlaying: index === 0 ? undefined : "y",
            position: index * axisSpacing,
            automargin: true,

            showline: isVisible,
            // linecolor: signal.line?.color || "#1a1c1f",
            // tickcolor: signal.line?.color || "#1a1c1f",
            linecolor: signal.line?.color || theme.axis,
            tickcolor: signal.line?.color || theme.axis,
            linewidth: 1,
            ticks: isVisible ? "outside" : "",
            ticklen: isVisible ? 8 : 0,
            tickwidth: isVisible ? 2 : 0,
            showticklabels: isVisible,

            showgrid: false,
            gridcolor: "transparent",
            zeroline: false,

            autorange: !hasRange,
            range: hasRange
                ? [rangeConfig.min, rangeConfig.max]
                : undefined,
            rangemode: "normal",
        };
    });

    return layout;
};


export const getStackedLayout = (data, yAxisRanges = {}) => {
    const theme = getChartTheme();
    const numSignals = data.length;
    const gap = 0.02;
    const domainHeight = (1 - gap * (numSignals - 1)) / numSignals;

    const layout = {
        // paper_bgcolor: "#F6F5F3",
        // plot_bgcolor: "#F6F5F3",
        // font: { color: "#1a1c1f" },

        paper_bgcolor: theme.bg,
        plot_bgcolor: theme.bg,
        font: { color: theme.text },

        xaxis: {
            title: "Time",
            automargin: true,
            domain: [0, 1],
            anchor: `y${numSignals}`,
            showline: true,
            // linecolor: "#475569",
            // gridcolor: "#475569",
            // spikecolor: "rgba(37, 40, 43)",
            linecolor: theme.grid,
            gridcolor: theme.grid,
            spikecolor: theme.spike,
            zeroline: false,

            showspikes: true,
            spikemode: "across",
            spikesnap: "cursor",
            spikethickness: 1,
            spikedash: "solid",
            spikevalign: "bottom",
        },
        clickmode: "event+select",
        uirevision: "keep-hover",
        hovermode: "x",
        hoverlabel: { namelength: 0 },

        legend: { visible: false },
        margin: { t: 25, b: 40, l: 45, r: 35 },
        dragmode: "zoom",
        shapes: [],
    };

    data.forEach((signal, index) => {
        const axisName = index === 0 ? "yaxis" : `yaxis${index + 1}`;
        const domainStart = 1 - (index + 1) * domainHeight - index * gap;
        const domainEnd = 1 - index * domainHeight - index * gap;
        const isVisible = signal.visible !== false;

        if (index % 2 === 0) {
            layout.shapes.push({
                type: "rect",
                xref: "paper",
                yref: "paper",
                x0: 0,
                x1: 1,
                y0: domainStart,
                y1: domainEnd,
                fillcolor: "rgba(120,120,120,0.15)",
                // fillcolor: getComputedStyle(document.documentElement)
                //     .getPropertyValue("--mimic-line")
                //     .trim(),
                line: { width: 0 },
                layer: "below",
            });
        }

        // 🔑 Y-axis range logic (auto by default, manual only when both exist)
        const rangeConfig = yAxisRanges?.[signal?.uid] ?? {};
        const hasRange =
            Number.isFinite(rangeConfig.min) &&
            Number.isFinite(rangeConfig.max) &&
            rangeConfig.min < rangeConfig.max;
        layout[axisName] = {
            title: "",
            side: "left",
            showline: true,
            // linecolor: signal.line?.color || "#1a1c1f",
            // tickcolor: signal.line?.color || "#1a1c1f",
            linecolor: signal.line?.color || theme.axis,
            tickcolor: signal.line?.color || theme.axis,
            linewidth: 1,
            ticks: isVisible ? "outside" : "",
            ticklen: isVisible ? 8 : 0,
            tickwidth: 2,
            showticklabels: isVisible,
            showgrid: true,
            gridcolor: "rgba(71, 85, 105, 0.25)",
            zeroline: false,
            domain: [domainStart, domainEnd],
            anchor: index === numSignals - 1 ? "x" : undefined,
            autorange: !hasRange,
            range: hasRange
                ? [rangeConfig.min, rangeConfig.max]
                : undefined,
            rangemode: "normal",
        };
    });

    return layout;
};

