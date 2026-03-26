import {
  CoolerMainkotputliLine1Nodes,
  CoolerMainkotputliLine1NodesType,
} from "../../../../../reactflow";
import "./CoolerMainkotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerMainkotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerMainkotputliLine1Nodes}
        nodeType={CoolerMainkotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "WHRS",
              Tags: ["CL_471FN1B_A"],
            },
            {
              Section: "Coal Mill",
              Tags: [
                "CL_471FN10_A",
                "CL_471FN11_A",
                "CL_471FN10_SPEED2",
                "CL_471FN10_KW",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
