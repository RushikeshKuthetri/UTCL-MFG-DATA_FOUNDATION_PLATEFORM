import {
  FlyAshSiloPageNodes,
  FlyAshSiloPageNodesType,
} from "../../../reactflow";
import "./FlyAshSiloPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyAshSiloPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyAshSiloPageNodes}
        nodeType={FlyAshSiloPageNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "FlyAsh Silo",
          section: "FlyAsh Silo",
        }}
      />
    </ReactFlowProvider>
  );
};
