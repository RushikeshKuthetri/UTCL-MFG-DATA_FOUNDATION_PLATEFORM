import {
  coalMill1BalajiNodes,
  coalMill1BalajiNodesType,
} from "../../../reactflow";
import "./CoalMill1Balaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMill1BalajiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill1BalajiNodes}
        nodeType={coalMill1BalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Clinker Transport",
              Tags: [
                "K21BC1_IT01"
              ]
            },
            {
              Section: "PreHeater",
              Tags: [
                "451SFF1_WT01",
                "481SFF1_WT01"
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
