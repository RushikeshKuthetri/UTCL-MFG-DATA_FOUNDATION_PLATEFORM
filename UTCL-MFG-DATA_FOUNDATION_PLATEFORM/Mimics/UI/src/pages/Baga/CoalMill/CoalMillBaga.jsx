import { CoalMillBagaNodes, CoalMillBagaNodesType } from "../../../reactflow";
import "./CoalMillBaga.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillBaga = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillBagaNodes}
        nodeType={CoalMillBagaNodesType}
        plantDetails={{
          plantCode: "BGCW",
          plantName: "Baga",
          sectionName: "Coal Mill",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["531HP3_WT01"],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["481CFF1_WT", "481SFF3_WT", "481CFF4_WT", "481CFF2_WT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
