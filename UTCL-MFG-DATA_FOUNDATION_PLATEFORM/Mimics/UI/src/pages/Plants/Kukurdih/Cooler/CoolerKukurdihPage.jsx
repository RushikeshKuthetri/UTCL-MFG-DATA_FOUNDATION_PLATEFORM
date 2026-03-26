import {
  CoolerkukurdihNodes,
  CoolerkukurdihNodesType,
} from "../../../../reactflow";
import "./CoolerKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerkukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerkukurdihNodes}
        nodeType={CoolerkukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
