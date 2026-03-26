import {
  CSExtractionTransportPackersBagaNodes,
  CSExtractionTransportPackersBagaNodesType,
} from "../../../reactflow";
import "./CSExtractionTransportPackersBagaPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CSExtractionTransportPackersBagaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CSExtractionTransportPackersBagaNodes}
        nodeType={CSExtractionTransportPackersBagaNodesType}
        plantDetails={{
          plantCode: "BGCW",
          plantName: "Baga",
          sectionName: "Packing Plant",
          section: "Cement Silo Extractio Transport Packers Baga",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: ["611SB1_LT03", "611SB1_LT02", "611SB1_LT01"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
