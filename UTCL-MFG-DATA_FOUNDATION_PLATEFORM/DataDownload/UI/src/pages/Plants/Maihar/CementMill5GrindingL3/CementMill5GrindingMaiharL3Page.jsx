import {
  CementMill5GrindingMaiharL3Nodes,
  CementMill5GrindingMaiharL3NodesType,
} from "../../../../reactflow";
import "./CementMill5GrindingMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill5GrindingMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill5GrindingMaiharL3Nodes}
        nodeType={CementMill5GrindingMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-2",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 3
              Tags: ["51BC5", "51FN4RF", "LT5012", "TT5003"],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: ["V23L7DIV"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
