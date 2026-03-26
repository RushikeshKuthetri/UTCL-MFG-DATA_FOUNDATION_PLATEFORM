import "./CementmillJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CementMillPageJafrabadNodes,
  CementMillPageJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMillPageJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMillPageJafrabadNodes}
        nodeType={CementMillPageJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "CementMill",
          section: "CementMill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cooler", //line 1
              Tags: ["NJ8010_TI", "NJ_FC8010_SPA", "NJ_FI8010", "NJ8031_VI", "NJ_II8040" ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
