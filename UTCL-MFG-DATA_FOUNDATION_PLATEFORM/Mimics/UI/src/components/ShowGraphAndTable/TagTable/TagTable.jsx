import React, { useState } from "react";
import "./TagTable.css"

export default function Table({
    tableData = [],
    labels,
    icon = "",
    redirectTo = () => { },
    visibleRows = 5,
}) {
    const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(visibleRows);
    const [selectedRow, setSelectedRow] = useState(null);

    const headers =
        labels?.length > 0
            ? labels
            : tableData.length > 0
                ? Object.keys(tableData[0])
                : [];

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...tableData].sort((a, b) => {
        if (!sortConfig.key) return 0;
        return sortConfig.direction === "asc"
            ? a[sortConfig.key] > b[sortConfig.key]
                ? 1
                : -1
            : a[sortConfig.key] < b[sortConfig.key]
                ? 1
                : -1;
    });

    const paginatedData = sortedData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    const colWidth = `${100 / headers.length}%`;

    return (
        <div className="w-full text-[10px] text-[var(--text-color)]">
            {/* TABLE */}
            <div className="w-full overflow-x-auto border rounded bg-[var(--input-enable-bg)] border-[var(--form-border)]">
                {/* <table className="table table-sm table-fixed mb-0" > */}
                <table className="w-full border-collapse text-[10px]" style={{ tableLayout: "auto" }}>
                    {/* <colgroup>
                    {headers.map((_, i) => (
                        <col key={i} style={{ width: colWidth }} />
                    ))}
                </colgroup> */}

                    <thead className="uppercase bg-[var(--bg-header)] text-white">
                         <tr className="bg-gradient-to-r from-orange-400 to-orange-300">
                            {headers.map((key) => (
                                <th
                                    key={key}
                                    onClick={() => handleSort(key)}
                                    className="cursor-pointer px-2 py-1 text-[11px] whitespace-nowrap text-center"
                                >
                                    <div className="flex justify-between items-center gap-1">
                                        <span className="truncate">{key}</span>
                                        <span className="w-3 text-center shrink-0">
                                            {sortConfig.key === key
                                                ? sortConfig.direction === "asc"
                                                    ? "▲"
                                                    : "▼"
                                                : ""}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={`cursor-pointer ${selectedRow === rowIndex ? "bg-[var(--card-bg)]" : ""
                                        } hover:bg-[var(--picker-hover)]`}
                                    onClick={() => {
                                        setSelectedRow(rowIndex);
                                        redirectTo(row);
                                    }}
                                >
                                    {headers.map((header, i) => (
                                        <td
                                            className={`px-2 py-1 ${i === 0 || i===1
                                                    ? "max-w-[160px] truncate overflow-hidden text-ellipsis"
                                                    : "whitespace-nowrap truncate"
                                                }`}
                                                title={String(row[header] ?? "-")}
                                        >
                                            {i === 0 && icon ? icon : ""}
                                            {row[header] ?? "-"}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={headers.length} className="text-center py-3 text-[var(--text-color)]">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* PAGINATION */}
            {sortedData.length > 0 && (
                <div className="flex justify-between items-center mt-2">
                    {/* LEFT */}
                    <div className="flex items-center gap-1">
                        <span>Rows:</span>
                        <select
                            className="px-2 py-[2px] rounded text-[10px] bg-[var(--input-enable-bg)] border border-[var(--form-border)] text-[var(--text-color)]"
                            value={rowsPerPage}
                            onChange={(e) => {
                                setRowsPerPage(parseInt(e.target.value, 10));
                                setPage(0);
                            }}
                        >
                            {[5, 10, 25].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-2">
                        <button
                            className="px-2 py-0 text-[10px] rounded disabled:opacity-50 border border-[var(--button-border)] bg-[var(--button-bg)] leading-[1.4] hover:bg-[var(--button-hover-bg)]"
                            disabled={page === 0}
                            onClick={() => setPage(page - 1)}
                        >
                            Prev
                        </button>

                        <span className="whitespace-nowrap text-[10px]">
                            {page + 1} / {Math.ceil(sortedData.length / rowsPerPage)}
                        </span>

                        <button
                            className="px-2 py-0 text-[10px] rounded disabled:opacity-50 border border-[var(--button-border)] bg-[var(--button-bg)] leading-[1.4] hover:bg-[var(--button-hover-bg)]"
                            disabled={(page + 1) * rowsPerPage >= sortedData.length}
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

