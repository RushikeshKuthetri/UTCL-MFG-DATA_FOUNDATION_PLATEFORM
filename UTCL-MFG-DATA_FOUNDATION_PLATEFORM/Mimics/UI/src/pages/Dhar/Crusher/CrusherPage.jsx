import { CrusherDharNodes, CrusherDharNodesType } from "../../../reactflow";
import "./CrusherPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CrusherPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherDharNodes}
        nodeType={CrusherDharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "Limestone Crusher Storage and Transport",
          section: "Crusher",
        }}
      />
    </ReactFlowProvider>
  );
};
