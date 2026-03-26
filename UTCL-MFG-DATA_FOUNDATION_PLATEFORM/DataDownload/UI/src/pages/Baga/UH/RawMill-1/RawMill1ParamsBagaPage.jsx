import { useSelector } from "react-redux";
import { BagaUHParamsDashboard } from "../../../../components";
import { rawMill1ParamsBaga } from "../../../../data/baga/uh/rawMill1Params";
import {
  getLiveDataStatusCondition,
  useLatestDataNew,
  useSectionTagDetails,
  // useLatestData,
  useSocketConnection,
} from "../../../../utils";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";

export const RawMill1ParamsBagaPage = () => {
  useSectionTagDetails("BGCW", "1", "Raw Mill");
  const { authProvider } = useSelector((state) => state);
  const tagNames = authProvider?.plantBasedTagnames;
  useLiveDataAvailableNew("BGCW", tagNames, "Raw Mill");
  const liveDataStatusCondition = getLiveDataStatusCondition("BGCW");

  useLatestDataNew("BGCW", "Baga", "Raw Mill", "", tagNames);
  useSocketConnection(tagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      <div className="row UHDashboardVikram">
        <BagaUHParamsDashboard list={rawMill1ParamsBaga} />
      </div>
    </div>
  );
};
