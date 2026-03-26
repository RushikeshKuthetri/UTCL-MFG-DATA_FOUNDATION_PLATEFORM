import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

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
  ["cem m", "Cement Mill"],
  // ["raw m", "Raw Mill"],
  // ["coal m", "Coal Mill"],
];

export function KpiDashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0][0]);
  const [initialSection, setInitialSection] = useState(tabs[0][1]);
  const [selectedPlant, setSelectedPlant] = useState("RC");
  const [plantOptions, setPlantOPtions] = useState([]);
  const [rhSeries, sRh] = useState([]);

  // const [startDate, setStartDate] = useState(new Date());

  const { email, token } = JSON.parse(localStorage.getItem("login"));
  console.log(email, token);

  const {
    loading: isLoadingMtd,
    error: errorMtd,
    data: dataMtd,
  } = useFetch(
    "https://i4.utclconnect.com/uat/KPI_Dashboard_MTD",
    {
      userId: email,
      plant: `${selectedPlant}`,
      section: `${initialSection}`,
      Tag_Type: ["Run Hours", "Production", "Total Power"],
    },
    token
  );

  console.log("mtd", isLoadingMtd, errorMtd, dataMtd);

  const {
    loading: isLoadingToday,
    error: errorToday,
    data: dataToday,
  } = useFetch(
    "https://i4.utclconnect.com/uat/KPI_Dashboard_Today",
    {
      userId: email,
      plant: `${selectedPlant}`,
      section: `${initialSection}`,
      // section: "Cement Mill",
      Tag_Type: ["Run Hours", "Production", "Total Power"],
    },
    token
  );
  console.log("today", isLoadingToday, errorToday, dataToday);

  const {
    loading: productionLoading,
    error: productionError,
    data: dataProduction,
  } = useFetch(
    "https://i4.utclconnect.com/uat/KPI_Dashboard_Today_Graph",
    {
      userId: email,
      plant: `${selectedPlant}`,
      section: `${initialSection}`,
      Tag_Type: "Production",
    },
    token
  );
  console.log("prod", productionLoading, productionError, dataProduction);

  const {
    loading: runLoading,
    error: runError,
    data: dataRunHours,
  } = useFetch(
    "https://i4.utclconnect.com/uat/KPI_Dashboard_Today_Graph",
    {
      userId: email,
      plant: `${selectedPlant}`,
      section: `${initialSection}`,
      Tag_Type: "Run Hours",
    },
    token
  );
  console.log("run", runLoading, runError, dataRunHours);

  const {
    loading: powerLoading,
    error: powerError,
    data: dataPower,
  } = useFetch(
    "https://i4.utclconnect.com/uat/KPI_Dashboard_Today_Graph",
    {
      userId: email,
      plant: `${selectedPlant}`,
      section: `${initialSection}`,
      Tag_Type: "Total Power",
    },
    token
  );
  console.log("power", powerLoading, powerError, dataPower);

  const powerSeries = dataPower?.seriesData[0].data.map((i) => i[1]);
  const runHoursSeries = dataRunHours?.seriesData[0].data.map((i) => i[1]);
  const productionSeries = dataProduction?.seriesData[0].data.map((i) => i[1]);

  console.log(powerSeries);

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

  // const CustomInput = ({ value, onClick }) => (
  //   <input
  //     type="text"
  //     value={value}
  //     placeholder="Start date"
  //     onClick={onClick}
  //     style={{ padding: "0 10px" }} // adjust the padding value as per your requirement
  //   />
  // );

  useEffect(() => {
    const options = getPlants(plantDetails);
    setPlantOPtions([...options]);
  }, []);

  useEffect(
    () => console.log(selectedPlant, initialSection),
    [selectedPlant, initialSection]
  );

  if (
    !dataMtd ||
    !dataToday ||
    !dataProduction ||
    !dataRunHours ||
    !dataPower
  ) {
    return (
      <Container
        style={{ minHeight: "100vh" }}
        fluid
        className={styles.container}
      >
        <p style={{ color: "white" }}>Loading</p>
      </Container>
    );
  }

  if (
    dataMtd?.status === "failed" ||
    dataToday?.status === "failed" ||
    dataProduction?.status === "failed" ||
    dataRunHours?.status === "failed" ||
    dataPower?.status === "failed"
  ) {
    return (
      <Container
        style={{ minHeight: "100vh" }}
        fluid
        className={styles.container}
      >
        <p style={{ color: "white" }}>Something went wrong</p>
      </Container>
    );
  }

  // if (dataToday?.status !== "success") {
  //   return <p>failed</p>;
  // }

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
            // options={plantOptions}
            options={[{ label: "rc", value: "RC" }]}
            onChange={(plant) => setSelectedPlant(plant.label)}
          />
        </Col>

        <Col className={styles.date_picker} lg={4} md={4}>
          {/* <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="d/MM/yyyy h:mm aa"
            timeIntervals={5}
            customInput={<CustomInput />}
          />
          <DatePicker
            showTimeSelect
            dateFormat="d/MM/yyyy h:mm aa"
            timeIntervals={5}
          /> */}
        </Col>

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

      <Row type="gauges" className={`${styles.gauge_row} pt-1`}>
        <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
          <div>
            <p>Today</p>
            <GaugeChart
              loading={isLoadingMtd}
              maxValue={24}
              value={(
                dataToday?.result["Run Hours"][0].total /
                60 /
                (dataToday?.result["Run Hours"].length - 1)
              ).toFixed(0)}
              // value={dataToday?.result["Run Hours"][0].total / 100}
            />
          </div>

          <div>
            <p>MTD</p>
            <GaugeChart
              loading={isLoadingMtd}
              maxValue={720}
              value={(
                dataMtd?.result["Run Hours"][0].total /
                60 /
                (dataMtd?.result["Run Hours"].length - 1)
              ).toFixed(0)}
            />
          </div>
        </Col>

        <Col className={`${styles.production_pills} p-0`} lg={4} md={4} sm={4}>
          <div>
            <p className={styles.heading}>Today</p>
            <div className={styles.pill_data}>
              {(dataToday?.result["Production"][0].total / 60).toFixed(0)}
              <div>Mt</div>
            </div>
          </div>

          <div>
            <p className={styles.heading}>MTD</p>
            <div className={styles.pill_data}>
              {(dataMtd?.result["Production"][0].total / 60).toFixed(0)}
              <div>Mt</div>
            </div>
          </div>
        </Col>

        <Col className={`${styles.gauge_col} p-0`} lg={4} md={4} sm={4}>
          <div>
            <p>Today</p>
            <GaugeChart
              maxValue={720}
              value={(
                dataToday?.result["Total Power"][0].total /
                60 /
                (dataToday?.result["Total Power"].length - 1)
              ).toFixed(0)}
            />
          </div>

          <div>
            <p>MTD</p>
            <GaugeChart
              maxValue={720}
              value={(
                dataMtd?.result["Total Power"][0].total /
                60 /
                (dataMtd?.result["Total Power"].length - 1)
              ).toFixed(0)}
            />
          </div>
        </Col>
      </Row>

      <Row type="TableRow1" className={styles.table_row}>
        <Col lg={4} md={4} sm={4}>
          <TableRow1
            label={true}
            isDiffColor={false}
            dataMtd={dataMtd?.result["Run Hours"]}
            dataToday={dataToday?.result["Run Hours"]}
          />
        </Col>

        <Col lg={4} md={4} sm={4}>
          <TableRow1
            label={false}
            isDiffColor={true}
            dataMtd={dataMtd?.result["Production"]}
            dataToday={dataToday?.result["Production"]}
          />
        </Col>

        <Col lg={4} md={4} sm={4}>
          <TableRow1
            label={false}
            isDiffColor={false}
            dataMtd={dataMtd?.result["Total Power"]}
            dataToday={dataToday?.result["Total Power"]}
          />
        </Col>
      </Row>

      <Row type="ColChart" className={styles.column_chart_row}>
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={runHoursSeries} color="#06f1f5"></ColumnChart>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={productionSeries} color="#ff6712"></ColumnChart>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <ColumnChart data={powerSeries} color="#06f1f5"></ColumnChart>
        </Col>
      </Row>

      {/* <Row type="TableRow2" className={styles.table_row}>
        <Col lg={4} md={4} sm={4}>
          <TableRow2
            data={tableRow2Data}
            isDiffColor={false}
            title={"Clinker Stock"}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <TableRow2
            data={tableRow2Data}
            isDiffColor={true}
            title={"Kiln TPH"}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <TableRow2
            data={tableRow2Data}
            isDiffColor={false}
            title={"Kiln TPD"}
          />
        </Col>
      </Row> */}
    </Container>
  );
}
