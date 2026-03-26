import { useSelector } from "react-redux";
import { BagaUHParamsDashboard } from "../../../../components";
import { rawMill2ParamsBaga } from "../../../../data/baga/uh/rawMill2Params";
import {
  getLiveDataStatusCondition,
  // useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../../../utils";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";

export const RawMill2ParamsBagaPage = () => {
  useSectionTagDetails("BGCW", "1", "Raw Mill-2");
  const { authProvider } = useSelector((state) => state);
  const tagNames = authProvider?.plantBasedTagnames;
  useLiveDataAvailableNew("BGCW", tagNames, "Raw Mill-2");
  const liveDataStatusCondition = getLiveDataStatusCondition("BGCW");

  useLatestDataNew("BGCW", "Baga", "Raw Mill-2", "", tagNames);
  useSocketConnection(tagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      <div className="row UHDashboardVikram">
        <BagaUHParamsDashboard list={rawMill2ParamsBaga} />
      </div>
    </div>
  );
};
