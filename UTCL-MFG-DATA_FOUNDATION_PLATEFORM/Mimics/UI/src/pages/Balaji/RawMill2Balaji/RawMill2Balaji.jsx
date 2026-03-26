import {
  rawMill2BalajiNodes,
  rawMill2BalajiNodesType,
} from "../../../reactflow";
import "./RawMill2Balaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill2BalajiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawMill2BalajiNodes}
        nodeType={rawMill2BalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Raw Mill-2",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "391SB1_LT01",
                "362RM1_TOT_FEED",
                "391FN7_NEW_IT01"
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
