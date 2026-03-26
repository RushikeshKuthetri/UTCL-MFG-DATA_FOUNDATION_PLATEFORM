import "../../../../Plants/Vikram/WHRS/Turbine Supervisory/TurbineVikramWhrsPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";
import {
  TurbineVikramWhrsNodes,
  TurbineVikramWhrsNodesType,
} from "../../../../../reactflow";

export const TurbineVikramWhrsPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={TurbineVikramWhrsNodes}
        nodeType={TurbineVikramWhrsNodesType}
        plantDetails={{
          plantCode: "VCW",
          plantName: "Vikram",
          sectionName: "WHRS",
          section: "Turbine Supervisory",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
