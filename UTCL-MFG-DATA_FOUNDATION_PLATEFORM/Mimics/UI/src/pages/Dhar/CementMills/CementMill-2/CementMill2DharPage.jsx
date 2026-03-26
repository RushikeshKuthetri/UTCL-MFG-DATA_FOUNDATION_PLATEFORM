import "./CementMill2DharPage.scss";
import { ReactFlowProvider } from "reactflow";

import {
  cementMill2DharNodes,
  cementMill2DharNodesType,
} from "../../../../reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMill2DharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMill2DharNodes}
        nodeType={cementMill2DharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: [
                "CMH_K32FM1_BIN_WT",
                "CM1_531HP1_WT",
                "CM1_531HP2_WT",
                "CM1_531HP3_WT",
                "CM1_531HP4_WT",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
