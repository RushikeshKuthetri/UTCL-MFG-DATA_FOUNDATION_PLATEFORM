import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CTtoIBAUSilo1and2GujaratLine2Nodes,
  CTtoIBAUSilo1and2GujaratLine2NodesType,
} from "../../../../../reactflow";
import "./CTtoIBAUSilo1and2GujaratLine2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CTtoIBAUSilo1and2GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CTtoIBAUSilo1and2GujaratLine2Nodes}
        nodeType={CTtoIBAUSilo1and2GujaratLine2NodesType}
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
                "Z2J02M1",
                "L1P05",
                "L1U04",
                "L1U05M1",
                "L1U05M2",
                "L1U05M3",
                "L1P15",
                "L1P25",
                "Z3_L01_L2",
                "Z3_L02_L4",
                "Z3_L02_L5",
                "Z3_L02_L6",
                "Z3_L02_T1",
                "Z3P10_DRAFT",               
              ],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["L2_U01_SPEED_FEEDBACK"],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["L1J01M1_I1", "Z1J02", "Z2J02M1", "L1U04",
                
                ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
