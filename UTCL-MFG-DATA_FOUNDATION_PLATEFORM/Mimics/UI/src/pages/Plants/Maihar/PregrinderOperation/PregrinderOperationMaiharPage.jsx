import {
  PregrinderOperationMaiharNodes,
  PregrinderOperationMaiharNodesType,
} from "../../../../reactflow";
import "./PregrinderOperationMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PregrinderOperationMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PregrinderOperationMaiharNodes}
        nodeType={PregrinderOperationMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-1",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["62CWF"],
            },
            {
              Section: "Cement Mill-3", //line 1
              Tags: ["63FARB1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
