import {
  rawMill1BalajiNodes,
  rawMill1BalajiNodesType,
} from "../../../reactflow";
import "./RawMill1Balaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill1BalajiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rawMill1BalajiNodes}
        nodeType={rawMill1BalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Raw Mill",
          section: "Raw Mill", 
          line: "1",
          extraTagDetails: [
            {
              Section: "Crusher",
              Tags: [
                "312BC3_IT01",
                "311RE1_IT01",
                "312RE1_IT01",
                "311BC3_IT01"
              ]
            },
            {
              Section: "Kiln",
              Tags: [
                "421BH1_PT04",
                "421BH1_PT01",
                "421BH1_PT02"
              ]
            },
            {
              Section: "PreHeater",
              Tags: [
                "421BH1_TT01",
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
