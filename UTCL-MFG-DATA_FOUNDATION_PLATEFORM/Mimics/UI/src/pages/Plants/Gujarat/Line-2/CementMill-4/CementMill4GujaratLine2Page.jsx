import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill4GujaratLine2Nodes,
  CementMill4GujaratLine2NodesType,
} from "../../../../../reactflow";
import "./CementMill4GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill4GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill4GujaratLine2Nodes}
        nodeType={CementMill4GujaratLine2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-3",
          section: "Cement Mill-3",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 2
              Tags: [
                "Z4S01_S2_SP",
                "Z4S01_S2",
                "Z4J20M1_T1",
                "Z4J20M2_T1",
                "Z4P95_SPA",
                "Z4P95",
                "Z4J19M1_T1",
                "Z4J19M2",
                "Z4J20M1",
                "Z4J15",
                "Z4S03",
                "Z4SG1_Z1",
                "Z4U11",
                "Z4P75",
                "Z4M23_GB_P1",
                "Z4M24_GB_P1",
                "Z4M21M1",
                "Z4J20_CRNT_DIFF",
                "Z4U18",
                "CM4 OPC BLAIN",
                "CM4 PPC BLAIN",
                "CM4 EGC BLAIN",
                "Z4U13",
                "Z4S14",
                "Z4S16",
                "Z4S18",
                "Z4S20",
                "Z4P34A",
                "Z4P34B",
                "Z4P34C",
                "Z4P34D",
                "Z4P34E",
                "Z4P34F",
                "Z4U03",
                "Z4U02",
                "Z4U01",
                "Z4U04",
                "Z4U05",
                "Z4P85",
                "Z4U06",
                "Z4U07",
                "Z4B02",
                "Z4B01",
                "Z4P54",
                "Z4P55",
                "Z4U08M1",
                "Z4U08M2",
                "Z4P14",
                "Z4P13",
                "Z4P15",
                "Z4P15_S1SP_SPA",
                "Z4J01M1",
                "Z4J02",
                "Z4P65",
                "Z4P64",
                "Z4U14",
                "CM4 TPH DAY",
                "Z4J01B",
                "Z4P95_SPM",
                "Z4P95_SPEED",
                "Z4P95_CURRENT",
                "Z4U19",
                "G1J02_I1",
                "U2U04I1X",
                "G2J04_I1",
                "L2J01_J1",
                "U6U03_I1","Z3M21A",
              ],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["CM_DEDUST_PR", "L1J01M1_I1"],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["U2U04_F1", "U6U02_F1"],
            },
            {
              Section: "Packing Plant", //line 1
              Tags: ["P1U10_RUN"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
