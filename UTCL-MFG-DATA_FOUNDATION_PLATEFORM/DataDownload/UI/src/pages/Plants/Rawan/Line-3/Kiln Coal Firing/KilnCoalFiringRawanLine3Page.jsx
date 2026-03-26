import "./KilnCoalFiringRawanL3Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  KilnCoalFiringRawanL3Nodes,
  KilnCoalFiringRawanL3NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnCoalFiringRawanL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnCoalFiringRawanL3Nodes}
        nodeType={KilnCoalFiringRawanL3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Kiln",
          section: "",
          line:"3",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: ["KM_483BI1_EX_LS1", "KM_483BI1_EX_LS2","KM_453BI2_EX_LS1","KM_453BI2_EX_LS2","KM_453BI1_EX_LS1","KM_453BI1_EX_LS2"],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};
