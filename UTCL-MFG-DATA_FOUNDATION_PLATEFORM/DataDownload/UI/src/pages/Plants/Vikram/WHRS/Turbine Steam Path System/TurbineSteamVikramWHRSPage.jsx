import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  TurbineSteamVikramWHRSNodes,
  TurbineSteamVikramWHRSNodesType,
} from "../../../../../reactflow";
import "./TurbineSteamVikramWHRSPage.scss";

export const TurbineSteamVikramWHRSPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={TurbineSteamVikramWHRSNodes}
        nodeType={TurbineSteamVikramWHRSNodesType}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "WHRS",
          section: "Turbine Steam Path System",
          line: "1",
          extraTagDetails: [
              {
                  Section: "WHRS", // line: "3"
                  Tags: [
                          "W3_AHP_FW_LIT_001A",
                          "W3_PHP_FW_LI_001A",
                          "W3_PLP_FW_LI_001A",
                          "W3_PHP_MAS_TI_001",
                          "W3_PLP_MAS_TI_001",
                  ]
                }
            ]    
        }}
      />
    </ReactFlowProvider>
  );
};
