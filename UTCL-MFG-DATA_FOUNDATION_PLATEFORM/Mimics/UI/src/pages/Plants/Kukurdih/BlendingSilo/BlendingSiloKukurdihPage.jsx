import {
  BlendingSiloKukurdihNodes,
  BlendingSiloKukurdihNodesType,
} from "../../../../reactflow";
import "./BlendingSiloKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BlendingSiloKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BlendingSiloKukurdihNodes}
        nodeType={BlendingSiloKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "PreHeater",
          section: "PreHeater",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill-1",
              Tags: ["RM1_361RP1_BIN_BIW", "RM1_361BE1_ZS1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
