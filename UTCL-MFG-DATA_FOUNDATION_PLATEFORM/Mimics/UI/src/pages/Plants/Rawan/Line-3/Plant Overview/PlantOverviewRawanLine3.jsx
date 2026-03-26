// Added by TRIDAI

import { useDispatch, useSelector } from "react-redux";
import { Alert, BlackContainer, PlantOverviewRawan } from "../../../../../components";

import {
  getLiveDataStatusCondition,
  useLatestDataNew,
  useSocketConnection
} from "../../../../../utils";
import "./PlantOverviewRawanLine3.scss"
import { useLiveDataAvailableNew } from "../../../../../utils/customhooks/useLiveDataAvailable";
import { plantOverviewTagList } from "../../../../../data/rawan/line 3/PlantOverviewData/PlantOverviewData";
import { useEffect, useMemo } from "react";



export const PlantOverviewRawanLine3 = () => {
  const dispatch = useDispatch();

  const sectionName = "";
  const tagNames = useMemo(() => {
    return plantOverviewTagList.filter(
      tag => !tag.key?.startsWith("TAG_NOT_AVAILABLE")
    );
  }, []);;


  // Live-data hooks
  useLiveDataAvailableNew("RWCW", tagNames, sectionName);
  const liveDataStatusCondition = getLiveDataStatusCondition("RWCW");
  // const liveDataStatusCondition = true;

  useLatestDataNew("RWCW", "Rawan", sectionName, "", tagNames);
  useSocketConnection(tagNames, liveDataStatusCondition);


  useEffect(() => {
    // Tag details are static so dispatched from here to redux
    dispatch({
      type: "ADD_PLANT_BASED_TAGNAMES",
      payload: { tagNames: tagNames }
    });
    dispatch({
      type: "SECTION_TAGS_DETAILS",
      payload: { tagNames: tagNames }

    });
    dispatch({
      type: "HO_TAGS_DETAILS",
      payload: { tagNames: tagNames }
    });
    dispatch({
      type: "ADDITIONAL_SECTION_TAGS_DETAILS",
      payload: { tagNames: tagNames }
    });
  }, []);


  return (
    <div className="bg1">

      {!liveDataStatusCondition && (
        <div className="position-absolute mimic-alert">
          <Alert errMsg="Live data is not coming. Please contact to your admin." />
        </div>
      )}

      <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-2 pt-2">
        <PlantOverviewRawan />
      </div>
    </div>
  );
};











