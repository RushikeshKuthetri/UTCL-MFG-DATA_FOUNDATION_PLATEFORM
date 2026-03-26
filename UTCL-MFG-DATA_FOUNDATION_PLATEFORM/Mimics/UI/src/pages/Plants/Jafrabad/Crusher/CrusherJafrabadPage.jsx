import "./CrusherJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CrusherJafrabadNodes,
  CrusherJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CrusherJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherJafrabadNodes}
        nodeType={CrusherJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Crusher",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: ["C19_CURRENT", "REC_DISTANCE", "RML_LSF"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
