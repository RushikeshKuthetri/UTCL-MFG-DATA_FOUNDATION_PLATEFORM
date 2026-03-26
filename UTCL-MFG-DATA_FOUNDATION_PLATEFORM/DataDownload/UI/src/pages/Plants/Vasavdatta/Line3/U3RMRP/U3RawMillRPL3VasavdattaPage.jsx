import {
  U3RawMillRPL3VasavdattaNodes,
  U3RawMillRPL3VasavdattaNodesTypes,
} from "../../../../../reactflow";
import "./U3RawMillRPL3VasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const U3RawMillRPL3VasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={U3RawMillRPL3VasavdattaNodes}
        nodeType={U3RawMillRPL3VasavdattaNodesTypes}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "vasavdatta",
          sectionName: "Cement Mill",
          section: "Raw Mill",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};
