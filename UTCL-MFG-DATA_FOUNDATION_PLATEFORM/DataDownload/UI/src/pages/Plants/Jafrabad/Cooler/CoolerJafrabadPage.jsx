import "./CoolerJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoolerJafrabadNodes,
  CoolerJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoolerJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerJafrabadNodes}
        nodeType={CoolerJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["N_F97_FT"],
            },
            {
              Section: "General", //line 1
              Tags: ["N_F97_FT"],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["CR400_CURRENT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
