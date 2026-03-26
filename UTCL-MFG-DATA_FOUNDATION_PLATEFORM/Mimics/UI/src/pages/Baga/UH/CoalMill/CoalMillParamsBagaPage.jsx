import { useSelector } from "react-redux";
import { BagaUHParamsDashboard } from "../../../../components";
import { coalMillParamsBaga } from "../../../../data/baga/uh/coalMillParams";
import {
  getLiveDataStatusCondition,
  //  useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../../../utils";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";
import { useGetAdditionalTagDetail } from "../../../../utils/customhooks/getAdditionalTagDetails";

export const CoalMillParamsBagaPage = () => {
  useSectionTagDetails("BGCW", "1", "Coal Mill");

  const extraTagDetails = [{ Section: "Raw Mill", Tags: ["361SR1_ST01"] }];

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

  useLiveDataAvailableNew("BGCW", finalTagNames, "Coal Mill");
  const liveDataStatusCondition = getLiveDataStatusCondition("BGCW");

  useLatestDataNew("BGCW", "Baga", "Coal Mill", "", finalTagNames);
  useSocketConnection(finalTagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      <div className="row UHDashboardVikram">
        <BagaUHParamsDashboard list={coalMillParamsBaga} />
      </div>
    </div>
  );
};
