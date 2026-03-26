import {
  CoalMillWanakboriNodes,
  CoalMillWanakboriNodesType,
} from "../../../reactflow";
import "./CoalMillWanakbori.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillWanakboriPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillWanakboriNodes}
        nodeType={CoalMillWanakboriNodesType}
        plantDetails={{
          plantCode: "WKCW",
          plantName: "wanakbori",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2",
              Tags: ["L41CB1_CO_DT01", "L41BF1_CO_DT01"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
