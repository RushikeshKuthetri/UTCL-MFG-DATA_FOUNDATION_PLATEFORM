import "./L3DashboardAndhraPage.scss";

import { Alert, L3DashboardAndhra } from "../../../../../components";
import {
  getLiveDataStatusCondition,
  useLatestDataNew,
  useSectionTagDetails,
  // useLatestData,
  useSocketConnection,
} from "../../../../../utils";
import { useSelector } from "react-redux";
import { useLiveDataAvailableNew } from "../../../../../utils/customhooks/useLiveDataAvailable";
import { useGetAdditionalTagDetail } from "../../../../../utils/customhooks/getAdditionalTagDetails";

export const L3DashboardAndhraPage = () => {
  const plantDetails = {
    plantCode: "APCW",
    plantName: "andhra pradesh",
    sectionName: "PreHeater",
    section: "L3 Dashboard",
    line: "3",
  };
  const extraTagDetails = [
    {
      Section: "Coal Mill",
      Tags: ["KM_L43SK1_SK", "KM_L43MD1_JI"],
    },
    {
      Section: "Cooler",
      Tags: ["CL_473FNF_SI", "CL_473SK1_DT", "DB16_DBW18"],
    },
    {
      Section: "Kiln",
      Tags: ["KILN_TOTAL_FEED_RATE", "KL_463MD1_II", "KL_463MD2_II"],
    },
    {
      Section: "Raw Mill",
      Tags: [
        "RM1_363MD1",
        "RM1_363MD1_JI",
        "RM1_363MD2_JI",
        "RM1_333WF_FEED_ACT",
      ],
    },
    {
      Section: "Raw Mill-2",
      Tags: [
        "RM2_363MD4",
        "RM2_363MD4_JI",
        "RM2_363MD5_JI",
        "RM2_333WF_FEED_ACT",
      ],
    },
  ];
  const { plantCode, plantName, sectionName, section, line } = plantDetails;
  // useLatestData(plantCode, plantName, sectionName, section);
  // useLatestDataNew(
  //     plantCode,
  //     plantName,
  //     sectionName,
  //     section
  //     //  tagNames
  //   );
  // useSocketConnection(plantCode);
  // const liveDataStatusCondition = getLiveDataStatusCondition(plantCode);

  useSectionTagDetails(plantCode, line, sectionName);

  useGetAdditionalTagDetail(plantCode, extraTagDetails);
  const { authProvider } = useSelector((state) => state);

  const tagNames = authProvider?.plantBasedTagnames;
  const additionalTagNames = authProvider?.extraTagDetails;

  let finalTagNames = [];

  if (tagNames && tagNames.length) {
    finalTagNames = [...finalTagNames, ...tagNames];
  }

  if (additionalTagNames && additionalTagNames.length) {
    finalTagNames = [...finalTagNames, ...additionalTagNames];
  }

  useLiveDataAvailableNew(plantCode, finalTagNames, sectionName);
  const liveDataStatusCondition = getLiveDataStatusCondition(plantCode);

  useLatestDataNew(plantCode, plantName, sectionName, "", finalTagNames);
  useSocketConnection(finalTagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      {!liveDataStatusCondition && (
        <div className="position-absolute mimic-alert">
          <Alert errMsg="Live data is not coming. Please contact to your admin." />
        </div>
      )}
      <div className="UHDashboardVikram L3Dashboard">
        <L3DashboardAndhra />
      </div>
    </div>
  );
};
