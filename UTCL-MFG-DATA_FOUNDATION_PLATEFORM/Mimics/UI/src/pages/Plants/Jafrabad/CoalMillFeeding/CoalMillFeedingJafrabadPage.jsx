import "./CoalMillFeedingJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoalMillFeedingJafrabadNodes,
  CoalMillFeedingJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoalMillFeedingJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillFeedingJafrabadNodes}
        nodeType={CoalMillFeedingJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
