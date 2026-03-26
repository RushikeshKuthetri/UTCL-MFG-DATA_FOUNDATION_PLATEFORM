import {
  WaterAndSteamKotputliNodes,
  WaterAndSteamKotputliNodesType,
} from "../../../../reactflow";
import "./WaterAndSteamKotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const WaterAndSteamKotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={WaterAndSteamKotputliNodes}
        nodeType={WaterAndSteamKotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli ",
          sectionName: "WHRS",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Packing Plant",
              Tags: ["PP_623VS1_RUN", "PP_623VS1_PH"],
            },
            {
              Section: "Raw Mill",
              Tags: ["RM_362LQ11_PT", "RMH_332WF1_BIW"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
