import {
  RawMillGrindingDharNodes,
  RawMillGrindingDharNodesType,
} from "../../../reactflow";
import "./RawMillGrindingPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillGrindingPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillGrindingDharNodes}
        nodeType={RawMillGrindingDharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "Raw Mill Grinding",
          section: "Raw Mill Grinding",
        }}
      />
    </ReactFlowProvider>
  );
};
