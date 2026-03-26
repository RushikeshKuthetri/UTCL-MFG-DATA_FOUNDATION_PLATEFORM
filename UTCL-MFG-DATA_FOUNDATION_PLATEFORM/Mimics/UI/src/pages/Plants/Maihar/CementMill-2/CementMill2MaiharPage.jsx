import {
  cementMill2MaiharNodes,
  cementMill2MaiharNodesType,
} from "../../../../reactflow";
import "./CementMill2MaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill2MaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMill2MaiharNodes}
        nodeType={cementMill2MaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["61FARB1", "62FARAV", "61FARB2"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
