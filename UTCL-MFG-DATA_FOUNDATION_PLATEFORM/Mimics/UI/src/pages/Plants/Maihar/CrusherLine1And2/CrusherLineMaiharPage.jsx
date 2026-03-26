import {
  CrusherLineMaiharNodes,
  CrusherLineMaiharNodesType,
} from "../../../../reactflow";
import "./CrusherLineMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CrusherLineMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherLineMaiharNodes}
        nodeType={CrusherLineMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Crusher",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
