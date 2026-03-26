import {
  WagonTrpplerMaiharL3Nodes,
  WagonTrpplerMaiharL3NodesType,
} from "../../../../reactflow";
import "./WagonTrpplerMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const WagonTrpplerMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={WagonTrpplerMaiharL3Nodes}
        nodeType={WagonTrpplerMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 3
              Tags: ["WT6004"],
            },
            {
              Section: "Coal Mill", //line 3
              Tags: ["AS3002", "CA22", "CA23", "L20MS1", "WT3004", "WT3005"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
