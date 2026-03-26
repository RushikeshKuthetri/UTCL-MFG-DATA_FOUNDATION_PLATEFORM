import {
  CoalMillMaiharL4Nodes,
  CoalMillMaiharL4NodesType,
} from "../../../../../reactflow";
import "./CoalMillMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillMaiharL4Nodes}
        nodeType={CoalMillMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Coal Mill-1",
          section: "",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cement Mill-6",
              Tags: ["KM_L44MD2"],
            },
            {
              Section: "Kiln",
              Tags: [
                "KL_454BI1_WI",
                "KL_454BI2_WI",
                "KL_484BI1_WI",
                "KL_474BI1_WI",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
