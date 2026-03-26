import {
  CoolerAndhraNodes,
  CoolerAndhraNodesType,
} from "../../../../reactflow";
import "./CoolerAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerAndhraNodes}
        nodeType={CoolerAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Cooler",
          section: "Cooler",
          line: "3",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["KL_463KL1_TT5"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
