import {
  cementMill1MaiharNodes,
  cementMill1MaiharNodesType,
} from "../../../../reactflow";
import "./CementMill1MaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill1MaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMill1MaiharNodes}
        nodeType={cementMill1MaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-3", //line 1
              Tags: ["65KW03", "65KW02", "65KW01"],
            },
            {
              Section: "Cement Mill-2",
              Tags: ["61FARB1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
