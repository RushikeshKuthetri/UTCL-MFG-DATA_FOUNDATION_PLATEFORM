import {
  HotAirGenerator2WanakboriNodes,
  HotAirGenerator2WanakboriNodesType,
} from "../../../reactflow";
import "./HotAirGenerator2WanakboriPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const HotAirGenerator2WanakboriPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={HotAirGenerator2WanakboriNodes}
        nodeType={HotAirGenerator2WanakboriNodesType}
        plantDetails={{
          plantCode: "WKCW",
          plantName: "wanakbori",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "HAG",
              Tags: ["L41WF3"],
            },
            {
              Section: "Coal Mill",
              Tags: [
                "L42DA3",
                "L41CB1_WT01",
                "L41_SC3_ST01",
                "L42HAG2_FT01",
                "L41WF3_SPEED",
                "L42DA2_ZT01",
                "L42DA3_ZT01",
                "L42DA3_SP_SPM",
                "L42FN2_TW01",
                "L42FN2_TW02",
                "L42FN2_TW03",
                "L42FN2_TB01",
                "L42FN2_TB02",
              ],
            },
            {
              Section: "Cement Mill-2",
              Tags: [
                "L42HAG2_TT01",
                "L42HAG2_PT01",
                "L42HAG2_TT02",
                "L41WF3_FT01",
                "L41WF3_SP_SPA",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
