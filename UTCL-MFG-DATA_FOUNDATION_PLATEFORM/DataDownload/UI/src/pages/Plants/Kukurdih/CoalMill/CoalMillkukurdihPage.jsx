import {
  CoalMillkukurdihNodes,
  CoalMillkukurdihNodesType,
} from "../../../../reactflow";
import "./CoalMillkukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillkukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillkukurdihNodes}
        nodeType={CoalMillkukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
