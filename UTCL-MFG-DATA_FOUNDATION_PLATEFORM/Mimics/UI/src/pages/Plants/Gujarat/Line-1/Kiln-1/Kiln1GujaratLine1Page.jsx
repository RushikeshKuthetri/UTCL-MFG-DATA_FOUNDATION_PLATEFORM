import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Kiln1GujaratL1Nodes,
  Kiln1GujaratL1NodesType,
} from "../../../../../reactflow";
import "./Kiln1GujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Kiln1GujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Kiln1GujaratL1Nodes}
        nodeType={Kiln1GujaratL1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Kiln",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "Calciner", //line 1
              Tags: ["SAFR_PID_SPM", "DB_FL1", "EXT2_TPH_SP", "EXT2_ACTL_FL"],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: [
                "KILN_COAL_PERCENTAGE",
                "K1L05_TEMP_MAX",
                "WFP01_Z1",
                "K1_POCK_AIR_F1",
                "K1_VITAL_AIR1_P1",
                "K1L05_W1",
              ],
            },
            {
              Section: "Cooler", //line 1
              Tags: [
                "KILN1_RETENTION_TIME",
                "W1W03M_SP_SPM",
                "W1W03M_SP_SPA",
                "W1K50",
                "W1K50_INV_SP",
                "W1RWF1_SPM",
                "W1J19_SP_MAN",
                "W1RWF1_AER_PR",
                "RWF1_RF_RUN",
                "W1L03_MAXTEMP",
                "W1L03_AER_PR",
                "W1J20",
                "W1RWF1",
                "W1J09",
                "W1J10",
                "W1J19",
                "U1J01",
                "U1J08",
                "W1M01",
                "CLINKER1_ANALYSIS_C3S",
                "CLINKER1_ANALYSIS_FCAO",
                "CLINKER1_ANALYSIS_TIME",
                "U1L11_W1_TON",
                "W1_BLR_P1",
                "W1_SWIRL_AIR_P1",
                "W1J16_I1",
                "W1J17_I1",
                "W1J19_PR",
                "W1J19_T1",
                "W1K50_I1",
                "W1K50_S1",
                "W1K50_T1",
                "W1L03_L1",
                "W1M01_J1",
                "W1RWF1_PH_LVL",
                "W1RWF1_RF_I1",
                "W1K01P1_SP_SPA",
                "W1K02_SP_SPA",
                "W1K02_SP_SPM",
                "U1J01_I1",
                "U1J08_I1",
                "W1_B56T2",
                "W1BZ_T1",
                "W1J09_I1",
                "W1J10_I1",
                "W1J19_I1",
                "W1K01_P1",
                "W1K01_T2",
                "W1K13K14_P1P2_AVG",
                "W1RWF1_F1",
                "W1RWF1_I1",
                "W1W03_TQ1",
                "W1W03M_I1",
                "W1W03M_I2",
                "W1W03M_S1",
                "W1W06_TQ1",
                "W1W06S_I1",
                "W1W06S_I2",
                "W1W06S_S1",         
              ],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "W1B04_FI",
                "W1RWF2_F1",
                "H1U11M1_I1",
                "H1U11M4_I1",
                "J1_NO_NMGM3",
                "J1_SO_NMGM3",
                "J1A01_O2",
                "J1P63_X1",
                "J1P63_X2",
                "J1P65_X1",
                "J1P65_X2",
                "J1P65_X3",
                "W1A56_P3",
                "W1A56_P4",
                "W1B50_A1",
                "W1B56_P1",
                "W1B56_T1_PID_SPA",
                "W1B56_T1_PID_SPM",
              ],
            },
            {
              Section: "Kiln", //line 2
              Tags: ["WASTE FIRING", "KILN FALSE AIR", "WFP01_Z1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
