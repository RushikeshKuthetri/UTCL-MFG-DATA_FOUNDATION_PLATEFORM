import {
  KilnkukurdihNodes,
  KilnkukurdihNodesType,
} from "../../../../reactflow";
import "./KilnkukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";
import "./KilnAuxilaieskotputliPage.scss";

export const KilnkukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnkukurdihNodes}
        nodeType={KilnkukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Kiln",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "Packing Plant",
              Tags: ["PP_611FNU_RUN"],
            },
            {
              Section: "PreHeater",
              Tags: [
                "PH_461FNZ_PT",
                "PH_461KL1_PT1",
                "PH_461KL1_TT1",
                "PH_461KL1_TT2",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
