import {
  cooler1maiharNodes,
  cooler1maiharNodesType,
} from "../../../../reactflow";
import "./Cooler1MaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Cooler1MaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cooler1maiharNodes}
        nodeType={cooler1maiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};
