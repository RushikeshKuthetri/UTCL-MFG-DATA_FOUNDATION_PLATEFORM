import "./KilnMainPageJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  kilnMainPageJafrabadNodes,
  kilnMainPageJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnMainPageJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kilnMainPageJafrabadNodes}
        nodeType={kilnMainPageJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Kiln Main Page",
          section: "Kiln",
        }}
      />
    </ReactFlowProvider>
  );
};
