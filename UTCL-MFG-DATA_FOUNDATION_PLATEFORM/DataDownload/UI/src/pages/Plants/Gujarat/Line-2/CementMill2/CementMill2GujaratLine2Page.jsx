import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill2GujaratL2Nodes,
  CementMill2GujaratL2NodesTypes,
} from "../../../../../reactflow";
import "./CementMill2GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill2GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill2GujaratL2Nodes}
        nodeType={CementMill2GujaratL2NodesTypes}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: [
                "CM2TOTALFEED_F1",
                "CM_DEDUST_PR",
                "L1J01M1_I1",
                "OPEN _TIMER _GATE",
                "CLOSE_TIMER_GATE",
                "Z2P95",
                "Z2J20_CRNT_DIFF",
                "Z2J19M1",
                "Z2J20M1",
                "Z2M21M1",
                "Z2J17",
                "Z2S03",
                "Z2S01",
                "Z2S01M3",
                "Z2S01M1",
                "Z2S01M4",
                "Z2S01M2",
                "Z2U10",
                "Z2U18",
                "Z2U11A",
                "Z2P75",
                "Z2P74",
                "Z2K03_S1",
                "Z2P35",
                "Z2S14",
                "Z2S16",
                "Z2S18",
                "Z2S20",
                "Z2U03",
                "Z2U02",
                "Z2U06",
                "Z2U01",
                "Z2U12",
                "Z2K03",
                "Z2U04",
                "Z2U45S",
                "Z2U05",
                "Z2U05M2",
                "Z2P85",
                "Z2P84",
                "Z2P34A",
                "Z2P34C",
                "Z2P34E",
                "Z2P34B",
                "Z2P34D",
                "Z2P34F",
                "Z2P55",
                "Z2P54",
                "Z2U08M2",
                "Z2B02",
                "Z2B01",
                "Z2M03",
                "Z2J01M1",
                "Z2U13",
                "Z2M08",
                "Z2M09",
                "Z2J02M1",
                "Z2P15",
                "CM2_STACK_BLOWER",
                "L1U04",
                "Z2U11",
                "Z2U09",
                "Z2U08M1",
                "CM2 TPH DAY",
                "CM2 TPH SHIFT",
                "CM2 POWER",
                "CM2 TOTAL KW",
                "Z2U15M2",
                "Z2M23_GB_P2",
                "Z2M24_GB_P1",
                "Z2S03_J2",
                "Z2P13",
                "Z2P14",
                "Z2P45",
                "Z2P44",
              ],
            },
            {
              Section: "Cement Mill-2", //line 2
              Tags: [
                "Z2U11",
                "Z2U15M2",
                "Z2J02M1",
                "L1U04",
                "G1J02_I1",
                "L5SF2_F1",
                "U2U04I1X",
                "G2J04_I1",
                "U6U03_I1"],
            },
            {
              Section: "Coal Mill", //line 2
              Tags: ["F2J01A_I1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
