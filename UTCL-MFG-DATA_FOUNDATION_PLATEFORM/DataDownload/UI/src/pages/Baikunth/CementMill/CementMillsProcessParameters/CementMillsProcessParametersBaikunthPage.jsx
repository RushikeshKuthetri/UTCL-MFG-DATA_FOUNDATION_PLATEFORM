import "./CementMillsProcessParametersBaikunthPage.scss";

import {
  Alert,
  CementMillsProcessParametersBaikunth,
} from "../../../../components";
import {
  getLiveDataStatusCondition,
  useLatestDataNew,
  useSectionTagDetails,
  //  useLatestData,
  useSocketConnection,
} from "../../../../utils";
import { useSelector } from "react-redux";
import { useLiveDataAvailableNew } from "../../../../utils/customhooks/useLiveDataAvailable";
import { useGetAdditionalTagDetail } from "../../../../utils/customhooks/getAdditionalTagDetails";

export const CementMillsProcessParametersBaikunthPage = () => {
  const plantDetails = {
    plantCode: "BKCW",
    plantName: "Baikunth",
    sectionName: "Cement Mill",
    section: "",
    line: "1",
  };
  const { plantCode, plantName, sectionName, section, line } = plantDetails;
  // useLatestData(plantCode, plantName, sectionName, section);
  // useLatestDataNew(
  //   plantCode,
  //   plantName,
  //   sectionName,
  //   section
  //   //  tagNames
  // );
  // useSocketConnection(plantCode);
  // const liveDataStatusCondition = getLiveDataStatusCondition(plantCode);

  const extraTagDetails = [
    {
      Section: "Cement Mill-2",
      Tags: [
        "CM2_TT1",
        "CM5_M1_TT1",
        "CM5_M1_TT2",
        "CM2_KW1",
        "CM5_M2_TT1",
        "CM5_M2_TT2",
        "CM2_PT1",
        "CM5_PT1",
        "CM5_PT2",
        "CM5_SEP_LUB1_PRS",
        "CM5_SEP_LUB2_PRS",
        "CM2_TT3",
        "CM5_TT1",
        "CM2_TT4",
        "CM5_TT2",
        "CM2_TT5",
        "CM5_TT3",
        "CM2_TT6",
        "CM5_TT4",
        "CM5_TT6",
        "CM2_LNVC_DETOP_TMP",
        "CM5_SEP_TT1",
        "CM2_LNVC_NDEBOT_TMP",
        "CM5_SEP_TT2",
        "CM2_CLASS_EXHFAN_DEBRG_T",
        "CM2_CLASS_EXHFAN_DEBRG_VIB",
        "CM5_CLASS_DC_EXFAN_DE_TEMP",
        "CM5_CLASS_DC_EXFAN_DE_VIB",
        "CM2_CLASS_EXHFAN_NDEBRG_T",
        "CM2_CLASS_EXHFAN_NDEBRG_VIB",
        "CM5_CLASS_DC_EXFAN_NDE_TEMP",
        "CM5_CLASS_DC_EXFAN_NDE_VIB",
        "CM2_DCEXHFAN_DEBRG_T",
        "CM2_MV_EFAN_DE_VIB",
        "CM5_MAIN_DC_EXFAN_DE_TEMP",
        "CM5_MAIN_DC_EXFAN_DE_VIB",
        "CM2_DCEXHFAN_NDEBRG_T",
        "CM2_MV_EFAN_NDE_VIB",
        "CM5_MAIN_DC_EXFAN_NDE_TEMP",
        "CM5_MAIN_DC_EXFAN_NDE_VIB",
        "CM2_CIRFAN_DEBRG_T",
        "CM2_CIRFAN_DEBRG_VIB",
        "CM5_FN1_TT9",
        "CM5_FN1_VT1",
        "CM2_CIRFAN_NDEBRG_T",
        "CM2_CIRFAN_NDEBRG_VIB",
        "CM5_FN1_TT10",
        "CM5_FN1_VT2",
        "CM2_CIR_FAN_MTR_DE_BRG_T",
        "CM2_CIR_FAN_MTR_NDE_BRG_T",
        "CM2_BE_DEBRG_T",
        "CM2_BE_KW",
        "CM5_ELEV_DE_TEMP",
        "CM2_BE_NDEBRG_T",
        "CM5_ELEV_NDE_TEMP",
        "CM5_SEP_TT3",
        "CM5_SEP_TT4",
        "CM5_SEP_TT5",
        "CM2_MILL_DCDP",
        "CM5_DPT1",
        "CM2_MAIN_DCEXF_RPM",
        "CM5_DCEXHF_RPM",
        "CM2_DCEXHF_KW",
        "CM5_DCEXHF_KW",
        "CM2_LNV_CYC_DP",
        "CM5_LNVC_CY_DP",
        "CM2_CIR_FAN_RPM",
        "CM2_CIR_FAN_KW",
        "CM5_DPT2",
        "CM5_AUXDCEXFAN_RPM",
        "CM5_AUXDCEXFAN_KW",
        "CM5_DPT3",
        "CM2_LT1",
      ],
    },
    {
      Section: "Cement Mill-3",
      Tags: [
        "CM3_TT1",
        "CM3_TT2",
        "CM3_KW1",
        "CM3_PT1",
        "CM3_TT3",
        "CM3_TT4",
        "CM3_TT5",
        "CM3_LNVC_DETOP_TMP",
        "CM3_LNVC_NDEBOT_TMP",
        "CM3_CLASS_EXHFAN_DEBRG_T",
        "CM3_CLASS_EXHFAN_DEBRG_VIB",
        "CM3_CLASS_EXHFAN_NDEBRG_T",
        "CM3_CLASS_EXHFAN_NDEBRG_VIB",
        "CM3_DCEXHFAN_DEBRG_T",
        "CM3_DCEXHFAN_DEBRG_VIB",
        "CM3_DCEXHFAN_NDEBRG_T",
        "CM3_DCEXHFAN_NDEBRG_VIB",
        "CM3_CIRFAN_DEBRG_T",
        "CM3_CIRFAN_DEBRG_VIB",
        "CM3_CIRFAN_NDEBRG_T",
        "CM3_CIRFAN_NDEBRG_VIB",
        "CM3_CIR_FAN_MOTR_DE_BRG_T",
        "CM3_CIR_FAN_MOTR_NDE_BRG_T",
        "CM3_BE_DEBRG_T",
        "CM3_BE_KW",
        "CM3_BE_NDEBRG_T",
        "CM3_MILL_DCDP",
        "CM3_MAIN_DCEXF_RPM",
        "CM3_DCEXHF_KW",
        "CM3_CIR_FAN_RPM",
        "CM3_CIR_FAN_KW",
        "CM3_LT1",
      ],
    },
  ];

  useSectionTagDetails(plantCode, line, sectionName);
  useGetAdditionalTagDetail(plantCode, extraTagDetails);
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

  useLiveDataAvailableNew(plantCode, finalTagNames, sectionName);
  const liveDataStatusCondition = getLiveDataStatusCondition(plantCode);

  useLatestDataNew(plantCode, plantName, sectionName, "", finalTagNames);
  useSocketConnection(finalTagNames, liveDataStatusCondition);
  return (
    <>
      {!liveDataStatusCondition && (
        <div className="position-absolute mimic-alert">
          <Alert errMsg="Live data is not coming. Please contact to your admin." />
        </div>
      )}
      <CementMillsProcessParametersBaikunth />
    </>
  );
};
