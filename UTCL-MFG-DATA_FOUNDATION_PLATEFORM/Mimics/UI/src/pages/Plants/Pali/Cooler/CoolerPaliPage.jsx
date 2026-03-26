import { CoolerPaliNodes, CoolerPaliNodesType } from "../../../../reactflow";
import "./CoolerPaliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerPaliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerPaliNodes}
        nodeType={CoolerPaliNodesType}
        plantDetails={{
          plantCode: "PLCW",
          plantName: "Pali",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1"
        }}
      />
    </ReactFlowProvider>
  );
};
