import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";
import {
  AQCBoilerHPSystemAndhraL3Nodes,
  AQCBoilerHPSystemAndhraL3NodesType,
} from "../../../../../../reactflow";

export const AQCBoilerHPSystemAndhraL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AQCBoilerHPSystemAndhraL3Nodes}
        nodeType={AQCBoilerHPSystemAndhraL3NodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "andhra pradesh",
          sectionName: "WHRS",
          section: "",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};
