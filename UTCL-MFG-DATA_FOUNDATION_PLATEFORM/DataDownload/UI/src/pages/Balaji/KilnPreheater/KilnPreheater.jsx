import { KilnPreheaterNodes, KilnPreheaterNodesType } from "../../../reactflow";
import "./KilnPreheater.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnPreheater = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnPreheaterNodes}
        nodeType={KilnPreheaterNodesType}
        plantDetails={{
          plantCode: "BJCW",
          plantName: "balaji",
          sectionName: "PreHeater",
          section: "PreHeater",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: [
                "461HU1_ZT01", "461KL1_TT03", "461GA1_AT01", "461GA1_AT02", "461GA1_AT04",
                "461KL1A_TT01", "431SFF1_FT01", "431SFF1_SP01_SPM", "431SFF2_FT01", "431SFF2_SP01_SPM",
                "431SFF3_FT01", "431SFF3_SP01_SPM", "451DQ1_FT01", "451DQ1_KS_SP01_SPM", "481DQ1_FT01",
                "481DQ2_FT01", "481DQ2_PC2_SP01_SPM", "421BH1_PT02", "421BH1_PT04", "451DU1_PT01",
                "451DU1_TT01", "481DQ1_PC1_SP01_SPA", "481DQ2_PC2_SP01_SPA", "451BL1_N_IT01",
                "451BL2_N_IT01", "481BL2_N_IT01", "481BL1_N_IT01", "481FN1_ST01", "441FN1_JT01",
                "461MD1_IT01", "461MD1_IT02", "461MD1_ST01_6RPM", "461KL1_TT04", "481BL2_TW01", "481BL2_TW02",
                "481BL2_TW03", "451BL1_TW01", "451BL1_TW02", "451BL1_TW03", "451BL1_TB01", "451BL1_TB02", "451BL4_TW01",
                "451BL4_TW02", "451BL4_TW03", "451BL4_TB01", "451BL4_TB02", "451BL2_TW01", "451BL2_TW02", "451BL2_TW03", "451BL2_TB01",
                "451BL2_TB02", "451BL5_TW01", "451BL5_TW02", "451BL5_TW03", "451BL5_TB01", "451BL5_TB02", "461LQ4_TT01", "461LQ4_TT02", "461LQ4_TT03",
                "461LQ4_TT04", "461LQ4_TT05", "461LQ4_VT01", "461LQ5_TT01", "461LQ5_TT02", "461LQ5_TT03", "461LQ5_TT04", "461LQ5_TT05", "461LQ5_VT01", "461GA1_AT01"
              ]
            },
            {
              Section: "Cooler",
              Tags: [
                "471EP1_TT01","461KL1_PT02","471FND_TW01","471FND_TW02","471FND_TW03","471FND_TW04","471FND_TW05","471FND_TW06","471FND_TW07","471FND_TW08","471FND_TW09",
                "471FND_TW0A","471FND_TW0B","471FND_TW0C","471FND_TB01","471FND_TB02","471FND_TB03","471FND_TB04","471FND_VT01","471FND_VT02","471FND_VT03","471FND_VT04",
                "471CC1_TT01","471CC1_TT02","471CC1_TT03","471CC1_TT04","471CC1_TT05","471CC1_TT06","471CC1_TT07","471CC1_TT08","471CC1_TT09","471CC1_TT0A","471CC1_TT0B",
                "471CC1_TT0C"
              ]
            },
            {
              Section: "Clinker Transport",
              Tags: [
                "491SB1_LT01"
              ]
            }
          ]
        }}
      />
    </ReactFlowProvider>
  );
};
