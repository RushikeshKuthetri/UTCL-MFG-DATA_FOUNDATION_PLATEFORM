import { CM3MTSNodes, CM3MTSNodesType } from "../../../../reactflow";
import "./CM3MaterialTransportSystem.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CM3MaterialTransportSystemPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CM3MTSNodes}
        nodeType={CM3MTSNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-3",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
