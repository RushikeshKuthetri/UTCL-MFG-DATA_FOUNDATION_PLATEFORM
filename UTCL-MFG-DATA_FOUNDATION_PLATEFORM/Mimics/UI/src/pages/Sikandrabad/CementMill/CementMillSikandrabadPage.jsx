import "./CementMillSikandrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  cementMillSikandrabadNodes,
  cementMillSikandrabadNodesType,
} from "../../../reactflow";

export const CementMillSikandrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMillSikandrabadNodes}
        nodeType={cementMillSikandrabadNodesType}
        plantDetails={{
          plantCode: "SKCW",
          plantName: "sikandrabad",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
