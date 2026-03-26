import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "./ModuleUtilize.scss";
import moment from "moment";
import { createBarChart, createLineChart } from "../../utils/chartMethods";
import Loader from "react-js-loader";
import Highcharts, { objectEach } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highlighter from "react-highlight-words";
import {
  getDailyUserData,
  getdropDownFilter,
  monthlyUserData,
  weeklyUserData,
} from "../../utils/utliizationApi";
import useToken from "../UseToken/useToken";
import "../../css/utilization.scss"
import { FormLabel } from "react-bootstrap";
const ModuleUtlize = (props) => {
  const today = new Date();
  const previousDate = new Date(today);
  previousDate.setDate(today.getDate() - 1);
  const [startDate, setStartDate] = useState(previousDate);
  const [endDate, setEndDate] = useState(new Date());
  const [maxEndDate, setMaxEndDate] = useState(new Date());
  const [key, setKey] = useState("Chart");
  const [plants, setPlants] = useState([]);
  const [dupPlants, setDupPlants] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [submitMonthLoader, setSubmitMonthLoader] = useState(false);
  const [lineChart, setLineChart] = useState({});
  const [barChart, setBarChart] = useState({});
  const [formData, setFormData] = useState({
    plant: "",
  });
  const [submit, setSubmit] = useState(false);
  const { token, setToken } = useToken();
  const stateprop = {
    type: props.name,
    key: key,
    plant: formData.plant,
    date: startDate,
    submit: submit,
  };
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  useEffect(() => {
    formData.plant = "";
    setStartDate(previousDate);
    setEndDate(new Date());
    setMaxEndDate(new Date());
    setLineChart({});
    setBarChart({});
    setPlants([]);
    setDupPlants([]);
    setSelectedValue([]);
    getDropDownParameter();
  }, [props.name]);

  const getDropDownParameter = async () => {
    const payload = {
      adminid: token.UserID,
    };
    let result = await getdropDownFilter(payload, token.token);
    console.log(result);
    let res = [{ value: "Select All", label: "Select All" }];
    let dropDownArray = result.map((item) => {
      return { value: item.Plant, label: item.Plant };
    });
    res = [...res, ...dropDownArray];
    setPlants(res);
    setDupPlants(res);
    console.log(res, "plants");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payloadPlant = selectedValue.map((item) => {
      return item.value;
    });
    console.log(payloadPlant);
    // const defaultTab = stateprop.key === "Chart" ? "Chart" : "Table";
    // console.log(defaultTab, "submit");

    // setKey(defaultTab);
    setSubmit(true);
    setSubmitLoader(true);
    setSubmitMonthLoader(true);
    let payload = {
      superAdminid: token.UserID,
      startDate: moment(startDate).format("YYYY-MM-DD HH:mm"),
      endDate: moment(endDate).format("YYYY-MM-DD HH:mm"),
      modules: props.name === "All" ? [] : [props.name.toLowerCase()],
      plants: payloadPlant,
    };
    let dailyUser = await getDailyUserData(payload, token.token);
    if (dailyUser.length === 0) {
      setLineChart({});
      setSubmitLoader(false);
    } else {
      getDailyBarChart(dailyUser);
    }

    let monthlyData = await monthlyUserData(payload, token.token);
    if (monthlyData.length === 0) {
      setBarChart({});
      setSubmitMonthLoader(false);
    } else {
      getBarChart(monthlyData);
    }
  };

  const getDailyBarChart = (dailyUser) => {
    setSubmitLoader(true);
    let result = createLineChart(dailyUser);
    setLineChart(result);
    setSubmitLoader(false);
  };
  const getBarChart = (monthlyData) => {
    setSubmitMonthLoader(true);
    let result = createBarChart(monthlyData);
    setBarChart(result);
    setSubmitMonthLoader(false);
  };

  const handleChange = (e) => {
    if (e.length === 0) {
      // getDropDownParameter();
      setPlants(dupPlants);
    }
    for (let index = 0; index < plants.length; index++) {
      if (e && e.length > 0 && e[index].value === "Select All") {
        let allValues = plants
          // .filter((obj) => obj.value === "Select All")
          .map((x) => x);
        allValues.splice(0, 1);
        console.log(allValues);
        setSelectedValue(allValues);
        setPlants(allValues);
      } else {
        setSelectedValue(Array.isArray(e) ? e.map((x) => x) : []);
      }
    }
  };
  const isSubmitDisabled = selectedValue.length === 0;

  function formatOptionLabel({ label }, { inputValue }) {
    let labelvalue = typeof label === "object" ? label[0] : label;
    return (
      <Highlighter
        highlightClassName="highlighter"
        highlightStyle={{ backgroundColor: "orange" }}
        searchWords={[inputValue]}
        textToHighlight={labelvalue}
      />
    );
  }
  return (
    <div>
      <div className="w-full">
        <div className="flex text-[18px] font-semibold text-[var(--title)] justify-center">
          {/* <span>Utilization for {props.name} Module</span> */}
        </div>
        <div className="rounded-xl border border-[var(--form-border)] px-6 py-3 mt-3">
          <form onSubmit={(e) => handleSubmit(e)}>

            <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end px-5">

              {/* Plants */}
              <div className="lg:col-span-1">
                <FormLabel required className="mb-2">
                  <span className="text-[var(--text-color)]">  Plants</span>
                </FormLabel>
                <Select
                formatOptionLabel={formatOptionLabel}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Select Option"
                  value={selectedValue}
                  options={plants}
                  onChange={handleChange}
                  isMulti
                  isClearable
                />
              </div>

              {/* Start Date */}
              <div>
                <FormLabel required className="mb-2">
                  <span className="text-[var(--text-color)]">Start Date</span>
                </FormLabel>
                <div className="relative">
                  <DatePicker
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    maxDate={maxEndDate}
                    timeClassName={handleColor}
                    dateFormat="d/MM/yyyy h:mm aa"
                    className="w-full px-3 py-[6px] text-[13px] text-[var(--text-color)] rounded-lg outline-none bg-[var(--input-enable-bg)] border border-[var(--input-enable-border)] focus:border-[#FD9F35] focus:ring-2 focus:ring-[#FD9F3530] transition-all"
                    wrapperClassName="w-full"
                  />
                </div>
              </div>

              {/* End Date */}
              <div>
                <FormLabel required className="mb-2">
                  <span className="text-[var(--text-color)]"> End Date</span>
                </FormLabel>
                <div className="relative">
                  <DatePicker
                    showTimeSelect
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    minDate={startDate}
                    maxDate={maxEndDate}
                    timeClassName={handleColor}
                    dateFormat="d/MM/yyyy h:mm aa"
                    className="w-full px-3 py-[6px] text-[13px] text-[var(--text-color)] rounded-lg outline-none bg-[var(--input-enable-bg)] border border-[var(--input-enable-border)] focus:border-[#FD9F35] focus:ring-2 focus:ring-[#FD9F3530] transition-all"
                    wrapperClassName="w-full"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex items-end">
                <button
                  className="px-4 py-1 rounded-md border border-[var(--button-border)] bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </div>

            </div>

          </form>
        </div>
        {
          Object.keys(lineChart).length === 0 ?
            (
              <>
                <div className="mt-3">
                 <div>
            <p className="mt-3 flex flex-col items-center justify-center h-40 rounded-lg">
              <div class="text-3xl mb-3 zoom-animation">🔍</div>
 
              {/* <!-- Title --> */}
              <h2 class="text-lg font-semibold text-[var(--leftdrawer-text)] mb-2">
                No Data Found
              </h2>
 
              {/* <!-- Description --> */}
              <p class="text-sm text-[var(--card-subtle)] mb-1">
                Try changing the filters or refresh the data
              </p>
            </p>
          </div>
 
                </div>
              </>
            ) : (
              <>
                <div className="mt-6 mb-6">
                  <div className="w-full rounded-xl border border-[var(--form-border)] p-4">
                    <div className="text-[16px] font-semibold text-[var(--title)] mb-3">
                      <div className="text-[16px] font-semibold text-[var(--title)] mb-3">
                        Daily User Utilization %
                      </div>
                      <div className="relative min-h-[300px]">
                        {submitLoader && (
                          <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-main-container)]/70 backdrop-blur-[2px] z-10">
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-8 h-8 border-[3px] border-gray-300 border-t-orange-400 rounded-full animate-spin"></div>                              <span className="text-[13px] text-[var(--title)] font-medium">
                                Loading data...
                              </span>
                            </div>

                          </div>
                        )}
                        {!submitLoader && Object.keys(lineChart).length > 0 ? (
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={lineChart}
                          />
                        ) : (
                          <div className="text-center py-12 text-gray-500">
                            {Object.keys(lineChart).length === 0
                              ? "No Daily Data found"
                              : ""}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="w-full rounded-xl border border-[var(--form-border)] p-4">
                    <div className="text-[16px] font-semibold text-[var(--title)] mb-3">
                      Monthly User's Utilization %
                    </div>
                    <div className="relative min-h-[300px]">
                      {submitMonthLoader && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-main-container)]/70 backdrop-blur-[2px] z-10">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-8 h-8 border-[3px] border-gray-300 border-t-orange-400 rounded-full animate-spin"></div>
                            <span className="text-[13px] text-[var(--title)] font-medium">
                              Loading data...
                            </span>
                          </div>
                        </div>
                      )}
                      {!submitMonthLoader &&
                        Object.keys(barChart).length > 0 ? (
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={barChart}
                        />
                      ) : (
                        <div className="text-center py-12 text-gray-500">
                          {Object.keys(barChart).length === 0
                            ? "No Monthly Record Found"
                            : ""}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )
        }
      </div >
    </div >
  );
};

export default ModuleUtlize;
