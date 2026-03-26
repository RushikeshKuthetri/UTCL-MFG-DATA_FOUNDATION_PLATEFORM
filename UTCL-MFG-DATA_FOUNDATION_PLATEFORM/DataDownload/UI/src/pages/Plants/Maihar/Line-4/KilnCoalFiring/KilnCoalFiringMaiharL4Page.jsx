import {
  KilnCoalFiringMaiharL4Nodes,
  KilnCoalFiringMaiharL4NodesType,
} from "../../../../../reactflow";
import "./KilnCoalFiringMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnCoalFiringMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnCoalFiringMaiharL4Nodes}
        nodeType={KilnCoalFiringMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "Kiln Coal Firing",
          line: "4",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: [
                "KM_454BF1_TE1",
                "KM_454BF1_TE2",
                "KM_454BF2_TE1",
                "KM_454BF2_TE2",
                "KM_484BF1_TE1",
                "KM_484BF1_TE2",
              ],
            },
            {
              Section: "Cooler",
              Tags: ["KL_CL_474FN2_RUN", "KL_CL_474FN1_RUN"],
            },
            {
              Section: "PreHeater",
              Tags: [
                "KL_464KL1_TT1",
                "KL_464KL1_TT2",
                "KL_PH_424FN1_RUN",
                "KL_PH_444FN1_RUN",
                "KL_PH_444AM1_CO_HH",
                "KL_PH_454AM1_CO_HH",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
