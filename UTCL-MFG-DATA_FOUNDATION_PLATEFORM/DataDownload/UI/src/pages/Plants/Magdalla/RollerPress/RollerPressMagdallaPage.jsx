import { RPMagdallaNodes, RPMagdallaNodesType } from "../../../../reactflow";
import "./RollerPressMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RPMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RPMagdallaNodes}
        nodeType={RPMagdallaNodesType}
        plantDetails={{
          plantCode: "NMGD",
          plantName: "Magdalla",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
