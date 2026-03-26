import {
  RawMill2RPAndhraNodes,
  RawMill2RPAndhraNodesType,
} from "../../../../reactflow";
import "./RawMill2RPAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill2RPAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2RPAndhraNodes}
        nodeType={RawMill2RPAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Raw Mill-2",
          section: "Raw Mill-2 Main Drive and Gear Box Lubrication",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};
