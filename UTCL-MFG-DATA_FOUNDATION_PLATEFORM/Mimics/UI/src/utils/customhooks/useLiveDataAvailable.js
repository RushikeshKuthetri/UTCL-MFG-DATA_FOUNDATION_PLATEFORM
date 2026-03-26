/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import {
  fetchLiveDataAvailable,
  fetchLiveDataAvailableNew,
} from "../apicalls/millpageapi";
import { useDispatch } from "react-redux";
import { addLocalStorage } from "../storageFunctions/localStorage";
import { accesslogshistory } from "../apicalls/accesslogshistory";

export const useLiveDataAvailable = (plantCode) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "LOADING_TRUE" });
        const liveDataResponse = await fetchLiveDataAvailable(
          plantCode,
          dispatch
        );
        dispatch({ type: "LOADING_FALSE" });
        if (liveDataResponse) {
          // console.log({liveDataResponse})
          addLocalStorage(
            "plant_data_coming_status",
            JSON.stringify(liveDataResponse)
          );
          dispatch({
            type: "PLANT_LIVE_DATA_CONFIRMATION",
            payload: liveDataResponse,
          });
        } else addLocalStorage("plant_data_coming_status", JSON.stringify({}));
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);
};

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useLiveDataAvailableNew = (plantCode, tagsData, sectionName) => {
  // console.log({ plantCode, tagsData });
  const dispatch = useDispatch();
  const previousData = usePrevious({ plantCode, tagsData });
  useEffect(() => {
    (async () => {
      try {
        if (plantCode && tagsData.length) {
          if (
            !previousData ||
            previousData.plantCode != plantCode ||
            JSON.stringify(previousData.tagsData) != JSON.stringify(tagsData)
          ) {
            const displayTagNames = tagsData
              .filter((item) => item.IsDisplay)
              .map((item) => ({
                propertyId: item.propertyId || item.PropertyId,
                assetId: item.assetId || item.AssetId,
                key: item.key || item.TagName,
              }));

            if (displayTagNames.length) {
              await accesslogshistory({
                plant: plantCode,
                section: sectionName,
              });
              dispatch({ type: "LOADING_TRUE" });
              const liveDataResponse = await fetchLiveDataAvailableNew(
                plantCode,
                dispatch,
                displayTagNames
              );
              dispatch({ type: "LOADING_FALSE" });
              if (liveDataResponse) {
                addLocalStorage(
                  "plant_data_coming_status",
                  JSON.stringify(liveDataResponse)
                );
                dispatch({
                  type: "PLANT_LIVE_DATA_CONFIRMATION",
                  payload: liveDataResponse,
                });
              } else
                addLocalStorage("plant_data_coming_status", JSON.stringify({}));
            } else {
              addLocalStorage("plant_data_coming_status", JSON.stringify({}));
            }
          }
        }
      } catch (error) {
        console.log({ error });
      }
    })();
  }, [plantCode, JSON.stringify(tagsData)]);
};
