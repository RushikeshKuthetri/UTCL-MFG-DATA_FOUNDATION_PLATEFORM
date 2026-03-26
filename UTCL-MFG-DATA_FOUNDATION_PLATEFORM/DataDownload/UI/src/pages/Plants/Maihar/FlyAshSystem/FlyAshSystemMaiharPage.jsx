import {
  FlyAshSystemMaiharNodesType,
  FlyAshSystemMaiharNodes,
} from "../../../../reactflow";
import "./FlyAshSystemMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyAshSystemMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyAshSystemMaiharNodes}
        nodeType={FlyAshSystemMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["62FARAV", "61FARB1", "_62FABW", "62MCDVPOS", "62FAASB"],
            },
            {
              Section: "Cement Mill-3", //line 1
              Tags: [
                "63FARAV",
                "63FAASB",
                "63FARB2",
                "63FAHLVS",
                "63PT15",
                "_63FABW",
                "63FARB1",
                "63FADCF",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
