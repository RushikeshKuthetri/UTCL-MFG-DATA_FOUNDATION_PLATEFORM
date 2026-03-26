import "./ReclaimerJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReclaimerJafrabadNodes, ReclaimerJafrabadNodesType } from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const ReclaimerJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ReclaimerJafrabadNodes}
        nodeType={ReclaimerJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Crusher", //line 1
              Tags: ["REC_BW_AMPS", "REC_CT_VFD_SP", "REC_CT_VFD_SPD", "REC_CT_VFD_CURRENT", "RECL_DISTANCE", "MICRO_TIME", "B_IT110", "RECL_LS_RH", "B_FT230" ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
