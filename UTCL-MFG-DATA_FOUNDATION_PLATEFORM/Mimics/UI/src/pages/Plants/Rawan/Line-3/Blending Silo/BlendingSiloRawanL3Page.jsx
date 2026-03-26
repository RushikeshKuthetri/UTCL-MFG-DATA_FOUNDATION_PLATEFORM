import "./BlendingSiloRawanL3Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
    BlendingSiloRawanL3Nodes,
    BlendingSiloRawanL3NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const BlendingSiloRawanL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BlendingSiloRawanL3Nodes}
        nodeType={BlendingSiloRawanL3NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "PreHeater",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill-1",
              Tags: [
                "RM_393FNF_RUN",
                "RM_393FNF_PH",
                "RM_393FNH_RUN",
                "RM_393FNH_PH",
                "RM_393FNG_RUN",
                "RM_393FNG_PH",
                "RM_393BL1_RUN",
                "RM_393BL1_PH",
                "RM_393BL2_RUN",
                "RM_393BL2_PH",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
