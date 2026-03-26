import {
  PH3kBoileroperationMaiharNodes,
  PH3kBoileroperationMaiharNodesType,
} from "../../../../reactflow";
import "./PH3kBoileroperationMaiharPage.scss";

import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PH3kBoileroperationMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PH3kBoileroperationMaiharNodes}
        nodeType={PH3kBoileroperationMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "PH3 k Boiler operation",
          section: "PH3 k Boiler operation",
        }}
      />
    </ReactFlowProvider>
  );
};
