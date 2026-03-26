import {
  CementMill3BalajiNodes,
  CementMill3BalajiNodesType,
} from "../../../reactflow";
import "./CementMill3Balaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill3Balaji = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill3BalajiNodes}
        nodeType={CementMill3BalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Cement Mill-3",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Clinker Transport",
              Tags: [
                "513HP1_LT01",
                "K21BC1_IT01",
                "513HP3_LT01",
                "513HP2_LT01"
              ]
            },
            {
              Section: "Cooler",
              Tags: [
                "471FND_JT01"
              ]
            },
            {
              Section: "Cement Mill",
              Tags: [
                "_563RM1_RECIPE_F23"
              ]
            },
            {
              Section: "Cement Mill-2",
              Tags: [
                "562BM1_TOTAL_FEED",
                "562BM1_FEED_SP01_SPM"
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
