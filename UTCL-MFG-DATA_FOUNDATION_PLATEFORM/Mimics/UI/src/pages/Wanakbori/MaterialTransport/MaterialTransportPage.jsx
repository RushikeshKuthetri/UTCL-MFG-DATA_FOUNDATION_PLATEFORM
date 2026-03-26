import {
  MaterialTransportWanakboriNodes,
  MaterialTransportWanakboriNodesType,
} from "../../../reactflow";
import "./MaterialTransportPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const MaterialTransportPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={MaterialTransportWanakboriNodes}
        nodeType={MaterialTransportWanakboriNodesType}
        plantDetails={{
          plantCode: "WKCW",
          plantName: "wanakbori",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: ["L91HP2_LT01", "L91BRU1_SEL", "L91BRU1_IT01"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
