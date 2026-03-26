import {
  AwarpurCBAMinesNodes,
  AwarpurCBAMinesNodesType,
} from "../../../../reactflow";
import "./AwarpurCBAMinesPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const AwarpurCBAMinesPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AwarpurCBAMinesNodes}
        nodeType={AwarpurCBAMinesNodesType}
        plantDetails={{
          plantCode: "ACW",
          plantName: "awarpur",
          sectionName: "Raw Mill",
          section: "CBA Mines",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
