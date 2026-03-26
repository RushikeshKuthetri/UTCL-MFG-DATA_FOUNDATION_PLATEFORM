import "./CementMill1DharPage.scss";
import { ReactFlowProvider } from "reactflow";

import {
  cementMill1DharNodes,
  cementMill1DharNodesType,
} from "../../../../reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMill1DharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMill1DharNodes}
        nodeType={cementMill1DharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["CM2_591SB3_LT1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
