import Highlighter from "react-highlight-words";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { getPlants, minsIntervalOptions } from "../../utils";
import { getTagnameBasedOnPlantAndSection } from "../../utils/SelectionBoxOptions/getTagname";
import { getSectionBasedOnPlant } from "../../utils/SelectionBoxOptions/sectionOption";
import { Alert } from "../../components/Alert/Alert";
import { accesslogshistory } from "../../utils/apicalls/accesslogshistory";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { BsDownload } from "react-icons/bs";
import { BiReset, BiTrash, BiMenu, BiSave } from "react-icons/bi";
import { toast } from "react-toastify";
import Tooltip from "@material-ui/core/Tooltip";

import "../../components/ShowGraphAndTable/FilterCard/FilterCard.css";

import "react-datepicker/dist/react-datepicker.css";

import "./ChartsVisual.css";
import GridLayout from "../../components/Charts/GridLayout";
import {
  chartTypesMap,
  chartIconsMap,
} from "../../data/chartOpions/chatOptions";
import { set } from "date-fns";
import { Button, Modal } from "react-bootstrap";
import { Input } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../../base";
import { setTotalChart } from "../../data/chartOpions/tostHandler";
import { getSectionTagDetailsAPIx } from "../../utils/apicalls/authapi";

export const ChartsVisual = ({ showingInTrend, data }) => {
  const MAX_DASHBOARD = 30;
  const REFRESH_INTERVAL = 120; //in seconds
  const intervalOptions = minsIntervalOptions();
  const selectedPlant = useRef();
  const selectedSection = useRef();
  // const selectedTagBar = useRef([]);
  // const selectedTagLine = useRef([]);
  const { filterData, authProvider } = useSelector((state) => state);
  console.debug(authProvider);
  const [keywords, setKeywords] = useState([]);
  const [keywordsGroupTags, setKeywordsGroupTag] = useState([]);

  const [sectionDropDisable, setSectionDropDisable] = useState(true);

  //Start and End Date and Interval
  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() - 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [interval, setIntervalValue] = useState(intervalOptions[0]);

  //
  const [endDateValidationText, setEndDateValidation] = useState();
  const [startDateValidationText, setStartDateValidation] = useState();
  const [intervalValidationText, setIntervalValidation] = useState();
  //
  const [dashBoardName, setDashboardName] = useState();

  const dispatch = useDispatch();
  const [plantSelected, setPlantSelected] = useState([]);
  const [sectionSelected, setSectionSelected] = useState("");
  // const [tagSelectedLine, setTagSelectedLine] = useState([]);
  // const [tagSelectedBar, setTagSelectedBar] = useState([]);
  const [allTagSelected, setAllTagSelected] = useState(false);

  const [selectedTagList, setSelectedTagList] = useState([]);
  const [selectedGroupTagList, setSelectedGroupTagList] = useState([]);
  const [recordsFound, setRecordsFound] = useState(false);
  const [recordsFoundGroupTags, setRecordsFoundGroupTags] = useState(false);

  const [validationErrorMsg1] = useState({
    plant: "",
    tag: "",
  });
  const [validationErrorMsg] = useState();

  const [layout, setLayout] = useState([]);
  let [selectedChartTypes, setSelectedChartTypes] = useState([]);

  const gridRef = useRef(null);
  const isDownloading = useRef(false);
  const isDashboardSaved = useRef(true);
  const changeDashboardUserTo = useRef(null);

  const [showDashboardNameModal, setShowDashboardNameModal] = useState(false);
  const [showDashboardSaveWarningModel, setShowDashboardSaveWarningModel] =
    useState(false);

  const [allDashboards, setAllDashboards] = useState([]);
  const lastDashboardIndex = allDashboards.findIndex((d) => d.isCurrent);
  const [currentDashboard, setCurrentDashboard] = useState(
    allDashboards[lastDashboardIndex] || {
      name: null,
      plants: [],
      tags: {},
      layout: [],
    }
  );

  const [isChartLoading, setIsChartLoading] = useState(true);
  const [tagsData, setTagsData] = useState([]);

  const isPhone = window.innerWidth < 768;
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const payloadNew = {
    userId: email,
    module: "Mimics",
    plant: "",
    url: window.location.href,
    options: "",
    plant_or_section: "",
  };

  useEffect(() => {
    async function setupDashboard() {
      if (authProvider.plants.length) {
        // set selected plant to lastDashboard.plants and then set sectionOptions based on that plant and then select the first option from that section
        const selectedPlant = currentDashboard.plants;
        setPlantSelected(selectedPlant);
        setSectionDropDisable(false);
        updateSectionData(selectedPlant);
        const sectionOptions = await getSectionBasedOnPlant(
          authProvider.plantBasedSection,
          selectedPlant.map((obj) => obj?.label)
        );
        console.debug(selectedPlant);
        const selectedSection =
          currentDashboard.sections || sectionOptions[0] || "";
        setSectionSelected(selectedSection);
      }
    }
    setupDashboard();
    const { token, email } = JSON.parse(localStorage.getItem("login"));
    console.debug(token, email);
  }, [authProvider, currentDashboard]);

  let refreshInterval = useRef(null);

  useEffect(() => {
    accesslogshistory(payloadNew);
    clearInterval(refreshInterval.current);
    refreshInterval.current = setInterval(() => {
      console.debug("Refreshing dashboard : ", isDashboardSaved.current);

      // if (!isDashboardSaved.current) {

      //   setShowDashboardRefreshSaveWarningModel(true);

      //   return console.log("Acknowledge from user to refresh dashboard");

      // }
      gridRef.current.refreshAllChartsData();
    }, REFRESH_INTERVAL * 1000);
  }, [authProvider]);

  const markDashboardUnsaved = () => {
    isDashboardSaved.current = false;
    console.debug("Dashboard unsaved final");
  };

  const saveDashboard = async () => {
    console.debug("current dashboard before save is: ", currentDashboard);
    if (!currentDashboard || !currentDashboard.name) {
      // open modal to enter dashboard name
      setShowDashboardNameModal(true);
    } else {
      await gridRef.current.saveDashboard();
    }
    isDashboardSaved.current = true;
  };

  const deleteDashboard = async () => {
    try {
      gridRef.current.showChatApiLoader();
      // if current dashboard does not have unique id means it is not yet saved so just remove it
      if (!currentDashboard.Unique_Id) {
        if (allDashboards.length) {
          setCurrentDashboard(allDashboards.at(-1));
        } else {
          setCurrentDashboard({
            name: null,
            plants: [],
            tags: {},
            layout: [],
          });
        }
        return (document.getElementById("selected-tags-panel").innerHTML = "");
      }
      const { token, email } = JSON.parse(localStorage.getItem("login"));
      const url = BASE_URL + "deleteChart";
      const body = {
        userid: email,
        chartid: currentDashboard.Unique_Id,
      };

      console.debug("Delete dashboard body: ", body);

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.post(url, body, options);
      console.debug("Response: ", res.data);
      toast.success("Dashboard deleted successfully");
      // remove current dashboard from allDashboards
      const newAllDashboards = allDashboards.filter(
        (d) => d.Unique_Id !== currentDashboard.Unique_Id
      );
      setAllDashboards(newAllDashboards);
      document.getElementById("selected-tags-panel").innerHTML = "";

      if (newAllDashboards.length > 0) {
        setCurrentDashboard(newAllDashboards[newAllDashboards.length - 1]);
      } else {
        setCurrentDashboard({
          name: null,
          plants: [],
          tags: {},
          layout: [],
        });
      }
    } catch (e) {
      console.debug(e);
    } finally {
      gridRef.current.hideChatApiLoader();
    }
  };

  useEffect(() => {
    const fetchAllDashboard = async () => {
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
        let allDashboards = response.data.data.map((dashboard) => {
          const d = {
            ...dashboard,
            ...dashboard.Data[0],
          };
          delete d.Data;
          return d;
        });

        allDashboards = allDashboards.filter((d) => !d.isGroupTags);

        console.debug("All dashboards: ", allDashboards);
        setAllDashboards(allDashboards);
        setIsChartLoading(false);
      } catch (error) {
        console.error("Error fetching all dashboards charts:", error.message);
        setIsChartLoading(false);
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
        let temp = response.data?.data || [];

        let currentDashboard = temp.find((d) => !d.Data[0]?.isGroupTags);

        if (currentDashboard) {
          currentDashboard = {
            ...currentDashboard,
            ...currentDashboard.Data[0],
          };
          delete currentDashboard.Data;
          console.debug(
            "---------------------Set Current Dashboard-------------------------------------"
          );
          setTotalChart(currentDashboard);
          setCurrentDashboard(currentDashboard);
        }
      } catch (error) {
        console.debug("Error fetching current dashboard :", error.message);

        setIsChartLoading(false);
      }
    };
    fetchAllDashboard();
    fetchCurrentDashboard();
  }, []);

  const addChart = (chartType) => {
    chartType = chartType.replace("drag-", "");

    setSelectedChartTypes([...selectedChartTypes, chartType]);
    gridRef.current.addChart(chartType);
    // if (selectedChartTypes.includes(chartType)) {
    //   setSelectedChartTypes(
    //     selectedChartTypes.filter((chart) => chart !== chartType)
    //   );
    //   gridRef.current.removeChart(chartType);
    // } else {
    // }
  };
  const getDashboardUsers = (allDashboards) => {
    const users = allDashboards.map((dashboard) => {
      return { label: dashboard.name, value: dashboard.name };
    });

    // check if currentDashboard is present inside users or not if not add
    if (currentDashboard && currentDashboard.name) {
      const index = allDashboards.findIndex(
        (u) => u.name == currentDashboard.name
      );
      console.debug("current dashboard", currentDashboard);
      console.debug("index: ", index);
      if (index == -1) {
        users.push({
          label: currentDashboard.name,
          value: currentDashboard.name,
        });
      }
    }
    if (allDashboards.length <= MAX_DASHBOARD) {
      users.push({
        label: "Create New +",
        value: "new_dashboard",
        className: "new-dashboard",
      });
    }
    console.debug("Dashboard users :", users);
    return users;
  };

  const changeDashboardUser = (user, e, forced = false) => {
    setDashboardName(user.value);
    if (user.value !== dashBoardName) {
      setStartDate(new Date(new Date().getTime() - 60 * 60 * 1000));
      setEndDate(new Date());
    }
    console.debug("isDashboard saved ", isDashboardSaved.current);
    console.debug("Is forced ", forced);
    if (!isDashboardSaved.current && !forced) {
      changeDashboardUserTo.current = user;
      setShowDashboardSaveWarningModel(true);
      console.debug("Show dashboard save warning model");
      return;
    }
    console.debug("Change dashboard to: ", user);
    console.debug("all dashboard: ", allDashboards);

    if (user.value == "new_dashboard") {
      if (allDashboards.length >= MAX_DASHBOARD) {
        toast.error(`You can create max ${MAX_DASHBOARD} dashboards`);
        return;
      }
      // document.getElementById("selected-tags-panel").innerHTML = "";

      setShowDashboardNameModal(true);
    } else {
      const userDashboardIndex = allDashboards.findIndex(
        (d) => d.name == user.value
      );
      if (currentDashboard.name == user.value) {
        return;
      }

      document.getElementById("selected-tags-panel").innerHTML = "";
      console.debug(
        "all dashboard: New dashboard: ",
        allDashboards[userDashboardIndex]
      );
      setCurrentDashboard(allDashboards[userDashboardIndex]);
      isDashboardSaved.current = true;
    }
  };
  const handleChartSelectorDragStart = (e) => {
    const target = document.getElementById("chart-add-target");
    target.style.display = "flex";
    e.dataTransfer.setData("text", e.target.id);
  };

  const handleChartSelectorDragEnd = (e) => {
    const target = document.getElementById("chart-add-target");
    target.style.display = "none";
  };

  const handleDropAdd = (e) => {
    e.preventDefault();
    const chartType = e.dataTransfer.getData("text");
    addChart(chartType);
  };
  const handleChartDragOver = (e) => {
    e.preventDefault();
  };

  const [groupTagOptions, setGroupTagOptions] = useState([]);

  const formatGroupTags = (groupTags) => {
    return groupTags.map((tag) => {
      return { label: tag.Group_TagName, value: tag.Group_TagName };
    });
  };

  const additionalTagNames =
    authProvider &&
      authProvider.extraTagDetails &&
      authProvider.extraTagDetails.length
      ? authProvider.extraTagDetails
      : [];

  const fetchGroupTags = async (plantSelected) => {
    try {
      const plant = plantSelected.map((obj) => obj?.label);
      const { email, token } = JSON.parse(localStorage.getItem("login"));
      const url = BASE_URL + "groupuiddetails";
      const body = {
        plant: plant[0],
        userId: email,
      };
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(url, body, options);
      console.debug("Group tag Response: ", res.data);
      const groupTags = res.data.result?.["Group TagNames"] || [];
      const groupTagOptions = formatGroupTags(groupTags);
      console.debug("Group tag options: ", groupTagOptions);
      selectedGroupTagList.length = 0;
      setGroupTagOptions([...groupTagOptions]);
    } catch (error) {
      console.error("Error fetching group tags :", error.message);
    }
  };

  const getTagnameBasedOnPlantAndSectionx = () => {
    let allTags = [...tagsData, ...additionalTagNames];
    if (!allTags || allTags.length === 0) {
      return [];
    }

    return (typeof sectionSelected == "string" && sectionSelected) ||
      (typeof sectionSelected == "object" &&
        Object.keys(sectionSelected).length)
      ? [...tagsData, ...additionalTagNames]
        .filter((tag) =>
          plantSelected.some(
            (plant) =>
              tag.Plant === plant.value && // Match Plant
              tag.Section === sectionSelected.value // Match Section
          )
        )
        .map((tag) => ({
          label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""
            }`, // Set label as TagUID with description
          value: tag["TagUID"], // Set value as TagName
        }))
      : !(
        (typeof sectionSelected == "string" && sectionSelected) ||
        (typeof sectionSelected == "object" &&
          Object.keys(sectionSelected).length)
      )
        ? [...tagsData, ...additionalTagNames]
          .filter((tag) =>
            plantSelected.some(
              (plant) => tag.Plant === plant.value // Match Plant
            )
          )
          .map((tag) => ({
            label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""
              }`, // Set label as TagUID with description
            value: tag["TagUID"], // Set value as TagName
          }))
        : [];
  };

  let tagOptions = [getTagnameBasedOnPlantAndSectionx()].flat();

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

  async function updateSectionData(event) {
    // dispatch({
    //   type: "FILTER_ERROR",
    //   payload: "",
    // });
    // if (
    //   (event.length > 1 && allTagSelected === true) ||
    //   event.length < plantSelected.length
    // ) {
    //   // setTagSelectedLine([]);
    //   // setTagSelectedBar([]);

    //   setAllTagSelected(false);
    // }
    // if (event.length > 0) {
    //   setPlantSelected(event);
    //   setSectionDropDisable(false);
    //   getSelectionSelection(event);
    // } else if (event.length === 0) {
    //   setPlantSelected([]);
    //   setSectionSelected([]);

    //   // setTagSelectedLine([]);
    //   // setTagSelectedBar([]);

    //   setSectionDropDisable(true);
    // }

    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    if (
      (typeof sectionSelected == "string" && sectionSelected) ||
      (typeof sectionSelected == "object" &&
        Object.keys(sectionSelected).length)
    ) {
      let payload = [];
      if (event.length > 0) {
        payload = event.map((plant) => ({
          Plant: plant.value,
          Section: sectionSelected.value,
        }));
      }

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      setTagsData([...tagsDatares]);

      tagOptions = [getTagnameBasedOnPlantAndSectionx()].flat();
    }

    if (
      (event.length > 1 && allTagSelected === true) ||
      event.length < plantSelected.length
    ) {
      setAllTagSelected(false);
    }
    if (event.length > 0) {
      setPlantSelected(event);
      setSectionDropDisable(false);
      getSelectionSelection(event);
    } else if (event.length === 0) {
      setPlantSelected([]);
      setSectionSelected("");
      // setStartDate(null);
      // setEndDate(null);
      setSectionDropDisable(true);
    }

    if (event.length) {
      let payload = [];
      payload = event.map((plant) => ({
        Plant: plant.value,
        Line: null,
        Section: null,
      }));

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      setTagsData([...tagsDatares]);

      tagOptions = [getTagnameBasedOnPlantAndSectionx()].flat();
    }
  }
  function getSelectionSelection(event) {
    return getSectionBasedOnPlant(
      authProvider.plantBasedSection,
      event.map((obj) => obj?.label)
    );
  }
  async function updateTagValue(e) {
    // dispatch({
    //   type: "FILTER_ERROR",
    //   payload: "",
    // });
    // if (e === null || e === "") {
    //   // setTagSelectedLine([]);
    //   // setTagSelectedBar([]);
    // } else {
    //   setSectionSelected(e);

    //   if (e.label !== sectionSelected.label) {
    //     // setTagSelectedLine([]);
    //     // setTagSelectedBar([]);
    //   }
    // }

    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    if (e === null || e === "") {
      let payload = plantSelected.map((plant) => {
        return {
          Plant: plant.value,
          Line: null,
          Section: null,
        };
      });

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      setTagsData([...tagsDatares]);
    } else {
      setSectionSelected(e);

      let payload = [];
      if (plantSelected.length > 0) {
        payload = plantSelected.map((plant) => {
          if (e && e.value) {
            return {
              Plant: plant.value,
              Line: null,
              Section: e.value,
            };
          } else if (!e) {
            return {
              Plant: plant.value,
              Line: null,
              Section: null,
            };
          }
        });
      }

      const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
      setTagsData([...tagsDatares]);
    }

    tagOptions = [getTagnameBasedOnPlantAndSectionx()].flat();
  }

  const searchKey = useRef("");
  const searchKeyGroupTags = useRef("");

  function searchTags(e) {
    searchKey.current = e.target.value.toLowerCase();
    const newKeywords = searchKey.current.split(" ");
    setKeywords(newKeywords);

    if (!newKeywords.length) {
      setRecordsFound(true);
      return setSelectedTagList(tagOptions);
    }

    let filteredGroupTags = tagOptions.filter((tag) => {
      if (
        newKeywords.every((item) => {
          return tag.label.toLowerCase().includes(item);
        })
      ) {
        return tag;
      }
    });
    if (filteredGroupTags.length === 0) {
      setRecordsFound(false);
    } else {
      setRecordsFound(true);
      setSelectedTagList(filteredGroupTags);
    }
  }

  function searchGroupTags(e) {
    searchKeyGroupTags.current = e.target.value.toLowerCase();
    const newKeywords = searchKeyGroupTags.current.split(" ");
    setKeywordsGroupTag(newKeywords);
    if (!newKeywords.length) {
      setRecordsFoundGroupTags(true);
      return setSelectedGroupTagList(groupTagOptions);
    }
  }

  useEffect(() => {
    setSelectedTagList(
      tagOptions.filter((tag) => {
        if (
          keywords.every((item) => {
            return tag.label.toLowerCase().includes(item);
          })
        ) {
          return tag;
        }
      })
    );
  }, [keywords]);

  // useEffect(() => {
  //   if (selectedTagList.length === 0) {
  //     setRecordsFound(false);
  //   } else {
  //     setRecordsFound(true);
  //   }
  // }, [selectedTagList]);

  useEffect(() => {
    setRecordsFound(true);
    setRecordsFoundGroupTags(true);
  }, [plantSelected]);

  async function updateTagValueNew() {
    // dispatch({
    //   type: "FILTER_ERROR",
    //   payload: "",
    // });
    // // setTagSelectedLine([]);
    // // setTagSelectedBar([]);

    // setSectionSelected("");

    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    setSectionSelected("");

    let payload = plantSelected.map((plant) => {
      return {
        Plant: plant.value,
        Line: null,
        Section: null,
      };
    });

    const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
    setTagsData([...tagsDatares]);
  }
  function updatePlantValueNew() {
    // dispatch({
    //   type: "FILTER_ERROR",
    //   payload: "",
    // });
    // setPlantSelected([]);
    // // setTagSelectedLine([]);
    // // setTagSelectedBar([]);

    // setSectionSelected("");

    // setSectionDropDisable(true);
    // dispatch({
    //   type: "ADD_START_DATE",
    //   payload: "",
    // });
    // dispatch({ type: "ADD_END_DATE", payload: "" });

    dispatch({
      type: "FILTER_ERROR",
      payload: "",
    });
    setTagsData([]);
    setPlantSelected([]);
    setSectionSelected("");
    // setStartDate(null);
    // setEndDate(null);
    setSectionDropDisable(true);
    dispatch({
      type: "ADD_START_DATE",
      payload: "",
    });
    dispatch({ type: "ADD_END_DATE", payload: "" });
  }

  async function getTagsApiCall() {
    let payload = [];
    if (plantSelected.length > 0) {
      payload = plantSelected.map((plant) => {
        if (selectedSection && selectedSection.value) {
          return {
            Plant: plant.value,
            Line: null,
            Section: selectedSection.value,
          };
        } else {
          return {
            Plant: plant.value,
            Line: null,
            Section: null,
          };
        }
      });
    }

    const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);

    setTagsData([...tagsDatares]);

    tagOptions = [getTagnameBasedOnPlantAndSectionx()].flat();
  }

  const targets = document.querySelectorAll(".drag-target");
  console.debug(targets);

  //Drag and drop functionality
  const handleDragStart = (e) => {
    targets.forEach((target) => target.classList.add("highlight"));
    console.log({ e, target: e.target });
    e.dataTransfer.setData("text", e.target.id);

    let tagUID = "";

    if (e && e.target && e.target.id) {
      let tagObject = JSON.parse(e.target.id);

      if (tagObject && tagObject.value) {
        tagUID = tagObject.value;
      }
    }
    if (tagUID) {
      let tagData = [...tagsData, ...additionalTagNames].filter(
        (tag) => tag.TagUID == tagUID
      );

      if (tagData.length) {
        e.dataTransfer.setData("custom/type", JSON.stringify(tagData[0]));
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    targets.forEach((target) => target.classList.remove("highlight"));
  };

  // Resizing the charts
  function resetResizeCharts() {
    gridRef.current.resetResizeCharts();
  }

  function openSideBar() {
    const sidebar = document.querySelector(".tags-panel");
    console.debug("open side bar", sidebar);
    sidebar.classList.add("active");
  }

  function closeSideBar() {
    const sidebar = document.querySelector(".tags-panel");
    console.debug("close side bar", sidebar);
    sidebar.classList.remove("active");
  }

  const handleLayoutChange = (newLayout) => {
    // Perform actions based on the new layout
    console.debug("Layout changed:", newLayout);

    // Update the layout state
    setLayout(newLayout);
  };

  // ================= Download template as pdf ===================
  const downloadHandler = () => {
    if (isDownloading.current)
      return toast.error("Please wait while the current download is completed");
    try {
      isDownloading.current = true;
      const element = document.getElementsByClassName("graph-types");
      if (!element.length) {
        return toast.error("No chart to download");
      }
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.setFontSize(30);
      pdf.text(pageWidth / 4.7, pageHeight / 2, `Chart Visualization Report`);
      const date = new Date();
      pdf.setFontSize(20);
      pdf.text(
        pageWidth / 2.7,
        pageHeight / 1.8,
        `Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      );
      pdf.text(
        pageWidth / 2.7,
        pageHeight / 1.7,
        `Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
      pdf.addPage();
      // doc.page = 1; // use this as a counter.

      // const footer = (X, Y, index) => {
      //   pdf.text(X, Y, index); //print number bottom right
      // };
      const gaugeChartTagName = document.getElementsByClassName("active-tag");
      const chartTypeContainer = document.getElementsByClassName(
        "chart-type-container"
      );

      if (chartTypeContainer.length) {
        for (let i = 0; i < chartTypeContainer.length; i++) {
          chartTypeContainer[i].classList.add("hide-chart-name");
        }
      }
      // chartCloseBtn[0].classList.add("d-none")
      if (gaugeChartTagName.length) {
        gaugeChartTagName[0].classList.add("gauge-tag-name");
      }
      for (let i = 0; i < element.length; i++) {
        html2canvas(element[i], {
          scale: 1,
        }).then((canvas) => {
          const widthRatio = pageWidth / canvas.width;
          const heightRatio = pageHeight / canvas.height;
          const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

          const canvasWidth = canvas.width * (ratio / 1.05);
          const canvasHeight = canvas.height * (ratio / 1.05);

          const marginX = (pageWidth - canvasWidth) / 2;
          const marginY = (pageHeight - canvasHeight) / 2;
          pdf.addImage(
            canvas.toDataURL("images/png", 1),
            "PNG",
            marginX,
            marginY,
            canvasWidth,
            canvasHeight
          );
          // pdf.addImage(canvas.toDataURL("images/png", 1), 'PNG', marginX, marginY, canvasWidth, canvasHeight);
          // footer(pageWidth / 2, pageHeight - 20, i + 1);

          pdf.text(pageWidth / 2, pageHeight - 10, `${i + 1}`); //print page number

          if (i === element.length - 1) {
            pdf.save("charts.pdf");
            toast.success("Downloaded successfully");
          } else {
            pdf.addPage();
          }
        });
      }
      if (gaugeChartTagName.length) {
        gaugeChartTagName[0].classList.remove("gauge-tag-name");
      }
      // console.debug(chartCloseBtn)
      if (chartTypeContainer.length) {
        for (let i = 0; i < chartTypeContainer.length; i++) {
          chartTypeContainer[i].classList.remove("hide-chart-name");
        }
      }
    } catch (err) {
      toast.error("Some Error Occured");
      console.debug(err);
    } finally {
      isDownloading.current = false;
    }
  };

  const delay = async (ms) =>
    new Promise((resolve) => setTimeout(() => resolve(), ms));

  const onDashboardSaveWarningExit = () => {
    console.debug("Exit");
    setShowDashboardSaveWarningModel(false);
    changeDashboardUser(changeDashboardUserTo.current, null, true);
  };
  const onDashboardSaveWarningSaveNExit = async () => {
    console.debug("Save and Exit");
    setShowDashboardSaveWarningModel(false);
    await saveDashboard();
    await delay(1000);
    console.debug("all dashboard: ", allDashboards);
    changeDashboardUser(changeDashboardUserTo.current);
  };

  const onDashboardInputCancel = () => {
    console.debug("Cancel");
    setShowDashboardNameModal(false);
    setNameErrorMessage("");
  };

  const [nameInputErrorMessage, setNameErrorMessage] = useState("");
  const onDashboardNameInput = async () => {
    const modalInput = document.getElementById("dashboard-name");
    const name = modalInput.value;
    // check if name is empty
    if (!name || !name.trim().length) {
      setNameErrorMessage("Please enter a name");
      return;
    }

    // check if name already exists
    const isNameAlreadyExists = allDashboards.some((d) => d.name === name);

    if (isNameAlreadyExists) {
      setNameErrorMessage("Name already exists");
      return;
    }

    modalInput.value = "";

    setShowDashboardNameModal(false);

    document.getElementById("selected-tags-panel").innerHTML = "";
    if (allDashboards.length) {
      setCurrentDashboard({
        layout: [],
        tags: {},
        plants: [],
        name,
      });
    } else {
      currentDashboard.name = name;
      console.debug("Current dashboard is", currentDashboard);
      await gridRef.current.saveDashboard();
      setCurrentDashboard(currentDashboard);
    }
    isDashboardSaved.current = false;
    gridRef.current.emptyGrid();
  };

  const dashboardSaveWarningModel = () => {
    return (
      <Modal show={showDashboardSaveWarningModel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to exit without saving ?</Modal.Body>
        <Modal.Footer>
          <button
            className="btn nav-btns cancelButton"
            onClick={() => onDashboardSaveWarningExit()}
          >
            Exit
          </button>

          <button
            className="
          px-3 py-1
          text-sm
          rounded
          bg-orange-500
          text-black
          hover:opacity-90
          transition
        "

            onClick={() => onDashboardSaveWarningSaveNExit()}
          >
            Save and Exit
          </button>
        </Modal.Footer>
      </Modal>
    );
  };

  const dashboardNameModal = () => {
    return (
      <Modal show={showDashboardNameModal} centered>
        <div className=" rounded-md">

          <Modal.Header
            closeButton
            className="border-b "
          >
            <Modal.Title className="text-sm font-semibold">
              New Dashboard
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-sm space-y-2">
            <p className="">
              Enter dashboard name:
            </p>

            <input
              id="dashboard-name"
              placeholder="My Dashboard"
              className="
          w-full
          px-2 py-1
          text-sm
          rounded
          border
          border-[var(--input-enable-border)]

          focus:outline-none
        "
            />

            <small className="text-red-500">
              {nameInputErrorMessage}
            </small>
          </Modal.Body>

          <Modal.Footer className="border-t border-[var(--search-border)] flex gap-2">

            <button
              onClick={() => onDashboardInputCancel()}
              className="
          px-3 py-1
          text-sm
          rounded
          border
          border-[var(--button-border)]
          bg-[var(--button-bg)]
          text-[var(--text-color)]
          hover:bg-[var(--button-hover-bg)]
          transition
        "
            >
              Cancel
            </button>

            <button
              onClick={() => onDashboardNameInput()}
              className="
          px-3 py-1
          text-sm
          rounded
          bg-orange-500
          text-black
          hover:opacity-90
          transition
        "
            >
              Create
            </button>

          </Modal.Footer>

        </div>
      </Modal>
    );
  };

  // console.debug(tagOptions)

  // ==============================================================

  return (
    <div className="relative pb-0 md:pt-0">
      <div className="flex items-start  gap-[10px] h-full">

        <div className="h-full w-[20%] min-w-0 max-w-[20%] overflow-hidden bg-[var(--bg-leftdrawer)] sticky top-0 
    md:static 
    max-md:absolute max-md:top-[80px] max-md:left-[-200px] max-md:w-[200px] max-md:h-[90%] max-md:z-[5] transition-all duration-100">
          <div className=" ml-2 mt-2 flex text-[18px] font-semibold text-[var(--title)] mb-2 pb-1 border-b border-[var(--form-border)]">
            <span>Charts Visualization</span>
          </div>
          <div className="border rounded-lg border-[color:var(--left-drawer-footer-border)] h-[calc(100%-16px)] mt-2 mx-1 py-2 px-2">
            {/* cross icon */}

            {isPhone && (
              <div
                className="w-100 text-right cross-icon"
                onClick={closeSideBar}
              >
                X
              </div>
            )}
            {/* <div className="">
              <label className="mb-2 text-[var(--text-color)]">Charts</label>
              <div className="chart-types-selector">
                {Object.entries(chartTypesMap).map(
                  ([chartType, chartTypeMap], index) => {
                    return (
                      <Tooltip title={chartTypeMap}>
                        <div
                          id={"drag-" + chartType}
                          key={index}
                          className="chart-types-selector__item"
                          draggable="true"
                          onDragStart={handleChartSelectorDragStart}
                          onDragEnd={handleChartSelectorDragEnd}
                          onTouchStart={handleChartSelectorDragStart}
                          onTouchEnd={handleChartSelectorDragEnd}
                          tooltip="qw"
                        >
                          
                          {chartIconsMap[chartTypeMap]}
                        </div>
                      </Tooltip>
                    );
                  }
                )}
              </div>
            </div> */}

            <div>
              <label className="mb-2 text-[var(--text-color)] block">Charts</label>

              <div className="grid grid-cols-4 gap-[10px]">
                {Object.entries(chartTypesMap).map(([chartType, chartTypeMap], index) => {
                  return (
                    <Tooltip title={chartTypeMap} key={index}>
                      <div
                        id={"drag-" + chartType}
                        draggable="true"
                        onDragStart={handleChartSelectorDragStart}
                        onDragEnd={handleChartSelectorDragEnd}
                        onTouchStart={handleChartSelectorDragStart}
                        onTouchEnd={handleChartSelectorDragEnd}
                        className="
              flex items-center justify-center
              rounded-[5px]
              cursor-pointer
              transition-all duration-300
              bg-[var(--card-bg)]
              text-[var(--text-color)]
              border border-[var(--search-border)]
              hover:shadow-[var(--card-shadow-onhover)]
              font-medium
              text-[1.5em]
              py-[12%]
            "
                      >
                        {chartIconsMap[chartTypeMap]}
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
            </div>

            <div className="overflow-auto bg-[var(--bg-leftdrawer)] text-[var(--text-color)] " style={{ maxHeight: "80vh" }}>
              <div className="relative  mt-1">
                <label className="text-sm text-[var(--text-color)]">
                  Plant <span className="text-red-500">*</span>
                </label>

                <Select
                  className={
                    validationErrorMsg1.plant
                      ? "error-input basic-single"
                      : "basic-single"
                  }
                  ref={selectedPlant}
                  classNamePrefix="select"
                  value={plantSelected}
                  onChange={updateSectionData}
                  formatOptionLabel={formatOptionLabel}
                  isClearable={false}
                  isSearchable
                  isMulti
                  options={
                    showingInTrend
                      ? getPlants(data.plant)
                      : getPlants(authProvider?.plants)
                  }
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      minHeight: "29px",
                      height: "29px",
                      backgroundColor: "var(--input-enable-bg)",
                      borderColor: state.isFocused
                        ? "var(--picker-accent)"
                        : "var(--input-enable-border)",
                      alignItems: "center",
                      boxShadow: "none", // ❌ remove blue outline

                      ":hover": {
                        borderColor: "var(--picker-accent)",
                      },
                    }),

                    menu: (base) => ({
                      ...base,
                      backgroundColor: "var(--bg-leftdrawer)",
                      border: "1px solid var(--search-border)",
                      borderRadius: "6px",
                      boxShadow: "var(--card-shadow)",
                    }),

                    valueContainer: (base) => ({
                      ...base,
                      height: "29px",
                      padding: "0 6px",
                      gap: "4px",
                    }),

                    input: (base) => ({
                      ...base,
                      margin: 0,
                      padding: 0,
                      color: "var(--text-color)",
                    }),

                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: "var(--search-bg)",
                      border: "1px solid var(--search-border)",
                      borderRadius: "4px",
                      height: "18px",
                      alignItems: "center",
                    }),

                    multiValueLabel: (base) => ({
                      ...base,
                      padding: "0 4px",
                      fontSize: "11px",
                      color: "var(--text-color)",
                    }),

                    multiValueRemove: (base) => ({
                      ...base,
                      color: "red",
                      padding: "0 3px",
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: "rgba(255,0,0,0.15)",
                        color: "red",
                      },
                    }),

                    indicatorsContainer: (base) => ({
                      ...base,
                      height: "29px",
                    }),

                    dropdownIndicator: (base) => ({
                      ...base,
                      padding: "3px",
                    }),

                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isSelected
                        ? "var(--button-hover-bg)"
                        : state.isFocused
                          ? "var(--search-bg)"
                          : "transparent",
                      color: "var(--text-color)",
                      cursor: "pointer",
                      fontSize: "12px",
                      padding: "5px 8px",
                      ":active": {
                        backgroundColor: "var(--button-hover-bg)",
                      },
                    }),

                    clearIndicator: (base) => ({
                      ...base,
                      padding: "3px",
                    }),
                  }}
                />
                {validationErrorMsg1.plant && (
                  <p
                    className="invalid-text mt-1 ml-2"
                    style={{ position: "absolute" }}
                  >
                    {validationErrorMsg1.plant}
                  </p>
                )}
                <div className="cutomremoveindi">
                  {plantSelected.length === 0 || (
                    <button onClick={updatePlantValueNew} className="p-2 btn">
                      <i className="fa-sharp fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
              </div>
              <div className="relative  mt-1">
                <label className="text-sm text-[var(--text-color)]">
                  Section Name
                </label>
                <div className="space-y-1 w-full">

                  <div className="relative">

                    <Select
                      classNamePrefix="select"
                      ref={selectedSection}
                      value={sectionSelected}
                      onChange={updateTagValue}
                      formatOptionLabel={formatOptionLabel}
                      isClearable={false}
                      isSearchable
                      options={
                        showingInTrend
                          ? getSectionBasedOnPlant(
                            authProvider.plantBasedSection,
                            plantSelected.map((obj) => obj?.label)
                          )
                          : getSectionBasedOnPlant(
                            authProvider.plantBasedSection,
                            plantSelected.map((obj) => obj?.label)
                          )
                      }
                      isDisabled={!showingInTrend && sectionDropDisable}

                      styles={{
                        control: (base, state) => ({
                          ...base,
                          minHeight: "29px",
                          height: "29px",
                          backgroundColor: "var(--input-enable-bg)",
                          borderColor: state.isFocused
                            ? "var(--picker-accent)"
                            : "var(--input-enable-border)",
                          boxShadow: "none", // ❌ remove blue outline
                          borderRadius: "6px",
                          fontSize: "12px",

                          ":hover": {
                            borderColor: "var(--picker-accent)",
                          },
                        }),

                        valueContainer: (base) => ({
                          ...base,
                          height: "29px",
                          padding: "0 6px",
                        }),

                        input: (base) => ({
                          ...base,
                          margin: 0,
                          padding: 0,
                          color: "var(--text-color)", // ✅ search typing color
                        }),

                        singleValue: (base) => ({
                          ...base,
                          color: "var(--text-color)",
                          fontSize: "12px",
                        }),

                        placeholder: (base) => ({
                          ...base,
                          color: "var(--text-color)",
                          opacity: 0.6,
                          fontSize: "12px",
                        }),

                        menu: (base) => ({
                          ...base,
                          backgroundColor: "var(--bg-leftdrawer)",
                          border: "1px solid var(--search-border)",
                          borderRadius: "6px",
                        }),

                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isSelected
                            ? "var(--button-hover-bg)"
                            : state.isFocused
                              ? "var(--search-bg)"
                              : "transparent",
                          color: "var(--text-color)",
                          cursor: "pointer",
                          fontSize: "12px",
                          padding: "5px 10px",
                        }),

                        indicatorsContainer: (base) => ({
                          ...base,
                          height: "29px",
                        }),

                        dropdownIndicator: (base) => ({
                          ...base,
                          padding: "3px",
                        }),
                      }}
                    />

                    {sectionSelected?.length !== 0 && (
                      <button
                        onClick={updateTagValueNew}
                        className="absolute right-8 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600 transition text-sm"
                      >
                        <i className="fa-sharp fa-solid fa-xmark"></i>
                      </button>
                    )}

                  </div>

                  {/* Clear Button */}
                  {sectionSelected?.length !== 0 && (
                    <button
                      onClick={updateTagValueNew}
                      className="
        absolute right-8 top-1/2 -translate-y-1/2
        text-red-500
        hover:text-red-600
        transition
        text-sm
        "
                    >
                      <i className="fa-sharp fa-solid fa-xmark"></i>
                    </button>
                  )}


                </div>
                <div className=" flex justify-end">
                  {sectionSelected.length !== 0 && (
                    <button
                      onClick={updateTagValueNew}
                      className="p-1 text-red-500 hover:text-red-600 transition"
                    >
                      <i className="fa-sharp fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
              </div>
              <div
                className={`relative ${plantSelected.length !== 0 || sectionSelected !== ""
                  ? "block"
                  : "hidden"
                  }`}
              >
                <div className="mt-1 border border-[var(--form-border)] rounded-md overflow-hidden bg-[var(--bg-leftdrawer)]">
                  <div className="border border-[var(--form-border)] rounded-md overflow-hidden bg-[var(--bg-leftdrawer)]">

                    {/* Header */}
                    <h2>
                      <button
                        type="button"
                        onClick={getTagsApiCall}
                        className="
      w-full flex items-center justify-between
      px-3 text-center
      text-sm font-medium
      text-[var(--text-color)]
      bg-[var(--button-bg)]
      border-b border-[var(--form-border)]
      transition
      "
                      >
                        Tags
                      </button>
                    </h2>

                    {/* Content */}
                    <div className="px-1 overflow-y-auto" style={{ maxHeight: "40vh" }}>

                      {tagOptions.length !== 0 && (
                        <input
                          type="text"
                          placeholder="Search Tags"
                          onChange={searchTags}
                          className=" w-full mb-2 px-2 py-0.5 text-sm rounded border border-[var(--search-border)] bg-[var(--input-enable-bg)] text-[var(--text-color)] placeholder-[var(--search-placeholder)] focus:outline-none  "
                        />
                      )}

                      <ul className="space-y-1">

                        {!recordsFound || plantSelected.length === 0 ? (
                          <li className="text-sm text-[var(--card-subtle)] px-2 py-1">
                            No Records Found
                          </li>
                        ) : selectedTagList.length !== 0 ? (

                          selectedTagList.map((i) => {
                            return (
                              <li
                                draggable
                                key={i.value + i.label}
                                id={JSON.stringify(i)}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragOver}
                                onTouchStart={handleDragStart} onTouchEnd={handleDragOver}
                                className="px-2 py-0.5 text-[10px] font-medium text-[var(--text-color)] rounded cursor-move hover:bg-[var(--search-bg)] transition break-all w-full"
                              >
                                {i.label && keywords?.length > 0 && keywords[0]?.trim() !== "" ? (
                                  <Highlighter
                                    highlightClassName="tag-search-match-key"
                                    searchWords={keywords}
                                    textToHighlight={i.label}
                                  />
                                ) : (
                                  i.label
                                )}
                              </li>
                            );
                          })

                        ) : (

                          tagOptions.map((i) => {
                            return (
                              <li
                                draggable
                                key={i.value + i.label}
                                id={JSON.stringify(i)}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragOver}
                                className=" px-2 py-1 text-sm font-medium text-[var(--text-color)] rounded cursor-move hover:bg-[var(--search-bg)] transition "
                              >
                                {i.label}
                              </li>
                            );
                          })

                        )}

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div
              className="colcustom-13 pl-2 pr-2"
              style={{
                marginTop: "12px",
              }}
            >
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={resizeCharts}
              >
                Reset Resize
              </button>
            </div> */}

              {validationErrorMsg && (
                <p className="invalid-text mt-1 ml-2 -inline">
                  {validationErrorMsg}
                </p>
              )}
              {filterData.filterError && (
                <Alert errMsg={filterData.filterError} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full w-full bg-[var(--bg-main-container)] text-[var(--text-color)]">
          <div className="flex items-center gap-3 px-3 py-2 shadow-[var(--header-shadow)] flex-wrap">
            <div className="flex-1 min-w-0 graph-tags-panel" id="selected-tags-panel"></div>
            <div className="flex flex-row items-center  flex-wrap dash-actions">
              {/* <div className="startDate">
                <Tooltip title="Start Date" placement="top-start">
                  <DatePicker
                    maxDate={new Date()}
                    closeOnScroll={true}
                    selected={startDateValidationText ? new Date() : startDate}
                    className={
                      startDateValidationText
                        ? "error-input form-control"
                        : "form-control"
                    }
                    placeholderText={
                      startDateValidationText
                        ? "Pick a valid date"
                        : "Pick start date"
                    }
                    onChange={(date) => {
                      if (date > new Date()) {
                        setStartDateValidation("Pick a valid date");
                      } else {
                        setStartDate(date);
                        setStartDateValidation("");
                      }
                    }}
                    showTimeSelect
                    dateFormat="d/MM/yyyy h:mm aa"
                    timeIntervals={1}
                    calendarClassName="rasta-stripes"
                    readOnly={!showingInTrend && sectionDropDisable}
                  />
                </Tooltip>
              </div> */}
              <div className="flex items-center" placement="top-start">
                <Tooltip title="Start Date" placement="top-start">
                  <DatePicker
                    maxDate={new Date()}
                    closeOnScroll
                    selected={startDateValidationText ? new Date() : startDate}
                    className={`
        h-[34px] px-2 text-sm rounded
        bg-[var(--input-enable-bg)]
        text-[var(--text-color)]
        border
        ${startDateValidationText
                        ? "border-red-500"
                        : "border-[var(--input-enable-border)]"}
      `}
                    placeholderText={
                      startDateValidationText
                        ? "Pick a valid date"
                        : "Pick start date"
                    }
                    onChange={(date) => {
                      if (date > new Date()) {
                        setStartDateValidation("Pick a valid date");
                      } else {
                        setStartDate(date);
                        setStartDateValidation("");
                      }
                    }}
                    showTimeSelect
                    dateFormat="d/MM/yyyy h:mm aa"
                    timeIntervals={1}
                    calendarClassName="rasta-stripes"
                    readOnly={!showingInTrend && sectionDropDisable}
                  />
                </Tooltip>
              </div>

              {/* ////////// */}

              {/* End Date */}
              {/* <div className="endDate">
                <Tooltip title="End Date" placement="top-start">
                  <DatePicker
                    maxDate={new Date()}
                    closeOnScroll={true}
                    selected={endDateValidationText ? new Date() : endDate}
                    className={
                      endDateValidationText
                        ? "error-input form-control"
                        : "form-control"
                    }
                    placeholderText={
                      endDateValidationText
                        ? "Pick a valid date"
                        : "Pick end date"
                    }
                    onChange={(date) => {
                      if (date > new Date()) {
                        setEndDateValidation("Pick a valid date");
                      } else {
                        setEndDate(date);
                        setEndDateValidation("");
                      }
                    }}
                    showTimeSelect
                    dateFormat="d/MM/yyyy h:mm aa"
                    timeIntervals={1}
                    calendarClassName="rasta-stripes"
                    readOnly={!showingInTrend && sectionDropDisable}
                  />
                </Tooltip>
              </div> */}

              <div className="flex items-center">
                <Tooltip title="End Date" placement="top-start">
                  <DatePicker
                    maxDate={new Date()}
                    closeOnScroll
                    selected={endDateValidationText ? new Date() : endDate}
                    className={`
        h-[34px] px-2 text-sm rounded
        bg-[var(--input-enable-bg)]
        text-[var(--text-color)]
        border
        ${endDateValidationText
                        ? "border-red-500"
                        : "border-[var(--input-enable-border)]"
                      }
      `}
                    placeholderText={
                      endDateValidationText
                        ? "Pick a valid date"
                        : "Pick end date"
                    }
                    onChange={(date) => {
                      if (date > new Date()) {
                        setEndDateValidation("Pick a valid date");
                      } else {
                        setEndDate(date);
                        setEndDateValidation("");
                      }
                    }}
                    showTimeSelect
                    dateFormat="d/MM/yyyy h:mm aa"
                    timeIntervals={1}
                    calendarClassName="rasta-stripes"
                    readOnly={!showingInTrend && sectionDropDisable}
                  />
                </Tooltip>
              </div>
              {/* /////////////// */}

              {/* Interval */}
              {/* <div className="interval">
                <Select
                  className={
                    validationErrorMsg1.interval
                      ? "error-input basic-single"
                      : "basic-single"
                  }
                  classNamePrefix="Select"
                  value={interval}
                  onChange={(selected) => {
                    setIntervalValidation("");
                    dispatch({ type: "ERROR_FALSE" });
                    setIntervalValue(selected);
                  }}
                  formatOptionLabel={formatOptionLabel}
                  isClearable={false}
                  isSearchable={true}
                  options={intervalOptions}
                // isDisabled={!showingInTrend && sectionDropDisable}
                />
              </div> */}
              <div className="flex items-center w-[100px]">
                <Select
                  classNamePrefix="select"
                  value={interval}
                  onChange={(selected) => {
                    setIntervalValidation("");
                    dispatch({ type: "ERROR_FALSE" });
                    setIntervalValue(selected);
                  }}
                  formatOptionLabel={formatOptionLabel}
                  isClearable={false}
                  isSearchable
                  options={intervalOptions}

                  styles={{
                    control: (base, state) => ({
                      ...base,
                      minHeight: "29px",
                      height: "29px",
                      backgroundColor: "var(--input-enable-bg)",
                      borderColor: validationErrorMsg1.interval
                        ? "red"
                        : state.isFocused
                          ? "var(--picker-accent)"
                          : "var(--input-enable-border)",
                      boxShadow: "none", // ❌ remove blue outline
                      borderRadius: "6px",
                      fontSize: "12px",

                      ":hover": {
                        borderColor: "var(--picker-accent)",
                      },
                    }),

                    valueContainer: (base) => ({
                      ...base,
                      height: "29px",
                      padding: "0 6px",
                    }),

                    input: (base) => ({
                      ...base,
                      margin: 0,
                      padding: 0,
                      color: "var(--text-color)", // ✅ search text color
                    }),

                    singleValue: (base) => ({
                      ...base,
                      color: "var(--text-color)",
                      fontSize: "12px",
                    }),

                    placeholder: (base) => ({
                      ...base,
                      color: "var(--text-color)",
                      opacity: 0.6,
                      fontSize: "12px",
                    }),

                    indicatorsContainer: (base) => ({
                      ...base,
                      height: "29px",
                    }),

                    dropdownIndicator: (base) => ({
                      ...base,
                      padding: "3px",
                    }),

                    menu: (base) => ({
                      ...base,
                      backgroundColor: "var(--bg-leftdrawer)",
                      border: "1px solid var(--search-border)",
                      borderRadius: "6px",
                    }),

                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isSelected
                        ? "var(--picker-accent)" // ✅ orange selected
                        : state.isFocused
                          ? "var(--search-bg)" // hover
                          : "transparent",

                      color: state.isSelected ? "#fff" : "var(--text-color)",

                      cursor: "pointer",
                      fontSize: "12px",
                      padding: "5px 8px",

                      ":active": {
                        backgroundColor: "var(--picker-accent)",
                      },
                    }),
                  }}
                />
              </div>
              {/*  */}
              <button
                title="Reset Resize"
                className="
                            flex items-center justify-center
                            w-8 h-8
                            rounded-md
                            bg-[var(--button-bg)]
                            text-[var(--text-color)]
                            border border-[var(--button-border)]
                            hover:bg-[var(--button-hover-bg)]
                            transition
  "
                onClick={openSideBar}
              >
                <BiMenu />
              </button>
              <button
                title="Reset Resize"
                onClick={resetResizeCharts}
                className="
                            flex items-center justify-center
                            w-8 h-8
                            rounded-md
                            bg-[var(--button-bg)]
                            text-[var(--text-color)]
                            border border-[var(--button-border)]
                            hover:bg-[var(--button-hover-bg)]
                            transition
  "
              >
                <BiReset className="text-lg" />
              </button>
              <button
                className="
                            flex items-center justify-center
                            w-8 h-8
                            rounded-md
                            bg-[var(--button-bg)]
                            text-[var(--text-color)]
                            border border-[var(--button-border)]
                            hover:bg-[var(--button-hover-bg)]
                            transition
  "
                onClick={saveDashboard}
                title="Save Dashboard"
              >
                <BiSave />
              </button>

              <button
                disabled={isDownloading.current}
                onClick={downloadHandler}
                title="Download Dashboard"
                className="
                            flex items-center justify-center
                            w-8 h-8
                            rounded-md
                            bg-[var(--button-bg)]
                            text-[var(--text-color)]
                            border border-[var(--button-border)]
                            hover:bg-[var(--button-hover-bg)]
                            transition
  "
              >
                <strong >
                  <BsDownload />
                </strong>
              </button>
              {allDashboards.length || currentDashboard.name ? (
                <button
                  onClick={deleteDashboard}
                  title="Delete Dashboard"
                  className="
                            flex items-center justify-center
                            w-8 h-8
                            rounded-md
                            bg-[var(--button-bg)]
                            text-[var(--text-color)]
                            border border-[var(--button-border)]
                            hover:bg-[var(--button-hover-bg)]
                            transition
  "
                >
                  <BiTrash />
                </button>
              ) : (
                ""
              )}
              {/* check if allDashboard contains atleast one item then render select */}

              {allDashboards.length || currentDashboard.name ? (
                <div className="w-[120px]">
                  <Select
                    classNamePrefix="select"
                    options={getDashboardUsers(allDashboards)}
                    isMulti={false}
                    onChange={changeDashboardUser}
                    value={{
                      label: currentDashboard.name,
                      value: currentDashboard.name,
                    }}
                    styles={{
                      control: (base) => ({
                        ...base,
                        minHeight: "26px",
                        height: "26px",
                        backgroundColor: "var(--input-enable-bg)",
                        borderColor: "var(--input-enable-border)",
                        boxShadow: "none",
                        borderRadius: "6px",
                        fontSize: "12px",
                      }),

                      valueContainer: (base) => ({
                        ...base,
                        padding: "0 3px",   // 🔹 horizontal padding reduced
                      }),

                      singleValue: (base) => ({
                        ...base,
                        color: "var(--text-color)",
                        fontSize: "12px",
                        margin: 0,
                      }),

                      dropdownIndicator: (base) => ({
                        ...base,
                        padding: "1px",
                      }),

                      indicatorsContainer: (base) => ({
                        ...base,
                        height: "26px",
                      }),

                      menu: (base) => ({
                        ...base,
                        backgroundColor: "var(--bg-leftdrawer)",
                        border: "1px solid var(--search-border)",
                        borderRadius: "6px",
                      }),

                      option: (base, state) => ({
                        ...base,
                        fontSize: "12px",
                        padding: "4px 6px",   // 🔹 horizontal padding reduced
                        backgroundColor: state.isSelected
                          ? "var(--button-hover-bg)"
                          : state.isFocused
                            ? "var(--search-bg)"
                            : "transparent",
                        color: "var(--text-color)",
                      }),
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <hr />

          {/* <div
            className="graph-div-container"
            id="graph-container"
            onDrop={handleDropAdd}
            onDragOver={handleChartDragOver}
          >
            <div className="chart-add-target" id="chart-add-target">
              Drop Element Here
            </div>
            <GridLayout
              startDate={startDate}
              endDate={endDate}
              interval={interval}
              onLayoutChange={handleLayoutChange}
              chartTypes={selectedChartTypes}
              plantSelected={plantSelected}
              sectionSelected={sectionSelected}
              ref={gridRef}
              allDashboards={allDashboards}
              currentDashboard={currentDashboard}
              setCurrentDashboard={setCurrentDashboard}
              setAllDashboards={setAllDashboards}
              markDashboardUnsaved={markDashboardUnsaved}
              isChartLoading={isChartLoading}
            />

            {dashboardNameModal()}
            {dashboardSaveWarningModel()}
           
          </div> */}

          <div
            id="graph-container"
            onDrop={handleDropAdd}
            onDragOver={handleChartDragOver}
            className="
    relative
    flex-1
    w-full
    h-full
    overflow-auto
    bg-[var(--bg-main-container)]

    border-[var(--search-border)]
  "
          >
            <div
              id="chart-add-target"
              className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      text-sm
      text-[var(--text-color)]
      border-2
      border-dashed
      border-[var(--search-border)]
      rounded-md
      pointer-events-none
      opacity-60
    "
            >
              {/* Drop Element Here */}
            </div>

            <GridLayout
              startDate={startDate}
              endDate={endDate}
              interval={interval}
              onLayoutChange={handleLayoutChange}
              chartTypes={selectedChartTypes}
              plantSelected={plantSelected}
              sectionSelected={sectionSelected}
              ref={gridRef}
              allDashboards={allDashboards}
              currentDashboard={currentDashboard}
              setCurrentDashboard={setCurrentDashboard}
              setAllDashboards={setAllDashboards}
              markDashboardUnsaved={markDashboardUnsaved}
              isChartLoading={isChartLoading}
            />

            {dashboardNameModal()}
            {dashboardSaveWarningModel()}
          </div>
        </div>
      </div>
    </div>
  );
};