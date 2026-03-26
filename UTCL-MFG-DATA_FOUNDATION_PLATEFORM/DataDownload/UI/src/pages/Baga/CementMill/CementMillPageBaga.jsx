import {
  cementmillBagaNodes,
  cementmillBagaNodesType,
} from "../../../reactflow";
import "./CementMillPageBaga.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMillPageBaga = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementmillBagaNodes}
        nodeType={cementmillBagaNodesType}
        plantDetails={{
          plantCode: "BGCW",
          plantName: "Baga",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: ["561BH1_TTG", "561BH1_TTF"],
            },
            {
              Section: "Cooler",
              Tags: ["491DP1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
