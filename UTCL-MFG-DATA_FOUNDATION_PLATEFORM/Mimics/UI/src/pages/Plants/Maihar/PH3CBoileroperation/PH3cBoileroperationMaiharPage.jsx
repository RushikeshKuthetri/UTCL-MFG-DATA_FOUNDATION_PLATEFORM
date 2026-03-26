import {
  PH3cBoileroperationMaiharNodes,
  PH3cBoileroperationMaiharNodesType,
} from "../../../../reactflow";
import "./PH3cBoileroperationMaiharPage.scss";

import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PH3cBoileroperationMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PH3cBoileroperationMaiharNodes}
        nodeType={PH3cBoileroperationMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "PH3 c Boiler operation",
          section: "PH3 c Boiler operation",
        }}
      />
    </ReactFlowProvider>
  );
};
