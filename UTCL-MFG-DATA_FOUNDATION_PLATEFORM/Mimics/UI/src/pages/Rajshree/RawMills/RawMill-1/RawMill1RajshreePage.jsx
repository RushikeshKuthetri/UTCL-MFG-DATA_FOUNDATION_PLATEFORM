import "./RawMill1Rajshree.scss";
import { ReactFlowProvider } from "reactflow";
import {
  rawmill1RajshreeNodes,
  rawmill1RajshreeNodesType,
} from "../../../../reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill1RajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawmill1RajshreeNodes}
        nodeType={rawmill1RajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "4",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: [
                "PH_424BH1_DPTP15",
                "PH_424BH1_PTP1",
                "PH_424BH1_PTP3",
                "PH_424BH1_TE1",
                "PH_424BH1_TE2",
                "PH_424BH1_TE3",
                "PH_424BH1_TE4",
                "PH_424BH1_TTP1",
                "PH_394SB1_LTP",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
