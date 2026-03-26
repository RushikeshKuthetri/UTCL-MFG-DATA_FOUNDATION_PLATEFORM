import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Kiln2GujaratL2Nodes,
  Kiln2GujaratL2NodesType,
} from "../../../../../reactflow";
import "./Kiln2GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const Kiln2GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Kiln2GujaratL2Nodes}
        nodeType={Kiln2GujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Kiln",
          section: "Kiln",
          line: "2",
          extraTagDetails: [
            {
              Section: "Clinker Transport", //line 2
              Tags: ["U3J01_I1", "U3J08_I1"],
            },
            {
              Section: "Coal Mill", //line 2
              Tags: [
                "K2L04_MAX_TEMP",
                "K2L05_MAX_TEMP",
                "W2RWF1_AER_PR",
                "K2L03_L2",
                "K2L05_W1",
              ],
            },
            {
              Section: "Cooler", //line 2
              Tags: [
                "U3J01",
                "U3J08",
                "W2K1314_AVG_VALUE",
                "CAL_PID_MAX",
                "CAL_PID_MIN",
                "W2_J12_I1",
                "W2_J13_I1",
                "W2_J15_I1",
                "W2_J16_I1",
                "W2_J17_I1",
                "W2_J20_I1",
                "W2_K52_T1",
                "W2_M01_J1",
                "W2J18_PR",
                "W2J18_SP_MAN",
                "W2J19_PR",
                "W2J19_SP_MAN",
                "W2RWF1_F1",
                "W2RWF1_PH_LVL",
                "W2RWF1_S1",
                "W2RWF2_F1",
                "W2RWF2_I1",
                "W2RWF2_PH_LVL",
                "W2_K01_T2",
                "W2_K01_P1_SPA",
                "W2_K01_P1",
                "W2_K02_SP_SPA",
              ],
            },
            {
              Section: "PreHeater", //line 2
              Tags: [
                "J2P65_J1",
                "J2P65_S1",
                "J2_SO_NMGM3",
                "J2_NO_NMGM3",
                "J2A01_O2",
                "J2A01_SPM",
                "J2P01_P1",
                "KILN2_TOTAL_FEED",
                "W2A50_A2",
                "W2A51_P2",
                "W2A51_T1",
                "W2A51_T2",
                "W2A52_P1",
                "W2A52_P2",
                "W2A52_T1",
                "W2A52_T2",
                "W2A53_P1",
                "W2A53_P2",
                "W2A53_T1",
                "W2A53_T2",
                "W2A54_P1",
                "W2A54_P2",
                "W2A54_T1",
                "W2A54_T2",
                "W2A55_P1",
                "W2A55_P2",
                "W2A55_T1",
                "W2A55_T2",
                "W2A56_P1",
                "W2A56_P2",
                "W2A56_T1",
                "W2A56_T2",
                "W2B50_A2",
                "W2B51_P1",
                "W2B51_P2",
                "W2B51_T1",
                "W2B51_T2",
                "W2B52_P1",
                "W2B52_P2",
                "W2B52_T1",
                "W2B52_T2",
                "W2B53_P1",
                "W2B53_P2",
                "W2B53_T1",
                "W2B53_T2",
                "W2B54_P1",
                "W2B54_P2",
                "W2B54_T1",
                "W2B54_T2",
                "W2B55_P1",
                "W2B55_P2",
                "W2B55_T1",
                "W2B55_T2",
                "W2B57_P1",
                "W2B57_P2",
                "W2B57_T2",
                "W2B61_P1",
                "W2B61_P2",
                "W2B61_T1",
                "W2B61_T2",
                "W2B56T1_PID_SPA",
                "W2B56_T1A",
                "W2B56T1_PID_SPM",
              ],
            },
            {
              Section: "PreHeater", //line 1
              Tags: ["W2SSF_FL1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
