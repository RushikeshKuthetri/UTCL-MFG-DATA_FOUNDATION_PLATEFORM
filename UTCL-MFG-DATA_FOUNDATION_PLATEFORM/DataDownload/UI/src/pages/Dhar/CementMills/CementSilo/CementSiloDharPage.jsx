import "./CementSiloDharPage.scss";
import { ReactFlowProvider } from "reactflow";

import {
  cementSiloDharNodes,
  cementSiloDharNodesType,
} from "../../../../reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementSiloDharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementSiloDharNodes}
        nodeType={cementSiloDharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: [
                "CM2_592MD1_IT",
                "CM2_591SB3_LT1",
                "CM2_591SB4_LT1",
                "CM2_591BF6_DPT",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
