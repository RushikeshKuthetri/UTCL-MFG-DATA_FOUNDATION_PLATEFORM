import {
  RawMillHopperBuildingMaiharL4Nodes,
  RawMillHopperBuildingMaiharL4NodesType,
} from "../../../../../reactflow";
import "./RawMillHopperBuildingMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillHopperBuildingMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillHopperBuildingMaiharL4Nodes}
        nodeType={RawMillHopperBuildingMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Raw Mill-1",
          section: "Raw Mill Hopper Building",
          line: "4",
        }}
      />
    </ReactFlowProvider>
  );
};
