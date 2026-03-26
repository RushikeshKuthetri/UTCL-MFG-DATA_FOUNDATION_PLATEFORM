import React, { useEffect } from "react";
import { VisualizationGraphs } from "./VisualizationGraphs";
import { useState, forwardRef, useImperativeHandle } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import { BASE_URL, DOWNLOAD_HANDLER_URL } from "../../base";
import { useRef } from "react";
import { toast } from "react-toastify";
import { chartTypesMap } from "../../data/chartOpions/chatOptions";
import { showToaster } from "../../data/chartOpions/tostHandler";

export const GraphContainer = forwardRef(
  (
    {
      startDate,
      endDate,
      interval,
      chartType,
      plantSelected,
      chartId,
      removeChart,
      onNewTagAddOrRemove,
      initialTags,
      isGroupTags = false,
    },
    ref
  ) => {
    const targets = document.querySelectorAll(".drag-target");
    const selectedTag = useRef([]);
    const currentTag = useRef([]);
    const requestingData = useRef(false);
    const { authProvider } = useSelector((state) => state);
    const [seriesData, setSeriesData] = useState({});
    const currentPlant = useRef(plantSelected.map((i) => i.label));
    const showLoader = () => {
      const loader = document.getElementById(chartId + "loader");
      loader?.classList?.add("active-chart-loader");
    };

    const hideLoader = () => {
      const loader = document.getElementById(chartId + "loader");
      loader.classList.remove("active-chart-loader");
    };

    useEffect(() => {
      if (!initialTags) return;
      // Run function on props change
      // console.log({ initialTags });
      let plants = initialTags.map((i) => i.plant);
      plants = [...new Set(plants)];
      plantSelected = plants.map((i) => ({ label: i, value: i }));

      plants.forEach((plant) => {
        const tags = initialTags
          .filter((i) => i.plant === plant)
          .map((i) => {
            return {
              tagName: i.tagName,
              tagLabel: i.tagLabel,
              tagType: i.tagType,
              isGroup: i.isGroup,

              assetId: i?.assetId,
              propertyId: i?.propertyId,
              TagUID: i?.TagUID,
              description: i?.description,
              UnitOfMeasurement: i?.UnitOfMeasurement,
              TagName: i?.TagName,
            };
          });
        const tagsWithPlant = tags.map((i) => ({
          tagName: i.tagName,
          plant,
          tagType: i.tagType,
          tagLabel: i.tagLabel,
          isGroup: i.isGroup,

          assetId: i?.assetId,
          propertyId: i?.propertyId,
          TagUID: i?.TagUID,
          description: i?.description,
          UnitOfMeasurement: i?.UnitOfMeasurement,
          TagName: i?.TagName,
        }));

        console.debug("Tags are:", tagsWithPlant);
        tagsWithPlant.forEach((tag) => {
          addTagChip(tag.tagName, tag.tagLabel);
        });
        selectedTag.current = tagsWithPlant;
        currentTag.current = [...currentTag.current, ...tagsWithPlant];
        console.debug("current tags are: ", currentTag.current);
        if (isGroupTags) {
          fetchGroupTagsData(currentTag, plant);
        } else {
          fetchData({ current: tagsWithPlant }, plant);
        }
      });

      console.debug("Initial tags are: ", currentTag.current);
    }, []);

    useEffect(() => {
      console.debug("Date change------");
      refreshChartData(true);
    }, [startDate, endDate, interval]);

    const refreshChartData = async (showLoader = false) => {
      console.debug("refreshing chart data...");
      if (isGroupTags) {
        fetchGroupTagsData(
          currentTag,
          plantSelected.map((i) => i.label),
          showLoader,
          false
        );
      } else {
        await fetchData(
          currentTag,
          plantSelected.map((i) => i.label),
          showLoader
        );
      }
    };

    const getFormattedData = async (data, responseData, MinMaxdata) => {
      try {
        // Extract unique timestamps and sort them
        // const uniqueTimestamps = [...new Set(responseData.map(item => item.timestamp))].sort((a, b) => new Date(a) - new Date(b));
        const uniqueTimestamps = [
          ...new Set(
            responseData.map((item) => {
              let timestamp = new Date(item.timestamp);
              timestamp.setUTCHours(timestamp.getUTCHours() - 5);
              timestamp.setUTCMinutes(timestamp.getUTCMinutes() - 30);
              return timestamp.toLocaleString("en-IN", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true, // Ensures the time is in 12-hour format with AM/PM
              });
            })
          ),
        ].sort((a, b) => new Date(a) - new Date(b));
        // console.log(uniqueTimestamps)
        let timeValueArr = [];

        for (const tag of data) {
          // console.log('----ttt------', tag)
          let obj = {
            name: tag.TagName,
            showInLegend: true,
            zIndex: 1,
          };
          // for(const item of responseData) {
          // const tagWiseData = responseData.filter(i=>i.tagUID == tag.TagUID)
          const filteredData = responseData
            .filter((item) => item.tagUID == tag.TagUID)
            .map((item) => {
              let timestamp = new Date(item.timestamp);
              timestamp.setUTCHours(timestamp.getUTCHours() - 5);
              timestamp.setUTCMinutes(timestamp.getUTCMinutes() - 30);
              let arr = [
                // item.timestamp,
                timestamp.toLocaleString("en-IN", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true, // Ensures the time is in 12-hour format with AM/PM
                }),
                item.averageValue == "NaN" ? null : item.averageValue,
              ];
              return arr;
              // {
              //   tagUID: item.tagUID,
              //   timestamp: item.timestamp,
              //   tagName: item.tagName
              // };
            });
          // console.log('---fff-----', filteredData)
          obj.data = filteredData;
          timeValueArr.push(obj);
        }
        let finalOutput = {
          seriesData: timeValueArr,
          uniqueDataDateTime: uniqueTimestamps,
          // minMax: []
          minMax: MinMaxdata,
        };
        return finalOutput;
      } catch (error) {
        console.log("----errorr----", error);
      }
    };

    const getData = async (tags, plant, sTost) => {
      try {
        const tagsToFetch = tags.current.filter((i) => !i.isGroup);
        console.debug(
          "Getting data: ",
          plant,
          tagsToFetch.map((i) => i.tagName)
        );

        if (!tagsToFetch.length) {
          console.debug("no tags to fetch");
          return true;
        }

        // console.log({ tags, plant });

        let assetIds = tags.current.map((tag) => ({
          assetId: tag.assetId,
          propertyId: tag.propertyId,
          TagUID: tag.TagUID,
          description: tag.description,
          UnitOfMeasurement: tag.UnitOfMeasurement,
          TagName: tag.TagName,
        }));

        let tagNames = tags.current.map((tag) => tag.TagUID);
        let uids = tags.current.map((tag) => tag.tagLabel);

        let IsTrendChart = true;
        // "uids": tagData.length ? [tagData[0].TagUID] : [],
        let IsManual = true;

        const response = await axios.post(
          DOWNLOAD_HANDLER_URL,
          {
            plant,
            assetIds,
            tagNames,
            uids,
            IsTrendChart,
            IsManual,
            // tagName: tagsToFetch.map((i) => i.tagName),
            endDate: moment(endDate).toISOString(), //start date as per ui
            startDate: moment(startDate).toISOString(), //end date as per ui
            interval: interval.value,
            userId: authProvider.email,
          },
          {
            responseType: "json", // Assume API returns JSON
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // if (response.data.code === 200) {

        // console.log({ responseData: response.data });

        if (!response.data) {
          // dispatch({ type: "LOADING_FALSE" });
          // dispatch({ type: "ERROR", payload: "Data not found!!" });
          return [];
        }

        let flattenedData = [];
        if (!response.data) {
          // dispatch({ type: "LOADING_FALSE" });
          // dispatch({ type: "ERROR", payload: "Data not found!!" });
          throw new Error("No data found with selected combination!!");
        }

        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          flattenedData = response.data;

          if (response.data.length == 0) {
            // dispatch({ type: "ERROR", payload: "Data not found!!" });
            throw new Error("No data found with selected combination!!");
          }
        }
        // If response.data is an object, check allResults property
        else if (typeof response.data == "object" && response.data.allResults) {
          flattenedData = response.data.allResults;

          if (
            !Array.isArray(response.data.allResults) ||
            response.data.allResults.length == 0
          ) {
            // dispatch({ type: "ERROR", payload: "Data not found!!" });
            throw new Error("Data not found!!");
          }
        }

        let MinMaxdata = response.data.minMax ? response.data.minMax : [];

        // Append new data to finaldata
        let finaldata = [...flattenedData];

        // console.log({ finaldata });

        const formattedData = await getFormattedData(
          assetIds,
          finaldata,
          MinMaxdata
        );

        // console.log({ formattedData });

        if (formattedData && Object.keys(formattedData).length) {
          if (formattedData.minMax.length != formattedData.seriesData.length) {
            throw new Error("No data found with selected combination!!");
          }

          let isDataArrayEmpty = false;
          for (let i = 0; i < formattedData.seriesData.length; i++) {
            if (formattedData.seriesData[i].data.length == 0) {
              isDataArrayEmpty = true;
              break;
            }
          }

          if (isDataArrayEmpty) {
            throw new Error("No data found with selected combination!!");
          }
        }

        // console.debug(response);
        const tagsUnit = {};
        // const tagDate={};
        const tagsDescription = {};
        formattedData.seriesData.forEach((series) => {
          const tagName = series.name.split(",")[0];
          const tagUnit =
            formattedData?.minMax?.find((i) => i["Tag Name"] === tagName)?.[
              "Unit Of Measurement"
            ] || "";

          const tagDescription =
            formattedData?.minMax?.find((i) => i["Tag Name"] === tagName)
              ?.Description || "";
          tagsUnit[series.name] = tagUnit;
          tagsDescription[series.name] = tagDescription;
          // const tagDate={};
          // response.data.uniqueDataDateTime.forEach((sdate,edate)=>{
          //   const startDate=sdate[0];
          //   const endDate=edate[1];
          // });
          // console.log(tagDate);
        });

        // add  id to canvas
        return {
          tagsUnit,
          tagsDescription,
          seriesData: formattedData.seriesData,
        };

        // return {
        //   ...formattedData,
        // };
        // }
      } catch (err) {
        console.debug("error in fetching tags data ", err);
        console.log({ err });
        if (sTost) {
          showToaster(err?.response?.data?.message || err.message, tags, plant);
        }
        return false;
      } finally {
        hideLoader();
      }
    };

    const formatTagsPayload = (tags, plant) => {
      let groupedTags = {};
      const payload = [];

      tags.forEach((tag) => {
        if (groupedTags[tag.tagType]) {
          groupedTags[tag.tagType].push(tag.tagName);
        } else {
          groupedTags[tag.tagType] = [tag.tagName];
        }
      });

      for (const [key, value] of Object.entries(groupedTags)) {
        payload.push({
          type: key,
          tags: value,
        });
      }

      return payload;
    };

    const isTagInPyaload = (payload, tag) => {
      let isTagInPayload = false;
      payload.forEach((i) => {
        if (i.tags.includes(tag)) {
          isTagInPayload = true;
        }
      });
      return isTagInPayload;
    };

    const fetchGroupTagsData = async (
      tags,
      plant,
      sTost,
      sLoader = true,
      sToast = true
    ) => {
      try {
        let tagsToFetch = tags.current.filter((i) => i.isGroup);
        console.debug("tags to fetch are: ", tagsToFetch);
        const tagsPayload = formatTagsPayload(tagsToFetch);
        console.debug("tags payload is: ", tagsPayload);

        requestingData.current = true;
        if (!tagsToFetch.length) {
          console.debug("no group tags to fetch");
          setSeriesData({});
          return true;
        }

        if (sLoader) {
          showLoader();
        }
        const response = await axios.post(
          `${BASE_URL}trendadxForKpi`,

          {
            kpiTags: tagsPayload,
            userId: authProvider.email,
          },
          {
            headers: {
              authorization: `Bearer ${authProvider.token}`,
            },
          }
        );

        if (response.data.code === 200) {
          console.debug("response is: ", response.data);

          let temp = response.data?.result ?? [];
          temp = temp.filter((i) => isTagInPyaload(tagsPayload, i.KPI_Tag));
          console.debug("TEMP IS :: ", temp);
          if (!temp.length && sToast) {
            toast.error("No data found for selected tags");
          }
          temp.map((i) => {
            i.name = i.KPI_Tag;
            i.data = [[i.DateTime, i.Value]];
            i.showInLegend = true;
            i.zIndex = 1;
          });

          const seriesData = {
            tagsUnit: "",
            tagsDescription: "",
            seriesData: temp,
          };

          console.debug("series data is: ", seriesData);
          setSeriesData(seriesData);
        }
      } catch (err) {
        console.debug("error in fetching tags data ", err);
        if (sTost) {
          toast.error(err?.response?.data?.message || err.message);
        }

        return false;
      } finally {
        requestingData.current = false;
        hideLoader();
      }
    };

    const fetchData = async (tags, plant, sLoader = true, sTost = true) => {
      console.debug("fetching data...", tags, plant, sLoader);
      requestingData.current = true;
      if (!tags.current.length) {
        console.debug("no tags to fetch");
        setSeriesData({});
        return true;
      }
      if (sLoader) {
        showLoader();
      }
      const [tagsData] = await Promise.all([getData(tags, plant, sTost)]);

      setSeriesData({});

      console.debug("tags data is: ", tagsData);

      const finalData = tagsData;

      // console.log({ finalData });

      finalData.seriesData = [...finalData.seriesData];

      // console.log({ finalData });

      console.debug("FINAL DATA IN FETCH DATA IS :: ", finalData);

      setSeriesData(finalData);

      hideLoader();
      requestingData.current = false;
    };

    const removeTag = async (e, element) => {
      if (requestingData.current)
        return console.debug("requesting data cancled");

      console.debug("removing tag : ", element, e);

      // add class to e.target show loader
      e.target.innerHTML = "";
      // remove all classes
      e.target.classList.remove("close-btn");
      e.target.classList.add("tag-remove-loader");
      console.debug("current tags are: ", currentTag.current);
      currentTag.current = currentTag.current.filter(
        (i) => i.tagName !== element
      );

      console.debug("IS GROUP TAG : ", isGroupTags);
      let success;
      if (isGroupTags) {
        success = await fetchGroupTagsData(
          currentTag,
          plantSelected.map((i) => i.label),
          true,
          true
        );
      } else {
        success = await fetchData(
          currentTag,
          plantSelected.map((i) => i.label),
          true,
          false
        );
      }
      // if (!success) {
      //   e.target.classList.remove("tag-remove-loader");
      //   e.target.classList.add("close-btn");
      //   e.target.innerHTML = "X";
      //   return;
      // }
      selectedTag.current = currentTag.current;
      onNewTagAddOrRemove(chartId, selectedTag.current);
      e.target.parentNode.remove();
    };

    const removeChartAndTags = async (e) => {
      const tags = document.querySelectorAll(`.${chartId}-tag`);
      tags.forEach((tag) => {
        tag.remove();
      });
      removeChart(chartId);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };
    const handleDropAdd = async (e) => {
      e.stopPropagation();
      targets.forEach((t) => {
        t.classList.remove("highlight");
      });
      e.preventDefault();
      // const chartContainer = document.getElementById("chart-container");
      const tagData = JSON.parse(e.dataTransfer.getData("text"));
      const finalTagData = JSON.parse(e.dataTransfer.getData("custom/type"));
      console.debug("tag data is: ", tagData);
      const tagName = tagData.value;
      const tagLabel = tagData.label;
      const tagType = tagData?.type;
      const tag = {
        tagName,
        tagLabel,
        plant: plantSelected.map((i) => i.label)[0],
        isGroup: tagData.isGroup || false,
        tagType,

        assetId: finalTagData?.assetId,
        propertyId: finalTagData?.propertyId,
        TagUID: finalTagData?.TagUID,
        description: finalTagData?.description,
        UnitOfMeasurement: finalTagData?.UnitOfMeasurement,
        TagName: finalTagData?.TagName,
      };

      const isTagInArr = selectedTag.current.find((i) => i.tagName === tagName);
      if (isTagInArr) {
        toast.warn("Tag already added");
        return;
      }
      if (tagName && !isTagInArr && tagName.length !== 0) {
        const newTags = [...selectedTag.current, tag];

        let success;
        if (tag.isGroup) {
          success = await fetchGroupTagsData(
            { current: newTags },
            plantSelected.map((i) => i.label)
          );
        } else {
          success = await fetchData(
            { current: newTags },
            plantSelected.map((i) => i.label)
          );
        }
        // if (!success) return;//enable it to stop adding tag if error in fetching data ie no data found
        selectedTag.current = newTags;
        currentTag.current = newTags;
        console.debug("Current tags updated are: ", currentTag.current);
        onNewTagAddOrRemove(chartId, newTags);
        addTagChip(tagName, tagLabel);
      }
    };

    const addTagChip = (tag, tagLabel) => {
      console.debug("Tags are: adding tag chip: ", tag, tagLabel);
      const nodeCopy = document.createElement("p");
      const text = document.createElement("span");
      text.innerText = `${tag} ${tagLabel.substring(0, 3)}...`;
      nodeCopy.appendChild(text);
      nodeCopy.id = `${tag}-newId`;
      nodeCopy.className = `chipTag ${chartType}-chip-color ${chartId}-tag chip-tooltip`;

      nodeCopy.setAttribute("title", tagLabel);
      nodeCopy.setAttribute("data-tag", tag);
      const span = document.createElement("span");
      text.addEventListener("click", (e) => {
        // copy text to clipboard
        navigator.clipboard.writeText(tag);
        toast.success("Tag copied to clipboard");
      });
      span.addEventListener("click", (e) => {
        removeTag(e, tag);
      });
      span.className = "close-btn";
      span.innerHTML = `X`;
      nodeCopy.append(span);
      document.getElementById("selected-tags-panel").appendChild(nodeCopy);
    };
    useImperativeHandle(ref, () => ({
      refreshChartData,
    }));
    return (
      <div
        className={`graph-types ${chartType} ${
          isGroupTags ? "graph-group-types" : ""
        }`}
        // id={chartType}
      >
        <div
          className="graph-container"
          id={chartType}
          onDragOver={handleDragOver}
          onDrop={handleDropAdd}
        >
          <div className="drag-target" id={chartType}>
            Drop Here
          </div>
          <div className="chart-loader" id={chartId + "loader"}>
            <div className="inner-loader"></div>
          </div>
          {chartType === "details" && isGroupTags ? (
            <div
              className="chartCloseBtn"
              style={{ position: "absolute", top: ".5rem", right: ".5rem" }}
              onClick={removeChartAndTags}
            >
              x
            </div>
          ) : (
            <div className="chart-type-container d-flex flex-row justify-content-between align-items-center">
              <div className="h-100 d-flex align-items-center">
                <span className={"marker " + `${chartType}-chip-color`}></span>
                <p>{chartTypesMap[chartType]}</p>
              </div>
              <div className="chartCloseBtn" onClick={removeChartAndTags}>
                x
              </div>
            </div>
          )}

          {seriesData &&
          seriesData?.seriesData &&
          seriesData.seriesData.length !== 0 ? (
            <VisualizationGraphs
              data={seriesData}
              type={chartType}
              isGroupTags={isGroupTags}
            />
          ) : chartType === "details" ? (
            <p className="no-data-found-text"> No data found to show details</p>
          ) : chartType === "table-chart" ? (
            <p className="no-data-found-text"> Drop a tag to generate table</p>
          ) : (
            <p className="no-data-found-text"> Drop a tag to generate graph</p>
          )}
        </div>
      </div>
    );
  }
);
