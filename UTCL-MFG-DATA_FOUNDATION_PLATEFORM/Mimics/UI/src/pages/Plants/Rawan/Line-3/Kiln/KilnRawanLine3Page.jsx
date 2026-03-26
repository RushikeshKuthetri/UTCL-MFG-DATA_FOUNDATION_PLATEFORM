import "./KilnRawanL3Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  KilnRawanL3Nodes,
  KilnRawanL3NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnRawanL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnRawanL3Nodes}
        nodeType={KilnRawanL3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Kiln",
          section: "Kiln",
          line:"3",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: ["PH_463KL1_TT1", "PH_463KL1_PT1","PH_463FNZ_PT"],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};
