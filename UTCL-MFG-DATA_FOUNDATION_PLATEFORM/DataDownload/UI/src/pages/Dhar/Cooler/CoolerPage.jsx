import { CoolerDharNodes, CoolerDharNodesType } from "../../../reactflow";
import "./CoolerPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerDharNodes}
        nodeType={CoolerDharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: ["CL_471GS_SA", "CL_471RC1_II"],
            },
            {
              Section: "WHRS", //line 1
              Tags: [
                "AQC_PT_102",
                "AQC_TT_101A",
                "AQC_TT_101B",
                "AQC_TT_102",
                "AQC_DPT_103",
                "AQC_PT_101",
                "HP_TG_TT631C",
                "STG_KW_TR",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
