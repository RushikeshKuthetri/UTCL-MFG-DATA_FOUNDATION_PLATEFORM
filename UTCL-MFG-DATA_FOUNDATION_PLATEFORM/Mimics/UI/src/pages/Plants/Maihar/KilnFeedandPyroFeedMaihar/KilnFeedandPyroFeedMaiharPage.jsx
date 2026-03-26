import {
  KilnFeedandPyroFeedMaiharNodesType,
  KilnFeedandPyroFeedMaiharNodes,
} from "../../../../reactflow";
import "./KilnFeedandPyroFeedMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnFeedandPyroFeedMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnFeedandPyroFeedMaiharNodes}
        nodeType={KilnFeedandPyroFeedMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 3
              Tags: ["PT2005"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
