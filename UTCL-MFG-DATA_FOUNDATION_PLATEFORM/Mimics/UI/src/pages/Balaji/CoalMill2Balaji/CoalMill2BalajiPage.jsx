import {
  coalMill2BalajiNodes,
  coalMill2BalajiNodesType,
} from "../../../reactflow";
import "./CoalMill2Balaji.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMill2BalajiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalMill2BalajiNodes}
        nodeType={coalMill2BalajiNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1"
        }}
      />
    </ReactFlowProvider>
  );
};
