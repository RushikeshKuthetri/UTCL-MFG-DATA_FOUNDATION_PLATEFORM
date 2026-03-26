import {
  VRMOperationMaiharNodes,
  VRMOperationMaiharNodesType,
} from "../../../../reactflow";
import "./VRMOperationMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const VRMOperationMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={VRMOperationMaiharNodes}
        nodeType={VRMOperationMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Raw Mill-1",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", //line 1
              Tags: ["426SD1_ZT"],
            },
            {
              Section: "Raw Mill-2", //line-1
              Tags: ["211BCF"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
