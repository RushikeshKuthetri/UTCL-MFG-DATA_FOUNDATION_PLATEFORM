import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill1GujaratL2Nodes,
  CementMill1GujaratL2NodesType,
} from "../../../../../reactflow";
import "./CementMill1GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill1GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1GujaratL2Nodes}
        nodeType={CementMill1GujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["U2U04_F1", "U6U02_F1"],
            },
            {
              Section: "Cement Mill-2", //line 2
              Tags: [
                "Z1U15M1",
                "Z1U15M2",
                "Z1U15M1S",
                "G1J02_I1",
                "L5SF1_F1",
                "U2U04I1X",
                "G2J04_I1",
                "U6U03_I1",         
              ],
            },
            {
              Section: "Cement Mill-3", //line 2
              Tags: ["Z1J02", "U6U02"],
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
