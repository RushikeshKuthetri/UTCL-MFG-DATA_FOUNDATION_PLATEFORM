import {
  CrusherMaterialHandlingMaiharL4Nodes,
  CrusherMaterialHandlingMaiharL4NodesType,
} from "../../../../../reactflow";
import "./CrusherMaterialHandlingMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CrusherMaterialHandlingMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherMaterialHandlingMaiharL4Nodes}
        nodeType={CrusherMaterialHandlingMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Crusher",
          section: "Crusher and Material Handling",
          line: "4",
        }}
      />
    </ReactFlowProvider>
  );
};
