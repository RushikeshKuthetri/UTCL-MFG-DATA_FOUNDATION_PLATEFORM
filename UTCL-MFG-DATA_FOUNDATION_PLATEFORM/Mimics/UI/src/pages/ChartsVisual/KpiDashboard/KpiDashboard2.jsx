import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { motion } from "framer-motion";

// import { getPlants } from "../../../utils";
import { plantDetails } from "../../../data/plantDetails/plantDetails";
import GaugeChart from "./Gauge";
import styles from "./KpiDasboard.module.css";
import useFetch from "./useFetch";
import { TableRow1 } from "./TableRow1";
import { TableRow2 } from "./TableRow2";
import ColumnChart from "./ColumnChart";

const tabs = [
  ["kiln", "Kiln"],
  ["cem m", "CementMill"],
  // ["raw m", "Raw Mill"],
  // ["coal m", "Coal Mill"],
];

export function KpiDashboard2() {
  const [activeTab, setActiveTab] = useState(tabs[0][0]);
  const [initialSection, setInitialSection] = useState(tabs[0][1]);
  const [selectedPlant, setSelectedPlant] = useState("RC");
  const [plantOptions, setPlantOPtions] = useState([]);

  const selectStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "black",
      color: "white",
      height: ".5vw",
      border: isFocused ? "none" : "none",
      outline: "none",
      boxShadow: isFocused && "none",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "white",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "yellow"
        : state.isFocused
        ? "yellow"
        : "white",
      color: "black",
      fontSize: "1vw",
    }),

    input: (provided, state) => ({
      ...provided,
      color: "white",
    }),
  };

  const tabClickHandler = (tab) => {
    setActiveTab(tab[0]);
    setInitialSection(tab[1]);
  };

  const tabButtons = tabs.map((tab) => (
    <div
      onClick={() => {
        tabClickHandler(tab);
      }}
      className={`${styles.tab}`}
      key={tab}
    >
      {tab[0]}
      {activeTab === tab[0] && (
        <motion.div
          layoutId="tab-indicator"
          className={styles.active_tab_indicator}
        />
      )}
    </div>
  ));

  const getPlants = (plants) => {
    return plants?.map((plant) => {
      return { label: plant.id, value: plant.name };
    });
  };

  // useEffect(() => {
  //   const options = getPlants(plantDetails);
  //   setPlantOPtions([...options]);
  // }, []);

  const SectionPage = React.lazy(() =>
    import(`./${initialSection}/${initialSection}.jsx`)
  );

  return (
    <Container
      style={{ minHeight: "100vh" }}
      fluid
      className={styles.container}
    >
      <Row type="ActionBar">
        <Col lg={4} md={4} className={styles.plant}>
          <p> KPI Dashbopard -</p>

          <Select
            isSearchable={true}
            unstyled={true}
            styles={selectStyles}
            options={getPlants(plantDetails)}
            onChange={(plant) => setSelectedPlant(plant.label)}
          />
        </Col>
        <Col className={styles.date_picker} lg={4} md={4}></Col>
        <Col lg={4} md={4} className={styles.tab_buttons}>
          {tabButtons}
        </Col>
      </Row>
      <Row type="Headers" className={styles.headers_row}>
        <Col lg={4} md={4} sm={4} className={styles.plant}>
          Run Hours
        </Col>

        <Col lg={4} md={4} sm={4} className={styles.plant}>
          Production in MT
        </Col>

        <Col lg={4} md={4} sm={4} className={styles.plant}>
          Power/MT
        </Col>
      </Row>
      <SectionPage />
    </Container>
  );
}

export default KpiDashboard2;
