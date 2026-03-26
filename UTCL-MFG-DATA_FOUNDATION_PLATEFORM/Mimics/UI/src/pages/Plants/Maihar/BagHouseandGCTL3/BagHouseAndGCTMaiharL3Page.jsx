import {
  bagHouseAndGCTMaiharL3Nodes,
  bagHouseAndGCTMaiharL3NodesType,
} from "../../../../reactflow";
import "./BagHouseAndGCTMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BagHouseAndGCTMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={bagHouseAndGCTMaiharL3Nodes}
        nodeType={bagHouseAndGCTMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 3
              Tags: ["350FN1", "AS3501A", "KT3501"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
