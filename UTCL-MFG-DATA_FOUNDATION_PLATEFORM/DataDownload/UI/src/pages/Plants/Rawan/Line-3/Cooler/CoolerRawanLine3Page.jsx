import "./CoolerRawanLine3Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoolerRawanLine3Nodes,
  CoolerRawanLine3NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoolerRawanLine3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerRawanLine3Nodes}
        nodeType={CoolerRawanLine3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Cooler",
          section: "Cooler",
          line:"3",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["KL_463KL1_TT4", "KL_463KL1_PT3"],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};
