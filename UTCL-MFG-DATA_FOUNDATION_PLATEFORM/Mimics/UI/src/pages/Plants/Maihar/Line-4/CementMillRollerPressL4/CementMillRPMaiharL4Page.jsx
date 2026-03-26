import {
  CementMillRPMaiharL4Nodes,
  CementMillRPMaiharL4NodesType,
} from "../../../../../reactflow";
import "./CementMillRPMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMillRPMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMillRPMaiharL4Nodes}
        nodeType={CementMillRPMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-6",
          section: "Cement Mill Roller Press",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cement Mill-7",
              Tags: ["CM_566SC2_PH", "CM_566FN8A_PH"],
            },
            {
              Section: "Cement Mill-8",
              Tags: ["CM_566SC2_RUN", "CM_596RA3_RUN", "CM_566FN8A_RUN"],
            },
            {
              Section: "General",
              Tags: ["CM_566FN2", "CM_566FN5"],
            },
            {
              Section: "PreHeater",
              Tags: ["CM_566RA4"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
