import "./BlendingSiloHirmiL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  BlendingSiloHirmiL2Nodes,
  BlendingSiloHirmiL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const BlendingSiloHirmiL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BlendingSiloHirmiL2Nodes}
        nodeType={BlendingSiloHirmiL2NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "PreHeater",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", // 3 occurrences line=2
              Tags: ["KILN_TOT_FR", "PH_432DQ1_FR", "KL_CLINKER_PROD_TPD"],
            },
            {
              Section: "Raw Mill-2", // 2 occurrences  line=2
              Tags: ["PH_392SB1_LT", "PH_392SB1_LVL"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
