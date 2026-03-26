import { MainParameterwhrsAndhraNodes, MainParameterwhrsAndhraNodesType } from "../../../../../reactflow";
import "./MainParameterwhrsAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const MainParameterwhrsAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={MainParameterwhrsAndhraNodes}
        nodeType={MainParameterwhrsAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "Main Parameter",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};
