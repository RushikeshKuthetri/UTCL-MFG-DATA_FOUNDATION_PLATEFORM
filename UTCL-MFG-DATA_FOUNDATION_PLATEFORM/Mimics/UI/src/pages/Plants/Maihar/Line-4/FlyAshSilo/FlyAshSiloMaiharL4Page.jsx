import {
  FlyAshSiloMaiharL4Nodes,
  FlyAshSiloMaiharL4NodesType,
} from "../../../../../reactflow";
import "./FlyAshSiloMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyAshSiloMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyAshSiloMaiharL4Nodes}
        nodeType={FlyAshSiloMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-1",
          section: "Fly Ash Silo",
          line: "4",
          extraTagDetails: [
            {
              Section: "General",
              Tags: ["CMH_K34FN1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
