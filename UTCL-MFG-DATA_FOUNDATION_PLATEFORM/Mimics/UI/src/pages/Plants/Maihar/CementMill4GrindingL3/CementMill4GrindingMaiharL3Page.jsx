import {
  CementMill4GrindingMaiharL3Nodes,
  CementMill4GrindingMaiharL3NodesType,
} from "../../../../reactflow";
import "./CementMill4GrindingMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill4GrindingMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill4GrindingMaiharL3Nodes}
        nodeType={CementMill4GrindingMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-1",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: ["V23L7DIV"],
            },
            {
              Section: "Raw Mill-1", //line 1
              Tags: ["TPH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
