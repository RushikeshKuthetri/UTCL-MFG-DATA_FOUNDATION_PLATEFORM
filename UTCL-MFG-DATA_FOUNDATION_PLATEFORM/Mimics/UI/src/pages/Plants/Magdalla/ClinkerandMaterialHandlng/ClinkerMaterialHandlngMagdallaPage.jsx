import {
  ClinkerMaterialHandlngMagdallaNodes,
  ClinkerMaterialHandlngMagdallaNodesType,
} from "../../../../reactflow";
import "./ClinkerMaterialHandlngMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerMaterialHandlngMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerMaterialHandlngMagdallaNodes}
        nodeType={ClinkerMaterialHandlngMagdallaNodesType}
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
