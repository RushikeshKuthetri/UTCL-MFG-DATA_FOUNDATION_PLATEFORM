

// Feature added by TRIDAI - Plant Overview in Rawan Plant

import { useDispatch } from "react-redux";
import { plantOverviewTagList, plantOverviewColumns, plantOverviewRows } from "../../../../../data/rawan/line 3/PlantOverviewData/PlantOverviewData";
import { BlackContainerPlantOverview } from "../../../../BlackContainerPlantOverview/BlackContainerPlantOverview";
import { useEffect, useMemo } from "react";


// ------------------------------------------------------------
// 1️⃣ BUILD number → tag mapping from Excel SL No. (1–49)
// ------------------------------------------------------------

const numberToTag = {};

plantOverviewTagList.forEach((item) => {
    numberToTag[item.slNo] = {
        label: item.key,
        assetId: item.assetId,
        propertyId: item.propertyId,
        unit: item.unit,
    };
});

// ✅ Auto-fill if any SL No is still missing between 1–49
for (let i = 1; i <= 49; i++) {
    if (!numberToTag[i]) {
        numberToTag[i] = {
            label: `TAG_NOT_AVAILABLE_${i}`,
            assetId: null,
            propertyId: null,
            unit: ""
        };
    }
}

// ------------------------------------------------------------
// 3️⃣ Plant Overview TABLE COMPONENT
// ------------------------------------------------------------

export const PlantOverviewRawan = () => {
    const dispatch = useDispatch()

    const tagNames = useMemo(() => {
        return plantOverviewTagList.filter(
            tag => !tag.key?.startsWith("TAG_NOT_AVAILABLE")
        );
    }, []);;
    useEffect(() => {
        dispatch({
            type: "ADD_PLANT_BASED_TAGNAMES",
            payload: { tagNames: tagNames }
        });
        dispatch({
            type: "SECTION_TAGS_DETAILS",
            payload: { tagNames: tagNames }

        });
        dispatch({
            type: "HO_TAGS_DETAILS",
            payload: { tagNames: tagNames }
        });
        dispatch({
            type: "ADDITIONAL_SECTION_TAGS_DETAILS",
            payload: { tagNames: tagNames }
        });
    }, [])
    return (
        <div className="table-responsive border" style={{ marginTop: "10px" }}>
            <table
                className="table text-center mb-0"
                style={{
                    borderCollapse: "separate",
                    borderSpacing: "0",
                    width: "100%",
                }}
            >

                {/* HEADER */}
                <thead>
                    <tr>
                        <th
                            className="text-center"
                            style={{
                                background: "#2b57a4",
                                color: "white",
                                padding: "10px",
                                fontWeight: "bold",
                                border: "1px solid #1e3d73",
                            }}
                        >
                            PARAMETERS
                        </th>

                        {plantOverviewColumns.map((col, index) => (
                            <th
                                key={index}
                                className="text-center"
                                style={{
                                    background: "#2b57a4",
                                    color: "white",
                                    padding: "10px",
                                    fontWeight: "bold",
                                    border: "1px solid #1e3d73",
                                }}
                            >
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {plantOverviewRows.map((row, rIndex) => (
                        <tr
                            key={rIndex}
                            style={{
                                background: "#0e6269", // teal like screenshot
                                color: "#fff",
                                height: "48px",
                                borderBottom: "1px solid #144d52",
                            }}
                        >
                            {/* LEFT LABEL */}
                            <td
                                className="text-left fw-bold"
                                style={{
                                    paddingLeft: "10px",
                                    border: "1px solid #144d52",
                                    width: "180px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {row.label}
                            </td>

                            {/* DATA CELLS */}
                            {plantOverviewColumns.map((col, cIndex) => {
                                const cellNumbers = col.tags[rIndex] || [];

                                return (
                                    <td
                                        key={cIndex}
                                        style={{
                                            border: "1px solid #144d52",
                                            verticalAlign: "middle",
                                            padding: "4px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "4px",
                                                minHeight: "40px",
                                            }}
                                        >
                                            {cellNumbers.length === 0 ? (
                                                <span style={{ opacity: 0.0 }}></span>
                                            ) : (
                                                cellNumbers.map((num, i) => (
                                                    <BlackContainerPlantOverview
                                                        key={i}
                                                        data={{
                                                            label: numberToTag[num].label,
                                                            unit: numberToTag[num].unit,
                                                            useClass: "textColor",
                                                            unitColor: "unitColor",
                                                        }}
                                                    />
                                                ))
                                            )}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};


