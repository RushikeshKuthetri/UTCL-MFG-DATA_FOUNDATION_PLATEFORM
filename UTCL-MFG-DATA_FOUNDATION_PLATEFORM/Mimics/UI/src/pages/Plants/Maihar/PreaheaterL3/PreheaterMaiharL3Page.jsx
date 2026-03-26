import {
  PreheaterMaiharL3Nodes,
  PreheaterMaiharL3NodesType,
} from "../../../../reactflow";
import "./PreheaterMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PreheaterMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PreheaterMaiharL3Nodes}
        nodeType={PreheaterMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 3
              Tags: [
                "FT3041",
                "L60CP1",
                "QT3005",
                "QT3006",
                "QT3007",
                "QT3008",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
