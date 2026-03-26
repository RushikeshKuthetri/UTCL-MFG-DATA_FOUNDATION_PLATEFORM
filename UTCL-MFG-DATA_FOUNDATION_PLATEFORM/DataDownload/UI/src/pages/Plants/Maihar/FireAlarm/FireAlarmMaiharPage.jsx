import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import "./FireAlarmMaiharPage.scss";
import {
  FireAlarmMaiharNodes,
  FireAlarmMaiharNodesType,
} from "../../../../reactflow";

export const FireAlarmMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FireAlarmMaiharNodes}
        nodeType={FireAlarmMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "General",
          section: "Fire Alarm",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-1",
              Tags: [
                "_61SD1_MISD",
                "_61SD2_PSID",
                "_61SD3_CSPSID",
                "_61SD4_CSMSID",
              ],
            },
            {
              Section: "Cement Mill-3",
              Tags: ["63SD1_IOR", "63SD1_MCC", "63SD1_CC"],
            },
            {
              Section: "Cement Mill-4",
              Tags: ["F_CMSSIO"],
            },
            {
              Section: "Cement Mill-5",
              Tags: ["F_CMSSMCC"],
            },
            {
              Section: "General",
              Tags: ["MP04EXT_FIRE", "F_MP04CSZ3", "F_CCRZ", "F_132KVSS"],
            },
            {
              Section: "Kiln",
              Tags: ["F_KLSSZ"],
            },
            {
              Section: "Packing Plant",
              Tags: ["63_PPSD1", "63_PPSD2", "63_PPSD3"],
            },
            {
              Section: "Raw Mill-1",
              Tags: ["VRM_FIREALARM2", "ZONE6", "VRM_FIREALARM"],
            },
            {
              Section: "Raw Mill-3",
              Tags: ["F_SPRSCSZ2", "F_SPRSCSZ3", "F_RMSSZ"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
