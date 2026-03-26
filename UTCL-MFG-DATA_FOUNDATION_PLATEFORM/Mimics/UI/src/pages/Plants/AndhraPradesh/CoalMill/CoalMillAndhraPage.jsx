import {
  CoalMillAndhraNodes,
  CoalMillAndhraNodesType,
} from "../../../../reactflow";
import "./CoalMillAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillAndhraNodes}
        nodeType={CoalMillAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "andhra pradesh",
          sectionName: "Coal Mill",
          section: "",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};
