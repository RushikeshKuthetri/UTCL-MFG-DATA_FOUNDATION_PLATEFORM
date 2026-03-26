import {
  RawMillGrindingMaiharLine3Nodes,
  RawMillGrindingMaiharLine3NodesType,
} from "../../../../reactflow";
import "./RawMillGrindingMaiharLine3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillGrindingMaiharLine3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillGrindingMaiharLine3Nodes}
        nodeType={RawMillGrindingMaiharLine3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Raw Mill",
          section: "",
          line: "3",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 3
              Tags: ["LT5004"],
            },
            {
              Section: "Coal Mill", //line 3
              Tags: ["RT3023"],
            },
            {
              Section: "Kiln", //line 3
              Tags: [
                "330BE3KW",
                "330BE4",
                "330BE4_CURRENT",
                "TT4021",
                "VS3501",
                "350LD1",
                "350SD1",
                "350LD2",
                "415SD1",
                "320SD2",
                "425LD1",
              ],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["41PT53","K1DBC1"],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["PACKER1","PACKER2","PACKER3","PACKER4"],
            },
            {
              Section: "Cooler", //line 1
              Tags: ["TEMP"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
