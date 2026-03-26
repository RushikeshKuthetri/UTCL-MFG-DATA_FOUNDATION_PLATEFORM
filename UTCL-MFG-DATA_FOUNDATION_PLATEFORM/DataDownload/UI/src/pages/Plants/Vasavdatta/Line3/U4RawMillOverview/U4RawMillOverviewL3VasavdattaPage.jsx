import {
  U4RawMillOverviewL3VasavdattaNodes,
  U4RawMillOverviewL3VasavdattaNodesTypes,
} from "../../../../../reactflow";
import "./U4RawMillOverviewL3VasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const U4RawMillOverviewL3VasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={U4RawMillOverviewL3VasavdattaNodes}
        nodeType={U4RawMillOverviewL3VasavdattaNodesTypes}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "vasavdatta",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line:"4"
        }}
      />
    </ReactFlowProvider>
  );
};
