import { useSelector } from "react-redux";
import { BagaUHParamsDashboard } from "../../../../components";
import { cementMillParamsBaga } from "../../../../data/baga/uh/cementMillParams";
import {
  getLiveDataStatusCondition,
  //  useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../../../utils";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";

export const CementMillParamsBagaPage = () => {
  useSectionTagDetails("BGCW", "1", "Cement Mill");
  const { authProvider } = useSelector((state) => state);
  const tagNames = authProvider?.plantBasedTagnames;
  useLiveDataAvailableNew("BGCW", tagNames, "Cement Mill");
  const liveDataStatusCondition = getLiveDataStatusCondition("BGCW");

  useLatestDataNew("BGCW", "Baga", "Cement Mill", "", tagNames);
  useSocketConnection(tagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      <div className="row UHDashboardVikram">
        <BagaUHParamsDashboard list={cementMillParamsBaga} />
      </div>
    </div>
  );
};
