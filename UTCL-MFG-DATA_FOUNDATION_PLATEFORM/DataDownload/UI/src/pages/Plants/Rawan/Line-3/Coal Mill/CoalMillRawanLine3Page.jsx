import "./CoalMillRawanL3Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoalMillRawanL3Nodes,
  CoalMillRawanL3NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoalMillRawanL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillRawanL3Nodes}
        nodeType={CoalMillRawanL3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Coal Mill",
          section: "CoalMill",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};
