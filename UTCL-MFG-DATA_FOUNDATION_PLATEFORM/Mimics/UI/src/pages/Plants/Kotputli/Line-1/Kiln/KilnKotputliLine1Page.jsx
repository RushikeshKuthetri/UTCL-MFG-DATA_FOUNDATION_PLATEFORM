import {
  KilnKotputliLine1Nodes,
  KilnKotputliLine1NodesType,
} from "../../../../../reactflow";
import "./KilnKotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnKotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnKotputliLine1Nodes}
        nodeType={KilnKotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Kiln",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: ["PH_441PH1A_TT2"],
            },
            {
              Section: "Cooler",
              Tags: ["KN_461KL1_TT3", "CL_471DC1_PT", "CL_471DC2_PT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
