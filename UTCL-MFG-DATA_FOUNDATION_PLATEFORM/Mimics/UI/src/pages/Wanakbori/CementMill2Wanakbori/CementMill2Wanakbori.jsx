import {
  Cementmill2WanakboriNodes,
  Cementmill2WanakboriNodesType,
} from "../../../reactflow";
import "./CementMill2Wanakbori.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill2WanakboriPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Cementmill2WanakboriNodes}
        nodeType={Cementmill2WanakboriNodesType}
        plantDetails={{
          plantCode: "WKCW",
          plantName: "wanakbori",
          sectionName: "Cement Mill-2",
          section: "Cement Mill-2",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "561WP1",
                "561AD2",
                "512HP2_LT01",
                "512HP3_LT01",
                "531WP1_FT01",
                "531WP1_SP01_SPA",
                "561WP1_SP01_SPM",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
