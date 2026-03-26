import {
  AQCBoilerHPSystemKukurdihNodes,
  AQCBoilerHPSystemKukurdihNodesType,
} from "../../../../reactflow";
import "./AQCBoilerHPSystemKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const AQCBoilerHPSystemKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AQCBoilerHPSystemKukurdihNodes}
        nodeType={AQCBoilerHPSystemKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "WHRS",
          section: "WHRS",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill-1",
              Tags: ["RM1_361CV1_RUN"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
