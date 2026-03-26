import { CoolerLine3Nodes, CoolerLine3NodesType } from "../../../../reactflow";
import "./CoolerLine3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerLine3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerLine3Nodes}
        nodeType={CoolerLine3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 3
              Tags: ["51_FEED_OPC"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
