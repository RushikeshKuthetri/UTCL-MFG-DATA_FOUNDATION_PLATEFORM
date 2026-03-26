import {
  RollerPressCircuitKarurNodes,
  RollerPressCircuitKarurNodesType,
} from "../../../../reactflow";
import "./RollerPressCircuitKarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPressCircuitKarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressCircuitKarurNodes}
        nodeType={RollerPressCircuitKarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: " Karur",
          sectionName: "Cement Mill-3",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
