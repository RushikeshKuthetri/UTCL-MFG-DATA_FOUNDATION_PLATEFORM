import {
  GypsumWetFlyAshHandlingPanipatNodes,
  GypsumWetFlyAshHandlingPanipatNodesType,
} from "../../../../reactflow";
import "./GypsumWetFlyAshHandlingPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const GypsumWetFlyAshHandlingPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={GypsumWetFlyAshHandlingPanipatNodes}
        nodeType={GypsumWetFlyAshHandlingPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Gypsum Wet Fly Ash Handling",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
