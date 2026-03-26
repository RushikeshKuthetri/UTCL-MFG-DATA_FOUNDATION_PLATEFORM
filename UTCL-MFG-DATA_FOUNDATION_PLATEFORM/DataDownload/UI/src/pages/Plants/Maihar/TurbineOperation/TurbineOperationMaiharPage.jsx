import "./TurbineOperationMaiharPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  turbineoperationmaiharNodesType,
  turbineoperationmaiharnodes,
} from "../../../../reactflow";

export const TurbineOperationMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={turbineoperationmaiharnodes}
        nodeType={turbineoperationmaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Turbine Operation",
          section: "Turbine Operation",
        }}
      />
    </ReactFlowProvider>
  );
};
