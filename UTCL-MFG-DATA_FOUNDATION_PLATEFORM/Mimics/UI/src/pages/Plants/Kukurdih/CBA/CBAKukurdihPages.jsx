import { useSelector } from "react-redux";
import { Alert, CBAKukurdih } from "../../../../components";
import {
  getLiveDataStatusCondition,
  // useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../../../utils";
import "./CBAKukurdihPages.scss";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";

export const CBAKukurdihPages = () => {
  useSectionTagDetails("KUCW", "1", "Raw Mill-1");
  const { authProvider } = useSelector((state) => state);
  const tagNames = authProvider?.plantBasedTagnames;
  useLiveDataAvailableNew("KUCW", tagNames);
  const liveDataStatusCondition = getLiveDataStatusCondition("KUCW");

  useLatestDataNew("KCW", "Kukurdih", "Raw Mill-1", "", tagNames);
  useSocketConnection(tagNames, liveDataStatusCondition);
  return (
    <div className="bg1">
      {!liveDataStatusCondition && (
        <div className="position-absolute mimic-alert">
          <Alert errMsg="Live data is not coming. Please contact to your admin." />
        </div>
      )}

      <h1 className="text-center text-white mx-auto my-2 cba-h1">
        Kukurdih- CBA Analysis Data
      </h1>
      <div className="table-responsive mt-2">
        <CBAKukurdih />
      </div>
    </div>
  );
};
