import "./CementMill2Page.scss";
import { ReactFlowProvider } from "reactflow";
import { CementMill2Nodes, CementMill2NodesType } from "../../../../reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMill2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill2Nodes}
        nodeType={CementMill2NodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "Cement Mill-2",
          section: "Cement Mill-2",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "CMH_534HP5_WA",
                "CMH_534HP7_WA",
                "CMH_K24SB1_LTP",
                "CM1_624SB1_LTP1",
                "CM1_624SB1_LTP2",
                "CM1_624SB1_LTP3",
                "K24BC3_II",
                "K14TT1_IA",
                "CM1_564SK1_LVL",
              ],
            },
            {
              Section: "Clinker Transport",
              Tags: [
                "_534HP8_LTP",
                "CMH_514HP1_LTP",
                "CMH_514HP2_LTP",
                "CMH_514HP3_LTP",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
