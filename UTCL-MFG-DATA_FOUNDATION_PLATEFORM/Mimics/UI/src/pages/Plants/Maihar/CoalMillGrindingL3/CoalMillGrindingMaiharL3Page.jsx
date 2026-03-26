import {
  CoalMillGrindingMaiharL3Nodes,
  CoalMillGrindingMaiharL3NodesType,
} from "../../../../reactflow";
import "./CoalMillGrindingMaiharL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillGrindingMaiharL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillGrindingMaiharL3Nodes}
        nodeType={CoalMillGrindingMaiharL3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Coal Mill-1",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Kiln", //line 3
              Tags: ["LT3001", "OM4001A", "OM4002A", "PT3036"],
            },
            {
              Section: "Raw Mill", //line 3
              Tags: ["PT2006", "PT2007"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
