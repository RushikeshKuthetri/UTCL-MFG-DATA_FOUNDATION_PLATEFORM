import {
  CoalFiringLine3Nodes,
  CoalFiringLine3NodesType,
} from "../../../../reactflow";
import "./CoalFiringLine3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalFiringLine3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalFiringLine3Nodes}
        nodeType={CoalFiringLine3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 3
              Tags: [
                "DE2_RF1A",
                "DE2CP",
                "DE2FAN",
                "DE2RF",
                "L60CP1",
                "L60FN1",
                "WT3002",
                "WT3003",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
