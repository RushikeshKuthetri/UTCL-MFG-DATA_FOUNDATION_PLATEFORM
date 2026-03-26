import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import { GraphContainer } from "./GraphContainer";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  AiOutlineLineChart,
  AiOutlineBarChart,
  AiOutlineDotChart,
} from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
import { chartTypesMap } from "../../data/chartOpions/chatOptions";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Input } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../../base";
import { setTotalChart } from "../../data/chartOpions/tostHandler";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = forwardRef((props, ref) => {
  const { authProvider } = useSelector((state) => state);

  const gridProps = {
    cols: { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 },
    rowHeight: 30,
    isBounded: true,
  };
  const currentTags = useRef({});
  const updatedLayout = useRef([]);
  let chartContainerRefs = {};
  const emptyGrid = () => {
    updatedLayout.current = [];
  };

  const removeChart = (chartId) => {
    setItems((prevItems) => _.reject(prevItems, { i: chartId }));
    console.debug("Dashboard unsaved 4");

    props.markDashboardUnsaved();

    // for last element onLayout is not called so set it manually
    if (updatedLayout.current.length === 1) {
      updatedLayout.current = [];
    }
  };

  // if (props.currentDashboard && props.currentDashboard.name) {
  //   Object.keys(props.currentDashboard.tags).forEach((chartId) => {
  //     currentTags.current[chartId] = [...props.currentDashboard.tags[chartId]];
  //   });
  // }

  const isPhone = window.innerWidth < 768;
  const lastLayout =
    props.currentDashboard && props.currentDashboard.name
      ? props.currentDashboard.layout.map((layout) => {
          const chartType = layout.i.split("--")[0];
          return {
            ...layout,
            chartType: chartType,
          };
        })
      : [];

  const [items, setItems] = useState(lastLayout);

  useEffect(() => {
    if (props.currentDashboard && props.currentDashboard.name) {
      Object.keys(props.currentDashboard.tags).forEach((chartId) => {
        currentTags.current[chartId] = props.currentDashboard.tags[chartId];
      });
      const lastLayout = props.currentDashboard.layout.map((layout) => {
        const chartType = layout.i.split("--")[0];
        return {
          ...layout,
          chartType: chartType,
          minW: 6,
        };
      });

      if (isPhone) {
        lastLayout.forEach((layout) => {
          layout.w = 12;
        });
      }
      console.debug("last layout: ", lastLayout);
      setItems(lastLayout);
    } else {
      setItems([]);
      currentTags.current = {};
    }
    console.debug("current tags changed ", currentTags.current);
  }, [props.currentDashboard]);

  const onNewTagAddOrRemove = (chartId, newTags) => {
    currentTags.current[chartId] = newTags;
    currentTags.current[chartId] = newTags;
    console.debug("Dashboard unsaved");
    props.markDashboardUnsaved();
  };

  const resetResizeCharts = () => {
    const lastLayout = props.currentDashboard.layout.map((layout) => {
      const chartType = layout.i.split("--")[0];
      return {
        ...layout,
        chartType: chartType,
      };
    });
    setItems(lastLayout);
    console.debug("Dashboard unsaved 2");

    props.markDashboardUnsaved();
  };

  const addChart = (chartType) => {
    if (!chartTypesMap[chartType]) return;
    // generate a random number
    const randomNum = Math.floor(Math.random() * 1000);
    setItems((prevItems) =>
      prevItems.concat({
        i: chartType + "--" + randomNum,
        chartType: chartType,
        x: (prevItems.length * 6) % 12,
        y: Infinity, //i == 0 ? 0 : Math.floor(i / 2),
        w: chartType === "table-chart" ? 12 : 6,
        h: 8,
        isResizable: true,
        autoSize: true,
        resizeHandles: ["se"],
        minH: 8,
        // minW: chartType === "table-chart" ? 12 : 6,
        // minW: 12,
        maxH: 12,
      })
    );
    console.debug("Dashboard unsaved 3");

    props.markDashboardUnsaved();
  };

  const onBreakpointChange = (breakpoint, cols) => {
    // You can perform actions based on breakpoint change here
  };

  const onLayoutChange = (layout) => {
    props.onLayoutChange(layout);
    updatedLayout.current = layout;
    setItems((prevItems) => {
      return prevItems.map((item) => {
        const updatedItem = layout.find((el) => el.i === item.i);
        return {
          ...item,
          ...updatedItem,
        };
      });
    });
  };

  // const createChartContainer = (el) => {
  //   const chartId = el.i;
  //   const chartType = el.chartType;
  //   return (
  //     <div
  //       key={chartId}
  //       data-grid={el}
  //       className="layout-boz grid-item react-grid-item"
  //     >
  //       <GraphContainer
  //         plantSelected={props.plantSelected}
  //         chartType={chartType}
  //         chartId={chartId}
  //         removeChart={removeChart}
  //         onNewTagAddOrRemove={onNewTagAddOrRemove}
  //         initialTags={props?.currentDashboard?.tags[chartId] || []}
  //       />
  //     </div>
  //   );
  // };

  const createChartContainer = (el, index) => {
    if (index == 0) {
      chartContainerRefs = {};
    }
    const chartId = el.i;
    const chartType = el.chartType;
    return (
      <div
        key={chartId}
        data-grid={el}
        className="layout-boz grid-item react-grid-item"
      >
        <GraphContainer
          startDate={props.startDate}
          endDate={props.endDate}
          interval={props.interval}
          ref={(ref) => (chartContainerRefs[chartId] = ref)}
          plantSelected={props.plantSelected}
          chartType={chartType}
          chartId={chartId}
          removeChart={removeChart}
          onNewTagAddOrRemove={onNewTagAddOrRemove}
          initialTags={props?.currentDashboard?.tags[chartId] || []}
          isGroupTags={props?.isGroupTags}
        />
      </div>
    );
  };

  const saveDashboard = async () => {
    const dashboardTagsName = updatedLayout.current.map((layout) => layout.i);
    const dashBoardTags = {};
    dashboardTagsName.forEach((chartId) => {
      dashBoardTags[chartId] = currentTags.current[chartId];
    });
    console.debug("current tags all: ", currentTags.current);

    console.debug("current tags: ", dashBoardTags);

    const updatedDashboard = {
      layout: updatedLayout.current,
      tags: dashBoardTags,
      plants: props.plantSelected,
      name: props.currentDashboard.name,
      isCurrent: true,
      Unique_Id: props.currentDashboard.Unique_Id,
      sections: props.sectionSelected,
      isGroupTags: props.isGroupTags,
    };

    console.debug("updated dashboard: ", updatedDashboard);

    // find and delete the dashboard from props.allDashboard and add the updated one
    const allDashboards = props.allDashboards;
    allDashboards.map((d) => {
      d.isCurrent = false;
    });
    const currentIndex = allDashboards.findIndex(
      (dashboard) => dashboard.name === updatedDashboard.name
    );

    if (currentIndex != -1) {
      await updateDashboard(updatedDashboard);
    } else {
      // allDashboards.push(updatedDashboard);
      await addDashboard(updatedDashboard);
    }
    props.setCurrentDashboard(updatedDashboard);
    console.debug("Saving dashboard: ", allDashboards);
    localStorage.setItem("all-dashboards", JSON.stringify(allDashboards));
    toast.success("Dashboard saved successfully!");
  };

  const addDashboard = async (dashboard) => {
    try {
      showChatApiLoader();
      const { token, email } = JSON.parse(localStorage.getItem("login"));
      console.debug("Current user email: ", email);
      const url = BASE_URL + "addChart";
      const body = {
        userid: email,
        // remove all single and double quotes from the string
        data: [dashboard],
      };
      console.debug("body", body);
      const res = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.debug("res", res.data);
      fetchCurrentDashboard();
      // add the dashboard to the list of all dashboards
    } catch (e) {
      console.debug(e);
    } finally {
      hideChatApiLoader();
    }
  };

  const showChatApiLoader = () => {
    const loader = document.querySelector(".chart-api-loader");
    loader.classList.add("active-chart-loader");
  };

  const hideChatApiLoader = () => {
    const loader = document.querySelector(".chart-api-loader");
    loader?.classList?.remove("active-chart-loader");
  };

  const updateDashboard = async (dashboard) => {
    try {
      showChatApiLoader();

      const { token, email } = JSON.parse(localStorage.getItem("login"));
      console.debug("Current user email: ", email);
      const url = BASE_URL + "updateChart";
      const chartId = dashboard.Unique_Id;
      const body = {
        userid: email,
        // remove all single and double quotes from the string
        chartid: chartId,
        data: [dashboard],
      };
      console.debug("body", body);
      const res = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.debug("res", res.data);

      // add the dashboard to the list of all dashboards
      const allDashboards = [...props.allDashboards];
      console.debug("all dashboards: ", allDashboards);
      console.debug("all dashboard: updated dashboard: ", dashboard);
      const currentIndex = allDashboards.findIndex(
        (d) => d.Unique_Id === dashboard.Unique_Id
      );
      allDashboards[currentIndex] = dashboard;
      console.debug("all dashboard: setting all dashboards: ", allDashboards);
      props.setAllDashboards([...allDashboards]);
      setTimeout(
        () => console.debug("all dashboard: after a second", allDashboards),
        5000
      );
    } catch (e) {
      console.debug(e);
    } finally {
      hideChatApiLoader();
    }
  };

  const fetchCurrentDashboard = async () => {
    try {
      const { token, email } = JSON.parse(localStorage.getItem("login"));
      console.debug("Current user email: ", email);
      const response = await axios.post(
        BASE_URL + "fetchUserCharts",
        {
          userid: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.debug("Response: ", response.data);
      let temp = response.data.data;

      let currentDashboard;
      if (props?.isGroupTags) {
        currentDashboard = temp.find((d) => d.Data[0].isGroupTags);
      } else {
        currentDashboard = temp.find((d) => !d.isGroupTags);
      }

      if (currentDashboard) {
        currentDashboard = {
          ...currentDashboard,
          ...currentDashboard.Data[0],
        };
        delete currentDashboard.Data;
        props.setCurrentDashboard(currentDashboard);
        setTotalChart(currentDashboard);

        const allDashboards = props.allDashboards;
        allDashboards.push(currentDashboard);
        props.setAllDashboards(allDashboards);
      }
    } catch (error) {
      console.error("Error fetching current dashboard :", error);
    }
  };

  const onResizeOrDrag = (
    layout,
    oldItem,
    newItem,
    placeholder,
    e,
    element
  ) => {
    console.debug("old item: ", oldItem, "new item: ", newItem);
    const isChanged =
      oldItem.w !== newItem.w ||
      oldItem.h !== newItem.h ||
      oldItem.x !== newItem.x ||
      oldItem.y !== newItem.y;
    if (isChanged) {
      props.markDashboardUnsaved();
    }
  };
  const refreshAllChartsData = () => {
    console.debug("Refreshing all charts data", chartContainerRefs);
    const chartIds = Object.keys(chartContainerRefs);
    chartIds.forEach((chartId) => {
      const chartRef = chartContainerRefs[chartId];
      console.debug("chart ref: ", chartRef);
      if (chartRef?.refreshChartData) {
        chartRef.refreshChartData();
      }
    });
  };

  useImperativeHandle(ref, () => ({
    removeChart, // Expose the function to the parent component
    addChart,
    saveDashboard,
    resetResizeCharts,
    hideChatApiLoader,
    showChatApiLoader,
    emptyGrid,
    refreshAllChartsData,
  }));

  return authProvider.token && !props.isChartLoading ? (
    items.length > 0 ? (
      <div className="grid-layout-wrapper">
        <ResponsiveReactGridLayout
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakpointChange}
          layouts={{ lg: items }}
          {...gridProps}
          onResizeStop={onResizeOrDrag}
          onDragStop={onResizeOrDrag}
          className="chart-layout layout react-grid-layout"
        >
          {items.map((el) => createChartContainer(el))}
        </ResponsiveReactGridLayout>
        <div className="chart-api-loader">
          <div className="inner-loader"></div>
          <span>Please wait...</span>
        </div>
      </div>
    ) : (
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 no-charts">
        <div className="d-flex fs-6">
          <div>
            <AiOutlineLineChart className="chart-icon"></AiOutlineLineChart>
            <AiOutlineDotChart className="chart-icon"></AiOutlineDotChart>
          </div>
          <div>
            <AiOutlineBarChart className="chart-icon"></AiOutlineBarChart>
            <BsSpeedometer2 className="chart-icon"></BsSpeedometer2>
          </div>
        </div>
        <span className="text-center">Drop chart here</span>
        <div className="chart-api-loader">
          <div className="inner-loader"></div>
          <span>Please wait...</span>
        </div>
      </div>
    )
  ) : (
    <div className="chart-loader initial-loader">
      <div className="inner-loader"></div>
      <span>Getting your dashboard ready...</span>
    </div>
  );
});

export default GridLayout;
