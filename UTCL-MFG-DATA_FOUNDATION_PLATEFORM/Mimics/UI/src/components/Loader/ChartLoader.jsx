import React, { useEffect, useState } from "react";
import "./ChartLoader.css";
import adityaBirlaLogo from "../../img/AdityBirlaGroup.jpg";

const messages = [
    "Fetching kiln performance data from UltraTech plants…",
    "Analyzing clinker production trends…",
    "Calculating cement quality KPIs…",
    "Optimizing energy efficiency metrics…",
    "Preparing real-time cement industry insights…",
];

const ChartLoader = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="chart-loader-container">
            {/* Spinner + Logo */}
            <div className="spinner-wrapper">
                <div className="spinner-ring" />
                <img
                    src={adityaBirlaLogo}
                    alt="Aditya Birla Group"
                    className="spinner-logo"
                />
            </div>

            {/* Text block */}
            <div className="loader-text">
                <p className="headline">Loading Cement Analytics</p>

                {/* Fixed-height message area */}
                <div className="message-slot">
                    <p className="dynamic-text">{messages[index]}</p>
                </div>
            </div>
        </div>
    );
};

export default ChartLoader;
