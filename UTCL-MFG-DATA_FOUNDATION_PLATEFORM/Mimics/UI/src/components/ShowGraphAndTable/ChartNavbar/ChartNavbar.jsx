import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./ChartNavbar.css"
import {
    ActivityIcon,
    SplitSquareHorizontalIcon,
    Rows3Icon,
    LoaderCircle,
} from "lucide-react";
import Select from "react-select";

import {
    getTrendVariants,
    saveTrendVariant,
} from "../../../utils/apicalls/saveTrendVariant";
import { deleteTrendVariant } from "../../../utils/apicalls/deleteTrendVariant";

const QUICK_RANGES = [
    { key: "1D", label: "1D", value: { days: 1 } },
    { key: "2D", label: "2D", value: { days: 2 } },
    { key: "3D", label: "3D", value: { days: 3 } },
    { key: "5D", label: "5D", value: { days: 5 } },
    { key: "1W", label: "1W", value: { weeks: 1 } },
    { key: "1M", label: "1M", value: { months: 1 } },
];

const GRAPH_TYPE_OPTIONS = [
    { value: "trend", label: "Trend" },
    { value: "xy", label: "XY Plot" },
    { value: "histogram", label: "Histogram" },
    { value: "bar", label: "Bar Chart" },
];


const ChartNavbar = () => {
    const dispatch = useDispatch();
    const plotlyProvider = useSelector((state) => state.plotlyProvider);
    const graphType = plotlyProvider.graphType;
    const { filterData } = useSelector((state) => state);


    const layoutMode = plotlyProvider.layout;
    const quickRange = plotlyProvider.quickRange;
    const lastTrendPayload = plotlyProvider.lastTrendPayload;
    const plant = filterData?.plant[0]


    // 🔹 Local states
    const [variantName, setVariantName] = useState("");
    const [variantList, setVariantList] = useState([]);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [loading, setLoading] = useState(false);
    const [manualDays, setManualDays] = useState("");
    const [isApplyingRange, setIsApplyingRange] = useState(false);

    //    FETCH VARIANTS (USER SPECIFIC)
    const fetchVariants = async () => {
        const list = await getTrendVariants(plant);
        setVariantList(list || []);
    };

    useEffect(() => {
        fetchVariants();
    }, []);

    useEffect(() => {
        return () => {
            dispatch({ type: "CLEAR_QUICK_RANGE" });
            dispatch({ type: "CLEAR_ACTIVE_VARIANT" });

            // (optional but fine)
            dispatch({ type: "RESET_PLOTLY_LAYOUT" });
        };
    }, [dispatch]);

    const selectedGraphType =
        GRAPH_TYPE_OPTIONS.find((opt) => opt.value === graphType) ||
        GRAPH_TYPE_OPTIONS[0].value;


    const handleGraphTypeChange = (option) => {
        if (!option) return;

        dispatch({
            type: "SET_GRAPH_TYPE",
            payload: option.value,
        });
    };

    //    QUICK RANGE HANDLER
    const handleQuickRange = (range) => {
        dispatch({
            type: "SET_QUICK_RANGE",
            payload: {
                ...range.value,
                key: range.key,
                _ts: Date.now(),
            },
        });
    };

    // SAVE VARIANT
    const handleSaveVariant = async () => {
        if (!variantName.trim()) {
            toast.error("Variant name is required");
            return;
        }

        if (variantName.trim().length < 3) {
            toast.error("Variant name must be at least 3 characters");
            return;
        }

        if (!lastTrendPayload) {
            toast.error("Please load data (click Go) before saving variant");
            return;
        }

        try {
            setLoading(true); // ✅ START LOADER
            const response = await saveTrendVariant({
                variantName,
                requestPayload: lastTrendPayload,
                layout: layoutMode,
                graphConfig: plotlyProvider.graphConfig,
            });

            if (response?.success) {
                toast.success(response.message || "Variant saved successfully");
                setVariantName("");
                fetchVariants();
            } else {
                toast.error(response?.message || "Failed to save variant");
            }
        } catch (err) {
            toast.error("Something went wrong while saving variant");
        } finally {
            setLoading(false); // ✅ STOP LOADER (always)
        }
    };


    const deleteChartVariant = async (variantId, variantName) => {
        if (!variantId) return;

        const confirmed = window.confirm(
            `Are you sure you want to delete this ${variantName}?`
        );

        if (!confirmed) return;

        try {
            const response = await deleteTrendVariant(variantId);

            if (response?.success) {
                toast.success("Variant deleted successfully");
                // Clear selected if same variant deleted
                if (selectedVariant?.value === variantId) {
                    setSelectedVariant(null);
                    dispatch({ type: "CLEAR_ACTIVE_VARIANT" });
                }

                fetchVariants(); // refresh list
            } else {
                toast.error(response?.message || "Failed to delete variant");
            }
        } catch (err) {
            toast.error("Something went wrong while deleting");
        }
    };


    const handleManualDaysApply = async () => {
        const days = Number(manualDays);

        if (!days || days <= 0) {
            toast.error("Please enter valid number of days");
            return;
        }

        try {
            setIsApplyingRange(true);

            dispatch({
                type: "SET_QUICK_RANGE",
                payload: {
                    days,
                    key: "MANUAL_DAYS",
                    label: `${days}D`,
                    _ts: Date.now(),
                },
            });
        } finally {
            // allow Redux + effects to settle
            setManualDays("")
            setTimeout(() => setIsApplyingRange(false), 220);
        }
    };

    const variantOptions = variantList.map((v) => ({
        label: v.variantName,
        value: v.variantId,
        fullData: v, // keep full object for later
    }));

    const handleVariantSelect = (option) => {
        setSelectedVariant(option);
        if (!option) return;

        const variant = option.fullData;
        dispatch({
            type: "APPLY_TREND_VARIANT",
            payload: {
                variantId: variant.variantId,
                variantName: variant.variantName,
                requestPayload: variant.requestPayload, // ⛔ no dates inside
                layout: variant.layout || "single",
                graphConfig: variant.graphConfig,
            },
        });
    };
   const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "35px",
      height: "35px",
      border: `1px solid ${
        state.isFocused ? "var(--picker-accent)" : "var(--input-enable-border)"
      }`,
      borderRadius: "8px",
      backgroundColor: "var(--input-enable-bg)",
      fontSize: "13px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "var(--picker-accent)",
      },
    }),
 
    indicatorSeparator: () => ({
      display: "none", // ← removes the vertical line
    }),
 
    valueContainer: (base) => ({
      ...base,
      padding: "0 6px",
      height: "35px",
    }),
 
    indicatorsContainer: (base) => ({
      ...base,
      height: "35px",
    }),
 
    menu: (base) => ({
      ...base,
      fontFamily: "Inter, sans-serif",
      backgroundColor: "var(--input-enable-bg)",
      borderRadius: "8px",
      zIndex: 9999,
    }),
 
    option: (base, state) => ({
      ...base,
      fontFamily: "Inter, sans-serif",
      backgroundColor: state.isSelected
        ? "var(--picker-accent)"
        : state.isFocused
          ? "var(--picker-hover)"
          : "transparent",
      color: state.isSelected ? "#fff" : "var(--text-color)",
      cursor: "pointer",
      fontSize: "13px",
    }),
 
    multiValue: (base) => ({
      ...base,
      fontFamily: "Inter, sans-serif",
      backgroundColor: "var(--picker-hover)",
      borderRadius: "6px",
    }),
 
    multiValueLabel: (base) => ({
      ...base,
      fontFamily: "Inter, sans-serif",
      color: "var(--text-color)",
      fontSize: "12px",
    }),
 
    multiValueRemove: (base) => ({
      ...base,
      color: "var(--text-color)",
      ":hover": {
        backgroundColor: "var(--picker-accent)",
        color: "#fff",
      },
    }),
 
    singleValue: (base) => ({
      ...base,
      fontFamily: "Inter, sans-serif",
      color: "var(--text-color)",
    }),
 
    input: (base) => ({
      ...base,
      fontFamily: "Inter, sans-serif",
      color: "var(--text-color)",
    }),
 
    placeholder: (base) => ({
      ...base,
      fontFamily: "Inter, sans-serif",
      color: "var(--card-subtle)",
      fontSize: "12px",
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: 170,
      overflowY: "auto",
    }),
  };
 

  return (
    // <div className="d-flex justify-content-between mb-2 gap-2 flex-wrap">

    <div className="flex align-items-center my-1 gap-3 w-full">
      {" "}
      {/* LEFT → Time ranges */}
      <div className="flex gap-1 ml-0.5 items-center shrink-0">
        {QUICK_RANGES.map((r) => {
          const isActive = quickRange?.key === r.key;

          return (
            <button
              key={r.key}
              onClick={() => handleQuickRange(r)}
              className={`px-2 py-1 text-sm rounded-md border transition-all duration-200 text-[var(--text-color)]
            ${isActive
                  ? "bg-[#FE8F12] font-semibold"
                  : "border-[#FE8F12] bg-[var(--input-enable-bg)]"
                }`}
            >
              {r.label}
            </button>
          );
        })}

        {/* MANUAL DAYS */}
        <div className="flex items-center gap-2 ml-2">
          <input
            type="number"
            min="1"
            placeholder="Days"
            className="w-[55px] px-2 py-1 text-sm rounded-md border
          border-[var(--input-enable-border)]
          text-[var(--text-color)] bg-[var(--input-enable-bg)]
          [appearance:textfield]
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none"
            value={manualDays}
            onChange={(e) => setManualDays(e.target.value)}
          />
          <button
            className="px-2 py-1 text-sm rounded-md h-[33px] min-w-[70px]
          flex items-center justify-center
          bg-[var(--submit-button-bg)]
          text-[#111111]
          transition-all duration-200
          hover:bg-[var(--submit-button-hover-bg)]"
            onClick={handleManualDaysApply}
            disabled={isApplyingRange || manualDays.length === 0}
          >
            {isApplyingRange ? "Applying..." : "Apply"}
          </button>
        </div>
      </div>


      {/* MIDDLE → Layout */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() =>
            dispatch({ type: "SET_PLOTLY_LAYOUT", payload: "single" })
          }
          className={`flex items-center justify-center gap-1
        h-[32px] px-2 rounded-md text-[14px] font-medium transition-all duration-200
        ${layoutMode === "single"
              ? "bg-[var(--submit-button-bg)] text-[#111111]"
              : "border border-[var(--submit-button-bg)] text-[var(--text-color)] hover:bg-[var(--submit-button-hover-bg)]"
            }`}
        >
          <ActivityIcon size={16} />
          One Y-Axis
        </button>

        <button
          onClick={() =>
            dispatch({ type: "SET_PLOTLY_LAYOUT", payload: "overlay" })
          }
          className={`flex items-center justify-center gap-1
        h-[32px] px-2 rounded-md text-[14px] font-medium transition-all duration-200
        ${layoutMode === "overlay"
              ? "bg-[var(--submit-button-bg)] text-[#111111]"
              : "border border-[var(--submit-button-bg)] text-[var(--text-color)] hover:bg-[var(--submit-button-hover-bg)]"
            }`}
        >
          <SplitSquareHorizontalIcon size={16} />
          Multi Axis
        </button>

        <button
          onClick={() =>
            dispatch({ type: "SET_PLOTLY_LAYOUT", payload: "stacked" })
          }
          className={`flex items-center justify-center gap-1
        h-[32px] px-2 rounded-md text-[14px] font-medium transition-all duration-200
        ${layoutMode === "stacked"
              ? "bg-[var(--submit-button-bg)] text-[#111111]"
              : "border border-[var(--submit-button-bg)] text-[var(--text-color)] hover:bg-[var(--submit-button-hover-bg)]"
            }`}
        >
          <Rows3Icon size={16} />
          Stacked
        </button>
      </div>


      {/* RIGHT → VARIANT DROPDOWN + SAVE */}
      <div className="flex items-center gap-2 shrink-0">
        <Select
          styles={customStyles}
          placeholder="Variant"
          options={variantOptions}
          value={selectedVariant}
          onChange={handleVariantSelect}
          isClearable
          className="min-w-[100px]"
          components={{
            Option: (props) => {
              const { innerProps, innerRef, data } = props;
              return (
                <div
                  ref={innerRef}
                  {...innerProps}
                  className="flex justify-between items-center px-2 py-1"
                >
                  <span>{data.label}</span>
                  <span
                    onClick={(e) => {
                      e.stopPropagation(); // prevent selection
                      console.log("Delete:", data.value);
                      deleteChartVariant(data.value, data.label);
                    }}
                    className="text-orange-500 cursor-pointer font-semibold"
                  >
                    ✕
                  </span>
                </div>
              );
            },
          }}
        />

        <input
          type="text"
          className="h-[35px] w-[120px] px-2
        rounded-md border border-[var(--input-enable-border)]
        bg-[var(--input-enable-bg)]
        text-[14px] text-[var(--text-color)]
        placeholder:text-[var(--text-color)] placeholder:opacity-60
        outline-none transition-all duration-200"
          placeholder="Add new variant"
          value={variantName}
          onChange={(e) => setVariantName(e.target.value)}
        />

        <button
          type="button"
          disabled={
            loading || !lastTrendPayload || variantName.trim().length < 3
          }
          className="flex items-center justify-center
        h-[32px] min-w-[80px] px-2 rounded-md text-[14px] font-medium
        transition-all duration-200
        bg-[var(--submit-button-bg)] text-[#111111]
        hover:bg-[var(--submit-button-hover-bg)]"
          style={{ minWidth: "80px" }}
          onClick={handleSaveVariant}
        >
          {loading ? "Saving" : "Save"}
        </button>
      </div>

      {/* 4TH BLOCK → GRAPH TYPE */}
      <div className="shrink-0 min-w-[90px]">
        <Select
          styles={customStyles}
          value={selectedGraphType}
          onChange={handleGraphTypeChange}
          options={GRAPH_TYPE_OPTIONS}
          isSearchable={false}
        />
      </div>
    </div>
  );

};

export default ChartNavbar;
