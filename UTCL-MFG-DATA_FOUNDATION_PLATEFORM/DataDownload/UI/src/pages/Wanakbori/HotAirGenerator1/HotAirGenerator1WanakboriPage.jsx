import {
  HotAirGenerator1WanakboriNodes,
  HotAirGenerator1WanakboriNodesType,
} from "../../../reactflow";
import "./HotAirGenerator1WanakboriPage.scss";
// import { useSocketConnection } from "../../../utils/customhooks/useSocketConnection";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
// import {
//   // useLatestData,
//   useLatestDataNew,
// } from "../../../utils/customhooks/useLatestData";
import { ReactFlowProvider } from "reactflow";

export const HotAirGenerator1WanakboriPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={HotAirGenerator1WanakboriNodes}
        nodeType={HotAirGenerator1WanakboriNodesType}
        plantDetails={{
          plantCode: "WKCW",
          plantName: "wanakbori",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "HAG",
              Tags: ["L41WF2"],
            },
            {
              Section: "Coal Mill",
              Tags: [
                "L41DA3",
                "L41CB1_WT01",
                "L41SC2_ST01",
                "L41WF2_SPEED",
                "L41DA2_ZT01",
                "L41DA3_ZT01",
                "L41DA3_SP_SPM",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
