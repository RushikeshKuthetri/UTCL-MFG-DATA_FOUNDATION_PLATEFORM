import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  plantoverviewline2siddhinodes,
  plantoverviewlines2iddhiNodesType,
} from "../../../../reactflow";
import "./PlantOverviewLine2SiddhiPage.scss";
import { ReactFlowProvider } from "reactflow";

export const PlantOverviewLine2SiddhiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={plantoverviewline2siddhinodes}
        nodeType={plantoverviewlines2iddhiNodesType}
        plantDetails={{
          plantCode: "SDCW",
          plantName: "siddhi",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Crusher",
              Tags: ["TPP35_FREQ", "TPP1_POWER", "TPP_FREQ", "TPP2_POWER", "GRID_132KV_JT01", "212CR1", "212ST1_BOOM_RUN", "311RE1", "311RE2_RET"]
            },
            {
              Section: "Kiln",
              Tags: ["432MD1_IT01", "432MD2_IT01", "L2HB_J3", "Kiln Feed Act", "462MD1_RPM_FB", "452SFF1_WT01", "492SB1_LT01A", "KILN_SP_POWER", "Clinker_TOD", "Clinker_YTD", "KILN RUN HOUR", "KILN RUN HOUR_YES", "462MD1_CR"]
            },
            {
              Section: "PreHeater",
              Tags: ["442FN1_TT01", "392SB1_LT01", "KILN"]
            },
            {
              Section: "Raw Mill",
              Tags: ["392SB1_LS01A", "332HP1_LT01", "332HP2_LT01", "332HP3_LT01", "332HP4_LT01", "422DM1A_DT01", "332RF6_TB01", "RM_TOTAL_FEED", "362MD1_JT01", "RM_SP_POWER", "RAWMILL_TDY", "RAWMILL_YTD", "Raw Mill HR", "Raw Mill HR_YES", "362MD1"]
            },
            {
              Section: "Cooler",
              Tags: ["492SB1_LT01"]
            },
            {
              Section: "Coal Mill",
              Tags: ["L22BI1_WT01", "L42BI1_WT01", "L42CV1_ST01", "L42WF1_FT01", "L42DM1_AT01", "L2_TOTAL_COAL_TPH", "L42MD1_JT01", "CLM_SP_POWER", "COAL CONSUMPTION YES", "Coal Mill RH", "Coal Mill RH_YES", "L42MD1"]
            },
            {
              Section: "Packing Plant",
              Tags: ["Packer-1 Running", "Packer-2 Running", "Packer3_Running"]
            }
          ],
          
        }}
      />
    </ReactFlowProvider>
  );
};
