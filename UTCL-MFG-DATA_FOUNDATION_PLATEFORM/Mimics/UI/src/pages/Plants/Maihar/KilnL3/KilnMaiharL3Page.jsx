import {
  KilnMaiharL3Nodes,
  KilnMaiharL3NodesType,
} from "../../../../reactflow";
import "./KilnMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnMaiharL3Nodes}
        nodeType={KilnMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 3
              Tags: ["SB2_FAN"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
