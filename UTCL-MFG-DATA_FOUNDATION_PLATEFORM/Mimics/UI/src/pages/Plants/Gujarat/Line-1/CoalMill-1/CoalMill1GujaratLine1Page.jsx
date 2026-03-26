import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CoalMill1GujaratLine1Nodes,
  CoalMill1GujaratLine1NodesType,
} from "../../../../../reactflow";
import "./CoalMill1GujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CoalMill1GujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMill1GujaratLine1Nodes}
        nodeType={CoalMill1GujaratLine1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: ["J1P60_ZI", "J1P61_INV_I1", "J1P62_ZI", "J1P61_S1"],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: ["PLC_F1J07_S1", "J1P61_S1"],
            },
            {
              Section: "Calciner", //line 1
              Tags: ["F1J05", "F2J03A"],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: [
                "K1L01_T9A",
                "K1SD01_SP_SPM",
                "K1A01",
                "K1R02",
                "J1P60_SP_SPM",
                "KM2_F2J03A_MR",
                "K1L02_T9A",
                "K1A02",
                "K1A02_I1",
                "K1J01",
                "K1A01SP",
                "K1A02SP",
                "KM1 TPH SHIFT",
                "K1K01Z1_SP_SPM",
                "K1K06_PID_SPM",
                "K1K06_S1",
                "K1K06_PID_SPA",
                "K1A04",
                "K1M03_VFD_SPM",
                "K1M07_GRDG_PRES",
                "K1S01_SP_SPM",
                "K1M03",
                "MAT_TEMP_MAX",
                "K1P11_A1",
                "K1P11_C01_P1",
                "K1P11_C03_P1",
                "K1P11_C05_P1",
                "K1P11_C07_P1",
                "K1P11_C09_P1",
                "K1P11_C11_P1",
                "K1P11_C02_P1",
                "K1P11_C04_P1",
                "K1P11_C06_P1",
                "K1P11_C08_P1",
                "K1P11_C10_P1",
                "K1P11_C12_P1",
                "K1P37",
                "K1P36",
                "K1T19_PID_SPM",
                "J1P62_SP_SPM",
                "J1P62_SP_SPA",
                "J1P61S1_SP_SPM",
                "J1P61S1_SP_SPA",
                "K1T01_P1_PID_SPA",
                "K1T01_SP_SPA",
                "K1T01_SP_SPM",
                "K1T01",
                "K1T08_PID_SPM",
                "K1T03_PID_SPM",
                "K1P55_P1",
                "K1J03",
                "J1P61_X1",         
              ],
            },
            
            {
              Section: "Coal Mill", //line 2
              Tags: ["F2J03A_T1", "F2J03A", "K2A01", "K2A02", "K2L01_W1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
