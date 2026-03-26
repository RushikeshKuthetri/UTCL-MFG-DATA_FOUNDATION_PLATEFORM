import "./RawMaterialSikandrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  rawMaterialSikandrabadNodes,
  rawMaterialSikandrabadNodesType,
} from "../../../reactflow";

export const RawMaterialSikandrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawMaterialSikandrabadNodes}
        nodeType={rawMaterialSikandrabadNodesType}
        plantDetails={{
          plantCode: "SKCW",
          plantName: "sikandrabad",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
