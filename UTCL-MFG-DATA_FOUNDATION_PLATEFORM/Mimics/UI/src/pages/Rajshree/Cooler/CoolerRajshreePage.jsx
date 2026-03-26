import "./CoolerRajshree.scss";
import { ReactFlowProvider } from "reactflow";
import {
  coolerRajshreeNodes,
  coolerRajshreeNodesType,
} from "../../../reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoolerRajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coolerRajshreeNodes}
        nodeType={coolerRajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "Cooler",
          section: "Cooler",
          line: "4",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["KL_484BI2_WI_P"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
