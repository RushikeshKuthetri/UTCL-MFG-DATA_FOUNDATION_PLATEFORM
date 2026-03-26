import {
  CrusherandMaterialHandlingkotputliNodes,
  CrusherandMaterialHandlingkotputliNodesType,
} from "../../../../reactflow";
import "./CrusherandMaterialHandlingkotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CrusherandMaterialHandlingkotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherandMaterialHandlingkotputliNodes}
        nodeType={CrusherandMaterialHandlingkotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotpuli",
          sectionName: "Crusher-1",
          section: "Crusher-1",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: ["CR_212BC7A_RUN"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
