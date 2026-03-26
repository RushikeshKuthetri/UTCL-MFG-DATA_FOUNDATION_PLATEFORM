import {
  BoilerOperationNodes,
  BoilerOperationNodesType,
} from "../../../../reactflow";
import "./BoilerOperationPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BoilerOperationPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BoilerOperationNodes}
        nodeType={BoilerOperationNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "AQC-3 Boiler Operation",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};
