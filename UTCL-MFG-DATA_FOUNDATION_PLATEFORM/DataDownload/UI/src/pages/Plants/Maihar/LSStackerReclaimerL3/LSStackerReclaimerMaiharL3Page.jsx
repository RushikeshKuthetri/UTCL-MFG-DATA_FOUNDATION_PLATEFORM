import {
  LSStackerReclaimerMaiharL3Nodes,
  LSStackerReclaimerMaiharL3NodesType,
} from "../../../../reactflow";
import "./LSStackerReclaimerMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const LSStackerReclaimerMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={LSStackerReclaimerMaiharL3Nodes}
        nodeType={LSStackerReclaimerMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Raw Mill",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 3
              Tags: ["52BC9"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
