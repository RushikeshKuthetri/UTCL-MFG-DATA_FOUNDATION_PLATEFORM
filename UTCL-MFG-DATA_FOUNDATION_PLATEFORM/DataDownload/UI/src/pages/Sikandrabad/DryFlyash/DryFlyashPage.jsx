import "./DryFlyashPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  DryFlyashSikandrabadNodes,
  DryFlyashSikandrabadNodesType,
} from "../../../reactflow";

export const DryFlyashPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={DryFlyashSikandrabadNodes}
        nodeType={DryFlyashSikandrabadNodesType}
        plantDetails={{
          plantCode: "SKCW",
          plantName: "sikandrabad",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
