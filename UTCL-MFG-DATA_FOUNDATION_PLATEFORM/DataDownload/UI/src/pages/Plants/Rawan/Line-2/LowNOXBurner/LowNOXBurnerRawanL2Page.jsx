import "./LowNOXBurnerRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  LowNOXBurnerRawanL2Nodes,
  LowNOXBurnerRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const LowNOXBurnerRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={LowNOXBurnerRawanL2Nodes}
        nodeType={LowNOXBurnerRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Kiln",
          section: "Kiln",
          line: "2",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: ["482FCB1/TEA1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
