import {
  TurbineTripLogickukurdihNodes,
  TurbineTripLogickukurdihNodesType,
} from "../../../../reactflow";
import "./TurbineTripLogickukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const TurbineTripLogickukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={TurbineTripLogickukurdihNodes}
        nodeType={TurbineTripLogickukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "WHRS",
          section: "WHRS",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
