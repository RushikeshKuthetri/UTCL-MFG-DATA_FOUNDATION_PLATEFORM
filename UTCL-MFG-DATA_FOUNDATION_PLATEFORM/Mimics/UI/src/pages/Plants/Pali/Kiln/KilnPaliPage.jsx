import "./KilnPaliPage.scss";
import { ReactFlowProvider } from "reactflow";
import { KilnPaliNodes, KilnPaliNodesType } from "../../../../reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
export const KilnPaliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnPaliNodes}
        nodeType={KilnPaliNodesType}
        plantDetails={{
          plantCode: "PLCW",
          plantName: "Pali",
          sectionName: "Kiln",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: ["PH_421FN1_SPSPA", "PH_441FN1_PT02", "PH_421FN1_SPSPM", "PH_421BF1_DPT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
