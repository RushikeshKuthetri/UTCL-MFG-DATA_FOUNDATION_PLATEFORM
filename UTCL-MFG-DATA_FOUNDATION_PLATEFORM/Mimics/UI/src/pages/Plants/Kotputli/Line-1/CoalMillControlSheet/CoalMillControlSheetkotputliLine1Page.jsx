import {
  CoalMillControlSheetkotputliLine1Nodes,
  CoalMillControlSheetkotputliLine1NodesType,
} from "../../../../../reactflow";
import "./CoalMillControlSheetkotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillControlSheetkotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillControlSheetkotputliLine1Nodes}
        nodeType={CoalMillControlSheetkotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
