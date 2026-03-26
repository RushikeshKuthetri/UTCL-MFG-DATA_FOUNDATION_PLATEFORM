import {
  KilnAuxiliariesMaiharL4Nodes,
  KilnAuxiliariesMaiharL4NodesType,
} from "../../../../../reactflow";
import "./KilnAuxiliariesMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnAuxiliariesMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnAuxiliariesMaiharL4Nodes}
        nodeType={KilnAuxiliariesMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "Kiln Auxiliaries",
          line: "4",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["452FN1"],
            },
            {
              Section: "Cement Mill-7",
              Tags: ["KL_484BL4"],
            },
            {
              Section: "Cooler",
              Tags: ["KL_CL_474FNG_RUN"],
            },
            {
              Section: "PreHeater",
              Tags: [
                "KL_484BL2",
                "KL_484BL1",
                "KL_464KL1_TT1",
                "KL_464KL1_TT2",
                "KL_464KL1_PT1",
                "KL_464KL1_PT2",
              ],
            },
            {
              Section: "Raw Mill-1",
              Tags: ["KL_484BL3"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
