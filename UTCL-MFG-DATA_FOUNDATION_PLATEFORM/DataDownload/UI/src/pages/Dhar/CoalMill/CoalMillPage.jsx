import { CoalMillDharNodes, CoalMillDharNodesType } from "../../../reactflow";
import "./CoalMillPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillDharNodes}
        nodeType={CoalMillDharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: ["KL_451DQ1_BIN_WT"],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "PH_441PH_TT1",
                "PH_441PHO_AIAH_CO",
                "PH_441PHO_AIAH_O2",
                "PH_431DQ1_FR",
                "PH_441FN1_SA",
                "PH_441FN1_TT2",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
