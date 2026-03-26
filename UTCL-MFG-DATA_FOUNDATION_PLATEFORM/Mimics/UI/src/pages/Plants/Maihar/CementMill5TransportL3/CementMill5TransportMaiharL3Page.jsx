import {
  CementMill5TransportMaiharL3Nodes,
  CementMill5TransportMaiharL3NodesType,
} from "../../../../reactflow";
import "./CementMill5TransportMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill5TransportMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill5TransportMaiharL3Nodes}
        nodeType={CementMill5TransportMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-2",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 3
              Tags: ["VS5005"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
