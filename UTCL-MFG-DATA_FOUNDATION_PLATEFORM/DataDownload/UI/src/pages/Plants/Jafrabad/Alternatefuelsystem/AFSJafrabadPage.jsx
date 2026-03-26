import "./AFSJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  AFSJafrabadNodes,
  AFSJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const AFSJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AFSJafrabadNodes}
        nodeType={AFSJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "PreHeater",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cooler", //line 1
              Tags: ["261WF150_A01F11_SPA"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
