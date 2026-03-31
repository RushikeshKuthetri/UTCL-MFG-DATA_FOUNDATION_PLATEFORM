import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
// import "./TagSelectionModal.css";

const TagSelectionModal = ({
    isOpen,
    tags = [],
    selectedTags = [],
    onApply,
    onClose,
}) => {
    const isBrowser = typeof window !== "undefined";

    const [search, setSearch] = useState("");
    const [tempSelected, setTempSelected] = useState([]);
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    /* ------------------ INIT WHEN OPEN ------------------ */
    useEffect(() => {
        if (isOpen) {
            setTempSelected(selectedTags); // snapshot
            setSearch("");
            setPage(0);
        }
    }, [isOpen, selectedTags]);

    /* ------------------ BOOTSTRAP BACKDROP ------------------ */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    /* ------------------ FILTER (NO REORDERING) ------------------ */
    const processedTags = useMemo(() => {
        const filtered = tags.filter(tag =>
            tag.label?.toLowerCase().includes(search.toLowerCase())
        );

        // IMPORTANT: use selectedTags, NOT tempSelected
        const selectedSet = new Set(selectedTags);

        const selected = [];
        const unselected = [];

        filtered.forEach(tag => {
            if (selectedSet.has(tag.value)) {
                selected.push(tag);
            } else {
                unselected.push(tag);
            }
        });

        return [...selected, ...unselected];
    }, [tags, search, selectedTags]);


    const totalPages = Math.ceil(processedTags.length / rowsPerPage);

    const paginatedTags = useMemo(() => {
        return processedTags.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
        );
    }, [processedTags, page]);

    if (!isBrowser || !isOpen) return null;

    const toggleTag = (value) => {
        setTempSelected(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
        // ✅ DO NOT reset page
    };

    const handleCancel = () => {
        setTempSelected([]);   // ✅ clear temp state
        setSearch("");
        setPage(0);
        onClose();
    };

    const escapeRegex = (str = "") =>
        str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const highlightText = (text = "", highlight = "") => {
        if (!highlight.trim()) return text;

        const escaped = escapeRegex(highlight.trim());
        const regex = new RegExp(`(${escaped})`, "gi");

        return text.split(regex).map((part, index) =>
            regex.test(part) ? (
                <span
                    key={index}
                    className="bg-[var(--picker-accent)] text-white px-1 rounded"
                >
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    const handleCommaSelection = (inputValue) => {
        // split by comma
        let inpArr = inputValue.split(",");

        // clean values (remove spaces + empty)
        inpArr = inpArr
            .map((val) => val.trim().toLowerCase())
            .filter((val) => val !== "");

        let matched = [];

        tags.forEach((tag) => {
            const label = tag.label
                ?.toLowerCase()
                ?.replaceAll(" ", "")
                ?.replaceAll(",", "")
                ?.split("_:")[0];

            const value = tag.value?.toLowerCase()?.split("_:")[0];

            inpArr.forEach((val) => {
                const cleanVal = val.replaceAll(" ", "");

                // ✅ flexible matching (IMPORTANT)
                if (
                    label?.includes(cleanVal) ||
                    value?.includes(cleanVal)
                ) {
                    matched.push(tag.value);
                }
            });
        });

        // ✅ merge + remove duplicates
        setTempSelected((prev) => {
            const combined = [...prev, ...matched];
            return [...new Set(combined)];
        });
    };

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={onClose} // click outside closes
        >
            {/* MODAL WRAPPER */}
            <div
                className="w-[60%] max-w-[60%] max-lg:w-[95%]"
                onClick={(e) => e.stopPropagation()} // 🔥 IMPORTANT
            >
                {/* MODAL CONTENT */}
                <div className="rounded-xl shadow-2xl bg-[var(--bg-main-container)] text-[var(--text-color)]">

                    {/* HEADER */}
                    <div className="relative flex items-center justify-center p-2 border-b border-[var(--form-border)]">
                        <h2 className="text-lg font-semibold">
                            Select Tags
                        </h2>

                        <button
                            onClick={handleCancel}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            <IoClose size={22} />
                        </button>
                    </div>

                    {/* BODY */}
                    <div className="p-1">

                        {/* SEARCH */}
                        <input
                            type="text"
                            placeholder="Search tags or Use comma separated values to copy and paste multiple tags"
                            value={search}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSearch(value);
                                setPage(0);

                                // only trigger when user completes a tag
                                if (value.endsWith(",")) {
                                    handleCommaSelection(value);
                                    setSearch(""); // 🔥 clear input after selection
                                }
                            }}
                            className="w-full mb-3 px-3 py-2 border rounded-md
                            placeholder:text-[12px]
             bg-[var(--input-enable-bg)] 
             border-[var(--form-border)]
             text-[var(--text-color)]
             placeholder-[var(--search-placeholder)]
             caret-[var(--text-color)]
             focus:outline-none
             focus:border-[var(--picker-accent)]
             focus:ring-1 focus:ring-[var(--picker-accent)]"
                            style={{
                                color: "var(--text-color)",              // ✅ fallback
                                WebkitTextFillColor: "var(--text-color)" // 🔥 MAIN FIX
                            }}
                        />

                        {/* TABLE */}
                        <div className="max-h-[55vh] overflow-auto border rounded-md border-[var(--form-border)]">
                            <table className="w-full text-md">

                                <thead className="sticky top-0 z-10">
                                    <tr>
                                        <th className="w-[40px] text-center bg-[var(--picker-accent)]"></th>
                                        <th className="bg-[var(--picker-accent)] text-center text-xs font-semibold">
                                            Tag and Tag Description
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {paginatedTags.map(tag => (
                                        <tr
                                            key={tag.value}
                                            className="hover:bg-[var(--picker-hover)]"
                                        >
                                            <td className="text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={tempSelected.includes(tag.value)}
                                                    onChange={() => toggleTag(tag.value)}
                                                    className="accent-[var(--picker-accent)] cursor-pointer"
                                                />
                                            </td>

                                            <td className="text-sm font-medium break-words">
                                                {highlightText(tag.label, search)}
                                            </td>
                                        </tr>
                                    ))}

                                    {paginatedTags.length === 0 && (
                                        <tr>
                                            <td colSpan={2} className="text-center py-3">
                                                No tags found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* PAGINATION */}
                        {totalPages > 1 && (
                            <div className="flex justify-between items-center mt-3">
                                <button
                                    disabled={page === 0}
                                    onClick={() => setPage(p => p - 1)}
                                    className="px-3 py-1 text-sm border rounded 
                           border-[var(--form-border)]
                           hover:border-[var(--picker-accent)]
                           hover:text-[var(--picker-accent)]
                           disabled:opacity-50"
                                >
                                    Prev
                                </button>

                                <span className="text-xs font-medium">
                                    Page {page + 1} of {totalPages}
                                </span>

                                <button
                                    disabled={page + 1 >= totalPages}
                                    onClick={() => setPage(p => p + 1)}
                                    className="px-3 py-1 text-sm border rounded 
                           border-[var(--form-border)]
                           hover:border-[var(--picker-accent)]
                           hover:text-[var(--picker-accent)]
                           disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>

                    {/* FOOTER */}
                    <div className="flex justify-end gap-2 p-2 border-t border-[var(--form-border)]">

                        <button
                            onClick={handleCancel}
                            className="px-3 py-1 text-sm border rounded 
                       border-[var(--form-border)]
                       hover:border-[var(--picker-accent)]
                       hover:text-[var(--picker-accent)]"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => onApply(tempSelected)}
                            className="px-3 py-1 text-sm rounded text-white
                       bg-[var(--picker-accent)]
                       hover:bg-[var(--button-hover-bg)]"
                        >
                            Add Tags ({tempSelected.length})
                        </button>
                    </div>

                </div>
            </div>
        </div>,
        document.body
    );
};

export default TagSelectionModal;
