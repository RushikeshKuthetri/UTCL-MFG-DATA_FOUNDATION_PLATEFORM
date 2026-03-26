import {
  RollerPressPanipatNodes,
  RollerPressPanipatNodesType,
} from "../../../../reactflow";
import "./RollerPressPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPressPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressPanipatNodes}
        nodeType={RollerPressPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Roller Press",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
