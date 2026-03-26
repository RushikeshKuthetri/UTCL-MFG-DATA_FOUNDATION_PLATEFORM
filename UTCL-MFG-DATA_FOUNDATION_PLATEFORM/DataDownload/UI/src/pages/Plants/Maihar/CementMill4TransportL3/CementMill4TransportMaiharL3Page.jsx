import {
  CementMill4TransportMaiharL3Nodes,
  CementMill4TransportMaiharL3NodesType,
} from "../../../../reactflow";
import "./CementMill4TransportMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMill4TransportMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill4TransportMaiharL3Nodes}
        nodeType={CementMill4TransportMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 3
              Tags: ["52BE4A", "52FN8", "KT6013", "LT6004", "LT6005", "LT6006"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
