import {
  RawMill1RPAndraNodes,
  RawMill1RPAndraNodesType,
} from "../../../../reactflow";
import "./RawMill1RPAndraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill1RPAndraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1RPAndraNodes}
        nodeType={RawMill1RPAndraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Raw Mill",
          section: "Raw Mill-1 Main Drive and Gear Box Lubrication",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};
