import {
  SiloFeedMaiharL3Nodes,
  SiloFeedMaiharL3NodesType,
} from "../../../../reactflow";
import "./SiloFeedMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const SiloFeedMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={SiloFeedMaiharL3Nodes}
        nodeType={SiloFeedMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 3
              Tags: ["SILOLVL","PT2005"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
