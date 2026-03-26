
import { useSelector } from "react-redux";
import "../CBA Data Page/CBADataLine4Page.scss"
import { Alert, CBADataLine4 } from "../../../../../components";
import { getLiveDataStatusCondition, useLatestDataNew, useSectionTagDetails, useSocketConnection } from "../../../../../utils";
import { useLiveDataAvailableNew } from "../../../../../utils/customhooks/useLiveDataAvailable";

export const CBADataLine4Page = () => {
    let sectionName = "CBA-1";
    useSectionTagDetails("MACW", "4", sectionName); // update section name
    const { authProvider } = useSelector((state) => state);
    const tagNames = authProvider?.plantBasedTagnames;
    useLiveDataAvailableNew("MACW", tagNames, sectionName);
    const liveDataStatusCondition = getLiveDataStatusCondition("MACW");
    useLatestDataNew("MACW", "Maihar", sectionName, "", tagNames); //
    useSocketConnection(tagNames, liveDataStatusCondition);

    return (
        <div className="bg1">
            {!liveDataStatusCondition && (
                <div className="position-absolute mimic-alert">
                    <Alert errMsg="Live data is not coming. Please contact to your admin." />
                </div>
            )}
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-2 pt-2">
                <CBADataLine4 />

            </div>
        </div>
    );
};

