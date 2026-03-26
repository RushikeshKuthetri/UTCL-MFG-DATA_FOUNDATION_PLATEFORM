import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  RawMill1GujaratLine1Nodes,
  RawMill1GujaratLine1NodesType,
} from "../../../../../reactflow";
import "./RawMill1GujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RawMill1GujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1GujaratLine1Nodes}
        nodeType={RawMill1GujaratLine1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Calciner", //line 1
              Tags: ["F1J05"],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: ["F1J05_I1", "F1J05_W1", "K1L01_W1"],
            },
            {
              Section: "Kiln", //line 1
              Tags: [
                "J1P01_CH_HIGH",
                "H1U06M1_J1",
                "H1U06M4_J1",
                "H1U10M1_J1",
                "H1U10M4_J1",
                "J1J02_P1",
                "J1P01_DPI",
                "J1P70_Z1","J1P64"
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
