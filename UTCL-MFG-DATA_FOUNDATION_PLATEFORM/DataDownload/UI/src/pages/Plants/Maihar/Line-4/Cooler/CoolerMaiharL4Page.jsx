import {
  CoolerMaiharL4Nodes,
  CoolerMaiharL4NodesType,
} from "../../../../../reactflow";
import "./CoolerMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerMaiharL4Nodes}
        nodeType={CoolerMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cooler",
          section: "",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cement Mill-6",
              Tags: ["CL_474TR2", "CL_474TR3", "CL_474TR4"],
            },
            {
              Section: "Coal Mill",
              Tags: ["CL_474TR1"],
            },
            {
              Section: "Kiln",
              Tags: ["CL_474TR5", "CL_474TR6", "CL_474TR7", "CL_474TR8"],
            },
            {
              Section: "PreHeater",
              Tags: ["CL_PH_444FN1_RUN"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
