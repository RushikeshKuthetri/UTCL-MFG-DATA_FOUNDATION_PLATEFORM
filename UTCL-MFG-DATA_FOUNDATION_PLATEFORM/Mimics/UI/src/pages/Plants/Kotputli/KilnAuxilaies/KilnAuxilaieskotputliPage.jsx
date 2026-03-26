import {
  KilnAuxilaieskotputliNodes,
  KilnAuxilaieskotputliNodesType,
} from "../../../../reactflow";
import "./KilnAuxilaieskotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnAuxilaieskotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnAuxilaieskotputliNodes}
        nodeType={KilnAuxilaieskotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Kiln",
          section: "Kiln",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};
