import "./RawMillJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  RawMillJafrabadNodes,
  RawMillJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMillJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillJafrabadNodes}
        nodeType={RawMillJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Crusher", //line 1
              Tags: ["MICRO_TIME"],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["FKL_YT2180", "FKL_PT2230"],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "F_PC2230_SPM",
                "FKL_TT2111",
                "D53_VFD_SPD_FB",
                "F_PC2230_SPA",
                "FKL_PT2050"
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
