import "./CementMill1HirmiL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CementMill1HirmiL1Nodes,
  CementMill1HirmiL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMill1HirmiL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1HirmiL1Nodes}
        nodeType={CementMill1HirmiL1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2",
              Tags: [
                "SILO1_LEVEL",
                "SILO2_LEVEL",
                "SILO3_LEVEL",
                "SILO5_LEVEL",
                "SILO6_LEVEL",
                "Z1L04_L2",
                "Z2_GA_TANK_LVL",
                "Z2L53_W1",
                "Z2J51_I1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
