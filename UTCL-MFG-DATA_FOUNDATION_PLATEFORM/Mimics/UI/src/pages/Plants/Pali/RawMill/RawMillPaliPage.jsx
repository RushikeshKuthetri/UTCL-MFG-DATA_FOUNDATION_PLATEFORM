import { RawMillPaliNodes, RawMillPaliNodesType } from "../../../../reactflow";
import "./RawMillPaliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillPaliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillPaliNodes}
        nodeType={RawMillPaliNodesType}
        plantDetails={{
          plantCode: "PLCW",
          plantName: "pali",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
