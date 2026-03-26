import {
  U3CrusherL3VasavdattaNodes,
  U3CrusherL3VasavdattaNodesType,
} from "../../../../../reactflow";
import "./U3CrusherL3VasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const U3CrusherL3VasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={U3CrusherL3VasavdattaNodes}
        nodeType={U3CrusherL3VasavdattaNodesType}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "vasavdatta",
          sectionName: "Crusher",
          section: "Crusher",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};
