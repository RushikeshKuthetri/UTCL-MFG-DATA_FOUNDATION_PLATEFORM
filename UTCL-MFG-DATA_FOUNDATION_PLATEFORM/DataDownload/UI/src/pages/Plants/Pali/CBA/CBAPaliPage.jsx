import { useSelector } from "react-redux";
import { Alert, CBAPali } from "../../../../components";
import {
  getLiveDataStatusCondition,
  useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../../../utils";
import "../../Kukurdih/CBA/CBAKukurdihPages.scss";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";

export const CBAPaliPage = () => {
  // useSocketConnection("PLCW");
  // useLatestData("PLCW", "Pali");
  // const liveDataStatusCondition = getLiveDataStatusCondition("PLCW");

  let sectionName = "Raw Mill-1";

  useSectionTagDetails("PLCW", "1", sectionName); // update section name
  const { authProvider } = useSelector((state) => state);
  const tagNames = authProvider?.plantBasedTagnames;
  useLiveDataAvailableNew("PLCW", tagNames, sectionName);
  const liveDataStatusCondition = getLiveDataStatusCondition("PLCW");

  useLatestDataNew("PLCW", "Pali", sectionName, "", tagNames); //
  useSocketConnection(tagNames, liveDataStatusCondition);

  return (
    <div className="bg1">
      {!liveDataStatusCondition && (
        <div className="position-absolute mimic-alert">
          <Alert errMsg="Live data is not coming. Please contact to your admin." />
        </div>
      )}
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-2 pt-2">
        <CBAPali />
      </div>
    </div>
  );
};
