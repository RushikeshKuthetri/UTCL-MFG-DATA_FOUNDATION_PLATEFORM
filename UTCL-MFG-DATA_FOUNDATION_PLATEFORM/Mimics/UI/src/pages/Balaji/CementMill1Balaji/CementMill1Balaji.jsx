import {
  cementMill1BalajiNodes,
  cementMill1BalajiNodesType,
} from "../../../reactflow";
import "./CementMill1Balaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill1BalajiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMill1BalajiNodes}
        nodeType={cementMill1BalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line:"1",
          extraTagDetails: [
            {
              Section: "Cement Mill-3",
              Tags: [
                "533WF1_FT01"
              ],
            },
            {
              Section: "Clinker Transport",
              Tags: [
                "511HP1_LT01",
                "511HP3_LT01",
                "511HP2_LT01",
                "K21BC1_IT01"
              ],
            },
            {
              Section: "Packing Plant",
              Tags: [
                "594MD1_JT01"
              ],
            },
            ,
            {
              Section: "Cement Mill-2",
              Tags: [
                "561BM1_TT03"
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
