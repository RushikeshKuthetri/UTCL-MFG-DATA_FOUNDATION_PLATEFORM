import "./CoalMillJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoalMillJafrabadNodes,
  CoalMillJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoalMillJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillJafrabadNodes}
        nodeType={CoalMillJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "PreHeater", //line 1
              Tags: [
                "462CN441_N01P01",
                "462CN441_N01P02",
                "462CN441_N01T01",
                "462CV445_M01I01",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
