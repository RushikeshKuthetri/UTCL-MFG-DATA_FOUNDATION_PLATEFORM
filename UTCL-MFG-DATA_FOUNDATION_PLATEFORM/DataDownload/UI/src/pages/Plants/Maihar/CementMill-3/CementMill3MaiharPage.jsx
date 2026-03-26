import {
  cementMill3MaiharNodes,
  cementMill3MaiharNodesType,
} from "../../../../reactflow";
import "./CementMill3MaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill3MaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementMill3MaiharNodes}
        nodeType={cementMill3MaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-3",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["61PT08"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
