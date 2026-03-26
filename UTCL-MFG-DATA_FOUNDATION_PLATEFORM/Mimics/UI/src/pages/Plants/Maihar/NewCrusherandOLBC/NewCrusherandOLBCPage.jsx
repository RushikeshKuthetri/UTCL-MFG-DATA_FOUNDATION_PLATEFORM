import {
  NewCrusherandOLBCNodes,
  NewCrusherandOLBCNodesType,
} from "../../../../reactflow";
import "./NewCrusherandOLBCPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const NewCrusherandOLBCPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={NewCrusherandOLBCNodes}
        nodeType={NewCrusherandOLBCNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Crusher",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 3
              Tags: ["LV2001"],
            },
            {
              Section: "Crusher", //line 1
              Tags: ["LT1002_M", "OLBC_BW_TPH_M1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
