import { useSelector } from "react-redux";
import { BagaUHParamsDashboard } from "../../../../components";
import { kilnCoolerParamsBaga } from "../../../../data/baga/uh/kilnCoolerParams";
import {
  getLiveDataStatusCondition,
  useLatestDataNew,
  useSectionTagDetails,
  // useLatestData,
  useSocketConnection,
} from "../../../../utils";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";
import { useGetAdditionalTagDetail } from "../../../../utils/customhooks/getAdditionalTagDetails";

export const KilnCoolerParamsBagaPage = () => {
  useSectionTagDetails("BGCW", "1", "Kiln");
  const extraTagDetails = [
    { Section: "Clinker Transport", Tags: ["491DP1_TT01"] },
    {
      Section: "Cooler",
      Tags: [
        "Secondary_Air_Temperature",
        "461TAD1_TT02",
        "471HC1_VT01",
        "471GQ1_TT01",
        "471GQ1_TT02",
        "471GQ1_TT03",
        "471GQ1_TT04",
        "471FNJ_MV_ST",
        "471FNJ_JT01",
        "471EP1_TT02_mA",
        "451PR1_P2 @ 16 MTR",
        "451PR2_P2 @ 16 MTR",
      ],
    },
    {
      Section: "PreHeater",
      Tags: [
        "451PR1_TT01 @ 94 MTR",
        "451PR2_TT01",
        "441PH1_TT01 @ 135 MTR",
        "441PH2_TT01",
        "441PH3_TT01",
        "441PH4_TT01",
        "441PH1_TT10 @ 46 MTR",
        "441PH2_TT10",
        "441PH3_TT10",
        "441PH4_TT10",
      ],
    },
  ];

  useGetAdditionalTagDetail("BGCW", extraTagDetails);

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

  useLiveDataAvailableNew("BGCW", finalTagNames, "Kiln");
  const liveDataStatusCondition = getLiveDataStatusCondition("BGCW");

  useLatestDataNew("BGCW", "Baga", "Kiln", "", finalTagNames);
  useSocketConnection(finalTagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      <div className="row UHDashboardVikram">
        <BagaUHParamsDashboard list={kilnCoolerParamsBaga} />
      </div>
    </div>
  );
};
