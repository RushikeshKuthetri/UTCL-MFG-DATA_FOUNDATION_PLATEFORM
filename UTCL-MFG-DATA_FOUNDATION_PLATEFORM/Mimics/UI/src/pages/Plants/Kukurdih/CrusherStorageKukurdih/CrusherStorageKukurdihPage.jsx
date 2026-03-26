import {
  CrusherStorageKukurdihNodes,
  CrusherStorageKukurdihNodesType,
} from "../../../../reactflow";
import "./CrusherStorageKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CrusherStorageKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherStorageKukurdihNodes}
        nodeType={CrusherStorageKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: " Kukurdih",
          sectionName: "Crusher",
          section: "Crusher",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
