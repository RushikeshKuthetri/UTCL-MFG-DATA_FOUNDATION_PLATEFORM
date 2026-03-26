import "./BagHouseJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import { BagHouseJafrabadNodes, BagHouseJafrabadNodesType } from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const BagHouseJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BagHouseJafrabadNodes}
        nodeType={BagHouseJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "PreHeater",
          section: "PreHeater",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: ["F_TC2111_SPA", "F_TC2111_SPM" ],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["FKL_PT2230", "FKL_YT2180", "BH_STK_SOX_NORMAL", "BH_STK_NOX", "BH_STK_O2", "BH_STK_PRES", "BH_STK_TEMP" ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
