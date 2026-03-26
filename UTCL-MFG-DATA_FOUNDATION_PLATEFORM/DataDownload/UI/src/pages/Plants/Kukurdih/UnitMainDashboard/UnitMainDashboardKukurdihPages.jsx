import { useSelector } from "react-redux";
import { Alert, UnitMainDashboardKukurdih } from "../../../../components";
import {
  getLiveDataStatusCondition,
  // useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../../../utils";
import "./UnitMainDashboardKukurdihPages.scss";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";
import { useGetAdditionalTagDetail } from "../../../../utils/customhooks/getAdditionalTagDetails";

export const UnitMainDashboardKukurdihPages = () => {
  const extraTagDetails = [
    {
      Section: "Coal Mill",
      Tags: ["KM_L41MD1_JI", "KM_L41MD1_RUN"],
    },
    {
      Section: "Cooler",
      Tags: ["CL_491SI1_LT1", "CL_491SI2_LT1", "CL_471FNF_M01_RUN"],
    },
    {
      Section: "Crusher",
      Tags: ["CR_211MD1_JI", "CR_211MD2_JI", "CR_211CR1P_RUN"],
    },
    {
      Section: "Kiln",
      Tags: [
        "KL_461MD1_II",
        "KL_461MD2_II",
        "KL_451BI1_WT",
        "KL_461KL1_BTE17",
        "KL_461KL1_BTE18",
        "KL_451BI2_WT",
        "KL_481BI1_WT",
        "KL_461MD1_RUN",
      ],
    },
    {
      Section: "Packing Plant",
      Tags: [
        "PP_641PM1_RUN",
        "PP_641PM2_RUN",
        "PP_641PM3_RUN",
        "PP_641PM4_RUN",
      ],
    },
    {
      Section: "PreHeater",
      Tags: [
        "PH_421AM1_SOX",
        "PH_421FN1_M01_RUN",
        "PH_421AM1_O2",
        "PH_421SK1_DT1",
        "PH_391SB1_LT",
        "PH_421AM1_NOX",
      ],
    },
    {
      Section: "Raw Mill-1",
      Tags: ["RM1_361MD1_JI", "RM1_361MD1_M03_RUN"],
    },
    {
      Section: "Raw Mill-2",
      Tags: ["RM2_361MD4_JI", "RM2_331WF_FEED_ACT", "RM2_361MD4_RUN"],
    },
  ];

  useSectionTagDetails("KUCW", "1", "CementMill");
  useGetAdditionalTagDetail("KUCW", extraTagDetails);

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
  useLiveDataAvailableNew("KUCW", finalTagNames);
  const liveDataStatusCondition = getLiveDataStatusCondition("KUCW");

  useLatestDataNew("KUCW", "Kukurdih", "CementMill", "", finalTagNames);
  useSocketConnection(finalTagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      {!liveDataStatusCondition && (
        <div className="position-absolute mimic-alert">
          <Alert errMsg="Live data is not coming. Please contact to your admin." />
        </div>
      )}

      {/* <h1 className="text-center text-white mx-auto my-2 cba-h1">
        Kukurdih- CBA Analysis Data
      </h1> */}
      <div className="table-responsive maindashbordkukurdih mt-2">
        <UnitMainDashboardKukurdih />
      </div>
    </div>
  );
};
