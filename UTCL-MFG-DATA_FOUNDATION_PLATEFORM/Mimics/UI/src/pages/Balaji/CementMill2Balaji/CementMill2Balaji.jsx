import {
  cementMill2BalajiNodes,
  cementMill2BalajiNodesType,
} from "../../../reactflow";
import "./CementMill2Balaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill2BalajiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMill2BalajiNodes}
        nodeType={cementMill2BalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Clinker Transport",
              Tags: [
                "511DB5_IT01",
                "512HP1_LT01",
                "512HP3_LT01",
                "K21BC1_IT01",
              ]
            },
            {
              Section: "Packing Plant",
              Tags: [
                "594MD1_JT01"
              ]
            },
            {
              Section: "Cement Mill",
              Tags: [
                "562BM1_TT01",
                "562BM1_TT02",
                "591SB1_LT01",
                "591SB1_LT02",
                "591SB1_LT03"
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
