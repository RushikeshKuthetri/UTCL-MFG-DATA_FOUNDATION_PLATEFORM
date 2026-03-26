import { useSelector } from "react-redux";
import { Alert, CBAKotputliLine1, SingleText } from "../../../../../components";
import {
  getLiveDataStatusCondition,
  // useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../../../../utils";
import "../../../Kukurdih/CBA/CBAKukurdihPages.scss";
import "./CBAKotputliLine1Pages.scss";
import { useLiveDataAvailableNew } from "../../../../../utils/customhooks/useLiveDataAvailable";

export const CBAKotputliLine1Pages = () => {
  // useSocketConnection("KCW");
  // useLatestData("KCW", "Kotputli");
  // useLatestDataNew(
  //     "KCW", "Kotputli",
  //     // sectionName,
  //     // section
  //     //  tagNames
  //   );
  // const liveDataStatusCondition = getLiveDataStatusCondition("KCW");

  useSectionTagDetails("KCW", "1", "Crusher");
  const { authProvider } = useSelector((state) => state);
  const tagNames = authProvider?.plantBasedTagnames;
  useLiveDataAvailableNew("KCW", tagNames);
  const liveDataStatusCondition = getLiveDataStatusCondition("KCW");

  useLatestDataNew("KCW", "Kotputli", "Crusher", "", tagNames);
  useSocketConnection(tagNames, liveDataStatusCondition);

  return (
    <div className="bg1">
      {!liveDataStatusCondition && (
        <div className="position-absolute mimic-alert">
          <Alert errMsg="Live data is not coming. Please contact to your admin." />
        </div>
      )}
      <SingleText
        useClass="text-center text-white mx-auto my-2 d-flex align-items-center cba-h1"
        yellowTextUp="Pile Quantity"
        textClass="th_bg"
        data={{
          blackTextLabel: "CurrentProduct.Dry basis_Tons:F",
          blackTextClass: "greenTxt ml-1",
        }}
      />
      <div className="table-responsive mt-2">
        <CBAKotputliLine1 />
      </div>
    </div>
  );
};
