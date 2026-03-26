import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  AQC1SteamWaterVikramWHRSNodes,
  AQC1SteamWaterVikramWHRSNodesType,
} from "../../../../../reactflow";
import "./AQC1SteamWaterVikramWHRSPage.scss";

export const AQC1SteamWaterVikramWHRSPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AQC1SteamWaterVikramWHRSNodes}
        nodeType={AQC1SteamWaterVikramWHRSNodesType}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "WHRS",
          section: "AQC-1 STEAM AND WATER",
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
                        "W3_A_BD_001_LSL",
                ]
              }
            ]    
        }}
      />
    </ReactFlowProvider>
  );
};
