import { CoolerBagaNodes, CoolerBagaNodesType } from "../../../reactflow";
import "./CoolerPageBaga..scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerPageBaga = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerBagaNodes}
        nodeType={CoolerBagaNodesType}
        plantDetails={{
          plantCode: "BGCW",
          plantName: "Baga",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "Clinker Transport", //line 1
              Tags: ["491DP2_IT01", "491DP1_IT01"],
            },
            {
              Section: "Kiln", //line 1
              Tags: [
                "471HD4_IT01",
                "471HD1_IT01",
                "471HC1_IT01",
                "471HD3_IT01",
                "471HD2_IT01",
                "471HC1_JT01",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
