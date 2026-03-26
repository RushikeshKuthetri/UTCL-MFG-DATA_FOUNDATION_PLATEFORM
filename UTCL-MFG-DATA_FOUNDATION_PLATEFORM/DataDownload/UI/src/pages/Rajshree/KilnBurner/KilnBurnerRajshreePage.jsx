import "./KilnBurnerRajshree.scss";
import { ReactFlowProvider } from "reactflow";
import {
  kilnBurnerRajshreeNodes,
  kilnBurnerRajshreeNodesType,
} from "../../../reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnBurnerRajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kilnBurnerRajshreeNodes}
        nodeType={kilnBurnerRajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "Kiln",
          section: "Kiln",
          line: "4",
        }}
      />
    </ReactFlowProvider>
  );
};
