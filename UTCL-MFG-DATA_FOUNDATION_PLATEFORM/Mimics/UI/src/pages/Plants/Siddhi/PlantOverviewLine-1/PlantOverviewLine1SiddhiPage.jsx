import {
  plantoverviewline1siddhiNodesType,
  plantoverviewline1siddhinodes,
} from "../../../../reactflow";
import "./PlantOverviewLine1SiddhiPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PlantOverviewLine1SiddhiPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={plantoverviewline1siddhinodes}
        nodeType={plantoverviewline1siddhiNodesType}
        plantDetails={{
          plantCode: "SDCW",
          plantName: "siddhi",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1", 
          extraTagDetails: [
              {
                Section: "Crusher",
                Tags: ["TPP35_FREQ", "TPP_POWER", "TPP_FREQ", "TPP_GRID_POWER", "GRID_132KV_JT01", "291BC1_BW01_CAL", "CRUSHER_SP_PWR", "212CR1", "212ST1_BOOM_RUN", "311RE1", "311RE2_RET"]
              },
              {
                Section: "Kiln",
                Tags: ["431MD1_IT1", "431MD2_IT1", "L1HB_J3", "441FN1_TT01", "461MD1_ST01", "431SFF1_FT01", "CALC", "481LC1_WT01", "491SB1_LT01A", "421SK1_OM01", "CLM1_TOTAL_TPH", "KILN1_SP_PWR", "CLINKER PROD TODAY", "CLINKER PROD YESTERDAY", "461MD1_RUNHRS_TODAY", "461MD1_RUNHRS_YDAY", "461MD1"]
              },
              {
                Section: "PreHeater",
                Tags: ["451FN1_TT01", "KILN", "451LC1_WT01"]
              },
              {
                Section: "Raw Mill",
                Tags: ["391SB1_LVL", "391SB1A_LS01", "331HP1_LT01", "331HP2_LT01", "331HP3_LT01", "331HP4_LT01", "331GV1_TB01", "RAWMILL _TOT_FEED", "361MD1_IT01A", "RM1_SP_PWR", "Raw_Meal_Tday", "Raw_Meal_Yday", "361MD1_RUNHRS", "361MD1_YRUNHRS", "361MD1"]
              },
              {
                Section: "Clinker Transport",
                Tags: ["491SB1_LT01"]
              },
              {
                Section: "Coal Mill",
                Tags: ["L41HP1_WT01", "L41HP2_WT01", "L41SK1_OT01", "L41MD1_IT01", "COAL_MILL1_SPEC_POWER", "COAL CONSUMPTION YES", "Coal_Runhr", "Coal_YRunhr", "L41MD1"]
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
