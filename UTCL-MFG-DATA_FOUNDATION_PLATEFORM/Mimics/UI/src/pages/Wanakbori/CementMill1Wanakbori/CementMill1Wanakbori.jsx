import {
  Cementmill1WanakboriNodes,
  Cementmill1WanakboriNodesType,
} from "../../../reactflow";
import "./CementMill1Wanakbori.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill1WanakboriPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Cementmill1WanakboriNodes}
        nodeType={Cementmill1WanakboriNodesType}
        plantDetails={{
          plantCode: "WKCW",
          plantName: "wanakbori",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2",
              Tags: [
                "K91_MD1_AMP",
                "K91SFF1",
                "_561WCW_AT01",
                "L41BF1_CO_DT01",
                "L41BF1_O2_DT01",
                "L41CB1_CO_DT01",
                "D33WP3",
                "D33WP4",
                "D33CT1",
                "561WI1_FT01",
                "561WP1_ST01",
                "561WI1_SP_SPM",
                "562WI1_FT01",
                "562WP1_ST01",
                "562WP1_SP01_SPM",
                "591FN1",
                "591FN2",
                "591FN3",
                "591FN4",
                "_561AM1_ST01",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
