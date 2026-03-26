import {
  RollerPress2KukurdihNodes,
  RollerPress2KukurdihNodesType,
} from "../../../../reactflow";
import "./RollerPress2KukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPress2KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPress2KukurdihNodes}
        nodeType={RollerPress2KukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: " Kukurdih",
          sectionName: "Slag Mill",
          section: "Slag Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
