import "./CoalMillRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoalMillRawanL2Nodes,
  CoalMillRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoalMillRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillRawanL2Nodes}
        nodeType={CoalMillRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["432RAC/M01","SLAG_FEEDING/HP2_PT1",
                    "482FN6/IA",
                    "482FN7/IA",
                    "482FN5/IA",
                    ],
            },
            {
              Section: "Raw Mill-3",
              Tags: ["362LDJ/ZTA"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
