import {
  RollerPressCircuit1KarurNodes,
  RollerPressCircuit1KarurNodesType,
} from "../../../../reactflow";
import "./RollerPressCircuit1KarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPressCircuit1KarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressCircuit1KarurNodes}
        nodeType={RollerPressCircuit1KarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: "karur",
          sectionName: "Cement Mill-2",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
